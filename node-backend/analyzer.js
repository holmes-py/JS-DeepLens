// File: node-backend/analyzer.js
// Performs Regex analysis and provides separate function for AST analysis.

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import * as acorn from 'acorn'; // For AST
import { simple as simpleWalk } from 'acorn-walk'; // For AST walk

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const patternsDir = path.join(__dirname, 'patterns');
const MAX_MATCH_LENGTH = 300;

// --- Helper Functions (used by AST) ---
function isPotentiallySensitiveName(name) { if (!name || typeof name !== 'string') return false; const l = name.toLowerCase(); const k = ['secret', 'password', 'token', 'apikey', 'api_key', 'auth', 'private', 'key', 'credential', 'pass', 'jwt']; return k.some(w => l.includes(w)); }
function looksLikePathOrEndpoint(str) { if (!str || typeof str !== 'string' || str.length < 2) return false; return str.startsWith('/') || str.startsWith('./') || str.startsWith('../') || str.includes('/api/') || /\/v[1-9][0-9]*\//.test(str) || (str.includes('/') && !str.includes(' ') && !str.startsWith('data:')); }
function resolveUrl(pathString, baseUrl) { try { return new URL(pathString, baseUrl).toString(); } catch (e) { return pathString; } }

// --- Pattern Loading / Listing --- (Same as before)
export async function listAvailablePatterns() { try { const a = await fs.readdir(patternsDir); return a.filter(f => f.endsWith('.json') && !f.startsWith('.')); } catch (e) { if (e.code === 'ENOENT') { try { await fs.mkdir(patternsDir, { recursive: true }); } catch (m) {} } else { console.error(`Err list patterns:`, e); } return []; } }
export async function loadPatterns(selectedFiles = null) { const loaded = {}; let files = []; try { const available = await listAvailablePatterns(); files = (selectedFiles && Array.isArray(selectedFiles) && selectedFiles.length > 0) ? available.filter(f => selectedFiles.includes(f)) : available; if (files.length === 0) { console.warn("No pattern files to load."); return {}; }
    for (const file of files) { const fp = path.join(patternsDir, file); try { const fc = await fs.readFile(fp, 'utf-8'); const pj = JSON.parse(fc); if (Array.isArray(pj.patterns)) { const vr = pj.patterns.filter(p => typeof p === 'string' && p.length > 0); if (vr.length > 0) loaded[file] = { flags: pj.flags || '', regexStrings: vr }; } else if (typeof pj.pattern === 'string' && pj.pattern.length > 0) { loaded[file] = { flags: pj.flags || '', regexStrings: [pj.pattern] }; } } catch (e) { console.error(`Err process pattern ${file}:`, e.message); } } } catch (e) { console.error(`Err loading patterns:`, e); return {}; } return loaded; }


/**
 * Analyzes JavaScript code using ONLY the loaded RegEx patterns.
 * @param {string} jsCode - The JavaScript code content.
 * @param {string} sourceUrl - The URL from where the JS code was loaded.
 * @param {object} loadedPatterns - The regex patterns object.
 * @returns {Array<object>} An array of finding objects (type 'regex_match').
 */
export function analyzeCodeWithRegex(jsCode, sourceUrl, loadedPatterns) {
    const findings = [];
    if (loadedPatterns && Object.keys(loadedPatterns).length > 0) {
        for (const [fileName, patternSet] of Object.entries(loadedPatterns)) {
            if (!Array.isArray(patternSet.regexStrings)) continue;
            const regexFlags = (patternSet.flags || '').includes('i') ? 'gi' : 'g';
            for (const regexString of patternSet.regexStrings) {
                if (!regexString) continue;
                try {
                    const regex = new RegExp(regexString, regexFlags);
                    const codeAsString = String(jsCode || '');
                    const matches = codeAsString.matchAll(regex);
                    for (const match of matches) {
                        const matchedText = match[0].length > MAX_MATCH_LENGTH
                            ? match[0].substring(0, MAX_MATCH_LENGTH - 3) + '...'
                            : match[0];
                        findings.push({
                            type: 'regex_match', // Only type from this function
                            sourceFile: fileName,
                            pattern: regexString,
                            match: matchedText,
                            sourceUrl: sourceUrl
                        });
                    }
                } catch (regexError) {
                    console.warn(`Invalid regex "${regexString}" in ${fileName}: ${regexError.message}`);
                }
            }
        }
    } else {
        // console.warn("No regex patterns loaded for analysis."); // Reduce noise
    }
    return findings;
}


/**
 * Performs ONLY AST analysis on JavaScript code.
 * @param {string} jsCode - The JavaScript code content.
 * @param {string} sourceUrl - The URL from where the JS code was loaded.
 * @returns {Array<object>} An array of finding objects (type 'ast_*' or 'error_parse').
 */
export function analyzeCodeWithAST(jsCode, sourceUrl) {
    const findings = [];
    let ast;
    let astParseError = null;

    try {
        ast = acorn.parse(jsCode, { ecmaVersion: 'latest', sourceType: 'module', locations: true, allowReserved: true, allowReturnOutsideFunction: true, allowImportExportEverywhere: true, allowAwaitOutsideFunction: true });
    } catch (parseError) {
        astParseError = parseError.message;
        ast = null;
        console.warn(`[${sourceUrl.substring(0, 60)}...] Failed AST parse: ${astParseError}`);
        findings.push({ type: 'error_parse', sourceFile: 'AST Parser', pattern: 'SyntaxError', match: astParseError.substring(0, MAX_MATCH_LENGTH), sourceUrl: sourceUrl });
    }

    if (ast) {
        try {
            simpleWalk(ast, {
                Literal(node) { /* ... (same literal checking logic as before) ... */
                    if (node.value && typeof node.value === 'string' && node.value.trim().length > 4) { const v=node.value.trim(); let t=null, info=v; if (looksLikePathOrEndpoint(v)) { t='ast_endpoint_literal'; info=resolveUrl(v, sourceUrl); } else if ((v.length > 12 && !v.includes(' ') && /\w{8,}/.test(v)) || isPotentiallySensitiveName(v.substring(0,30))) { t='ast_secret_literal'; } if (t) { const m = info.length > MAX_MATCH_LENGTH ? info.substring(0,MAX_MATCH_LENGTH-3)+'...' : info; findings.push({ type: t, sourceFile: `AST:Literal@L${node.loc?.start?.line||'?'}`, pattern: v.substring(0,50)+(v.length>50?'...':''), match: m, sourceUrl: sourceUrl }); } }
                },
                VariableDeclarator(node) { /* ... (same variable check) ... */
                    if (node.id?.type === 'Identifier' && isPotentiallySensitiveName(node.id.name) && node.init?.type === 'Literal' && typeof node.init.value === 'string' && node.init.value.length > 3) { const m=node.init.value.length>MAX_MATCH_LENGTH ? node.init.value.substring(0,MAX_MATCH_LENGTH-3)+'...' : node.init.value; findings.push({ type: 'ast_variable_assign', sourceFile: `AST:Var@L${node.loc?.start?.line||'?'}`, pattern: `var ${node.id.name}=...`, match: m, sourceUrl: sourceUrl }); }
                },
                AssignmentExpression(node){ /* ... (same assignment check) ... */
                    let n=null; if(node.left.type==='MemberExpression'&&node.left.property?.type==='Identifier')n=node.left.property.name; else if(node.left.type==='Identifier')n=node.left.name; if(n && isPotentiallySensitiveName(n) && node.right.type==='Literal' && typeof node.right.value==='string' && node.right.value.length > 3) { const m = node.right.value.length>MAX_MATCH_LENGTH ? node.right.value.substring(0, MAX_MATCH_LENGTH-3)+'...' : node.right.value; findings.push({ type: 'ast_assignment', sourceFile: `AST:Assign@L${node.loc?.start?.line||'?'}`, pattern: `${n}=...`, match: m, sourceUrl: sourceUrl }); }
                },
                CallExpression(node) { /* ... (same API call check) ... */
                    let fn=null; if(node.callee.type==='Identifier')fn=node.callee.name; else if(node.callee.type==='MemberExpression'&&node.callee.property?.type==='Identifier')fn=node.callee.property.name; if(fn && ['fetch','get','post','put','delete','ajax','open','send','request'].includes(fn.toLowerCase())) { for(const arg of node.arguments) { if(arg.type==='Literal' && typeof arg.value==='string' && arg.value.length > 1){ const p = arg.value; if(looksLikePathOrEndpoint(p)){ const resUrl = resolveUrl(p, sourceUrl); const m = resUrl.length>MAX_MATCH_LENGTH ? resUrl.substring(0, MAX_MATCH_LENGTH-3)+'...' : resUrl; findings.push({ type: 'ast_api_call', sourceFile: `AST:Call@L${node.loc?.start?.line||'?'}`, pattern: `${fn}("${p.substring(0,50)}${p.length>50?'...':''}")`, match: m, sourceUrl: sourceUrl }); break; } } } }
                }
            });
        } catch (walkError) { console.error(`[${sourceUrl.substring(0, 60)}...] AST walk error: ${walkError.message}`); }
    }

    return findings;
}
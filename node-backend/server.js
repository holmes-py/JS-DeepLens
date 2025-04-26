// File: node-backend/server.js
// Final Version: Added missing calculateDbStats function definition

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs/promises';
import http from 'http';
import { Server } from 'socket.io';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import crypto from 'crypto';
import { loadPatterns, analyzeCodeWithRegex, analyzeCodeWithAST, listAvailablePatterns } from './analyzer.js';
// Import the updated LLM functions
import { isLLMEnabled, analyzeJSContentWithLLM, generateDefaultPrompt } from './llm_analyzer.js';

// --- Args & Config ---
const argv = yargs(hideBin(process.argv)).option('project', { alias: 'p', type: 'string', default: 'default' }).help().argv;
const projectName = argv.project.replace(/[^a-zA-Z0-9_\-\.]/g, '_');
if (projectName !== argv.project) console.warn(`Sanitized project name: ${projectName}`);
console.log(`Starting project: ${projectName}`);

const PORT = 3000;
const PUBLIC_DIR = './public';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Project-specific directory structure ---
const PROJECTS_BASE_DIR = './projects';
const PROJECT_ROOT_DIR = path.join(PROJECTS_BASE_DIR, projectName);
const DB_FILE = path.join(PROJECT_ROOT_DIR, 'database.db');
const PROJECT_JS_DIR = path.join(PROJECT_ROOT_DIR, 'js_files');

// --- In-memory State ---
let requestsProcessedByExtension = 0;
let jsFilesReceivedForAnalysis = 0;
let totalAnalyzedScripts = 0; // Total in DB
let totalInScopeScripts = 0; // Total matching current scope
let loadedPatterns = {};
let currentIncludeRegexStrings = [];
let currentExcludeRegexStrings = [];
let currentIncludeRegexes = [];
let currentExcludeRegexes = [];
let selectedPatternFiles = [];
let isRescanRunning = false;

const sourceMapRegex = /\/\/[#@]\s*sourceMappingURL=\S+/;

// --- Directory Setup ---
async function ensureDirs() { try { await fs.mkdir(PROJECT_ROOT_DIR, { recursive: true }); await fs.mkdir(PROJECT_JS_DIR, { recursive: true }); await fs.mkdir(PUBLIC_DIR, { recursive: true }); console.log(`Project directories ensured: ${PROJECT_ROOT_DIR}`); } catch (err) { if (err.code !== 'EEXIST') { console.error('Error creating directories:', err); process.exit(1); } } }

// --- Database Setup ---
let db;
async function setupDatabase(dbPath) { try { db = await open({ filename: dbPath, driver: sqlite3.Database }); await db.exec(`PRAGMA journal_mode = WAL;`); await db.exec(` CREATE TABLE IF NOT EXISTS analyzed_scripts ( id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT NOT NULL, content_hash TEXT NOT NULL UNIQUE, analysis_summary TEXT, has_sourcemap BOOLEAN DEFAULT 0, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, last_analyzed_ts DATETIME ); `); try { await db.exec(`ALTER TABLE analyzed_scripts ADD COLUMN has_sourcemap BOOLEAN DEFAULT 0`); console.log("Added 'has_sourcemap' column."); } catch (alterError) { if (!alterError.message.includes('duplicate column name')) { console.warn("Could not add has_sourcemap column:", alterError.message); } } await db.exec(`CREATE INDEX IF NOT EXISTS idx_scripts_url ON analyzed_scripts (url);`); await db.exec(`CREATE INDEX IF NOT EXISTS idx_scripts_hash ON analyzed_scripts (content_hash);`); await db.exec(`CREATE TABLE IF NOT EXISTS project_config ( key TEXT PRIMARY KEY, value TEXT );`); console.log(`Database OK: ${dbPath}. Schema ensured.`); await loadConfigAndCounts(); } catch (e) { console.error(`DB init error ${dbPath}:`, e); process.exit(1); } }

// --- Helper Functions ---
async function getAnalyzedScriptDetails(scriptId) { if (!db) return null; try { const script = await db.get('SELECT id, url, content_hash, analysis_summary, timestamp, has_sourcemap FROM analyzed_scripts WHERE id = ?', scriptId); return script; } catch (e) { console.error(`Error fetch script ID ${scriptId}:`, e); return null; } }
async function getConfig(key, dVal = null) { try { const r = await db.get('SELECT value FROM project_config WHERE key = ?', key); return r ? r.value : dVal; } catch (e) { console.error(`GetCfg(${key}):`, e); return dVal; } }
async function setConfig(key, val) { try { if (typeof val !== 'string') val = JSON.stringify(val); await db.run('INSERT OR REPLACE INTO project_config (key, value) VALUES (?, ?)', key, val); } catch (e) { console.error(`SetCfg(${key}):`, e); throw e; } }

// *** ADDED: Function definition for calculateDbStats ***
async function calculateDbStats() {
    if (!db) return { total: 0, inScope: 0 };
    try {
        const totalResult = await db.get('SELECT COUNT(*) as c FROM analyzed_scripts');
        const currentTotal = totalResult?.c || 0;

        // For in-scope count, fetch all URLs and filter using JS regex
        const allScripts = await db.all('SELECT url FROM analyzed_scripts');
        const currentInScope = allScripts.filter(script => isUrlInServerScope(script.url)).length;

        // Update global state
        totalAnalyzedScripts = currentTotal;
        totalInScopeScripts = currentInScope;

        return { total: currentTotal, inScope: currentInScope };
    } catch (err) {
        console.error("Error calculating DB stats:", err);
        // Return potentially stale values on error
        return { total: totalAnalyzedScripts, inScope: totalInScopeScripts };
    }
}

async function loadConfigAndCounts() { try { const includeJson = await getConfig('scope_include_list', '[]'); const excludeJson = await getConfig('scope_exclude_list', '[]'); try { currentIncludeRegexStrings = JSON.parse(includeJson); if (!Array.isArray(currentIncludeRegexStrings)) currentIncludeRegexStrings = []; } catch { currentIncludeRegexStrings = []; } try { currentExcludeRegexStrings = JSON.parse(excludeJson); if (!Array.isArray(currentExcludeRegexStrings)) currentExcludeRegexStrings = []; } catch { currentExcludeRegexStrings = []; } updateScopeRegex(); await calculateDbStats(); console.log(`Total Scripts DB: ${totalAnalyzedScripts}, In Scope: ${totalInScopeScripts}`); const patternsJson = await getConfig('selected_patterns', '[]'); try { selectedPatternFiles = JSON.parse(patternsJson); if (!Array.isArray(selectedPatternFiles)) selectedPatternFiles = []; } catch { selectedPatternFiles = []; } console.log(`Selected patterns: ${selectedPatternFiles.length > 0 ? selectedPatternFiles.join(', ') : '(None)'}`); await reloadPatterns(); } catch (e) { console.error("Err load config/counts:", e); currentIncludeRegexStrings=[]; currentExcludeRegexStrings=[]; updateScopeRegex(); selectedPatternFiles=[]; totalAnalyzedScripts=0; totalInScopeScripts=0; } }
function updateScopeRegex() { currentIncludeRegexes = []; currentExcludeRegexes = []; currentIncludeRegexStrings.forEach(p => { try { if (p) currentIncludeRegexes.push(new RegExp(p)); } catch (e) { console.warn(`Invalid include regex: ${p}`) } }); currentExcludeRegexStrings.forEach(p => { try { if (p) currentExcludeRegexes.push(new RegExp(p)); } catch (e) { console.warn(`Invalid exclude regex: ${p}`) } }); console.log(`Scope loaded: ${currentIncludeRegexes.length} include, ${currentExcludeRegexes.length} exclude regexes.`); }
function isUrlInServerScope(url) { if (!url) return false; const included = currentIncludeRegexes.length === 0 ? true : currentIncludeRegexes.some(r => r.test(url)); if (!included) return false; const excluded = currentExcludeRegexes.some(r => r.test(url)); return !excluded; }
async function reloadPatterns() { try { loadedPatterns = selectedPatternFiles.length > 0 ? await loadPatterns(selectedPatternFiles) : {}; console.log(`Patterns loaded: ${Object.keys(loadedPatterns).length} files.`); } catch (e) { console.error('Err reload patterns:', e); loadedPatterns = {}; } }
function calculateHash(content) { return crypto.createHash('sha1').update(content || '').digest('hex'); }

// --- Express App & Server ---
const app = express(); const server = http.createServer(app); const io = new Server(server);
app.set('view engine', 'ejs'); app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));

// --- Socket.IO ---
io.on('connection', (socket) => { console.log('Client connected:', socket.id); socket.emit('project_info', { projectName }); socket.emit('stats_update', { requestsProcessedByExtension, jsFilesReceivedForAnalysis, totalFindings: totalAnalyzedScripts, totalInScope: totalInScopeScripts }); socket.on('disconnect', () => { console.log('Client disconnected:', socket.id); }); });
// Emit stats, updating counts from DB
async function emitStats(forceUpdateCount = true) { // Default to true now
    let statsToSend = { requestsProcessedByExtension, jsFilesReceivedForAnalysis, totalFindings: totalAnalyzedScripts, totalInScope: totalInScopeScripts };
    if (forceUpdateCount && db) { try { const { total, inScope } = await calculateDbStats(); statsToSend.totalFindings = total; statsToSend.totalInScope = inScope; } catch(err) { console.error("Error updating stats from DB:", err); } }
    io.emit('stats_update', statsToSend);
}

// --- API Routes ---
app.get('/api/config/scope', (req, res) => res.json({ includeList: currentIncludeRegexStrings, excludeList: currentExcludeRegexStrings }));
app.post('/api/config/scope', async (req, res) => { try { const { includeList, excludeList } = req.body; if (!Array.isArray(includeList) || !Array.isArray(excludeList) || !includeList.every(i => typeof i === 'string') || !excludeList.every(i => typeof i === 'string')) { return res.status(400).json({ success: false, message: 'Invalid format.' }); } for (const p of includeList) { try { if (p) new RegExp(p); } catch (e) { return res.status(400).json({ success: false, message: `Invalid Include: ${p} - ${e.message}` }); } } for (const p of excludeList) { try { if (p) new RegExp(p); } catch (e) { return res.status(400).json({ success: false, message: `Invalid Exclude: ${p} - ${e.message}` }); } } currentIncludeRegexStrings = includeList; currentExcludeRegexStrings = excludeList; await setConfig('scope_include_list', JSON.stringify(currentIncludeRegexStrings)); await setConfig('scope_exclude_list', JSON.stringify(currentExcludeRegexStrings)); updateScopeRegex(); await emitStats(true); console.log("Scope updated & Stats refreshed."); res.json({ success: true, message: "Scope saved." }); } catch (e) { console.error("Err save scope:", e); res.status(500).json({ success: false, message: `Save fail: ${e.message}` }); } });
app.get('/api/patterns/available', async (req, res) => { const a = await listAvailablePatterns(); res.json({ availableFiles: a }); });
app.get('/api/patterns/selected', (req, res) => res.json({ selectedFiles: selectedPatternFiles }));
app.post('/api/patterns/selected', async (req, res) => { try { const { selectedFiles } = req.body; if (!Array.isArray(selectedFiles) || !selectedFiles.every(i => typeof i === 'string')) { return res.status(400).json({ success: false, message: 'Invalid format.' }); } selectedPatternFiles = selectedFiles; await setConfig('selected_patterns', JSON.stringify(selectedPatternFiles)); await reloadPatterns(); console.log("Patterns updated."); res.json({ success: true, message: "Saved." }); } catch (e) { console.error("Err save patterns:", e); res.status(500).json({ success: false, message: `Save fail: ${e.message}` }); } });
async function getScriptContentForAnalysis(scriptId) { const scriptDetails = await getAnalyzedScriptDetails(scriptId); if (!scriptDetails) throw new Error("Script record not found."); if (!scriptDetails.content_hash) throw new Error("No content hash."); const jsFilePath = path.join(PROJECT_JS_DIR, `${scriptDetails.content_hash}.js`); try { const content = await fs.readFile(jsFilePath, 'utf-8'); return { scriptDetails, content }; } catch (readErr) { console.error(`LLM/AST: Failed read JS ${scriptDetails.content_hash}: ${readErr.message}`); throw new Error("Failed read associated JS content."); } }
app.get('/api/llm-prompt/:scriptId', async (req, res) => { if (!isLLMEnabled) return res.status(503).json({ success: false, message: "LLM disabled." }); const idNum = parseInt(req.params.scriptId); if (isNaN(idNum)) return res.status(400).json({ success: false, message: "Invalid ID." }); try { const { scriptDetails, content } = await getScriptContentForAnalysis(idNum); const defaultPrompt = generateDefaultPrompt(content, scriptDetails.url, 'N/A', 'N/A'); res.json({ success: true, defaultPrompt: defaultPrompt }); } catch (e) { console.error(`Err LLM prompt ${idNum}:`, e); res.status(e.message.includes("not found") ? 404 : 500).json({ success: false, message: `Prompt gen fail: ${e.message}` }); } });
app.post('/api/analyze-llm/:scriptId', async (req, res) => { if (!isLLMEnabled) return res.status(503).json({ success: false, message: "LLM disabled." }); const idNum = parseInt(req.params.scriptId); const { customPrompt } = req.body; if (isNaN(idNum)) return res.status(400).json({ success: false, message: "Invalid ID." }); try { const { scriptDetails, content } = await getScriptContentForAnalysis(idNum); const opts = { jsContent: content, contextUrl: scriptDetails.url, findingType: 'Full Script', pattern: null, customPrompt: customPrompt, astContext: null }; const result = await analyzeJSContentWithLLM(opts); res.json({ success: true, analysis: result }); } catch (e) { console.error(`LLM single err ${idNum}:`, e); res.status(e.message.includes("not found") ? 404 : 500).json({ success: false, message: `LLM fail: ${e.message}` }); } });
app.post('/api/analyze-js-ast-llm/:scriptId', async (req, res) => { if (!isLLMEnabled) return res.status(503).json({ success: false, message: "LLM disabled." }); const idNum = parseInt(req.params.scriptId); if (isNaN(idNum)) return res.status(400).json({ success: false, message: "Invalid ID." }); try { const { scriptDetails, content } = await getScriptContentForAnalysis(idNum); console.log(`[LLM+AST] AST ${idNum}...`); const astFindings = analyzeCodeWithAST(content, scriptDetails.url); let astContext = astFindings.length > 0 ? "AST found:\n" + astFindings.map(f => `- Type: ${f.type}, Src: ${f.sourceFile}, Det: ${f.pattern?.substring(0,50)||"N/A"}, Match: ${f.match?.substring(0,100)||"N/A"}`).join('\n') : "AST found no items."; const opts = { jsContent: content, contextUrl: scriptDetails.url, findingType: 'Full Script + AST', pattern: null, customPrompt: null, astContext: astContext }; const result = await analyzeJSContentWithLLM(opts); res.json({ success: true, analysis: result }); } catch (e) { console.error(`LLM w/AST err ${idNum}:`, e); res.status(e.message.includes("not found") ? 404 : 500).json({ success: false, message: `LLM+AST fail: ${e.message}` }); } });
app.post('/api/analyze-llm-batch', async (req, res) => { if (!isLLMEnabled) return res.status(503).json({ success: false, message: "LLM disabled." }); const { findingIds } = req.body; if (!Array.isArray(findingIds) || findingIds.some(id => isNaN(parseInt(id)))) return res.status(400).json({ success: false, message: "Invalid payload" }); if (findingIds.length === 0) return res.json({ success: true, results: [] }); if (findingIds.length > 10) return res.status(400).json({ success: false, message: "Batch max 10." }); console.log(`LLM batch ${findingIds.length}...`); try { const promises = findingIds.map(async (id) => { const idNum = parseInt(id); try { const { scriptDetails, content } = await getScriptContentForAnalysis(idNum); const result = await analyzeJSContentWithLLM({ jsContent: content, contextUrl: scriptDetails.url, findingType: 'Full Script Batch', pattern: null }); return { findingId: id, success: true, analysis: result }; } catch (e) { return { findingId: id, success: false, analysis: `LLM/Fetch Err: ${e.message}` }; } }); const settledResults = await Promise.allSettled(promises); const finalResults = settledResults.map((result, index) => result.status === 'fulfilled' ? result.value : { findingId: findingIds[index], success: false, analysis: `Batch Err: ${result.reason?.message || result.reason}` }); console.log(`LLM batch done.`); res.json({ success: true, results: finalResults }); } catch (e) { console.error("LLM batch prep err:", e); res.status(500).json({ success: false, message: `Batch fail: ${e.message}` }); } });
app.post('/api/analyze-ast/:scriptId', async (req, res) => { const idNum = parseInt(req.params.scriptId); if (isNaN(idNum)) return res.status(400).json({ success: false, message: "Invalid ID." }); try { const { scriptDetails, content } = await getScriptContentForAnalysis(idNum); console.log(`[AST] ${idNum}...`); const astFindings = analyzeCodeWithAST(content, scriptDetails.url); console.log(` -> ${astFindings.length} AST matches.`); res.json({ success: true, astFindings: astFindings }); } catch (e) { console.error(`AST err ${idNum}:`, e); res.status(e.message.includes("not found") ? 404 : 500).json({ success: false, message: `AST fail: ${e.message}` }); } });
app.get('/api/script/:contentHash', async (req, res) => { const contentHash = req.params.contentHash; if (!contentHash || !/^[a-f0-9]{40}$/i.test(contentHash)) { return res.status(400).send('Invalid hash.'); } const filePath = path.join(PROJECT_JS_DIR, `${contentHash}.js`); try { await fs.access(filePath, fs.constants.R_OK); const content = await fs.readFile(filePath, 'utf-8'); res.setHeader('Content-Type', 'text/javascript; charset=utf-8'); res.send(content); } catch (e) { if (e.code === 'ENOENT') { res.status(404).send('/* Not found. */'); } else { console.error(`Err reading ${filePath}:`, e); res.status(500).send('/* Error. */'); } } });
app.get('/api/findings', async (req, res) => { const limit = parseInt(req.query.limit) || 50; const offset = parseInt(req.query.offset) || 0; const fetchLimit = limit + 50; if (limit < 1 || offset < 0) return res.status(400).json({ message: "Invalid limit/offset." }); try { let query = 'SELECT id, url, content_hash, analysis_summary, timestamp, has_sourcemap FROM analyzed_scripts ORDER BY id DESC LIMIT ? OFFSET ?'; const initialBatch = await db.all(query, [fetchLimit, offset]); const filteredScripts = initialBatch.filter(script => isUrlInServerScope(script.url)); const finalScripts = filteredScripts.slice(0, limit); let hasMore = false; if (finalScripts.length === limit && initialBatch.length === fetchLimit) { const checkMoreQuery = 'SELECT 1 FROM analyzed_scripts WHERE id < ? LIMIT 1'; const lastIdInBatch = initialBatch.length > 0 ? initialBatch[initialBatch.length - 1].id : 0; if (lastIdInBatch > 0) { const moreCheck = await db.get(checkMoreQuery, [lastIdInBatch]); if (moreCheck) { hasMore = true; } } } const results = finalScripts.map(script => { try { return { ...script, analysis_summary: JSON.parse(script.analysis_summary || '[]'), has_sourcemap: !!script.has_sourcemap }; } catch (e) { return {...script, analysis_summary: [], has_sourcemap: !!script.has_sourcemap}; } }); res.json({ findings: results.reverse(), hasMore: hasMore }); } catch (error) { console.error("Err fetch analyzed scripts:", error); res.status(500).json({ message: "Failed fetch." }); } });

// --- Core Processing Routes ---
app.post('/log', (req, res) => { requestsProcessedByExtension++; emitStats(); res.status(200).json({ success: true }); });
app.post('/analyze', async (req, res) => { const { url, content } = req.body; jsFilesReceivedForAnalysis++; if (!url || typeof content !== 'string') { emitStats(); return res.status(400).json({ success: false, message: 'Missing URL/content.' }); } let contentHash = null; let findings = []; const now = new Date().toISOString(); try { contentHash = calculateHash(content); const existing = await db.get('SELECT id FROM analyzed_scripts WHERE content_hash = ?', contentHash); if (existing) { console.log(`Skipping analysis: ${contentHash} already processed.`); emitStats(); return res.status(200).json({ success: true, findings_count: 0, message: "Content processed." }); } const foundSourceMap = sourceMapRegex.test(content); if(foundSourceMap) console.log(` -> SourceMap detected in ${url}`); const jsFilePath = path.join(PROJECT_JS_DIR, `${contentHash}.js`); try { await fs.writeFile(jsFilePath, content, 'utf-8'); console.log(` -> Saved JS (${(content.length / 1024).toFixed(1)}kb) ${contentHash}`); } catch (writeError) { console.error(`Err save JS ${jsFilePath}:`, writeError); return res.status(500).json({ success: false, message: `Failed save JS: ${writeError.message}` }); } if (Object.keys(loadedPatterns).length > 0) { const rawFindings = analyzeCodeWithRegex(content, url, loadedPatterns); findings = rawFindings.map(f => ({ sf: f.sourceFile, p: f.pattern, m: f.match })); } const analysisSummaryJson = JSON.stringify(findings); const result = await db.run('INSERT INTO analyzed_scripts (url, content_hash, analysis_summary, has_sourcemap, timestamp, last_analyzed_ts) VALUES (?, ?, ?, ?, ?, ?)', url, contentHash, analysisSummaryJson, foundSourceMap ? 1 : 0, now, now); const newId = result.lastID; emitStats(true); io.emit('new_finding', { id: newId, url: url, content_hash: contentHash, analysis_summary: findings, has_sourcemap: foundSourceMap, timestamp: now }); res.status(200).json({ success: true, findings_count: findings.length }); } catch (error) { console.error(`Analyze Err ${url}:`, error); emitStats(); res.status(500).json({ success: false, message: `Analyze/DB err: ${error.message}` }); } });

// --- Re-scan Endpoint & Logic ---
app.post('/api/rescan', async (req, res) => { if (isRescanRunning) { return res.status(409).json({ success: false, message: "Re-scan already in progress." }); } isRescanRunning = true; console.log("[Rescan] Starting..."); res.json({ success: true, message: "Re-scan process initiated." }); runFullRescan().catch(err => { console.error("[Rescan] Critical error:", err); io.emit('rescan_complete', { status: 'error', message: `Critical error: ${err.message}` }); }).finally(() => { isRescanRunning = false; console.log("[Rescan] Background flag reset."); }); });
async function runFullRescan() { let processedCount = 0; let totalFiles = 0; let errorOccurred = false; const startTime = Date.now(); try { const currentPatterns = { ...loadedPatterns }; const checkSourceMaps = true; console.log(`[Rescan] Using ${Object.keys(currentPatterns).length} pattern files.`); const hashes = await db.all(`SELECT content_hash, url, id FROM analyzed_scripts WHERE content_hash IS NOT NULL`); totalFiles = hashes.length; console.log(`[Rescan] Found ${totalFiles} hashes.`); if (totalFiles === 0) { io.emit('rescan_complete', { status: 'success', message: 'No content found.' }); return; } io.emit('rescan_progress', { processed: 0, total: totalFiles }); for (const row of hashes) { const contentHash = row.content_hash; const url = row.url; const scriptId = row.id; const jsFilePath = path.join(PROJECT_JS_DIR, `${contentHash}.js`); let jsContent = ''; try { jsContent = await fs.readFile(jsFilePath, 'utf-8'); const foundSourceMap = checkSourceMaps ? sourceMapRegex.test(jsContent) : false; let findings = []; if (Object.keys(currentPatterns).length > 0) { const rawFindings = analyzeCodeWithRegex(jsContent, url, currentPatterns); findings = rawFindings.map(f => ({ sf: f.sourceFile, p: f.pattern, m: f.match })); } const analysisSummaryJson = JSON.stringify(findings); const now = new Date().toISOString(); await db.run( `UPDATE analyzed_scripts SET analysis_summary = ?, has_sourcemap = ?, last_analyzed_ts = ? WHERE id = ?`, analysisSummaryJson, foundSourceMap ? 1 : 0, now, scriptId ); } catch (fileOrDbError) { console.error(`[Rescan] Error ${contentHash} (ID: ${scriptId}):`, fileOrDbError); errorOccurred = true; } processedCount++; if (processedCount % 10 === 0 || processedCount === totalFiles) { io.emit('rescan_progress', { processed: processedCount, total: totalFiles }); } await new Promise(resolve => setTimeout(resolve, 5)); } emitStats(true); const duration = ((Date.now() - startTime) / 1000).toFixed(1); const finalMessage = `Re-scan ${errorOccurred ? 'completed with errors' : 'completed'} in ${duration}s. Processed ${processedCount}/${totalFiles} files. Reload page.`; console.log(`[Rescan] ${finalMessage}`); io.emit('rescan_complete', { status: errorOccurred ? 'error' : 'success', message: finalMessage + (errorOccurred ? ' Check logs.' : '') }); } catch (err) { console.error("[Rescan] General error:", err); io.emit('rescan_complete', { status: 'error', message: `Re-scan failed: ${err.message}` }); } finally { isRescanRunning = false; } }

// --- Dashboard Route ---
app.get('/', async (req, res) => { try { const initialLimit = 50; const fetchLimit = initialLimit + 50; let query = 'SELECT id, url, content_hash, analysis_summary, timestamp, has_sourcemap FROM analyzed_scripts ORDER BY id DESC LIMIT ? OFFSET 0'; const initialBatch = await db.all(query, [fetchLimit]); const filteredScripts = initialBatch.filter(script => isUrlInServerScope(script.url)); const initialScripts = filteredScripts.slice(0, initialLimit); const currentStats = await calculateDbStats(); const hasMoreInitially = (0 + initialScripts.length) < currentStats.inScope; const initialData = initialScripts.map(script => { try { return { ...script, analysis_summary: JSON.parse(script.analysis_summary || '[]'), has_sourcemap: !!script.has_sourcemap }; } catch(e) { return {...script, analysis_summary: [], has_sourcemap: !!script.has_sourcemap}; } }); res.render('dashboard', { findings: initialData.reverse(), initialHasMore: hasMoreInitially, initialOffset: initialScripts.length, initialStats: { requestsProcessedByExtension, jsFilesReceivedForAnalysis, totalFindings: currentStats.total, totalInScope: currentStats.inScope }, projectName: projectName, isLLMEnabled: Boolean(isLLMEnabled) }); } catch (error) { console.error('Dashboard load err:', error); res.status(500).send('Err loading dashboard.'); } });

// --- Initialize and Start ---
async function startServer() { await ensureDirs(); await setupDatabase(DB_FILE); server.listen(PORT, () => { console.log(`-------------------------------------------------------`); console.log(`Dashboard listening http://localhost:${PORT}`); console.log(`>>> Project: ${projectName}`); console.log(`>>> Project Root Dir: ${PROJECT_ROOT_DIR}`); console.log(`>>> Project DB: ${DB_FILE}`); console.log(`>>> Project JS Files: ${PROJECT_JS_DIR}`); console.log(`>>> LLM Enabled: ${isLLMEnabled}`); console.log(`-------------------------------------------------------`); }); }
startServer();

// --- Graceful Shutdown & Error Handling ---
const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT']; signals.forEach(s => { process.on(s, async () => { console.log(`\n${s}... Closing DB.`); if (db) { await db.close().catch(e => console.error('DB close err:', e)); console.log('DB closed.'); } process.exit(0); }); });
process.on('uncaughtException', (e) => { console.error('UNCAUGHT:', e); process.exit(1); });
process.on('unhandledRejection', (r) => { console.error('UNHANDLED:', r); });

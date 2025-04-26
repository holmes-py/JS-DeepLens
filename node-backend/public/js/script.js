// File: node-backend/public/js/script.js
// Final Updated Version: Handles script-based findings, Re-scan trigger, Server filtering, Column removal, SourceMap indicator, LLM/AST updates

document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    // Read initial state from body data attributes passed by EJS
    const initialOffset = parseInt(document.body.dataset.initialOffset || '0', 10);
    const initialHasMore = document.body.dataset.initialHasMore === 'true';
    const isLLMEnabledOnServer = document.body.dataset.llmEnabled === 'true';

    // --- Element Refs ---
    const findingsTableBody = document.getElementById('findingsTableBody');
    let noFindingsRow = document.getElementById('no-findings-row'); // Can change
    const connectionStatusEl = document.getElementById('connection-status');
    const requestsProcessedEl = document.getElementById('requests-processed');
    const jsReceivedEl = document.getElementById('js-received');
    const totalFindingsEl = document.getElementById('total-findings'); // This now represents total scripts
    const includeRegexEl = document.getElementById('include-regex');
    const excludeRegexEl = document.getElementById('exclude-regex');
    const saveScopeButton = document.getElementById('save-scope-button');
    const scopeFeedbackEl = document.getElementById('scope-feedback');
    const patternListContainer = document.getElementById('pattern-list-container');
    const savePatternsButton = document.getElementById('save-patterns-button');
    const patternsFeedbackEl = document.getElementById('patterns-feedback');
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    const analyzeSelectedButton = document.getElementById('analyze-selected-button');
    const selectedCountSpan = document.getElementById('selected-count');
    const loadingOverlay = document.getElementById('loading-overlay');
    const sidePane = document.getElementById('side-pane');
    const sidePaneTitle = document.getElementById('side-pane-title');
    const sidePaneContent = document.getElementById('side-pane-content');
    const sidePaneCodeEl = document.getElementById('side-pane-code');
    const sidePanePre = sidePaneCodeEl ? sidePaneCodeEl.parentElement : null;
    const closeSidePaneButton = document.getElementById('close-side-pane-button');
    const wrapLinesCheckbox = document.getElementById('wrap-lines-checkbox');
    const tableScrollContainer = document.getElementById('table-scroll-container');
    const showMoreButton = document.getElementById('show-more-button');
    const noMoreFindingsSpan = document.getElementById('no-more-findings');
    // Modal Refs
    const llmPromptModal = document.getElementById('llm-prompt-modal');
    const llmPromptTextarea = document.getElementById('llm-prompt-textarea');
    const modalFindingIdInput = document.getElementById('modal-finding-id'); // Now holds script ID
    const modalSendButton = document.getElementById('modal-send-button');
    const modalCancelButton = document.getElementById('modal-cancel-button');
    const modalFeedbackEl = document.getElementById('modal-feedback');
    // Rescan elements
    const rescanButton = document.getElementById('rescan-button');
    const rescanStatusEl = document.getElementById('rescan-status');
    const idHeader = document.getElementById('sort-by-id');


    // --- State ---
    let isLoadingMore = false;
    let currentOffset = initialOffset; // Use value from server
    let hasMoreFindings = initialHasMore; // Use value from server (now means more scripts)
    let isRescanning = false; // Track rescan state
    let currentSort = { column: 'id', direction: 'asc' }; // Default sort state

    console.log("Initial State:", { currentOffset, hasMoreFindings, isLLMEnabledOnServer });

    // --- Utils ---
    function escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function showFeedback(el, message, isErrorParam = false) {
        const isError = Boolean(isErrorParam);
        if (!el) return;
        el.textContent = message;
        el.className = `feedback ${isError ? 'error' : 'success'}`;
        setTimeout(() => {
            if (el) {
                el.textContent = '';
                el.className = 'feedback';
            }
        }, 4500);
    }
    // *** ADD THIS FUNCTION ***
    function updateSortIndicator() {
        // Remove existing sort classes from all headers (if you add more sortable columns later)
        document.querySelectorAll('th.sortable').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
        });
        // Add class to the current sort column
        if (currentSort.column === 'id' && idHeader) {
            idHeader.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        }
        // Add more columns here if needed
    }

    // *** ADD THIS FUNCTION ***
    function sortTableById(direction) {
        if (!findingsTableBody) return;
        const rows = Array.from(findingsTableBody.querySelectorAll('tr.finding-row'));

        // Sort the finding rows based on the ID (first cell's text content)
        rows.sort((rowA, rowB) => {
            // Use dataset.findingId for potentially more reliable ID access
            const idA = parseInt(rowA.dataset.findingId, 10);
            const idB = parseInt(rowB.dataset.findingId, 10);
            if (isNaN(idA) || isNaN(idB)) return 0; // Handle parsing errors

            return direction === 'asc' ? idA - idB : idB - idA;
        });

        // Re-append rows (and their associated detail rows) in sorted order
        rows.forEach(row => {
            const detailRowId = `details-row-${row.dataset.findingId}`;
            const detailRow = document.getElementById(detailRowId);
            findingsTableBody.appendChild(row); // Append the finding row
            if (detailRow) {
                findingsTableBody.appendChild(detailRow); // Append its detail row immediately after
            }
        });

        // Update header indicator
        updateSortIndicator();
    }

    function updateSelectedCount() {
        if (!findingsTableBody) return;
        const count = findingsTableBody.querySelectorAll('tr.finding-row .row-checkbox:checked').length;
        if (selectedCountSpan) selectedCountSpan.textContent = count;
        if (analyzeSelectedButton) analyzeSelectedButton.disabled = count === 0 || !isLLMEnabledOnServer;
    }

    function renderLoading(container, message = 'Loading...') {
        if (container) {
            container.innerHTML = `<div class="spinner"></div><span>${escapeHtml(message)}</span>`;
            container.className = 'details-content loading';
        }
    }

    function renderError(container, message) {
        if (container) {
            container.textContent = `Error: ${message}`;
            container.className = 'details-content error';
        }
    }

    function renderTextResult(container, text) {
        if (container) {
            container.innerHTML = '';
            const pre = document.createElement('pre');
            pre.style.whiteSpace = 'pre-wrap';
            pre.style.wordBreak = 'break-word';
            pre.textContent = text;
            container.appendChild(pre);
            container.className = 'details-content';
        }
    }

    // --- WebSocket Handlers ---
    if (connectionStatusEl) {
        socket.on('connect', () => {
            connectionStatusEl.textContent = 'Connected';
            connectionStatusEl.className = 'connected';
        });
        socket.on('disconnect', () => {
            connectionStatusEl.textContent = 'Disconnected';
            connectionStatusEl.className = 'disconnected';
        });
        socket.on('connect_error', (err) => {
            connectionStatusEl.textContent = 'Connection Error';
            connectionStatusEl.className = 'error';
            console.error('Socket Connection Error:', err);
        });
    }

    socket.on('project_info', info => console.log('Project:', info.projectName));

    // Stats now reflect script count
    socket.on('stats_update', stats => {
        if (requestsProcessedEl) requestsProcessedEl.textContent = stats.requestsProcessedByExtension;
        if (jsReceivedEl) jsReceivedEl.textContent = stats.jsFilesReceivedForAnalysis;
        if (totalFindingsEl) totalFindingsEl.textContent = stats.totalFindings; /* Represents total scripts */
    });

    // WebSocket listeners for Re-scan progress
    socket.on('rescan_progress', (data) => {
        if (rescanStatusEl && isRescanning) {
            rescanStatusEl.textContent = `Re-scanning... (${data.processed}/${data.total} files processed)`;
            rescanStatusEl.className = '';
        }
    });

    socket.on('rescan_complete', (data) => {
        isRescanning = false;
        if (rescanButton) rescanButton.disabled = false;
        if (rescanStatusEl) {
            rescanStatusEl.textContent = data.message || `Re-scan finished. Status: ${data.status}.`;
            rescanStatusEl.className = data.status === 'success' ? 'success' : 'error';
            setTimeout(() => {
                if (rescanStatusEl) {
                    rescanStatusEl.textContent = '';
                    rescanStatusEl.className = '';
                }
            }, 10000);
        }
        showFeedback(patternsFeedbackEl, "Re-scan complete. Please reload the page to see all updated findings.", false);
        alert("Re-scan complete. Please reload the page to see updated findings.");
    });

    // --- Add Finding Row Function (Handles Analyzed Script Data, 6+1 Columns) ---
    function addFindingRow(scriptData, prepend = true) {
        if (noFindingsRow && noFindingsRow.parentNode === findingsTableBody) {
            findingsTableBody.removeChild(noFindingsRow);
            noFindingsRow = null;
        }
        const scriptId = scriptData.id;
        const contentHash = scriptData.content_hash || '';
        if (!scriptId || findingsTableBody.querySelector(`tr.finding-row[data-finding-id="${scriptId}"]`)) {
            return;
        }
        const displayTimestamp = scriptData.timestamp ? new Date(scriptData.timestamp).toLocaleString() : 'N/A';
        const analysisSummary = scriptData.analysis_summary || [];
        const hasSourceMap = scriptData.has_sourcemap;

        const findingRowHTML = `
            <td class="id-col">${scriptId}</td>
            <td class="select-col"><input type="checkbox" class="row-checkbox" value="${scriptId}"></td>
            <td class="ts-col">${displayTimestamp}</td>
            <td class="url-col" title="${escapeHtml(scriptData.url || '?')}">${escapeHtml(scriptData.url || '?')}</td>
            <td class="source-col">
                ${analysisSummary.length > 0 ? `${analysisSummary.length} finding(s)` : 'No regex matches'}
                ${hasSourceMap ? '<span class="sourcemap-tag" title="Source map detected">Source Map</span>' : ''}
            </td>
            <td class="actions-col">
                <button class="view-js-button action-button view-button" data-content-hash="${contentHash}" title="View JS Source" ${!contentHash ? 'disabled' : ''}>JS</button>
                <button class="run-ast-button action-button ast-button" data-finding-id="${scriptId}" title="Run AST Analysis" ${!contentHash ? 'disabled' : ''}>AST</button>
                <div class="llm-dropdown">
                    <button class="action-button analyze-button llm-dropdown-button" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''} title="${isLLMEnabledOnServer && contentHash ? 'LLM Analysis Options' : (isLLMEnabledOnServer ? 'LLM (Needs JS Content)' : 'LLM disabled')}"> LLM &#9662; </button>
                    <div class="llm-dropdown-content">
                        <button class="llm-action-button" data-action="default" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''}>Analyze (Default)</button>
                        <button class="llm-action-button" data-action="with_ast" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''} title="${isLLMEnabledOnServer && contentHash ? 'Runs AST first' : (!isLLMEnabledOnServer?'LLM Disabled':'Needs JS content')}">Analyze w/ AST</button>
                        <button class="llm-action-button" data-action="modify_prompt" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''}>Modify Prompt...</button>
                    </div>
                </div>
            </td>`;

        const detailsRowHTML = `
            <td colspan="6" class="details-cell">
                <div class="details-section" id="regex-matches-${scriptId}">
                    <h4>Regex Matches</h4>
                    <div class="details-content">
                        ${generateRegexMatchesHtml(analysisSummary)}
                    </div>
                </div>
                <div class="details-section" id="ast-details-${scriptId}" style="display: none;">
                    <h4>AST Results</h4>
                    <div class="details-content loading"><span>Run AST analysis to see results.</span></div>
                </div>
                <div class="details-section" id="llm-details-${scriptId}" style="display: none;">
                    <h4>LLM Results</h4>
                    <div class="details-content loading"><div class="spinner"></div><span>Awaiting LLM analysis...</span></div>
                </div>
            </td>`;

        const newFindingRow = document.createElement('tr');
        newFindingRow.className = 'finding-row';
        if (prepend) newFindingRow.classList.add('new');
        newFindingRow.dataset.findingId = scriptId;
        newFindingRow.dataset.url = scriptData.url || '';
        newFindingRow.dataset.contentHash = contentHash;
        newFindingRow.innerHTML = findingRowHTML;

        const newDetailsRow = document.createElement('tr');
        newDetailsRow.className = 'details-row';
        newDetailsRow.id = `details-row-${scriptId}`;
        newDetailsRow.innerHTML = detailsRowHTML;

        if (prepend) {
            findingsTableBody.insertBefore(newDetailsRow, findingsTableBody.firstChild);
            findingsTableBody.insertBefore(newFindingRow, newDetailsRow);
            setTimeout(() => {
                newFindingRow.classList.remove('new');
            }, 1500);
        } else {
            findingsTableBody.appendChild(newFindingRow);
            findingsTableBody.appendChild(newDetailsRow);
        }
    }

    function generateRegexMatchesHtml(summary) {
        if (!Array.isArray(summary) || summary.length === 0) {
            return '<p>No regex matches found with current patterns.</p>';
        }
        let html = '<ul style="margin:0; padding-left: 20px; list-style-type: disc;">';
        summary.forEach(match => {
            html += `<li style="margin-bottom: 10px;">`;
            html += `<strong>File:</strong> <code>${escapeHtml(match.sf || '?')}</code><br>`;
            html += `<strong>Pattern:</strong> <code>${escapeHtml(match.p || '?')}</code><br>`;
            const matchText = typeof match.m === 'string' ? match.m : JSON.stringify(match.m);
            html += `<strong>Match:</strong> <pre style="background-color: #f0f0f0; border: 1px solid #ddd; padding: 3px 6px; border-radius: 3px; margin-top: 3px; white-space: pre-wrap; word-break: break-all; font-size: 0.9em;"><code>${escapeHtml(matchText || '?')}</code></pre>`;
            html += `</li>`;
        });
        html += '</ul>';
        return html;
    }

    socket.on('new_finding', (scriptData) => addFindingRow(scriptData, true));

    // --- Settings & Filtering ---
    async function loadScopeSettings() {
        try {
            const response = await fetch('/api/config/scope');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            if (includeRegexEl) includeRegexEl.value = (data.includeList || []).join('\n');
            if (excludeRegexEl) excludeRegexEl.value = (data.excludeList || []).join('\n');
            console.log("Scope settings loaded.");
            updateSelectedCount();
            if (selectAllCheckbox) selectAllCheckbox.checked = false;
        } catch (e) {
            showFeedback(scopeFeedbackEl, 'Error loading scope.', true);
            console.error("Error loading scope:", e);
        }
    }

    if (saveScopeButton) {
        saveScopeButton.addEventListener('click', async () => {
            const includeList = includeRegexEl.value.split('\n').map(s => s.trim()).filter(Boolean);
            const excludeList = excludeRegexEl.value.split('\n').map(s => s.trim()).filter(Boolean);
            for (const p of includeList) {
                try { if (p) new RegExp(p); } catch (e) { showFeedback(scopeFeedbackEl, `Invalid Include: ${p}`, true); return; }
            }
            for (const p of excludeList) {
                try { if (p) new RegExp(p); } catch (e) { showFeedback(scopeFeedbackEl, `Invalid Exclude: ${p}`, true); return; }
            }
            try {
                showFeedback(scopeFeedbackEl, 'Saving...', false);
                const response = await fetch('/api/config/scope', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ includeList: includeList, excludeList: excludeList })
                });
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
                    throw new Error(errorData.message);
                }
                const data = await response.json();
                if (data.success) {
                    showFeedback(scopeFeedbackEl, 'Scope saved. Reload or load more to see changes.', false);
                } else {
                    throw new Error(data.message || 'Save failed.');
                }
            } catch (e) {
                showFeedback(scopeFeedbackEl, `Error: ${e.message}`, true);
                console.error("Error saving scope:", e);
            }
        });
    }

    async function loadPatternSettings() {
        try {
            if (!patternListContainer) return;
            patternListContainer.innerHTML = '<div class="spinner"></div>';
            const [aR, sR] = await Promise.all([
                fetch('/api/patterns/available'),
                fetch('/api/patterns/selected')
            ]);
            if (!aR.ok || !sR.ok) throw new Error();
            const aD = await aR.json(), sD = await sR.json();
            const av = aD.availableFiles || [], sd = sD.selectedFiles || [];
            patternListContainer.innerHTML = '';
            if (av.length === 0) {
                patternListContainer.innerHTML = 'No pattern files found.';
                return;
            }
            av.sort().forEach(f => {
                const i = sd.includes(f);
                const id = `p-${f.replace(/[^a-zA-Z0-9]/g, '_')}`;
                const d = document.createElement('div');
                const c = document.createElement('input');
                c.type = 'checkbox';
                c.value = f;
                c.checked = i;
                c.id = id;
                const l = document.createElement('label');
                l.htmlFor = id;
                l.appendChild(c);
                l.appendChild(document.createTextNode(` ${f}`));
                d.appendChild(l);
                patternListContainer.appendChild(d);
            });
        } catch (e) {
            if (patternListContainer) patternListContainer.innerHTML = 'Err patterns.';
            showFeedback(patternsFeedbackEl, 'Err loading patterns.', true);
        }
    }

    if (savePatternsButton) {
        savePatternsButton.addEventListener('click', async () => {
            const c = patternListContainer.querySelectorAll('input:checked');
            const s = Array.from(c).map(cb => cb.value);
            try {
                showFeedback(patternsFeedbackEl, 'Saving...', false);
                const r = await fetch('/api/patterns/selected', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ selectedFiles: s })
                });
                if (!r.ok) {
                    const ed = await r.json().catch(() => ({ message: `HTTP ${r.status}` }));
                    throw new Error(ed.message);
                }
                const d = await r.json();
                if (d.success) showFeedback(patternsFeedbackEl, 'Selection saved.', false);
                else throw new Error(d.message || 'Save failed.');
            } catch (e) {
                showFeedback(patternsFeedbackEl, `Error: ${e.message}`, true);
            }
        });
    }

    // --- LLM & AST Analysis ---
    function getDetailsRowAndContentDiv(findingId, type = 'llm') {
        const dR = document.getElementById(`details-row-${findingId}`);
        const sD = dR?.querySelector(`#${type}-details-${findingId}`);
        const cD = sD?.querySelector('.details-content');
        return { detailsRow: dR, sectionDiv: sD, contentDiv: cD };
    }

    async function triggerSingleLLMAnalysis(findingId, buttonEl, customPrompt = null) {
        const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(findingId, 'llm');
        if (!detailsRow || !sectionDiv || !contentDiv) {
            console.error("LLM details missing " + findingId);
            return;
        }
        if (buttonEl) buttonEl.disabled = true;
        detailsRow.style.display = 'table-row';
        sectionDiv.style.display = 'block';
        renderLoading(contentDiv, 'Analyzing LLM...');
        try {
            const payload = customPrompt ? { customPrompt } : {};
            const r = await fetch(`/api/analyze-llm/${findingId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const d = await r.json();
            if (!r.ok || !d.success) throw new Error(d.message || `HTTP ${r.status}`);
            renderTextResult(contentDiv, d.analysis);
        } catch (e) {
            renderError(contentDiv, e.message);
        } finally {
            if (buttonEl) buttonEl.disabled = false;
        }
    }

    async function triggerBatchLLMAnalysis(findingIds) {
        if (findingIds.length === 0) return;
        loadingOverlay.classList.add('visible');
        analyzeSelectedButton.disabled = true;
        findingIds.forEach(id => {
            const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(id, 'llm');
            if (detailsRow && sectionDiv && contentDiv) {
                detailsRow.style.display = 'table-row';
                sectionDiv.style.display = 'block';
                renderLoading(contentDiv, 'Batch LLM...');
            }
        });
        try {
            const r = await fetch('/api/analyze-llm-batch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ findingIds })
            });
            const d = await r.json();
            if (!r.ok || !d.success) throw new Error(d.message || `HTTP ${r.status}`);
            d.results.forEach(res => {
                const { contentDiv } = getDetailsRowAndContentDiv(res.findingId, 'llm');
                if (contentDiv) {
                    if (res.success) renderTextResult(contentDiv, res.analysis);
                    else renderError(contentDiv, res.analysis);
                }
            });
        } catch (e) {
            findingIds.forEach(id => {
                const { contentDiv } = getDetailsRowAndContentDiv(id, 'llm');
                if (contentDiv) {
                    renderError(contentDiv, `Batch Error: ${e.message}`);
                }
            });
            alert(`Batch LLM failed: ${e.message}`);
        } finally {
            loadingOverlay.classList.remove('visible');
            updateSelectedCount();
        }
    }

    async function triggerLLMWithAST(findingId, buttonEl) {
        const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(findingId, 'llm');
        if (!detailsRow || !sectionDiv || !contentDiv) return;
        buttonEl.disabled = true;
        detailsRow.style.display = 'table-row';
        sectionDiv.style.display = 'block';
        renderLoading(contentDiv, 'Running AST + LLM...');
        try {
            const r = await fetch(`/api/analyze-js-ast-llm/${findingId}`, { method: 'POST' });
            const d = await r.json();
            if (!r.ok || !d.success) throw new Error(d.message || `HTTP ${r.status}`);
            renderTextResult(contentDiv, d.analysis);
        } catch (e) {
            console.error(`LLM w/AST err ${findingId}:`, e);
            renderError(contentDiv, e.message);
        } finally {
            buttonEl.disabled = false;
        }
    }

    async function openPromptModal(findingId) {
        modalFindingIdInput.value = findingId;
        llmPromptTextarea.value = '';
        showFeedback(modalFeedbackEl, 'Loading default prompt...', false);
        llmPromptModal.classList.add('visible');
        try {
            const r = await fetch(`/api/llm-prompt/${findingId}`);
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            const d = await r.json();
            if (d.success) {
                llmPromptTextarea.value = d.defaultPrompt || '';
                showFeedback(modalFeedbackEl, '', false);
            } else {
                throw new Error(d.message || 'Failed load');
            }
        } catch (e) {
            showFeedback(modalFeedbackEl, `Error loading prompt: ${e.message}`, true);
            llmPromptTextarea.value = `/* Error loading default prompt */`;
        }
    }

    async function triggerASTAnalysis(findingId, buttonEl) {
        const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(findingId, 'ast');
        if (!detailsRow || !sectionDiv || !contentDiv) return;
        showFeedback(patternsFeedbackEl, `AST started ${findingId}...`, false);
        buttonEl.disabled = true;
        detailsRow.style.display = 'table-row';
        sectionDiv.style.display = 'block';
        renderLoading(contentDiv, 'Running AST...');
        try {
            const response = await fetch(`/api/analyze-ast/${findingId}`, { method: 'POST' });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || `HTTP ${response.status}`);
            let astHtml = '';
            if (data.astFindings && data.astFindings.length > 0) {
                astHtml += `<p style="margin-bottom: 10px;">Found ${data.astFindings.length} items via AST:</p><ul style="margin:0; padding-left: 20px; list-style-type: disc;">`;
                data.astFindings.forEach(f => {
                    astHtml += `<li style="margin-bottom: 12px;">`;
                    astHtml += `<strong>Type:</strong> ${escapeHtml(f.type)}<br>`;
                    astHtml += `<strong>Source:</strong> ${escapeHtml(f.sourceFile)}<br>`;
                    if (f.pattern && f.pattern !== f.match) {
                        astHtml += `<strong>Detail/Pattern:</strong> <code>${escapeHtml(f.pattern)}</code><br>`;
                    }
                    astHtml += `<strong>Match/Value:</strong> <pre style="background-color: #f0f0f0; border: 1px solid #ddd; padding: 5px 8px; border-radius: 4px; margin-top: 4px; white-space: pre-wrap; word-break: break-all; font-size: 0.9em;"><code>${escapeHtml(f.match)}</code></pre>`;
                    astHtml += `</li>`;
                });
                astHtml += `</ul>`;
                showFeedback(patternsFeedbackEl, `AST complete ${findingId}. ${data.astFindings.length} items.`, false);
            } else {
                astHtml = "<p>No items found via AST.</p>";
                showFeedback(patternsFeedbackEl, `AST complete ${findingId}. No items.`, false);
            }
            contentDiv.innerHTML = astHtml;
            contentDiv.className = 'details-content';
        } catch (error) {
            console.error(`AST err ${findingId}:`, error);
            renderError(contentDiv, error.message);
            showFeedback(patternsFeedbackEl, `Error AST: ${error.message}`, true);
        } finally {
            buttonEl.disabled = false;
        }
    }

    // --- Side Pane ---
    async function viewJsContent(contentHash, url) {
        const loader = sidePaneContent?.querySelector('.loading-placeholder');
        if (!contentHash || !sidePane || !sidePaneCodeEl || !sidePaneTitle || !sidePanePre || !loader) {
            console.error("Side pane elements missing");
            return;
        }
        sidePanePre.style.display = 'none';
        loader.style.display = 'flex';
        sidePaneTitle.textContent = url.split(/[?#]/)[0].split('/').pop() || url;
        sidePane.classList.add('visible');
        if (wrapLinesCheckbox) wrapLinesCheckbox.checked = false;
        sidePanePre.classList.remove('wrap-active');
        const errorDivExisting = sidePaneContent.querySelector('.error');
        if (errorDivExisting) errorDivExisting.remove();
        try {
            const r = await fetch(`/api/script/${contentHash}`);
            if (!r.ok) throw new Error(`${r.status}: ${await r.text()}`);
            const scriptContent = await r.text();
            sidePaneCodeEl.textContent = scriptContent;
            sidePanePre.style.display = 'block';
            if (window.Prism) {
                Prism.highlightElement(sidePaneCodeEl);
            }
        } catch (e) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = `Error loading: ${e.message}`;
            sidePaneContent.appendChild(errorDiv);
            console.error(`Workspace script err ${contentHash}:`, e);
        } finally {
            loader.style.display = 'none';
        }
    }

    if (closeSidePaneButton) closeSidePaneButton.addEventListener('click', () => {
        if (sidePane) sidePane.classList.remove('visible');
    });

    if (wrapLinesCheckbox && sidePanePre) {
        wrapLinesCheckbox.addEventListener('change', (event) => {
            sidePanePre.classList.toggle('wrap-active', event.target.checked);
        });
    }

    // --- Global Event Listeners ---
    if (findingsTableBody) {
        findingsTableBody.addEventListener('click', (event) => {
            const llmActionButton = event.target.closest('button.llm-action-button');
            const button = event.target.closest('button.action-button');
            const parentRow = event.target.closest('tr.finding-row');

            if (llmActionButton) {
                event.stopPropagation();
                const findingId = llmActionButton.dataset.findingId;
                const action = llmActionButton.dataset.action;
                const dropdownContent = llmActionButton.closest('.llm-dropdown-content');
                if (dropdownContent) dropdownContent.classList.remove('visible');
                if (!findingId || !isLLMEnabledOnServer) {
                    if (!isLLMEnabledOnServer) alert("LLM Disabled.");
                    return;
                }
                if (action === 'default') triggerSingleLLMAnalysis(findingId, llmActionButton);
                else if (action === 'with_ast') triggerLLMWithAST(findingId, llmActionButton);
                else if (action === 'modify_prompt') openPromptModal(findingId);
                return;
            }

            if (button?.classList.contains('llm-dropdown-button')) {
                event.stopPropagation();
                const dropdownContent = button.nextElementSibling;
                document.querySelectorAll('.llm-dropdown-content.visible').forEach(d => {
                    if (d !== dropdownContent) d.classList.remove('visible');
                });
                if (dropdownContent) dropdownContent.classList.toggle('visible');
                return;
            }

            if (button && parentRow) {
                event.stopPropagation();
                const findingId = parentRow.dataset.findingId;
                const contentHash = parentRow.dataset.contentHash;
                if (button.classList.contains('run-ast-button')) {
                    if (findingId && contentHash) {
                        triggerASTAnalysis(findingId, button);
                    } else {
                        alert("ID or Hash missing for AST.");
                    }
                } else if (button.classList.contains('view-js-button')) {
                    if (contentHash) {
                        viewJsContent(contentHash, parentRow.dataset.url || '?');
                    } else {
                        alert("Hash missing for JS view.");
                    }
                }
                return;
            }

            if (parentRow && !event.target.closest('button') && event.target.tagName !== 'INPUT') {
                const findingId = parentRow.dataset.findingId;
                if (findingId) {
                    const dR = document.getElementById(`details-row-${findingId}`);
                    if (dR) {
                        dR.style.display = dR.style.display === 'none' ? 'table-row' : 'none';
                    }
                }
            }
        });
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.llm-dropdown')) {
            document.querySelectorAll('.llm-dropdown-content.visible').forEach(d => d.classList.remove('visible'));
        }
    });

    if (findingsTableBody) {
        findingsTableBody.addEventListener('change', (event) => {
            if (event.target.classList.contains('row-checkbox')) {
                updateSelectedCount();
            }
        });
    }

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', (event) => {
            const iC = event.target.checked;
            const vCB = findingsTableBody.querySelectorAll('tr.finding-row:not([style*="display: none"]) .row-checkbox');
            vCB.forEach(cb => {
                if (!cb.disabled) cb.checked = iC;
            });
            updateSelectedCount();
        });
    }

    if (analyzeSelectedButton) {
        analyzeSelectedButton.addEventListener('click', () => {
            const cB = findingsTableBody.querySelectorAll('.row-checkbox:checked');
            const fIds = Array.from(cB).map(cb => cb.value).filter(Boolean);
            if (fIds.length > 0 && isLLMEnabledOnServer) triggerBatchLLMAnalysis(fIds);
            else if (!isLLMEnabledOnServer) alert("LLM disabled.");
            else alert("Select scripts first.");
        });
    }

    if (modalCancelButton) {
        modalCancelButton.addEventListener('click', () => {
            llmPromptModal.classList.remove('visible');
        });
    }

    if (modalSendButton) {
        modalSendButton.addEventListener('click', async () => {
            const findingId = modalFindingIdInput.value;
            const customPrompt = llmPromptTextarea.value;
            if (!findingId || !customPrompt) {
                showFeedback(modalFeedbackEl, 'Missing ID or prompt.', true);
                return;
            }
            llmPromptModal.classList.remove('visible');
            showFeedback(modalFeedbackEl, '', false);
            await triggerSingleLLMAnalysis(findingId, null, customPrompt);
        });
    }

    if (llmPromptModal) {
        llmPromptModal.addEventListener('click', (event) => {
            if (event.target === llmPromptModal) {
                llmPromptModal.classList.remove('visible');
            }
        });
    }

    // --- "Show More" Button Logic ---
    async function loadMoreFindings(reloadFirstPage = false) {
        if (isLoadingMore) return;
        if (!hasMoreFindings && !reloadFirstPage) return;
        isLoadingMore = true;
        showMoreButton.disabled = true;
        showMoreButton.innerHTML = '<div class="spinner"></div> Loading...';
        const offsetToFetch = reloadFirstPage ? 0 : currentOffset;
        console.log(`FINDINGS: Fetch offset: ${offsetToFetch}`);
        try {
            const r = await fetch(`/api/findings?offset=${offsetToFetch}&limit=50`);
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            const d = await r.json();
            hasMoreFindings = d.hasMore;
            if (reloadFirstPage) {
                findingsTableBody.innerHTML = '';
                currentOffset = 0;
                if (d.findings.length === 0) {
                    if (!noFindingsRow) {
                        noFindingsRow = document.createElement('tr');
                        noFindingsRow.id = 'no-findings-row';
                        noFindingsRow.innerHTML = `<td colspan="6" class="no-findings">No findings matching scope.</td>`;
                    }
                    findingsTableBody.appendChild(noFindingsRow);
                } else {
                    if (noFindingsRow && noFindingsRow.parentNode === findingsTableBody) {
                        findingsTableBody.removeChild(noFindingsRow);
                        noFindingsRow = null;
                    }
                }
            }
            d.findings.forEach(f => addFindingRow(f, false));
            currentOffset += d.findings.length;
            if (d.findings.length === 0 && hasMoreFindings && !reloadFirstPage) {
                console.warn("API said 'hasMore' but returned 0.");
            }
        } catch (e) {
            console.error("Show More/Reload err:", e);
            showFeedback(scopeFeedbackEl, "Error loading findings.", true);
            hasMoreFindings = false;
        } finally {
            isLoadingMore = false;
            showMoreButton.disabled = !hasMoreFindings || isLoadingMore;
            showMoreButton.innerHTML = 'Show More';
            if (noMoreFindingsSpan) noMoreFindingsSpan.style.display = hasMoreFindings ? 'none' : 'inline';
            if (showMoreButton) showMoreButton.style.display = hasMoreFindings ? 'inline-block' : 'none';
            console.log(`FINDINGS: Load done. HasMore: ${hasMoreFindings}, New Offset: ${currentOffset}`);
            updateSelectedCount();
        }
    }

    if (showMoreButton) {
        showMoreButton.addEventListener('click', () => loadMoreFindings(false));
    }

    // Initial state check for show more button
    if (!hasMoreFindings) {
        if (showMoreButton) showMoreButton.style.display = 'none';
        if (noMoreFindingsSpan) noMoreFindingsSpan.style.display = 'inline';
    } else {
        if (showMoreButton) showMoreButton.style.display = 'inline-block';
        if (noMoreFindingsSpan) noMoreFindingsSpan.style.display = 'none';
    }

    // --- Re-scan Button Logic ---
    async function triggerRescan() {
        if (isRescanning) {
            alert("Re-scan in progress.");
            return;
        }
        if (!confirm("Re-analyze ALL stored JS with current patterns? Existing regex findings replaced. Proceed?")) {
            return;
        }
        isRescanning = true;
        if (rescanButton) rescanButton.disabled = true;
        if (rescanStatusEl) {
            rescanStatusEl.textContent = "Starting re-scan...";
            rescanStatusEl.className = '';
        }
        try {
            const response = await fetch('/api/rescan', { method: 'POST' });
            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.message || `HTTP ${response.status}`);
            }
            if (rescanStatusEl) rescanStatusEl.textContent = "Re-scan request sent. Progress via WebSocket.";
        } catch (error) {
            console.error("Err trigger re-scan:", error);
            if (rescanStatusEl) {
                rescanStatusEl.textContent = `Error: ${error.message}`;
                rescanStatusEl.className = 'error';
            }
            isRescanning = false;
            if (rescanButton) rescanButton.disabled = false;
        }
    }

    if (rescanButton) {
        rescanButton.addEventListener('click', triggerRescan);
    }
        // --- Sorting Listener ---
        if (idHeader) {
            idHeader.classList.add('sortable'); // Add class for styling/cursor
            // Set initial indicator based on default state
            updateSortIndicator();
    
            idHeader.addEventListener('click', () => {
                const newDirection = (currentSort.column === 'id' && currentSort.direction === 'asc') ? 'desc' : 'asc';
                currentSort.column = 'id';
                currentSort.direction = newDirection;
                console.log(`Sorting by ID: ${newDirection.toUpperCase()}`); // Optional log
                sortTableById(newDirection);
            });
        }
        // --- End Sorting Listener ---
    // --- Initial Load Actions ---
    loadScopeSettings();
    loadPatternSettings();
    updateSelectedCount();

}); // End DOMContentLoaded
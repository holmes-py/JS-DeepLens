// ============================================================================
// JS DEEPLENS — Frontend Controller
// Handles real-time updates, user interactions, and analysis features
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    // --- Read Initial State from Body Data Attributes ---
    const initialOffset = parseInt(document.body.dataset.initialOffset || '0', 10);
    const initialHasMore = document.body.dataset.initialHasMore === 'true';
    const isLLMEnabledOnServer = document.body.dataset.llmEnabled === 'true';

    // ========================================================================
    // ELEMENT REFERENCES
    // ========================================================================
    const elements = {
        // Table
        findingsTableBody: document.getElementById('findingsTableBody'),
        noFindingsRow: document.getElementById('no-findings-row'),

        // Header Stats
        connectionStatus: document.getElementById('connection-status'),
        requestsProcessed: document.getElementById('requests-processed'),
        jsReceived: document.getElementById('js-received'),
        totalFindings: document.getElementById('total-findings'),

        // Scope Settings
        includeRegex: document.getElementById('include-regex'),
        excludeRegex: document.getElementById('exclude-regex'),
        saveScopeButton: document.getElementById('save-scope-button'),
        scopeFeedback: document.getElementById('scope-feedback'),

        // Pattern Settings
        patternListContainer: document.getElementById('pattern-list-container'),
        savePatternsButton: document.getElementById('save-patterns-button'),
        patternsFeedback: document.getElementById('patterns-feedback'),
        rescanButton: document.getElementById('rescan-button'),
        rescanStatus: document.getElementById('rescan-status'),

        // Selection & Batch
        selectAllCheckbox: document.getElementById('select-all-checkbox'),
        analyzeSelectedButton: document.getElementById('analyze-selected-button'),
        selectedCountSpan: document.getElementById('selected-count'),
        loadingOverlay: document.getElementById('loading-overlay'),

        // Side Pane
        sidePane: document.getElementById('side-pane'),
        sidePaneTitle: document.getElementById('side-pane-title'),
        sidePaneContent: document.getElementById('side-pane-content'),
        sidePaneCode: document.getElementById('side-pane-code'),
        closeSidePaneButton: document.getElementById('close-side-pane-button'),
        wrapLinesCheckbox: document.getElementById('wrap-lines-checkbox'),

        // Show More
        showMoreButton: document.getElementById('show-more-button'),
        noMoreFindingsSpan: document.getElementById('no-more-findings'),

        // Modal
        llmPromptModal: document.getElementById('llm-prompt-modal'),
        llmPromptTextarea: document.getElementById('llm-prompt-textarea'),
        modalFindingIdInput: document.getElementById('modal-finding-id'),
        modalSendButton: document.getElementById('modal-send-button'),
        modalCancelButton: document.getElementById('modal-cancel-button'),
        modalFeedback: document.getElementById('modal-feedback'),

        // Sorting
        idHeader: document.getElementById('sort-by-id')
    };

    const sidePanePre = elements.sidePaneCode?.parentElement;

    // ========================================================================
    // STATE
    // ========================================================================
    let state = {
        isLoadingMore: false,
        currentOffset: initialOffset,
        hasMoreFindings: initialHasMore,
        isRescanning: false,
        currentSort: { column: 'id', direction: 'asc' }
    };

    console.log('[JS DeepLens] Initialized:', { offset: state.currentOffset, hasMore: state.hasMoreFindings, llmEnabled: isLLMEnabledOnServer });

    // ========================================================================
    // UTILITY FUNCTIONS
    // ========================================================================

    function escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function showFeedback(el, message, isError = false) {
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

    function showToast(message, type = 'info') {
        // Create toast element if it doesn't exist
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 8px;
            `;
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.style.cssText = `
            padding: 12px 20px;
            background: var(--bg-elevated, #1c1c28);
            border: 1px solid ${type === 'error' ? 'var(--accent-danger, #ff4466)' : type === 'success' ? 'var(--accent-primary, #00ff88)' : 'var(--border-default, #3a3a4a)'};
            border-radius: 8px;
            color: ${type === 'error' ? 'var(--accent-danger, #ff4466)' : type === 'success' ? 'var(--accent-primary, #00ff88)' : 'var(--text-primary, #e4e4e8)'};
            font-family: var(--font-mono, monospace);
            font-size: 0.85rem;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5);
            animation: toastSlideIn 0.3s ease-out;
            max-width: 400px;
        `;
        toast.textContent = message;
        toastContainer.appendChild(toast);

        // Add animation keyframes if not already added
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                @keyframes toastSlideIn {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes toastSlideOut {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(20px); }
                }
            `;
            document.head.appendChild(style);
        }

        // Auto remove after 4 seconds
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.3s ease-out forwards';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
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
            pre.style.cssText = 'white-space: pre-wrap; word-break: break-word; margin: 0;';
            pre.textContent = text;
            container.appendChild(pre);
            container.className = 'details-content';
        }
    }

    function updateSelectedCount() {
        if (!elements.findingsTableBody) return;
        const count = elements.findingsTableBody.querySelectorAll('tr.finding-row .row-checkbox:checked').length;
        if (elements.selectedCountSpan) elements.selectedCountSpan.textContent = count;
        if (elements.analyzeSelectedButton) {
            elements.analyzeSelectedButton.disabled = count === 0 || !isLLMEnabledOnServer;
        }
    }

    function updateSortIndicator() {
        document.querySelectorAll('th.sortable').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
        });
        if (state.currentSort.column === 'id' && elements.idHeader) {
            elements.idHeader.classList.add(state.currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    }

    function sortTableById(direction) {
        if (!elements.findingsTableBody) return;
        const rows = Array.from(elements.findingsTableBody.querySelectorAll('tr.finding-row'));

        rows.sort((rowA, rowB) => {
            const idA = parseInt(rowA.dataset.findingId, 10);
            const idB = parseInt(rowB.dataset.findingId, 10);
            if (isNaN(idA) || isNaN(idB)) return 0;
            return direction === 'asc' ? idA - idB : idB - idA;
        });

        rows.forEach(row => {
            const detailRowId = `details-row-${row.dataset.findingId}`;
            const detailRow = document.getElementById(detailRowId);
            elements.findingsTableBody.appendChild(row);
            if (detailRow) {
                elements.findingsTableBody.appendChild(detailRow);
            }
        });

        updateSortIndicator();
    }

    // ========================================================================
    // WEBSOCKET HANDLERS
    // ========================================================================

    socket.on('connect', () => {
        if (elements.connectionStatus) {
            elements.connectionStatus.textContent = 'Connected';
            elements.connectionStatus.className = 'connected';
        }
        console.log('[Socket] Connected');
    });

    socket.on('disconnect', () => {
        if (elements.connectionStatus) {
            elements.connectionStatus.textContent = 'Disconnected';
            elements.connectionStatus.className = 'disconnected';
        }
        console.log('[Socket] Disconnected');
    });

    socket.on('connect_error', (err) => {
        if (elements.connectionStatus) {
            elements.connectionStatus.textContent = 'Error';
            elements.connectionStatus.className = 'error';
        }
        console.error('[Socket] Connection Error:', err);
    });

    socket.on('project_info', info => {
        console.log('[Socket] Project:', info.projectName);
    });

    socket.on('stats_update', stats => {
        if (elements.requestsProcessed) elements.requestsProcessed.textContent = stats.requestsProcessedByExtension;
        if (elements.jsReceived) elements.jsReceived.textContent = stats.jsFilesReceivedForAnalysis;
        if (elements.totalFindings) elements.totalFindings.textContent = stats.totalFindings;
    });

    socket.on('rescan_progress', (data) => {
        if (elements.rescanStatus && state.isRescanning) {
            elements.rescanStatus.textContent = `Re-scanning... (${data.processed}/${data.total} files)`;
            elements.rescanStatus.className = '';
        }
    });

    socket.on('rescan_complete', (data) => {
        state.isRescanning = false;
        if (elements.rescanButton) elements.rescanButton.disabled = false;
        if (elements.rescanStatus) {
            elements.rescanStatus.textContent = data.message || `Re-scan finished: ${data.status}`;
            elements.rescanStatus.className = data.status === 'success' ? 'success' : 'error';
            setTimeout(() => {
                if (elements.rescanStatus) {
                    elements.rescanStatus.textContent = '';
                    elements.rescanStatus.className = '';
                }
            }, 10000);
        }
        showToast('Re-scan complete. Reload to see updated findings.', data.status === 'success' ? 'success' : 'error');
    });

    socket.on('new_finding', (scriptData) => addFindingRow(scriptData, true));

    // ========================================================================
    // FINDING ROW MANAGEMENT
    // ========================================================================

    function generateRegexMatchesHtml(summary) {
        if (!Array.isArray(summary) || summary.length === 0) {
            return '<p style="color: var(--text-muted); margin: 0;">No regex matches found with current patterns.</p>';
        }
        let html = '<ul>';
        summary.forEach(match => {
            const matchText = typeof match.m === 'string' ? match.m : JSON.stringify(match.m);
            html += `
                <li>
                    <strong>File:</strong> <code>${escapeHtml(match.sf || '?')}</code><br>
                    <strong>Pattern:</strong> <code>${escapeHtml(match.p || '?')}</code><br>
                    <strong>Match:</strong>
                    <pre><code>${escapeHtml(matchText || '?')}</code></pre>
                </li>`;
        });
        html += '</ul>';
        return html;
    }

    function addFindingRow(scriptData, prepend = true) {
        // Remove "no findings" row if present
        if (elements.noFindingsRow?.parentNode === elements.findingsTableBody) {
            elements.findingsTableBody.removeChild(elements.noFindingsRow);
            elements.noFindingsRow = null;
        }

        const scriptId = scriptData.id;
        const contentHash = scriptData.content_hash || '';

        // Skip if no ID or already exists
        if (!scriptId || elements.findingsTableBody.querySelector(`tr.finding-row[data-finding-id="${scriptId}"]`)) {
            return;
        }

        const displayTimestamp = scriptData.timestamp ? new Date(scriptData.timestamp).toLocaleString() : 'N/A';
        const analysisSummary = scriptData.analysis_summary || [];
        const hasSourceMap = scriptData.has_sourcemap;

        const findingRowHTML = `
            <td class="id-col">#${scriptId}</td>
            <td class="select-col"><input type="checkbox" class="row-checkbox" value="${scriptId}"></td>
            <td class="ts-col">${displayTimestamp}</td>
            <td class="url-col" title="${escapeHtml(scriptData.url || '?')}">${escapeHtml(scriptData.url || '?')}</td>
            <td class="source-col">
                ${analysisSummary.length > 0
                ? `<code>${analysisSummary.length}</code> finding${analysisSummary.length !== 1 ? 's' : ''}`
                : '<span style="color: var(--text-muted);">No matches</span>'}
                ${hasSourceMap ? '<span class="sourcemap-tag" title="Source map detected">MAP</span>' : ''}
            </td>
            <td class="actions-col">
                <button class="view-js-button action-button view-button" data-content-hash="${contentHash}" title="View JS Source" ${!contentHash ? 'disabled' : ''}>JS</button>
                <button class="run-ast-button action-button ast-button" data-finding-id="${scriptId}" title="Run AST Analysis" ${!contentHash ? 'disabled' : ''}>AST</button>
                <div class="llm-dropdown">
                    <button class="action-button analyze-button llm-dropdown-button" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''} title="${isLLMEnabledOnServer && contentHash ? 'LLM Analysis' : (!isLLMEnabledOnServer ? 'LLM disabled' : 'No content')}">LLM ▾</button>
                    <div class="llm-dropdown-content">
                        <button class="llm-action-button" data-action="default" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''}>Analyze (Default)</button>
                        <button class="llm-action-button" data-action="with_ast" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''} title="Runs AST first">Analyze with AST</button>
                        <button class="llm-action-button" data-action="modify_prompt" data-finding-id="${scriptId}" ${!isLLMEnabledOnServer || !contentHash ? 'disabled' : ''}>Custom Prompt...</button>
                    </div>
                </div>
            </td>`;

        const detailsRowHTML = `
            <td colspan="6" class="details-cell">
                <div class="details-section" id="regex-matches-${scriptId}">
                    <h4>Regex Matches</h4>
                    <div class="details-content">${generateRegexMatchesHtml(analysisSummary)}</div>
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
            elements.findingsTableBody.insertBefore(newDetailsRow, elements.findingsTableBody.firstChild);
            elements.findingsTableBody.insertBefore(newFindingRow, newDetailsRow);
            setTimeout(() => newFindingRow.classList.remove('new'), 2000);
        } else {
            elements.findingsTableBody.appendChild(newFindingRow);
            elements.findingsTableBody.appendChild(newDetailsRow);
        }
    }

    // ========================================================================
    // SETTINGS: SCOPE
    // ========================================================================

    async function loadScopeSettings() {
        try {
            const response = await fetch('/api/config/scope');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            if (elements.includeRegex) elements.includeRegex.value = (data.includeList || []).join('\n');
            if (elements.excludeRegex) elements.excludeRegex.value = (data.excludeList || []).join('\n');
            console.log('[Settings] Scope loaded');
            updateSelectedCount();
            if (elements.selectAllCheckbox) elements.selectAllCheckbox.checked = false;
        } catch (e) {
            showFeedback(elements.scopeFeedback, 'Error loading scope.', true);
            console.error('[Settings] Error loading scope:', e);
        }
    }

    if (elements.saveScopeButton) {
        elements.saveScopeButton.addEventListener('click', async () => {
            const includeList = elements.includeRegex.value.split('\n').map(s => s.trim()).filter(Boolean);
            const excludeList = elements.excludeRegex.value.split('\n').map(s => s.trim()).filter(Boolean);

            // Validate regexes
            for (const p of includeList) {
                try { if (p) new RegExp(p); } catch (e) {
                    showFeedback(elements.scopeFeedback, `Invalid include regex: ${p}`, true);
                    return;
                }
            }
            for (const p of excludeList) {
                try { if (p) new RegExp(p); } catch (e) {
                    showFeedback(elements.scopeFeedback, `Invalid exclude regex: ${p}`, true);
                    return;
                }
            }

            try {
                showFeedback(elements.scopeFeedback, 'Saving...', false);
                const response = await fetch('/api/config/scope', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ includeList, excludeList })
                });
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
                    throw new Error(errorData.message);
                }
                const data = await response.json();
                if (data.success) {
                    showFeedback(elements.scopeFeedback, 'Scope saved. Reload to see changes.', false);
                    showToast('Scope settings saved', 'success');
                } else {
                    throw new Error(data.message || 'Save failed.');
                }
            } catch (e) {
                showFeedback(elements.scopeFeedback, `Error: ${e.message}`, true);
            }
        });
    }

    // ========================================================================
    // SETTINGS: PATTERNS
    // ========================================================================

    async function loadPatternSettings() {
        try {
            if (!elements.patternListContainer) return;
            elements.patternListContainer.innerHTML = '<div class="spinner"></div> Loading...';

            const [availableRes, selectedRes] = await Promise.all([
                fetch('/api/patterns/available'),
                fetch('/api/patterns/selected')
            ]);

            if (!availableRes.ok || !selectedRes.ok) throw new Error('Failed to load patterns');

            const availableData = await availableRes.json();
            const selectedData = await selectedRes.json();
            const available = availableData.availableFiles || [];
            const selected = selectedData.selectedFiles || [];

            elements.patternListContainer.innerHTML = '';

            if (available.length === 0) {
                elements.patternListContainer.innerHTML = '<span style="color: var(--text-muted);">No pattern files found.</span>';
                return;
            }

            available.sort().forEach(file => {
                const isSelected = selected.includes(file);
                const id = `pattern-${file.replace(/[^a-zA-Z0-9]/g, '_')}`;

                const label = document.createElement('label');
                label.htmlFor = id;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = file;
                checkbox.checked = isSelected;
                checkbox.id = id;

                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(` ${file}`));
                elements.patternListContainer.appendChild(label);
            });

            console.log('[Settings] Patterns loaded');
        } catch (e) {
            if (elements.patternListContainer) {
                elements.patternListContainer.innerHTML = '<span style="color: var(--accent-danger);">Error loading patterns.</span>';
            }
            showFeedback(elements.patternsFeedback, 'Error loading patterns.', true);
        }
    }

    if (elements.savePatternsButton) {
        elements.savePatternsButton.addEventListener('click', async () => {
            const checked = elements.patternListContainer.querySelectorAll('input:checked');
            const selectedFiles = Array.from(checked).map(cb => cb.value);

            try {
                showFeedback(elements.patternsFeedback, 'Saving...', false);
                const response = await fetch('/api/patterns/selected', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ selectedFiles })
                });
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
                    throw new Error(errorData.message);
                }
                const data = await response.json();
                if (data.success) {
                    showFeedback(elements.patternsFeedback, 'Selection saved.', false);
                    showToast('Pattern selection saved', 'success');
                } else {
                    throw new Error(data.message || 'Save failed.');
                }
            } catch (e) {
                showFeedback(elements.patternsFeedback, `Error: ${e.message}`, true);
            }
        });
    }

    // ========================================================================
    // LLM & AST ANALYSIS
    // ========================================================================

    function getDetailsRowAndContentDiv(findingId, type = 'llm') {
        const detailsRow = document.getElementById(`details-row-${findingId}`);
        const sectionDiv = detailsRow?.querySelector(`#${type}-details-${findingId}`);
        const contentDiv = sectionDiv?.querySelector('.details-content');
        return { detailsRow, sectionDiv, contentDiv };
    }

    async function triggerSingleLLMAnalysis(findingId, buttonEl, customPrompt = null) {
        const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(findingId, 'llm');
        if (!detailsRow || !sectionDiv || !contentDiv) {
            console.error('[LLM] Details elements missing for', findingId);
            return;
        }

        if (buttonEl) buttonEl.disabled = true;
        detailsRow.style.display = 'table-row';
        sectionDiv.style.display = 'block';
        renderLoading(contentDiv, 'Analyzing with LLM...');

        try {
            const payload = customPrompt ? { customPrompt } : {};
            const response = await fetch(`/api/analyze-llm/${findingId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || `HTTP ${response.status}`);
            renderTextResult(contentDiv, data.analysis);
            showToast('LLM analysis complete', 'success');
        } catch (e) {
            renderError(contentDiv, e.message);
            showToast(`LLM error: ${e.message}`, 'error');
        } finally {
            if (buttonEl) buttonEl.disabled = false;
        }
    }

    async function triggerBatchLLMAnalysis(findingIds) {
        if (findingIds.length === 0) return;

        elements.loadingOverlay.classList.add('visible');
        elements.analyzeSelectedButton.disabled = true;

        findingIds.forEach(id => {
            const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(id, 'llm');
            if (detailsRow && sectionDiv && contentDiv) {
                detailsRow.style.display = 'table-row';
                sectionDiv.style.display = 'block';
                renderLoading(contentDiv, 'Batch analyzing...');
            }
        });

        try {
            const response = await fetch('/api/analyze-llm-batch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ findingIds })
            });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || `HTTP ${response.status}`);

            data.results.forEach(res => {
                const { contentDiv } = getDetailsRowAndContentDiv(res.findingId, 'llm');
                if (contentDiv) {
                    if (res.success) renderTextResult(contentDiv, res.analysis);
                    else renderError(contentDiv, res.analysis);
                }
            });

            showToast(`Batch analysis complete: ${data.results.length} scripts`, 'success');
        } catch (e) {
            findingIds.forEach(id => {
                const { contentDiv } = getDetailsRowAndContentDiv(id, 'llm');
                if (contentDiv) renderError(contentDiv, `Batch error: ${e.message}`);
            });
            showToast(`Batch analysis failed: ${e.message}`, 'error');
        } finally {
            elements.loadingOverlay.classList.remove('visible');
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
            const response = await fetch(`/api/analyze-js-ast-llm/${findingId}`, { method: 'POST' });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || `HTTP ${response.status}`);
            renderTextResult(contentDiv, data.analysis);
            showToast('AST + LLM analysis complete', 'success');
        } catch (e) {
            renderError(contentDiv, e.message);
            showToast(`Analysis error: ${e.message}`, 'error');
        } finally {
            buttonEl.disabled = false;
        }
    }

    async function openPromptModal(findingId) {
        elements.modalFindingIdInput.value = findingId;
        elements.llmPromptTextarea.value = '';
        showFeedback(elements.modalFeedback, 'Loading default prompt...', false);
        elements.llmPromptModal.classList.add('visible');

        try {
            const response = await fetch(`/api/llm-prompt/${findingId}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            if (data.success) {
                elements.llmPromptTextarea.value = data.defaultPrompt || '';
                showFeedback(elements.modalFeedback, '', false);
            } else {
                throw new Error(data.message || 'Failed to load prompt');
            }
        } catch (e) {
            showFeedback(elements.modalFeedback, `Error: ${e.message}`, true);
            elements.llmPromptTextarea.value = '/* Error loading default prompt */';
        }
    }

    async function triggerASTAnalysis(findingId, buttonEl) {
        const { detailsRow, sectionDiv, contentDiv } = getDetailsRowAndContentDiv(findingId, 'ast');
        if (!detailsRow || !sectionDiv || !contentDiv) return;

        buttonEl.disabled = true;
        detailsRow.style.display = 'table-row';
        sectionDiv.style.display = 'block';
        renderLoading(contentDiv, 'Running AST analysis...');

        try {
            const response = await fetch(`/api/analyze-ast/${findingId}`, { method: 'POST' });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || `HTTP ${response.status}`);

            let astHtml = '';
            if (data.astFindings && data.astFindings.length > 0) {
                astHtml += `<p style="margin-bottom: 12px;">Found <code>${data.astFindings.length}</code> items via AST:</p><ul>`;
                data.astFindings.forEach(f => {
                    astHtml += `
                        <li>
                            <strong>Type:</strong> ${escapeHtml(f.type)}<br>
                            <strong>Source:</strong> ${escapeHtml(f.sourceFile)}
                            ${f.pattern && f.pattern !== f.match ? `<br><strong>Pattern:</strong> <code>${escapeHtml(f.pattern)}</code>` : ''}
                            <br><strong>Match:</strong>
                            <pre><code>${escapeHtml(f.match)}</code></pre>
                        </li>`;
                });
                astHtml += '</ul>';
                showToast(`AST found ${data.astFindings.length} items`, 'success');
            } else {
                astHtml = '<p style="color: var(--text-muted); margin: 0;">No items found via AST analysis.</p>';
                showToast('AST analysis complete — no findings', 'info');
            }

            contentDiv.innerHTML = astHtml;
            contentDiv.className = 'details-content';
        } catch (e) {
            renderError(contentDiv, e.message);
            showToast(`AST error: ${e.message}`, 'error');
        } finally {
            buttonEl.disabled = false;
        }
    }

    // ========================================================================
    // SIDE PANE (Code Viewer)
    // ========================================================================

    async function viewJsContent(contentHash, url) {
        const loader = elements.sidePaneContent?.querySelector('.loading-placeholder');
        if (!contentHash || !elements.sidePane || !elements.sidePaneCode || !elements.sidePaneTitle || !sidePanePre || !loader) {
            console.error('[SidePane] Missing elements');
            return;
        }

        sidePanePre.style.display = 'none';
        loader.style.display = 'flex';
        elements.sidePaneTitle.textContent = url.split(/[?#]/)[0].split('/').pop() || url;
        elements.sidePane.classList.add('visible');

        if (elements.wrapLinesCheckbox) elements.wrapLinesCheckbox.checked = false;
        sidePanePre.classList.remove('wrap-active');

        const existingError = elements.sidePaneContent.querySelector('.error');
        if (existingError) existingError.remove();

        try {
            const response = await fetch(`/api/script/${contentHash}`);
            if (!response.ok) throw new Error(`${response.status}: ${await response.text()}`);

            const scriptContent = await response.text();
            elements.sidePaneCode.textContent = scriptContent;
            sidePanePre.style.display = 'block';

            if (window.Prism) {
                Prism.highlightElement(elements.sidePaneCode);
            }
        } catch (e) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = `Error loading: ${e.message}`;
            elements.sidePaneContent.appendChild(errorDiv);
            console.error('[SidePane] Load error:', e);
        } finally {
            loader.style.display = 'none';
        }
    }

    if (elements.closeSidePaneButton) {
        elements.closeSidePaneButton.addEventListener('click', () => {
            elements.sidePane.classList.remove('visible');
        });
    }

    if (elements.wrapLinesCheckbox && sidePanePre) {
        elements.wrapLinesCheckbox.addEventListener('change', (event) => {
            sidePanePre.classList.toggle('wrap-active', event.target.checked);
        });
    }

    // ========================================================================
    // EVENT LISTENERS
    // ========================================================================

    // Table click handlers
    if (elements.findingsTableBody) {
        elements.findingsTableBody.addEventListener('click', (event) => {
            const llmActionButton = event.target.closest('button.llm-action-button');
            const button = event.target.closest('button.action-button');
            const parentRow = event.target.closest('tr.finding-row');

            // LLM dropdown action
            if (llmActionButton) {
                event.stopPropagation();
                const findingId = llmActionButton.dataset.findingId;
                const action = llmActionButton.dataset.action;
                const dropdownContent = llmActionButton.closest('.llm-dropdown-content');
                if (dropdownContent) dropdownContent.classList.remove('visible');

                if (!findingId || !isLLMEnabledOnServer) {
                    if (!isLLMEnabledOnServer) showToast('LLM is disabled', 'error');
                    return;
                }

                if (action === 'default') triggerSingleLLMAnalysis(findingId, llmActionButton);
                else if (action === 'with_ast') triggerLLMWithAST(findingId, llmActionButton);
                else if (action === 'modify_prompt') openPromptModal(findingId);
                return;
            }

            // LLM dropdown toggle
            if (button?.classList.contains('llm-dropdown-button')) {
                event.stopPropagation();
                const dropdownContent = button.nextElementSibling;
                document.querySelectorAll('.llm-dropdown-content.visible').forEach(d => {
                    if (d !== dropdownContent) d.classList.remove('visible');
                });
                if (dropdownContent) dropdownContent.classList.toggle('visible');
                return;
            }

            // Action buttons
            if (button && parentRow) {
                event.stopPropagation();
                const findingId = parentRow.dataset.findingId;
                const contentHash = parentRow.dataset.contentHash;

                if (button.classList.contains('run-ast-button')) {
                    if (findingId && contentHash) {
                        triggerASTAnalysis(findingId, button);
                    } else {
                        showToast('Missing data for AST analysis', 'error');
                    }
                } else if (button.classList.contains('view-js-button')) {
                    if (contentHash) {
                        viewJsContent(contentHash, parentRow.dataset.url || '?');
                    } else {
                        showToast('No content hash available', 'error');
                    }
                }
                return;
            }

            // Row click to toggle details
            if (parentRow && !event.target.closest('button') && event.target.tagName !== 'INPUT') {
                const findingId = parentRow.dataset.findingId;
                if (findingId) {
                    const detailsRow = document.getElementById(`details-row-${findingId}`);
                    if (detailsRow) {
                        detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
                    }
                }
            }
        });

        // Checkbox change handler
        elements.findingsTableBody.addEventListener('change', (event) => {
            if (event.target.classList.contains('row-checkbox')) {
                updateSelectedCount();
            }
        });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.llm-dropdown')) {
            document.querySelectorAll('.llm-dropdown-content.visible').forEach(d => d.classList.remove('visible'));
        }
    });

    // Select all checkbox
    if (elements.selectAllCheckbox) {
        elements.selectAllCheckbox.addEventListener('change', (event) => {
            const isChecked = event.target.checked;
            const visibleCheckboxes = elements.findingsTableBody.querySelectorAll('tr.finding-row:not([style*="display: none"]) .row-checkbox');
            visibleCheckboxes.forEach(cb => {
                if (!cb.disabled) cb.checked = isChecked;
            });
            updateSelectedCount();
        });
    }

    // Analyze selected button
    if (elements.analyzeSelectedButton) {
        elements.analyzeSelectedButton.addEventListener('click', () => {
            const checkedBoxes = elements.findingsTableBody.querySelectorAll('.row-checkbox:checked');
            const findingIds = Array.from(checkedBoxes).map(cb => cb.value).filter(Boolean);
            if (findingIds.length > 0 && isLLMEnabledOnServer) {
                triggerBatchLLMAnalysis(findingIds);
            } else if (!isLLMEnabledOnServer) {
                showToast('LLM is disabled', 'error');
            } else {
                showToast('Select scripts first', 'info');
            }
        });
    }

    // Modal handlers
    if (elements.modalCancelButton) {
        elements.modalCancelButton.addEventListener('click', () => {
            elements.llmPromptModal.classList.remove('visible');
        });
    }

    if (elements.modalSendButton) {
        elements.modalSendButton.addEventListener('click', async () => {
            const findingId = elements.modalFindingIdInput.value;
            const customPrompt = elements.llmPromptTextarea.value;
            if (!findingId || !customPrompt) {
                showFeedback(elements.modalFeedback, 'Missing ID or prompt.', true);
                return;
            }
            elements.llmPromptModal.classList.remove('visible');
            showFeedback(elements.modalFeedback, '', false);
            await triggerSingleLLMAnalysis(findingId, null, customPrompt);
        });
    }

    if (elements.llmPromptModal) {
        elements.llmPromptModal.addEventListener('click', (event) => {
            if (event.target === elements.llmPromptModal) {
                elements.llmPromptModal.classList.remove('visible');
            }
        });
    }

    // ========================================================================
    // SHOW MORE & PAGINATION
    // ========================================================================

    async function loadMoreFindings(reloadFirstPage = false) {
        if (state.isLoadingMore) return;
        if (!state.hasMoreFindings && !reloadFirstPage) return;

        state.isLoadingMore = true;
        elements.showMoreButton.disabled = true;
        elements.showMoreButton.innerHTML = '<div class="spinner"></div> Loading...';

        const offsetToFetch = reloadFirstPage ? 0 : state.currentOffset;
        console.log(`[Pagination] Fetching offset: ${offsetToFetch}`);

        try {
            const response = await fetch(`/api/findings?offset=${offsetToFetch}&limit=50`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();

            state.hasMoreFindings = data.hasMore;

            if (reloadFirstPage) {
                elements.findingsTableBody.innerHTML = '';
                state.currentOffset = 0;
                if (data.findings.length === 0) {
                    if (!elements.noFindingsRow) {
                        elements.noFindingsRow = document.createElement('tr');
                        elements.noFindingsRow.id = 'no-findings-row';
                        elements.noFindingsRow.innerHTML = `<td colspan="6" class="no-findings">No findings matching scope.</td>`;
                    }
                    elements.findingsTableBody.appendChild(elements.noFindingsRow);
                } else {
                    if (elements.noFindingsRow?.parentNode === elements.findingsTableBody) {
                        elements.findingsTableBody.removeChild(elements.noFindingsRow);
                        elements.noFindingsRow = null;
                    }
                }
            }

            data.findings.forEach(f => addFindingRow(f, false));
            state.currentOffset += data.findings.length;
            console.log(`[Pagination] Loaded ${data.findings.length} findings. HasMore: ${state.hasMoreFindings}`);
        } catch (e) {
            console.error('[Pagination] Error:', e);
            showToast('Error loading findings', 'error');
            state.hasMoreFindings = false;
        } finally {
            state.isLoadingMore = false;
            elements.showMoreButton.disabled = !state.hasMoreFindings || state.isLoadingMore;
            elements.showMoreButton.innerHTML = 'Load More';
            if (elements.noMoreFindingsSpan) elements.noMoreFindingsSpan.style.display = state.hasMoreFindings ? 'none' : 'inline';
            if (elements.showMoreButton) elements.showMoreButton.style.display = state.hasMoreFindings ? 'inline-block' : 'none';
            updateSelectedCount();
        }
    }

    if (elements.showMoreButton) {
        elements.showMoreButton.addEventListener('click', () => loadMoreFindings(false));
    }

    // Initial show more button state
    if (!state.hasMoreFindings) {
        if (elements.showMoreButton) elements.showMoreButton.style.display = 'none';
        if (elements.noMoreFindingsSpan) elements.noMoreFindingsSpan.style.display = 'inline';
    } else {
        if (elements.showMoreButton) elements.showMoreButton.style.display = 'inline-block';
        if (elements.noMoreFindingsSpan) elements.noMoreFindingsSpan.style.display = 'none';
    }

    // ========================================================================
    // RE-SCAN
    // ========================================================================

    async function triggerRescan() {
        if (state.isRescanning) {
            showToast('Re-scan already in progress', 'info');
            return;
        }

        if (!confirm('Re-analyze ALL stored JS with current patterns?\n\nExisting regex findings will be replaced. Continue?')) {
            return;
        }

        state.isRescanning = true;
        if (elements.rescanButton) elements.rescanButton.disabled = true;
        if (elements.rescanStatus) {
            elements.rescanStatus.textContent = 'Starting re-scan...';
            elements.rescanStatus.className = '';
        }

        try {
            const response = await fetch('/api/rescan', { method: 'POST' });
            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.message || `HTTP ${response.status}`);
            }
            if (elements.rescanStatus) elements.rescanStatus.textContent = 'Re-scan started. Progress via WebSocket...';
        } catch (error) {
            console.error('[Rescan] Error:', error);
            if (elements.rescanStatus) {
                elements.rescanStatus.textContent = `Error: ${error.message}`;
                elements.rescanStatus.className = 'error';
            }
            showToast(`Rescan failed: ${error.message}`, 'error');
            state.isRescanning = false;
            if (elements.rescanButton) elements.rescanButton.disabled = false;
        }
    }

    if (elements.rescanButton) {
        elements.rescanButton.addEventListener('click', triggerRescan);
    }

    // ========================================================================
    // SORTING
    // ========================================================================

    if (elements.idHeader) {
        elements.idHeader.classList.add('sortable');
        updateSortIndicator();

        elements.idHeader.addEventListener('click', () => {
            const newDirection = (state.currentSort.column === 'id' && state.currentSort.direction === 'asc') ? 'desc' : 'asc';
            state.currentSort.column = 'id';
            state.currentSort.direction = newDirection;
            console.log(`[Sorting] ID: ${newDirection.toUpperCase()}`);
            sortTableById(newDirection);
        });
    }

    // ========================================================================
    // KEYBOARD SHORTCUTS
    // ========================================================================

    document.addEventListener('keydown', (event) => {
        // Escape to close panels/modals
        if (event.key === 'Escape') {
            if (elements.llmPromptModal.classList.contains('visible')) {
                elements.llmPromptModal.classList.remove('visible');
            } else if (elements.sidePane.classList.contains('visible')) {
                elements.sidePane.classList.remove('visible');
            }
            // Close any open dropdowns
            document.querySelectorAll('.llm-dropdown-content.visible').forEach(d => d.classList.remove('visible'));
        }
    });

    // ========================================================================
    // INITIAL LOAD
    // ========================================================================

    loadScopeSettings();
    loadPatternSettings();
    updateSelectedCount();

    console.log('[JS DeepLens] Ready');

}); // End DOMContentLoaded
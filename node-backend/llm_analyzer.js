// File: node-backend/llm_analyzer.js
// Handles interaction with Gemini API - Updated for full JS analysis

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

let genAI;
let model;
let llmEnabled = false;
// Limit context/AST string length sent in prompt if needed, adjust as necessary
const MAX_FINDING_CONTEXT_LENGTH = 500;
const MAX_AST_CONTEXT_LENGTH = 1500;

export function initializeLLM() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.warn("-------------------------------------------------------\nWARNING: GEMINI_API_KEY not set. LLM analysis disabled.\n-------------------------------------------------------");
        llmEnabled = false; return false;
    }
    try {
        genAI = new GoogleGenerativeAI(apiKey);
        model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        console.log("Gemini AI SDK initialized (gemini-1.5-flash-latest).");
        llmEnabled = true; return true;
    } catch (error) {
        console.error("-------------------------------------------------------\nERROR: Init Gemini SDK:", error.message, "\nLLM disabled.\n-------------------------------------------------------");
        llmEnabled = false; return false;
    }
}

// Updated: Generates prompt for analyzing FULL JS content
export function generateDefaultPrompt(fullJsContent, contextUrl, findingType, originalPattern, astContext = null) {
    // Provide context about the original finding, but analyze the full script
    const findingContext = `Original Finding Context:\n- Source URL: ${contextUrl || 'N/A'}\n- Finding Trigger: ${findingType || 'N/A'}\n- Original Rule/Pattern: ${originalPattern || 'N/A'}`;

    const truncatedFindingContext = findingContext.length > MAX_FINDING_CONTEXT_LENGTH
        ? findingContext.substring(0, MAX_FINDING_CONTEXT_LENGTH) + "... (context truncated)"
        : findingContext;

    const astContextString = astContext
        ? `\n\nAdditional Context from AST Analysis:\n${astContext.length > MAX_AST_CONTEXT_LENGTH ? astContext.substring(0, MAX_AST_CONTEXT_LENGTH) + '... (AST context truncated)' : astContext}`
        : "";

    // Analyze the FULL script, using the context for reference
    return `Analyze the following **complete** JavaScript file. ${truncatedFindingContext}${astContextString}

Focus on these points based on the **entire script**:
1. API Endpoint Identification: Describe any web API endpoints defined, called, or referenced. Include:
    - Probable full URL paths (reconstruct if possible, use placeholders like {id}). Attempt to resolve relative paths based on the source URL if applicable.
    - Probable HTTP methods (GET, POST, PUT, DELETE, etc.).
    - Any identifiable path or query parameters.
2. Secrets/Credentials: Identify potential hardcoded secrets, API keys (e.g., AWS, Google Maps, Stripe), tokens (e.g., JWT), credentials, or other sensitive identifiers **anywhere in the script**. State the potential type if identifiable.
3. Brief Explanation: Explain the script's primary purpose, especially concerning any identified endpoints or secrets.

Be concise. Format the output clearly using markdown. If no obvious endpoints or secrets are found in the **entire script**, state "No specific endpoints or secrets identified in this script."

Full JavaScript Code:
\`\`\`javascript
${fullJsContent}
\`\`\`
    `;
}

// Updated: Analyzes full JS content, optionally with AST context
export async function analyzeJSContentWithLLM({ jsContent, contextUrl, findingType, pattern, customPrompt = null, astContext = null }) {
    if (!llmEnabled || !genAI || !model) {
        return "LLM analysis is disabled on the server.";
    }

    if (!jsContent && !customPrompt) { // Need either full JS content or custom prompt
        return "No JS content or custom prompt provided for analysis.";
    }

    // Use custom prompt if provided, otherwise generate default using full JS content and potentially AST context
    const prompt = customPrompt ? String(customPrompt) : generateDefaultPrompt(jsContent, contextUrl, findingType, pattern, astContext);

     if (!prompt || prompt.length < 20) { // Basic prompt validation
        return "Invalid prompt generated or provided.";
    }

    try {
        // Consider adjusting config based on full file analysis needs (longer output?)
        const generationConfig = { temperature: 0.3, topK: 1, topP: 1, maxOutputTokens: 2048 }; // Increased max tokens potentially
        const safetySettings = [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        ];

        // Note: Gemini might have input token limits. Very large JS files could exceed this.
        // Add truncation for jsContent here if needed based on model limits.
        console.log(`Sending prompt to Gemini (length: ${prompt.length})...`);
        const result = await model.generateContent(prompt, generationConfig, safetySettings);
        const response = result.response;

        if (!response || !response.candidates || response.candidates.length === 0 || response.candidates[0].finishReason !== 'STOP') {
             const reason = response?.promptFeedback?.blockReason || response?.candidates?.[0]?.finishReason || 'Unknown';
             console.warn(`Gemini request potentially blocked or finished unexpectedly. Reason: ${reason}`);
             // Consider checking response.text() even if finishReason isn't STOP, sometimes partial content is available
             const partialText = response?.text();
             return `LLM analysis ${partialText ? 'returned partial text' : 'blocked or finished unexpectedly'}. Reason: ${reason}.${partialText ? '\nPartial Response:\n'+partialText : ''}`;
         }

        const text = response.text();
        return text || "LLM analysis returned no text.";

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        let errorMessage = `LLM analysis failed: ${error.message || 'Unknown error'}`;
        if (error.message?.includes('API key not valid')) errorMessage = "LLM analysis failed: Invalid or missing API Key.";
        if (error.message?.includes('429') || error.message?.toLowerCase().includes('quota')) errorMessage = "LLM analysis failed: Rate limit or quota exceeded.";
        if (error.message?.includes('longer than the supported maximum') || error.message?.includes('token limit')) errorMessage = "LLM analysis failed: Input content exceeded model's token limit.";
        // Add more specific checks if needed
        return errorMessage;
    }
}

// Initialize on module load
export const isLLMEnabled = initializeLLM();
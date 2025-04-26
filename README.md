# JS DeepLens 🔎

A modern, interactive dashboard for analyzing JavaScript files captured by Burp Suite, with live updates, regex and AST analysis, and optional LLM (Google Gemini) integration. Designed for security researchers and bug bounty hunters who want deep, customizable JS analysis with a beautiful, responsive UI.  
Credits: Gemini Pro 2.5 Advanced and my subpar manipulation skills.   

---

## Features

- **Live Dashboard & Burp Suite Integration:** Real-time updates and analysis of JavaScript files captured via a Burp Suite extension.
- **Regex & AST Analysis:** Scan JS files for secrets, endpoints, and more using user-selectable regex patterns and on-demand AST (Acorn) analysis. Regex matches are shown in a structured, readable way.
- **LLM Integration (Optional):** Use Google Gemini for advanced analysis, including batch and prompt-customizable LLM runs (15 free requests/minute; API key required).
- **Project Isolation & Scope Control:** Each project uses its own SQLite DB and JS storage. Easily filter analysis scope with include/exclude URL regexes and pattern selection.
- **Modern, Responsive UI:** Syntax-highlighted JS viewer, sortable/paginated findings, re-scan button, and clear status indicators. All features accessible via a clean, accessible interface.
- **Source Map Detection:** Instantly see which JS files have source maps with a clear badge.

---

## Architecture

- **Backend:** Node.js (Express, Socket.IO, SQLite, Acorn, @google/generative-ai)
- **Frontend:** EJS templates, client-side JS (`public/js/script.js`), Prism.js for syntax highlighting, custom CSS (`public/css/styles.css`)
- **Burp Extension:** Python (Jython) script (`burp-extension/js_sender_extension.py`) sends HTTP/JS data to backend

---

## Prerequisites

- **Node.js:** v18, v20, or v22 (LTS recommended; avoid v23+)
- **npm**
- **Burp Suite** (Community or Pro)
- **Jython Standalone JAR:** v2.7.x (for Burp)
- **Python 2.7** (for Jython pip)
- **Google Gemini API Key** (optional, for LLM features)

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository_url> JS-DeepLens
cd JS-DeepLens
```

### 2. Backend Setup

```bash
cd node-backend
npm install
```

- Place your `.json` regex pattern files in `node-backend/patterns/` (examples included).
- (Optional) Add `favicon.ico` to `node-backend/public/`.

### 3. (Optional) Enable LLM (Google Gemini) Features

- **Free Tier:** Google Gemini allows up to **15 requests per minute for free** (as of June 2024).
- **How to Generate a Gemini API Key:**
  1. Go to [Google AI Studio API Keys](https://aistudio.google.com/app/apikey) and sign in with your Google account.
  2. Click "Create API Key" and follow the prompts.
  3. Copy your API key.
- **Set your Gemini API key as an environment variable:**
  ```bash
  export GEMINI_API_KEY='your-key-here'
  ```
  (Add this to your `.bashrc`, `.zshrc`, or equivalent for persistence.)

### 4. Burp Extension Setup

- Download `requests` for Jython:
  ```bash
  cd burp-extension
  mkdir -p jython_libs
  pip2 install --target=jython_libs requests
  ```
- In Burp Suite:
  - Set Jython JAR path (e.g., `burp-extension/Jython Standalone 2.7.4.jar`)
  - Set "Folder for loading modules" to your Jython libs folder (e.g., `jython_libs`)
  - Load `burp-extension/js_sender_extension.py` in the Extender tab

---

## Usage

### 1. Start the Backend

```bash
cd node-backend
node server.js --project myproject
```

- The server will create a SQLite DB in `projects/<projectname>/database/` and store JS files in `projects/<projectname>/js_files/`.
- The project name is used for DB and file isolation.

### 2. Use Burp Suite

- Enable the extension and proxy your target traffic through Burp.

### 3. Open the Dashboard

- Go to [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Configure & Analyze

- **Scope:** Set include/exclude URL regexes in the UI.
- **Patterns:** Select which regex pattern files to use. Use the "Re-scan Project" button to re-analyze all stored JS with the current patterns.
- **Findings:** View, paginate, and expand findings. Regex matches are now shown in a structured, readable way.
- **Show More:** Use the "Show More" button to load additional findings (no infinite scroll yet).
- **Sorting:** Click the ID column to sort findings by script ID.
- **Batch LLM Analysis:** Select multiple scripts using the checkboxes and click "Analyze Selected with LLM" to analyze them in a batch.
- **LLM Prompt Customization:** When using LLM analysis, you can modify the prompt before sending for custom analysis.
- **Source Map:** Look for the green "Source Map" badge for files with detected source maps (hover for tooltip).
- **JS Source:** Click "View JS" to see the code in a side pane.
- **AST/LLM:** Use the "AST" button or "LLM" dropdown for deeper analysis (if enabled).

### 5. Thanks
- Gemini Team for making something so good. 
- `gf` tool's team for making amazing regexes that I've copied. 
- Triple digit AQI that stopped me from going outside and hence forced me to sit on my desk.

---

## Directory Structure

```
JS-DeepLens/
  burp-extension/
    js_sender_extension.py
    Jython Standalone 2.7.4.jar
    requirements.txt
  node-backend/
    analyzer.js
    llm_analyzer.js
    server.js
    package.json
    database/
    js_files/
    patterns/
    public/
      css/
        styles.css
      js/
        script.js
    views/
      dashboard.ejs
  README.md
```

---

## Troubleshooting

- **No Connection:** Check Node.js and Burp Suite logs, and browser console.
- **Jython Issues:** Ensure correct JAR and Python 2.7 libs.
- **Pattern Issues:** Only valid `.json` files in `patterns/` are loaded.
- **Permissions:** Node.js must have write access to `database/` and `js_files/`.
- **LLM Issues:** Ensure `GEMINI_API_KEY` is set before starting the server.
- **UI Not Updating:** Restart Node.js server and clear browser cache.

---

## Limitations

- One project at a time (per server instance)
- No UI for project management (create/delete/list)
- Only JS files (no inline JS from HTML)
- New findings may lack DB ID until reload
- LLM results are returned in batch
- No batch download for JS/maps (still TODO)
- 'Source Map Detected' badge is not yet clickable for download (still TODO)
- No infinite scroll (use "Show More" button)

## TODO  
(Some of these are fixed in private branch, but I am not releasing that for obvious reasons.)

- [ ] Fix the broken Regex Matches: The backend functionality is operational, but the UI needs adjustments to properly display the matches. (pun intended)
- [ ] Make the 'Source Map Detected' button clickable to download the map. 
- [ ] Batch download button for JS/Maps same as the one that exists for LLM  
  
---

## License

**NO-RESPONSIBILITY License:**  
Use as you wish. If (sh)it breaks, I will laugh.

---

If you have questions, suggestions, or want to contribute, open an issue or PR!

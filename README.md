# JS DeepLens 🔎

A modern, interactive dashboard for analyzing JavaScript files captured by Burp Suite, with live updates, regex and AST analysis, and optional LLM (Google Gemini) integration. Designed for security researchers and bug bounty hunters who want deep, customizable JS analysis with a beautiful, responsive UI.
Credits: Gemini Pro 2.5 Advanced and my subpar manipulation skills.   

---

## Features

- **Live Dashboard:** Real-time updates via WebSockets (Socket.IO).
- **Burp Suite Integration:** Receives HTTP response and JS file data from a companion Burp extension.
- **Regex Pattern Analysis:** User-selectable regex patterns (from JSON files) to scan JS for secrets, endpoints, and more.
- **AST Analysis:** On-demand structural analysis using Acorn, with results shown inline.
- **LLM Integration (Optional):** Trigger Google Gemini API for advanced analysis (default, with AST, or custom prompt).
- **Source Map Detection:** Clearly labeled “Source Map” badge (green) for JS files with detected source maps.
- **Project Isolation:** Each project uses its own SQLite database and JS file storage.
- **Scope Filtering:** UI for include/exclude URL regexes to control what gets analyzed.
- **Pattern Selection:** UI to choose which regex pattern files are active.
- **JS Source Viewer:** Syntax-highlighted, line-wrapped JS source in a side pane.
- **Pagination:** “Show More” button to load additional findings.
- **Responsive UI:** Clean, modern design with clear status, tooltips, and accessibility in mind.

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
git clone <repository_url> js-ultra-parse-dashboard
cd js-ultra-parse-dashboard
```

### 2. Backend Setup

```bash
cd node-backend
npm install
mkdir -p patterns public database js_files
```

- **Add Pattern Files:** Place your `.json` regex pattern files in `node-backend/patterns/` (examples included).
- **(Optional) Add Favicon:** Place `favicon.ico` in `node-backend/public/`.
- **(Optional) LLM:** Set your Gemini API key:  
  ```bash
  export GEMINI_API_KEY='your-key-here'
  ```

### 3. Burp Extension Setup

- Download `requests` for Jython:
  ```bash
  mkdir -p ~/jython_libs
  pip2 install --target=~/jython_libs requests
  ```
- In Burp Suite:
  - Set Jython JAR path (e.g., `burp-extension/Jython Standalone 2.7.4.jar`)
  - Set “Folder for loading modules” to your Jython libs folder (e.g., `~/jython_libs`)
  - Load `burp-extension/js_sender_extension.py` in the Extender tab

---

## Usage

### 1. Start the Backend

```bash
cd node-backend
node server.js --project myproject
```

- The server will create a SQLite DB in `database/` and store JS files in `js_files/`.
- The project name is used for DB and file isolation.

### 2. Use Burp Suite

- Enable the extension and proxy your target traffic through Burp.

### 3. Open the Dashboard

- Go to [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Configure & Analyze

- **Scope:** Set include/exclude URL regexes in the UI.
- **Patterns:** Select which regex pattern files to use.
- **Findings:** View, paginate, and expand findings.
- **Source Map:** Look for the green “Source Map” badge for files with detected source maps (hover for tooltip).
- **JS Source:** Click “View JS” to see the code in a side pane.
- **AST/LLM:** Use the “AST” button or “LLM” dropdown for deeper analysis (if enabled).

### 5. Thanks
- Gemini Team for making something so good. 
- `gf` tool's team for making amazing regexes that I've copied. 
- Triple digit AQI that stopped me from going outside and hence forced me to sit on my desk.

---

## Directory Structure

```
js-ultra-parse-dashboard/
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
- Broken (TODO) Regex matches 

## TODO  
(Some of these are fixed in private branch, but I am not releasing that for obvious reasons.)

- [ ] Fix the broken Regex Matches: The backend functionality is operational, but the UI needs adjustments to properly display the matches. (pun intended)
- [ ] Make the 'Source Map Detected' button clickable to download the map. 
- [ ] Batch download button for JS/Maps same as the one that exists for LLM  
  
---

## License

**I-DONT-GIVE-A-DAMN License:**  
Use as you wish. If (sh)it breaks, I will laugh.

---

If you have questions, suggestions, or want to contribute, open an issue or PR!

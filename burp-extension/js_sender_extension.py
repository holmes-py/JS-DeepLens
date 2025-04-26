# File: burp-extension/js_sender_extension.py
# Corrected syntax error in send_to_backend_sync.

from __future__ import print_function
import sys
from burp import IBurpExtender, IHttpListener
import json
import threading
import time
import re # Import regex module

# --- Configuration ---
NODE_BACKEND_BASE_URL = "http://localhost:3000"

# --- Internal Ignore List ---
# Add/Remove regex patterns (case-insensitive) for URLs to ignore.
IGNORE_URL_PATTERNS = [
    # == Analytics & Tag Managers ==
    r"google-analytics\.com", r"googletagmanager\.com", r"googleadservices\.com",
    r"analytics\.google\.com", r"stats\.g\.doubleclick\.net", r"datadome\.co/captcha/",
    r"cdn\.segment\.com", r"clarity\.ms", r"hotjar\.com", r"hj\.hotjar\.com",
    r"static\.hotjar\.com", r"amplitude\.com", r"cdn\.amplitude\.com",
    r"matomo\.cloud/", r"matomo\.php", r"piwik\.php",

    # == Payment Processors ==
    r"js\.stripe\.com/v[23]/", r"q\.stripe\.com", r"paypal\.com/sdk/js",
    r"paypalobjects\.com", r"js\.braintreegateway\.com/",
    r"m\.stripe\.network/",
    # == Common CDNs ==
    r"cdn\.jsdelivr\.net/npm/", r"cdnjs\.cloudflare\.com/ajax/libs/",
    r"ajax\.googleapis\.com/ajax/libs/", r"code\.jquery\.com/jquery-",
    r"maxcdn\.bootstrapcdn\.com/", r"unpkg\.com/",

    # == Widgets & Support Platforms ==
    r"widget\.intercom\.io/", r"js\.intercomcdn\.com/", r"static\.zdassets\.com/",
    r"static\.intercomassets\.com/", r"embed\.tawk\.to/", r"js\.driftt\.com/",
    r"js\.hs-scripts\.com/",

    # == Ad Tech & Trackers ==
    r"connect\.facebook\.net/en_US/fbevents\.js", r"platform\.twitter\.com/widgets\.js",
    r"snap\.licdn\.com/li\.lms-analytics", r"ads\.linkedin\.com/",
    r"ads-twitter\.com/", r"ads\.yahoo\.com/", r"doubleclick\.net/",

    # == Error Monitoring ==
    r"browser\.sentry-cdn\.com/", r"js\.sentry-cdn\.com/", r"sentry\.io/api/",
    r"bugsnag\.com/", r"cdn\.bugsnag\.com/",

    # == Fonts ==
    r"fonts\.googleapis\.com/", r"use\.fontawesome\.com/",
    r"static\.fontawesome\.com/",

    # == Consent Management ==
    r"cdn\.cookielaw\.org/", r"consent\.cookiebot\.com/", r"app\.termly\.io/",

    # == Miscellaneous ==
    r"gstatic\.com/", r"recaptcha\.net/", r"hcaptcha\.com/",
    # --- Add custom ignores below ---
    r"gtm\.mentimeter\.com/",
]   
# Compile regexes on load
try:
    _compiled_ignore_patterns = [re.compile(p, re.IGNORECASE) for p in IGNORE_URL_PATTERNS]
    print("Compiled %d internal ignore patterns." % len(_compiled_ignore_patterns))
except Exception as compErr:
    print("ERROR compiling ignore patterns: %s. Ignore list may not work." % compErr)
    _compiled_ignore_patterns = []
# --- <<< End Ignore List >>> ---


# Expanded MIME List
JAVASCRIPT_MIMES = [
    "application/javascript", "text/javascript", "application/ecmascript",
    "text/ecmascript", "application/x-javascript", "text/plain",
    "application/octet-stream", "application/json", "application/node",
    "script"
]
# --- /Configuration ---

# --- Library Import ---
try: import requests; _requests_loaded = True; print("OK: imported 'requests'")
except ImportError: print("ERROR: Failed import 'requests'. Check Burp Jython config."); requests = None; _requests_loaded = False

class BurpExtender(IBurpExtender, IHttpListener):

    def registerExtenderCallbacks(self, cb):
        self._callbacks = cb; self._helpers = cb.getHelpers(); cb.setExtensionName("JS Sender (Jython+IgnoreList)"); # Use latest name
        print("Requests loaded: %s" % _requests_loaded); cb.registerHttpListener(self);
        print("JS Sender Loaded. Backend: %s" % NODE_BACKEND_BASE_URL);
        print("Ignoring URLs matching internal patterns: %d rules" % len(_compiled_ignore_patterns))
        print("Watching MIMEs: %s" % JAVASCRIPT_MIMES)

    # Helper function to send data asynchronously
    def send_data_async(self, endpoint_path, payload):
        if not _requests_loaded: return
        thread = threading.Thread(target=self.send_to_backend_sync, args=(endpoint_path, payload,))
        thread.daemon = True
        thread.start()

    # *** CORRECTED SYNTAX in this function ***
    # Synchronous function executed by the thread
    def send_to_backend_sync(self, endpoint_path, payload):
        target_url = NODE_BACKEND_BASE_URL + endpoint_path
        source_url_log = payload.get("url", "N/A") # For logging
        try:
            # --- Code inside try block ---
            headers = {'Content-Type': 'application/json'}
            # print("[%s] Sending POST to %s" % (source_url_log[:60], target_url)) # Optional verbose log
            response = requests.post(target_url,
                                     headers=headers,
                                     data=json.dumps(payload),
                                     timeout=10) # Request timeout

            # Only log errors or non-200 responses to keep output clean
            if response.status_code != 200:
                 error_text = response.text[:200] if response.text else "(No response body)"
                 print("[%s] Error sending data to %s: Status %d - %s" % (
                    source_url_log[:60], target_url, response.status_code, error_text
                 ))
            # else: # Keep success silent
            #    print("[%s] Successfully sent data to %s." % (source_url_log[:60], target_url))

        except requests.exceptions.RequestException as e:
            # Log network errors
            print("[%s] Network error sending data to %s: %s" % (source_url_log[:60], target_url, e))
        except Exception as e:
             # Log other unexpected errors
             print("[%s] Unexpected error sending data to %s: %s" % (source_url_log[:60], target_url, e))
             # Uncomment traceback for deeper debugging if needed
             # import traceback
             # traceback.print_exc()

    def processHttpMessage(self, tool, isReq, msgInfo):
        if isReq or not _requests_loaded: return

        process_url = "N/A"
        try:
            process_url = str(self._helpers.analyzeRequest(msgInfo).getUrl())
        except Exception as e:
            print("Err get URL: %s" % e); return

        # --- Check against Ignore List FIRST ---
        for pattern in _compiled_ignore_patterns:
            if pattern.search(process_url):
                # print("[%s] Skipping: Matched internal ignore pattern." % process_url[:60]) # Enable for debug
                return # Stop processing this request/response entirely
        # --- End Ignore Check ---

        # If not ignored, log the request (asynchronously)
        self.send_data_async('/log', {'url': process_url})

        # Continue with checking for JS and sending to /analyze if applicable
        try:
            rspInfo = self._helpers.analyzeResponse(msgInfo.getResponse()); mimeS = (rspInfo.getStatedMimeType() or ""); mimeI = (rspInfo.getInferredMimeType() or ""); mimeE = mimeS if mimeS else mimeI
            match, b_mime = False, None; mimeEL = mimeE.lower().strip()
            for bm in JAVASCRIPT_MIMES:
                if mimeEL.startswith(bm): match, b_mime = True, bm; break

            if match:
                # print("[%s] JS MATCH! MIME '%s' ~ '%s'. Sending..." % (process_url[:60], mimeE, b_mime)) # Keep console cleaner
                bodyBytes = msgInfo.getResponse()[rspInfo.getBodyOffset():]
                try:
                    bodyStr = self._helpers.bytesToString(bodyBytes); payload = { "url": process_url, "content": bodyStr }; self.send_data_async('/analyze', payload)
                except Exception as e: print("[%s] Err decode JS: %s" % (url[:60], e))
        except Exception as e: print("[%s] Err process response: %s" % (url[:60], e)) #; import traceback; traceback.print_exc()

# -------- Usage Notes Reminder -----------
# 1. Modify IGNORE_URL_PATTERNS list in this script for custom ignores.
# 2. Reload extension in Burp after modification.
# 3. Check README.md for full setup.
# ----------------------------------------
var _sTrackingAlreadyPresent = (typeof window._svd !== 'undefined' && typeof window._svc !== 'undefined');var _svc = window._svc || {};var _svd = window._svd || {};_svc.workspaceKey = _svc.workspaceKey || 'c7be5c24c1ea6f9179d2a84dcfc0778d';_svd.flags = _svd.flags || {"async_consumers":true};_svd.surveys = _svd.surveys || [];_svd.themes = _svd.themes || [];_svd.permissions = _svd.permissions || {"targeting_javascript_api":true};_svd.audiences = _svd.audiences || [];_svd.integrations = _svd.integrations || [];_svd.installing = _svd.installing || false;_svd.translations = _svd.translations || null;// Generated at: 2023\u002D08\u002D04\u002010\u003A58\u003A28
(function () {
  if (_sTrackingAlreadyPresent) {
    return;
  }

  if (document && document.head) {
    var linkElement = document.createElement('link');
    linkElement.href = 'https\u003A\/\/surveys\u002Dstatic.survicate.com/fonts/fonts.css';
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    document.head.appendChild(linkElement);
  }

  var isIE = window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.match(/Trident.*rv\:11\./);
  var isSafari = window.navigator.vendor && window.navigator.vendor.indexOf('Apple') > -1 && window.navigator.userAgent && window.navigator.userAgent.indexOf('CriOS') == -1 && window.navigator.userAgent.indexOf('FxiOS') == -1;

  var isOldSafari = false;
  if (isSafari && window.navigator.userAgent) {
    var match = window.navigator.userAgent.match(/Version.([0-9]+)\./);
    if (match && match.length === 2) {
      if (parseInt(match[1]) < 11) {
        isOldSafari = true;
      }
    }
  }
  var isOldEdge = window.navigator.userAgent.match(/Edge\/(15\.15|18\.18)/);

  var coreUrls = [''];
  var e = document.getElementsByTagName('script')[0];

  if (isIE || isOldSafari || isOldEdge) {
    var css = 'h1 { width: 75%; height: 50%; overflow: auto; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; text-align: center; font-family: sans-serif; }'
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    var message = 'Your browser doesnât meet our security standards. Please update your browser to answer this survey.'
    var body = document.querySelector('body');
    var splash = document.createElement('div');
    var survey = document.querySelector('.survicate-survey');

    if(!head || !survey) {
      return;
    }

    head.appendChild(style);

    style.type = 'text/css';

    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    splash.classList.add('splash-screen');
    splash.innerHTML = '<h1>' + message + '</h1>';

    if(!body) {
      return;
    }

    body.appendChild(splash);

    return;
  }

  for (var i = 0; i < coreUrls.length; i++) {
    var s = document.createElement('script');
    s.setAttribute('crossorigin', 'anonymous');
    s.src = coreUrls[i];
    s.async = true;
    e.parentNode.insertBefore(s, e);
  }
})();

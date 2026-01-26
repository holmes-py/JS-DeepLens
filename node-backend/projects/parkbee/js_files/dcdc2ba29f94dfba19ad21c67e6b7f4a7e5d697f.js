if (typeof window !== 'undefined') {
  window.intercomSettings = {
    api_base: 'https://api-iam.eu.intercom.io',
    app_id: 'qltqm19k',
  };

  (() => {
    const w = window;
    const ic = w.Intercom;

    if (typeof ic === 'function') {
      ic('reattach_activator');
      ic('update', w.intercomSettings);
    } else {
      const d = document;
      const i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;

      const loadIntercom = () => {
        const s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = `https://widget.intercom.io/widget/${w.intercomSettings.app_id}`;
        const x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };

      w.addEventListener('load', loadIntercom, { once: true });
    }
  })();
}

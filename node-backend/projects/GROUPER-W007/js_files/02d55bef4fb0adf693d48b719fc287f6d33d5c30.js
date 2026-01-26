helpers = (dust||{}).helpers||{};
helpers.human_simple_date = function(chunk, context, bodies, params) {
  function pad(s) { return (s < 10) ? '0' + s : s; }

  function formatDate(date) {
    var clean_date = typeof date === 'string' ? date.replace(' ', 'T') : date;
    var d = new Date(clean_date);
    return [pad(d.getUTCDate()), pad(d.getUTCMonth()+1), d.getUTCFullYear()].join('/');
  }

  function stringFormatDate(date) {
    var d = new Date(date);
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return [pad(d.getUTCDate()), ('de ' + meses[d.getUTCMonth()])].join(' ');
  }
  function stringFormatDateUTC(date) {
    var d = new Date(date);
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return [pad(d.getUTCDate()), ('de ' + meses[d.getUTCMonth()]), d.getUTCFullYear()].join(' ');
  }
  
  var date       = dust.helpers.tap(params.date, chunk, context);
  var format     = dust.helpers.tap(params.format, chunk, context) || 0;
  switch (format) {
    // Format dia de Mes (letra) anio
    case '1':
      return chunk.write(stringFormatDateUTC(date));
      break;
    // Format dia de Mes (letra)
    case '2':
      return chunk.write(stringFormatDate(date));
      break;
    // Formato dia/mes/anio
    default:
      return chunk.write(formatDate(date));
  }
  
};
helpers.price = function (chunk, context, bodies, params) {
  var price = dust.helpers.tap(params.price, chunk, context);
  if ('string' === typeof price) price = price.replace('.', ',');
  if (!price) return '';

  var currency = dust.helpers.tap(params.currency, chunk, context) || 'â¬';

  if (params.currency === undefined) {
    currency = 'â¬';
  } else {
    currency = dust.helpers.tap(params.currency, chunk, context) || 'â¬';
  }

  currency = currency.replace('EUR', 'â¬');
  currency = currency.replace(' Kilo', '/Kg');
  

  var separator = dust.helpers.tap(params.separator, chunk, context) || ',';

  if ('string' === typeof price) {
    if (price.indexOf('EUR') >= 0) {
      price = price.replace('EUR', '').trim();
    }
  } else {
    price = price.toString();
    separator = '.';
  }
  if(params.customprice && params.customprice !== 'false') { // customprice adapt <0,01 EUR TO 0 EUR
    const priceF = price.replace(',', '.');
    if(Number(priceF) <= 0.01) price = 0;

  }
  if (price == 0){
    if(params.locale && params.zerotofree && params.zerotofree !== 'false') // zerotofree adapt '0 EUR' to 'GRATIS'
      return chunk.write('<span class="js-currency">' + i18n.jsHelper('product_detail.gratis', params.locale) + '</span>');
    else return chunk.write('<span>0</span> <span class="js-currency">' + currency + '</span>');
  } 

  var integerPart = price.split(separator)[0];
  var fractionalPart = price.split(separator)[1];
  var formatInteger = function (value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, function (c) { return '.' + c; });
  };

  var formatFractional = function (value) {
    if (!value) return '00';
    if (value.length === 1) return value + '0';
    return value.substring(0, 2);
  };

  var integerPrice = formatInteger(integerPart);
  var floatingPrice = formatFractional(fractionalPart);

  var spanIntegerPrice = '<span class="integer-price">'+integerPrice+'</span>';
  var spanFloatingPrice = (floatingPrice!=='00')? ',<span>' + floatingPrice + '</span>' : '';
  var spanCurrency = ' <span class="js-currency">'+ currency +'</span>' + '<span itemprop="priceCurrency" content="EUR" class="hidden">EUR</span>';

  return chunk.write(spanIntegerPrice + spanFloatingPrice + spanCurrency);
};
helpers.set = function(chunk, context, bodies, params) {
  var value = dust.helpers.tap(params.value, chunk, context);
  var key = dust.helpers.tap(params.key, chunk, context);
  var force = dust.helpers.tap(params.force, chunk, context);
  if (context && context.current() && context.current()[key] && !force) return;
  if (!bodies.block) context.stack.head[key] = value;
  else
    return chunk.capture(bodies.block, context, function(data, chunk) {
      var value = data;
      try {
        value = JSON.parse(value);
      } finally {
        context.current()[key] = value;
        chunk.end();
      }
    });
};
helpers.svgicon = function(chunk, context, bodies, params) {
  var url         = dust.helpers.tap(params.url,context,context);
  var icon        = dust.helpers.tap(params.icon,context,context);
  var version     = dust.helpers.tap(params.version,context,context) || '1.0';
  var classList   = dust.helpers.tap(params.class, context,context);
  var fullUrl;
  var assetsBase;

  if('undefined' !== typeof process){
    var config      = require('config');
    assetsBase      = (config.has('svg_base'))? config.get('svg_base'):null;
    if(!assetsBase)  assetsBase  = (config.has('assets_base')) ? config.get('assets_base'):null;

    var contextPath = (config.has('context'))? config.get('context'):'';
    if ((process.env.NODE_ENV || 'development') == 'development') {
      var execd = /(.*)\.min(\.(js|css|svg))/.exec(url);
      if (execd) url = execd[1] + execd[2];
    }
  }else{
    assetsBase  = window.GECI_SVG_BASE || window.GECI_ASSETS_BASE;
  }

  if (assetsBase !== '' && !assetsBase) {
    fullUrl = contextPath + url;
  }else{
    fullUrl = assetsBase + url;
  } 

  var svgtag  = '<svg class="xlink_support ' + classList +'">';
  svgtag     += '<use xlink:href="' + fullUrl+'#'+icon+'"></use>';
  svgtag     += '</svg>';

  var svgietag  = '<svg class="xlink_no_support ' + classList + '">';
  svgietag     += '<use xlink:href="#'+icon+'"></use>';
  svgietag     += '</svg>';
  return chunk.write(svgtag+svgietag);
};
helpers.asset = function (chunk, context, bodies, params) {
  var assetsBase;
  var url = dust.helpers.tap(params.url, chunk, context);
  if (typeof process !== 'undefined') {
    var asset_base_url = dust.helpers.tap(params.asset_base_url, chunk, context);
    if(asset_base_url) assetsBase = asset_base_url;
    else assetsBase = (config.has('assets_base')) ? config.get('assets_base') : null;
    var contextPath = (config.has('context')) ? config.get('context') : '';
    var fingerprint = dust.helpers.tap(params.fingerprint, chunk, context) == 'true';
    var fingerprintEnabled = dust.helpers.tap(params.fingerprintenabled, chunk, context)  == 'true';
    if ((process.env.NODE_ENV || 'development') == 'development') {
      var execd = /(.*)\.min(\.(js|css))/.exec(url);
      if (execd) url = execd[1] + execd[2];
    }
    if (!assetsBase) {
      var contextUrl = contextPath + url;
      if(typeof util !== 'undefined') contextUrl = util.replaceSGFM(contextUrl, false);
      return chunk.write(contextUrl);
    }
    if (fingerprint && fingerprintEnabled) {
      if (!specific.get('fingerprint')) return;
      var parsed = URL.parse(url);
      url = url + ((parsed.query) ? '&' : '?') + specific.get('fingerprint');
    }
  } else {
    assetsBase = window.GECI_ASSETS_BASE ? window.GECI_ASSETS_BASE : '';
  }
  var base = assetsBase + url;
  if(typeof util !== 'undefined') base = util.replaceSGFM(base, false); 
  chunk.write(base);
};
helpers.day_month_date = function(chunk, context, bodies, params) {
  var date       = dust.helpers.tap(params.date, chunk, context);
  if('undefined' === typeof date) return chunk.write('');
  var getDate = ['Enero','Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var str = date.split('/');
  text = str[0]+' de '+getDate[(Number(str[1])-1)];
  return chunk.write(text);
};
helpers.tabs = function(chunk, context, bodies, params) {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var ctxt = context.current();
  var config = params.config; 
  
  // Checking if there is a group tabs name or setting one by default
  var groupTabsId = config.group_tabs_id ? config.group_tabs_id : ('groupTabs' + getRandomInt(1, 1000));
  config.group_tabs_id = groupTabsId;
  var availableTypes = ['full', 'tabs', 'accordion'];
  var type = (params.type ? (availableTypes.indexOf(params.type) !== -1 ? params.type  : 'full') : 'full');
  config.type = type;

  // checking if the tab Ids are defined
  config.content.forEach(function(element, index) {
    if (!element.tab_id || element.tab_id === '') {
      element.tab_id = groupTabsId + '_tab_' + index;
    }
  });
  var data = dust.helpers.tap(config, chunk, context);
  return chunk.capture(bodies.block, context, function(block, chunk) {
    data.block = block;
    dust.render('store/components/tabs/structure_tabs', data, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        chunk.end(result);
      }
    });
  });
};
helpers.regex = function (chunk, context, bodies, params) {
  var modelData = function (value, obj, equal) {
    return obj.find(function (x) { return x[equal] == value });
  };
  var obj       = dust.helpers.tap(params.obj, chunk, context);
  var key       = dust.helpers.tap(params.key, chunk, context);
  var _locale   = dust.helpers.tap(params.locale, chunk, context) || 'es';
  var provider  = dust.helpers.tap(params.selected, chunk, context);
  var print     = '';
  var domicilio = ( _locale === 'es' ) ? "Domicilio" : "DomicÃ­lio";
  //los siguientes fracmentos se deberian interpolar por medio de {} es decir let {shipping } = model(foo, bar,foo)
  //esto con fin de bajar un nivel mÃ¡s sin necesidad de redeclarar
  if (!!obj.length || !!key || !!provider) {
    var data      = modelData(provider, obj, 'provider_id');
    var shipping  = (data) ? data.shipping : false;
    var shipping  = data && data.shipping;
    if (!!shipping) {            
      var homeDelivery  = modelData(domicilio, shipping, 'title');
      var locations     = homeDelivery && homeDelivery.locations;
      if (!!locations) {
        var index = locations.findIndex(function (x) { return x.title.indexOf(key) !== -1; });
        if(index === -1) return;
        var result = locations[index].shipping.replace('EUR', 'â¬');
        print = '<input class="js_shipping-holder" data-cost="' + result + '" type="hidden"/>';
      }
    }
  }
  return chunk.write(print);
};
helpers.analytics_event = function(chunk, context, bodies, params) {
  var template = '<span data-json="{obj}" data-scope="{type}" class="dataholder"></span>';
  var template = dust.loadSource(dust.compile(template, 'analytics_event'));
  var data = {
    obj:  dust.helpers.tap(params.obj,  chunk, context),
    type: dust.helpers.tap(params.type, chunk,context)
  };
  if(!data.obj) return;
  return chunk.capture(bodies.block, context, function(block, chunk) {
    data.block = block;
    dust.render(template, data, function(err, result) {
      if (err) console.error(err);
      chunk.end(result);
    });
  });
};
helpers.readable_date = function(chunk, context, bodies, params) {
  try {
    var locale = params.locale;
    var months;
    var weekDays;
    if (locale == 'pt_PT') {
      months = ['Janeiro', 'Fevereiro', 'MarÃ§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      weekDays = ['domingo', 'segunda', 'terÃ§a', 'quarta', 'quinta', 'sexta', 'sÃ¡bado'];
    }
    else {
      months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      weekDays = ['domingo', 'lunes', 'martes', 'miÃ©rcoles', 'jueves', 'viernes', 'sÃ¡bado'];
    }
    var date     = params.date ? new Date(dust.helpers.tap(params.date, chunk, context)) : null;
    var skipYear = dust.helpers.tap(params.skipYear, chunk, context) || false;

    if (!date) return;
    if (Object.prototype.toString.call(date) === '[object Date]' && isNaN(date.getTime())) return;

    var formatedDate = '';
    var dddd = date.getDay();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();

    // DDDD dd de MMMM [de yyyy]
    if(skipYear)
      formatedDate = weekDays[dddd] + ' ' + dd + ' de ' + months[mm].toLowerCase();
    else
      formatedDate = weekDays[dddd] + ' ' + dd + ' de ' + months[mm] + ' de ' + yyyy;

    // Alternativa para aplicar cuando dejemos de dar soporte a ie11
    // var skipYear = dust.helpers.tap(skipYear, chunk, context) || false;
    // var options = skipYear ? { month: 'long', day: 'numeric' } : { month: 'long', day: 'numeric', year: 'numeric' };
    // var date = new Date(dust.helpers.tap(params.date, chunk, context));
    // var formatedDate = date.toLocaleDateString(locale, options);
    
    return chunk.write(formatedDate);
  } catch(e) {
    return;
  }
};
helpers.url_parse = function(chunk, context, bodies, params) {
  var urlParsed = dust.helpers.tap(params.url, chunk, context);
  
  /** HTTP to HTTPS: */
  var re = /^http:\/\//gm;
  urlParsed = urlParsed.replace(re, 'https://');

  return chunk.write(urlParsed);
};
helpers.url_is_valid = function(chunk, context, bodies, params) {
  var _url = dust.helpers.tap(params.url, chunk, context);
  
  var re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;
  var res = re.test(_url);

  return res;
};
helpers.url_for = function(chunk, context, bodies, params) {
  var reserved = ['name', 'term', 'keep_query'];
  var url;
  var query      = {};
  var data       = {};
  var hasQuery   = false;
  var name       = dust.helpers.tap(params.name, chunk, context);
  var term       = dust.helpers.tap(params.term, chunk, context);
  term       = term? term.split(',') : [];
  var url        = dust.helpers.tap(params.url, chunk, context);
  var locale     = dust.helpers.tap(params.locale, chunk, context);
  var page       = dust.helpers.tap(params.page, chunk, context);
  const is_or_searching_type = dust.helpers.tap(params.is_or_searching_type, chunk, context);
  delete params.is_or_searching_type;
  var internals = context.get('_internals');
  var keepQuery  = dust.helpers.tap(params.keep_query, chunk, context);
  keepQuery  = keepQuery ? (keepQuery === 'keepAll' ? Object.keys(internals.req.query) : keepQuery.split(',')) : [];
  const is_multi_search = internals && _.get(internals, 'req.moonshine.route.name') === 'multi_search' ? true : false;
  if(is_multi_search && keepQuery.includes('sorting')) name = 'search';
  var no_context = dust.helpers.tap(params.no_context, chunk, context);
  if (no_context) delete params.no_context;

  var removeSpecialCases = function(url) {
    var urlBrand = url.replace('corporate_', '');
    urlBrand = urlBrand.replace('-lic', '');
    return urlBrand;
  };

  var sanitizeSpecialCharacters = function(seo_url) {
    var urlString     = decodeURIComponent(seo_url);
    var sanitizedUrl  = urlString.replace(' - ', '-');    
    sanitizedUrl = sanitizedUrl.replace(' ', '-');
    sanitizedUrl = sanitizedUrl.replace(/---/gi, '-');
    sanitizedUrl = sanitizedUrl.replace(/[\/\\#,+()$~%.'":*?<>{}]/gi, '');
    sanitizedUrl = sanitizedUrl.replace('&', 'and');
    sanitizedUrl = removeSpecialCases(sanitizedUrl);
    return sanitizedUrl;
  };
  
  if(params.query_params){
    try{
      query = {...query, ...params.query_params};
      hasQuery = true;
    }catch(err){
      console.error('error customParams for url_for', params.query_params);
    };
  }
  
  keepQuery.forEach(function(param) {
    param = param.trim();
    if (internals && param in internals.req.query) {
      hasQuery = true;
      query[param] = internals.req.query[param];
    }
  });
  
  term.forEach(function(slug) {
    params[slug] = routing.getURLSlug(slug, locale || internals.req.moonshine.full_locale);
  });

  var locale = locale || (internals && internals.req.moonshine.params? internals.req.moonshine.params.locale : undefined);
  params.locale = internals && !i18n.isDefaultLocale(locale) ? locale : undefined; 
  if (locale) {
    hasQuery = true;
    query.locale = locale;
  }
  for (var i in params) {
    if (!~reserved.indexOf(i)) {
      var data_value = dust.helpers.tap(params[i], chunk, context);
      if( typeof data_value !== 'undefined') data[i] = data_value;
    }
  }
  try{
    if (name && name !== 'food_minisite') url = routing.getURLByName(name, data);
    else if(!url) {      
      var route         = internals.req.moonshine.route;
      var slugs         = util.merge(internals.req.moonshine.slugs, data);
      var categoryName  = false;
      if(page) slugs.page = page;
      if(slugs.page && slugs.page === 1) delete slugs.page;
      if(slugs.hierarchy && internals.req.moonshine.food) {
        categoryName = slugs.hierarchy;        
      }
      url = routing.getRouteURL(route, slugs, categoryName);
    }
  } catch(err) {
    console.error(err);
  }
  if(url){
    if(params.seo_menu){
      if(internals && internals.req.moonshine.slugs && internals.req.moonshine.slugs.hierarchy){
        if (site === 'ltc') params.seo_menu = sanitizeSpecialCharacters(params.seo_menu);
        let hierarchy = internals.req.moonshine.slugs.hierarchy;
        if(hierarchy.length === 3) url = '/' + params.seo_menu + '/' + hierarchy[0] + '/' +  hierarchy[1] + '/' + hierarchy[2] + '/';
        if(hierarchy.length === 2) url = '/' + params.seo_menu + '/' + hierarchy[0] + '/' +  hierarchy[1] + '/';
        if(hierarchy.length === 1) url = '/' + params.seo_menu + '/' + hierarchy[0] + '/' ;
      }
    }
    var q = url.indexOf('?');
    if(q !== -1 && url[q - 1] !== '/') url = `${url.substring(0, q)}/${url.substring(q)}`;
    else if(!url.endsWith('/') && q === -1) url = `${url}/`;
  }
  url = hasQuery? URL.addQuery(url, query) : url;
  url = no_context? URL.removeContext(url) : url;
  if(url && url.indexOf('/entradas/search/') !== -1) {
    url = url.replace('s=', 'Ntt=');
    if(is_or_searching_type) {
      url = `${url}&anyterm=true`;
    }
  }
  if(url && is_or_searching_type) {
    url = url.replace('?s=', '?ss=');
    url = url.replace('&s=', '&ss=');
  }
  chunk.write(url);
};
helpers.change_text = function(chunk, context, bodies, params) {    
  var compare = dust.helpers.tap(params.compare, chunk, context);
  var text    = dust.helpers.tap(params.text, chunk, context);;
  var change  = dust.helpers.tap(params.change, chunk, context);;  

  if( compare === text ) 
    return chunk.write(change);  
  else
    return chunk.write(text);
};
helpers.render = function(chunk, context, bodies, params) {
  var sites = dust.helpers.tap(params.site, chunk, context);
  var view = dust.helpers.tap(params.view, chunk, context);
  var data = dust.helpers.tap(params.data, chunk, context);
  var show = showSite();
  var template = getTemplate();
  if (show && template) {
    var templateContext = data ? context.push(data) : context;
    return chunk.partial(template, templateContext);
  }
  if (bodies.block) {
    return chunk.render(bodies.block, context);
  }

  function showSite() {
    var site = dust.helpersConfig.render.site;
    if (!site) {
      return true;
    }
    return sites && sites.split(',').indexOf(site) !== -1;
  }

  function getTemplate() {
    var allowedViews = dust.helpersConfig.render.allowedViews;
    return view && allowedViews[view];
  }
};
helpers.has_inline_block = function(chunk, context, bodies, params) {
  var inline_block = context.getBlock(params.name);
  if (inline_block && bodies.block) {
    return chunk.render(bodies.block, context);
  }
  if (bodies.else) {
    return chunk.render(bodies.else, context);
  }
  return;
};
helpers.set_context = function(chunk, context, bodies, params) {
  var values = {};
  Object.entries(params).forEach(function([key, value]) {
    values[key] = dust.helpers.tap(value, chunk, context);
  });
  return chunk.render(bodies.block, context.push(values));
};
helpers.create_object = function(chunk, context, bodies, params) {
  var key = dust.helpers.tap(params.key, chunk, context)
  var value = {};
  context.current()[key] = value;
  return chunk.render(bodies.block, context.push(value));
};

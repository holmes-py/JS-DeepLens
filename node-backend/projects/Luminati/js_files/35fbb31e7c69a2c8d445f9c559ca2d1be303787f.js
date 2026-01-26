/*
* Usage:
*
* richSnippet({
* store: 'my-company',
* sku: 'test-sku'
* })
*/
richSnippet = function(opts){

    /*
     * Is Empty Helper function
     */
    function isEmpty(variable){
        return !(typeof variable != 'undefined' && variable.length > 0);
    }

    var request = new XMLHttpRequest();

    /*
    * API Url Detection
    */
    var api = "https://api.reviews.co.uk";
    if (opts.site) {
        if(opts.site == 'io'){
            api = "https://api.reviews.io";
        }
    } else if (document.currentScript && (src = document.currentScript.src)) {
        if (src.indexOf('.co.uk') == -1) {
            api = "https://api.reviews.io";
        }
    }

    var mode = !isEmpty(opts.sku) || !isEmpty(opts.mpn) || !isEmpty(opts.asProduct) ? 'Product' : 'LocalBusiness';
    var d = autoMergeRS(mode);

    if (d != false) {
        if (opts.mergeMicroData !== false) {
            opts.data = richSnippetRecursiveMerge(d, opts.data ? opts.data : {});
        } 
    }

    /*
     * On Request Complete
     */
    request.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                var data = this.responseText;
                var scriptTag = document.createElement("script");

                if (opts.data && opts.store!='driftworks-com') {
                    reviews = JSON.parse(data);
                    reviews = richSnippetRecursiveMerge(reviews, opts.data);
                    data = JSON.stringify(reviews);
                }

                if(data !=  '') {
                    scriptTag.setAttribute("type", "application/ld+json");
                    scriptTag.appendChild(document.createTextNode(data));

                    document.getElementsByTagName("head")[0].appendChild(scriptTag);
                }
            }
        }
    };

    if( isEmpty(opts.sku) && isEmpty(opts.mpn) && ((typeof opts.internal != 'undefined' && parseInt(opts.internal) == 1) || opts.store=='mr-clutch-autocentres-ltd' )){

        /*
        * https://developers.google.com/search/docs/data-types/reviews#local-business-reviews
        * August 2016 - It is now against Google's guidelines to use local business markup for reviews from third-party sites.
        * Merchant Rich Snippets have now been disabled to avoid any penalties and will only work for Product Reviews.
        */
        request.open('GET', api + '/json-ld/merchant/richsnippet?store=' + opts.store, true);
        request.send();

    }
    else if( isEmpty(opts.sku) && !isEmpty(opts.asProduct) ){ // Markup Company Reviews as Product
        request.open('GET', api + '/json-ld/merchant/richsnippet?store=' + opts.store + '&asProduct=' + encodeURIComponent(opts.asProduct), true);
        request.send();
    }
    else if ( !isEmpty(opts.sku) || !isEmpty(opts.mpn) )
    {
        var url = api + '/json-ld/product/richsnippet';
        var queryString = 'store=' + opts.store + '&sku=' + (opts.sku? encodeURIComponent(opts.sku) : '') + '&data=' + (!!opts.data ? encodeURIComponent(true) : encodeURIComponent(false)) + '&mpn=' + (opts.mpn? encodeURIComponent(opts.mpn) : '');

        if (opts.enable_syndication == true){
            queryString += '&enable_syndication=true';
        } else if (opts.enableSyndication == true){
            queryString += '&enable_syndication=true';
        }

        if (queryString.length > 8000) {
            request.open('POST', url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(queryString);

        } else {
            request.open('GET', url + '?' + queryString, true);
            request.send();
        }
    }

    request = null;
};

autoMergeRS = function(mode)
{
    var existing = findJsonLDSnippets(mode);

    if (existing == false) {
        existing = findMicroDataSnippets(mode);

        //microdata offers wont be an array but ld+json expects them to be.
        if (existing.offers && existing.offers.constructor != Array) {
            existing.offers = [existing.offers];
        }
    }

    return existing;
}

getMicroDataItem = function (i)
{
    var item = {};
    item.name = i.getAttribute('itemprop');

    if (i.tagName == 'IMG') {
        item.value = i.getAttribute('src');
    } else if (i.hasAttribute('content')) {
        item.value = i.getAttribute('content');
    } else {
        item.value = i.innerText;
    }

    return item;
}

findMicroDataSnippets = function(mode) {
    var snip = document.querySelector('[itemtype="http://schema.org/'+mode+'"]');

    if (snip) {
        var json = parseMicroData(snip);
        return json.json;
    }

    return false;
}

parseMicroData = function(element) {
    var pr = false;
    var json = {};
    var properties = element.querySelectorAll('[itemprop]');
    var label = '';

    for (var x = 0; x < properties.length; x++) {
        if (properties[x].getAttribute('itemprop') == 'http://schema.org/Review' || properties[x].getAttribute('itemprop') == 'http://schema.org/AggregateRating'){

        } else if (properties[x].hasAttribute('itemscope')) {
            label = properties[x].getAttribute('itemprop') ? properties[x].getAttribute('itemprop') : properties[x].getAttribute('itemtype');

            if (label != 'itemListElement' && label != 'position' && label != 'item') {
                pr = parseMicroData(properties[x]);
                json[label] = pr.json;
                x+=pr.skip;
            }
        } else {
            pr = getMicroDataItem(properties[x]);

            if (pr.name != 'position' && pr.name != 'item') {
                json[pr.name] = pr.value;
            }
        }

        properties[x].removeAttribute('itemprop');
    }

    element.removeAttribute('itemtype');
    element.removeAttribute('itemprop');
    element.removeAttribute('itemscope');
    return {json:json, skip:x};
}

findJsonLDSnippets = function(mode) {
    var jsons = document.querySelectorAll('script[type="application/ld+json"]');
    var json = '';

    for (var i = 0; i < jsons.length; i++) {
        // try and remove offending characters.
        jsonTemp = jsons[i].innerHTML.trim().replace(/[\t\n]/g, '');
        json = JSON.parse(jsonTemp);
        if (json['@type'] && json['@type'] == mode) {
            var childDOM = jsons[i];
            childDOM.parentNode.removeChild(childDOM);
            return json;
        }
    }
    return false;
}

richSnippetRecursiveMerge = function(obj1, obj2) {
    for (var p in obj2) {
        try {
          // Property in destination object set; update its value.
          if ( obj2[p].constructor==Object ) {
            obj1[p] = richSnippetRecursiveMerge(obj1[p], obj2[p]);
          } else if (obj2[p].constructor==Array) {
            //some things like Offers are arrays, we need to merge each entry
            for (var pc in obj2[p]) {
                obj1[p][pc] = richSnippetRecursiveMerge(obj1[p][pc], obj2[p][pc]);
            }
          } else {
            obj1[p] = obj2[p];
          }

        } catch(e) {
          // Property in destination object not set; create it and set its value.
          obj1[p] = obj2[p];
        }
      }
      return obj1;
};

/*
 * Callback When Script Loads - Can be used to initialise rich snippet asyncronously
 */
if (typeof richSnippetCallback == 'function') {
    richSnippetCallback();
}

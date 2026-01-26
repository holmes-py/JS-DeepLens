var currentWidget = "";
var reviewsio_modalOpen = false;

function reviewsio_slideList(widget, direction) {
  const reviewList = document.getElementById(`R-ReviewsList--${widget}`);
  if (!widget || !direction || !reviewList) return;

  const firstCard = document.getElementById(`ReviewsList__item--first${widget}`)
  const cardWidth = firstCard ? firstCard.clientWidth : 0;

  if (direction === 'right') {
    if (reviewList.scrollLeft >= reviewList.scrollWidth - reviewList.clientWidth) {
      reviewList.style.scrollBehavior = "auto";
      reviewList.scrollTo({ left: 0, top: 0, behavior: 'instant' });
      reviewList.style.scrollBehavior = "smooth";
    }

    reviewList.scrollTo({
      left: reviewList.scrollLeft + cardWidth,
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  if (direction === 'left') {
    if (reviewList.scrollLeft <= 0) {
      reviewList.style.scrollBehavior = "auto";
      reviewList.scrollTo({ left: reviewList.scrollWidth, top: 0, behavior: 'instant' });
      reviewList.style.scrollBehavior = "smooth";
    }

    reviewList.scrollTo({
      left: reviewList.scrollLeft - cardWidth,
      top: 0,
      behavior: 'smooth'
    });
    return;
  }
}

var reviewsio_mobileScrolled;
var lastClicked = 0;

var currentPopup;
document.documentElement.addEventListener("touchmove", function(e) {
  reviewsio_mobileScrolled = true;
})
document.documentElement.addEventListener("touchstart", function(e) {
  reviewsio_mobileScrolled = false;
})

document.documentElement.addEventListener("keypress", function(e) {
  if (!e) return;

  if (e.key == 'ArrowRight') {
    reviewsio_slideList(currentWidget, "right");
    return;
  }
  if (e.key == 'ArrowLeft') {
    reviewsio_slideList(currentWidget, "left");
    return;
  }

  if (e.key === 'Enter') {
    try{
    compare = 4;
    while(true){
      var position = e.composedPath().length - compare;
      position = e.composedPath()[position];
      if(position.classList.contains('CarouselWidget-prefix')){
        break;
      }
      compare = compare +  1;
    }
    var ifModel = e.composedPath().length - 6;
    ifModel = e.composedPath()[ifModel];
    if(!ifModel.classList.contains("js-modal-container")){

      tempcurrentWidget = e.composedPath().length - compare +1;
      tempcurrentWidget = e.composedPath()[tempcurrentWidget].getAttribute('id');
      if(tempcurrentWidget != null){
        currentWidget = tempcurrentWidget;
      }
    }
  }catch(e){
  }

  if(currentWidget) {

    if(e.composedPath()[0].classList.contains('js-scroll-left-btn')){
      reviewsio_slideList(currentWidget, "left");
    } else if(e.composedPath()[0].classList.contains('js-scroll-right-btn')){
      reviewsio_slideList(currentWidget, "right");
    } else if(e.composedPath()[0].classList.contains('js-open-widgetModal') || e.composedPath()[0].classList.contains('js-model-close-btn')) {
      e.target.click();
    } else if(e.composedPath()[0].hasAttribute('role') && e.composedPath()[0].getAttribute('role') == 'button') {
      e.target.click();
    }


  }

  }

});

document.documentElement.addEventListener("touchend", function(e) {

    let currentTime = new Date().getTime();

    if (currentTime - lastClicked >= 100 || reviewsio_mobileScrolled) {
      return;
    }

    try{
      let compare = 4;
      while(true){
        let position = e.composedPath().length - compare;
        position = e.composedPath()[position];
          if(position.classList.contains('CarouselWidget-prefix')){
            break;
          }
          compare = compare +  1;
        }
        var popupElement = e.composedPath().length - compare -6;
        popupElement = e.composedPath()[popupElement];
        try{
          var attribute =  popupElement.getAttribute('r-popup');
          if(attribute != null){
            var popup = document.getElementById(attribute);
            popup.classList.add('isActive');
            popup.classList.remove('u-hidden--all');
            popup.querySelector('.js-model-close-btn').focus();
            reviewsio_trapFocus(popup);
            try{
              var video = document.getElementById(currentPopup+'-video');
              video.play();
            }catch(f){}
            reviewsio_modalOpen = true;
            var remove = [];
          }else{
            var remove = document.getElementsByClassName('js-modal-container');
          }
        }catch(e){
          var remove = document.getElementsByClassName('js-modal-container');
        }

        var innerElement = e.composedPath().length - compare - 3;
        innerElement = e.composedPath()[innerElement];
        try{
          var ifModel = e.composedPath().length - 6;
          ifModel = e.composedPath()[ifModel];
          if(!ifModel.classList.contains("js-modal-container")){

            tempcurrentWidget = e.composedPath().length - compare +1;
            tempcurrentWidget = e.composedPath()[tempcurrentWidget].getAttribute('id');
            if(tempcurrentWidget != null){
              currentWidget = tempcurrentWidget;
            }
          }
        }catch(e){}
        try{
          if((e.composedPath()[0].classList.contains('js-close-widgetModal'))||(e.composedPath()[0].classList.contains('js-model-close-btn'))){
            for(var i in remove){
              reviewsio_modalOpen = false;
              remove[i].classList.remove('isActive');
              remove[i].classList.add('u-hidden--all');

              if(currentPopup) {
                document.querySelector('.R-ReviewsList__item[r-popup='+currentPopup+']').focus();
              }

              try{
                var video = document.getElementById(currentPopup+'-video');
                video.pause();
              }catch(f){}
            }
          }
        }catch(e){}

        if(e.composedPath()[0].classList.contains('js-scroll-left-btn')){
          reviewsio_slideList(currentWidget, "left");
        }
        if(e.composedPath()[0].classList.contains('js-scroll-right-btn')){
          reviewsio_slideList(currentWidget, "right");
        }

      }catch(e){}

    lastClicked = currentTime;

});
document.documentElement.addEventListener("click", function(e) {

    var t = new Date().getTime();
    lastClicked = t;

      try{
      compare = 4;
      while(true){


        var position = e.composedPath().length - compare;
        position = e.composedPath()[position];
        if(position.classList.contains('CarouselWidget-prefix')){
          break;
        }
        compare = compare +  1;

      }
      var popupElement = e.composedPath().length - compare -6;
      popupElement = e.composedPath()[popupElement];
      var attribute;
      try{
        attribute =  popupElement.getAttribute('r-popup');

        if(attribute != null){
          currentPopup = attribute;
          var popup = document.getElementById(attribute);
          popup.classList.add('isActive');
          popup.classList.remove('u-hidden--all');

          popup.querySelector('.js-model-close-btn').focus();
          reviewsio_trapFocus(popup);
          reviewsio_modalOpen = true;
          try{
            var video = document.getElementById(currentPopup+'-video');
            video.play();
          }catch(f){}

          var remove = [];
        }else{
          var remove = document.getElementsByClassName('js-modal-container');
        }
      }catch(e){
        var remove = document.getElementsByClassName('js-modal-container');
      }

      var innerElement = e.composedPath().length - compare - 3;
      innerElement = e.composedPath()[innerElement];
      try{
        var ifModel = e.composedPath().length - 6;
        ifModel = e.composedPath()[ifModel];
        if(!ifModel.classList.contains("js-modal-container")){

          tempcurrentWidget = e.composedPath().length - compare +1;
          tempcurrentWidget = e.composedPath()[tempcurrentWidget].getAttribute('id');
          if(tempcurrentWidget != null){
            currentWidget = tempcurrentWidget;
          }
        }
      }catch(e){}
      try{
        if((e.composedPath()[0].classList.contains('js-close-widgetModal'))||(e.composedPath()[0].classList.contains('js-model-close-btn'))){
          for(var i in remove){
            reviewsio_modalOpen = false;
            remove[i].classList.remove('isActive');
            remove[i].classList.add('u-hidden--all');

            if(currentPopup) {
              document.querySelector('.R-ReviewsList__item[r-popup='+currentPopup+']').focus();
            }

            try{
              var video = document.getElementById(currentPopup+'-video');
              video.pause();
            }catch(f){}

          }
        }
      }catch(e){
      }

      if(e.composedPath()[0].classList.contains('js-scroll-left-btn')){
        reviewsio_slideList(currentWidget, "left");
      }
      if(e.composedPath()[0].classList.contains('js-scroll-right-btn')){
        reviewsio_slideList(currentWidget, "right");
      }

    }catch(e){}
  }
  // }
);

var hoverWidget = "";

function reviewsio_mouseStatus(widget){
  hoverWidget = widget;
}

var scrollingWidgets = {};

function reviewsio_createScroll(widget, time){
    if(scrollingWidgets[widget] == undefined){
        scrollingWidgets[widget] = time;
        reviewsio_pageScroll(widget);
    }else{
        scrollingWidgets[widget] = time;
    }
}


function reviewsio_pageScroll(widget) {
    if(scrollingWidgets[widget] == false){
        var time = 1000;
    }
    else{
        var time = scrollingWidgets[widget];
    }

    setTimeout(function(){
        if(hoverWidget != widget && reviewsio_modalOpen!=true && scrollingWidgets[widget]!=false){
            reviewsio_slideList(widget, "right");
        }
        reviewsio_pageScroll(widget);
    }, time);

}


try{

  $('body').click(function(e) {

    temp=e.target;


    while(true){


      try{
        if(temp.getAttribute( "widget" ) != null &&temp.classList.contains("R-ReviewsList__controlButton")){

          if(temp.classList.contains("R-ReviewsList__controlButton--left")){
            reviewsio_slideList(temp.getAttribute( "widget" ), "left");
          }else if(temp.classList.contains("R-ReviewsList__controlButton--right")){
            reviewsio_slideList(temp.getAttribute( "widget" ), "right");
          }

          break;
        }
        else if(temp.classList.contains("js-open-widgetModal")){
          attribute = temp.getAttribute( "r-popup" );
          if(attribute != null){
            currentPopup = attribute;

            var popup = document.getElementById(attribute);

            popup.classList.add('isActive');
            popup.classList.remove('u-hidden--all');
            popup.querySelector('.js-model-close-btn').focus();
            reviewsio_trapFocus(popup);
            reviewsio_modalOpen = true;
            try{
              var video = document.getElementById(currentPopup+'-video');
              video.play();
            }catch(f){}

            var remove = [];
          }else{
            var remove = document.getElementsByClassName('js-modal-container');
          }
          break;
        }
        else if(temp.classList.contains("js-model-close-btn")||temp.classList.contains("js-close-widgetModal")){
          $(".js-modal-container").each(function() {

            $(this).removeClass('isActive');
          });
          break;
        }
        else{
          temp = temp.parentElement;
        }


      }catch(f){break;}
    }


  });

}
catch(a){};

if(typeof carouselInlineWidget == 'undefined'){
    carouselInlineWidget = function(elementId,opts){

      var reviewsIoCarouselElement = document.getElementById(elementId);
      var head = document.getElementById('head');
      var url = 'https://widget.reviews.co.uk/carousel-inline-iframeless/widget'
      var queryString = 'elementId=' + elementId + '&version=1&';
      //handle de-in
      opts.lang = opts.lang == 'de-informal' || opts.lang == 'de-in' ? 'de' : opts.lang;
      userVaribles = reviewsio_keyObject(opts, elementId);
      setTimeout(function(){
        if(typeof html == 'undefined'){
        }
      }, 500);
      var carouselInlineWidgetListener = function(event){
        try {
          var data = JSON.parse(event.data);
          if(data.action != undefined){
            switch(data.action){
              case "resize":
                if(data.elementId == elementId){ // prevent conflicting widgets
                  frame.height = data.height;
                }
              break;
            }
          }
        }
        catch(e){
        }
      }
      if (window.addEventListener){
        addEventListener("message", carouselInlineWidgetListener, false)
      } else {
        attachEvent("onmessage", carouselInlineWidgetListener)
      }
    }
    if (typeof carouselInlineWidgetCallback == 'function') {
      carouselInlineWidgetCallback();
    }
}

var widgetId = "";
var reviewIndex;

function reviewsio_keyObject(req, elementId){
  var userVaribles = {


    api: 'https://api.reviews.co.uk',
    element_id: elementId,
    store: 'ecommerce-demo-store',
    sku: '',

    carousel_type: 'side_header',
    styles_carousel: '',
    options:{
      general:{
        enable_richsnippets_company: true,
        enable_richsnippets_product: true,
        review_type: "store, product, third_party",
        min_reviews: 5,
        max_reviews: 20,
        address_format: "CITY, COUNTRY",
        enable_auto_scroll: true,
      },
      header:{
        enable_overall_stars: true,
        timeline_difference: 0,
        logo_url_link: false,
        enable_logo_url: true,
        enable_total_reviews: false,
      },
      reviews: {
        enable_customer_name: true,
        enable_customer_location: true,
        enable_verified_badge: true,
        enable_recommends_badge: true,
        enable_photos: true,
        enable_videos: true,
        enable_review_date: true,
        disable_same_customer: false,
        min_review_percent: 3,
        third_party_source: false,
        hide_empty_reviews: true, //false is only with image
        enable_product_name: false,
        tags: "",
        branch: "",
        enable_branch_name: false,
        enable_avatars: false,
      },
      popups: {
        enable_review_popups: true,
        enable_helpful_buttons: true,
        enable_helpful_count: true,
        enable_share_buttons: true,
      },
    },
    styles:{

    },
    translations: reviewsio_language(req.lang),

  }
  for(var i in req){
    if(typeof req[i] != 'object'){
      userVaribles[i] = req[i];
    }
    else{
      for(var j in req[i]){
        if(typeof req[i][j] != 'object'){
          userVaribles[i][j] = req[i][j];
        }
        else{
          for(var k in req[i][j]){
            if(typeof req[i][j][k] != 'object'){
              userVaribles[i][j][k] = req[i][j][k];
            }
          }
        }
      }
    }
  }



  var rukstyles = '<link rel="stylesheet" type="text/css" href="data:text/css;charset=UTF-8,';

  innerStyles = '.CarouselWidget-prefix .CarouselWidget{';
  for(var style in userVaribles.styles){
    innerStyles += style+":"+userVaribles.styles[style]+";";
  }
  innerStyles +='}';
  rukstyles += escape(innerStyles);
  rukstyles +='">';



  var html =reviewsio_getCode(userVaribles, rukstyles);


  return userVaribles;
}




function reviewsio_getCode(userVaribles, styles){
  var split_types = userVaribles.options.general.review_type.split(", ");

  htmls = reviewsio_getAjax(userVaribles,split_types, styles);
  return htmls;

}

function reviewsio_getAjax(userVaribles, carouselType, styles){

  var apiUrl;

  var extraNum = userVaribles.options.general.max_reviews * 5;

  var apiBranch= '&branch='+userVaribles.options.reviews.branch;
  var apiTags= '&tag='+encodeURIComponent(userVaribles.options.reviews.tags);
  var hideEmpty = userVaribles.options.reviews.hide_empty_reviews ? '&must_have_comments=true' : '';
  var apiVersion =  apiBranch+apiTags;

  var finalString = "";
  if(carouselType[0] == 'third_party'){

    storeApi = 0;
    if(carouselType.length == 1){
      apiUrl= userVaribles.api+'/timeline/data?type=store_third_party_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+extraNum+'&sku=&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1'+hideEmpty+apiVersion;
    }else{
      for(var x = 0; x<carouselType.length; x++){
        if(carouselType[x] == "product"){
          finalString += "&include_product_reviews=1";
        }
        else if(carouselType[x] == "company"){
          storeApi = 1;
        }
      }
      if(storeApi == 1){
        apiUrl= userVaribles.api+'/timeline/data?type=store_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+extraNum+'&sku=&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1'+hideEmpty+apiVersion+finalString;
      }else{
        apiUrl= userVaribles.api+'/timeline/data?type=store_third_party_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+extraNum+'&sku=&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1'+hideEmpty+apiVersion+finalString;
      }
    }
  }
  else if(carouselType[0] == 'product'){
      var skus = userVaribles.sku;
      skus = encodeURIComponent(skus);
      var finalString = "&include_product_reviews=1";
        for(var x = 0; x<carouselType.length; x++){
          if(carouselType[x] == "third_party"){
            finalString += "&include_local_reviews=1";
          }
        }
      apiUrl = userVaribles.api+'/timeline/data?type=product_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+extraNum+'&sku='+skus+'&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1'+hideEmpty+apiVersion+finalString;
    }
  else if(carouselType[0] == 'company'){
      if (carouselType.length === 1) {
        finalString = "&minRating="+userVaribles.options.reviews.min_review_percent;
      }
      for(var x = 1; x<carouselType.length; x++){
        if(carouselType[x] == "product"){
          var skus = userVaribles.sku;
          skus = encodeURIComponent(skus);
          finalString += "&include_product_reviews=1&sku=" + skus;
        }
        else if(carouselType[x] == "third_party"){
          finalString += "&include_local_reviews=1";
        }
      }
      apiUrl = userVaribles.api+'/timeline/data?type=store_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+extraNum+'&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1'+hideEmpty+apiVersion+finalString;
    }

  if (userVaribles.options.reviews && userVaribles.options.reviews.enable_syndication) {
    apiUrl += '&enable_syndication=true';
  }

  apiUrl += `&lang=${userVaribles.lang ?? 'en'}`;

  var obj;
  var temp = 0;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl);
  xhr.setRequestHeader('Reviews-Origin', 'REVIEWS.io Widget');
  xhr.onload = function() {
      if (xhr.status === 200) {

        ajaxData = JSON.parse(xhr.responseText);

        ajaxData = reviewsio_setNumReviews(userVaribles,ajaxData);
        setTimeout(function(){

          var html=  reviewsio_renderCode(userVaribles,ajaxData);

          if(typeof html == 'undefined'){
            var html = "";
          }
          reviewsIoCarouselElement = document.getElementById(userVaribles.element_id);
          reviewsIoCarouselElement.innerHTML =styles+ html;
          reviewsio_resizer();
          if((userVaribles.options.general.enable_auto_scroll == true)||(!isNaN(userVaribles.options.general.enable_auto_scroll))){
            reviewsio_createScroll(userVaribles.element_id,userVaribles.options.general.enable_auto_scroll);
          }else{
            reviewsio_createScroll(userVaribles.element_id,false);
          }
          return html;
        }, 100);
      }
      else {
      }
  };
  xhr.send();
}

function reviewsio_trapFocus(focusedElement) {
    if(!focusedElement) return;
    var focusableEls = focusedElement.querySelectorAll('[role="button"]:not([disabled]), a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];

    focusedElement.addEventListener('keydown', function(e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === 9);

      if (!isTabPressed) {
        return;
      }

      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
};

var totalNumReviews;
function reviewsio_setNumReviews(userVaribles,ajaxData){
  totalNumReviews = 0;

  temp_split = userVaribles.options.general.review_type.split(', ');

  if(userVaribles.sku == ""){

  }else{
    for(var i in temp_split){
      if(temp_split[i] == 'product'){
        apiUrl= userVaribles.api+'/timeline/data?type=product_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+userVaribles.options.general.max_reviews+'&sku='+userVaribles.sku+'&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1&v=0.146758459728451252';
      }else if(temp_split[i] == 'company'){
        apiUrl = userVaribles.api+'/timeline/data?type=store_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+userVaribles.options.general.max_reviews+'&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1&v=0.146758459728451252';
      }else if(temp_split[i] == 'third_party'){
        apiUrl= userVaribles.api+'/timeline/data?type=store_third_party_review&store='+userVaribles.store+'&sort=date_desc&page=1&per_page='+userVaribles.options.general.max_reviews+'&sku=&enable_avatars='+userVaribles.options.reviews.enable_avatars+'&include_subrating_breakdown=1&v=0.14675845972845125';
      }



      if(i == 0){
        var firstApi = new XMLHttpRequest();
        firstApi.open('GET', apiUrl);
        firstApi.onload = function() {
            if (firstApi.status === 200) {
              firstData = JSON.parse(firstApi.responseText);
              totalNumReviews += firstData.stats.results_count;
            }
            else {

            }
        };
        firstApi.send();
      }
      else if(i == 1){
        var secondApi = new XMLHttpRequest();
        secondApi.open('GET', apiUrl);
        secondApi.onload = function() {
            if (secondApi.status === 200) {
              secondData = JSON.parse(secondApi.responseText);
              totalNumReviews += secondData.stats.results_count;
            }
            else {

            }
        };
        secondApi.send();
      }



    }
  }
  //ajaxData.stats.total_reviews = totalNumReviews;

  return ajaxData;
}

function reviewsio_formatReviewStat(value, lang) {
  return Number(value).toLocaleString(lang);
}

var ajaxData;
function reviewsio_renderCode(userVaribles,ajaxData){


  if(userVaribles.styles_carousel == "default"){
    userVaribles.styles_carousel = "";
  }
  reviewsio_processAjax(userVaribles,ajaxData);
if(ajaxData.reviews && ajaxData.reviews.length >= userVaribles.options.general.min_reviews){
    var darkButtons = "";
    var reviewsLogo = "https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg";
    var

    htmls = '<div tabindex="0" class="CarouselWidget-prefix"><div class="CarouselWidget widgetId-'+userVaribles.element_id+' '+userVaribles.styles_carousel+' CarouselWidget--'+userVaribles.carousel_type+'" r-data-observe-resizes>';

    htmls += reviewsio_renderHeader(userVaribles, ajaxData);

    //-------------------------------------------------------------------------------------------------------------------------

    htmls +=	'<div class="CarouselWidget__list">'+
              '<div class="R-ReviewsList-container" onmouseover="reviewsio_mouseStatus('+"'"+userVaribles.element_id+"'"+');" onmouseout="reviewsio_mouseStatus('+"''"+');">'+
                '<div tabindex="0" role="button" aria-label="REVIEWS.io Carousel Scroll Left" class="js-scroll-left-btn R-ReviewsList__controlButton R-ReviewsList__controlButton--left" widget="'+userVaribles.element_id+'">'+
                  '<i class="js-scroll-left-btn ricon-thin-arrow--left controlButton__icon"></i>'+
                '</div>'+
                '<div tabindex="0" role="button" aria-label="REVIEWS.io Carousel Scroll Right" class="js-scroll-right-btn R-ReviewsList__controlButton R-ReviewsList__controlButton--right" widget="'+userVaribles.element_id+'">'+
                  '<i class="js-scroll-right-btn ricon-thin-arrow--right controlButton__icon"></i>'+
                '</div>'+
                '<div class="R-ReviewsList" id="R-ReviewsList--'+userVaribles.element_id+'">';
                 htmls += reviewsio_renderContent(userVaribles,ajaxData);
    htmls +=			'</div></div>';
      if(userVaribles.carousel_type == "topHeader"){
        htmls+='<div class="CarouselWidget__footer u-textRight--all u-marginTop--sm">'


        htmls+='<a rel="noreferrer" target="_blank"';
        if(userVaribles.options.header.enable_logo_url == true){
           htmls+='href="';
          if(userVaribles.options.header.logo_url_link == false){
            htmls +='https://www.reviews.io/company-reviews/store/'+userVaribles.store;
          }else{
            htmls += userVaribles.options.header.logo_url_link
          }
          htmls += '"';
        }



          htmls+='class="R-ReviewsioLogo R-ReviewsioLogo--sm" title="'+userVaribles.translations.read_more+'">';

        htmls+= '<span class="R-ReviewsioLogo__image" src="https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg" alt="REVIEWS.io Logo" width="120" height="19"></a></div>';
      }
htmls+=
            '</div>'+
        '</div>';

        if(userVaribles.options.popups.enable_review_popups){
          document.body.insertAdjacentHTML('beforeEnd', reviewsio_renderPopups(userVaribles, ajaxData));
        }
        var RichType = "Organization";

        if (userVaribles.review_type == 'product,'){
          RichType = 'Product';
        }

        if((userVaribles.sku != "")&&(userVaribles.options.general.enable_richsnippets_product)){
          var RichSnippetApiPro = userVaribles.api+'/json-ld/product/richsnippet?sku='+userVaribles.sku+"&store="+userVaribles.store;
          var RichSnPro = new XMLHttpRequest();
          RichSnPro.open('GET', RichSnippetApiPro);
          RichSnPro.onload = function() {
              if (RichSnPro.status == 200) {
                var RichSnippetsProduct =
                '<script type="application/ld+json">'+
                  RichSnPro.responseText+
                '</script>';
                document.body.insertAdjacentHTML('beforeEnd', RichSnippetsProduct);
              }
          };
          RichSnPro.send();
        }
        if(userVaribles.options.general.enable_richsnippets_company){
          var RichSnippetApi = userVaribles.api+'/json-ld/company/snippet?store='+userVaribles.store;
          var RichSnCo = new XMLHttpRequest();
          RichSnCo.open('GET', RichSnippetApi);
          RichSnCo.onload = function() {
              if (RichSnCo.status == 200) {
                var RichSnippets =
                '<script type="application/ld+json">'+
                  RichSnCo.responseText+
                '</script>';
                document.body.insertAdjacentHTML('beforeEnd', RichSnippets);
              }
          };
          RichSnCo.send();
        }

    htmls += '</div></div>';
  }else{
   htmls = "";
  }
  var html = htmls;
  return htmls;

}


function reviewsio_containsCountry(addressString) {
  const normalisedAddress = addressString.toLowerCase();
  const countryList = reviewsio_getCountryList(userVaribles.lang);
  return countryList.some((country) => normalisedAddress.includes(country.toLowerCase()));
}

function reviewsio_processAjax(userVaribles, ajaxData, dataType){
  var obj = ajaxData;
  var temp = [];
  var replace = [];
  var objReview = obj.timeline;

  if (userVaribles?.options?.reviews?.disable_duplicate_reviews) {
    objReview = objReview.filter((review, index, self) => {
        return review._source.comments.length ? index === self.findIndex((compareReview) => (
          compareReview._source.comments === review._source.comments && compareReview._source.author === review._source.author
        )) : true;
      }
    );
  }

  for(var i = 0; i< objReview.length; i++){
      try{

        address = objReview[i]._source.address.split(", ");
        temp_address = userVaribles.options.general.address_format;
        if(address.length == 1){
          if (userVaribles.options.general.address_format.includes("COUNTRY") && address[0] != '' && address[0] != 'Not Found' && reviewsio_containsCountry(address[0])) {
            temp_address = address[0];
          } else {
            temp_address = "";
          }
        }else{
        for(var j = 0; j< address.length; j ++){

          if(j == 0){ //city
            if(userVaribles.options.general.address_format.includes("CITY")){
              temp_address = temp_address.replace("CITY", address[j]);
            }
          }
          else if(j == 1){ //country
            if(userVaribles.options.general.address_format.includes("COUNTRY")){
              temp_address = temp_address.replace("COUNTRY", address[j]);
            }
          }
        }
      }
      }catch(e){temp_address =  "";}

      var verified = "";
      if(objReview[i]._source.order_id || objReview[i]._source.reviewer_desc === "Verified Buyer" || objReview[i]._source.verified_by === 'author'){
        verified = "Verified Buyer";
      }
      var thirdParty = "";
      if(objReview[i]._source.source != "Reviews"){
        thirdParty = objReview[i]._source.source;
      }
      var activeImage = undefined;
      var activeVideo = undefined;

      try{

        loop = 0;

        activeImage = [];
        while(loop < objReview[i]._source.images.length){


          if( objReview[i]._source.images[loop].status == "active"){
            activeImage.push(objReview[i]._source.images[loop]);
          }
          loop += 1;
        }

      }catch(e){}
      try{
        if( objReview[i]._source.videos[0].status == "active"){
          activeVideo = objReview[i]._source.videos;
        }
      }catch(e){}

      try{
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("minute ago", userVaribles.translations.minute_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("minutes ago", userVaribles.translations.minutes_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("hour ago", userVaribles.translations.hour_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("hours ago", userVaribles.translations.hours_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("day ago", userVaribles.translations.day_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("days ago", userVaribles.translations.days_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("week ago", userVaribles.translations.week_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("weeks ago", userVaribles.translations.weeks_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("month ago", userVaribles.translations.month_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("months ago", userVaribles.translations.months_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("year ago", userVaribles.translations.year_ago);
        objReview[i]._source.human_date = objReview[i]._source.human_date.replace("years ago", userVaribles.translations.years_ago);

        if(userVaribles.lang == 'de'){
          textString = objReview[i]._source.human_date.split(" ");
          if(textString[0] != '1'){
            objReview[i]._source.human_date = textString[1]+" "+textString[0]+" "+textString[2];
          }
          else{
            objReview[i]._source.human_date = textString[1]+" "+textString[2]+" "+textString[3]
          }

        }
        else if(userVaribles.lang == 'fr'){
          textString = objReview[i]._source.human_date.split(" ");

          objReview[i]._source.human_date = textString[1]+" "+textString[2]+" "+textString[3]+" "+textString[0]+" "+textString[4];
        }

      }catch(e){}



      review = {
        product_name: objReview[i]._source.product_name,
        attribute_questions: obj.filters.attributes,
        attributes: objReview[i]._source.user_attributes,
        rating: objReview[i]._source.rating,
        images: activeImage,//objReview[i]._source.images,
        ratings: objReview[i]._source.ratings,
        title: objReview[i]._source.review_title,
        date: objReview[i]._source.human_date,
        date_created: objReview[i]._source.date_created,
        votes: objReview[i]._source.helpful,
        branch: "",
        //branch: 'Lescter office',
        comments: objReview[i]._source.comments,
        store_review_id: objReview[i]._id,
        third_party: thirdParty,
        would_recommend: objReview[i]._source.would_recommend_product,
        tags: objReview[i]._source.tags,
        videos: objReview[i]._source.videos,
        responses: objReview[i]._source.responses,
        reviewer: {
          first_name: objReview[i]._source.author,
          verified_buyer:  verified,//objReview[i]._source.reviewer_desc,
          address: temp_address,//objReview[i]._source.address,
          //profile_piture: objReview.reviewer.profile_piture,
          //gravatar: objReview.reviewer.gravatar,
        },
      };

      try{
        try{
          review.branch = objReview[i]._source.store_branch.name;
        }catch(f){
          review.branch = objReview[i]._source.store_branch;
        }
        // review.branch = objReview[i]._source.store_branch;
      }catch(e){}

      if(review.reviewer.first_name == undefined){
        review.reviewer.first_name = "";
      }

      if(review.product_name == undefined){
        review.product_name = "";
      }
      if(review.branch == null){
        review.branch = "";
      }
      if(userVaribles.options.reviews.third_party_source){
        if(userVaribles.options.reviews.third_party_source == true){

          thirdPartyTesting = review.third_party;
        }else{
          var thirdPartyTesting = userVaribles.options.reviews.third_party_source;

        }

      }else{
        var thirdPartyTesting = "";
      }

      var hasTags = true;
      setTagsArray = userVaribles.options.reviews.tags.split(", ");

      if(userVaribles.options.reviews.hide_empty_reviews){
        var hideEmptyReview = false;
        if(review.comments == ""){
          hideEmptyReview= true;
        }
      }
      else{
        var hideEmptyReview = false;
      }
      var duplicateReview = false;

      if(userVaribles.options.reviews.disable_same_customer){
        for(var f in temp){
          if(f > 0){
            var tempReviewerKey = temp[f].reviewer.first_name + temp[f].reviewer.address;
            var checkReviewerKey = review.reviewer.first_name + review.reviewer.address;

            if(tempReviewerKey == checkReviewerKey){
              duplicateReview = true;
            }
          }

        }
      }

      var skipReview = false;
      if(review != undefined) {
          if(thirdPartyTesting != review.third_party) {
              skipReview = true;
          }
          if(review.third_party == "Trustpilot") {
              skipReview = true;
          }
          if(hideEmptyReview == true) {
              skipReview = true;
          }
          if(duplicateReview == true) {
              skipReview = true;
          }
          if(!hasTags) {
              skipReview = true;
          }
      } else {
          skipReview = true;
      }
      if(!skipReview) {
          temp.push(review);
      }

      if(temp.length == userVaribles.options.general.max_reviews){
        break;
      }
    }
    if(totalNumReviews == 0){
      totalNumReviews = obj.stats.review_count;
    }
    totalNumReviews = totalNumReviews + userVaribles.options.header.timeline_difference;

    if (userVaribles.options.general.review_type == 'company' || userVaribles.options.header.enable_total_reviews == true){
      stats = {
        total_reviews: obj.storeStats.review_count,
        average_rating:  obj.storeStats.average_rating,
      };
    }
    else{
      stats = {
        total_reviews: totalNumReviews,
        average_rating:  obj.stats.average_rating,
      };
    }


  obj.reviews = temp;
  obj.stats = stats;
  return obj;

}

function reviewsio_renderHeader(userVaribles, ajaxData){
  var html = '';
  var reviewsLogo = "https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg"



    var reviewCount = ajaxData.stats.total_reviews;
    var reviewRating = parseFloat(ajaxData.stats.average_rating).toFixed(2);

    if(typeof userVaribles.options.header.rating_decimal_places !== 'undefined' && !isNaN(userVaribles.options.header.rating_decimal_places)) {
      var roundTo = Math.min(Math.max(userVaribles.options.header.rating_decimal_places ?? 1, 1), 2);
      reviewRating = parseFloat(reviewRating).toFixed(roundTo);
    }

    var reviewStars ="";
    if(userVaribles.options.header.enable_overall_stars){
      reviewStars = reviewsio_renderRating(parseFloat(ajaxData.stats.average_rating),userVaribles);
    }

    if(reviewRating > 4) {
        var reviewWord = userVaribles.translations.excellent;
    } else if(reviewRating > 3) {
        var reviewWord= userVaribles.translations.good;
    } else {
        var reviewWord = userVaribles.translations.normal;
    }

    html += '<div class=" CarouselWidget__inner">'+
              '<div class="CarouselWidget__header u-textCenter--all">'+
                '<div class="header__inner">'+
                  '<div class="R-TextHeading R-TextHeading--xxs u-textCenter--all u-marginLeft--xs u-marginRight--xs">'+
                    '<div class="cssVar-header__heading">'+
                      reviewWord+
                    '</div>'+
                  '</div>';

if(userVaribles.carousel_type != "topHeader"){


         html += (userVaribles.options.header.enable_overall_stars?'<div class="R-RatingStars  u-marginBottom--xxs">'+
                    '<div title="'+ (reviewRating+ ' ' + userVaribles.translations.stars) +'" class="R-RatingStars__stars u-marginRight--none" aria-hidden="true">'+
                      reviewStars+
                    '</div>'+
                  '</div>':"")+
                  '<div class="R-TextBody R-TextBody--xxs u-textCenter--all u-marginBottom--xs">'+
                    '<div class="cssVar-header__subheading">'+
                      '<strong><span class="cssVar-subheading__number">'+reviewsio_formatReviewStat(reviewRating, userVaribles.lang)+' </span></strong>'+userVaribles.translations.rating+
                    '</div>'+
                  '</div>'+
                  '<div class="R-TextBody R-TextBody--xxs u-textCenter--all u-marginBottom--xs">'+
                    '<div class="cssVar-header__subheading">'+
                      '<strong><span  class="cssVar-subheading__number">'+reviewsio_formatReviewStat(reviewCount, userVaribles.lang)+' </span></strong>'+userVaribles.translations.reviews+
                    '</div>'+
                  '</div>'+
                  '<div>';

                  html+='<a rel="noreferrer" target="_blank"';
                  if(userVaribles.options.header.enable_logo_url == true){
                     html+='href="';
                    if(userVaribles.options.header.logo_url_link == false){
                      html +='https://www.reviews.io/company-reviews/store/'+userVaribles.store;
                    }else{
                      html += userVaribles.options.header.logo_url_link
                    }
                    html += '"';
                  }

                  html+='class="R-ReviewsioLogo R-ReviewsioLogo--sm" title="Read more reviews on REVIEWS.io">'+
                    '<span class="R-ReviewsioLogo__image" src="'+reviewsLogo+'" alt="REVIEWS.io Logo"  width="120" height="19">'+
                    '</a>'+
                  '</div>';
}
else{
  html +=
  (userVaribles.options.header.enable_overall_stars?'<div class="R-RatingStars" title="'+ (reviewRating+ ' ' + userVaribles.translations.stars) +'">'+
            '<div  class="R-RatingStars__stars u-marginLeft--xs u-marginRight--xs" aria-hidden="true">'+
              reviewStars+
            '</div>'+
          '</div>':"")+
          '<div class="u-marginLeft--xs u-marginRight--xs">'+
            '<div class="R-TextBody R-TextBody--xxs R-TextBody--inline u-textCenter--all u-marginBottom--xs">'+
              '<div class="cssVar-header__subheading">'+
                '<strong> <span class="cssVar-subheading__number"> '+" "+reviewsio_formatReviewStat(reviewRating, userVaribles.lang)+' </span></strong> '+userVaribles.translations.based_on+'&nbsp;'+
              '</div>'+
            '</div>'+
            '<div class="R-TextBody R-TextBody--xxs R-TextBody--inline u-textCenter--all u-marginBottom--xs">'+
              '<div class="cssVar-header__subheading">'+
                '<strong><span  class="cssVar-subheading__number">'+reviewsio_formatReviewStat(reviewCount, userVaribles.lang)+' </span></strong>'+userVaribles.translations.reviews+
              '</div>'+
            '</div>'+
          '</div>';
}

html+=         '</div>'+
              '</div>';

  return html;
}
var reviewIndex;

function reviewsio_renderContent(userVaribles, ajaxData){
  var html = '';
  reviewIndex = 0;


    for(var review in ajaxData.reviews){
      if(!isNaN(review)){
      html += reviewsio_renderReview(ajaxData.reviews[review],userVaribles);
      }
    }


  return html;

}

function reviewsio_renderReview(review, userVaribles ){
  var numberedDatesSetting = userVaribles.NUMERED_DATES;

  if(numberedDatesSetting == 'true') {
    var d = new Date(review.date_created);
    function pad(s) { return (s < 10) ? '0' + s : s; };
    var formattedDate = [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.');
  }

  if(userVaribles.THIRD_PARTY){
    var iconName = review.third_party.name.replace(" ", "-").toLowerCase();;
        var iconUrl = 'https://assets.reviews.io/img/all-global-assets/platform-logos/icon-'+iconName+'--black.svg';
        if(userVaribles.DARKMODE == 'true'){
          iconUrl = 'https://assets.reviews.io/img/all-global-assets/platform-logos/icon-'+iconName+'--white.svg';
        }



  }
  else{
    if(reviewIndex == 0){
      var html=
      '<div tabindex="0" class=" R-ReviewsList__item u-textLeft--all  '+(userVaribles.options.popups.enable_review_popups? 'u-cursorPointer':'')+' js-open-widgetModal" r-popup="js-popup--'+review.store_review_id+'" id="ReviewsList__item--first'+userVaribles.element_id+'">';
    }
    else{
      var html= '<div tabindex="0" class="R-ReviewsList__item '+(userVaribles.options.popups.enable_review_popups? 'u-cursorPointer':'')+' u-textLeft--all js-open-widgetModal" r-popup="js-popup--'+review.store_review_id+'"id="ReviewList__item--' + review.store_review_id + '">';
    }

    html += `
      <div class="item__inner">
        <div>
          <div>
            ${(userVaribles.options.reviews.enable_customer_name || '') && `
              <div class="R-TextHeading R-TextHeading--xxxxs R-TextHeading--inline u-textLeft--all u-verticalAlign--middle u-marginRight--xs">
                ${(review.reviewer || '') && `
                  <div class="cssVar-authorName">${(review.reviewer.first_name && review.reviewer.first_name.toLowerCase().trim() !== 'anonymous') ? reviewsio_unicodeToChar(review.reviewer.first_name.trim()) : userVaribles.translations.anonymous}${((review.reviewer.last_name || '') && ` ${reviewsio_unicodeToChar(review.reviewer.last_name.trim())}`)}</div>
                `}
              </div>
            `}
            <div class="R-RatingStars R-RatingStars--xs u-verticalAlign--middle cssVar-starDisplay cssVar-starDisplay"
              title="${review.rating + ' ' + userVaribles.translations.stars}"
            >
              <div aria-hidden="true" class="R-RatingStars__stars" aria-hidden="true">
                ${reviewsio_renderRating(review.rating,userVaribles)}
              </div>
          </div>
      </div>
    `;

    try{
      if (review.tags.find(t => t.tag === 'Subscriber') && userVaribles.options.reviews.enable_subscriber_badge){
        html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                      '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                        '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon"></span>'+
                      '</div>'+
                      '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                        '<div class="cssVar-badgeElement__text">'+
                          userVaribles.translations.verified_subscriber+
                        '</div>'+
                      '</div>'+
                    '</div>';
      } else if ((review.third_party === 'Amazon') && (review.reviewer.verified_buyer === 'Verified Buyer')) {
        html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                      '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                        '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon"></span>'+
                      '</div>'+
                      '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                        '<div class="cssVar-badgeElement__text">'+
                          userVaribles.translations.amazon_customer+
                        '</div>'+
                      '</div>'+
                    '</div>';
      } else if ((review.reviewer.verified_buyer == "Verified Buyer")&&(userVaribles.options.reviews.enable_verified_badge)){
        html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                      '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                        '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon"></span>'+
                      '</div>'+
                      '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                        '<div class="cssVar-badgeElement__text">'+
                          userVaribles.translations.verified_customer+
                        '</div>'+
                      '</div>'+
                    '</div>';
      }
    }catch(error){}

    if(userVaribles.styles_carousel == "CarouselWidget--topHeader--titles") {

      html +=      '<div>'+
                    '<div class="cssVar-header__heading R-TextBody R-TextBody--xxs u-textLeft--all">';
                    try{  html+=review.title; }catch(e){}
      html+='</div>'+
                  '</div>'+
                '</div>';

    } else {


          html +=      '<div>'+
                        (userVaribles.options.reviews.enable_product_name?'<div><em class="R-TextBody R-TextBody--xxxs u-textLeft--all">'+review.product_name+'</em></div>':"")+
                        '<div class="R-ReviewsList__item--body R-TextBody R-TextBody--xxs u-textLeft--all">';
                        try{  html+=reviewsio_escapeHtmlEntities(review.comments); }catch(e){}
          html+='</div>'+
                        (review.would_recommend && userVaribles.options.reviews.enable_recommends_badge ? '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs  u-marginBottom--sm">'+
                                                    '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                                                        '<span class="ricon-heart R-IconButton__icon cssVar-badgeElement__icon"></span>'+
                                                    '</div>'+
                                                    '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                                                        '<div class="cssVar-badgeElement__text">'+
                                                            userVaribles.translations.would_recommend+
                                                      ' </div>'+
                                                    '</div>'+
                                                '</div>':"")+
                      '</div>'+
  									'</div>';
    }


				html +=
									'<div class="R-flex-row R-flex-row--noMargin R-flex-between-xxs R-flex-bottom-xxs">'+
										'<div>';
      try {
        if (review.videos[0] && review.videos[0].status == 'active' &&	userVaribles.options.reviews.enable_videos){
          html += `
            <div class="u-inlineBlock u-marginRight--xs u-marginBottom--xs" r-tooltip-size="140" r-tooltip-fontsize="xxxxs" r-tooltip-position-align="topLeft" r-tooltip-enable="false">
              <div class="R-PhotoVideoThumbnail u-cursorPointer">
                <img
                  class="R-PhotoVideoThumbnail__image"
                  src="https://media.reviews.co.uk/resize/create?format=jpg&height=132&width=132&src=${encodeURIComponent('https://d1011j0lbv5k1u.cloudfront.net/assets/' + review.videos[0].thumbnail)}"
                  loading="lazy"
                  alt="${userVaribles.translations.review_image}"
                >
                <div class="R-PhotoVideoThumbnail__overlay">
                  <i class="overlay__icon ricon-play"></i>
                </div>
              </div>
            </div>
          `;
        }
				else if (review.images[0] &&	userVaribles.options.reviews.enable_photos){
          html += `
            <div class="u-inlineBlock" tooltip-size="140" tooltip-fontsize="xxxxs" tooltip-position-align="topLeft" tooltip-enable="false">
              <img
                class="R-PhotoVideoThumbnail u-marginRight--sm u-marginBottom--sm"
                src="https://media.reviews.co.uk/resize/create?format=jpg&height=132&width=132&src=${encodeURIComponent('https://d1011j0lbv5k1u.cloudfront.net/assets/' + review.images[0].image)}"
                loading="lazy"
                alt="${userVaribles.translations.review_image}"
              >
            </div>
          `;
				}

      }catch(e){}
				html +=     '</div>'+
									  '<div>';

                    if(userVaribles.options.reviews.enable_branch_name){
                      html+='<em class="R-TextBody R-TextBody--xxxxs u-textRight--all">'+review.branch+'</em>';
                    }
                    if(review.third_party != ""){
                    html+='<em class="R-TextBody R-TextBody--xxxxs u-textRight--all"> '+userVaribles.translations.source+': '+review.third_party+'</em>';
                    }
										html +=
											'<div class="R-TextBody R-TextBody--xxxxs u-textRight--all u-marginBottom--xs" >';
                      if (userVaribles.options.reviews.enable_customer_location) {

                        try{
                          if(review.reviewer.address !=""){
                            var dateFromPost = review.reviewer.address;
                            html += 	dateFromPost;
                            if((userVaribles.options.reviews.enable_review_date)){
                              html += 	', ';
                            }
                          }
                        }catch(e){};
                      }
                      if (userVaribles.options.reviews.enable_review_date) {
                        try{
                          if(review.image){
                            var dateFromPost =	review.human_readable_date;
                          }else{
                            var dateFromPost = review.date;
                          }
                          html += 	dateFromPost;
                        }catch(e){};

                      }
                      html +='</div>';
									}
									html +=
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>';

            reviewIndex ++;
            return html;
}

function reviewsio_renderRating(rating, userVaribles){
  var html = '';

  for(var i=1;i<=5;i++){
    if(i <= rating){
        html += '<i class="stars__icon ricon-percentage-star--100"></i>';
    } else if(i - 0.25 <= rating) {
        html += '<i class="stars__icon stars__icon--75 ricon-percentage-star--100"></i>';
    } else if(i - 0.5 <= rating) {
        html += '<i class="stars__icon stars__icon--50 ricon-percentage-star--100"></i>';
    }   else if(i - 0.75 <= rating) {
        html += '<i class="stars__icon stars__icon--25 ricon-percentage-star--100"></i>';
    }
    else {
      html += '<i class="stars__icon stars__icon--0 ricon-percentage-star--100"></i>';
    }
  }
  return html;
}

function reviewsio_renderPopups(userVaribles, ajaxData){
  var html = '<div class="CarouselWidget-prefix"><div class="CarouselWidget u-marginBottom--none u-displayBlock" r-data-observe-resizes>';
  for(var review in ajaxData.reviews){

      if(!isNaN(review)){

      try{
        if((ajaxData.reviews[review].images[0] && userVaribles.options.reviews.enable_photos) || (ajaxData.reviews[review].videos.length >= 1) && userVaribles.options.reviews.enable_videos){
          // try{
            html += '<div>' + reviewsio_generateImagePopup(ajaxData.reviews[review],userVaribles) + '</div>';
          // }catch(f){}
        }
        else{
          // try{
          html += '<div>' + reviewsio_generatePopup(ajaxData.reviews[review],userVaribles) + '</div>';
          // }catch(f){}
        }
      }catch(e){
        // try{
        html += '<div>' + reviewsio_generatePopup(ajaxData.reviews[review],userVaribles) + '</div>';
        // }catch(f){}
      }
    }



  }
  html +='</div></div>';
  return html;
}

function reviewsio_generateImagePopup( review, userVaribles){
  var html = ""+
  '<div class="u-hidden--all js-modal-container R-GlobalModal js-widgetModal--withPhoto" id="js-popup--'+review.store_review_id+'">'+
      '<div role="button" tabindex="0" class="R-GlobalModal__backdrop js-close-widgetModal"></div>'+
      '<div role="dialog"  aria-modal="true" class="js-modal-container-dialog R-GlobalModal__dialog R-GlobalModal__dialog--width960">'+
          '<div class="R-flex-row u-flexAlignItems--stretch">'+
              '<div class="R-flex-col-xxs-12 R-flex-col-sm-6 u-displayFlex u-justifyContent--center u-flexAlignItems--center">';
              try{
                if(review.videos[0] && review.videos[0].status == 'active'){
                  html +='<div class="R-ImageContainer">'+
                      '<video id="js-popup--'+review.store_review_id+'-video" controls class="R-ImageContainer__src"style="max-height: 480px;">'+
                        '<source  src="https://s3-eu-west-1.amazonaws.com/reviewscouk/assets/' + review.videos[0].video_url + '">'+
                      '</video>'+
                  '</div>';
                }
                else{
                  html +=`
                    <div class="R-ImageContainer">
                      <img loading="lazy" alt="${userVaribles.translations.review_image}" class="R-ImageContainer__src" src="https://media.reviews.co.uk/resize/create?format=jpg&height=600&width=600&src=${encodeURIComponent('https://d1011j0lbv5k1u.cloudfront.net/assets/' + review.images[0].image)}">
                    </div>`;
                }
              }catch(e){
                if(review.images[0]){
                  html += `
                    <div class="R-ImageContainer">
                      <img loading="lazy" alt="${userVaribles.translations.review_image}" class="R-ImageContainer__src" src="https://media.reviews.co.uk/resize/create?format=jpg&height=600&width=600&src=${encodeURIComponent('https://d1011j0lbv5k1u.cloudfront.net/assets/' + review.images[0].image)}">
                    </div>`;
                }
              }


            html+='</div>'+

              '<div class="R-flex-col-xxs-12 R-flex-col-sm-6">'+
                 ' <div class="dialog__inner dialog__inner--spaceBetween">'+
                     ' <div>'+
                          '<div class="R-flex-row R-flex-row--noMargin R-flex-between-xxs u-marginTop--md u-marginBottom--md">'+
                              '<div>'+
                              '</div>'+
                              '<div>'+
                                  '<div class="controls__button js-close-widgetModal">'+
                                      '<span role="button" tabindex="0" title="'+userVaribles.translations.close+'" class="js-model-close-btn ricon-thin-close button__icon"></span>'+
                                  '</div>'+
                              '</div>'+
                          '</div>'+
                          '<div class="u-textLeft--all u-marginBottom--md">'+
                          (userVaribles.options.reviews.enable_customer_name?'<div class="R-TextHeading R-TextHeading--xxs R-TextHeading--inline u-marginRight--xs">'+
                                  '<div class="cssVar-popup-heading-text">'+

                                   review.reviewer.first_name+
                                  '</div>'+
                              '</div>':"")+

                              '<div class="R-RatingStars R-RatingStars--sm u-verticalAlign--middle" title="'+ (review.rating+ ' ' + userVaribles.translations.stars) +'">'+
                                  '<div aria-hidden="true" class="R-RatingStars__stars" aria-hidden="true">'+
                                  reviewsio_renderRating(review.rating,userVaribles) +

                                  '</div>'+
                              '</div>'+
                             ' <div>';


                try{
                  if (review.tags.find(t => t.tag === 'Subscriber') && userVaribles.options.reviews.enable_subscriber_badge) {
                    html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                                  '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                                    '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon cssVar-popup-badgeElement__icon"></span>'+
                                  '</div>'+
                                  '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                                    '<div class="cssVar-badgeElement__text">'+
                                      '<div class="cssVar-popup-badgeElement__text">'+

                                      userVaribles.translations.verified_subscriber +
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
                  } else if ((review.reviewer.verified_buyer == "Verified Buyer")&&(userVaribles.options.reviews.enable_verified_badge)){

                    html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                                  '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                                    '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon cssVar-popup-badgeElement__icon"></span>'+
                                  '</div>'+
                                  '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                                    '<div class="cssVar-badgeElement__text">'+
                                      '<div class="cssVar-popup-badgeElement__text">'+

                                      userVaribles.translations.verified_customer +
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
                  }
                }catch(error){}

                try{
                  if(review.attributes.length > 0){
                    var renderedCenteredSelects = false;
                    review.attributes.sort(function(a, b) {
                        return a.attribute.type == 'centered-range' ? 1 : -1
                    });
                    html+='<div class="u-marginTop--sm u-marginBottom--md">';
                    for(var rating = 0; rating < review.attributes.length; rating++) {
                        semiColon = "";
                        var attributeQuestionLabel = '';
                        if(review.attributes[rating].attribute.public_label && review.attributes[rating].attribute.public_label.length > 0) {
                            attributeQuestionLabel = review.attributes[rating].attribute.public_label;
                        } else {
                            attributeQuestionLabel = review.attributes[rating].attribute.question;
                        }

                        try{
                            if(attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != ':' && attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != '?' && attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != '!' && attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != '.') {
                                semiColon = ":";
                            }
                        }catch(e){}

                        if(review.attributes[rating].attribute.type != 'centered-range') {
                          html +=
                            '<div class="R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                                '<div class="R-TextHeading R-TextHeading--xxxxs R-TextHeading--inline u-textLeft--all u-marginBottom--none u-marginRight--xs">'+
                                    '<div class="cssVar-popup-heading-text">'+
                                    attributeQuestionLabel+semiColon+
                                    '</div>'+
                                '</div>'+

                                '<div class="R-TextBody R-TextBody--xxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-textSentenceCase">'+
                                    '<div class="cssVar-popup-body-text">'+
                                    reviewsio_decodeJsonStringArray(review.attributes[rating].answer) +
                                    '</div>'+
                                '</div>'+
                            '</div>';
                         }
                        if(!renderedCenteredSelects && review.attributes[rating].attribute.type =='centered-range'){
                            html += '<div class="R-SliderIndicator-group">';
                            html += reviewsio_renderAllCenteredSelects(review.attributes);
                            html += '</div>';
                            renderedCenteredSelects = true;
                        }

                    }
                    html+= '</div>';

                  }
                } catch(e){
                }

html +=

                              '</div>'+
                          '</div>'+
                          '<div class="u-marginBottom--md">'+

                          '</div>'+
                          (userVaribles.options.reviews.enable_product_name?'<div class="R-TextBody R-TextBody--xxs u-textLeft--all"><em class="cssVar-popup-body-text">'+review.product_name+'</em></div>':"")+
                          '<div class="R-TextBody R-TextBody--xs u-whiteSpace--prewrap u-scrollableMaxHeight--480--desktop u-marginBottom--lg">'+
                            '<div class="cssVar-popup-body-text">'+
                            reviewsio_escapeHtmlEntities(review.comments) +
                              '</div>'+(review.would_recommend? '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs  u-marginBottom--sm">'+
                              '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                                  '<span class="ricon-heart R-IconButton__icon cssVar-popup-badgeElement__icon"></span>'+
                              '</div>'+
                              '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                                  '<div class="cssVar-popup-badgeElement__text">'+
                                      userVaribles.translations.would_recommend+
                                ' </div>'+
                              '</div>'+
                          '</div>':"")+'</div>'+
                      '</div>'+

                      '<div>';

                      if (userVaribles.options.popups.enable_replies) {
                        html += reviewsio_generatePopupReplyContent(review.responses);
                      }

                      if((review.votes >= 1)&&(userVaribles.options.popups.enable_helpful_count) ){
                          html +='<div id="vote_up_container-' + review.store_review_id +'" class="u-marginBottom--sm">'+
                               reviewsio_getVoteCountHtml(review.store_review_id, review.votes, userVaribles) +
                              '</div>';
                      } else {
                          html +='<div id="vote_up_container-' + review.store_review_id +'" class="u-marginBottom--sm">'+'</div>';
                      }

                      html += '<div id="vote_notice-' + review.store_review_id +'">';
                      html += (reviewsio_hasVoted(review.store_review_id) != false ? reviewsio_getVotedHtml(reviewsio_hasVoted(review.store_review_id)) : '');
                      html += '</div>';

                      html+='<div id="vote_options-' + review.store_review_id +'" class="R-flex-row R-flex-row--noMargin R-flex-baseline-xxs R-flex-start-xxs">'+
                              (userVaribles.options.popups.enable_helpful_buttons?
                                '<div class="u-displayInlineBlock">'+
                                  '<div class="R-TextHeading R-TextHeading--xxxxs u-marginBottom--none u-marginRight--sm">'+
                                      '<div class="cssVar-popup-heading-text">'+
                                          userVaribles.translations.was_helpful+
                                      '</div>'+
                                  '</div>'+
                              '</div>'+
                              '<div class="u-displayInlineBlock">'+
                              "<div tabindex='0' role='button' class='R-TextBody R-TextBody--xxxs R-TextBody--inline u-cursorPointer u-textDecoration--underline  u-marginBottom--none u-marginRight--sm' onclick='reviewsio_vote(\""+ userVaribles.store+"\", \""+ review.store_review_id+"\", 1, " + review.votes + ", \""+userVaribles.translations.up_voted+"\")'>"+
                                      '<div class="cssVar-popup-body-text" reviewId="'+review.store_review_id+'">'+
                                        userVaribles.translations.yes+
                                      '</div>'+
                                  '</div>'+

                                  "<div tabindex='0' role='button' class='R-TextBody R-TextBody--xxxs R-TextBody--inline u-cursorPointer u-textDecoration--underline  u-marginBottom--none u-marginRight--sm' onclick='reviewsio_vote(\""+ userVaribles.store+"\", \""+ review.store_review_id+"\", 0, " + review.votes + ", \""+userVaribles.translations.down_voted+"\")'>"+
                                      '<div class="cssVar-popup-body-text">'+
                                        userVaribles.translations.no+
                                      '</div>'+
                                  '</div>'+

                              '</div>' : "")+
                          '</div>'+
                          '<div class="u-hr u-hr--margin-sm"></div>'+

                          '<div class="R-TextHeading R-TextHeading--xxxxs u-textCenter--all u-marginBottom--md">';
                          if(userVaribles.options.reviews.enable_branch_name){
                            html+='<em class="cssVar-popup-heading-text">'+review.branch+'</em>';
                          }
                      html +='<div class="cssVar-popup-heading-text">';
                              if (userVaribles.options.reviews.enable_customer_location) {

                                try{
                                  if(review.reviewer.address !=""){
                                    var dateFromPost = review.reviewer.address;
                                    html += 	dateFromPost;
                                    if((userVaribles.options.reviews.enable_review_date)){
                                      html += 	', ';
                                    }
                                  }

                                }catch(e){};
                              }
                              if (userVaribles.options.reviews.enable_review_date) {
                                try{
                                  if(review.image){
                                    var dateFromPost =	review.human_readable_date;
                                  }else{
                                    var dateFromPost = review.date;
                                  }
                                  html += 	dateFromPost;
                                }catch(e){};

                              }
                            html+=  '</div>'+
                          '</div>'+
                          (review && review.third_party && review.third_party != "" ? "" :
                            userVaribles.options.popups.enable_share_buttons?
                            '<div class="u-textCenter--all u-marginBottom--md shareSection">'+

                                '<div tabindex="0" role="button" title="Share review on Twitter" class="controls__button u-marginLeft--xs u-marginRight--xs" onclick="reviewsio_shareLink(\''+userVaribles.store+'\',\'twitter\', \''+review.store_review_id+'\')">'+
                                    '<span class="ricon-twitter-favicon button__icon button__icon--sm"></span>'+
                                '</div>'+
                                '<div tabindex="0" role="button" title="Share review on Facebook" target="_blank" class="controls__button u-marginLeft--xs u-marginRight--xs" onclick="reviewsio_shareLink(\''+userVaribles.store+'\',\'facebook\', \''+review.store_review_id+'\')">'+
                                    '<span  class="ricon-facebook-favicon button__icon button__icon--sm"></span>'+
                                '</div>'+
                                '<a tabindex="0" role="button" title="Share review via email" href="'+ reviewsio_shareLink(userVaribles.store, "email", review.store_review_id) +'" class="controls__button u-marginLeft--xs u-marginRight--xs">'+
                                    '<span class="ricon-email button__icon button__icon--sm button__icon--email"></span>'+
                                '</a>'+
                            '</div>' : ""
                          )+
                      '</div>'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>';

  return html;
}

function reviewsio_generatePopup(review,userVaribles){



  var html = ""+
  '<div class="u-hidden--all js-modal-container R-GlobalModal js-widgetModal" id="js-popup--'+review.store_review_id+'">'+
      '<div class="R-GlobalModal__backdrop js-close-widgetModal"></div>'+
      '<div role="dialog"  aria-modal="true"  class="js-modal-container-dialog R-GlobalModal__dialog R-GlobalModal__dialog--width640">'+
          '<div class="R-flex-row u-flexAlignItems--stretch">'+


              '<div class="R-flex-col-xxs-12 R-flex-col-sm-12">'+
                 ' <div class="dialog__inner dialog__inner--spaceBetween">'+
                     ' <div>'+
                          '<div class="R-flex-row R-flex-row--noMargin R-flex-between-xxs u-marginTop--md u-marginBottom--md">'+
                              '<div>'+
                              '</div>'+
                              '<div>'+
                                  '<div class="controls__button js-close-widgetModal">'+
                                      '<span role="button" tabindex="0" title="'+userVaribles.translations.close+'" class="js-model-close-btn ricon-thin-close  button__icon"></span>'+
                                  '</div>'+
                              '</div>'+
                          '</div>'+
                          '<div class="u-textLeft--all u-marginBottom--md">'+
                          (userVaribles.options.reviews.enable_customer_name?'<div class="R-TextHeading R-TextHeading--xxs R-TextHeading--inline u-marginRight--xs">'+
                                  '<div class="cssVar-popup-heading-text">'+
                                    review.reviewer.first_name+
                                  '</div>'+
                              '</div>':"")+

                              '<div class="R-RatingStars R-RatingStars--sm u-verticalAlign--middle">'+
                                  '<div aria-hidden="true" title="'+ (review.rating+ ' ' + userVaribles.translations.stars) +'" class="R-RatingStars__stars" aria-hidden="true">'+
                                  reviewsio_renderRating(review.rating,userVaribles) +

                                  '</div>'+
                              '</div>'+
                             '<div>';


                try{
                  if (review.tags.find(t => t.tag === 'Subscriber') && userVaribles.options.reviews.enable_subscriber_badge){
                    html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                                  '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                                    '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon cssVar-popup-badgeElement__icon"></span>'+
                                  '</div>'+
                                  '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                                    '<div class="cssVar-badgeElement__text">'+
                                      '<div class="cssVar-popup-badgeElement__text">'+
                                      userVaribles.translations.verified_subscriber +
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
                  } else if ((review.reviewer.verified_buyer == "Verified Buyer")&&(userVaribles.options.reviews.enable_verified_badge)){

                    html +=		  '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                                  '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                                    '<span class="ricon-badge--checkmark R-IconButton__icon cssVar-badgeElement__icon cssVar-popup-badgeElement__icon"></span>'+
                                  '</div>'+
                                  '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                                    '<div class="cssVar-badgeElement__text">'+
                                      '<div class="cssVar-popup-badgeElement__text">'+
                                      userVaribles.translations.verified_customer +
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
                  }
                }catch(error){}

                try{
                  if(review.attributes.length > 0){
                    var renderedCenteredSelects = false;
                    review.attributes.sort(function(a, b) {
                        return a.attribute.type == 'centered-range' ? 1 : -1
                    });
                    html+='<div class="u-marginTop--sm u-marginBottom--md">';
                    for(var rating = 0; rating < review.attributes.length; rating++) {
                        semiColon = "";
                        var attributeQuestionLabel = '';
                        if(review.attributes[rating].attribute.public_label && review.attributes[rating].attribute.public_label.length > 0) {
                            attributeQuestionLabel = review.attributes[rating].attribute.public_label;
                        } else {
                            attributeQuestionLabel = review.attributes[rating].attribute.question;
                        }

                        try{
                            if(attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != ':' && attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != '?' && attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != '!' && attributeQuestionLabel.substring(attributeQuestionLabel.length - 1) != '.') {
                                semiColon = ":";
                            }
                        }catch(e){}

                        if(review.attributes[rating].attribute.type != 'centered-range') {
                          html +=
                            '<div class="R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs u-marginBottom--xs">'+
                                '<div class="R-TextHeading R-TextHeading--xxxxs R-TextHeading--inline u-textLeft--all u-marginBottom--none u-marginRight--xs">'+
                                    '<div class="cssVar-popup-heading-text">'+
                                    attributeQuestionLabel+semiColon+
                                    '</div>'+
                                '</div>'+

                                '<div class="R-TextBody R-TextBody--xxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-textSentenceCase">'+
                                    '<div class="cssVar-popup-body-text">'+
                                    reviewsio_decodeJsonStringArray(review.attributes[rating].answer) +
                                    '</div>'+
                                '</div>'+
                            '</div>';
                         }
                        if(!renderedCenteredSelects && review.attributes[rating].attribute.type =='centered-range'){
                            html += '<div class="R-SliderIndicator-group">';
                            html += reviewsio_renderAllCenteredSelects(review.attributes);
                            html += '</div>';
                            renderedCenteredSelects = true;
                        }

                    }
                    html+= '</div>';

                  }
                } catch(e){
                }

                html += '</div>'+
                    '</div>'+
                    '<div class="u-marginBottom--md">'+

                    '</div>'+
                    (userVaribles.options.reviews.enable_product_name?'<div><em class="R-TextBody R-TextBody--xxs u-textLeft--all"><span class="cssVar-popup-body-text">'+review.product_name+'</span></em></div>':"")+
                    '<div class="R-TextBody R-TextBody--xs u-whiteSpace--prewrap u-scrollableMaxHeight--480--desktop u-marginBottom--lg">'+
                      '<div class="cssVar-popup-body-text">'+
                      reviewsio_escapeHtmlEntities(review.comments) +
                      '</div>'+(review.would_recommend? '<div class="R-BadgeElement R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs  u-marginBottom--sm">'+
                      '<div class="R-BadgeElement__icon R-IconButton R-IconButton--lg u-marginLeft--neg--xxs" aria-hidden="true">'+
                          '<span class="ricon-heart R-IconButton__icon cssVar-badgeElement__icon"></span>'+
                      '</div>'+
                      '<div class="R-BadgeElement__text R-TextBody R-TextBody--xxxxs R-TextBody--inline u-textLeft--all u-marginBottom--none u-verticalAlign--middle">'+
                          '<div class="cssVar-badgeElement__text">'+
                              userVaribles.translations.would_recommend+
                        ' </div>'+
                      '</div>'+
                  '</div>':"")+'</div>'+
                '</div>'+

                '<div>';

                if (userVaribles.options.popups.enable_replies) {
                  html += reviewsio_generatePopupReplyContent(review.responses);
                }

                if(review.votes >= 1){
                    html +='<div id="vote_up_container-' + review.store_review_id +'" class="u-marginBottom--sm">'+
                         reviewsio_getVoteCountHtml(review.store_review_id, review.votes, userVaribles) +
                        '</div>';
                } else {
                    html +='<div id="vote_up_container-' + review.store_review_id +'" class="u-marginBottom--sm">'+'</div>';
                }

                html += '<div id="vote_notice-' + review.store_review_id +'">';
                html += (reviewsio_hasVoted(review.store_review_id) != false ? reviewsio_getVotedHtml(reviewsio_hasVoted(review.store_review_id)) : '');
                html += '</div>';

                html+='<div id="vote_options-' + review.store_review_id +'" class="R-flex-row R-flex-row--noMargin R-flex-baseline-xxs R-flex-start-xxs">'+
                      (userVaribles.options.popups.enable_helpful_buttons && reviewsio_hasVoted(review.store_review_id) == false ?

                        '<div class="u-displayInlineBlock">'+
                          '<div class="R-TextHeading R-TextHeading--xxxxs u-marginBottom--none u-marginRight--sm">'+
                              '<div class="cssVar-popup-heading-text">'+
                                  userVaribles.translations.was_helpful+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                      '<div class="u-displayInlineBlock">'+
                          "<div role='button' tabindex='0' class='R-TextBody R-TextBody--xxxs R-TextBody--inline u-cursorPointer u-textDecoration--underline  u-marginBottom--none u-marginRight--sm' onclick='reviewsio_vote(\""+ userVaribles.store+"\", \""+ review.store_review_id+"\", 1, " + review.votes + ", \""+userVaribles.translations.up_voted+"\")'>"+
                          '<div  class="cssVar-popup-body-text js-recommend-review" reviewId="'+review.store_review_id+'">'+
                          userVaribles.translations.yes+
                      '</div>'+
                          '</div>'+

                          "<div role='button' tabindex='0'  class='R-TextBody R-TextBody--xxxs R-TextBody--inline u-cursorPointer u-textDecoration--underline  u-marginBottom--none u-marginRight--sm' onclick='reviewsio_vote(\""+ userVaribles.store+"\", \""+ review.store_review_id+"\", 0, " + review.votes + ", \""+userVaribles.translations.down_voted+"\")'>"+
                              '<div class="cssVar-popup-body-text">'+
                                userVaribles.translations.no+
                              '</div>'+
                          '</div>'+

                      '</div>' : "")+
                  '</div>'+
                  '<div class="u-hr u-hr--margin-sm"></div>'+

                  '<div class="R-TextHeading R-TextHeading--xxxxs u-textCenter--all u-marginBottom--md">';
                  if(userVaribles.options.reviews.enable_branch_name){
                    html+='<em class="cssVar-popup-heading-text">'+review.branch+'</em>';
                  }
              html +='<div class="cssVar-popup-heading-text">';
                      if (userVaribles.options.reviews.enable_customer_location) {

                        try{
                          if(review.reviewer.address !=""){
                            var dateFromPost = review.reviewer.address;
                            html += 	dateFromPost;
                            if((userVaribles.options.reviews.enable_review_date)){
                              html += 	', ';
                            }
                          }
                        }catch(e){};
                      }
                      if (userVaribles.options.reviews.enable_review_date) {
                        try{
                          if(review.image){
                            var dateFromPost =	review.human_readable_date;
                          }else{
                            var dateFromPost = review.date;
                          }
                          html += 	dateFromPost;
                        }catch(e){};

                      }
                    html+=  '</div>'+
                  '</div>'+
                  (review && review.third_party && review.third_party != "" ? "" :
                    userVaribles.options.popups.enable_share_buttons ?
                    '<div class="u-textCenter--all u-marginBottom--md shareSection">'+

                        '<div tabindex="0" role="button" class="controls__button u-marginLeft--xs u-marginRight--xs" onclick="reviewsio_shareLink(\''+userVaribles.store+'\',\'twitter\', \''+review.store_review_id+'\')">'+
                            '<span title="'+userVaribles.translations.share_twitter+'" class="ricon-twitter-favicon button__icon button__icon--sm"></span>'+
                        '</div>'+
                        '<div tabindex="0" role="button" target="_blank" class="controls__button u-marginLeft--xs u-marginRight--xs" onclick="reviewsio_shareLink(\''+userVaribles.store+'\',\'facebook\', \''+review.store_review_id+'\')">'+
                            '<span title="'+userVaribles.translations.share_facebook+'" class="ricon-facebook-favicon button__icon button__icon--sm"></span>'+
                        '</div>'+
                        '<a tabindex="0" role="button" title="'+userVaribles.translations.share_email+'" href="'+ reviewsio_shareLink(userVaribles.store, "email", review.store_review_id) +'" class="controls__button u-marginLeft--xs u-marginRight--xs">'+
                            '<span class="ricon-email button__icon button__icon--sm button__icon--email"></span>'+
                        '</a>'+
                    '</div>' : ""
                  )+
                      '</div>'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>';
  return html;

}

window.onload = function () {


    setTimeout(function(){

      if ('ResizeObserver' in self) {
          var ro = new ResizeObserver(function(entries) {

              var defaultBreakpoints = {'R-XSM': 380, 'R-SM': 480, 'R-MD': 640, 'R-LG': 767, 'R-XLG': 992, 'R-XXLG': 1140, 'R-XXXLG': 1440,'R-XXXXLG': 1919};

              entries.forEach(function(entry) {

              var breakpoints = entry.target.dataset.breakpoints ?
                  JSON.parse(entry.target.dataset.breakpoints) :
                  defaultBreakpoints;

              Object.keys(breakpoints).forEach(function(breakpoint) {
                  var minWidth = breakpoints[breakpoint];

                  if (entry.contentRect.width <= minWidth) {
                      if(breakpoint != 0){
                          entry.target.classList.remove(breakpoints[breakpoint-1])
                      }
                      entry.target.classList.add(breakpoint)
                  }
                  else {
                      entry.target.classList.remove(breakpoint);
                  }
              });
              });
          });

          var elements = document.querySelectorAll('[r-data-observe-resizes]');
          for (var element, i = 0; element = elements[i]; i++) {
              ro.observe(element);
          }


      }

    }, 301);
  }

function reviewsio_resizer(){
  if ('ResizeObserver' in self) {
    var ro = new ResizeObserver(function(entries) {

        var defaultBreakpoints = {'R-XSM': 380, 'R-SM': 480, 'R-MD': 640, 'R-LG': 767, 'R-XLG': 992, 'R-XXLG': 1140, 'R-XXXLG': 1440,'R-XXXXLG': 1919};

        entries.forEach(function(entry) {

        var breakpoints = entry.target.dataset.breakpoints ?
            JSON.parse(entry.target.dataset.breakpoints) :
            defaultBreakpoints;

        Object.keys(breakpoints).forEach(function(breakpoint) {
            var minWidth = breakpoints[breakpoint];

            if (entry.contentRect.width <= minWidth) {
                if(breakpoint != 0){
                    entry.target.classList.remove(breakpoints[breakpoint-1])
                }
                entry.target.classList.add(breakpoint)
            }
            else {
                entry.target.classList.remove(breakpoint);
            }
        });
        });
    });

    var elements = document.querySelectorAll('[r-data-observe-resizes]');
    for (var element, i = 0; element = elements[i]; i++) {
        ro.observe(element);
    }

}
}

function reviewsio_shareLink(store, type, id) {
    id = id.split('-');
    var link = '';
    switch (id[0]) {
      case 'product_review':
          if(type == 'twitter'){
              link = 'https://twitter.com/intent/tweet?url=https://media.reviews.co.uk/product-snippet/' + id[1];
          } else if(type =='facebook') {
              link = 'https://www.facebook.com/dialog/share?app_id=2171894026402210&display=popup&href=https://media.reviews.co.uk/product-snippet/' + id[1];
          } else if (type == 'email') {
              return 'mailto:?subject=Check out this review&body=https://media.reviews.co.uk/product-snippet/' + id[1];
          }
          break;
      case 'store_review':
          if(type == 'twitter'){
              link = 'https://twitter.com/intent/tweet?url=https://www.reviews.io/company-review/store/'+ store +'/' + id[1];
          } else if(type =='facebook') {
              link = 'https://www.facebook.com/dialog/share?app_id=2171894026402210&display=popup&href=https://www.reviews.io/company-review/store/'+ store +'/' + id[1];
          } else if (type == 'email') {
              return 'mailto:?subject=Check out this review&body=https://www.reviews.io/company-review/store/'+ store +'/' + id[1];
          }
          break;
    }
    if(link) {
          window.open(link,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=640,height=480');
    }
}

function reviewsio_generatePopupReplyContent(responses){
  if (typeof responses === 'undefined' || responses.length < 1) {
    return '';
  }
  const replyHTML = [];
  responses.forEach((res)=>{
    if (res.comments && !res.private){
      let responseItem = '';
      responseItem += '<div class="u-textLeft--all"><div class="R-TextHeading R-TextHeading--xxxxs u-marginBottom--none"><div class="cssVar-popup-heading-text">Reply:</div></div>';
      responseItem += '<div class="u-displayInlineBlock R-TextBody R-TextBody--xxs R-TextBody--inline"><div class="cssVar-popup-body-text">' + res.comments + '</div></div></div>';
      replyHTML.push(responseItem);
    }
  });
  if (replyHTML.length > 0){
    return replyHTML.join('');
  }
}

function elementOrAncestorHasClass(element, className) {

  if (!element || element.length === 0) {
    return false;
  }
  var parent = element;
  do {
    if (parent === document) {
      break;
    }
    if (parent.className.indexOf(className) >= 0) {
      return true;
    }
  } while (parent = parent.parentNode);
  return false;
}

function reviewsio_hasVoted(id) {

    if(localStorage.getItem(id+'/helpful')) {
        return localStorage.getItem(id+'/helpful');
    } else {
        return false;
    }
}
function reviewsio_vote(store, id, vote, existingVoteCount,string){
  var idParts = id.split('-');
  if (!localStorage.getItem(id+'/helpful') && vote){
      localStorage.setItem(id+'/helpful', 'up');
      var elm = document.getElementById('vote_notice-'+id);
      var optsElm = document.getElementById('vote_options-'+id);
      elm.innerHTML = reviewsio_getVotedHtml('up',string);
      optsElm.style.display = 'none';
      switch (idParts[0]) {
        case 'store_review':
          var url = userVaribles.api + '/merchant/vote?store='+ store +'&review_id='+ idParts[1];
          break;
        case 'product_review':
          var url = userVaribles.api + '/product/vote?store='+ store +'&product_review_id='+ idParts[1];
          break;
      }
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
          if (xhr.status === 200) {
              ajaxData = JSON.parse(xhr.responseText);
              if(ajaxData.success == true) {
                  if(existingVoteCount > 0) {
                      var countElm = document.getElementById('vote_count-'+id);
                      countElm.innerHTML = ajaxData.count;
                  } else {
                      var countElm = document.getElementById('vote_up_container-'+id);
                      countElm.innerHTML = reviewsio_getVoteCountHtml(id, ajaxData.count);
                  }

              }
          } else {

          }
      };
      xhr.send();
  }
  else if(!localStorage.getItem(id+'/helpful') && !vote) {
      localStorage.setItem(id+'/helpful', 'down');
      var elm = document.getElementById('vote_notice-'+id);
      var optsElm = document.getElementById('vote_options-'+id);
      elm.innerHTML = reviewsio_getVotedHtml('down',string);
      optsElm.style.display = 'none';
  }
}

function reviewsio_getVoteCountHtml(storeReviewId, votes) {
      var html = '<div class="R-flex-row R-flex-row--noMargin R-flex-middle-xxs R-flex-start-xxs">'+
                    '<div class="R-IconButton R-IconButton--md u-marginLeft--neg--xxs">'+
                      '<i class="ricon-thumbsup R-IconButton__icon cssVar-popup-message-icon" aria-hidden="true"></i>'+
                    '</div>'+
                    '<em class="R-TextBody R-TextBody--xxxs R-TextBody--inline u-marginBottom--none"><span class=" cssVar-popup-body-text">'+
                        '<span id="vote_count-'+ storeReviewId +'">'+votes+"</span>&nbsp;"+ (votes > 1 ? userVaribles.translations.helpful_multiple : userVaribles.translations.helpful_single) +
                   ' </span></em>'+
                  '</div>';
    return html;
}

function reviewsio_decodeJsonStringArray(a) {
    if(a.indexOf('["') !== -1) {
        try {
            var attributeAnswer = JSON.parse(a);
            return attributeAnswer.join(', ');
        } catch (e) {
            return a;
        }
    } else {
        return a;
    }
}

function reviewsio_getVotedHtml(vote,string) {
    var html = '';
    if(vote == 'up' || vote == true) {
        var html = '<div class="u-textLeft--all">' +
                  '<div class="R-LabelTag R-LabelTag--sm">' +
                      '<span class="R-LabelTag__icon ricon-checkmark" aria-hidden="true"></span>' +
                      '<div class="R-LabelTag__text">' +
                          (string ? string : userVaribles.translations.up_voted) +
                      '</div>' +
                '  </div>'+
            '</div>';
    } else if(vote == 'down') {
      var html = '<div class="u-textLeft--all">' +
                        '<div class="R-LabelTag R-LabelTag--sm">' +
                            '<span class="R-LabelTag__icon ricon-checkmark"></span>' +
                            '<div class="R-LabelTag__text">' +
                              (string ? string : userVaribles.translations.down_voted) +
                            '</div>' +
                      '  </div>'+
                  '</div>';
    }
    return html;
}

function reviewsio_renderAllCenteredSelects(attributes) {
    var html = '';
    for (var i = 0; i < attributes.length; i++) {
        if(attributes[i].attribute && attributes[i].attribute.type && attributes[i].attribute.type == 'centered-range') {
            html += '<div class="R-SliderIndicator R-SliderIndicator--sm">' +
                        '<div class="R-TextHeading R-TextHeading--xxxxs">' +
                            (attributes[i].attribute.public_label.length > 0 ? attributes[i].attribute.public_label : attributes[i].attribute.question) +
                        '</div>' +
                        '<div class="R-SliderIndicator__inner">' +
                            '<div class="R-SliderIndicator__bg"></div>' +
                            '<div class="R-SliderIndicator__button" style="left:'+reviewio_getRatingPercentile(attributes[i].answer)+'%;"></div>'+
                        '</div>'+
                        '<div class="R-flex-row R-flex-row--noMargin R-flex-between-xxs">';
            var sliderLabels = reviewsio_getSliderLabels(attributes[i].attribute.data);
            for (var sliderIndex = 0; sliderIndex < sliderLabels.length; sliderIndex++) {
                if(sliderLabels[sliderIndex] == null) {
                    continue;
                }
                html += '<div class="'+( sliderLabels[1] == null ? 'R-flex-col-xxs-6' : 'R-flex-col-xxs-4')+' u-paddingLeft--none u-paddingRight--xxs" r-tooltip="'+(sliderLabels[sliderIndex])+'" r-tooltip-size="80" r-tooltip-fontsize="xxxxs" r-tooltip-position-align="'+(sliderIndex == 0 ? 'topLeft' : (sliderIndex == sliderLabels.length -1 ? 'topRight' : ''))+'" r-tooltip-enable="false">' +
                            '<div class="R-TextBody R-TextBody--xxxxs '+(sliderIndex == 0 ? 'u-textLeft--all' : sliderIndex == sliderLabels.length -1 ? 'u-textRight--all' : 'u-textCenter--all')+'">' +
                                (sliderLabels[sliderIndex]) +
                            '</div>' +
                        '</div>';
            }
            html += '</div>'+
                '</div>';
        }
    }
    return html;
}

function reviewio_getRatingPercentile(rating) {
    rating = (parseInt(rating) / 5) * 5;
    return Math.round((100/4)*rating) - 25;
}

function reviewsio_getSliderLabels(labels) {
    try {
      var parsedlabels = JSON.parse(labels);
      return parsedlabels;
    } catch (e) {
        return labels;
    }
}

function reviewsio_unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}/gi,
    function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
    });
}

function reviewsio_escapeHtmlEntities(review_comments){
  if (!review_comments) return review_comments;
  return review_comments.replace(/</g, '').replace(/>/g, '');
}

function reviewsio_getCountryList(language) {
  var country_list =
    reviewsio_language(language).hasOwnProperty('country_list') ?
    reviewsio_language(language).country_list :
    reviewsio_language('en').country_list;

  return country_list;
}

function reviewsio_language(lan){
  var translations;
  switch(lan){
    case 'fr':
      translations = {
        rating: "moyenne",
        stars: "Ã©toiles",
        share: "Partager",
        read_more: "Lire plus de commentaires sur REVIEWS.io",
        close: "Proche",
        share_facebook: "Partager sur Facebook",
        share_twitter: "Partager sur Twitter",
        share_email: "Partager par e-mail",
        reviews: "commentaires",
        excellent: "Excellent",
        good: "Bien",
        normal: "Ordinaire",
        anonymous: "Anonyme",
        verified_customer: "Client VÃ©rifiÃ©",
        amazon_customer: "Client Amazon",
        based_on: "basÃ© sur",
        would_recommend: "Je recommande ce produit",
        helpful_multiple: "les gens ont trouvÃ© cet avis utile.",
        helpful_single: "personne a trouvÃ© ce commentaire utile.",
        up_voted: "Vous avez notÃ© cet avis comme utile.",
        down_voted: 'Vous avez rejetÃ© cet avis.',
        was_helpful:'Cet avis vous a-t-il Ã©tÃ© utile?',
        yes:'Oui',
        no:'Non',
        minute_ago:'Il y a minute',
        minutes_ago:'Il y a minutes',
        hour_ago:'Il ya a heure',
        hours_ago:'Il y a heures',
        day_ago:'Il y a jour',
        days_ago:'Il y a jours',
        week_ago:'Il y a semaine',
        weeks_ago:'Il y a semaines',
        month_ago:'Il y a mois',
        months_ago:'Il y a mois',
        year_ago: 'il y a an',
        years_ago:'il y a ans',
        source: 'La source',
        review_image: 'Image de la revue',
      };

      break;
    case 'de':
        translations = {
          rating: "Rating",
          stars: "Sterne",
          reviews: "Bewertungen",
          share: "Teilen",
          read_more: "Lesen Sie weitere Bewertungen auf REVIEWS.io",
          close: "SchlieÃen",
          share_facebook: "Auf Facebook teilen",
          share_twitter: "Auf Twitter teilen",
          share_email: "Per E-Mail teilen",
          excellent: "Hervorragend",
          good: "Gut",
          normal: "Akzeptabel",
          anonymous: "Anonym",
          verified_customer: "Verifizierter Kunde",
          amazon_customer: "Amazon Kunde",
          based_on: "basierend auf",
          would_recommend: "Ich empfehle dieses Produkt",
          helpful_multiple: "Personen fanden diese Bewertung hilfreich.",
          helpful_single: "Person fand diese Bewertung hilfreich.",
          up_voted: "Sie haben diese Bewertung als hilfreich markiert.",
          down_voted: 'Sie haben diese Bewertung als nicht hilfreich markiert.',
          was_helpful: 'War diese Bewertung hilfreich?',
          yes:'Ja',
          no:'Nein',
          minute_ago:'vor einer Minute',
          minutes_ago:'vor Minuten',
          hour_ago:'vor einer Stunde',
          hours_ago:'vor Stunden',
          day_ago:'vor einem Tag',
          days_ago:'vor Tagen',
          week_ago:'vor einer Woche',
          weeks_ago:'vor Wochen',
          month_ago:'vor einem Monat',
          months_ago:'vor Monaten',
          year_ago: 'vor einem Jahr',
          years_ago:'vor Jahren',
          source: 'Quelle',
          review_image: 'Bild der Bewertung',
          country_list: [
            "Afghanistan", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda",
            "Argentinien", "Armenien", "Australien", "Ãsterreich", "Aserbaidschan", "Bahamas",
            "Bahrain", "Bangladesch", "Barbados", "WeiÃrussland", "Belgien", "Belize", "Benin",
            "Bhutan", "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei",
            "Bulgarien", "Burkina Faso", "Burundi", "Kap Verde", "Kambodscha", "Kamerun",
            "Kanada", "Zentralafrikanische Republik", "Tschad", "Chile", "China", "Kolumbien",
            "Komoren", "Kongo", "Costa Rica", "Kroatien", "Kuba",
            "Zypern", "Tschechien", "Demokratische Republik Kongo",
            "DÃ¤nemark", "Dschibuti", "Dominica", "Dominikanische Republik", "Ecuador", "Ãgypten",
            "El Salvador", "Ãquatorialguinea", "Eritrea", "Estland", "Eswatini (ehemals Swasiland)",
            "Ãthiopien", "Fidschi", "Finnland", "Frankreich", "Gabun", "Gambia", "Georgien", "Deutschland",
            "Ghana", "Griechenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
            "Haiti", "Heiliger Stuhl", "Honduras", "Ungarn", "Island", "Indien", "Indonesien",
            "Iran", "Irak", "Irland", "Israel", "Italien", "Jamaika", "Japan", "Jordanien",
            "Kasachstan", "Kenia", "Kiribati", "Kuwait", "Kirgisistan", "Laos", "Lettland",
            "Libanon", "Lesotho", "Liberia", "Libyen", "Liechtenstein", "Litauen",
            "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "Maldiven", "Mali", "Malta",
            "Marshallinseln", "Mauretanien", "Mauritius", "Mexiko", "Mikronesien", "Moldawien",
            "Monaco", "Mongolei", "Montenegro", "Marokko", "Mosambik", "Myanmar",
            "Namibia", "Nauru", "Nepal", "Niederlande", "Neuseeland", "Nicaragua", "Niger",
            "Nigeria", "Nordkorea", "Mazedonien", "Norwegen", "Oman",
            "Pakistan", "Palau", "Staat PalÃ¤stina", "Panama", "Papua-Neuguinea", "Paraguay",
            "Peru", "Philippinen", "Polen", "Portugal", "Katar", "RumÃ¤nien", "Russland",
            "Ruanda", "St. Kitts und Nevis", "St. Lucia", "St. Vincent",
            "Samoa", "San Marino", "SÃ£o TomÃ© und PrÃ­ncipe", "Saudi-Arabien", "Senegal", "Serbien",
            "Seychellen", "Sierra Leone", "Singapur", "Slowakei", "Slowenien", "Salomonen",
            "Somalia", "SÃ¼dafrika", "SÃ¼dkorea", "SÃ¼dsudan", "Spanien", "Sri Lanka",
            "Sudan", "Suriname", "Schweden", "Schweiz", "Syrien", "Tadschikistan", "Tansania",
            "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad und Tobago", "Tunesien",
            "TÃ¼rkei", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Vereinigte Arabische Emirate",
            "Vereinigtes KÃ¶nigreich", "Vereinigte Staaten", "Uruguay", "Usbekistan", "Vanuatu",
            "Vatikanstadt", "Venezuela", "Vietnam", "Jemen", "Sambia", "Simbabwe"
          ]
        };
        break;
    case 'no':
      translations = {
       rating: "Anmeldelse",
       reviews: "Vurderinger",
       excellent: "Glimrende",
       good: "Bra",
       normal: "Ok",
       anonymous: "Anonym",
       verified_customer: "Verifisert kunde",
       amazon_customer: "Amazon kunde",
       based_on: "basert pÃ¥",
       would_recommend: "Jeg anbefaler dette produktet",
       helpful_multiple: "personer synes denne vurderingen var nyttig.",
       helpful_single: "person synes denne vurderingen var nyttig.",
       up_voted: "Du har markert anmeldelsen som nyttig.",
       down_voted: 'Du har markert anmeldelsen som unyttig.',
       was_helpful: 'Var denne anmeldelsen nyttig?',
       yes:'Ja',
       no:'Nei',
       minute_ago:'minutt siden',
       minutes_ago:'minutter siden',
       hour_ago:'time siden',
       hours_ago:'timer siden',
       day_ago:'dag siden',
       days_ago:'dager siden',
       week_ago:'uke siden',
       weeks_ago:'uker siden',
       month_ago:'mÃ¥ned siden',
       months_ago:'mÃ¥neder siden',
       review_image: 'Bilde av anmeldelsen',
      };
      break;
    case 'es':
      translations = {
        rating: 'calificaciÃ³n',
        reviews: 'reseÃ±as',
        share: "Cuota",
        read_more: "Lea mÃ¡s reseÃ±as en REVIEWS.io",
        close: "Cerrar",
        share_facebook: "Compartir en Facebook",
        share_twitter: "Compartir en Twitter",
        share_email: "Compartir via correo electrÃ³nico",
        stars: "estrellas",
        excellent: 'Excelente',
        good: 'Bien',
        normal: 'Normal',
        anonymous: 'AnÃ³nimo',
        verified_customer: 'Cliente Verificado',
        amazon_customer: 'Cliente de Amazon',
        based_on: 'basado en',
        would_recommend: 'recomendarÃ­a',
        helpful_multiple: 'Ãºtil mÃºltiple',
        helpful_single: 'Ãºtil sÃ³lo',
        up_voted: 'votado',
        down_voted: 'votado bajo',
        was_helpful: 'fue Ãºtil',
        yes: 'si',
        no: 'no',
        minute_ago: 'hace un minuto',
        minutes_ago: 'hace minutos',
        hour_ago: 'hace una hora',
        hours_ago: 'horas atras',
        day_ago: 'hace un dia',
        days_ago: 'hace dÃ­as',
        week_ago: 'hace una semana',
        weeks_ago: 'hace semanas',
        month_ago: 'hace un mes',
        months_ago: 'Hace meses',
        year_ago: 'Year ago',
        years_ago:'Years ago',
        source: 'origen',
        review_image: 'Imagen de la reseÃ±a',
      };
      break;
    case "it":
      translations = {
        rating: "Valutazioni",
        stars: "stelle",
        share: "Condividere",
        read_more: "Leggi altre recensioni su REVIEWS.io",
        close: "Chiudere",
        share_facebook: "Condividi su Facebook",
        share_twitter: " Condividi su Twitter",
        share_email: "Condividi via e-mail",
        reviews: "Recensioni",
        excellent: "Eccezionale",
        good: "Bene",
        normal: "Ordinario",
        anonymous: "Anonimo",
        verified_customer: "Cliente verificato",
        amazon_customer: "Cliente Amazon",
        based_on: "basato su",
        would_recommend: "Consiglierei questo prodotto",
        helpful_multiple: "persone hanno trovato utile questa recensione.",
        helpful_single: "persone hanno trovato utile questa recensione.",
        up_voted: "Hai valutato questa recensione come utile.",
        down_voted: "Hai valutato questa recensione come inutile.",
        was_helpful: "Questa recensione Ã¨ stata utile per te?",
        yes: "SÃ¬",
        no: "No",
        minute_ago: "minuto fa",
        minutes_ago: "minuti fa",
        hour_ago: "ora fa",
        hours_ago: "ore fa",
        day_ago: "giorno fa",
        days_ago: "giorni fa",
        week_ago: "settimana fa",
        weeks_ago: "settimane fa",
        month_ago: "mesa fa",
        months_ago: "mesi fa",
        year_ago: "ano fa",
        years_ago: "ani fa",
        source: "Fonte",
        review_image: "Immagine della recensione",
      };
      break;
    case "nl":
      translations = {
        rating: "Gemiddeld",
        reviews: "Recensies",
        share: "Delen",
        read_more: "Lees meer recensies op REVIEWS.io",
        close: "Sluiten",
        share_facebook: "Delen op Facebook",
        share_twitter: "Delen op Twitter",
        share_email: "Delen via e-mail",
        stars: "sterren",
        excellent: "Uitstekend",
        good: "Goed",
        normal: "Normaal",
        anonymous: "Anoniem",
        verified_customer: "Geverifieerde klant",
        amazon_customer: "Amazon klant",
        based_on: "Gebaseerd op",
        would_recommend: "Zou dit product aanbevelen",
        helpful_multiple: "mensen hebben deze recensie gevonden nuttig.",
        helpful_single: "mensen hebben deze recensie gevonden nuttig.",
        up_voted: "Je hebt deze recensie als nuttig gegeven.",
        down_voted: "Je hebt deze recensie als niet nuttig gegeven.",
        was_helpful: "Was deze recensie nuttig?",
        yes: "Ja",
        no: "Nee",
        minute_ago: "minuut geleden",
        minutes_ago: "minuten geleden",
        hour_ago: "uur geleden",
        hours_ago: "uren geleden",
        day_ago: "dag geleden",
        days_ago: "dagen geleden",
        week_ago: "week geleden",
        weeks_ago: "weken geleden",
        month_ago: "maand geleden",
        months_ago: "maanden geleden",
        year_ago: "jaar geleden",
        years_ago: "jaren geleden",
        source: "Bron",
        review_image: "Afbeelding van de recensie",
      };
      break;
    case "sv":
      translations = {
        rating: "Betyg",
        reviews: "Recensioner",
        share: "Dela",
        read_more: "LÃ¤s fler recensioner pÃ¥ REVIEWS.io",
        close: "StÃ¤ng",
        share_facebook: "Dela pÃ¥ Facebook",
        share_twitter: "Dela pÃ¥ Twitter",
        share_email: "Dela via e-mail",
        stars: "stjÃ¤rnor",
        excellent: "UtmÃ¤rkt",
        good: "Bra",
        normal: "Normal",
        anonymous: "Anonym",
        verified_customer: "Verifierad kund",
        amazon_customer: "Amazon kund",
        verified_subscriber: "Verifierad prenumerant",
        based_on: "Baserat pÃ¥",
        would_recommend: "Jag skulle rekommendera detta produkt",
        helpful_multiple: "personer har hittat denna recension anvÃ¤ndbar.",
        helpful_single: "personer har hittat denna recension anvÃ¤ndbar.",
        up_voted: "Du har rÃ¶stat pÃ¥ denna recension som anvÃ¤ndbar.",
        down_voted: "Du har rÃ¶stat pÃ¥ denna recension som inte anvÃ¤ndbar.",
        was_helpful:  "Var denna recension anvÃ¤ndbar?",
        yes: "Ja",
        no: "Nej",
        minute_ago: "minut sedan",
        minutes_ago: "minuter sedan",
        hour_ago: "timme sedan",
        hours_ago: "timmar sedan",
        day_ago: "dag sedan",
        days_ago: "dagar sedan",
        week_ago: "vecka sedan",
        weeks_ago: "veckor sedan",
        month_ago: "mÃ¥nad sedan",
        months_ago: "mÃ¥nader sedan",
        year_ago:  "Ã¥r sedan",
        years_ago: "Ã¥r sedan",
        source: "KÃ¤lla",
        review_image: "Bild av recensionen",
      };
      break;
    case "pl":
      translations = {
        rating: "Årednia Ocena",
        reviews: "Recenzje",
        share: "UdostÄpnij",
        close: "Zamknij",
        read_more: "Przeczytaj wiÄcej recenzji na REVIEWS.io",
        share_facebook: "UdostÄpnij na Facebooku",
        share_twitter: "UdostÄpnij na Twitterze",
        share_email: "UdostÄpnij przez Email",
        stars: "Gwiazdki",
        excellent: "DoskonaÅy",
        good: "Dobry",
        normal: "PrzeciÄtny",
        anonymous: "Anonimowy",
        verified_customer: "Zweryfikowany klient",
        amazon_customer: "Klient Amazon",
        verified_subscriber: "Zweryfikowany subskrybent",
        based_on: "oparte na",
        would_recommend: "Polecam ten produkt",
        helpful_multiple: "osÃ³b uznaÅo tÄ recenzjÄ za pomocnÄ.",
        helpful_single: "osoba uznaÅa tÄ recenzjÄ za pomocnÄ.",
        up_voted: 'OceniÅeÅ tÄ recenzjÄ jako przydatnÄ.',
        down_voted: 'OceniÅeÅ tÄ recenzjÄ jako nieprzydatnÄ.',
        was_helpful: 'Czy ta recenzja byÅa pomocna?',
        yes: 'Tak',
        no: 'Nie',
        minute_ago: 'minutÄ temu',
        minutes_ago: 'minuty temu',
        hour_ago: 'godzinÄ temu',
        hours_ago: 'godzin temu',
        day_ago: 'dzieÅ temu',
        days_ago: 'dni temu',
        week_ago: 'tydzieÅ temu',
        weeks_ago: 'tygodni temu',
        month_ago: 'miesiÄc temu',
        months_ago: 'miesiÄcy temu',
        year_ago: 'rok temu',
        years_ago: 'lat temu',
        source: 'Å¹rÃ³dÅo',
        review_image: 'Obraz recenzji',
      };
      break;
    case "pt":
      translations = {
        rating: "mÃ©dia",
        reviews: "avaliaÃ§Ãµes",
        share: "Compartilhar",
        close: "Fechar",
        read_more: "Leia mais avaliaÃ§Ãµes em REVIEWS.io",
        share_facebook: "Compartilhar no Facebook",
        share_twitter: "Compartilhar no Twitter",
        share_email: "Compartilhar via Email",
        stars: "Estrelas",
        excellent: "Excelente",
        good: "Bom",
        normal: "Normal",
        anonymous: "AnÃ´nimo",
        verified_customer: "Cliente Verificado",
        amazon_customer: "Cliente Amazon",
        verified_subscriber: "Assinante Verificado",
        based_on: "com base em",
        would_recommend: "Eu recomendo este produto",
        helpful_multiple: "pessoas acharam esta avaliaÃ§Ã£o Ãºtil.",
        helpful_single: "pessoa achou esta avaliaÃ§Ã£o Ãºtil.",
        up_voted: 'VocÃª votou positivamente nesta avaliaÃ§Ã£o como Ãºtil.',
        down_voted: 'VocÃª votou negativamente nesta avaliaÃ§Ã£o.',
        was_helpful: 'Esta avaliaÃ§Ã£o foi Ãºtil?',
        yes: 'Sim',
        no: 'NÃ£o',
        minute_ago: 'minuto atrÃ¡s',
        minutes_ago: 'minutos atrÃ¡s',
        hour_ago: 'hora atrÃ¡s',
        hours_ago: 'horas atrÃ¡s',
        day_ago: 'dia atrÃ¡s',
        days_ago: 'dias atrÃ¡s',
        week_ago: 'semana atrÃ¡s',
        weeks_ago: 'semanas atrÃ¡s',
        month_ago: 'mÃªs atrÃ¡s',
        months_ago: 'meses atrÃ¡s',
        year_ago: 'ano atrÃ¡s',
        years_ago: 'anos atrÃ¡s',
        source: 'Fonte',
        review_image: 'Imagem da avaliaÃ§Ã£o',
      };
      break;
    case "sk":
      translations = {
        rating: "priemer",
        reviews: "recenzie",
        share: "ZdieÄ¾aÅ¥",
        close: "ZavrieÅ¥",
        read_more: "ÄÃ­tajte viac recenziÃ­ na REVIEWS.io",
        share_facebook: "ZdieÄ¾aÅ¥ na Facebooku",
        share_twitter: "ZdieÄ¾aÅ¥ na Twitteri",
        share_email: "ZdieÄ¾aÅ¥ cez e-mail",
        stars: "Hviezdy",
        excellent: "VÃ½bornÃ©",
        good: "DobrÃ©",
        normal: "NormÃ¡lne",
        anonymous: "AnonymnÃ½",
        verified_customer: "OverenÃ½ zÃ¡kaznÃ­k",
        amazon_customer: "ZÃ¡kaznÃ­k Amazon",
        verified_subscriber: "OverenÃ½ odberateÄ¾",
        based_on: "na zÃ¡klade",
        would_recommend: "OdporÃºÄam tento produkt",
        helpful_multiple: "Ä¾udÃ­ povaÅ¾ovalo tÃºto recenziu za uÅ¾itoÄnÃº.",
        helpful_single: "osoba povaÅ¾ovala tÃºto recenziu za uÅ¾itoÄnÃº.",
        up_voted: 'TÃºto recenziu ste oznaÄili ako uÅ¾itoÄnÃº.',
        down_voted: 'TÃºto recenziu ste oznaÄili ako neuÅ¾itoÄnÃº.',
        was_helpful: 'Bola tÃ¡to recenzia uÅ¾itoÄnÃ¡?',
        yes: 'Ãno',
        no: 'Nie',
        minute_ago: 'minÃºta pred',
        minutes_ago: 'minÃºty pred',
        hour_ago: 'hodina pred',
        hours_ago: 'hodiny pred',
        day_ago: 'deÅ pred',
        days_ago: 'dni pred',
        week_ago: 'tÃ½Å¾deÅ pred',
        weeks_ago: 'tÃ½Å¾dne pred',
        month_ago: 'mesiac pred',
        months_ago: 'mesiace pred',
        year_ago: 'rok pred',
        years_ago: 'roky pred',
        source: 'Zdroj',
        review_image: 'ObrÃ¡zok recenzie',
      };
      break;
    case 'hu':
      translations = {
        rating: "Ã¡tlagos",
        reviews: "Ã©rtÃ©kelÃ©s",
        share: "MegosztÃ¡s",
        close: "BezÃ¡rÃ¡s",
        read_more: "TovÃ¡bbi Ã©rtÃ©kelÃ©sek a REVIEWS.io oldalon",
        share_facebook: "MegosztÃ¡s Facebookon",
        share_twitter: "MegosztÃ¡s Twitteren",
        share_email: "MegosztÃ¡s e-mailben",
        stars: "Csillagok",
        excellent: "KivÃ¡lÃ³",
        good: "JÃ³",
        normal: "NormÃ¡l",
        anonymous: "NÃ©vtelen",
        verified_customer: "EllenÅrzÃ¶tt vÃ¡sÃ¡rlÃ³",
        amazon_customer: "Amazon vÃ¡sÃ¡rlÃ³",
        verified_subscriber: "EllenÅrzÃ¶tt elÅfizetÅ",
        based_on: "alapjÃ¡n",
        would_recommend: "AjÃ¡nlom ezt a termÃ©ket",
        helpful_multiple: "embert talÃ¡lta hasznosnak ezt az Ã©rtÃ©kelÃ©st.",
        helpful_single: "szemÃ©ly talÃ¡lta hasznosnak ezt az Ã©rtÃ©kelÃ©st.",
        up_voted: 'Te lÃ¡jkoltad ezt az Ã©rtÃ©kelÃ©st, mint hasznos.',
        down_voted: 'Te dislike-oltad ezt az Ã©rtÃ©kelÃ©st.',
        was_helpful: 'Hasznos volt ez az Ã©rtÃ©kelÃ©s?',
        yes: 'Igen',
        no: 'Nem',
        minute_ago: 'perce',
        minutes_ago: 'perce',
        hour_ago: 'Ã³rÃ¡ja',
        hours_ago: 'Ã³rÃ¡ja',
        day_ago: 'napja',
        days_ago: 'napja',
        week_ago: 'hete',
        weeks_ago: 'hete',
        month_ago: 'hÃ³napja',
        months_ago: 'hÃ³napja',
        year_ago: 'Ã©ve',
        years_ago: 'Ã©ve',
        source: 'ForrÃ¡s',
        review_image: 'ÃrtÃ©kelÃ©s kÃ©pe',
      };
      break;
    case 'lt':
      translations = {
        rating: "vidutinis",
        reviews: "atsiliepimai",
        share: "Dalintis",
        close: "UÅ¾daryti",
        read_more: "Skaityti daugiau atsiliepimÅ³ REVIEWS.io",
        share_facebook: "Dalintis Facebook",
        share_twitter: "Dalintis Twitter",
        share_email: "Dalintis el. paÅ¡tu",
        stars: "Å¾vaigÅ¾dutÄs",
        excellent: "Puikus",
        good: "Geras",
        normal: "Normalus",
        anonymous: "AnonimiÅ¡kas",
        verified_customer: "Patikrintas klientas",
        amazon_customer: "Amazon klientas",
        verified_subscriber: "Patikrintas prenumeratorius",
        based_on: "pagal",
        would_recommend: "AÅ¡ rekomenduoju Å¡Ä¯ produktÄ",
        helpful_multiple: "Å¾monÄs rado Å¡Ä¯ atsiliepimÄ naudingÄ.",
        helpful_single: "Å¾mogus rado Å¡Ä¯ atsiliepimÄ naudingÄ.",
        up_voted: 'JÅ«s balsavote uÅ¾ Å¡Ä¯ atsiliepimÄ kaip naudingÄ.',
        down_voted: 'JÅ«s balsavote prieÅ¡ Å¡Ä¯ atsiliepimÄ.',
        was_helpful: 'Ar Å¡is atsiliepimas buvo naudingas?',
        yes: 'Taip',
        no: 'Ne',
        minute_ago: 'prieÅ¡ minutÄ',
        minutes_ago: 'prieÅ¡ minutes',
        hour_ago: 'prieÅ¡ valandÄ',
        hours_ago: 'prieÅ¡ valandas',
        day_ago: 'prieÅ¡ dienÄ',
        days_ago: 'prieÅ¡ dienas',
        week_ago: 'prieÅ¡ savaitÄ',
        weeks_ago: 'prieÅ¡ savaites',
        month_ago: 'prieÅ¡ mÄnesÄ¯',
        months_ago: 'prieÅ¡ mÄnesius',
        year_ago: 'prieÅ¡ metus',
        years_ago: 'prieÅ¡ metus',
        source: 'Å¡altinis',
        review_image: 'Atsiliepimo nuotrauka',
      };
      break;
    default:
      translations = {
        rating: "average",
        reviews: "reviews",
        share: "Share",
        close: "Close",
        read_more: "Read more reviews on REVIEWS.io",
        share_facebook: "Share on Facebook",
        share_twitter: "Share on Twitter",
        share_email: "Share via Email",
        stars: "Stars",
        excellent: "Excellent",
        good: "Good",
        normal: "Normal",
        anonymous: "Anonymous",
        verified_customer: "Verified Customer",
        amazon_customer: "Amazon Customer",
        verified_subscriber: "Verified Subscriber",
        based_on: "based on",
        would_recommend: "I recommend this product",
        helpful_multiple: "people found this review helpful.",
        helpful_single: "person found this review helpful.",
        up_voted: 'You&apos;ve upvoted this review as helpful.',
        down_voted: 'You&apos;ve downvoted this review.',
        was_helpful:'Was this review helpful?',
        yes: 'Yes',
        no: 'No',
        minute_ago:'minute ago',
        minutes_ago:'minutes ago',
        hour_ago:'hour ago',
        hours_ago:'hours ago',
        day_ago:'day ago',
        days_ago:'days ago',
        week_ago:'week ago',
        weeks_ago:'weeks ago',
        month_ago:'month ago',
        months_ago:'months ago',
        year_ago: 'year ago',
        years_ago:'years ago',
        source: 'Source',
        review_image: 'Review Image',
        country_list: [
          "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
          "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
          "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
          "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
          "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
          "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
          "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba",
          "Cyprus", "Czechia", "Democratic Republic of the Congo",
          "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
          "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)",
          "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
          "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
          "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
          "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
          "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
          "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
          "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
          "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
          "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
          "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
          "Nigeria", "North Korea", "Macedonia", "Norway", "Oman",
          "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
          "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
          "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent",
          "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
          "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
          "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
          "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
          "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
          "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
          "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
          "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        ],
      };

      break;
  }
  return translations;
}

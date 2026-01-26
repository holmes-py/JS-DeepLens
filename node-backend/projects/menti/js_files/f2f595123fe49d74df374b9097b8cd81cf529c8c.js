(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if(typeof Object.setPrototypeOf=="function")ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function w(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a){return qa(a,a)}
function qa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||sa});
function ta(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.S=0;this.M=this.j=null}
function ua(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ta.prototype.G=function(a){this.i=a};
function va(a,b){a.j={exception:b,xd:!0};a.h=a.S||a.o}
ta.prototype.return=function(a){this.j={return:a};this.h=this.o};
ta.prototype.yield=function(a,b){this.h=b;return{value:a}};
ta.prototype.A=function(a){this.h=a};
function wa(a,b,c){a.S=b;c!=void 0&&(a.o=c)}
function xa(a,b){a.h=b;a.S=0}
function ya(a){a.S=0;var b=a.j.exception;a.j=null;return b}
function za(a){var b=a.M.splice(0)[0];(b=a.j=a.j||b)?b.xd?a.h=a.S||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new ta;this.i=a}
function Ba(a,b){ua(a.h);var c=a.h.u;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,va(a.h,g),Da(a)}a.h.u=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.xd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ua(a.h);a.h.u?b=Ca(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Da(a));return b};
this.throw=function(b){ua(a.h);a.h.u?b=Ca(a,a.h.u["throw"],b,a.h.G):(va(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Fa(new Ea(new Aa(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ia});
u("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.o(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.S(2,g)};
b.prototype.o=function(g){this.S(1,g)};
b.prototype.S=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.ic(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.ic(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ic=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).ic(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).ic(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||na});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ra(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ra(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
function Ha(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ha(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ia=Ia||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a){var b=F("CLOSURE_FLAGS");a=b&&b[a];return a!=null?a:!1}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Pa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(Math.random()*1E9>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ab(a,b){return(a=(new RegExp("[^#]*[?&]"+b+"=([^&#]*)")).exec(a))?a[1]:null}
function bb(a){var b=C.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function cb(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function db(a){var b=a.url;a=a.Yh;this.h=b;this.j=a;this.i=(new Date).getTime()-17040672E5}
function eb(a){a=a.j;if(!a)return"";var b=cb("uap",a.platform)+cb("uapv",a.platformVersion)+cb("uafv",a.uaFullVersion)+cb("uaa",a.architecture)+cb("uam",a.model)+cb("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function fb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,fb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(fb,Error);fb.prototype.name="CustomError";function gb(a){return a}
;var hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ib=globalThis.trustedTypes,jb;function kb(){var a=null;if(!ib)return a;try{var b=function(c){return c};
a=ib.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function lb(){jb===void 0&&(jb=kb());return jb}
;function mb(a){this.h=a}
mb.prototype.toString=function(){return this.h+""};
function nb(a){var b=lb();a=b?b.createScriptURL(a):a;return new mb(a)}
function ob(a){if(a instanceof mb)return a.h;throw Error("");}
;var pb=oa([""]),qb=qa(["\x00"],["\\0"]),rb=qa(["\n"],["\\n"]),sb=qa(["\x00"],["\\u0000"]);function tb(a){return a.toString().indexOf("`")===-1}
tb(function(a){return a(pb)})||tb(function(a){return a(qb)})||tb(function(a){return a(rb)})||tb(function(a){return a(sb)});function ub(a){this.h=a}
ub.prototype.toString=function(){return this.h};
var vb=new ub("about:invalid#zClosurez");function wb(a){this.Ee=a}
function xb(a){return new wb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var yb=[xb("data"),xb("http"),xb("https"),xb("mailto"),xb("ftp"),new wb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],zb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Ab(a){if(a instanceof ub)if(a instanceof ub)a=a.h;else throw Error("");else a=zb.test(a)?a:void 0;return a}
;function Cb(a,b){b=Ab(b);b!==void 0&&(a.href=b)}
;function Db(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};function Fb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h+""};
function Hb(a){var b=lb();a=b?b.createScript(a):a;return new Gb(a)}
function Ib(a){if(a instanceof Gb)return a.h;throw Error("");}
;function Jb(a){var b=Fb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Kb(a,b){a.src=ob(b);Jb(a)}
;function Lb(){this.h=Mb[0].toLowerCase()}
Lb.prototype.toString=function(){return this.h};function Nb(a){var b="true".toString(),c=[new Lb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Lb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Ob="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Pb(a,b){if(b instanceof mb)a.href=ob(b).toString(),a.rel="stylesheet";else{if(Ob.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Ab(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Qb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Sb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Tb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ub=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Vb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Sb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Wb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Xb(a,b){b=Qb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Yb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Zb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function $b(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bc[c])c=bc[c];else{c=String(c);if(!bc[c]){var f=/function\s+([^\(]+)/m.exec(c);bc[c]=f?f[1]:"[Anonymous]"}c=bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function ac(a,b){b||(b={});b[cc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[cc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=ac(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[cc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=ac(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function cc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var bc={};function dc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(a){return a?decodeURI(a):a}
function hc(a){return fc(a.match(ec)[3]||null)}
function ic(a){return fc(a.match(ec)[5]||null)}
function jc(a){var b=a.match(ec);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function kc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function lc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function mc(a){var b=[],c;for(c in a)lc(c,a[c],b);return b.join("&")}
function nc(a,b){b=mc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function oc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var pc=/#|$/,qc=/[?&]($|#)/;function rc(a,b){for(var c=a.search(pc),d=0,e,f=[];(e=oc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(qc,"$1")}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?uc.apply(null,d):tc(d)}}
;function H(){this.ea=this.ea;this.S=this.S}
H.prototype.ea=!1;H.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function vc(a,b){a.addOnDisposeCallback(Wa(tc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.S||(this.S=[]),b&&(a=a.bind(b)),this.S.push(a))};
H.prototype.ba=function(){if(this.S)for(;this.S.length;)this.S.shift()()};function wc(){var a=xc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new yc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new yc(f))}))})}
function yc(a){H.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Zc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void zc(b)})}
w(yc,H);yc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.vb&&{c:a.vb},a.cd&&{s:a.cd},a.dd!==void 0&&{p:a.dd}))};
yc.prototype.o=function(a){this.vm.e(a)};
function zc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Ac(a){var b=b===void 0?49:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)<=b&&c.push(Dc(d,1))});
return c}
function Ec(a){var b=b===void 0?49:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)>b&&c.push(Dc(d,1))});
return c}
;var Fc;function Gc(){H.apply(this,arguments);this.j=1;this[Fc]=this.dispose}
w(Gc,H);Gc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Gc.prototype.dispose=function(){--this.j||H.prototype.dispose.call(this)};
Fc=Symbol.dispose;function Hc(a){return{fieldType:2,fieldName:a}}
function Ic(a){return{fieldType:3,fieldName:a}}
;function Jc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Ic("mk"))}
Jc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Kc(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Ic("mn"),Hc("ac"),Hc("sc"),Ic("rk"),Ic("mk"))}
Kc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Lc(a){this.h=a;a.Mb("/client_streamz/bg/ec",Ic("en"),Ic("mk"))}
Lc.prototype.jb=function(a,b){this.h.Jb("/client_streamz/bg/ec",a,b)};
function Mc(a){this.h=a;a.Hc("/client_streamz/bg/el",Ic("en"),Ic("mk"))}
Mc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Nc(a){this.h=a;a.Mb("/client_streamz/bg/cec",Hc("ec"),Ic("mk"))}
Nc.prototype.jb=function(a,b){this.h.Jb("/client_streamz/bg/cec",a,b)};
function Oc(a){this.h=a;a.Mb("/client_streamz/bg/po/csc",Hc("cs"),Ic("mk"))}
Oc.prototype.jb=function(a,b){this.h.Jb("/client_streamz/bg/po/csc",a,b)};
function Pc(a){this.h=a;a.Mb("/client_streamz/bg/po/ctav",Ic("av"),Ic("mk"))}
Pc.prototype.jb=function(a,b){this.h.Jb("/client_streamz/bg/po/ctav",a,b)};
function Qc(a){this.h=a;a.Mb("/client_streamz/bg/po/cwsc",Ic("su"),Ic("mk"))}
Qc.prototype.jb=function(a,b){this.h.Jb("/client_streamz/bg/po/cwsc",a,b)};function Rc(a){D.setTimeout(function(){throw a;},0)}
;var Sc=La(610401301),Tc=La(1981196515);function Uc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Vc,Wc=D.navigator;Vc=Wc?Wc.userAgentData||null:null;function Xc(a){if(!Sc||!Vc)return!1;for(var b=0;b<Vc.brands.length;b++){var c=Vc.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function J(a){return Uc().indexOf(a)!=-1}
;function Yc(){return Sc?!!Vc&&Vc.brands.length>0:!1}
function Zc(){return Yc()?!1:J("Opera")}
function $c(){return J("Firefox")||J("FxiOS")}
function ad(){return Yc()?Xc("Chromium"):(J("Chrome")||J("CriOS"))&&!(Yc()?0:J("Edge"))||J("Silk")}
;function bd(){return Sc?!!Vc&&!!Vc.platform:!1}
function cd(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function dd(a){dd[" "](a);return a}
dd[" "]=function(){};var ed=Zc(),fd=Yc()?!1:J("Trident")||J("MSIE"),gd=J("Edge"),hd=J("Gecko")&&!(Uc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),id=Uc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");id&&J("Mobile");bd()||J("Macintosh");bd()||J("Windows");(bd()?Vc.platform==="Linux":J("Linux"))||bd()||J("CrOS");var jd=bd()?Vc.platform==="Android":J("Android");cd();J("iPad");J("iPod");cd()||J("iPad")||J("iPod");Uc().toLowerCase().indexOf("kaios");$c();var kd=cd()||J("iPod"),ld=J("iPad");!J("Android")||ad()||$c()||Zc()||J("Silk");ad();var md=J("Safari")&&!(ad()||(Yc()?0:J("Coast"))||Zc()||(Yc()?0:J("Edge"))||(Yc()?Xc("Microsoft Edge"):J("Edg/"))||(Yc()?Xc("Opera"):J("OPR"))||$c()||J("Silk")||J("Android"))&&!(cd()||J("iPad")||J("iPod"));var nd={},od=null;function pd(a,b){Na(a);b===void 0&&(b=0);qd();b=nd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function rd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;sd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function sd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=od[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
qd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function qd(){if(!od){od={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));nd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];od[f]===void 0&&(od[f]=e)}}}}
;var td=typeof Uint8Array!=="undefined",ud=!fd&&typeof btoa==="function",vd=/[-_.]/g,wd={"-":"+",_:"/",".":"="};function xd(a){return wd[a]||""}
var yd={};function zd(a,b){Ad(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
zd.prototype.sizeBytes=function(){Ad(yd);var a=this.h;if(!(a==null||td&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(ud){a=vd.test(a)?a.replace(vd,xd):a;a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=rd(a);else Ma(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Bd;function Ad(a){if(a!==yd)throw Error("illegal external caller");}
;var Cd=void 0;function Dd(a){a=Error(a);Zb(a,"warning");return a}
;var Ed=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Fd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Gd=Fd("jas",void 0,!0),Hd=Fd(void 0,"1oa"),Id=Fd(void 0,"0actk"),Jd=Fd("m_m","Kh",!0),Kd=Fd(void 0,"vps");Math.max.apply(Math,A(Object.values({lh:1,kh:2,jh:4,ph:8,oh:16,nh:32,Mf:64,hh:128,Sf:256,qh:512,Tf:1024,Nf:2048,ih:4096,mh:8192})));var Ld={De:{value:0,configurable:!0,writable:!0,enumerable:!1}},Md=Object.defineProperties,K=Ed?Gd:"De",Nd,Od=[];Pd(Od,55);Nd=Object.freeze(Od);function Qd(a,b){Ed||K in a||Md(a,Ld);a[K]|=b}
function Pd(a,b){Ed||K in a||Md(a,Ld);a[K]=b}
;var Rd={};function Sd(a,b){if(b===void 0){if(b=a.h!==Td)b=!!(2&(a.F[K]|0));return b}return!!(2&b)&&a.h!==Td}
var Td={},Ud=Object.freeze({}),Vd={};function Wd(){return typeof BigInt==="function"}
;function Xd(a){a.Fh=!0;return a}
;var Yd=Xd(function(a){return typeof a==="number"}),Zd=Xd(function(a){return typeof a==="string"}),$d=Xd(function(a){return typeof a==="boolean"});
function ae(){var a=be;return Xd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var ce=Xd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var de=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function ee(a){var b=a;if(Zd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Yd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return de?BigInt(a):a=$d(a)?a?"1":"0":Zd(a)?a.trim()||"0":String(a)}
var ke=Xd(function(a){return de?a>=fe&&a<=ge:a[0]==="-"?he(a,ie):he(a,je)}),ie=Number.MIN_SAFE_INTEGER.toString(),fe=de?BigInt(Number.MIN_SAFE_INTEGER):void 0,je=Number.MAX_SAFE_INTEGER.toString(),ge=de?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function he(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var le=0,me=0;function ne(a){var b=a>>>0;le=b;me=(a-b)/4294967296>>>0}
function oe(a){if(a<0){ne(0-a);var b=y(pe(le,me));a=b.next().value;b=b.next().value;le=a>>>0;me=b>>>0}else ne(a)}
function qe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Wd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+re(c)+re(a));return c}
function re(a){a=String(a);return"0000000".slice(a.length)+a}
function se(){var a=le,b=me;b&2147483648?Wd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(pe(a,b)),a=b.next().value,b=b.next().value,a="-"+qe(a,b)):a=qe(a,b);return a}
function pe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function te(a){return Array.prototype.slice.call(a)}
;var ue=typeof BigInt==="function"?BigInt.asIntN:void 0,ve=Number.isSafeInteger,we=Number.isFinite,xe=Math.trunc;function ye(a){return a.displayName||a.name||"unknown type name"}
function ze(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var Ae=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Be(a){switch(typeof a){case "bigint":return!0;case "number":return we(a);case "string":return Ae.test(a);default:return!1}}
function Ce(a){if(typeof a!=="number")throw Dd("int32");if(!we(a))throw Dd("int32");return a|0}
function De(a){return a==null?a:Ce(a)}
function Ee(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return we(a)?a|0:void 0}
function Fe(a){var b=0;b=b===void 0?0:b;if(!Be(a))throw Dd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return Ge(a);case "bigint":return String(ue(64,a));default:return He(a)}case 1024:switch(c){case "string":return Ie(a);case "bigint":return ee(ue(64,a));default:return Je(a)}case 0:switch(c){case "string":return Ge(a);case "bigint":return ee(ue(64,a));default:return Ke(a)}default:return Db(b,"Unknown format requested type for int64")}}
function Le(a){return a==null?a:Fe(a)}
function Me(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Ne(a){a.indexOf(".");if(Me(a))return a;if(a.length<16)oe(Number(a));else if(Wd())a=BigInt(a),le=Number(a&BigInt(4294967295))>>>0,me=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");me=le=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),me*=1E6,le=le*1E6+d,le>=4294967296&&(me+=Math.trunc(le/4294967296),me>>>=0,le>>>=0);b&&(b=y(pe(le,me)),a=b.next().value,b=b.next().value,le=a,me=b)}return se()}
function Ke(a){Be(a);a=xe(a);if(!ve(a)){oe(a);var b=le,c=me;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:qe(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function He(a){Be(a);a=xe(a);if(ve(a))a=String(a);else{var b=String(a);Me(b)?a=b:(oe(a),a=se())}return a}
function Ge(a){Be(a);var b=xe(Number(a));if(ve(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ne(a)}
function Ie(a){var b=xe(Number(a));if(ve(b))return ee(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Wd()?ee(ue(64,BigInt(a))):ee(Ne(a))}
function Je(a){return ve(a)?ee(Ke(a)):ee(He(a))}
function Oe(a){if(typeof a!=="string")throw Error();return a}
function Pe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Qe(a){return a==null||typeof a==="string"?a:void 0}
function Re(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ye(b)+" but got "+(a&&ye(a.constructor)));}
function Se(a,b,c){if(a!=null&&typeof a==="object"&&a[Jd]===Rd)return a;if(Array.isArray(a)){var d=a[K]|0;c=d|c&32|c&2;c!==d&&Pd(a,c);return new b(a)}}
;var Te={};function Ue(a){return a}
;function Ve(a,b,c,d,e){d=d?!!(b&32):void 0;var f=[],g=a.length,h=4294967295,k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var n=g&&a[g-1];n!=null&&typeof n==="object"&&n.constructor===Object?(g--,h=g):n=void 0;if(l&&!(b&128)&&!e){k=!0;var p;h=((p=We)!=null?p:Ue)(h-m,m,a,n)+m}}p=void 0;for(var t=0;t<g;t++){var v=a[t];if(v!=null&&(v=c(v,d))!=null)if(l&&t>=h){var x=t-m,z=void 0;((z=p)!=null?z:p={})[x]=v}else f[t]=v}if(n)for(var G in n)a=n[G],a!=null&&(a=c(a,d))!=null&&(g=+G,t=void 0,l&&!Number.isNaN(g)&&
(t=g+m)<h?f[t]=a:(g=void 0,((g=p)!=null?g:p={})[G]=a));p&&(k?f.push(p):f[h]=p);e&&Pd(f,b&16761025|34);return f}
function Xe(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return ke(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[K]|0;return a.length===0&&b&1?void 0:Ve(a,b,Xe,!1,!1)}if(a[Jd]===Rd)return Ye(a);if(a instanceof zd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(ud){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=pd(b);a=a.h=b}return a}return}return a}
var We;function Ze(a,b){if(b){We=b==null||b===Ue||b[Kd]!==Te?Ue:b;try{return Ye(a)}finally{We=void 0}}return Ye(a)}
function Ye(a){a=a.F;return Ve(a,a[K]|0,Xe,void 0,!1)}
;function L(a,b,c){a:{if(a==null){var d=32;c?(a=[c],d|=128):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=a[K]|0;4096&d&&!(2&d)&&$e();if(d&256)throw Error("farr");if(d&64){d&4096||Pd(a,d|4096);break a}if(c&&(d|=128,c!==a[0]))throw Error("mid");b:{c=a;d|=64;var e=c.length;if(e){var f=e-1,g=c[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){b=d&128?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-16760833|
(f&1023)<<14;break b}}if(b){h=Math.max(b,e-(d&128?0:-1));if(h>1024)throw Error("spvt");d=d&-16760833|(h&1023)<<14}}}Pd(a,d|4160)}return a}
function $e(){if(Id!=null){var a;var b=(a=Cd)!=null?a:Cd={};a=b[Id]||0;a>=5||(b[Id]=a+1,b=Error(),Zb(b,"incident"),Rc(b))}}
;function af(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[K]|0;if(a.length===0&&c&1)return;if(c&2)return a;var d;if(d=b)d=(!!(32&c)||!(1&c))&&!(1&c&&!(16&c));return d?(Qd(a,34),c&4&&Object.freeze(a),a):Ve(a,c,af,b!==void 0,!0)}if(a[Jd]===Rd)return b=a.F,c=b[K]|0,Sd(a,c)?a:Ve(b,c,af,!0,!0);if(a instanceof zd)return a}
function bf(a){var b=a.F,c=b[K]|0;if(!Sd(a,c))return a;a=new a.constructor(Ve(b,c,af,!0,!0));b=a.F;b[K]&=-3;return a}
function cf(a){if(a.h!==Td)return!1;var b=a.F;b=Ve(b,b[K]|0,af,!0,!0);b[K]&=-3;a.F=b;a.h=void 0;return!0}
function df(a){if(!cf(a)&&Sd(a,a.F[K]|0))throw Error();}
;var ef=ee(0);function ff(a,b,c){Object.isExtensible(a);return gf(a.F,b,c)}
function gf(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function hf(a,b,c,d){df(a);var e=a.F;jf(e,e[K]|0,b,c,d);return a}
function jf(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[K]|0)>>14&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function kf(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function lf(a,b,c){df(a);var d=a.F,e=d[K]|0;if(b==null)return jf(d,e,3),a;if(!Array.isArray(b))throw Dd();var f=b[K]|0,g=f,h=kf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=te(b),g=0,f=mf(f,e),f=nf(f,e,!0),k=!1);f|=21;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=te(b),g=0,f=mf(f,e),f=nf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=te(b),f=mf(f,e),f=nf(f,e,!0)),Pd(b,f));jf(d,e,3,b);return a}
function of(a,b,c,d){df(a);a=a.F;var e=a[K]|0;if(d==null){var f=pf(a);if(qf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=pf(a);var g=qf(f,a,e,c);g!==b&&(g&&(e=jf(a,e,g)),f.set(c,b))}jf(a,e,b,d)}
function pf(a){if(Ed){var b;return(b=a[Hd])!=null?b:a[Hd]=new Map}if(Hd in a)return a[Hd];b=new Map;Object.defineProperty(a,Hd,{value:b});return b}
function qf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];gf(b,g)!=null&&(e!==0&&(c=jf(b,c,e)),e=g)}a.set(d,e);return e}
function rf(a,b,c,d,e){var f=!1;a=gf(a,d,e,function(g){var h=Se(g,c,b);f=h!==g&&h!=null;return h});
if(a!=null)return f&&Sd(a),a}
function sf(a,b,c,d){var e=a.F,f=e[K]|0;b=rf(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!Sd(a,f)){var g=bf(b);g!==b&&(cf(a)&&(e=a.F,f=e[K]|0),b=g,jf(e,f,c,b,d))}return b}
function Bc(a,b,c){var d=void 0===Ud?2:4;var e=a.F,f=e;e=e[K]|0;var g=!1,h=Sd(a,e);d=h?1:d;g=!!g||d===3;var k=!h;(d===2||k)&&cf(a)&&(f=a.F,e=f[K]|0);a=gf(f,c);a=Array.isArray(a)?a:Nd;var l=a[K]|0;h=!!(4&l);if(!h){var m=l;m===0&&(m=mf(m,e),m|=16);l=a;m|=1;var n=e,p=!!(2&m);p&&(n|=2);for(var t=!p,v=!0,x=0,z=0;x<l.length;x++){var G=Se(l[x],b,n);if(G instanceof b){if(!p){var I=Sd(G);t&&(t=!I);v&&(v=I)}l[z++]=G}}z<x&&(l.length=z);m|=4;m=v?m|16:m&-17;m=t?m|8:m&-9;Pd(l,m);p&&Object.freeze(l);l=m}if(k&&!(8&
l||!a.length&&(d===1||d===4&&32&l))){kf(l)&&(a=te(a),l=mf(l,e),e=jf(f,e,c,a));b=a;k=l;for(l=0;l<b.length;l++)m=b[l],n=bf(m),m!==n&&(b[l]=n);k|=8;k=b.length?k&-17:k|16;Pd(b,k);l=k}d===1||d===4&&32&l?kf(l)||(c=l,f=!!(32&l),l|=!a.length||16&l&&(!h||f)?2:256,l!==c&&Pd(a,l),Object.freeze(a)):(d===2&&kf(l)&&(a=te(a),l=mf(l,e),l=nf(l,e,g),Pd(a,l),e=jf(f,e,c,a)),kf(l)||(c=l,l=nf(l,e,g),l!==c&&Pd(a,l)));return a}
function tf(a,b,c,d,e){d!=null?Re(d,b):d=void 0;hf(a,c,d,e);d&&Sd(d);return a}
function uf(a,b,c,d){df(a);var e=a.F,f=e[K]|0;if(d==null)return jf(e,f,c),a;if(!Array.isArray(d))throw Dd();for(var g=d[K]|0,h=g,k=kf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Re(t,b);k||(t=Sd(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=te(d),h=0,g=mf(g,f),g=nf(g,f,!0));g!==h&&Pd(d,g);jf(e,f,c,d);return a}
function mf(a,b){2&a&&(a|=16);a=(2&b?a|2:a&-3)|32;return a&=-257}
function nf(a,b,c){32&b&&c||(a&=-33);return a}
function Dc(a,b,c){c=c===void 0?0:c;var d;return(d=Ee(ff(a,b)))!=null?d:c}
function vf(a,b,c){c=c===void 0?ef:c;a=ff(a,b);b=typeof a;a=a==null?a:b==="bigint"?ee(ue(64,a)):Be(a)?b==="string"?Ie(a):Je(a):void 0;return a!=null?a:c}
function wf(a,b,c,d){c=c===void 0?"":c;var e;return(e=Qe(ff(a,b,d)))!=null?e:c}
function xf(a){var b=b===void 0?0:b;a=ff(a,1);a=a==null?a:we(a)?a|0:void 0;return a!=null?a:b}
function yf(a,b,c){return hf(a,b,Pe(c))}
function zf(a,b,c){c=Pe(c);df(a);a=a.F;jf(a,a[K]|0,b,c===""?void 0:c,Vd)}
function Af(a,b,c){if(c!=null){if(!we(c))throw Dd("enum");c|=0}return hf(a,b,c)}
;function M(a,b,c){this.F=L(a,b,c)}
M.prototype.toJSON=function(){return Ze(this)};
M.prototype.serialize=function(a){return JSON.stringify(Ze(this,a))};
function Bf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Qd(b,32);return new a(b)}
M.prototype.clone=function(){var a=this,b=a.F;a=new a.constructor(Ve(b,b[K]|0,af,!0,!0));b=a.F;b[K]&=-3;return a};
M.prototype[Jd]=Rd;M.prototype.toString=function(){return this.F.toString()};function Cf(){var a=Df;this.ctor=Ef;this.isRepeated=0;this.h=sf;this.defaultValue=void 0;this.i=a.Ke!=null?Vd:void 0}
Cf.prototype.register=function(){dd(this)};function Ff(a){return function(b){return Bf(a,b)}}
;function Gf(a){this.F=L(a)}
w(Gf,M);function Hf(a,b){return lf(a,b,Ce)}
;function If(a){this.F=L(a)}
w(If,M);var Jf=[1,2,3];function Kf(a){this.F=L(a)}
w(Kf,M);var Lf=[1,2,3];function Mf(a){this.F=L(a)}
w(Mf,M);function Nf(a){this.F=L(a)}
w(Nf,M);function Of(a){this.F=L(a)}
w(Of,M);function Pf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Qf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],z=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=z^v&(x^z);var V=1518500249}else I=v^x^z,V=1859775393;else t<60?(I=v&x|z&(v|x),V=2400959708):(I=v^x^z,V=3395469782);I=((n<<5|n>>>27)&4294967295)+I+G+V+p[t]&4294967295;G=z;z=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ge:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function Rf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Sf(Pf(d),a,c||null)].join(" "):null}
function Sf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Sb(d,function(h){e.push(h)}),Tf(e.join(" "));
var f=[],g=[];Sb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Sb(d,function(h){e.push(h)});
a=Tf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Tf(a){var b=Qf();b.update(a);return b.ge().toLowerCase()}
;function Uf(a){this.h=a||{cookie:""}}
r=Uf.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.af;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=hb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Vb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=hb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Vf=new Uf(typeof document=="undefined"?null:document);function Wf(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Uf(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Xf(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new Uf(document)).get(b));return a?Rf(a,c,d):null}
function Yf(a){var b=Pf(String(D.location.href)),c=[];if(Wf()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new Uf(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Rf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Xf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Xf("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function Zf(){}
Zf.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
Zf.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function $f(a){this.F=L(a)}
w($f,M);function ag(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Xa()};
this.i=this.h()}
ag.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
ag.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
ag.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
ag.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function bg(a){this.F=L(a)}
w(bg,M);function cg(a){this.F=L(a)}
w(cg,M);function dg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=dg.prototype;r.clone=function(){return new dg(this.x,this.y)};
r.equals=function(a){return a instanceof dg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function eg(a,b){this.width=a;this.height=b}
r=eg.prototype;r.clone=function(){return new eg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function fg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gg(a){var b=hg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ig(a){for(var b in a)return!1;return!0}
function jg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function lg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ng(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ng(a[c]);return b}
var og="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<og.length;f++)c=og[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function qg(a,b){this.h=a===rg&&b||""}
qg.prototype.toString=function(){return this.h};
var rg={};new qg(rg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function sg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function tg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function ug(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function vg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function wg(a){this.F=L(a)}
w(wg,M);wg.prototype.oc=function(){return xf(this)};function xg(a){this.F=L(a)}
w(xg,M);function yg(a){this.F=L(a)}
w(yg,M);function zg(a,b){uf(a,xg,1,b)}
var Ag=Ff(yg);function Bg(a){this.F=L(a)}
w(Bg,M);var Cg=["platform","platformVersion","architecture","model","uaFullVersion"],Dg=new yg,Eg=null;function Fg(a,b){b=b===void 0?Cg:b;if(!Eg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new xg;f=yf(f,1,e.brand);return yf(f,2,e.version)});
zg(hf(Dg,2,ze(a.mobile)),c);Eg=a.getHighEntropyValues(b)}var d=new Set(b);return Eg.then(function(e){var f=Dg.clone();d.has("platform")&&yf(f,3,e.platform);d.has("platformVersion")&&yf(f,4,e.platformVersion);d.has("architecture")&&yf(f,5,e.architecture);d.has("model")&&yf(f,6,e.model);d.has("uaFullVersion")&&yf(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return Dg.serialize()})}
;function Gg(a){this.F=L(a)}
w(Gg,M);function Hg(a){return Af(a,1,1)}
;function Ig(a){this.F=L(a,4)}
w(Ig,M);function Jg(a){this.F=L(a,36)}
w(Jg,M);function Kg(a){this.F=L(a,19)}
w(Kg,M);Kg.prototype.Yb=function(a){return Af(this,2,a)};function Lg(a,b){this.Oa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Kg;Number.isInteger(a)&&this.h.Yb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Mg(this,new Gg)}
Lg.prototype.Yb=function(a){this.h.Yb(a);return this};
function Mg(a,b){tf(a.h,Gg,1,b);xf(b)||Hg(b);a.Oa||(b=Ng(a),wf(b,5)||yf(b,5,a.locale));a.j&&(b=Ng(a),sf(b,yg,9)||tf(b,yg,9,a.j))}
function Og(a,b){a.i=b}
function Pg(a){var b=b===void 0?Cg:b;var c=a.Oa?void 0:window;c?Fg(c,b).then(function(d){a.j=Ag(d!=null?d:"[]");d=Ng(a);tf(d,yg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Ng(a){a=sf(a.h,Gg,1);var b=sf(a,Bg,11);b||(b=new Bg,tf(a,Bg,11,b));return b}
function Qg(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Oa){var h=Ng(a);var k=new wg;k=Af(k,1,a.i);k=hf(k,2,ze(a.isFinal));d=hf(k,3,De(d>0?d:void 0));d=hf(d,4,De(f>0?f:void 0));d=hf(d,5,De(g>0?g:void 0));f=d.F;g=f[K]|0;d=Sd(d,g)?d:new d.constructor(Ve(f,g,af,!0,!0));tf(h,wg,10,d)}a=a.h.clone();h=Date.now().toString();a=hf(a,4,Le(h));b=b.slice();b=uf(a,Jg,3,b);e&&(a=new bg,e=hf(a,13,De(e)),a=new cg,e=tf(a,bg,2,e),a=new Ig,e=tf(a,cg,1,
e),e=Af(e,2,9),tf(b,Ig,18,e));c&&hf(b,14,Le(c));return b}
;var Rg=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Sg(a){this.h=this.i=this.j=a}
Sg.prototype.reset=function(){this.h=this.i=this.j};
Sg.prototype.getValue=function(){return this.i};function Df(a){this.F=L(a,8)}
w(Df,M);var Tg=Ff(Df);function Ef(a){this.F=L(a)}
w(Ef,M);var Ug=new Cf;function Vg(a){H.call(this);var b=this;this.componentId="";this.h=[];this.Ra="";this.pageId=null;this.eb=this.ma=-1;this.G=this.experimentIds=null;this.D=this.o=0;this.U=null;this.Z=this.ha=0;this.Kb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.xb=a.xb||function(){};
this.j=new Lg(a.logSource,a.Oa);this.network=a.network||null;this.nb=a.nb||null;this.bufferSize=1E3;this.M=a.yf||null;this.sessionIndex=a.sessionIndex||null;this.Qb=a.Qb||!1;this.logger=null;this.withCredentials=!a.qd;this.Oa=a.Oa||!1;this.Y=!this.Oa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Qa=typeof URLSearchParams!=="undefined"&&!!(new URL(Wg())).searchParams&&!!(new URL(Wg())).searchParams.set;var c=Hg(new Gg);Mg(this.j,c);this.u=new Sg(1E4);a=Xg(this,a.md);this.i=
new ag(this.u.getValue(),a);this.Fa=new ag(6E5,a);this.Qb||this.Fa.start();this.Oa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){Yg(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){Yg(b);
var d;(d=b.U)==null||d.flush()}))}
w(Vg,H);function Xg(a,b){return a.Qa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
Vg.prototype.ba=function(){Yg(this);this.i.stop();this.Fa.stop();H.prototype.ba.call(this)};
function Zg(a){a.M||(a.M=Wg());try{return(new URL(a.M)).toString()}catch(b){return(new URL(a.M,window.location.origin)).toString()}}
function $g(a,b,c){a.U&&a.U.jb(b,c)}
Vg.prototype.log=function(a){$g(this,2,1);if(this.Qa){a=a.clone();var b=this.Kb++;a=hf(a,21,Le(b));this.componentId&&yf(a,26,this.componentId);b=a;var c=ff(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(ue(64,c)):Be(c)?e==="string"?Ge(c):d?He(c):Ke(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",hf(b,1,Le(d)));d=ff(b,15);d!=null&&(typeof d==="bigint"?ke(d)?d=Number(d):(d=ue(64,d),d=ke(d)?Number(d):String(d)):d=Be(d)?typeof d==="number"?Ke(d):Ge(d):
void 0);d==null&&hf(b,15,Le((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),tf(b,$f,16,d));$g(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,$g(this,3,b));this.h.push(a);this.Qb||this.i.enabled||this.i.start()}};
Vg.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,ah(this);else{var d=Date.now();if(this.eb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.oc==="function"?Og(this.j,this.network.oc()):this.j.i=0);var e=this.h.length,f=Qg(this.j,this.h,this.o,this.D,this.nb,this.ha,this.Z),g=this.xb();if(g&&this.Ra===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=bh(this,d,g),l=function(p){c.u.reset();c.i.setInterval(c.u.getValue());if(p){var t=null;try{var v=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));t=Tg(v)}catch(x){}t&&(p=Number(vf(t,1,ee("-1"))),p>0&&(c.ma=Date.now(),c.eb=c.ma+p),t=Ug.ctor?Ug.h(t,Ug.ctor,175237375,Ug.i):Ug.h(t,175237375,null,Ug.i),t=t===null?void 0:t)&&(t=Dc(t,1,-1),t!==-1&&(c.u=new Sg(t<1?1:t),c.i.setInterval(c.u.getValue())))}a&&a();c.D=0},m=function(p,t){var v=Bc(f,Jg,3);
var x=Number(vf(f,14)),z=c.u;z.h=Math.min(3E5,z.h*2);z.i=Math.min(3E5,z.h+Math.round(.1*(Math.random()-.5)*2*z.h));c.i.setInterval(c.u.getValue());p===401&&g&&(c.Ra=g);x&&(c.o+=x);t===void 0&&(t=c.isRetryable(p));t&&(c.h=v.concat(c.h),c.Qb||c.i.enabled||c.i.start());$g(c,7,1);b&&b("net-send-failed",p);++c.D},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(p){$g(c,5,e);k.Cc["Content-Encoding"]="gzip";k.Cc["Content-Type"]="application/binary";k.body=p;k.ae=2;n()},function(){$g(c,6,e);
n()}):n()}}}};
function bh(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(Zg(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ae:1,Cc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Yg(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function ah(a){ch(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function ch(a,b){if(a.h.length!==0){var c=new URL(Zg(a));c.searchParams.delete("format");var d=a.xb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Qg(a.j,e,a.o,a.D,a.nb,a.ha,a.Z);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
Vg.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Wg(){return"https://play.google.com/log?format=json&hasfast=true"}
;function dh(){this.Ud=typeof AbortController!=="undefined"}
dh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:return f=(e=d.Ud?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,wa(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Cc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.M=[v.j];v.S=0;v.o=0;clearTimeout(f);za(v);break;case 2:m=ya(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
dh.prototype.oc=function(){return 4};function eh(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.Va="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.nb=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(eh,H);function fh(a,b){a.i=b;return a}
function gh(a,b){a.network=b;return a}
function hh(a,b){a.h=b}
function ih(a){a.j=!0;return a}
eh.prototype.qd=function(){this.u=!0;return this};
function kh(a){a.network||(a.network=new dh);var b=new Vg({logSource:a.logSource,xb:a.xb?a.xb:Yf,sessionIndex:a.sessionIndex,yf:a.Va,Oa:a.o,Qb:!1,qd:a.u,md:a.md,network:a.network});vc(a,b);if(a.i){var c=a.i,d=Ng(b.j);yf(d,7,c)}b.G=new Zf;a.componentId&&(b.componentId=a.componentId);a.nb&&(b.nb=a.nb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new $f),c=b.experimentIds,d=d.serialize(),yf(c,4,d)):b.experimentIds&&hf(b.experimentIds,4));a.j&&(b.xa=b.Y);Pg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Yb&&a.network.Yb(a.logSource);a.network.mf&&a.network.mf(b);return b}
;function lh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new eh(a,"0"),a.componentId=b,vc(this,a),c!==""&&(a.Va=c),d&&(a.o=!0),e&&fh(a,e),g&&gh(a,g),b=kh(a));this.h=b}
w(lh,H);
lh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Of;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Nf;f=yf(f,1,e.i);var g=mh(e);f=lf(f,g,Oe);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Lc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Kf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&of(v,1,Lf,Le(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);of(v,2,Lf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Mf;p=tf(t,Kf,2,p);t=l;v=[];x=nh(e);for(var z=0;z<x.length;z++){var G=x[z],I=t[z],V=new If;switch(G){case 3:of(V,1,Jf,Pe(String(I)));break;case 2:G=Number(I);Number.isFinite(G)&&of(V,2,Jf,De(G));break;case 1:of(V,3,Jf,ze(I==="true"))}v.push(V)}uf(p,If,1,v);g.push(p)}}uf(f,Mf,4,g);c.push(f);e.clear()}uf(a,Nf,1,c);b=this.h;if(a instanceof Jg)b.log(a);else try{var W=new Jg,pa=a.serialize();var Rb=yf(W,8,pa);b.log(Rb)}catch(Ya){$g(b,
4,1)}this.h.flush()}};function oh(a){this.h=a}
;function ph(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function nh(a){return a.fields.map(function(b){return b.fieldType})}
function mh(a){return a.fields.map(function(b){return b.fieldName})}
r=ph.prototype;r.Vd=function(a){var b=C.apply(1,arguments),c=this.Lc(b);c?c.push(new oh(a)):this.Id(a,b)};
r.Id=function(a){var b=this.ld(C.apply(1,arguments));this.h.set(b,[new oh(a)])};
r.Lc=function(){var a=this.ld(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.te=function(){var a=this.Lc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.ld=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function qh(a,b){ph.call(this,a,3,b)}
w(qh,ph);qh.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.te(b);d&&(c=d.h);this.Id(c+a,b)};function rh(a,b){ph.call(this,a,2,b)}
w(rh,ph);rh.prototype.record=function(a){this.Vd(a,C.apply(1,arguments))};function sh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
sh.prototype.stopPropagation=function(){this.j=!0};
sh.prototype.preventDefault=function(){this.defaultPrevented=!0};function th(a,b){sh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(th,sh);
th.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&th.Aa.preventDefault.call(this)};
th.prototype.stopPropagation=function(){th.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
th.prototype.preventDefault=function(){th.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var uh="closure_listenable_"+(Math.random()*1E6|0);var vh=0;function wh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++vh;this.Xb=this.hc=!1}
function xh(a){a.Xb=!0;a.listener=null;a.proxy=null;a.src=null;a.qc=null}
;function yh(a){this.src=a;this.listeners={};this.h=0}
yh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=zh(a,b,d,e);g>-1?(b=a[g],c||(b.hc=!1)):(b=new wh(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};
yh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=zh(e,b,c,d);return b>-1?(xh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Ah(a,b){var c=b.type;c in a.listeners&&Xb(a.listeners[c],b)&&(xh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function zh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Xb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1}
;var Bh="closure_lm_"+(Math.random()*1E6|0),Ch={},Dh=0;function Eh(a,b,c,d,e){if(d&&d.once)Fh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Eh(a,b[f],c,d,e);else c=Gh(c),a&&a[uh]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):Hh(a,b,c,!1,d,e)}
function Hh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=Ih(a);h||(a[Bh]=h=new yh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Jh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Rg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Kh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Dh++}}
function Jh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Lh;return a}
function Fh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fh(a,b[f],c,d,e);else c=Gh(c),a&&a[uh]?Mh(a,b,c,Pa(d)?!!d.capture:!!d,e):Hh(a,b,c,!0,d,e)}
function Nh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Nh(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Gh(c),a&&a[uh])?a.i.remove(String(b),c,d,e):a&&(a=Ih(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=zh(b,c,d,e)),(c=a>-1?b[a]:null)&&Oh(c))}
function Oh(a){if(typeof a!=="number"&&a&&!a.Xb){var b=a.src;if(b&&b[uh])Ah(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Kh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Dh--;(c=Ih(b))?(Ah(c,a),c.h==0&&(c.src=null,b[Bh]=null)):xh(a)}}}
function Kh(a){return a in Ch?Ch[a]:Ch[a]="on"+a}
function Lh(a,b){if(a.Xb)a=!0;else{b=new th(b,this);var c=a.listener,d=a.qc||a.src;a.hc&&Oh(a);a=c.call(d,b)}return a}
function Ih(a){a=a[Bh];return a instanceof yh?a:null}
var Ph="__closure_events_fn_"+(Math.random()*1E9>>>0);function Gh(a){if(typeof a==="function")return a;a[Ph]||(a[Ph]=function(b){return a.handleEvent(b)});
return a[Ph]}
;function Qh(){H.call(this);this.i=new yh(this);this.xa=this;this.Z=null}
$a(Qh,H);Qh.prototype[uh]=!0;r=Qh.prototype;r.addEventListener=function(a,b,c,d){Eh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Nh(this,a,b,c,d)};
function Rh(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new sh(b,a):b instanceof sh?b.target=b.target||a:(e=b,b=new sh(c,a),pg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Sh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Sh(g,c,!0,b)&&e,b.j||(e=Sh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Sh(g,c,!1,b)&&e}
r.ba=function(){Qh.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Mh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,xh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Sh(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Xb&&g.capture==c){var h=g.listener,k=g.qc||g.src;g.hc&&Ah(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Th=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Uh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Uh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Vh(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Wh(){this.i=this.h=null}
Wh.prototype.add=function(a,b){var c=Xh.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Wh.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Xh=new Uh(function(){return new Yh},function(a){return a.reset()});
function Yh(){this.next=this.scope=this.h=null}
Yh.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Yh.prototype.reset=function(){this.next=this.scope=this.h=null};var Zh,$h=!1,ai=new Wh;function bi(a,b){Zh||ci();$h||(Zh(),$h=!0);ai.add(a,b)}
function ci(){var a=Promise.resolve(void 0);Zh=function(){a.then(di)}}
function di(){for(var a;a=ai.remove();){try{a.h.call(a.scope)}catch(b){Rc(b)}Vh(Xh,a)}$h=!1}
;function ei(){}
function fi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function gi(a){this.X=0;this.ab=void 0;this.ub=this.Ta=this.parent_=null;this.pc=this.Kc=!1;if(a!=ei)try{var b=this;a.call(void 0,function(c){hi(b,2,c)},function(c){hi(b,3,c)})}catch(c){hi(this,3,c)}}
function ii(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ii.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ji=new Uh(function(){return new ii},function(a){a.reset()});
function ki(a,b,c){var d=ji.get();d.i=a;d.h=b;d.context=c;return d}
function li(a){return new gi(function(b,c){c(a)})}
gi.prototype.then=function(a,b,c){return mi(this,Th(typeof a==="function"?a:null),Th(typeof b==="function"?b:null),c)};
gi.prototype.$goog_Thenable=!0;function ni(a,b,c,d){oi(a,ki(b||ei,c||null,d))}
r=gi.prototype;r.finally=function(a){var b=this;a=Th(a);return new Promise(function(c,d){ni(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Ec=function(a,b){return mi(this,null,Th(a),b)};
r.catch=gi.prototype.Ec;r.cancel=function(a){if(this.X==0){var b=new pi(a);bi(function(){qi(this,b)},this)}};
function qi(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Ta){for(var d=0,e=null,f=null,g=c.Ta;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?qi(c,b):(f?(d=f,d.next==c.ub&&(c.ub=d),d.next=d.next.next):ri(c),si(c,e,3,b)))}a.parent_=null}else hi(a,3,b)}
function oi(a,b){a.Ta||a.X!=2&&a.X!=3||ti(a);a.ub?a.ub.next=b:a.Ta=b;a.ub=b}
function mi(a,b,c,d){var e=ki(null,null,null);e.child=new gi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof pi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;oi(a,e);return e.child}
r.wf=function(a){this.X=0;hi(this,2,a)};
r.xf=function(a){this.X=0;hi(this,3,a)};
function hi(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.wf,f=a.xf;if(d instanceof gi){ni(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){ui(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,ti(a),b!=3||c instanceof pi||vi(a,c))}}
function ui(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ti(a){a.Kc||(a.Kc=!0,bi(a.oe,a))}
function ri(a){var b=null;a.Ta&&(b=a.Ta,a.Ta=b.next,b.next=null);a.Ta||(a.ub=null);return b}
r.oe=function(){for(var a;a=ri(this);)si(this,a,this.X,this.ab);this.Kc=!1};
function si(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.pc;a=a.parent_)a.pc=!1;if(b.child)b.child.parent_=null,wi(b,c,d);else try{b.j?b.i.call(b.context):wi(b,c,d)}catch(e){xi.call(null,e)}Vh(ji,b)}
function wi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function vi(a,b){a.pc=!0;bi(function(){a.pc&&xi.call(null,b)})}
var xi=Rc;function pi(a){fb.call(this,a)}
$a(pi,fb);pi.prototype.name="cancel";function yi(a,b){Qh.call(this);this.j=a||1;this.h=b||D;this.o=Va(this.sf,this);this.u=Xa()}
$a(yi,Qh);r=yi.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.sf=function(){if(this.enabled){var a=Xa()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),Rh(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=Xa())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){yi.Aa.ba.call(this);this.stop();delete this.h};function zi(a){H.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new yi(this.flushInterval);this.h.listen("tick",this.ac,!1,this);vc(this,this.h)}
w(zi,H);r=zi.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ai(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.ac()}
r.ac=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Bi(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Mb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new qh(a,b))};
r.Hc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new rh(a,b))};
function Ci(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Jb=function(a){this.Td(a,1,C.apply(1,arguments))};
r.Td=function(a,b){var c=C.apply(2,arguments),d=Ci(this,a);d&&d instanceof qh&&(d.j(b,c),Ai(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=Ci(this,a);d&&d instanceof rh&&(d.record(b,c),Ai(this))};
function Bi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Di(){}
Di.prototype.serialize=function(a){var b=[];Ei(this,a,b);return b.join("")};
function Ei(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ei(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Fi(d,c),c.push(":"),Ei(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Hi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Fi(a,b){b.push('"',a.replace(Hi,function(c){var d=Gi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Gi[c]=d);return d}),'"')}
;function Ii(){Qh.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.M=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
$a(Ii,Qh);var Ji=/^https?$/i,Ki=["POST","PUT"],Li=[];function Mi(a,b,c,d,e,f,g){var h=new Ii;Li.push(h);b&&h.listen("complete",b);Mh(h,"ready",h.ce);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Ii.prototype;r.ce=function(){this.dispose();Xb(Li,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.M=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Th(Va(this.Bd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Ni(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Qb(Ki,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.ma&&(this.J.responseType=this.ma);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.uf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Ni(this,g)}};
r.uf=function(){typeof Ia!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Rh(this,"timeout"),this.abort(8))};
function Ni(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Oi(a);Pi(a)}
function Oi(a){a.M||(a.M=!0,Rh(a,"complete"),Rh(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Rh(this,"complete"),Rh(this,"abort"),Pi(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Pi(this,!0));Ii.Aa.ba.call(this)};
r.Bd=function(){this.ea||(this.U||this.D||this.j?Qi(this):this.Me())};
r.Me=function(){Qi(this)};
function Qi(a){if(a.h&&typeof Ia!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Bd.bind(a),0);else if(Rh(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Ri(a))Rh(a,"complete"),Rh(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Oi(a)}}finally{Pi(a)}}}
function Pi(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||Rh(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Ri(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Y).match(ec)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Ji.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Si(){}
Si.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Mi(a.url,function(d){d=d.target;if(Ri(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Cc,a.timeoutMillis,a.withCredentials)};
Si.prototype.oc=function(){return 1};function Ti(a,b){this.logger=a;this.event=b;this.startTime=Ui()}
Ti.prototype.done=function(){this.logger.Ub(this.event,Ui()-this.startTime)};
function Vi(){Gc.apply(this,arguments)}
w(Vi,Gc);function Wi(a,b){var c=Ui();b=b();a.Ub("n",Ui()-c);return b}
function Xi(){Vi.apply(this,arguments)}
w(Xi,Vi);r=Xi.prototype;r.Pc=function(){};
r.Cb=function(){};
r.Ub=function(){};
r.Ha=function(){};
r.Bc=function(){};
r.Nd=function(){};
function Yi(a){return{qf:new Jc(a),errorCount:new Nc(a),eventCount:new Lc(a),ne:new Mc(a),bi:new Kc(a),di:new Oc(a),uh:new Pc(a),ci:new Qc(a)}}
function Zi(a,b,c,d){a=ih(gh(fh(new eh(1828,"0"),a),new Si));b.length&&hh(a,Hf(new Gf,b));d!==void 0&&(a.Va=d);var e=new lh(1828,"","",!1,"",kh(a));vc(e,a);var f=new zi({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.ac()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function $i(a,b){H.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w($i,H);function aj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Ui());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Ui(),a.timer=void 0}},b)}}
function bj(a,b){Vi.call(this);this.metrics=a;this.Da=b}
w(bj,Vi);bj.prototype.Pc=function(a){this.metrics.qf.record(a,this.Da)};
bj.prototype.Cb=function(a){this.metrics.eventCount.jb(a,this.Da)};
bj.prototype.Ub=function(a,b){this.metrics.ne.record(b,a,this.Da)};
bj.prototype.Ha=function(a){this.metrics.errorCount.jb(a,this.Da)};
function cj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",nc:a.nc||[],vc:a.vc|0,Va:a.Va,wc:a.wc||function(){},
Ib:a.Ib||function(e,f){return Zi(e,f,c.wc,c.Va)}};
b=c.Ib("49",c.nc.concat(b));bj.call(this,Yi(b),c.Da);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new $i(function(){return void d.service.ac()},c.vc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(cj,bj);cj.prototype.Nd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("49",this.options.nc.concat(a));this.h=new $i(function(){return void b.service.ac()},this.options.vc);
this.metrics=Yi(this.service)};
cj.prototype.Bc=function(){aj(this.h)};
function Ui(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function dj(a){this.F=L(a)}
w(dj,M);function ej(a){this.F=L(a)}
w(ej,M);function fj(a){this.F=L(a,0,"bfkj")}
w(fj,M);var gj=function(a){return Xd(function(b){return b instanceof a&&!Sd(b)})}(fj);
fj.Ke="bfkj";function Cc(a){this.F=L(a)}
w(Cc,M);function hj(a){this.F=L(a)}
w(hj,M);var ij=Ff(hj);function jj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function kj(a,b,c){if(a.disable)return new Xi;b=b?Ac(b):[];if(c)return c.Nd(b),c.share();a={Da:a.Da,nc:a.Bh,vc:a.Mh,Va:a.Va,wc:a.wc,Ib:a.Ib};c=b;c=c===void 0?[]:c;return new cj(a,c)}
function lj(a){function b(v,x,z,G){Promise.resolve().then(function(){k.done();h.Bc();h.dispose();g.resolve({Xd:v,pf:x,Qe:z,wh:G})})}
function c(v,x,z,G){if(!d.logger.ea){var I="k";x?I="h":z&&(I="u");I!=="k"?G!==0&&(d.logger.Cb(I),d.logger.Ub(I,v)):d.i<=0?(d.logger.Cb(I),d.logger.Ub(I,v),d.i=Math.floor(Math.random()*200)):d.i--}}
H.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new hj;if("challenge"in a&&gj(a.challenge)){var e=wf(a.challenge,4,void 0,Vd);var f=wf(a.challenge,5,void 0,Vd);wf(a.challenge,7,void 0,Vd)&&(this.h=ij(wf(a.challenge,7,void 0,Vd)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,z;return B(function(G){if(G.h==1)return G.yield(d.j,2);v=G.i;x=v.pf;(z=x)==null||z();G.h=0})});
this.logger=kj(a.zd||{},this.h,a.xh);vc(this,this.logger);var g=new jj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new Ti(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=Ac(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=Ec(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.ai,c,[f,m],wf(this.h,5))).next().value;this.Zc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(lj,H);lj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Xd;return new Promise(function(e){var f=new Ti(b,"n");d(function(g){f.done();b.Pc(g.length);b.Bc();b.dispose();e(g)},[a.vb,
a.cd,a.Af,a.dd])})})};
lj.prototype.ed=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=Wi(this.logger,function(){return b.u([a.vb,a.cd,a.Af,a.dd])});
this.logger.Pc(c.length);this.logger.Bc();return c};
lj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Qe)==null||c(a)})};function mj(a){if(!a)return null;a=Qe(ff(a,4));return a===null||a===void 0?null:nb(a)}
;function nj(){this.promises={};this.h=null}
function oj(){nj.instance||(nj.instance=new nj);return nj.instance}
function pj(a,b){return qj(a,sf(b,dj,1,Vd),sf(b,ej,2,Vd),wf(b,3,void 0,Vd))}
function qj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return rj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){rj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function rj(a,b){return b?sj(b):a?tj(a):Promise.resolve()}
function sj(a){return new Promise(function(b,c){var d=tg("SCRIPT"),e=mj(a);Kb(d,e);d.onload=function(){ug(d);b()};
d.onerror=function(){ug(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function tj(a){return new Promise(function(b){var c=tg("SCRIPT");if(a){var d=Qe(ff(a,6));d=d===null||d===void 0?null:Hb(d)}else d=null;c.textContent=Ib(d);Jb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);ug(c);b()})}
;var uj=window;function vj(a){var b=wj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function xj(){var a=[];vj(function(b){a.push(b)});
return a}
var wj={Bf:"allow-forms",Cf:"allow-modals",Df:"allow-orientation-lock",Ef:"allow-pointer-lock",Ff:"allow-popups",Gf:"allow-popups-to-escape-sandbox",Hf:"allow-presentation",If:"allow-same-origin",Jf:"allow-scripts",Kf:"allow-top-navigation",Lf:"allow-top-navigation-by-user-activation"},yj=fi(function(){return xj()});
function zj(){var a=Aj(),b={};Sb(yj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Aj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Bj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Cj=(new Date).getTime();function Dj(a){Qh.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Ej(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Fj(this)}
w(Dj,Qh);function Gj(){var a=Hj;Dj.instance||(Dj.instance=new Dj(a));return Dj.instance}
Dj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Dj.instance};
Dj.prototype.ta=function(){return this.h};
function Fj(a){a.D=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Ej(a),3):c.yield(Ej(a),3);Fj(a);c.h=0})},3E4)}
function Ej(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.M=[h.j];h.S=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Rh(a,"networkstatus-online"):Rh(a,"networkstatus-offline"));c(g);za(h);break;case 2:ya(h),g=!1,h.A(3)}})})}
;function Ij(){this.data=[];this.h=-1}
Ij.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ij.prototype.get=function(a){return!!this.data[a]};
function Jj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Kj(){this.blockSize=-1}
;function Lj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.S=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
$a(Lj,Kj);Lj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Mj(a,b,c){c||(c=0);var d=a.S;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Lj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Mj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mj(this,e);f=0;break}}this.i=f;this.o+=b}};
Lj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Mj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Nj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Oj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Pj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Nj(a).match(/\S+/g)||[],b=Qb(a,b)>=0);return b}
function Qj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Pj(a,"inverted-hdpi")&&Oj(a,Array.prototype.filter.call(a.classList?a.classList:Nj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Rj(){}
Rj.prototype.next=function(){return Sj};
var Sj={done:!0,value:void 0};function Tj(a){return{value:a,done:!1}}
Rj.prototype.sb=function(){return this};function Uj(a){if(a instanceof Vj||a instanceof Wj||a instanceof Xj)return a;if(typeof a.next=="function")return new Vj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Vj(function(){return a[Symbol.iterator]()});
if(typeof a.sb=="function")return new Vj(function(){return a.sb()});
throw Error("Not an iterator or iterable.");}
function Vj(a){this.h=a}
Vj.prototype.sb=function(){return new Wj(this.h())};
Vj.prototype[Symbol.iterator]=function(){return new Xj(this.h())};
Vj.prototype.i=function(){return new Xj(this.h())};
function Wj(a){this.h=a}
w(Wj,Rj);Wj.prototype.next=function(){return this.h.next()};
Wj.prototype[Symbol.iterator]=function(){return new Xj(this.h)};
Wj.prototype.i=function(){return new Xj(this.h)};
function Xj(a){Vj.call(this,function(){return a});
this.j=a}
w(Xj,Vj);Xj.prototype.next=function(){return this.j.next()};function N(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
$a(N,H);r=N.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.dc(a)}return!1};
r.dc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Xb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.rb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],Yj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.dc(c)}}return f!=0}return!1};
function Yj(a,b,c){bi(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.dc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function Zj(a){this.h=a}
Zj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Di).serialize(b))};
Zj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Zj.prototype.remove=function(a){this.h.remove(a)};function ak(a){this.h=a}
$a(ak,Zj);function bk(a){this.data=a}
function ck(a){return a===void 0||a instanceof bk?a:new bk(a)}
ak.prototype.set=function(a,b){ak.Aa.set.call(this,a,ck(b))};
ak.prototype.i=function(a){a=ak.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ak.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function dk(a){this.h=a}
$a(dk,ak);dk.prototype.set=function(a,b,c){if(b=ck(b)){if(c){if(c<Xa()){dk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}dk.Aa.set.call(this,a,b)};
dk.prototype.i=function(a){var b=dk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())dk.prototype.remove.call(this,a);else return b}};function ek(){}
;function fk(){}
$a(fk,ek);fk.prototype[Symbol.iterator]=function(){return Uj(this.sb(!0)).i()};
fk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function gk(a){this.h=a;this.i=null}
$a(gk,fk);r=gk.prototype;r.isAvailable=function(){if(!Tc||this.i===null){var a=this.h;if(a)try{performance.now();a.setItem("__sak","1");a.removeItem("__sak");performance.now();var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){hk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){hk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){hk(this);this.h.removeItem(a)};
r.sb=function(a){hk(this);var b=0,c=this.h,d=new Rj;d.next=function(){if(b>=c.length)return Sj;var e=c.key(b++);if(a)return Tj(e);e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return Tj(e)};
return d};
r.clear=function(){hk(this);this.h.clear()};
r.key=function(a){hk(this);return this.h.key(a)};
function hk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;(Tc?a.isAvailable():(b=a.i)!=null?b:a.isAvailable())||Rc(Error("Storage mechanism: Storage unavailable"))}
;function ik(){var a=null;try{a=D.localStorage||null}catch(b){}gk.call(this,a)}
$a(ik,gk);function jk(a,b){this.i=a;this.h=b+"::"}
$a(jk,fk);jk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
jk.prototype.get=function(a){return this.i.get(this.h+a)};
jk.prototype.remove=function(a){this.i.remove(this.h+a)};
jk.prototype.sb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Rj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Tj(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},kk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var lk={tb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},mk={tb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){return[].concat.apply([],a)}};
O.nf=function(){kk?(O.qb=Uint8Array,O.Ja=Uint16Array,O.Sd=Int32Array,O.assign(O,lk)):(O.qb=Array,O.Ja=Array,O.Sd=Array,O.assign(O,mk))};
O.nf();var nk=!0;try{new Uint8Array(1)}catch(a){nk=!1}
function ok(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.qb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var pk={};pk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var qk={},rk,sk=[],tk=0;tk<256;tk++){rk=tk;for(var uk=0;uk<8;uk++)rk=rk&1?3988292384^rk>>>1:rk>>>1;sk[tk]=rk}qk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^sk[(a^b[d])&255];return a^-1};var vk={};vk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function wk(a){for(var b=a.length;--b>=0;)a[b]=0}
var xk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],yk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],zk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ak=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Bk=Array(576);wk(Bk);var Ck=Array(60);wk(Ck);var Dk=Array(512);wk(Dk);var Ek=Array(256);wk(Ek);var Fk=Array(29);wk(Fk);var Gk=Array(30);wk(Gk);function Hk(a,b,c,d,e){this.Kd=a;this.re=b;this.qe=c;this.je=d;this.Je=e;this.vd=a&&a.length}
var Ik,Jk,Kk;function Lk(a,b){this.rd=a;this.Eb=0;this.bb=b}
function Mk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Nk(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Mk(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Ok(a,b,c){Nk(a,c[b*2],c[b*2+1])}
function Pk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Qk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Pk(d[e]++,e))}
function Rk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.gb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Pa=a.Hb=0;a.ya=a.matches=0}
function Sk(a){a.ia>8?Mk(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Tk(a,b,c){Sk(a);Mk(a,c);Mk(a,~c);O.tb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Uk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Vk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Uk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Uk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Wk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Pb+d*2]<<8|a.aa[a.Pb+d*2+1];var f=a.aa[a.Oc+d];d++;if(e===0)Ok(a,f,b);else{var g=Ek[f];Ok(a,g+256+1,b);var h=xk[g];h!==0&&(f-=Fk[g],Nk(a,f,h));e--;g=e<256?Dk[e]:Dk[256+(e>>>7)];Ok(a,g,c);h=yk[g];h!==0&&(e-=Gk[g],Nk(a,e,h))}}while(d<a.ya)}Ok(a,256,b)}
function Xk(a,b){var c=b.rd,d=b.bb.Kd,e=b.bb.vd,f=b.bb.je,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Pa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)Vk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Vk(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Vk(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.rd;k=b.Eb;d=b.bb.Kd;e=b.bb.vd;f=b.bb.re;var l=b.bb.qe,m=b.bb.Je,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Pa+=x*(n+v);e&&(a.Hb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Pa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Qk(c,h,a.Ka)}
function Yk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Zk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Ok(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Ok(a,l,a.ja),g--),Ok(a,16,a.ja),Nk(a,g-3,2)):g<=10?(Ok(a,17,a.ja),Nk(a,g-3,3)):(Ok(a,18,a.ja),Nk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function $k(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var al=!1;function bl(a,b,c){a.aa[a.Pb+a.ya*2]=b>>>8&255;a.aa[a.Pb+a.ya*2+1]=b&255;a.aa[a.Oc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Ek[c]+256+1)*2]++,a.gb[(b<256?Dk[b]:Dk[256+(b>>>7)])*2]++);return a.ya===a.Tb-1}
;function cl(a,b){a.msg=vk[b];return b}
function dl(a){for(var b=a.length;--b>=0;)a[b]=0}
function el(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(O.tb(a.output,b.aa,b.Wb,c,a.Fb),a.Fb+=c,b.Wb+=c,a.gd+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Wb=0))}
function fl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Jc===2&&(a.K.Jc=$k(a));Xk(a,a.uc);Xk(a,a.kc);Yk(a,a.ra,a.uc.Eb);Yk(a,a.gb,a.kc.Eb);Xk(a,a.od);for(e=18;e>=3&&a.ja[Ak[e]*2+1]===0;e--);a.Pa+=3*(e+1)+5+5+4;var f=a.Pa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Nk(a,b?1:0,3),Tk(a,c,d);else if(a.strategy===4||g===f)Nk(a,2+(b?1:0),3),Wk(a,Bk,Ck);else{Nk(a,4+(b?1:0),3);c=a.uc.Eb+1;d=a.kc.Eb+1;e+=1;Nk(a,c-257,5);Nk(a,d-1,5);Nk(a,e-4,4);for(f=0;f<e;f++)Nk(a,
a.ja[Ak[f]*2+1],3);Zk(a,a.ra,c-1);Zk(a,a.gb,d-1);Wk(a,a.ra,a.gb)}Rk(a);b&&Sk(a);a.va=a.v;el(a.K)}
function P(a,b){a.aa[a.pending++]=b}
function gl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function hl(a,b){var c=a.yd,d=a.v,e=a.wa,f=a.Ad,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.ud&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function il(a){var b=a.la,c;do{var d=a.Qd-a.B-a.v;if(a.v>=b+(b-262)){O.tb(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.sc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.tb(c,e.input,e.mb,g,f),e.state.wrap===1?e.I=pk(e.I,c,g,f):e.state.wrap===2&&(e.I=qk(e.I,c,g,f)),e.mb+=g,e.pb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.P=a.window[d],
a.P=(a.P<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.P=(a.P<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.P],a.head[a.P]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function jl(a,b){for(var c;;){if(a.B<262){il(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=hl(a,c));if(a.T>=3)if(c=bl(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Qc&&a.B>=3){a.T--;do a.v++,a.P=(a.P<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Ma^a.window[a.v+1])&a.La;else c=bl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(fl(a,!1),a.K.R===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(fl(a,!0),a.K.R===0?3:4):a.ya&&(fl(a,!1),a.K.R===0)?1:2}
function kl(a,b){for(var c,d;;){if(a.B<262){il(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v);a.wa=a.T;a.Dd=a.Db;a.T=2;c!==0&&a.wa<a.Qc&&a.v-c<=a.la-262&&(a.T=hl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=bl(a,a.v-1-a.Dd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.P],a.head[a.P]=a.v);
while(--a.wa!==0);a.kb=0;a.T=2;a.v++;if(c&&(fl(a,!1),a.K.R===0))return 1}else if(a.kb){if((c=bl(a,0,a.window[a.v-1]))&&fl(a,!1),a.v++,a.B--,a.K.R===0)return 1}else a.kb=1,a.v++,a.B--}a.kb&&(bl(a,0,a.window[a.v-1]),a.kb=0);a.sa=a.v<2?a.v:2;return b===4?(fl(a,!0),a.K.R===0?3:4):a.ya&&(fl(a,!1),a.K.R===0)?1:2}
function ll(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){il(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=bl(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=bl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(fl(a,!1),a.K.R===0))return 1}a.sa=0;return b===4?(fl(a,!0),a.K.R===0?3:4):
a.ya&&(fl(a,!1),a.K.R===0)?1:2}
function ml(a,b){for(var c;;){if(a.B===0&&(il(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=bl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(fl(a,!1),a.K.R===0))return 1}a.sa=0;return b===4?(fl(a,!0),a.K.R===0?3:4):a.ya&&(fl(a,!1),a.K.R===0)?1:2}
function nl(a,b,c,d,e){this.we=a;this.Ie=b;this.Le=c;this.He=d;this.se=e}
var ol;ol=[new nl(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){il(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,fl(a,!1),a.K.R===0)return 1;if(a.v-a.va>=a.la-262&&(fl(a,!1),a.K.R===0))return 1}a.sa=0;if(b===4)return fl(a,!0),a.K.R===0?3:4;a.v>a.va&&fl(a,!1);return 1}),
new nl(4,4,8,4,jl),new nl(4,5,16,8,jl),new nl(4,6,32,32,jl),new nl(4,4,16,16,kl),new nl(8,16,32,32,kl),new nl(8,16,128,128,kl),new nl(8,32,128,256,kl),new nl(32,128,258,1024,kl),new nl(32,258,258,4096,kl)];
function pl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Wb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.kd=this.la=0;this.window=null;this.Qd=0;this.head=this.Ia=null;this.Ad=this.ud=this.strategy=this.level=this.Qc=this.yd=this.wa=this.B=this.Db=this.v=this.kb=this.Dd=this.T=this.va=this.Ma=this.La=this.Mc=this.sc=this.P=0;this.ra=new O.Ja(1146);this.gb=new O.Ja(122);this.ja=new O.Ja(78);dl(this.ra);dl(this.gb);dl(this.ja);this.od=this.kc=this.uc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);dl(this.da);this.zb=this.Na=0;this.depth=new O.Ja(573);dl(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Pa=this.Pb=this.ya=this.Tb=this.Oc=0}
function ql(a,b){if(!a||!a.state||b>5||b<0)return a?cl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return cl(a,a.R===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,P(c,31),P(c,139),P(c,8),c.H?(P(c,(c.H.text?1:0)+(c.H.Wa?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),P(c,c.H.time&255),P(c,c.H.time>>8&255),P(c,c.H.time>>16&255),P(c,c.H.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(P(c,c.H.extra.length&255),P(c,c.H.extra.length>>8&255)),c.H.Wa&&(a.I=qk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.kd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;gl(c,e+(31-e%31));c.v!==0&&(gl(c,a.I>>>16),gl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Wa&&c.pending>e&&(a.I=qk(a.I,c.aa,c.pending-e,e)),el(a),e=c.pending,c.pending!==c.za));)P(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Wa&&c.pending>e&&(a.I=qk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Wa&&c.pending>e&&(a.I=qk(a.I,c.aa,c.pending-e,e)),el(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Wa&&c.pending>
e&&(a.I=qk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Wa&&c.pending>e&&(a.I=qk(a.I,c.aa,c.pending-e,e)),el(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Wa&&c.pending>e&&(a.I=qk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Wa?(c.pending+2>c.za&&el(a),c.pending+2<=c.za&&(P(c,
a.I&255),P(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(el(a),a.R===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return cl(a,-5);if(c.status===666&&a.na!==0)return cl(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?ml(c,b):c.strategy===3?ll(c,b):ol[c.level].se(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.Bb=-1),0;if(d===2&&(b===1?(Nk(c,2,3),Ok(c,256,Bk),c.ia===16?(Mk(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Nk(c,0,3),Tk(c,0,0),b===3&&(dl(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),el(a),a.R===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.I&255),P(c,a.I>>8&255),P(c,a.I>>16&255),P(c,a.I>>24&255),P(c,a.pb&255),P(c,a.pb>>8&255),P(c,a.pb>>16&255),P(c,a.pb>>24&255)):(gl(c,a.I>>>16),gl(c,a.I&65535));el(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var rl={};rl=function(){this.input=null;this.pb=this.na=this.mb=0;this.output=null;this.gd=this.R=this.Fb=0;this.msg="";this.state=null;this.Jc=2;this.I=0};var sl=Object.prototype.toString;
function tl(a){if(!(this instanceof tl))return new tl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new rl;this.K.R=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=cl(b,-2);else{e===8&&(e=9);var k=new pl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.kd=e;k.la=1<<k.kd;k.cb=k.la-1;k.Mc=f+7;k.sc=1<<k.Mc;k.La=k.sc-1;k.Ma=~~((k.Mc+3-1)/3);k.window=new O.qb(k.la*2);k.head=new O.Ja(k.sc);k.Ia=new O.Ja(k.la);k.Tb=1<<f+6;k.za=k.Tb*4;k.aa=new O.qb(k.za);k.Pb=1*k.Tb;k.Oc=3*k.Tb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.pb=b.gd=0;b.Jc=2;c=b.state;c.pending=0;c.Wb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!al){d=Array(16);for(f=g=0;f<28;f++)for(Fk[f]=g,e=0;e<1<<xk[f];e++)Ek[g++]=f;Ek[g-1]=f;for(f=g=0;f<16;f++)for(Gk[f]=g,e=0;e<1<<yk[f];e++)Dk[g++]=f;for(g>>=7;f<30;f++)for(Gk[f]=g<<7,e=0;e<1<<yk[f]-7;e++)Dk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Bk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Bk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Bk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Bk[e*2+1]=8,e++,d[8]++;Qk(Bk,287,d);for(e=0;e<30;e++)Ck[e*2+1]=5,Ck[e*2]=Pk(e,5);Ik=new Hk(Bk,xk,257,286,15);Jk=new Hk(Ck,
yk,0,30,15);Kk=new Hk([],zk,0,19,7);al=!0}c.uc=new Lk(c.ra,Ik);c.kc=new Lk(c.gb,Jk);c.od=new Lk(c.ja,Kk);c.oa=0;c.ia=0;Rk(c);c=0}else c=cl(b,-2);c===0&&(b=b.state,b.Qd=2*b.la,dl(b.head),b.Qc=ol[b.level].Ie,b.ud=ol[b.level].we,b.Ad=ol[b.level].Le,b.yd=ol[b.level].He,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.kb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(vk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=ok(a.dictionary):
sl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=pk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(dl(l.head),l.v=0,l.va=0,l.sa=0),c=new O.qb(l.la),O.tb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.mb;e=a.input;a.na=g;a.mb=0;a.input=f;for(il(l);l.B>=3;){f=l.v;g=l.B-2;do l.P=(l.P<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.B=2;il(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.kb=0;a.mb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(vk[b]);this.rh=!0}}
tl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=ok(a):sl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.mb=0;c.na=c.input.length;do{c.R===0&&(c.output=new O.qb(d),c.Fb=0,c.R=d);a=ql(c,e);if(a!==1&&a!==0)return ul(this,a),this.ended=!0,!1;if(c.R===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.bd(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&nk||!b.subarray))b=
String.fromCharCode.apply(null,O.bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.bd(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.R===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=cl(c,-2):(c.state=null,a=d===113?cl(c,-3):0)):a=-2,ul(this,a),this.ended=!0,a===0;e===2&&(ul(this,0),c.R=0);return!0};
function ul(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function vl(a,b){b=b||{};b.gzip=!0;b=new tl(b);b.push(a,!0);if(b.err)throw b.msg||vk[b.err];return b.result}
;function wl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Hb(a):null:null}
function xl(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?nb(a):null:null}
;function yl(a){return nb(a===null?"null":a===void 0?"undefined":a)}
;function zl(a){this.name=a}
;var Al=new zl("rawColdConfigGroup");var Bl=new zl("rawHotConfigGroup");function Cl(a){this.F=L(a)}
w(Cl,M);function Dl(a){this.F=L(a)}
w(Dl,M);Dl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new zd(a,yd):Bd||(Bd=new zd(null,yd));else if(a.constructor!==zd)if(td&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new zd(new Uint8Array(a),yd):Bd||(Bd=new zd(null,yd));else throw Error();return hf(this,1,a)};var El=new zl("continuationCommand");var Fl=new zl("webCommandMetadata");var Gl=new zl("signalServiceEndpoint");var Hl={Rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Of:"EMBEDDED_PLAYER_MODE_DEFAULT",Qf:"EMBEDDED_PLAYER_MODE_PFP",Pf:"EMBEDDED_PLAYER_MODE_PFL"};var Il=new zl("feedbackEndpoint");var be={Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO"};var Jl=new zl("shareEndpoint"),Kl=new zl("shareEntityEndpoint"),Ll=new zl("shareEntityServiceEndpoint"),Ml=new zl("webPlayerShareEntityServiceEndpoint");var Nl=new zl("playlistEditEndpoint");var Ol=new zl("modifyChannelNotificationPreferenceEndpoint");var Pl=new zl("undoFeedbackEndpoint");var Ql=new zl("unsubscribeEndpoint");var Rl=new zl("subscribeEndpoint");function Sl(){var a=Tl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Ul(a){E("yt.ads.biscotti.lastId_",a)}
;function Vl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Wl=D.window,Xl,Yl,Zl=(Wl==null?void 0:(Xl=Wl.yt)==null?void 0:Xl.config_)||(Wl==null?void 0:(Yl=Wl.ytcfg)==null?void 0:Yl.data_)||{};E("yt.config_",Zl);function $l(){Vl(Zl,arguments)}
function R(a,b){return a in Zl?Zl[a]:b}
function am(a){var b=Zl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var bm=[];function cm(a){bm.forEach(function(b){return b(a)})}
function dm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){em(b)}}:a}
function em(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),$l("ERRORS",b));cm(a)}
function fm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),$l("ERRORS",f))}
;var gm=/^[\w.]*$/,hm={q:!0,search_query:!0};function im(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=jm(f[0]||""),h=jm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Yb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(im);l.args=[{key:m,value:f[1],query:a,method:km===n?"unchanged":n}];hm.hasOwnProperty(m)||fm(l)}}return c}
var km=String(im);function lm(a){var b=[];fg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Sb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function mm(a){a.charAt(0)==="?"&&(a=a.substring(1));return im(a,"&")}
function nm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),mm(a.length>1?a[1]:a[0])):{}}
function om(a,b){return pm(a,b||{},!0)}
function pm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=mm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return nc(a,e)+d}
function qm(a){if(!b)var b=window.location.href;var c=a.match(ec)[1]||null,d=hc(a);c&&d?(a=a.match(ec),b=b.match(ec),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?hc(b)===d&&(Number(b.match(ec)[4]||null)||null)===(Number(a.match(ec)[4]||null)||null):!0;return a}
function jm(a){return a&&a.match(gm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function rm(a){var b=sm;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Cj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ja){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?uj:g;try{var h=g.history.length}catch(Ja){h=0}e.u_his=h;var k;e.u_h=(k=uj.screen)==null?void 0:k.height;var l;e.u_w=(l=uj.screen)==null?void 0:l.width;var m;e.u_ah=(m=uj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=uj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=uj.screen)==null?void 0:p.colorDepth}catch(Ja){}var t;h=b.h;try{var v=h.screenX;var x=h.screenY}catch(Ja){}try{var z=h.outerWidth;var G=h.outerHeight}catch(Ja){}try{var I=h.innerWidth;var V=h.innerHeight}catch(Ja){}try{var W=h.screenLeft;var pa=h.screenTop}catch(Ja){}try{I=h.innerWidth,V=h.innerHeight}catch(Ja){}try{var Rb=h.screen.availWidth;var Ya=h.screen.availTop}catch(Ja){}v=[W,pa,v,x,Rb,Ya,z,G,I,V];try{var Bb=(b.h.top||window).document,
Za=Bb.compatMode=="CSS1Compat"?Bb.documentElement:Bb.body;var Oa=(new eg(Za.clientWidth,Za.clientHeight)).round()}catch(Ja){Oa=new eg(-12245933,-12245933)}Bb=Oa;Oa={};var Ka=Ka===void 0?D:Ka;Za=new Ij;"SVGElement"in Ka&&"createElementNS"in Ka.document&&Za.set(0);x=zj();x["allow-top-navigation-by-user-activation"]&&Za.set(1);x["allow-popups-to-escape-sandbox"]&&Za.set(2);Ka.crypto&&Ka.crypto.subtle&&Za.set(3);"TextDecoder"in Ka&&"TextEncoder"in Ka&&Za.set(4);Ka=Jj(Za);Oa.bc=Ka;Oa.bih=Bb.height;Oa.biw=
Bb.width;Oa.brdim=v.join();b=b.i;b=b.prerendering?3:(t={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?t:0;t=(Oa.vis=b,Oa.wgl=!!uj.WebGLRenderingContext,Oa);c=d.call(c,e,t);c.ca_type="image";a&&(c.bid=a);return c}
var sm=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return lm(rm(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");var tm="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function um(){if(!tm)return null;var a=tm();return"open"in a?a:null}
function wm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function xm(a,b){typeof a==="function"&&(a=dm(a));return window.setTimeout(a,b)}
;var ym="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(ym),["client_dev_set_cookie"]);function S(a){a=zm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Am(a,b){a=zm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function zm(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Bm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Cm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Dm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(ym)),Em=!1;function Fm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&dm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=um();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Gm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Hm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){fm(n)}}l.send(d);return l}
function Hm(a,b){b=b===void 0?{}:b;var c=qm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in Cm){var g=R(Cm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(hc(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=hc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=ic(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!hc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!hc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&hc(a)||(b["X-YouTube-Ad-Signals"]=lm(rm()));return b}
function Im(a,b){b.method="POST";b.postParams||(b.postParams={});return Jm(a,b)}
function Jm(a,b){var c=b.format||"JSON";a=Km(a,b);var d=Lm(a,b),e=!1,f=Mm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=wm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Nm(a,c,k,b.convertToSafeHtml);l&&(l=Om(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=xm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Km(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=om(a,b);return a}
function Lm(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||hc(a)&&!b.withCredentials&&hc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=mm(e),pg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):mc(e));f=e||f&&!ig(f);!Em&&f&&b.method!=="POST"&&(Em=!0,em(Error("AJAX request with postData should use POST")));return e}
function Nm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,fm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Pm(a):null)e={},Sb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Qm(g)})}d&&Rm(e);
return e}
function Rm(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=lb();c=d?d.createHTML(c):c;a[b]=new Eb(c)}else Rm(a[b])}}
function Om(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Pm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Qm(a){var b="";Sb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Gm(a){var b=window.location.search,c=hc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&qm(a)&&(c=document.location.hostname);var d=ic(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=mm(b),f={};Sb(Dm,function(g){e[g]&&(f[g]=e[g])});
return pm(a,f||{},!1)}
var Mm=Fm;var Sm=[{Rc:function(a){return"Cannot read property '"+a.key+"'"},
xc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Rc:function(a){return"Cannot call '"+a.key+"'"},
xc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Rc:function(a){return a.key+" is not defined"},
xc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Um={Ya:[],Ua:[{callback:Tm,weight:500}]};function Tm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vm(){this.Ua=[];this.Ya=[]}
var Wm;function Xm(){if(!Wm){var a=Wm=new Vm;a.Ya.length=0;a.Ua.length=0;Um.Ya&&a.Ya.push.apply(a.Ya,Um.Ya);Um.Ua&&a.Ua.push.apply(a.Ua,Um.Ua)}return Wm}
;var Ym=new N;function Zm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=$m(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=$m(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=$m(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function $m(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function an(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=bn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Zm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?bn(f+".ve",g,h,k):0;d+=f;d+=bn(e,a[e],b,c);if(d>500)break}}else c[b]=cn(a),d+=c[b].length;else c[b]=cn(a),d+=c[b].length;return d}
function bn(a,b,c,d){c+="."+a;a=cn(b);d[c]=a;return c.length+a.length}
function cn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function dn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function en(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function fn(){this.Ld=!0}
function gn(){fn.instance||(fn.instance=new fn);return fn.instance}
function hn(a,b){a={};var c=[];"USER_SESSION_ID"in Zl&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=Yf(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Zl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Zl&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var jn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function kn(a,b,c,d,e){Vf.set(""+a,b,{Vb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function ln(a){return Vf.get(""+a,void 0)}
function mn(a,b,c){Vf.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function nn(){if(S("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!Vf.isEnabled())return!1;if(Vf.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?Vf.set("TESTCOOKIESENABLED","1",{Vb:60,af:"none",secure:!0}):Vf.set("TESTCOOKIESENABLED","1",{Vb:60});if(Vf.get("TESTCOOKIESENABLED")!=="1")return!1;Vf.remove("TESTCOOKIESENABLED");return!0}
;var on=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",on);function pn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=ln(this.h);a&&this.parse(a)}
var qn;function rn(){qn||(qn=new pn);return qn}
r=pn.prototype;r.get=function(a,b){sn(a);tn(a);a=on[a]!==void 0?on[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){sn(a);tn(a);if(b==null)throw Error("ExpectedNotNull");on[a]=b.toString()};
function un(a){return!!((vn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){sn(a);tn(a);delete on[a]};
r.clear=function(){for(var a in on)delete on[a]};
function tn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function sn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function vn(a){a=on[a]!==void 0?on[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(on[d]=c.toString())}};var wn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function yn(){var a=D.navigator;return a?a.connection:void 0}
function zn(){var a=yn();if(a){var b=wn[a.type||"unknown"]||"CONN_UNKNOWN";a=wn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function An(){var a=yn();if(a!=null&&a.effectiveType)return xn.hasOwnProperty(a.effectiveType)?xn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
w(T,Error);function Bn(){try{return Cn(),!0}catch(a){return!1}}
function Cn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function Dn(){}
function En(a,b){return Hj.Sa(a,0,b)}
Dn.prototype.pa=function(a,b){return this.Sa(a,1,b)};
Dn.prototype.Lb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Fn=Am("web_emulated_idle_callback_delay",300),Gn=1E3/60-3,Hn=[8,5,4,3,2,1,0];
function In(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.M=[];this.U=this.ha=!1;for(var b=y(Hn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=Gn;this.D=0;this.xa=this.Ne.bind(this);this.Kb=this.tf.bind(this);this.Qa=this.Wd.bind(this);this.Ra=this.xe.bind(this);this.eb=this.Ue.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(In,H);r=In.prototype;r.Lb=function(a){var b=Xa();Jn(this,a);a=Xa()-b;this.u||(this.G-=a)};
r.Sa=function(a,b,c){++this.Z;if(b===10)return this.Lb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.M.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Kn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Ln(a){a.M.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Mn(a){return!a.isHidden()&&a.ma}
function Kn(a){if(a.i[8].length){if(a.U)return 4;if(Mn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Mn(a)?3:2:1;return 0}
r.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Jn(a,b){try{b()}catch(c){a.Ha(c)}}
function Nn(a){for(var b=y(Hn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.xe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;On(this,b);this.ha=!1};
r.tf=function(){On(this)};
r.Wd=function(){Pn(this)};
r.Ue=function(a){this.U=!0;var b=Kn(this);b===4&&b!==this.D&&(this.stop(),this.start());On(this,void 0,a);this.U=!1};
r.Ne=function(){this.isHidden()||Pn(this);this.h&&(this.stop(),this.start())};
function Pn(a){a.stop();a.u=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Jn(a,e)}Qn(a);a.u=!1;Nn(a)&&a.start();b=Xa()-b;a.G-=b}
function Qn(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.i[d.priority].push(d.id)}a.M.length=0}
function On(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=Xa()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Jn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Jn(a,c)}while(c&&Xa()<b)}a.u=!1;Qn(a);a.G=Gn;Nn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Kn(this),this.D){case 1:var a=this.Ra;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Fn);break;case 2:this.h=window.setTimeout(this.Kb,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.eb);break;case 4:this.h=window.setTimeout(this.Qa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Ln(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);H.prototype.ba.call(this)};var Rn=F("yt.scheduler.instance.timerIdMap_")||{},Sn=Am("kevlar_tuner_scheduler_soft_state_timer_ms",800),Tn=0,Un=0;function Vn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new In(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Wn(){Xn();var a=F("ytglobal.schedulerInstanceInstance_");a&&(tc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Xn(){Ln(Vn());for(var a in Rn)Rn.hasOwnProperty(a)&&delete Rn[Number(a)]}
function Yn(a,b,c){if(!c)return c=c===void 0,-Vn().Sa(a,b,c);var d=window.setTimeout(function(){var e=Vn().Sa(a,b);Rn[d]=e},c);
return d}
function Zn(a){Vn().Lb(a)}
function $n(a){var b=Vn();if(a<0)b.qa(-a);else{var c=Rn[a];c?(b.qa(c),delete Rn[a]):window.clearTimeout(a)}}
function ao(){bo()}
function bo(){window.clearTimeout(Tn);Vn().start()}
function co(){Vn().pause();window.clearTimeout(Tn);Tn=window.setTimeout(ao,Sn)}
function eo(){window.clearTimeout(Un);Un=window.setTimeout(function(){fo(0)},Sn)}
function fo(a){eo();var b=Vn();b.o=a;b.start()}
function go(a){eo();var b=Vn();b.o>a&&(b.o=a,b.start())}
function ho(){window.clearTimeout(Un);var a=Vn();a.o=0;a.start()}
;function io(){Dn.apply(this,arguments)}
w(io,Dn);function jo(){io.instance||(io.instance=new io);return io.instance}
io.prototype.Sa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):xm(a,c||0)};
io.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
io.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
io.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Hj=jo();
S("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Wn),E("yt.scheduler.instance.addJob",Yn),E("yt.scheduler.instance.addImmediateJob",Zn),E("yt.scheduler.instance.cancelJob",$n),E("yt.scheduler.instance.cancelAllJobs",Xn),E("yt.scheduler.instance.start",bo),E("yt.scheduler.instance.pause",co),E("yt.scheduler.instance.setPriorityThreshold",fo),E("yt.scheduler.instance.enablePriorityThreshold",go),E("yt.scheduler.instance.clearPriorityThreshold",ho),E("yt.scheduler.initialized",
!0));function ko(a){var b=new ik;this.h=(a=b.isAvailable()?a?new jk(b,a):b:null)?new dk(a):null;this.i=document.domain||window.location.hostname}
ko.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Di).serialize(b))}catch(f){return}else e=escape(b);kn(a,e,c,this.i)};
ko.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ln(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ko.prototype.remove=function(a){this.h&&this.h.remove(a);mn(a,"/",this.i)};var lo=function(){var a;return function(){a||(a=new ko("ytidb"));return a}}();
function mo(){var a;return(a=lo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var no=[],oo,po=!1;function qo(){var a={};for(oo=new ro(a.handleError===void 0?so:a.handleError,a.logEvent===void 0?to:a.logEvent);no.length>0;)switch(a=no.shift(),a.type){case "ERROR":oo.Ha(a.payload);break;case "EVENT":oo.logEvent(a.eventType,a.payload)}}
function uo(a){po||(oo?oo.Ha(a):(no.push({type:"ERROR",payload:a}),no.length>10&&no.shift()))}
function vo(a,b){po||(oo?oo.logEvent(a,b):(no.push({type:"EVENT",eventType:a,payload:b}),no.length>10&&no.shift()))}
;function wo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function xo(a){return a.substr(0,a.indexOf(":"))||a}
;var yo=kd||ld;function zo(a){var b=Uc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Ao={},Bo=(Ao.AUTH_INVALID="No user identifier specified.",Ao.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ao.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ao.MISSING_INDEX="Index not created.",Ao.MISSING_OBJECT_STORES="Object stores not created.",Ao.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ao.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ao.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ao.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ao.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ao.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ao.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ao),Co={},Do=(Co.AUTH_INVALID="ERROR",Co.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Co.EXPLICIT_ABORT="IGNORED",Co.IDB_NOT_SUPPORTED="ERROR",Co.MISSING_INDEX=
"WARNING",Co.MISSING_OBJECT_STORES="ERROR",Co.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Co.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Co.QUOTA_EXCEEDED="WARNING",Co.QUOTA_MAYBE_EXCEEDED="WARNING",Co.UNKNOWN_ABORT="WARNING",Co.INCOMPATIBLE_DB_VERSION="WARNING",Co),Eo={},Fo=(Eo.AUTH_INVALID=!1,Eo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Eo.EXPLICIT_ABORT=!1,Eo.IDB_NOT_SUPPORTED=!1,Eo.MISSING_INDEX=!1,Eo.MISSING_OBJECT_STORES=!1,Eo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Eo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Eo.QUOTA_EXCEEDED=!1,Eo.QUOTA_MAYBE_EXCEEDED=!0,Eo.UNKNOWN_ABORT=!0,Eo.INCOMPATIBLE_DB_VERSION=!1,Eo);function Go(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Bo[a]:c;d=d===void 0?Do[a]:d;e=e===void 0?Fo[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Go.prototype)}
w(Go,T);function Ho(a,b){Go.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Bo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ho.prototype)}
w(Ho,Go);function Io(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Io.prototype)}
w(Io,Error);var Jo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ko(a,b,c,d){b=xo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Go)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Go("QUOTA_EXCEEDED",a);if(md&&e.name==="UnknownError")return new Go("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Io)return new Go("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Jo.some(function(f){return e.message.includes(f)}))return new Go("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Go("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cd:e.name})];e.level="WARNING";return e}
function Lo(a,b,c){var d=mo();return new Go("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Mo(a){if(!a)throw Error();throw a;}
function No(a){return a}
function Oo(a){this.h=a}
function Po(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Po.all=function(a){return new Po(new Oo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)Po.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Po.resolve=function(a){return new Po(new Oo(function(b,c){a instanceof Po?a.then(b,c):b(a)}))};
Po.reject=function(a){return new Po(new Oo(function(b,c){c(a)}))};
Po.prototype.then=function(a,b){var c=this,d=a!=null?a:No,e=b!=null?b:Mo;return new Po(new Oo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Qo(c,c,d,f,g)}),c.i.push(function(){Ro(c,c,e,f,g)})):c.state.status==="FULFILLED"?Qo(c,c,d,f,g):c.state.status==="REJECTED"&&Ro(c,c,e,f,g)}))};
Po.prototype.catch=function(a){return this.then(void 0,a)};
function Qo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Po?So(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ro(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Po?So(a,b,f,d,e):d(f)}catch(g){e(g)}}
function So(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Po?So(a,b,f,d,e):d(f)},function(f){e(f)})}
;function To(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Uo(a){return new Promise(function(b,c){To(a,b,c)})}
function Vo(a){return new Po(new Oo(function(b,c){To(a,b,c)}))}
;function Wo(a,b){return new Po(new Oo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Xo=window,U=Xo.ytcsi&&Xo.ytcsi.now?Xo.ytcsi.now:Xo.performance&&Xo.performance.timing&&Xo.performance.now&&Xo.performance.timing.navigationStart?function(){return Xo.performance.timing.navigationStart+Xo.performance.now()}:function(){return(new Date).getTime()};function Yo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=Yo.prototype;r.add=function(a,b,c){return Zo(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Zo(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Zo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function $o(a,b,c){a=a.h.createObjectStore(b,c);return new ap(a)}
r.delete=function(a,b){return Zo(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Zo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function bp(a,b,c){return Zo(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Vo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Zo(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return B(function(z){switch(z.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(U());wa(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var I=new cp(l);I=dp(I,d);return G.call(z,I,7);case 7:return m=z.i,n=Math.round(U()),ep(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:p=ya(z);t=Math.round(U());v=Ko(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Go&&!v.h)||g>=f)ep(a,k,t,g,v,b.join(),e),h=v;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function ep(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Go&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&vo("QUOTA_EXCEEDED",{dbName:xo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Go&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),vo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),fp(a,!1,d,f,b,g.tag),uo(e)):fp(a,!0,d,f,b,g.tag)}
function fp(a,b,c,d,e,f){vo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function ap(a){this.h=a}
r=ap.prototype;r.add=function(a,b){return Vo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Vo(this.h.clear()).then(function(){})};
function gp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Vo(this.h.count(a))};
function hp(a,b){return ip(a,{query:b},function(c){return c.delete().then(function(){return jp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?hp(this,a):Vo(this.h.delete(a))};
r.get=function(a){return Vo(this.h.get(a))};
r.index=function(a){try{return new kp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Io(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function ip(a,b,c){a=a.h.openCursor(b.query,b.direction);return lp(a).then(function(d){return Wo(d,c)})}
function cp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Go;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function dp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
cp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Go("EXPLICIT_ABORT");};
cp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new ap(a),this.i.set(a,b));return b};
function kp(a){this.h=a}
r=kp.prototype;r.count=function(a){return Vo(this.h.count(a))};
r.delete=function(a){return mp(this,{query:a},function(b){return b.delete().then(function(){return jp(b)})})};
r.get=function(a){return Vo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function mp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return lp(a).then(function(d){return Wo(d,c)})}
function np(a,b){this.request=a;this.cursor=b}
function lp(a){return Vo(a).then(function(b){return b?new np(a,b):null})}
function jp(a){a.cursor.continue(void 0);return lp(a.request)}
np.prototype.delete=function(){return Vo(this.cursor.delete()).then(function(){})};
np.prototype.getValue=function(){return this.cursor.value};
np.prototype.update=function(a){return Vo(this.cursor.update(a))};function op(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Yo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Zd,k=c.blocking,l=c.rf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&vo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:xo(a)});var v=f(),x=new cp(g.transaction);
m&&m(v,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){vo("IDB_UNEXPECTEDLY_CLOSED",{dbName:xo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function pp(a,b,c){c=c===void 0?{}:c;return op(a,b,c)}
function qp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Zd)&&c.addEventListener("blocked",function(){e()}),g.yield(Uo(c),4);
if(g.h!=2)return xa(g,0);f=ya(g);throw Ko(f,a,"",-1);})}
;function rp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
rp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return pp(a,b,c)};
rp.prototype.delete=function(a){a=a===void 0?{}:a;return qp(this.name,a)};
function sp(a,b){return new Go("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function tp(a,b){if(!b)throw Lo("openWithToken",xo(a.name));return a.open()}
rp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",wa(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,G=c.options,I=[],V=y(Object.keys(G.Gb)),W=V.next();!W.done;W=V.next()){W=W.value;var pa=G.Gb[W],Rb=pa.Ve===void 0?Number.MAX_VALUE:pa.Ve;!(z.h.version>=pa.Nb)||z.h.version>=Rb||z.h.objectStoreNames.contains(W)||I.push(W)}k=I;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<Am("ytidb_reopen_db_retries",0))return c.u++,h.close(),uo(new Go("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Am("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return uo(new Go("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Ho(m,l);case 5:return x.return(h);case 2:n=ya(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,sp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ko(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw sp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,rf:b,upgrade:this.options.upgrade};return this.h=d=a()};var up=new rp("YtIdbMeta",{Gb:{databases:{Nb:1}},upgrade:function(a,b){b(1)&&$o(a,"databases",{keyPath:"actualName"})}});
function vp(a,b){var c;return B(function(d){if(d.h==1)return d.yield(tp(up,b),2);c=d.i;return d.return(Zo(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vo(f.h.put(a,void 0)).then(function(){})})}))})}
function wp(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(tp(up,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function xp(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(tp(up,b),2)):e.h!=3?(d=e.i,e.yield(Zo(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return ip(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return jp(g)})}),3)):e.return(c)})}
function yp(a){return xp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function zp(a,b,c){return xp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Ap(a){var b,c;return B(function(d){if(d.h==1)return b=Cn("YtIdbMeta hasAnyMeta other"),d.yield(xp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Bp,Cp=new function(){}(new function(){});
function Dp(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=mo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=yo)f=/WebKit\/([0-9]+)/.exec(Uc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Uc()),f=!(f&&parseInt(f[1],10)>=602));if(f||gd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(vp(d,Cp),4);case 4:return e.yield(wp("yt-idb-test-do-not-use",Cp),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function Ep(){if(Bp!==void 0)return Bp;po=!0;return Bp=Dp().then(function(a){po=!1;var b;if((b=lo())!=null&&b.h){var c;b={hasSucceededOnce:((c=mo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=lo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Fp(){return F("ytglobal.idbToken_")||void 0}
function Gp(){var a=Fp();return a?Promise.resolve(a):Ep().then(function(b){(b=b?Cp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var Hp=0;function Ip(a,b){Hp||(Hp=Hj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Gp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return h.yield(zp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(qp(f.actualName),7);case 7:return h.yield(wp(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),uo(g),d=!1;case 4:Hj.qa(Hp),Hp=0,d&&Ip(a,b),h.h=0}})}))}
function Jp(){var a;return B(function(b){return b.h==1?b.yield(Gp(),2):(a=b.i)?b.return(Ap(a)):b.return(!1)})}
new jj;function Kp(a){if(!Bn())throw a=new Go("AUTH_INVALID",{dbName:a}),uo(a),a;var b=Cn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Lp(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Gp(),2);case 2:g=m.i;if(!g)throw h=Lo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),uo(h),h;wo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Kp(a);wa(m,3);return m.yield(vp(k,g),5);case 5:return m.yield(pp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=ya(m),wa(m,7),m.yield(wp(k.actualName,
g),9);case 9:xa(m,8);break;case 7:ya(m);case 8:throw l;}})}
function Mp(a,b,c){c=c===void 0?{}:c;return Lp(a,b,!1,c)}
function Np(a,b,c){c=c===void 0?{}:c;return Lp(a,b,!0,c)}
function Op(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Gp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();wo(a);d=Kp(a);return e.yield(qp(d.actualName,b),3)}return e.yield(wp(d.actualName,c),0)})}
function Pp(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(qp(d.actualName,b),2):e.yield(wp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Qp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Gp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();wo("LogsDatabaseV2");return d.yield(yp(b),3)}c=d.i;return d.yield(Pp(c,a,b),0)})}
function Rp(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Gp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();wo(a);return d.yield(qp(a,b),3)}return d.yield(wp(a,c),0)})}
;function Sp(a,b){rp.call(this,a,b);this.options=b;wo(a)}
w(Sp,rp);function Tp(a,b){var c;return function(){c||(c=new Sp(a,b));return c}}
Sp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Np:Mp)(a,b,Object.assign({},c))};
Sp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Rp:Op)(this.name,a)};
function Up(a,b){return Tp(a,b)}
;var Vp={},Wp=Up("ytGcfConfig",{Gb:(Vp.coldConfigStore={Nb:1},Vp.hotConfigStore={Nb:1},Vp),shared:!1,upgrade:function(a,b){b(1)&&(gp($o(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),gp($o(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Xp(a){return tp(Wp(),a)}
function Yp(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Xp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(bp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Zp(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Xp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(bp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function $p(a){var b,c;return B(function(d){return d.h==1?d.yield(Xp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Zo(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return mp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function aq(a){var b,c;return B(function(d){return d.h==1?d.yield(Xp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Zo(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return mp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function bq(){H.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(bq,H);bq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.ba.call(this)};function cq(){this.h=0;this.i=new bq}
function dq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function eq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Fp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(aq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Yp(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function fq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Fp())?c?h.A(4):h.yield($p(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(Zp(c,b,g,d),0)})}
function gq(){if(!cq.instance){var a=new cq;cq.instance=a}a=cq.instance;var b=U()-a.h;if(!(a.h!==0&&b<Am("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
cq.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function hq(){return"INNERTUBE_API_KEY"in Zl&&"INNERTUBE_API_VERSION"in Zl}
function iq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ye:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Dh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ae:R("INNERTUBE_CONTEXT_HL"),ze:R("INNERTUBE_CONTEXT_GL"),Be:R("INNERTUBE_HOST_OVERRIDE")||"",Ce:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Eh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function jq(a){var b={client:{hl:a.Ae,gl:a.ze,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ye}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Bm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=en()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=zn())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=An())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=gq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(mm(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function kq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().sh:(a=hn(gn()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var lq=typeof TextEncoder!=="undefined"?new TextEncoder:null,mq=lq?function(a){return lq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var nq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},oq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function pq(a,b){this.version=a;this.args=b}
pq.prototype.serialize=function(){return{version:this.version,args:this.args}};function qq(a,b){this.topic=a;this.h=b}
qq.prototype.toString=function(){return this.topic};var rq=F("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.dc;N.prototype.publish=N.prototype.rb;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",rq);var sq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",sq);var tq=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",tq);var uq=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",uq);
E("ytPubsub2Pubsub2SkipSubKey",null);function vq(a,b){var c=wq();c&&c.publish.call(c,a.toString(),a,b)}
function xq(a){var b=yq,c=wq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(sq[d])try{if(f&&b instanceof qq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Od){var l=new h;h.Od=l.version}var m=h.Od}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){em(z)}},uq[b.toString()]?F("yt.scheduler.instance")?Hj.pa(g):xm(g,0):g())});
sq[d]=!0;tq[b.toString()]||(tq[b.toString()]=[]);tq[b.toString()].push(d);return d}
function zq(){var a=Aq,b=xq(function(c){a.apply(void 0,arguments);Bq(b)});
return b}
function Bq(a){var b=wq();b&&(typeof a==="number"&&(a=[a]),Sb(a,function(c){b.unsubscribeByKey(c);delete sq[c]}))}
function wq(){return F("ytPubsub2Pubsub2Instance")}
;function Cq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&vq("meta_logging_csi_event",{timerName:a,Xh:b})}
;var Dq=void 0,Eq=void 0;function Fq(){Eq||(Eq=xl(R("WORKER_SERIALIZATION_URL")));return Eq||void 0}
function Gq(){var a=Fq();Dq||a===void 0||(Dq=new Worker(ob(a),void 0));return Dq}
;var Hq=Am("max_body_size_to_compress",5E5),Iq=Am("min_body_size_to_compress",500),Jq=!0,Kq=0,Lq=0,Mq=Am("compression_performance_threshold_lr",250),Nq=Am("slow_compressions_before_abandon_count",4),Oq=!1,Pq=new Map,Qq=1,Rq=!0;function Sq(){if(typeof Worker==="function"&&Fq()&&!Oq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Pq.get(c.key);d&&(Tq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Pq.delete(c.key))}},b=Gq();
b&&(b.addEventListener("message",a),b.onerror=function(){Pq.clear()},Oq=!0)}}
function Uq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Jq)try{var g=Vq(b);if(g!=null&&(g>Hq||g<Iq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Rq||!S("initial_gzip_use_main_thread"))){Oq||Sq();var h=Gq();if(h&&!e){Pq.set(Qq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Qq});Qq++;return}}var k=vl(mq(b));Tq(k,f,a,c,d)}}catch(l){fm(l),d(a,c)}else d(a,c)}
function Tq(a,b,c,d,e){Rq=!1;var f=U();b.ticks.gelc=f;Lq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Mq&&(Kq++,S("abandon_compression_after_N_slow_zips")?Lq===Am("compression_disable_point")&&Kq>Nq&&(Jq=!1):Jq=!1);Wq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Xq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Jq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Vq(g);if(h!=null&&(h>Hq||h<Iq))return a;c=b?{level:1}:void 0;f=vl(mq(g),c);var k=U();e.ticks.gelc=k;if(b){Lq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Mq)if(Kq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Kq/Lq;var l=Nq/Am("compression_disable_point");Lq>0&&Lq%Am("compression_disable_point")===0&&b>=l&&(Jq=!1)}else Jq=!1;Wq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return fm(m),a}}else return a}
function Vq(a){try{return(new Blob(a.split(""))).size}catch(b){return fm(b),null}}
function Wq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Cq("gel_compression",a,{sampleRate:.1})}
;function Yq(a){a=Object.assign({},a);delete a.Authorization;var b=Yf();if(b){var c=new Lj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=pd(c.digest(),3)}return a}
;var Zq;function $q(){Zq||(Zq=new ko("yt.innertube"));return Zq}
function ar(a,b,c,d){if(d)return null;d=$q().get("nextId",!0)||1;var e=$q().get("requests",!0)||{};e[d]={method:a,request:b,authState:Yq(c),requestTime:Math.round(U())};$q().set("nextId",d+1,86400,!0);$q().set("requests",e,86400,!0);return d}
function br(a){var b=$q().get("requests",!0)||{};delete b[a];$q().set("requests",b,86400,!0)}
function cr(a){var b=$q().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=Yq(kq(!1));lg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),dr(a,d.method,e,{}));delete b[c]}}$q().set("requests",b,86400,!0)}}
;function er(a){this.fc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Rb=!1;var b;this.Md=(b=a.Md)!=null?b:100;var c;this.Hd=(c=a.Hd)!=null?c:1;var d;this.Fd=(d=a.Fd)!=null?d:2592E6;var e;this.Ed=(e=a.Ed)!=null?e:12E4;var f;this.Gd=(f=a.Gd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.lc=!!a.lc;var h;this.jc=(h=a.jc)!=null?h:.1;var k;this.zc=(k=a.zc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Rb&&(this.Rb=a.Rb);a.fc&&(this.fc=a.fc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Wc=a.Wc;this.Tc=a.Tc;fr(this)&&(!this.W||this.W("networkless_logging"))&&gr(this)}
function gr(a){fr(a)&&!a.Rb&&(a.h=!0,a.lc&&Math.random()<=a.jc&&a.ga.be(a.V),hr(a),a.fa.ta()&&a.cc(),a.fa.listen(a.Wc,a.cc.bind(a)),a.fa.listen(a.Tc,a.pd.bind(a)))}
r=er.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(fr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&ir(c,d)}).catch(function(e){ir(c,d);
jr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(fr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){jr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
jr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(fr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.wb(d.id,c.V):e=!0;c.fa.lb&&c.W&&c.W("vss_network_hint")&&c.fa.lb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.wb(d.id,c.V)}).catch(function(g){jr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.cc=function(){var a=this;if(!fr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.td("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(ir(a,b),3):(a.pd(),c.return());a.i&&(a.i=0,a.cc());c.h=0})},this.Md))};
r.pd=function(){this.Ca.qa(this.i);this.i=0};
function ir(a,b){var c;return B(function(d){switch(d.h){case 1:if(!fr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Ge(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if(kr(a,b,a.Fd)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.wb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=lr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.wb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function lr(a,b){if(!fr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=mr(f);(h=nr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zc)){m.A(2);break}if(!a.fa.Dc){m.A(3);break}return m.yield(a.fa.Dc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Xc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Hd?m.yield(a.ga.Xc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.wb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.cc()},a.Gd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.wb(b.id,a.V),2);a.fa.lb&&a.W&&a.W("vss_network_hint")&&a.fa.lb(!0);d(e,f);h.h=0})};
return b}
function kr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function hr(a){if(!fr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.td("QUEUED",a.V).then(function(b){b&&!kr(a,b,a.Ed)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Xc(b.id,a.V),2);hr(a);c.h=0})}):a.fa.ta()&&a.cc()})}
function jr(a,b){a.Rd&&!a.fa.ta()?a.Rd(b):a.handleError(b)}
function fr(a){return!!a.V||a.fc}
function mr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function nr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var or;
function pr(){if(or)return or();var a={};or=Up("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Nb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&$o(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),gp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return or()}
;function qr(a){return tp(pr(),a)}
function rr(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(qr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(bp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();sr(c);return g.return(f)})}
function tr(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(qr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Zo(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return mp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();sr(c);return m.return(l)})}
function ur(a,b){var c;return B(function(d){if(d.h==1)return d.yield(qr(b),2);c=d.i;return d.return(Zo(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function vr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(qr(b),2);e=f.i;return f.return(Zo(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Vo(h.h.put(k,void 0)).then(function(){return k})):Po.resolve(void 0)})}))})}
function wr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(qr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function xr(a){var b,c;return B(function(d){if(d.h==1)return d.yield(qr(a),2);b=d.i;c=U()-2592E6;return d.yield(Zo(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return ip(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return jp(f)})})}),0)})}
function yr(){B(function(a){return a.yield(Qp(),0)})}
function sr(a){S("nwl_csi_killswitch")||Cq("networkless_performance",a,{sampleRate:1})}
;var zr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var Ar={},Br=Up("ServiceWorkerLogsDatabase",{Gb:(Ar.SWHealthLog={Nb:1},Ar),shared:!0,upgrade:function(a,b){b(1)&&gp($o(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Cr(a){return tp(Br(),a)}
function Dr(a){var b,c;B(function(d){if(d.h==1)return d.yield(Cr(a),2);b=d.i;c=U()-2592E6;return d.yield(Zo(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return ip(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return jp(f)})})}),0)})}
function Er(a){var b;return B(function(c){if(c.h==1)return c.yield(Cr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Fr={},Gr=0;function Hr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Gr++;Fr[d]=c;c.onload=c.onerror=function(){delete Fr[d]};
b.Th&&(c.referrerPolicy="no-referrer");c.src=a}
;var Ir;function Jr(){Ir||(Ir=new ko("yt.offline"));return Ir}
function Kr(a){if(S("offline_error_handling")){var b=Jr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jr().set("errors",b,2592E3,!0)}}
;function Lr(){this.h=new Map;this.i=!1}
function Mr(){if(!Lr.instance){var a=F("yt.networkRequestMonitor.instance")||new Lr;E("yt.networkRequestMonitor.instance",a);Lr.instance=a}return Lr.instance}
Lr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Lr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Lr.prototype.removeParams=function(a){return a.split("?")[0]};
Lr.prototype.removeParams=Lr.prototype.removeParams;Lr.prototype.isEndpointCFR=Lr.prototype.isEndpointCFR;Lr.prototype.requestComplete=Lr.prototype.requestComplete;Lr.getInstance=Mr;function Nr(){Qh.call(this);var a=this;this.j=!1;this.h=Gj();this.h.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Jr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;em(d)}Jr().set("errors",{},2592E3,!0)}}})}
w(Nr,Qh);function Or(){if(!Nr.instance){var a=F("yt.networkStatusManager.instance")||new Nr;E("yt.networkStatusManager.instance",a);Nr.instance=a}return Nr.instance}
r=Nr.prototype;r.ta=function(){return this.h.ta()};
r.lb=function(a){this.h.h=a};
r.ue=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.ke=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Dc=function(a){a=Ej(this.h,a);a.then(function(b){S("use_cfr_monitor")&&Mr().requestComplete("generate_204",b)});
return a};
Nr.prototype.sendNetworkCheckRequest=Nr.prototype.Dc;Nr.prototype.listen=Nr.prototype.listen;Nr.prototype.enableErrorFlushing=Nr.prototype.ke;Nr.prototype.getWindowStatus=Nr.prototype.ue;Nr.prototype.networkStatusHint=Nr.prototype.lb;Nr.prototype.isNetworkAvailable=Nr.prototype.ta;Nr.getInstance=Or;function Pr(a){a=a===void 0?{}:a;Qh.call(this);var b=this;this.h=this.u=0;this.j=Or();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Qr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Rh(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rh(b,"publicytnetworkstatus-offline")})))}
w(Pr,Qh);Pr.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Pr.prototype.lb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Pr.prototype.Dc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Mr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.lb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Qr(a,b){a.rateLimit?a.h?(Hj.qa(a.u),a.u=Hj.pa(function(){a.o!==b&&(Rh(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(Rh(a,b),a.o=b,a.h=U()):Rh(a,b)}
;var Rr;function Sr(){var a=er.call;Rr||(Rr=new Pr({Jh:!0,Ah:!0}));a.call(er,this,{ga:{be:xr,wb:wr,td:tr,Ge:ur,Xc:vr,set:rr},fa:Rr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);fm(b,void 0,void 0,void 0,!0)}else em(b)},
yb:fm,sendFn:Tr,now:U,Rd:Kr,Ca:jo(),Wc:"publicytnetworkstatus-online",Tc:"publicytnetworkstatus-offline",lc:!0,jc:.1,zc:Am("potential_esf_error_limit",10),W:S,Rb:!(Bn()&&Ur())});this.j=new jj;S("networkless_immediately_drop_all_requests")&&yr();Rp("LogsDatabaseV2")}
w(Sr,er);function Vr(){var a=F("yt.networklessRequestController.instance");a||(a=new Sr,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&Gp().then(function(b){a.V=b;gr(a);a.j.resolve();a.lc&&Math.random()<=a.jc&&a.V&&Dr(a.V);S("networkless_immediately_drop_sw_health_store")&&Wr(a)}));
return a}
Sr.prototype.writeThenSend=function(a,b){b||(b={});b=Xr(a,b);Bn()||(this.h=!1);er.prototype.writeThenSend.call(this,a,b)};
Sr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Xr(a,b);Bn()||(this.h=!1);er.prototype.sendThenWrite.call(this,a,b,c)};
Sr.prototype.sendAndWrite=function(a,b){b||(b={});b=Xr(a,b);Bn()||(this.h=!1);er.prototype.sendAndWrite.call(this,a,b)};
Sr.prototype.awaitInitialization=function(){return this.j.promise};
function Wr(a){var b;B(function(c){if(!a.V)throw b=Lo("clearSWHealthLogsDb"),b;return c.return(Er(a.V).catch(function(d){a.handleError(d)}))})}
function Tr(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Yr(a,b);if(S("use_request_time_ms_header"))b.headers&&qm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Fm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Fm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new db({url:a});if(ab(k.h,"dsh")==="1")var l=null;else{var m=ab(k.h,"ae");if(m==="1"){var n=ab(k.h,"adurl");if(n)try{l={version:3,he:decodeURIComponent(n),Yd:bb(k.h,"act=1","ri=1",eb(k))};break c}catch(pa){}}l=m==="2"?{version:4,he:bb(k.h,"dct=1","suid="+k.i,""),Yd:bb(k.h,"act=1","ri=1","suid="+k.i)}:null}}if(l){var p=ic(a),t;if(!(t=!p||!p.endsWith("/aclk"))){var v=a.search(pc),x=oc(a,0,"ri",v);if(x<0)var z=null;else{var G=a.indexOf("&",
x);if(G<0||G>v)G=v;var I=a.slice(x+3,G!==-1?G:0);z=decodeURIComponent(I.replace(/\+/g," "))}t=z!=="1"}var V=!t;break b}}catch(pa){}V=!1}if(V){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var W=!0;break b}}catch(pa){}W=!1}c=W?!0:!1}else c=!1;c||Hr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Uq(a,b.postBody,b,Jm,d)):Uq(a,JSON.stringify(b.postParams),b,Im,d):Jm(a,b)}
function Xr(a,b){S("use_event_time_ms_header")&&qm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function Yr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mr().requestComplete(a,!0);d(e,f)}}
function Ur(){return hc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Zr=!1,$r=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Zr};E("ytNetworklessLoggingInitializationOptions",$r);function as(){var a;B(function(b){if(b.h==1)return b.yield(Gp(),2);a=b.i;if(!a||!Bn()&&!S("nwl_init_require_datasync_id_killswitch")||!Ur())return b.A(0);Zr=!0;$r.isNwlInitialized=Zr;return b.yield(Vr().awaitInitialization(),0)})}
;function bs(a){var b=this;this.config_=null;a?this.config_=a:hq()&&(this.config_=iq());En(function(){cr(b)},5E3)}
bs.prototype.isReady=function(){!this.config_&&hq()&&(this.config_=iq());return!!this.config_};
function dr(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=ar(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(G,I){br(p);t(G,I)};
c.onFetchSuccess=function(G,I){br(p);v(G,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Vr().writeThenSend(m,g):Vr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));Uq(m,z,g,Jm,x)}else Uq(m,JSON.stringify(g.postParams),g,Im,x)}else S("web_all_payloads_via_jspb")?Jm(m,g):Im(m,g)}catch(G){if(G.name==="InvalidAccessError")p&&(br(p),p=0),fm(Error("An extension is blocking network request."));else throw G;}p&&En(function(){cr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&fm(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);em(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Be)&&(h=f);var k=a.config_.Ce||!1,l=kq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=om(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?$r.isNwlInitialized:Zr)?Ep().then(function(n){e(n)}):e(!1)}
;var cs=0,ds=id?"webkit":hd?"moz":fd?"ms":ed?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++cs});var es={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in es||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function hs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
gs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hg=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",hg);var is=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",is);
function js(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&lg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ks(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=js(a,b,c,d);if(e)return e;e=++is.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new gs(h);if(!vg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new gs(h);
h.currentTarget=a;return c.call(a,h)};
g=dm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ls()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hg[e]=[a,b,c,g,d];return e}
function ms(a){a&&(typeof a=="string"&&(a=[a]),Sb(a,function(b){if(b in hg){var c=hg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ls()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hg[b]}}))}
var ls=fi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ns(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=ks(window,"mousemove",Va(this.Y,this));a=Va(this.M,this);typeof a==="function"&&(a=dm(a));this.Z=window.setInterval(a,25)}
$a(ns,H);ns.prototype.Y=function(a){a.h===void 0&&hs(a);var b=a.h;a.i===void 0&&hs(a);this.h=new dg(b,a.i)};
ns.prototype.M=function(){if(this.h){var a=U();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
ns.prototype.ba=function(){window.clearInterval(this.Z);ms(this.U)};var ps={};
function qs(a){var b=a===void 0?{}:a;a=b.Se===void 0?!1:b.Se;b=b.le===void 0?!0:b.le;if(F("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&rs();ks(document,"keydown",rs);ks(document,"keyup",rs);ks(document,"mousedown",rs);ks(document,"mouseup",rs);a?ks(window,"touchmove",function(){ss("touchmove",200)},{passive:!0}):(ks(window,"resize",function(){ss("resize",200)}),b&&ks(window,"scroll",function(){ss("scroll",200)}));
new ns(function(){ss("mouse",100)});
ks(document,"touchstart",rs,{passive:!0});ks(document,"touchend",rs,{passive:!0})}}
function ss(a,b){ps[a]||(ps[a]=!0,Hj.pa(function(){rs();ps[a]=!1},b))}
function rs(){F("_lact",window)==null&&qs();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function xs(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ys=D.ytPubsubPubsubInstance||new N,zs=D.ytPubsubPubsubSubscribedKeys||{},As=D.ytPubsubPubsubTopicToKeys||{},Bs=D.ytPubsubPubsubIsSynchronous||{};function Cs(a,b){var c=Ds();if(c&&b){var d=c.subscribe(a,function(){function e(){zs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Bs[a]?e():xm(e,0)}catch(g){em(g)}},void 0);
zs[d]=!0;As[a]||(As[a]=[]);As[a].push(d);return d}return 0}
function Es(a){var b=Ds();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Sb(a,function(c){b.unsubscribeByKey(c);delete zs[c]}))}
function Fs(a,b){var c=Ds();c&&c.publish.apply(c,arguments)}
function Gs(a){var b=Ds();if(b)if(b.clear(a),a)Hs(a);else for(var c in As)Hs(c)}
function Ds(){return D.ytPubsubPubsubInstance}
function Hs(a){As[a]&&(a=As[a],Sb(a,function(b){zs[b]&&delete zs[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.dc;N.prototype.publish=N.prototype.rb;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",ys);E("ytPubsubPubsubTopicToKeys",As);E("ytPubsubPubsubIsSynchronous",Bs);E("ytPubsubPubsubSubscribedKeys",zs);var Is=Symbol("injectionDeps");function Js(a){this.name=a}
Js.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ks(a){this.key=a}
function Ls(a){return new Ks(a)}
function Ms(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ns(a,b){a.i.set(b.ob,b);var c=a.j.get(b.ob);if(c)try{c.Sh(a.resolve(b.ob))}catch(d){c.Qh(d)}}
Ms.prototype.resolve=function(a){return a instanceof Ks?Os(this,a.key,[],!0):Os(this,a,[])};
function Os(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.hd!==void 0)var e=d.hd;else if(d.zf)e=d[Is]?Ps(a,d[Is],c):[],e=d.zf.apply(d,A(e));else if(d.Fc){e=d.Fc;var f=e[Is]?Ps(a,e[Is],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Wh||a.h.set(b,e);return e}
function Ps(a,b,c){return b?b.map(function(d){return d instanceof Ks?Os(a,d.key,c,!0):Os(a,d,c)}):[]}
;var Qs;function Rs(){Qs||(Qs=new Ms);return Qs}
;var Ss=window;function Ts(){var a,b;return"h5vcc"in Ss&&((a=Ss.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ss.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ss&&Ss.performance.mark&&Ss.performance.measure?2:0}
function Us(a){var b=Ts();switch(b){case 1:Ss.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ss.performance.mark(a+"-start");break;case 0:break;default:Db(b,"unknown trace type")}}
function Vs(a){var b=Ts();switch(b){case 1:Ss.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ss.performance.mark(c);Ss.performance.measure(a,b,c);break;case 0:break;default:Db(b,"unknown trace type")}}
;var Ws=S("web_enable_lifecycle_monitoring")&&Ts()!==0,Xs=S("web_enable_lifecycle_monitoring");function Ys(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Zs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?jo():d;this.j=c;this.scheduler=d;this.i=new jj;this.h=a;for(a={ib:0};a.ib<this.h.length;a={yc:void 0,ib:a.ib},a.ib++)a.yc=this.h[a.ib],c=function(e){return function(){e.yc.Nc();b.h[e.ib].Ac=!0;b.h.every(function(f){return f.Ac===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.yc),d=this.scheduler.Sa(c,d),this.h[a.ib]=Object.assign({},a.yc,{Nc:c,
jobId:d})}
function $s(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Ac||(a.scheduler.qa(c.jobId),a.scheduler.Sa(c.Nc,10))}
Zs.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Ac||this.scheduler.qa(b.jobId),b.Ac=!0;this.i.resolve()};
Zs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function at(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};Ws&&Us(this.state)}
r=at.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Ws&&Vs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&($s(this.j),this.j=void 0);bt(this,a,b);this.state=a;Ws&&Us(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ct(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ct(a,b){var c=b.filter(function(e){return dt(a,e)===10}),d=b.filter(function(e){return dt(a,e)!==10});
return a.D.Vh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ye.apply(a,[c].concat(A(e))),2);a.Jd.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.Ze.apply(a,[c].concat(A(e)));a.Jd.apply(a,[d].concat(A(e)))}}
r.Ze=function(a){for(var b=C.apply(1,arguments),c=jo(),d=y(a),e=d.next(),f={};!e.done;f={Sb:void 0},e=d.next())f.Sb=e.value,c.Lb(function(g){return function(){et(g.Sb.name);ft(function(){return g.Sb.callback.apply(g.Sb,A(b))});
gt(g.Sb.name)}}(f))};
r.Ye=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=jo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.ec=void 0;g=function(k){return function(){et(k.Xa.name);var l=ft(function(){return k.Xa.callback.apply(k.Xa,A(b))});
ce(l)?k.ec=S("web_lifecycle_error_handling_killswitch")?l.then(function(){gt(k.Xa.name)}):l.then(function(){gt(k.Xa.name)},function(m){Ys(m);
gt(k.Xa.name)}):gt(k.Xa.name)}}(f);
c.Lb(g);return f.ec?h.yield(f.ec,3):h.A(3)}f={Xa:void 0,ec:void 0};e=d.next();return h.A(2)})};
r.Jd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Nc:function(){et(e.name);ft(function(){return e.callback.apply(e,A(b))});
gt(e.name)},
priority:dt(c,e)}});
d.length&&(this.j=new Zs(d))};
function dt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function et(a){Ws&&a&&Us(a)}
function gt(a){Ws&&a&&Vs(a)}
function bt(a,b,c){Xs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(at.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function ft(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ys(b)}}
;function ht(a){at.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var jt;w(ht,at);ht.prototype.i=function(a,b){var c=this;this.h=En(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
ht.prototype.u=function(a,b){this.h&&(Hj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function kt(){jt||(jt=new ht);return jt}
;var lt=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return lt});function mt(){this.store={};this.h={}}
mt.prototype.storePayload=function(a,b){a=nt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
mt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ot(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
mt.prototype.extractMatchingEntries=function(a){a=ot(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
mt.prototype.getSequenceCount=function(a){a=ot(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function ot(a,b){var c=nt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&nt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(pt(b.auth,g[0])){var h=b.isJspb;pt(h===void 0?"undefined":h?"true":"false",g[1])&&pt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),pt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function pt(a,b){return a===void 0||a==="undefined"?!0:a===b}
mt.prototype.getSequenceCount=mt.prototype.getSequenceCount;mt.prototype.extractMatchingEntries=mt.prototype.extractMatchingEntries;mt.prototype.smartExtractMatchingEntries=mt.prototype.smartExtractMatchingEntries;mt.prototype.storePayload=mt.prototype.storePayload;function nt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function qt(a,b){if(a)return a[b.name]}
;var rt=Am("initial_gel_batch_timeout",2E3),st=Am("gel_queue_timeout_max_ms",6E4),tt=Am("gel_min_batch_size",5),ut=void 0;function vt(){this.o=this.h=this.i=0;this.j=!1}
var wt=new vt,xt=new vt,zt=new vt,At=new vt,Bt,Ct=!0,Dt=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Dt);var Et={};function Ft(){var a=F("yt.logging.ims");a||(a=new mt,E("yt.logging.ims",a));return a}
function Gt(a,b){if(a.endpoint==="log_event"){Ht(a);var c=It(a),d=Jt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=zr[d||""];var f,g,h,k=Rs().resolve(Ls(cq))==null?void 0:(f=dq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=Kt(e.tier);if(k===400){Lt(a,b);return}}Et[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Ft().storePayload(c,a.payload);Mt(b,c,d==="gelDebuggingEvent")}}
function Mt(a,b,c){function d(){Nt({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(ut=new a);a=Am("tvhtml5_logging_max_batch_ads_fork")||Am("tvhtml5_logging_max_batch")||Am("web_logging_max_batch")||100;var f=U(),g=Ot(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Ft().getSequenceCount(b));c>=1E3?d():c>=a?Bt||(Bt=Pt(function(){d();Bt=void 0},0)):f-h>=10&&(Qt(e,b.tier),g.o=f)}
function Lt(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&Ft().storePayload({isJspb:!1},a.payload);Ht(a);var c=It(a),d=new Map;d.set(c,[a.payload]);var e=Jt(a.payload)||"";b&&(ut=new b);return new gi(function(f,g){ut&&ut.isReady()?Rt(d,ut,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function It(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Dt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Nt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new gi(function(e,f){var g=Ot(c,d),h=g.j;g.j=!1;St(g.i);St(g.h);g.h=0;ut&&ut.isReady()?d===void 0&&S("enable_web_tiered_gel")?Tt(e,f,a,b,c,300,h):Tt(e,f,a,b,c,d,h):(Qt(c,d),e())})}
function Tt(a,b,c,d,e,f,g){var h=ut;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?Ft().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ft().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Et)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Ft().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ft().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Et[l];Rt(k,h,a,b,c,!1,g)}
function Qt(a,b){function c(){Nt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Ot(a,b),e=d===At||d===zt?5E3:st;S("web_gel_timeout_cap")&&!d.h&&(e=Pt(function(){c()},e),d.h=e);
St(d.i);e=R("LOGGING_BATCH_TIMEOUT",Am("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Ct&&(e=rt);e=Pt(function(){Am("gel_min_batch_size")>0?Ft().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=tt&&c():c()},e);
d.i=e}
function Rt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Sc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Vc:void 0,Uc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=ng({context:jq(b.config_||iq())});if(!Na(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Dt[m])&&
Ut(g.batchRequest,m,n);delete Dt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Vt(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Vc=function(p){S("start_client_gcf")&&Hj.pa(function(){return B(function(t){return t.yield(Wt(p),0)})});
k--;k||c()};
g.Sc=0;g.Uc=function(p){return function(){p.Sc++;if(e.bypassNetworkless&&p.Sc===1)try{dr(b,l,p.batchRequest,Xt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Vc,p.Uc,f)),Ct=!1}catch(t){em(t),d()}k--;k||c()}}(g);
try{dr(b,l,g.batchRequest,Xt(e,g.dangerousLogToVisitorSession,g.Vc,g.Uc,f)),Ct=!1}catch(p){em(p),d()}}}
function Xt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,th:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Yt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Vt(a,b,c){Yt()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),$l("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ut(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ht(a){var b=zm("il_payload_scraping");b=(b!==void 0?String(b):"")==="enable_il_payload_scraping";if(!F("yt.logging.transport.enableScrapingForTest"))if(b)lt=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",lt),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return;b=F("yt.logging.transport.scrapedPayloadsForTesting");var c=F("yt.logging.transport.payloadToScrape"),d=F("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Yt(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Pt(a,b){return S("transport_use_scheduler")===!1?xm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?En(function(){if(kt().currentState==="none")a();else{var c={};kt().install((c.none={callback:a},c))}},b):En(a,b)}
function St(a){S("transport_use_scheduler")?Hj.qa(a):window.clearTimeout(a)}
function Wt(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=qt(d,Bl),g=(f=d)==null?void 0:f.hotHashData,h=qt(d,Al),l=(k=d)==null?void 0:k.coldHashData,(m=Rs().resolve(Ls(cq)))?g?e?n.yield(eq(m,g,e),2):n.yield(eq(m,g),2):n.A(2):n.return()):l?h?n.yield(fq(m,l,h),0):n.yield(fq(m,l),0):n.A(0)})}
function Ot(a,b){b=b===void 0?200:b;return a?b===300?At:xt:b===300?zt:wt}
function Jt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,zr[b])return b}
function Kt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Zt=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Zt);
function $t(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=xs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Zt[b]=b in Zt?Zt[b]+1:0,a.sequence={index:Zt[b],groupKey:b},d.endOfSequence&&delete Zt[d.sequenceGroup]);(d.sendIsolatedPayload?Lt:Gt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function to(a,b,c){c=c===void 0?{}:c;var d=bs;R("ytLoggingEventsDefaultDisabled",!1)&&bs===bs&&(d=null);$t(a,b,d,c)}
;function au(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var bu=new Set,cu=0,du=0,eu=0,fu=[],gu=[],hu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function so(a){iu(a)}
function X(a){iu(a,"WARNING")}
function ju(a){a instanceof Error?iu(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",X(a))}
function iu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(cu>=5))){d=[];e=y(gu);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(z){}}d=[].concat(A(fu),A(d));var k=$b(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=an(a.args[p],"params."+p,c,n),n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=cn(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=cn(t)}if(d.length)for(p=0;p<d.length&&!(n=an(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Xm();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Lh)){a=d.weight;break a}a=y(a.Ua);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(Sm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xc[p.name])for(e=y(c.xc[p.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Rc(f);break}p.params||(p.params={});a=Xm();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ua.length;p.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new qg(rg,"sample")).constructor!==
qg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);if(p.sampleWeight!==0&&!bu.has(p.message)){if(g&&S("web_enable_error_204"))ku(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Ym.rb("handleError",p),S("record_app_crashed_web")&&eu===0&&p.sampleWeight===1&&(eu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),to("appCrashed",
g)),du++):b==="WARNING"&&Ym.rb("handleWarning",p);if(S("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(hu);for(c=a.next();!c.done;c=a.next())if(zo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!am("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(to("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Nt(void 0,void 0,!1))}S("suppress_error_204_logging")||
ku(b,p)}try{bu.add(p.message)}catch(z){}cu++}}}
function ku(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=R("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Jm(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function lu(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function mu(){this.register=new Map}
function nu(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ph("ABORTED")}
mu.prototype.clear=function(){nu(this);this.register.clear()};
var ou=new mu;var pu=Date.now().toString();
function qu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(pu)for(a=1,b=0;b<pu.length;b++)d[a%16]^=d[(a-1)%16]/4^pu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ru,su=D.ytLoggingDocDocumentNonce_;su||(su=qu(),E("ytLoggingDocDocumentNonce_",su));ru=su;function tu(a){this.h=a}
r=tu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Dl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&hf(a,2,De(this.h.veType)),this.h.veCounter!==void 0&&hf(a,6,De(this.h.veCounter)),this.h.elementIndex!==void 0&&hf(a,3,De(this.h.elementIndex)),this.h.isCounterfactual&&hf(a,5,ze(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();tf(a,Dl,7,b)}this.h.youtubeData!==void 0&&tf(a,Cl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function uu(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function vu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},$l("client-screen-nonce-store",c));c[b]=a}
function wu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function xu(a){return R(wu(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",xu);function yu(){var a=R("csn-to-ctt-auth-info");a||(a={},$l("csn-to-ctt-auth-info",a));return a}
function zu(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Au(a){a=uu(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Au);function Bu(a,b,c){var d=yu();(c=Au(c))&&delete d[c];b&&(d[a]=b)}
function Cu(a){return yu()[a]}
E("yt_logging_screen.getCttAuthInfo",Cu);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==uu(c)||b!==R(wu(c)))if(Bu(a,d,c),vu(a,c),$l(wu(c),b),b=function(){setTimeout(function(){a&&to("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ru,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Du(){var a=mg(Eu),b;return(new gi(function(c,d){a.onSuccess=function(e){wm(e)?c(new Fu(e)):d(new Gu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Gu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Gu("Request timed out","net.timeout",e))};
b=Jm("//googleads.g.doubleclick.net/pagead/id",a)})).Ec(function(c){if(c instanceof pi){var d;
(d=b)==null||d.abort()}return li(c)})}
function Gu(a,b,c){fb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Gu,fb);function Fu(a){this.xhr=a}
;function Hu(){this.X=0;this.h=null}
Hu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Iu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Ju(a):this};
Hu.prototype.getValue=function(){return this.h};
Hu.prototype.isRejected=function(){return this.X==2};
Hu.prototype.$goog_Thenable=!0;function Ju(a){var b=new Hu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Iu(a){var b=new Hu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Ku(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(jc(a)));return a}
function Lu(a){var b={};S("json_condensed_response")&&(b.prettyPrint="false");return a=pm(a,b||{},!1)}
function Mu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:qm(a)?"same-origin":"cors",credentials:qm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Nu(){return Wf()||(kd||ld)&&zo("applewebkit")&&!zo("version")&&(!zo("safari")||zo("gsa/"))||jd&&zo("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ou(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Pu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Hl)if(Hl[d]==c.embeddedPlayerMode){b=Hl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Qu(a){fb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ru;this.isTimeout=a instanceof Gu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof pi}
w(Qu,fb);Qu.prototype.name="BiscottiError";function Ru(){fb.call(this,"Biscotti ID is missing from server")}
w(Ru,fb);Ru.prototype.name="BiscottiMissingError";var Eu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Su=null;function Tu(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Nu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(kg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Pu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Tl(){var a=Tu();if(a!==void 0)return li(a);Su||(Su=Du().then(Uu).Ec(function(b){return Vu(2,b)}));
return Su}
function Uu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Ru;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Ru;a=a.id;Ul(a);Su=Iu(a);Wu(18E5,2);return a}
function Vu(a,b){b=new Qu(b);Ul("");Su=Ju(b);a>0&&Wu(12E4,a-1);throw b;}
function Wu(a,b){xm(function(){Du().then(Uu,function(c){return Vu(b,c)}).Ec(ei)},a)}
function Xu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Tl()}catch(b){return li(b)}}
;var Mb=oa(["data-"]);function Yu(a){a&&(a.dataset?a.dataset[Zu()]="true":Nb(a))}
function $u(a){return a?a.dataset?a.dataset[Zu()]:a.getAttribute("data-loaded"):null}
var av={};function Zu(){return av.loaded||(av.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function bv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mg(b);this.assets=a.assets||{};this.attrs=a.attrs||mg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
bv.prototype.clone=function(){var a=new bv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=mg(c):a[b]=c}return a};var cv=["att/get"],dv=["share/get_share_panel"],ev=["share/get_web_player_share_panel"],fv=["feedback"],gv=["notification/modify_channel_preference"],hv=["browse/edit_playlist"],iv=["subscription/subscribe"],jv=["subscription/unsubscribe"];var kv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",kv);function lv(a){Vl(kv,arguments)}
;function mv(a,b,c){nv(a,b,c===void 0?null:c)}
function ov(a){a=pv(a);var b=document.getElementById(a);b&&(Gs(a),b.parentNode.removeChild(b))}
function qv(a,b){a&&b&&(a=""+Qa(b),(a=rv[a])&&Es(a))}
function nv(a,b,c){c=c===void 0?null:c;var d=pv(a),e=document.getElementById(d),f=e&&$u(e),g=e&&!f;f?b&&b():(b&&(f=Cs(d,b),b=""+Qa(b),rv[b]=f),g||(e=sv(a,d,function(){$u(e)||(Yu(e),Fs(d),xm(function(){Gs(d)},0))},c)))}
function sv(a,b,c,d){d=d===void 0?null:d;var e=tg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Kb(e,yl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function pv(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+dc(a)}
var rv={};function tv(a){var b=uv(a),c=document.getElementById(b),d=c&&$u(c);d||c&&!d||(c=vv(a,b,function(){if(!$u(c)){Yu(c);Fs(b);var e=Wa(Gs,b);xm(e,0)}}))}
function vv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=yl(a);Pb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function uv(a){var b=tg("A");Cb(b,new ub(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+dc(a)}
;function wv(a){var b=C.apply(1,arguments);if(!xv(a)||b.some(function(d){return!xv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())yv(a,c.value)}
function yv(a,b){for(var c in b)if(xv(b[c])){if(c in a&&!xv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});yv(a[c],b[c])}else if(zv(b[c])){if(c in a&&!zv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Av(a[c],b[c])}else a[c]=b[c];return a}
function Av(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,xv(c)?a.push(yv({},c)):zv(c)?a.push(Av([],c)):a.push(c);return a}
function xv(a){return typeof a==="object"&&!Array.isArray(a)}
function zv(a){return typeof a==="object"&&Array.isArray(a)}
;var Bv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Cv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=hc(window.location.href);e&&d.push(e);e=hc(a);if(Qb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Cb(d,a),a=d.href)if(a=jc(a),a=kc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Au()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Dv(a,b,f)}else Dv(a,b)}
function Dv(a,b,c){a=Ev(a);b=b?mc(b):"";c=c||5;Nu()&&kn(a,b,c)}
function Ev(a){for(var b=y(Bv),c=b.next();!c.done;c=b.next())a=rc(a,c.value);return"ST-"+dc(a).toString(36)}
;function Fv(a){pq.call(this,1,arguments);this.csn=a}
w(Fv,pq);var yq=new qq("screen-created",Fv),Gv=[],Hv=0,Iv=new Map,Jv=new Map,Kv=new Map;
function Lv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Mv({cttAuthInfo:Cu(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ig(k)||!k.trackingParams&&!k.veType)&&X(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Nv(h,b);if(k.veType&&!Jv.has(l)&&!Kv.has(l)&&!e){if(!S("il_attach_cache_limit")||Iv.size<1E3){Iv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&Iv.size>1E3&&X(new T("IL Attach cache exceeded limit"))}h=Nv(c,b);Iv.has(h)?
Ov(c,b):Kv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Ub(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Pv("visualElementAttached",f,c):a?$t("visualElementAttached",c,a,f):to("visualElementAttached",c,f)}
function Pv(a,b,c){Gv.push({Re:a,payload:c,Gh:void 0,options:b});Hv||(Hv=zq())}
function Aq(a){if(Gv){for(var b=y(Gv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,to(c.Re,c.payload,c.options));Gv.length=0}Hv=0}
function Nv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Ov(a,b){a=Nv(a,b);Iv.has(a)&&(b=Iv.get(a)||[],Lv(b[0],b[1],b[2],[b[3]],!0),Iv.delete(a))}
function Mv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Qv(){try{return!!self.localStorage}catch(a){return!1}}
;function Rv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Sv(a){if(Qv()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Rv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Tv(){if(!Qv())return!1;var a=Cn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Rv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Uv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Vv(a){if(R("LOGGED_IN",!0)&&Uv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=hc(window.location.href);c&&b.push(c);c=hc(a);Qb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=jc(a),(b=kc(b))?(b=Ev(b),b=(b=ln(b)||null)?mm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Uv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Cv(a,b)}}
;function Wv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Cv(a,b);if(c)return!1;Vv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=nc(a,e);Vv(b);a=void 0;a=a===void 0?yb:a;a:if(f=b+f,a=a===void 0?yb:a,!(f instanceof ub)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof wb&&c.Ee(f)){f=new ub(f);break a}f=void 0}g=g.location;f=Ab(f||vb);f!==void 0&&(g.href=f);return!0}
;function Xv(a){if(kg(R("PLAYER_VARS",{}))!="1"){a&&Sl();try{Xu().then(function(){},function(){}),xm(Xv,18E5)}catch(b){em(b)}}}
;var Yv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Zv(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=ic(a);if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=nm(a).theme;return Yv.get(c)||null}catch(d){}return null}
;function $v(){this.h={};if(this.i=nn()){var a=ln("CONSISTENCY");a&&aw(this,{encryptedTokenJarContents:a})}}
$v.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];aw(this,a)}};
function aw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&kn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var bw=window.location.hostname.split(".").slice(-2).join(".");function cw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=dw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ew;function fw(){ew=F("yt.clientLocationService.instance");ew||(ew=new cw,E("yt.clientLocationService.instance",ew));return ew}
r=cw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=dw(this))&&this.h.set("yt-location-playability-token",a,15552E3):kn("YT_CL",JSON.stringify({loctok:a}),15552E3,bw,!0))};
function dw(a){return a.h===void 0?new ko("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=dw(this))&&this.h.remove("yt-location-playability-token"):mn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function gw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return iu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=ng(d);S("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;rn();var g="USER_INTERFACE_THEME_LIGHT";un(165)?g="USER_INTERFACE_THEME_DARK":un(174)?g="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:Zv()||g;e.userInterfaceTheme=f;if(!b){if(f=zn())e.connectionType=f;S("web_log_effective_connection_type")&&(f=An())&&(d.client.effectiveConnectionType=f)}var h;if(S("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}S("web_gcf_hashes_innertube")&&(f=gq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=nm(D.location.href);!S("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},S("kevlar_woffle")&&dn.instance&&(k=dn.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
en(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!S("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(pa){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Bm();$v.instance||($v.instance=new $v);e=$v.instance.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!S("web_prequest_context_killswitch")&&(m=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=rn();m=un(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=
m);l&&(d.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?c&&(b=Au())&&(d.clientScreenNonce=b):!b&&(b=Au())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;fw().setLocationOnInnerTubeContext(d);try{var n=rm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=y(v.value),z=x.next().value,G=x.next().value;n=z;p=G;a=void 0;(a=d.adSignalsInfo.params)==
null||a.push({key:n,value:""+p})}var I,V;if(((I=d.client)==null?void 0:I.clientName)==="TVHTML5"||((V=d.client)==null?void 0:V.clientName)==="TVHTML5_UNPLUGGED"){var W=R("INNERTUBE_CONTEXT");W.adSignalsInfo&&(d.adSignalsInfo.advertisingId=W.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=W.adSignalsInfo.limitAdTracking)}}catch(pa){iu(pa)}return d}
;function hw(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function iw(){this.h={}}
iw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
iw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
iw.prototype.set=function(a,b){this.h[a]=b};
iw.prototype.remove=function(a){delete this.h[a]};function jw(){this.mappings=new iw}
jw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
jw.prototype.get=function(a){var b=this.mappings.get(a.toString());a:switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Db(b)}return a};
new jw;function kw(a){return function(){return new a}}
;var lw={},mw=(lw.WEB_UNPLUGGED="^unplugged/",lw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",lw.WEB_UNPLUGGED_OPS="^unplugged/",lw.WEB_UNPLUGGED_PUBLIC="^unplugged/",lw.WEB_CREATOR="^creator/",lw.WEB_KIDS="^kids/",lw.WEB_EXPERIMENTS="^experiments/",lw.WEB_MUSIC="^music/",lw.WEB_REMIX="^music/",lw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",lw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",lw);
function nw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=mw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(mw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function ow(){}
ow.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?jn:c;var d={context:gw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+nw(this.j());(e=(f=qt(a.commandMetadata,Fl))==null?void 0:f.apiUrl)&&(b=e);f=Lu(Ku(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Mu(f),Ga:d,config:a};d.config.Ob?d.config.Ob.identity=c:d.config.Ob={identity:c};return d}c=new T("Error: Failed to create Request from Command.",a);iu(c)};
da.Object.defineProperties(ow.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function pw(){}
w(pw,ow);function qw(){}
w(qw,pw);qw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Mu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
qw.prototype.j=function(){return[]};
qw.prototype.i=function(){};
qw.prototype.h=function(){};var rw={},sw=(rw.GET_DATASYNC_IDS=kw(qw),rw);function tw(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function uw(){var a=tw();a.info||(a.info={});return a.info}
function vw(a){a=tw(a);a.metadata||(a.metadata={});return a.metadata}
function ww(a){a=tw(a);a.tick||(a.tick={});return a.tick}
function xw(a){a=tw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function yw(a){a=xw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function zw(a){var b=tw(a).nonce;b||(b=qu(),tw(a).nonce=b);return b}
;function Aw(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function Bw(a){a=a||"";var b=F("ytcsi.reference");b||(Aw(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=Aw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var Y={},Cw=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",Y.channels="LATENCY_ACTION_CHANNELS",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",Y.editor=
"LATENCY_ACTION_EDITOR",Y.embed="LATENCY_ACTION_EMBED",Y.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.favorites="LATENCY_ACTION_FAVORITES",Y.home="LATENCY_ACTION_HOME",Y.inboarding="LATENCY_ACTION_INBOARDING",Y.landing="LATENCY_ACTION_LANDING",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",
Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.management="LATENCY_ACTION_MANAGEMENT",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",Y.onboarding="LATENCY_ACTION_ONBOARDING",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",Y.prebuffer=
"LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.projects="LATENCY_ACTION_PROJECTS",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",Y.review="LATENCY_ACTION_REVIEW",Y.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",Y.tenx="LATENCY_ACTION_TENX",Y.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",
Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]="LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",Y);function Dw(a,b){pq.call(this,1,arguments);this.timer=b}
w(Dw,pq);var Ew=new qq("aft-recorded",Dw);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var Fw=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Fw);function Gw(){this.h=0}
function Hw(){Gw.instance||(Gw.instance=new Gw);return Gw.instance}
Gw.prototype.tick=function(a,b,c,d){Iw(this,"tick_"+a+"_"+b)||to("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Gw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Iw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,to("latencyActionInfo",a,{cttAuthInfo:c}))};
Gw.prototype.jspbInfo=function(){};
Gw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Iw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,to("latencyActionSpan",a,{cttAuthInfo:c}))};
function Iw(a,b){Fw[b]=Fw[b]||{count:0};var c=Fw[b];c.count++;c.time=U();a.h||(a.h=En(function(){var d=U(),e;for(e in Fw)Fw[e]&&d-Fw[e].time>6E4&&delete Fw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||X(c)),!0):!1}
;var Jw=window;function Kw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Lw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Z==null?void 0:(a=Z.getEntriesByType)==null?void 0:(b=a.call(Z,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Mw(e.requestStart),e.responseEnd=Mw(e.responseEnd),e.redirectStart=Mw(e.redirectStart),e.redirectEnd=Mw(e.redirectEnd),e.domainLookupEnd=Mw(e.domainLookupEnd),e.connectStart=Mw(e.connectStart),e.connectEnd=
Mw(e.connectEnd),e.responseStart=Mw(e.responseStart),e.secureConnectionStart=Mw(e.secureConnectionStart),e.domainLookupStart=Mw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Z.timing)):Z.timing;return a}
function Mw(a){return Math.round(Nw()+a)}
function Nw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Jw.performance||Jw.mozPerformance||Jw.msPerformance||Jw.webkitPerformance||new Kw;var Ow=!1,Pw=!1,Qw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Va(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||ei,Z);function Rw(a,b){if(!S("web_csi_action_sampling_enabled")||!tw(b).actionDisabled){var c=Bw(b||"");wv(c.info,a);a.loadType&&(c=a.loadType,vw(b).loadType=c);wv(yw(b),a);c=zw(b);b=tw(b).cttAuthInfo;Hw().info(a,c,b)}}
function Sw(){var a,b,c,d;return((d=Rs().resolve(Ls(cq))==null?void 0:(a=dq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Tw(a,b,c){if(!S("web_csi_action_sampling_enabled")||!tw(c).actionDisabled){var d=zw(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Rs().resolve(Ls(cq))==null?0:dq())&&!Pw&&(Pw=!0,Tw("gcfl",U(),c));var f,g,h;e=(Rs().resolve(Ls(cq))==null?void 0:(f=dq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Sw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;tw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Rw(f,c));tw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Z.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Z.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Z.timeOrigin:f-(Z.timeOrigin||Z.timing.navigationStart);try{Z.mark(e,
{startTime:f})}catch(k){}}e=Bw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=xw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=ww(c);e=b||U();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=tw(c).cttAuthInfo;a==="_start"?(a=Hw(),Iw(a,"baseline_"+d)||to("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Hw().tick(a,d,b,f);Uw(c);return e}}}
function Vw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ds+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ww(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Xw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Fb(document)&&a.setAttribute("nonce",Fb(document));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=Nw(),Tw("rsf_"+b,c+Math.round(a.fetchStart)),Tw("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Yw(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=Tb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Vb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Tw("wffs",Mw(b.startTime)),Tw("wffe",Mw(b.responseEnd)))}
function Zw(a){var b=$w("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=$w(b[d],a);if(e)return e}return NaN}
function $w(a,b){if(a=ww(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Uw(a){var b=$w("_start",a),c=Zw(a),d=!Ow;b&&c&&d&&(vq(Ew,new Dw(Math.round(c-b),a)),Ow=!0)}
function ax(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=Wb(a,function(c){return c.name==="first-paint"}))return Mw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Z.getEntriesByType("first-paint")[0].startTime:b=Z.timing.Nh;return b?Math.max(0,b):0}
;function bx(a,b){dm(function(){Bw("").info.actionType=a;b&&$l("TIMING_AFT_KEYS",b);$l("TIMING_ACTION",a);var c=Ww();Object.keys(c).length>0&&Rw(c);c={isNavigation:!0,actionType:Cw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=Cw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Au())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Vw();if(d===1||d===-1)c.isVisible=!0;vw();uw();
c.loadType="cold";d=uw();var e=Lw(),f=Nw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Tw("srt",e.responseStart),d.prerender!==1&&Tw("_start",f,void 0));d=ax();d>0&&Tw("fpt",d);d=Lw();d.isPerformanceNavigationTiming&&Rw({performanceNavigationTiming:!0},void 0);Tw("nreqs",d.requestStart,void 0);Tw("nress",d.responseStart,void 0);Tw("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Tw("nrs",d.redirectStart,void 0),Tw("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Tw("ndnss",d.domainLookupStart,void 0),Tw("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Tw("ntcps",d.connectStart,void 0),Tw("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Nw()&&d.connectEnd-d.secureConnectionStart>0&&(Tw("nstcps",d.secureConnectionStart,void 0),Tw("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&Yw();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in Qw)Qw.hasOwnProperty(h)&&
(e=Qw[h],Xw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Rw(c);c=xw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=yw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(vw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=ww();e=xw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Tw(k,$w(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Tw(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,wv(c,d),wv(k,d),d=!0;d&&Rw(k)}E("ytglobal.timingready_",!0);k=R("TIMING_ACTION");F("ytglobal.timingready_")&&k&&cx()&&Zw()&&Uw()})()}
function cx(a){return dm(function(){return dx("_start",a)})()}
function ex(a,b,c){dm(Rw)(a,b,c===void 0?!1:c)}
function fx(a,b,c){return dm(Tw)(a,b,c)}
function dx(a,b){return dm(function(){var c=ww(b);return a in c})()}
function gx(a){if(!S("universal_csi_network_ticks"))return"";a=ic(a)||"";for(var b=Object.keys(nq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function hx(a){if(!S("universal_csi_network_ticks"))return function(){};
var b=nq[a];return b?(ix(b),function(){var c=S("universal_csi_network_ticks")?(c=oq[a])?ix(c):!1:!1;return c}):function(){}}
function ix(a){return dm(function(){if(dx(a))return!1;fx(a,void 0,void 0);return!0})()}
function jx(a){dm(function(){if(!cx("attestation_challenge_fetch")||dx(a,"attestation_challenge_fetch"))return!1;fx(a,void 0,"attestation_challenge_fetch");return!0})()}
function kx(){dm(function(){var a=zw();requestAnimationFrame(function(){setTimeout(function(){a===zw()&&fx("ol",void 0,void 0)},0)})})()}
var lx=window;lx.ytcsi&&(lx.ytcsi.infoGel=ex,lx.ytcsi.tick=fx);var mx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),nx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ox(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Zb||(a.Zb={});a.Zb=Object.assign({},sw,a.Zb)}
function px(a,b,c,d){if(ox.instance!==void 0){if(d=ox.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else ox.instance=new ox(a,b,c,d)}
function qx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?jn:c;var d=rx(a,b);return d?new gi(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.A(0);break}Vv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ld){m=sx(h.config,l);n.A(4);break}return n.yield(tx(h.config,l),5);case 5:m=n.i;case 4:e(ux(a,h,m)),n.h=
0}})}):li(new T("Error: No request builder found for command.",b))}
function vx(a,b){function c(){}
var d="/youtubei/v1/"+nw(cv);var e=e===void 0?{Ob:{identity:jn}}:e;var f=f===void 0?!0:f;c=hx(gx(d));b.context||(b.context=gw(void 0,f));return new gi(function(g){var h,k,l,m,n;return B(function(p){if(p.h==1)return h=Ku(d),k=qm(h)?"same-origin":"cors",a.j.Ld?(l=sx(e,k),p.A(2)):p.yield(tx(e,k),3);p.h!=2&&(l=p.i);m=Lu(Ku(d));n={input:m,Za:Mu(m),Ga:b,config:e};g(ux(a,n,l,c));p.h=0})})}
function wx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(mx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function ux(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,z,G,I,V,W,pa,Rb,Ya,Bb,Za,Oa,Ka,Ja,jh,ts,us,vs,ws;return B(function(ha){switch(ha.h){case 1:ha.A(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ha.A(4);break}h=b.Ga.context;ha.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ha.A(4);break}m=l.value;return ha.yield(m.Oh(h),9);case 9:l=k.next();ha.A(8);break;case 4:if((n=a.i)==null||!n.Uh(b.input,b.Ga)){ha.A(12);break}return ha.yield(a.i.Ih(b.input,
b.Ga),13);case 13:return p=ha.i,wx(a,p,b),ha.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Rh)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),V=(I=(G=b.Za)==null?void 0:G.headers)!=null?I:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},V,c)}),W=Object.assign({},b.Za),b.Za.method==="POST"&&(W=Object.assign({},W,{body:z})),((pa=b.config)==null?0:pa.We)&&fx(b.config.We),Rb=function(){return a.fa.fetch(b.input,W,b.config)},t=Rb(),x&&a.h.set(x,t)),ha.yield(t,14);
case 14:if((Ya=ha.i)&&"error"in Ya&&((Bb=Ya)==null?0:(Za=Bb.error)==null?0:Za.details))for(Oa=Ya.error.details,Ka=y(Oa),Ja=Ka.next();!Ja.done;Ja=Ka.next())jh=Ja.value,(ts=jh["@type"])&&nx.indexOf(ts)>-1&&(delete jh["@type"],Ya=jh);x&&a.h.has(x)&&a.h.delete(x);((us=b.config)==null?0:us.Xe)&&fx(b.config.Xe);if(Ya||(vs=a.i)==null||!vs.vh(b.input,b.Ga)){ha.A(15);break}return ha.yield(a.i.Hh(b.input,b.Ga),16);case 16:Ya=ha.i;case 15:return wx(a,Ya,b),((ws=b.config)==null?0:ws.Te)&&fx(b.config.Te),d(),
ha.return(Ya||void 0)}})}
function rx(a,b){a:{a=a.u;var c,d=(c=qt(b,Gl))==null?void 0:c.signal;if(d&&a.Zb&&(c=a.Zb[d])){var e=c();break a}var f;if((c=(f=qt(b,El))==null?void 0:f.request)&&a.ee&&(f=a.ee[c])){e=f();break a}for(e in b)if(a.Ic[e]&&(b=a.Ic[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function tx(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ob)==null?void 0:d.sessionIndex;var h=g.yield;var k=hn(0,{sessionIndex:e});if(!(k instanceof gi)){var l=new gi(ei);hi(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},hw(b),f)))})}
function sx(a,b){var c;a=a==null?void 0:(c=a.Ob)==null?void 0:c.sessionIndex;c=hn(0,{sessionIndex:a});return Object.assign({},hw(b),c)}
;var xx=new Js("INNERTUBE_TRANSPORT_TOKEN");function yx(){}
w(yx,pw);yx.prototype.j=function(){return iv};
yx.prototype.i=function(a){return qt(a,Rl)||void 0};
yx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(yx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zx(){}
w(zx,pw);zx.prototype.j=function(){return jv};
zx.prototype.i=function(a){return qt(a,Ql)||void 0};
zx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(zx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Ax=new Js("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Bx(a){this.S=a}
w(Bx,pw);Bx.prototype.j=function(){return dv};
Bx.prototype.i=function(a){return qt(a,Kl)||qt(a,Ll)||qt(a,Jl)};
Bx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.S)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.S.i(b.clientParamIdentifier)}};
Bx[Is]=[Ax];function Cx(){}
w(Cx,pw);Cx.prototype.j=function(){return fv};
Cx.prototype.i=function(a){return qt(a,Il)||void 0};
Cx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Cx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Dx(){}
w(Dx,pw);Dx.prototype.j=function(){return gv};
Dx.prototype.i=function(a){return qt(a,Ol)||void 0};
Dx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ex(){}
w(Ex,pw);Ex.prototype.j=function(){return hv};
Ex.prototype.i=function(a){return qt(a,Nl)||void 0};
Ex.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Fx(){}
w(Fx,pw);Fx.prototype.j=function(){return ev};
Fx.prototype.i=function(a){return qt(a,Ml)};
Fx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Gx=new Js("FETCH_FN_TOKEN"),Hx=new Js("PARSE_FN_TOKEN"),Ix=new Js("WINDOW_REQUEST_TOKEN");function Jx(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Jx,T);var Kx=new Js("NETWORK_SLI_TOKEN");function Lx(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
Lx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Mx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){X(k);
if((c==null?0:c.pe)&&k instanceof Jx&&k.errorType===1)return Promise.reject(k)}))})};
function Mx(a,b,c){if(a.h){var d=ic(rc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}d=c;S("wug_networking_gzip_request")&&(d=Xq(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
Lx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Fe)&&a.ok)return Bf(b.Fe,e);e=e.replace(")]}'","");if((b==null?0:b.pe)&&e)try{var f=d(e)}catch(h){throw new Jx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ch(),c=c.then(function(e){X(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Lx[Is]=[Ls(Kx),Ls(Gx),Ls(Hx),Ls(Ix)];var Nx=new Js("NETWORK_MANAGER_TOKEN");var Ox;function Px(a){var b=new fj;if(a.interpreterJavascript){var c=wl(a.interpreterJavascript);c=Ib(c).toString();var d=new dj;yf(d,6,c);tf(b,dj,1,d,Vd)}else a.interpreterUrl&&(c=xl(a.interpreterUrl),c=ob(c).toString(),d=new ej,yf(d,4,c),tf(b,ej,2,d,Vd));a.interpreterHash&&zf(b,3,a.interpreterHash);a.program&&zf(b,4,a.program);a.globalName&&zf(b,5,a.globalName);a.clientExperimentsStateBlob&&zf(b,7,a.clientExperimentsStateBlob);return b}
function Qx(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function xc(){if(S("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Rx(a){this.h=a}
Rx.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Rx.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Rx.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Sx(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Rx(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Rx(c))}))})}
;var Tx=[],Ux=!1;function Vx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Nu()){var a=R("PLAYER_VARS",{});if(kg(a)!="1"&&!Pu(a)){var b=function(){Ux=!0;"google_ad_status"in window?$l("DCLKSTAT",1):$l("DCLKSTAT",2)};
try{mv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Tx.push(Hj.pa(function(){if(!(Ux||"google_ad_status"in window)){try{qv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ux=!0;$l("DCLKSTAT",3)}},5E3))}}}
function Wx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Xx(a){this.h=a}
[new Xx("b.f_"),new Xx("j.s_"),new Xx("r.s_"),new Xx("e.h_"),new Xx("i.s_"),new Xx("s.t_"),new Xx("p.h_"),new Xx("s.i_"),new Xx("f.i_"),new Xx("a.b_"),new Xx("a.o_"),new Xx("g.o_"),new Xx("p.i_"),new Xx("p.m_"),new Xx("n.k_"),new Xx("i.f_"),new Xx("a.s_"),new Xx("m.c_"),new Xx("n.h_"),new Xx("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Yx(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Zh){var e=new jj;this.h=e.promise;D.ytAtRC&&Hj.Sa(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Zx(null);return h.yield(d.hb(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
Sx().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.hb(Zx(n))}),m.yield(wc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,fb:Qx(k),vm:g,bgChallenge:new fj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,fb:Qx(n),vm:g,bgChallenge:new fj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&$x(this,new Promise(function(f){En(function(){f(ay(d))},0)}))}
Yx.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Yx.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&$x(d,ay(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.fb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);wa(n,4);e=!0;if(S("attbs")&&!S("attmusi")){m=k.vm.ed({vb:l});n.A(6);break}return n.yield(k.vm.snapshot({vb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";xa(n,3);break;case 4:ya(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.fb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^Wx()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),by(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Zx(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function ay(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:c=Zx(oj().h);if(S("att_fet_ks"))return wa(v,7),v.yield(a.hb(c),9);wa(v,4);return v.yield(cy(a,c),6);case 6:g=v.i;e=g.Oe;f=g.Pe;d=g;xa(v,3);break;case 4:return ya(v),X(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),dy(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Qx(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");xa(v,3);break;case 7:h=ya(v);X(h);b++;if(b>=5)return X(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),dy(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){En(function(){x(ay(a,
b))},k)}));
case 3:l=Number(f.t)||7200;dy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Px(d.bgChallenge);wa(v,11);return v.yield(pj(oj(),n),13);case 13:xa(v,12);break;case 11:return p=ya(v),X(p),v.return({challenge:e,fb:f,vm:m,bgChallenge:n});case 12:return wa(v,14),m=new lj({challenge:n,zd:{Da:"aGIf"}}),v.yield(m.Zc,16);case 16:xa(v,10);break;case 14:t=ya(v),X(t),m=void 0;case 10:return v.return({challenge:e,fb:f,vm:m,bgChallenge:n})}})}
Yx.prototype.hb=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.hb(a));jx("att_pna");return d.return(new Promise(function(e){Mh(c,"publicytnetworkstatus-online",function(){b.network.hb(a).then(e)})}))})};
function ey(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Qx(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Oe:b,Pe:c})}
function cy(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.nd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){En(function(){l(void 0)},k.nd)}}(e)),5);
case 5:return wa(h,7),h.yield(a.hb(b),9);case 9:return f=h.i,h.return(ey(f));case 7:c=g=ya(h),g instanceof Error&&X(g);case 8:d++;e={nd:void 0};h.A(2);break;case 4:throw c;}})}
function $x(a,b){a.h=b}
function fy(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=ay(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function dy(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(fy(a),0):(En(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function by(a,b){return new Promise(function(c){En(function(){c(b())},a)})}
;function gy(a){this.h=a}
gy.prototype.hb=function(a){jx("att_fsr");return vx(this.h,a).then(function(b){jx("att_frr");return b})};function hy(){var a,b,c;return B(function(d){if(d.h==1)return a=Rs().resolve(xx),a?d.yield(qx(a),2):(X(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return X(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.yh;return d.return(c)}X(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function iy(){}
w(iy,pw);iy.prototype.j=function(){return fv};
iy.prototype.i=function(a){return qt(a,Pl)};
iy.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(iy.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jy(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var ky=D.caches,ly;function my(a){var b=a.indexOf(":");return b===-1?{Cd:a}:{Cd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ny(){return B(function(a){if(ly!==void 0)return a.return(ly);ly=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return wa(d,2),d.yield(ky.open("test-only"),4);case 4:return d.yield(ky.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(ly)})}
function oy(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(ny(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(ky.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=my(f),h=g.datasyncId,!h||a.includes(h)||b.push(ky.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function py(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(ny(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Cn("cache contains other");return h.yield(ky.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=my(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function qy(){try{return!!self.sessionStorage}catch(a){return!1}}
;function ry(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function sy(a){if(qy()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=ry(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function ty(){if(!qy())return!1;var a=Cn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=ry(c.value),c!==void 0&&c!==a)return!0;return!1}
;function uy(){hy().then(function(a){a&&(Ip(a),oy(a),Sv(a),sy(a))})}
function vy(){var a=new Pr;Hj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Cn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Ip(h);oy(h);Sv(h);sy(h);return g.return()}c=Tv();d=ty();return g.yield(py(),3);case 3:return e=g.i,g.yield(Jp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?uy():Mh(a,"publicytnetworkstatus-online",uy),g.h=0}})})}
;var wy=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function xy(){this.state=1;this.vm=null;this.h=void 0}
r=xy.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=wl(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=xl(a.interpreterSafeUrl).toString());yy(this,e,d,a.program,b,c)}else X(Error("BL:CIP"))};
function yy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,mv(c,function(){window[g]?zy(a,d,g,e):(a.state=3,ov(c),X(new T("BL:ULB",""+c)))},f)):b?(f=tg("SCRIPT"),b instanceof Gb?(f.textContent=Ib(b),Jb(f)):f.textContent=b,f.nonce=Fb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?zy(a,d,g,e):(a.state=4,X(new T("BL:ULBJ")))):X(new T("BL:ULV"))}
r.isLoading=function(){return this.state===2};
function zy(a,b,c,d){a.state=5;var e=!!a.h&&wy.includes(hc(a.h)||"");try{var f=new lj({program:b,globalName:c,zd:{disable:!S("att_web_record_metrics")||!S("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Zc.then(function(){a.state=6;d&&d(b)});
a.Yc(f)}catch(g){a.state=7,g instanceof Error&&X(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.jd()?this.Pd({vb:a}):null};
r.dispose=function(){this.Yc(null);this.state=8};
r.jd=function(){return!!this.vm};
r.Pd=function(a){return this.vm.ed(a)};
r.Yc=function(a){tc(this.vm);this.vm=a};function Ay(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function By(){xy.apply(this,arguments)}
w(By,xy);By.prototype.Yc=function(a){var b;(b=Ay())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ed.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
By.prototype.jd=function(){return!!Ay()};
By.prototype.Pd=function(a){return Ay().bgvmc(a)};var Cy=new Js("AUTH_SERVICE_TOKEN");function Dy(a){at.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.S},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.S},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Dy,at);Dy.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Dy.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Dy.prototype.S=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Dy.prototype.i=function(){this.h=new Map};function Ey(a){at.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.S},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.S},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.S},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ey,at);Ey.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ey.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ey.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Ey.prototype.S=function(a,b){a(b==null?void 0:b.event)};function Fy(){this.o=new Dy;this.u=new Ey}
Fy.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Gy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Gy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Au(c===void 0?0:c)){a=this.client;d=new tu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Nv(d,c);Jv.set(f,!0);Ov(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Mv({cttAuthInfo:Cu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Pv("visualElementGestured",f,d):a?$t("visualElementGestured",d,a,f):to("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Gy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new tu({trackingParams:a}),b,c===void 0?0:c)};
Gy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Au(d);a||(a=(a=xu(d===void 0?0:d))?new tu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Mv({cttAuthInfo:Cu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Pv("visualElementStateChanged",d,b):a?$t("visualElementStateChanged",b,a,d):to("visualElementStateChanged",b,d))}};
function Hy(a,b){if(b===void 0)for(var c=zu(),d=0;d<c.length;d++)c[d]!==void 0&&Hy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Lv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Iy(){Fy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||En(Jy)}
w(Iy,Fy);Iy.prototype.j=function(){to("finalPayload",{csn:Au()})};
Iy.prototype.h=function(){nu(ou)};
Iy.prototype.i=function(){var a=Hy;Gy.instance||(Gy.instance=new Gy);a(Gy.instance)};
function Jy(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=ae();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&to("genericClientExperimentEvent",{eventType:c});delete Zl.CLIENT_EXPERIMENT_EVENTS}}
;function Ky(){}
function Ly(){var a=F("ytglobal.storage_");a||(a=new Ky,E("ytglobal.storage_",a));return a}
Ky.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(My()):d.return()})};
function My(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",Ky);function ro(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
ro.prototype.Ha=function(a){this.handleError(a)};
ro.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ny(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ny(a,b){Ly().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Oy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Oy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Oy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Py={Ic:{feedbackEndpoint:kw(Cx),modifyChannelNotificationPreferenceEndpoint:kw(Dx),playlistEditEndpoint:kw(Ex),shareEntityEndpoint:kw(Bx),subscribeEndpoint:kw(yx),undoFeedbackEndpoint:kw(iy),unsubscribeEndpoint:kw(zx),webPlayerShareEntityServiceEndpoint:kw(Fx)}};function Qy(){var a=Rs();Ns(a,{ob:Nx,Fc:Lx});Ns(a,{ob:Cy,Fc:fn});var b=fw(),c=a.resolve(Cy),d=a.resolve(Nx),e={};b&&(e.client_location=b);px(Py,d,c,e);Ns(a,{ob:xx,hd:ox.instance})}
;var Ry={},Sy=(Ry["api.invalidparam"]=2,Ry.auth=150,Ry["drm.auth"]=150,Ry["heartbeat.net"]=150,Ry["heartbeat.servererror"]=150,Ry["heartbeat.stop"]=150,Ry["html5.unsupportedads"]=5,Ry["fmt.noneavailable"]=5,Ry["fmt.decode"]=5,Ry["fmt.unplayable"]=5,Ry["html5.missingapi"]=5,Ry["html5.unsupportedlive"]=5,Ry["drm.unavailable"]=5,Ry["mrm.blocked"]=151,Ry["embedder.identity.denied"]=152,Ry);var Ty=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Uy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Vy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Ty);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Wy(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Xy(a){H.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.M={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Yy(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())Zy(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.M[e]||e==="onReady"||
(c=$y(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.M[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Uy(e)){var f=d;if(Pa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Vy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Vy(g);break;case "loadPlaylist":case "cuePlaylist":g=Wy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Uy(e)&&az(b,Yy(b))}}}};
bz.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;cz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Sy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
cz(this,"onVideoProgress",this.jf.bind(this));cz(this,"onVolumeChange",this.kf.bind(this));cz(this,"onApiChange",this.bf.bind(this));cz(this,"onPlaybackQualityChange",this.ff.bind(this));cz(this,"onPlaybackRateChange",this.gf.bind(this));cz(this,"onStateChange",this.hf.bind(this));cz(this,"onWebglSettingsChanged",this.lf.bind(this));cz(this,"onCaptionsTrackListChanged",this.cf.bind(this));cz(this,"captionssettingschanged",this.df.bind(this))}
w(Xy,H);function az(a,b){a.sendMessage("infoDelivery",b)}
r=Xy.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Zy(this,a):this.D.push(a)};
function $y(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function cz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Yy(a){if(!a.api)return null;var b=a.api.getApiInterface();Xb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.hf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!S("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());az(this,a)};
r.ff=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());az(this,a)};
r.gf=function(a){az(this,{playbackRate:a})};
r.bf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.kf=function(){az(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.jf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());az(this,a)};
r.lf=function(){az(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.cf=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};az(this,a)}};
r.df=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};az(this,a)}};
function Zy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){X(d)}}}
r.ba=function(){H.prototype.ba.call(this);bz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var bz=window;function dz(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=ez(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=fz(g,f))&&gz(d,g,f))}}}}}};
hz.addEventListener("message",this.i);gz(this,"RECEIVING")}
w(dz,H);r=dz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.ef.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.ef=function(a,b){this.ea||gz(this,a,iz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function ez(a,b){switch(a){case "loadVideoById":return[Vy(b)];case "cueVideoById":return[Vy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Wy(b)];case "cuePlaylist":return[Wy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function fz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function iz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function gz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),jz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){hz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.ba.call(this)};
var hz=window,jz=window.parent;var kz=new By;function lz(){return kz.jd()}
function mz(a){a=a===void 0?{}:a;return kz.invoke(a)}
;function nz(a,b,c,d,e){H.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Kb=e;this.Qa=!1;this.api={};this.ma=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Ra=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.eb=NaN;this.M={};this.ha=0;this.i=this.o=a;vc(this,this.U);oz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(pz(this),qz(this))}
w(nz,H);r=nz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof bv||(b=new bv(b));this.config=b;this.setConfig(a);qz(this);this.isReady()&&rz(this)}};
function pz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Ra=a;this.config=sz(a);pz(this);if(!this.xa){var b;this.xa=tz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Bj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Bj(Number(a)||a))};
function rz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function uz(a){var b=!0,c=vz(a);c&&a.config&&(b=c.dataset.version===wz(a));return b&&!!F("yt.player.Application.create")}
function qz(a){if(!a.ea&&!a.Y){var b=uz(a);if(b&&(vz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||xz(a);else if(yz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),xz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=zz(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?sz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Kb);xz(a)};
a.Y=!0;b?a.G():(mv(wz(a),a.G),(b=Az(a))&&tv(b||""),Bz(a)&&!c&&E("yt.player.Application.create",null))}}}
function vz(a){var b=sg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function xz(a){if(!a.ea){var b=vz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!zz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Cz(a)}else a.eb=setTimeout(function(){xz(a)},50)}}
function Cz(a){oz(a);a.Qa=!0;var b=vz(a);if(b){a.u=Dz(a,b,"addEventListener");a.ma=Dz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Dz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);rz(a);a.xa&&a.xa(a.api);a.U.rb("onReady",a.api)}
function Dz(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function oz(a){a.Qa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.M)a.M.hasOwnProperty(c)&&clearTimeout(Number(c));a.M={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Qa};
r.addEventListener=function(a,b){var c=this,d=tz(this,b);d&&(Qb(this.Gc,a)>=0||this.h[a]||(b=Ez(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=tz(this,b))&&this.U.unsubscribe(a,b)};
function tz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Ez(a,b){function c(d){function e(){if(!a.ea)try{a.U.rb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.de});g.level="WARNING";throw g;}}
if(zz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.M,h=String(f);h in g&&delete g[h]},0);
jg(a.M,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(vz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function yz(a){a.cancel();oz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=vz(a);b&&(uz(a)||!Bz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&qv(wz(this),this.G);clearTimeout(this.eb);this.Y=!1};
r.ba=function(){yz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ra=this.config=this.api=null;delete this.o;delete this.i;H.prototype.ba.call(this)};
function Bz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function wz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Az(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function zz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function sz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?mg(e):e}return b}
;var Fz={},Gz="player_uid_"+(Math.random()*1E9>>>0);function Hz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?sg(c):c;var e=Gz+"_"+Qa(c),f=Fz[e];if(f&&d)return Iz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new nz(c,e,a,b,void 0);Fz[e]=f;f.addOnDisposeCallback(function(){delete Fz[f.getId()]});
return f.api}
function Iz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Jz=null,Kz=null;
function Lz(){kx();var a=rn(),b=un(119),c=window.devicePixelRatio>1;if(document.body&&Pj(document.body,"exp-invert-logo"))if(c&&!Pj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Pj(d,"inverted-hdpi")){var e=Nj(d);Oj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Pj(document.body,"inverted-hdpi")&&Qj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=vn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete on[b]:(c=d.toString(16),on[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in on)on.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(on[f])));var f=d.join("&");kn(b,f,63072E3,a.i,c)}}
function Mz(){Nz()}
function Oz(){fx("ep_init_pr");Nz()}
function Nz(){var a=Jz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Pz(){Jz&&Jz.sendAbandonmentPing&&Jz.sendAbandonmentPing();R("PL_ATT")&&kz.dispose();for(var a=Hj,b=0,c=Tx.length;b<c;b++)a.qa(Tx[b]);Tx.length=0;ov("//static.doubleclick.net/instream/ad_status.js");Ux=!1;$l("DCLKSTAT",0);uc(Kz);Jz&&(Jz.removeEventListener("onVideoDataChange",Mz),Jz.destroy())}
;fx("ep_init_eps");E("yt.setConfig",$l);E("yt.config.set",$l);E("yt.setMsg",lv);E("yt.msgs.set",lv);E("yt.logging.errors.log",iu);
E("writeEmbed",function(){fx("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Xv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=jy();if(!c.serializedForcedExperimentIds){var d=nm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?bx("watch",["pbs","pbu","pbp"]):a.args&&Ou(a.args)?bx("video_preview",["ol"]):bx("embed_no_video",["ep_init_pr"]);Jz=gb(Hz(a,c));Jz.addEventListener("onVideoDataChange",Mz);Jz.addEventListener("onReady",Oz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Kz=new Xy(Jz):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Kz=new dz(Jz,a,b));Vx();S("ytidb_create_logger_embed_killswitch")||qo();a={};Iy.h||(Iy.h=new Iy);Iy.h.install((a.flush_logs=
{callback:function(){Nt()}},a));
as();if(S("embeds_enable_separate_ITS")){Qy();var f=function(){return ox.instance}}else f=function(){var g,h;
if(!Ox){var k=Rs();Ns(k,{ob:Nx,Fc:Lx});var l={Ic:{feedbackEndpoint:kw(Cx),modifyChannelNotificationPreferenceEndpoint:kw(Dx),playlistEditEndpoint:kw(Ex),shareEntityEndpoint:kw(Bx),subscribeEndpoint:kw(yx),unsubscribeEndpoint:kw(zx),webPlayerShareEntityServiceEndpoint:kw(Fx)}},m=fw(),n={};m&&(n.client_location=m);g===void 0&&(g=gn());h===void 0&&(h=k.resolve(Nx));px(l,h,g,n);Ns(k,{ob:xx,hd:ox.instance});Ox=k.resolve(xx)}return Ox};
S("ytidb_clear_embedded_player")&&Hj.pa(function(){f();vy()});
S("enable_rta_manager")&&En(function(){var g=new gy(f());var h={preload:!S("enable_rta_npi")},k=!1;if(typeof h==="boolean")var l={preload:h};else typeof h==="undefined"?l={preload:!0}:(l=h,k=!!h.zh);h=k?void 0:new Pr;Yx.instance=new Yx(g,l,h);g=Yx.instance;l=g.i.bind(g);E("yt.aba.att",l);g=g.j.bind(g);E("yt.aba.att2",g)});
fx("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||lz);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||mz);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Wx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Wv);E("yt.util.activity.init",F("yt.util.activity.init")||qs);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||xs);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||rs);window.addEventListener("load",dm(function(){Lz()}));
window.addEventListener("pageshow",dm(function(a){a.persisted||Lz()}));
window.addEventListener("pagehide",dm(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Pz():a.persisted||Pz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=am("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.de)f||(f={}),f.componentStack=au(m)}f&&lu(e,f);g?iu(e):X(e)}};
xi=ju;window.addEventListener("unhandledrejection",function(a){ju(a.reason)});
Sb(R("ERRORS")||[],function(a){iu.apply(null,a)});
$l("ERRORS",[]);fx("ep_init_epe");}).call(this);

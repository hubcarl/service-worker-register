!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/public/",r(r.s="QlSq")}({QlSq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=t.hash||Date.now();this.options=n({},{scope:"/",manifestUrl:"/public/sw-mapping.json?t="+r},t)}return o(e,null,[{key:"register",value:function(t,r){return new e(r).register(t)}}]),o(e,[{key:"fetch",value:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,n({method:"GET",mode:"no-cors",cache:"default"},t))})},{key:"fetchServiceWorkerManifest",value:function(e){var t=this;return this.fetch(e||this.options.manifestUrl).then(function(e){return e.json()}).catch(function(e){return t.report({msg:"fetch manifest error:"+e.toString()}),null})}},{key:"getServiceWorkerUrl",value:function(e,t){e=/\.js/.test(e)?e:e+".js";var r=t.config&&t.config.prefix,n=r?r+"-"+e:e;return t[n]||n}},{key:"registerByManifest",value:function(e,t){if(t){var r=this.getServiceWorkerUrl(e,t);return navigator.serviceWorker.register(r,this.options)}}},{key:"isEnable",value:function(){return navigator.serviceWorker}},{key:"register",value:function(e){var t=this;if(this.isEnable())try{var r=SERVICE_WORKER_MANIFEST;this.registerByManifest(e,r)}catch(r){if(/is not defined/.test(r.toString()))return this.fetchServiceWorkerManifest().then(function(r){t.registerByManifest(e,r)})}else this.report({msg:"the browser is not support service worker"})}},{key:"report",value:function(e){var t=n({},{url:location.href,useAgent:navigator.userAgent.toString()},e);return this.options.report&&this.options.report(t)}}]),e}();t.default=i}})});
parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"stnw":[function(require,module,exports) {

},{}],"kK2Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=void 0,require("babel-polyfill");var e=r(require("./macOS.pug"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,r,t,n,u,i,o){try{var a=e[i](o),c=a.value}catch(s){return void t(s)}a.done?r(c):Promise.resolve(c).then(n,u)}function n(e){return function(){var r=this,n=arguments;return new Promise(function(u,i){var o=e.apply(r,n);function a(e){t(o,u,i,a,c,"next",e)}function c(e){t(o,u,i,a,c,"throw",e)}a(void 0)})}}require("./macOS.scss");var u=function(){return setTimeout(o),e.default};exports.render=u;var i=function(e){return new Promise(function(r){return setTimeout(r,e)})};function o(){return a.apply(this,arguments)}function a(){return(a=n(regeneratorRuntime.mark(function e(){var r,t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=document.querySelector(".progress-bar"),t=document.querySelector(".hint"),n=0;case 3:if(!(n<101)){e.next=11;break}return e.next=6,i(4e3*Math.random()+400);case 6:n+=.4,r.style.width="".concat(n,"%"),t.textContent=c(n),e.next=3;break;case 11:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function c(e){switch(!0){case e<3:return"About an hour remaining";case e<=5.2:return"Installation is in progress. Calculating time remaining...";case e<=6:return"About an hour remaining";default:var r=Math.ceil(2.5*(100-e)*2.4/60);return"About ".concat(r," minutes remaining")}}
},{"babel-polyfill":"JIy0","./macOS.pug":"gnrV","./macOS.scss":"stnw"}]},{},[], null)
//# sourceMappingURL=/fake-screen/macOS.4db2fdda.map
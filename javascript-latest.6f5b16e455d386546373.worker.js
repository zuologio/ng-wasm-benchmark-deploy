!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="uyL/")}({"uyL/":function(e,t){function r(e){return 0===e||1===e?e:r(e-1)+r(e-2)}function n(e){if(0===e)return 0;if(1===e)return 1;for(var t,r=0,n=1,o=2;o<=e;o++)t=n,n=r+n,r=t;return n}addEventListener("message",({data:e})=>{console.log("javascript-worker");let t=0,o=[];for(let a=0;a<e.iterations;a++){const u=(new Date).getTime();t=e.useRecursion?r(e.index):n(e.index),o.push((new Date).getTime().valueOf()-u.valueOf())}const u=o.reduce((e,t)=>e+t,0),i=Math.round(u/e.iterations*100)/100;postMessage({result:t,totalTime:u,averageTime:i})})}});
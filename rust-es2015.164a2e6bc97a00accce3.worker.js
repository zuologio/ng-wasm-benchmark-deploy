!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={0:1},r={},o={zrTV:function(){return{"./fibonacci_rust.js":{__wbg_new_59cb74e423758ede:function(){return n.UkaC.exports.__wbg_new_59cb74e423758ede()},__wbg_stack_558ba5917b466edd:function(e,t){return n.UkaC.exports.__wbg_stack_558ba5917b466edd(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return n.UkaC.exports.__wbg_error_4bb6c2a97407129a(e,t)},__wbindgen_object_drop_ref:function(e){return n.UkaC.exports.__wbindgen_object_drop_ref(e)}}}}};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[];return n.push(Promise.resolve().then(function(){t[e]||importScripts(i.p+""+({}[e]||e)+"-es2015."+{1:"e43650586d4dc8678c1a"}[e]+".worker.js")})),({1:["zrTV"]}[e]||[]).forEach(function(e){var t=r[e];if(t)n.push(t);else{var u,c=o[e](),a=fetch(i.p+""+{zrTV:"428f562ffc098c25828d"}[e]+".module.wasm");u=c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(a),c]).then(function(e){return WebAssembly.instantiate(e[0],e[1])}):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,c):a.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,c)}),n.push(r[e]=u.then(function(n){return i.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,(function(n){return e[n]}).bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.w={},i(i.s="h/on")}({"h/on":function(e,n,t){"use strict";t.r(n),addEventListener("message",({data:e})=>(function(e,n,t,r){return new(t||(t=Promise))(function(e,n){function o(e){try{u(r.next(e))}catch(t){n(t)}}function i(e){try{u(r.throw(e))}catch(t){n(t)}}function u(n){n.done?e(n.value):new t(function(e){e(n.value)}).then(o,i)}u((r=r.apply(void 0,[])).next())})})(0,0,void 0,function*(){console.log("rust-worker");const n=yield t.e(1).then(t.bind(null,"UkaC"));let r=0,o=[];for(let t=0;t<e.iterations;t++){const t=(new Date).getTime();r=e.useRecursion?n.fibonacci_with_recursion(e.index):n.fibonacci_with_loop(e.index),o.push((new Date).getTime().valueOf()-t.valueOf())}const i=o.reduce((e,n)=>e+n,0),u=Math.round(i/e.iterations*100)/100;postMessage({result:r,totalTime:i,averageTime:u})}))}});
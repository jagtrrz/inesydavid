(self.webpackChunkines_mesa_wedding=self.webpackChunkines_mesa_wedding||[]).push([[894],{8:function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(r)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0},7757:function(t,e,r){t.exports=r(5666)},512:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=r(7294),o=r(4737),a=(r(2025),r(6829));const i={width:"32rem",height:"32rem"},c={lat:41.37959,lng:-4.42772},u={lat:41.36527,lng:-4.53725},l={lat:41.39743,lng:-4.31429};function s(){const{isLoaded:t}=(0,a.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyASzZU6rd2DD18e7t99twJyXgHUKhQLLj8"}),[e,r]=n.useState(null),o=n.useCallback((function(t){new window.google.maps.LatLngBounds;r(t)}),[]),s=n.useCallback((function(t){r(null)}),[]);return t?n.createElement(a.b6,{mapContainerStyle:i,center:c,zoom:10,onUnmount:s},n.createElement(a.Jx,{onLoad:o,position:u,onClick:()=>{(()=>{const t=window.open("https://www.google.com/maps/search/?api=1&query=".concat(u.lat,",").concat(u.lng),"_blank","noopener,noreferrer");t&&(t.opener=nul)})()}}),n.createElement(a.Jx,{onLoad:o,position:l,onClick:()=>{(()=>{const t=window.open("https://www.google.com/maps/search/?api=1&query=".concat(l.lat,",").concat(l.lng),"_blank","noopener,noreferrer");t&&(t.opener=nul)})()}})):n.createElement(n.Fragment,null)}var f=n.memo(s);var h=t=>n.createElement(o.Z,{bodyClass:"page-home"},n.createElement("div",{className:"containerLugarCelebracion",id:"celebracion"},n.createElement("h2",null,"¿Dónde lo vamos a celebrar?"),n.createElement("div",{className:"containerMap"},n.createElement("div",{className:"map"},n.createElement(f,null)),n.createElement("div",{className:"pAndImage"},n.createElement("div",{className:"imageChurch"},n.createElement("div",{className:"background-image-church"}),n.createElement("div",{className:"background-image-castle"})),n.createElement("p",null,"La ceremonia religiosa tendrá lugar a las 18:30 en la ",n.createElement("strong",null,"Iglesia de Santa María de la Cuesta")," que se encuentra en la Plaza de la Cuesta, 6Z, 40200 Cuéllar, Segovia para continuar con la celebración en el ",n.createElement("strong",null,"Castillo de Íscar")," situado en la carretera del castilo en Íscar, 47420, Valladolid. En el mapa tenéis la dirección de ambos lugares por si necesitais usar el GPS.")))))},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function m(){}function g(){}function v(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(Z([])));E&&E!==r&&n.call(E,a)&&(b=E);var x=v.prototype=m.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function Z(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=v,u(x,"constructor",v),u(v,"constructor",g),g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=Z,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:Z(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},907:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:function(){return n}})},7326:function(t,e,r){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:function(){return n}})},5671:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,{Z:function(){return n}})},3144:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,{Z:function(){return o}})},1120:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,{Z:function(){return n}})},6775:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,{Z:function(){return o}})},2963:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(8),o=r(7326);function a(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}},4976:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3819:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(907);var o=r(181);function a(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(907);function o(t,e){if(t){if("string"==typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}}]);
//# sourceMappingURL=component---src-pages-lugar-celebracion-js-b8eb532a0e237c609ccc.js.map
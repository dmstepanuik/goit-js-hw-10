!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};function i(t,e,o,i,n,r,a){try{var s=t[r](a),l=s.value}catch(t){return void o(t)}s.done?e(l):Promise.resolve(l).then(i,n)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var a=t.apply(e,o);function s(t){i(a,n,r,s,l,"next",t)}function l(t){i(a,n,r,s,l,"throw",t)}s(void 0)}))}};var n={},r=function(t){"use strict";var e,o=Object.prototype,i=o.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,o){return t[e]=o}}function c(t,e,o,i){var n=e&&e.prototype instanceof x?e:x,r=Object.create(n.prototype),a=new z(i||[]);return r._invoke=function(t,e,o){var i=u;return function(n,r){if(i===p)throw new Error("Generator is already running");if(i===y){if("throw"===n)throw r;return T()}for(o.method=n,o.arg=r;;){var a=o.delegate;if(a){var s=C(a,o);if(s){if(s===d)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(i===u)throw i=y,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);i=p;var l=f(t,e,o);if("normal"===l.type){if(i=o.done?y:m,l.arg===d)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(i=y,o.method="throw",o.arg=l.arg)}}}(t,o,a),r}function f(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",m="suspendedYield",p="executing",y="completed",d={};function x(){}function h(){}function g(){}var b={};l(b,r,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(O([])));w&&w!==o&&i.call(w,r)&&(b=w);var k=g.prototype=x.prototype=Object.create(b);function N(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function o(n,r,a,s){var l=f(t[n],t,r);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?e.resolve(u.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}var n;this._invoke=function(t,i){function r(){return new e((function(e,n){o(t,i,e,n)}))}return n=n?n.then(r,r):r()}}function C(t,o){var i=t.iterator[o.method];if(i===e){if(o.delegate=null,"throw"===o.method){if(t.iterator.return&&(o.method="return",o.arg=e,C(t,o),"throw"===o.method))return d;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(i,t.iterator,o.arg);if("throw"===n.type)return o.method="throw",o.arg=n.arg,o.delegate=null,d;var r=n.arg;return r?r.done?(o[t.resultName]=r.value,o.next=t.nextLoc,"return"!==o.method&&(o.method="next",o.arg=e),o.delegate=null,d):r:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var o=t[r];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function o(){for(;++n<t.length;)if(i.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=e,o.done=!0,o};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return h.prototype=g,l(k,"constructor",g),l(g,"constructor",h),h.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},N(I.prototype),l(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(e,o,i,n,r){void 0===r&&(r=Promise);var a=new I(c(e,o,i,n),r);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(k),l(k,s,"Generator"),l(k,r,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var i=e.pop();if(i in t)return o.value=i,o.done=!1,o}return o.done=!0,o}},t.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var o in this)"t"===o.charAt(0)&&i.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function n(i,n){return s.type="throw",s.arg=t,o.next=i,n&&(o.method="next",o.arg=e),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),E(o),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var i=o.completion;if("throw"===i.type){var n=i.arg;E(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,o,i){return this.delegate={iterator:O(t),resultName:o,nextLoc:i},"next"===this.method&&(this.arg=e),d}},t}(n);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}var a,s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,m=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,d=p||y||Function("return this")(),x=Object.prototype.toString,h=Math.max,g=Math.min,b=function(){return d.Date.now()};function v(e){var o=void 0===e?"undefined":t(s)(e);return!!e&&("object"==o||"function"==o)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(s)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==x.call(e)}(e))return NaN;if(v(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=v(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var i=f.test(e);return i||u.test(e)?m(e.slice(2),i?2:8):c.test(e)?NaN:+e}a=function(t,e,o){var i,n,r,a,s,l,c=0,f=!1,u=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var o=i,r=n;return i=n=void 0,c=e,a=t.apply(r,o)}function y(t){return c=t,s=setTimeout(x,e),f?p(t):a}function d(t){var o=t-l;return void 0===l||o>=e||o<0||u&&t-c>=r}function x(){var t=b();if(d(t))return k(t);s=setTimeout(x,function(t){var o=e-(t-l);return u?g(o,r-(t-c)):o}(t))}function k(t){return s=void 0,m&&i?p(t):(i=n=void 0,a)}function N(){var t=b(),o=d(t);if(i=arguments,n=this,l=t,o){if(void 0===s)return y(l);if(u)return s=setTimeout(x,e),p(l)}return void 0===s&&(s=setTimeout(x,e)),a}return e=w(e)||0,v(o)&&(f=!!o.leading,r=(u="maxWait"in o)?h(w(o.maxWait)||0,e):r,m="trailing"in o?!!o.trailing:m),N.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=n=s=void 0},N.flush=function(){return void 0===s?a:k(b())},N};var k,N,I={};function C(t){return t.map((function(t){return e=t.name.official,"\n  <li>".concat(e,"</li>\n  ");var e})).join("")}function L(t){return console.log(t),"\n<div>country</div>\n  "}k=void 0!==e?e:"undefined"!=typeof window?window:I,N=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",r="Info",a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,m=function(s,f,m,y){if(!l("body"))return!1;e||p.Notify.init({});var d=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof y&&!Array.isArray(y)){var x={};"object"==typeof m?x=m:"object"==typeof y&&(x=y),e=c(!0,e,x)}var h,g,b=e[s.toLocaleLowerCase("en")];u++,"string"!=typeof f&&(f="Notiflix "+s),e.plainText&&(h=f,(g=t.document.createElement("div")).innerHTML=h,f=g.textContent||g.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var v=t.document.getElementById(a.wrapID)||t.document.createElement("div");if(v.id=a.wrapID,v.style.width=e.width,v.style.zIndex=e.zindex,v.style.opacity=e.opacity,"center-center"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.top=e.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===e.position?(v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.left="auto"):"left-top"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===e.position?(v.style.left=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=e.distance,v.style.top=e.distance,v.style.left="auto",v.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(a.overlayID)||t.document.createElement("div");w.id=a.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=b.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(a.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(a.wrapID)||t.document.body.appendChild(v);var k=t.document.createElement("div");k.id=e.ID+"-"+u,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"");else{var I="";s===o?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===r&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var C=t.document.getElementById(a.wrapID);C.insertBefore(k,C.firstChild)}else t.document.getElementById(a.wrapID).appendChild(k);var L=t.document.getElementById(k.id);if(L){var E,z,O=function(){L.classList.add("nx-remove");var e=t.document.getElementById(a.overlayID);e&&v.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(E)},T=function(){if(L&&null!==L.parentNode&&L.parentNode.removeChild(L),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var e=t.document.getElementById(a.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(z)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){O();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&L.addEventListener("click",(function(){"function"==typeof m&&m(),O();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var A=function(){E=setTimeout((function(){O()}),e.timeout),z=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};A(),e.pauseOnHover&&(L.addEventListener("mouseenter",(function(){L.classList.add("nx-paused"),clearTimeout(E),clearTimeout(z)})),L.addEventListener("mouseleave",(function(){L.classList.remove("nx-paused"),A()})))}}if(e.showOnlyTheLastOne&&u>0)for(var W=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+u+"])"),j=0;j<W.length;j++){var S=W[j];null!==S.parentNode&&S.parentNode.removeChild(S)}e=c(!0,e,d)},p={Notify:{init:function(o){e=c(!0,a,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){m(o,t,e,i)},failure:function(t,e,o){m(i,t,e,o)},warning:function(t,e,o){m(n,t,e,o)},info:function(t,e,o){m(r,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return N(k)})):"object"==typeof I?I=N(k):k.Notiflix=N(k);var E=document.querySelector("#search-box"),z=document.querySelector(".country-list"),O=document.querySelector(".country-info");function T(){return(T=t(o)(t(n).mark((function e(o){var i,r;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=o.target.value.toLowerCase().trim(),console.log(o.target.value),""!==i){t.next=4;break}return t.abrupt("return");case 4:return r=null,t.prev=5,t.next=8,W(i);case 8:r=t.sent,console.log(r),t.next=17;break;case 12:return t.prev=12,t.t0=t.catch(5),I.Notify.failure(t.t0.message),r=[],t.abrupt("return");case 17:if(!(r.length>10)){t.next=20;break}return I.Notify.info("Too many matches found. Please enter a more specific name."),t.abrupt("return");case 20:if(1!==r.length){t.next=24;break}return I.Notify.success("1"),A(O,L(r[0])),t.abrupt("return");case 24:I.Notify.success("Other"),A(z,C(r));case 26:case"end":return t.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function A(t,e){j(z),j(O),t.insertAdjacentHTML("beforeend",e)}function W(t){return fetch("".concat("https://restcountries.com/v3.1/name","/").concat(t,"?fields=capital,name,population,flags,languages")).then((function(t){if(console.log(1,t.ok,t),!t.ok)throw new Error("Oops, there is no country with that name");return t.json()}))}function j(t){for(;t.firstChild;)t.removeChild(t.firstChild)}E.addEventListener("input",t(a)((function(t){return T.apply(this,arguments)}),300))}();
//# sourceMappingURL=index.e1744f5b.js.map

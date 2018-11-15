!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NgwConnector=t():e.NgwConnector=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,s,u,a,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(o(n=this._events[e]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(i(n))for(u=Array.prototype.slice.call(arguments,1),s=(c=n.slice()).length,a=0;a<s;a++)c[a].apply(this,u);return!0},n.prototype.addListener=function(e,t){var s;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},n.prototype.removeListener=function(e,t){var n,o,s,u;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(n=this._events[e]).length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(u=s;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){o=u;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){(function(e,t){!function(){"use strict";function n(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}s(t.promise,r)}else(1===e._state?s:u)(t.promise,e._value)})):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void c(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,a(e)}catch(t){u(e,t)}}function u(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}var f=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},i.prototype.finally=n,i.all=function(e){return new i(function(t,n){function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var u=s.then;if("function"==typeof u)return void u.call(s,function(t){r(e,t)},n)}i[e]=s,0==--o&&t(i)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var o=i.length,s=0;i.length>s;s++)r(s,i[s])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){f(e,0)},i._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype.finally||(l.Promise.prototype.finally=n):l.Promise=i}()}).call(this,n(3).setImmediate,n(0))},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i=1,o={},s=!1,u=e.document,a=Object.getPrototypeOf&&Object.getPrototypeOf(e);a=a&&a.setTimeout?a:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){f(e.data)},r=function(t){e.port2.postMessage(t)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;r=function(t){var n=u.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():r=function(e){setTimeout(f,0,e)},a.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return o[i]=s,r(i),i++},a.clearImmediate=c}function c(e){delete o[e]}function f(e){if(s)setTimeout(f,0,e);else{var t=o[e];if(t){s=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{c(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(5))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=u(h);f=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(2);var r=/\{ *([\w_-]+) *\}/g;function i(e,t){return e.replace(r,function(e,n){var r=t[n];if(void 0===r)throw new Error("No value provided for letiable "+e);return"function"==typeof r&&(r=r(t)),r})}var o=n(1),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function u(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},c={route:"/api/component/pyramid/route"},f=function(){function e(e){this.options={},this.emitter=new o.EventEmitter,this._loadingQueue={},this._loadingStatus={},this.options=s({},c,e||{})}return e.prototype.connect=function(){return u(this,void 0,void 0,function(){var e,t,n,r=this;return a(this,function(i){switch(i.label){case 0:return this.route?[2,Promise.resolve(this.route)]:[3,1];case 1:return this.options.auth?(e=this.options.auth,t=e.login,n=e.password,t&&n?[4,this.getUserInfo()]:[3,3]):[3,3];case 2:i.sent(),i.label=3;case 3:return[4,this.makeQuery(this.options.route,{},{}).then(function(e){return r.route=e,e})];case 4:return[2,i.sent()]}})})},e.prototype.getUserInfo=function(){var e=this;return this.makeQuery("/api/component/auth/current_user",{},{headers:this.getAuthorizationHeaders(),withCredentials:!0}).then(function(t){return e.user=t,e.emitter.emit("login",t),t}).catch(function(t){throw e.emitter.emit("login:error",t),t})},e.prototype.getAuthorizationHeaders=function(){return{Authorization:"Basic "+this.makeClientId()}},e.prototype.makeClientId=function(){var e=this.options.auth,t=e.login,n=e.password;return window.btoa(unescape(encodeURIComponent(t+":"+n)))},e.prototype.request=function(e,t,n){var r=this;return this.connect().then(function(o){for(var s in o)if(o.hasOwnProperty(s)&&s===e){var u=o[s].slice(),a=u.shift();if(u.length){t=t||{};for(var c={},f=0;f<u.length;f++){var l=u[f];if(c[f]="{"+l+"}",void 0===t[l])throw new Error("`"+l+"` url api argument is not specified")}a=i(a,c)}return r.makeQuery(a,t,n)}})},e.prototype.post=function(e,t,n){return(t=t||{}).method="POST",t.nocache=!0,this.request(e,n,t)},e.prototype.makeQuery=function(e,t,n){var r=this;if(void 0===n&&(n={}),!(e=(this.options.baseUrl?this.options.baseUrl:"")+e))throw new Error("No `url` parameter set for option "+name);return t&&(e=i(e,t)),e=e.replace(/([^:]\/)\/+/g,"$1"),!this._loadingStatus[e]||n.nocache?(this._loadingStatus[e]=!0,this._getJson(e,n).then(function(t){return r._loadingStatus[e]=!1,r._executeLoadingQueue(e,t),t}).catch(function(t){throw r._loadingStatus[e]=!1,r._executeLoadingQueue(e,t,!0),r.emitter.emit("error",t),t})):(this._loadingStatus[e]=!1,new Promise(function(t,n){r._setLoadingQueue(e,t,n)}))},e.prototype._setLoadingQueue=function(e,t,n){this._loadingQueue[e]=this._loadingQueue[e]||{name:e,waiting:[]},this._loadingQueue[e].waiting.push({resolve:t,reject:n,timestamp:new Date})},e.prototype._executeLoadingQueue=function(e,t,n){var r=this._loadingQueue[e];if(r){for(var i=0;i<r.waiting.length;i++){var o=r.waiting[i];n?o.reject&&o.reject():o.resolve(t)}r.waiting=[]}},e.prototype._getJson=function(e,t){var n=this;return new Promise(function(r,i){n.user&&((t=t||{}).headers=n.getAuthorizationHeaders()),function(e,t,n,r){var i;void 0===n&&(n={}),n.method=n.method||"GET",(i=new XMLHttpRequest).open(n.method||"GET",e,!0);var o=function(e){void 0===e&&(e=!1);var n=e?r:t;if(i.responseText)try{n(JSON.parse(i.responseText))}catch(e){r({message:""})}else r({message:""})};i.onreadystatechange=function(){4===i.readyState&&200===i.status||3===i.readyState&&201===i.status?o():3===i.readyState&&400===i.status?o():4===i.readyState&&500===i.status&&o()},i.onerror=function(e){r(e)},i.upload.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;n.onProgress&&n.onProgress(t)}};var s,u=n.headers;if(u)for(var a in u)u.hasOwnProperty(a)&&i.setRequestHeader(a,u[a]);if(i.withCredentials=n.withCredentials,n.file){if((s=new FormData).append("file",n.file),n.data)for(var c in s)s.hasOwnProperty(c)&&s.append(c,s[c])}else s=n.data?JSON.stringify(n.data):null;i.send(s)}(e,r,t,i)})},e}();t.default=f}]).default});
//# sourceMappingURL=ngw-connector.js.map
webpackJsonp([1],{"/+Vy":function(t,e){},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,h=e.regeneratorRuntime;if(h)s&&(t.exports=h);else{(h=e.regeneratorRuntime=s?t.exports:{}).wrap=x;var f="suspendedStart",l="suspendedYield",d="executing",v="completed",p={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(G([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=_.prototype=b.prototype=Object.create(y);E.prototype=w.constructor=_,_.constructor=E,_[u]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[c]=function(){return this},h.AsyncIterator=O,h.async=function(t,e,r,n){var o=new O(x(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=G,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function x(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=L(t,e,r);if("normal"===u.type){if(n=r.done?v:l,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function E(){}function _(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=L(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("//Fk"),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){return function n(o,a){try{var c=e[o](a),u=c.value}catch(t){return void r(t)}if(!c.done)return i.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},xKAo:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),i=r("exGp"),a=r.n(i),c={data:function(){return{video:"",aCanvas:"",ctx:"",src:"",viWidth:"",viHeight:""}},mounted:function(){var t=this;this.video=document.getElementById("videoTest"),this.aCanvas=document.getElementById("canvas"),this.ctx=this.aCanvas.getContext("2d");var e=document.getElementById("camera");console.log(e.offsetWidth,e.offsetHeight);var r=e.offsetWidth,n=e.offsetHeight;navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{min:r,ideal:r,max:r},height:{min:n,ideal:n,max:n}},audio:!1}).then(function(e){t.video.srcObject=e,t.mediaStream=e,console.log("111",t.mediaStream),t.video.play()}).catch(function(t){console.log(t)})},methods:{uploadImg:function(){var t=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.ctx.drawImage(t.video,0,0,200,200),t.src=t.aCanvas.toDataURL("image/*"),t.src?t.$router.push({path:"/img",query:{src:t.src}}):t.$toast({message:"拍照失败"});case 3:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticStyle:{width:"100%",height:"calc(100vh - 100px)"},attrs:{id:"camera"}},[e("video",{staticStyle:{width:"100%",height:"auto",transform:"rotateY(180deg)"},attrs:{id:"videoTest",playsInline:!0}}),this._v(" "),e("canvas",{staticStyle:{display:"none"},attrs:{id:"canvas",width:"200",height:"200"}})]),this._v(" "),e("div",{staticClass:"footer"},[e("button",{staticClass:"submitButton",on:{click:this.uploadImg}})]),this._v(" "),e("div",{staticClass:"mb",attrs:{id:"mb"}})])},staticRenderFns:[]};var s=r("VU/8")(c,u,!1,function(t){r("/+Vy")},"data-v-3d646004",null);e.default=s.exports}});
//# sourceMappingURL=1.df25374bdbb89a92aab4.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+ar0":function(t,n,e){var r=e("P8UN");r(r.S+r.F*!e("QPJK"),"Object",{defineProperties:e("YmeT")})},"7toh":function(t,n,e){"use strict";var r=e("q1tI");n.a=function(){var t="object"==typeof window;function n(){return{width:t?window.innerWidth:void 0,height:t?window.innerHeight:void 0}}var e=Object(r.useState)(n),a=e[0],o=e[1];return Object(r.useEffect)((function(){if(!t)return!1;function e(){o(n())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}},I17o:function(t,n,e){"use strict";var r=e("P8UN"),a=e("pTxf"),o=e("CL53"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*i,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},cxuS:function(t,n,e){var r=e("P8UN"),a=e("ys0W")(!1);r(r.S,"Object",{values:function(t){return a(t)}})},gd4K:function(t,n,e){"use strict";var r=e("1Llc"),a=e("ap2Z");t.exports=function(t){var n=String(a(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},iwSo:function(t,n,e){},lizw:function(t,n,e){"use strict";var r=e("P8UN"),a=e("pTxf"),o=e("CL53"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*i,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},pTxf:function(t,n,e){var r=e("kiRH"),a=e("gd4K"),o=e("ap2Z");t.exports=function(t,n,e,i){var s=String(o(t)),c=s.length,l=void 0===e?" ":String(e),f=r(n);if(f<=c||""==l)return s;var u=f-c,d=a.call(l,Math.ceil(u/l.length));return d.length>u&&(d=d.slice(0,u)),i?d+s:s+d}},tf1e:function(t,n,e){"use strict";var r=e("q1tI"),a=e.n(r);e("cxuS"),e("Ll4R"),e("I17o"),e("lizw"),e("HQhv"),e("AqHK"),e("YbXK"),e("cFtU"),e("q8oJ"),e("C9fy"),e("m210"),e("MIFh"),e("sc67"),e("+ar0"),e("xtjI"),e("JHok"),e("OeI1"),e("4DPX"),e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi"),e("E5k/"),e("R48M");function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function l(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var e=[],r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u="styles_digit__3_I6o",d="styles_hinge__2iwrZ",m="styles_flap__1tzQn",p="styles_animated__eXIXQ",g="styles_top__1as09",_="styles_final__1af3r",b="styles_bottom__1CYW9";!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===e&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('@-webkit-keyframes styles_flapDownTop__1BWl_ {\n  from {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n\n  50%, to {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n}\n\n@keyframes styles_flapDownTop__1BWl_ {\n  from {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n\n  50%, to {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n}\n\n@-webkit-keyframes styles_flapDownBottom___KC9f {\n  from, 50% {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n\n  90% {\n    -webkit-transform: rotateX(20deg);\n            transform: rotateX(20deg)\n  }\n\n  80%, to {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n}\n\n@keyframes styles_flapDownBottom___KC9f {\n  from, 50% {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n\n  90% {\n    -webkit-transform: rotateX(20deg);\n            transform: rotateX(20deg)\n  }\n\n  80%, to {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n}\n\n.styles_digit__3_I6o {\n  color: white;\n  background-color: black;\n  position: relative;\n  display: inline-block;\n  box-sizing: content-box;\n  width: 1.1ch;\n  height: 1em;\n  font-family: sans-serif;\n  line-height: 1em;\n  text-align: center\n}\n\n.styles_digit__3_I6o[data-mode="words"] {\n    width: 100%;\n  }\n\n.styles_digit__3_I6o[data-mode="alpha"] {\n    width: 1.7ch;\n  }\n\n.styles_hinge__2iwrZ {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 3;\n  box-sizing: border-box;\n  height: 0.04em;\n  background-color: inherit;\n}\n\n.styles_flap__1tzQn {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  background-color: inherit;\n  background: inherit;\n  z-index: 1;\n  border-radius: inherit;\n  box-sizing: border-box\n}\n\n.styles_flap__1tzQn.styles_animated__eXIXQ {\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    z-index: 2;\n  }\n\n.styles_flap__1tzQn.styles_top__1as09 {\n    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 0, 0 0);\n            clip-path: polygon(0 50%, 100% 50%, 100% 0, 0 0)\n  }\n\n.styles_flap__1tzQn.styles_top__1as09.styles_animated__eXIXQ {\n      -webkit-transform: rotateX(50deg);\n              transform: rotateX(50deg);\n      opacity: 0.40;\n    }\n\n.styles_flap__1tzQn.styles_top__1as09.styles_animated__eXIXQ.styles_final__1af3r {\n      opacity: 1;\n      -webkit-animation-name: styles_flapDownTop__1BWl_;\n              animation-name: styles_flapDownTop__1BWl_;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n    }\n\n.styles_flap__1tzQn.styles_bottom__1CYW9 {\n    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);\n            clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%)\n  }\n\n.styles_flap__1tzQn.styles_bottom__1CYW9.styles_animated__eXIXQ.styles_final__1af3r {\n      -webkit-animation-name: styles_flapDownBottom___KC9f;\n              animation-name: styles_flapDownBottom___KC9f;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n    }\n');var h=function(t,n){return t(n={exports:{}},n.exports),n.exports}((function(t){!function(){var n={}.hasOwnProperty;function e(){for(var t=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)&&a.length){var i=e.apply(null,a);i&&t.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&t.push(s)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}()})),y=function(t){var n,e=t.bottom,r=t.animated,i=t.final,s=t.hinge,c=t.children,l=h(m,(o(n={},b,e),o(n,g,!e),o(n,p,r),o(n,_,i),n));return a.a.createElement("div",{className:l},c,s&&a.a.createElement("div",{className:d,"data-kind":"hinge"}))};y.defaultProps={bottom:!1,animated:!1,final:!1,hinge:!1};var v=function(t){t.className,t.css;var n=t.value,e=t.prevValue,r=t.final,o=t.mode,s=c(t,["className","css","value","prevValue","final","mode"]);return a.a.createElement("div",{className:u,"data-kind":"digit","data-mode":o},a.a.createElement(y,s,n),a.a.createElement(y,i({bottom:!0},s),e),a.a.createElement(y,i({key:"top-".concat(e),animated:!0,final:r},s),e),r&&a.a.createElement(y,i({key:"bottom-".concat(n),bottom:!0,animated:!0,final:!0},s),n))};v.defaultProps={value:"",prevValue:"",final:!1,mode:null};var w={current:-1,previous:-1,target:0},O=function(t){var n=t.stack,e=t.value,o=t.timing,s=c(t,["stack","value","timing"]),f=l(Object(r.useState)(w),2),u=f[0],d=f[1];Object(r.useEffect)((function(){d(w)}),[n]),Object(r.useEffect)((function(){var t=u.current,r=u.previous,a=Math.max(n.indexOf(e),0),i=function(){r=t,t>=n.length-1?t=0:t+=1,d({current:t,previous:r,target:a})};i();var s=setInterval((function(){t===a?clearInterval(s):i()}),o);return function(){return clearInterval(s)}}),[n,e]);var m=u.current,p=u.previous,g=u.target;return a.a.createElement(v,i({value:n[m],prevValue:n[p],final:m===g},s))},j=" 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",k="num",S="alpha",X="words",x=function(t){return String(t).split("").map((function(t){return t.toUpperCase()}))},E=function(t){var n=t.id,e=t.className,u=t.css,d=t.value,m=t.chars,p=t.words,g=t.length,_=t.padChar,b=t.padMode,h=t.render,y=c(t,["id","className","css","value","chars","words","length","padChar","padMode","render"]),v=l(Object(r.useState)([]),2),w=v[0],j=v[1],E=l(Object(r.useState)(k),2),P=E[0],I=E[1],z=l(Object(r.useState)([]),2),C=z[0],N=z[1],Q=l(Object(r.useState)([]),2),D=Q[0],B=Q[1];return Object(r.useEffect)((function(){p&&p.length?(j(p),I(X)):(j(x(m)),I(m.match(/[a-z]/i)?S:k))}),[m,p]),Object(r.useEffect)((function(){if(p&&p.length)N([d]);else{var t="auto"===b?!!d.match(/^[0-9.,+-]*$/):"start"===b;N(x(function(t,n,e,r){var a=t.slice(0,n);return r?String(a).padStart(n,e):String(a).padEnd(n,e)}(d,g,_,t)))}}),[d,m,p,g,_,b]),Object(r.useEffect)((function(){B(C.map((function(t,n){return a.a.createElement(O,i({key:n,stack:w,value:t,mode:P},y))})))}),[C].concat(f(Object.values(y)))),h?h(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({id:n,className:e,css:u},y,{children:D})):a.a.createElement("div",{id:n,className:e,css:u,"aria-hidden":"true","aria-label":d},D)};E.defaultProps={chars:" 0123456789",padChar:" ",timing:30,hinge:!0,padMode:"auto"};var P=e("7toh");e("iwSo"),n.a=function(){var t=["Uncommon","Scaling","Building","Uncommon","Growing","Hiring"],n=Object(r.useState)(0),e=n[0],o=n[1],i=Object(r.useState)(t[0]),s=(i[0],i[1],t[e]);Object(r.useEffect)((function(){var n=setInterval((function(){o((function(n){return n<t.length-1?n+1:0}))}),3250);return function(){return clearInterval(n)}}));var c=Object(P.a)(),l=Object(r.useState)(),f=l[0],u=l[1];return Object(r.useEffect)((function(){var t;c.width>=1025&&(t="XXXL"),c.width<=1024&&(t="XXL"),c.width<=425&&(t="L"),u(t),console.log("Size",t)}),[c.width]),a.a.createElement(E,{chars:j+",!+-_@$£%&*",length:8,value:s,className:"text-flip "+f,timing:0})}},uSBc:function(t,n,e){var r=e("chL8"),a=e("lHo0"),o=e("1a8y"),i=e("emib").Reflect;t.exports=i&&i.ownKeys||function(t){var n=r.f(o(t)),e=a.f;return e?n.concat(e(t)):n}},xtjI:function(t,n,e){var r=e("P8UN"),a=e("uSBc"),o=e("5SQf"),i=e("Drra"),s=e("Fgx0");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),c=i.f,l=a(r),f={},u=0;l.length>u;)void 0!==(e=c(r,n=l[u++]))&&s(f,n,e);return f}})},ys0W:function(t,n,e){var r=e("QPJK"),a=e("2mBY"),o=e("5SQf"),i=e("BnbX").f;t.exports=function(t){return function(n){for(var e,s=o(n),c=a(s),l=c.length,f=0,u=[];l>f;)e=c[f++],r&&!i.call(s,e)||u.push(t?[e,s[e]]:s[e]);return u}}}}]);
//# sourceMappingURL=6a8b72bb4320bf6e6b6b1ae3f431f14f26ded773-a60a62ee57fec2469061.js.map
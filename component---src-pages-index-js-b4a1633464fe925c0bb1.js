(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0sYV":function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=function(){return o.a.createElement("div",{className:"mainMenu"},o.a.createElement("div",{className:"image is-48x48"},o.a.createElement(i.Link,{to:"/"},o.a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{id:"logo"},o.a.createElement("path",{id:"what",fillRule:"evenodd",clipRule:"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM24.0571 40.0571C32.8937 40.0571 40.0571 32.8937 40.0571 24.0571C40.0571 15.2206 32.8937 8.05714 24.0571 8.05714C15.2206 8.05714 8.05714 15.2206 8.05714 24.0571C8.05714 32.8937 15.2206 40.0571 24.0571 40.0571Z",fill:"#BDBDBD"}),o.a.createElement("path",{id:"how",fillRule:"evenodd",clipRule:"evenodd",d:"M24.0571 40.0571C32.8937 40.0571 40.0571 32.8937 40.0571 24.0571C40.0571 15.2206 32.8937 8.05713 24.0571 8.05713C15.2206 8.05713 8.05713 15.2206 8.05713 24.0571C8.05713 32.8937 15.2206 40.0571 24.0571 40.0571ZM23.9428 31.9428C28.3611 31.9428 31.9428 28.3611 31.9428 23.9428C31.9428 19.5246 28.3611 15.9428 23.9428 15.9428C19.5246 15.9428 15.9428 19.5246 15.9428 23.9428C15.9428 28.3611 19.5246 31.9428 23.9428 31.9428Z",fill:"#D8D8D8"}),o.a.createElement("circle",{id:"why",cx:"23.9429",cy:"23.9429",r:"8",fill:"#F2F2F2"}))))),o.a.createElement("div",{className:" menuLabel"},o.a.createElement("h4",null,o.a.createElement(i.Link,{to:"/work/",id:"id-work"},"work"))),o.a.createElement("div",{className:" menuLabel"},o.a.createElement("h4",null,o.a.createElement(i.Link,{to:"/about/",id:"id-about"},"about"))))};e.a=function(t){var e=t.children,n=(t.isMenuAtBottom,t.sAddClass),r="layout ";return n&&(r+=n),o.a.createElement("div",{className:r},o.a.createElement(a,null),o.a.createElement("main",null,e),o.a.createElement("div",{className:"footer"},o.a.createElement("br",null),o.a.createElement("h3",null,"Get in touch —"),o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:sid11@uw.edu",target:"_blank",rel:"noreferrer"},o.a.createElement("span",{className:"link"},"Email"))),o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/patilsiddhant/",target:"_blank",rel:"noreferrer"},o.a.createElement("span",{className:"link"},"LinkedIn"))),o.a.createElement("p",null,o.a.createElement("a",{href:"https://twitter.com/sidomatic11",target:"_blank",rel:"noreferrer"},o.a.createElement("span",{className:"link"},"Twitter")))))}},IDIO:function(t,e,n){},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=(n("t+Ps"),n("Bl7J")),a=n("Wbzz"),s=n("17x9"),l=n.n(s),c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),u=new Uint8Array(16);function p(){if(!c)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(u)}for(var d=[],f=0;f<256;++f)d[f]=(f+256).toString(16).substr(1);var h=function(t,e){var n=e||0,r=d;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")};var b=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||p)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var i=0;i<16;++i)e[r+i]=o[i];return e||h(o)};function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var x={HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"},L=function(t,e){var n;"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{detail:e}):(n=document.createEvent("Event")).initEvent(t,!1,!0,e),window.dispatchEvent(n)};var _=function(t,e){var n=this.state.show,r=this.props.id,o=this.isCapture(e.currentTarget),i=e.currentTarget.getAttribute("currentItem");o||e.stopPropagation(),n&&"true"===i?t||this.hideTooltip(e):(e.currentTarget.setAttribute("currentItem","true"),O(e.currentTarget,this.getTargetArray(r)),this.showTooltip(e))},O=function(t,e){for(var n=0;n<e.length;n++)t!==e[n]?e[n].setAttribute("currentItem","false"):e[n].setAttribute("currentItem","true")},A={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,e,n){this.id in t?t[this.id][e]=n:Object.defineProperty(t,this.id,{configurable:!0,value:g({},e,n)})},get:function(t,e){var n=t[this.id];if(void 0!==n)return n[e]}};var S=function(t,e,n){var r=e.respectEffect,o=void 0!==r&&r,i=e.customEvent,a=void 0!==i&&i,s=this.props.id,l=n.target.getAttribute("data-tip")||null,c=n.target.getAttribute("data-for")||null,u=n.target;if(!this.isCustomEvent(u)||a){var p=null==s&&null==c||c===s;if(null!=l&&(!o||"float"===this.getEffect(u))&&p){var d=function(t){var e={};for(var n in t)"function"==typeof t[n]?e[n]=t[n].bind(t):e[n]=t[n];return e}(n);d.currentTarget=u,t(d)}}},R=function(t,e){var n={};return t.forEach((function(t){var r=t.getAttribute(e);r&&r.split(" ").forEach((function(t){return n[t]=!0}))})),n},P=function(){return document.getElementsByTagName("body")[0]};function B(t,e,n,r,o,i,a){for(var s=H(n),l=s.width,c=s.height,u=H(e),p=u.width,d=u.height,f=I(t,e,i),h=f.mouseX,b=f.mouseY,m=D(i,p,d,l,c),v=j(a),g=v.extraOffsetX,y=v.extraOffsetY,w=window.innerWidth,E=window.innerHeight,T=N(n),C=T.parentTop,k=T.parentLeft,x=function(t){var e=m[t].l;return h+e+g},L=function(t){var e=m[t].t;return b+e+y},_=function(t){return function(t){var e=m[t].r;return h+e+g}(t)>w},O=function(t){return function(t){var e=m[t].b;return b+e+y}(t)>E},A=function(t){return function(t){return x(t)<0}(t)||_(t)||function(t){return L(t)<0}(t)||O(t)},S=function(t){return!A(t)},R=["top","bottom","left","right"],P=[],B=0;B<4;B++){var M=R[B];S(M)&&P.push(M)}var W,z=!1,U=o!==r;return S(o)&&U?(z=!0,W=o):P.length>0&&A(o)&&A(r)&&(z=!0,W=P[0]),z?{isNewState:!0,newState:{place:W}}:{isNewState:!1,position:{left:parseInt(x(r)-k,10),top:parseInt(L(r)-C,10)}}}var H=function(t){var e=t.getBoundingClientRect(),n=e.height,r=e.width;return{height:parseInt(n,10),width:parseInt(r,10)}},I=function(t,e,n){var r=e.getBoundingClientRect(),o=r.top,i=r.left,a=H(e),s=a.width,l=a.height;return"float"===n?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:i+s/2,mouseY:o+l/2}},D=function(t,e,n,r,o){var i,a,s,l;return"float"===t?(i={l:-r/2,r:r/2,t:-(o+3+2),b:-3},s={l:-r/2,r:r/2,t:15,b:o+3+2+12},l={l:-(r+3+2),r:-3,t:-o/2,b:o/2},a={l:3,r:r+3+2,t:-o/2,b:o/2}):"solid"===t&&(i={l:-r/2,r:r/2,t:-(n/2+o+2),b:-n/2},s={l:-r/2,r:r/2,t:n/2,b:n/2+o+2},l={l:-(r+e/2+2),r:-e/2,t:-o/2,b:o/2},a={l:e/2,r:r+e/2+2,t:-o/2,b:o/2}),{top:i,bottom:s,left:l,right:a}},j=function(t){var e=0,n=0;for(var r in"[object String]"===Object.prototype.toString.apply(t)&&(t=JSON.parse(t.toString().replace(/'/g,'"'))),t)"top"===r?n-=parseInt(t[r],10):"bottom"===r?n+=parseInt(t[r],10):"left"===r?e-=parseInt(t[r],10):"right"===r&&(e+=parseInt(t[r],10));return{extraOffsetX:e,extraOffsetY:n}},N=function(t){for(var e=t;e&&"none"===window.getComputedStyle(e).getPropertyValue("transform");)e=e.parentElement;return{parentTop:e&&e.getBoundingClientRect().top||0,parentLeft:e&&e.getBoundingClientRect().left||0}};function M(t,e,n,r){if(e)return e;if(null!=n)return n;if(null===n)return null;var i=/<br\s*\/?>/;return r&&"false"!==r&&i.test(t)?t.split(i).map((function(t,e){return o.a.createElement("span",{key:e,className:"multi-line"},t)})):t}function W(t){var e={};return Object.keys(t).filter((function(t){return/(^aria-\w+$|^role$)/.test(t)})).forEach((function(n){e[n]=t[n]})),e}function z(t){var e=t.length;return t.hasOwnProperty?Array.prototype.slice.call(t):new Array(e).fill().map((function(e){return t[e]}))}!function(t){if(t&&"undefined"!=typeof window){var e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e)}}('.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}');var U,F,V,X={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function Y(t,e,n,r){return function(t,e){var n=e.text,r=e.background,o=e.border,i=e.arrow;return"\n  \t.".concat(t," {\n\t    color: ").concat(n,";\n\t    background: ").concat(r,";\n\t    border: 1px solid ").concat(o,";\n  \t}\n\n  \t.").concat(t,".place-top {\n        margin-top: -10px;\n    }\n    .").concat(t,".place-top::before {\n        border-top: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(i,";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(t,".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(t,".place-bottom::before {\n        border-bottom: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(i,";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(t,".place-left {\n        margin-left: -10px;\n    }\n    .").concat(t,".place-left::before {\n        border-left: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(i,";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(t,".place-right {\n        margin-left: 10px;\n    }\n    .").concat(t,".place-right::before {\n        border-right: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(i,";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ")}(t,function(t,e,n){var r=t.text,o=t.background,i=t.border,a=t.arrow?t.arrow:t.background,s=function(t){return X[t]?E({},X[t]):void 0}(e);r&&(s.text=r);o&&(s.background=o);n&&(s.border=i||("light"===e?"black":"white"));a&&(s.arrow=a);return s}(e,n,r))}var J,q=function(t){t.hide=function(t){L(x.HIDE,{target:t})},t.rebuild=function(){L(x.REBUILD)},t.show=function(t){L(x.SHOW,{target:t})},t.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},t.prototype.globalShow=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.showTooltip({currentTarget:e&&t.detail.target},!0)}},t.prototype.globalHide=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.hideTooltip({currentTarget:e&&t.detail.target},e)}}}(U=function(t){t.prototype.bindWindowEvents=function(t){window.removeEventListener(x.HIDE,this.globalHide),window.addEventListener(x.HIDE,this.globalHide,!1),window.removeEventListener(x.REBUILD,this.globalRebuild),window.addEventListener(x.REBUILD,this.globalRebuild,!1),window.removeEventListener(x.SHOW,this.globalShow),window.addEventListener(x.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},t.prototype.unbindWindowEvents=function(){window.removeEventListener(x.HIDE,this.globalHide),window.removeEventListener(x.REBUILD,this.globalRebuild),window.removeEventListener(x.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},t.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}(U=function(t){t.prototype.isCustomEvent=function(t){return this.state.event||!!t.getAttribute("data-event")},t.prototype.customBindListener=function(t){var e=this,n=this.state,r=n.event,o=n.eventOff,i=t.getAttribute("data-event")||r,a=t.getAttribute("data-event-off")||o;i.split(" ").forEach((function(n){t.removeEventListener(n,A.get(t,n));var r=_.bind(e,a);A.set(t,n,r),t.addEventListener(n,r,!1)})),a&&a.split(" ").forEach((function(n){t.removeEventListener(n,e.hideTooltip),t.addEventListener(n,e.hideTooltip,!1)}))},t.prototype.customUnbindListener=function(t){var e=this.state,n=e.event,r=e.eventOff,o=n||t.getAttribute("data-event"),i=r||t.getAttribute("data-event-off");t.removeEventListener(o,A.get(t,n)),i&&t.removeEventListener(i,this.hideTooltip)}}(U=function(t){t.prototype.isCapture=function(t){return t&&"true"===t.getAttribute("data-iscapture")||this.props.isCapture||!1}}(U=function(t){t.prototype.getEffect=function(t){return t.getAttribute("data-effect")||this.props.effect||"float"}}(U=function(t){t.prototype.isBodyMode=function(){return!!this.props.bodyMode},t.prototype.bindBodyListener=function(t){var e=this,n=this.state,r=n.event,o=n.eventOff,i=n.possibleCustomEvents,a=n.possibleCustomEventsOff,s=P(),l=R(t,"data-event"),c=R(t,"data-event-off");null!=r&&(l[r]=!0),null!=o&&(c[o]=!0),i.split(" ").forEach((function(t){return l[t]=!0})),a.split(" ").forEach((function(t){return c[t]=!0})),this.unbindBodyListener(s);var u=this.bodyModeListeners={};for(var p in null==r&&(u.mouseover=S.bind(this,this.showTooltip,{}),u.mousemove=S.bind(this,this.updateTooltip,{respectEffect:!0}),u.mouseout=S.bind(this,this.hideTooltip,{})),l)u[p]=S.bind(this,(function(t){var n=t.currentTarget.getAttribute("data-event-off")||o;_.call(e,n,t)}),{customEvent:!0});for(var d in c)u[d]=S.bind(this,this.hideTooltip,{customEvent:!0});for(var f in u)s.addEventListener(f,u[f])},t.prototype.unbindBodyListener=function(t){t=t||P();var e=this.bodyModeListeners;for(var n in e)t.removeEventListener(n,e[n])}}((V=F=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=k(this,T(e).call(this,t))).state={uuid:t.uuid||"t"+b(),place:t.place||"top",desiredPlace:t.place||"top",type:"dark",effect:"float",show:!1,border:!1,customColors:{},offset:{},extraClass:"",html:!1,delayHide:0,delayShow:0,event:t.event||null,eventOff:t.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:W(t),isEmptyTip:!1,disable:!1,possibleCustomEvents:t.possibleCustomEvents||"",possibleCustomEventsOff:t.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},n.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),n.mount=!0,n.delayShowLoop=null,n.delayHideLoop=null,n.delayReshow=null,n.intervalUpdateContent=null,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,t),v(e,null,[{key:"propTypes",get:function(){return{uuid:l.a.string,children:l.a.any,place:l.a.string,type:l.a.string,effect:l.a.string,offset:l.a.object,multiline:l.a.bool,border:l.a.bool,textColor:l.a.string,backgroundColor:l.a.string,borderColor:l.a.string,arrowColor:l.a.string,insecure:l.a.bool,class:l.a.string,className:l.a.string,id:l.a.string,html:l.a.bool,delayHide:l.a.number,delayUpdate:l.a.number,delayShow:l.a.number,event:l.a.string,eventOff:l.a.string,isCapture:l.a.bool,globalEventOff:l.a.string,getContent:l.a.any,afterShow:l.a.func,afterHide:l.a.func,overridePosition:l.a.func,disable:l.a.bool,scrollHide:l.a.bool,resizeHide:l.a.bool,wrapper:l.a.string,bodyMode:l.a.bool,possibleCustomEvents:l.a.string,possibleCustomEventsOff:l.a.string,clickable:l.a.bool}}}]),v(e,[{key:"bind",value:function(t){var e=this;t.forEach((function(t){e[t]=e[t].bind(e)}))}},{key:"componentDidMount",value:function(){var t=this.props,e=(t.insecure,t.resizeHide);this.bindListener(),this.bindWindowEvents(e)}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"mouseOnToolTip",value:function(){return!(!this.state.show||!this.tooltipRef)&&(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover"))}},{key:"getTargetArray",value:function(t){var e,n=[];if(t){var r=t.replace(/\\/g,"\\\\").replace(/"/g,'\\"');e='[data-tip][data-for="'.concat(r,'"]')}else e="[data-tip]:not([data-for])";return z(document.getElementsByTagName("*")).filter((function(t){return t.shadowRoot})).forEach((function(t){n=n.concat(z(t.shadowRoot.querySelectorAll(e)))})),n.concat(z(document.querySelectorAll(e)))}},{key:"bindListener",value:function(){var t=this,e=this.props,n=e.id,r=e.globalEventOff,o=e.isCapture,i=this.getTargetArray(n);i.forEach((function(e){null===e.getAttribute("currentItem")&&e.setAttribute("currentItem","false"),t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),this.isBodyMode()?this.bindBodyListener(i):i.forEach((function(e){var n=t.isCapture(e),r=t.getEffect(e);t.isCustomEvent(e)?t.customBindListener(e):(e.addEventListener("mouseenter",t.showTooltip,n),"float"===r&&e.addEventListener("mousemove",t.updateTooltip,n),e.addEventListener("mouseleave",t.hideTooltip,n))})),r&&(window.removeEventListener(r,this.hideTooltip),window.addEventListener(r,this.hideTooltip,o)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var t=this,e=this.props,n=e.id,r=e.globalEventOff;this.isBodyMode()?this.unbindBodyListener():this.getTargetArray(n).forEach((function(e){t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),r&&window.removeEventListener(r,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(t){var e=this.isCapture(t);t.removeEventListener("mouseenter",this.showTooltip,e),t.removeEventListener("mousemove",this.updateTooltip,e),t.removeEventListener("mouseleave",this.hideTooltip,e)}},{key:"getTooltipContent",value:function(){var t,e=this.props,n=e.getContent,r=e.children;return n&&(t=Array.isArray(n)?n[0]&&n[0](this.state.originTooltip):n(this.state.originTooltip)),M(this.state.originTooltip,r,t,this.state.isMultiline)}},{key:"isEmptyTip",value:function(t){return"string"==typeof t&&""===t||null===t}},{key:"showTooltip",value:function(t,e){if(!e||this.getTargetArray(this.props.id).some((function(e){return e===t.currentTarget}))){var n=this.props,r=n.multiline,o=n.getContent,i=t.currentTarget.getAttribute("data-tip"),a=t.currentTarget.getAttribute("data-multiline")||r||!1,s=t instanceof window.FocusEvent||e,l=!0;t.currentTarget.getAttribute("data-scroll-hide")?l="true"===t.currentTarget.getAttribute("data-scroll-hide"):null!=this.props.scrollHide&&(l=this.props.scrollHide);var c=t.currentTarget.getAttribute("data-place")||this.props.place||"top",u=s?"solid":this.getEffect(t.currentTarget),p=t.currentTarget.getAttribute("data-offset")||this.props.offset||{},d=B(t,t.currentTarget,this.tooltipRef,c,c,u,p);d.position&&this.props.overridePosition&&(d.position=this.props.overridePosition(d.position,t,t.currentTarget,this.tooltipRef,c,c,u,p));var f=d.isNewState?d.newState.place:c;this.clearTimer();var h=t.currentTarget,b=this.state.show?h.getAttribute("data-delay-update")||this.props.delayUpdate:0,m=this,v=function(){m.setState({originTooltip:i,isMultiline:a,desiredPlace:c,place:f,type:h.getAttribute("data-type")||m.props.type||"dark",customColors:{text:h.getAttribute("data-text-color")||m.props.textColor||null,background:h.getAttribute("data-background-color")||m.props.backgroundColor||null,border:h.getAttribute("data-border-color")||m.props.borderColor||null,arrow:h.getAttribute("data-arrow-color")||m.props.arrowColor||null},effect:u,offset:p,html:(h.getAttribute("data-html")?"true"===h.getAttribute("data-html"):m.props.html)||!1,delayShow:h.getAttribute("data-delay-show")||m.props.delayShow||0,delayHide:h.getAttribute("data-delay-hide")||m.props.delayHide||0,delayUpdate:h.getAttribute("data-delay-update")||m.props.delayUpdate||0,border:(h.getAttribute("data-border")?"true"===h.getAttribute("data-border"):m.props.border)||!1,extraClass:h.getAttribute("data-class")||m.props.class||m.props.className||"",disable:(h.getAttribute("data-tip-disable")?"true"===h.getAttribute("data-tip-disable"):m.props.disable)||!1,currentTarget:h},(function(){l&&m.addScrollListener(m.state.currentTarget),m.updateTooltip(t),o&&Array.isArray(o)&&(m.intervalUpdateContent=setInterval((function(){if(m.mount){var t=m.props.getContent,e=M(i,"",t[0](),a),n=m.isEmptyTip(e);m.setState({isEmptyTip:n}),m.updatePosition()}}),o[1]))}))};b?this.delayReshow=setTimeout(v,b):v()}}},{key:"updateTooltip",value:function(t){var e=this,n=this.state,r=n.delayShow,o=n.disable,i=this.props.afterShow,a=this.getTooltipContent(),s=parseInt(r,10),l=t.currentTarget||t.target;if(!this.mouseOnToolTip()&&!this.isEmptyTip(a)&&!o){var c=function(){if(Array.isArray(a)&&a.length>0||a){var n=!e.state.show;e.setState({currentEvent:t,currentTarget:l,show:!0},(function(){e.updatePosition(),n&&i&&i(t)}))}};clearTimeout(this.delayShowLoop),r?this.delayShowLoop=setTimeout(c,s):c()}}},{key:"listenForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isScroll:!1},o=this.state.disable,i=r.isScroll,a=i?0:this.state.delayHide,s=this.props.afterHide,l=this.getTooltipContent();if(this.mount&&!this.isEmptyTip(l)&&!o){if(e){var c=this.getTargetArray(this.props.id),u=c.some((function(e){return e===t.currentTarget}));if(!u||!this.state.show)return}var p=function(){var e=n.state.show;n.mouseOnToolTip()?n.listenForTooltipExit():(n.removeListenerForTooltipExit(),n.setState({show:!1},(function(){n.removeScrollListener(n.state.currentTarget),e&&s&&s(t)})))};this.clearTimer(),a?this.delayHideLoop=setTimeout(p,parseInt(a,10)):p()}}},{key:"hideTooltipOnScroll",value:function(t,e){this.hideTooltip(t,e,{isScroll:!0})}},{key:"addScrollListener",value:function(t){var e=this.isCapture(t);window.addEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"removeScrollListener",value:function(t){var e=this.isCapture(t);window.removeEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"updatePosition",value:function(){var t=this,e=this.state,n=e.currentEvent,r=e.currentTarget,o=e.place,i=e.desiredPlace,a=e.effect,s=e.offset,l=this.tooltipRef,c=B(n,r,l,o,i,a,s);if(c.position&&this.props.overridePosition&&(c.position=this.props.overridePosition(c.position,n,r,l,o,i,a,s)),c.isNewState)return this.setState(c.newState,(function(){t.updatePosition()}));l.style.left=c.position.left+"px",l.style.top=c.position.top+"px"}},{key:"clearTimer",value:function(){clearTimeout(this.delayShowLoop),clearTimeout(this.delayHideLoop),clearTimeout(this.delayReshow),clearInterval(this.intervalUpdateContent)}},{key:"hasCustomColors",value:function(){var t=this;return Boolean(Object.keys(this.state.customColors).find((function(e){return"border"!==e&&t.state.customColors[e]}))||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var t=this,n=this.state,r=n.extraClass,i=n.html,a=n.ariaProps,s=n.disable,l=this.getTooltipContent(),c=this.isEmptyTip(l),u=Y(this.state.uuid,this.state.customColors,this.state.type,this.state.border),p="__react_component_tooltip"+" ".concat(this.state.uuid)+(!this.state.show||s||c?"":" show")+(this.state.border?" border":"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),d=this.props.wrapper;e.supportedWrappers.indexOf(d)<0&&(d=e.defaultProps.wrapper);var f=[p,r].filter(Boolean).join(" ");if(i){var h="".concat(l,"\n<style>").concat(u,"</style>");return o.a.createElement(d,y({className:"".concat(f),id:this.props.id,ref:function(e){return t.tooltipRef=e}},a,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:h}}))}return o.a.createElement(d,y({className:"".concat(f),id:this.props.id},a,{ref:function(e){return t.tooltipRef=e},"data-id":"tooltip"}),o.a.createElement("style",{dangerouslySetInnerHTML:{__html:u}}),l)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=e.ariaProps,r=W(t);return Object.keys(r).some((function(t){return r[t]!==n[t]}))?E({},e,{ariaProps:r}):null}}]),e}(o.a.Component),g(F,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),g(F,"supportedWrappers",["div","span"]),g(F,"displayName","ReactTooltip"),(J=U=V).prototype.bindRemovalTracker=function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(null!=e){var n=new e((function(e){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.removedNodes.length;o++)if(r.removedNodes[o]===t.state.currentTarget)return void t.hideTooltip()}));n.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=n}},U=void(J.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)})||U))||U)||U)||U)||U)||U)||U;n("0sYV"),n("IDIO");e.default=function(){var t=Object(r.useState)(!1),e=t[0],n=t[1];return Object(r.useEffect)((function(){n(!0)}),[]),o.a.createElement(i.a,{isMenuAtBottom:!0,sAddClass:"homePage"},o.a.createElement("div",{className:"headline"},"Siddhant is a"," ",o.a.createElement("b",{className:"dark crossDisciplinary","data-tip":!0,"data-for":"crossDisciplinaryDesigner"},"cross-disciplinary designer"),". He cares deeply about making things as"," ",o.a.createElement("i",{className:"dark"},"efficient")," as possible."),e?o.a.createElement(q,{id:"crossDisciplinaryDesigner",effect:"solid"},o.a.createElement("div",{className:"crossDisciplinaryTooltip"},o.a.createElement("p",null,"A UX ",o.a.createElement("b",null,"designer")," who also wears the hats of an"," ",o.a.createElement("b",null,"engineer"),", a ",o.a.createElement("b",null,"researcher")," and an ",o.a.createElement("b",null,"artist")," depending on what the situation calls for."," "),o.a.createElement("p",null,"He works best in ",o.a.createElement("i",null,"dynamic")," environments."))):null,o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("span",{className:"link"},o.a.createElement(a.Link,{to:"/work/"},"see his work →"))),o.a.createElement("div",{className:"space-l"}))}},"t+Ps":function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-b4a1633464fe925c0bb1.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},Br1v:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("PHNs"),o=n.n(i),s=n("33Fu"),u=n("X13+"),c=n("ma3e");t.a=function(){return r.a.createElement("section",{className:"counter counter-style-2 bg-red bg-1 bg-overlay-black-70 page-section-ptb"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-6 item"},r.a.createElement("div",{className:"counter-block text-left"},r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"info"},r.a.createElement("h6",{className:"text-white"},"Repuestos en stock"),r.a.createElement(s.a,null),r.a.createElement(o.a,{end:5e3,duration:40,className:"timer text-white"})))),r.a.createElement("div",{className:"col-lg-4 col-md-6 item"},r.a.createElement("div",{className:"counter-block text-left"},r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"info"},r.a.createElement("h6",{className:"text-white"},"Proveedores activos"),r.a.createElement(u.a,null),r.a.createElement(o.a,{end:861,duration:35,className:"timer text-white"})))),r.a.createElement("div",{className:"col-lg-4 col-md-6 item"},r.a.createElement("div",{className:"counter-block text-left"},r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"info"},r.a.createElement("h6",{className:"text-white"},"Clientes felices"),r.a.createElement(c.j,null),r.a.createElement(o.a,{end:789,duration:35,className:"timer text-white"})))))))}},GiOn:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function o(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,o,u=e<0;if(e=Math.abs(e).toFixed(s.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(r=s.options.separator+r),r=n[o-i-1]+r;n=r}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),(u?"-":"")+s.options.prefix+n+a+s.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in s.options)i.hasOwnProperty(u)&&null!==i[u]&&(s.options[u]=i[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,l=["webkit","moz","ms","o"],m=0;m<l.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[l[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[m]+"CancelAnimationFrame"]||window[l[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout((function(){e(n+a)}),a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,a||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(r)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!o(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},J4ov:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz");t.a=function(e){var t=e.sectionTitle;return r.a.createElement("section",{className:"inner-intro bg-1 bg-overlay-black-70"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-center intro-title"},r.a.createElement("div",{className:"col-sm-6 text-md-left d-inline-block"},r.a.createElement("h1",{className:"text-white"},t)),r.a.createElement("div",{className:"col-sm-6 text-md-right float-right"},r.a.createElement("ul",{className:"page-breadcrumb"},r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},r.a.createElement("i",{className:"fa fa-home"})," Inicio /")," ",r.a.createElement("i",{className:"fa fa-angle-double-right"})),r.a.createElement("li",null,r.a.createElement("span",null,t)," "))))))}},PHNs:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("17x9")),i=n("q1tI"),o=a(i),s=a(n("2W6z")),u=a(n("GiOn"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?v(e):t}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,i=t.easingFn,o=t.end,s=t.formattingFn,c=t.prefix,l=t.separator,m=t.start,f=t.suffix,p=t.useEasing;return new u(e,m,o,a,r,{decimal:n,easingFn:i,formattingFn:s,separator:l,prefix:c,suffix:f,useEasing:p,useGrouping:!!l})},w=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return m(v(n=b(this,(e=p(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"==typeof n.props.children&&s(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),g(n.containerRef.current,n.props)})),m(v(n),"pauseResume",(function(){var e=v(n),t=e.reset,a=e.restart,r=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:a,update:r})})),m(v(n),"reset",(function(){var e=v(n),t=e.pauseResume,a=e.restart,r=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:a,update:r})})),m(v(n),"restart",(function(){n.reset(),n.start()})),m(v(n),"start",(function(){var e=v(n),t=e.pauseResume,a=e.reset,r=e.restart,i=e.update,o=n.props,s=o.delay,u=o.onEnd,c=o.onStart,l=function(){return n.instance.start((function(){return u({pauseResume:t,reset:a,start:r,update:i})}))};s>0?n.timeoutId=setTimeout(l,1e3*s):l(),c({pauseResume:t,reset:a,update:i})})),m(v(n),"update",(function(e){var t=v(n),a=t.pauseResume,r=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:r,start:i})})),m(v(n),"containerRef",o.createRef()),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,o=t.redraw,s=t.duration,u=t.separator,c=t.decimals,l=t.decimal;return s!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||i!==e.prefix||u!==e.separator||c!==e.decimals||l!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,i=t.prefix,o=t.duration,s=t.separator,u=t.decimals,c=t.decimal,l=t.preserveValue;o===e.duration&&a===e.start&&r===e.suffix&&i===e.prefix&&s===e.separator&&u===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,i=this.pauseResume,s=this.reset,u=this.restart,c=this.update;return"function"==typeof t?t({countUpRef:r,pauseResume:i,reset:s,start:u,update:c}):o.createElement("span",{className:n,ref:r,style:a})}}])&&l(n.prototype,a),r&&l(n,r),t}(i.Component);m(w,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),m(w,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var y={innerHTML:null};t.default=w,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},w.defaultProps,{},e),n=t.start,a=t.formattingFn,r=h(i.useState("function"==typeof a?a(n):n),2),o=r[0],s=r[1],u=i.useRef(null),c=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=g(y,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},l=function(){var e=t.onReset;c().reset(),e({pauseResume:d,start:p,update:v})},p=function e(){var n=t.onStart,a=t.onEnd;c().reset(),c().start((function(){a({pauseResume:d,reset:l,start:e,update:v})})),n({pauseResume:d,reset:l,update:v})},d=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:l,start:p,update:v})},v=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:d,reset:l,start:p})};return i.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:d,reset:l,update:v}),c().start((function(){clearTimeout(r),a({pauseResume:d,reset:l,start:p,update:v})}))}),1e3*e);return l}),[]),{countUp:o,start:p,pauseResume:d,reset:l,update:v}}}}]);
//# sourceMappingURL=19fcf5696d556897a3b5c7ec5a9f2888213af9ae-2ac43b89d16692130375.js.map
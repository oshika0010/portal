(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Otrq:function(e,t,n){var r;"undefined"!=typeof self&&self,r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var u=s(n(0)),f=function(e){o(n,e);var t=a(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(u.default.Component);t.Parallax=f;var d=function(e){o(n,e);var t=a(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(u.default.Component);t.Background=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||i.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var i=e.getBoundingClientRect().top-n,o=e.getBoundingClientRect().bottom+n;return i<=t.getWindowHeight(r)&&o>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var i=r(n(4));t.Parallax=i.default;var o=r(n(7));t.Background=o.default},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(n(0)),u=n(1),f=n(5),d=n(2),p=l(n(6)),g={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(n,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}(n);function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=t.call(this,e)).onWindowResize=function(){r.parentHeight=d.getNodeHeight(r.canUseDOM,r.parent),r.updatePosition()},r.onWindowLoad=function(){r.updatePosition()},r.onScroll=function(){if(r.canUseDOM){var e=Date.now();e-r.timestamp>=10&&d.isScrolledIntoView(r.node,100,r.canUseDOM)&&(window.requestAnimationFrame(r.updatePosition),r.timestamp=e)}},r.onContentMount=function(e){r.content=e},r.updatePosition=function(){if(r.content){var e=!1;r.contentHeight=r.content.getBoundingClientRect().height,r.contentWidth=r.node.getBoundingClientRect().width,r.img&&r.img.naturalWidth/r.img.naturalHeight<r.contentWidth/r.getImageHeight()&&(e=!0);var t=f.getRelativePosition(r.node,r.canUseDOM),n=!!r.img,i=r.bg&&r.state.splitChildren.bgChildren.length>0;n&&r.setImagePosition(t,e),i&&r.setBackgroundPosition(t),n||i||r.setState({percentage:t})}},r.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:g,bgStyle:Object.assign(Object.assign({},g),e.bgStyle),percentage:0,splitChildren:f.getSplitChildren(e)},r.canUseDOM=d.canUseDOM(),r.node=null,r.content=null,r.bgImageLoaded=!1,r.bgImageRef=void 0,r.parent=e.parent,r.parentHeight=d.getNodeHeight(r.canUseDOM,r.parent),r.timestamp=Date.now(),r.isDynamicBlur=f.getHasDynamicBlur(e.blur),r}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(n,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,i=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,i):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,r=t.bgImage,i=t.bgImageSrcSet,o=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=d.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,i,o)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength;if(!0!==n){var i=this.state.bgStyle,o="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");this.setState({bgStyle:Object.assign(Object.assign({},i),{WebkitTransform:o,transform:o}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,i=n.strength,o=n.blur,a=t?"auto":"".concat(this.getImageHeight(),"px"),c=t?"".concat(this.contentWidth,"px"):"auto";if(!0!==r){var l=this.state.imgStyle,s=i<0,u=(s?i:0)-i*e,d="translate3d(-50%, ".concat(u,"px, 0)"),p="none";o&&(p="blur(".concat(f.getBlurValue(this.isDynamicBlur,o,e),"px)")),this.setState({imgStyle:Object.assign(Object.assign({},l),{height:a,width:c,WebkitTransform:d,transform:d,WebkitFilter:p,filter:p}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return r.updatePosition()}))},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,o=t.contentClassName,a=t.bgImageAlt,c=t.renderLayer,l=t.bgImageStyle,u=this.state,f=u.bgImage,d=u.bgImageSrcSet,g=u.bgImageSizes,h=u.percentage,m=u.imgStyle,y=u.bgStyle,b=u.splitChildren;return s.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function(t){e.node=t}},f?s.default.createElement("img",{className:i,src:f,srcSet:d,sizes:g,ref:function(t){e.img=t},alt:a,style:Object.assign(Object.assign({},m),l)}):null,c?c(-(h-1)):null,b.bgChildren.length>0?s.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:y},b.bgChildren):null,s.default.createElement(p.default,{onMount:this.onContentMount,className:o},b.children))}}],[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:f.getSplitChildren(e)}}}]),n}(u.Parallax);h.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=h},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var i=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,a=r.height,c=o.getNodeHeight(n),l=a>c?a:c,s=Math.round(i>l?l:i);return t.getPercentage(0,l,s)},t.getSplitChildren=function(e){var t=[],n=i.Children.toArray(e.children);return n.forEach((function(e,r){var i=e;i.type&&i.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===r(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0));t.default=function(e){var t=e.children,n=e.onMount,r=e.className;return i.default.createElement("div",{ref:function(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(0)),f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(n,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}(n);function n(){return i(this,n),t.apply(this,arguments)}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return u.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),n}(n(1).Background);f.defaultProps={className:""},f.isParallaxBackground=!0,t.default=f}])},e.exports=r(n("q1tI"))},"QN6/":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAJFBMVEX////29vb19fX9/f35+fn8/Pz4+Pj7+/v39/f+/v76+vr09PSoFy00AAAEgElEQVR4Xu3dsW9bVRTH8RvaAm9rkoKeMtUpDG2Xpi9J1Q1IbClhKSSWSVlAicyDCakybj3hgVc7k4UT8B0TpXXksSr/H6N/N8NTl17Vx9+7/XSvdPSxIj/p+ORd93hxupa+GpxLvDNckPR5clqRo08e/CybN/1DSfeuXa9I9DFqON+bru6OP5O47EeSCn+aytEDn8tmf7gmacWfpBJ9jBoudbK+X/pd0seLNyVdq3yhR79ZeiBpYfEnSZ9UvtSj3Rg13gkCBAgQIECAAAECBAgQIECAAAECpKLxx/sBZPW2Qt68Vci39xXy0WoAefOfQpZi1HC7dVl/1FqSnm5XJTWOftOjr4Oj+9uvgqO/6NGLGDXcIGhnunOJd5MFSam7EbQzB11tZyZ/S7qXBO3MKDXM9H7LPq07SQC5+mkFkORhyacVo4Ybt6erM5lMJI4n4eZYYqdzZbMjaTIJN2PUKPvW+jT4RkmufqMMgm+UP0u+UWLUmK8HIhAgQIAAAQIECBAgQIAAAQIECE3srDld+VZ2KfGvbFPSUbZRyNG9rCabhxs/SDrO1guJWYwaZnq/diD+/TeYBzFquMLL+q77QtI/vb6kYXpLj37dfSxp1PtV0r/pZ3o0j1Fjvp4jQIAAAQIECBAgQIAAAQIECBAgQI4yWc/zZ5LWm4eSNopjPXqZ70nabG5JelS81KO1GDWcKxkudmXDxa5kuNgFXcAoNaz2fkOIL4MMSiBJCIlRw9W3ZY0bF5Kq9X3dbLU1tRuaqg09utvq6GY9Ro25GmDmOQIECBAgQIAAAQIECBAgQIAAAWKmHWSmQWemZWqmiW3mZwUzP/TM1XMECBAgQIAAAQIECBAgQIAAAQIEiJl/zDfzqgQzvV8zEDMveJnFV+4wwAwECBAgQIAAAQIECBAgQIAAAcIAs5kr0sxcWmem92vmYkczV23OZBObJjYQIECAAAECBAgQIECAAAECBAgQ35uu7o4/k7jsR5IKf5rK0QOfy2Z/uCZpxZ+kEn2MGgwwf2gQM39aPEfmCgIECBAgQIAAAQIECBAgQIAAAWJmFNDMcKaZcVkzvV8zI+Vmhvy5RnAWH4hAgAABAgQIECBAgAABAgQIECA0sc28JpcB5g8NYubl3mZetz5fzxEgQIAAAQIECBAgQIAAAQIECBAgR5ms5/kzSevNQ0kbxbEevcz3JG02tyQ9Kl7q0VqMGs6VDBe7suFiVzJc7IIuYJQaVnu/IcSXQQYlkCSExKjh6tuyxo0LSdX6vm622praDU3Vhh7dbXV0sx6jBgPMs/gcAQIECBAgQIAAAQIECBAgQIAA4RpBMw06My1TM01sMz8rmPmhZ66eI0CAAAECBAgQIECAAAECBAgQIEDM/GO+mVclmOn9moGYecHLLL5yhwFmIECAAAECBAgQIECAAAECBAgQBpjNXJFm5tI6M71fMxc7mrlqcyab2DSxgQABAgQIECBAgAABAgQIECBAgPjedHV3/JnEZT+SVPjTVI4e+Fw2+8M1SSv+JJXoY9Qw0/v9HyBidiXJeJK4AAAAAElFTkSuQmCC"},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("vOnD"),a=n("s/Ur"),c=n.n(a),l=n("P8py"),s=o.a.div.withConfig({displayName:"footer__FooterComponents",componentId:"sc-1abtvul-0"})(["display:flex;justify-content:center;height:3vh;"]),u=function(){return i.a.createElement(s,null,i.a.createElement("div",null,"© Shika Blog Site ",(new Date).getFullYear()))},f=n("QN6/"),d=n.n(f),p=n("Otrq"),g=o.a.div.withConfig({displayName:"hero__HeroWrapper",componentId:"ijzga5-0"})(["display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;font-size:1.2rem;background-image:url(",");"],d.a),h=o.a.h1.withConfig({displayName:"hero__Heading",componentId:"ijzga5-1"})(["font-weight:600;"]),m=o.a.h3.withConfig({displayName:"hero__TagLine",componentId:"ijzga5-2"})(["font-size:1rem;font-weight:300;"]),y=function(){return i.a.createElement(g,null,i.a.createElement("div",null,i.a.createElement(p.Parallax,{x:[350,-300]},i.a.createElement(h,null,"Welcome!")),i.a.createElement(m,null,"This is my first blog powered by GatsbyJs")))},b=n("Wbzz"),v=n("9eSz"),A=n.n(v);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=new Map,S=new Map,C=0;function E(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(S.has(n)||(C+=1,S.set(n,C.toString())),S.get(n)):"0":e[t]);var n})).toString()}function O(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=E(e),n=I.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},I.set(t,n)}return n}(n),i=r.id,o=r.observer,a=r.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),I.delete(i))}}function _(e){return"function"!=typeof e.children}var k=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),_(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=i.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=O(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o})}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!_(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,o=i.children,a=i.as,c=i.tag,l=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(a||c||"div",w({ref:this.handleNode},l),o)},i}(r.Component);k.displayName="InView",k.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var x=o.a.div.withConfig({displayName:"nodeComponent__NodeComponentWrapper",componentId:"sc-1ph461x-0"})(["margin-bottom:20px;width:70vw;height:70vw;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:0.5s;transform:translateX(",");"],(function(e){return e.inView?"0px":"80vw"})),P=o.a.div.withConfig({displayName:"nodeComponent__NodeItemWrapper",componentId:"sc-1ph461x-1"})(["display:flex;flex-direction:column;"]),j=o.a.h4.withConfig({displayName:"nodeComponent__ArticleTitle",componentId:"sc-1ph461x-2"})(["margin:0;"]),M=o.a.div.withConfig({displayName:"nodeComponent__ArticleDate",componentId:"sc-1ph461x-3"})(["font-size:0.8rem;"]),B=function(e){var t=function(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,a=t.rootMargin,c=t.root,l=t.triggerOnce,s=t.skip,u=t.initialInView,f=Object(r.useRef)(),d=Object(r.useState)({inView:!!u}),p=d[0],g=d[1],h=Object(r.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),s||e&&(f.current=O(e,(function(e,t){g({inView:e,entry:t}),t.isIntersecting&&l&&f.current&&(f.current(),f.current=void 0)}),{root:c,rootMargin:a,threshold:n,trackVisibility:o,delay:i}))}),[Array.isArray(n)?n.toString():n,c,a,l,s,o,i]);Object(r.useEffect)((function(){f.current||!p.entry||l||s||g({inView:!!u})}));var m=[h,p.inView,p.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}({threshold:0}),n=t.ref,o=t.inView;return i.a.createElement(x,{ref:n,inView:o},i.a.createElement(A.a,{fixed:e.node.frontmatter.topImage.childImageSharp.fixed}),i.a.createElement(P,null,i.a.createElement(b.Link,{to:e.node.fields.slug},i.a.createElement(j,null,e.node.frontmatter.title)),i.a.createElement(M,null,e.node.frontmatter.date)))},R=o.a.div.withConfig({displayName:"recentPages__RecentPagesWrapper",componentId:"khanec-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;align-items:center;background:linear-gradient(to bottom left,transparent 50%,wheat 50%) top left / 100% 20% no-repeat,linear-gradient(to top right,transparent 50%,wheat 50%) bottom left / 100% 20% no-repeat;"]),Q=function(){var e,t=Object(b.useStaticQuery)("1978128932");return e=t.allMarkdownRemark.nodes.length<3?t.allMarkdownRemark.nodes:t.allMarkdownRemark.nodes.slice(2),i.a.createElement(R,null,i.a.createElement("h1",null,"RecentPages"),e.map((function(e){return i.a.createElement(B,{key:e.id,node:e})})))},V=o.a.div.withConfig({displayName:"mainPage__MainPageContainer",componentId:"sc-1xskw6s-0"})(["display:flex;margin-top:8vh;flex-direction:column;justify-content:center;text-align:center;font-size:1.2rem;"]),N=o.a.div.withConfig({displayName:"mainPage__Triangle",componentId:"sc-1xskw6s-1"})(["width:100vw;height:200px;background:linear-gradient(to bottom right,transparent 60%,wheat 50%) top left / 100% 50% no-repeat,linear-gradient(to top right,transparent 60%,wheat 50%) bottom left / 100% 50% no-repeat;"]),D=(o.a.div.withConfig({displayName:"mainPage__Div2",componentId:"sc-1xskw6s-2"})(["background-color:red;width:70vw;height:400px;position:relative;"]),function(){return i.a.createElement(V,null,i.a.createElement(y,null),i.a.createElement(N,null),i.a.createElement(Q,null))}),W=o.a.div.withConfig({displayName:"pages__BlogWrapper",componentId:"ifild7-0"})(["position:relative;width:100%;height:100%;"]);o.a.h1.withConfig({displayName:"pages__Head",componentId:"ifild7-1"})(["z-index:500;margin-top:50vh;height:50vh;width:50vw;"]),t.default=function(){return i.a.createElement("div",null,"deploy",i.a.createElement(c.a,{query:"(min-width: 767px)"},i.a.createElement(W,null,"パソコン"),i.a.createElement(u,null)),i.a.createElement(c.a,{query:"(max-width: 767px)"},i.a.createElement(W,null,i.a.createElement(l.a,null,i.a.createElement(D,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8c6411235ef56b9d3371.js.map
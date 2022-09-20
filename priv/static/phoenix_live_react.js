!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.phoenix_live_react=t(require("react"),require("react-dom")):e.phoenix_live_react=t(e.react,e["react-dom"])}(self,(function(__WEBPACK_EXTERNAL_MODULE__156__,__WEBPACK_EXTERNAL_MODULE__111__){return(()=>{"use strict";var __webpack_modules__={745:(e,t,r)=>{var _=r(111);_.createRoot,_.hydrateRoot},156:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__156__},111:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__111__}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LiveReact,initLiveReact:()=>initLiveReact,initLiveReactElement:()=>initLiveReactElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(156),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(745);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);t&&(_=_.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,_)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var render=function(e,t,r){var _=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.dataset.liveReactProps?JSON.parse(e.dataset.liveReactProps):{};n=e.dataset.liveReactMerge?_objectSpread(_objectSpread(_objectSpread({},a),n),_):_objectSpread(_objectSpread({},n),_);var o=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(r,n);return t.render(o),n},initLiveReactElement=function initLiveReactElement(el,root,additionalProps){var target=el.nextElementSibling,componentClass=eval(el.dataset.liveReactClass);return render(el,root,componentClass,additionalProps),{target,componentClass}},initLiveReact=function(){var e=document.createElement("div");e.id="live-react-wrapper";var t=document.querySelectorAll("[data-live-react-class]");Array.prototype.forEach.call(t,(function(t){initLiveReactElement(t,e)}))},LiveReact={mounted:function(){var e=this.el,t=this.pushEvent.bind(this),r=this.pushEventTo&&this.pushEventTo.bind(this),_=this.handleEvent&&this.handleEvent.bind(this),a=initLiveReactElement(e,{pushEvent:t}),n=a.target,o=a.componentClass,i=render(e,n,o,{pushEvent:t,pushEventTo:r,handleEvent:_});e.dataset.liveReactMerge&&(this.props=i),Object.assign(this,{target:n,componentClass:o})},updated:function(){var e=this.el,t=this.target,r=this.componentClass,_=this.pushEvent.bind(this),a=this.pushEventTo&&this.pushEventTo.bind(this),n=(this.handleEvent,this.props),o=render(e,t,r,{pushEvent:_,pushEventTo:a},n);e.dataset.liveReactMerge&&(this.props=o)},destroyed:function(){this.target.unmount()}}})(),__webpack_exports__})()}));
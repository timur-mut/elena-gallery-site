(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3UTD":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAxNiAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuOTI3OTc5IDFMMTQuMTUwOSAxNC4wOEwwLjkyNzk3OSAyNy4xNiIgc3Ryb2tlPSIjNjA2MDYwIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg=="},I5cv:function(e,t,n){var i=n("XKFU"),o=n("Kuth"),r=n("2OiF"),s=n("y3w9"),a=n("0/R4"),u=n("eeVq"),l=n("8MEG"),c=(n("dyZX").Reflect||{}).construct,p=u((function(){function e(){}return!(c((function(){}),[],e)instanceof e)})),f=!u((function(){c((function(){}))}));i(i.S+i.F*(p||f),"Reflect",{construct:function(e,t){r(e),s(t);var n=arguments.length<3?e:r(arguments[2]);if(f&&!p)return c(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var i=[null];return i.push.apply(i,t),new(l.apply(e,i))}var u=n.prototype,d=o(a(u)?u:Object.prototype),h=Function.apply.call(e,d,t);return a(h)?h:d}})},I9TQ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return b}));n("Vd3H"),n("pIFo"),n("KKXr"),n("rvZc");var i=n("q1tI"),o=n.n(i),r=n("9eSz"),s=n.n(r),a=n("ZJ91"),u=n("vOnD"),l=n("Efxr"),c=n("plVc"),p=n("XrMM"),f=n.n(p),d=n("WWMj"),h=n.n(d),m=n("3UTD"),v=n.n(m),y=n("L12J"),w=(n("a6qw"),n("cQc+")),b="2958153480",g=l.b.div({visible:{opacity:1},hidden:{opacity:0}}),S=Object(u.c)(g).withConfig({displayName:"illuminator-item__Container",componentId:"sc-1n2xj0j-0"})(["min-height:100vh;max-width:1400px;gap:30px;justify-items:center;align-items:center;margin:0 auto;display:grid;@media (max-width:1400px){display:flex;flex-direction:column;}@media (max-width:750px){}"]),I=Object(u.c)(w.Carousel).withConfig({displayName:"illuminator-item__StyledCarousel",componentId:"sc-1n2xj0j-1"})(["background-color:white;box-sizing:border-box;width:920px;height:850px;display:flex;flex-direction:column;justify-content:center;@media (max-width:1400px){width:100vw;height:unset;}"]),E=u.c.div.withConfig({displayName:"illuminator-item__Info",componentId:"sc-1n2xj0j-2"})(["background-color:white;grid-column:2;grid-row:1;height:850px;width:450px;padding:30px;box-sizing:border-box;font-size:0.9rem;line-height:160%;display:flex;justify-content:center;flex-direction:column;overflow-y:auto;@media (max-width:1400px){grid-column:1;grid-row:2;width:100vw;height:unset;}@media (max-width:750px){}"]),O=u.c.div.withConfig({displayName:"illuminator-item__Title",componentId:"sc-1n2xj0j-3"})(["font-weight:bold;"]),P=u.c.div.withConfig({displayName:"illuminator-item__Description",componentId:"sc-1n2xj0j-4"})([""]),M=u.c.span.withConfig({displayName:"illuminator-item__Size",componentId:"sc-1n2xj0j-5"})(["font-weight:100;"]),R=u.c.div.withConfig({displayName:"illuminator-item__CloseButton",componentId:"sc-1n2xj0j-6"})(["position:fixed;top:20px;right:20px;"]),j=u.c.div.withConfig({displayName:"illuminator-item__NavigateButton",componentId:"sc-1n2xj0j-7"})(["margin:5px;"]),T=u.c.div.withConfig({displayName:"illuminator-item__NavigateButtons",componentId:"sc-1n2xj0j-8"})(["position:fixed;right:15px;bottom:20px;display:flex;flex-direction:row-reverse;will-change:contents;"]),_=u.c.li.withConfig({displayName:"illuminator-item__Indicator",componentId:"sc-1n2xj0j-9"})(["background-color:#d2d2d2;border-radius:50%;width:8px;height:8px;display:inline-block;margin:0 8px;cursor:pointer;",""],(function(e){return e.isSelected&&Object(u.b)(["background-color:#1a1a1a;"])}));function x(e,t){function n(e){return e.endsWith("-clip.png")?1:e.endsWith("-crop.png")?2:e.endsWith("-interior.png")?3:0}return n(e.fluid.originalName)-n(t.fluid.originalName)}function k(e,t,n,i){return o.a.createElement(_,{onClick:e,isSelected:t})}t.default=function(e){var t=e.data.illuminatorDataJson;if(!t||!t.images)return null;var n=t.description.split("\n\n").map((function(e){return"<p>"+e.replace(/\n/g,"<br>")+"</p>"})).join("");return o.a.createElement(y.a,{title:t.title},o.a.createElement(c.TransitionState,null,(function(e){var i=e.mount,r=(e.transitionStatus,i?"visible":"hidden");return o.a.createElement(l.a,{pose:r},o.a.createElement(S,{key:"container"},o.a.createElement(I,{infiniteLoop:!0,autoPlay:!0,showThumbs:!1,showStatus:!1,renderIndicator:k},t.images.sort(x).map((function(e,t){return o.a.createElement(s.a,{fluid:e.fluid,style:{height:"100%",maxHeight:"850px",backgroundColor:"white"},imgStyle:{backgroundColor:"white",objectFit:"contain",border:"15px solid white"}})}))),o.a.createElement(E,{key:"info"},o.a.createElement(O,null,t.title," ",t.year," ",o.a.createElement(M,null,"(",t.size,")")),o.a.createElement(P,{dangerouslySetInnerHTML:{__html:n}})),o.a.createElement(R,{key:"closeButton"},o.a.createElement(a.a,{to:"illuminator/"},o.a.createElement("img",{alt:"closeIcon",src:f.a})))))})),o.a.createElement(T,{next:t.nextItemName},o.a.createElement(j,null,o.a.createElement(a.a,{direction:"left",to:"illuminator/"+t.nextItemName},o.a.createElement("img",{alt:"nextIcon",src:v.a}))),o.a.createElement(j,null,o.a.createElement(a.a,{direction:"right",to:"illuminator/"+t.previousItemName},o.a.createElement("img",{alt:"previousIcon",src:h.a})))))}},JtOw:function(e,t,n){var i,o,r;n("HAE/"),o=[t,n("fnPv")],void 0===(r="function"==typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=t)&&n.__esModule?n:{default:n};e.default=i.default})?i.apply(t,o):i)||(e.exports=r)},Lk85:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n("TSYQ"))&&i.__esModule?i:{default:i};var r={ROOT:function(e){return(0,o.default)(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,o.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,o.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,o.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,o.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,o.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,o.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,o.default)({dot:!0,selected:e})}};t.default=r},MYHI:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return window}},NyAt:function(e,t,n){"use strict";n("dRSK"),n("2Spj"),n("bWfx"),n("a1Th"),n("h7Nl"),n("I5cv"),n("/SS/"),n("hHhE"),n("91GP"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("RW0V"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=p(n("i8i4")),r=p(n("JtOw")),s=p(n("Lk85")),a=p(n("xT4z")),u=p(n("bOlk")),l=p(n("Ol6o")),c=p(n("MYHI"));function p(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(E,e);var t,n,p,f,d=(t=E,function(){var e,n=S(t);if(g()){var i=S(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return w(this,e)});function E(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),I(b(t=d.call(this,e)),"thumbsRef",void 0),I(b(t),"carouselWrapperRef",void 0),I(b(t),"listRef",void 0),I(b(t),"itemsRef",void 0),I(b(t),"timer",void 0),I(b(t),"setThumbsRef",(function(e){t.thumbsRef=e})),I(b(t),"setCarouselWrapperRef",(function(e){t.carouselWrapperRef=e})),I(b(t),"setListRef",(function(e){t.listRef=e})),I(b(t),"setItemsRef",(function(e,n){t.itemsRef||(t.itemsRef=[]),t.itemsRef[n]=e})),I(b(t),"autoPlay",(function(){!t.state.autoPlay||i.Children.count(t.props.children)<=1||(t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.increment()}),t.props.interval))})),I(b(t),"clearAutoPlay",(function(){t.state.autoPlay&&t.timer&&clearTimeout(t.timer)})),I(b(t),"resetAutoPlay",(function(){t.clearAutoPlay(),t.autoPlay()})),I(b(t),"stopOnHover",(function(){t.setState({isMouseEntered:!0},t.clearAutoPlay)})),I(b(t),"startOnLeave",(function(){t.setState({isMouseEntered:!1},t.autoPlay)})),I(b(t),"isFocusWithinTheCarousel",(function(){return!!t.carouselWrapperRef&&!((0,l.default)().activeElement!==t.carouselWrapperRef&&!t.carouselWrapperRef.contains((0,l.default)().activeElement))})),I(b(t),"navigateWithKeyboard",(function(e){if(t.isFocusWithinTheCarousel()){var n="horizontal"===t.props.axis,i=n?37:38;(n?39:40)===e.keyCode?t.increment():i===e.keyCode&&t.decrement()}})),I(b(t),"updateSizes",(function(){if(t.state.initialized&&t.itemsRef&&0!==t.itemsRef.length){var e="horizontal"===t.props.axis,n=t.itemsRef[0],i=e?n.clientWidth:n.clientHeight;t.setState({itemSize:i}),t.thumbsRef&&t.thumbsRef.updateSizes()}})),I(b(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),I(b(t),"handleClickItem",(function(e,n){0!==i.Children.count(t.props.children)&&(t.state.cancelClick?t.setState({cancelClick:!1}):(t.props.onClickItem(e,n),e!==t.state.selectedItem&&t.setState({selectedItem:e})))})),I(b(t),"handleOnChange",(function(e,n){i.Children.count(t.props.children)<=1||t.props.onChange(e,n)})),I(b(t),"handleClickThumb",(function(e,n){t.props.onClickThumb(e,n),t.selectItem({selectedItem:e})})),I(b(t),"onSwipeStart",(function(e){t.setState({swiping:!0}),t.props.onSwipeStart(e),t.clearAutoPlay()})),I(b(t),"onSwipeEnd",(function(e){t.setState({swiping:!1,cancelClick:!1}),t.props.onSwipeEnd(e),t.autoPlay()})),I(b(t),"onSwipeMove",(function(e,n){t.props.onSwipeMove(n);var o="horizontal"===t.props.axis,r=i.Children.count(t.props.children),s=t.getPosition(t.state.selectedItem),a=t.props.infiniteLoop?t.getPosition(r-1)-100:t.getPosition(r-1),u=o?e.x:e.y,l=u;0===s&&u>0&&(l=0),s===a&&u<0&&(l=0);var c=s+100/(t.state.itemSize/l);t.props.infiniteLoop&&(0===t.state.selectedItem&&c>-100?c-=100*r:t.state.selectedItem===r-1&&c<100*-r&&(c+=100*r)),t.setPosition(c);var p=Math.abs(u)>t.props.swipeScrollTolerance;return p&&!t.state.cancelClick&&t.setState({cancelClick:!0}),p})),I(b(t),"setPosition",(function(e,n){var i=o.default.findDOMNode(t.listRef);i instanceof HTMLElement&&(["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(n){i.style[n]=(0,a.default)(e,"%",t.props.axis)})),n&&i.offsetLeft)})),I(b(t),"resetPosition",(function(){var e=t.getPosition(t.state.selectedItem);t.setPosition(e)})),I(b(t),"decrement",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem-("number"==typeof e?e:1),n)})),I(b(t),"increment",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem+("number"==typeof e?e:1),n)})),I(b(t),"moveTo",(function(e,n){if("number"==typeof e){var o=i.Children.count(t.props.children)-1,r=t.props.infiniteLoop&&!n&&(e<0||e>o),s=e;e<0&&(e=t.props.infiniteLoop?o:0),e>o&&(e=t.props.infiniteLoop?0:o),r?t.setState({swiping:!0},(function(){s<0?t.props.centerMode&&t.props.centerSlidePercentage&&"horizontal"===t.props.axis?t.setPosition(-(o+2)*t.props.centerSlidePercentage-(100-t.props.centerSlidePercentage)/2,!0):t.setPosition(100*-(o+2),!0):s>o&&t.setPosition(0,!0),t.selectItem({selectedItem:e,swiping:!1})})):t.selectItem({selectedItem:e}),t.state.autoPlay&&!1===t.state.isMouseEntered&&t.resetAutoPlay()}})),I(b(t),"onClickNext",(function(){t.increment(1,!1)})),I(b(t),"onClickPrev",(function(){t.decrement(1,!1)})),I(b(t),"onSwipeForward",(function(){t.increment(1,!0)})),I(b(t),"onSwipeBackwards",(function(){t.decrement(1,!0)})),I(b(t),"changeItem",(function(e){return function(n){(function(e){return!!e&&e.hasOwnProperty("key")})(n)&&"Enter"!==n.key||t.selectItem({selectedItem:e})}})),I(b(t),"selectItem",(function(e,n){t.setState(e,n),t.handleOnChange(e.selectedItem,i.Children.toArray(t.props.children)[e.selectedItem])})),I(b(t),"getInitialImage",(function(){var e=t.props.selectedItem,n=t.itemsRef&&t.itemsRef[e],i=n&&n.getElementsByTagName("img");return i&&i[e]})),I(b(t),"getVariableImageHeight",(function(e){var n=t.itemsRef&&t.itemsRef[e],i=n&&n.getElementsByTagName("img")||[];if(t.state.hasMount&&i.length>0){var o=i[0];if(!o.complete){o.addEventListener("load",(function e(){t.forceUpdate(),o.removeEventListener("load",e)}))}var r=o.clientHeight;return r>0?r:null}return null})),t.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay,swiping:!1,cancelClick:!1,itemSize:1},t}return n=E,(p=[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition(),e.selectedItem===this.props.selectedItem&&e.centerMode===this.props.centerMode||(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){this.bindEvents(),this.state.autoPlay&&i.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0});var e=this.getInitialImage();e?e.addEventListener("load",this.setMountState):this.setMountState()}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,c.default)().addEventListener("resize",this.updateSizes),(0,c.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,l.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,c.default)().removeEventListener("resize",this.updateSizes),(0,c.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,l.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){if(this.props.infiniteLoop&&++e,0===e)return 0;var t=i.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,o=t-1;return e&&(e!==o||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===o&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return this.props.children?i.Children.map(this.props.children,(function(n,o){var r={ref:function(e){return t.setItemsRef(e,o)},key:"itemKey"+o+(e?"clone":""),className:s.default.ITEM(!0,o===t.state.selectedItem),onClick:t.handleClickItem.bind(t,o,n)},a={};return t.props.centerMode&&"horizontal"===t.props.axis&&(a.style={minWidth:t.props.centerSlidePercentage+"%"}),i.default.createElement("li",m({},r,a),t.props.renderItem(n,{isSelected:o===t.state.selectedItem}))})):[]}},{key:"renderControls",value:function(){var e=this,t=this.props,n=t.showIndicators,o=t.labels,r=t.renderIndicator,s=t.children;return n?i.default.createElement("ul",{className:"control-dots"},i.Children.map(s,(function(t,n){return r&&r(e.changeItem(n),n===e.state.selectedItem,n,o.item)}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?i.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,i.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&this.props.children&&0!==i.Children.count(this.props.children)?i.default.createElement(u.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels},this.props.renderThumbs(this.props.children)):null}},{key:"render",value:function(){var e=this;if(!this.props.children||0===i.Children.count(this.props.children))return null;var t="horizontal"===this.props.axis,n=this.props.showArrows&&i.Children.count(this.props.children)>1,o=n&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=n&&(this.state.selectedItem<i.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,l={},c=this.getPosition(this.state.selectedItem),p=(0,a.default)(c,"%",this.props.axis),f=this.props.transitionTime+"ms";l={WebkitTransform:p,MozTransform:p,MsTransform:p,OTransform:p,transform:p,msTransform:p},this.state.swiping||(l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l,{WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f}));var d=this.renderItems(!0),v=d.shift(),y=d.pop(),w={className:s.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:l,tolerance:this.props.swipeScrollTolerance},b={};if(t){if(w.onSwipeLeft=this.onSwipeForward,w.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var g=this.getVariableImageHeight(this.state.selectedItem);w.style.height=g||"auto",b.height=g||"auto"}}else w.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,w.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,w.style.height=this.state.itemSize,b.height=this.state.itemSize;return i.default.createElement("div",{className:s.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:0},i.default.createElement("div",{className:s.default.CAROUSEL(!0),style:{width:this.props.width}},this.props.renderArrowPrev(this.onClickPrev,o,this.props.labels.leftArrow),i.default.createElement("div",{className:s.default.WRAPPER(!0,this.props.axis),style:b},this.props.swipeable?i.default.createElement(r.default,m({tagName:"ul",innerRef:this.setListRef},w,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&y,this.renderItems(),this.props.infiniteLoop&&v):i.default.createElement("ul",{className:s.default.SLIDER(!0,this.state.swiping),ref:function(t){return e.setListRef(t)},style:l},this.props.infiniteLoop&&y,this.renderItems(),this.props.infiniteLoop&&v)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderControls(),this.renderStatus()),this.renderThumbs())}}])&&v(n.prototype,p),f&&v(n,f),E}(i.default.Component);t.default=O,I(O,"displayName","Carousel"),I(O,"defaultProps",{axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:E,onClickThumb:E,onChange:E,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){},renderArrowPrev:function(e,t,n){return i.default.createElement("button",{type:"button","aria-label":n,className:s.default.ARROW_PREV(!t),onClick:e})},renderArrowNext:function(e,t,n){return i.default.createElement("button",{type:"button","aria-label":n,className:s.default.ARROW_NEXT(!t),onClick:e})},renderIndicator:function(e,t,n,o){return i.default.createElement("li",{className:s.default.DOT(t),onClick:e,onKeyDown:e,value:n,key:n,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(n+1)})},renderItem:function(e){return e},renderThumbs:function(e){var t=i.Children.map(e,(function(e){var t=e;if("img"!==e.type&&(t=i.Children.toArray(e.props.children).find((function(e){return"img"===e.type}))),t)return t}));return 0===t.filter((function(e){return e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):t},statusFormatter:function(e,t){return"".concat(e," of ").concat(t)},selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%"})},Ol6o:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return document}},TSYQ:function(e,t,n){var i;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var s=o.apply(null,i);s&&e.push(s)}else if("object"===r)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},WLL4:function(e,t,n){var i=n("XKFU");i(i.S+i.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},WWMj:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAxNiAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjIyMjkgMUwxLjk5OTk1IDE0LjA4TDE1LjIyMjkgMjcuMTYiIHN0cm9rZT0iIzYwNjA2MCIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="},a6qw:function(e,t,n){},bOlk:function(e,t,n){"use strict";n("2Spj"),n("bWfx"),n("8+KV"),n("a1Th"),n("h7Nl"),n("I5cv"),n("/SS/"),n("hHhE"),n("91GP"),n("rE2o"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=l(n("Lk85")),r=n("fl1M"),s=l(n("xT4z")),a=l(n("JtOw")),u=l(n("MYHI"));function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(g,e);var t,n,l,c,p=(t=g,function(){var e,n=w(t);if(y()){var i=w(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return m(this,e)});function g(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),b(v(t=p.call(this,e)),"itemsWrapperRef",void 0),b(v(t),"itemsListRef",void 0),b(v(t),"thumbsRef",void 0),b(v(t),"lastPosition",0),b(v(t),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),b(v(t),"setItemsListRef",(function(e){t.itemsListRef=e})),b(v(t),"setThumbsRef",(function(e,n){t.thumbsRef||(t.thumbsRef=[]),t.thumbsRef[n]=e})),b(v(t),"updateSizes",(function(){if(t.props.children&&t.itemsWrapperRef&&t.thumbsRef){var e=i.Children.count(t.props.children),n=t.itemsWrapperRef.clientWidth,o=t.props.thumbWidth?t.props.thumbWidth:(0,r.outerWidth)(t.thumbsRef[0]),s=Math.floor(n/o),a=e-s,u=s<e;t.setState((function(e,n){return{itemSize:o,visibleItems:s,firstItem:u?t.getFirstItem(n.selectedItem):0,lastPosition:a,showArrows:u}}))}})),b(v(t),"handleClickItem",(function(e,n,i){if(!function(e){return e.hasOwnProperty("key")}(i)||"Enter"===i.key){var o=t.props.onSelectItem;"function"==typeof o&&o(e,n)}})),b(v(t),"onSwipeStart",(function(){t.setState({swiping:!0})})),b(v(t),"onSwipeEnd",(function(){t.setState({swiping:!1})})),b(v(t),"onSwipeMove",(function(e){var n=e.x;if(!t.state.itemSize||!t.itemsWrapperRef)return!1;var i=-t.state.firstItem*t.state.itemSize;0===i&&n>0&&(n=0),i===-t.state.visibleItems*t.state.itemSize&&n<0&&(n=0);var o=i+100/(t.itemsWrapperRef.clientWidth/n);return t.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(e){t.itemsListRef.style[e]=(0,s.default)(o,"%",t.props.axis)})),!0})),b(v(t),"slideRight",(function(e){t.moveTo(t.state.firstItem-("number"==typeof e?e:1))})),b(v(t),"slideLeft",(function(e){t.moveTo(t.state.firstItem+("number"==typeof e?e:1))})),b(v(t),"moveTo",(function(e){e=(e=e<0?0:e)>=t.lastPosition?t.lastPosition:e,t.setState({firstItem:e})})),t.state={selectedItem:e.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},t}return n=g,(l=[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,u.default)().addEventListener("resize",this.updateSizes),(0,u.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,u.default)().removeEventListener("resize",this.updateSizes),(0,u.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.props.children.map((function(t,n){var r=o.default.ITEM(!1,n===e.state.selectedItem),s={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:r,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":"".concat(e.props.labels.item," ").concat(n+1),style:{width:e.props.thumbWidth}};return i.default.createElement("li",f({},s,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var t,n=this.state.showArrows&&this.state.firstItem>0,r=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u=-this.state.firstItem*(this.state.itemSize||0),l=(0,s.default)(u,"px",this.props.axis),c=this.props.transitionTime+"ms";return t={WebkitTransform:l,MozTransform:l,MsTransform:l,OTransform:l,transform:l,msTransform:l,WebkitTransitionDuration:c,MozTransitionDuration:c,MsTransitionDuration:c,OTransitionDuration:c,transitionDuration:c,msTransitionDuration:c},i.default.createElement("div",{className:o.default.CAROUSEL(!1)},i.default.createElement("div",{className:o.default.WRAPPER(!1),ref:this.setItemsWrapperRef},i.default.createElement("button",{type:"button",className:o.default.ARROW_PREV(!n),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),i.default.createElement(a.default,{tagName:"ul",className:o.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:t,innerRef:this.setItemsListRef},this.renderItems()),i.default.createElement("button",{type:"button",className:o.default.ARROW_NEXT(!r),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}])&&d(n.prototype,l),c&&d(n,c),g}(i.Component);t.default=g,b(g,"displayName","Thumbs"),b(g,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350})},"cQc+":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return o.default}});var i=r(n("NyAt")),o=r(n("bOlk"));function r(e){return e&&e.__esModule?e:{default:e}}},fl1M:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.outerWidth=void 0;t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},fnPv:function(e,t,n){var i,o,r;n("2Spj"),n("/SS/"),n("hHhE"),n("V+eJ"),n("91GP"),n("HAE/"),o=[t,n("q1tI"),n("17x9")],void 0===(r="function"==typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=p;var i=r(t),o=r(n);function r(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=!1;function p(e){c=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){p(!0)}}))}catch(m){}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return c?e:e.capture}function d(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var h=function(e){function t(){var e;a(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return r._handleSwipeStart=r._handleSwipeStart.bind(r),r._handleSwipeMove=r._handleSwipeMove.bind(r),r._handleSwipeEnd=r._handleSwipeEnd.bind(r),r._onMouseDown=r._onMouseDown.bind(r),r._onMouseMove=r._onMouseMove.bind(r),r._onMouseUp=r._onMouseUp.bind(r),r._setSwiperRef=r._setSwiperRef.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,f({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,f({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=d(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=d(e),n=t.x,i=t.y,o=n-this.moveStart.x,r=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:o,y:r},e)&&e.preventDefault(),this.movePosition={deltaX:o,deltaY:r}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,o=e.children,r=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return i.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},r),o)}}]),t}(t.Component);h.displayName="ReactSwipe",h.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},h.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=h})?i.apply(t,o):i)||(e.exports=r)},jm62:function(e,t,n){var i=n("XKFU"),o=n("mQtv"),r=n("aCFj"),s=n("EemH"),a=n("8a7r");i(i.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,i=r(e),u=s.f,l=o(i),c={},p=0;l.length>p;)void 0!==(n=u(i,t=l[p++]))&&a(c,t,n);return c}})},mQtv:function(e,t,n){var i=n("kJMx"),o=n("JiEa"),r=n("y3w9"),s=n("dyZX").Reflect;e.exports=s&&s.ownKeys||function(e){var t=i.f(r(e)),n=o.f;return n?t.concat(n(e)):t}},xT4z:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e,t,n){var i=0===e?e:e+t;return"translate3d"+("("+("horizontal"===n?[i,0,0]:[0,i,0]).join(",")+")")}}}]);
//# sourceMappingURL=component---src-components-illuminator-item-jsx-6a56dfad03cc179af001.js.map
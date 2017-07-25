!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports.ReactTabbordion=t(require("prop-types"),require("react")):e.ReactTabbordion=t(e.PropTypes,e.React)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=9)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"--",r=e&&e[t]||null;if(null==r)return null;"string"!=typeof r&&(r=String(r));var i="",a=r.indexOf(" ");a>=0&&(i=r.slice(a),r=r.slice(0,a));var l=" "+r+o;if(i&&o){var s=" "+o;for(a=i.indexOf(s);a>=0;a=i.indexOf(s,a+r.length))i=i.replace(s,l)}return Array.isArray(n)?n.reduce(function(e,t){return null!=t?e+l+t:e},r)+i:r+i}Object.defineProperty(t,"__esModule",{value:!0}),t.bemClassName=o},function(e,t,n){"use strict";function o(e){return function(t){e.includes(t)||e.push(t)}}function r(e){return function(t){var n=e.indexOf(t);~n&&e.splice(n,1)}}Object.defineProperty(t,"__esModule",{value:!0}),t.addSubscriber=o,t.removeSubscriber=r},function(e,t,n){"use strict";function o(e){return Array.isArray(e)&&e.length>0?e:c}function r(e){return e.checked}function i(e){return e.disabled}function a(e){return e.index}function l(e,t){if(e===t)return!1;var n=Object.keys(e||{}).sort(),o=Object.keys(t||{}).sort();return n.length!==o.length||n.some(function(n,r){return n!==o[r]||(Array.isArray(e[n])?s(e[n],t[n]):e[n]!==t[n])})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some(function(e,n){return l(e,t[n])})}Object.defineProperty(t,"__esModule",{value:!0}),t.getArray=o,t.getChecked=r,t.getDisabled=i,t.getIndex=a,t.isShallowlyDifferent=l,t.isShallowlyDifferentArray=s;var c=[]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),f=o(d),b=n(0),p=o(b),h=n(2),y=function(e){function t(e,n){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.context.bem.subscribe(this),this.context.tabbordionPanel.subscribe(this)}},{key:"componentWillUnmount",value:function(){this.context.bem.unsubscribe(this),this.context.tabbordionPanel.unsubscribe(this)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,o=r(e,["className","component"]),i=this.context.bem.getState(),a=i.bemSeparator,l=i.blockElements,s=this.context.tabbordionPanel.getState(),u=s.contentId,d=s.inputId,b=s.modifiers,p=(0,h.bemClassName)(l,"content",b,a);return f.default.createElement(n,c({id:u},o,{"aria-labelledby":d,className:p?t?p+" "+t:p:t,role:"tabpanel"}))}}]),t}(d.PureComponent);y.contextTypes={bem:p.default.object,tabbordionPanel:p.default.object},y.defaultProps={component:"div"},y.propTypes={className:p.default.string,component:p.default.oneOfType([p.default.func,p.default.object,p.default.string])},t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),f=o(d),b=n(0),p=o(b),h=n(2),y=function(e){function t(e,n){i(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.onClick=o.onClick.bind(o),o}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.context.bem.subscribe(this),this.context.tabbordionPanel.subscribe(this)}},{key:"componentWillUnmount",value:function(){this.context.bem.unsubscribe(this),this.context.tabbordionPanel.unsubscribe(this)}},{key:"onClick",value:function(e){if(!e.defaultPrevented){var t=this.context.tabbordionPanel.onClickLabel;t&&t()}}},{key:"render",value:function(){var e=this.context.bem.getState(),t=e.bemSeparator,n=e.blockElements,o=this.context.tabbordionPanel.getState(),i=o.inputId,a=o.modifiers,l=this.props,s=l.className,u=l.component,d=r(l,["className","component"]),b=(0,h.bemClassName)(n,"label",a,t);return f.default.createElement(u,c({className:b?s?b+" "+s:b:s,htmlFor:i,onClick:this.onClick},d))}}]),t}(d.PureComponent);y.contextTypes={bem:p.default.object,tabbordionPanel:p.default.object},y.defaultProps={component:"label"},y.propTypes={className:p.default.string,component:p.default.oneOfType([p.default.func,p.default.object,p.default.string])},t.default=y},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function s(e,t,n){var o=t.bem,r=t.tabbordion,i=e.checked,a=e.disabled,s=e.id,c=e.index,u=e.modifiers,b=e.name,p=e.type,h=e.value,y=e.visible,m=l(e,["checked","disabled","id","index","modifiers","name","type","value","visible"]),g=r.getState(),P=g.checkedPanels,x=g.disabledPanels,k=g.firstVisiblePanel,S=g.lastVisiblePanel,O=g.panelName,_=g.panelType,C=g.tabbordionId,j=(0,v.getArray)(P),w=(0,v.getArray)(x),T=(null!=b?b:O)||C||"tabbordion-panel-"+n,E=s||(C||T)+"-"+c,I=null!=i?i:j.includes(c),M=null!=a?a:w.includes(c),N=!1===y?"hidden":k===c&&"first"||S===c&&"last"||"between",A=null;f.Children.forEach(m.children,function(e){!A&&e&&e.type.contextTypes&&e.type.contextTypes.panel&&(A=(e.props||e._store&&e._store.props||{}).id||null)}),A||(A=E+"-content");var R=o.getState(),q=R.bemModifiers,D=R.bemSeparator,V=R.blockElements;return d({},m,{bemModifiers:q,bemSeparator:D,blockElements:V,checked:I,disabled:M,contentId:A,id:E,index:c,name:T,type:null!=p?p:_,value:null!=h?h:String(c),visible:N,checkedPanels:j,disabledPanels:w,modifiers:q?(0,v.getArray)(u).concat([q[I?"checked":"unchecked"],q[A?"content":"noContent"],q[M?"disabled":"enabled"],q[N]]):(0,v.getArray)(u),onChangePanel:r.onChangePanel})}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=n(1),b=o(f),p=n(0),h=o(p),y=n(3),m=n(2),v=n(4),g="undefined"!=typeof window&&"requestAnimationFrame"in window?window.requestAnimationFrame:setTimeout,P=0,x=0,k=function(e){function t(e,n){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return P++,o.uniqId=""+x,x++,o.cachedProps=s(e,n,o.uniqId),o.getInputRef=o.getInputRef.bind(o),o.onChange=o.onChange.bind(o),o.onClickLabel=o.onClickLabel.bind(o),o.subscribers=[],o.childContext={tabbordionPanel:{getState:function(){return{checked:o.cachedProps.checked,contentId:o.cachedProps.contentId,disabled:o.cachedProps.disabled,inputId:o.cachedProps.id,index:o.cachedProps.index,modifiers:o.cachedProps.modifiers,visible:o.cachedProps.visible}},onClickLabel:o.onClickLabel,subscribe:(0,y.addSubscriber)(o.subscribers),unsubscribe:(0,y.removeSubscriber)(o.subscribers)}},o.panelState=o.childContext.tabbordionPanel.getState(),o}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.context.bem.subscribe(this),this.context.tabbordion.subscribe(this)}},{key:"componentWillReceiveProps",value:function(e,t){this.cachedProps=s(e,t,this.uniqId);var n=this.childContext.tabbordionPanel.getState();(0,v.isShallowlyDifferent)(n,this.panelState)&&(this.subscribers.forEach(function(e){return e.forceUpdate()}),this.panelState=n)}},{key:"componentWillUnmount",value:function(){this.context.bem.unsubscribe(this),this.context.tabbordion.unsubscribe(this),delete this.cachedProps,0===--P&&(x=0)}},{key:"getChildContext",value:function(){return this.childContext}},{key:"getInputRef",value:function(e){this.input=e}},{key:"onChange",value:function(e){if(!e.defaultPrevented){var t=this.cachedProps,n=t.index,o=t.onChange;o&&o(n)}}},{key:"onClickLabel",value:function(){var e=this,t=this.cachedProps,n=t.index,o=t.onChangePanel;o&&o(n),g(function(){e.input&&e.input.checked&&document.activeElement!==e.input&&e.input.focus()})}},{key:"render",value:function(){var e=this.cachedProps,t=(e.bemModifiers,e.bemSeparator),n=e.blockElements,o=e.checked,r=(e.checkedPanels,e.children),i=e.className,a=e.component,s=e.contentId,c=e.disabled,u=(e.disabledPanels,e.id),f=(e.index,e.modifiers),p=(e.onChangePanel,e.name),h=e.style,y=e.type,v=e.value,g=e.visible,P=l(e,["bemModifiers","bemSeparator","blockElements","checked","checkedPanels","children","className","component","contentId","disabled","disabledPanels","id","index","modifiers","onChangePanel","name","style","type","value","visible"]),x=(0,m.bemClassName)(n,"panel",f,t),k=o?"true":"false";return b.default.createElement(a,d({},P,{"aria-expanded":s&&k,"aria-selected":k,className:x?i?x+" "+i:x:i,role:"tab",style:d({},h,{display:"hidden"===g?"none":null})}),b.default.createElement("input",{"aria-controls":s,checked:o,"data-state":"tabbordion",disabled:c,id:u,name:p,onChange:this.onChange,ref:this.getInputRef,type:y,value:v}),r)}}]),t}(f.PureComponent);k.childContextTypes={tabbordionPanel:h.default.object},k.contextTypes={bem:h.default.object,tabbordion:h.default.object},k.defaultProps={component:"li"},k.propTypes={checked:h.default.bool,className:h.default.string,disabled:h.default.bool,id:h.default.string,index:h.default.number,name:h.default.string,onChange:h.default.func,type:h.default.oneOf(["checkbox","radio"]),value:h.default.string,visible:h.default.bool,children:h.default.node,component:h.default.oneOfType([h.default.func,h.default.object,h.default.string]),modifiers:h.default.array},t.default=k},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{bemModifiers:e.bemModifiers,bemSeparator:e.bemSeparator,blockElements:e.blockElements}}function c(e,t,n){var o=(0,v.getArray)(n.stateful?n.panels:t.panels);return{checkedPanels:o.filter(v.getChecked).map(v.getIndex),disabledPanels:o.filter(v.getDisabled).map(v.getIndex),firstVisiblePanel:e.firstVisibleIndex,lastVisiblePanel:e.lastVisibleIndex,panelName:t.name||e.uniqId,panelType:"multiple"===t.mode?"checkbox":"radio",tabbordionId:t.id||e.uniqId}}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),p=o(b),h=n(0),y=o(h),m=n(3),v=n(4),g=0,P=0,x=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return g++,n.uniqId="tabbordion-"+P,P++,n.getNextState=n.getNextState.bind(n),n.onChange=n.onChange.bind(n),n.firstVisibleIndex=null,n.lastVisibleIndex=null,n.state=n.getNextState(e,{stateful:!1},Array.isArray(e.panels)?e.panels:e.initialPanels),n.subscribers={bem:[],tabbordion:[]},n.childContext={bem:{getState:function(){return n.bemState},subscribe:(0,m.addSubscriber)(n.subscribers.bem),unsubscribe:(0,m.removeSubscriber)(n.subscribers.bem)},tabbordion:{getState:function(){return n.tabbordionState},onChangePanel:n.onChange,subscribe:(0,m.addSubscriber)(n.subscribers.tabbordion),unsubscribe:(0,m.removeSubscriber)(n.subscribers.tabbordion)}},n.bemState=s(e),n.tabbordionState=c(n,e,n.state),n}return l(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.getNextState(e,this.state);t!==this.state&&this.setState(t);var n=s(e);(0,v.isShallowlyDifferent)(n,this.bemState)&&(this.subscribers.bem.forEach(function(e){return e.forceUpdate()}),this.bemState=n);var o=c(this,e,t);(0,v.isShallowlyDifferent)(o,this.tabbordionState)&&(this.subscribers.tabbordion.forEach(function(e){return e.forceUpdate()}),this.tabbordionState=o)}},{key:"componentWillUnmount",value:function(){0===--g&&(P=0)}},{key:"getChildContext",value:function(){return this.childContext}},{key:"getNextState",value:function(e,t,n){var o=(0,v.getArray)(t.stateful?t.panels:n||e.panels),r=[],i=[],a=[],l="multiple"===e.mode;b.Children.forEach(e.children,function(e){if(e&&e.type.contextTypes&&e.type.contextTypes.tabbordion){var t=e.props||e._store&&e._store.props||{},n=null!=t.index&&t.index,o=!1===n||i.includes(n);o?a.push(r.length):i.push(n),r.push({checked:t.checked,disabled:t.disabled,index:!o&&n,visible:t.visible})}});for(var s=0;a.length>0;){for(;i.includes(s);)s++;r[a.shift()].index=s,s++}var c=0,u=null,d=null,f=r.map(function(e,t){var n=o.find(function(t){return t.index===e.index})||{checked:r,disabled:i,visible:a},r=(null!=e.checked?e.checked:!!n.checked)&&(l||0===c),i=null!=e.disabled?e.disabled:!!n.disabled,a=null!=e.visible?e.visible:!1!==n.visible;return a&&(d=t,null==u&&(u=d)),r&&a&&c++,{checked:r,disabled:i,index:e.index,visible:a}});null!=u&&(0===c&&"multiple"!==e.mode&&"toggle"!==e.mode&&(f[u].checked=!0),u=f[u].index,d=f[d].index),this.firstVisibleIndex=u,this.lastVisibleIndex=d;var p=!e.onChange||!e.onPanels||!Array.isArray(e.panels);if(p){if(!t.stateful||(0,v.isShallowlyDifferentArray)(t.panels,f))return{panels:f,stateful:p}}else if((0,v.isShallowlyDifferentArray)(o,f)&&e.onPanels(f),t.stateful)return{panels:null,stateful:p};return t}},{key:"onChange",value:function(e){var t=this.props.mode;if(!this.state.stateful)return void this.props.onChange({index:e,mode:t});var n=this.state.panels.find(function(t){return t.index===e});if(null==n)throw new Error("Unexpected invalid panel index: "+e);var o=!1;switch(t){case"toggle":this.state.panels.forEach(function(e){e!==n&&e.checked&&(e.checked=!1)}),n.checked=!n.checked,o=!0;break;case"multiple":n.checked=!n.checked,o=!0;break;default:this.state.panels.forEach(function(e){e!==n&&e.checked&&(e.checked=!1,o=!0)}),n.checked||(n.checked=!0,o=!0)}o&&this.setState({panels:this.state.panels.slice(0)})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.component,o=(e.bemModifiers,e.bemSeparator,e.blockElements,e.component,e.initialPanels,e.mode,e.name,e.onChange,e.onPanels,e.panels),i=r(e,["children","component","bemModifiers","bemSeparator","blockElements","component","initialPanels","mode","name","onChange","onPanels","panels"]),a=0,l=this.state.stateful?this.state.panels:o;return p.default.createElement(n,d({},i,{role:"tablist"}),b.Children.map(t,function(e){if(e&&e.type.contextTypes&&e.type.contextTypes.tabbordion){var t=p.default.cloneElement(e,l[a]);return a++,t}return e}))}}]),t}(b.PureComponent);x.childContextTypes={bem:y.default.object,tabbordion:y.default.object},x.defaultProps={bemModifiers:{between:"between",checked:"checked",content:"content",disabled:"disabled",enabled:"enabled",first:"first",last:"last",noContent:"no-content",unchecked:"unchecked"},bemSeparator:"--",blockElements:{content:"panel__content",label:"panel__label",panel:"panel"},component:"ul",mode:"single"};var k=y.default.arrayOf(y.default.shape({checked:y.default.bool,disabled:y.default.bool,index:y.default.number,visible:y.default.bool}));x.propTypes={bemModifiers:y.default.shape({between:y.default.string,checked:y.default.string,content:y.default.string,disabled:y.default.string,enabled:y.default.string,first:y.default.string,hidden:y.default.string,last:y.default.string,noContent:y.default.string,unchecked:y.default.string}),bemSeparator:y.default.string,blockElements:y.default.shape({content:y.default.string,label:y.default.string,panel:y.default.string}),children:y.default.node,className:y.default.string,component:y.default.oneOfType([y.default.func,y.default.object,y.default.string]),id:y.default.string,initialPanels:k,mode:y.default.oneOf(["single","toggle","multiple"]),name:y.default.string,onChange:y.default.func,onPanels:y.default.func,panels:k},t.default=x},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TabContent=t.TabLabel=t.TabPanel=t.Tabbordion=void 0;var r=n(8),i=o(r),a=n(7),l=o(a),s=n(6),c=o(s),u=n(5),d=o(u);t.Tabbordion=i.default,t.TabPanel=l.default,t.TabLabel=c.default,t.TabContent=d.default}])});
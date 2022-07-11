var VueformSlider=function(e){"use strict";function t(e){return-1!==[null,void 0,!1].indexOf(e)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var n=i((function(e,t){e.exports=function(){var e=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function t(e){return e.split("").reverse().join("")}function r(e,t){return e.substring(0,t.length)===t}function i(e,t){return e.slice(-1*t.length)===t}function n(e,t,r){if((e[t]||e[r])&&e[t]===e[r])throw new Error(t)}function o(e){return"number"==typeof e&&isFinite(e)}function a(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]-t:-t))).toFixed(t)}function s(e,r,i,n,s,l,u,c,p,d,f,h){var m,v,g,b=h,y="",S="";return l&&(h=l(h)),!!o(h)&&(!1!==e&&0===parseFloat(h.toFixed(e))&&(h=0),h<0&&(m=!0,h=Math.abs(h)),!1!==e&&(h=a(h,e)),-1!==(h=h.toString()).indexOf(".")?(g=(v=h.split("."))[0],i&&(y=i+v[1])):g=h,r&&(g=t(g).match(/.{1,3}/g),g=t(g.join(t(r)))),m&&c&&(S+=c),n&&(S+=n),m&&p&&(S+=p),S+=g,S+=y,s&&(S+=s),d&&(S=d(S,b)),S)}function l(e,t,n,a,s,l,u,c,p,d,f,h){var m,v="";return f&&(h=f(h)),!(!h||"string"!=typeof h)&&(c&&r(h,c)&&(h=h.replace(c,""),m=!0),a&&r(h,a)&&(h=h.replace(a,"")),p&&r(h,p)&&(h=h.replace(p,""),m=!0),s&&i(h,s)&&(h=h.slice(0,-1*s.length)),t&&(h=h.split(t).join("")),n&&(h=h.replace(n,".")),m&&(v+="-"),""!==(v=(v+=h).replace(/[^0-9\.\-.]/g,""))&&(v=Number(v),u&&(v=u(v)),!!o(v)&&v))}function u(t){var r,i,o,a={};for(void 0===t.suffix&&(t.suffix=t.postfix),r=0;r<e.length;r+=1)if(void 0===(o=t[i=e[r]]))"negative"!==i||a.negativeBefore?"mark"===i&&"."!==a.thousand?a[i]=".":a[i]=!1:a[i]="-";else if("decimals"===i){if(!(o>=0&&o<8))throw new Error(i);a[i]=o}else if("encoder"===i||"decoder"===i||"edit"===i||"undo"===i){if("function"!=typeof o)throw new Error(i);a[i]=o}else{if("string"!=typeof o)throw new Error(i);a[i]=o}return n(a,"mark","thousand"),n(a,"prefix","negative"),n(a,"prefix","negativeBefore"),a}function c(t,r,i){var n,o=[];for(n=0;n<e.length;n+=1)o.push(t[e[n]]);return o.push(i),r.apply("",o)}function p(e){if(!(this instanceof p))return new p(e);"object"==typeof e&&(e=u(e),this.to=function(t){return c(e,s,t)},this.from=function(t){return c(e,l,t)})}return p}()}));var o=r(i((function(e,t){!function(e){function t(e){return r(e)&&"function"==typeof e.from}function r(e){return"object"==typeof e&&"function"==typeof e.to}function i(e){e.parentElement.removeChild(e)}function n(e){return null!=e}function o(e){e.preventDefault()}function a(e){return e.filter((function(e){return!this[e]&&(this[e]=!0)}),{})}function s(e,t){return Math.round(e/t)*t}function l(e,t){var r=e.getBoundingClientRect(),i=e.ownerDocument,n=i.documentElement,o=g(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),t?r.top+o.y-n.clientTop:r.left+o.x-n.clientLeft}function u(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function c(e,t,r){r>0&&(h(e,t),setTimeout((function(){m(e,t)}),r))}function p(e){return Math.max(Math.min(e,100),0)}function d(e){return Array.isArray(e)?e:[e]}function f(e){var t=(e=String(e)).split(".");return t.length>1?t[1].length:0}function h(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function m(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function v(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function g(e){var t=void 0!==window.pageXOffset,r="CSS1Compat"===(e.compatMode||"");return{x:t?window.pageXOffset:r?e.documentElement.scrollLeft:e.body.scrollLeft,y:t?window.pageYOffset:r?e.documentElement.scrollTop:e.body.scrollTop}}function b(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function y(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}function S(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(e,t){return 100/(t-e)}function w(e,t,r){return 100*t/(e[r+1]-e[r])}function E(e,t){return w(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}function P(e,t){return t*(e[1]-e[0])/100+e[0]}function C(e,t){for(var r=1;e>=t[r];)r+=1;return r}function N(e,t,r){if(r>=e.slice(-1)[0])return 100;var i=C(r,e),n=e[i-1],o=e[i],a=t[i-1],s=t[i];return a+E([n,o],r)/x(a,s)}function V(e,t,r){if(r>=100)return e.slice(-1)[0];var i=C(r,t),n=e[i-1],o=e[i],a=t[i-1];return P([n,o],(r-a)*x(a,t[i]))}function k(e,t,r,i){if(100===i)return i;var n=C(i,e),o=e[n-1],a=e[n];return r?i-o>(a-o)/2?a:o:t[n-1]?e[n-1]+s(i-e[n-1],t[n-1]):i}var A,M;e.PipsMode=void 0,(M=e.PipsMode||(e.PipsMode={})).Range="range",M.Steps="steps",M.Positions="positions",M.Count="count",M.Values="values",e.PipsType=void 0,(A=e.PipsType||(e.PipsType={}))[A.None=-1]="None",A[A.NoValue=0]="NoValue",A[A.LargeValue=1]="LargeValue",A[A.SmallValue=2]="SmallValue";var U=function(){function e(e,t,r){var i;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var n=[];for(Object.keys(e).forEach((function(t){n.push([d(e[t]),t])})),n.sort((function(e,t){return e[0][0]-t[0][0]})),i=0;i<n.length;i++)this.handleEntryPoint(n[i][1],n[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return e.prototype.getDistance=function(e){for(var t=[],r=0;r<this.xNumSteps.length-1;r++)t[r]=w(this.xVal,e,r);return t},e.prototype.getAbsoluteDistance=function(e,t,r){var i,n=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[n+1];)n++;else e===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||e!==this.xPct[n+1]||n++,null===t&&(t=[]);var o=1,a=t[n],s=0,l=0,u=0,c=0;for(i=r?(e-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-e)/(this.xPct[n+1]-this.xPct[n]);a>0;)s=this.xPct[n+1+c]-this.xPct[n+c],t[n+c]*o+100-100*i>100?(l=s*i,o=(a-100*i)/t[n+c],i=1):(l=t[n+c]*s/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=t[n+c]*o;return e+u},e.prototype.toStepping=function(e){return e=N(this.xVal,this.xPct,e)},e.prototype.fromStepping=function(e){return V(this.xVal,this.xPct,e)},e.prototype.getStep=function(e){return e=k(this.xPct,this.xSteps,this.snap,e)},e.prototype.getDefaultStep=function(e,t,r){var i=C(e,this.xPct);return(100===e||t&&e===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},e.prototype.getNearbySteps=function(e){var t=C(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},e.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(f);return Math.max.apply(null,e)},e.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},e.prototype.convert=function(e){return this.getStep(this.toStepping(e))},e.prototype.handleEntryPoint=function(e,t){var r;if(!u(r="min"===e?0:"max"===e?100:parseFloat(e))||!u(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(t[0]);var i=Number(t[1]);r?this.xSteps.push(!isNaN(i)&&i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},e.prototype.handleStepPoint=function(e,t){if(t)if(this.xVal[e]!==this.xVal[e+1]){this.xSteps[e]=w([this.xVal[e],this.xVal[e+1]],t,0)/x(this.xPct[e],this.xPct[e+1]);var r=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],i=Math.ceil(Number(r.toFixed(3))-1),n=this.xVal[e]+this.xNumSteps[e]*i;this.xHighestCompleteStep[e]=n}else this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e]},e}(),L={to:function(e){return void 0===e?"":e.toFixed(2)},from:Number},O={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},D={tooltips:".__tooltips",aria:".__aria"};function T(e,t){if(!u(t))throw new Error("noUiSlider: 'step' is not numeric.");e.singleStep=t}function j(e,t){if(!u(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function F(e,t){if(!u(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");e.keyboardMultiplier=t}function z(e,t){if(!u(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function _(e,t){if("object"!=typeof t||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===t.min||void 0===t.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");e.spectrum=new U(t,e.snap||!1,e.singleStep)}function R(e,t){if(t=d(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");e.handles=t.length,e.start=t}function H(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'snap' option must be a boolean.");e.snap=t}function q(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'animate' option must be a boolean.");e.animate=t}function B(e,t){if("number"!=typeof t)throw new Error("noUiSlider: 'animationDuration' option must be a number.");e.animationDuration=t}function $(e,t){var r,i=[!1];if("lower"===t?t=[!0,!1]:"upper"===t&&(t=[!1,!0]),!0===t||!1===t){for(r=1;r<e.handles;r++)i.push(t);i.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=t}e.connect=i}function X(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Y(e,t){if(!u(t))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==t&&(e.margin=e.spectrum.getDistance(t))}function I(e,t){if(!u(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function W(e,t){var r;if(!u(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&2!==t.length&&!u(t[0])&&!u(t[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==t){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],r=0;r<e.spectrum.xNumSteps.length-1;r++)if(e.padding[0][r]<0||e.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=t[0]+t[1],n=e.spectrum.xVal[0];if(i/(e.spectrum.xVal[e.spectrum.xVal.length-1]-n)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function G(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function J(e,t){if("string"!=typeof t)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=t.indexOf("tap")>=0,i=t.indexOf("drag")>=0,n=t.indexOf("fixed")>=0,o=t.indexOf("snap")>=0,a=t.indexOf("hover")>=0,s=t.indexOf("unconstrained")>=0,l=t.indexOf("drag-all")>=0,u=t.indexOf("smooth-steps")>=0;if(n){if(2!==e.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Y(e,e.start[1]-e.start[0])}if(s&&(e.margin||e.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:r||o,drag:i,dragAll:l,smoothSteps:u,fixed:n,snap:o,hover:a,unconstrained:s}}function K(e,t){if(!1!==t)if(!0===t||r(t)){e.tooltips=[];for(var i=0;i<e.handles;i++)e.tooltips.push(t)}else{if((t=d(t)).length!==e.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach((function(e){if("boolean"!=typeof e&&!r(e))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),e.tooltips=t}}function Q(e,t){if(t.length!==e.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");e.handleAttributes=t}function Z(e,t){if(!r(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");e.ariaFormat=t}function ee(e,r){if(!t(r))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");e.format=r}function te(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");e.keyboardSupport=t}function re(e,t){e.documentElement=t}function ie(e,t){if("string"!=typeof t&&!1!==t)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function ne(e,t){if("object"!=typeof t)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(t).forEach((function(r){e.cssClasses[r]=e.cssPrefix+t[r]}))):e.cssClasses=t}function oe(e){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:L,format:L},r={step:{r:!1,t:T},keyboardPageMultiplier:{r:!1,t:j},keyboardMultiplier:{r:!1,t:F},keyboardDefaultStep:{r:!1,t:z},start:{r:!0,t:R},connect:{r:!0,t:$},direction:{r:!0,t:G},snap:{r:!1,t:H},animate:{r:!1,t:q},animationDuration:{r:!1,t:B},range:{r:!0,t:_},orientation:{r:!1,t:X},margin:{r:!1,t:Y},limit:{r:!1,t:I},padding:{r:!1,t:W},behaviour:{r:!0,t:J},ariaFormat:{r:!1,t:Z},format:{r:!1,t:ee},tooltips:{r:!1,t:K},keyboardSupport:{r:!0,t:te},documentElement:{r:!1,t:re},cssPrefix:{r:!0,t:ie},cssClasses:{r:!0,t:ne},handleAttributes:{r:!1,t:Q}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:O,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(r).forEach((function(o){if(n(e[o])||void 0!==i[o])r[o].t(t,n(e[o])?e[o]:i[o]);else if(r[o].r)throw new Error("noUiSlider: '"+o+"' is required.")})),t.pips=e.pips;var o=document.createElement("div"),a=void 0!==o.style.msTransform,s=void 0!==o.style.transform;t.transformRule=s?"transform":a?"msTransform":"webkitTransform";var l=[["left","top"],["right","bottom"]];return t.style=l[t.dir][t.ort],t}function ae(t,r,s){var u,f,x,w,E,P=b(),C=S()&&y(),N=t,V=r.spectrum,k=[],A=[],M=[],U=0,L={},O=t.ownerDocument,T=r.documentElement||O.documentElement,j=O.body,F="rtl"===O.dir||1===r.ort?0:100;function z(e,t){var r=O.createElement("div");return t&&h(r,t),e.appendChild(r),r}function _(e,t){var i=z(e,r.cssClasses.origin),n=z(i,r.cssClasses.handle);if(z(n,r.cssClasses.touchArea),n.setAttribute("data-handle",String(t)),r.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(e){return fe(e,t)}))),void 0!==r.handleAttributes){var o=r.handleAttributes[t];Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])}))}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===t?h(n,r.cssClasses.handleLower):t===r.handles-1&&h(n,r.cssClasses.handleUpper),i}function R(e,t){return!!t&&z(e,r.cssClasses.connect)}function H(e,t){var i=z(t,r.cssClasses.connects);f=[],(x=[]).push(R(i,e[0]));for(var n=0;n<r.handles;n++)f.push(_(t,n)),M[n]=n,x.push(R(i,e[n+1]))}function q(e){return h(e,r.cssClasses.target),0===r.dir?h(e,r.cssClasses.ltr):h(e,r.cssClasses.rtl),0===r.ort?h(e,r.cssClasses.horizontal):h(e,r.cssClasses.vertical),h(e,"rtl"===getComputedStyle(e).direction?r.cssClasses.textDirectionRtl:r.cssClasses.textDirectionLtr),z(e,r.cssClasses.base)}function B(e,t){return!(!r.tooltips||!r.tooltips[t])&&z(e.firstChild,r.cssClasses.tooltip)}function $(){return N.hasAttribute("disabled")}function X(e){return f[e].hasAttribute("disabled")}function Y(){E&&(ge("update"+D.tooltips),E.forEach((function(e){e&&i(e)})),E=null)}function I(){Y(),E=f.map(B),me("update"+D.tooltips,(function(e,t,i){if(E&&r.tooltips&&!1!==E[t]){var n=e[t];!0!==r.tooltips[t]&&(n=r.tooltips[t].to(i[t])),E[t].innerHTML=n}}))}function W(){ge("update"+D.aria),me("update"+D.aria,(function(e,t,i,n,o){M.forEach((function(e){var t=f[e],n=ye(A,e,0,!0,!0,!0),a=ye(A,e,100,!0,!0,!0),s=o[e],l=String(r.ariaFormat.to(i[e]));n=V.fromStepping(n).toFixed(1),a=V.fromStepping(a).toFixed(1),s=V.fromStepping(s).toFixed(1),t.children[0].setAttribute("aria-valuemin",n),t.children[0].setAttribute("aria-valuemax",a),t.children[0].setAttribute("aria-valuenow",s),t.children[0].setAttribute("aria-valuetext",l)}))}))}function G(t){if(t.mode===e.PipsMode.Range||t.mode===e.PipsMode.Steps)return V.xVal;if(t.mode===e.PipsMode.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=t.values-1,i=100/r,n=[];r--;)n[r]=r*i;return n.push(100),J(n,t.stepped)}return t.mode===e.PipsMode.Positions?J(t.values,t.stepped):t.mode===e.PipsMode.Values?t.stepped?t.values.map((function(e){return V.fromStepping(V.getStep(V.toStepping(e)))})):t.values:[]}function J(e,t){return e.map((function(e){return V.fromStepping(t?V.getStep(e):e)}))}function K(t){function r(e,t){return Number((e+t).toFixed(7))}var i=G(t),n={},o=V.xVal[0],s=V.xVal[V.xVal.length-1],l=!1,u=!1,c=0;return(i=a(i.slice().sort((function(e,t){return e-t}))))[0]!==o&&(i.unshift(o),l=!0),i[i.length-1]!==s&&(i.push(s),u=!0),i.forEach((function(o,a){var s,p,d,f,h,m,v,g,b,y,S=o,x=i[a+1],w=t.mode===e.PipsMode.Steps;for(w&&(s=V.xNumSteps[a]),s||(s=x-S),void 0===x&&(x=S),s=Math.max(s,1e-7),p=S;p<=x;p=r(p,s)){for(g=(h=(f=V.toStepping(p))-c)/(t.density||1),y=h/(b=Math.round(g)),d=1;d<=b;d+=1)n[(m=c+d*y).toFixed(5)]=[V.fromStepping(m),0];v=i.indexOf(p)>-1?e.PipsType.LargeValue:w?e.PipsType.SmallValue:e.PipsType.NoValue,!a&&l&&p!==x&&(v=0),p===x&&u||(n[f.toFixed(5)]=[p,v]),c=f}})),n}function Q(t,i,n){var o,a,s=O.createElement("div"),l=((o={})[e.PipsType.None]="",o[e.PipsType.NoValue]=r.cssClasses.valueNormal,o[e.PipsType.LargeValue]=r.cssClasses.valueLarge,o[e.PipsType.SmallValue]=r.cssClasses.valueSub,o),u=((a={})[e.PipsType.None]="",a[e.PipsType.NoValue]=r.cssClasses.markerNormal,a[e.PipsType.LargeValue]=r.cssClasses.markerLarge,a[e.PipsType.SmallValue]=r.cssClasses.markerSub,a),c=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],p=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function d(e,t){var i=t===r.cssClasses.value,n=i?l:u;return t+" "+(i?c:p)[r.ort]+" "+n[e]}function f(t,o,a){if((a=i?i(o,a):a)!==e.PipsType.None){var l=z(s,!1);l.className=d(a,r.cssClasses.marker),l.style[r.style]=t+"%",a>e.PipsType.NoValue&&((l=z(s,!1)).className=d(a,r.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[r.style]=t+"%",l.innerHTML=String(n.to(o)))}}return h(s,r.cssClasses.pips),h(s,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){f(e,t[e][0],t[e][1])})),s}function Z(){w&&(i(w),w=null)}function ee(e){Z();var t=K(e),r=e.filter,i=e.format||{to:function(e){return String(Math.round(e))}};return w=N.appendChild(Q(t,r,i))}function te(){var e=u.getBoundingClientRect(),t="offset"+["Width","Height"][r.ort];return 0===r.ort?e.width||u[t]:e.height||u[t]}function re(e,t,i,n){var o=function(o){var a=ie(o,n.pageOffset,n.target||t);return!!a&&!($()&&!n.doNotReject)&&!(v(N,r.cssClasses.tap)&&!n.doNotReject)&&!(e===P.start&&void 0!==a.buttons&&a.buttons>1)&&(!n.hover||!a.buttons)&&(C||a.preventDefault(),a.calcPoint=a.points[r.ort],void i(a,n))},a=[];return e.split(" ").forEach((function(e){t.addEventListener(e,o,!!C&&{passive:!0}),a.push([e,o])})),a}function ie(e,t,r){var i=0===e.type.indexOf("touch"),n=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),a=0,s=0;if(0===e.type.indexOf("MSPointer")&&(o=!0),"mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(i){var l=function(t){var i=t.target;return i===r||r.contains(i)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){var u=Array.prototype.filter.call(e.touches,l);if(u.length>1)return!1;a=u[0].pageX,s=u[0].pageY}else{var c=Array.prototype.find.call(e.changedTouches,l);if(!c)return!1;a=c.pageX,s=c.pageY}}return t=t||g(O),(n||o)&&(a=e.clientX+t.x,s=e.clientY+t.y),e.pageOffset=t,e.points=[a,s],e.cursor=n||o,e}function ne(e){var t=100*(e-l(u,r.ort))/te();return t=p(t),r.dir?100-t:t}function ae(e){var t=100,r=!1;return f.forEach((function(i,n){if(!X(n)){var o=A[n],a=Math.abs(o-e);(a<t||a<=t&&e>o||100===a&&100===t)&&(r=n,t=a)}})),r}function se(e,t){"mouseout"===e.type&&"HTML"===e.target.nodeName&&null===e.relatedTarget&&ue(e,t)}function le(e,t){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===e.buttons&&0!==t.buttonsProperty)return ue(e,t);var i=(r.dir?-1:1)*(e.calcPoint-t.startCalcPoint);xe(i>0,100*i/t.baseSize,t.locations,t.handleNumbers,t.connect)}function ue(e,t){t.handle&&(m(t.handle,r.cssClasses.active),U-=1),t.listeners.forEach((function(e){T.removeEventListener(e[0],e[1])})),0===U&&(m(N,r.cssClasses.drag),Pe(),e.cursor&&(j.style.cursor="",j.removeEventListener("selectstart",o))),r.events.smoothSteps&&(t.handleNumbers.forEach((function(e){Ce(e,A[e],!0,!0,!1,!1)})),t.handleNumbers.forEach((function(e){be("update",e)}))),t.handleNumbers.forEach((function(e){be("change",e),be("set",e),be("end",e)}))}function ce(e,t){if(!t.handleNumbers.some(X)){var i;1===t.handleNumbers.length&&(i=f[t.handleNumbers[0]].children[0],U+=1,h(i,r.cssClasses.active)),e.stopPropagation();var n=[],a=re(P.move,T,le,{target:e.target,handle:i,connect:t.connect,listeners:n,startCalcPoint:e.calcPoint,baseSize:te(),pageOffset:e.pageOffset,handleNumbers:t.handleNumbers,buttonsProperty:e.buttons,locations:A.slice()}),s=re(P.end,T,ue,{target:e.target,handle:i,listeners:n,doNotReject:!0,handleNumbers:t.handleNumbers}),l=re("mouseout",T,se,{target:e.target,handle:i,listeners:n,doNotReject:!0,handleNumbers:t.handleNumbers});n.push.apply(n,a.concat(s,l)),e.cursor&&(j.style.cursor=getComputedStyle(e.target).cursor,f.length>1&&h(N,r.cssClasses.drag),j.addEventListener("selectstart",o,!1)),t.handleNumbers.forEach((function(e){be("start",e)}))}}function pe(e){e.stopPropagation();var t=ne(e.calcPoint),i=ae(t);!1!==i&&(r.events.snap||c(N,r.cssClasses.tap,r.animationDuration),Ce(i,t,!0,!0),Pe(),be("slide",i,!0),be("update",i,!0),r.events.snap?ce(e,{handleNumbers:[i]}):(be("change",i,!0),be("set",i,!0)))}function de(e){var t=ne(e.calcPoint),r=V.getStep(t),i=V.fromStepping(r);Object.keys(L).forEach((function(e){"hover"===e.split(".")[0]&&L[e].forEach((function(e){e.call(Fe,i)}))}))}function fe(e,t){if($()||X(t))return!1;var i=["Left","Right"],n=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];r.dir&&!r.ort?i.reverse():r.ort&&!r.dir&&(n.reverse(),o.reverse());var s,l=e.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===n[0]||l===i[0]||u,d=l===n[1]||l===i[1]||c,f=l===a[0],h=l===a[1];if(!(p||d||f||h))return!0;if(e.preventDefault(),d||p){var m=p?0:1,v=Oe(t)[m];if(null===v)return!1;!1===v&&(v=V.getDefaultStep(A[t],p,r.keyboardDefaultStep)),v*=c||u?r.keyboardPageMultiplier:r.keyboardMultiplier,v=Math.max(v,1e-7),v*=p?-1:1,s=k[t]+v}else s=h?r.spectrum.xVal[r.spectrum.xVal.length-1]:r.spectrum.xVal[0];return Ce(t,V.toStepping(s),!0,!0),be("slide",t),be("update",t),be("change",t),be("set",t),!1}function he(e){e.fixed||f.forEach((function(e,t){re(P.start,e.children[0],ce,{handleNumbers:[t]})})),e.tap&&re(P.start,u,pe,{}),e.hover&&re(P.move,u,de,{hover:!0}),e.drag&&x.forEach((function(t,i){if(!1!==t&&0!==i&&i!==x.length-1){var n=f[i-1],o=f[i],a=[t],s=[n,o],l=[i-1,i];h(t,r.cssClasses.draggable),e.fixed&&(a.push(n.children[0]),a.push(o.children[0])),e.dragAll&&(s=f,l=M),a.forEach((function(e){re(P.start,e,ce,{handles:s,handleNumbers:l,connect:t})}))}}))}function me(e,t){L[e]=L[e]||[],L[e].push(t),"update"===e.split(".")[0]&&f.forEach((function(e,t){be("update",t)}))}function ve(e){return e===D.aria||e===D.tooltips}function ge(e){var t=e&&e.split(".")[0],r=t?e.substring(t.length):e;Object.keys(L).forEach((function(e){var i=e.split(".")[0],n=e.substring(i.length);t&&t!==i||r&&r!==n||ve(n)&&r!==n||delete L[e]}))}function be(e,t,i){Object.keys(L).forEach((function(n){var o=n.split(".")[0];e===o&&L[n].forEach((function(e){e.call(Fe,k.map(r.format.to),t,k.slice(),i||!1,A.slice(),Fe)}))}))}function ye(e,t,i,n,o,a,s){var l;return f.length>1&&!r.events.unconstrained&&(n&&t>0&&(l=V.getAbsoluteDistance(e[t-1],r.margin,!1),i=Math.max(i,l)),o&&t<f.length-1&&(l=V.getAbsoluteDistance(e[t+1],r.margin,!0),i=Math.min(i,l))),f.length>1&&r.limit&&(n&&t>0&&(l=V.getAbsoluteDistance(e[t-1],r.limit,!1),i=Math.min(i,l)),o&&t<f.length-1&&(l=V.getAbsoluteDistance(e[t+1],r.limit,!0),i=Math.max(i,l))),r.padding&&(0===t&&(l=V.getAbsoluteDistance(0,r.padding[0],!1),i=Math.max(i,l)),t===f.length-1&&(l=V.getAbsoluteDistance(100,r.padding[1],!0),i=Math.min(i,l))),s||(i=V.getStep(i)),!((i=p(i))===e[t]&&!a)&&i}function Se(e,t){var i=r.ort;return(i?t:e)+", "+(i?e:t)}function xe(e,t,i,n,o){var a=i.slice(),s=n[0],l=r.events.smoothSteps,u=[!e,e],c=[e,!e];n=n.slice(),e&&n.reverse(),n.length>1?n.forEach((function(e,r){var i=ye(a,e,a[e]+t,u[r],c[r],!1,l);!1===i?t=0:(t=i-a[e],a[e]=i)})):u=c=[!0];var p=!1;n.forEach((function(e,r){p=Ce(e,i[e]+t,u[r],c[r],!1,l)||p})),p&&(n.forEach((function(e){be("update",e),be("slide",e)})),null!=o&&be("drag",s))}function we(e,t){return r.dir?100-e-t:e}function Ee(e,t){A[e]=t,k[e]=V.fromStepping(t);var i="translate("+Se(we(t,0)-F+"%","0")+")";f[e].style[r.transformRule]=i,Ne(e),Ne(e+1)}function Pe(){M.forEach((function(e){var t=A[e]>50?-1:1,r=3+(f.length+t*e);f[e].style.zIndex=String(r)}))}function Ce(e,t,r,i,n,o){return n||(t=ye(A,e,t,r,i,!1,o)),!1!==t&&(Ee(e,t),!0)}function Ne(e){if(x[e]){var t=0,i=100;0!==e&&(t=A[e-1]),e!==x.length-1&&(i=A[e]);var n=i-t,o="translate("+Se(we(t,n)+"%","0")+")",a="scale("+Se(n/100,"1")+")";x[e].style[r.transformRule]=o+" "+a}}function Ve(e,t){return null===e||!1===e||void 0===e?A[t]:("number"==typeof e&&(e=String(e)),!1!==(e=r.format.from(e))&&(e=V.toStepping(e)),!1===e||isNaN(e)?A[t]:e)}function ke(e,t,i){var n=d(e),o=void 0===A[0];t=void 0===t||t,r.animate&&!o&&c(N,r.cssClasses.tap,r.animationDuration),M.forEach((function(e){Ce(e,Ve(n[e],e),!0,!1,i)}));var a=1===M.length?0:1;if(o&&V.hasNoSize()&&(i=!0,A[0]=0,M.length>1)){var s=100/(M.length-1);M.forEach((function(e){A[e]=e*s}))}for(;a<M.length;++a)M.forEach((function(e){Ce(e,A[e],!0,!0,i)}));Pe(),M.forEach((function(e){be("update",e),null!==n[e]&&t&&be("set",e)}))}function Ae(e){ke(r.start,e)}function Me(e,t,r,i){if(!((e=Number(e))>=0&&e<M.length))throw new Error("noUiSlider: invalid handle number, got: "+e);Ce(e,Ve(t,e),!0,!0,i),be("update",e),r&&be("set",e)}function Ue(e){if(void 0===e&&(e=!1),e)return 1===k.length?k[0]:k.slice(0);var t=k.map(r.format.to);return 1===t.length?t[0]:t}function Le(){for(ge(D.aria),ge(D.tooltips),Object.keys(r.cssClasses).forEach((function(e){m(N,r.cssClasses[e])}));N.firstChild;)N.removeChild(N.firstChild);delete N.noUiSlider}function Oe(e){var t=A[e],i=V.getNearbySteps(t),n=k[e],o=i.thisStep.step,a=null;if(r.snap)return[n-i.stepBefore.startValue||null,i.stepAfter.startValue-n||null];!1!==o&&n+o>i.stepAfter.startValue&&(o=i.stepAfter.startValue-n),a=n>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&n-i.stepBefore.highestStep,100===t?o=null:0===t&&(a=null);var s=V.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function De(){return M.map(Oe)}function Te(e,t){var i=Ue(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(t){void 0!==e[t]&&(s[t]=e[t])}));var a=oe(s);o.forEach((function(t){void 0!==e[t]&&(r[t]=a[t])})),V=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips?ee(r.pips):Z(),r.tooltips?I():Y(),A=[],ke(n(e.start)?e.start:i,t)}function je(){u=q(N),H(r.connect,u),he(r.events),ke(r.start),r.pips&&ee(r.pips),r.tooltips&&I(),W()}je();var Fe={destroy:Le,steps:De,on:me,off:ge,get:Ue,set:ke,setHandle:Me,reset:Ae,__moveHandles:function(e,t,r){xe(e,t,A,r)},options:s,updateOptions:Te,target:N,removePips:Z,removeTooltips:Y,getPositions:function(){return A.slice()},getTooltips:function(){return E},getOrigins:function(){return f},pips:ee};return Fe}function se(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=ae(e,oe(t),t);return e.noUiSlider=r,r}var le={__spectrum:U,cssClasses:O,create:se};e.create=se,e.cssClasses=O,e.default=le,Object.defineProperty(e,"__esModule",{value:!0})}(t)})));function a(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;const r=t.slice().sort();return e.length===t.length&&e.slice().sort().every((function(e,t){return e===r[t]}))}var s={name:"Slider",emits:["input","update:modelValue","update","change"],props:{...{value:{validator:function(e){return e=>"number"==typeof e||e instanceof Array||null==e||!1===e},required:!1},modelValue:{validator:function(e){return e=>"number"==typeof e||e instanceof Array||null==e||!1===e},required:!1}},id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null},lazy:{type:Boolean,required:!1,default:!0}},setup(r,i){const s=function(r,i,n){const{value:o,modelValue:a}=e.toRefs(r),s=a&&void 0!==a.value?a:o,l=e.ref(s.value);if(t(s.value))throw new Error("Slider v-model must be a Number or Array");if(Array.isArray(s.value)&&0==s.value.length)throw new Error("Slider v-model must not be an empty array");return{value:s,initialValue:l}}(r),l=function(t,r,i){const{classes:n,showTooltip:o,tooltipPosition:a,orientation:s}=e.toRefs(t),l=e.computed((()=>({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleLower:"slider-handle-lower",handleUpper:"slider-handle-upper",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub",...n.value})));return{classList:e.computed((()=>{const e={...l.value};return Object.keys(e).forEach((t=>{e[t]=Array.isArray(e[t])?e[t].filter((e=>null!==e)).join(" "):e[t]})),"always"!==o.value&&(e.target+=` ${"drag"===o.value?e.tooltipDrag:e.tooltipFocus}`),"horizontal"===s.value&&(e.tooltip+="bottom"===a.value?` ${e.tooltipBottom}`:` ${e.tooltipTop}`),"vertical"===s.value&&(e.tooltip+="right"===a.value?` ${e.tooltipRight}`:` ${e.tooltipLeft}`),e}))}}(r),u=function(t,r,i){const{format:o,step:a}=e.toRefs(t),s=i.value,l=i.classList,u=e.computed((()=>o&&o.value?"function"==typeof o.value?{to:o.value}:n({...o.value}):n({decimals:a.value>=0?0:2})));return{tooltipsFormat:e.computed((()=>Array.isArray(s.value)?s.value.map((e=>u.value)):u.value)),tooltipsMerge:(e,t,r)=>{var i="rtl"===getComputedStyle(e).direction,n="rtl"===e.noUiSlider.options.direction,o="vertical"===e.noUiSlider.options.orientation,a=e.noUiSlider.getTooltips(),s=e.noUiSlider.getOrigins();a.forEach((function(e,t){e&&s[t].appendChild(e)})),e.noUiSlider.on("update",(function(e,s,c,p,d){var f=[[]],h=[[]],m=[[]],v=0;a[0]&&(f[0][0]=0,h[0][0]=d[0],m[0][0]=u.value.to(parseFloat(e[0])));for(var g=1;g<e.length;g++)(!a[g]||e[g]-e[g-1]>t)&&(f[++v]=[],m[v]=[],h[v]=[]),a[g]&&(f[v].push(g),m[v].push(u.value.to(parseFloat(e[g]))),h[v].push(d[g]));f.forEach((function(e,t){for(var s=e.length,u=0;u<s;u++){var c=e[u];if(u===s-1){var p=0;h[t].forEach((function(e){p+=1e3-e}));var d=o?"bottom":"right",f=n?0:s-1,v=1e3-h[t][f];p=(i&&!o?100:0)+p/s-v,a[c].innerHTML=m[t].join(r),a[c].style.display="block",a[c].style[d]=p+"%",l.value.tooltipHidden.split(" ").forEach((e=>{a[c].classList.contains(e)&&a[c].classList.remove(e)}))}else a[c].style.display="none",l.value.tooltipHidden.split(" ").forEach((e=>{a[c].classList.add(e)}))}}))}))}}}(r,0,{value:s.value,classList:l.classList}),c=function(r,i,n){const{orientation:s,direction:l,tooltips:u,step:c,min:p,max:d,merge:f,id:h,disabled:m,options:v,classes:g,format:b,lazy:y}=e.toRefs(r),S=n.value,x=n.initialValue,w=n.tooltipsFormat,E=n.tooltipsMerge,P=n.classList,C=e.ref(null),N=e.ref(null),V=e.ref(!1),k=e.computed((()=>{let e={cssPrefix:"",cssClasses:P.value,orientation:s.value,direction:l.value,tooltips:!!u.value&&w.value,connect:"lower",start:t(S.value)?p.value:S.value,range:{min:p.value,max:d.value}};return c.value>0&&(e.step=c.value),Array.isArray(S.value)&&(e.connect=!0),e})),A=e.computed((()=>{let e={id:h&&h.value?h.value:void 0};return m.value&&(e.disabled=!0),e})),M=e.computed((()=>Array.isArray(S.value))),U=()=>{let e=N.value.get();return Array.isArray(e)?e.map((e=>parseFloat(e))):parseFloat(e)},L=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];N.value.set(e,t)},O=e=>{i.emit("input",e),i.emit("update:modelValue",e),i.emit("update",e)},D=()=>{N.value=o.create(C.value,Object.assign({},k.value,v.value)),u.value&&M.value&&f.value>=0&&E(C.value,f.value," - "),N.value.on("set",(e=>{const t=U();i.emit("change",t),y.value&&O(t)})),N.value.on("update",(e=>{if(!V.value)return;const t=U();M.value&&a(S.value,t)||!M.value&&S.value==t?i.emit("update",t):y.value||O(t)})),C.value.querySelectorAll("[data-handle]").forEach((e=>{e.onblur=()=>{P.value.focused.split(" ").forEach((e=>{C.value.classList.remove(e)}))},e.onfocus=()=>{P.value.focused.split(" ").forEach((e=>{C.value.classList.add(e)}))}})),V.value=!0},T=()=>{N.value.off(),N.value.destroy(),N.value=null},j=(e,t)=>{V.value=!1,T(),D()};return e.onMounted(D),e.onUnmounted(T),e.watch(S,((e,t)=>{t&&("object"==typeof t&&"object"==typeof e&&e&&Object.keys(t)>Object.keys(e)||"object"==typeof t&&"object"!=typeof e||!e)&&j()}),{immediate:!1}),e.watch(M,j,{immediate:!1}),e.watch(p,j,{immediate:!1}),e.watch(d,j,{immediate:!1}),e.watch(c,j,{immediate:!1}),e.watch(s,j,{immediate:!1}),e.watch(l,j,{immediate:!1}),e.watch(u,j,{immediate:!1}),e.watch(f,j,{immediate:!1}),e.watch(b,j,{immediate:!1,deep:!0}),e.watch(v,j,{immediate:!1,deep:!0}),e.watch(g,j,{immediate:!1,deep:!0}),e.watch(S,(e=>{if(t(e))return void L(p.value,!1);let r=U();M.value&&!Array.isArray(r)&&(r=[r]),(M.value&&!a(e,r)||!M.value&&e!=r)&&L(e,!1)}),{deep:!0}),{slider:C,slider$:N,isRange:M,sliderProps:A,init:D,destroy:T,refresh:j,update:L,reset:()=>{O(x.value)}}}(r,i,{value:s.value,initialValue:s.initialValue,tooltipsFormat:u.tooltipsFormat,tooltipsMerge:u.tooltipsMerge,classList:l.classList});return{...l,...u,...c}}};function l(e,t,r,i,n,o,a,s,l,u){"boolean"!=typeof a&&(l=s,s=a,a=!1);const c="function"==typeof r?r.options:r;let p;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),i&&(c._scopeId=i),o?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=p):t&&(p=a?function(e){t.call(this,u(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),p)if(c.functional){const e=c.render;c.render=function(t,r){return p.call(r),e(t,r)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,p):[p]}return r}const u=s;var c=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",e._b({ref:"slider"},"div",e.sliderProps,!1))};c._withStripped=!0;return l({render:c,staticRenderFns:[]},undefined,u,undefined,false,undefined,!1,void 0,void 0,void 0)}(Vue);

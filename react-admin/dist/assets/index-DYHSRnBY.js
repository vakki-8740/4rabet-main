function Mk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var RE={exports:{}},Nd={},kE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=Symbol.for("react.element"),jk=Symbol.for("react.portal"),Uk=Symbol.for("react.fragment"),Bk=Symbol.for("react.strict_mode"),zk=Symbol.for("react.profiler"),$k=Symbol.for("react.provider"),qk=Symbol.for("react.context"),Wk=Symbol.for("react.forward_ref"),Gk=Symbol.for("react.suspense"),Kk=Symbol.for("react.memo"),Hk=Symbol.for("react.lazy"),pv=Symbol.iterator;function Qk(t){return t===null||typeof t!="object"?null:(t=pv&&t[pv]||t["@@iterator"],typeof t=="function"?t:null)}var xE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},CE=Object.assign,bE={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=bE,this.updater=n||xE}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function NE(){}NE.prototype=Uo.prototype;function Dm(t,e,n){this.props=t,this.context=e,this.refs=bE,this.updater=n||xE}var Vm=Dm.prototype=new NE;Vm.constructor=Dm;CE(Vm,Uo.prototype);Vm.isPureReactComponent=!0;var mv=Array.isArray,DE=Object.prototype.hasOwnProperty,Om={current:null},VE={key:!0,ref:!0,__self:!0,__source:!0};function OE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)DE.call(e,r)&&!VE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zl,type:t,key:s,ref:o,props:i,_owner:Om.current}}function Yk(t,e){return{$$typeof:Zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zl}function Jk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gv=/\/+/g;function ef(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jk(""+t.key):e.toString(36)}function pc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zl:case jk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ef(o,0):r,mv(i)?(n="",t!=null&&(n=t.replace(gv,"$&/")+"/"),pc(i,e,n,"",function(c){return c})):i!=null&&(Lm(i)&&(i=Yk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ef(s,a);o+=pc(s,e,n,l,i)}else if(l=Qk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ef(s,a++),o+=pc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zu(t,e,n){if(t==null)return t;var r=[],i=0;return pc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},mc={transition:null},Zk={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:mc,ReactCurrentOwner:Om};function LE(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:zu,forEach:function(t,e,n){zu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zu(t,function(){e++}),e},toArray:function(t){return zu(t,function(e){return e})||[]},only:function(t){if(!Lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Uo;se.Fragment=Uk;se.Profiler=zk;se.PureComponent=Dm;se.StrictMode=Bk;se.Suspense=Gk;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;se.act=LE;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=CE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Om.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)DE.call(e,l)&&!VE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zl,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:qk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$k,_context:t},t.Consumer=t};se.createElement=OE;se.createFactory=function(t){var e=OE.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:Wk,render:t}};se.isValidElement=Lm;se.lazy=function(t){return{$$typeof:Hk,_payload:{_status:-1,_result:t},_init:Xk}};se.memo=function(t,e){return{$$typeof:Kk,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};se.unstable_act=LE;se.useCallback=function(t,e){return Vt.current.useCallback(t,e)};se.useContext=function(t){return Vt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Vt.current.useEffect(t,e)};se.useId=function(){return Vt.current.useId()};se.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Vt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};se.useRef=function(t){return Vt.current.useRef(t)};se.useState=function(t){return Vt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Vt.current.useTransition()};se.version="18.3.1";kE.exports=se;var D=kE.exports;const ex=Fk(D),tx=Mk({__proto__:null,default:ex},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=D,rx=Symbol.for("react.element"),ix=Symbol.for("react.fragment"),sx=Object.prototype.hasOwnProperty,ox=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ax={key:!0,ref:!0,__self:!0,__source:!0};function ME(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sx.call(e,r)&&!ax.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rx,type:t,key:s,ref:o,props:i,_owner:ox.current}}Nd.Fragment=ix;Nd.jsx=ME;Nd.jsxs=ME;RE.exports=Nd;var f=RE.exports,FE={exports:{}},nn={},jE={exports:{}},UE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Q){var X=U.length;U.push(Q);e:for(;0<X;){var le=X-1>>>1,fe=U[le];if(0<i(fe,Q))U[le]=Q,U[X]=fe,X=le;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Q=U[0],X=U.pop();if(X!==Q){U[0]=X;e:for(var le=0,fe=U.length,Se=fe>>>1;le<Se;){var Kt=2*(le+1)-1,Wn=U[Kt],Gn=Kt+1,Kn=U[Gn];if(0>i(Wn,X))Gn<fe&&0>i(Kn,Wn)?(U[le]=Kn,U[Gn]=X,le=Gn):(U[le]=Wn,U[Kt]=X,le=Kt);else if(Gn<fe&&0>i(Kn,X))U[le]=Kn,U[Gn]=X,le=Gn;else break e}}return Q}function i(U,Q){var X=U.sortIndex-Q.sortIndex;return X!==0?X:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,g=3,v=!1,S=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(U){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=U)r(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function O(U){if(k=!1,T(U),!S)if(n(l)!==null)S=!0,Pn(j);else{var Q=n(c);Q!==null&&B(O,Q.startTime-U)}}function j(U,Q){S=!1,k&&(k=!1,E(_),_=-1),v=!0;var X=g;try{for(T(Q),p=n(l);p!==null&&(!(p.expirationTime>Q)||U&&!x());){var le=p.callback;if(typeof le=="function"){p.callback=null,g=p.priorityLevel;var fe=le(p.expirationTime<=Q);Q=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(l)&&r(l),T(Q)}else r(l);p=n(l)}if(p!==null)var Se=!0;else{var Kt=n(c);Kt!==null&&B(O,Kt.startTime-Q),Se=!1}return Se}finally{p=null,g=X,v=!1}}var F=!1,I=null,_=-1,A=5,P=-1;function x(){return!(t.unstable_now()-P<A)}function b(){if(I!==null){var U=t.unstable_now();P=U;var Q=!0;try{Q=I(!0,U)}finally{Q?R():(F=!1,I=null)}}else F=!1}var R;if(typeof w=="function")R=function(){w(b)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Gt=at.port2;at.port1.onmessage=b,R=function(){Gt.postMessage(null)}}else R=function(){C(b,0)};function Pn(U){I=U,F||(F=!0,R())}function B(U,Q){_=C(function(){U(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,Pn(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return U()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=g;g=U;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function(U,Q,X){var le=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?le+X:le):X=le,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=X+fe,U={id:h++,callback:Q,priorityLevel:U,startTime:X,expirationTime:fe,sortIndex:-1},X>le?(U.sortIndex=X,e(c,U),n(l)===null&&U===n(c)&&(k?(E(_),_=-1):k=!0,B(O,X-le))):(U.sortIndex=fe,e(l,U),S||v||(S=!0,Pn(j))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var Q=g;return function(){var X=g;g=Q;try{return U.apply(this,arguments)}finally{g=X}}}})(UE);jE.exports=UE;var lx=jE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux=D,en=lx;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BE=new Set,hl={};function gs(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(hl[t]=e,t=0;t<e.length;t++)BE.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yv={},_v={};function dx(t){return Kf.call(_v,t)?!0:Kf.call(yv,t)?!1:cx.test(t)?_v[t]=!0:(yv[t]=!0,!1)}function hx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fx(t,e,n,r){if(e===null||typeof e>"u"||hx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mm=/[\-:]([a-z])/g;function Fm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mm,Fm);ft[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mm,Fm);ft[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mm,Fm);ft[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function jm(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fx(e,n,i,r)&&(n=null),r||i===null?dx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$u=Symbol.for("react.element"),$s=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),$E=Symbol.for("react.context"),Bm=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),zm=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),qE=Symbol.for("react.offscreen"),vv=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=vv&&t[vv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,tf;function Ma(t){if(tf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tf=e&&e[1]||""}return`
`+tf+t}var nf=!1;function rf(t,e){if(!t||nf)return"";nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function px(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=rf(t.type,!1),t;case 11:return t=rf(t.type.render,!1),t;case 1:return t=rf(t.type,!0),t;default:return""}}function Jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case $s:return"Portal";case Hf:return"Profiler";case Um:return"StrictMode";case Qf:return"Suspense";case Yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $E:return(t.displayName||"Context")+".Consumer";case zE:return(t._context.displayName||"Context")+".Provider";case Bm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zm:return e=t.displayName||null,e!==null?e:Jf(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return Jf(t(e))}catch{}}return null}function mx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jf(e);case 8:return e===Um?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function WE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gx(t){var e=WE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qu(t){t._valueTracker||(t._valueTracker=gx(t))}function GE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=WE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KE(t,e){e=e.checked,e!=null&&jm(t,"checked",e,!1)}function Zf(t,e){KE(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Iv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function no(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ev(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Fa(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function HE(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function QE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?QE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wu,YE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wu=Wu||document.createElement("div"),Wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yx=["Webkit","ms","Moz","O"];Object.keys(Ka).forEach(function(t){yx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ka[e]=Ka[t]})});function JE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ka.hasOwnProperty(t)&&Ka[t]?(""+e).trim():e+"px"}function XE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=JE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _x=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(_x[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function $m(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var op=null,ro=null,io=null;function Sv(t){if(t=nu(t)){if(typeof op!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Md(e),op(t.stateNode,t.type,e))}}function ZE(t){ro?io?io.push(t):io=[t]:ro=t}function eT(){if(ro){var t=ro,e=io;if(io=ro=null,Sv(t),e)for(t=0;t<e.length;t++)Sv(e[t])}}function tT(t,e){return t(e)}function nT(){}var sf=!1;function rT(t,e,n){if(sf)return t(e,n);sf=!0;try{return tT(t,e,n)}finally{sf=!1,(ro!==null||io!==null)&&(nT(),eT())}}function pl(t,e){var n=t.stateNode;if(n===null)return null;var r=Md(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var ap=!1;if(lr)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){ap=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{ap=!1}function vx(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ha=!1,Uc=null,Bc=!1,lp=null,wx={onError:function(t){Ha=!0,Uc=t}};function Ix(t,e,n,r,i,s,o,a,l){Ha=!1,Uc=null,vx.apply(wx,arguments)}function Ex(t,e,n,r,i,s,o,a,l){if(Ix.apply(this,arguments),Ha){if(Ha){var c=Uc;Ha=!1,Uc=null}else throw Error(q(198));Bc||(Bc=!0,lp=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Av(t){if(ys(t)!==t)throw Error(q(188))}function Tx(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Av(i),t;if(s===r)return Av(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function sT(t){return t=Tx(t),t!==null?oT(t):null}function oT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=oT(t);if(e!==null)return e;t=t.sibling}return null}var aT=en.unstable_scheduleCallback,Pv=en.unstable_cancelCallback,Sx=en.unstable_shouldYield,Ax=en.unstable_requestPaint,ze=en.unstable_now,Px=en.unstable_getCurrentPriorityLevel,qm=en.unstable_ImmediatePriority,lT=en.unstable_UserBlockingPriority,zc=en.unstable_NormalPriority,Rx=en.unstable_LowPriority,uT=en.unstable_IdlePriority,Dd=null,Mn=null;function kx(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Dd,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:bx,xx=Math.log,Cx=Math.LN2;function bx(t){return t>>>=0,t===0?32:31-(xx(t)/Cx|0)|0}var Gu=64,Ku=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $c(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ja(a):(s&=o,s!==0&&(r=ja(s)))}else o=n&~i,o!==0?r=ja(o):s!==0&&(r=ja(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function Nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Nx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cT(){var t=Gu;return Gu<<=1,!(Gu&4194240)&&(Gu=64),t}function of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function Vx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function dT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hT,Gm,fT,pT,mT,cp=!1,Hu=[],$r=null,qr=null,Wr=null,ml=new Map,gl=new Map,Vr=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rv(t,e){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(e.pointerId)}}function Ea(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=nu(e),e!==null&&Gm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lx(t,e,n,r,i){switch(e){case"focusin":return $r=Ea($r,t,e,n,r,i),!0;case"dragenter":return qr=Ea(qr,t,e,n,r,i),!0;case"mouseover":return Wr=Ea(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ml.set(s,Ea(ml.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gl.set(s,Ea(gl.get(s)||null,t,e,n,r,i)),!0}return!1}function gT(t){var e=Ui(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=iT(n),e!==null){t.blockedOn=e,mT(t.priority,function(){fT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sp=r,n.target.dispatchEvent(r),sp=null}else return e=nu(n),e!==null&&Gm(e),t.blockedOn=n,!1;e.shift()}return!0}function kv(t,e,n){gc(t)&&n.delete(e)}function Mx(){cp=!1,$r!==null&&gc($r)&&($r=null),qr!==null&&gc(qr)&&(qr=null),Wr!==null&&gc(Wr)&&(Wr=null),ml.forEach(kv),gl.forEach(kv)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Mx)))}function yl(t){function e(i){return Ta(i,t)}if(0<Hu.length){Ta(Hu[0],t);for(var n=1;n<Hu.length;n++){var r=Hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for($r!==null&&Ta($r,t),qr!==null&&Ta(qr,t),Wr!==null&&Ta(Wr,t),ml.forEach(e),gl.forEach(e),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)gT(n),n.blockedOn===null&&Vr.shift()}var so=gr.ReactCurrentBatchConfig,qc=!0;function Fx(t,e,n,r){var i=me,s=so.transition;so.transition=null;try{me=1,Km(t,e,n,r)}finally{me=i,so.transition=s}}function jx(t,e,n,r){var i=me,s=so.transition;so.transition=null;try{me=4,Km(t,e,n,r)}finally{me=i,so.transition=s}}function Km(t,e,n,r){if(qc){var i=dp(t,e,n,r);if(i===null)gf(t,e,r,Wc,n),Rv(t,r);else if(Lx(i,t,e,n,r))r.stopPropagation();else if(Rv(t,r),e&4&&-1<Ox.indexOf(t)){for(;i!==null;){var s=nu(i);if(s!==null&&hT(s),s=dp(t,e,n,r),s===null&&gf(t,e,r,Wc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gf(t,e,r,null,n)}}var Wc=null;function dp(t,e,n,r){if(Wc=null,t=$m(r),t=Ui(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function yT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Px()){case qm:return 1;case lT:return 4;case zc:case Rx:return 16;case uT:return 536870912;default:return 16}default:return 16}}var Fr=null,Hm=null,yc=null;function _T(){if(yc)return yc;var t,e=Hm,n=e.length,r,i="value"in Fr?Fr.value:Fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yc=i.slice(t,1<r?1-r:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qu(){return!0}function xv(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:xv,this.isPropagationStopped=xv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qm=rn(Bo),tu=De({},Bo,{view:0,detail:0}),Ux=rn(tu),af,lf,Sa,Vd=De({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ym,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(af=t.screenX-Sa.screenX,lf=t.screenY-Sa.screenY):lf=af=0,Sa=t),af)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),Cv=rn(Vd),Bx=De({},Vd,{dataTransfer:0}),zx=rn(Bx),$x=De({},tu,{relatedTarget:0}),uf=rn($x),qx=De({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=rn(qx),Gx=De({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kx=rn(Gx),Hx=De({},Bo,{data:0}),bv=rn(Hx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jx[t])?!!e[t]:!1}function Ym(){return Xx}var Zx=De({},tu,{key:function(t){if(t.key){var e=Qx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ym,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eC=rn(Zx),tC=De({},Vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nv=rn(tC),nC=De({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ym}),rC=rn(nC),iC=De({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sC=rn(iC),oC=De({},Vd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aC=rn(oC),lC=[9,13,27,32],Jm=lr&&"CompositionEvent"in window,Qa=null;lr&&"documentMode"in document&&(Qa=document.documentMode);var uC=lr&&"TextEvent"in window&&!Qa,vT=lr&&(!Jm||Qa&&8<Qa&&11>=Qa),Dv=" ",Vv=!1;function wT(t,e){switch(t){case"keyup":return lC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function IT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function cC(t,e){switch(t){case"compositionend":return IT(e);case"keypress":return e.which!==32?null:(Vv=!0,Dv);case"textInput":return t=e.data,t===Dv&&Vv?null:t;default:return null}}function dC(t,e){if(Ws)return t==="compositionend"||!Jm&&wT(t,e)?(t=_T(),yc=Hm=Fr=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vT&&e.locale!=="ko"?null:e.data;default:return null}}var hC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hC[t.type]:e==="textarea"}function ET(t,e,n,r){ZE(r),e=Gc(e,"onChange"),0<e.length&&(n=new Qm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ya=null,_l=null;function fC(t){DT(t,0)}function Od(t){var e=Hs(t);if(GE(e))return t}function pC(t,e){if(t==="change")return e}var TT=!1;if(lr){var cf;if(lr){var df="oninput"in document;if(!df){var Lv=document.createElement("div");Lv.setAttribute("oninput","return;"),df=typeof Lv.oninput=="function"}cf=df}else cf=!1;TT=cf&&(!document.documentMode||9<document.documentMode)}function Mv(){Ya&&(Ya.detachEvent("onpropertychange",ST),_l=Ya=null)}function ST(t){if(t.propertyName==="value"&&Od(_l)){var e=[];ET(e,_l,t,$m(t)),rT(fC,e)}}function mC(t,e,n){t==="focusin"?(Mv(),Ya=e,_l=n,Ya.attachEvent("onpropertychange",ST)):t==="focusout"&&Mv()}function gC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Od(_l)}function yC(t,e){if(t==="click")return Od(e)}function _C(t,e){if(t==="input"||t==="change")return Od(e)}function vC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:vC;function vl(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function Fv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jv(t,e){var n=Fv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fv(n)}}function AT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?AT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function PT(){for(var t=window,e=jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jc(t.document)}return e}function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wC(t){var e=PT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&AT(n.ownerDocument.documentElement,n)){if(r!==null&&Xm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jv(n,s);var o=jv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IC=lr&&"documentMode"in document&&11>=document.documentMode,Gs=null,hp=null,Ja=null,fp=!1;function Uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||Gs==null||Gs!==jc(r)||(r=Gs,"selectionStart"in r&&Xm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ja&&vl(Ja,r)||(Ja=r,r=Gc(hp,"onSelect"),0<r.length&&(e=new Qm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function Yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:Yu("Animation","AnimationEnd"),animationiteration:Yu("Animation","AnimationIteration"),animationstart:Yu("Animation","AnimationStart"),transitionend:Yu("Transition","TransitionEnd")},hf={},RT={};lr&&(RT=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Ld(t){if(hf[t])return hf[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in RT)return hf[t]=e[n];return t}var kT=Ld("animationend"),xT=Ld("animationiteration"),CT=Ld("animationstart"),bT=Ld("transitionend"),NT=new Map,Bv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){NT.set(t,e),gs(e,[t])}for(var ff=0;ff<Bv.length;ff++){var pf=Bv[ff],EC=pf.toLowerCase(),TC=pf[0].toUpperCase()+pf.slice(1);fi(EC,"on"+TC)}fi(kT,"onAnimationEnd");fi(xT,"onAnimationIteration");fi(CT,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(bT,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function zv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ex(r,e,void 0,t),t.currentTarget=null}function DT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;zv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;zv(i,a,c),s=l}}}if(Bc)throw t=lp,Bc=!1,lp=null,t}function Ie(t,e){var n=e[_p];n===void 0&&(n=e[_p]=new Set);var r=t+"__bubble";n.has(r)||(VT(e,t,2,!1),n.add(r))}function mf(t,e,n){var r=0;e&&(r|=4),VT(n,t,r,e)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function wl(t){if(!t[Ju]){t[Ju]=!0,BE.forEach(function(n){n!=="selectionchange"&&(SC.has(n)||mf(n,!1,t),mf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ju]||(e[Ju]=!0,mf("selectionchange",!1,e))}}function VT(t,e,n,r){switch(yT(e)){case 1:var i=Fx;break;case 4:i=jx;break;default:i=Km}n=i.bind(null,e,n,t),i=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ui(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}rT(function(){var c=s,h=$m(n),p=[];e:{var g=NT.get(t);if(g!==void 0){var v=Qm,S=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":v=eC;break;case"focusin":S="focus",v=uf;break;case"focusout":S="blur",v=uf;break;case"beforeblur":case"afterblur":v=uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=rC;break;case kT:case xT:case CT:v=Wx;break;case bT:v=sC;break;case"scroll":v=Ux;break;case"wheel":v=aC;break;case"copy":case"cut":case"paste":v=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Nv}var k=(e&4)!==0,C=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var w=c,T;w!==null;){T=w;var O=T.stateNode;if(T.tag===5&&O!==null&&(T=O,E!==null&&(O=pl(w,E),O!=null&&k.push(Il(w,O,T)))),C)break;w=w.return}0<k.length&&(g=new v(g,S,null,n,h),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==sp&&(S=n.relatedTarget||n.fromElement)&&(Ui(S)||S[ur]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?Ui(S):null,S!==null&&(C=ys(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(k=Cv,O="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Nv,O="onPointerLeave",E="onPointerEnter",w="pointer"),C=v==null?g:Hs(v),T=S==null?g:Hs(S),g=new k(O,w+"leave",v,n,h),g.target=C,g.relatedTarget=T,O=null,Ui(h)===c&&(k=new k(E,w+"enter",S,n,h),k.target=T,k.relatedTarget=C,O=k),C=O,v&&S)t:{for(k=v,E=S,w=0,T=k;T;T=bs(T))w++;for(T=0,O=E;O;O=bs(O))T++;for(;0<w-T;)k=bs(k),w--;for(;0<T-w;)E=bs(E),T--;for(;w--;){if(k===E||E!==null&&k===E.alternate)break t;k=bs(k),E=bs(E)}k=null}else k=null;v!==null&&$v(p,g,v,k,!1),S!==null&&C!==null&&$v(p,C,S,k,!0)}}e:{if(g=c?Hs(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var j=pC;else if(Ov(g))if(TT)j=_C;else{j=gC;var F=mC}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=yC);if(j&&(j=j(t,c))){ET(p,j,n,h);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&ep(g,"number",g.value)}switch(F=c?Hs(c):window,t){case"focusin":(Ov(F)||F.contentEditable==="true")&&(Gs=F,hp=c,Ja=null);break;case"focusout":Ja=hp=Gs=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,Uv(p,n,h);break;case"selectionchange":if(IC)break;case"keydown":case"keyup":Uv(p,n,h)}var I;if(Jm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ws?wT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(vT&&n.locale!=="ko"&&(Ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ws&&(I=_T()):(Fr=h,Hm="value"in Fr?Fr.value:Fr.textContent,Ws=!0)),F=Gc(c,_),0<F.length&&(_=new bv(_,t,null,n,h),p.push({event:_,listeners:F}),I?_.data=I:(I=IT(n),I!==null&&(_.data=I)))),(I=uC?cC(t,n):dC(t,n))&&(c=Gc(c,"onBeforeInput"),0<c.length&&(h=new bv("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=I))}DT(p,e)})}function Il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pl(t,n),s!=null&&r.unshift(Il(t,s,i)),s=pl(t,e),s!=null&&r.push(Il(t,s,i))),t=t.return}return r}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $v(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=pl(n,s),l!=null&&o.unshift(Il(n,l,a))):i||(l=pl(n,s),l!=null&&o.push(Il(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AC=/\r\n?/g,PC=/\u0000|\uFFFD/g;function qv(t){return(typeof t=="string"?t:""+t).replace(AC,`
`).replace(PC,"")}function Xu(t,e,n){if(e=qv(e),qv(t)!==e&&n)throw Error(q(425))}function Kc(){}var pp=null,mp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,RC=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,kC=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(t){return Wv.resolve(null).then(t).catch(xC)}:yp;function xC(t){setTimeout(function(){throw t})}function yf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),yl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yl(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),xn="__reactFiber$"+zo,El="__reactProps$"+zo,ur="__reactContainer$"+zo,_p="__reactEvents$"+zo,CC="__reactListeners$"+zo,bC="__reactHandles$"+zo;function Ui(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gv(t);t!==null;){if(n=t[xn])return n;t=Gv(t)}return e}t=n,n=t.parentNode}return null}function nu(t){return t=t[xn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Md(t){return t[El]||null}var vp=[],Qs=-1;function pi(t){return{current:t}}function Te(t){0>Qs||(t.current=vp[Qs],vp[Qs]=null,Qs--)}function _e(t,e){Qs++,vp[Qs]=t.current,t.current=e}var ti={},Et=pi(ti),$t=pi(!1),Ji=ti;function yo(t,e){var n=t.type.contextTypes;if(!n)return ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Hc(){Te($t),Te(Et)}function Kv(t,e,n){if(Et.current!==ti)throw Error(q(168));_e(Et,e),_e($t,n)}function OT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,mx(t)||"Unknown",i));return De({},n,r)}function Qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,Ji=Et.current,_e(Et,t),_e($t,$t.current),!0}function Hv(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=OT(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Te($t),Te(Et),_e(Et,t)):Te($t),_e($t,n)}var Xn=null,Fd=!1,_f=!1;function LT(t){Xn===null?Xn=[t]:Xn.push(t)}function NC(t){Fd=!0,LT(t)}function mi(){if(!_f&&Xn!==null){_f=!0;var t=0,e=me;try{var n=Xn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,Fd=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),aT(qm,mi),i}finally{me=e,_f=!1}}return null}var Ys=[],Js=0,Yc=null,Jc=0,sn=[],on=0,Xi=null,er=1,tr="";function Ci(t,e){Ys[Js++]=Jc,Ys[Js++]=Yc,Yc=t,Jc=e}function MT(t,e,n){sn[on++]=er,sn[on++]=tr,sn[on++]=Xi,Xi=t;var r=er;t=tr;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-wn(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function Zm(t){t.return!==null&&(Ci(t,1),MT(t,1,0))}function eg(t){for(;t===Yc;)Yc=Ys[--Js],Ys[Js]=null,Jc=Ys[--Js],Ys[Js]=null;for(;t===Xi;)Xi=sn[--on],sn[on]=null,tr=sn[--on],sn[on]=null,er=sn[--on],sn[on]=null}var Zt=null,Jt=null,Ae=!1,vn=null;function FT(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Jt=null,!0):!1;default:return!1}}function wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(Ae){var e=Jt;if(e){var n=e;if(!Qv(t,e)){if(wp(t))throw Error(q(418));e=Gr(n.nextSibling);var r=Zt;e&&Qv(t,e)?FT(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Zt=t)}}else{if(wp(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ae=!1,Zt=t}}}function Yv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function Zu(t){if(t!==Zt)return!1;if(!Ae)return Yv(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=Jt)){if(wp(t))throw jT(),Error(q(418));for(;e;)FT(t,e),e=Gr(e.nextSibling)}if(Yv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=Zt?Gr(t.stateNode.nextSibling):null;return!0}function jT(){for(var t=Jt;t;)t=Gr(t.nextSibling)}function _o(){Jt=Zt=null,Ae=!1}function tg(t){vn===null?vn=[t]:vn.push(t)}var DC=gr.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function ec(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jv(t){var e=t._init;return e(t._payload)}function UT(t){function e(E,w){if(t){var T=E.deletions;T===null?(E.deletions=[w],E.flags|=16):T.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=Yr(E,w),E.index=0,E.sibling=null,E}function s(E,w,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<w?(E.flags|=2,w):T):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,T,O){return w===null||w.tag!==6?(w=Af(T,E.mode,O),w.return=E,w):(w=i(w,T),w.return=E,w)}function l(E,w,T,O){var j=T.type;return j===qs?h(E,w,T.props.children,O,T.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nr&&Jv(j)===w.type)?(O=i(w,T.props),O.ref=Aa(E,w,T),O.return=E,O):(O=Ac(T.type,T.key,T.props,null,E.mode,O),O.ref=Aa(E,w,T),O.return=E,O)}function c(E,w,T,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Pf(T,E.mode,O),w.return=E,w):(w=i(w,T.children||[]),w.return=E,w)}function h(E,w,T,O,j){return w===null||w.tag!==7?(w=Ki(T,E.mode,O,j),w.return=E,w):(w=i(w,T),w.return=E,w)}function p(E,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Af(""+w,E.mode,T),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $u:return T=Ac(w.type,w.key,w.props,null,E.mode,T),T.ref=Aa(E,null,w),T.return=E,T;case $s:return w=Pf(w,E.mode,T),w.return=E,w;case Nr:var O=w._init;return p(E,O(w._payload),T)}if(Fa(w)||wa(w))return w=Ki(w,E.mode,T,null),w.return=E,w;ec(E,w)}return null}function g(E,w,T,O){var j=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:a(E,w,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case $u:return T.key===j?l(E,w,T,O):null;case $s:return T.key===j?c(E,w,T,O):null;case Nr:return j=T._init,g(E,w,j(T._payload),O)}if(Fa(T)||wa(T))return j!==null?null:h(E,w,T,O,null);ec(E,T)}return null}function v(E,w,T,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(T)||null,a(w,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case $u:return E=E.get(O.key===null?T:O.key)||null,l(w,E,O,j);case $s:return E=E.get(O.key===null?T:O.key)||null,c(w,E,O,j);case Nr:var F=O._init;return v(E,w,T,F(O._payload),j)}if(Fa(O)||wa(O))return E=E.get(T)||null,h(w,E,O,j,null);ec(w,O)}return null}function S(E,w,T,O){for(var j=null,F=null,I=w,_=w=0,A=null;I!==null&&_<T.length;_++){I.index>_?(A=I,I=null):A=I.sibling;var P=g(E,I,T[_],O);if(P===null){I===null&&(I=A);break}t&&I&&P.alternate===null&&e(E,I),w=s(P,w,_),F===null?j=P:F.sibling=P,F=P,I=A}if(_===T.length)return n(E,I),Ae&&Ci(E,_),j;if(I===null){for(;_<T.length;_++)I=p(E,T[_],O),I!==null&&(w=s(I,w,_),F===null?j=I:F.sibling=I,F=I);return Ae&&Ci(E,_),j}for(I=r(E,I);_<T.length;_++)A=v(I,E,_,T[_],O),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?_:A.key),w=s(A,w,_),F===null?j=A:F.sibling=A,F=A);return t&&I.forEach(function(x){return e(E,x)}),Ae&&Ci(E,_),j}function k(E,w,T,O){var j=wa(T);if(typeof j!="function")throw Error(q(150));if(T=j.call(T),T==null)throw Error(q(151));for(var F=j=null,I=w,_=w=0,A=null,P=T.next();I!==null&&!P.done;_++,P=T.next()){I.index>_?(A=I,I=null):A=I.sibling;var x=g(E,I,P.value,O);if(x===null){I===null&&(I=A);break}t&&I&&x.alternate===null&&e(E,I),w=s(x,w,_),F===null?j=x:F.sibling=x,F=x,I=A}if(P.done)return n(E,I),Ae&&Ci(E,_),j;if(I===null){for(;!P.done;_++,P=T.next())P=p(E,P.value,O),P!==null&&(w=s(P,w,_),F===null?j=P:F.sibling=P,F=P);return Ae&&Ci(E,_),j}for(I=r(E,I);!P.done;_++,P=T.next())P=v(I,E,_,P.value,O),P!==null&&(t&&P.alternate!==null&&I.delete(P.key===null?_:P.key),w=s(P,w,_),F===null?j=P:F.sibling=P,F=P);return t&&I.forEach(function(b){return e(E,b)}),Ae&&Ci(E,_),j}function C(E,w,T,O){if(typeof T=="object"&&T!==null&&T.type===qs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case $u:e:{for(var j=T.key,F=w;F!==null;){if(F.key===j){if(j=T.type,j===qs){if(F.tag===7){n(E,F.sibling),w=i(F,T.props.children),w.return=E,E=w;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nr&&Jv(j)===F.type){n(E,F.sibling),w=i(F,T.props),w.ref=Aa(E,F,T),w.return=E,E=w;break e}n(E,F);break}else e(E,F);F=F.sibling}T.type===qs?(w=Ki(T.props.children,E.mode,O,T.key),w.return=E,E=w):(O=Ac(T.type,T.key,T.props,null,E.mode,O),O.ref=Aa(E,w,T),O.return=E,E=O)}return o(E);case $s:e:{for(F=T.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(E,w.sibling),w=i(w,T.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Pf(T,E.mode,O),w.return=E,E=w}return o(E);case Nr:return F=T._init,C(E,w,F(T._payload),O)}if(Fa(T))return S(E,w,T,O);if(wa(T))return k(E,w,T,O);ec(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,T),w.return=E,E=w):(n(E,w),w=Af(T,E.mode,O),w.return=E,E=w),o(E)):n(E,w)}return C}var vo=UT(!0),BT=UT(!1),Xc=pi(null),Zc=null,Xs=null,ng=null;function rg(){ng=Xs=Zc=null}function ig(t){var e=Xc.current;Te(Xc),t._currentValue=e}function Ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Zc=t,ng=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(ng!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(Zc===null)throw Error(q(308));Xs=t,Zc.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var Bi=null;function sg(t){Bi===null?Bi=[t]:Bi.push(t)}function zT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sg(e)):(n.next=i.next,i.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function og(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $T(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cr(t,n)}return i=r.interleaved,i===null?(e.next=e,sg(r)):(e.next=i.next,i.next=e),r.interleaved=e,cr(t,n)}function vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wm(t,n)}}function Xv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ed(t,e,n,r){var i=t.updateQueue;Dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,h=c=l=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,k=a;switch(g=e,v=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){p=S.call(v,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,g=typeof S=="function"?S.call(v,p,g):S,g==null)break e;p=De({},p,g);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=p):h=h.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=p}}function Zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var ru={},Fn=pi(ru),Tl=pi(ru),Sl=pi(ru);function zi(t){if(t===ru)throw Error(q(174));return t}function ag(t,e){switch(_e(Sl,e),_e(Tl,t),_e(Fn,ru),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}Te(Fn),_e(Fn,e)}function wo(){Te(Fn),Te(Tl),Te(Sl)}function qT(t){zi(Sl.current);var e=zi(Fn.current),n=np(e,t.type);e!==n&&(_e(Tl,t),_e(Fn,n))}function lg(t){Tl.current===t&&(Te(Fn),Te(Tl))}var Ce=pi(0);function td(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function ug(){for(var t=0;t<vf.length;t++)vf[t]._workInProgressVersionPrimary=null;vf.length=0}var wc=gr.ReactCurrentDispatcher,wf=gr.ReactCurrentBatchConfig,Zi=0,be=null,Qe=null,et=null,nd=!1,Xa=!1,Al=0,VC=0;function _t(){throw Error(q(321))}function cg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function dg(t,e,n,r,i,s){if(Zi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wc.current=t===null||t.memoizedState===null?FC:jC,t=n(r,i),Xa){s=0;do{if(Xa=!1,Al=0,25<=s)throw Error(q(301));s+=1,et=Qe=null,e.updateQueue=null,wc.current=UC,t=n(r,i)}while(Xa)}if(wc.current=rd,e=Qe!==null&&Qe.next!==null,Zi=0,et=Qe=be=null,nd=!1,e)throw Error(q(300));return t}function hg(){var t=Al!==0;return Al=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?be.memoizedState=et=t:et=et.next=t,et}function fn(){if(Qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?be.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(q(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?be.memoizedState=et=t:et=et.next=t}return et}function Pl(t,e){return typeof e=="function"?e(t):e}function If(t){var e=fn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Zi&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,be.lanes|=h,es|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Tn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ef(t){var e=fn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function WT(){}function GT(t,e){var n=be,r=fn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,fg(QT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Rl(9,HT.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(q(349));Zi&30||KT(n,e,i)}return i}function KT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function HT(t,e,n,r){e.value=n,e.getSnapshot=r,YT(e)&&JT(t)}function QT(t,e,n){return n(function(){YT(e)&&JT(t)})}function YT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function JT(t){var e=cr(t,1);e!==null&&In(e,t,1,-1)}function ew(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pl,lastRenderedState:t},e.queue=t,t=t.dispatch=MC.bind(null,be,t),[e.memoizedState,t]}function Rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function XT(){return fn().memoizedState}function Ic(t,e,n,r){var i=kn();be.flags|=t,i.memoizedState=Rl(1|e,n,void 0,r===void 0?null:r)}function jd(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&cg(r,o.deps)){i.memoizedState=Rl(e,n,s,r);return}}be.flags|=t,i.memoizedState=Rl(1|e,n,s,r)}function tw(t,e){return Ic(8390656,8,t,e)}function fg(t,e){return jd(2048,8,t,e)}function ZT(t,e){return jd(4,2,t,e)}function e0(t,e){return jd(4,4,t,e)}function t0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n0(t,e,n){return n=n!=null?n.concat([t]):null,jd(4,4,t0.bind(null,e,t),n)}function pg(){}function r0(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i0(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s0(t,e,n){return Zi&21?(Tn(n,e)||(n=cT(),be.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function OC(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=wf.transition;wf.transition={};try{t(!1),e()}finally{me=n,wf.transition=r}}function o0(){return fn().memoizedState}function LC(t,e,n){var r=Qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a0(t))l0(e,n);else if(n=zT(t,e,n,r),n!==null){var i=kt();In(n,t,r,i),u0(n,e,r)}}function MC(t,e,n){var r=Qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a0(t))l0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(i.next=i,sg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zT(t,e,i,r),n!==null&&(i=kt(),In(n,t,r,i),u0(n,e,r))}}function a0(t){var e=t.alternate;return t===be||e!==null&&e===be}function l0(t,e){Xa=nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wm(t,n)}}var rd={readContext:hn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},FC={readContext:hn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:tw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,t0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LC.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:ew,useDebugValue:pg,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=ew(!1),e=t[0];return t=OC.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=kn();if(Ae){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),nt===null)throw Error(q(349));Zi&30||KT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tw(QT.bind(null,r,s,t),[t]),r.flags|=2048,Rl(9,HT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=nt.identifierPrefix;if(Ae){var n=tr,r=er;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jC={readContext:hn,useCallback:r0,useContext:hn,useEffect:fg,useImperativeHandle:n0,useInsertionEffect:ZT,useLayoutEffect:e0,useMemo:i0,useReducer:If,useRef:XT,useState:function(){return If(Pl)},useDebugValue:pg,useDeferredValue:function(t){var e=fn();return s0(e,Qe.memoizedState,t)},useTransition:function(){var t=If(Pl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:WT,useSyncExternalStore:GT,useId:o0,unstable_isNewReconciler:!1},UC={readContext:hn,useCallback:r0,useContext:hn,useEffect:fg,useImperativeHandle:n0,useInsertionEffect:ZT,useLayoutEffect:e0,useMemo:i0,useReducer:Ef,useRef:XT,useState:function(){return Ef(Pl)},useDebugValue:pg,useDeferredValue:function(t){var e=fn();return Qe===null?e.memoizedState=t:s0(e,Qe.memoizedState,t)},useTransition:function(){var t=Ef(Pl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:WT,useSyncExternalStore:GT,useId:o0,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ud={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Qr(t),s=or(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(In(e,t,i,r),vc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Qr(t),s=or(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(In(e,t,i,r),vc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Qr(t),i=or(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kr(t,i,r),e!==null&&(In(e,t,r,n),vc(e,t,r))}};function nw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vl(n,r)||!vl(i,s):!0}function c0(t,e,n){var r=!1,i=ti,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=qt(e)?Ji:Et.current,r=e.contextTypes,s=(r=r!=null)?yo(t,i):ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ud,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ud.enqueueReplaceState(e,e.state,null)}function Sp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},og(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=qt(e)?Ji:Et.current,i.context=yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ud.enqueueReplaceState(i,i.state,null),ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Io(t,e){try{var n="",r=e;do n+=px(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BC=typeof WeakMap=="function"?WeakMap:Map;function d0(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sd||(sd=!0,Op=r),Ap(t,e)},n}function h0(t,e,n){n=or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ap(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ap(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function iw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tb.bind(null,t,e,n),e.then(t,t))}function sw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ow(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var zC=gr.ReactCurrentOwner,jt=!1;function At(t,e,n,r){e.child=t===null?BT(e,null,n,r):vo(e,t.child,n,r)}function aw(t,e,n,r,i){n=n.render;var s=e.ref;return oo(e,i),r=dg(t,e,n,r,s,i),n=hg(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Ae&&n&&Zm(e),e.flags|=1,At(t,e,r,i),e.child)}function lw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Eg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f0(t,e,s,r,i)):(t=Ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vl,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function f0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vl(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Pp(t,e,n,r,i)}function p0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(eo,Qt),Qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(eo,Qt),Qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(eo,Qt),Qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(eo,Qt),Qt|=r;return At(t,e,i,n),e.child}function m0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pp(t,e,n,r,i){var s=qt(n)?Ji:Et.current;return s=yo(e,s),oo(e,i),n=dg(t,e,n,r,s,i),r=hg(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Ae&&r&&Zm(e),e.flags|=1,At(t,e,n,i),e.child)}function uw(t,e,n,r,i){if(qt(n)){var s=!0;Qc(e)}else s=!1;if(oo(e,i),e.stateNode===null)Ec(t,e),c0(e,n,r),Sp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=hn(c):(c=qt(n)?Ji:Et.current,c=yo(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&rw(e,o,r,c),Dr=!1;var g=e.memoizedState;o.state=g,ed(e,r,o,i),l=e.memoizedState,a!==r||g!==l||$t.current||Dr?(typeof h=="function"&&(Tp(e,n,h,r),l=e.memoizedState),(a=Dr||nw(e,n,a,r,g,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$T(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yn(e.type,a),o.props=c,p=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=qt(n)?Ji:Et.current,l=yo(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==l)&&rw(e,o,r,l),Dr=!1,g=e.memoizedState,o.state=g,ed(e,r,o,i);var S=e.memoizedState;a!==p||g!==S||$t.current||Dr?(typeof v=="function"&&(Tp(e,n,v,r),S=e.memoizedState),(c=Dr||nw(e,n,c,r,g,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Rp(t,e,n,r,s,i)}function Rp(t,e,n,r,i,s){m0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hv(e,n,!1),dr(t,e,s);r=e.stateNode,zC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vo(e,t.child,null,s),e.child=vo(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&Hv(e,n,!0),e.child}function g0(t){var e=t.stateNode;e.pendingContext?Kv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kv(t,e.context,!1),ag(t,e.containerInfo)}function cw(t,e,n,r,i){return _o(),tg(i),e.flags|=256,At(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function y0(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ce,i&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$d(o,r,0,null),t=Ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xp(n),e.memoizedState=kp,t):mg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $C(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=Ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return s=t.child,t=s.sibling,r=Yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mg(t,e){return e=$d({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tc(t,e,n,r){return r!==null&&tg(r),vo(e,t.child,null,n),t=mg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $C(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tf(Error(q(422))),tc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$d({mode:"visible",children:r.children},i,0,null),s=Ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vo(e,t.child,null,o),e.child.memoizedState=xp(o),e.memoizedState=kp,s);if(!(e.mode&1))return tc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=Tf(s,r,void 0),tc(t,e,o,r)}if(a=(o&t.childLanes)!==0,jt||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cr(t,i),In(r,t,i,-1))}return Ig(),r=Tf(Error(q(421))),tc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Jt=Gr(i.nextSibling),Zt=e,Ae=!0,vn=null,t!==null&&(sn[on++]=er,sn[on++]=tr,sn[on++]=Xi,er=t.id,tr=t.overflow,Xi=e),e=mg(e,r.children),e.flags|=4096,e)}function dw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ep(t.return,e,n)}function Sf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dw(t,n,e);else if(t.tag===19)dw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&td(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&td(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sf(e,!0,n,null,s);break;case"together":Sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qC(t,e,n){switch(e.tag){case 3:g0(e),_o();break;case 5:qT(e);break;case 1:qt(e.type)&&Qc(e);break;case 4:ag(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Xc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?y0(t,e,n):(_e(Ce,Ce.current&1),t=dr(t,e,n),t!==null?t.sibling:null);_e(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,p0(t,e,n)}return dr(t,e,n)}var v0,Cp,w0,I0;v0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cp=function(){};w0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zi(Fn.current);var s=null;switch(n){case"input":i=Xf(t,i),r=Xf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=tp(t,i),r=tp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kc)}rp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WC(t,e,n){var r=e.pendingProps;switch(eg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return qt(e.type)&&Hc(),vt(e),null;case 3:return r=e.stateNode,wo(),Te($t),Te(Et),ug(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Fp(vn),vn=null))),Cp(t,e),vt(e),null;case 5:lg(e);var i=zi(Sl.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return vt(e),null}if(t=zi(Fn.current),Zu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[El]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ua.length;i++)Ie(Ua[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":wv(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Ev(r,s),Ie("invalid",r)}rp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xu(r.textContent,a,t),i=["children",""+a]):hl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":qu(r),Iv(r,s,!0);break;case"textarea":qu(r),Tv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=QE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[El]=r,v0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ip(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ua.length;i++)Ie(Ua[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":wv(t,r),i=Xf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Ev(t,r),i=tp(t,r),Ie("invalid",t);break;default:i=r}rp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?XE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&YE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fl(t,l):typeof l=="number"&&fl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&jm(t,s,l,o))}switch(n){case"input":qu(t),Iv(t,r,!1);break;case"textarea":qu(t),Tv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?no(t,!!r.multiple,s,!1):r.defaultValue!=null&&no(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=zi(Sl.current),zi(Fn.current),Zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Xu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return vt(e),null;case 13:if(Te(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Jt!==null&&e.mode&1&&!(e.flags&128))jT(),_o(),e.flags|=98560,s=!1;else if(s=Zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[xn]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else vn!==null&&(Fp(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ye===0&&(Ye=3):Ig())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return wo(),Cp(t,e),t===null&&wl(e.stateNode.containerInfo),vt(e),null;case 10:return ig(e.type._context),vt(e),null;case 17:return qt(e.type)&&Hc(),vt(e),null;case 19:if(Te(Ce),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=td(t),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Eo&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=td(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return vt(e),null}else 2*ze()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Ce.current,_e(Ce,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return wg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function GC(t,e){switch(eg(e),e.tag){case 1:return qt(e.type)&&Hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wo(),Te($t),Te(Et),ug(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lg(e),null;case 13:if(Te(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ce),null;case 4:return wo(),null;case 10:return ig(e.type._context),null;case 22:case 23:return wg(),null;case 24:return null;default:return null}}var nc=!1,It=!1,KC=typeof WeakSet=="function"?WeakSet:Set,J=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function bp(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var hw=!1;function HC(t,e){if(pp=qc,t=PT(),Xm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(l=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:t,selectionRange:n},qc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,C=S.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:yn(e.type,k),C);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(O){Oe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return S=hw,hw=!1,S}function Za(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bp(e,n,s)}i=i.next}while(i!==r)}}function Bd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E0(t){var e=t.alternate;e!==null&&(t.alternate=null,E0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[El],delete e[_p],delete e[CC],delete e[bC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function fw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kc));else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}function Vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vp(t,e,n),t=t.sibling;t!==null;)Vp(t,e,n),t=t.sibling}var ut=null,_n=!1;function Rr(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Dd,n)}catch{}switch(n.tag){case 5:It||Zs(n,e);case 6:var r=ut,i=_n;ut=null,Rr(t,e,n),ut=r,_n=i,ut!==null&&(_n?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(_n?(t=ut,n=n.stateNode,t.nodeType===8?yf(t.parentNode,n):t.nodeType===1&&yf(t,n),yl(t)):yf(ut,n.stateNode));break;case 4:r=ut,i=_n,ut=n.stateNode.containerInfo,_n=!0,Rr(t,e,n),ut=r,_n=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!It&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Rr(t,e,n),It=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function pw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KC),e.forEach(function(r){var i=rb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,_n=!1;break e;case 3:ut=a.stateNode.containerInfo,_n=!0;break e;case 4:ut=a.stateNode.containerInfo,_n=!0;break e}a=a.return}if(ut===null)throw Error(q(160));S0(s,o,i),ut=null,_n=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}function A0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Rn(t),r&4){try{Za(3,t,t.return),Bd(3,t)}catch(k){Oe(t,t.return,k)}try{Za(5,t,t.return)}catch(k){Oe(t,t.return,k)}}break;case 1:gn(e,t),Rn(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(gn(e,t),Rn(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{fl(i,"")}catch(k){Oe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&KE(i,s),ip(a,o);var c=ip(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?XE(i,p):h==="dangerouslySetInnerHTML"?YE(i,p):h==="children"?fl(i,p):jm(i,h,p,c)}switch(a){case"input":Zf(i,s);break;case"textarea":HE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?no(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?no(i,!!s.multiple,s.defaultValue,!0):no(i,!!s.multiple,s.multiple?[]:"",!1))}i[El]=s}catch(k){Oe(t,t.return,k)}}break;case 6:if(gn(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Oe(t,t.return,k)}}break;case 3:if(gn(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yl(e.containerInfo)}catch(k){Oe(t,t.return,k)}break;case 4:gn(e,t),Rn(t);break;case 13:gn(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_g=ze())),r&4&&pw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||h,gn(e,t),It=c):gn(e,t),Rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(J=t,h=t.child;h!==null;){for(p=J=h;J!==null;){switch(g=J,v=g.child,g.tag){case 0:case 11:case 14:case 15:Za(4,g,g.return);break;case 1:Zs(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Zs(g,g.return);break;case 22:if(g.memoizedState!==null){gw(p);continue}}v!==null?(v.return=g,J=v):gw(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=JE("display",o))}catch(k){Oe(t,t.return,k)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Oe(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gn(e,t),Rn(t),r&4&&pw(t);break;case 21:break;default:gn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fl(i,""),r.flags&=-33);var s=fw(t);Vp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fw(t);Dp(t,a,o);break;default:throw Error(q(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QC(t,e,n){J=t,P0(t)}function P0(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=nc;var c=It;if(nc=o,(It=l)&&!c)for(J=i;J!==null;)o=J,l=o.child,o.tag===22&&o.memoizedState!==null?yw(i):l!==null?(l.return=o,J=l):yw(i);for(;s!==null;)J=s,P0(s),s=s.sibling;J=i,nc=a,It=c}mw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):mw(t)}}function mw(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Bd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&yl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}It||e.flags&512&&Np(e)}catch(g){Oe(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function gw(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function yw(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bd(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{Np(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{Np(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var YC=Math.ceil,id=gr.ReactCurrentDispatcher,gg=gr.ReactCurrentOwner,cn=gr.ReactCurrentBatchConfig,ce=0,nt=null,He=null,ht=0,Qt=0,eo=pi(0),Ye=0,kl=null,es=0,zd=0,yg=0,el=null,Ft=null,_g=0,Eo=1/0,Jn=null,sd=!1,Op=null,Hr=null,rc=!1,jr=null,od=0,tl=0,Lp=null,Tc=-1,Sc=0;function kt(){return ce&6?ze():Tc!==-1?Tc:Tc=ze()}function Qr(t){return t.mode&1?ce&2&&ht!==0?ht&-ht:DC.transition!==null?(Sc===0&&(Sc=cT()),Sc):(t=me,t!==0||(t=window.event,t=t===void 0?16:yT(t.type)),t):1}function In(t,e,n,r){if(50<tl)throw tl=0,Lp=null,Error(q(185));eu(t,n,r),(!(ce&2)||t!==nt)&&(t===nt&&(!(ce&2)&&(zd|=n),Ye===4&&Or(t,ht)),Wt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Eo=ze()+500,Fd&&mi()))}function Wt(t,e){var n=t.callbackNode;Dx(t,e);var r=$c(t,t===nt?ht:0);if(r===0)n!==null&&Pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pv(n),e===1)t.tag===0?NC(_w.bind(null,t)):LT(_w.bind(null,t)),kC(function(){!(ce&6)&&mi()}),n=null;else{switch(dT(r)){case 1:n=qm;break;case 4:n=lT;break;case 16:n=zc;break;case 536870912:n=uT;break;default:n=zc}n=V0(n,R0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R0(t,e){if(Tc=-1,Sc=0,ce&6)throw Error(q(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var r=$c(t,t===nt?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ad(t,r);else{e=r;var i=ce;ce|=2;var s=x0();(nt!==t||ht!==e)&&(Jn=null,Eo=ze()+500,Gi(t,e));do try{ZC();break}catch(a){k0(t,a)}while(!0);rg(),id.current=s,ce=i,He!==null?e=0:(nt=null,ht=0,e=Ye)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=Mp(t,i))),e===1)throw n=kl,Gi(t,0),Or(t,r),Wt(t,ze()),n;if(e===6)Or(t,r);else{if(i=t.current.alternate,!(r&30)&&!JC(i)&&(e=ad(t,r),e===2&&(s=up(t),s!==0&&(r=s,e=Mp(t,s))),e===1))throw n=kl,Gi(t,0),Or(t,r),Wt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:bi(t,Ft,Jn);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=_g+500-ze(),10<e)){if($c(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yp(bi.bind(null,t,Ft,Jn),e);break}bi(t,Ft,Jn);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YC(r/1960))-r,10<r){t.timeoutHandle=yp(bi.bind(null,t,Ft,Jn),r);break}bi(t,Ft,Jn);break;case 5:bi(t,Ft,Jn);break;default:throw Error(q(329))}}}return Wt(t,ze()),t.callbackNode===n?R0.bind(null,t):null}function Mp(t,e){var n=el;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=ad(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Fp(e)),t}function Fp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function JC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~yg,e&=~zd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function _w(t){if(ce&6)throw Error(q(327));ao();var e=$c(t,0);if(!(e&1))return Wt(t,ze()),null;var n=ad(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=Mp(t,r))}if(n===1)throw n=kl,Gi(t,0),Or(t,e),Wt(t,ze()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bi(t,Ft,Jn),Wt(t,ze()),null}function vg(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Eo=ze()+500,Fd&&mi())}}function ts(t){jr!==null&&jr.tag===0&&!(ce&6)&&ao();var e=ce;ce|=1;var n=cn.transition,r=me;try{if(cn.transition=null,me=1,t)return t()}finally{me=r,cn.transition=n,ce=e,!(ce&6)&&mi()}}function wg(){Qt=eo.current,Te(eo)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RC(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(eg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hc();break;case 3:wo(),Te($t),Te(Et),ug();break;case 5:lg(r);break;case 4:wo();break;case 13:Te(Ce);break;case 19:Te(Ce);break;case 10:ig(r.type._context);break;case 22:case 23:wg()}n=n.return}if(nt=t,He=t=Yr(t.current,null),ht=Qt=e,Ye=0,kl=null,yg=zd=es=0,Ft=el=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function k0(t,e){do{var n=He;try{if(rg(),wc.current=rd,nd){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nd=!1}if(Zi=0,et=Qe=be=null,Xa=!1,Al=0,gg.current=null,n===null||n.return===null){Ye=1,kl=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=sw(o);if(v!==null){v.flags&=-257,ow(v,o,a,s,e),v.mode&1&&iw(s,c,e),e=v,l=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(l),e.updateQueue=k}else S.add(l);break e}else{if(!(e&1)){iw(s,c,e),Ig();break e}l=Error(q(426))}}else if(Ae&&a.mode&1){var C=sw(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ow(C,o,a,s,e),tg(Io(l,a));break e}}s=l=Io(l,a),Ye!==4&&(Ye=2),el===null?el=[s]:el.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=d0(s,l,e);Xv(s,E);break e;case 1:a=l;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Hr===null||!Hr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=h0(s,a,e);Xv(s,O);break e}}s=s.return}while(s!==null)}b0(n)}catch(j){e=j,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function x0(){var t=id.current;return id.current=rd,t===null?rd:t}function Ig(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(es&268435455)&&!(zd&268435455)||Or(nt,ht)}function ad(t,e){var n=ce;ce|=2;var r=x0();(nt!==t||ht!==e)&&(Jn=null,Gi(t,e));do try{XC();break}catch(i){k0(t,i)}while(!0);if(rg(),ce=n,id.current=r,He!==null)throw Error(q(261));return nt=null,ht=0,Ye}function XC(){for(;He!==null;)C0(He)}function ZC(){for(;He!==null&&!Sx();)C0(He)}function C0(t){var e=D0(t.alternate,t,Qt);t.memoizedProps=t.pendingProps,e===null?b0(t):He=e,gg.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GC(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=WC(n,e,Qt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function bi(t,e,n){var r=me,i=cn.transition;try{cn.transition=null,me=1,eb(t,e,n,r)}finally{cn.transition=i,me=r}return null}function eb(t,e,n,r){do ao();while(jr!==null);if(ce&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vx(t,s),t===nt&&(He=nt=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rc||(rc=!0,V0(zc,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=me;me=1;var a=ce;ce|=4,gg.current=null,HC(t,n),A0(n,t),wC(mp),qc=!!pp,mp=pp=null,t.current=n,QC(n),Ax(),ce=a,me=o,cn.transition=s}else t.current=n;if(rc&&(rc=!1,jr=t,od=i),s=t.pendingLanes,s===0&&(Hr=null),kx(n.stateNode),Wt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sd)throw sd=!1,t=Op,Op=null,t;return od&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===Lp?tl++:(tl=0,Lp=t):tl=0,mi(),null}function ao(){if(jr!==null){var t=dT(od),e=cn.transition,n=me;try{if(cn.transition=null,me=16>t?16:t,jr===null)var r=!1;else{if(t=jr,jr=null,od=0,ce&6)throw Error(q(331));var i=ce;for(ce|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(J=c;J!==null;){var h=J;switch(h.tag){case 0:case 11:case 15:Za(8,h,s)}var p=h.child;if(p!==null)p.return=h,J=p;else for(;J!==null;){h=J;var g=h.sibling,v=h.return;if(E0(h),h===c){J=null;break}if(g!==null){g.return=v,J=g;break}J=v}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Za(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,J=E;break e}J=s.return}}var w=t.current;for(J=w;J!==null;){o=J;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,J=T;else e:for(o=w;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bd(9,a)}}catch(j){Oe(a,a.return,j)}if(a===o){J=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,J=O;break e}J=a.return}}if(ce=i,mi(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Dd,t)}catch{}r=!0}return r}finally{me=n,cn.transition=e}}return!1}function vw(t,e,n){e=Io(n,e),e=d0(t,e,1),t=Kr(t,e,1),e=kt(),t!==null&&(eu(t,1,e),Wt(t,e))}function Oe(t,e,n){if(t.tag===3)vw(t,t,n);else for(;e!==null;){if(e.tag===3){vw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=Io(n,t),t=h0(e,t,1),e=Kr(e,t,1),t=kt(),e!==null&&(eu(e,1,t),Wt(e,t));break}}e=e.return}}function tb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ht&n)===n&&(Ye===4||Ye===3&&(ht&130023424)===ht&&500>ze()-_g?Gi(t,0):yg|=n),Wt(t,e)}function N0(t,e){e===0&&(t.mode&1?(e=Ku,Ku<<=1,!(Ku&130023424)&&(Ku=4194304)):e=1);var n=kt();t=cr(t,e),t!==null&&(eu(t,e,n),Wt(t,n))}function nb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N0(t,n)}function rb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),N0(t,n)}var D0;D0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,qC(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Ae&&e.flags&1048576&&MT(e,Jc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ec(t,e),t=e.pendingProps;var i=yo(e,Et.current);oo(e,n),i=dg(null,e,r,t,i,n);var s=hg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Qc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,og(e),i.updater=Ud,e.stateNode=i,i._reactInternals=e,Sp(e,r,t,n),e=Rp(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Zm(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ec(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sb(r),t=yn(r,t),i){case 0:e=Pp(null,e,r,t,n);break e;case 1:e=uw(null,e,r,t,n);break e;case 11:e=aw(null,e,r,t,n);break e;case 14:e=lw(null,e,r,yn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),uw(t,e,r,i,n);case 3:e:{if(g0(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$T(t,e),ed(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Io(Error(q(423)),e),e=cw(t,e,r,n,i);break e}else if(r!==i){i=Io(Error(q(424)),e),e=cw(t,e,r,n,i);break e}else for(Jt=Gr(e.stateNode.containerInfo.firstChild),Zt=e,Ae=!0,vn=null,n=BT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),r===i){e=dr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return qT(e),t===null&&Ip(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gp(r,i)?o=null:s!==null&&gp(r,s)&&(e.flags|=32),m0(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return y0(t,e,n);case 4:return ag(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vo(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),aw(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Xc,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!$t.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ep(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,oo(e,n),i=hn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),lw(t,e,r,i,n);case 15:return f0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Ec(t,e),e.tag=1,qt(r)?(t=!0,Qc(e)):t=!1,oo(e,n),c0(e,r,i),Sp(e,r,i,n),Rp(null,e,r,!0,t,n);case 19:return _0(t,e,n);case 22:return p0(t,e,n)}throw Error(q(156,e.tag))};function V0(t,e){return aT(t,e)}function ib(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new ib(t,e,n,r)}function Eg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sb(t){if(typeof t=="function")return Eg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bm)return 11;if(t===zm)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Eg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return Ki(n.children,i,s,e);case Um:o=8,i|=8;break;case Hf:return t=an(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Qf:return t=an(13,n,e,i),t.elementType=Qf,t.lanes=s,t;case Yf:return t=an(19,n,e,i),t.elementType=Yf,t.lanes=s,t;case qE:return $d(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zE:o=10;break e;case $E:o=9;break e;case Bm:o=11;break e;case zm:o=14;break e;case Nr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ki(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function $d(t,e,n,r){return t=an(22,t,r,e),t.elementType=qE,t.lanes=n,t.stateNode={isHidden:!1},t}function Af(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function Pf(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ob(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=of(0),this.expirationTimes=of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tg(t,e,n,r,i,s,o,a,l){return t=new ob(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},og(s),t}function ab(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O0(t){if(!t)return ti;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(qt(n))return OT(t,n,e)}return e}function L0(t,e,n,r,i,s,o,a,l){return t=Tg(n,r,!0,t,i,s,o,a,l),t.context=O0(null),n=t.current,r=kt(),i=Qr(n),s=or(r,i),s.callback=e??null,Kr(n,s,i),t.current.lanes=i,eu(t,i,r),Wt(t,r),t}function qd(t,e,n,r){var i=e.current,s=kt(),o=Qr(i);return n=O0(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kr(i,e,o),t!==null&&(In(t,i,o,s),vc(t,i,o)),o}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ww(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sg(t,e){ww(t,e),(t=t.alternate)&&ww(t,e)}function lb(){return null}var M0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ag(t){this._internalRoot=t}Wd.prototype.render=Ag.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));qd(t,e,null,null)};Wd.prototype.unmount=Ag.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){qd(null,t,null,null)}),e[ur]=null}};function Wd(t){this._internalRoot=t}Wd.prototype.unstable_scheduleHydration=function(t){if(t){var e=pT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vr.length&&e!==0&&e<Vr[n].priority;n++);Vr.splice(n,0,t),n===0&&gT(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iw(){}function ub(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ld(o);s.call(c)}}var o=L0(e,r,t,0,null,!1,!1,"",Iw);return t._reactRootContainer=o,t[ur]=o.current,wl(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ld(l);a.call(c)}}var l=Tg(t,0,!1,null,null,!1,!1,"",Iw);return t._reactRootContainer=l,t[ur]=l.current,wl(t.nodeType===8?t.parentNode:t),ts(function(){qd(e,l,n,r)}),l}function Kd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ld(o);a.call(l)}}qd(e,o,t,i)}else o=ub(n,e,t,i,r);return ld(o)}hT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(Wm(e,n|1),Wt(e,ze()),!(ce&6)&&(Eo=ze()+500,mi()))}break;case 13:ts(function(){var r=cr(t,1);if(r!==null){var i=kt();In(r,t,1,i)}}),Sg(t,1)}};Gm=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=kt();In(e,t,134217728,n)}Sg(t,134217728)}};fT=function(t){if(t.tag===13){var e=Qr(t),n=cr(t,e);if(n!==null){var r=kt();In(n,t,e,r)}Sg(t,e)}};pT=function(){return me};mT=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};op=function(t,e,n){switch(e){case"input":if(Zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Md(r);if(!i)throw Error(q(90));GE(r),Zf(r,i)}}}break;case"textarea":HE(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};tT=vg;nT=ts;var cb={usingClientEntryPoint:!1,Events:[nu,Hs,Md,ZE,eT,vg]},Ra={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},db={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sT(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Dd=ic.inject(db),Mn=ic}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cb;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(q(200));return ab(t,e,null,n)};nn.createRoot=function(t,e){if(!Pg(t))throw Error(q(299));var n=!1,r="",i=M0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tg(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,wl(t.nodeType===8?t.parentNode:t),new Ag(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=sT(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return ts(t)};nn.hydrate=function(t,e,n){if(!Gd(e))throw Error(q(200));return Kd(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L0(e,null,t,1,n??null,i,!1,s,o),t[ur]=e.current,wl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wd(e)};nn.render=function(t,e,n){if(!Gd(e))throw Error(q(200));return Kd(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Gd(t))throw Error(q(40));return t._reactRootContainer?(ts(function(){Kd(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};nn.unstable_batchedUpdates=vg;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gd(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Kd(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function F0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0)}catch(t){console.error(t)}}F0(),FE.exports=nn;var hb=FE.exports,j0,Ew=hb;j0=Ew.createRoot,Ew.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(null,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));const Tw="popstate";function fb(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=_s(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),jp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:ud(s))}function r(i,s){Rg(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return mb(e,n,r,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pb(){return Math.random().toString(36).substr(2,8)}function Sw(t,e){return{usr:t.state,key:t.key,idx:e}}function jp(t,e,n,r){return n===void 0&&(n=null),xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_s(e):e,{state:n,key:e&&e.key||r||pb()})}function ud(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ur.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(xl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Ur.Pop;let C=h(),E=C==null?null:C-c;c=C,l&&l({action:a,location:k.location,delta:E})}function g(C,E){a=Ur.Push;let w=jp(k.location,C,E);n&&n(w,C),c=h()+1;let T=Sw(w,c),O=k.createHref(w);try{o.pushState(T,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&l&&l({action:a,location:k.location,delta:1})}function v(C,E){a=Ur.Replace;let w=jp(k.location,C,E);n&&n(w,C),c=h();let T=Sw(w,c),O=k.createHref(w);o.replaceState(T,"",O),s&&l&&l({action:a,location:k.location,delta:0})}function S(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof C=="string"?C:ud(C);return w=w.replace(/ $/,"%20"),qe(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let k={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tw,p),l=C,()=>{i.removeEventListener(Tw,p),l=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let E=S(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:v,go(C){return o.go(C)}};return k}var Aw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Aw||(Aw={}));function gb(t,e,n){return n===void 0&&(n="/"),yb(t,e,n)}function yb(t,e,n,r){let i=typeof e=="string"?_s(e):e,s=kg(i.pathname||"/",n);if(s==null)return null;let o=U0(t);_b(o);let a=null,l=Cb(s);for(let c=0;a==null&&c<o.length;++c)a=Rb(o[c],l);return a}function U0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Jr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U0(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ab(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of B0(s.path))i(s,o,l)}),e}function B0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=B0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _b(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Pb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vb=/^:[\w-]+$/,wb=3,Ib=2,Eb=1,Tb=10,Sb=-2,Pw=t=>t==="*";function Ab(t,e){let n=t.split("/"),r=n.length;return n.some(Pw)&&(r+=Sb),e&&(r+=Ib),n.filter(i=>!Pw(i)).reduce((i,s)=>i+(vb.test(s)?wb:s===""?Eb:Tb),r)}function Pb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Rb(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=kb({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),g=l.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Jr([s,p.pathname]),pathnameBase:Db(Jr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Jr([s,p.pathnameBase]))}return o}function kb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let k=a[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const S=a[p];return v&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function xb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Cb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_s(t):t,s;return n?(n=z0(n),n.startsWith("/")?s=Rw(n.substring(1),"/"):s=Rw(n,e)):s=e,{pathname:s,search:Vb(r),hash:Ob(i)}}function Rw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xg(t,e){let n=Nb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_s(t):(i=xl({},t),qe(!i.pathname||!i.pathname.includes("?"),Rf("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),Rf("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),Rf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let l=bb(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const z0=t=>t.replace(/\/\/+/g,"/"),Jr=t=>z0(t.join("/")),Db=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Vb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ob=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Lb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $0=["post","put","patch","delete"];new Set($0);const Mb=["get",...$0];new Set(Mb);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(null,arguments)}const bg=D.createContext(null),Fb=D.createContext(null),gi=D.createContext(null),Hd=D.createContext(null),yr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),q0=D.createContext(null);function jb(t,e){let{relative:n}=e===void 0?{}:e;$o()||qe(!1);let{basename:r,navigator:i}=D.useContext(gi),{hash:s,pathname:o,search:a}=K0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $o(){return D.useContext(Hd)!=null}function yi(){return $o()||qe(!1),D.useContext(Hd).location}function W0(t){D.useContext(gi).static||D.useLayoutEffect(t)}function _r(){let{isDataRoute:t}=D.useContext(yr);return t?Xb():Ub()}function Ub(){$o()||qe(!1);let t=D.useContext(bg),{basename:e,future:n,navigator:r}=D.useContext(gi),{matches:i}=D.useContext(yr),{pathname:s}=yi(),o=JSON.stringify(xg(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return W0(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=Cg(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Jr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function G0(){let{matches:t}=D.useContext(yr),e=t[t.length-1];return e?e.params:{}}function K0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(gi),{matches:i}=D.useContext(yr),{pathname:s}=yi(),o=JSON.stringify(xg(i,r.v7_relativeSplatPath));return D.useMemo(()=>Cg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Bb(t,e){return zb(t,e)}function zb(t,e,n,r){$o()||qe(!1);let{navigator:i}=D.useContext(gi),{matches:s}=D.useContext(yr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=yi(),h;if(e){var p;let C=typeof e=="string"?_s(e):e;l==="/"||(p=C.pathname)!=null&&p.startsWith(l)||qe(!1),h=C}else h=c;let g=h.pathname||"/",v=g;if(l!=="/"){let C=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=gb(t,{pathname:v}),k=Kb(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Jr([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Jr([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&k?D.createElement(Hd.Provider,{value:{location:Cl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ur.Pop}},k):k}function $b(){let t=Jb(),e=Lb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const qb=D.createElement($b,null);class Wb extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(yr.Provider,{value:this.props.routeContext},D.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gb(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(bg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(yr.Provider,{value:e},r)}function Kb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||qe(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:v}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let v,S=!1,k=null,C=null;n&&(v=a&&p.route.id?a[p.route.id]:void 0,k=p.route.errorElement||qb,l&&(c<0&&g===0?(Zb("route-fallback"),S=!0,C=null):c===g&&(S=!0,C=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),w=()=>{let T;return v?T=k:S?T=C:p.route.Component?T=D.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=h,D.createElement(Gb,{match:p,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?D.createElement(Wb,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var H0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(H0||{}),Q0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Q0||{});function Hb(t){let e=D.useContext(bg);return e||qe(!1),e}function Qb(t){let e=D.useContext(Fb);return e||qe(!1),e}function Yb(t){let e=D.useContext(yr);return e||qe(!1),e}function Y0(t){let e=Yb(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function Jb(){var t;let e=D.useContext(q0),n=Qb(),r=Y0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Xb(){let{router:t}=Hb(H0.UseNavigateStable),e=Y0(Q0.UseNavigateStable),n=D.useRef(!1);return W0(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Cl({fromRouteId:e},s)))},[t,e])}const kw={};function Zb(t,e,n){kw[t]||(kw[t]=!0)}function eN(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function J0(t){let{to:e,replace:n,state:r,relative:i}=t;$o()||qe(!1);let{future:s,static:o}=D.useContext(gi),{matches:a}=D.useContext(yr),{pathname:l}=yi(),c=_r(),h=Cg(e,xg(a,s.v7_relativeSplatPath),l,i==="path"),p=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Yn(t){qe(!1)}function tN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ur.Pop,navigator:s,static:o=!1,future:a}=t;$o()&&qe(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:Cl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=_s(r));let{pathname:h="/",search:p="",hash:g="",state:v=null,key:S="default"}=r,k=D.useMemo(()=>{let C=kg(h,l);return C==null?null:{location:{pathname:C,search:p,hash:g,state:v,key:S},navigationType:i}},[l,h,p,g,v,S,i]);return k==null?null:D.createElement(gi.Provider,{value:c},D.createElement(Hd.Provider,{children:n,value:k}))}function nN(t){let{children:e,location:n}=t;return Bb(Up(e),n)}new Promise(()=>{});function Up(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Up(r.props.children,s));return}r.type!==Yn&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bp(){return Bp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bp.apply(null,arguments)}function rN(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function iN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sN(t,e){return t.button===0&&(!e||e==="_self")&&!iN(t)}function zp(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function oN(t,e){let n=zp(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const aN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lN="6";try{window.__reactRouterVersion=lN}catch{}const uN="startTransition",xw=tx[uN];function cN(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=fb({window:i,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(p=>{c&&xw?xw(()=>l(p)):l(p)},[l,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>eN(r),[r]),D.createElement(tN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const dN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zn=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:p}=e,g=rN(e,aN),{basename:v}=D.useContext(gi),S,k=!1;if(typeof c=="string"&&hN.test(c)&&(S=c,dN))try{let T=new URL(window.location.href),O=c.startsWith("//")?new URL(T.protocol+c):new URL(c),j=kg(O.pathname,v);O.origin===T.origin&&j!=null?c=j+O.search+O.hash:k=!0}catch{}let C=jb(c,{relative:i}),E=fN(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:p});function w(T){r&&r(T),T.defaultPrevented||E(T)}return D.createElement("a",Bp({},g,{href:S||C,onClick:k||s?r:w,ref:n,target:l}))});var Cw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cw||(Cw={}));var bw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bw||(bw={}));function fN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=_r(),c=yi(),h=K0(t,{relative:o});return D.useCallback(p=>{if(sN(p,n)){p.preventDefault();let g=r!==void 0?r:ud(c)===ud(h);l(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}function pN(t){let e=D.useRef(zp(t)),n=D.useRef(!1),r=yi(),i=D.useMemo(()=>oN(r.search,n.current?null:e.current),[r.search]),s=_r(),o=D.useCallback((a,l)=>{const c=zp(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,l)},[s,i]);return[i,o]}var Nw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Z0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(g=64)),r.push(n[h],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new gN;const g=s<<2|a>>4;if(r.push(g),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yN=function(t){const e=X0(t);return Z0.encodeByteArray(e,!0)},cd=function(t){return yN(t).replace(/\./g,"")},eS=function(t){try{return Z0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function dd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_N(n)||(t[n]=dd(t[n],e[n]));return t}function _N(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=()=>vN().__FIREBASE_DEFAULTS__,IN=()=>{if(typeof process>"u"||typeof Nw>"u")return;const t=Nw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eS(t[1]);return e&&JSON.parse(e)},Ng=()=>{try{return wN()||IN()||EN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tS=()=>{var t;return(t=Ng())===null||t===void 0?void 0:t.config},TN=t=>{var e;return(e=Ng())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cd(JSON.stringify(n)),cd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Dg(){var t;const e=(t=Ng())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nS(){return typeof self=="object"&&self.self===self}function rS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iS(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sS(){return!Dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bl(){try{return typeof indexedDB=="object"}catch{return!1}}function RN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kN,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,r)}}function xN(t,e){return t.replace(CN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vw(s)&&Vw(o)){if(!Nl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oS(t,e){const n=new NN(t,e);return n.subscribe.bind(n)}class NN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kf),i.error===void 0&&(i.error=kf),i.complete===void 0&&(i.complete=kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LN(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ON(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ON(t){return t===Ni?void 0:t}function LN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const lS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},MN=ie.INFO,FN={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},jN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qd{constructor(e){this.name=e,this._logLevel=MN,this._logHandler=jN,this._userLogHandler=null,Og.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function UN(t){Og.forEach(e=>{e.setLogLevel(t)})}function BN(t,e){for(const n of Og){let r=null;e&&e.level&&(r=lS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const zN=(t,e)=>e.some(n=>t instanceof n);let Ow,Lw;function $N(){return Ow||(Ow=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qN(){return Lw||(Lw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uS=new WeakMap,$p=new WeakMap,cS=new WeakMap,xf=new WeakMap,Lg=new WeakMap;function WN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uS.set(n,t)}).catch(()=>{}),Lg.set(e,t),e}function GN(t){if($p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$p.set(t,e)}let qp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KN(t){qp=t(qp)}function HN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cf(this),e,...n);return cS.set(r,e.sort?e.sort():[e]),Xr(r)}:qN().includes(t)?function(...e){return t.apply(Cf(this),e),Xr(uS.get(this))}:function(...e){return Xr(t.apply(Cf(this),e))}}function QN(t){return typeof t=="function"?HN(t):(t instanceof IDBTransaction&&GN(t),zN(t,$N())?new Proxy(t,qp):t)}function Xr(t){if(t instanceof IDBRequest)return WN(t);if(xf.has(t))return xf.get(t);const e=QN(t);return e!==t&&(xf.set(t,e),Lg.set(e,t)),e}const Cf=t=>Lg.get(t);function YN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xr(o.result),l.oldVersion,l.newVersion,Xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const JN=["get","getKey","getAll","getAllKeys","count"],XN=["put","add","delete","clear"],bf=new Map;function Mw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bf.get(e))return bf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return bf.set(e,s),s}KN(t=>({...t,get:(e,n,r)=>Mw(e,n)||t.get(e,n,r),has:(e,n)=>!!Mw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function e1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Wp="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Qd("@firebase/app"),t1="@firebase/app-compat",n1="@firebase/analytics-compat",r1="@firebase/analytics",i1="@firebase/app-check-compat",s1="@firebase/app-check",o1="@firebase/auth",a1="@firebase/auth-compat",l1="@firebase/database",u1="@firebase/database-compat",c1="@firebase/functions",d1="@firebase/functions-compat",h1="@firebase/installations",f1="@firebase/installations-compat",p1="@firebase/messaging",m1="@firebase/messaging-compat",g1="@firebase/performance",y1="@firebase/performance-compat",_1="@firebase/remote-config",v1="@firebase/remote-config-compat",w1="@firebase/storage",I1="@firebase/storage-compat",E1="@firebase/firestore",T1="@firebase/vertexai-preview",S1="@firebase/firestore-compat",A1="firebase",P1="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]",R1={[hd]:"fire-core",[t1]:"fire-core-compat",[r1]:"fire-analytics",[n1]:"fire-analytics-compat",[s1]:"fire-app-check",[i1]:"fire-app-check-compat",[o1]:"fire-auth",[a1]:"fire-auth-compat",[l1]:"fire-rtdb",[u1]:"fire-rtdb-compat",[c1]:"fire-fn",[d1]:"fire-fn-compat",[h1]:"fire-iid",[f1]:"fire-iid-compat",[p1]:"fire-fcm",[m1]:"fire-fcm-compat",[g1]:"fire-perf",[y1]:"fire-perf-compat",[_1]:"fire-rc",[v1]:"fire-rc-compat",[w1]:"fire-gcs",[I1]:"fire-gcs-compat",[E1]:"fire-fst",[S1]:"fire-fst-compat",[T1]:"fire-vertex","fire-js":"fire-js",[A1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Map,To=new Map,So=new Map;function Dl(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dS(t,e){t.container.addOrOverwriteComponent(e)}function ii(t){const e=t.name;if(So.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;So.set(e,t);for(const n of ri.values())Dl(n,t);for(const n of To.values())Dl(n,t);return!0}function hS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function k1(t,e,n=ni){hS(t,e).clearInstance(n)}function fS(t){return t.options!==void 0}function Me(t){return t.settings!==void 0}function x1(){So.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new vs("app","Firebase",C1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1 extends pS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,En(hd,Wp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Fg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw dn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=P1;function Mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=tS()),!n)throw dn.create("no-options");const s=ri.get(i);if(s){if(Nl(n,s.options)&&Nl(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new aS(i);for(const l of So.values())o.addComponent(l);const a=new pS(n,r,o);return ri.set(i,a),a}function N1(t,e){if(nS())throw dn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;fS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,p)=>Math.imul(31,h)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw dn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=To.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new aS(s);for(const c of So.values())a.addComponent(c);const l=new b1(n,e,s,a);return To.set(s,l),l}function D1(t=ni){const e=ri.get(t);if(!e&&t===ni&&tS())return Mg();if(!e)throw dn.create("no-app",{appName:t});return e}function V1(){return Array.from(ri.values())}async function Fg(t){let e=!1;const n=t.name;ri.has(n)?(e=!0,ri.delete(n)):To.has(n)&&t.decRefCount()<=0&&(To.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function En(t,e,n){var r;let i=(r=R1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}ii(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function mS(t,e){if(t!==null&&typeof t!="function")throw dn.create("invalid-log-argument");BN(t,e)}function gS(t){UN(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="firebase-heartbeat-database",L1=1,Vl="firebase-heartbeat-store";let Nf=null;function yS(){return Nf||(Nf=YN(O1,L1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vl)}catch(n){console.warn(n)}}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),Nf}async function M1(t){try{const n=(await yS()).transaction(Vl),r=await n.objectStore(Vl).get(_S(t));return await n.done,r}catch(e){if(e instanceof xt)ns.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function Fw(t,e){try{const r=(await yS()).transaction(Vl,"readwrite");await r.objectStore(Vl).put(e,_S(t)),await r.done}catch(n){if(n instanceof xt)ns.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function _S(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=1024,j1=30*24*60*60*1e3;class U1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=j1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jw(),{heartbeatsToSend:r,unsentEntries:i}=B1(this._heartbeatsCache.heartbeats),s=cd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jw(){return new Date().toISOString().substring(0,10)}function B1(t,e=F1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?RN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uw(t){return cd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){ii(new Bn("platform-logger",e=>new ZN(e),"PRIVATE")),ii(new Bn("heartbeat",e=>new U1(e),"PRIVATE")),En(hd,Wp,t),En(hd,Wp,"esm2017"),En("fire-js","")}$1("");const q1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xt,SDK_VERSION:_i,_DEFAULT_ENTRY_NAME:ni,_addComponent:Dl,_addOrOverwriteComponent:dS,_apps:ri,_clearComponents:x1,_components:So,_getProvider:hS,_isFirebaseApp:fS,_isFirebaseServerApp:Me,_registerComponent:ii,_removeServiceInstance:k1,_serverApps:To,deleteApp:Fg,getApp:D1,getApps:V1,initializeApp:Mg,initializeServerApp:N1,onLog:mS,registerVersion:En,setLogLevel:gS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n){this._delegate=e,this.firebase=n,Dl(e,new Bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Fg(this._delegate)))}_getService(e,n=ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Dl(this._delegate,e)}_addOrOverwriteComponent(e){dS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bw=new vs("app-compat","Firebase",G1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:En,setLogLevel:gS,onLog:mS,apps:null,SDK_VERSION:_i,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:q1}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ni,!Dw(e,c))throw Bw.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const p=Mg(c,h);if(Dw(e,p.name))return e[p.name];const g=new t(p,n);return e[p.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,p=h.replace("-compat","");if(ii(c)&&c.type==="PUBLIC"){const g=(v=i())=>{if(typeof v[p]!="function")throw Bw.create("invalid-app-argument",{appName:h});return v[p]()};c.serviceProps!==void 0&&dd(g,c.serviceProps),n[p]=g,t.prototype[p]=function(...v){return this._getService.bind(this,h).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[p]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){const t=K1(W1);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:vS,extendNamespace:e,createSubscribe:oS,ErrorFactory:vs,deepExtend:dd});function e(n){dd(t,n)}return t}const H1=vS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=new Qd("@firebase/app-compat"),Q1="@firebase/app-compat",Y1="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){En(Q1,Y1,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(nS()&&self.firebase!==void 0){zw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&zw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ln=H1;J1();var X1="firebase",Z1="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.registerVersion(X1,Z1,"app-compat");var $w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,wS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function A(){}A.prototype=_.prototype,I.D=_.prototype,I.prototype=new A,I.prototype.constructor=I,I.C=function(P,x,b){for(var R=Array(arguments.length-2),at=2;at<arguments.length;at++)R[at-2]=arguments[at];return _.prototype[x].apply(P,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,A){A||(A=0);var P=Array(16);if(typeof _=="string")for(var x=0;16>x;++x)P[x]=_.charCodeAt(A++)|_.charCodeAt(A++)<<8|_.charCodeAt(A++)<<16|_.charCodeAt(A++)<<24;else for(x=0;16>x;++x)P[x]=_[A++]|_[A++]<<8|_[A++]<<16|_[A++]<<24;_=I.g[0],A=I.g[1],x=I.g[2];var b=I.g[3],R=_+(b^A&(x^b))+P[0]+3614090360&4294967295;_=A+(R<<7&4294967295|R>>>25),R=b+(x^_&(A^x))+P[1]+3905402710&4294967295,b=_+(R<<12&4294967295|R>>>20),R=x+(A^b&(_^A))+P[2]+606105819&4294967295,x=b+(R<<17&4294967295|R>>>15),R=A+(_^x&(b^_))+P[3]+3250441966&4294967295,A=x+(R<<22&4294967295|R>>>10),R=_+(b^A&(x^b))+P[4]+4118548399&4294967295,_=A+(R<<7&4294967295|R>>>25),R=b+(x^_&(A^x))+P[5]+1200080426&4294967295,b=_+(R<<12&4294967295|R>>>20),R=x+(A^b&(_^A))+P[6]+2821735955&4294967295,x=b+(R<<17&4294967295|R>>>15),R=A+(_^x&(b^_))+P[7]+4249261313&4294967295,A=x+(R<<22&4294967295|R>>>10),R=_+(b^A&(x^b))+P[8]+1770035416&4294967295,_=A+(R<<7&4294967295|R>>>25),R=b+(x^_&(A^x))+P[9]+2336552879&4294967295,b=_+(R<<12&4294967295|R>>>20),R=x+(A^b&(_^A))+P[10]+4294925233&4294967295,x=b+(R<<17&4294967295|R>>>15),R=A+(_^x&(b^_))+P[11]+2304563134&4294967295,A=x+(R<<22&4294967295|R>>>10),R=_+(b^A&(x^b))+P[12]+1804603682&4294967295,_=A+(R<<7&4294967295|R>>>25),R=b+(x^_&(A^x))+P[13]+4254626195&4294967295,b=_+(R<<12&4294967295|R>>>20),R=x+(A^b&(_^A))+P[14]+2792965006&4294967295,x=b+(R<<17&4294967295|R>>>15),R=A+(_^x&(b^_))+P[15]+1236535329&4294967295,A=x+(R<<22&4294967295|R>>>10),R=_+(x^b&(A^x))+P[1]+4129170786&4294967295,_=A+(R<<5&4294967295|R>>>27),R=b+(A^x&(_^A))+P[6]+3225465664&4294967295,b=_+(R<<9&4294967295|R>>>23),R=x+(_^A&(b^_))+P[11]+643717713&4294967295,x=b+(R<<14&4294967295|R>>>18),R=A+(b^_&(x^b))+P[0]+3921069994&4294967295,A=x+(R<<20&4294967295|R>>>12),R=_+(x^b&(A^x))+P[5]+3593408605&4294967295,_=A+(R<<5&4294967295|R>>>27),R=b+(A^x&(_^A))+P[10]+38016083&4294967295,b=_+(R<<9&4294967295|R>>>23),R=x+(_^A&(b^_))+P[15]+3634488961&4294967295,x=b+(R<<14&4294967295|R>>>18),R=A+(b^_&(x^b))+P[4]+3889429448&4294967295,A=x+(R<<20&4294967295|R>>>12),R=_+(x^b&(A^x))+P[9]+568446438&4294967295,_=A+(R<<5&4294967295|R>>>27),R=b+(A^x&(_^A))+P[14]+3275163606&4294967295,b=_+(R<<9&4294967295|R>>>23),R=x+(_^A&(b^_))+P[3]+4107603335&4294967295,x=b+(R<<14&4294967295|R>>>18),R=A+(b^_&(x^b))+P[8]+1163531501&4294967295,A=x+(R<<20&4294967295|R>>>12),R=_+(x^b&(A^x))+P[13]+2850285829&4294967295,_=A+(R<<5&4294967295|R>>>27),R=b+(A^x&(_^A))+P[2]+4243563512&4294967295,b=_+(R<<9&4294967295|R>>>23),R=x+(_^A&(b^_))+P[7]+1735328473&4294967295,x=b+(R<<14&4294967295|R>>>18),R=A+(b^_&(x^b))+P[12]+2368359562&4294967295,A=x+(R<<20&4294967295|R>>>12),R=_+(A^x^b)+P[5]+4294588738&4294967295,_=A+(R<<4&4294967295|R>>>28),R=b+(_^A^x)+P[8]+2272392833&4294967295,b=_+(R<<11&4294967295|R>>>21),R=x+(b^_^A)+P[11]+1839030562&4294967295,x=b+(R<<16&4294967295|R>>>16),R=A+(x^b^_)+P[14]+4259657740&4294967295,A=x+(R<<23&4294967295|R>>>9),R=_+(A^x^b)+P[1]+2763975236&4294967295,_=A+(R<<4&4294967295|R>>>28),R=b+(_^A^x)+P[4]+1272893353&4294967295,b=_+(R<<11&4294967295|R>>>21),R=x+(b^_^A)+P[7]+4139469664&4294967295,x=b+(R<<16&4294967295|R>>>16),R=A+(x^b^_)+P[10]+3200236656&4294967295,A=x+(R<<23&4294967295|R>>>9),R=_+(A^x^b)+P[13]+681279174&4294967295,_=A+(R<<4&4294967295|R>>>28),R=b+(_^A^x)+P[0]+3936430074&4294967295,b=_+(R<<11&4294967295|R>>>21),R=x+(b^_^A)+P[3]+3572445317&4294967295,x=b+(R<<16&4294967295|R>>>16),R=A+(x^b^_)+P[6]+76029189&4294967295,A=x+(R<<23&4294967295|R>>>9),R=_+(A^x^b)+P[9]+3654602809&4294967295,_=A+(R<<4&4294967295|R>>>28),R=b+(_^A^x)+P[12]+3873151461&4294967295,b=_+(R<<11&4294967295|R>>>21),R=x+(b^_^A)+P[15]+530742520&4294967295,x=b+(R<<16&4294967295|R>>>16),R=A+(x^b^_)+P[2]+3299628645&4294967295,A=x+(R<<23&4294967295|R>>>9),R=_+(x^(A|~b))+P[0]+4096336452&4294967295,_=A+(R<<6&4294967295|R>>>26),R=b+(A^(_|~x))+P[7]+1126891415&4294967295,b=_+(R<<10&4294967295|R>>>22),R=x+(_^(b|~A))+P[14]+2878612391&4294967295,x=b+(R<<15&4294967295|R>>>17),R=A+(b^(x|~_))+P[5]+4237533241&4294967295,A=x+(R<<21&4294967295|R>>>11),R=_+(x^(A|~b))+P[12]+1700485571&4294967295,_=A+(R<<6&4294967295|R>>>26),R=b+(A^(_|~x))+P[3]+2399980690&4294967295,b=_+(R<<10&4294967295|R>>>22),R=x+(_^(b|~A))+P[10]+4293915773&4294967295,x=b+(R<<15&4294967295|R>>>17),R=A+(b^(x|~_))+P[1]+2240044497&4294967295,A=x+(R<<21&4294967295|R>>>11),R=_+(x^(A|~b))+P[8]+1873313359&4294967295,_=A+(R<<6&4294967295|R>>>26),R=b+(A^(_|~x))+P[15]+4264355552&4294967295,b=_+(R<<10&4294967295|R>>>22),R=x+(_^(b|~A))+P[6]+2734768916&4294967295,x=b+(R<<15&4294967295|R>>>17),R=A+(b^(x|~_))+P[13]+1309151649&4294967295,A=x+(R<<21&4294967295|R>>>11),R=_+(x^(A|~b))+P[4]+4149444226&4294967295,_=A+(R<<6&4294967295|R>>>26),R=b+(A^(_|~x))+P[11]+3174756917&4294967295,b=_+(R<<10&4294967295|R>>>22),R=x+(_^(b|~A))+P[2]+718787259&4294967295,x=b+(R<<15&4294967295|R>>>17),R=A+(b^(x|~_))+P[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+x&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var A=_-this.blockSize,P=this.B,x=this.h,b=0;b<_;){if(x==0)for(;b<=A;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<_;)if(P[x++]=I.charCodeAt(b++),x==this.blockSize){i(this,P),x=0;break}}else for(;b<_;)if(P[x++]=I[b++],x==this.blockSize){i(this,P),x=0;break}}this.h=x,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var A=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=A&255,A/=256;for(this.u(I),I=Array(16),_=A=0;4>_;++_)for(var P=0;32>P;P+=8)I[A++]=this.g[_]>>>P&255;return I};function s(I,_){var A=a;return Object.prototype.hasOwnProperty.call(A,I)?A[I]:A[I]=_(I)}function o(I,_){this.h=_;for(var A=[],P=!0,x=I.length-1;0<=x;x--){var b=I[x]|0;P&&b==_||(A[x]=b,P=!1)}this.g=A}var a={};function l(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(c(-I));for(var _=[],A=1,P=0;I>=A;P++)_[P]=I/A|0,A*=4294967296;return new o(_,0)}function h(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return C(h(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(_,8)),P=p,x=0;x<I.length;x+=8){var b=Math.min(8,I.length-x),R=parseInt(I.substring(x,x+b),_);8>b?(b=c(Math.pow(_,b)),P=P.j(b).add(c(R))):(P=P.j(A),P=P.add(c(R)))}return P}var p=l(0),g=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var I=0,_=1,A=0;A<this.g.length;A++){var P=this.i(A);I+=(0<=P?P:4294967296+P)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(k(this))return"-"+C(this).toString(I);for(var _=c(Math.pow(I,6)),A=this,P="";;){var x=O(A,_).g;A=E(A,x.j(_));var b=((0<A.g.length?A.g[0]:A.h)>>>0).toString(I);if(A=x,S(A))return b+P;for(;6>b.length;)b="0"+b;P=b+P}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=E(this,I),k(I)?-1:S(I)?0:1};function C(I){for(var _=I.g.length,A=[],P=0;P<_;P++)A[P]=~I.g[P];return new o(A,~I.h).add(g)}t.abs=function(){return k(this)?C(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),A=[],P=0,x=0;x<=_;x++){var b=P+(this.i(x)&65535)+(I.i(x)&65535),R=(b>>>16)+(this.i(x)>>>16)+(I.i(x)>>>16);P=R>>>16,b&=65535,R&=65535,A[x]=R<<16|b}return new o(A,A[A.length-1]&-2147483648?-1:0)};function E(I,_){return I.add(C(_))}t.j=function(I){if(S(this)||S(I))return p;if(k(this))return k(I)?C(this).j(C(I)):C(C(this).j(I));if(k(I))return C(this.j(C(I)));if(0>this.l(v)&&0>I.l(v))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,A=[],P=0;P<2*_;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<I.g.length;x++){var b=this.i(P)>>>16,R=this.i(P)&65535,at=I.i(x)>>>16,Gt=I.i(x)&65535;A[2*P+2*x]+=R*Gt,w(A,2*P+2*x),A[2*P+2*x+1]+=b*Gt,w(A,2*P+2*x+1),A[2*P+2*x+1]+=R*at,w(A,2*P+2*x+1),A[2*P+2*x+2]+=b*at,w(A,2*P+2*x+2)}for(P=0;P<_;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=_;P<2*_;P++)A[P]=0;return new o(A,0)};function w(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function T(I,_){this.g=I,this.h=_}function O(I,_){if(S(_))throw Error("division by zero");if(S(I))return new T(p,p);if(k(I))return _=O(C(I),_),new T(C(_.g),C(_.h));if(k(_))return _=O(I,C(_)),new T(C(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var A=g,P=_;0>=P.l(I);)A=j(A),P=j(P);var x=F(A,1),b=F(P,1);for(P=F(P,2),A=F(A,2);!S(P);){var R=b.add(P);0>=R.l(I)&&(x=x.add(A),b=R),P=F(P,1),A=F(A,1)}return _=E(I,x.j(_)),new T(x,_)}for(x=p;0<=I.l(_);){for(A=Math.max(1,Math.floor(I.m()/_.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),b=c(A),R=b.j(_);k(R)||0<R.l(I);)A-=P,b=c(A),R=b.j(_);S(b)&&(b=g),x=x.add(b),I=E(I,R)}return new T(x,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),A=[],P=0;P<_;P++)A[P]=this.i(P)&I.i(P);return new o(A,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),A=[],P=0;P<_;P++)A[P]=this.i(P)|I.i(P);return new o(A,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),A=[],P=0;P<_;P++)A[P]=this.i(P)^I.i(P);return new o(A,this.h^I.h)};function j(I){for(var _=I.g.length+1,A=[],P=0;P<_;P++)A[P]=I.i(P)<<1|I.i(P-1)>>>31;return new o(A,I.h)}function F(I,_){var A=_>>5;_%=32;for(var P=I.g.length-A,x=[],b=0;b<P;b++)x[b]=0<_?I.i(b+A)>>>_|I.i(b+A+1)<<32-_:I.i(b+A);return new o(x,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Hi=o}).apply(typeof $w<"u"?$w:typeof self<"u"?self:typeof window<"u"?window:{});var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IS,ES,za,TS,Pc,Gp,SS,AS,PS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof sc=="object"&&sc];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var N=u[y];if(!(N in m))break e;m=m[N]}u=u[u.length-1],y=m[u],d=d(y),d!=y&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,y=!1,N={next:function(){if(!y&&m<u.length){var M=m++;return{value:d(M,u[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function p(u,d,m){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),u.apply(d,N)}}return function(){return u.apply(d,arguments)}}function g(u,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function v(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function S(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(y,N,M){for(var G=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)G[ye-2]=arguments[ye];return d.prototype[N].apply(y,G)}}function k(u){const d=u.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=u[y];return m}return[]}function C(u,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const N=u.length||0,M=y.length||0;u.length=N+M;for(let G=0;G<M;G++)u[N+G]=y[G]}else u.push(y)}}class E{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var j=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(u,d,m){for(const y in u)d.call(m,u[y],y,u)}function I(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function _(u){const d={};for(const m in u)d[m]=u[m];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,d){let m,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(m in y)u[m]=y[m];for(let M=0;M<A.length;M++)m=A[M],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function x(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function b(u){a.setTimeout(()=>{throw u},0)}function R(){var u=Q;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class at{constructor(){this.h=this.g=null}add(d,m){const y=Gt.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Gt=new E(()=>new Pn,u=>u.reset());class Pn{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let B,U=!1,Q=new at,X=()=>{const u=a.Promise.resolve(void 0);B=()=>{u.then(le)}};var le=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(m){b(m)}var d=Gt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}U=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Kt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function Wn(u,d){if(Se.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(j){e:{try{O(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Gn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Wn.aa.h.call(this)}}S(Wn,Se);var Gn={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),ok=0;function ak(u,d,m,y,N){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=N,this.key=++ok,this.da=this.fa=!1}function Au(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Pu(u){this.src=u,this.g={},this.h=0}Pu.prototype.add=function(u,d,m,y,N){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var G=Nh(u,d,y,N);return-1<G?(d=u[G],m||(d.fa=!1)):(d=new ak(d,this.src,M,!!y,N),d.fa=m,u.push(d)),d};function bh(u,d){var m=d.type;if(m in u.g){var y=u.g[m],N=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=N)&&Array.prototype.splice.call(y,N,1),M&&(Au(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Nh(u,d,m,y){for(var N=0;N<u.length;++N){var M=u[N];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==y)return N}return-1}var Dh="closure_lm_"+(1e6*Math.random()|0),Vh={};function m_(u,d,m,y,N){if(Array.isArray(d)){for(var M=0;M<d.length;M++)m_(u,d[M],m,y,N);return null}return m=__(m),u&&u[Kn]?u.K(d,m,c(y)?!!y.capture:!1,N):lk(u,d,m,!1,y,N)}function lk(u,d,m,y,N,M){if(!d)throw Error("Invalid event type");var G=c(N)?!!N.capture:!!N,ye=Lh(u);if(ye||(u[Dh]=ye=new Pu(u)),m=ye.add(d,m,y,G,M),m.proxy)return m;if(y=uk(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)Kt||(N=G),N===void 0&&(N=!1),u.addEventListener(d.toString(),y,N);else if(u.attachEvent)u.attachEvent(y_(d.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function uk(){function u(m){return d.call(u.src,u.listener,m)}const d=ck;return u}function g_(u,d,m,y,N){if(Array.isArray(d))for(var M=0;M<d.length;M++)g_(u,d[M],m,y,N);else y=c(y)?!!y.capture:!!y,m=__(m),u&&u[Kn]?(u=u.i,d=String(d).toString(),d in u.g&&(M=u.g[d],m=Nh(M,m,y,N),-1<m&&(Au(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[d],u.h--)))):u&&(u=Lh(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Nh(d,m,y,N)),(m=-1<u?d[u]:null)&&Oh(m))}function Oh(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Kn])bh(d.i,u);else{var m=u.type,y=u.proxy;d.removeEventListener?d.removeEventListener(m,y,u.capture):d.detachEvent?d.detachEvent(y_(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Lh(d))?(bh(m,u),m.h==0&&(m.src=null,d[Dh]=null)):Au(u)}}}function y_(u){return u in Vh?Vh[u]:Vh[u]="on"+u}function ck(u,d){if(u.da)u=!0;else{d=new Wn(d,this);var m=u.listener,y=u.ha||u.src;u.fa&&Oh(u),u=m.call(y,d)}return u}function Lh(u){return u=u[Dh],u instanceof Pu?u:null}var Mh="__closure_events_fn_"+(1e9*Math.random()>>>0);function __(u){return typeof u=="function"?u:(u[Mh]||(u[Mh]=function(d){return u.handleEvent(d)}),u[Mh])}function mt(){fe.call(this),this.i=new Pu(this),this.M=this,this.F=null}S(mt,fe),mt.prototype[Kn]=!0,mt.prototype.removeEventListener=function(u,d,m,y){g_(this,u,d,m,y)};function Tt(u,d){var m,y=u.F;if(y)for(m=[];y;y=y.F)m.push(y);if(u=u.M,y=d.type||d,typeof d=="string")d=new Se(d,u);else if(d instanceof Se)d.target=d.target||u;else{var N=d;d=new Se(y,u),P(d,N)}if(N=!0,m)for(var M=m.length-1;0<=M;M--){var G=d.g=m[M];N=Ru(G,y,!0,d)&&N}if(G=d.g=u,N=Ru(G,y,!0,d)&&N,N=Ru(G,y,!1,d)&&N,m)for(M=0;M<m.length;M++)G=d.g=m[M],N=Ru(G,y,!1,d)&&N}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],y=0;y<m.length;y++)Au(m[y]);delete u.g[d],u.h--}}this.F=null},mt.prototype.K=function(u,d,m,y){return this.i.add(String(u),d,!1,m,y)},mt.prototype.L=function(u,d,m,y){return this.i.add(String(u),d,!0,m,y)};function Ru(u,d,m,y){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,M=0;M<d.length;++M){var G=d[M];if(G&&!G.da&&G.capture==m){var ye=G.listener,lt=G.ha||G.src;G.fa&&bh(u.i,G),N=ye.call(lt,y)!==!1&&N}}return N&&!y.defaultPrevented}function v_(u,d,m){if(typeof u=="function")m&&(u=g(u,m));else if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function w_(u){u.g=v_(()=>{u.g=null,u.i&&(u.i=!1,w_(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class dk extends fe{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:w_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(u){fe.call(this),this.h=u,this.g={}}S(oa,fe);var I_=[];function E_(u){F(u.g,function(d,m){this.g.hasOwnProperty(m)&&Oh(d)},u),u.g={}}oa.prototype.N=function(){oa.aa.N.call(this),E_(this)},oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fh=a.JSON.stringify,hk=a.JSON.parse,fk=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function jh(){}jh.prototype.h=null;function T_(u){return u.h||(u.h=u.i())}function S_(){}var aa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uh(){Se.call(this,"d")}S(Uh,Se);function Bh(){Se.call(this,"c")}S(Bh,Se);var Si={},A_=null;function ku(){return A_=A_||new mt}Si.La="serverreachability";function P_(u){Se.call(this,Si.La,u)}S(P_,Se);function la(u){const d=ku();Tt(d,new P_(d))}Si.STAT_EVENT="statevent";function R_(u,d){Se.call(this,Si.STAT_EVENT,u),this.stat=d}S(R_,Se);function St(u){const d=ku();Tt(d,new R_(d,u))}Si.Ma="timingevent";function k_(u,d){Se.call(this,Si.Ma,u),this.size=d}S(k_,Se);function ua(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function ca(){this.g=!0}ca.prototype.xa=function(){this.g=!1};function pk(u,d,m,y,N,M){u.info(function(){if(u.g)if(M)for(var G="",ye=M.split("&"),lt=0;lt<ye.length;lt++){var he=ye[lt].split("=");if(1<he.length){var gt=he[0];he=he[1];var yt=gt.split("_");G=2<=yt.length&&yt[1]=="type"?G+(gt+"="+he+"&"):G+(gt+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+d+`
`+m+`
`+G})}function mk(u,d,m,y,N,M,G){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+d+`
`+m+`
`+M+" "+G})}function Rs(u,d,m,y){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+yk(u,m)+(y?" "+y:"")})}function gk(u,d){u.info(function(){return"TIMEOUT: "+d})}ca.prototype.info=function(){};function yk(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var y=m[u];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return Fh(m)}catch{return d}}var xu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},x_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zh;function Cu(){}S(Cu,jh),Cu.prototype.g=function(){return new XMLHttpRequest},Cu.prototype.i=function(){return{}},zh=new Cu;function Sr(u,d,m,y){this.j=u,this.i=d,this.l=m,this.R=y||1,this.U=new oa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new C_}function C_(){this.i=null,this.g="",this.h=!1}var b_={},$h={};function qh(u,d,m){u.L=1,u.v=Vu(Hn(d)),u.m=m,u.P=!0,N_(u,null)}function N_(u,d){u.F=Date.now(),bu(u),u.A=Hn(u.v);var m=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),G_(m.i,"t",y),u.C=0,m=u.j.J,u.h=new C_,u.g=cv(u.j,m?d:null,!u.m),0<u.O&&(u.M=new dk(g(u.Y,u,u.g),u.O)),d=u.U,m=u.g,y=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(I_[0]=N.toString()),N=I_);for(var M=0;M<N.length;M++){var G=m_(m,N[M],y||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),la(),pk(u.i,u.u,u.A,u.l,u.R,u.m)}Sr.prototype.ca=function(u){u=u.target;const d=this.M;d&&Qn(u)==3?d.j():this.Y(u)},Sr.prototype.Y=function(u){try{if(u==this.g)e:{const yt=Qn(this.g);var d=this.g.Ba();const Cs=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Z_(this.g)))){this.J||yt!=4||d==7||(d==8||0>=Cs?la(3):la(2)),Wh(this);var m=this.g.Z();this.X=m;t:if(D_(this)){var y=Z_(this.g);u="";var N=y.length,M=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),da(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,u+=this.h.i.decode(y[d],{stream:!(M&&d==N-1)});y.length=0,this.h.g+=u,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,mk(this.i,this.u,this.A,this.l,this.R,yt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,lt=this.g;if((ye=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ye)){var he=ye;break t}}he=null}if(m=he)Rs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gh(this,m);else{this.o=!1,this.s=3,St(12),Ai(this),da(this);break e}}if(this.P){m=!0;let mn;for(;!this.J&&this.C<G.length;)if(mn=_k(this,G),mn==$h){yt==4&&(this.s=4,St(14),m=!1),Rs(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==b_){this.s=4,St(15),Rs(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Rs(this.i,this.l,mn,null),Gh(this,mn);if(D_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,St(16),m=!1),this.o=this.o&&m,!m)Rs(this.i,this.l,G,"[Invalid Chunked Response]"),Ai(this),da(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Xh(gt),gt.M=!0,St(11))}}else Rs(this.i,this.l,G,null),Gh(this,G);yt==4&&Ai(this),this.o&&!this.J&&(yt==4?ov(this.j,this):(this.o=!1,bu(this)))}else Ok(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ai(this),da(this)}}}catch{}finally{}};function D_(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function _k(u,d){var m=u.C,y=d.indexOf(`
`,m);return y==-1?$h:(m=Number(d.substring(m,y)),isNaN(m)?b_:(y+=1,y+m>d.length?$h:(d=d.slice(y,y+m),u.C=y+m,d)))}Sr.prototype.cancel=function(){this.J=!0,Ai(this)};function bu(u){u.S=Date.now()+u.I,V_(u,u.I)}function V_(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ua(g(u.ba,u),d)}function Wh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Sr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(gk(this.i,this.A),this.L!=2&&(la(),St(17)),Ai(this),this.s=2,da(this)):V_(this,this.S-u)};function da(u){u.j.G==0||u.J||ov(u.j,u)}function Ai(u){Wh(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,E_(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Gh(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||Kh(m.h,u))){if(!u.K&&Kh(m.h,u)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)ju(m),Mu(m);else break e;Jh(m),St(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=ua(g(m.Za,m),6e3));if(1>=M_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ri(m,11)}else if((u.K||m.g==u)&&ju(m),!w(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let he=N[d];if(m.T=he[0],he=he[1],m.G==2)if(he[0]=="c"){m.K=he[1],m.ia=he[2];const gt=he[3];gt!=null&&(m.la=gt,m.j.info("VER="+m.la));const yt=he[4];yt!=null&&(m.Aa=yt,m.j.info("SVER="+m.Aa));const Cs=he[5];Cs!=null&&typeof Cs=="number"&&0<Cs&&(y=1.5*Cs,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const mn=u.g;if(mn){const Bu=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bu){var M=y.h;M.g||Bu.indexOf("spdy")==-1&&Bu.indexOf("quic")==-1&&Bu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Hh(M,M.h),M.h=null))}if(y.D){const Zh=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zh&&(y.ya=Zh,we(y.I,y.D,Zh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var G=u;if(y.qa=uv(y,y.J?y.ia:null,y.W),G.K){F_(y.h,G);var ye=G,lt=y.L;lt&&(ye.I=lt),ye.B&&(Wh(ye),bu(ye)),y.g=G}else iv(y);0<m.i.length&&Fu(m)}else he[0]!="stop"&&he[0]!="close"||Ri(m,7);else m.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Ri(m,7):Yh(m):he[0]!="noop"&&m.l&&m.l.ta(he),m.v=0)}}la(4)}catch{}}var vk=class{constructor(u,d){this.g=u,this.map=d}};function O_(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function L_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function M_(u){return u.h?1:u.g?u.g.size:0}function Kh(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Hh(u,d){u.g?u.g.add(d):u.h=d}function F_(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}O_.prototype.cancel=function(){if(this.i=j_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function j_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return k(u.i)}function wk(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,y=0;y<m;y++)d.push(u[y]);return d}d=[],m=0;for(y in u)d[m++]=u[y];return d}function Ik(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const y in u)d[m++]=y;return d}}}function U_(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=Ik(u),y=wk(u),N=y.length,M=0;M<N;M++)d.call(void 0,y[M],m&&m[M],u)}var B_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ek(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var y=u[m].indexOf("="),N=null;if(0<=y){var M=u[m].substring(0,y);N=u[m].substring(y+1)}else M=u[m];d(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Pi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Pi){this.h=u.h,Nu(this,u.j),this.o=u.o,this.g=u.g,Du(this,u.s),this.l=u.l;var d=u.i,m=new pa;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),z_(this,m),this.m=u.m}else u&&(d=String(u).match(B_))?(this.h=!1,Nu(this,d[1]||"",!0),this.o=ha(d[2]||""),this.g=ha(d[3]||"",!0),Du(this,d[4]),this.l=ha(d[5]||"",!0),z_(this,d[6]||"",!0),this.m=ha(d[7]||"")):(this.h=!1,this.i=new pa(null,this.h))}Pi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(fa(d,$_,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(fa(d,$_,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(fa(m,m.charAt(0)=="/"?Ak:Sk,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",fa(m,Rk)),u.join("")};function Hn(u){return new Pi(u)}function Nu(u,d,m){u.j=m?ha(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Du(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function z_(u,d,m){d instanceof pa?(u.i=d,kk(u.i,u.h)):(m||(d=fa(d,Pk)),u.i=new pa(d,u.h))}function we(u,d,m){u.i.set(d,m)}function Vu(u){return we(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ha(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function fa(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,Tk),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Tk(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var $_=/[#\/\?@]/g,Sk=/[#\?:]/g,Ak=/[#\?]/g,Pk=/[#\?@]/g,Rk=/#/g;function pa(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Ar(u){u.g||(u.g=new Map,u.h=0,u.i&&Ek(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=pa.prototype,t.add=function(u,d){Ar(this),this.i=null,u=ks(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function q_(u,d){Ar(u),d=ks(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function W_(u,d){return Ar(u),d=ks(u,d),u.g.has(d)}t.forEach=function(u,d){Ar(this),this.g.forEach(function(m,y){m.forEach(function(N){u.call(d,N,y,this)},this)},this)},t.na=function(){Ar(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const N=u[y];for(let M=0;M<N.length;M++)m.push(d[y])}return m},t.V=function(u){Ar(this);let d=[];if(typeof u=="string")W_(this,u)&&(d=d.concat(this.g.get(ks(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return Ar(this),this.i=null,u=ks(this,u),W_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function G_(u,d,m){q_(u,d),0<m.length&&(u.i=null,u.g.set(ks(u,d),k(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const M=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var N=M;G[y]!==""&&(N+="="+encodeURIComponent(String(G[y]))),u.push(N)}}return this.i=u.join("&")};function ks(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function kk(u,d){d&&!u.j&&(Ar(u),u.i=null,u.g.forEach(function(m,y){var N=y.toLowerCase();y!=N&&(q_(this,y),G_(this,N,m))},u)),u.j=d}function xk(u,d){const m=new ca;if(a.Image){const y=new Image;y.onload=v(Pr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=v(Pr,m,"TestLoadImage: error",!1,d,y),y.onabort=v(Pr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=v(Pr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else d(!1)}function Ck(u,d){const m=new ca,y=new AbortController,N=setTimeout(()=>{y.abort(),Pr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:y.signal}).then(M=>{clearTimeout(N),M.ok?Pr(m,"TestPingServer: ok",!0,d):Pr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),Pr(m,"TestPingServer: error",!1,d)})}function Pr(u,d,m,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(m)}catch{}}function bk(){this.g=new fk}function Nk(u,d,m){const y=m||"";try{U_(u,function(N,M){let G=N;c(N)&&(G=Fh(N)),d.push(y+M+"="+encodeURIComponent(G))})}catch(N){throw d.push(y+"type="+encodeURIComponent("_badmap")),N}}function ma(u){this.l=u.Ub||null,this.j=u.eb||!1}S(ma,jh),ma.prototype.g=function(){return new Ou(this.l,this.j)},ma.prototype.i=function(u){return function(){return u}}({});function Ou(u,d){mt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ou,mt),t=Ou.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,ya(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ga(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;K_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function K_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?ga(this):ya(this),this.readyState==3&&K_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,ga(this))},t.Qa=function(u){this.g&&(this.response=u,ga(this))},t.ga=function(){this.g&&ga(this)};function ga(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ya(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function ya(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ou.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function H_(u){let d="";return F(u,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function Qh(u,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=H_(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):we(u,d,m))}function Ve(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ve,mt);var Dk=/^https?$/i,Vk=["POST","PUT"];t=Ve.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zh.g(),this.v=this.o?T_(this.o):T_(zh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(M){Q_(this,M);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)m.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Vk,d,void 0))||y||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of m)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{X_(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){Q_(this,M)}};function Q_(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Y_(u),Lu(u)}function Y_(u){u.A||(u.A=!0,Tt(u,"complete"),Tt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Tt(this,"complete"),Tt(this,"abort"),Lu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lu(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?J_(this):this.bb())},t.bb=function(){J_(this)};function J_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Qn(u)!=4||u.Z()!=2)){if(u.u&&Qn(u)==4)v_(u.Ea,0,u);else if(Tt(u,"readystatechange"),Qn(u)==4){u.h=!1;try{const G=u.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=G===0){var N=String(u.D).match(B_)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!Dk.test(N?N.toLowerCase():"")}m=y}if(m)Tt(u,"complete"),Tt(u,"success");else{u.m=6;try{var M=2<Qn(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",Y_(u)}}finally{Lu(u)}}}}function Lu(u,d){if(u.g){X_(u);const m=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||Tt(u,"ready");try{m.onreadystatechange=y}catch{}}}function X_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Qn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),hk(d)}};function Z_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ok(u){const d={};u=(u.g&&2<=Qn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(w(u[y]))continue;var m=x(u[y]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[N]||[];d[N]=M,M.push(m)}I(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _a(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function ev(u){this.Aa=0,this.i=[],this.j=new ca,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_a("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_a("baseRetryDelayMs",5e3,u),this.cb=_a("retryDelaySeedMs",1e4,u),this.Wa=_a("forwardChannelMaxRetries",2,u),this.wa=_a("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new O_(u&&u.concurrentRequestLimit),this.Da=new bk,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ev.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,y){St(0),this.W=u,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=uv(this,null,this.W),Fu(this)};function Yh(u){if(tv(u),u.G==3){var d=u.U++,m=Hn(u.I);if(we(m,"SID",u.K),we(m,"RID",d),we(m,"TYPE","terminate"),va(u,m),d=new Sr(u,u.j,d),d.L=2,d.v=Vu(Hn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=cv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),bu(d)}lv(u)}function Mu(u){u.g&&(Xh(u),u.g.cancel(),u.g=null)}function tv(u){Mu(u),u.u&&(a.clearTimeout(u.u),u.u=null),ju(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Fu(u){if(!L_(u.h)&&!u.s){u.s=!0;var d=u.Ga;B||X(),U||(B(),U=!0),Q.add(d,u),u.B=0}}function Lk(u,d){return M_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ua(g(u.Ga,u,d),av(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new Sr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=_(M),P(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=rv(this,N,d),m=Hn(this.I),we(m,"RID",u),we(m,"CVER",22),this.D&&we(m,"X-HTTP-Session-Id",this.D),va(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(H_(M)))+"&"+d:this.m&&Qh(m,this.m,M)),Hh(this.h,N),this.Ua&&we(m,"TYPE","init"),this.P?(we(m,"$req",d),we(m,"SID","null"),N.T=!0,qh(N,m,null)):qh(N,m,d),this.G=2}}else this.G==3&&(u?nv(this,u):this.i.length==0||L_(this.h)||nv(this))};function nv(u,d){var m;d?m=d.l:m=u.U++;const y=Hn(u.I);we(y,"SID",u.K),we(y,"RID",m),we(y,"AID",u.T),va(u,y),u.m&&u.o&&Qh(y,u.m,u.o),m=new Sr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=rv(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Hh(u.h,m),qh(m,y,d)}function va(u,d){u.H&&F(u.H,function(m,y){we(d,y,m)}),u.l&&U_({},function(m,y){we(d,y,m)})}function rv(u,d,m){m=Math.min(u.i.length,m);var y=u.l?g(u.l.Na,u.l,u):null;e:{var N=u.i;let M=-1;for(;;){const G=["count="+m];M==-1?0<m?(M=N[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let ye=!0;for(let lt=0;lt<m;lt++){let he=N[lt].g;const gt=N[lt].map;if(he-=M,0>he)M=Math.max(0,N[lt].g-100),ye=!1;else try{Nk(gt,G,"req"+he+"_")}catch{y&&y(gt)}}if(ye){y=G.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,y}function iv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;B||X(),U||(B(),U=!0),Q.add(d,u),u.v=0}}function Jh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ua(g(u.Fa,u),av(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,sv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ua(g(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Mu(this),sv(this))};function Xh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function sv(u){u.g=new Sr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Hn(u.qa);we(d,"RID","rpc"),we(d,"SID",u.K),we(d,"AID",u.T),we(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&we(d,"TO",u.ja),we(d,"TYPE","xmlhttp"),va(u,d),u.m&&u.o&&Qh(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Vu(Hn(d)),m.m=null,m.P=!0,N_(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Mu(this),Jh(this),St(19))};function ju(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function ov(u,d){var m=null;if(u.g==d){ju(u),Xh(u),u.g=null;var y=2}else if(Kh(u.h,d))m=d.D,F_(u.h,d),y=1;else return;if(u.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=u.B;y=ku(),Tt(y,new k_(y,m)),Fu(u)}else iv(u);else if(N=d.s,N==3||N==0&&0<d.X||!(y==1&&Lk(u,d)||y==2&&Jh(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),N){case 1:Ri(u,5);break;case 4:Ri(u,10);break;case 3:Ri(u,6);break;default:Ri(u,2)}}}function av(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function Ri(u,d){if(u.j.info("Error code "+d),d==2){var m=g(u.fb,u),y=u.Xa;const N=!y;y=new Pi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nu(y,"https"),Vu(y),N?xk(y.toString(),m):Ck(y.toString(),m)}else St(2);u.G=0,u.l&&u.l.sa(d),lv(u),tv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function lv(u){if(u.G=0,u.ka=[],u.l){const d=j_(u.h);(d.length!=0||u.i.length!=0)&&(C(u.ka,d),C(u.ka,u.i),u.h.i.length=0,k(u.i),u.i.length=0),u.l.ra()}}function uv(u,d,m){var y=m instanceof Pi?Hn(m):new Pi(m);if(y.g!="")d&&(y.g=d+"."+y.g),Du(y,y.s);else{var N=a.location;y=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var M=new Pi(null);y&&Nu(M,y),d&&(M.g=d),N&&Du(M,N),m&&(M.l=m),y=M}return m=u.D,d=u.ya,m&&d&&we(y,m,d),we(y,"VER",u.la),va(u,y),y}function cv(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ve(new ma({eb:m})):new Ve(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dv(){}t=dv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Uu(){}Uu.prototype.g=function(u,d){return new Ht(u,d)};function Ht(u,d){mt.call(this),this.g=new ev(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!w(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new xs(this)}S(Ht,mt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Yh(this.g)},Ht.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Fh(u),u=m);d.i.push(new vk(d.Ya++,u)),d.G==3&&Fu(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Yh(this.g),delete this.g,Ht.aa.N.call(this)};function hv(u){Uh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}S(hv,Uh);function fv(){Bh.call(this),this.status=1}S(fv,Bh);function xs(u){this.g=u}S(xs,dv),xs.prototype.ua=function(){Tt(this.g,"a")},xs.prototype.ta=function(u){Tt(this.g,new hv(u))},xs.prototype.sa=function(u){Tt(this.g,new fv)},xs.prototype.ra=function(){Tt(this.g,"b")},Uu.prototype.createWebChannel=Uu.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,PS=function(){return new Uu},AS=function(){return ku()},SS=Si,Gp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xu.NO_ERROR=0,xu.TIMEOUT=8,xu.HTTP_ERROR=6,Pc=xu,x_.COMPLETE="complete",TS=x_,S_.EventType=aa,aa.OPEN="a",aa.CLOSE="b",aa.ERROR="c",aa.MESSAGE="d",mt.prototype.listen=mt.prototype.K,za=S_,ES=ma,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,IS=Ve}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});const qw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Qd("@firebase/firestore");function Fs(){return si.logLevel}function eD(t){si.setLogLevel(t)}function $(t,...e){if(si.logLevel<=ie.DEBUG){const n=e.map(jg);si.debug(`Firestore (${Wo}): ${t}`,...n)}}function $e(t,...e){if(si.logLevel<=ie.ERROR){const n=e.map(jg);si.error(`Firestore (${Wo}): ${t}`,...n)}}function Sn(t,...e){if(si.logLevel<=ie.WARN){const n=e.map(jg);si.warn(`Firestore (${Wo}): ${t}`,...n)}}function jg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function Z(t,e){t||Y()}function tD(t,e){t||Y()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class rD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iD{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new RS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new tt(e)}}class sD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new aD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function xS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ke(0,0))}static max(){return new ee(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Ol{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const cD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ol{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return cD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(oe.fromString(e))}static fromName(e){return new K(oe.fromString(e).popFirst(5))}static empty(){return new K(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new oe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Kp(t){return t.fields.find(e=>e.kind===2)}function Di(t){return t.fields.filter(e=>e.kind!==2)}fd.UNKNOWN_ID=-1;class Rc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ll{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ll(0,tn.min())}}function CS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new tn(i,K.empty(),e)}function bS(t){return new tn(t.readTime,t.key,-1)}class tn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tn(ee.min(),K.empty(),-1)}static max(){return new tn(ee.max(),K.empty(),-1)}}function Ug(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==NS)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new nl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Bg(r.target.error);this.V.reject(new nl(e,i))}}static open(e,n,r,i){try{return new Yd(n,e.transaction(i,r))}catch(s){throw new nl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new hD(n)}}class jn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,jn.S(xe())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),Vi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!bl())return!1;if(jn.C())return!0;const e=xe(),n=jn.S(e),r=0<n&&n<10,i=VS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new nl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new nl(e,o))},i.onupgradeneeded=s=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Yd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),V.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function VS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class dD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Vi(this.B.delete())}}class nl extends z{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function wi(t){return t.name==="IndexedDbTransactionError"}class hD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?($("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Vi(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),Vi(this.store.add(e))}get(e){return Vi(this.store.get(e)).next(n=>(n===void 0&&(n=null),$("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),Vi(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),Vi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new V((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new V((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new V((r,i)=>{n.onerror=s=>{const o=Bg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new V((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new dD(a),c=n(a.primaryKey,a.value,l);if(c instanceof V){const h=c.catch(p=>(l.done(),V.reject(p)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>V.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Vi(t){return new V((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Bg(r.target.error);n(i)}})}let Ww=!1;function Bg(t){const e=jn.S(xe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ww||(Ww=!0,setTimeout(()=>{throw r},0)),r}}return t}class fD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){$("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{$("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){wi(n)?$("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await vi(n)}await this.X(6e4)})}}class pD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return V.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>($("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=bS(s);Ug(o,r)>0&&(r=o)}),new tn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ut.oe=-1;function iu(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function OS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Gw(e)),e=mD(t.get(n),e);return Gw(e)}function mD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Gw(t){return t+""}function Vn(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),oe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Y(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Y()}s=o+2}return new oe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e){return[t,Ct(e)]}function LS(t,e,n){return[t,Ct(e),n]}const gD={},yD=["prefixPath","collectionGroup","readTime","documentId"],_D=["prefixPath","collectionGroup","documentId"],vD=["collectionGroup","readTime","prefixPath","documentId"],wD=["canonicalId","targetId"],ID=["targetId","path"],ED=["path","targetId"],TD=["collectionId","parent"],SD=["indexId","uid"],AD=["uid","sequenceNumber"],PD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],RD=["indexId","uid","orderedDocumentKey"],kD=["userId","collectionPath","documentId"],xD=["userId","collectionPath","largestBatchId"],CD=["userId","collectionGroup","largestBatchId"],MS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bD=[...MS,"documentOverlays"],FS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],jS=FS,US=[...jS,"indexConfiguration","indexState","indexEntries"],ND=US;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends DS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function st(t,e){const n=H(t);return jn.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oc(this.root,e,this.comparator,!0)}}class oc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qw(this.data.getIterator())}getIteratorFrom(e){return new Qw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class Qw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ns(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new ge(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zS("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const VD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Z(!!t),typeof t=="string"){let e=0;const n=VD.exec(t);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zg(t){const e=t.mapValue.fields.__previous_value__;return Jd(e)?zg(e):e}function Fl(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},xc={nullValue:"NULL_VALUE"};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jd(t)?4:$S(t)?9007199254740991:10:Y()}function zn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fl(t).isEqual(Fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),a=hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Ml(o)===Ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ao(t.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Hw(o)!==Hw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!zn(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function jl(t,e){return(t.values||[]).find(n=>zn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Yw(t.timestampValue,e.timestampValue);case 4:return Yw(Fl(t),Fl(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=oi(s),l=oi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ne(a[c],l[c]);if(h!==0)return h}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Le(s.latitude),Le(o.latitude));return a!==0?a:ne(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=li(a[c],l[c]);if(h)return h}return ne(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Br.mapValue&&o===Br.mapValue)return 0;if(s===Br.mapValue)return 1;if(o===Br.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=ne(l[p],h[p]);if(g!==0)return g;const v=li(a[l[p]],c[h[p]]);if(v!==0)return v}return ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Yw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=hr(t),r=hr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Po(t){return Qp(t)}function Qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Qp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Qp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function is(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yp(t){return!!t&&"integerValue"in t}function Ul(t){return!!t&&"arrayValue"in t}function Jw(t){return!!t&&"nullValue"in t}function Xw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cc(t){return!!t&&"mapValue"in t}function rl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=rl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function LD(t){return"nullValue"in t?xc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?is(ai.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Y()}function MD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?is(ai.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Br:Y()}function Zw(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function eI(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rl(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=rl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Cc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(rl(this.value))}}function qS(t){const e=[];return ws(t.fields,(n,r)=>{const i=new Pe([n]);if(Cc(r)){const s=qS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,ee.min(),ee.min(),ee.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,ee.min(),ee.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,ee.min(),ee.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.position=e,this.inclusive=n}}function tI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function FD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{}class ae extends WS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jD(e,n,r):n==="array-contains"?new zD(e,r):n==="in"?new JS(e,r):n==="not-in"?new $D(e,r):n==="array-contains-any"?new qD(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UD(e,r):new BD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends WS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pe(e,n)}matches(e){return Ro(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ro(t){return t.op==="and"}function Jp(t){return t.op==="or"}function $g(t){return GS(t)&&Ro(t)}function GS(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function Xp(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+Po(t.value);if($g(t))return t.filters.map(e=>Xp(e)).join(",");{const e=t.filters.map(n=>Xp(n)).join(",");return`${t.op}(${e})`}}function KS(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&zn(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&KS(o,i.filters[a]),!0):!1}(t,e):void Y()}function HS(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function QS(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${Po(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(QS).join(" ,")+"}"}(t):"Filter"}class jD extends ae{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class UD extends ae{constructor(e,n){super(e,"in",n),this.keys=YS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BD extends ae{constructor(e,n){super(e,"not-in",n),this.keys=YS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class zD extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ul(n)&&jl(n.arrayValue,this.value)}}class JS extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jl(this.value.arrayValue,n)}}class $D extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jl(this.value.arrayValue,n)}}class qD extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ul(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Zp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WD(t,e,n,r,i,s,o)}function ss(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Po(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Po(r)).join(",")),e.ue=n}return e.ue}function su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nI(t.startAt,e.startAt)&&nI(t.endAt,e.endAt)}function pd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function md(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function rI(t,e,n){let r=xc,i=!0;for(const s of md(t,e)){let o=xc,a=!0;switch(s.op){case"<":case"<=":o=LD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=xc}Zw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Zw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function iI(t,e,n){let r=Br,i=!0;for(const s of md(t,e)){let o=Br,a=!0;switch(s.op){case">=":case">":o=MD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Br}eI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];eI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XS(t,e,n,r,i,s,o,a){return new vr(t,e,n,r,i,s,o,a)}function Go(t){return new vr(t)}function sI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qg(t){return t.collectionGroup!==null}function lo(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ge(Pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Bl(s,r))}),n.has(Pe.keyField().canonicalString())||e.ce.push(new Bl(Pe.keyField(),r))}return e.ce}function bt(t){const e=H(t);return e.le||(e.le=GD(e,lo(t))),e.le}function GD(t,e){if(t.limitType==="F")return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bl(i.field,s)});const n=t.endAt?new ui(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ui(t.startAt.position,t.startAt.inclusive):null;return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function em(t,e){const n=t.filters.concat([e]);return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gd(t,e,n){return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ou(t,e){return su(bt(t),bt(e))&&t.limitType===e.limitType}function ZS(t){return`${ss(bt(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>QS(i)).join(", ")}]`),iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Po(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Po(i)).join(",")),`Target(${r})`}(bt(t))}; limitType=${t.limitType})`}function au(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=tI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,a,l){const c=tI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),i))}(t,e)}function eA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tA(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=KD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KD(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?li(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=new ve(K.comparator);function zt(){return HD}const nA=new ve(K.comparator);function $a(...t){let e=nA;for(const n of t)e=e.insert(n.key,n);return e}function rA(t){let e=nA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function On(){return il()}function iA(){return il()}function il(){return new Ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const QD=new ve(K.comparator),YD=new ge(K.comparator);function re(...t){let e=YD;for(const n of t)e=e.add(n);return e}const JD=new ge(ne);function Wg(){return JD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function oA(t){return{integerValue:""+t}}function aA(t,e){return OS(e)?oA(e):sA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this._=void 0}}function XD(t,e,n){return t instanceof ko?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jd(s)&&(s=zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof os?uA(t,e):t instanceof as?cA(t,e):function(i,s){const o=lA(i,s),a=oI(o)+oI(i.Pe);return Yp(o)&&Yp(i.Pe)?oA(a):sA(i.serializer,a)}(t,e)}function ZD(t,e,n){return t instanceof os?uA(t,e):t instanceof as?cA(t,e):n}function lA(t,e){return t instanceof xo?function(r){return Yp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ko extends Xd{}class os extends Xd{constructor(e){super(),this.elements=e}}function uA(t,e){const n=dA(e);for(const r of t.elements)n.some(i=>zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class as extends Xd{constructor(e){super(),this.elements=e}}function cA(t,e){let n=dA(e);for(const r of t.elements)n=n.filter(i=>!zn(i,r));return{arrayValue:{values:n}}}class xo extends Xd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function oI(t){return Le(t.integerValue||t.doubleValue)}function dA(t){return Ul(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.field=e,this.transform=n}}function eV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof os&&i instanceof os||r instanceof as&&i instanceof as?Ao(r.elements,i.elements,zn):r instanceof xo&&i instanceof xo?zn(r.Pe,i.Pe):r instanceof ko&&i instanceof ko}(t.transform,e.transform)}class tV{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zd{}function hA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ho(t.key,Re.none()):new Ko(t.key,t.data,Re.none());{const n=t.data,r=dt.empty();let i=new ge(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new Bt(i.toArray()),Re.none())}}function nV(t,e,n){t instanceof Ko?function(i,s,o){const a=i.value.clone(),l=lI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(i,s,o){if(!bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=lI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(fA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function sl(t,e,n,r){return t instanceof Ko?function(s,o,a,l){if(!bc(s.precondition,o))return a;const c=s.value.clone(),h=uI(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(s,o,a,l){if(!bc(s.precondition,o))return a;const c=uI(s.fieldTransforms,l,o),h=o.data;return h.setAll(fA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lA(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function aI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ao(r,i,(s,o)=>eV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends Zd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Zd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lI(t,e,n){const r=new Map;Z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZD(o,a,n[i]))}return r}function uI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XD(s,o,e))}return r}class Ho extends Zd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gg extends Zd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=sl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=sl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=hA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(n,r)=>aI(n,r))&&Ao(this.baseMutations,e.baseMutations,(n,r)=>aI(n,r))}}class Hg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length);let i=function(){return QD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Hg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,ue;function pA(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function mA(t){if(t===void 0)return $e("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ge.OK:return L.OK;case Ge.CANCELLED:return L.CANCELLED;case Ge.UNKNOWN:return L.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return L.INTERNAL;case Ge.UNAVAILABLE:return L.UNAVAILABLE;case Ge.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ge.NOT_FOUND:return L.NOT_FOUND;case Ge.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ge.ABORTED:return L.ABORTED;case Ge.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ge.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(ue=Ge||(Ge={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV=new Hi([4294967295,4294967295],0);function cI(t){const e=gA().encode(t),n=new wS;return n.update(e),new Uint8Array(n.digest())}function dI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hi([n,r],0),new Hi([i,s],0)]}class Yg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qa(`Invalid padding: ${n}`);if(r<0)throw new qa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hi.fromNumber(r)));return i.compare(sV)===1&&(i=new Hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=cI(e),[r,i]=dI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Yg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=cI(e),[r,i]=dI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,cu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uu(ee.min(),i,new ve(ne),zt(),re())}}class cu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cu(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class yA{constructor(e,n){this.targetId=e,this.me=n}}class _A{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hI{constructor(){this.fe=0,this.ge=pI(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new cu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=pI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oV{constructor(e){this.Le=e,this.Be=new Map,this.ke=zt(),this.qe=fI(),this.Qe=new ve(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(pd(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ee.newNoDocument(o,ee.min()))}else Z(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=oi(r).toUint8Array()}catch(l){if(l instanceof zS)return Sn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Yg(o,i,s)}catch(l){return Sn(l instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&pd(a.target)){const l=new K(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ee.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new uu(e,n,this.Qe,this.ke,r);return this.ke=zt(),this.qe=fI(),this.Qe=new ve(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new hI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ge(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function fI(){return new ve(K.comparator)}function pI(){return new ve(K.comparator)}const aV={asc:"ASCENDING",desc:"DESCENDING"},lV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uV={and:"AND",or:"OR"};class cV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tm(t,e){return t.useProto3Json||iu(e)?e:{value:e}}function Co(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dV(t,e){return Co(t,e.toTimestamp())}function We(t){return Z(!!t),ee.fromTimestamp(function(n){const r=hr(n);return new ke(r.seconds,r.nanos)}(t))}function Jg(t,e){return nm(t,e).canonicalString()}function nm(t,e){const n=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wA(t){const e=oe.fromString(t);return Z(CA(e)),e}function zl(t,e){return Jg(t.databaseId,e.path)}function Un(t,e){const n=wA(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(TA(n))}function IA(t,e){return Jg(t.databaseId,e)}function EA(t){const e=wA(t);return e.length===4?oe.emptyPath():TA(e)}function rm(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TA(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mI(t,e,n){return{name:zl(t,e),fields:n.value.mapValue.fields}}function SA(t,e,n){const r=Un(t,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):ee.min(),o=new dt({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function hV(t,e){return"found"in e?function(r,i){Z(!!i.found),i.found.name,i.found.updateTime;const s=Un(r,i.found.name),o=We(i.found.updateTime),a=i.found.createTime?We(i.found.createTime):ee.min(),l=new dt({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){Z(!!i.missing),Z(!!i.readTime);const s=Un(r,i.missing),o=We(i.readTime);return Ee.newNoDocument(s,o)}(t,e):Y()}function fV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Z(h===void 0||typeof h=="string"),Xe.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xe.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?L.UNKNOWN:mA(c.code);return new z(h,c.message||"")}(o);n=new _A(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Un(t,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):ee.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Nc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Un(t,r.document),s=r.readTime?We(r.readTime):ee.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Un(t,r.document),s=r.removedTargetIds||[];n=new Nc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new iV(i,s),a=r.targetId;n=new yA(a,o)}}return n}function $l(t,e){let n;if(e instanceof Ko)n={update:mI(t,e.key,e.value)};else if(e instanceof Ho)n={delete:zl(t,e.key)};else if(e instanceof wr)n={update:mI(t,e.key,e.data),updateMask:vV(e.fieldMask)};else{if(!(e instanceof Gg))return Y();n={verify:zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof as)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function im(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Re.updateTime(We(s.updateTime)):s.exists!==void 0?Re.exists(s.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Z(a.setToServerValue==="REQUEST_TIME"),l=new ko;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new os(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new as(h)}else"increment"in a?l=new xo(o,a.increment):Y();const c=Pe.fromServerFormat(a.fieldPath);return new lu(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Un(t,e.update.name),s=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Bt(c.map(h=>Pe.fromServerFormat(h)))}(e.updateMask);return new wr(i,s,o,n,r)}return new Ko(i,s,n,r)}if(e.delete){const i=Un(t,e.delete);return new Ho(i,n)}if(e.verify){const i=Un(t,e.verify);return new Gg(i,n)}return Y()}function pV(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?We(i.updateTime):We(s);return o.isEqual(ee.min())&&(o=We(s)),new tV(o,i.transformResults||[])}(n,e))):[]}function AA(t,e){return{documents:[IA(t,e.path)]}}function PA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=IA(t,i);const s=function(c){if(c.length!==0)return xA(pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:Us(g.field),direction:gV(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=tm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function RA(t){let e=EA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=kA(p);return g instanceof pe&&$g(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Bl(Bs(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,iu(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new ui(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,v=p.values||[];return new ui(v,g)}(n.endAt)),XS(e,i,o,s,a,"F",l,c)}function mV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bs(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bs(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(Bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>kA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function gV(t){return aV[t]}function yV(t){return lV[t]}function _V(t){return uV[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Pe.fromServerFormat(t.fieldPath)}function xA(t){return t instanceof ae?function(n){if(n.op==="=="){if(Xw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(Jw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(Jw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:yV(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>xA(i));return r.length===1?r[0]:{compositeFilter:{op:_V(n.op),filters:r}}}(t):Y()}function vV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.ct=e}}function wV(t,e){let n;if(e.document)n=SA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=us(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=K.fromSegments(e.unknownDocument.path),i=us(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return ee.fromTimestamp(s)}(e.readTime)),n}function gI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:yd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:zl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Co(s,o.version.toTimestamp()),createTime:Co(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ls(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:n.path.toArray(),version:ls(e.version)}}return r}function yd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ls(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function us(t){const e=new ke(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Oi(t,e){const n=(e.baseMutations||[]).map(s=>im(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>im(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new Kg(e.batchId,i,n,r)}function Wa(t){const e=us(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?us(t.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Z(s.documents.length===1),bt(Go(EA(s.documents[0])))}(t.query):function(s){return bt(RA(s))}(t.query),new nr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function NA(t,e){const n=ls(e.snapshotVersion),r=ls(e.lastLimboFreeSnapshotVersion);let i;i=pd(e.target)?AA(t.ct,e.target):PA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ss(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Xg(t){const e=RA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gd(e,e.limit,"L"):e}function Df(t,e){return new Qg(e.largestBatchId,im(t.ct,e.overlayMutation))}function yI(t,e){const n=e.path.lastSegment();return[t,Ct(e.path.popLast()),n]}function _I(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ls(r.readTime),documentKey:Ct(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{getBundleMetadata(e,n){return vI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:us(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return vI(e).put(function(i){return{bundleId:i.id,createTime:ls(We(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return wI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Xg(s.bundledQuery),readTime:us(s.readTime)}}(r)})}saveNamedQuery(e,n){return wI(e).put(function(i){return{name:i.name,readTime:ls(We(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function vI(t){return st(t,"bundles")}function wI(t){return st(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new eh(e,r)}getOverlay(e,n){return ka(e).get(yI(this.userId,n)).next(r=>r?Df(this.serializer,r):null)}getOverlays(e,n){const r=On();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Qg(n,o);i.push(this.ht(e,a))}),V.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ct(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ka(e).j("collectionPathOverlayIndex",a))}),V.waitFor(s)}getOverlaysForCollection(e,n,r){const i=On(),s=Ct(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ka(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Df(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=On();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ka(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const p=Df(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return ka(e).put(function(i,s,o){const[a,l,c]=yI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:$l(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ka(t){return st(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Ml(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=hr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(oi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?$S(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Y()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),K.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Li.bt=new Li;function EV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function II(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=EV(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class TV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=II(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=II(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class SV{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class AV{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class xa{constructor(){this.Gt=new TV,this.zt=new SV(this.Gt),this.jt=new AV(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Mi(this.indexId,this.documentKey,this.arrayValue,r)}}function kr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=EI(t.arrayValue,e.arrayValue),n!==0?n:(n=EI(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function EI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.Yt=new ge((n,r)=>Pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(Z(e.collectionGroup===this.collectionId),this.en)return!1;const n=Kp(e);if(n!==void 0&&!this.nn(n))return!1;const r=Di(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ge(Pe.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Rc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Rc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Rc(r.field,r.dir==="asc"?0:1)));return new fd(fd.UNKNOWN_ID,this.collectionId,n,Ll.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){var e,n;if(Z(t instanceof ae||t instanceof pe),t instanceof ae){if(t instanceof JS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>DA(i));return pe.create(r,t.op)}function PV(t){if(t.getFilters().length===0)return[];const e=am(DA(t));return Z(VA(e)),sm(e)||om(e)?[e]:e.getFilters()}function sm(t){return t instanceof ae}function om(t){return t instanceof pe&&$g(t)}function VA(t){return sm(t)||om(t)||function(n){if(n instanceof pe&&Jp(n)){for(const r of n.getFilters())if(!sm(r)&&!om(r))return!1;return!0}return!1}(t)}function am(t){if(Z(t instanceof ae||t instanceof pe),t instanceof ae)return t;if(t.filters.length===1)return am(t.filters[0]);const e=t.filters.map(r=>am(r));let n=pe.create(e,t.op);return n=_d(n),VA(n)?n:(Z(n instanceof pe),Z(Ro(n)),Z(n.filters.length>1),n.filters.reduce((r,i)=>Zg(r,i)))}function Zg(t,e){let n;return Z(t instanceof ae||t instanceof pe),Z(e instanceof ae||e instanceof pe),n=t instanceof ae?e instanceof ae?function(i,s){return pe.create([i,s],"and")}(t,e):SI(t,e):e instanceof ae?SI(e,t):function(i,s){if(Z(i.filters.length>0&&s.filters.length>0),Ro(i)&&Ro(s))return HS(i,s.getFilters());const o=Jp(i)?i:s,a=Jp(i)?s:i,l=o.filters.map(c=>Zg(c,a));return pe.create(l,"or")}(t,e),_d(n)}function SI(t,e){if(Ro(e))return HS(e,t.getFilters());{const n=e.filters.map(r=>Zg(t,r));return pe.create(n,"or")}}function _d(t){if(Z(t instanceof ae||t instanceof pe),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return _d(e[0]);if(GS(t))return t;const n=e.map(i=>_d(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(){this._n=new ey}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(tn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class ey{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Uint8Array(0);class kV{constructor(e,n){this.databaseId=n,this.an=new ey,this.un=new Ii(r=>ss(r),(r,i)=>su(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Ct(i)};return AI(e).put(s)}return V.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[xS(n),""],!1,!0);return AI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Vn(o.parent))}return r})}addFieldIndex(e,n){const r=Ca(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Vs(e);return s.next(a=>{o.put(_I(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ca(e),i=Vs(e),s=Ds(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ca(e),r=Ds(e),i=Vs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return V.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new TI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ds(e);let i=!0;const s=new Map;return V.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=re();const a=[];return V.forEach(s,(l,c)=>{$("IndexedDbIndexManager",`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(l)} to execute ${ss(n)}`);const h=function(T,O){const j=Kp(O);if(j===void 0)return null;for(const F of md(T,j.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),p=function(T,O){const j=new Map;for(const F of Di(O))for(const I of md(T,F.fieldPath))switch(I.op){case"==":case"in":j.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return j.set(F.fieldPath.canonicalString(),I.value),Array.from(j.values())}return null}(c,l),g=function(T,O){const j=[];let F=!0;for(const I of Di(O)){const _=I.kind===0?rI(T,I.fieldPath,T.startAt):iI(T,I.fieldPath,T.startAt);j.push(_.value),F&&(F=_.inclusive)}return new ui(j,F)}(c,l),v=function(T,O){const j=[];let F=!0;for(const I of Di(O)){const _=I.kind===0?iI(T,I.fieldPath,T.endAt):rI(T,I.fieldPath,T.endAt);j.push(_.value),F&&(F=_.inclusive)}return new ui(j,F)}(c,l),S=this.hn(l,c,g),k=this.hn(l,c,v),C=this.Pn(l,c,p),E=this.In(l.indexId,h,S,g.inclusive,k,v.inclusive,C);return V.forEach(E,w=>r.G(w,n.limit).next(T=>{T.forEach(O=>{const j=K.fromSegments(O.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return V.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=PV(pe.create(e.filters,"and")).map(r=>Zp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let p=0;p<l;++p){const g=n?this.Tn(n[p/c]):ac,v=this.En(e,g,r[p%c],i),S=this.dn(e,g,s[p%c],o),k=a.map(C=>this.En(e,g,C,!0));h.push(...this.createRange(v,S,k))}return h}En(e,n,r,i){const s=new Mi(e,K.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Mi(e,K.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new TI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return V.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ge(Pe.comparator),h=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:c=c.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new xa;for(const i of Di(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Li.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new xa;return Li.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new xa;return Li.bt.Pt(is(this.databaseId,n),r.Ht(function(s){const o=Di(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new xa);let s=0;for(const o of Di(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Ul(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);Li.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new xa;l.seed(a.Wt()),Li.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ca(e),i=Vs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return V.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,p){const g=p?new Ll(p.sequenceNumber,new tn(us(p.readTime),new K(Vn(p.documentKey)),p.largestBatchId)):Ll.empty(),v=h.fields.map(([S,k])=>new Rc(Pe.fromServerFormat(S),k));return new fd(h.indexId,h.collectionGroup,v,g)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ca(e),s=Vs(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>V.forEach(a,l=>s.put(_I(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return V.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),V.forEach(a,l=>this.pn(e,i,l).next(c=>{const h=this.yn(s,l);return c.isEqual(h)?V.resolve():this.wn(e,s,l,c,h)}))))})}Sn(e,n,r,i){return Ds(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Ds(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Ds(e);let s=new ge(kr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Mi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ge(kr);const i=this.An(n,e);if(i==null)return r;const s=Kp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ul(o))for(const a of o.arrayValue.values||[])r=r.add(new Mi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Mi(n.indexId,e.key,ac,i));return r}wn(e,n,r,i,s){$("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,p,g){const v=l.getIterator(),S=c.getIterator();let k=Ns(v),C=Ns(S);for(;k||C;){let E=!1,w=!1;if(k&&C){const T=h(k,C);T<0?w=!0:T>0&&(E=!0)}else k!=null?w=!0:E=!0;E?(p(C),C=Ns(S)):w?(g(k),k=Ns(v)):(k=Ns(v),C=Ns(S))}}(i,s,kr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),V.waitFor(o)}gn(e){let n=1;return Vs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>kr(o,a)).filter((o,a,l)=>!a||kr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=kr(o,e),l=kr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ac,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ac,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return kr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(PI)}getMinOffset(e,n){return V.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Y())).next(PI)}}function AI(t){return st(t,"collectionParents")}function Ds(t){return st(t,"indexEntries")}function Ca(t){return st(t,"indexConfiguration")}function Vs(t){return st(t,"indexState")}function PI(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Ug(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new tn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,p,g)=>(a++,g.delete()));s.push(l.next(()=>{Z(a===1)}));const c=[];for(const h of n.mutations){const p=LS(e,h.key.path,n.batchId);s.push(i.delete(p)),c.push(h.key)}return V.waitFor(s).next(()=>c)}function vd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);class th{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){Z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new th(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=zs(e),o=xr(e);return o.add({}).next(a=>{Z(typeof a=="number");const l=new Kg(a,n,r,i),c=function(v,S,k){const C=k.baseMutations.map(w=>$l(v.ct,w)),E=k.mutations.map(w=>$l(v.ct,w));return{userId:S,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:C,mutations:E}}(this.serializer,this.userId,l),h=[];let p=new ge((g,v)=>ne(g.canonicalString(),v.canonicalString()));for(const g of i){const v=LS(this.userId,g.key.path,a);p=p.add(g.key.path.popLast()),h.push(o.put(c)),h.push(s.put(v,gD))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),V.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return xr(e).get(n).next(r=>r?(Z(r.userId===this.userId),Oi(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?V.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return xr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Z(a.batchId>=r),s=Oi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return xr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Oi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=kc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return zs(e).J({range:i},(o,a,l)=>{const[c,h,p]=o,g=Vn(h);if(c===this.userId&&n.path.isEqual(g))return xr(e).get(p).next(v=>{if(!v)throw Y();Z(v.userId===this.userId),s.push(Oi(this.serializer,v))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ne);const i=[];return n.forEach(s=>{const o=kc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=zs(e).J({range:a},(c,h,p)=>{const[g,v,S]=c,k=Vn(v);g===this.userId&&s.path.isEqual(k)?r=r.add(S):p.done()});i.push(l)}),V.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=kc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ge(ne);return zs(e).J({range:o},(l,c,h)=>{const[p,g,v]=l,S=Vn(g);p===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(v)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(xr(e).get(s).next(o=>{if(o===null)throw Y();Z(o.userId===this.userId),r.push(Oi(this.serializer,o))}))}),V.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return OA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),V.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return zs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Vn(s[1]);i.push(l)}else a.done()}).next(()=>{Z(i.length===0)})})}containsKey(e,n){return LA(e,this.userId,n)}xn(e){return MA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function LA(t,e,n){const r=kc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return zs(t).J({range:s,H:!0},(a,l,c)=>{const[h,p,g]=a;h===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function xr(t){return st(t,"mutations")}function zs(t){return st(t,"documentMutations")}function MA(t){return st(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new cs(0)}static Ln(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new cs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ee.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Os(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Os(e).J((o,a)=>{const l=Wa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>V.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Os(e).J((r,i)=>{const s=Wa(i);n(s)})}Bn(e){return kI(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}kn(e,n){return kI(e).put("targetGlobalKey",n)}qn(e,n){return Os(e).put(NA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ss(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Os(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Wa(a);su(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Lr(e);return n.forEach(o=>{const a=Ct(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(i)}removeMatchingKeys(e,n,r){const i=Lr(e);return V.forEach(n,s=>{const o=Ct(s.path);return V.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Lr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Lr(e);let s=re();return i.J({range:r,H:!0},(o,a,l)=>{const c=Vn(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Ct(n.path),i=IDBKeyRange.bound([r],[xS(r)],!1,!0);let s=0;return Lr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Os(e).get(n).next(r=>r?Wa(r):null)}}function Os(t){return st(t,"targets")}function kI(t){return st(t,"targetGlobal")}function Lr(t){return st(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class CV{constructor(e){this.Kn=e,this.buffer=new ge(xI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vi(n)}await this.zn(3e5)})}}class NV{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Ut.oe);const r=new CV(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(RI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),RI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Fs()<=ie.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function DV(t,e){return new NV(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n){this.db=e,this.garbageCollector=DV(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return lc(e,r)}removeReference(e,n,r){return lc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return lc(e,n)}er(e,n){return function(i,s){let o=!1;return MA(i).Y(a=>LA(i,a,s).next(l=>(l&&(o=!0),V.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),Lr(e).delete(function(p){return[0,Ct(p.path)]}(o))))});i.push(l)}}).next(()=>V.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return lc(e,n)}Xn(e,n){const r=Lr(e);let i,s=Ut.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Ut.oe&&n(new K(Vn(i)),s),s=c,i=l):s=Ut.oe}).next(()=>{s!==Ut.oe&&n(new K(Vn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function lc(t,e){return Lr(t).put(function(r,i){return{targetId:0,path:Ct(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ki(e).put(r)}removeEntry(e,n,r){return ki(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],yd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return ki(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ba(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return ki(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ba(n))},(i,s)=>{r={document:this.nr(n,s),size:vd(s)}}).next(()=>r)}getEntries(e,n){let r=zt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=zt(),i=new ve(K.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,vd(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return V.resolve();let i=new ge(NI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ba(i.first()),ba(i.last())),o=i.getIterator();let a=o.getNext();return ki(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const p=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&NI(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(ba(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),yd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ki(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=zt();for(const p of c){const g=this.nr(K.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(au(n,g)||i.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=zt();const o=bI(n,r),a=bI(n,tn.max());return ki(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const p=this.nr(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new LV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return CI(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}tr(e,n){return CI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=wV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Ee.newInvalidDocument(e)}}function jA(t){return new OV(t)}class LV extends FA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ii(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ge((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=gI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=vd(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=gI(this.ar.serializer,o.convertToNoDocument(ee.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),V.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function CI(t){return st(t,"remoteDocumentGlobal")}function ki(t){return st(t,"remoteDocumentsV14")}function ba(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function bI(t,e){const n=e.documentKey.path.toArray();return[t,yd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function NI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&sl(r.mutation,i,Bt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=On();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$a();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=On();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zt();const o=il(),a=function(){return il()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof wr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),sl(h.mutation,c,h.mutation.getFieldMask(),ke.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new MV(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=il();let i=new ve((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Bt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const p=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,p=iA();h.forEach(g=>{if(!s.has(g)){const v=hA(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(On());let a=-1,l=s;return o.next(c=>V.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,re())).next(h=>({batchId:a,changes:rA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=$a();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$a();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,l=>{const c=function(p,g){return new vr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ee.newInvalidDocument(h)))});let a=$a();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&sl(h.mutation,c,Bt.empty(),ke.now()),au(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Xg(i.bundledQuery),readTime:We(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this.overlays=new ve(K.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=On();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=On(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=On(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=On(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qg(n,r));let s=this.hr.get(n);s===void 0&&(s=re(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.Pr=new ge(Ze.Ir),this.Tr=new ge(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new oe([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new oe([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=re();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||ne(e.pr,n.pr)}static Er(e,n){return ne(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ge(Ze.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Kg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ne);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new K(s),0);let a=new ge(ne);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),V.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(e){this.vr=e,this.docs=function(){return new ve(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zt();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ug(bS(h),r)<=0||(i.has(h.key)||au(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zV(this)}getSize(e){return V.resolve(this.size)}}class zV extends FA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{constructor(e){this.persistence=e,this.Mr=new Ii(n=>ss(n),su),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ty,this.targetCount=0,this.Lr=cs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ut(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new $V(this),this.indexManager=new RV,this.remoteDocumentCache=function(i){return new BV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bA(n),this.$r=new FV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new UV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new qV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class qV extends DS{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.zr=new ty,this.jr=null}static Hr(e){return new nh(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=K.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Yd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Kw,{unique:!0}),l.createObjectStore("documentMutations")}(e),DI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),DI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Kw,{unique:!0});const p=c.store("mutations"),g=h.map(v=>p.put(v));return V.waitFor(g)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:kD});c.createIndex("collectionPathOverlayIndex",xD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",CD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:yD});c.createIndex("documentKeyIndex",_D),c.createIndex("collectionGroupIndex",vD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:SD}).createIndex("sequenceNumberIndex",AD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:PD}).createIndex("documentKeyIndex",RD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=vd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>V.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>V.forEach(a,l=>{Z(l.userId===s.userId);const c=Oi(this.serializer,l);return OA(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new oe(o),c=function(p){return[0,Ct(p)]}(l);s.push(n.get(c).next(h=>h?V.resolve():(p=>n.put({targetId:0,path:Ct(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>V.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:TD});const r=n.store("collectionParents"),i=new ey,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ct(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new oe(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=Vn(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Wa(i),o=NA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(p){return p.document?new K(oe.fromString(p.document.name).popFirst(5)):p.noDocument?K.fromSegments(p.noDocument.path):p.unknownDocument?K.fromSegments(p.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>V.waitFor(i))}si(e,n){const r=n.store("mutations"),i=jA(this.serializer),s=new BA(nh.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:re();Oi(this.serializer,l).keys().forEach(p=>h=h.add(p)),a.set(l.userId,h)}),V.forEach(a,(l,c)=>{const h=new tt(c),p=eh.lt(this.serializer,h),g=s.getIndexManager(h),v=th.lt(h,this.serializer,g,s.referenceDelegate);return new UA(i,v,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Hp(n,Ut.oe),l).next()})})}}function DI(t){t.createObjectStore("targetDocuments",{keyPath:ID}).createIndex("documentTargetsIndex",ED,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",wD,{unique:!0}),t.createObjectStore("targetGlobal")}const Vf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ny{constructor(e,n,r,i,s,o,a,l,c,h,p=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=h,this.ui=p,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=g=>Promise.resolve(),!ny.D())throw new z(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new VV(this,i),this.Ti=n+"main",this.serializer=new bA(l),this.Ei=new jn(this.Ti,this.ui,new WV(this.serializer)),this.Qr=new xV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jA(this.serializer),this.$r=new IV,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(L.FAILED_PRECONDITION,Vf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Ut(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>uc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(wi(e))return $("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Na(e).get("owner").next(n=>V.resolve(this.Si(n)))}bi(e){return uc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return V.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?V.resolve(!0):Na(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new z(L.FAILED_PRECONDITION,Vf);return!1}}return!(!this.networkEnabled||!this.inForeground)||uc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&$("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Hp(e,Ut.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>uc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return th.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new kV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return eh.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){$("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?ND:l===15?US:l===14?jS:l===13?FS:l===12?bD:l===11?MS:void Y()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Hp(a,this.kr?this.kr.next():Ut.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new z(L.FAILED_PRECONDITION,NS);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Na(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(L.FAILED_PRECONDITION,Vf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Na(e).put("owner",n)}static D(){return jn.D()}yi(e){const n=Na(e);return n.get("owner").next(r=>this.Si(r)?($("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):V.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;sS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return $("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Na(t){return st(t,"owner")}function uc(t){return st(t,"clientMetadata")}function ry(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new iy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return sS()?8:VS(xe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Fs()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(Fs()<=ie.DEBUG&&$("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Fs()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(n))):V.resolve())}ji(e,n){if(sI(n))return V.resolve(null);let r=bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gd(n,null,"F"),r=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,gd(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return sI(n)||i.isEqual(ee.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(Fs()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),js(n)),this.es(e,o,n,CS(i,-1)).next(a=>a))})}Zi(e,n){let r=new ge(tA(e));return n.forEach((i,s)=>{au(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Fs()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",js(n)),this.zi.getDocumentsMatchingQuery(e,n,tn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ve(ne),this.rs=new Ii(s=>ss(s),su),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function $A(t,e,n,r){return new KV(t,e,n,r)}async function qA(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function HV(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const p=c.batch,g=p.keys();let v=V.resolve();return g.forEach(S=>{v=v.next(()=>h.getEntry(l,S)).next(k=>{const C=c.docVersions.get(S);Z(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function WA(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function QV(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Xe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(p,v),function(k,C,E){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,v,h)&&a.push(n.Qr.updateTargetData(s,v))});let l=zt(),c=re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(GA(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(ee.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function GA(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function YV(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bo(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function No(t,e,n){const r=H(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function wd(t,e,n){const r=H(t);let i=ee.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const p=H(l),g=p.rs.get(h);return g!==void 0?V.resolve(p.ns.get(g)):p.Qr.getTargetData(c,h)}(r,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:re())).next(a=>(QA(r,eA(e),a),{documents:a,hs:s})))}function KA(t,e){const n=H(t),r=H(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function HA(t,e){const n=H(t),r=n.ss.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,CS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(QA(n,e,i),i))}function QA(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function JV(t,e,n,r){const i=H(t);let s=re(),o=zt();for(const c of n){const h=e.Ps(c.metadata.name);c.document&&(s=s.add(h));const p=e.Is(c);p.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(h,p)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await bo(i,function(h){return bt(Go(oe.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>GA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.cs,h.ls)).next(()=>h.cs)))}async function XV(t,e,n=re()){const r=await bo(t,bt(Xg(e.bundledQuery))),i=H(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function VI(t,e){return`firestore_clients_${t}_${e}`}function OI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Of(t,e){return`firestore_targets_${t}_${e}`}class Id{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new z(i.error.code,i.error.message))),o?new Id(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ol{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new z(r.error.code,r.error.message))),s?new ol(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ed{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Wg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=OS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ed(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class sy{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new sy(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class lm{constructor(){this.activeTargetIds=Wg()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ve(ne),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=VI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new lm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(VI(this.persistenceKey,r));if(i){const s=Ed.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Of(this.persistenceKey,e));if(r){const i=ol.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Of(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return $("SharedClientState","READ",e,n),n}setItem(e,n){$("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){$("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if($("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Ut.oe;if(s!=null)try{const a=JSON.parse(s);Z(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ut.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Id(this.currentUser,e,n,r),s=OI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=OI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Of(this.persistenceKey,e),s=new ol(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Ed.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Id.Es(new tt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return ol.Es(i,n)}xs(e){return sy.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);$("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=Wg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class YA{constructor(){this.no=new lm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc=null;function Mf(){return cc===null?cc=function(){return 268435456+Math.round(2147483648*Math.random())}():cc++,"0x"+cc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class nO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Mf(),l=this.vo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>($("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Sn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=eO[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Mf();return new Promise((o,a)=>{const l=new IS;l.setWithCredentials(!0),l.listenOnce(TS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pc.NO_ERROR:const h=l.getResponseJson();$(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Pc.TIMEOUT:$(wt,`RPC '${e}' ${s} timed out`),a(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const p=l.getStatus();if($(wt,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const S=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(v.status);a(new z(S,v.message))}else a(new z(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);$(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Mf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PS(),a=AS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new ES({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");$(wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,v=!1;const S=new tO({lo:C=>{v?$(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(g||($(wt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),$(wt,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},ho:()=>p.close()}),k=(C,E,w)=>{C.listen(E,T=>{try{w(T)}catch(O){setTimeout(()=>{throw O},0)}})};return k(p,za.EventType.OPEN,()=>{v||($(wt,`RPC '${e}' stream ${i} transport opened.`),S.mo())}),k(p,za.EventType.CLOSE,()=>{v||(v=!0,$(wt,`RPC '${e}' stream ${i} transport closed`),S.po())}),k(p,za.EventType.ERROR,C=>{v||(v=!0,Sn(wt,`RPC '${e}' stream ${i} transport errored:`,C),S.po(new z(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,za.EventType.MESSAGE,C=>{var E;if(!v){const w=C.data[0];Z(!!w);const T=w,O=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(O){$(wt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let F=function(A){const P=Ge[A];if(P!==void 0)return mA(P)}(j),I=O.message;F===void 0&&(F=L.INTERNAL,I="Unknown error status: "+j+" with message "+O.message),v=!0,S.po(new z(F,I)),p.close()}else $(wt,`RPC '${e}' stream ${i} received:`,w),S.yo(w)}}),k(a,SS.STAT_EVENT,C=>{C.stat===Gp.PROXY?$(wt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Gp.NOPROXY&&$(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(){return typeof window<"u"?window:null}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new cV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new oy(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rO extends XA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=fV(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?We(o.readTime):ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=rm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=pd(l)?{documents:AA(s,l)}:{query:PA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=vA(s,o.resumeToken);const c=tm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Co(s,o.snapshotVersion.toTimestamp());const c=tm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=mV(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=rm(this.serializer),n.removeTarget=e,this.i_(n)}}class iO extends XA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=pV(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.A_(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=rm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$l(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,nm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,nm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class oO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($e(n),this.y_=!1):$("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ei(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=H(l);c.M_.add(4),await Qo(c),c.N_.set("Unknown"),c.M_.delete(4),await hu(c)}(this))})}),this.N_=new oO(r,i)}}async function hu(t){if(Ei(t))for(const e of t.x_)await e(!0)}async function Qo(t){for(const e of t.x_)await e(!1)}function rh(t,e){const n=H(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),uy(n)?ly(n):Jo(n).Xo()&&ay(n,e))}function Do(t,e){const n=H(t),r=Jo(n);n.F_.delete(e),r.Xo()&&ZA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ei(n)&&n.N_.set("Unknown"))}function ay(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Jo(t).P_(e)}function ZA(t,e){t.L_.xe(e),Jo(t).I_(e)}function ly(t){t.L_=new oV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Jo(t).start(),t.N_.w_()}function uy(t){return Ei(t)&&!Jo(t).Zo()&&t.F_.size>0}function Ei(t){return H(t).M_.size===0}function eP(t){t.L_=void 0}async function lO(t){t.N_.set("Online")}async function uO(t){t.F_.forEach((e,n)=>{ay(t,e)})}async function cO(t,e){eP(t),uy(t)?(t.N_.D_(e),ly(t)):t.N_.set("Unknown")}async function dO(t,e,n){if(t.N_.set("Online"),e instanceof _A&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Td(t,r)}else if(e instanceof Nc?t.L_.Ke(e):e instanceof yA?t.L_.He(e):t.L_.We(e),!n.isEqual(ee.min()))try{const r=await WA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Xe.EMPTY_BYTE_STRING,h.snapshotVersion)),ZA(s,l);const p=new nr(h.target,l,c,h.sequenceNumber);ay(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Td(t,r)}}async function Td(t,e,n){if(!wi(e))throw e;t.M_.add(1),await Qo(t),t.N_.set("Offline"),n||(n=()=>WA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await hu(t)})}function tP(t,e){return e().catch(n=>Td(t,n,e))}async function Yo(t){const e=H(t),n=ci(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;hO(e);)try{const i=await YV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,fO(e,i)}catch(i){await Td(e,i)}nP(e)&&rP(e)}function hO(t){return Ei(t)&&t.v_.length<10}function fO(t,e){t.v_.push(e);const n=ci(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function nP(t){return Ei(t)&&!ci(t).Zo()&&t.v_.length>0}function rP(t){ci(t).start()}async function pO(t){ci(t).V_()}async function mO(t){const e=ci(t);for(const n of t.v_)e.d_(n.mutations)}async function gO(t,e,n){const r=t.v_.shift(),i=Hg.from(r,e,n);await tP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yo(t)}async function yO(t,e){e&&ci(t).E_&&await async function(r,i){if(function(o){return pA(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();ci(r).t_(),await tP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yo(r)}}(t,e),nP(t)&&rP(t)}async function MI(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Ei(n);n.M_.add(3),await Qo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await hu(n)}async function um(t,e){const n=H(t);e?(n.M_.delete(2),await hu(n)):e||(n.M_.add(2),await Qo(n),n.N_.set("Unknown"))}function Jo(t){return t.B_||(t.B_=function(n,r,i){const s=H(n);return s.f_(),new rO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:lO.bind(null,t),To:uO.bind(null,t),Ao:cO.bind(null,t),h_:dO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),uy(t)?ly(t):t.N_.set("Unknown")):(await t.B_.stop(),eP(t))})),t.B_}function ci(t){return t.k_||(t.k_=function(n,r,i){const s=H(n);return s.f_(),new iO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:pO.bind(null,t),Ao:yO.bind(null,t),R_:mO.bind(null,t),A_:gO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Yo(t)):(await t.k_.stop(),t.v_.length>0&&($("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new cy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xo(t,e){if($e("AsyncQueue",`${e}: ${t}`),wi(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=$a(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.q_=new ve(K.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vo(e,n,uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class vO{constructor(){this.queries=new Ii(e=>ZS(e),ou),this.onlineState="Unknown",this.z_=new Set}}async function dy(t,e){const n=H(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new _O,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Xo(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&fy(n)}async function hy(t,e){const n=H(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wO(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&fy(n)}function IO(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function fy(t){t.z_.forEach(e=>{e.next()})}var cm,jI;(jI=cm||(cm={})).J_="default",jI.Cache="cache";class py{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==cm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.serializer=e}Ps(e){return Un(this.serializer,e)}Is(e){return e.metadata.exists?SA(this.serializer,e.document,!1):Ee.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return We(e)}}class TO{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=iP(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=oe.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new UI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||re()).add(s);n.set(o,a)}}return n}async complete(){const e=await JV(this.localStore,new UI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await XV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function iP(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.key=e}}class oP{constructor(e){this.key=e}}class aP{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=re(),this.mutatedKeys=re(),this.Ia=tA(e),this.Ta=new uo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new FI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),v=au(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let C=!1;g&&v?g.data.isEqual(v.data)?S!==k&&(r.track({type:3,doc:v}),C=!0):this.Ra(g,v)||(r.track({type:2,doc:v}),C=!0,(l&&this.Ia(v,l)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),C=!0):g&&!v&&(r.track({type:1,doc:g}),C=!0,(l||c)&&(a=!0)),C&&(v?(o=o.add(v),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(v,S){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(v)-k(S)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Vo(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new FI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=re(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new oP(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new sP(r))}),n}pa(e){this.la=e.hs,this.Pa=re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Vo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class SO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AO{constructor(e){this.key=e,this.wa=!1}}class PO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ii(a=>ZS(a),ou),this.Da=new Map,this.Ca=new Set,this.va=new ve(K.comparator),this.Fa=new Map,this.Ma=new ty,this.xa={},this.Oa=new Map,this.Na=cs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function RO(t,e,n=!0){const r=ih(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await lP(r,e,n,!0),i}async function kO(t,e){const n=ih(t);await lP(n,e,!0,!1)}async function lP(t,e,n,r){const i=await bo(t.localStore,bt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await my(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rh(t.remoteStore,i),a}async function my(t,e,n,r,i){t.Ba=(p,g,v)=>async function(k,C,E,w){let T=C.view.da(E);T.Xi&&(T=await wd(k.localStore,C.query,!1).then(({documents:I})=>C.view.da(I,T)));const O=w&&w.targetChanges.get(C.targetId),j=w&&w.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(T,k.isPrimaryClient,O,j);return dm(k,C.targetId,F.fa),F.snapshot}(t,p,g,v);const s=await wd(t.localStore,e,!0),o=new aP(e,s.hs),a=o.da(s.documents),l=cu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);dm(t,n,c.fa);const h=new SO(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function xO(t,e,n){const r=H(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ou(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await No(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Do(r.remoteStore,i.targetId),Oo(r,i.targetId)}).catch(vi)):(Oo(r,i.targetId),await No(r.localStore,i.targetId,!0))}async function CO(t,e){const n=H(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Do(n.remoteStore,r.targetId))}async function bO(t,e,n){const r=vy(t);try{const i=await function(o,a){const l=H(o),c=ke.now(),h=a.reduce((v,S)=>v.add(S.key),re());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=zt(),k=re();return l.os.getEntries(v,h).next(C=>{S=C,S.forEach((E,w)=>{w.isValidDocument()||(k=k.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,S)).next(C=>{p=C;const E=[];for(const w of a){const T=rV(w,p.get(w.key).overlayedDocument);T!=null&&E.push(new wr(w.key,T,qS(T.value.mapValue),Re.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,E,a)}).next(C=>{g=C;const E=C.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(v,C.batchId,E)})}).then(()=>({batchId:g.batchId,changes:rA(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new ve(ne)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ir(r,i.changes),await Yo(r.remoteStore)}catch(i){const s=Xo(i,"Failed to persist write");n.reject(s)}}async function uP(t,e){const n=H(t);try{const r=await QV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Z(o.wa):i.removedDocuments.size>0&&(Z(o.wa),o.wa=!1))}),await Ir(n,r,e)}catch(r){await vi(r)}}function BI(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let c=!1;l.queries.forEach((h,p)=>{for(const g of p.U_)g.j_(a)&&(c=!0)}),c&&fy(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NO(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ve(K.comparator);o=o.insert(s,Ee.newNoDocument(s,ee.min()));const a=re().add(s),l=new uu(ee.min(),new Map,new ve(ne),o,a);await uP(r,l),r.va=r.va.remove(s),r.Fa.delete(e),_y(r)}else await No(r.localStore,e,!1).then(()=>Oo(r,e,n)).catch(vi)}async function DO(t,e){const n=H(t),r=e.batch.batchId;try{const i=await HV(n.localStore,e);yy(n,r,null),gy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ir(n,i)}catch(i){await vi(i)}}async function VO(t,e,n){const r=H(t);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(p=>(Z(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(c,p))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);yy(r,e,n),gy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ir(r,i)}catch(i){await vi(i)}}async function OO(t,e){const n=H(t);Ei(n.remoteStore)||$("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=H(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=Xo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function gy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function yy(t,e,n){const r=H(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||cP(t,r)})}function cP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Do(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),_y(t))}function dm(t,e,n){for(const r of n)r instanceof sP?(t.Ma.addReference(r.key,e),LO(t,r)):r instanceof oP?($("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||cP(t,r.key)):Y()}function LO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||($("SyncEngine","New document in limbo: "+n),t.Ca.add(r),_y(t))}function _y(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new K(oe.fromString(e)),r=t.Na.next();t.Fa.set(r,new AO(n)),t.va=t.va.insert(n,r),rh(t.remoteStore,new nr(bt(Go(n.path)),r,"TargetPurposeLimboResolution",Ut.oe))}}async function Ir(t,e,n){const r=H(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=iy.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=H(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,g=>V.forEach(g.qi,v=>h.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>V.forEach(g.Qi,v=>h.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!wi(p))throw p;$("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const v=h.ns.get(g),S=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(S);h.ns=h.ns.insert(g,k)}}}(r.localStore,s))}async function MO(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await qA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new z(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ir(n,r.us)}}function FO(t,e){const n=H(t),r=n.Fa.get(e);if(r&&r.wa)return re().add(r.key);{let i=re();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function jO(t,e){const n=H(t),r=await wd(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&dm(n,e.targetId,i.fa),i}async function UO(t,e){const n=H(t);return HA(n.localStore,e).then(r=>Ir(n,r))}async function BO(t,e,n,r){const i=H(t),s=await function(a,l){const c=H(a),h=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.vn(p,l).next(g=>g?c.localDocuments.getDocuments(p,g):V.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Yo(i.remoteStore):n==="acknowledged"||n==="rejected"?(yy(i,e,r||null),gy(i,e),function(a,l){H(H(a).mutationQueue).Mn(l)}(i.localStore,e)):Y(),await Ir(i,s)):$("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zO(t,e){const n=H(t);if(ih(n),vy(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await zI(n,r.toArray());n.La=!0,await um(n.remoteStore,!0);for(const s of i)rh(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Oo(n,o),No(n.localStore,o,!0))),Do(n.remoteStore,o)}),await i,await zI(n,r),function(o){const a=H(o);a.Fa.forEach((l,c)=>{Do(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ve(K.comparator)}(n),n.La=!1,await um(n.remoteStore,!1)}}async function zI(t,e,n){const r=H(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await bo(r.localStore,bt(l[0]));for(const c of l){const h=r.ba.get(c),p=await jO(r,h);p.snapshot&&s.push(p.snapshot)}}else{const c=await KA(r.localStore,o);a=await bo(r.localStore,c),await my(r,dP(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function dP(t){return XS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function $O(t){return function(n){return H(H(n).persistence).Bi()}(H(t).localStore)}async function qO(t,e,n,r){const i=H(t);if(i.La)return void $("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await HA(i.localStore,eA(s[0])),a=uu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Xe.EMPTY_BYTE_STRING);await Ir(i,o,a);break}case"rejected":await No(i.localStore,e,!0),Oo(i,e,r);break;default:Y()}}async function WO(t,e,n){const r=ih(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){$("SyncEngine","Adding an already active target "+i);continue}const s=await KA(r.localStore,i),o=await bo(r.localStore,s);await my(r,dP(s),o.targetId,!1,o.resumeToken),rh(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await No(r.localStore,i,!1).then(()=>{Do(r.remoteStore,i),Oo(r,i)}).catch(vi)}}function ih(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NO.bind(null,e),e.Sa.h_=wO.bind(null,e.eventManager),e.Sa.ka=IO.bind(null,e.eventManager),e}function vy(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VO.bind(null,e),e}function GO(t,e,n){const r=H(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(v,S){const k=H(v),C=We(S.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",E=>k.$r.getBundleMetadata(E,S.id)).then(E=>!!E&&E.createTime.compareTo(C)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(iP(l));const c=new TO(l,s.localStore,o.serializer);let h=await o.qa();for(;h;){const g=await c._a(h);g&&a._updateProgress(g),h=await o.qa()}const p=await c.complete();return await Ir(s,p.ca,void 0),await function(v,S){const k=H(v);return k.persistence.runTransaction("Save bundle","readwrite",C=>k.$r.saveBundleMetadata(C,S))}(s.localStore,l),a._completeWith(p.progress),Promise.resolve(p.ua)}catch(l){return Sn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class hm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $A(this.persistence,new zA,e.initialUser,this.serializer)}createPersistence(e){return new BA(nh.Hr,this.serializer)}createSharedClientState(e){return new YA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hP extends hm{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await vy(this.Qa.syncEngine),await Yo(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return $A(this.persistence,new zA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new bV(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new pD(n,this.persistence);return new fD(e.asyncQueue,r)}createPersistence(e){const n=ry(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new ny(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,JA(),Dc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new YA}}class KO extends hP{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Lf&&(this.sharedClientState.syncEngine={Zs:BO.bind(null,n),Xs:qO.bind(null,n),eo:WO.bind(null,n),Bi:$O.bind(null,n),Ys:UO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await zO(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=JA();if(!Lf.D(n))throw new z(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ry(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Lf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class wy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>BI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MO.bind(null,this.syncEngine),await um(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vO}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(s){return new nO(s)}(e.databaseInfo);return function(s,o,a,l){return new sO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new aO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>BI(this.syncEngine,n,0),function(){return LI.D()?new LI:new ZV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const p=new PO(i,s,o,a,l,c);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=H(r);$("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Qo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new rt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new EO(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=H(i),a={documents:s.map(p=>zl(o.serializer,p))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,oe.emptyPath(),a,s.length),c=new Map;l.forEach(p=>{const g=hV(o.serializer,p);c.set(g.key.toString(),g)});const h=[];return s.forEach(p=>{const g=c.get(p.toString());Z(!!g),h.push(g)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ho(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=K.fromPath(r);this.mutations.push(new Gg(i,this.precondition(i)))}),await async function(r,i){const s=H(r),o={writes:i.map(a=>$l(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Re.exists(!1):Re.updateTime(n):Re.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new z(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(n)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new oy(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new QO(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!iu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!pA(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=kS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Iy(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>MI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>MI(e.remoteStore,i)),t._onlineComponents=e}function fP(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Iy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fP(n))throw n;Sn("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new hm)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new hm);return t._offlineComponents}async function oh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await fm(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await fm(t,new wy))),t._onlineComponents}function pP(t){return Iy(t).then(e=>e.persistence)}function Ey(t){return Iy(t).then(e=>e.localStore)}function mP(t){return oh(t).then(e=>e.remoteStore)}function Ty(t){return oh(t).then(e=>e.syncEngine)}function XO(t){return oh(t).then(e=>e.datastore)}async function Lo(t){const e=await oh(t),n=e.eventManager;return n.onListen=RO.bind(null,e.syncEngine),n.onUnlisten=xO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CO.bind(null,e.syncEngine),n}function ZO(t){return t.asyncQueue.enqueue(async()=>{const e=await pP(t),n=await mP(t);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.M_.delete(0),hu(s)}(n)})}function eL(t){return t.asyncQueue.enqueue(async()=>{const e=await pP(t),n=await mP(t);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.M_.add(0),await Qo(s),s.N_.set("Offline")}(n)})}function tL(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const p=H(c);return p.persistence.runTransaction("read document","readonly",g=>p.localDocuments.getDocument(g,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new z(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Xo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Ey(t),e,n)),n.promise}function gP(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new sh({next:g=>{o.enqueueAndForget(()=>hy(s,p));const v=g.docs.has(a);!v&&g.fromCache?c.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new py(Go(a.path),h,{includeMetadataChanges:!0,ra:!0});return dy(s,p)}(await Lo(t),t.asyncQueue,e,n,r)),r.promise}function nL(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await wd(i,s,!0),l=new aP(s,a.hs),c=l.da(a.documents),h=l.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const l=Xo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Ey(t),e,n)),n.promise}function yP(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new sh({next:g=>{o.enqueueAndForget(()=>hy(s,p)),g.fromCache&&l.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new py(a,h,{includeMetadataChanges:!0,ra:!0});return dy(s,p)}(await Lo(t),t.asyncQueue,e,n,r)),r.promise}function rL(t,e){const n=new sh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.add(s),s.next()}(await Lo(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.delete(s)}(await Lo(t),n))}}function iL(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?gA().encode(o):o,function(h,p){return new HO(h,p)}(function(h,p){if(h instanceof Uint8Array)return $I(h,p);if(h instanceof ArrayBuffer)return $I(new Uint8Array(h),p);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,du(e));t.asyncQueue.enqueueAndForget(async()=>{GO(await Ty(t),i,r)})}function sL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Ey(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vP(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function WI(t){if(!K.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function GI(t){if(K.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function de(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ah(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function wP(t,e){if(e<=0)throw new z(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_P((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new KI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new KI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nD;switch(r.type){case"firstParty":return new oD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qI.get(n);r&&($("ComponentProvider","Removing Datastore"),qI.delete(n),r.terminate())}(this),Promise.resolve()}}function oL(t,e,n,r={}){var i;const s=(t=de(t,fu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=AN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(c)}t._authCredentials=new rD(new RS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt=class IP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new IP(this.firestore,e,this._query)}},Ne=class EP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new EP(this.firestore,e,this._key)}},Zr=class TP extends Nt{constructor(e,n,r){super(e,n,Go(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new K(e))}withConverter(e){return new TP(this.firestore,e,this._path)}};function SP(t,e,...n){if(t=te(t),Sy("collection","path",e),t instanceof fu){const r=oe.fromString(e,...n);return GI(r),new Zr(t,null,r)}{if(!(t instanceof Ne||t instanceof Zr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return GI(r),new Zr(t.firestore,null,r)}}function aL(t,e){if(t=de(t,fu),Sy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(t,null,function(r){return new vr(oe.emptyPath(),r)}(e))}function Sd(t,e,...n){if(t=te(t),arguments.length===1&&(e=kS.newId()),Sy("doc","path",e),t instanceof fu){const r=oe.fromString(e,...n);return WI(r),new Ne(t,null,new K(r))}{if(!(t instanceof Ne||t instanceof Zr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return WI(r),new Ne(t.firestore,t instanceof Zr?t.converter:null,new K(r))}}function AP(t,e){return t=te(t),e=te(e),(t instanceof Ne||t instanceof Zr)&&(e instanceof Ne||e instanceof Zr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function PP(t,e){return t=te(t),e=te(e),t instanceof Nt&&e instanceof Nt&&t.firestore===e.firestore&&ou(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new oy(this,"async_queue_retry"),this.hu=()=>{const n=Dc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Dc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new rt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!wi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=cy.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function pm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class uL{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL=-1;let Fe=class extends fu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new lL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RP(this),this._firestoreClient.terminate()}};function ot(t){return t._firestoreClient||RP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new OD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,_P(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new JO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function dL(t,e){xP(t=de(t,Fe));const n=ot(t);if(n._uninitializedComponentsProvider)throw new z(L.FAILED_PRECONDITION,"SDK cache is already specified.");Sn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new wy;return kP(n,i,new hP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function hL(t){xP(t=de(t,Fe));const e=ot(t);if(e._uninitializedComponentsProvider)throw new z(L.FAILED_PRECONDITION,"SDK cache is already specified.");Sn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new wy;return kP(e,r,new KO(r,n.cacheSizeBytes))}function kP(t,e,n){const r=new rt;return t.asyncQueue.enqueue(async()=>{try{await Vc(t,n),await fm(t,e),r.resolve()}catch(i){const s=i;if(!fP(s))throw s;Sn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function fL(t){if(t._initialized&&!t._terminated)throw new z(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!jn.D())return Promise.resolve();const i=r+"main";await jn.delete(i)}(ry(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function pL(t){return function(n){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>OO(await Ty(n),r)),r.promise}(ot(t=de(t,Fe)))}function mL(t){return ZO(ot(t=de(t,Fe)))}function gL(t){return eL(ot(t=de(t,Fe)))}function yL(t,e){const n=ot(t=de(t,Fe)),r=new uL;return iL(n,t._databaseId,e,r),r}function _L(t,e){return sL(ot(t=de(t,Fe)),e).then(n=>n?new Nt(t,null,n.query):null)}function xP(t){if(t._initialized||t._terminated)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(Xe.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $n(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=/^__.*__$/;class wL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class CP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class uh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ad(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(bP(this.fu)&&vL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class IL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Fu(e,n,r,i=!1){return new uh({fu:e,methodName:n,vu:r,path:Pe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Es(t){const e=t._freezeSettings(),n=du(t._databaseId);return new IL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ch(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);by("Data must be an object, but it was:",o,r);const a=VP(r,o);let l,c;if(s.merge)l=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=mm(e,p,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);LP(h,g)||h.push(g)}l=new Bt(h),c=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,c=o.fieldTransforms;return new wL(new dt(a),l,c)}class pu extends Is{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pu}}function NP(t,e,n){return new uh({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ay extends Is{_toFieldTransform(e){return new lu(e.path,new ko)}isEqual(e){return e instanceof Ay}}class Py extends Is{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=NP(this,e,!0),r=this.Mu.map(s=>Ts(s,n)),i=new os(r);return new lu(e.path,i)}isEqual(e){return e instanceof Py&&Nl(this.Mu,e.Mu)}}class Ry extends Is{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=NP(this,e,!0),r=this.Mu.map(s=>Ts(s,n)),i=new as(r);return new lu(e.path,i)}isEqual(e){return e instanceof Ry&&Nl(this.Mu,e.Mu)}}class ky extends Is{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new xo(e.serializer,aA(e.serializer,this.xu));return new lu(e.path,n)}isEqual(e){return e instanceof ky&&this.xu===e.xu}}function xy(t,e,n,r){const i=t.Fu(1,e,n);by("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();ws(r,(l,c)=>{const h=Ny(e,l,n);c=te(c);const p=i.Su(h);if(c instanceof pu)s.push(h);else{const g=Ts(c,p);g!=null&&(s.push(h),o.set(h,g))}});const a=new Bt(s);return new CP(o,a,i.fieldTransforms)}function Cy(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[mm(e,r,n)],l=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(mm(e,s[g])),l.push(s[g+1]);const c=[],h=dt.empty();for(let g=a.length-1;g>=0;--g)if(!LP(c,a[g])){const v=a[g];let S=l[g];S=te(S);const k=o.Su(v);if(S instanceof pu)c.push(v);else{const C=Ts(S,k);C!=null&&(c.push(v),h.set(v,C))}}const p=new Bt(c);return new CP(h,p,o.fieldTransforms)}function DP(t,e,n,r=!1){return Ts(n,t.Fu(r?4:3,e))}function Ts(t,e){if(OP(t=te(t)))return by("Unsupported field value:",e,t),VP(t,e);if(t instanceof Is)return function(r,i){if(!bP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ts(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Co(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Co(i.serializer,s)}}if(r instanceof lh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $n)return{bytesValue:vA(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${ah(r)}`)}(t,e)}function VP(t,e){const n={};return BS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,i)=>{const s=Ts(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof lh||t instanceof $n||t instanceof Ne||t instanceof Is)}function by(t,e,n){if(!OP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ah(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function mm(t,e,n){if((e=te(e))instanceof di)return e._internalPath;if(typeof e=="string")return Ny(t,e);throw Ad("Field path arguments must be of type string or ",t,!1,void 0,n)}const EL=new RegExp("[~\\*/\\[\\]]");function Ny(t,e,n){if(e.search(EL)>=0)throw Ad(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new di(...e.split("."))._internalPath}catch{throw Ad(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ad(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(L.INVALID_ARGUMENT,a+t+l)}function LP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TL extends ql{data(){return super.data()}}function dh(t,e){return typeof e=="string"?Ny(t,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dy{}class mu extends Dy{}function Cr(t,e,...n){let r=[];e instanceof Dy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Vy).length,a=s.filter(l=>l instanceof hh).length;if(o>1||o>0&&a>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hh extends mu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hh(e,n,r)}_apply(e){const n=this._parse(e);return jP(e._query,n),new Nt(e.firestore,e.converter,em(e._query,n))}_parse(e){const n=Es(e.firestore);return function(s,o,a,l,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){QI(p,h);const v=[];for(const S of p)v.push(HI(l,s,S));g={arrayValue:{values:v}}}else g=HI(l,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||QI(p,h),g=DP(a,o,p,h==="in"||h==="not-in");return ae.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function SL(t,e,n){const r=e,i=dh("where",t);return hh._create(i,r,n)}class Vy extends Dy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)jP(o,l),o=em(o,l)}(e._query,n),new Nt(e.firestore,e.converter,em(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oy extends mu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Oy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bl(s,o)}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new vr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function AL(t,e="asc"){const n=e,r=dh("orderBy",t);return Oy._create(r,n)}class fh extends mu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new fh(e,n,r)}_apply(e){return new Nt(e.firestore,e.converter,gd(e._query,this._limit,this._limitType))}}function PL(t){return wP("limit",t),fh._create("limit",t,"F")}function RL(t){return wP("limitToLast",t),fh._create("limitToLast",t,"L")}class ph extends mu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ph(e,n,r)}_apply(e){const n=FP(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(i,s){return new vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function kL(...t){return ph._create("startAt",t,!0)}function xL(...t){return ph._create("startAfter",t,!1)}class mh extends mu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new mh(e,n,r)}_apply(e){const n=FP(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(i,s){return new vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function CL(...t){return mh._create("endBefore",t,!1)}function bL(...t){return mh._create("endAt",t,!0)}function FP(t,e,n,r){if(n[0]=te(n[0]),n[0]instanceof ql)return function(s,o,a,l,c){if(!l)throw new z(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const p of lo(s))if(p.field.isKeyField())h.push(is(o,l.key));else{const g=l.data.field(p.field);if(Jd(g))throw new z(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const v=p.field.canonicalString();throw new z(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(g)}return new ui(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Es(t.firestore);return function(o,a,l,c,h,p){const g=o.explicitOrderBy;if(h.length>g.length)throw new z(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let S=0;S<h.length;S++){const k=h[S];if(g[S].field.isKeyField()){if(typeof k!="string")throw new z(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!qg(o)&&k.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const C=o.path.child(oe.fromString(k));if(!K.isDocumentKey(C))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const E=new K(C);v.push(is(a,E))}else{const C=DP(l,c,k);v.push(C)}}return new ui(v,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function HI(t,e,n){if(typeof(n=te(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qg(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!K.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return is(t,new K(r))}if(n instanceof Ne)return is(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(n)}.`)}function QI(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ly{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new lh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fl(e));default:return null}}convertTimestamp(e){const n=hr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);Z(CA(r));const i=new ai(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class NL extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let fr=class extends ql{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},al=class extends fr{data(e={}){return super.data(e)}},hi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $i(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new al(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $i(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $i(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:DL(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function DL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function UP(t,e){return t instanceof fr&&e instanceof fr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hi&&e instanceof hi&&t._firestore===e._firestore&&PP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){t=de(t,Ne);const e=de(t.firestore,Fe);return gP(ot(e),t._key).then(n=>My(e,t,n))}class Ss extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function OL(t){t=de(t,Ne);const e=de(t.firestore,Fe),n=ot(e),r=new Ss(e);return tL(n,t._key).then(i=>new fr(e,r,t._key,i,new $i(i!==null&&i.hasLocalMutations,!0),t.converter))}function LL(t){t=de(t,Ne);const e=de(t.firestore,Fe);return gP(ot(e),t._key,{source:"server"}).then(n=>My(e,t,n))}function ML(t){t=de(t,Nt);const e=de(t.firestore,Fe),n=ot(e),r=new Ss(e);return MP(t._query),yP(n,t._query).then(i=>new hi(e,r,t,i))}function FL(t){t=de(t,Nt);const e=de(t.firestore,Fe),n=ot(e),r=new Ss(e);return nL(n,t._query).then(i=>new hi(e,r,t,i))}function jL(t){t=de(t,Nt);const e=de(t.firestore,Fe),n=ot(e),r=new Ss(e);return yP(n,t._query,{source:"server"}).then(i=>new hi(e,r,t,i))}function YI(t,e,n){t=de(t,Ne);const r=de(t.firestore,Fe),i=gh(t.converter,e,n);return gu(r,[ch(Es(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function JI(t,e,n,...r){t=de(t,Ne);const i=de(t.firestore,Fe),s=Es(i);let o;return o=typeof(e=te(e))=="string"||e instanceof di?Cy(s,"updateDoc",t._key,e,n,r):xy(s,"updateDoc",t._key,e),gu(i,[o.toMutation(t._key,Re.exists(!0))])}function UL(t){return gu(de(t.firestore,Fe),[new Ho(t._key,Re.none())])}function BL(t,e){const n=de(t.firestore,Fe),r=Sd(t),i=gh(t.converter,e);return gu(n,[ch(Es(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function BP(t,...e){var n,r,i;t=te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||pm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(pm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,c,h;if(t instanceof Ne)c=de(t.firestore,Fe),h=Go(t._key.path),l={next:p=>{e[o]&&e[o](My(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=de(t,Nt);c=de(p.firestore,Fe),h=p._query;const g=new Ss(c);l={next:v=>{e[o]&&e[o](new hi(c,g,p,v))},error:e[o+1],complete:e[o+2]},MP(t._query)}return function(g,v,S,k){const C=new sh(k),E=new py(v,C,S);return g.asyncQueue.enqueueAndForget(async()=>dy(await Lo(g),E)),()=>{C.$a(),g.asyncQueue.enqueueAndForget(async()=>hy(await Lo(g),E))}}(ot(c),h,a,l)}function zL(t,e){return rL(ot(t=de(t,Fe)),pm(e)?e:{next:e})}function gu(t,e){return function(r,i){const s=new rt;return r.asyncQueue.enqueueAndForget(async()=>bO(await Ty(r),i,s)),s.promise}(ot(t),e)}function My(t,e,n){const r=n.docs.get(e._key),i=new Ss(t);return new fr(t,i,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qL=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Es(e)}set(e,n,r){this._verifyNotCommitted();const i=Mr(e,this._firestore),s=gh(i.converter,n,r),o=ch(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Mr(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof di?Cy(this._dataReader,"WriteBatch.update",s._key,n,r,i):xy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Mr(e,this._firestore);return this._mutations=this._mutations.concat(new Ho(n._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Mr(t,e){if((t=te(t)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WL=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Es(n)}get(n){const r=Mr(n,this._firestore),i=new NL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new ql(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ql(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=Mr(n,this._firestore),o=gh(s.converter,r,i),a=ch(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Mr(n,this._firestore);let a;return a=typeof(r=te(r))=="string"||r instanceof di?Cy(this._dataReader,"Transaction.update",o._key,r,i,s):xy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Mr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Mr(e,this._firestore),r=new Ss(this._firestore);return super.get(e).then(i=>new fr(this._firestore,r,n._key,i._document,new $i(!1,!1),n.converter))}};function GL(t,e,n){t=de(t,Fe);const r=Object.assign(Object.assign({},$L),n);return function(s){if(s.maxAttempts<1)throw new z(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await XO(s);new YO(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(ot(t),i=>e(new WL(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(){return new pu("deleteField")}function HL(){return new Ay("serverTimestamp")}function QL(...t){return new Py("arrayUnion",t)}function YL(...t){return new Ry("arrayRemove",t)}function JL(t){return new ky("increment",t)}(function(e,n=!0){(function(i){Wo=i})(_i),ii(new Bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fe(new iD(r.getProvider("auth-internal")),new lD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),En(qw,"4.6.3",e),En(qw,"4.6.3","esm2017")})();const XL="@firebase/firestore-compat",ZL="0.3.32";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new z("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){if(typeof Uint8Array>"u")throw new z("unimplemented","Uint8Arrays are not available in this environment.")}function ZI(){if(!DD())throw new z("unimplemented","Blobs are unavailable in Firestore in this environment.")}let zP=class gm{constructor(e){this._delegate=e}static fromBase64String(e){return ZI(),new gm($n.fromBase64String(e))}static fromUint8Array(e){return XI(),new gm($n.fromUint8Array(e))}toBase64(){return ZI(),this._delegate.toBase64()}toUint8Array(){return XI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){return e2(t,["next","error","complete"])}function e2(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{enableIndexedDbPersistence(e,n){return dL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return hL(e._delegate)}clearIndexedDbPersistence(e){return fL(e._delegate)}}class $P{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Sn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){oL(this._delegate,e,n,r)}enableNetwork(){return mL(this._delegate)}disableNetwork(){return gL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,vP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return pL(this._delegate)}onSnapshotsInSync(e){return zL(this._delegate,e)}get app(){if(!this._appCompat)throw new z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Mo(this,SP(this._delegate,e))}catch(n){throw Rt(n,"collection()","Firestore.collection()")}}doc(e){try{return new un(this,Sd(this._delegate,e))}catch(n){throw Rt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Pt(this,aL(this._delegate,e))}catch(n){throw Rt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return GL(this._delegate,n=>e(new qP(this,n)))}batch(){return ot(this._delegate),new WP(new qL(this._delegate,e=>gu(this._delegate,e)))}loadBundle(e){return yL(this._delegate,e)}namedQuery(e){return _L(this._delegate,e).then(n=>n?new Pt(this,n):null)}}class yh extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new zP(new $n(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return un.forKey(n,this.firestore,null)}}function n2(t){eD(t)}class qP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new yh(e)}get(e){const n=qi(e);return this._delegate.get(n).then(r=>new Wl(this._firestore,new fr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=qi(e);return r?(Fy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=qi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=qi(e);return this._delegate.delete(n),this}}class WP{constructor(e){this._delegate=e}set(e,n,r){const i=qi(e);return r?(Fy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=qi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=qi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ds{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new al(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Gl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ds.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ds(e,new yh(e),n),i.set(n,s)),s}}ds.INSTANCES=new WeakMap;class un{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new un(n,new Ne(n._delegate,r,new K(e)))}static forKey(e,n,r){return new un(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Mo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Mo(this.firestore,SP(this._delegate,e))}catch(n){throw Rt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=te(e),e instanceof Ne?AP(this._delegate,e):!1}set(e,n){n=Fy("DocumentReference.set",n);try{return n?YI(this._delegate,e,n):YI(this._delegate,e)}catch(r){throw Rt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?JI(this._delegate,e):JI(this._delegate,e,n,...r)}catch(i){throw Rt(i,"updateDoc()","DocumentReference.update()")}}delete(){return UL(this._delegate)}onSnapshot(...e){const n=GP(e),r=KP(e,i=>new Wl(this.firestore,new fr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return BP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=OL(this._delegate):(e==null?void 0:e.source)==="server"?n=LL(this._delegate):n=VL(this._delegate),n.then(r=>new Wl(this.firestore,new fr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new un(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Rt(t,e,n){return t.message=t.message.replace(e,n),t}function GP(t){for(const e of t)if(typeof e=="object"&&!ym(e))return e;return{}}function KP(t,e){var n,r;let i;return ym(t[0])?i=t[0]:ym(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Wl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new un(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return UP(this._delegate,e._delegate)}}class Gl extends Wl{data(e){const n=this._delegate.data(e);return this._delegate._converter||tD(n!==void 0),n}}class Pt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yh(e)}where(e,n,r){try{return new Pt(this.firestore,Cr(this._delegate,SL(e,n,r)))}catch(i){throw Rt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Pt(this.firestore,Cr(this._delegate,AL(e,n)))}catch(r){throw Rt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Pt(this.firestore,Cr(this._delegate,PL(e)))}catch(n){throw Rt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Pt(this.firestore,Cr(this._delegate,RL(e)))}catch(n){throw Rt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Pt(this.firestore,Cr(this._delegate,kL(...e)))}catch(n){throw Rt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Pt(this.firestore,Cr(this._delegate,xL(...e)))}catch(n){throw Rt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Pt(this.firestore,Cr(this._delegate,CL(...e)))}catch(n){throw Rt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Pt(this.firestore,Cr(this._delegate,bL(...e)))}catch(n){throw Rt(n,"endAt()","Query.endAt()")}}isEqual(e){return PP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=FL(this._delegate):(e==null?void 0:e.source)==="server"?n=jL(this._delegate):n=ML(this._delegate),n.then(r=>new _m(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=GP(e),r=KP(e,i=>new _m(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return BP(this._delegate,n,r)}withConverter(e){return new Pt(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class r2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Gl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class _m{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Gl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new r2(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Gl(this._firestore,r))})}isEqual(e){return UP(this._delegate,e._delegate)}}class Mo extends Pt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new un(this.firestore,e):null}doc(e){try{return e===void 0?new un(this.firestore,Sd(this._delegate)):new un(this.firestore,Sd(this._delegate,e))}catch(n){throw Rt(n,"doc()","CollectionReference.doc()")}}add(e){return BL(this._delegate,e).then(n=>new un(this.firestore,n))}isEqual(e){return AP(this._delegate,e._delegate)}withConverter(e){return new Mo(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function qi(t){return de(t,Ne)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(...e){this._delegate=new di(...e)}static documentId(){return new jy(Pe.keyField().canonicalString())}isEqual(e){return e=te(e),e instanceof di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this._delegate=e}static serverTimestamp(){const e=HL();return e._methodName="FieldValue.serverTimestamp",new Fi(e)}static delete(){const e=KL();return e._methodName="FieldValue.delete",new Fi(e)}static arrayUnion(...e){const n=QL(...e);return n._methodName="FieldValue.arrayUnion",new Fi(n)}static arrayRemove(...e){const n=YL(...e);return n._methodName="FieldValue.arrayRemove",new Fi(n)}static increment(e){const n=JL(e);return n._methodName="FieldValue.increment",new Fi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2={Firestore:$P,GeoPoint:lh,Timestamp:ke,Blob:zP,Transaction:qP,WriteBatch:WP,DocumentReference:un,DocumentSnapshot:Wl,Query:Pt,QueryDocumentSnapshot:Gl,QuerySnapshot:_m,CollectionReference:Mo,FieldPath:jy,FieldValue:Fi,setLogLevel:n2,CACHE_SIZE_UNLIMITED:cL};function s2(t,e){t.INTERNAL.registerComponent(new Bn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},i2)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){s2(t,(e,n)=>new $P(e,n,new t2)),t.registerVersion(XL,ZL)}o2(ln);function Uy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Da={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ls={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function HP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l2=a2,u2=HP,QP=new vs("auth","Firebase",HP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Qd("@firebase/auth");function c2(t,...e){Pd.logLevel<=ie.WARN&&Pd.warn(`Auth (${_i}): ${t}`,...e)}function Oc(t,...e){Pd.logLevel<=ie.ERROR&&Pd.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,...e){throw zy(t,...e)}function Je(t,...e){return zy(t,...e)}function By(t,e,n){const r=Object.assign(Object.assign({},u2()),{[e]:n});return new vs("auth","Firebase",r).create(e,{appName:t.name})}function it(t){return By(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),By(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QP.create(t,...e)}function W(t,e,...n){if(!t)throw zy(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oc(e),new Error(e)}function An(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $y(){return eE()==="http:"||eE()==="https:"}function eE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($y()||rS()||"connection"in navigator)?navigator.onLine:!0}function h2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=PN()||Vg()}get(){return d2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new yu(3e4,6e4);function Ue(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,r,i={}){return JP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),YP.fetch()(XP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function JP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},f2),e);try{const i=new g2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ga(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw By(t,h,c);pt(t,h)}}catch(i){if(i instanceof xt)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function Er(t,e,n,r,i={}){const s=await Be(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qy(t.config,i):`${t.config.apiScheme}://${i}`}function m2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),p2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){return t!==void 0&&t.getResponse!==void 0}function nE(t){return t!==void 0&&t.enterprise!==void 0}class y2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return m2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t){return(await Be(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function v2(t,e){return Be(t,"GET","/v2/recaptchaConfig",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function I2(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function ZP(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function E2(t,e=!1){const n=te(t),r=await n.getIdToken(e),i=_h(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ll(Ff(i.auth_time)),issuedAtTime:ll(Ff(i.iat)),expirationTime:ll(Ff(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ff(t){return Number(t)*1e3}function _h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oc("JWT malformed, contained fewer than 3 sections"),null;try{const i=eS(n);return i?JSON.parse(i):(Oc("Failed to decode base64 JWT payload"),null)}catch(i){return Oc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rE(t){const e=_h(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&T2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function T2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pr(t,ZP(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eR(s.providerUserInfo):[],a=P2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function A2(t){const e=te(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eR(t){return t.map(e=>{var{providerId:n}=e,r=Uy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(t,e){const n=await JP(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k2(t,e){return Be(t,"POST","/v2/accounts:revokeToken",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=rE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return E2(this,e)}reload(){return A2(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await pr(this,w2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:O,isAnonymous:j,providerData:F,stsTokenManager:I}=n;W(T&&I,e,"internal-error");const _=co.fromJSON(this.name,I);W(typeof T=="string",e,"internal-error"),br(p,e.name),br(g,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),br(v,e.name),br(S,e.name),br(k,e.name),br(C,e.name),br(E,e.name),br(w,e.name);const A=new rr({uid:T,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:j,photoURL:S,phoneNumber:v,tenantId:k,stsTokenManager:_,createdAt:E,lastLoginAt:w});return F&&Array.isArray(F)&&(A.providerData=F.map(P=>Object.assign({},P))),C&&(A._redirectEventId=C),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?eR(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new co;a.updateFromIdToken(r);const l=new rr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=new Map;function Xt(t){An(t instanceof Function,"Expected a class definition");let e=iE.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tR.type="NONE";const Fo=tR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ho(Xt(Fo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xt(Fo);const o=Qi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=rr._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ho(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ho(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sR(e))return"Blackberry";if(oR(e))return"Webos";if(Wy(e))return"Safari";if((e.includes("chrome/")||rR(e))&&!e.includes("edge/"))return"Chrome";if(_u(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nR(t=xe()){return/firefox\//i.test(t)}function Wy(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rR(t=xe()){return/crios\//i.test(t)}function iR(t=xe()){return/iemobile/i.test(t)}function _u(t=xe()){return/android/i.test(t)}function sR(t=xe()){return/blackberry/i.test(t)}function oR(t=xe()){return/webos/i.test(t)}function ea(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function x2(t=xe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function C2(t=xe()){var e;return ea(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b2(){return iS()&&document.documentMode===10}function aR(t=xe()){return ea(t)||_u(t)||oR(t)||sR(t)||/windows phone/i.test(t)||iR(t)}function N2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e=[]){let n;switch(t){case"Browser":n=sE(xe());break;case"Worker":n=`${sE(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(t,e={}){return Be(t,"GET","/v2/passwordPolicy",Ue(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=6;class L2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:O2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oE(this),this.idTokenSubscription=new oE(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ZP(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(it(this));const n=e?te(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await V2(this),n=new L2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await k2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return te(t)}class oE{constructor(e){this.auth=e,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F2(t){vu=t}function Gy(t){return vu.loadJS(t)}function j2(){return vu.recaptchaV2Script}function U2(){return vu.recaptchaEnterpriseScript}function B2(){return vu.gapiScript}function uR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const z2="recaptcha-enterprise",$2="NO_RECAPTCHA";class q2{constructor(e){this.type=z2,this.auth=je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{v2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new y2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;nE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&nE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=U2();l.length!==0&&(l+=a),Gy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function aE(t,e,n,r=!1){const i=new q2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ql(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await aE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await aE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function W2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function G2(t,e,n){const r=je(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cR(e),{host:o,port:a}=K2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||H2()}function cR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K2(t){const e=cR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lE(o)}}}function lE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function H2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e){return Be(t,"POST","/v1/accounts:resetPassword",Ue(t,e))}async function Q2(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function Y2(t,e){return Be(t,"POST","/v1/accounts:signUp",e)}async function J2(t,e){return Be(t,"POST","/v1/accounts:update",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",Ue(t,e))}async function vh(t,e){return Be(t,"POST","/v1/accounts:sendOobCode",Ue(t,e))}async function Z2(t,e){return vh(t,e)}async function eM(t,e){return vh(t,e)}async function tM(t,e){return vh(t,e)}async function nM(t,e){return vh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}async function iM(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends ta{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ql(e,n,"signInWithPassword",X2);case"emailLink":return rM(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ql(e,r,"signUpPassword",Y2);case"emailLink":return iM(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM="http://localhost";class qn extends ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ar(e,n)}buildRequest(){const e={requestUri:sM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oM(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",Ue(t,e))}async function aM(t,e){return Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e))}async function lM(t,e){const n=await Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e));if(n.temporaryProof)throw Ga(t,"account-exists-with-different-credential",n);return n}const uM={USER_NOT_FOUND:"user-not-found"};async function cM(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,n),uM)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends ta{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Yi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Yi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return aM(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return lM(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return cM(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Yi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hM(t){const e=to(Ba(t)).link,n=e?to(Ba(e)).deep_link_id:null,r=to(Ba(t)).deep_link_id;return(r?to(Ba(r)).link:null)||r||n||e||t}class wh{constructor(e){var n,r,i,s,o,a;const l=to(Ba(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=dM((i=l.mode)!==null&&i!==void 0?i:null);W(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hM(e);try{return new wh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return Yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wh.parseLink(n);return W(r,"argument-error"),Yl._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Tr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class fo extends na{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),qn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return fo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return fo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new fo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends na{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends na{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM="http://localhost";class jo extends ta{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ar(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new jo(r,s)}static _create(e,n){return new jo(e,n)}buildRequest(){return{requestUri:fM,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM="saml.";class Rd extends Tr{constructor(e){W(e.startsWith(pM),"argument-error"),super(e)}static credentialFromResult(e){return Rd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Rd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=jo.fromJSON(e);return W(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return jo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends na{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e){return Er(t,"POST","/v1/accounts:signUp",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=uE(r);return new pn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uE(r);return new pn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(t){var e;if(Me(t.app))return Promise.reject(it(t));const n=je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new pn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await hR(n,{returnSecureToken:!0}),i=await pn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kd(e,n,r,i)}}function fR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kd._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){const n=te(t);await Ih(!0,n,e);const{providerUserInfo:r}=await I2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=pR(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ky(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",r)}async function Ih(t,e,n){await Hl(e);const r=pR(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";W(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(it(r));const i="reauthenticate";try{const s=await pr(t,fR(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=_h(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),pn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,e,n=!1){if(Me(t.app))return Promise.reject(it(t));const r="signIn",i=await fR(t,r,e),s=await pn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Eh(t,e){return gR(je(t),e)}async function yR(t,e){const n=te(t);return await Ih(!1,n,e.providerId),Ky(n,e)}async function _R(t,e){return mR(te(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(t,e){return Er(t,"POST","/v1/accounts:signInWithCustomToken",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M(t,e){if(Me(t.app))return Promise.reject(it(t));const n=je(t),r=await yM(n,{token:e,returnSecureToken:!0}),i=await pn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Hy._fromServerResponse(e,n):"totpInfo"in n?Qy._fromServerResponse(e,n):pt(e,"internal-error")}}class Hy extends wu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Hy(n)}}class Qy extends wu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Qy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t){const e=je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vM(t,e,n){const r=je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Th(r,i,n),await Ql(r,i,"getOobCode",eM)}async function wM(t,e,n){await dR(te(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yy(t),r})}async function IM(t,e){await J2(te(t),{oobCode:e})}async function vR(t,e){const n=te(t),r=await dR(n,{oobCode:e}),i=r.requestType;switch(W(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":W(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":W(r.mfaInfo,n,"internal-error");default:W(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=wu._fromServerResponse(je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function EM(t,e){const{data:n}=await vR(te(t),e);return n.email}async function TM(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t),o=await Ql(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Yy(t),l}),a=await pn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function SM(t,e,n){return Me(t.app)?Promise.reject(it(t)):Eh(te(t),Ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e,n){const r=je(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){W(a.handleCodeInApp,r,"argument-error"),a&&Th(r,o,a)}s(i,n),await Ql(r,i,"getOobCode",tM)}function PM(t,e){const n=wh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function RM(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=te(t),i=Ti.credentialWithLink(e,n||Kl());return W(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Eh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kM(t,e){return Be(t,"POST","/v1/accounts:createAuthUri",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xM(t,e){const n=$y()?Kl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await kM(te(t),r);return i||[]}async function CM(t,e){const n=te(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Th(n.auth,i,e);const{email:s}=await Z2(n.auth,i);s!==t.email&&await t.reload()}async function bM(t,e,n){const r=te(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Th(r.auth,s,n);const{email:o}=await nM(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NM(t,e){return Be(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pr(r,NM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VM(t,e){const n=te(t);return Me(n.auth.app)?Promise.reject(it(n.auth)):wR(n,e,null)}function OM(t,e){return wR(te(t),null,e)}async function wR(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pr(t,Q2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=_h(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new po(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new MM(s,i);case"github.com":return new FM(s,i);case"google.com":return new jM(s,i);case"twitter.com":return new UM(s,i,t.screenName||null);case"custom":case"anonymous":return new po(s,null);default:return new po(s,r,i)}}class po{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class IR extends po{constructor(e,n,r,i){super(e,n,r),this.username=i}}class MM extends po{constructor(e,n){super(e,"facebook.com",n)}}class FM extends IR{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class jM extends po{constructor(e,n){super(e,"google.com",n)}}class UM extends IR{constructor(e,n,r){super(e,"twitter.com",n,r)}}function BM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:LM(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Wi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Wi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Wi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Wi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>wu._fromServerResponse(r,a));W(i.mfaPendingCredential,r,"internal-error");const o=Wi._fromMfaPendingCredential(i.mfaPendingCredential);return new Jy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await pn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return W(n.user,r,"internal-error"),pn._forOperation(n.user,n.operationType,c);default:pt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function zM(t,e){var n;const r=te(t),i=e;return W(e.customData.operationType,r,"argument-error"),W((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Jy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",Ue(t,e))}function qM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ue(t,e))}function WM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ue(t,e))}class Xy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>wu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Xy(e)}async getSession(){return Wi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pr(this.user,WM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const jf=new WeakMap;function GM(t){const e=te(t);return jf.has(e)||jf.set(e,Xy._fromUser(e)),jf.get(e)}const xd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xd,"1"),this.storage.removeItem(xd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(){const t=xe();return Wy(t)||ea(t)}const HM=1e3,QM=10;class TR extends ER{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KM()&&N2(),this.fallbackToPolling=aR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);b2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TR.type="LOCAL";const Zy=TR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR extends ER{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SR.type="SESSION";const hs=SR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await YM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Iu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function XM(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function ZM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tF(){return e_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="firebaseLocalStorageDb",nF=1,Cd="firebaseLocalStorage",PR="fbase_key";class Eu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ah(t,e){return t.transaction([Cd],e?"readwrite":"readonly").objectStore(Cd)}function rF(){const t=indexedDB.deleteDatabase(AR);return new Eu(t).toPromise()}function wm(){const t=indexedDB.open(AR,nF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cd,{keyPath:PR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cd)?e(r):(r.close(),await rF(),e(await wm()))})})}async function cE(t,e,n){const r=Ah(t,!0).put({[PR]:e,value:n});return new Eu(r).toPromise()}async function iF(t,e){const n=Ah(t,!1).get(e),r=await new Eu(n).toPromise();return r===void 0?null:r.value}function dE(t,e){const n=Ah(t,!0).delete(e);return new Eu(n).toPromise()}const sF=800,oF=3;class RR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(tF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZM(),!this.activeServiceWorker)return;this.sender=new JM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wm();return await cE(e,xd,"1"),await dE(e,xd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new Eu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RR.type="LOCAL";const Jl=RR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",Ue(t,e))}function lF(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:finalize",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=500,cF=6e4,dc=1e12;class dF{constructor(e){this.auth=e,this.counter=dc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new hF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||dc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||dc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||dc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class hF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;W(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=fF(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cF)},uF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fF(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=uR("rcb"),pF=new yu(3e4,6e4);class mF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return W(gF(n),e,"argument-error"),this.shouldResolveImmediately(n)&&tE(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Je(e,"network-request-failed"))},pF.get());Ke()[Uf]=()=>{Ke().clearTimeout(s),delete Ke()[Uf];const a=Ke().grecaptcha;if(!a||!tE(a)){i(Je(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const p=l(c,h);return this.counter++,p},this.hostLanguage=n,r(a)};const o=`${j2()}?${qo({onload:Uf,render:"explicit",hl:n})}`;Gy(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class yF{async load(e){return new dF(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="recaptcha",_F={theme:"light",type:"image"};let vF=class{constructor(e,n,r=Object.assign({},_F)){this.parameters=r,this.type=kR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;W(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yF:new mF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W($y()&&!e_(),this.auth,"internal-error"),await wF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _2(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function wF(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Yi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function IF(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t),i=await Ph(r,e,te(n));return new t_(i,s=>Eh(r,s))}async function EF(t,e,n){const r=te(t);await Ih(!1,r,"phone");const i=await Ph(r.auth,e,te(n));return new t_(i,s=>yR(r,s))}async function TF(t,e,n){const r=te(t);if(Me(r.auth.app))return Promise.reject(it(r.auth));const i=await Ph(r.auth,e,te(n));return new t_(i,s=>_R(r,s))}async function Ph(t,e,n){var r;const i=await n.verify();try{W(typeof i=="string",t,"argument-error"),W(n.type===kR,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return W(o.type==="enroll",t,"internal-error"),(await $M(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{W(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return W(a,t,"missing-multi-factor-info"),(await aF(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await oM(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function SF(t,e){const n=te(t);if(Me(n.auth.app))return Promise.reject(it(n.auth));await Ky(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs=class Lc{constructor(e){this.providerId=Lc.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,n){return Ph(this.auth,e,te(n))}static credential(e,n){return Yi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Lc.credentialFromTaggedObject(n)}static credentialFromError(e){return Lc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Yi._fromTokenResponse(n,r):null}};fs.PROVIDER_ID="phone";fs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e){return e?Xt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends ta{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AF(t){return gR(t.auth,new n_(t),t.bypassAuthState)}function PF(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),mR(n,new n_(t),t.bypassAuthState)}async function RF(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Ky(n,new n_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AF;case"linkViaPopup":case"linkViaRedirect":return RF;case"reauthViaPopup":case"reauthViaRedirect":return PF;default:pt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=new yu(2e3,1e4);async function xF(t,e,n){if(Me(t.app))return Promise.reject(Je(t,"operation-not-supported-in-this-environment"));const r=je(t);Zo(t,e,Tr);const i=As(r,n);return new ir(r,"signInViaPopup",e,i).executeNotNull()}async function CF(t,e,n){const r=te(t);if(Me(r.auth.app))return Promise.reject(Je(r.auth,"operation-not-supported-in-this-environment"));Zo(r.auth,e,Tr);const i=As(r.auth,n);return new ir(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function bF(t,e,n){const r=te(t);Zo(r.auth,e,Tr);const i=As(r.auth,n);return new ir(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ir extends xR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kF.get())};e()}}ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF="pendingRedirect",ul=new Map;class DF extends xR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await VF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VF(t,e){const n=bR(e),r=CR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function r_(t,e){return CR(t)._set(bR(e),"true")}function OF(){ul.clear()}function i_(t,e){ul.set(t._key(),e)}function CR(t){return Xt(t._redirectPersistence)}function bR(t){return Qi(NF,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LF(t,e,n){return MF(t,e,n)}async function MF(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t);Zo(t,e,Tr),await r._initializationPromise;const i=As(r,n);return await r_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function FF(t,e,n){return jF(t,e,n)}async function jF(t,e,n){const r=te(t);if(Zo(r.auth,e,Tr),Me(r.auth.app))return Promise.reject(it(r.auth));await r.auth._initializationPromise;const i=As(r.auth,n);await r_(i,r.auth);const s=await NR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function UF(t,e,n){return BF(t,e,n)}async function BF(t,e,n){const r=te(t);Zo(r.auth,e,Tr),await r.auth._initializationPromise;const i=As(r.auth,n);await Ih(!1,r,e.providerId),await r_(i,r.auth);const s=await NR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function zF(t,e){return await je(t)._initializationPromise,Rh(t,e,!1)}async function Rh(t,e,n=!1){if(Me(t.app))return Promise.reject(it(t));const r=je(t),i=As(r,e),o=await new DF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function NR(t){const e=Iu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F=10*60*1e3;class DR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$F&&this.cachedEventUids.clear(),this.cachedEventUids.has(hE(e))}saveEventToCache(e){this.cachedEventUids.add(hE(e)),this.lastProcessedEventTime=Date.now()}}function hE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GF=/^https?/;async function KF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OR(t);for(const n of e)try{if(HF(n))return}catch{}pt(t,"unauthorized-domain")}function HF(t){const e=Kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GF.test(n))return!1;if(WF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=new yu(3e4,6e4);function fE(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YF(t){return new Promise((e,n)=>{var r,i,s;function o(){fE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fE(),n(Je(t,"network-request-failed"))},timeout:QF.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=uR("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Gy(`${B2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function JF(t){return Mc=Mc||YF(t),Mc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF=new yu(5e3,15e3),ZF="__/auth/iframe",ej="emulator/auth/iframe",tj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rj(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qy(e,ej):`https://${t.config.authDomain}/${ZF}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=nj.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qo(r).slice(1)}`}async function ij(t){const e=await JF(t),n=Ke().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:rj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tj,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},XF.get());function l(){Ke().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oj=500,aj=600,lj="_blank",uj="http://localhost";class pE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cj(t,e,n,r=oj,i=aj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sj),{width:r.toString(),height:i.toString(),top:s,left:o}),c=xe().toLowerCase();n&&(a=rR(c)?lj:n),nR(c)&&(e=e||uj,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(C2(c)&&a!=="_self")return dj(e||"",a),new pE(null);const p=window.open(e||"",a,h);W(p,t,"popup-blocked");try{p.focus()}catch{}return new pE(p)}function dj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hj="__/auth/handler",fj="emulator/auth/handler",pj=encodeURIComponent("fac");async function Im(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof Tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(e instanceof na){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${pj}=${encodeURIComponent(l)}`:"";return`${mj(t)}?${qo(a).slice(1)}${c}`}function mj({config:t}){return t.emulator?qy(t,fj):`https://${t.authDomain}/${hj}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="webStorageSupport";class gj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hs,this._completeRedirectFn=Rh,this._overrideRedirectResult=i_}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Im(e,n,r,Kl(),i);return cj(e,o,Iu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Im(e,n,r,Kl(),i);return XM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ij(e),r=new DR(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bf,{type:Bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bf];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aR()||Wy()||ea()}}const yj=gj;class _j{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Ln("unexpected MultiFactorSessionType")}}}class s_ extends _j{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new s_(e)}_finalizeEnroll(e,n,r){return qM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return lF(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class LR{constructor(){}static assertion(e){return s_._fromCredential(e)}}LR.FACTOR_ID="phone";var mE="@firebase/auth",gE="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ij(t){ii(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lR(t)},c=new M2(r,i,s,l);return W2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new Bn("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new vj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(mE,gE,wj(t)),En(mE,gE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=5*60;TN("authIdTokenMaxAge");function Tj(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}F2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ij("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sj=2e3;async function Aj(t,e,n){var r;const{BuildInfo:i}=ps();An(e.sessionId,"AuthEvent did not contain a session ID");const s=await Cj(e.sessionId),o={};return ea()?o.ibi=i.packageName:_u()?o.apn=i.packageName:pt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Im(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Pj(t){const{BuildInfo:e}=ps(),n={};ea()?n.iosBundleId=e.packageName:_u()?n.androidPackageName=e.packageName:pt(t,"operation-not-supported-in-this-environment"),await OR(t,n)}function Rj(t){const{cordova:e}=ps();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,x2()?"_blank":"_system","location=yes"),n(i)})})}async function kj(t,e,n){const{cordova:r}=ps();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var p;s();const g=(p=r.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Je(t,"redirect-cancelled-by-user"))},Sj))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),_u()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function xj(t){var e,n,r,i,s,o,a,l,c,h;const p=ps();W(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),W(typeof((n=p==null?void 0:p.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),W(typeof((s=(i=(r=p==null?void 0:p.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((l=(a=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((h=(c=p==null?void 0:p.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Cj(t){const e=bj(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function bj(t){if(An(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nj=20;class Dj extends DR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Vj(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Mj(),postBody:null,tenantId:t.tenantId,error:Je(t,"no-auth-event")}}function Oj(t,e){return Em()._set(Tm(t),e)}async function yE(t){const e=await Em()._get(Tm(t));return e&&await Em()._remove(Tm(t)),e}function Lj(t,e){var n,r;const i=jj(e);if(i.includes("/__/auth/callback")){const s=Fc(i),o=s.firebaseError?Fj(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Je(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Mj(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Nj;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Em(){return Xt(Zy)}function Tm(t){return Qi("authEvent",t.config.apiKey,t.name)}function Fj(t){try{return JSON.parse(t)}catch{return null}}function jj(t){const e=Fc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Fc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fc(i).link||i||r||n||t}function Fc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return to(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uj=500;class Bj{constructor(){this._redirectPersistence=hs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Rh,this._overrideRedirectResult=i_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Dj(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){xj(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),OF(),await this._originValidation(e);const o=Vj(e,r,i);await Oj(e,o);const a=await Aj(e,o,n),l=await Rj(a);return kj(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pj(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ps(),o=setTimeout(async()=>{await yE(e),n.onEvent(_E())},Uj),a=async h=>{clearTimeout(o);const p=await yE(e);let g=null;p&&(h!=null&&h.url)&&(g=Lj(p,h.url)),n.onEvent(g||_E())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;ps().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof l=="function")try{l(h)}catch(p){console.error(p)}}}}const zj=Bj;function _E(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $j(t,e){je(t)._logFramework(e)}var qj="@firebase/auth-compat",Wj="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gj=1e3;function cl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Kj(){return cl()==="http:"||cl()==="https:"}function MR(t=xe()){return!!((cl()==="file:"||cl()==="ionic:"||cl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Hj(){return Vg()||Dg()}function Qj(){return iS()&&(document==null?void 0:document.documentMode)===11}function Yj(t=xe()){return/Edge\/\d+/.test(t)}function Jj(t=xe()){return Qj()||Yj(t)}function FR(){try{const t=self.localStorage,e=Iu();if(t)return t.setItem(e,"1"),t.removeItem(e),Jj()?bl():!0}catch{return o_()&&bl()}return!1}function o_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zf(){return(Kj()||rS()||MR())&&!Hj()&&FR()&&!o_()}function jR(){return MR()&&typeof document<"u"}async function Xj(){return jR()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Gj);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function Zj(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={LOCAL:"local",NONE:"none",SESSION:"session"},Va=W,UR="persistence";function eU(t,e){if(Va(Object.values(Yt).includes(e),t,"invalid-persistence-type"),Vg()){Va(e!==Yt.SESSION,t,"unsupported-persistence-type");return}if(Dg()){Va(e===Yt.NONE,t,"unsupported-persistence-type");return}if(o_()){Va(e===Yt.NONE||e===Yt.LOCAL&&bl(),t,"unsupported-persistence-type");return}Va(e===Yt.NONE||FR(),t,"unsupported-persistence-type")}async function Sm(t){await t._initializationPromise;const e=BR(),n=Qi(UR,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function tU(t,e){const n=BR();if(!n)return[];const r=Qi(UR,t,e);switch(n.getItem(r)){case Yt.NONE:return[Fo];case Yt.LOCAL:return[Jl,hs];case Yt.SESSION:return[hs];default:return[]}}function BR(){var t;try{return((t=Zj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU=W;class zr{constructor(){this.browserResolver=Xt(yj),this.cordovaResolver=Xt(zj),this.underlyingResolver=null,this._redirectPersistence=hs,this._completeRedirectFn=Rh,this._overrideRedirectResult=i_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return jR()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Xj();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){return t.unwrap()}function rU(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(t){return $R(t)}function sU(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new oU(t,zM(t,e))}else if(r){const i=$R(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function $R(t){const{_tokenResponse:e}=t instanceof xt?t.customData:t;if(!e)return null;if(!(t instanceof xt)&&"temporaryProof"in e&&"phoneNumber"in e)return fs.credentialFromResult(t);const n=e.providerId;if(!n||n===Da.PASSWORD)return null;let r;switch(n){case Da.GOOGLE:r=bn;break;case Da.FACEBOOK:r=Cn;break;case Da.GITHUB:r=Nn;break;case Da.TWITTER:r=Dn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?jo._create(n,a):qn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new fo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof xt?r.credentialFromError(t):r.credentialFromResult(t)}function Mt(t,e){return e.catch(n=>{throw n instanceof xt&&sU(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:iU(n),additionalUserInfo:BM(n),user:sr.getOrCreate(i)}})}async function Am(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Mt(t,n.confirm(r))}}class oU{constructor(e,n){this.resolver=n,this.auth=rU(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(zR(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._delegate=e,this.multiFactor=GM(e)}static getOrCreate(e){return sr.USER_MAP.has(e)||sr.USER_MAP.set(e,new sr(e)),sr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,yR(this._delegate,e))}async linkWithPhoneNumber(e,n){return Am(this.auth,EF(this._delegate,e,n))}async linkWithPopup(e){return Mt(this.auth,bF(this._delegate,e,zr))}async linkWithRedirect(e){return await Sm(je(this.auth)),UF(this._delegate,e,zr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,_R(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Am(this.auth,TF(this._delegate,e,n))}reauthenticateWithPopup(e){return Mt(this.auth,CF(this._delegate,e,zr))}async reauthenticateWithRedirect(e){return await Sm(je(this.auth)),FF(this._delegate,e,zr)}sendEmailVerification(e){return CM(this._delegate,e)}async unlink(e){return await gM(this._delegate,e),this}updateEmail(e){return VM(this._delegate,e)}updatePassword(e){return OM(this._delegate,e)}updatePhoneNumber(e){return SF(this._delegate,e)}updateProfile(e){return DM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return bM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}sr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=W;class Pm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Oa(r,"invalid-api-key",{appName:e.name}),Oa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?zr:void 0;this._delegate=n.initialize({options:{persistence:aU(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(l2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){G2(this._delegate,e,n)}applyActionCode(e){return IM(this._delegate,e)}checkActionCode(e){return vR(this._delegate,e)}confirmPasswordReset(e,n){return wM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Mt(this._delegate,TM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return xM(this._delegate,e)}isSignInWithEmailLink(e){return PM(this._delegate,e)}async getRedirectResult(){Oa(zf(),this._delegate,"operation-not-supported-in-this-environment");const e=await zF(this._delegate,zr);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){$j(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=vE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=vE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return AM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return vM(this._delegate,e,n||void 0)}async setPersistence(e){eU(this._delegate,e);let n;switch(e){case Yt.SESSION:n=hs;break;case Yt.LOCAL:n=await Xt(Jl)._isAvailable()?Jl:Zy;break;case Yt.NONE:n=Fo;break;default:return pt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,mM(this._delegate))}signInWithCredential(e){return Mt(this._delegate,Eh(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,_M(this._delegate,e))}signInWithEmailAndPassword(e,n){return Mt(this._delegate,SM(this._delegate,e,n))}signInWithEmailLink(e,n){return Mt(this._delegate,RM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Am(this._delegate,IF(this._delegate,e,n))}async signInWithPopup(e){return Oa(zf(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,xF(this._delegate,e,zr))}async signInWithRedirect(e){return Oa(zf(),this._delegate,"operation-not-supported-in-this-environment"),await Sm(this._delegate),LF(this._delegate,e,zr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return EM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pm.Persistence=Yt;function vE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&sr.getOrCreate(o)),error:e,complete:n}}function aU(t,e){const n=tU(t,e);if(typeof self<"u"&&!n.includes(Jl)&&n.push(Jl),typeof window<"u")for(const r of[Zy,hs])n.includes(r)||n.push(r);return n.includes(Fo)||n.push(Fo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.providerId="phone",this._delegate=new fs(zR(ln.auth()))}static credential(e,n){return fs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}a_.PHONE_SIGN_IN_METHOD=fs.PHONE_SIGN_IN_METHOD;a_.PROVIDER_ID=fs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU=W;class uU{constructor(e,n,r=ln.app()){var i;lU((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new vF(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU="auth-compat";function dU(t){t.INTERNAL.registerComponent(new Bn(cU,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Pm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ls.EMAIL_SIGNIN,PASSWORD_RESET:Ls.PASSWORD_RESET,RECOVER_EMAIL:Ls.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ls.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ls.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ls.VERIFY_EMAIL}},EmailAuthProvider:Ti,FacebookAuthProvider:Cn,GithubAuthProvider:Nn,GoogleAuthProvider:bn,OAuthProvider:fo,SAMLAuthProvider:Rd,PhoneAuthProvider:a_,PhoneMultiFactorGenerator:LR,RecaptchaVerifier:uU,TwitterAuthProvider:Dn,Auth:Pm,AuthCredential:ta,Error:xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(qj,Wj)}dU(ln);const qR=ln,WR="4r@admin.com";let hc=null;function GR(){if(hc)return hc;const t=window.FIREBASE_CONFIG;if(!t)throw new Error("firebase-config.js is missing");return hc=ln.apps&&ln.apps.length?ln.app():ln.initializeApp(t),hc}let $f=null;function ra(){return $f||($f=ln.firestore(GR())),$f}let qf=null;function l_(){return qf||(qf=ln.auth(GR())),qf}let Rm="";function km(t){const e=t&&t.code||"",n=t&&t.message||String(t);return e==="permission-denied"||/permission/i.test(n)?"Not allowed by the Firestore rules (update firestore.rules)":e==="unavailable"||/network|offline|fetch/i.test(n)?"You are offline. Please check your internet connection.":/exceed|too large|1 ?MiB|1048576/i.test(n)?"The document went past the 1MB limit":n}function Dt(t){return Rm=km(t),Rm}function Wf(){return Rm}const u_="adminLogins",mo=5,hU=()=>{const t=new Date;return t.setHours(0,0,0,0),t.getTime()};function fU(t){t=t||navigator.userAgent||"";const e=/iPad|Tablet|PlayBook|Silk/i.test(t)?"Tablet":/Mobi|Android|iPhone|iPod|Windows Phone/i.test(t)?"Mobile":"Desktop",n=/Android/i.test(t)?"Android":/iPhone|iPad|iPod/i.test(t)?"iOS":/Windows/i.test(t)?"Windows":/Mac OS X/i.test(t)?"macOS":/Linux/i.test(t)?"Linux":"Other",r=/Edg\//i.test(t)?"Edge":/OPR\/|Opera/i.test(t)?"Opera":/SamsungBrowser/i.test(t)?"Samsung":/Chrome\//i.test(t)?"Chrome":/Firefox\//i.test(t)?"Firefox":/Safari\//i.test(t)?"Safari":"Other";return{device:e,os:n,browser:r}}function xm(t,e){const n=fU(navigator.userAgent||"");return ra().collection(u_).add({email:(e||WR).toLowerCase(),at:Date.now(),result:t,device:n.device,browser:n.browser,os:n.os,userAgent:(navigator.userAgent||"").slice(0,300)}).then(()=>!0).catch(()=>!1)}function pU(){return ra().collection(u_).orderBy("at","desc").limit(80).get().then(t=>{const e=hU();let n=0;return t.forEach(r=>{const i=r.data()||{};i.result==="success"&&Number(i.at)>=e&&n++}),n}).catch(()=>0)}function mU(t){return ra().collection(u_).orderBy("at","desc").limit(t).get().then(e=>{const n=[];return e.forEach(r=>{const i=r.data()||{};n.push({id:r.id,at:Number(i.at)||0,result:i.result||"",email:i.email||"",device:i.device||"",browser:i.browser||"",os:i.os||""})}),n}).catch(()=>[])}function gU(t){return pU().then(e=>e>=mo?xm("blocked").then(()=>t.signOut().then(()=>{const n=new Error("Daily login limit reached ("+mo+" logins per day). Please try again tomorrow.");throw n.code="app/daily-limit",n})):xm("success"))}function wE(t,e){switch(t){case"auth/configuration-not-found":case"auth/operation-not-allowed":return'Login is disabled right now. Open Firebase Console > Authentication > Sign-in method, turn ON "Email/Password" and try again.';case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":case"auth/invalid-login-credentials":return"The email or password is incorrect.";case"auth/email-already-in-use":return"This email is already registered. Please enter your password.";case"auth/invalid-email":return"The email is not valid.";case"auth/weak-password":return"The password must be at least 6 characters long.";case"auth/too-many-requests":return"Too many attempts. Please try again in a little while.";case"auth/network-request-failed":return"You are offline. Please check your internet connection.";case"auth/api-key-not-valid":return"The Firebase API key is not valid (check firebase-config.js)."}return e||"Login failed. Please try again."}function KR(t){try{return t.setPersistence(qR.auth.Auth.Persistence.LOCAL).then(()=>!0).catch(()=>!1)}catch{return Promise.resolve(!1)}}function yU(t,e){const n=l_();return KR(n).then(()=>n.signInWithEmailAndPassword(t,e)).catch(r=>{const i=r&&r.code,s=r&&r.message?" ("+r.message+")":"";if(i==="auth/user-not-found"||i==="auth/invalid-credential"||i==="auth/wrong-password")return n.createUserWithEmailAndPassword(t,e).then(o=>({user:o.user,created:!0})).catch(o=>{throw new Error(wE(o&&o.code,o&&o.message)+(o&&o.code?" ["+o.code+"]":""))});throw xm("failed",t),new Error(wE(i,r&&r.message)+s)}).then(r=>gU(n).then(()=>r))}function _U(){return l_().signOut()}function vU(t){const e=l_();return KR(e),e.onAuthStateChanged(t)}const HR=D.createContext({user:null,ready:!1,error:""});function wU({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(!1),[s,o]=D.useState("");return D.useEffect(()=>{let a=!0,l=()=>{};try{l=vU(c=>{a&&(n(c||null),i(!0))})}catch(c){o(c&&c.message?c.message:String(c)),i(!0)}return()=>{a=!1,l&&l()}},[]),f.jsx(HR.Provider,{value:{user:e,ready:r,error:s},children:t})}function QR(){return D.useContext(HR)}const YR=D.createContext(()=>{});function Tu(){return D.useContext(YR)}function IU({children:t}){const[e,n]=D.useState(""),[r,i]=D.useState(!1),[s,o]=D.useState(!1),a=D.useRef(null),l=D.useCallback((c,h)=>{n(c),i(!!h),o(!0),clearTimeout(a.current),a.current=setTimeout(()=>o(!1),2200)},[]);return f.jsxs(YR.Provider,{value:l,children:[t,f.jsx("div",{className:"adm-toast"+(r?" adm-toast--err":"")+(s?" is-show":""),"aria-live":"polite",children:e})]})}const JR="4rbet_ui",kh={pending:"Pending",previewing:"Previewing",successful:"Successful"},Gf="4R Support";function ji(){try{const t=localStorage.getItem(JR),e=t?JSON.parse(t):{};return{splash:e.splash!==!1,showPassword:e.showPassword===!0}}catch{return{splash:!0,showPassword:!1}}}function IE(t){const e={splash:t.splash!==void 0?!!t.splash:ji().splash,showPassword:t.showPassword!==void 0?!!t.showPassword:ji().showPassword};try{return localStorage.setItem(JR,JSON.stringify(e)),!0}catch{return!1}}function La(){try{let t=0;return["4rbet_complaints","4rbet_telegram","4rbet_ui","4rbet_tg_queue"].forEach(e=>{const n=localStorage.getItem(e);n&&(t+=n.length+e.length)}),(t/1024).toFixed(1)}catch{return"0"}}function dl(t){return kh[t&&t.status]?t.status:"pending"}function EU(t){const e=new Date(t);if(isNaN(e))return!1;const n=new Date;return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate()}function TU(t){return{total:t.length,today:t.filter(e=>EU(e.submittedAt)).length,pending:t.filter(e=>dl(e)==="pending").length,preview:t.filter(e=>dl(e)==="previewing").length,success:t.filter(e=>dl(e)==="successful").length}}function bd(t){return t<10?"0"+t:""+t}function XR(t){const e=new Date(t);if(isNaN(e))return"-";const n=e.getHours(),r=n%12||12;return e.getDate()+"/"+bd(e.getMonth()+1)+"/"+e.getFullYear()+", "+r+":"+bd(e.getMinutes())+" "+(n>=12?"PM":"AM")}function c_(t){const e=new Date(t);if(isNaN(e))return"-";const n=e.getHours(),r=n%12||12;return e.getDate()+"/"+bd(e.getMonth()+1)+"/"+e.getFullYear()+" · "+r+":"+bd(e.getMinutes())+" "+(n>=12?"PM":"AM")}function SU(t){return"Guest #"+String(t||"").slice(0,4).toUpperCase()}function ZR(t){return t&&t.userName?t.userName:SU(t&&t.id)}const AU=[{key:"userName",label:"User Name"},{key:"mobile",label:"Mobile Number"},{key:"email",label:"Email ID"},{key:"password",label:"Game Account Password",secret:!0},{key:"problem",label:"Select Your Problem"},{key:"amount",label:"Amount"},{key:"verifyEmail",label:"Email To Verify"},{key:"docType",label:"Document Type"},{key:"docNo",label:"Document No."},{key:"accountNo",label:"Account Number"},{key:"utr",label:"Transaction / UTR"},{key:"detail",label:"Detail"}],ek="4rbet_complaints",Su=window.FIREBASE_COLLECTION||"complaints";function mr(){try{const t=localStorage.getItem(ek);return t?JSON.parse(t):[]}catch{return[]}}function ms(t){try{return localStorage.setItem(ek,JSON.stringify(t)),!0}catch{return!1}}function PU(t,e){const n=mr();return n.forEach(r=>{r.id===t&&Object.assign(r,e)}),ms(n),n}function RU(t){const e=mr().filter(n=>n.id!==t);return ms(e),e}function Xl(){try{window.dispatchEvent(new CustomEvent("4r-sync"))}catch{}}function ia(){try{return ra()}catch(t){return Dt(t),null}}function kU(){return!!ia()}function Cm(){const t=ia();return t?t.collection(Su).orderBy("submittedAt","desc").get().then(e=>{const n=e.docs.map(r=>{const i=r.data()||{};return i.id=i.id||r.id,i});return ms(n),Xl(),n}).catch(e=>(Dt(e),mr())):Promise.resolve(mr())}function xU(t,e,n){const r=new Date().toISOString();PU(t,{status:e,statusAt:r}),Xl();const i=ia();return i?i.collection(Su).doc(t).update({status:e,statusAt:r}).then(()=>({ok:!0,offline:!1})).catch(s=>(Dt(s),{ok:!1,offline:!0,error:s.message})):Promise.resolve({ok:!1,offline:!0})}function CU(t){RU(t),Xl();const e=ia();return e?e.collection(Su).doc(t).delete().then(()=>({ok:!0,offline:!1})).catch(n=>(Dt(n),{ok:!1,offline:!0,error:n.message})):Promise.resolve({ok:!1,offline:!0})}function bU(){const t=ia();return t?t.collection(Su).get().then(e=>{const n=t.batch();return e.docs.forEach(r=>n.delete(r.ref)),n.commit()}).then(()=>(ms([]),Xl(),{ok:!0,offline:!1})).catch(e=>(Dt(e),{ok:!1,offline:!0,error:e.message})):(ms([]),Xl(),Promise.resolve({ok:!1,offline:!0}))}function NU(t){const e=ia();if(!e)return()=>{};try{return e.collection(Su).orderBy("submittedAt","desc").onSnapshot(n=>{const r=n.docs.map(i=>{const s=i.data()||{};return s.id=s.id||i.id,s});ms(r),t(r,!0)},n=>{Dt(n),t(mr(),!1)})}catch{return()=>{}}}function d_(){const[t,e]=D.useState(mr),[n,r]=D.useState(!1),i=D.useCallback(()=>Cm().then(s=>(e(s),r(!0),s)),[]);return D.useEffect(()=>{let s=!0;const o=NU(c=>{s&&e(c)});i();const a=()=>{s&&e(mr())},l=()=>{i()};return window.addEventListener("4r-sync",a),window.addEventListener("focus",l),()=>{s=!1,o&&o(),window.removeEventListener("4r-sync",a),window.removeEventListener("focus",l)}},[i]),{list:t,ready:n,refresh:i}}const DU=window.FIREBASE_CHAT_COLLECTION||"chats",VU="messages",EE=700*1024,OU=350*1024;function xh(){try{return ra()}catch(t){return Dt(t),null}}function LU(){return!!xh()}function tk(){const t=xh();return t?t.collection(DU):null}function sa(t){const e=tk();return e?e.doc(t):null}function h_(t){const e=sa(t);return e?e.collection(VU):null}function MU(t){const e=sa(t);return e?e.get().then(n=>{if(!n.exists)return{ok:!0,offline:!1,chat:null};const r=n.data()||{};return r.id=r.id||n.id,{ok:!0,offline:!1,chat:r}}).catch(n=>(Dt(n),{ok:!1,offline:!0,chat:null})):Promise.resolve({ok:!1,offline:!0,chat:null})}function FU(t,e){const n=sa(t);return n?n.onSnapshot(r=>{if(!r.exists){e(null,!0);return}const i=r.data()||{};i.id=i.id||r.id,e(i,!0)},r=>{Dt(r),e(null,!1)}):(e(null,!1),()=>{})}function nk(t){const e=tk();return e?e.orderBy("updatedAt","desc").limit(200).onSnapshot(n=>{const r=n.docs.map(i=>{const s=i.data()||{};return s.id=s.id||i.id,s});t(r,!0)},n=>{Dt(n),t([],!1)}):(t([],!1),()=>{})}function jU(t,e){const n=h_(t);return n?n.orderBy("at","asc").limit(500).onSnapshot(r=>{const i=r.docs.map(s=>{const o=s.data()||{};return o.id=s.id,o});e(i,!0)},r=>{Dt(r),e([],!1)}):(e([],!1),()=>{})}function UU(t){return t.text?String(t.text).slice(0,90):t.image?"Photo":t.fileName?"File: "+t.fileName:""}function BU(t,e){const n=xh(),r=sa(t),i=h_(t);if(!n||!r||!i)return Promise.resolve({ok:!1,offline:!0});const s=e.who==="admin"?"admin":"user",o=new Date().toISOString(),a={who:s,text:String(e.text||"").slice(0,4e3),at:o,name:e.name||(s==="admin"?"4R Support":"")};e.image&&(a.image=e.image),e.fileName&&(a.fileName=String(e.fileName).slice(0,120)),e.fileData&&(a.fileData=e.fileData);const l={id:t,updatedAt:o,lastText:UU(a),lastWho:s};try{const h=qR.firestore.FieldValue.increment(1);s==="user"?l.unreadAdmin=h:l.unreadUser=h}catch{s==="user"?l.unreadAdmin=1:l.unreadUser=1}const c=n.batch();return c.set(i.doc(),a),c.set(r,l,{merge:!0}),c.commit().then(()=>({ok:!0,offline:!1})).catch(h=>(Dt(h),{ok:!1,offline:!0,error:h.message}))}function zU(t,e){const n=sa(t);if(!n)return Promise.resolve(!1);const r={};return r.unreadAdmin=0,n.set(r,{merge:!0}).then(()=>!0).catch(()=>!1)}function $U(t){const e=xh(),n=sa(t),r=h_(t);return!e||!n||!r?Promise.resolve({ok:!1,offline:!0}):r.limit(400).get().then(i=>{const s=e.batch();return i.docs.forEach(o=>s.delete(o.ref)),s.delete(n),s.commit()}).then(()=>({ok:!0})).catch(i=>(Dt(i),{ok:!1,error:i.message}))}function qU(t){return new Promise((e,n)=>{if(!t||!/^image\//.test(t.type||"")){n(new Error("Please choose an image file only."));return}const r=new FileReader;r.onerror=()=>n(new Error("The file could not be read.")),r.onload=()=>{const i=String(r.result||""),s=new Image;s.onerror=()=>e({dataUrl:i,name:t.name}),s.onload=()=>{const a=Math.min(1,1e3/Math.max(s.width,s.height)),l=Math.max(1,Math.round(s.width*a)),c=Math.max(1,Math.round(s.height*a)),h=document.createElement("canvas");h.width=l,h.height=c,h.getContext("2d").drawImage(s,0,0,l,c);let p=i;try{p=h.toDataURL("image/jpeg",.72)}catch{p=i}if(p.length>EE)try{p=h.toDataURL("image/jpeg",.5)}catch{}if(p.length>EE){n(new Error("The image is too large, please choose a smaller one."));return}e({dataUrl:p,name:t.name})},s.src=i},r.readAsDataURL(t)})}function WU(t){return new Promise((e,n)=>{if(!t){n(new Error("Please choose a file."));return}if(t.size>OU){n(new Error("The file is larger than 350KB. Please send a smaller file."));return}const r=new FileReader;r.onerror=()=>n(new Error("The file could not be read.")),r.onload=()=>{e({dataUrl:String(r.result||""),name:t.name})},r.readAsDataURL(t)})}const bm=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M22 12h-6l-2 3h-4l-2-3H2"}),f.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"})]}),GU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 2v10l3 2"}),f.jsx("circle",{cx:"12",cy:"12",r:"9.5"})]}),TE=t=>f.jsx("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.2a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.5-8.4 8.4 8.4 0 0 1 8.5 7.9Z"})}),KU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),f.jsx("path",{d:"M13.7 21a2 2 0 0 1-3.4 0"})]}),rk=t=>f.jsx("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M9 18l6-6-6-6"})}),f_=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M19 12H5"}),f.jsx("path",{d:"m12 19-7-7 7-7"})]}),ik=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),HU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"4",y:"10.5",width:"16",height:"10.5",rx:"2"}),f.jsx("path",{d:"M8 10.5V7a4 4 0 0 1 8 0v3.5"})]}),QU=t=>f.jsx("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M20 6 9 17l-5-5"})}),YU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||26,height:t.size||26,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 9v4"}),f.jsx("path",{d:"M12 17h.01"}),f.jsx("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"})]}),p_=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("path",{d:"M7 10l5 5 5-5"}),f.jsx("path",{d:"M12 15V3"})]}),sk=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",children:[f.jsx("path",{d:"M18 6 6 18"}),f.jsx("path",{d:"m6 6 12 12"})]}),JU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M3 6h18"}),f.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),f.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),f.jsx("path",{d:"M10 11v6"}),f.jsx("path",{d:"M14 11v6"})]}),XU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),f.jsx("circle",{cx:"8.5",cy:"9.5",r:"1.6"}),f.jsx("path",{d:"M21 16l-5-5-6.5 6.5"})]}),SE=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z"}),f.jsx("path",{d:"M14 2.5V7a.5.5 0 0 0 .5.5H19"})]}),ZU=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||20,height:t.size||20,fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 5v14"}),f.jsx("path",{d:"m19 12-7 7-7-7"})]}),e4=t=>f.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2.5"}),f.jsx("path",{d:"M11 18h2"})]}),AE="./";function t4(){return f.jsxs("div",{className:"adm-desktop-note",children:[f.jsx(e4,{}),"The admin panel is designed for mobile — open it on your phone for the best experience."]})}function n4(){return f.jsx("footer",{className:"site-footer",children:f.jsxs("p",{children:["© ",new Date().getFullYear()," 4R BET — All Rights Reserved"]})})}function r4({simple:t}){const[e,n]=D.useState(!1),[r,i]=D.useState(0),s=D.useRef(null),o=yi(),a=_r(),l=o.pathname;D.useEffect(()=>{const g=nk(v=>{let S=0;v.forEach(k=>{S+=Number(k.unreadAdmin||0)}),i(S)});return()=>g&&g()},[]),D.useEffect(()=>{if(!e)return;const g=S=>{s.current&&!s.current.contains(S.target)&&n(!1)},v=S=>{S.key==="Escape"&&n(!1)};return document.addEventListener("click",g),document.addEventListener("keydown",v),()=>{document.removeEventListener("click",g),document.removeEventListener("keydown",v)}},[e]),D.useEffect(()=>{n(!1)},[l]),D.useEffect(()=>(document.body.classList.toggle("is-menu-open",e),()=>document.body.classList.remove("is-menu-open")),[e]);const c=()=>n(!1),h=g=>g==="/"?l==="/":l===g||l.startsWith(g+"/"),p=async g=>{if(g.preventDefault(),n(!1),!!window.confirm("Log out of the admin panel?")){try{await _U()}catch{}a("/login",{replace:!0})}};return f.jsxs("header",{className:"site-header",children:[f.jsx("div",{className:"menu-backdrop"+(e?" is-open":""),"aria-hidden":"true",onClick:c}),f.jsxs("div",{className:"header-inner adm-header",children:[f.jsxs("div",{className:"menu-wrap",ref:s,children:[f.jsxs("button",{type:"button",className:"menu-btn"+(e?" is-open":""),"aria-label":"Open menu","aria-expanded":e,"aria-controls":"menuDrop",onClick:g=>{g.stopPropagation(),n(v=>!v)},children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsxs("nav",{className:"menu-drop"+(e?" is-open":""),id:"menuDrop","aria-label":"Admin menu",children:[f.jsxs("div",{className:"menu-head",children:[f.jsx("img",{className:"menu-logo",src:AE+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"}),f.jsx("button",{type:"button",className:"menu-close","aria-label":"Close menu",onClick:c,children:"×"})]}),f.jsx("div",{className:"menu-list",children:t?f.jsx("a",{className:"menu-item",href:"../index.html",children:"User Panel"}):f.jsxs(f.Fragment,{children:[f.jsx(Zn,{className:"menu-item"+(h("/")?" is-active":""),to:"/",onClick:c,children:"Home"}),f.jsxs(Zn,{className:"menu-item"+(h("/chats")?" is-active":""),to:"/chats",onClick:c,children:["Chats",r>0&&f.jsx("span",{className:"menu-badge",children:r>99?"99+":r})]}),f.jsx(Zn,{className:"menu-item"+(h("/visitors")?" is-active":""),to:"/visitors",onClick:c,children:"Visitors"}),f.jsx(Zn,{className:"menu-item"+(h("/settings")?" is-active":""),to:"/settings",onClick:c,children:"Settings"}),f.jsx("a",{className:"menu-item",href:"../index.html",children:"User Panel"}),f.jsx("a",{className:"menu-item",href:"#","data-install":!0,style:{display:"none"},children:"Install App"}),f.jsx("a",{className:"menu-item",href:"#",onClick:p,children:"Logout"})]})}),f.jsxs("div",{className:"menu-foot",children:[f.jsx("strong",{children:"4R BET Admin Panel"}),f.jsx("br",{}),"Complaints, live chat and settings in one place."]})]})]}),f.jsx(Zn,{className:"logo",to:t?"/login":"/",children:f.jsx("img",{className:"logo-img adm-logo",src:AE+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"})})]})]})}function Ps({children:t,simple:e,footer:n=!0}){return f.jsxs(f.Fragment,{children:[f.jsx(t4,{}),f.jsx(r4,{simple:e}),t,n&&f.jsx(n4,{})]})}const i4="./",s4=i4+"USER-ICON/2288510.png";function Ch({className:t="adm-ava"}){const[e,n]=D.useState(!1);return f.jsx("span",{className:t,children:e?f.jsx("span",{className:"adm-ava-fb",children:f.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}):f.jsx("img",{src:s4,alt:"",onError:()=>n(!0)})})}function o4(){const{list:t}=d_(),e=_r(),n=TU(t);return f.jsx(Ps,{children:f.jsxs("main",{className:"adm",children:[f.jsxs("div",{className:"adm-head",children:[f.jsx("h1",{children:"Admin Home"}),f.jsx("p",{children:"See every complaint here and update its status."})]}),f.jsxs("section",{className:"adm-stats",children:[f.jsxs("div",{className:"adm-stat",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(bm,{})}),f.jsx("b",{children:n.total}),f.jsx("small",{children:"Total Complaints"})]}),f.jsxs("div",{className:"adm-stat adm-stat--today",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(GU,{})}),f.jsx("b",{children:n.today}),f.jsx("small",{children:"Today Complaints"})]})]}),f.jsxs("section",{className:"adm-box",children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"All Complain"}),f.jsx("span",{children:n.total})]}),f.jsx("div",{className:"adm-box-body",children:t.length?t.map(r=>{const i=dl(r),s=r.data||{};return f.jsxs("button",{type:"button",className:"adm-card",onClick:()=>e("/complaint/"+encodeURIComponent(r.id)),children:[f.jsx(Ch,{}),f.jsxs("span",{className:"adm-cmid",children:[f.jsx("span",{className:"adm-cname",children:s.userName||"Unknown User"}),f.jsx("span",{className:"adm-cat",children:r.category||"Complaint"}),f.jsx("span",{className:"adm-cwhen",children:c_(r.submittedAt)})]}),f.jsxs("span",{className:"adm-cright",children:[f.jsx("span",{className:"adm-status adm-status--"+i,children:kh[i]}),f.jsx("span",{className:"adm-chev",children:f.jsx(rk,{})})]})]},r.id)}):f.jsxs("div",{className:"adm-empty",children:[f.jsx("div",{className:"adm-empty-ico",children:f.jsx(bm,{size:26})}),f.jsx("h3",{children:"No complaints yet"}),f.jsx("p",{children:"Complaints submitted by users will appear here."}),f.jsx("a",{className:"btn",href:"../index.html",children:"Open User Panel"})]})})]})]})})}const a4="./";function l4(){const{user:t}=QR(),e=_r(),n=Tu(),[r]=pN(),i=r.get("next")||"/",s=i.startsWith("/")?i:"/",[o,a]=D.useState(WR),[l,c]=D.useState(""),[h,p]=D.useState(!1),[g,v]=D.useState(r.get("err")==="sdk"?"Firebase did not load. Please check your internet.":""),[S,k]=D.useState(!1),[C,E]=D.useState(""),[w,T]=D.useState(!1);D.useEffect(()=>{t&&e(s,{replace:!0})},[t,s,e]),D.useEffect(()=>{const j=window.FourRPwa;if(!j)return;j.init();const F=()=>T(!0);window.addEventListener("beforeinstallprompt",F);const I=setTimeout(()=>{j.installed()||(j.canInstall()?E("Tap the button above to install the app."):j.isIOS()?E("On iPhone: Share → Add to Home Screen."):location.protocol!=="file:"&&E("Or use the Chrome menu (3 dots) → Install app."))},2e3);return()=>{clearTimeout(I),window.removeEventListener("beforeinstallprompt",F)}},[]);const O=j=>{j.preventDefault(),v("");const F=o.trim();if(!F){v("Email daalein.");return}if(!l){v("Password daalein.");return}if(l.length<6){v("Password must be at least 6 characters.");return}k(!0),yU(F,l).then(()=>{n("Login Successful"),setTimeout(()=>e(s,{replace:!0}),400)}).catch(I=>{k(!1),v(I&&I.message?I.message:"Login failed.")})};return f.jsx(Ps,{simple:!0,children:f.jsxs("main",{className:"adm-login",children:[f.jsx("img",{className:"adm-login-logo",src:a4+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"}),f.jsxs("h1",{children:["4R",f.jsx("small",{children:"ADMIN"})]}),f.jsx("p",{className:"sub",children:"Sign in to the panel"}),f.jsxs("div",{className:"panel",children:[f.jsx("h2",{className:"panel-title",children:"Admin Login"}),f.jsxs("form",{className:"form",onSubmit:O,noValidate:!0,children:[f.jsx("div",{className:"adm-err"+(g?" is-show":""),children:g}),f.jsxs("label",{className:"field",children:[f.jsx("span",{className:"label",children:"Email ID"}),f.jsx("input",{type:"email",placeholder:"4r@admin.com",autoComplete:"username",value:o,onChange:j=>{a(j.target.value),v("")}})]}),f.jsxs("label",{className:"field",children:[f.jsx("span",{className:"label",children:"Password"}),f.jsxs("span",{className:"pwd-wrap",children:[f.jsx("input",{type:h?"text":"password",placeholder:"Enter your password",autoComplete:"current-password",value:l,onChange:j=>{c(j.target.value),v("")}}),f.jsx("button",{type:"button",className:"pwd-eye","aria-label":h?"Hide password":"Show password",onClick:()=>p(j=>!j),children:f.jsx(ik,{size:19})})]})]}),f.jsx("button",{type:"submit",className:"btn btn--block"+(S?" is-loading":""),disabled:S,children:f.jsx("span",{className:"btn-text",children:"Login"})})]})]}),f.jsx("p",{className:"adm-login-foot",children:"Only the admin email can sign in."}),f.jsxs("p",{className:"adm-login-foot",children:["For security this panel allows ",f.jsxs("b",{children:[mo," logins per day"]}),"."]}),f.jsxs("button",{type:"button",className:"btn btn--block",style:{display:w?"flex":"none",maxWidth:400},onClick:()=>{const j=window.FourRPwa;j&&j.promptInstall()},children:[f.jsx(p_,{}),"Install App on Phone"]}),C&&f.jsx("p",{className:"adm-login-foot",style:{maxWidth:400},children:C})]})})}const u4=[{key:"pending",label:"Pending"},{key:"previewing",label:"Previewing"},{key:"successful",label:"Successful"}];function c4({open:t,current:e,onClose:n,onUpdate:r}){const[i,s]=D.useState(e||null);return D.useEffect(()=>{t&&s(e||null)},[t,e]),D.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&n()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,n]),t?f.jsx("div",{className:"adm-pop is-open",onClick:o=>{o.target===o.currentTarget&&n()},children:f.jsxs("div",{className:"adm-pop-box",role:"dialog","aria-modal":"true",children:[f.jsxs("div",{className:"adm-pop-head",children:[f.jsx("h3",{children:"Update Status"}),f.jsx("p",{children:"Choose a status, then press Update."})]}),f.jsxs("div",{className:"adm-pop-body",children:[u4.map(o=>f.jsxs("button",{type:"button",className:"adm-opt adm-opt--"+o.key+(i===o.key?" is-on":""),onClick:()=>s(o.key),children:[f.jsx("i",{}),kh[o.key]]},o.key)),f.jsx("button",{type:"button",className:"btn btn--block",disabled:!i,style:{opacity:i?1:.45},onClick:()=>{i&&(n(),r(i))},children:"Update"}),f.jsx("button",{type:"button",className:"adm-pop-close",onClick:n,children:"Cancel"})]})]})}):null}function d4({image:t,onClose:e}){if(D.useEffect(()=>{if(!t)return;const r=i=>{i.key==="Escape"&&e()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,e]),!t)return null;const n=()=>{let r=(t.name||"image").replace(/[^\w.\- ]+/g,"_");/\.[a-z0-9]{2,4}$/i.test(r)||(r+=".jpg");const i=document.createElement("a");i.href=t.src,i.download=r,document.body.appendChild(i),i.click(),i.remove()};return f.jsxs("div",{className:"adm-viewer is-open",role:"dialog","aria-modal":"true",children:[f.jsx("div",{className:"adm-viewer-img-wrap",children:f.jsx("img",{alt:"Complaint image",src:t.src})}),f.jsx("p",{className:"adm-viewer-name",children:t.name||""}),f.jsxs("div",{className:"adm-viewer-acts",children:[f.jsxs("button",{type:"button",className:"adm-vact adm-vact--close",onClick:e,children:[f.jsx(sk,{}),"Close"]}),f.jsxs("button",{type:"button",className:"adm-vact adm-vact--down",onClick:n,children:[f.jsx(p_,{}),"Download"]})]})]})}function h4(){const{id:t}=G0(),e=_r(),n=Tu(),{list:r,ready:i}=d_(),[s,o]=D.useState(null),[a,l]=D.useState(!1),[c,h]=D.useState(!1),[p,g]=D.useState(null),v=r.find(F=>F.id===t)||null;D.useEffect(()=>{v&&o(v)},[v]);const S=!s&&!i,k=!s&&i,C=(s&&s.images||[]).filter(F=>F&&F.dataUrl),E=s&&s.data||{},w=dl(s),T=C.length>=2,O=F=>{xU(s.id,F).then(I=>{I.ok?(o(_=>_&&{..._,status:F,statusAt:new Date().toISOString()}),n("Update Successful")):n("Update failed — "+(I.error||"storage is full"),!0)})},j=()=>{window.confirm("Delete this complaint permanently?")&&CU(s.id).then(F=>{F.ok?e("/",{replace:!0}):n("Delete failed — "+(F.error||"storage is full"),!0)})};return f.jsxs(Ps,{children:[f.jsxs("main",{className:"adm",children:[f.jsx("div",{className:"adm-top",children:f.jsxs(Zn,{className:"adm-back",to:"/",children:[f.jsx(f_,{}),"Home"]})}),(S||k)&&f.jsx("div",{className:"adm-box",children:f.jsxs("div",{className:"adm-empty",style:{padding:"44px 20px"},children:[f.jsx("div",{className:"adm-empty-ico",children:k?f.jsx(YU,{size:26}):f.jsx(bm,{size:26})}),f.jsx("h3",{children:k?"Complaint not found":"Loading complaint..."}),f.jsx("p",{children:k?"Ye complaint delete ho chuki hai ya link galat hai.":"Cloud se data aa raha hai."}),k&&f.jsx(Zn,{className:"btn",to:"/",children:"Back to Home"})]})}),s&&f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"adm-detail-head",children:[f.jsx(Ch,{className:"adm-ava adm-detail-ava"}),f.jsxs("div",{className:"adm-detail-who",children:[f.jsx("h1",{children:E.userName||"Unknown User"}),f.jsxs("p",{children:[XR(s.submittedAt)," · ",s.id||""]})]}),f.jsx("span",{className:"adm-status adm-status--"+w,children:kh[w]})]}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Status"}),f.jsx("span",{children:"Also visible in the user panel"})]}),f.jsx("div",{className:"adm-statusbtn-wrap",children:f.jsxs("button",{type:"button",className:"btn adm-status-btn",onClick:()=>h(!0),children:[f.jsx(QU,{}),"Status Update"]})})]}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Complaint Details"}),f.jsx("span",{children:s.category||"Complaint"})]}),f.jsx("div",{className:"adm-rows",children:AU.map(F=>{const I=E[F.key];return I==null||String(I).trim()===""?null:F.secret?f.jsxs("div",{className:"adm-row",children:[f.jsx("span",{className:"adm-row-k",children:F.label}),f.jsx("span",{className:"adm-row-v is-secret",children:a?String(I):"•".repeat(String(I).length)})]},F.key):f.jsxs("div",{className:"adm-row",children:[f.jsx("span",{className:"adm-row-k",children:F.label}),f.jsx("span",{className:"adm-row-v"+(F.key==="detail"?" is-plain":""),children:String(I)})]},F.key)})}),f.jsx("div",{className:"adm-acts",children:!E.password&&!C.length?f.jsx("p",{className:"adm-none",children:"This complaint has no password or image."}):f.jsxs(f.Fragment,{children:[E.password&&f.jsxs("button",{type:"button",className:"adm-act adm-act--soft",onClick:()=>l(F=>!F),children:[!T&&f.jsx(HU,{}),f.jsx("span",{children:T?a?"Hide":"Password":a?"Hide Password":"Show Password"})]}),C.map((F,I)=>f.jsxs("button",{type:"button",className:"adm-act",onClick:()=>g({src:F.dataUrl,name:F.name}),children:[f.jsx(ik,{}),"Image ",I+1]},I))]})})]}),f.jsxs("section",{className:"adm-box adm-danger",children:[f.jsx("div",{className:"adm-note",children:"Deleting a complaint also removes it from the user's Mailbox."}),f.jsx("div",{className:"adm-form",children:f.jsx("button",{type:"button",className:"btn btn--block",onClick:j,children:"Delete This Complaint"})})]})]})]}),f.jsx(c4,{open:c,current:w,onClose:()=>h(!1),onUpdate:O}),f.jsx(d4,{image:p,onClose:()=>g(null)})]})}function f4(){const[t,e]=D.useState([]),n=_r();D.useEffect(()=>{const i=nk(s=>e(s));return()=>i&&i()},[]);let r=0;return t.forEach(i=>{r+=Number(i.unreadAdmin||0)}),D.useEffect(()=>(document.title=(r?"("+r+") ":"")+"Chats — 4R-ADMIN",()=>{document.title="4R-ADMIN"}),[r]),f.jsx(Ps,{children:f.jsxs("main",{className:"adm",children:[f.jsxs("div",{className:"adm-head",children:[f.jsx("h1",{children:"Chats"}),f.jsx("p",{children:"Tap the user you want to talk to."})]}),f.jsxs("section",{className:"adm-stats",children:[f.jsxs("div",{className:"adm-stat",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(TE,{})}),f.jsx("b",{children:t.length}),f.jsx("small",{children:"Total Chats"})]}),f.jsxs("div",{className:"adm-stat adm-stat--today",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(KU,{})}),f.jsx("b",{children:r}),f.jsx("small",{children:"Unread"})]})]}),f.jsxs("section",{className:"adm-box",children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Users"}),f.jsx("span",{children:t.length})]}),f.jsx("div",{className:"adm-box-body",children:t.length?t.map(i=>{const s=Number(i.unreadAdmin||0),o=i.lastText||"No messages yet",a=i.lastWho==="admin"?"You: ":"";return f.jsxs("button",{type:"button",className:"adm-card adm-chat",onClick:()=>n("/chats/"+encodeURIComponent(i.id)),children:[f.jsx(Ch,{}),f.jsxs("span",{className:"adm-cmid",children:[f.jsx("span",{className:"adm-cname",children:ZR(i)}),f.jsx("span",{className:"adm-chat-last",children:a+o}),f.jsx("span",{className:"adm-cwhen",children:c_(i.updatedAt||i.createdAt)})]}),f.jsxs("span",{className:"adm-cright",children:[s>0&&f.jsx("span",{className:"adm-unread",children:s>99?"99+":s}),f.jsx("span",{className:"adm-chev",children:f.jsx(rk,{})})]})]},i.id)}):f.jsxs("div",{className:"adm-empty",children:[f.jsx("div",{className:"adm-empty-ico",children:f.jsx(TE,{size:26})}),f.jsx("h3",{children:"No chats yet"}),f.jsx("p",{children:"When a user sends a message from the Online Chat page it appears here."}),f.jsx("a",{className:"btn",href:"../online-chat.html",children:"Open User Chat"})]})})]})]})})}function p4(){const{id:t}=G0(),e=_r(),n=Tu(),[r,i]=D.useState(null),[s,o]=D.useState([]),[a,l]=D.useState(""),[c,h]=D.useState(!1),[p,g]=D.useState(!1),[v,S]=D.useState(null),[k,C]=D.useState(!1),E=D.useRef(null),w=D.useRef(!0),T=D.useRef(!0),O=D.useRef(null),j=D.useRef(null);D.useEffect(()=>(document.body.classList.add("adm-room-page"),()=>document.body.classList.remove("adm-room-page")),[]),D.useEffect(()=>{let B=!0;MU(t).then(X=>{B&&X.chat&&i(X.chat)});const U=FU(t,X=>{!B||!X||(i(X),Number(X.unreadAdmin||0)>0&&zU(t))}),Q=jU(t,(X,le)=>{B&&(g(!le),le&&o(X))});return()=>{B=!1,U&&U(),Q&&Q()}},[t]);const F=()=>{const B=E.current;return B?B.scrollHeight-B.scrollTop-B.clientHeight<90:!0},I=B=>{const U=E.current;if(U)try{U.scrollTo({top:U.scrollHeight,behavior:B?"smooth":"auto"})}catch{U.scrollTop=U.scrollHeight}},_=()=>{const B=F();w.current=B,C(!B)};D.useEffect(()=>{s.length&&w.current&&(I(!T.current),T.current=!1)},[s]),D.useEffect(()=>{if(!window.visualViewport)return;const B=()=>{setTimeout(()=>{w.current&&I(!1)},80)};return window.visualViewport.addEventListener("resize",B),()=>window.visualViewport.removeEventListener("resize",B)},[]);const A=B=>(h(!0),BU(t,B).then(U=>(h(!1),U.ok||n(U.error||"Message was not sent",!0),U))),P=B=>{B.preventDefault();const U=a.trim();if(U){if(!LU()){n("You are offline. Please check your internet connection.");return}l(""),A({who:"admin",text:U,name:Gf})}},x=B=>{const U=B.target.files&&B.target.files[0];B.target.value="",U&&qU(U).then(Q=>A({who:"admin",image:Q.dataUrl,fileName:Q.name,name:Gf})).catch(Q=>n(Q.message||"Image was not sent"))},b=B=>{const U=B.target.files&&B.target.files[0];B.target.value="",U&&WU(U).then(Q=>A({who:"admin",fileName:Q.name,fileData:Q.dataUrl,name:Gf})).catch(Q=>n(Q.message||"File was not sent"))},R=()=>{window.confirm("Delete this user's entire chat?")&&$U(t).then(B=>{B.ok?e("/chats",{replace:!0}):n(B.error||"Could not delete the chat")})},at=B=>{S({m:B,time:XR(B.at)})},Gt=r?ZR(r):"Loading...",Pn=r?"Chat ID: "+String(r.id||t).slice(0,6).toUpperCase()+" · "+c_(r.updatedAt||r.createdAt):p?"Offline — check your internet":"Chat khul rahi hai";return f.jsx(Ps,{footer:!1,children:f.jsxs("main",{className:"adm-room",children:[f.jsxs("div",{className:"adm-room-bar",children:[f.jsx(Zn,{className:"adm-back adm-back--ico",to:"/chats","aria-label":"Back to chats",children:f.jsx(f_,{})}),f.jsx(Ch,{className:"adm-ava adm-ava--sm"}),f.jsxs("div",{className:"adm-room-who",children:[f.jsx("strong",{children:Gt}),f.jsx("small",{children:Pn})]}),f.jsx("button",{type:"button",className:"adm-room-del",title:"Delete chat","aria-label":"Delete chat",onClick:R,children:f.jsx(JU,{})})]}),f.jsx("div",{className:"chat-messages adm-room-msgs",ref:E,onScroll:_,children:s.length?s.map(B=>{const U=B.who==="admin";return f.jsxs("div",{className:"msg "+(U?"msg--user":"msg--agent")+(B.image||B.fileName?" msg--file":""),role:"button",tabIndex:0,onClick:()=>at(B),onKeyDown:Q=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),at(B))},children:[f.jsx("span",{className:"msg-name",children:U?"You (Support)":Gt}),B.image?f.jsxs(f.Fragment,{children:[f.jsx("img",{className:"msg-image",src:B.image,alt:B.fileName||"image"}),f.jsx("span",{className:"msg-file-cap",children:B.fileName||"Photo"})]}):B.fileName?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"msg-file-ico",children:f.jsx(SE,{size:20})}),B.fileData?f.jsx("a",{className:"msg-file-name",href:B.fileData,download:B.fileName,onClick:Q=>Q.stopPropagation(),children:B.fileName}):f.jsx("span",{className:"msg-file-name",children:B.fileName})]}):f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"msg-text",children:B.text||""}),B.editedAt&&f.jsx("span",{className:"msg-edited",children:"edited"})]})]},B.id)}):f.jsxs("div",{className:"adm-room-empty",children:[f.jsx("p",{children:"No messages yet."}),f.jsx("small",{children:"Send a reply from below."})]})}),f.jsx("button",{type:"button",className:"chat-latest"+(k?" is-show":""),"aria-label":"Latest messages",onClick:()=>{I(!0),w.current=!0,C(!1)},children:f.jsx(ZU,{})}),f.jsxs("div",{className:"chat-actions",children:[f.jsxs("button",{type:"button",className:"chat-act",title:"Send image",onClick:()=>O.current&&O.current.click(),children:[f.jsx(XU,{}),f.jsx("span",{children:"Image"})]}),f.jsxs("button",{type:"button",className:"chat-act",title:"Send file or PDF",onClick:()=>j.current&&j.current.click(),children:[f.jsx(SE,{}),f.jsx("span",{children:"File / PDF"})]}),f.jsx("input",{ref:O,type:"file",accept:"image/*",hidden:!0,onChange:x}),f.jsx("input",{ref:j,type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.txt,.zip",hidden:!0,onChange:b})]}),f.jsxs("form",{className:"chat-input",onSubmit:P,children:[f.jsx("input",{type:"text",placeholder:"Type your reply...",autoComplete:"off",value:a,onChange:B=>l(B.target.value)}),f.jsx("button",{type:"submit",className:"btn btn--send",disabled:c,children:"Send"})]}),v&&f.jsx("div",{className:"modal-backdrop is-open",onClick:B=>{B.target===B.currentTarget&&S(null)},children:f.jsxs("div",{className:"modal chat-popup",children:[f.jsx("button",{type:"button",className:"popup-x","aria-label":"Close",onClick:()=>S(null),children:f.jsx(sk,{})}),f.jsx("h3",{className:"modal-title chat-popup-title",children:v.m.who==="admin"?"Your Message":Gt}),f.jsxs("p",{className:"chat-popup-when",children:[f.jsx("strong",{children:"Sent:"})," ",v.time]}),f.jsx("div",{className:"chat-popup-body",children:v.m.image?f.jsxs(f.Fragment,{children:[f.jsx("img",{className:"popup-img",src:v.m.image,alt:v.m.fileName||"image"}),f.jsx("p",{className:"popup-file-name",children:v.m.fileName||""})]}):f.jsx("p",{className:"popup-text",children:v.m.text||v.m.fileName||""})}),f.jsx("button",{type:"button",className:"btn btn--block popup-close",onClick:()=>S(null),children:"Close"})]})})]})})}const m4="visitors",g4=300,fc=t=>t<10?"0"+t:""+t;function Nm(t){if(!t)return"-";const e=new Date(Number(t));if(isNaN(e.getTime()))return"-";const n=new Date,r=fc(e.getHours())+":"+fc(e.getMinutes());return e.toDateString()===n.toDateString()?"Today "+r:fc(e.getDate())+"/"+fc(e.getMonth()+1)+"/"+e.getFullYear()+" "+r}function y4(){const t=new Date;return t.setHours(0,0,0,0),t.getTime()}function _4(t){const e=String(t||"");return e.length>12?e.slice(0,12)+"...":e}function v4(t){const e=t.data()||{};return{id:t.id,vid:e.vid||t.id,name:e.name||"",firstSeen:Number(e.firstSeen)||0,lastSeen:Number(e.lastSeen)||0,visits:Number(e.visits)||0,pages:Array.isArray(e.pages)?e.pages:[],device:e.device||"",browser:e.browser||"",os:e.os||"",complained:!!e.complained,complaints:Number(e.complaints)||0,lastPage:e.lastPage||""}}function w4(t,e){let n=()=>{};try{n=ra().collection(m4).orderBy("lastSeen","desc").limit(g4).onSnapshot(r=>{const i=[];r.forEach(s=>i.push(v4(s))),t(i)},r=>{Dt(r),e&&e(km(r))})}catch(r){Dt(r),e&&e(km(r))}return()=>n&&n()}function I4(t){const e=y4(),n={total:0,today:0,complained:0,visitOnly:0,visits:0,complaints:0};return(t||[]).forEach(r=>{n.total++,n.visits+=r.visits,n.complaints+=r.complaints||0,r.lastSeen>=e&&n.today++,r.complained?n.complained++:n.visitOnly++}),n}function E4(t){const n=[["Visitor ID","Name","Device","Browser","OS","Visits","Pages","Complained","Complaints","First Seen","Last Seen"].join(",")];(t||[]).forEach(o=>{n.push([o.vid,o.name,o.device,o.browser,o.os,o.visits,o.pages.join(" | "),o.complained?"Yes":"No",o.complaints,o.firstSeen?new Date(o.firstSeen).toISOString():"",o.lastSeen?new Date(o.lastSeen).toISOString():""].map(a=>'"'+String(a??"").replace(/"/g,'""')+'"').join(","))});const r=new Blob([n.join(`
`)],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download="4rbet-visitors-"+new Date().toISOString().slice(0,10)+".csv",document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function T4({result:t}){return t==="success"?f.jsx("span",{className:"adm-log-tag is-ok",children:"Success"}):t==="blocked"?f.jsx("span",{className:"adm-log-tag is-warn",children:"Limit hit"}):f.jsx("span",{className:"adm-log-tag is-bad",children:"Failed"})}function S4(){const[t,e]=D.useState([]),[n,r]=D.useState(!0);D.useEffect(()=>{let a=!0;return mU(12).then(l=>{a&&(e(l),r(!1))}),()=>{a=!1}},[]);const i=new Date().toDateString(),s=t.filter(a=>a.result==="success"&&new Date(a.at).toDateString()===i).length,o=t.find(a=>a.result==="success");return f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Login History"}),f.jsxs("span",{children:[mo," / DAY"]})]}),f.jsxs("div",{className:"adm-hint",children:["Every admin login is saved here, and the panel allows"," ",f.jsxs("b",{children:[mo," logins per day"]}),". Blocked attempts are saved too, so you can always see who tried."]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Logins Today",f.jsx("small",{children:"Successful logins since midnight"})]}),f.jsx("span",{className:"adm-set-val",style:{color:s>=mo?"var(--no)":""},children:n?"-":s})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Last Login",f.jsx("small",{children:"Most recent successful login"})]}),f.jsx("span",{className:"adm-set-val",style:{fontSize:13.5},children:o?Nm(o.at):"-"})]}),f.jsx("div",{className:"adm-log-list",children:n?null:t.length?t.map(a=>{const l=[a.device,a.browser].filter(Boolean).join(" / ");return f.jsxs("div",{className:"adm-log",children:[f.jsxs("div",{className:"adm-log-main",children:[f.jsx("span",{className:"adm-log-time",children:Nm(a.at)}),f.jsx(T4,{result:a.result})]}),f.jsxs("div",{className:"adm-log-sub",children:[l||"Unknown device",a.os?" · "+a.os:""]})]},a.id)}):f.jsxs("div",{className:"adm-empty",style:{padding:"22px 0"},children:[f.jsx("h3",{children:"No logins recorded yet"}),f.jsx("p",{children:"Every login (and every blocked attempt) is saved here."})]})}),f.jsxs("div",{className:"adm-note",style:{borderTop:"1px solid var(--line)"},children:["To reset today's counter, open Firebase Console → Firestore →"," ",f.jsx("b",{children:"adminLogins"})," and delete today's documents."]})]})}function xi(){return window.FourRTelegram}function A4(){const t=Tu(),{list:e,refresh:n}=d_(),[r,i]=D.useState(e.length);D.useEffect(()=>{i(e.length)},[e]);const[s,o]=D.useState({state:"CHECKING",color:"#6b7280",note:"",canInstall:!1}),a=()=>{const B=window.FourRPwa;if(B){if(B.installed()){B.showInstallButtons(!1),o({state:"INSTALLED",color:"#157a4d",note:"The app is already installed on this phone. Open it from the app icon from now on &mdash; you stay signed in.",canInstall:!1});return}B.canInstall()?o({state:"READY",color:"#4f6bed",note:"Press <b>Install App on Phone</b> below, then choose <b>Install</b> / <b>Add</b> from your phone menu.",canInstall:!0}):B.isIOS()?o({state:"MANUAL",color:"#c2740a",note:"On iPhone: press the <b>Share</b> button in Chrome, then choose <b>Add to Home Screen</b>.",canInstall:!1}):location.protocol==="file:"?o({state:"NEEDS HTTPS",color:"#e5484d",note:"Install only works on <b>https://</b> or a live server. Put the project on hosting (for example GitHub Pages) and open it from there.",canInstall:!1}):o({state:"NOT AVAILABLE",color:"#c2740a",note:"Open the Chrome menu (3 dots) and choose <b>Install app</b> or <b>Add to Home screen</b>.",canInstall:!1})}};D.useEffect(()=>{const B=window.FourRPwa;if(!B)return;B.init(),a();const U=setTimeout(a,2e3);return()=>clearTimeout(U)},[]);const[l,c]=D.useState({online:!1,error:"",count:0}),h=B=>{c({online:kU(),error:Wf(),count:(B||mr()).length})};D.useEffect(()=>{h(),Cm().then(U=>h(U));const B=()=>h();return window.addEventListener("4r-sync",B),()=>window.removeEventListener("4r-sync",B)},[]);const p=async B=>{const U=B.currentTarget;U.classList.add("is-loading");const Q=await Cm();h(Q),U.classList.remove("is-loading"),t(Wf()?"Cloud error — check the rules":"Sync done · "+Q.length+" complaints",!!Wf())},[g,v]=D.useState({botToken:"",chatId:"",enabled:!0}),[S,k]=D.useState(0),[C,E]=D.useState(!1),w=()=>{const B=xi();if(!B)return;const U=B.getSettings();v(U),k(B.queueSize())};D.useEffect(()=>{w()},[]);const T=B=>{B.preventDefault();const U=xi();if(!U)return;if(!U.saveSettings({botToken:g.botToken.trim(),chatId:g.chatId.trim()})){t("Could not save — storage is full",!0);return}w(),t("Update Successful"),U.flushQueue()},O=()=>{const B=xi();if(B){if(!B.isReady()){t("Set the Bot Token and Chat ID first",!0);return}E(!0),B.sendText(`✅ <b>4R-ADMIN</b> connection test
━━━━━━━━━━
Telegram alerts are <b>ON</b>.
Every new complaint will now arrive here.`).then(()=>t("Test Message Sent")).catch(U=>t("Fail: "+U.message,!0)).then(()=>E(!1))}},j=()=>{const B=xi();if(!B)return;const U=B.getSettings();B.saveSettings({enabled:!U.enabled}),w(),U.enabled||B.flushQueue()},F=()=>{const B=xi();if(B){if(!B.queueSize()){t("There are no pending messages");return}E(!0),B.flushQueue().then(U=>t(U?U+" message(s) sent":"Still not delivered — check the settings",!U)).then(()=>{E(!1),w()})}},[I,_]=D.useState(ji()),[A,P]=D.useState(La());D.useEffect(()=>{P(La())},[e]);const x=()=>{IE({showPassword:!ji().showPassword}),_(ji()),P(La()),t("Update Successful")},b=D.useRef(null),R=()=>{const B=xi(),U={app:"4R-ADMIN",version:1,exportedAt:new Date().toISOString(),complaints:mr(),telegram:B?B.getSettings():{},ui:ji()},Q=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),X=URL.createObjectURL(Q),le=document.createElement("a"),fe=new Date,Se=Kt=>Kt<10?"0"+Kt:""+Kt;le.href=X,le.download="4r-admin-backup-"+fe.getFullYear()+Se(fe.getMonth()+1)+Se(fe.getDate())+".json",document.body.appendChild(le),le.click(),le.remove(),setTimeout(()=>URL.revokeObjectURL(X),1e3)},at=B=>{const U=B.target.files&&B.target.files[0];if(!U)return;const Q=new FileReader;Q.onload=()=>{try{const X=JSON.parse(Q.result);if(!X||!Array.isArray(X.complaints))throw new Error("bad file");ms(X.complaints);const le=xi();X.telegram&&le&&le.saveSettings(X.telegram),X.ui&&IE(X.ui),w(),_(ji()),P(La()),i(X.complaints.length),n&&n(),t("Update Successful")}catch{t("The file is not valid",!0)}B.target.value=""},Q.readAsText(U)},Gt=()=>{window.confirm("ALL complaints will be permanently deleted (Firestore and the browser cache). Are you sure?")&&bU().then(()=>{n&&n(),h([]),P(La()),t("All Complaints Deleted")})},Pn=g.enabled&&g.botToken&&g.chatId;return f.jsx(Ps,{children:f.jsxs("main",{className:"adm",children:[f.jsx("div",{className:"adm-top",children:f.jsxs(Zn,{className:"adm-back",to:"/",children:[f.jsx(f_,{}),"Home"]})}),f.jsxs("div",{className:"adm-head",children:[f.jsx("h1",{children:"Settings"}),f.jsx("p",{children:"Update Telegram alerts and the panel's basic settings here."})]}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Install App"}),f.jsx("span",{style:{color:s.color},children:s.state})]}),f.jsx("div",{className:"adm-hint",children:"Installing the app on your phone opens 4R-ADMIN with its own icon — no browser bar, and it runs full screen."}),f.jsxs("div",{className:"adm-form",children:[s.canInstall&&f.jsxs("button",{type:"button",className:"btn btn--block",onClick:()=>{const B=window.FourRPwa;B&&B.promptInstall().then(a)},children:[f.jsx(p_,{}),"Install App on Phone"]}),f.jsx("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8},dangerouslySetInnerHTML:{__html:s.note}})]})]}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Cloud Database"}),f.jsx("span",{style:{color:l.error?"#e5484d":l.online?"#157a4d":"#c2740a"},children:l.error?"RULES ERROR":l.online?"ONLINE":"OFFLINE"})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Firebase (Firestore)",f.jsx("small",{children:l.error?l.error:l.online?"Connected · collection: complaints":"SDK failed to load (check your internet)"})]}),f.jsx("span",{className:"adm-set-val",children:r})]}),f.jsx("div",{className:"adm-form",children:f.jsx("button",{type:"button",className:"btn btn--ghost",style:{width:"100%"},onClick:p,children:"Sync Now"})}),f.jsx("div",{className:"adm-note",style:{borderTop:"1px solid var(--line)"},children:l.error?f.jsxs(f.Fragment,{children:[f.jsx("b",{style:{color:"#e5484d"},children:"Cloud save is not working."}),f.jsx("br",{}),"The rules are not published for project"," ",f.jsx("b",{children:window.FIREBASE_CONFIG&&window.FIREBASE_CONFIG.projectId||"your project"}),". Open Firebase Console > Firestore Database > Rules, paste this project's"," ",f.jsx("b",{children:"firestore.rules"})," and press ",f.jsx("b",{children:"Publish"}),". Until then the complaint is only saved in this browser."]}):f.jsx(f.Fragment,{children:"Complaints are now stored in Firebase, so the admin panel can see all of them from any device. Without internet the data stays in the browser."})})]}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Telegram Alerts"}),f.jsx("span",{style:{color:Pn?"#157a4d":"#c2740a"},children:Pn?"ON":"OFF"})]}),f.jsxs("div",{className:"adm-hint",children:[f.jsx("b",{children:"How to set it up:"}),f.jsx("br",{}),"1. Telegram me ",f.jsx("b",{children:"@BotFather"})," kholein aur ",f.jsx("b",{children:"/newbot"})," se bot banayein.",f.jsx("br",{}),"2. Copy the bot token and paste it below.",f.jsx("br",{}),"3. Create your notification group and add the bot to it.",f.jsx("br",{}),"4. Group ka ",f.jsx("b",{children:"chat ID"})," neeche daalein."]}),f.jsxs("form",{className:"adm-form",onSubmit:T,children:[f.jsxs("div",{className:"field",children:[f.jsx("label",{className:"label",htmlFor:"botToken",children:"Bot Token"}),f.jsx("input",{type:"text",id:"botToken",placeholder:"1234567890:AAExxxxxxxxxxxxxxxxxxxxx",autoComplete:"off",spellCheck:"false",value:g.botToken,onChange:B=>v({...g,botToken:B.target.value})})]}),f.jsxs("div",{className:"field",children:[f.jsx("label",{className:"label",htmlFor:"chatId",children:"Chat ID"}),f.jsx("input",{type:"text",id:"chatId",placeholder:"-1001234567890",autoComplete:"off",spellCheck:"false",value:g.chatId,onChange:B=>v({...g,chatId:B.target.value})})]}),f.jsxs("div",{className:"adm-btn-row",children:[f.jsx("button",{type:"submit",className:"btn btn--block",children:f.jsx("span",{className:"btn-text",children:"Update"})}),f.jsx("button",{type:"button",className:"btn btn--ghost"+(C?" is-loading":""),onClick:O,disabled:C,children:"Test"})]})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Telegram Alerts",f.jsx("small",{children:"Send a message for every new complaint"})]}),f.jsx("button",{type:"button",className:"adm-switch"+(g.enabled?" is-on":""),role:"switch","aria-checked":g.enabled,onClick:j})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Pending Messages",f.jsx("small",{children:S?S+" message waiting":"All messages sent"})]}),f.jsx("button",{type:"button",className:"btn btn--ghost"+(C?" is-loading":""),style:{margin:0,padding:"9px 14px",fontSize:13.5,flex:"0 0 auto"},onClick:F,disabled:C,children:"Retry"})]})]}),f.jsx(S4,{}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Panel Preferences"}),f.jsx("span",{children:"Working"})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Show Password in User Mailbox",f.jsx("small",{children:"When off, the password stays hidden"})]}),f.jsx("button",{type:"button",className:"adm-switch"+(I.showPassword?" is-on":""),role:"switch","aria-checked":I.showPassword,onClick:x})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Storage Used",f.jsx("small",{children:"Browser me saved data"})]}),f.jsxs("span",{className:"adm-set-val",children:[A," KB"]})]}),f.jsxs("div",{className:"adm-set-row",children:[f.jsxs("span",{className:"adm-row-k",children:["Total Complaints",f.jsx("small",{children:"Panel me saved"})]}),f.jsx("span",{className:"adm-set-val",children:r})]})]}),f.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Backup & Restore"}),f.jsx("span",{children:"JSON"})]}),f.jsxs("div",{className:"adm-form",children:[f.jsxs("div",{className:"adm-btn-row",children:[f.jsx("button",{type:"button",className:"btn btn--block",onClick:R,children:f.jsx("span",{className:"btn-text",children:"Export Backup"})}),f.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>b.current&&b.current.click(),children:"Import"})]}),f.jsx("input",{ref:b,type:"file",accept:".json,application/json",hidden:!0,onChange:at}),f.jsx("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8},children:"Export gives you all complaint data and images in a single file."})]})]}),f.jsxs("section",{className:"adm-box adm-danger",children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"Danger Zone"}),f.jsx("span",{children:"Careful"})]}),f.jsx("div",{className:"adm-form",children:f.jsx("button",{type:"button",className:"btn btn--block",onClick:Gt,children:"Delete All Complaints"})})]})]})})}const PE=()=>f.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"9",cy:"7",r:"4"}),f.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),f.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),P4=()=>f.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M12 2v10l3 2"}),f.jsx("circle",{cx:"12",cy:"12",r:"9.5"})]}),R4=()=>f.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("path",{d:"M22 4 12 14.01l-3-3"})]}),k4=()=>f.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}),f.jsx("path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}),f.jsx("path",{d:"M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}),f.jsx("path",{d:"m2 2 20 20"})]}),x4=[{id:"all",label:"All"},{id:"complained",label:"Complained"},{id:"visit_only",label:"Visit only"}];function C4(){const t=Tu(),[e,n]=D.useState([]),[r,i]=D.useState(""),[s,o]=D.useState(!0),[a,l]=D.useState("all"),[c,h]=D.useState("");D.useEffect(()=>{const S=w4(k=>{n(k),o(!1),i("")},k=>{i(k),o(!1)});return()=>S&&S()},[]);const p=D.useMemo(()=>I4(e),[e]),g=D.useMemo(()=>{const S=c.trim().toLowerCase();return e.filter(k=>a==="complained"&&!k.complained||a==="visit_only"&&k.complained?!1:S?(k.name+" "+k.vid+" "+k.device+" "+k.browser+" "+k.os).toLowerCase().includes(S):!0)},[e,a,c]),v=()=>{E4(g),t("Visitor list exported")};return f.jsx(Ps,{children:f.jsxs("main",{className:"adm",children:[f.jsxs("div",{className:"adm-head",children:[f.jsx("h1",{children:"Visitors"}),f.jsx("p",{children:"Everyone who opened the site — and who sent a complaint."})]}),f.jsxs("section",{className:"adm-stats adm-stats--4",children:[f.jsxs("div",{className:"adm-stat",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(PE,{})}),f.jsx("b",{children:p.total}),f.jsx("small",{children:"Total Visitors"})]}),f.jsxs("div",{className:"adm-stat adm-stat--today",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(P4,{})}),f.jsx("b",{children:p.today}),f.jsx("small",{children:"Today"})]}),f.jsxs("div",{className:"adm-stat adm-stat--ok",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(R4,{})}),f.jsx("b",{children:p.complained}),f.jsx("small",{children:"Sent a Complaint"})]}),f.jsxs("div",{className:"adm-stat",children:[f.jsx("span",{className:"adm-stat-ico",children:f.jsx(k4,{})}),f.jsx("b",{children:p.visitOnly}),f.jsx("small",{children:"Visit Only"})]})]}),f.jsxs("section",{className:"adm-box",children:[f.jsxs("div",{className:"adm-box-head",children:[f.jsx("h2",{children:"All Visitors"}),f.jsx("span",{children:p.total})]}),f.jsxs("div",{className:"adm-tools",children:[f.jsx("div",{className:"adm-chips",children:x4.map(S=>f.jsx("button",{type:"button",className:"adm-chip"+(a===S.id?" is-active":""),onClick:()=>l(S.id),children:S.label},S.id))}),f.jsx("input",{type:"search",className:"adm-search",placeholder:"Search name, device, browser...",value:c,onChange:S=>h(S.target.value)})]}),f.jsx("div",{className:"adm-box-body",children:s?f.jsx("div",{className:"adm-empty",children:f.jsx("h3",{children:"Loading visitors..."})}):r?f.jsxs("div",{className:"adm-empty",children:[f.jsx("h3",{children:"Could not load visitors"}),f.jsx("p",{children:r}),f.jsxs("p",{style:{marginTop:10,fontSize:13},children:["Publish the latest ",f.jsx("b",{children:"firestore.rules"})," so the admin can read the"," ",f.jsx("b",{children:"visitors"})," collection."]})]}):e.length?g.length?g.map(S=>{const k=S.pages.filter(C=>C!=="index.html").length;return f.jsxs("div",{className:"adm-vis",children:[f.jsxs("div",{className:"adm-vis-top",children:[f.jsx("span",{className:"adm-vis-name",children:S.name||"Guest "+_4(S.vid)}),S.complained?f.jsxs("span",{className:"adm-vis-tag is-yes",children:["Complained",S.complaints>1?" ("+S.complaints+")":""]}):f.jsx("span",{className:"adm-vis-tag",children:"Visit only"})]}),f.jsxs("div",{className:"adm-vis-meta",children:[f.jsx("span",{children:S.device||"-"}),f.jsx("span",{children:S.browser||"-"}),f.jsx("span",{children:S.os||"-"})]}),f.jsxs("div",{className:"adm-vis-meta adm-vis-meta--soft",children:[f.jsxs("span",{children:[S.visits,S.visits===1?" visit":" visits"]}),f.jsxs("span",{children:[k,k===1?" page":" pages"]}),f.jsxs("span",{children:["Last: ",Nm(S.lastSeen)]})]})]},S.id)}):f.jsxs("div",{className:"adm-empty",children:[f.jsx("h3",{children:"Nothing matches"}),f.jsx("p",{children:"Try another filter or search word."})]}):f.jsxs("div",{className:"adm-empty",children:[f.jsx("div",{className:"adm-empty-ico",children:f.jsx(PE,{})}),f.jsx("h3",{children:"No visitors recorded yet"}),f.jsx("p",{children:"Open the user panel once and this page will start filling up."}),f.jsx("a",{className:"btn",href:"../index.html",children:"Open User Panel"})]})}),f.jsx("div",{className:"adm-form",style:{paddingTop:0},children:f.jsx("button",{type:"button",className:"btn btn--ghost",style:{width:"100%"},onClick:v,disabled:!g.length,children:"Export as CSV"})})]}),f.jsxs("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8,marginTop:14},children:["Each browser counts as one visitor — no IP address or location is stored. One device can send up to ",f.jsx("b",{children:"30 complaints per day"}),", then complaints are blocked for 24 hours. When a visitor sends more than one, the count is shown next to the tag."]})]})})}function Ms({children:t}){const{user:e,ready:n}=QR(),r=yi();return n?e?t:f.jsx(J0,{to:"/login?next="+encodeURIComponent(r.pathname),replace:!0}):null}function b4(){return f.jsx(cN,{children:f.jsx(wU,{children:f.jsx(IU,{children:f.jsxs(nN,{children:[f.jsx(Yn,{path:"/login",element:f.jsx(l4,{})}),f.jsx(Yn,{path:"/",element:f.jsx(Ms,{children:f.jsx(o4,{})})}),f.jsx(Yn,{path:"/complaint/:id",element:f.jsx(Ms,{children:f.jsx(h4,{})})}),f.jsx(Yn,{path:"/chats",element:f.jsx(Ms,{children:f.jsx(f4,{})})}),f.jsx(Yn,{path:"/chats/:id",element:f.jsx(Ms,{children:f.jsx(p4,{})})}),f.jsx(Yn,{path:"/visitors",element:f.jsx(Ms,{children:f.jsx(C4,{})})}),f.jsx(Yn,{path:"/settings",element:f.jsx(Ms,{children:f.jsx(A4,{})})}),f.jsx(Yn,{path:"*",element:f.jsx(J0,{to:"/",replace:!0})})]})})})})}j0(document.getElementById("root")).render(f.jsx(D.StrictMode,{children:f.jsx(b4,{})}));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ZS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gh={exports:{}},tl={};var L_;function KS(){if(L_)return tl;L_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return tl.Fragment=t,tl.jsx=i,tl.jsxs=i,tl}var O_;function QS(){return O_||(O_=1,Gh.exports=KS()),Gh.exports}var H=QS(),Vh={exports:{}},oe={};var P_;function JS(){if(P_)return oe;P_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(z,J,yt){this.props=z,this.context=J,this.refs=M,this.updater=yt||E}S.prototype.isReactComponent={},S.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(z,J,yt){this.props=z,this.context=J,this.refs=M,this.updater=yt||E}var U=N.prototype=new w;U.constructor=N,C(U,S.prototype),U.isPureReactComponent=!0;var k=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(z,J,yt){var Tt=yt.ref;return{$$typeof:r,type:z,key:J,ref:Tt!==void 0?Tt:null,props:yt}}function K(z,J){return P(z.type,J,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function q(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(yt){return J[yt]})}var lt=/\/+/g;function ut(z,J){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):J.toString(36)}function Y(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function L(z,J,yt,Tt,wt){var rt=typeof z;(rt==="undefined"||rt==="boolean")&&(z=null);var xt=!1;if(z===null)xt=!0;else switch(rt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(z.$$typeof){case r:case t:xt=!0;break;case _:return xt=z._init,L(xt(z._payload),J,yt,Tt,wt)}}if(xt)return wt=wt(z),xt=Tt===""?"."+ut(z,0):Tt,k(wt)?(yt="",xt!=null&&(yt=xt.replace(lt,"$&/")+"/"),L(wt,J,yt,"",function(te){return te})):wt!=null&&(G(wt)&&(wt=K(wt,yt+(wt.key==null||z&&z.key===wt.key?"":(""+wt.key).replace(lt,"$&/")+"/")+xt)),J.push(wt)),1;xt=0;var Mt=Tt===""?".":Tt+":";if(k(z))for(var It=0;It<z.length;It++)Tt=z[It],rt=Mt+ut(Tt,It),xt+=L(Tt,J,yt,rt,wt);else if(It=y(z),typeof It=="function")for(z=It.call(z),It=0;!(Tt=z.next()).done;)Tt=Tt.value,rt=Mt+ut(Tt,It++),xt+=L(Tt,J,yt,rt,wt);else if(rt==="object"){if(typeof z.then=="function")return L(Y(z),J,yt,Tt,wt);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return xt}function F(z,J,yt){if(z==null)return z;var Tt=[],wt=0;return L(z,Tt,"","",function(rt){return J.call(yt,rt,wt++)}),Tt}function ot(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(yt){(z._status===0||z._status===-1)&&(z._status=1,z._result=yt)},function(yt){(z._status===0||z._status===-1)&&(z._status=2,z._result=yt)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},bt={map:F,forEach:function(z,J,yt){F(z,function(){J.apply(this,arguments)},yt)},count:function(z){var J=0;return F(z,function(){J++}),J},toArray:function(z){return F(z,function(J){return J})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=v,oe.Children=bt,oe.Component=S,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,J,yt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Tt=C({},z.props),wt=z.key;if(J!=null)for(rt in J.key!==void 0&&(wt=""+J.key),J)!T.call(J,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&J.ref===void 0||(Tt[rt]=J[rt]);var rt=arguments.length-2;if(rt===1)Tt.children=yt;else if(1<rt){for(var xt=Array(rt),Mt=0;Mt<rt;Mt++)xt[Mt]=arguments[Mt+2];Tt.children=xt}return P(z.type,wt,Tt)},oe.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},oe.createElement=function(z,J,yt){var Tt,wt={},rt=null;if(J!=null)for(Tt in J.key!==void 0&&(rt=""+J.key),J)T.call(J,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(wt[Tt]=J[Tt]);var xt=arguments.length-2;if(xt===1)wt.children=yt;else if(1<xt){for(var Mt=Array(xt),It=0;It<xt;It++)Mt[It]=arguments[It+2];wt.children=Mt}if(z&&z.defaultProps)for(Tt in xt=z.defaultProps,xt)wt[Tt]===void 0&&(wt[Tt]=xt[Tt]);return P(z,rt,wt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:d,render:z}},oe.isValidElement=G,oe.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:ot}},oe.memo=function(z,J){return{$$typeof:p,type:z,compare:J===void 0?null:J}},oe.startTransition=function(z){var J=B.T,yt={};B.T=yt;try{var Tt=z(),wt=B.S;wt!==null&&wt(yt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(O,mt)}catch(rt){mt(rt)}finally{J!==null&&yt.types!==null&&(J.types=yt.types),B.T=J}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(z){return B.H.use(z)},oe.useActionState=function(z,J,yt){return B.H.useActionState(z,J,yt)},oe.useCallback=function(z,J){return B.H.useCallback(z,J)},oe.useContext=function(z){return B.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,J){return B.H.useDeferredValue(z,J)},oe.useEffect=function(z,J){return B.H.useEffect(z,J)},oe.useEffectEvent=function(z){return B.H.useEffectEvent(z)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(z,J,yt){return B.H.useImperativeHandle(z,J,yt)},oe.useInsertionEffect=function(z,J){return B.H.useInsertionEffect(z,J)},oe.useLayoutEffect=function(z,J){return B.H.useLayoutEffect(z,J)},oe.useMemo=function(z,J){return B.H.useMemo(z,J)},oe.useOptimistic=function(z,J){return B.H.useOptimistic(z,J)},oe.useReducer=function(z,J,yt){return B.H.useReducer(z,J,yt)},oe.useRef=function(z){return B.H.useRef(z)},oe.useState=function(z){return B.H.useState(z)},oe.useSyncExternalStore=function(z,J,yt){return B.H.useSyncExternalStore(z,J,yt)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.2.5",oe}var z_;function Rp(){return z_||(z_=1,Vh.exports=JS()),Vh.exports}var Sn=Rp();const ex=ZS(Sn);var kh={exports:{}},el={},Xh={exports:{}},Wh={};var B_;function $S(){return B_||(B_=1,(function(r){function t(L,F){var ot=L.length;L.push(F);t:for(;0<ot;){var mt=ot-1>>>1,bt=L[mt];if(0<l(bt,F))L[mt]=F,L[ot]=bt,ot=mt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var F=L[0],ot=L.pop();if(ot!==F){L[0]=ot;t:for(var mt=0,bt=L.length,z=bt>>>1;mt<z;){var J=2*(mt+1)-1,yt=L[J],Tt=J+1,wt=L[Tt];if(0>l(yt,ot))Tt<bt&&0>l(wt,yt)?(L[mt]=wt,L[Tt]=ot,mt=Tt):(L[mt]=yt,L[J]=ot,mt=J);else if(Tt<bt&&0>l(wt,ot))L[mt]=wt,L[Tt]=ot,mt=Tt;else break t}}return F}function l(L,F){var ot=L.sortIndex-F.sortIndex;return ot!==0?ot:L.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,y=!1,E=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=L)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function k(L){if(C=!1,U(L),!E)if(i(m)!==null)E=!0,O||(O=!0,q());else{var F=i(p);F!==null&&Y(k,F.startTime-L)}}var O=!1,B=-1,T=5,P=-1;function K(){return M?!0:!(r.unstable_now()-P<T)}function G(){if(M=!1,O){var L=r.unstable_now();P=L;var F=!0;try{t:{E=!1,C&&(C=!1,w(B),B=-1),y=!0;var ot=g;try{e:{for(U(L),v=i(m);v!==null&&!(v.expirationTime>L&&K());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var bt=mt(v.expirationTime<=L);if(L=r.unstable_now(),typeof bt=="function"){v.callback=bt,U(L),F=!0;break e}v===i(m)&&s(m),U(L)}else s(m);v=i(m)}if(v!==null)F=!0;else{var z=i(p);z!==null&&Y(k,z.startTime-L),F=!1}}break t}finally{v=null,g=ot,y=!1}F=void 0}}finally{F?q():O=!1}}}var q;if(typeof N=="function")q=function(){N(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=G,q=function(){ut.postMessage(null)}}else q=function(){S(G,0)};function Y(L,F){B=S(function(){L(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ot=g;g=F;try{return L()}finally{g=ot}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ot=g;g=L;try{return F()}finally{g=ot}},r.unstable_scheduleCallback=function(L,F,ot){var mt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?mt+ot:mt):ot=mt,L){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=ot+bt,L={id:_++,callback:F,priorityLevel:L,startTime:ot,expirationTime:bt,sortIndex:-1},ot>mt?(L.sortIndex=ot,t(p,L),i(m)===null&&L===i(p)&&(C?(w(B),B=-1):C=!0,Y(k,ot-mt))):(L.sortIndex=bt,t(m,L),E||y||(E=!0,O||(O=!0,q()))),L},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(L){var F=g;return function(){var ot=g;g=F;try{return L.apply(this,arguments)}finally{g=ot}}}})(Wh)),Wh}var I_;function tM(){return I_||(I_=1,Xh.exports=$S()),Xh.exports}var jh={exports:{}},Hn={};var F_;function eM(){if(F_)return Hn;F_=1;var r=Rp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Hn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Hn.requestFormReset=function(m){s.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Hn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Hn.version="19.2.5",Hn}var H_;function nM(){if(H_)return jh.exports;H_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jh.exports=eM(),jh.exports}var G_;function iM(){if(G_)return el;G_=1;var r=tM(),t=Rp(),i=nM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=h;break}if(R===o){x=!0,o=u,a=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===a){x=!0,a=h,o=u;break}if(R===o){x=!0,o=h,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case O:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var Y=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},mt=[],bt=-1;function z(e){return{current:e}}function J(e){0>bt||(e.current=mt[bt],mt[bt]=null,bt--)}function yt(e,n){bt++,mt[bt]=e.current,e.current=n}var Tt=z(null),wt=z(null),rt=z(null),xt=z(null);function Mt(e,n){switch(yt(rt,n),yt(wt,e),yt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n_(n),e=i_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Tt),yt(Tt,e)}function It(){J(Tt),J(wt),J(rt)}function te(e){e.memoizedState!==null&&yt(xt,e);var n=Tt.current,a=i_(n,e.type);n!==a&&(yt(wt,e),yt(Tt,a))}function Kt(e){wt.current===e&&(J(Tt),J(wt)),xt.current===e&&(J(xt),Ko._currentValue=ot)}var Oe,fe;function ge(e){if(Oe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Oe=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oe+e+fe}var Ce=!1;function re(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var st=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){st=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var V=x.split(`
`),et=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===et.length)for(o=V.length-1,u=et.length-1;1<=o&&0<=u&&V[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==et[u]){var dt=`
`+V[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ge(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return ge("Activity");default:return""}}function ze(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var pn=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,_e=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,Re=r.unstable_requestPaint,Ct=r.unstable_now,Qe=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,gt=r.unstable_LowPriority,St=r.unstable_IdlePriority,At=r.log,Nt=r.unstable_setDisableYieldValue,ft=null,ht=null;function Ut(e){if(typeof At=="function"&&Nt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:ae,Lt=Math.log,Dt=Math.LN2;function ae(e){return e>>>=0,e===0?32:31-(Lt(e)/Dt|0)|0}var se=256,ve=262144,W=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Rt(o):(x&=R,x!==0?u=Rt(x):a||(a=R&~e,a!==0&&(u=Rt(a))))):(R=o&~h,R!==0?u=Rt(R):x!==0?u=Rt(x):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ot(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=W;return W<<=1,(W&62914560)===0&&(W=4194304),e}function Yt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ie(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rn(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Pt(a),vt=1<<dt;R[dt]=0,V[dt]=-1;var st=et[dt];if(st!==null)for(et[dt]=null,dt=0;dt<st.length;dt++){var ct=st[dt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}o!==0&&Ue(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Ue(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function gi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ei(e,n){var a=n&-n;return a=(a&42)!==0?1:Ss(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lo(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function co(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var In=Math.random().toString(36).slice(2),fn="__reactFiber$"+In,Nn="__reactProps$"+In,ta="__reactContainer$"+In,Da="__reactEvents$"+In,Al="__reactListeners$"+In,Qs="__reactHandles$"+In,uo="__reactResources$"+In,Na="__reactMarker$"+In;function fo(e){delete e[fn],delete e[Nn],delete e[Da],delete e[Al],delete e[Qs]}function Ua(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ta]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[fn])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function La(e){if(e=e[fn]||e[ta]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ms(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Oa(e){var n=e[uo];return n||(n=e[uo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(e){e[Na]=!0}var Rl=new Set,A={};function Z(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(A[e]=n,e=0;e<n.length;e++)Rl.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Bt={};function kt(e){return pn.call(Bt,e)?!0:pn.call(it,e)?!1:nt.test(e)?Bt[e]=!0:(it[e]=!0,!1)}function zt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){if(!e._valueTracker){var n=ce(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function en(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ce(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Be=/[\n"\\]/g;function Ie(e){return e.replace(Be,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,o,u,h,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?xe(e,x,Jt(n)):a!=null?xe(e,x,Jt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Jt(R):e.removeAttribute("name")}function Fn(e,n,a,o,u,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){we(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),we(e)}function xe(e,n,a){n==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ni(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function Ci(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Y(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),we(e)}function ii(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Fe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&nn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&nn(e,h,n[h])}function Pe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Pa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Bu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,$s=null;function em(e){var n=La(e);if(n&&(e=n.stateNode)){var a=e[Nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Nn]||null;if(!u)throw Error(s(90));Gt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&en(o)}break t;case"textarea":ni(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mn(e,!!a.multiple,n,!1)}}}var Fu=!1;function nm(e,n,a){if(Fu)return e(n,a);Fu=!0;try{var o=e(n);return o}finally{if(Fu=!1,(Js!==null||$s!==null)&&(pc(),Js&&(n=Js,e=$s,$s=Js=null,em(n),e)))for(n=0;n<e.length;n++)em(e[n])}}function ho(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=!1;if(na)try{var po={};Object.defineProperty(po,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Hu=!1}var za=null,Gu=null,Cl=null;function im(){if(Cl)return Cl;var e,n=Gu,a=n.length,o,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return Cl=u.slice(e,1<o?1-o:void 0)}function wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function am(){return!1}function Yn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Dl:am,this.isPropagationStopped=am,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Yn(Es),mo=v({},Es,{view:0,detail:0}),Yx=Yn(mo),Vu,ku,go,Ul=v({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Vu=e.screenX-go.screenX,ku=e.screenY-go.screenY):ku=Vu=0,go=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),sm=Yn(Ul),qx=v({},Ul,{dataTransfer:0}),Zx=Yn(qx),Kx=v({},mo,{relatedTarget:0}),Xu=Yn(Kx),Qx=v({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=Yn(Qx),$x=v({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=Yn($x),ey=v({},Es,{data:0}),rm=Yn(ey),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ay[e])?!!n[e]:!1}function Wu(){return sy}var ry=v({},mo,{key:function(e){if(e.key){var n=ny[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=Yn(ry),ly=v({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Yn(ly),cy=v({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),uy=Yn(cy),fy=v({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Yn(fy),dy=v({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=Yn(dy),my=v({},Es,{newState:0,oldState:0}),gy=Yn(my),_y=[9,13,27,32],ju=na&&"CompositionEvent"in window,_o=null;na&&"documentMode"in document&&(_o=document.documentMode);var vy=na&&"TextEvent"in window&&!_o,lm=na&&(!ju||_o&&8<_o&&11>=_o),cm=" ",um=!1;function fm(e,n){switch(e){case"keyup":return _y.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function xy(e,n){switch(e){case"compositionend":return hm(n);case"keypress":return n.which!==32?null:(um=!0,cm);case"textInput":return e=n.data,e===cm&&um?null:e;default:return null}}function yy(e,n){if(tr)return e==="compositionend"||!ju&&fm(e,n)?(e=im(),Cl=Gu=za=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lm&&n.locale!=="ko"?null:n.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sy[e.type]:n==="textarea"}function pm(e,n,a,o){Js?$s?$s.push(o):$s=[o]:Js=o,n=Sc(n,"onChange"),0<n.length&&(a=new Nl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var vo=null,xo=null;function My(e){Kg(e,0)}function Ll(e){var n=Ms(e);if(en(n))return e}function mm(e,n){if(e==="change")return n}var gm=!1;if(na){var Yu;if(na){var qu="oninput"in document;if(!qu){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),qu=typeof _m.oninput=="function"}Yu=qu}else Yu=!1;gm=Yu&&(!document.documentMode||9<document.documentMode)}function vm(){vo&&(vo.detachEvent("onpropertychange",xm),xo=vo=null)}function xm(e){if(e.propertyName==="value"&&Ll(xo)){var n=[];pm(n,xo,e,Iu(e)),nm(My,n)}}function by(e,n,a){e==="focusin"?(vm(),vo=n,xo=a,vo.attachEvent("onpropertychange",xm)):e==="focusout"&&vm()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(xo)}function Ty(e,n){if(e==="click")return Ll(n)}function Ay(e,n){if(e==="input"||e==="change")return Ll(n)}function Ry(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ai=typeof Object.is=="function"?Object.is:Ry;function yo(e,n){if(ai(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!pn.call(n,u)||!ai(e[u],n[u]))return!1}return!0}function ym(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sm(e,n){var a=ym(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ym(a)}}function Mm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ze(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ze(e.document)}return n}function Zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cy=na&&"documentMode"in document&&11>=document.documentMode,er=null,Ku=null,So=null,Qu=!1;function Em(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||er==null||er!==Ze(o)||(o=er,"selectionStart"in o&&Zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),So&&yo(So,o)||(So=o,o=Sc(Ku,"onSelect"),0<o.length&&(n=new Nl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=er)))}function Ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var nr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Ju={},Tm={};na&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function As(e){if(Ju[e])return Ju[e];if(!nr[e])return e;var n=nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tm)return Ju[e]=n[a];return e}var Am=As("animationend"),Rm=As("animationiteration"),Cm=As("animationstart"),wy=As("transitionrun"),Dy=As("transitionstart"),Ny=As("transitioncancel"),wm=As("transitionend"),Dm=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function Di(e,n){Dm.set(e,n),Z(n,[e])}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],ir=0,tf=0;function Pl(){for(var e=ir,n=tf=ir=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var h=_i[n];if(_i[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Nm(a,u,h)}}function zl(e,n,a,o){_i[ir++]=e,_i[ir++]=n,_i[ir++]=a,_i[ir++]=o,tf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ef(e,n,a,o){return zl(e,n,a,o),Bl(e)}function Rs(e,n){return zl(e,null,null,n),Bl(e)}function Nm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Bl(e){if(50<ko)throw ko=0,fh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ar={};function Uy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new Uy(e,n,a,o)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Um(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Il(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")nf(e)&&(x=1);else if(typeof e=="string")x=BS(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=si(31,a,n,u),e.elementType=P,e.lanes=h,e;case C:return Cs(a.children,u,h,n);case M:x=8,u|=24;break;case S:return e=si(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case k:return e=si(13,a,n,u),e.elementType=k,e.lanes=h,e;case O:return e=si(19,a,n,u),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case w:x=9;break t;case U:x=11;break t;case B:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=si(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Cs(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function af(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function Lm(e){var n=si(18,null,null,0);return n.stateNode=e,n}function sf(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Om=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=Om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ze(n)},Om.set(e,n),n)}return{value:e,source:n,stack:ze(n)}}var sr=[],rr=0,Fl=null,Mo=0,xi=[],yi=0,Ba=null,Gi=1,Vi="";function aa(e,n){sr[rr++]=Mo,sr[rr++]=Fl,Fl=e,Mo=n}function Pm(e,n,a){xi[yi++]=Gi,xi[yi++]=Vi,xi[yi++]=Ba,Ba=e;var o=Gi;e=Vi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var h=32-Pt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Gi=1<<32-Pt(n)+u|a<<u|o,Vi=h+e}else Gi=1<<h|a<<u|o,Vi=e}function rf(e){e.return!==null&&(aa(e,1),Pm(e,1,0))}function of(e){for(;e===Fl;)Fl=sr[--rr],sr[rr]=null,Mo=sr[--rr],sr[rr]=null;for(;e===Ba;)Ba=xi[--yi],xi[yi]=null,Vi=xi[--yi],xi[yi]=null,Gi=xi[--yi],xi[yi]=null}function zm(e,n){xi[yi++]=Gi,xi[yi++]=Vi,xi[yi++]=Ba,Gi=n.id,Vi=n.overflow,Ba=e}var Un=null,Je=null,Ee=!1,Ia=null,Si=!1,lf=Error(s(519));function Fa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(vi(n,e)),lf}function Bm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[Nn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Se(Wo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Fa(e,!0)}function Im(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function or(e){if(e!==Un)return!1;if(!Ee)return Im(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ah(e.type,e.memoizedProps)),a=!a),a&&Je&&Fa(e),Im(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=c_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=c_(e)}else n===27?(n=Je,$a(e.type)?(e=Nh,Nh=null,Je=e):Je=n):Je=Un?bi(e.stateNode.nextSibling):null;return!0}function ws(){Je=Un=null,Ee=!1}function cf(){var e=Ia;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Ia=null),e}function bo(e){Ia===null?Ia=[e]:Ia.push(e)}var uf=z(null),Ds=null,sa=null;function Ha(e,n,a){yt(uf,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=uf.current,J(uf)}function ff(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function hf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),ff(h.return,a,e),o||(x=null);break t}h=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),ff(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function lr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;ai(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&hf(n,e,a,o),n.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Ds=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Fm(Ds,e)}function Gl(e,n){return Ds===null&&Ns(e),Fm(e,n)}function Fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Oy=r.unstable_scheduleCallback,Py=r.unstable_NormalPriority,gn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new Ly,data:new Map,refCount:0}}function Eo(e){e.refCount--,e.refCount===0&&Oy(Py,function(){e.controller.abort()})}var To=null,pf=0,cr=0,ur=null;function zy(e,n){if(To===null){var a=To=[];pf=0,cr=_h(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return pf++,n.then(Hm,Hm),n}function Hm(){if(--pf===0&&To!==null){ur!==null&&(ur.status="fulfilled");var e=To;To=null,cr=0,ur=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function By(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gm=L.S;L.S=function(e,n){Eg=Ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zy(e,n),Gm!==null&&Gm(e,n)};var Us=z(null);function mf(){var e=Us.current;return e!==null?e:Ke.pooledCache}function Vl(e,n){n===null?yt(Us,Us.current):yt(Us,n.pool)}function Vm(){var e=mf();return e===null?null:{parent:gn._currentValue,pool:e}}var fr=Error(s(460)),gf=Error(s(474)),kl=Error(s(542)),Xl={then:function(){}};function km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jm(e),e}throw Os=n,fr}}function Ls(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,fr):a}}var Os=null;function Wm(){if(Os===null)throw Error(s(459));var e=Os;return Os=null,e}function jm(e){if(e===fr||e===kl)throw Error(s(483))}var hr=null,Ao=0;function Wl(e){var n=Ao;return Ao+=1,hr===null&&(hr=[]),Xm(hr,e,n)}function Ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function jl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ym(e){function n(Q,j){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[j],Q.flags|=16):tt.push(j)}}function a(Q,j){if(!e)return null;for(;j!==null;)n(Q,j),j=j.sibling;return null}function o(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function u(Q,j){return Q=ia(Q,j),Q.index=0,Q.sibling=null,Q}function h(Q,j,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<j?(Q.flags|=67108866,j):tt):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,j,tt,_t){return j===null||j.tag!==6?(j=af(tt,Q.mode,_t),j.return=Q,j):(j=u(j,tt),j.return=Q,j)}function V(Q,j,tt,_t){var $t=tt.type;return $t===C?dt(Q,j,tt.props.children,_t,tt.key):j!==null&&(j.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Ls($t)===j.type)?(j=u(j,tt.props),Ro(j,tt),j.return=Q,j):(j=Il(tt.type,tt.key,tt.props,null,Q.mode,_t),Ro(j,tt),j.return=Q,j)}function et(Q,j,tt,_t){return j===null||j.tag!==4||j.stateNode.containerInfo!==tt.containerInfo||j.stateNode.implementation!==tt.implementation?(j=sf(tt,Q.mode,_t),j.return=Q,j):(j=u(j,tt.children||[]),j.return=Q,j)}function dt(Q,j,tt,_t,$t){return j===null||j.tag!==7?(j=Cs(tt,Q.mode,_t,$t),j.return=Q,j):(j=u(j,tt),j.return=Q,j)}function vt(Q,j,tt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=af(""+j,Q.mode,tt),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return tt=Il(j.type,j.key,j.props,null,Q.mode,tt),Ro(tt,j),tt.return=Q,tt;case E:return j=sf(j,Q.mode,tt),j.return=Q,j;case T:return j=Ls(j),vt(Q,j,tt)}if(Y(j)||q(j))return j=Cs(j,Q.mode,tt,null),j.return=Q,j;if(typeof j.then=="function")return vt(Q,Wl(j),tt);if(j.$$typeof===N)return vt(Q,Gl(Q,j),tt);jl(Q,j)}return null}function st(Q,j,tt,_t){var $t=j!==null?j.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:R(Q,j,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===$t?V(Q,j,tt,_t):null;case E:return tt.key===$t?et(Q,j,tt,_t):null;case T:return tt=Ls(tt),st(Q,j,tt,_t)}if(Y(tt)||q(tt))return $t!==null?null:dt(Q,j,tt,_t,null);if(typeof tt.then=="function")return st(Q,j,Wl(tt),_t);if(tt.$$typeof===N)return st(Q,j,Gl(Q,tt),_t);jl(Q,tt)}return null}function ct(Q,j,tt,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(tt)||null,R(j,Q,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?tt:_t.key)||null,V(j,Q,_t,$t);case E:return Q=Q.get(_t.key===null?tt:_t.key)||null,et(j,Q,_t,$t);case T:return _t=Ls(_t),ct(Q,j,tt,_t,$t)}if(Y(_t)||q(_t))return Q=Q.get(tt)||null,dt(j,Q,_t,$t,null);if(typeof _t.then=="function")return ct(Q,j,tt,Wl(_t),$t);if(_t.$$typeof===N)return ct(Q,j,tt,Gl(j,_t),$t);jl(j,_t)}return null}function jt(Q,j,tt,_t){for(var $t=null,De=null,qt=j,he=j=0,be=null;qt!==null&&he<tt.length;he++){qt.index>he?(be=qt,qt=null):be=qt.sibling;var Ne=st(Q,qt,tt[he],_t);if(Ne===null){qt===null&&(qt=be);break}e&&qt&&Ne.alternate===null&&n(Q,qt),j=h(Ne,j,he),De===null?$t=Ne:De.sibling=Ne,De=Ne,qt=be}if(he===tt.length)return a(Q,qt),Ee&&aa(Q,he),$t;if(qt===null){for(;he<tt.length;he++)qt=vt(Q,tt[he],_t),qt!==null&&(j=h(qt,j,he),De===null?$t=qt:De.sibling=qt,De=qt);return Ee&&aa(Q,he),$t}for(qt=o(qt);he<tt.length;he++)be=ct(qt,Q,he,tt[he],_t),be!==null&&(e&&be.alternate!==null&&qt.delete(be.key===null?he:be.key),j=h(be,j,he),De===null?$t=be:De.sibling=be,De=be);return e&&qt.forEach(function(as){return n(Q,as)}),Ee&&aa(Q,he),$t}function ne(Q,j,tt,_t){if(tt==null)throw Error(s(151));for(var $t=null,De=null,qt=j,he=j=0,be=null,Ne=tt.next();qt!==null&&!Ne.done;he++,Ne=tt.next()){qt.index>he?(be=qt,qt=null):be=qt.sibling;var as=st(Q,qt,Ne.value,_t);if(as===null){qt===null&&(qt=be);break}e&&qt&&as.alternate===null&&n(Q,qt),j=h(as,j,he),De===null?$t=as:De.sibling=as,De=as,qt=be}if(Ne.done)return a(Q,qt),Ee&&aa(Q,he),$t;if(qt===null){for(;!Ne.done;he++,Ne=tt.next())Ne=vt(Q,Ne.value,_t),Ne!==null&&(j=h(Ne,j,he),De===null?$t=Ne:De.sibling=Ne,De=Ne);return Ee&&aa(Q,he),$t}for(qt=o(qt);!Ne.done;he++,Ne=tt.next())Ne=ct(qt,Q,he,Ne.value,_t),Ne!==null&&(e&&Ne.alternate!==null&&qt.delete(Ne.key===null?he:Ne.key),j=h(Ne,j,he),De===null?$t=Ne:De.sibling=Ne,De=Ne);return e&&qt.forEach(function(qS){return n(Q,qS)}),Ee&&aa(Q,he),$t}function je(Q,j,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var $t=tt.key;j!==null;){if(j.key===$t){if($t=tt.type,$t===C){if(j.tag===7){a(Q,j.sibling),_t=u(j,tt.props.children),_t.return=Q,Q=_t;break t}}else if(j.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Ls($t)===j.type){a(Q,j.sibling),_t=u(j,tt.props),Ro(_t,tt),_t.return=Q,Q=_t;break t}a(Q,j);break}else n(Q,j);j=j.sibling}tt.type===C?(_t=Cs(tt.props.children,Q.mode,_t,tt.key),_t.return=Q,Q=_t):(_t=Il(tt.type,tt.key,tt.props,null,Q.mode,_t),Ro(_t,tt),_t.return=Q,Q=_t)}return x(Q);case E:t:{for($t=tt.key;j!==null;){if(j.key===$t)if(j.tag===4&&j.stateNode.containerInfo===tt.containerInfo&&j.stateNode.implementation===tt.implementation){a(Q,j.sibling),_t=u(j,tt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,j);break}else n(Q,j);j=j.sibling}_t=sf(tt,Q.mode,_t),_t.return=Q,Q=_t}return x(Q);case T:return tt=Ls(tt),je(Q,j,tt,_t)}if(Y(tt))return jt(Q,j,tt,_t);if(q(tt)){if($t=q(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),ne(Q,j,tt,_t)}if(typeof tt.then=="function")return je(Q,j,Wl(tt),_t);if(tt.$$typeof===N)return je(Q,j,Gl(Q,tt),_t);jl(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,j!==null&&j.tag===6?(a(Q,j.sibling),_t=u(j,tt),_t.return=Q,Q=_t):(a(Q,j),_t=af(tt,Q.mode,_t),_t.return=Q,Q=_t),x(Q)):a(Q,j)}return function(Q,j,tt,_t){try{Ao=0;var $t=je(Q,j,tt,_t);return hr=null,$t}catch(qt){if(qt===fr||qt===kl)throw qt;var De=si(29,qt,null,Q.mode);return De.lanes=_t,De.return=Q,De}}}var Ps=Ym(!0),qm=Ym(!1),Ga=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Bl(e),Nm(e,null,a),n}return zl(e,o,n,a),Bl(e)}function Co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}function xf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var yf=!1;function wo(){if(yf){var e=ur;if(e!==null)throw e}}function Do(e,n,a,o){yf=!1;var u=e.updateQueue;Ga=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,et=V.next;V.next=null,x===null?h=et:x.next=et,x=V;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==x&&(R===null?dt.firstBaseUpdate=et:R.next=et,dt.lastBaseUpdate=V))}if(h!==null){var vt=u.baseState;x=0,dt=et=V=null,R=h;do{var st=R.lane&-536870913,ct=st!==R.lane;if(ct?(Me&st)===st:(o&st)===st){st!==0&&st===cr&&(yf=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var jt=e,ne=R;st=n;var je=a;switch(ne.tag){case 1:if(jt=ne.payload,typeof jt=="function"){vt=jt.call(je,vt,st);break t}vt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ne.payload,st=typeof jt=="function"?jt.call(je,vt,st):jt,st==null)break t;vt=v({},vt,st);break t;case 2:Ga=!0}}st=R.callback,st!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(et=dt=ct,V=vt):dt=dt.next=ct,x|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(V=vt),u.baseState=V,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),qa|=x,e.lanes=x,e.memoizedState=vt}}function Zm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Km(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zm(a[e],n)}var dr=z(null),Yl=z(0);function Qm(e,n){e=ma,yt(Yl,e),yt(dr,n),ma=e|n.baseLanes}function Sf(){yt(Yl,ma),yt(dr,dr.current)}function Mf(){ma=Yl.current,J(dr),J(Yl)}var ri=z(null),Mi=null;function Xa(e){var n=e.alternate;yt(hn,hn.current&1),yt(ri,e),Mi===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(Mi=e)}function bf(e){yt(hn,hn.current),yt(ri,e),Mi===null&&(Mi=e)}function Jm(e){e.tag===22?(yt(hn,hn.current),yt(ri,e),Mi===null&&(Mi=e)):Wa()}function Wa(){yt(hn,hn.current),yt(ri,ri.current)}function oi(e){J(ri),Mi===e&&(Mi=null),J(hn)}var hn=z(0);function ql(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wh(a)||Dh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,ue=null,Xe=null,_n=null,Zl=!1,pr=!1,zs=!1,Kl=0,No=0,mr=null,Iy=0;function ln(){throw Error(s(321))}function Ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ai(e[a],n[a]))return!1;return!0}function Tf(e,n,a,o,u,h){return oa=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?P0:Hf,zs=!1,h=a(o,u),zs=!1,pr&&(h=t0(n,a,o,u)),$m(e),h}function $m(e){L.H=Oo;var n=Xe!==null&&Xe.next!==null;if(oa=0,_n=Xe=ue=null,Zl=!1,No=0,mr=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&Hl(e)&&(vn=!0))}function t0(e,n,a,o){ue=e;var u=0;do{if(pr&&(mr=null),No=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,_n=Xe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}L.H=z0,h=n(a,o)}while(pr);return h}function Fy(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Uo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Af(){var e=Kl!==0;return Kl=0,e}function Rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cf(e){if(Zl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Zl=!1}oa=0,_n=Xe=ue=null,pr=!1,No=Kl=0,mr=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ue.memoizedState=_n=e:_n=_n.next=e,_n}function dn(){if(Xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=_n===null?ue.memoizedState:_n.next;if(n!==null)_n=n,Xe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},_n===null?ue.memoizedState=_n=e:_n=_n.next=e}return _n}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var n=No;return No+=1,mr===null&&(mr=[]),e=Xm(mr,e,n),n=ue,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?P0:Hf),e}function Jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===N)return Ln(e)}throw Error(s(438,String(e)))}function wf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ql(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=K;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function $l(e){var n=dn();return Df(n,Xe,e)}function Df(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=x=null,V=null,et=n,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(Me&vt)===vt:(oa&vt)===vt){var st=et.revertLane;if(st===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===cr&&(dt=!0);else if((oa&st)===st){et=et.next,st===cr&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(R=V=vt,x=h):V=V.next=vt,ue.lanes|=st,qa|=st;vt=et.action,zs&&a(h,vt),h=et.hasEagerState?et.eagerState:a(h,vt)}else st={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(R=V=st,x=h):V=V.next=st,ue.lanes|=vt,qa|=vt;et=et.next}while(et!==null&&et!==n);if(V===null?x=h:V.next=R,!ai(h,e.memoizedState)&&(vn=!0,dt&&(a=ur,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Nf(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);ai(h,n.memoizedState)||(vn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function e0(e,n,a){var o=ue,u=dn(),h=Ee;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ai((Xe||u).memoizedState,a);if(x&&(u.memoizedState=a,vn=!0),u=u.queue,Of(a0.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},i0.bind(null,o,u,a,n),null),Ke===null)throw Error(s(349));h||(oa&127)!==0||n0(o,n,a)}return a}function n0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Ql(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function i0(e,n,a,o){n.value=a,n.getSnapshot=o,s0(n)&&r0(e)}function a0(e,n,a){return a(function(){s0(n)&&r0(e)})}function s0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ai(e,a)}catch{return!0}}function r0(e){var n=Rs(e,2);n!==null&&Jn(n,e,2)}function Uf(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),zs){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function o0(e,n,a,o){return e.baseState=a,Df(e,Xe,typeof o=="function"?o:la)}function Hy(e,n,a,o,u){if(nc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};L.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,l0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function l0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=L.T,x={};L.T=x;try{var R=a(u,o),V=L.S;V!==null&&V(x,R),c0(e,n,R)}catch(et){Lf(e,n,et)}finally{h!==null&&x.types!==null&&(h.types=x.types),L.T=h}}else try{h=a(u,o),c0(e,n,h)}catch(et){Lf(e,n,et)}}function c0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){u0(e,n,o)},function(o){return Lf(e,n,o)}):u0(e,n,a)}function u0(e,n,a){n.status="fulfilled",n.value=a,f0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,l0(e,a)))}function Lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,f0(n),n=n.next;while(n!==o)}e.action=null}function f0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function h0(e,n){return n}function d0(e,n){if(Ee){var a=Ke.formState;if(a!==null){t:{var o=ue;if(Ee){if(Je){e:{for(var u=Je,h=Si;u.nodeType!==8;){if(!h){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Je=bi(u.nextSibling),o=u.data==="F!";break t}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h0,lastRenderedState:n},a.queue=o,a=U0.bind(null,ue,o),o.dispatch=a,o=Uf(!1),h=Ff.bind(null,ue,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Hy.bind(null,ue,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function p0(e){var n=dn();return m0(n,Xe,e)}function m0(e,n,a){if(n=Df(e,n,h0)[0],e=$l(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Uo(n)}catch(x){throw x===fr?kl:x}else o=n;n=dn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,gr(9,{destroy:void 0},Gy.bind(null,u,a),null)),[o,h,e]}function Gy(e,n){e.action=n}function g0(e){var n=dn(),a=Xe;if(a!==null)return m0(n,a,e);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function gr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Ql(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function _0(){return dn().memoizedState}function tc(e,n,a,o){var u=Xn();ue.flags|=e,u.memoizedState=gr(1|n,{destroy:void 0},a,o===void 0?null:o)}function ec(e,n,a,o){var u=dn();o=o===void 0?null:o;var h=u.memoizedState.inst;Xe!==null&&o!==null&&Ef(o,Xe.memoizedState.deps)?u.memoizedState=gr(n,h,a,o):(ue.flags|=e,u.memoizedState=gr(1|n,h,a,o))}function v0(e,n){tc(8390656,8,e,n)}function Of(e,n){ec(2048,8,e,n)}function Vy(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Ql(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function x0(e){var n=dn().memoizedState;return Vy({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function y0(e,n){return ec(4,2,e,n)}function S0(e,n){return ec(4,4,e,n)}function M0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function b0(e,n,a){a=a!=null?a.concat([e]):null,ec(4,4,M0.bind(null,n,e),a)}function Pf(){}function E0(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ef(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function T0(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ef(n,o[1]))return o[0];if(o=e(),zs){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o}function zf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),ue.lanes|=e,qa|=e,a)}function A0(e,n,a,o){return ai(a,n)?a:dr.current!==null?(e=zf(e,a,o),ai(e,n)||(vn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Me&261930)===0?(vn=!0,e.memoizedState=a):(e=Ag(),ue.lanes|=e,qa|=e,n)}function R0(e,n,a,o,u){var h=F.p;F.p=h!==0&&8>h?h:8;var x=L.T,R={};L.T=R,Ff(e,!1,n,a);try{var V=u(),et=L.S;if(et!==null&&et(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var dt=By(V,o);Lo(e,n,dt,ui(e))}else Lo(e,n,o,ui(e))}catch(vt){Lo(e,n,{then:function(){},status:"rejected",reason:vt},ui())}finally{F.p=h,x!==null&&R.types!==null&&(x.types=R.types),L.T=x}}function ky(){}function Bf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=C0(e).queue;R0(e,u,n,ot,a===null?ky:function(){return w0(e),a(o)})}function C0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function w0(e){var n=C0(e);n.next===null&&(n=e.alternate.memoizedState),Lo(e,n.next.queue,{},ui())}function If(){return Ln(Ko)}function D0(){return dn().memoizedState}function N0(){return dn().memoizedState}function Xy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();e=Va(a);var o=ka(n,e,a);o!==null&&(Jn(o,n,a),Co(o,n,a)),n={cache:df()},e.payload=n;return}n=n.return}}function Wy(e,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nc(e)?L0(n,a):(a=ef(e,n,a,o),a!==null&&(Jn(a,e,o),O0(a,n,o)))}function U0(e,n,a){var o=ui();Lo(e,n,a,o)}function Lo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(nc(e))L0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,R=h(x,a);if(u.hasEagerState=!0,u.eagerState=R,ai(R,x))return zl(e,n,u,0),Ke===null&&Pl(),!1}catch{}if(a=ef(e,n,u,o),a!==null)return Jn(a,e,o),O0(a,n,o),!0}return!1}function Ff(e,n,a,o){if(o={lane:2,revertLane:_h(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},nc(e)){if(n)throw Error(s(479))}else n=ef(e,a,o,2),n!==null&&Jn(n,e,2)}function nc(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function L0(e,n){pr=Zl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function O0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}var Oo={readContext:Ln,use:Jl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};Oo.useEffectEvent=ln;var P0={readContext:Ln,use:Jl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:v0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,tc(4194308,4,M0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return tc(4194308,4,e,n)},useInsertionEffect:function(e,n){tc(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(zs){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(zs){Ut(!0);try{a(n)}finally{Ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Wy.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uf(e);var n=e.queue,a=U0.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(e,n){var a=Xn();return zf(a,e,n)},useTransition:function(){var e=Uf(!1);return e=R0.bind(null,ue,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Xn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Me&127)!==0||n0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,v0(a0.bind(null,o,h,e),[e]),o.flags|=2048,gr(9,{destroy:void 0},i0.bind(null,o,h,a,n),null),a},useId:function(){var e=Xn(),n=Ke.identifierPrefix;if(Ee){var a=Vi,o=Gi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Iy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:If,useFormState:d0,useActionState:d0,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ff.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:wf,useCacheRefresh:function(){return Xn().memoizedState=Xy.bind(null,ue)},useEffectEvent:function(e){var n=Xn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Hf={readContext:Ln,use:Jl,useCallback:E0,useContext:Ln,useEffect:Of,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:$l,useRef:_0,useState:function(){return $l(la)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=dn();return A0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=$l(la)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:If,useFormState:p0,useActionState:p0,useOptimistic:function(e,n){var a=dn();return o0(a,Xe,e,n)},useMemoCache:wf,useCacheRefresh:N0};Hf.useEffectEvent=x0;var z0={readContext:Ln,use:Jl,useCallback:E0,useContext:Ln,useEffect:Of,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:T0,useReducer:Nf,useRef:_0,useState:function(){return Nf(la)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=dn();return Xe===null?zf(a,e,n):A0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Nf(la)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:e0,useId:D0,useHostTransitionStatus:If,useFormState:g0,useActionState:g0,useOptimistic:function(e,n){var a=dn();return Xe!==null?o0(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wf,useCacheRefresh:N0};z0.useEffectEvent=x0;function Gf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ui(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(e,u,o),n!==null&&(Jn(n,e,o),Co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ui(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(e,u,o),n!==null&&(Jn(n,e,o),Co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ui(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(e,o,a),n!==null&&(Jn(n,e,a),Co(n,e,a))}};function B0(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!yo(a,o)||!yo(u,h):!0}function I0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Vf.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function F0(e){Ol(e)}function H0(e){console.error(e)}function G0(e){Ol(e)}function ic(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function V0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function kf(e,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){ic(e,n)},a}function k0(e){return e=Va(e),e.tag=3,e}function X0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){V0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){V0(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function jy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lr(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?mc():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ph(e,o,u)),!1;case 22:return a.flags|=65536,o===Xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ph(e,o,u)),!1}throw Error(s(435,a.tag))}return ph(e,o,u),mc(),!1}if(Ee)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==lf&&(e=Error(s(422),{cause:o}),bo(vi(e,a)))):(o!==lf&&(n=Error(s(423),{cause:o}),bo(vi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=vi(o,a),u=kf(e.stateNode,o,u),xf(e,u),cn!==4&&(cn=2)),!1;var h=Error(s(520),{cause:o});if(h=vi(h,a),Vo===null?Vo=[h]:Vo.push(h),cn!==4&&(cn=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=kf(a.stateNode,o,e),xf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Za===null||!Za.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=k0(u),X0(u,e,a,o),xf(a,u),!1}a=a.return}while(a!==null);return!1}var Xf=Error(s(461)),vn=!1;function On(e,n,a,o){n.child=e===null?qm(n,null,a,o):Ps(n,e.child,a,o)}function W0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Ns(n),o=Tf(e,n,a,x,h,u),R=Af(),e!==null&&!vn?(Rf(e,n,u),ca(e,n,u)):(Ee&&R&&rf(n),n.flags|=1,On(e,n,o,u),n.child)}function j0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!nf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Y0(e,n,h,o,u)):(e=Il(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Jf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(x,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(h,o),e.ref=n.ref,e.return=n,n.child=e}function Y0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(yo(h,o)&&e.ref===n.ref)if(vn=!1,n.pendingProps=o=h,Jf(e,u))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Wf(e,n,a,o,u)}function q0(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Z0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(n,h!==null?h.cachePool:null),h!==null?Qm(n,h):Sf(),Jm(n);else return o=n.lanes=536870912,Z0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Vl(n,h.cachePool),Qm(n,h),Wa(),n.memoizedState=null):(e!==null&&Vl(n,null),Sf(),Wa());return On(e,n,u,a),n.child}function Po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Z0(e,n,a,o,u){var h=mf();return h=h===null?null:{parent:gn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Vl(n,null),Sf(),Jm(n),e!==null&&lr(e,n,o,!0),n.childLanes=u,null}function ac(e,n){return n=rc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function K0(e,n,a){return Ps(n,e.child,null,a),e=ac(n,n.pendingProps),e.flags|=2,oi(n),n.memoizedState=null,e}function Yy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=ac(n,o),n.lanes=536870912,Po(null,e);if(bf(n),(e=Je)?(e=l_(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(e),a.return=n,n.child=a,Un=n,Je=null)):e=null,e===null)throw Fa(n);return n.lanes=536870912,null}return ac(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(bf(n),u)if(n.flags&256)n.flags&=-257,n=K0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||lr(e,n,a,!1),u=(a&e.childLanes)!==0,vn||u){if(o=Ke,o!==null&&(x=ei(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Rs(e,x),Jn(o,e,x),Xf;mc(),n=K0(e,n,a)}else e=h.treeContext,Je=bi(x.nextSibling),Un=n,Ee=!0,Ia=null,Si=!1,e!==null&&zm(n,e),n=ac(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function sc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wf(e,n,a,o,u){return Ns(n),a=Tf(e,n,a,o,void 0,u),o=Af(),e!==null&&!vn?(Rf(e,n,u),ca(e,n,u)):(Ee&&o&&rf(n),n.flags|=1,On(e,n,a,u),n.child)}function Q0(e,n,a,o,u,h){return Ns(n),n.updateQueue=null,a=t0(n,o,a,u),$m(e),o=Af(),e!==null&&!vn?(Rf(e,n,h),ca(e,n,h)):(Ee&&o&&rf(n),n.flags|=1,On(e,n,a,h),n.child)}function J0(e,n,a,o,u){if(Ns(n),n.stateNode===null){var h=ar,x=a.contextType;typeof x=="object"&&x!==null&&(h=Ln(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Vf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},_f(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Ln(x):ar,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Gf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Vf.enqueueReplaceState(h,h.state,null),Do(n,o,h,u),wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,V=Bs(a,R);h.props=V;var et=h.context,dt=a.contextType;x=ar,typeof dt=="object"&&dt!==null&&(x=Ln(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||et!==x)&&I0(n,h,o,x),Ga=!1;var st=n.memoizedState;h.state=st,Do(n,o,h,u),wo(),et=n.memoizedState,R||st!==et||Ga?(typeof vt=="function"&&(Gf(n,a,vt,o),et=n.memoizedState),(V=Ga||B0(n,a,V,o,st,et,x))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=x,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,vf(e,n),x=n.memoizedProps,dt=Bs(a,x),h.props=dt,vt=n.pendingProps,st=h.context,et=a.contextType,V=ar,typeof et=="object"&&et!==null&&(V=Ln(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||st!==V)&&I0(n,h,o,V),Ga=!1,st=n.memoizedState,h.state=st,Do(n,o,h,u),wo();var ct=n.memoizedState;x!==vt||st!==ct||Ga||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof R=="function"&&(Gf(n,a,R,o),ct=n.memoizedState),(dt=Ga||B0(n,a,dt,o,st,ct,V)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=V,o=dt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,sc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ps(n,e.child,null,u),n.child=Ps(n,null,a,u)):On(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ca(e,n,u),e}function $0(e,n,a,o){return ws(),n.flags|=256,On(e,n,a,o),n.child}var jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(e){return{baseLanes:e,cachePool:Vm()}}function qf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function tg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Xa(n):Wa(),(e=Je)?(e=l_(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(e),a.return=n,n.child=a,Un=n,Je=null)):e=null,e===null)throw Fa(n);return Dh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Wa(),u=n.mode,R=rc({mode:"hidden",children:R},u),o=Cs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Yf(a),o.childLanes=qf(e,x,a),n.memoizedState=jf,Po(null,o)):(Xa(n),Zf(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(h)n.flags&256?(Xa(n),n.flags&=-257,n=Kf(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),R=o.fallback,u=n.mode,o=rc({mode:"visible",children:o.children},u),R=Cs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ps(n,e.child,null,a),o=n.child,o.memoizedState=Yf(a),o.childLanes=qf(e,x,a),n.memoizedState=jf,n=Po(null,o));else if(Xa(n),Dh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(s(419)),o.stack="",o.digest=x,bo({value:o,source:null,stack:null}),n=Kf(e,n,a)}else if(vn||lr(e,n,a,!1),x=(a&e.childLanes)!==0,vn||x){if(x=Ke,x!==null&&(o=ei(x,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Rs(e,o),Jn(x,e,o),Xf;wh(R)||mc(),n=Kf(e,n,a)}else wh(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Je=bi(R.nextSibling),Un=n,Ee=!0,Ia=null,Si=!1,e!==null&&zm(n,e),n=Zf(n,o.children),n.flags|=4096);return n}return u?(Wa(),R=o.fallback,u=n.mode,V=e.child,et=V.sibling,o=ia(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,et!==null?R=ia(et,R):(R=Cs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Po(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Yf(a):(u=R.cachePool,u!==null?(V=gn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Vm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=qf(e,x,a),n.memoizedState=jf,Po(e.child,o)):(Xa(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Zf(e,n){return n=rc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function rc(e,n){return e=si(22,e,null,n),e.lanes=0,e}function Kf(e,n,a){return Ps(n,e.child,null,a),e=Zf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ff(e.return,n,a)}function Qf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=hn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,yt(hn,x),On(e,n,o,a),o=Ee?Mo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,a,n);else if(e.tag===19)eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ql(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Qf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ql(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Qf(n,!0,a,null,h,o);break;case"together":Qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(lr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Jf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function qy(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Ha(n,gn,e.memoizedState.cache),ws();break;case 27:case 5:te(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(e,n,a):(Xa(n),e=ca(e,n,a),e!==null?e.sibling:null);Xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(hn,hn.current),o)break;return null;case 22:return n.lanes=0,q0(e,n,a,n.pendingProps);case 24:Ha(n,gn,e.memoizedState.cache)}return ca(e,n,a)}function ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Jf(e,a)&&(n.flags&128)===0)return vn=!1,qy(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Ee&&(n.flags&1048576)!==0&&Pm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ls(n.elementType),n.type=e,typeof e=="function")nf(e)?(o=Bs(e,o),n.tag=1,n=J0(null,n,e,o,a)):(n.tag=0,n=Wf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=W0(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=j0(null,n,e,o,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return Wf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),J0(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,vf(e,n),Do(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ha(n,gn,o),o!==h.cache&&hf(n,[gn],a,!0),wo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=$0(e,n,o,a);break t}else if(o!==u){u=vi(Error(s(424)),n),bo(u),n=$0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=bi(e.firstChild),Un=n,Ee=!0,Ia=null,Si=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),o===u){n=ca(e,n,a);break t}On(e,n,o,a)}n=n.child}return n;case 26:return sc(e,n),e===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=Mc(rt.current).createElement(a),o[fn]=n,o[Nn]=e,Pn(o,a,e),mn(o),n.stateNode=o):n.memoizedState=p_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&Ee&&(o=n.stateNode=f_(n.type,n.pendingProps,rt.current),Un=n,Si=!0,u=Je,$a(n.type)?(Nh=u,Je=bi(o.firstChild)):Je=u),On(e,n,n.pendingProps.children,a),sc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Je)&&(o=ES(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Un=n,Je=bi(o.firstChild),Si=!1,u=!0):u=!1),u||Fa(n)),te(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Ah(u,h)?o=null:x!==null&&Ah(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Tf(e,n,Fy,null,null,a),Ko._currentValue=u),sc(e,n),On(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Je)&&(a=TS(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Un=n,Je=null,e=!0):e=!1),e||Fa(n)),null;case 13:return tg(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ps(n,null,o,a):On(e,n,o,a),n.child;case 11:return W0(e,n,n.type,n.pendingProps,a);case 7:return On(e,n,n.pendingProps,a),n.child;case 8:return On(e,n,n.pendingProps.children,a),n.child;case 12:return On(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),On(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ns(n),u=Ln(u),o=o(u),n.flags|=1,On(e,n,o,a),n.child;case 14:return j0(e,n,n.type,n.pendingProps,a);case 15:return Y0(e,n,n.type,n.pendingProps,a);case 19:return ng(e,n,a);case 31:return Yy(e,n,a);case 22:return q0(e,n,a,n.pendingProps);case 24:return Ns(n),o=Ln(gn),e===null?(u=mf(),u===null&&(u=Ke,h=df(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},_f(n),Ha(n,gn,u)):((e.lanes&a)!==0&&(vf(e,n),Do(n,null,null,a),wo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,gn,o)):(o=h.cache,Ha(n,gn,o),o!==u.cache&&hf(n,[gn],a,!0))),On(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function $f(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw Os=Xl,gf}else e.flags&=-16777217}function ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(n))if(Dg())e.flags|=8192;else throw Os=Xl,gf}function oc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,yr|=n)}function zo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Zy(e,n,a){var o=n.pendingProps;switch(of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(gn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(or(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),$e(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ua(n),h!==null?($e(n),ag(n,h)):($e(n),$f(n,u,null,o,a))):h?h!==e.memoizedState?(ua(n),$e(n),ag(n,h)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),$e(n),$f(n,u,e,o,a)),null;case 27:if(Kt(n),a=rt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=Tt.current,or(n)?Bm(n):(e=f_(u,o,a),n.stateNode=e,ua(n))}return $e(n),null;case 5:if(Kt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(h=Tt.current,or(n))Bm(n);else{var x=Mc(rt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[fn]=n,h[Nn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Pn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return $e(n),$f(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=rt.current,or(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||Fa(n,!0)}else e=Mc(e).createTextNode(o),e[fn]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=or(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=or(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),oc(n,n.updateQueue),$e(n),null);case 4:return It(),e===null&&Sh(n.stateNode.containerInfo),$e(n),null;case 10:return ra(n.type),$e(n),null;case 19:if(J(hn),o=n.memoizedState,o===null)return $e(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)zo(o,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=ql(e),h!==null){for(n.flags|=128,zo(o,!1),e=h.updateQueue,n.updateQueue=e,oc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Um(a,e),a=a.sibling;return yt(hn,hn.current&1|2),Ee&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ct()>hc&&(n.flags|=128,u=!0,zo(o,!1),n.lanes=4194304)}else{if(!u)if(e=ql(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,oc(n,e),zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return $e(n),null}else 2*Ct()-o.renderingStartTime>hc&&a!==536870912&&(n.flags|=128,u=!0,zo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ct(),e.sibling=null,a=hn.current,yt(hn,u?a&1|2:a&1),Ee&&aa(n,o.treeForkCount),e):($e(n),null);case 22:case 23:return oi(n),Mf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&oc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(Us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(gn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ky(e,n){switch(of(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(gn),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Kt(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(oi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(hn),null;case 4:return It(),null;case 10:return ra(n.type),null;case 22:case 23:return oi(n),Mf(),e!==null&&J(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(gn),null;case 25:return null;default:return null}}function sg(e,n){switch(of(n),n.tag){case 3:ra(gn),It();break;case 26:case 27:case 5:Kt(n);break;case 4:It();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:J(hn);break;case 10:ra(n.type);break;case 22:case 23:oi(n),Mf(),e!==null&&J(Us);break;case 24:ra(gn)}}function Bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Ge(n,n.return,R)}}function ja(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var V=a,et=R;try{et()}catch(dt){Ge(u,V,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ge(n,n.return,dt)}}function rg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Km(n,a)}catch(o){Ge(e,e.return,o)}}}function og(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Io(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function th(e,n,a){try{var o=e.stateNode;vS(o,e.type,a,n),o[Nn]=n}catch(u){Ge(e,e.return,u)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function eh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nh(e,n,a),e=e.sibling;e!==null;)nh(e,n,a),e=e.sibling}function lc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(lc(e,n,a),e=e.sibling;e!==null;)lc(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,o,a),n[fn]=e,n[Nn]=a}catch(h){Ge(e,e.return,h)}}var fa=!1,xn=!1,ih=!1,fg=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function Qy(e,n){if(e=e.containerInfo,Eh=wc,e=bm(e),Zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,R=-1,V=-1,et=0,dt=0,vt=e,st=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(R=x+u),vt!==h||o!==0&&vt.nodeType!==3||(V=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)st=vt,vt=ct;for(;;){if(vt===e)break e;if(st===a&&++et===u&&(R=x),st===h&&++dt===o&&(V=x),(ct=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ct}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Th={focusedElem:e,selectionRange:a},wc=!1,Rn=n;Rn!==null;)if(n=Rn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Rn=e;else for(;Rn!==null;){switch(n=Rn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var jt=Bs(a.type,u);e=o.getSnapshotBeforeUpdate(jt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ge(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Rn=e;break}Rn=n.return}}function hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),o&4&&Bo(5,a);break;case 1:if(da(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}o&64&&rg(a),o&512&&Io(a,a.return);break;case 3:if(da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&o&4&&ug(a);case 26:case 5:da(e,a),n===null&&o&4&&lg(a),o&512&&Io(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),o&4&&mg(e,a);break;case 13:da(e,a),o&4&&gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rS.bind(null,a),AS(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||xn,u=fa;var h=xn;fa=o,(xn=n)&&!h?pa(e,a,(a.subtreeFlags&8772)!==0):da(e,a),fa=u,xn=h}break;case 30:break;default:da(e,a)}}function dg(e){var n=e.alternate;n!==null&&(e.alternate=null,dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,qn=!1;function ha(e,n,a){for(a=a.child;a!==null;)pg(e,n,a),a=a.sibling}function pg(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:xn||ki(a,n),ha(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||ki(a,n);var o=an,u=qn;$a(a.type)&&(an=a.stateNode,qn=!1),ha(e,n,a),Yo(a.stateNode),an=o,qn=u;break;case 5:xn||ki(a,n);case 6:if(o=an,u=qn,an=null,ha(e,n,a),an=o,qn=u,an!==null)if(qn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{an.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:an!==null&&(qn?(e=an,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cr(e)):r_(an,a.stateNode));break;case 4:o=an,u=qn,an=a.stateNode.containerInfo,qn=!0,ha(e,n,a),an=o,qn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),xn||ja(4,a,n),ha(e,n,a);break;case 1:xn||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&og(a,n,o)),ha(e,n,a);break;case 21:ha(e,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,ha(e,n,a),xn=o;break;default:ha(e,n,a)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(a){Ge(n,n.return,a)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(a){Ge(n,n.return,a)}}function Jy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fg),n;default:throw Error(s(435,e.tag))}}function cc(e,n){var a=Jy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=oS.bind(null,e,o);o.then(u,u)}})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){an=R.stateNode,qn=!1;break t}break;case 5:an=R.stateNode,qn=!1;break t;case 3:case 4:an=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(an===null)throw Error(s(160));pg(h,x,u),an=null,qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_g(n,e),n=n.sibling}var Ni=null;function _g(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),o&4&&(ja(3,e,e.return),Bo(3,e),ja(5,e,e.return));break;case 1:Zn(n,e),Kn(e),o&512&&(xn||a===null||ki(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ni;if(Zn(n,e),Kn(e),o&512&&(xn||a===null||ki(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Na]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Pn(h,o,a),h[fn]=e,mn(h),o=h;break t;case"link":var x=__("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}h=u.createElement(o),Pn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=__("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}h=u.createElement(o),Pn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[fn]=e,mn(h),o=h}e.stateNode=o}else v_(u,e.type,e.stateNode);else e.stateNode=g_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?v_(u,e.type,e.stateNode):g_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&th(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),o&512&&(xn||a===null||ki(a,a.return)),a!==null&&o&4&&th(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),o&512&&(xn||a===null||ki(a,a.return)),e.flags&32){u=e.stateNode;try{ii(u,"")}catch(jt){Ge(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,th(e,u,a!==null?a.memoizedProps:u)),o&1024&&(ih=!0);break;case 6:if(Zn(n,e),Kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){Ge(e,e.return,jt)}}break;case 3:if(Tc=null,u=Ni,Ni=bc(n.containerInfo),Zn(n,e),Ni=u,Kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(jt){Ge(e,e.return,jt)}ih&&(ih=!1,vg(e));break;case 4:o=Ni,Ni=bc(e.stateNode.containerInfo),Zn(n,e),Kn(e),Ni=o;break;case 12:Zn(n,e),Kn(e);break;case 31:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cc(e,o)));break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fc=Ct()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,et=fa,dt=xn;if(fa=et||u,xn=dt||V,Zn(n,e),xn=dt,fa=et,Kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||fa||xn||Is(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=V.stateNode;var vt=V.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(jt){Ge(V,V.return,jt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(jt){Ge(V,V.return,jt)}}}else if(n.tag===18){if(a===null){V=n;try{var ct=V.stateNode;u?o_(ct,!0):o_(V.stateNode,!1)}catch(jt){Ge(V,V.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cc(e,a))));break;case 19:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cc(e,o)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=eh(e);lc(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(ii(x,""),a.flags&=-33);var R=eh(e);lc(e,R,x);break;case 3:case 4:var V=a.stateNode.containerInfo,et=eh(e);nh(e,et,V);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function Is(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),Is(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),Is(n);break;case 27:Yo(n.stateNode);case 26:case 5:ki(n,n.return),Is(n);break;case 22:n.memoizedState===null&&Is(n);break;case 30:Is(n);break;default:Is(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:pa(u,h,a),Bo(4,h);break;case 1:if(pa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Zm(V[u],R)}catch(et){Ge(o,o.return,et)}}a&&x&64&&rg(h),Io(h,h.return);break;case 27:ug(h);case 26:case 5:pa(u,h,a),a&&o===null&&x&4&&lg(h),Io(h,h.return);break;case 12:pa(u,h,a);break;case 31:pa(u,h,a),a&&x&4&&mg(u,h);break;case 13:pa(u,h,a),a&&x&4&&gg(u,h);break;case 22:h.memoizedState===null&&pa(u,h,a),Io(h,h.return);break;case 30:break;default:pa(u,h,a)}n=n.sibling}}function ah(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Eo(a))}function sh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Eo(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(e,n,a,o),n=n.sibling}function xg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),u&2048&&Bo(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Eo(e)));break;case 12:if(u&2048){Ui(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Ui(e,n,a,o);break;case 31:Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ui(e,n,a,o):Fo(e,n):h._visibility&2?Ui(e,n,a,o):(h._visibility|=2,_r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ah(x,n);break;case 24:Ui(e,n,a,o),u&2048&&sh(n.alternate,n);break;default:Ui(e,n,a,o)}}function _r(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,R=a,V=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:_r(h,x,R,V,u),Bo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?_r(h,x,R,V,u):Fo(h,x):(dt._visibility|=2,_r(h,x,R,V,u)),u&&et&2048&&ah(x.alternate,x);break;case 24:_r(h,x,R,V,u),u&&et&2048&&sh(x.alternate,x);break;default:_r(h,x,R,V,u)}n=n.sibling}}function Fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&ah(o.alternate,o);break;case 24:Fo(a,o),u&2048&&sh(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Ho=8192;function vr(e,n,a){if(e.subtreeFlags&Ho)for(e=e.child;e!==null;)yg(e,n,a),e=e.sibling}function yg(e,n,a){switch(e.tag){case 26:vr(e,n,a),e.flags&Ho&&e.memoizedState!==null&&IS(a,Ni,e.memoizedState,e.memoizedProps);break;case 5:vr(e,n,a);break;case 3:case 4:var o=Ni;Ni=bc(e.stateNode.containerInfo),vr(e,n,a),Ni=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ho,Ho=16777216,vr(e,n,a),Ho=o):vr(e,n,a));break;default:vr(e,n,a)}}function Sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,bg(o,e)}Sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,uc(e)):Go(e);break;default:Go(e)}}function uc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,bg(o,e)}Sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ja(8,n,n.return),uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,uc(n));break;default:uc(n)}e=e.sibling}}function bg(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else t:for(a=e;Rn!==null;){o=Rn;var u=o.sibling,h=o.return;if(dg(o),o===a){Rn=null;break t}if(u!==null){u.return=h,Rn=u;break t}Rn=h}}}var $y={getCacheForType:function(e){var n=Ln(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(gn).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ke=null,ye=null,Me=0,He=0,li=null,Ya=!1,xr=!1,rh=!1,ma=0,cn=0,qa=0,Fs=0,oh=0,ci=0,yr=0,Vo=null,Qn=null,lh=!1,fc=0,Eg=0,hc=1/0,dc=null,Za=null,bn=0,Ka=null,Sr=null,ga=0,ch=0,uh=null,Tg=null,ko=0,fh=null;function ui(){return(Le&2)!==0&&Me!==0?Me&-Me:L.T!==null?_h():lo()}function Ag(){if(ci===0)if((Me&536870912)===0||Ee){var e=ve;ve<<=1,(ve&3932160)===0&&(ve=262144),ci=e}else ci=536870912;return e=ri.current,e!==null&&(e.flags|=32),ci}function Jn(e,n,a){(e===Ke&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),Qa(e,Me,ci,!1)),ie(e,a),((Le&2)===0||e!==Ke)&&(e===Ke&&((Le&2)===0&&(Fs|=a),cn===4&&Qa(e,Me,ci,!1)),Xi(e))}function Rg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?iS(e,n):dh(e,n,!0),h=o;do{if(u===0){xr&&!o&&Qa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!eS(a)){u=dh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=Vo;var V=R.current.memoizedState.isDehydrated;if(V&&(Mr(R,x).flags|=256),x=dh(R,x,!1),x!==2){if(rh&&!V){R.errorRecoveryDisabledLanes|=h,Fs|=h,u=4;break t}h=Qn,Qn=u,h!==null&&(Qn===null?Qn=h:Qn.push.apply(Qn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Mr(e,0),Qa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ci,!Ya);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=fc+300-Ct(),10<u)){if(Qa(o,n,ci,!Ya),pt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=a_(Cg.bind(null,o,a,Qn,dc,lh,n,ci,Fs,yr,Ya,h,"Throttled",-0,0),u);break t}Cg(o,a,Qn,dc,lh,n,ci,Fs,yr,Ya,h,null,-0,0)}}break}while(!0);Xi(e)}function Cg(e,n,a,o,u,h,x,R,V,et,dt,vt,st,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},yg(n,h,vt);var jt=(h&62914560)===h?fc-Ct():(h&4194048)===h?Eg-Ct():0;if(jt=FS(vt,jt),jt!==null){ga=h,e.cancelPendingCommit=jt(zg.bind(null,e,n,h,a,o,u,x,R,V,dt,vt,null,st,ct)),Qa(e,h,x,!et);return}}zg(e,n,h,a,o,u,x,R,V)}function eS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ai(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(e,n,a,o){n&=~oh,n&=~Fs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Pt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Ue(e,a,n)}function pc(){return(Le&6)===0?(Xo(0),!1):!0}function hh(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,sa=Ds=null,Cf(e),hr=null,Ao=0,e=ye;for(;e!==null;)sg(e.alternate,e),e=e.return;ye=null}}function Mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,SS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,hh(),Ke=e,ye=a=ia(e.current,null),Me=n,He=0,li=null,Ya=!1,xr=Ft(e,n),rh=!1,yr=ci=oh=Fs=qa=cn=0,Qn=Vo=null,lh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),h=1<<u;n|=e[u],o&=~h}return ma=n,Pl(),a}function wg(e,n){ue=null,L.H=Oo,n===fr||n===kl?(n=Wm(),He=3):n===gf?(n=Wm(),He=4):He=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,ye===null&&(cn=1,ic(e,vi(n,e.current)))}function Dg(){var e=ri.current;return e===null?!0:(Me&4194048)===Me?Mi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Mi:!1}function Ng(){var e=L.H;return L.H=Oo,e===null?Oo:e}function Ug(){var e=L.A;return L.A=$y,e}function mc(){cn=4,Ya||(Me&4194048)!==Me&&ri.current!==null||(xr=!0),(qa&134217727)===0&&(Fs&134217727)===0||Ke===null||Qa(Ke,Me,ci,!1)}function dh(e,n,a){var o=Le;Le|=2;var u=Ng(),h=Ug();(Ke!==e||Me!==n)&&(dc=null,Mr(e,n)),n=!1;var x=cn;t:do try{if(He!==0&&ye!==null){var R=ye,V=li;switch(He){case 8:hh(),x=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var et=He;if(He=0,li=null,br(e,R,V,et),a&&xr){x=0;break t}break;default:et=He,He=0,li=null,br(e,R,V,et)}}nS(),x=cn;break}catch(dt){wg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,sa=Ds=null,Le=o,L.H=u,L.A=h,ye===null&&(Ke=null,Me=0,Pl()),x}function nS(){for(;ye!==null;)Lg(ye)}function iS(e,n){var a=Le;Le|=2;var o=Ng(),u=Ug();Ke!==e||Me!==n?(dc=null,hc=Ct()+500,Mr(e,n)):xr=Ft(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var h=li;e:switch(He){case 1:He=0,li=null,br(e,n,h,1);break;case 2:case 9:if(km(h)){He=0,li=null,Og(n);break}n=function(){He!==2&&He!==9||Ke!==e||(He=7),Xi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:km(h)?(He=0,li=null,Og(n)):(He=0,li=null,br(e,n,h,7));break;case 5:var x=null;switch(ye.tag){case 26:x=ye.memoizedState;case 5:case 27:var R=ye;if(x?x_(x):R.stateNode.complete){He=0,li=null;var V=R.sibling;if(V!==null)ye=V;else{var et=R.return;et!==null?(ye=et,gc(et)):ye=null}break e}}He=0,li=null,br(e,n,h,5);break;case 6:He=0,li=null,br(e,n,h,6);break;case 8:hh(),cn=6;break t;default:throw Error(s(462))}}aS();break}catch(dt){wg(e,dt)}while(!0);return sa=Ds=null,L.H=o,L.A=u,Le=a,ye!==null?0:(Ke=null,Me=0,Pl(),cn)}function aS(){for(;ye!==null&&!Qt();)Lg(ye)}function Lg(e){var n=ig(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?gc(e):ye=n}function Og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Q0(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Q0(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Cf(n);default:sg(a,n),n=ye=Um(n,ma),n=ig(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?gc(e):ye=n}function br(e,n,a,o){sa=Ds=null,Cf(n),hr=null,Ao=0;var u=n.return;try{if(jy(e,u,n,a,Me)){cn=1,ic(e,vi(a,e.current)),ye=null;return}}catch(h){if(u!==null)throw ye=u,h;cn=1,ic(e,vi(a,e.current)),ye=null;return}n.flags&32768?(Ee||o===1?e=!0:xr||(Me&536870912)!==0?e=!1:(Ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pg(n,e)):gc(n)}function gc(e){var n=e;do{if((n.flags&32768)!==0){Pg(n,Ya);return}e=n.return;var a=Zy(n.alternate,n,ma);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);cn===0&&(cn=5)}function Pg(e,n){do{var a=Ky(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);cn=6,ye=null}function zg(e,n,a,o,u,h,x,R,V){e.cancelPendingCommit=null;do _c();while(bn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=tf,rn(e,a,h,x,R,V),e===Ke&&(ye=Ke=null,Me=0),Sr=n,Ka=e,ga=a,ch=h,uh=u,Tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lS($,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=F.p,F.p=2,x=Le,Le|=4;try{Qy(e,n,a)}finally{Le=x,F.p=u,L.T=o}}bn=1,Bg(),Ig(),Fg()}}function Bg(){if(bn===1){bn=0;var e=Ka,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=F.p;F.p=2;var u=Le;Le|=4;try{_g(n,e);var h=Th,x=bm(e.containerInfo),R=h.focusedElem,V=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&Mm(R.ownerDocument.documentElement,R)){if(V!==null&&Zu(R)){var et=V.start,dt=V.end;if(dt===void 0&&(dt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),jt=R.textContent.length,ne=Math.min(V.start,jt),je=V.end===void 0?ne:Math.min(V.end,jt);!ct.extend&&ne>je&&(x=je,je=ne,ne=x);var Q=Sm(R,ne),j=Sm(R,je);if(Q&&j&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==j.node||ct.focusOffset!==j.offset)){var tt=vt.createRange();tt.setStart(Q.node,Q.offset),ct.removeAllRanges(),ne>je?(ct.addRange(tt),ct.extend(j.node,j.offset)):(tt.setEnd(j.node,j.offset),ct.addRange(tt))}}}}for(vt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var _t=vt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}wc=!!Eh,Th=Eh=null}finally{Le=u,F.p=o,L.T=a}}e.current=n,bn=2}}function Ig(){if(bn===2){bn=0;var e=Ka,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=F.p;F.p=2;var u=Le;Le|=4;try{hg(e,n.alternate,n)}finally{Le=u,F.p=o,L.T=a}}bn=3}}function Fg(){if(bn===4||bn===3){bn=0,Re();var e=Ka,n=Sr,a=ga,o=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Sr=Ka=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Za=null),oo(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=F.p,F.p=2,L.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];h(R.value,{componentStack:R.stack})}}finally{L.T=n,F.p=u}}(ga&3)!==0&&_c(),Xi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===fh?ko++:(ko=0,fh=e):ko=0,Xo(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Eo(n)))}function _c(){return Bg(),Ig(),Fg(),Gg()}function Gg(){if(bn!==5)return!1;var e=Ka,n=ch;ch=0;var a=oo(ga),o=L.T,u=F.p;try{F.p=32>a?32:a,L.T=null,a=uh,uh=null;var h=Ka,x=ga;if(bn=0,Sr=Ka=null,ga=0,(Le&6)!==0)throw Error(s(331));var R=Le;if(Le|=4,Mg(h.current),xg(h,h.current,x,a),Le=R,Xo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{F.p=u,L.T=o,Hg(e,n)}}function Vg(e,n,a){n=vi(a,n),n=kf(e.stateNode,n,2),e=ka(e,n,2),e!==null&&(ie(e,2),Xi(e))}function Ge(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){e=vi(a,e),a=k0(2),o=ka(n,a,2),o!==null&&(X0(a,o,n,e),ie(o,2),Xi(o));break}}n=n.return}}function ph(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new tS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(rh=!0,u.add(a),e=sS.bind(null,e,n,a),n.then(e,e))}function sS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(Me&a)===a&&(cn===4||cn===3&&(Me&62914560)===Me&&300>Ct()-fc?(Le&2)===0&&Mr(e,0):oh|=a,yr===Me&&(yr=0)),Xi(e)}function kg(e,n){n===0&&(n=Et()),e=Rs(e,n),e!==null&&(ie(e,n),Xi(e))}function rS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function oS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),kg(e,a)}function lS(e,n){return X(e,n)}var vc=null,Er=null,mh=!1,xc=!1,gh=!1,Ja=0;function Xi(e){e!==Er&&e.next===null&&(Er===null?vc=Er=e:Er=Er.next=e),xc=!0,mh||(mh=!0,uS())}function Xo(e,n){if(!gh&&xc){gh=!0;do for(var a=!1,o=vc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=u&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Yg(o,h))}else h=Me,h=pt(o,o===Ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ft(o,h)||(a=!0,Yg(o,h));o=o.next}while(a);gh=!1}}function cS(){Xg()}function Xg(){xc=mh=!1;var e=0;Ja!==0&&yS()&&(e=Ja);for(var n=Ct(),a=null,o=vc;o!==null;){var u=o.next,h=Wg(o,n);h===0?(o.next=null,a===null?vc=u:a.next=u,u===null&&(Er=a)):(a=o,(e!==0||(h&3)!==0)&&(xc=!0)),o=u}bn!==0&&bn!==5||Xo(e),Ja!==0&&(Ja=0)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Pt(h),R=1<<x,V=u[x];V===-1?((R&a)===0||(R&o)!==0)&&(u[x]=Ot(R,n)):V<=n&&(e.expiredLanes|=R),h&=~R}if(n=Ke,a=Me,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&_e(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&_e(o),oo(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=St;break;default:a=$}return o=jg.bind(null,e),a=X(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&_e(o),e.callbackPriority=2,e.callbackNode=null,2}function jg(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_c()&&e.callbackNode!==a)return null;var o=Me;return o=pt(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Rg(e,o,n),Wg(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?jg.bind(null,e):null)}function Yg(e,n){if(_c())return null;Rg(e,n,!0)}function uS(){MS(function(){(Le&6)!==0?X(D,cS):Xg()})}function _h(){if(Ja===0){var e=cr;e===0&&(e=se,se<<=1,(se&261888)===0&&(se=256)),Ja=e}return Ja}function qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function fS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=qg((u[Nn]||null).action),x=o.submitter;x&&(n=(n=x[Nn]||null)?qg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var R=new Nl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var V=x?Zg(u,x):new FormData(u);Bf(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(R.preventDefault(),V=x?Zg(u,x):new FormData(u),Bf(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var vh=0;vh<$u.length;vh++){var xh=$u[vh],hS=xh.toLowerCase(),dS=xh[0].toUpperCase()+xh.slice(1);Di(hS,"on"+dS)}Di(Am,"onAnimationEnd"),Di(Rm,"onAnimationIteration"),Di(Cm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(wy,"onTransitionRun"),Di(Dy,"onTransitionStart"),Di(Ny,"onTransitionCancel"),Di(wm,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],V=R.instance,et=R.currentTarget;if(R=R.listener,V!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=et;try{h(u)}catch(dt){Ol(dt)}u.currentTarget=null,h=V}else for(x=0;x<o.length;x++){if(R=o[x],V=R.instance,et=R.currentTarget,R=R.listener,V!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=et;try{h(u)}catch(dt){Ol(dt)}u.currentTarget=null,h=V}}}}function Se(e,n){var a=n[Da];a===void 0&&(a=n[Da]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function yh(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Sh(e){if(!e[yc]){e[yc]=!0,Rl.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||yh(a,!1,e),yh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[yc]||(n[yc]=!0,yh("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(A_(n)){case 2:var u=VS;break;case 8:u=kS;break;default:u=zh}a=u.bind(null,n,a,e),u=void 0,!Hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Mh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ua(R),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){o=h=x;continue t}R=R.parentNode}}o=o.return}nm(function(){var et=h,dt=Iu(a),vt=[];t:{var st=Dm.get(e);if(st!==void 0){var ct=Nl,jt=e;switch(e){case"keypress":if(wl(a)===0)break t;case"keydown":case"keyup":ct=oy;break;case"focusin":jt="focus",ct=Xu;break;case"focusout":jt="blur",ct=Xu;break;case"beforeblur":case"afterblur":ct=Xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=uy;break;case Am:case Rm:case Cm:ct=Jx;break;case wm:ct=hy;break;case"scroll":case"scrollend":ct=Yx;break;case"wheel":ct=py;break;case"copy":case"cut":case"paste":ct=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=om;break;case"toggle":case"beforetoggle":ct=gy}var ne=(n&4)!==0,je=!ne&&(e==="scroll"||e==="scrollend"),Q=ne?st!==null?st+"Capture":null:st;ne=[];for(var j=et,tt;j!==null;){var _t=j;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||Q===null||(_t=ho(j,Q),_t!=null&&ne.push(jo(j,_t,tt))),je)break;j=j.return}0<ne.length&&(st=new ct(st,jt,null,a,dt),vt.push({event:st,listeners:ne}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",st&&a!==Bu&&(jt=a.relatedTarget||a.fromElement)&&(Ua(jt)||jt[ta]))break t;if((ct||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(jt=a.relatedTarget||a.toElement,ct=et,jt=jt?Ua(jt):null,jt!==null&&(je=c(jt),ne=jt.tag,jt!==je||ne!==5&&ne!==27&&ne!==6)&&(jt=null)):(ct=null,jt=et),ct!==jt)){if(ne=sm,_t="onMouseLeave",Q="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ne=om,_t="onPointerLeave",Q="onPointerEnter",j="pointer"),je=ct==null?st:Ms(ct),tt=jt==null?st:Ms(jt),st=new ne(_t,j+"leave",ct,a,dt),st.target=je,st.relatedTarget=tt,_t=null,Ua(dt)===et&&(ne=new ne(Q,j+"enter",jt,a,dt),ne.target=tt,ne.relatedTarget=je,_t=ne),je=_t,ct&&jt)e:{for(ne=mS,Q=ct,j=jt,tt=0,_t=Q;_t;_t=ne(_t))tt++;_t=0;for(var $t=j;$t;$t=ne($t))_t++;for(;0<tt-_t;)Q=ne(Q),tt--;for(;0<_t-tt;)j=ne(j),_t--;for(;tt--;){if(Q===j||j!==null&&Q===j.alternate){ne=Q;break e}Q=ne(Q),j=ne(j)}ne=null}else ne=null;ct!==null&&Jg(vt,st,ct,ne,!1),jt!==null&&je!==null&&Jg(vt,je,jt,ne,!0)}}t:{if(st=et?Ms(et):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var De=mm;else if(dm(st))if(gm)De=Ay;else{De=Ey;var qt=by}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&Pe(et.elementType)&&(De=mm):De=Ty;if(De&&(De=De(e,et))){pm(vt,De,a,dt);break t}qt&&qt(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&xe(st,"number",st.value)}switch(qt=et?Ms(et):window,e){case"focusin":(dm(qt)||qt.contentEditable==="true")&&(er=qt,Ku=et,So=null);break;case"focusout":So=Ku=er=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Em(vt,a,dt);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":Em(vt,a,dt)}var he;if(ju)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else tr?fm(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(lm&&a.locale!=="ko"&&(tr||be!=="onCompositionStart"?be==="onCompositionEnd"&&tr&&(he=im()):(za=dt,Gu="value"in za?za.value:za.textContent,tr=!0)),qt=Sc(et,be),0<qt.length&&(be=new rm(be,e,null,a,dt),vt.push({event:be,listeners:qt}),he?be.data=he:(he=hm(a),he!==null&&(be.data=he)))),(he=vy?xy(e,a):yy(e,a))&&(be=Sc(et,"onBeforeInput"),0<be.length&&(qt=new rm("onBeforeInput","beforeinput",null,a,dt),vt.push({event:qt,listeners:be}),qt.data=he)),fS(vt,e,et,a,dt)}Kg(vt,n)})}function jo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ho(e,a),u!=null&&o.unshift(jo(e,u,h)),u=ho(e,n),u!=null&&o.push(jo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function mS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var R=a,V=R.alternate,et=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||et===null||(V=et,u?(et=ho(a,h),et!=null&&x.unshift(jo(a,et,V))):u||(et=ho(a,h),et!=null&&x.push(jo(a,et,V)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var gS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(gS,`
`).replace(_S,"")}function t_(e,n){return n=$g(n),$g(e)===n}function We(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ii(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ii(e,""+o);break;case"className":Wt(e,"class",o);break;case"tabIndex":Wt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(e,a,o);break;case"style":wi(e,o,h);break;case"data":if(n!=="object"){Wt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),zt(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hi.get(a)||a,zt(e,a,o))}}function bh(e,n,a,o,u,h){switch(a){case"style":wi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ii(e,o):(typeof o=="number"||typeof o=="bigint")&&ii(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Nn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):zt(e,a,o)}}}function Pn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,h,x,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),o&&We(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var R=h=x=u=null,V=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":V=dt;break;case"defaultChecked":et=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:We(e,n,o,dt,a,null)}}Fn(e,h,R,V,et,x,u,!1);return;case"select":Se("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:We(e,n,u,R,a,null)}n=h,a=x,e.multiple=!!o,n!=null?Mn(e,!!o,n,!1):a!=null&&Mn(e,!!o,a,!0);return;case"textarea":Se("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:We(e,n,x,R,a,null)}Ci(e,o,u,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":We(e,n,V,o,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Wo.length;o++)Se(Wo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,et,o,a,null)}return;default:if(Pe(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&bh(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&We(e,n,R,o,a,null))}function vS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,R=null,V=null,et=null,dt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":V=vt;default:o.hasOwnProperty(ct)||We(e,n,ct,null,o,vt)}}for(var st in o){var ct=o[st];if(vt=a[st],o.hasOwnProperty(st)&&(ct!=null||vt!=null))switch(st){case"type":h=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":x=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&We(e,n,st,ct,o,vt)}}Gt(e,x,R,V,et,dt,h,u);return;case"select":ct=x=R=st=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ct=V;default:o.hasOwnProperty(h)||We(e,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":st=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==V&&We(e,n,u,h,o,V)}n=R,a=x,o=ct,st!=null?Mn(e,!!a,st,!1):!!o!=!!a&&(n!=null?Mn(e,!!a,n,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(e,n,R,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&We(e,n,x,u,o,h)}ni(e,st,ct);return;case"option":for(var jt in a)st=a[jt],a.hasOwnProperty(jt)&&st!=null&&!o.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:We(e,n,jt,null,o,st));for(V in o)st=o[V],ct=a[V],o.hasOwnProperty(V)&&st!==ct&&(st!=null||ct!=null)&&(V==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":We(e,n,V,st,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)st=a[ne],a.hasOwnProperty(ne)&&st!=null&&!o.hasOwnProperty(ne)&&We(e,n,ne,null,o,st);for(et in o)if(st=o[et],ct=a[et],o.hasOwnProperty(et)&&st!==ct&&(st!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:We(e,n,et,st,o,ct)}return;default:if(Pe(n)){for(var je in a)st=a[je],a.hasOwnProperty(je)&&st!==void 0&&!o.hasOwnProperty(je)&&bh(e,n,je,void 0,o,st);for(dt in o)st=o[dt],ct=a[dt],!o.hasOwnProperty(dt)||st===ct||st===void 0&&ct===void 0||bh(e,n,dt,st,o,ct);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!o.hasOwnProperty(Q)&&We(e,n,Q,null,o,st);for(vt in o)st=o[vt],ct=a[vt],!o.hasOwnProperty(vt)||st===ct||st==null&&ct==null||We(e,n,vt,st,o,ct)}function e_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,R=u.duration;if(h&&R&&e_(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],et=V.startTime;if(et>R)break;var dt=V.transferSize,vt=V.initiatorType;dt&&e_(vt)&&(V=V.responseEnd,x+=dt*(V<R?1:(R-et)/(V-et)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eh=null,Th=null;function Mc(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ah(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rh=null;function yS(){var e=window.event;return e&&e.type==="popstate"?e===Rh?!1:(Rh=e,!0):(Rh=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(e){return s_.resolve(null).then(e).catch(bS)}:a_;function bS(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function r_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Yo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Yo(e.ownerDocument.body);a=u}while(a);Cr(n)}function o_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ch(a),fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ES(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Na])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function TS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function l_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function wh(e){return e.data==="$?"||e.data==="$~"}function Dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function AS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Nh=null;function c_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function f_(e,n,a){switch(n=Mc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fo(e)}var Ei=new Map,h_=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=F.d;F.d={f:RS,r:CS,D:wS,C:DS,L:NS,m:US,X:OS,S:LS,M:PS};function RS(){var e=_a.f(),n=pc();return e||n}function CS(e){var n=La(e);n!==null&&n.tag===5&&n.type==="form"?w0(n):_a.r(e)}var Tr=typeof document>"u"?null:document;function d_(e,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=Ie(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),h_.has(u)||(h_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Pn(n,"link",e),mn(n),o.head.appendChild(n)))}}function wS(e){_a.D(e),d_("dns-prefetch",e,null)}function DS(e,n){_a.C(e,n),d_("preconnect",e,n)}function NS(e,n,a){_a.L(e,n,a);var o=Tr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ie(a.imageSizes)+'"]')):u+='[href="'+Ie(e)+'"]';var h=u;switch(n){case"style":h=Ar(e);break;case"script":h=Rr(e)}Ei.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ei.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(h))||n==="script"&&o.querySelector(Zo(h))||(n=o.createElement("link"),Pn(n,"link",e),mn(n),o.head.appendChild(n)))}}function US(e,n){_a.m(e,n);var a=Tr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ie(o)+'"][href="'+Ie(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Rr(e)}if(!Ei.has(h)&&(e=v({rel:"modulepreload",href:e},n),Ei.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(h)))return}o=a.createElement("link"),Pn(o,"link",e),mn(o),a.head.appendChild(o)}}}function LS(e,n,a){_a.S(e,n,a);var o=Tr;if(o&&e){var u=Oa(o).hoistableStyles,h=Ar(e);n=n||"default";var x=u.get(h);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(qo(h)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ei.get(h))&&Uh(e,a);var V=x=o.createElement("link");mn(V),Pn(V,"link",e),V._p=new Promise(function(et,dt){V.onload=et,V.onerror=dt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ec(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(h,x)}}}function OS(e,n){_a.X(e,n);var a=Tr;if(a&&e){var o=Oa(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=v({src:e,async:!0},n),(n=Ei.get(u))&&Lh(e,n),h=a.createElement("script"),mn(h),Pn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function PS(e,n){_a.M(e,n);var a=Tr;if(a&&e){var o=Oa(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Ei.get(u))&&Lh(e,n),h=a.createElement("script"),mn(h),Pn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function p_(e,n,a,o){var u=(u=rt.current)?bc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ar(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ar(a.href);var h=Oa(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(qo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Ei.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(e,a),h||zS(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ar(e){return'href="'+Ie(e)+'"'}function qo(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function zS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Pn(n,"link",a),mn(n),e.head.appendChild(n))}function Rr(e){return'[src="'+Ie(e)+'"]'}function Zo(e){return"script[async]"+e}function g_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ie(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),mn(o),Pn(o,"style",u),Ec(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ar(a.href);var h=e.querySelector(qo(u));if(h)return n.state.loading|=4,n.instance=h,mn(h),h;o=m_(a),(u=Ei.get(u))&&Uh(o,u),h=(e.ownerDocument||e).createElement("link"),mn(h);var x=h;return x._p=new Promise(function(R,V){x.onload=R,x.onerror=V}),Pn(h,"link",o),n.state.loading|=4,Ec(h,a.precedence,e),n.instance=h;case"script":return h=Rr(a.src),(u=e.querySelector(Zo(h)))?(n.instance=u,mn(u),u):(o=a,(u=Ei.get(h))&&(o=v({},a),Lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),mn(u),Pn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ec(o,a.precedence,e));return n.instance}function Ec(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Uh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Tc=null;function __(e,n,a){if(Tc===null){var o=new Map,u=Tc=new Map;u.set(a,o)}else u=Tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Na]||h[fn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(h):o.set(x,[h])}}return o}function v_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function BS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function IS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),h=n.querySelector(qo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,mn(h);return}h=n.ownerDocument||n,o=m_(o),(u=Ei.get(u))&&Uh(o,u),h=h.createElement("link"),mn(h);var x=h;x._p=new Promise(function(R,V){x.onload=R,x.onerror=V}),Pn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Oh=0;function FS(e,n){return e.stylesheets&&e.count===0&&Cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Cc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Oh===0&&(Oh=62500*xS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Oh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rc=null;function Cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rc=new Map,n.forEach(HS,e),Rc=null,Ac.call(e))}function HS(e,n){if(!(n.state.loading&4)){var a=Rc.get(e);if(a)var o=a.get(null);else{a=new Map,Rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ko={$$typeof:N,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function GS(e,n,a,o,u,h,x,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function y_(e,n,a,o,u,h,x,R,V,et,dt,vt){return e=new GS(e,n,a,x,V,et,dt,vt,R),n=1,h===!0&&(n|=24),h=si(3,null,null,n),e.current=h,h.stateNode=e,n=df(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},_f(h),e}function S_(e){return e?(e=ar,e):ar}function M_(e,n,a,o,u,h){u=S_(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ka(e,o,n),a!==null&&(Jn(a,e,n),Co(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ph(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function E_(e){if(e.tag===13||e.tag===31){var n=Rs(e,67108864);n!==null&&Jn(n,e,67108864),Ph(e,67108864)}}function T_(e){if(e.tag===13||e.tag===31){var n=ui();n=Ss(n);var a=Rs(e,n);a!==null&&Jn(a,e,n),Ph(e,n)}}var wc=!0;function VS(e,n,a,o){var u=L.T;L.T=null;var h=F.p;try{F.p=2,zh(e,n,a,o)}finally{F.p=h,L.T=u}}function kS(e,n,a,o){var u=L.T;L.T=null;var h=F.p;try{F.p=8,zh(e,n,a,o)}finally{F.p=h,L.T=u}}function zh(e,n,a,o){if(wc){var u=Bh(o);if(u===null)Mh(e,n,o,Dc,a),R_(e,o);else if(WS(u,e,n,a,o))o.stopPropagation();else if(R_(e,o),n&4&&-1<XS.indexOf(e)){for(;u!==null;){var h=La(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Rt(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var V=1<<31-Pt(x);R.entanglements[1]|=V,x&=~V}Xi(h),(Le&6)===0&&(hc=Ct()+500,Xo(0))}}break;case 31:case 13:R=Rs(h,2),R!==null&&Jn(R,h,2),pc(),Ph(h,2)}if(h=Bh(o),h===null&&Mh(e,n,o,Dc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Mh(e,n,o,null,a)}}function Bh(e){return e=Iu(e),Ih(e)}var Dc=null;function Ih(e){if(Dc=null,e=Ua(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Dc=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case D:return 2;case b:return 8;case $:case gt:return 32;case St:return 268435456;default:return 32}default:return 32}}var Fh=!1,ts=null,es=null,ns=null,Qo=new Map,Jo=new Map,is=[],XS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(e,n){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=La(n),n!==null&&E_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function WS(e,n,a,o,u){switch(n){case"focusin":return ts=$o(ts,e,n,a,o,u),!0;case"dragenter":return es=$o(es,e,n,a,o,u),!0;case"mouseover":return ns=$o(ns,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Qo.set(h,$o(Qo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Jo.set(h,$o(Jo.get(h)||null,e,n,a,o,u)),!0}return!1}function C_(e){var n=Ua(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,co(e.priority,function(){T_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,co(e.priority,function(){T_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Bu=o,a.target.dispatchEvent(o),Bu=null}else return n=La(a),n!==null&&E_(n),e.blockedOn=a,!1;n.shift()}return!0}function w_(e,n,a){Nc(e)&&a.delete(n)}function jS(){Fh=!1,ts!==null&&Nc(ts)&&(ts=null),es!==null&&Nc(es)&&(es=null),ns!==null&&Nc(ns)&&(ns=null),Qo.forEach(w_),Jo.forEach(w_)}function Uc(e,n){e.blockedOn===n&&(e.blockedOn=null,Fh||(Fh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jS)))}var Lc=null;function D_(e){Lc!==e&&(Lc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Lc===e&&(Lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ih(o||a)===null)continue;break}var h=La(a);h!==null&&(e.splice(n,3),n-=3,Bf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(e){function n(V){return Uc(V,e)}ts!==null&&Uc(ts,e),es!==null&&Uc(es,e),ns!==null&&Uc(ns,e),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&is.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Nn]||null;if(typeof h=="function")x||D_(a);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Nn]||null)R=x.formAction;else if(Ih(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),D_(a)}}}function N_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Hh(e){this._internalRoot=e}Oc.prototype.render=Hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ui();M_(a,o,e,n,null,null)},Oc.prototype.unmount=Hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;M_(e.current,2,null,e,null,null),pc(),n[ta]=null}};function Oc(e){this._internalRoot=e}Oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=lo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,e),a===0&&C_(e)}};var U_=t.version;if(U_!=="19.2.5")throw Error(s(527,U_,"19.2.5"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var YS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{ft=Pc.inject(YS),ht=Pc}catch{}}return el.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=F0,h=H0,x=G0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=y_(e,1,!1,null,null,a,o,null,u,h,x,N_),e[ta]=n.current,Sh(e),new Hh(n)},el.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=F0,x=H0,R=G0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=y_(e,1,!0,n,a??null,o,u,V,h,x,R,N_),n.context=S_(null),a=n.current,o=ui(),o=Ss(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,ie(n,a),Xi(n),e[ta]=n.current,Sh(e),new Oc(n)},el.version="19.2.5",el}var V_;function aM(){if(V_)return kh.exports;V_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kh.exports=iM(),kh.exports}var sM=aM();const hl=(r,t,i)=>Math.max(t,Math.min(i,r)),vu=r=>r*Math.PI/180,nx=(r,t=2)=>Number(r).toFixed(t),Yh=[{key:"pump",title:"1. 紫色泵浦光进入主 BBO",desc:"405 nm 左右的紫色泵浦光被透镜聚焦到主 BBO 晶体中心，提高非线性作用概率。真实实验中严禁直视泵浦光。"},{key:"spdc",title:"2. SPDC 产生一对下转换光子",desc:"一个高能泵浦光子以很小概率劈裂成两个低能光子，近似满足能量守恒与动量守恒：ωp = ωs + ωi，kp = ks + ki。"},{key:"cones",title:"3. 两个光锥交线处取出纠缠光子对",desc:"II 型 SPDC 中 o 光和 e 光分别落在两个相交光锥面上，实验选择交线方向的两路光子作为纠缠对。"},{key:"comp",title:"4. 半波片 + 辅 BBO 补偿走离",desc:"主 BBO 的双折射会造成横向空间走离和纵向时间走离。45° 半波片交换偏振，辅 BBO 把可区分路径信息擦除，恢复相干性。"},{key:"analyze",title:"5. 偏振片选择测量基",desc:"转动两路偏振片角度 θ₁、θ₂，只改变两光子之间的符合计数振荡；单路计数通常不随角度剧烈变化。"},{key:"coincidence",title:"6. 单光子探测 + 符合计数",desc:"两路 APD 把光子转为电脉冲。符合计数器只在时间窗口 τ 内同时到达的脉冲记为一对。窗口太小会漏计，太大则偶然符合增多。"}];function rM({active:r,children:t,onClick:i}){return H.jsx("button",{onClick:i,className:`rounded-full px-3 py-1.5 text-sm transition border ${r?"bg-slate-900 text-white border-slate-900 shadow-sm":"bg-white text-slate-700 border-slate-200 hover:border-slate-400"}`,children:t})}function wr({label:r,min:t,max:i,step:s=1,value:l,onChange:c,suffix:f=""}){return H.jsxs("label",{className:"block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",children:[H.jsxs("div",{className:"mb-2 flex items-center justify-between gap-4",children:[H.jsx("span",{className:"text-sm font-medium text-slate-700",children:r}),H.jsxs("span",{className:"rounded-full bg-slate-100 px-2.5 py-1 text-sm tabular-nums text-slate-800",children:[l,f]})]}),H.jsx("input",{type:"range",min:t,max:i,step:s,value:l,onChange:d=>c(Number(d.target.value)),className:"w-full accent-slate-900"})]})}function Dr({x:r,y:t,children:i,active:s}){return H.jsxs("g",{transform:`translate(${r}, ${t})`,children:[H.jsx("rect",{x:"-42",y:"-18",width:"84",height:"36",rx:"12",className:s?"fill-amber-100 stroke-amber-500":"fill-white stroke-slate-300",strokeWidth:"1.5"}),H.jsx("text",{textAnchor:"middle",dominantBaseline:"middle",className:"fill-slate-700 text-[13px] font-semibold",children:i})]})}function oM({step:r,pumpPower:t,alignment:i,compensated:s,theta1:l,theta2:c,filterBw:f,visibility:d}){const m=g=>r===g,p=hl(.2+t/120,.25,1),_=(100-i)*.28,v=s?1:.35;return H.jsx("div",{className:"overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl",children:H.jsxs("svg",{viewBox:"0 0 1050 520",className:"h-[520px] w-full",children:[H.jsxs("defs",{children:[H.jsxs("linearGradient",{id:"pumpGrad",x1:"0",x2:"1",children:[H.jsx("stop",{offset:"0%",stopColor:"#8b5cf6"}),H.jsx("stop",{offset:"100%",stopColor:"#e879f9"})]}),H.jsxs("linearGradient",{id:"pairGrad",x1:"0",x2:"1",children:[H.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),H.jsx("stop",{offset:"100%",stopColor:"#a7f3d0"})]}),H.jsxs("filter",{id:"glow",children:[H.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),H.jsxs("feMerge",{children:[H.jsx("feMergeNode",{in:"coloredBlur"}),H.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),H.jsx("path",{id:"pumpPath",d:"M90 260 L270 260"}),H.jsx("path",{id:"upperPath",d:`M300 260 C390 ${150+_}, 450 120, 530 122 L900 122`}),H.jsx("path",{id:"lowerPath",d:`M300 260 C390 ${370-_}, 450 400, 530 398 L900 398`})]}),H.jsx("rect",{width:"1050",height:"520",fill:"#020617"}),H.jsx("g",{opacity:"0.45",children:Array.from({length:22}).map((g,y)=>H.jsx("circle",{cx:y*97%1050,cy:y*71%520,r:"1.1",fill:"#94a3b8"},y))}),H.jsx("text",{x:"34",y:"42",className:"fill-white text-[24px] font-bold",children:"双光子纠缠实验光路动画"}),H.jsx("text",{x:"34",y:"72",className:"fill-slate-300 text-[14px]",children:"从泵浦光 → BBO → 光锥交线 → 补偿 → 偏振分析 → 符合计数"}),H.jsx("line",{x1:"40",y1:"470",x2:"1010",y2:"470",stroke:"#334155",strokeWidth:"2",strokeDasharray:"6 10"}),H.jsxs("g",{transform:"translate(54, 220)",children:[H.jsx("rect",{width:"72",height:"80",rx:"16",fill:"#111827",stroke:"#64748b",strokeWidth:"2"}),H.jsx("circle",{cx:"55",cy:"40",r:"13",fill:"#a78bfa",filter:"url(#glow)",opacity:p}),H.jsx("text",{x:"36",y:"104",textAnchor:"middle",className:"fill-slate-200 text-[13px] font-semibold",children:"405 nm 激光"})]}),H.jsxs("g",{transform:"translate(180, 260)",children:[H.jsx("path",{d:"M0 -54 Q26 0 0 54 Q-26 0 0 -54",fill:"#dbeafe",opacity:"0.82",stroke:"#93c5fd",strokeWidth:"2"}),H.jsx("text",{y:"78",textAnchor:"middle",className:"fill-slate-200 text-[13px]",children:"聚焦透镜"})]}),H.jsx("path",{d:"M90 260 L270 260",stroke:"url(#pumpGrad)",strokeWidth:4+t/35,opacity:p,filter:"url(#glow)"}),Array.from({length:4}).map((g,y)=>H.jsx("circle",{r:"5",fill:"#c084fc",filter:"url(#glow)",children:H.jsx("animateMotion",{dur:`${1.8-t/170}s`,repeatCount:"indefinite",begin:`${y*.38}s`,children:H.jsx("mpath",{href:"#pumpPath"})})},`p-${y}`)),H.jsxs("g",{transform:"translate(285, 220)",children:[H.jsx("polygon",{points:"0,0 58,20 58,100 0,80",fill:"#fbbf24",stroke:"#fde68a",strokeWidth:"2"}),H.jsx("line",{x1:"8",y1:"14",x2:"48",y2:"88",stroke:"#7c2d12",strokeWidth:"3"}),H.jsx("text",{x:"30",y:"124",textAnchor:"middle",className:"fill-slate-200 text-[13px] font-semibold",children:"主 BBO"})]}),m("pump")&&H.jsx("circle",{cx:"315",cy:"260",r:"48",fill:"none",stroke:"#fbbf24",strokeWidth:"3",strokeDasharray:"7 7"}),H.jsxs("g",{opacity:m("spdc")||m("cones")?.75:.38,children:[H.jsx("path",{d:"M314 260 C410 135, 520 94, 635 116",fill:"none",stroke:"#38bdf8",strokeWidth:"44",strokeOpacity:"0.12"}),H.jsx("path",{d:"M314 260 C410 385, 520 426, 635 404",fill:"none",stroke:"#38bdf8",strokeWidth:"44",strokeOpacity:"0.12"}),H.jsx("ellipse",{cx:"492",cy:"139",rx:"72",ry:"26",fill:"none",stroke:"#22d3ee",strokeWidth:"2",strokeDasharray:"8 8",opacity:"0.75"}),H.jsx("ellipse",{cx:"492",cy:"381",rx:"72",ry:"26",fill:"none",stroke:"#22d3ee",strokeWidth:"2",strokeDasharray:"8 8",opacity:"0.75"}),H.jsx("text",{x:"470",y:"91",className:"fill-cyan-200 text-[13px]",children:"o/e 光锥交线方向"})]}),H.jsx("path",{d:`M300 260 C390 ${150+_}, 450 120, 530 122 L900 122`,stroke:"url(#pairGrad)",strokeWidth:"4",strokeDasharray:i<65?"7 9":"",opacity:.45+i/180,filter:"url(#glow)",fill:"none"}),H.jsx("path",{d:`M300 260 C390 ${370-_}, 450 400, 530 398 L900 398`,stroke:"url(#pairGrad)",strokeWidth:"4",strokeDasharray:i<65?"7 9":"",opacity:.45+i/180,filter:"url(#glow)",fill:"none"}),Array.from({length:5}).map((g,y)=>H.jsxs(ex.Fragment,{children:[H.jsx("circle",{r:"4.8",fill:"#67e8f9",filter:"url(#glow)",opacity:p,children:H.jsx("animateMotion",{dur:"2.4s",repeatCount:"indefinite",begin:`${y*.38}s`,children:H.jsx("mpath",{href:"#upperPath"})})}),H.jsx("circle",{r:"4.8",fill:"#86efac",filter:"url(#glow)",opacity:p,children:H.jsx("animateMotion",{dur:"2.4s",repeatCount:"indefinite",begin:`${y*.38}s`,children:H.jsx("mpath",{href:"#lowerPath"})})})]},`pair-${y}`)),H.jsx("g",{transform:"translate(536,122) rotate(-38)",children:H.jsx("rect",{x:"-9",y:"-34",width:"18",height:"68",rx:"3",fill:"#cbd5e1",stroke:"#f8fafc"})}),H.jsx("g",{transform:"translate(536,398) rotate(38)",children:H.jsx("rect",{x:"-9",y:"-34",width:"18",height:"68",rx:"3",fill:"#cbd5e1",stroke:"#f8fafc"})}),H.jsx("text",{x:"530",y:"92",textAnchor:"middle",className:"fill-slate-200 text-[13px]",children:"反射镜"}),H.jsx("text",{x:"530",y:"432",textAnchor:"middle",className:"fill-slate-200 text-[13px]",children:"反射镜"}),H.jsx(Dr,{x:625,y:122,active:m("comp"),children:"HWP 45°"}),H.jsx(Dr,{x:720,y:122,active:m("comp"),children:"辅 BBO"}),H.jsx("g",{opacity:v,children:s?null:H.jsx("text",{x:"668",y:"84",className:"fill-rose-300 text-[13px] font-semibold",children:"未补偿：纠缠度降低"})}),H.jsxs("g",{transform:"translate(815,122)",children:[H.jsx("rect",{x:"-27",y:"-27",width:"54",height:"54",rx:"14",fill:m("analyze")?"#fef3c7":"#ffffff",stroke:"#f59e0b",strokeWidth:"1.5"}),H.jsx("line",{x1:"0",y1:"-23",x2:"0",y2:"23",stroke:"#92400e",strokeWidth:"3",transform:`rotate(${l})`}),H.jsxs("text",{y:"48",textAnchor:"middle",className:"fill-slate-200 text-[13px] font-semibold",children:["P₁=",l,"°"]})]}),H.jsx(Dr,{x:890,y:122,active:m("coincidence"),children:"F + 光纤"}),H.jsx(Dr,{x:625,y:398,active:m("comp"),children:"HWP 45°"}),H.jsx(Dr,{x:720,y:398,active:m("comp"),children:"辅 BBO"}),H.jsxs("g",{transform:"translate(815,398)",children:[H.jsx("rect",{x:"-27",y:"-27",width:"54",height:"54",rx:"14",fill:m("analyze")?"#fef3c7":"#ffffff",stroke:"#f59e0b",strokeWidth:"1.5"}),H.jsx("line",{x1:"0",y1:"-23",x2:"0",y2:"23",stroke:"#92400e",strokeWidth:"3",transform:`rotate(${c})`}),H.jsxs("text",{y:"48",textAnchor:"middle",className:"fill-slate-200 text-[13px] font-semibold",children:["P₂=",c,"°"]})]}),H.jsx(Dr,{x:890,y:398,active:m("coincidence"),children:"F + 光纤"}),H.jsxs("g",{transform:"translate(958,100)",children:[H.jsx("rect",{width:"58",height:"46",rx:"12",fill:"#0f172a",stroke:"#67e8f9",strokeWidth:"2"}),H.jsx("circle",{cx:"18",cy:"23",r:"6",fill:"#67e8f9",filter:"url(#glow)"}),H.jsx("text",{x:"29",y:"68",textAnchor:"middle",className:"fill-slate-200 text-[13px]",children:"APD1"})]}),H.jsxs("g",{transform:"translate(958,376)",children:[H.jsx("rect",{width:"58",height:"46",rx:"12",fill:"#0f172a",stroke:"#86efac",strokeWidth:"2"}),H.jsx("circle",{cx:"18",cy:"23",r:"6",fill:"#86efac",filter:"url(#glow)"}),H.jsx("text",{x:"29",y:"68",textAnchor:"middle",className:"fill-slate-200 text-[13px]",children:"APD2"})]}),H.jsx("path",{d:"M988 146 C1030 190, 1030 330, 988 376",stroke:"#e2e8f0",strokeWidth:"2",strokeDasharray:"5 8",fill:"none",opacity:"0.8"}),H.jsxs("g",{transform:"translate(865,232)",children:[H.jsx("rect",{width:"145",height:"70",rx:"18",fill:m("coincidence")?"#ecfeff":"#f8fafc",stroke:"#67e8f9",strokeWidth:"2"}),H.jsx("text",{x:"72",y:"28",textAnchor:"middle",className:"fill-slate-800 text-[15px] font-bold",children:"符合计数器"}),H.jsx("text",{x:"72",y:"52",textAnchor:"middle",className:"fill-slate-600 text-[12px]",children:"τ 窗口判断同一对"})]}),H.jsxs("g",{transform:"translate(40,410)",children:[H.jsx("rect",{width:"280",height:"46",rx:"16",fill:"#0f172a",stroke:"#334155"}),H.jsxs("text",{x:"18",y:"29",className:"fill-slate-200 text-[14px]",children:["滤光片带宽：",f," nm · 可见化演示非真实比例"]})]}),H.jsxs("g",{transform:"translate(370,410)",children:[H.jsx("rect",{width:"285",height:"46",rx:"16",fill:"#0f172a",stroke:"#334155"}),H.jsxs("text",{x:"18",y:"29",className:"fill-slate-200 text-[14px]",children:["当前可见度 V≈",nx(d,2)," · ",d>.71?"可破坏 CHSH 上界":"难以破坏 CHSH 上界"]})]})]})})}function lM({theta1:r,theta2:t,visibility:i}){const l=Sn.useMemo(()=>{const m=[];for(let p=0;p<=180;p+=4){const _=.5*(1-i*Math.cos(2*vu(r+p)));m.push([p,_])}return m},[r,i]).map(([m,p],_)=>`${_===0?"M":"L"} ${20+m/180*280} ${150-p*110}`).join(" "),c=.5*(1-i*Math.cos(2*vu(r+t))),f=20+t/180*280,d=150-c*110;return H.jsxs("svg",{viewBox:"0 0 330 180",className:"h-44 w-full rounded-2xl bg-white",children:[H.jsx("line",{x1:"20",y1:"150",x2:"305",y2:"150",stroke:"#cbd5e1"}),H.jsx("line",{x1:"20",y1:"38",x2:"20",y2:"150",stroke:"#cbd5e1"}),H.jsx("text",{x:"20",y:"170",className:"fill-slate-500 text-[11px]",children:"0°"}),H.jsx("text",{x:"287",y:"170",className:"fill-slate-500 text-[11px]",children:"180°"}),H.jsx("text",{x:"34",y:"28",className:"fill-slate-700 text-[12px] font-semibold",children:"转动 P₂ 时的符合计数振荡"}),H.jsx("path",{d:l,fill:"none",stroke:"#0f172a",strokeWidth:"3"}),H.jsx("circle",{cx:f,cy:d,r:"6",fill:"#f97316"}),H.jsx("line",{x1:f,y1:"150",x2:f,y2:d,stroke:"#f97316",strokeDasharray:"4 4"})]})}function cM(){const[r,t]=Sn.useState("pump"),[i,s]=Sn.useState(72),[l,c]=Sn.useState(86),[f,d]=Sn.useState(!0),[m,p]=Sn.useState(0),[_,v]=Sn.useState(90),[g,y]=Sn.useState(3),[E,C]=Sn.useState(5),M=Sn.useMemo(()=>{const N=l/100,U=i/100,k=hl(.35+g/14,.35,1.15),O=hl(1.04-g/24,.42,.96),B=f?1:.48,T=hl((.55+.44*N)*O*B,.12,.98),P=1-Math.exp(-Math.pow(E/2.2,2)),K=1/(1+Math.max(0,E-5)*.026*U),G=hl(T*P*K,.05,.98),q=3600*U*Math.pow(N,2)*k,lt=q*(E/80)*(.15+U*.4),ut=m+_,Y=Math.max(0,q*.5*(1-G*Math.cos(2*vu(ut)))+lt),L=13e3*U*N*k+250,F=12500*U*N*k+260,ot=G*Math.cos(2*vu(m+_)),mt=2*Math.sqrt(2)*G;return{visibility:G,pairRate:q,accidental:lt,coincidence:Y,singles1:L,singles2:F,E:ot,S:mt}},[l,f,g,i,m,_,E]),S=Yh.find(N=>N.key===r)??Yh[0],w=N=>{N==="good"&&(s(72),c(92),d(!0),y(3),C(5),p(0),v(90),t("coincidence")),N==="badComp"&&(s(72),c(88),d(!1),y(3),C(5),p(0),v(90),t("comp")),N==="back"&&(s(22),c(55),d(!0),y(3),C(5),p(0),v(90),t("cones")),N==="chsh"&&(s(75),c(94),d(!0),y(3),C(5),p(0),v(22.5),t("analyze"))};return H.jsxs("div",{className:"min-h-screen bg-slate-100 p-6 text-slate-900",children:[H.jsx("style",{children:`
        input[type="range"] { cursor: pointer; }
      `}),H.jsxs("div",{className:"mx-auto max-w-7xl space-y-6",children:[H.jsxs("header",{className:"grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",children:[H.jsxs("div",{children:[H.jsx("div",{className:"mb-3 inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100",children:"量子纠缠微视频 · 可交互仪器演示稿"}),H.jsx("h1",{className:"text-3xl font-bold tracking-tight sm:text-4xl",children:"双光子纠缠实验如何运作？"}),H.jsx("p",{className:"mt-2 text-sm font-medium text-slate-500",children:"量子纠缠微视频交互演示"}),H.jsx("p",{className:"mt-3 max-w-3xl text-base leading-7 text-slate-600",children:"这个网页把真实仪器拆成六个动画环节：紫色泵浦光、BBO 中的自发参量下转换、光锥交线取光、走离补偿、偏振分析、单光子符合测量。参数是教学近似模型，用来服务微视频讲解，不替代正式实验数据处理。"})]}),H.jsxs("div",{className:"grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200",children:[H.jsx("button",{onClick:()=>w("good"),className:"rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700",children:"理想对准"}),H.jsx("button",{onClick:()=>w("badComp"),className:"rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 hover:bg-rose-100",children:"关闭补偿"}),H.jsx("button",{onClick:()=>w("back"),className:"rounded-2xl bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-700 hover:bg-cyan-100",children:"反打光调节"}),H.jsx("button",{onClick:()=>w("chsh"),className:"rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700 hover:bg-amber-100",children:"CHSH 角度"})]})]}),H.jsxs("section",{className:"rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200",children:[H.jsx("div",{className:"mb-4 flex flex-wrap gap-2",children:Yh.map(N=>H.jsx(rM,{active:r===N.key,onClick:()=>t(N.key),children:N.title.split(". ")[0]},N.key))}),H.jsxs("div",{className:"grid gap-4 xl:grid-cols-[1fr_360px]",children:[H.jsx(oM,{step:r,pumpPower:i,alignment:l,compensated:f,theta1:m,theta2:_,filterBw:g,visibility:M.visibility}),H.jsxs("aside",{className:"space-y-4",children:[H.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-slate-50 p-5",children:[H.jsx("h2",{className:"text-lg font-bold text-slate-900",children:S.title}),H.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-600",children:S.desc})]}),H.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[H.jsxs("div",{className:"rounded-2xl bg-slate-900 p-4 text-white",children:[H.jsx("div",{className:"text-xs text-slate-300",children:"单路计数 APD1"}),H.jsx("div",{className:"mt-1 text-2xl font-bold tabular-nums",children:Math.round(M.singles1)}),H.jsx("div",{className:"text-xs text-slate-400",children:"counts/s"})]}),H.jsxs("div",{className:"rounded-2xl bg-slate-900 p-4 text-white",children:[H.jsx("div",{className:"text-xs text-slate-300",children:"单路计数 APD2"}),H.jsx("div",{className:"mt-1 text-2xl font-bold tabular-nums",children:Math.round(M.singles2)}),H.jsx("div",{className:"text-xs text-slate-400",children:"counts/s"})]}),H.jsxs("div",{className:"rounded-2xl bg-cyan-50 p-4 text-cyan-900 ring-1 ring-cyan-100",children:[H.jsx("div",{className:"text-xs text-cyan-700",children:"符合计数"}),H.jsx("div",{className:"mt-1 text-2xl font-bold tabular-nums",children:Math.round(M.coincidence)}),H.jsx("div",{className:"text-xs text-cyan-700",children:"pairs/s"})]}),H.jsxs("div",{className:"rounded-2xl bg-amber-50 p-4 text-amber-900 ring-1 ring-amber-100",children:[H.jsx("div",{className:"text-xs text-amber-700",children:"CHSH |S| 估计"}),H.jsx("div",{className:"mt-1 text-2xl font-bold tabular-nums",children:nx(M.S,2)}),H.jsx("div",{className:"text-xs text-amber-700",children:M.S>2?"违反经典上界 2":"未明显违反"})]})]}),H.jsx(lM,{theta1:m,theta2:_,visibility:M.visibility})]})]})]}),H.jsxs("section",{className:"grid gap-4 lg:grid-cols-3",children:[H.jsxs("div",{className:"space-y-4 lg:col-span-2",children:[H.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[H.jsx(wr,{label:"泵浦光功率",min:5,max:100,value:i,onChange:s,suffix:"%"}),H.jsx(wr,{label:"光路对准程度",min:20,max:100,value:l,onChange:c,suffix:"%"}),H.jsx(wr,{label:"滤光片带宽",min:1,max:12,value:g,onChange:y,suffix:" nm"}),H.jsx(wr,{label:"符合时间窗口 τ",min:.5,max:20,step:.5,value:E,onChange:C,suffix:" ns"}),H.jsx(wr,{label:"偏振片 P₁ 角度 θ₁",min:0,max:180,step:.5,value:m,onChange:p,suffix:"°"}),H.jsx(wr,{label:"偏振片 P₂ 角度 θ₂",min:0,max:180,step:.5,value:_,onChange:v,suffix:"°"})]}),H.jsxs("label",{className:"flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm",children:[H.jsxs("span",{children:[H.jsx("span",{className:"block text-sm font-semibold text-slate-800",children:"半波片 + 辅 BBO 走离补偿"}),H.jsx("span",{className:"text-sm text-slate-500",children:"关闭后，两路光子携带可区分路径信息，可见度明显下降。"})]}),H.jsx("input",{type:"checkbox",checked:f,onChange:N=>d(N.target.checked),className:"h-6 w-6 accent-slate-900"})]})]}),H.jsxs("div",{className:"rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200",children:[H.jsx("h2",{className:"text-lg font-bold",children:"微视频讲解脚本提示"}),H.jsxs("div",{className:"mt-4 space-y-4 text-sm leading-6 text-slate-600",children:[H.jsxs("p",{children:[H.jsx("b",{children:"镜头一："}),"让紫色泵浦光进入 BBO，强调“不是每个光子都会下转换，SPDC 概率很低”。"]}),H.jsxs("p",{children:[H.jsx("b",{children:"镜头二："}),"打开光锥，说明实验不是到处接光，而是在两个光锥的交线方向取出一对不可区分路径。"]}),H.jsxs("p",{children:[H.jsx("b",{children:"镜头三："}),"切换“关闭补偿”，展示可见度和 |S| 下降，再打开补偿，说明半波片和辅 BBO 的作用。"]}),H.jsxs("p",{children:[H.jsx("b",{children:"镜头四："}),"转动 P₂ 角度，让符合计数曲线振荡，说明纠缠体现在“两路联合统计”，不是单路亮暗。"]}),H.jsxs("p",{children:[H.jsx("b",{children:"镜头五："}),"点“CHSH 角度”，用 |S| > 2 作为收尾：实验结果不能由局域隐变量模型解释。"]})]})]})]}),H.jsxs("footer",{className:"border-t border-slate-200 px-2 pb-2 pt-5 text-center text-xs leading-6 text-slate-500 sm:text-sm",children:[H.jsx("p",{className:"font-medium text-slate-600",children:"量子纠缠微视频交互演示"}),H.jsx("p",{children:"双光子量子纠缠实验交互演示网站"}),H.jsx("p",{children:"仅用于课程展示、物理实验微视频制作与非商业教学交流。"})]})]})]})}const Cp="184",Jr={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uM=0,k_=1,fM=2,fu=1,hM=2,dl=3,gs=0,ti=1,zi=2,Ea=0,$r=1,ms=2,X_=3,W_=4,dM=5,Xs=100,pM=101,mM=102,gM=103,_M=104,vM=200,xM=201,yM=202,SM=203,Ld=204,Od=205,MM=206,bM=207,EM=208,TM=209,AM=210,RM=211,CM=212,wM=213,DM=214,Pd=0,zd=1,Bd=2,eo=3,Id=4,Fd=5,Hd=6,Gd=7,ix=0,NM=1,UM=2,Ki=0,ax=1,sx=2,rx=3,ox=4,lx=5,cx=6,ux=7,fx=300,qs=301,no=302,qh=303,Zh=304,Nu=306,Vd=1e3,ba=1001,kd=1002,zn=1003,LM=1004,zc=1005,Bn=1006,Kh=1007,js=1008,mi=1009,hx=1010,dx=1011,yl=1012,wp=1013,Ji=1014,qi=1015,Ra=1016,Dp=1017,Np=1018,Sl=1020,px=35902,mx=35899,gx=1021,_x=1022,Ii=1023,Ca=1026,Ys=1027,vx=1028,Up=1029,Zs=1030,Lp=1031,Op=1033,hu=33776,du=33777,pu=33778,mu=33779,Xd=35840,Wd=35841,jd=35842,Yd=35843,qd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,xu=37490,$d=37491,tp=37808,ep=37809,np=37810,ip=37811,ap=37812,sp=37813,rp=37814,op=37815,lp=37816,cp=37817,up=37818,fp=37819,hp=37820,dp=37821,pp=36492,mp=36494,gp=36495,_p=36283,vp=36284,yu=36285,xp=36286,OM=3200,yp=0,PM=1,hs="",di="srgb",Su="srgb-linear",Mu="linear",Ve="srgb",Nr=7680,j_=519,zM=512,BM=513,IM=514,Pp=515,FM=516,HM=517,zp=518,GM=519,Sp=35044,Y_="300 es",Zi=2e3,Ml=2001;function VM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function bu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kM(){const r=bu("canvas");return r.style.display="block",r}const q_={};function Eu(...r){const t="THREE."+r.shift();console.log(t,...r)}function xx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=xx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ae(...r){r=xx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Mp(...r){const t=r.join(" ");t in q_||(q_[t]=!0,ee(...r))}function XM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const WM={[Pd]:zd,[Bd]:Hd,[Id]:Gd,[eo]:Fd,[zd]:Pd,[Hd]:Bd,[Gd]:Id,[Fd]:eo};class xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z_=1234567;const ml=Math.PI/180,bl=180/Math.PI;function Ta(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function de(r,t,i){return Math.max(t,Math.min(i,r))}function Bp(r,t){return(r%t+t)%t}function jM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function YM(r,t,i){return r!==t?(i-r)/(t-r):0}function gl(r,t,i){return(1-i)*r+i*t}function qM(r,t,i,s){return gl(r,t,1-Math.exp(-i*s))}function ZM(r,t=1){return t-Math.abs(Bp(r,t*2)-t)}function KM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function QM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function JM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function $M(r,t){return r+Math.random()*(t-r)}function tb(r){return r*(.5-Math.random())}function eb(r){r!==void 0&&(Z_=r);let t=Z_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nb(r){return r*ml}function ib(r){return r*bl}function ab(r){return(r&r-1)===0&&r!==0}function sb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ob(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*y,d*_,d*p);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const yx={DEG2RAD:ml,RAD2DEG:bl,generateUUID:Ta,clamp:de,euclideanModulo:Bp,mapLinear:jM,inverseLerp:YM,lerp:gl,damp:qM,pingpong:ZM,smoothstep:KM,smootherstep:QM,randInt:JM,randFloat:$M,randFloatSpread:tb,seededRandom:eb,degToRad:nb,radToDeg:ib,isPowerOfTwo:ab,ceilPowerOfTwo:sb,floorPowerOfTwo:rb,setQuaternionFromProperEuler:ob,normalize:ke,denormalize:Bi},Kp=class Kp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kp.prototype.isVector2=!0;let Vt=Kp;class _s{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],E=c[f+2],C=c[f+3];if(v!==C||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+v*C;M<0&&(g=-g,y=-y,E=-E,C=-C,M=-M);let S=1-d;if(M<.9995){const w=Math.acos(M),N=Math.sin(w);S=Math.sin(S*w)/N,d=Math.sin(d*w)/N,m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+C*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+C*d;const w=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=w,p*=w,_*=w,v*=w}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+_*v+m*y-p*g,t[i+1]=m*E+_*g+p*v-d*y,t[i+2]=p*E+_*y+d*g-m*v,t[i+3]=_*E-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"YXZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"ZXY":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"ZYX":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"YZX":this._x=g*_*v+p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v-g*y*E;break;case"XZY":this._x=g*_*v-p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v+g*y*E;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qp=class Qp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(K_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(K_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qp.prototype.isVector3=!0;let I=Qp;const Qh=new I,K_=new _s,Jp=class Jp{constructor(t,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],E=s[8],C=l[0],M=l[3],S=l[6],w=l[1],N=l[4],U=l[7],k=l[2],O=l[5],B=l[8];return c[0]=f*C+d*w+m*k,c[3]=f*M+d*N+m*O,c[6]=f*S+d*U+m*B,c[1]=p*C+_*w+v*k,c[4]=p*M+_*N+v*O,c[7]=p*S+_*U+v*B,c[2]=g*C+y*w+E*k,c[5]=g*M+y*N+E*O,c[8]=g*S+y*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,y=p*c-f*m,E=i*v+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=v*C,t[1]=(l*p-_*s)*C,t[2]=(d*s-l*f)*C,t[3]=g*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=y*C,t[7]=(s*m-p*i)*C,t[8]=(f*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Jh.makeScale(t,i)),this}rotate(t){return this.premultiply(Jh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let le=Jp;const Jh=new le,Q_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lb(){const r={enabled:!0,workingColorSpace:Su,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hs?Mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Mp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Mp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Su]:{primaries:t,whitePoint:s,transfer:Mu,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const Te=lb();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ur;class cb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ur===void 0&&(Ur=bu("canvas")),Ur.width=t.width,Ur.height=t.height;const l=Ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ur}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=bu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Aa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ub=0;class Ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push($h(l[f].image)):c.push($h(l[f]))}else c=$h(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function $h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let fb=0;const td=new I;class kn extends xs{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=ba,l=ba,c=Bn,f=js,d=Ii,m=mi,p=kn.DEFAULT_ANISOTROPY,_=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Ta(),this.name="",this.source=new Ip(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vd:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vd:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=fx;kn.DEFAULT_ANISOTROPY=1;const $p=class $p{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],E=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,k=(S+1)/2,O=(_+g)/4,B=(v+C)/4,T=(E+M)/4;return N>U&&N>k?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=O/s,c=B/s):U>k?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=O/l,c=T/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=B/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((M-E)*(M-E)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(v-C)/w,this.z=(g-_)/w,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this.w=de(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this.w=de(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;let un=$p;class hb extends xs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,t,i),this.scissorTest=!1,this.viewport=new un(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new kn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ip(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends hb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Sx extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class db extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=class Du{constructor(t,i,s,l,c,f,d,m,p,_,v,g,y,E,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,y,E,C,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,y,E,C,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=E,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Du().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Lr.setFromMatrixColumn(t,0).length(),c=1/Lr.setFromMatrixColumn(t,1).length(),f=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,E=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=g-C*p,i[9]=-d*m,i[2]=C-g*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,E=p*_,C=p*v;i[0]=g+C*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=y*d-E,i[6]=C+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,E=p*_,C=p*v;i[0]=g-C*d,i[4]=-f*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*_,i[9]=C-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,E=d*_,C=d*v;i[0]=m*_,i[4]=E*p-y,i[8]=g*p+C,i[1]=m*v,i[5]=C*p+g,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,E=d*m,C=d*p;i[0]=m*_,i[4]=C-g*v,i[8]=E*v+y,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*v+E,i[10]=g-C*v}else if(t.order==="XZY"){const g=f*m,y=f*p,E=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+C,i[5]=f*_,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pb,t,mb)}lookAt(t,i,s){const l=this.elements;return fi.subVectors(t,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ss.crossVectors(s,fi),ss.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ss.crossVectors(s,fi)),ss.normalize(),Bc.crossVectors(fi,ss),l[0]=ss.x,l[4]=Bc.x,l[8]=fi.x,l[1]=ss.y,l[5]=Bc.y,l[9]=fi.y,l[2]=ss.z,l[6]=Bc.z,l[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],E=s[2],C=s[6],M=s[10],S=s[14],w=s[3],N=s[7],U=s[11],k=s[15],O=l[0],B=l[4],T=l[8],P=l[12],K=l[1],G=l[5],q=l[9],lt=l[13],ut=l[2],Y=l[6],L=l[10],F=l[14],ot=l[3],mt=l[7],bt=l[11],z=l[15];return c[0]=f*O+d*K+m*ut+p*ot,c[4]=f*B+d*G+m*Y+p*mt,c[8]=f*T+d*q+m*L+p*bt,c[12]=f*P+d*lt+m*F+p*z,c[1]=_*O+v*K+g*ut+y*ot,c[5]=_*B+v*G+g*Y+y*mt,c[9]=_*T+v*q+g*L+y*bt,c[13]=_*P+v*lt+g*F+y*z,c[2]=E*O+C*K+M*ut+S*ot,c[6]=E*B+C*G+M*Y+S*mt,c[10]=E*T+C*q+M*L+S*bt,c[14]=E*P+C*lt+M*F+S*z,c[3]=w*O+N*K+U*ut+k*ot,c[7]=w*B+N*G+U*Y+k*mt,c[11]=w*T+N*q+U*L+k*bt,c[15]=w*P+N*lt+U*F+k*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],E=t[3],C=t[7],M=t[11],S=t[15],w=m*y-p*g,N=d*y-p*v,U=d*g-m*v,k=f*y-p*_,O=f*g-m*_,B=f*v-d*_;return i*(C*w-M*N+S*U)-s*(E*w-M*k+S*O)+l*(E*N-C*k+S*B)-c*(E*U-C*O+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],E=t[12],C=t[13],M=t[14],S=t[15],w=i*d-s*f,N=i*m-l*f,U=i*p-c*f,k=s*m-l*d,O=s*p-c*d,B=l*p-c*m,T=_*C-v*E,P=_*M-g*E,K=_*S-y*E,G=v*M-g*C,q=v*S-y*C,lt=g*S-y*M,ut=w*lt-N*q+U*G+k*K-O*P+B*T;if(ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ut;return t[0]=(d*lt-m*q+p*G)*Y,t[1]=(l*q-s*lt-c*G)*Y,t[2]=(C*B-M*O+S*k)*Y,t[3]=(g*O-v*B-y*k)*Y,t[4]=(m*K-f*lt-p*P)*Y,t[5]=(i*lt-l*K+c*P)*Y,t[6]=(M*U-E*B-S*N)*Y,t[7]=(_*B-g*U+y*N)*Y,t[8]=(f*q-d*K+p*T)*Y,t[9]=(s*K-i*q-c*T)*Y,t[10]=(E*O-C*U+S*w)*Y,t[11]=(v*U-_*O-y*w)*Y,t[12]=(d*P-f*G-m*T)*Y,t[13]=(i*G-s*P+l*T)*Y,t[14]=(C*N-E*k-M*w)*Y,t[15]=(_*k-v*N+g*w)*Y,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,y=c*_,E=c*v,C=f*_,M=f*v,S=d*v,w=m*p,N=m*_,U=m*v,k=s.x,O=s.y,B=s.z;return l[0]=(1-(C+S))*k,l[1]=(y+U)*k,l[2]=(E-N)*k,l[3]=0,l[4]=(y-U)*O,l[5]=(1-(g+S))*O,l[6]=(M+w)*O,l[7]=0,l[8]=(E+N)*B,l[9]=(M-w)*B,l[10]=(1-(g+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Lr.set(l[0],l[1],l[2]).length();const d=Lr.set(l[4],l[5],l[6]).length(),m=Lr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Li.copy(this);const p=1/f,_=1/d,v=1/m;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,i.setFromRotationMatrix(Li),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Zi,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(d===Zi)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(d===Ml)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Zi,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(d===Zi)E=-2/(f-c),C=-(f+c)/(f-c);else if(d===Ml)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Du.prototype.isMatrix4=!0;let sn=Du;const Lr=new I,Li=new sn,pb=new I(0,0,0),mb=new I(1,1,1),ss=new I,Bc=new I,fi=new I,$_=new sn,tv=new _s;class vs{constructor(t=0,i=0,s=0,l=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-de(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(de(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-de(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(de(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $_.makeRotationFromQuaternion(t),this.setFromRotationMatrix($_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return tv.setFromEuler(this),this.setFromQuaternion(tv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gb=0;const ev=new I,Or=new _s,va=new sn,Ic=new I,nl=new I,_b=new I,vb=new _s,nv=new I(1,0,0),iv=new I(0,1,0),av=new I(0,0,1),sv={type:"added"},xb={type:"removed"},Pr={type:"childadded",child:null},ed={type:"childremoved",child:null};class wn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new I,i=new vs,s=new _s,l=new I(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new le}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(nv,t)}rotateY(t){return this.rotateOnAxis(iv,t)}rotateZ(t){return this.rotateOnAxis(av,t)}translateOnAxis(t,i){return ev.copy(t).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(nv,t)}translateY(t){return this.translateOnAxis(iv,t)}translateZ(t){return this.translateOnAxis(av,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ic.copy(t):Ic.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(nl,Ic,this.up):va.lookAt(Ic,nl,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Or.setFromRotationMatrix(va),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sv),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xb),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sv),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,t,_b),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,vb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new I(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ds extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),S=this._getHandJoint(p,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ds;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function id(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=Bp(t,1),i=de(i,0,1),s=de(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=id(f,c,t+1/3),this.g=id(f,c,t),this.b=id(f,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const s=bx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Te.workingToColorSpace(Vn.copy(this),t),Math.round(de(Vn.r*255,0,255))*65536+Math.round(de(Vn.g*255,0,255))*256+Math.round(de(Vn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,c=Vn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=di){Te.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+i,rs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(rs),t.getHSL(Fc);const s=gl(rs.h,Fc.h,i),l=gl(rs.s,Fc.s,i),c=gl(rs.l,Fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new me;me.NAMES=bx;class Fp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new Fp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sb extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new I,xa=new I,ad=new I,ya=new I,zr=new I,Br=new I,rv=new I,sd=new I,rd=new I,od=new I,ld=new un,cd=new un,ud=new un;class Ai{constructor(t=new I,i=new I,s=new I){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oi.subVectors(l,i),xa.subVectors(s,i),ad.subVectors(t,i);const f=Oi.dot(Oi),d=Oi.dot(xa),m=Oi.dot(ad),p=xa.dot(xa),_=xa.dot(ad),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*_)*g,E=(f*_-d*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(f,ya.y),m.addScaledVector(d,ya.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ld,c.x),f.addScaledVector(cd,c.y),f.addScaledVector(ud,c.z),f}static isFrontFacing(t,i,s,l){return Oi.subVectors(s,i),xa.subVectors(t,i),Oi.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Oi.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;zr.subVectors(l,s),Br.subVectors(c,s),sd.subVectors(t,s);const m=zr.dot(sd),p=Br.dot(sd);if(m<=0&&p<=0)return i.copy(s);rd.subVectors(t,l);const _=zr.dot(rd),v=Br.dot(rd);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(zr,f);od.subVectors(t,c);const y=zr.dot(od),E=Br.dot(od);if(E>=0&&y<=E)return i.copy(c);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Br,d);const M=_*E-y*v;if(M<=0&&v-_>=0&&y-E>=0)return rv.subVectors(c,l),d=(v-_)/(v-_+(y-E)),i.copy(l).addScaledVector(rv,d);const S=1/(M+C+g);return f=C*S,d=g*S,i.copy(s).addScaledVector(zr,f).addScaledVector(Br,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class so{constructor(t=new I(1/0,1/0,1/0),i=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hc.copy(s.boundingBox)),Hc.applyMatrix4(t.matrixWorld),this.union(Hc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(il),Gc.subVectors(this.max,il),Ir.subVectors(t.a,il),Fr.subVectors(t.b,il),Hr.subVectors(t.c,il),os.subVectors(Fr,Ir),ls.subVectors(Hr,Fr),Hs.subVectors(Ir,Hr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Hs.z,Hs.y,os.z,0,-os.x,ls.z,0,-ls.x,Hs.z,0,-Hs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Hs.y,Hs.x,0];return!fd(i,Ir,Fr,Hr,Gc)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,Ir,Fr,Hr,Gc))?!1:(Vc.crossVectors(os,ls),i=[Vc.x,Vc.y,Vc.z],fd(i,Ir,Fr,Hr,Gc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new I,new I,new I,new I,new I,new I,new I,new I],Pi=new I,Hc=new so,Ir=new I,Fr=new I,Hr=new I,os=new I,ls=new I,Hs=new I,il=new I,Gc=new I,Vc=new I,Gs=new I;function fd(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Gs.fromArray(r,c);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),m=t.dot(Gs),p=i.dot(Gs),_=s.dot(Gs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const yn=new I,kc=new Vt;let Mb=0;class Fi extends xs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Sp,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)kc.fromBufferAttribute(this,i),kc.applyMatrix3(t),this.setXY(i,kc.x,kc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Bi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ke(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bi(i,this.array)),i}setX(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bi(i,this.array)),i}setY(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bi(i,this.array)),i}setW(t,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sp&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ex extends Fi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Tx extends Fi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class qe extends Fi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const bb=new so,al=new I,hd=new I;class Uu{constructor(t=new I,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):bb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;al.subVectors(t,this.center);const i=al.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(al,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(al.copy(t.center).add(hd)),this.expandByPoint(al.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Eb=0;const Ti=new sn,dd=new wn,Gr=new I,hi=new so,sl=new so,Cn=new I;class Dn extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(VM(t)?Tx:Ex)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new qe(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(hi.min,sl.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,sl.max),hi.expandByPoint(Cn)):(hi.expandByPoint(sl.min),hi.expandByPoint(sl.max))}hi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Cn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Cn.fromBufferAttribute(d,p),m&&(Gr.fromBufferAttribute(t,p),Cn.add(Gr)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new I,m[T]=new I;const p=new I,_=new I,v=new I,g=new Vt,y=new Vt,E=new Vt,C=new I,M=new I;function S(T,P,K){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),v.fromBufferAttribute(s,K),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,P),E.fromBufferAttribute(c,K),_.sub(p),v.sub(p),y.sub(g),E.sub(g);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(G),d[T].add(C),d[P].add(C),d[K].add(C),m[T].add(M),m[P].add(M),m[K].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,P=w.length;T<P;++T){const K=w[T],G=K.start,q=K.count;for(let lt=G,ut=G+q;lt<ut;lt+=3)S(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const N=new I,U=new I,k=new I,O=new I;function B(T){k.fromBufferAttribute(l,T),O.copy(k);const P=d[T];N.copy(P),N.sub(k.multiplyScalar(k.dot(P))).normalize(),U.crossVectors(O,P);const G=U.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,P=w.length;T<P;++T){const K=w[T],G=K.start,q=K.count;for(let lt=G,ut=G+q;lt<ut;lt+=3)B(t.getX(lt+0)),B(t.getX(lt+1)),B(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new I,c=new I,f=new I,d=new I,m=new I,p=new I,_=new I,v=new I;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),C=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new Fi(g,_,v)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Sp,this.updateRanges=[],this.version=0,this.uuid=Ta()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ta()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new I;class Tu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Wn.fromBufferAttribute(this,i),Wn.applyMatrix4(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Wn.fromBufferAttribute(this,i),Wn.applyNormalMatrix(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Wn.fromBufferAttribute(this,i),Wn.transformDirection(t),this.setXYZ(i,Wn.x,Wn.y,Wn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Bi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ke(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Bi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Eu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Fi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ab=0;class Ks extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=$r,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Od,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ld&&(s.blendSrc=this.blendSrc),this.blendDst!==Od&&(s.blendDst=this.blendDst),this.blendEquation!==Xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ax extends Ks{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vr;const rl=new I,kr=new I,Xr=new I,Wr=new Vt,ol=new Vt,Rx=new sn,Xc=new I,ll=new I,Wc=new I,ov=new Vt,pd=new Vt,lv=new Vt;class Rb extends wn{constructor(t=new Ax){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Dn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Tb(i,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new Tu(s,3,0,!1)),Vr.setAttribute("uv",new Tu(s,2,3,!1))}this.geometry=Vr,this.material=t,this.center=new Vt(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kr.setFromMatrixScale(this.matrixWorld),Rx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kr.multiplyScalar(-Xr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;jc(Xc.set(-.5,-.5,0),Xr,f,kr,l,c),jc(ll.set(.5,-.5,0),Xr,f,kr,l,c),jc(Wc.set(.5,.5,0),Xr,f,kr,l,c),ov.set(0,0),pd.set(1,0),lv.set(1,1);let d=t.ray.intersectTriangle(Xc,ll,Wc,!1,rl);if(d===null&&(jc(ll.set(-.5,.5,0),Xr,f,kr,l,c),pd.set(0,1),d=t.ray.intersectTriangle(Xc,Wc,ll,!1,rl),d===null))return;const m=t.ray.origin.distanceTo(rl);m<t.near||m>t.far||i.push({distance:m,point:rl.clone(),uv:Ai.getInterpolation(rl,Xc,ll,Wc,ov,pd,lv,new Vt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jc(r,t,i,s,l,c){Wr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ol.x=c*Wr.x-l*Wr.y,ol.y=l*Wr.x+c*Wr.y):ol.copy(Wr),r.copy(t),r.x+=ol.x,r.y+=ol.y,r.applyMatrix4(Rx)}const Ma=new I,md=new I,Yc=new I,cs=new I,gd=new I,qc=new I,_d=new I;class Hp{constructor(t=new I,i=new I(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){md.copy(t).add(i).multiplyScalar(.5),Yc.copy(i).sub(t).normalize(),cs.copy(this.origin).sub(md);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Yc),d=cs.dot(this.direction),m=-cs.dot(Yc),p=cs.lengthSq(),_=Math.abs(1-f*f);let v,g,y,E;if(_>0)if(v=f*m-d,g=f*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const C=1/_;v*=C,g*=C,y=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(md).addScaledVector(Yc,g),y}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){gd.subVectors(i,t),qc.subVectors(s,t),_d.crossVectors(gd,qc);let f=this.direction.dot(_d),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cs.subVectors(this.origin,t);const m=d*this.direction.dot(qc.crossVectors(cs,qc));if(m<0)return null;const p=d*this.direction.dot(gd.cross(cs));if(p<0||m+p>f)return null;const _=-d*cs.dot(_d);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ri extends Ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cv=new sn,Vs=new Hp,Zc=new Uu,uv=new I,Kc=new I,Qc=new I,Jc=new I,vd=new I,$c=new I,fv=new I,tu=new I;class on extends wn{constructor(t=new Dn,i=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){$c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(vd.fromBufferAttribute(v,t),f?$c.addScaledVector(vd,_):$c.addScaledVector(vd.sub(i),_))}i.add($c)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Zc.copy(s.boundingSphere),Zc.applyMatrix4(c),Vs.copy(t.ray).recast(t.near),!(Zc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Zc,uv)===null||Vs.origin.distanceToSquared(uv)>(t.far-t.near)**2))&&(cv.copy(c).invert(),Vs.copy(t.ray).applyMatrix4(cv),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Vs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const M=g[E],S=f[M.materialIndex],w=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=w,k=N;U<k;U+=3){const O=d.getX(U),B=d.getX(U+1),T=d.getX(U+2);l=eu(this,S,t,s,p,_,v,O,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=E,S=C;M<S;M+=3){const w=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=eu(this,f,t,s,p,_,v,w,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const M=g[E],S=f[M.materialIndex],w=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=w,k=N;U<k;U+=3){const O=U,B=U+1,T=U+2;l=eu(this,S,t,s,p,_,v,O,B,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=E,S=C;M<S;M+=3){const w=M,N=M+1,U=M+2;l=eu(this,f,t,s,p,_,v,w,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Cb(r,t,i,s,l,c,f,d){let m;if(t.side===ti?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===gs,d),m===null)return null;tu.copy(d),tu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(tu);return p<i.near||p>i.far?null:{distance:p,point:tu.clone(),object:r}}function eu(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Kc),r.getVertexPosition(m,Qc),r.getVertexPosition(p,Jc);const _=Cb(r,t,i,s,Kc,Qc,Jc,fv);if(_){const v=new I;Ai.getBarycoord(fv,Kc,Qc,Jc,v),l&&(_.uv=Ai.getInterpolatedAttribute(l,d,m,p,v,new Vt)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,d,m,p,v,new Vt)),f&&(_.normal=Ai.getInterpolatedAttribute(f,d,m,p,v,new I),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new I,materialIndex:0};Ai.getNormal(Kc,Qc,Jc,g.normal),_.face=g,_.barycoord=v}return _}class wb extends kn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=zn,_=zn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new I,Db=new I,Nb=new le;class fs{constructor(t=new I(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=xd.subVectors(s,i).cross(Db.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(xd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Nb.getNormalMatrix(t),l=this.coplanarPoint(xd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new Uu,Ub=new Vt(.5,.5),nu=new I;class Gp{constructor(t=new fs,i=new fs,s=new fs,l=new fs,c=new fs,f=new fs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Zi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],E=c[8],C=c[9],M=c[10],S=c[11],w=c[12],N=c[13],U=c[14],k=c[15];if(l[0].setComponents(p-f,y-_,S-E,k-w).normalize(),l[1].setComponents(p+f,y+_,S+E,k+w).normalize(),l[2].setComponents(p+d,y+v,S+C,k+N).normalize(),l[3].setComponents(p-d,y-v,S-C,k-N).normalize(),s)l[4].setComponents(m,g,M,U).normalize(),l[5].setComponents(p-m,y-g,S-M,k-U).normalize();else if(l[4].setComponents(p-m,y-g,S-M,k-U).normalize(),i===Zi)l[5].setComponents(p+m,y+g,S+M,k+U).normalize();else if(i===Ml)l[5].setComponents(m,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);const i=Ub.distanceTo(t.center);return ks.radius=.7071067811865476+i,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(nu.x=l.normal.x>0?t.max.x:t.min.x,nu.y=l.normal.y>0?t.max.y:t.min.y,nu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(nu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vp extends Ks{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Au=new I,Ru=new I,hv=new sn,cl=new Hp,iu=new Uu,yd=new I,dv=new I;class Cx extends wn{constructor(t=new Dn,i=new Vp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Au.fromBufferAttribute(i,l-1),Ru.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Au.distanceTo(Ru);t.setAttribute("lineDistance",new qe(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;hv.copy(l).invert(),cl.copy(t.ray).applyMatrix4(hv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let C=y,M=E-1;C<M;C+=p){const S=_.getX(C),w=_.getX(C+1),N=au(this,t,cl,m,S,w,C);N&&i.push(N)}if(this.isLineLoop){const C=_.getX(E-1),M=_.getX(y),S=au(this,t,cl,m,C,M,E-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let C=y,M=E-1;C<M;C+=p){const S=au(this,t,cl,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=au(this,t,cl,m,E-1,y,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function au(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(Au.fromBufferAttribute(d,l),Ru.fromBufferAttribute(d,c),i.distanceSqToSegment(Au,Ru,yd,dv)>s)return;yd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(yd);if(!(p<t.near||p>t.far))return{distance:p,point:dv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const pv=new I,mv=new I;class Lb extends Cx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)pv.fromBufferAttribute(i,l),mv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+pv.distanceTo(mv);t.setAttribute("lineDistance",new qe(s,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wx extends kn{constructor(t=[],i=qs,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ob extends kn{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class io extends kn{constructor(t,i,s=Ji,l,c,f,d=zn,m=zn,p,_=Ca,v=1){if(_!==Ca&&_!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ip(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pb extends io{constructor(t,i=Ji,s=qs,l,c,f=zn,d=zn,m,p=Ca){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dx extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ys extends Dn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(v,2));function E(C,M,S,w,N,U,k,O,B,T,P){const K=U/B,G=k/T,q=U/2,lt=k/2,ut=O/2,Y=B+1,L=T+1;let F=0,ot=0;const mt=new I;for(let bt=0;bt<L;bt++){const z=bt*G-lt;for(let J=0;J<Y;J++){const yt=J*K-q;mt[C]=yt*w,mt[M]=z*N,mt[S]=ut,p.push(mt.x,mt.y,mt.z),mt[C]=0,mt[M]=0,mt[S]=O>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(J/B),v.push(1-bt/T),F+=1}}for(let bt=0;bt<T;bt++)for(let z=0;z<B;z++){const J=g+z+Y*bt,yt=g+z+Y*(bt+1),Tt=g+(z+1)+Y*(bt+1),wt=g+(z+1)+Y*bt;m.push(J,yt,wt),m.push(yt,Tt,wt),ot+=6}d.addGroup(y,ot,P),y+=ot,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Lu extends Dn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],d=[],m=[],p=new I,_=new Vt;f.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let v=0,g=3;v<=i;v++,g+=3){const y=s+v/i*l;p.x=t*Math.cos(y),p.y=t*Math.sin(y),f.push(p.x,p.y,p.z),d.push(0,0,1),_.x=(f[g]/t+1)/2,_.y=(f[g+1]/t+1)/2,m.push(_.x,_.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class El extends Dn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],y=[];let E=0;const C=[],M=s/2;let S=0;w(),f===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(y,2));function w(){const U=new I,k=new I;let O=0;const B=(i-t)/s;for(let T=0;T<=c;T++){const P=[],K=T/c,G=K*(i-t)+t;for(let q=0;q<=l;q++){const lt=q/l,ut=lt*m+d,Y=Math.sin(ut),L=Math.cos(ut);k.x=G*Y,k.y=-K*s+M,k.z=G*L,v.push(k.x,k.y,k.z),U.set(Y,B,L).normalize(),g.push(U.x,U.y,U.z),y.push(lt,1-K),P.push(E++)}C.push(P)}for(let T=0;T<l;T++)for(let P=0;P<c;P++){const K=C[P][T],G=C[P+1][T],q=C[P+1][T+1],lt=C[P][T+1];(t>0||P!==0)&&(_.push(K,G,lt),O+=3),(i>0||P!==c-1)&&(_.push(G,q,lt),O+=3)}p.addGroup(S,O,0),S+=O}function N(U){const k=E,O=new Vt,B=new I;let T=0;const P=U===!0?t:i,K=U===!0?1:-1;for(let q=1;q<=l;q++)v.push(0,M*K,0),g.push(0,K,0),y.push(.5,.5),E++;const G=E;for(let q=0;q<=l;q++){const ut=q/l*m+d,Y=Math.cos(ut),L=Math.sin(ut);B.x=P*L,B.y=M*K,B.z=P*Y,v.push(B.x,B.y,B.z),g.push(0,K,0),O.x=Y*.5+.5,O.y=L*.5*K+.5,y.push(O.x,O.y),E++}for(let q=0;q<l;q++){const lt=k+q,ut=G+q;U===!0?_.push(ut,ut+1,lt):_.push(ut+1,ut,lt),T+=3}p.addGroup(S,T,U===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kp extends El{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new kp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(f-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Vt:new I);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new I,l=[],c=[],f=[],d=new I,m=new sn;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new I)}c[0]=new I,f[0]=new I;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(de(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(de(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nx extends wa{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Vt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=m-this.aX,y=p-this.aY;m=g*_-y*v+this.aX,p=g*v+y*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zb extends Nx{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Xp(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,y=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,y*=_,l(f,d,g,y)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const gv=new I,_v=new I,Sd=new Xp,Md=new Xp,bd=new Xp;class gu extends wa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new I){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(_v.subVectors(l[0],l[1]).add(l[0]),p=_v);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(gv.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=gv),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),C=Math.pow(v.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),Sd.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,C,M),Md.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,C,M),bd.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,C,M)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),Md.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),bd.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(Sd.calc(m),Md.calc(m),bd.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new I().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vv(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*d+c*r+i}function Bb(r,t){const i=1-r;return i*i*t}function Ib(r,t){return 2*(1-r)*r*t}function Fb(r,t){return r*r*t}function _l(r,t,i,s){return Bb(r,t)+Ib(r,i)+Fb(r,s)}function Hb(r,t){const i=1-r;return i*i*i*t}function Gb(r,t){const i=1-r;return 3*i*i*r*t}function Vb(r,t){return 3*(1-r)*r*r*t}function kb(r,t){return r*r*r*t}function vl(r,t,i,s,l){return Hb(r,t)+Gb(r,i)+Vb(r,s)+kb(r,l)}class Xb extends wa{constructor(t=new Vt,i=new Vt,s=new Vt,l=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(vl(t,l.x,c.x,f.x,d.x),vl(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wb extends wa{constructor(t=new I,i=new I,s=new I,l=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new I){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(vl(t,l.x,c.x,f.x,d.x),vl(t,l.y,c.y,f.y,d.y),vl(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jb extends wa{constructor(t=new Vt,i=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Vt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Vt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yb extends wa{constructor(t=new I,i=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new I){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new I){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qb extends wa{constructor(t=new Vt,i=new Vt,s=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(_l(t,l.x,c.x,f.x),_l(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ux extends wa{constructor(t=new I,i=new I,s=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new I){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(_l(t,l.x,c.x,f.x),_l(t,l.y,c.y,f.y),_l(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zb extends wa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Vt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],_=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(vv(d,m.x,p.x,_.x,v.x),vv(d,m.y,p.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Vt().fromArray(l))}return this}}var Kb=Object.freeze({__proto__:null,ArcCurve:zb,CatmullRomCurve3:gu,CubicBezierCurve:Xb,CubicBezierCurve3:Wb,EllipseCurve:Nx,LineCurve:jb,LineCurve3:Yb,QuadraticBezierCurve:qb,QuadraticBezierCurve3:Ux,SplineCurve:Zb});class Tl extends Dn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,y=[],E=[],C=[],M=[];for(let S=0;S<_;S++){const w=S*g-f;for(let N=0;N<p;N++){const U=N*v-c;E.push(U,-w,0),C.push(0,0,1),M.push(N/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<d;w++){const N=w+p*S,U=w+p*(S+1),k=w+1+p*(S+1),O=w+1+p*S;y.push(N,U,O),y.push(U,k,O)}this.setIndex(y),this.setAttribute("position",new qe(E,3)),this.setAttribute("normal",new qe(C,3)),this.setAttribute("uv",new qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ou extends Dn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],v=new I,g=new I,y=[],E=[],C=[],M=[];for(let S=0;S<=s;S++){const w=[],N=S/s;let U=0;S===0&&f===0?U=.5/i:S===s&&m===Math.PI&&(U=-.5/i);for(let k=0;k<=i;k++){const O=k/i;v.x=-t*Math.cos(l+O*c)*Math.sin(f+N*d),v.y=t*Math.cos(f+N*d),v.z=t*Math.sin(l+O*c)*Math.sin(f+N*d),E.push(v.x,v.y,v.z),g.copy(v).normalize(),C.push(g.x,g.y,g.z),M.push(O+U,1-N),w.push(p++)}_.push(w)}for(let S=0;S<s;S++)for(let w=0;w<i;w++){const N=_[S][w+1],U=_[S][w],k=_[S+1][w],O=_[S+1][w+1];(S!==0||f>0)&&y.push(N,U,O),(S!==s-1||m<Math.PI)&&y.push(U,k,O)}this.setIndex(y),this.setAttribute("position",new qe(E,3)),this.setAttribute("normal",new qe(C,3)),this.setAttribute("uv",new qe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ou(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wp extends Dn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],v=[],g=new I,y=new I,E=new I;for(let C=0;C<=s;C++){const M=f+C/s*d;for(let S=0;S<=l;S++){const w=S/l*c;y.x=(t+i*Math.cos(M))*Math.cos(w),y.y=(t+i*Math.cos(M))*Math.sin(w),y.z=i*Math.sin(M),p.push(y.x,y.y,y.z),g.x=t*Math.cos(w),g.y=t*Math.sin(w),E.subVectors(y,g).normalize(),_.push(E.x,E.y,E.z),v.push(S/l),v.push(C/s)}}for(let C=1;C<=s;C++)for(let M=1;M<=l;M++){const S=(l+1)*C+M-1,w=(l+1)*(C-1)+M-1,N=(l+1)*(C-1)+M,U=(l+1)*C+M;m.push(S,w,U),m.push(w,N,U)}this.setIndex(m),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jp extends Dn{constructor(t=new Ux(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new I,m=new I,p=new Vt;let _=new I;const v=[],g=[],y=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(y,2));function C(){for(let N=0;N<i;N++)M(N);M(c===!1?i:0),w(),S()}function M(N){_=t.getPointAt(N/i,_);const U=f.normals[N],k=f.binormals[N];for(let O=0;O<=l;O++){const B=O/l*Math.PI*2,T=Math.sin(B),P=-Math.cos(B);m.x=P*U.x+T*k.x,m.y=P*U.y+T*k.y,m.z=P*U.z+T*k.z,m.normalize(),g.push(m.x,m.y,m.z),d.x=_.x+s*m.x,d.y=_.y+s*m.y,d.z=_.z+s*m.z,v.push(d.x,d.y,d.z)}}function S(){for(let N=1;N<=i;N++)for(let U=1;U<=l;U++){const k=(l+1)*(N-1)+(U-1),O=(l+1)*N+(U-1),B=(l+1)*N+U,T=(l+1)*(N-1)+U;E.push(k,O,T),E.push(O,B,T)}}function w(){for(let N=0;N<=i;N++)for(let U=0;U<=l;U++)p.x=N/i,p.y=U/l,y.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new jp(new Kb[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ao(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(xv(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(xv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function jn(r){const t={};for(let i=0;i<r.length;i++){const s=ao(r[i]);for(const l in s)t[l]=s[l]}return t}function xv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Qb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Lx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Jb={clone:ao,merge:jn};var $b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$b,this.fragmentShader=tE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=Qb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class eE extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cu extends Ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nE extends Cu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class iE extends Ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aE extends Ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sE extends Vp{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Yp extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ed=new sn,yv=new I,Sv=new I;class Ox{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;yv.setFromMatrixPosition(t.matrixWorld),i.position.copy(yv),Sv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Sv),i.updateMatrixWorld(),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ml||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new I,ru=new _s,Wi=new I;class Px extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(su,ru,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(su,ru,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new I,Mv=new Vt,bv=new Vt;class pi extends Px{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,i){return this.getViewBounds(t,Mv,bv),i.subVectors(bv,Mv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ml*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class rE extends Ox{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class zx extends Yp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new rE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class qp extends Px{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends Ox{constructor(){super(new qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lE extends Yp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new oE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class cE extends Yp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const jr=-90,Yr=1;class uE extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(jr,Yr,t,i);l.layers=this.layers,this.add(l);const c=new pi(jr,Yr,t,i);c.layers=this.layers,this.add(c);const f=new pi(jr,Yr,t,i);f.layers=this.layers,this.add(f);const d=new pi(jr,Yr,t,i);d.layers=this.layers,this.add(d);const m=new pi(jr,Yr,t,i);m.layers=this.layers,this.add(m);const p=new pi(jr,Yr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ml)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class fE extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class Ev{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(de(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const tm=class tm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};tm.prototype.isMatrix2=!0;let Tv=tm;class dE extends Lb{constructor(t=10,i=10,s=4473924,l=8947848){s=new me(s),l=new me(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let g=0,y=0,E=-d;g<=i;g++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const C=g===c?s:l;C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3}const _=new Dn;_.setAttribute("position",new qe(m,3)),_.setAttribute("color",new qe(p,3));const v=new Vp({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class pE extends xs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Av(r,t,i,s){const l=mE(s);switch(i){case gx:return r*t;case vx:return r*t/l.components*l.byteLength;case Up:return r*t/l.components*l.byteLength;case Zs:return r*t*2/l.components*l.byteLength;case Lp:return r*t*2/l.components*l.byteLength;case _x:return r*t*3/l.components*l.byteLength;case Ii:return r*t*4/l.components*l.byteLength;case Op:return r*t*4/l.components*l.byteLength;case hu:case du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wd:case Yd:return Math.max(r,16)*Math.max(t,8)/4;case Xd:case jd:return Math.max(r,8)*Math.max(t,8)/2;case qd:case Zd:case Qd:case Jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kd:case xu:case $d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case np:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ip:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ap:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case op:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case lp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case up:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case fp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case hp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case dp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case pp:case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _p:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case yu:case xp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mE(r){switch(r){case mi:case hx:return{byteLength:1,components:1};case yl:case dx:case Ra:return{byteLength:2,components:1};case Dp:case Np:return{byteLength:2,components:4};case Ji:case wp:case qi:return{byteLength:4,components:1};case px:case mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);function Bx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function gE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<v.length;y++){const E=v[g],C=v[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,v[g]=C)}v.length=g+1;for(let y=0,E=v.length;y<E;y++){const C=v[y];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var _E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,HE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,c1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ET=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:_E,alphahash_pars_fragment:vE,alphamap_fragment:xE,alphamap_pars_fragment:yE,alphatest_fragment:SE,alphatest_pars_fragment:ME,aomap_fragment:bE,aomap_pars_fragment:EE,batching_pars_vertex:TE,batching_vertex:AE,begin_vertex:RE,beginnormal_vertex:CE,bsdfs:wE,iridescence_fragment:DE,bumpmap_pars_fragment:NE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:PE,color_fragment:zE,color_pars_fragment:BE,color_pars_vertex:IE,color_vertex:FE,common:HE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:VE,displacementmap_pars_vertex:kE,displacementmap_vertex:XE,emissivemap_fragment:WE,emissivemap_pars_fragment:jE,colorspace_fragment:YE,colorspace_pars_fragment:qE,envmap_fragment:ZE,envmap_common_pars_fragment:KE,envmap_pars_fragment:QE,envmap_pars_vertex:JE,envmap_physical_pars_fragment:c1,envmap_vertex:$E,fog_vertex:t1,fog_pars_vertex:e1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:s1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:o1,lights_pars_begin:l1,lights_toon_fragment:u1,lights_toon_pars_fragment:f1,lights_phong_fragment:h1,lights_phong_pars_fragment:d1,lights_physical_fragment:p1,lights_physical_pars_fragment:m1,lights_fragment_begin:g1,lights_fragment_maps:_1,lights_fragment_end:v1,lightprobes_pars_fragment:x1,logdepthbuf_fragment:y1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:M1,logdepthbuf_vertex:b1,map_fragment:E1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:w1,morphinstance_vertex:D1,morphcolor_vertex:N1,morphnormal_vertex:U1,morphtarget_pars_vertex:L1,morphtarget_vertex:O1,normal_fragment_begin:P1,normal_fragment_maps:z1,normal_pars_fragment:B1,normal_pars_vertex:I1,normal_vertex:F1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:G1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:X1,opaque_fragment:W1,packing:j1,premultiplied_alpha_fragment:Y1,project_vertex:q1,dithering_fragment:Z1,dithering_pars_fragment:K1,roughnessmap_fragment:Q1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:tT,shadowmap_vertex:eT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:aT,skinning_vertex:sT,skinnormal_vertex:rT,specularmap_fragment:oT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:fT,transmission_pars_fragment:hT,uv_pars_fragment:dT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:_T,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:yT,cube_vert:ST,cube_frag:MT,depth_vert:bT,depth_frag:ET,distance_vert:TT,distance_frag:AT,equirect_vert:RT,equirect_frag:CT,linedashed_vert:wT,linedashed_frag:DT,meshbasic_vert:NT,meshbasic_frag:UT,meshlambert_vert:LT,meshlambert_frag:OT,meshmatcap_vert:PT,meshmatcap_frag:zT,meshnormal_vert:BT,meshnormal_frag:IT,meshphong_vert:FT,meshphong_frag:HT,meshphysical_vert:GT,meshphysical_frag:VT,meshtoon_vert:kT,meshtoon_frag:XT,points_vert:WT,points_frag:jT,shadow_vert:YT,shadow_frag:qT,sprite_vert:ZT,sprite_frag:KT},Ht={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Yi={basic:{uniforms:jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:jn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:jn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new me(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:jn([Ht.points,Ht.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:jn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:jn([Ht.common,Ht.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:jn([Ht.sprite,Ht.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:jn([Ht.common,Ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:jn([Ht.lights,Ht.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Yi.physical={uniforms:jn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ou={r:0,b:0,g:0},QT=new sn,Ix=new le;Ix.set(-1,0,0,0,1,0,0,0,1);function JT(r,t,i,s,l,c){const f=new me(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function y(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const U=w.backgroundBlurriness>0;N=t.get(N,U)}return N}function E(w){let N=!1;const U=y(w);U===null?M(f,d):U&&U.isColor&&(M(U,1),N=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(w,N){const U=y(N);U&&(U.isCubeTexture||U.mapping===Nu)?(p===void 0&&(p=new on(new ys(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:ao(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(N.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ix),p.material.toneMapped=Te.getTransfer(U.colorSpace)!==Ve,(_!==U||v!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,v=U.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new on(new Tl(2,2),new $i({name:"BackgroundMaterial",uniforms:ao(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Te.getTransfer(U.colorSpace)!==Ve,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,N){w.getRGB(ou,Lx(r)),i.buffers.color.setClear(ou.r,ou.g,ou.b,N,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,N=1){f.set(w),d=N,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,M(f,d)},render:E,addToRenderList:C,dispose:S}}function $T(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,q,lt,ut,Y){let L=!1;const F=v(G,ut,lt,q);c!==F&&(c=F,p(c.object)),L=y(G,ut,lt,Y),L&&E(G,ut,lt,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(L||f)&&(f=!1,U(G,q,lt,ut),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,q,lt,ut){const Y=ut.wireframe===!0;let L=s[q.id];L===void 0&&(L={},s[q.id]=L);const F=G.isInstancedMesh===!0?G.id:0;let ot=L[F];ot===void 0&&(ot={},L[F]=ot);let mt=ot[lt.id];mt===void 0&&(mt={},ot[lt.id]=mt);let bt=mt[Y];return bt===void 0&&(bt=g(m()),mt[Y]=bt),bt}function g(G){const q=[],lt=[],ut=[];for(let Y=0;Y<i;Y++)q[Y]=0,lt[Y]=0,ut[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:lt,attributeDivisors:ut,object:G,attributes:{},index:null}}function y(G,q,lt,ut){const Y=c.attributes,L=q.attributes;let F=0;const ot=lt.getAttributes();for(const mt in ot)if(ot[mt].location>=0){const z=Y[mt];let J=L[mt];if(J===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;F++}return c.attributesNum!==F||c.index!==ut}function E(G,q,lt,ut){const Y={},L=q.attributes;let F=0;const ot=lt.getAttributes();for(const mt in ot)if(ot[mt].location>=0){let z=L[mt];z===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(z=G.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),Y[mt]=J,F++}c.attributes=Y,c.attributesNum=F,c.index=ut}function C(){const G=c.newAttributes;for(let q=0,lt=G.length;q<lt;q++)G[q]=0}function M(G){S(G,0)}function S(G,q){const lt=c.newAttributes,ut=c.enabledAttributes,Y=c.attributeDivisors;lt[G]=1,ut[G]===0&&(r.enableVertexAttribArray(G),ut[G]=1),Y[G]!==q&&(r.vertexAttribDivisor(G,q),Y[G]=q)}function w(){const G=c.newAttributes,q=c.enabledAttributes;for(let lt=0,ut=q.length;lt<ut;lt++)q[lt]!==G[lt]&&(r.disableVertexAttribArray(lt),q[lt]=0)}function N(G,q,lt,ut,Y,L,F){F===!0?r.vertexAttribIPointer(G,q,lt,Y,L):r.vertexAttribPointer(G,q,lt,ut,Y,L)}function U(G,q,lt,ut){C();const Y=ut.attributes,L=lt.getAttributes(),F=q.defaultAttributeValues;for(const ot in L){const mt=L[ot];if(mt.location>=0){let bt=Y[ot];if(bt===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor)),bt!==void 0){const z=bt.normalized,J=bt.itemSize,yt=t.get(bt);if(yt===void 0)continue;const Tt=yt.buffer,wt=yt.type,rt=yt.bytesPerElement,xt=wt===r.INT||wt===r.UNSIGNED_INT||bt.gpuType===wp;if(bt.isInterleavedBufferAttribute){const Mt=bt.data,It=Mt.stride,te=bt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<mt.locationSize;Kt++)S(mt.location+Kt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Kt=0;Kt<mt.locationSize;Kt++)M(mt.location+Kt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Kt=0;Kt<mt.locationSize;Kt++)N(mt.location+Kt,J/mt.locationSize,wt,z,It*rt,(te+J/mt.locationSize*Kt)*rt,xt)}else{if(bt.isInstancedBufferAttribute){for(let Mt=0;Mt<mt.locationSize;Mt++)S(mt.location+Mt,bt.meshPerAttribute);G.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Mt=0;Mt<mt.locationSize;Mt++)M(mt.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Mt=0;Mt<mt.locationSize;Mt++)N(mt.location+Mt,J/mt.locationSize,wt,z,J*rt,J/mt.locationSize*Mt*rt,xt)}}else if(F!==void 0){const z=F[ot];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(mt.location,z);break;case 3:r.vertexAttrib3fv(mt.location,z);break;case 4:r.vertexAttrib4fv(mt.location,z);break;default:r.vertexAttrib1fv(mt.location,z)}}}}w()}function k(){P();for(const G in s){const q=s[G];for(const lt in q){const ut=q[lt];for(const Y in ut){const L=ut[Y];for(const F in L)_(L[F].object),delete L[F];delete ut[Y]}}delete s[G]}}function O(G){if(s[G.id]===void 0)return;const q=s[G.id];for(const lt in q){const ut=q[lt];for(const Y in ut){const L=ut[Y];for(const F in L)_(L[F].object),delete L[F];delete ut[Y]}}delete s[G.id]}function B(G){for(const q in s){const lt=s[q];for(const ut in lt){const Y=lt[ut];if(Y[G.id]===void 0)continue;const L=Y[G.id];for(const F in L)_(L[F].object),delete L[F];delete Y[G.id]}}}function T(G){for(const q in s){const lt=s[q],ut=G.isInstancedMesh===!0?G.id:0,Y=lt[ut];if(Y!==void 0){for(const L in Y){const F=Y[L];for(const ot in F)_(F[ot].object),delete F[ot];delete Y[L]}delete lt[ut],Object.keys(lt).length===0&&delete s[q]}}}function P(){K(),f=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:P,resetDefaultState:K,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:w}}function tA(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function eA(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ii&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const T=B===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==mi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==qi&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ee("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:U,maxSamples:k,samples:O}}function nA(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new fs,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const E=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const w=c?0:s,N=w*4;let U=S.clippingState||null;m.value=U,U=_(E,g,N,y);for(let k=0;k!==N;++k)U[k]=i[k];S.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,E){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const S=y+C*4,w=g.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,U=y;N!==C;++N,U+=4)f.copy(v[N]).applyMatrix4(w,d),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}const ps=4,Rv=[.125,.215,.35,.446,.526,.582],Ws=20,iA=256,ul=new qp,Cv=new me;let Td=null,Ad=0,Rd=0,Cd=!1;const aA=new I;class wv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=aA}=c;Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Td,Ad,Rd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Td=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ra,format:Ii,colorSpace:Su,depthBuffer:!1},l=Dv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sA(c)),this._blurMaterial=oA(c,t,i),this._ggxMaterial=rA(c,t,i)}return l}_compileMaterial(t){const i=new on(new Dn,t);this._renderer.compile(i,ul)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Cv),v.toneMapping=Ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new on(new ys,new Ri({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy(Cv),S=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const k=this._cubeSize;qr(l,U*k,N>2?k:0,k,k),v.setRenderTarget(l),S&&v.render(C,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===no;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;qr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ul)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:E}=this,C=this._sizeLods[s],M=3*C*(s>E-ps?s-E+ps:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,qr(c,M,S,3*C,2*C),l.setRenderTarget(c),l.render(d,ul),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,qr(t,M,S,3*C,2*C),l.setRenderTarget(t),l.render(d,ul)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ws-1),C=c/E,M=isFinite(c)?1+Math.floor(_*C):Ws;M>Ws&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const S=[];let w=0;for(let B=0;B<Ws;++B){const T=B/C,P=Math.exp(-T*T/2);S.push(P),B===0?w+=P:B<M&&(w+=2*P)}for(let B=0;B<S.length;B++)S[B]=S[B]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-s;const U=this._sizeLods[l],k=3*U*(l>N-ps?l-N+ps:0),O=4*(this._cubeSize-U);qr(i,k,O,3*U,2*U),m.setRenderTarget(i),m.render(v,ul)}}function sA(r){const t=[],i=[],s=[];let l=r;const c=r-ps+1+Rv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ps?m=Rv[f-r+ps-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,C=3,M=2,S=1,w=new Float32Array(C*E*y),N=new Float32Array(M*E*y),U=new Float32Array(S*E*y);for(let O=0;O<y;O++){const B=O%3*2/3-1,T=O>2?0:-1,P=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];w.set(P,C*E*O),N.set(g,M*E*O);const K=[O,O,O,O,O,O];U.set(K,S*E*O)}const k=new Dn;k.setAttribute("position",new Fi(w,C)),k.setAttribute("uv",new Fi(N,M)),k.setAttribute("faceIndex",new Fi(U,S)),s.push(new on(k,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Dv(r,t,i){const s=new Qi(r,t,i);return s.texture.mapping=Nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function rA(r,t,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function oA(r,t,i){const s=new Float32Array(Ws),l=new I(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Nv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Uv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fx extends Qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new wx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ys(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Ea});c.uniforms.tEquirect.value=i;const f=new on(l,c),d=i.minFilter;return i.minFilter===js&&(i.minFilter=Bn),new uE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function lA(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===qh||y===Zh)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Fx(E.height);return C.fromEquirectangularTexture(r,g),t.set(g,C),g.addEventListener("dispose",p),d(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,E=y===qh||y===Zh,C=y===qs||y===no;if(E||C){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new wv(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const w=g.image;return E&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new wv(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===qh?g.mapping=qs:y===Zh&&(g.mapping=no),g}function m(g){let y=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function cA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mp("WebGLRenderer: "+s+" extension not supported."),l}}}function uA(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const w=y.array;C=y.version;for(let N=0,U=w.length;N<U;N+=3){const k=w[N+0],O=w[N+1],B=w[N+2];g.push(k,O,O,B,B,k)}}else{const w=E.array;C=E.version;for(let N=0,U=w.length/3-1;N<U;N+=3){const k=N+0,O=N+1,B=N+2;g.push(k,O,O,B,B,k)}}const M=new(E.count>=65535?Tx:Ex)(g,1);M.version=C;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function fA(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*f),i.update(g,s,1)}function p(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,v*f,y),i.update(g,s,y))}function _(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let C=0;for(let M=0;M<y;M++)C+=g[M];i.update(C,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function hA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ae("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function dA(r,t,i){const s=new WeakMap,l=new un;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let K=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",K)};var y=K;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let k=d.attributes.position.count*U,O=1;k>t.maxTextureSize&&(O=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const B=new Float32Array(k*O*4*v),T=new Sx(B,k,O,v);T.type=qi,T.needsUpdate=!0;const P=U*4;for(let G=0;G<v;G++){const q=S[G],lt=w[G],ut=N[G],Y=k*O*4*G;for(let L=0;L<q.count;L++){const F=L*P;E===!0&&(l.fromBufferAttribute(q,L),B[Y+F+0]=l.x,B[Y+F+1]=l.y,B[Y+F+2]=l.z,B[Y+F+3]=0),C===!0&&(l.fromBufferAttribute(lt,L),B[Y+F+4]=l.x,B[Y+F+5]=l.y,B[Y+F+6]=l.z,B[Y+F+7]=0),M===!0&&(l.fromBufferAttribute(ut,L),B[Y+F+8]=l.x,B[Y+F+9]=l.y,B[Y+F+10]=l.z,B[Y+F+11]=ut.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Vt(k,O)},s.set(d,g),d.addEventListener("dispose",K)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function pA(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const mA={[ax]:"LINEAR_TONE_MAPPING",[sx]:"REINHARD_TONE_MAPPING",[rx]:"CINEON_TONE_MAPPING",[ox]:"ACES_FILMIC_TONE_MAPPING",[cx]:"AGX_TONE_MAPPING",[ux]:"NEUTRAL_TONE_MAPPING",[lx]:"CUSTOM_TONE_MAPPING"};function gA(r,t,i,s,l){const c=new Qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new io(t,i):void 0}),f=new Qi(t,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),d=new Dn;d.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new qe([0,2,0,0,2,0],2));const m=new eE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new on(d,m),_=new qp(-1,1,1,-1,0,1);let v=null,g=null,y=!1,E,C=null,M=[],S=!1;this.setSize=function(w,N){c.setSize(w,N),f.setSize(w,N);for(let U=0;U<M.length;U++){const k=M[U];k.setSize&&k.setSize(w,N)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,U=c.height;for(let k=0;k<M.length;k++){const O=M[k];O.setSize&&O.setSize(N,U)}},this.begin=function(w,N){if(y||w.toneMapping===Ki&&M.length===0)return!1;if(C=N,N!==null){const U=N.width,k=N.height;(c.width!==U||c.height!==k)&&this.setSize(U,k)}return S===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Ki,!0},this.hasRenderPass=function(){return S},this.end=function(w,N){w.toneMapping=E,y=!0;let U=c,k=f;for(let O=0;O<M.length;O++){const B=M[O];if(B.enabled!==!1&&(B.render(w,k,U,N),B.needsSwap!==!1)){const T=U;U=k,k=T}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},Te.getTransfer(v)===Ve&&(m.defines.SRGB_TRANSFER="");const O=mA[g];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(C),w.render(p,_),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Hx=new kn,bp=new io(1,1),Gx=new Sx,Vx=new db,kx=new wx,Lv=[],Ov=[],Pv=new Float32Array(16),zv=new Float32Array(9),Bv=new Float32Array(4);function ro(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Lv[l];if(c===void 0&&(c=new Float32Array(l),Lv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Tn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function An(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function zu(r,t){let i=Ov[t];i===void 0&&(i=new Int32Array(t),Ov[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function _A(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function vA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;r.uniform2fv(this.addr,t),An(i,t)}}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tn(i,t))return;r.uniform3fv(this.addr,t),An(i,t)}}function yA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;r.uniform4fv(this.addr,t),An(i,t)}}function SA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;Bv.set(s),r.uniformMatrix2fv(this.addr,!1,Bv),An(i,s)}}function MA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;zv.set(s),r.uniformMatrix3fv(this.addr,!1,zv),An(i,s)}}function bA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;Pv.set(s),r.uniformMatrix4fv(this.addr,!1,Pv),An(i,s)}}function EA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function TA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;r.uniform2iv(this.addr,t),An(i,t)}}function AA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;r.uniform3iv(this.addr,t),An(i,t)}}function RA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;r.uniform4iv(this.addr,t),An(i,t)}}function CA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function wA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;r.uniform2uiv(this.addr,t),An(i,t)}}function DA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;r.uniform3uiv(this.addr,t),An(i,t)}}function NA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;r.uniform4uiv(this.addr,t),An(i,t)}}function UA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(bp.compareFunction=i.isReversedDepthBuffer()?zp:Pp,c=bp):c=Hx,i.setTexture2D(t||c,l)}function LA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Vx,l)}function OA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||kx,l)}function PA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Gx,l)}function zA(r){switch(r){case 5126:return _A;case 35664:return vA;case 35665:return xA;case 35666:return yA;case 35674:return SA;case 35675:return MA;case 35676:return bA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return wA;case 36295:return DA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}function BA(r,t){r.uniform1fv(this.addr,t)}function IA(r,t){const i=ro(t,this.size,2);r.uniform2fv(this.addr,i)}function FA(r,t){const i=ro(t,this.size,3);r.uniform3fv(this.addr,i)}function HA(r,t){const i=ro(t,this.size,4);r.uniform4fv(this.addr,i)}function GA(r,t){const i=ro(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function VA(r,t){const i=ro(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function kA(r,t){const i=ro(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function XA(r,t){r.uniform1iv(this.addr,t)}function WA(r,t){r.uniform2iv(this.addr,t)}function jA(r,t){r.uniform3iv(this.addr,t)}function YA(r,t){r.uniform4iv(this.addr,t)}function qA(r,t){r.uniform1uiv(this.addr,t)}function ZA(r,t){r.uniform2uiv(this.addr,t)}function KA(r,t){r.uniform3uiv(this.addr,t)}function QA(r,t){r.uniform4uiv(this.addr,t)}function JA(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=bp:f=Hx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function $A(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Vx,c[f])}function t2(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||kx,c[f])}function e2(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Gx,c[f])}function n2(r){switch(r){case 5126:return BA;case 35664:return IA;case 35665:return FA;case 35666:return HA;case 35674:return GA;case 35675:return VA;case 35676:return kA;case 5124:case 35670:return XA;case 35667:case 35671:return WA;case 35668:case 35672:return jA;case 35669:case 35673:return YA;case 5125:return qA;case 36294:return ZA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return e2}}class i2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zA(i.type)}}class a2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=n2(i.type)}}class s2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Iv(r,t){r.seq.push(t),r.map[t.id]=t}function r2(r,t,i){const s=r.name,l=s.length;for(wd.lastIndex=0;;){const c=wd.exec(s),f=wd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Iv(i,p===void 0?new i2(d,r,t):new a2(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new s2(d),Iv(i,v)),i=v}}}class _u{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);r2(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Fv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const o2=37297;let l2=0;function c2(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Hv=new le;function u2(r){Te._getMatrix(Hv,Te.workingColorSpace,r);const t=`mat3( ${Hv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case Mu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Gv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+c2(r.getShaderSource(t),d)}else return c}function f2(r,t){const i=u2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const h2={[ax]:"Linear",[sx]:"Reinhard",[rx]:"Cineon",[ox]:"ACESFilmic",[cx]:"AgX",[ux]:"Neutral",[lx]:"Custom"};function d2(r,t){const i=h2[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new I;function p2(){Te.getLuminanceCoefficients(lu);const r=lu.x.toFixed(4),t=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pl).join(`
`)}function g2(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function _2(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function pl(r){return r!==""}function Vv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(r){return r.replace(v2,y2)}const x2=new Map;function y2(r,t){let i=pe[t];if(i===void 0){const s=x2.get(t);if(s!==void 0)i=pe[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ep(i)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xv(r){return r.replace(S2,M2)}function M2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Wv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const b2={[fu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function E2(r){return b2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T2={[qs]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function A2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":T2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const R2={[no]:"ENVMAP_MODE_REFRACTION"};function C2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":R2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w2={[ix]:"ENVMAP_BLENDING_MULTIPLY",[NM]:"ENVMAP_BLENDING_MIX",[UM]:"ENVMAP_BLENDING_ADD"};function D2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":w2[r.combine]||"ENVMAP_BLENDING_NONE"}function N2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function U2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=E2(i),p=A2(i),_=C2(i),v=D2(i),g=N2(i),y=m2(i),E=g2(c),C=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(pl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(pl).join(`
`),S.length>0&&(S+=`
`)):(M=[Wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pl).join(`
`),S=[Wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ki?d2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,f2("linearToOutputTexel",i.outputColorSpace),p2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(pl).join(`
`)),f=Ep(f),f=Vv(f,i),f=kv(f,i),d=Ep(d),d=Vv(d,i),d=kv(d,i),f=Xv(f),d=Xv(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+M+f,U=w+S+d,k=Fv(l,l.VERTEX_SHADER,N),O=Fv(l,l.FRAGMENT_SHADER,U);l.attachShader(C,k),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(G){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(k)||"",ut=l.getShaderInfoLog(O)||"",Y=q.trim(),L=lt.trim(),F=ut.trim();let ot=!0,mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,k,O);else{const bt=Gv(l,k,"vertex"),z=Gv(l,O,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+bt+`
`+z)}else Y!==""?ee("WebGLProgram: Program Info Log:",Y):(L===""||F==="")&&(mt=!1);mt&&(G.diagnostics={runnable:ot,programLog:Y,vertexShader:{log:L,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(k),l.deleteShader(O),T=new _u(l,C),P=_2(l,C)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(C,o2)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l2++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=O,this}let L2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new P2(t),i.set(t,s)),s}}class P2{constructor(t){this.id=L2++,this.code=t,this.usedTimes=0}}function z2(r){return r===Zs||r===xu||r===yu}function B2(r,t,i,s,l,c){const f=new Mx,d=new O2,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,P,K,G,q,lt){const ut=G.fog,Y=q.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ot=t.get(T.envMap||L,F),mt=ot&&ot.mapping===Nu?ot.image.height:null,bt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ee("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=z!==void 0?z.length:0;let yt=0;Y.morphAttributes.position!==void 0&&(yt=1),Y.morphAttributes.normal!==void 0&&(yt=2),Y.morphAttributes.color!==void 0&&(yt=3);let Tt,wt,rt,xt;if(bt){const ie=Yi[bt];Tt=ie.vertexShader,wt=ie.fragmentShader}else Tt=T.vertexShader,wt=T.fragmentShader,d.update(T),rt=d.getVertexShaderID(T),xt=d.getFragmentShaderID(T);const Mt=r.getRenderTarget(),It=r.state.buffers.depth.getReversed(),te=q.isInstancedMesh===!0,Kt=q.isBatchedMesh===!0,Oe=!!T.map,fe=!!T.matcap,ge=!!ot,Ce=!!T.aoMap,re=!!T.lightMap,tn=!!T.bumpMap,ze=!!T.normalMap,pn=!!T.displacementMap,X=!!T.emissiveMap,_e=!!T.metalnessMap,Qt=!!T.roughnessMap,Re=T.anisotropy>0,Ct=T.clearcoat>0,Qe=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,$=T.transmission>0,gt=Re&&!!T.anisotropyMap,St=Ct&&!!T.clearcoatMap,At=Ct&&!!T.clearcoatNormalMap,Nt=Ct&&!!T.clearcoatRoughnessMap,ft=D&&!!T.iridescenceMap,ht=D&&!!T.iridescenceThicknessMap,Ut=b&&!!T.sheenColorMap,Pt=b&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Dt=!!T.specularColorMap,ae=!!T.specularIntensityMap,se=$&&!!T.transmissionMap,ve=$&&!!T.thicknessMap,W=!!T.gradientMap,Rt=!!T.alphaMap,pt=T.alphaTest>0,Ft=!!T.alphaHash,Ot=!!T.extensions;let Et=Ki;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Et=r.toneMapping);const Yt={shaderID:bt,shaderType:T.type,shaderName:T.name,vertexShader:Tt,fragmentShader:wt,defines:T.defines,customVertexShaderID:rt,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&q._colorsTexture!==null,instancing:te,instancingColor:te&&q.instanceColor!==null,instancingMorph:te&&q.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:fe,envMap:ge,envMapMode:ge&&ot.mapping,envMapCubeUVHeight:mt,aoMap:Ce,lightMap:re,bumpMap:tn,normalMap:ze,displacementMap:pn,emissiveMap:X,normalMapObjectSpace:ze&&T.normalMapType===PM,normalMapTangentSpace:ze&&T.normalMapType===yp,packedNormalMap:ze&&T.normalMapType===yp&&z2(T.normalMap.format),metalnessMap:_e,roughnessMap:Qt,anisotropy:Re,anisotropyMap:gt,clearcoat:Ct,clearcoatMap:St,clearcoatNormalMap:At,clearcoatRoughnessMap:Nt,dispersion:Qe,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:ht,sheen:b,sheenColorMap:Ut,sheenRoughnessMap:Pt,specularMap:Lt,specularColorMap:Dt,specularIntensityMap:ae,transmission:$,transmissionMap:se,thicknessMap:ve,gradientMap:W,opaque:T.transparent===!1&&T.blending===$r&&T.alphaToCoverage===!1,alphaMap:Rt,alphaTest:pt,alphaHash:Ft,combine:T.combine,mapUv:Oe&&E(T.map.channel),aoMapUv:Ce&&E(T.aoMap.channel),lightMapUv:re&&E(T.lightMap.channel),bumpMapUv:tn&&E(T.bumpMap.channel),normalMapUv:ze&&E(T.normalMap.channel),displacementMapUv:pn&&E(T.displacementMap.channel),emissiveMapUv:X&&E(T.emissiveMap.channel),metalnessMapUv:_e&&E(T.metalnessMap.channel),roughnessMapUv:Qt&&E(T.roughnessMap.channel),anisotropyMapUv:gt&&E(T.anisotropyMap.channel),clearcoatMapUv:St&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&E(T.sheenRoughnessMap.channel),specularMapUv:Lt&&E(T.specularMap.channel),specularColorMapUv:Dt&&E(T.specularColorMap.channel),specularIntensityMapUv:ae&&E(T.specularIntensityMap.channel),transmissionMapUv:se&&E(T.transmissionMap.channel),thicknessMapUv:ve&&E(T.thicknessMap.channel),alphaMapUv:Rt&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ze||Re),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(Oe||Rt),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&ze===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:It,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:yt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:X&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zi,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function M(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const K in T.defines)P.push(K),P.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(S(P,T),w(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function w(T,P){f.disableAll(),P.instancing&&f.enable(0),P.instancingColor&&f.enable(1),P.instancingMorph&&f.enable(2),P.matcap&&f.enable(3),P.envMap&&f.enable(4),P.normalMapObjectSpace&&f.enable(5),P.normalMapTangentSpace&&f.enable(6),P.clearcoat&&f.enable(7),P.iridescence&&f.enable(8),P.alphaTest&&f.enable(9),P.vertexColors&&f.enable(10),P.vertexAlphas&&f.enable(11),P.vertexUv1s&&f.enable(12),P.vertexUv2s&&f.enable(13),P.vertexUv3s&&f.enable(14),P.vertexTangents&&f.enable(15),P.anisotropy&&f.enable(16),P.alphaHash&&f.enable(17),P.batching&&f.enable(18),P.dispersion&&f.enable(19),P.batchingColor&&f.enable(20),P.gradientMap&&f.enable(21),P.packedNormalMap&&f.enable(22),P.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reversedDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.decodeVideoTextureEmissive&&f.enable(20),P.alphaToCoverage&&f.enable(21),P.numLightProbeGrids>0&&f.enable(22),T.push(f.mask)}function N(T){const P=y[T.type];let K;if(P){const G=Yi[P];K=Jb.clone(G.uniforms)}else K=T.uniforms;return K}function U(T,P){let K=_.get(P);return K!==void 0?++K.usedTimes:(K=new U2(r,P,T,l),p.push(K),_.set(P,K)),K}function k(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function B(){d.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:N,acquireProgram:U,releaseProgram:k,releaseShaderCache:O,programs:p,dispose:B}}function I2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function F2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function jv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Yv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,C,M,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:y,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=E,w.materialVariant=f(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=M,w.group=S),t++,w}function m(g,y,E,C,M,S){const w=d(g,y,E,C,M,S);E.transmission>0?s.push(w):E.transparent===!0?l.push(w):i.push(w)}function p(g,y,E,C,M,S){const w=d(g,y,E,C,M,S);E.transmission>0?s.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,y){i.length>1&&i.sort(g||F2),s.length>1&&s.sort(y||jv),l.length>1&&l.sort(y||jv)}function v(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function H2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Yv,r.set(s,[f])):l>=c.length?(f=new Yv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function G2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new I,color:new me};break;case"SpotLight":i={position:new I,direction:new I,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=i,i}}}function V2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let k2=0;function X2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function W2(r){const t=new G2,i=V2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new I);const l=new I,c=new sn,f=new sn;function d(p){let _=0,v=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let y=0,E=0,C=0,M=0,S=0,w=0,N=0,U=0,k=0,O=0,B=0;p.sort(X2);for(let P=0,K=p.length;P<K;P++){const G=p[P],q=G.color,lt=G.intensity,ut=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Zs?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=q.r*lt,v+=q.g*lt,g+=q.b*lt;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],lt);B++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,ot=i.get(G);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=Y,s.directionalShadowMatrix[y]=G.shadow.matrix,w++}s.directional[y]=L,y++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(q).multiplyScalar(lt),L.distance=ut,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[C]=L;const F=G.shadow;if(G.map&&(s.spotLightMap[k]=G.map,k++,F.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[C]=F.matrix,G.castShadow){const ot=i.get(G);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.spotShadow[C]=ot,s.spotShadowMap[C]=Y,U++}C++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(q).multiplyScalar(lt),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=L,M++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const F=G.shadow,ot=i.get(G);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,ot.shadowCameraNear=F.camera.near,ot.shadowCameraFar=F.camera.far,s.pointShadow[E]=ot,s.pointShadowMap[E]=Y,s.pointShadowMatrix[E]=G.shadow.matrix,N++}s.point[E]=L,E++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(lt),L.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[S]=L,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==k||T.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+k-O,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=B,T.directionalLength=y,T.pointLength=E,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=k,T.numLightProbes=B,s.version=k2++)}function m(p,_){let v=0,g=0,y=0,E=0,C=0;const M=_.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const N=p[S];if(N.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function qv(r){const t=new W2(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function j2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new qv(r),t.set(l,[d])):c>=f.length?(d=new qv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z2=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],K2=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Zv=new sn,fl=new I,Dd=new I;function Q2(r,t,i){let s=new Gp;const l=new Vt,c=new Vt,f=new un,d=new iE,m=new aE,p={},_=i.maxTextureSize,v={[gs]:ti,[ti]:gs,[zi]:zi},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Y2,fragmentShader:q2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Dn;E.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new on(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let S=this.type;this.render=function(O,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===hM&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fu);const P=r.getRenderTarget(),K=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const lt=S!==this.type;lt&&B.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(Y=>Y.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,Y=O.length;ut<Y;ut++){const L=O[ut],F=L.shadow;if(F===void 0){ee("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ot=F.getFrameExtents();l.multiply(ot),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ot.x),l.x=c.x*ot.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ot.y),l.y=c.y*ot.y,F.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=mt,F.map===null||lt===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===dl){if(L.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Qi(l.x,l.y,{format:Zs,type:Ra,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new io(l.x,l.y,qi),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=Ca,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zn,F.map.depthTexture.magFilter=zn}else L.isPointLight?(F.map=new Fx(l.x),F.map.depthTexture=new Pb(l.x,Ji)):(F.map=new Qi(l.x,l.y),F.map.depthTexture=new io(l.x,l.y,Ji)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=Ca,this.type===fu?(F.map.depthTexture.compareFunction=mt?zp:Pp,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zn,F.map.depthTexture.magFilter=zn);F.camera.updateProjectionMatrix()}const bt=F.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<bt;z++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,z),r.clear();else{z===0&&(r.setRenderTarget(F.map),r.clear());const J=F.getViewport(z);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),q.viewport(f)}if(L.isPointLight){const J=F.camera,yt=F.matrix,Tt=L.distance||J.far;Tt!==J.far&&(J.far=Tt,J.updateProjectionMatrix()),fl.setFromMatrixPosition(L.matrixWorld),J.position.copy(fl),Dd.copy(J.position),Dd.add(Z2[z]),J.up.copy(K2[z]),J.lookAt(Dd),J.updateMatrixWorld(),yt.makeTranslation(-fl.x,-fl.y,-fl.z),Zv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Zv,J.coordinateSystem,J.reversedDepth)}else F.updateMatrices(L);s=F.getFrustum(),U(B,T,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===dl&&w(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(P,K,G)};function w(O,B){const T=t.update(C);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qi(l.x,l.y,{format:Zs,type:Ra})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,C,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,T,y,C,null)}function N(O,B,T,P){let K=null;const G=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)K=G;else if(K=T.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=K.uuid,lt=B.uuid;let ut=p[q];ut===void 0&&(ut={},p[q]=ut);let Y=ut[lt];Y===void 0&&(Y=K.clone(),ut[lt]=Y,B.addEventListener("dispose",k)),K=Y}if(K.visible=B.visible,K.wireframe=B.wireframe,P===dl?K.side=B.shadowSide!==null?B.shadowSide:B.side:K.side=B.shadowSide!==null?B.shadowSide:v[B.side],K.alphaMap=B.alphaMap,K.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,K.map=B.map,K.clipShadows=B.clipShadows,K.clippingPlanes=B.clippingPlanes,K.clipIntersection=B.clipIntersection,K.displacementMap=B.displacementMap,K.displacementScale=B.displacementScale,K.displacementBias=B.displacementBias,K.wireframeLinewidth=B.wireframeLinewidth,K.linewidth=B.linewidth,T.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const q=r.properties.get(K);q.light=T}return K}function U(O,B,T,P,K){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&K===dl)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const lt=t.update(O),ut=O.material;if(Array.isArray(ut)){const Y=lt.groups;for(let L=0,F=Y.length;L<F;L++){const ot=Y[L],mt=ut[ot.materialIndex];if(mt&&mt.visible){const bt=N(O,mt,P,K);O.onBeforeShadow(r,O,B,T,lt,bt,ot),r.renderBufferDirect(T,null,lt,bt,O,ot),O.onAfterShadow(r,O,B,T,lt,bt,ot)}}}else if(ut.visible){const Y=N(O,ut,P,K);O.onBeforeShadow(r,O,B,T,lt,Y,null),r.renderBufferDirect(T,null,lt,Y,O,null),O.onAfterShadow(r,O,B,T,lt,Y,null)}}const q=O.children;for(let lt=0,ut=q.length;lt<ut;lt++)U(q[lt],B,T,P,K)}function k(O){O.target.removeEventListener("dispose",k);for(const T in p){const P=p[T],K=O.target.uuid;K in P&&(P[K].dispose(),delete P[K])}}}function J2(r,t){function i(){let W=!1;const Rt=new un;let pt=null;const Ft=new un(0,0,0,0);return{setMask:function(Ot){pt!==Ot&&!W&&(r.colorMask(Ot,Ot,Ot,Ot),pt=Ot)},setLocked:function(Ot){W=Ot},setClear:function(Ot,Et,Yt,ie,rn){rn===!0&&(Ot*=ie,Et*=ie,Yt*=ie),Rt.set(Ot,Et,Yt,ie),Ft.equals(Rt)===!1&&(r.clearColor(Ot,Et,Yt,ie),Ft.copy(Rt))},reset:function(){W=!1,pt=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,pt=null,Ft=null,Ot=null;return{setReversed:function(Et){if(Rt!==Et){const Yt=t.get("EXT_clip_control");Et?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Et;const ie=Ot;Ot=null,this.setClear(ie)}},getReversed:function(){return Rt},setTest:function(Et){Et?Mt(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Et){pt!==Et&&!W&&(r.depthMask(Et),pt=Et)},setFunc:function(Et){if(Rt&&(Et=WM[Et]),Ft!==Et){switch(Et){case Pd:r.depthFunc(r.NEVER);break;case zd:r.depthFunc(r.ALWAYS);break;case Bd:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case Id:r.depthFunc(r.EQUAL);break;case Fd:r.depthFunc(r.GEQUAL);break;case Hd:r.depthFunc(r.GREATER);break;case Gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=Et}},setLocked:function(Et){W=Et},setClear:function(Et){Ot!==Et&&(Ot=Et,Rt&&(Et=1-Et),r.clearDepth(Et))},reset:function(){W=!1,pt=null,Ft=null,Ot=null,Rt=!1}}}function l(){let W=!1,Rt=null,pt=null,Ft=null,Ot=null,Et=null,Yt=null,ie=null,rn=null;return{setTest:function(Ue){W||(Ue?Mt(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(Ue){Rt!==Ue&&!W&&(r.stencilMask(Ue),Rt=Ue)},setFunc:function(Ue,gi,ei){(pt!==Ue||Ft!==gi||Ot!==ei)&&(r.stencilFunc(Ue,gi,ei),pt=Ue,Ft=gi,Ot=ei)},setOp:function(Ue,gi,ei){(Et!==Ue||Yt!==gi||ie!==ei)&&(r.stencilOp(Ue,gi,ei),Et=Ue,Yt=gi,ie=ei)},setLocked:function(Ue){W=Ue},setClear:function(Ue){rn!==Ue&&(r.clearStencil(Ue),rn=Ue)},reset:function(){W=!1,Rt=null,pt=null,Ft=null,Ot=null,Et=null,Yt=null,ie=null,rn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},y=new WeakMap,E=[],C=null,M=!1,S=null,w=null,N=null,U=null,k=null,O=null,B=null,T=new me(0,0,0),P=0,K=!1,G=null,q=null,lt=null,ut=null,Y=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ot=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(mt)[1]),F=ot>=1):mt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),F=ot>=2);let bt=null,z={};const J=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Tt=new un().fromArray(J),wt=new un().fromArray(yt);function rt(W,Rt,pt,Ft){const Ot=new Uint8Array(4),Et=r.createTexture();r.bindTexture(W,Et),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<pt;Yt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Ot):r.texImage2D(Rt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ot);return Et}const xt={};xt[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(eo),tn(!1),ze(k_),Mt(r.CULL_FACE),Ce(Ea);function Mt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function It(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function te(W,Rt){return g[W]!==Rt?(r.bindFramebuffer(W,Rt),g[W]=Rt,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Rt),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(W,Rt){let pt=E,Ft=!1;if(W){pt=y.get(Rt),pt===void 0&&(pt=[],y.set(Rt,pt));const Ot=W.textures;if(pt.length!==Ot.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,Yt=Ot.length;Et<Yt;Et++)pt[Et]=r.COLOR_ATTACHMENT0+Et;pt.length=Ot.length,Ft=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(pt)}function Oe(W){return C!==W?(r.useProgram(W),C=W,!0):!1}const fe={[Xs]:r.FUNC_ADD,[pM]:r.FUNC_SUBTRACT,[mM]:r.FUNC_REVERSE_SUBTRACT};fe[gM]=r.MIN,fe[_M]=r.MAX;const ge={[vM]:r.ZERO,[xM]:r.ONE,[yM]:r.SRC_COLOR,[Ld]:r.SRC_ALPHA,[AM]:r.SRC_ALPHA_SATURATE,[EM]:r.DST_COLOR,[MM]:r.DST_ALPHA,[SM]:r.ONE_MINUS_SRC_COLOR,[Od]:r.ONE_MINUS_SRC_ALPHA,[TM]:r.ONE_MINUS_DST_COLOR,[bM]:r.ONE_MINUS_DST_ALPHA,[RM]:r.CONSTANT_COLOR,[CM]:r.ONE_MINUS_CONSTANT_COLOR,[wM]:r.CONSTANT_ALPHA,[DM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(W,Rt,pt,Ft,Ot,Et,Yt,ie,rn,Ue){if(W===Ea){M===!0&&(It(r.BLEND),M=!1);return}if(M===!1&&(Mt(r.BLEND),M=!0),W!==dM){if(W!==S||Ue!==K){if((w!==Xs||k!==Xs)&&(r.blendEquation(r.FUNC_ADD),w=Xs,k=Xs),Ue)switch(W){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ms:r.blendFunc(r.ONE,r.ONE);break;case X_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case W_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",W);break}else switch(W){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case X_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",W);break}N=null,U=null,O=null,B=null,T.set(0,0,0),P=0,S=W,K=Ue}return}Ot=Ot||Rt,Et=Et||pt,Yt=Yt||Ft,(Rt!==w||Ot!==k)&&(r.blendEquationSeparate(fe[Rt],fe[Ot]),w=Rt,k=Ot),(pt!==N||Ft!==U||Et!==O||Yt!==B)&&(r.blendFuncSeparate(ge[pt],ge[Ft],ge[Et],ge[Yt]),N=pt,U=Ft,O=Et,B=Yt),(ie.equals(T)===!1||rn!==P)&&(r.blendColor(ie.r,ie.g,ie.b,rn),T.copy(ie),P=rn),S=W,K=!1}function re(W,Rt){W.side===zi?It(r.CULL_FACE):Mt(r.CULL_FACE);let pt=W.side===ti;Rt&&(pt=!pt),tn(pt),W.blending===$r&&W.transparent===!1?Ce(Ea):Ce(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),X(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function tn(W){G!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),G=W)}function ze(W){W!==uM?(Mt(r.CULL_FACE),W!==q&&(W===k_?r.cullFace(r.BACK):W===fM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),q=W}function pn(W){W!==lt&&(F&&r.lineWidth(W),lt=W)}function X(W,Rt,pt){W?(Mt(r.POLYGON_OFFSET_FILL),(ut!==Rt||Y!==pt)&&(ut=Rt,Y=pt,f.getReversed()&&(Rt=-Rt),r.polygonOffset(Rt,pt))):It(r.POLYGON_OFFSET_FILL)}function _e(W){W?Mt(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function Qt(W){W===void 0&&(W=r.TEXTURE0+L-1),bt!==W&&(r.activeTexture(W),bt=W)}function Re(W,Rt,pt){pt===void 0&&(bt===null?pt=r.TEXTURE0+L-1:pt=bt);let Ft=z[pt];Ft===void 0&&(Ft={type:void 0,texture:void 0},z[pt]=Ft),(Ft.type!==W||Ft.texture!==Rt)&&(bt!==pt&&(r.activeTexture(pt),bt=pt),r.bindTexture(W,Rt||xt[W]),Ft.type=W,Ft.texture=Rt)}function Ct(){const W=z[bt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function b(){try{r.texSubImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function $(){try{r.texSubImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function gt(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function St(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function At(){try{r.texStorage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Nt(){try{r.texStorage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function ft(){try{r.texImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function ht(){try{r.texImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Ut(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function Pt(W,Rt){v[W]!==Rt&&(r.pixelStorei(W,Rt),v[W]=Rt)}function Lt(W){Tt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Tt.copy(W))}function Dt(W){wt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function ae(W,Rt){let pt=p.get(Rt);pt===void 0&&(pt=new WeakMap,p.set(Rt,pt));let Ft=pt.get(W);Ft===void 0&&(Ft=r.getUniformBlockIndex(Rt,W.name),pt.set(W,Ft))}function se(W,Rt){const Ft=p.get(Rt).get(W);m.get(Rt)!==Ft&&(r.uniformBlockBinding(Rt,Ft,W.__bindingPointIndex),m.set(Rt,Ft))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},bt=null,z={},g={},y=new WeakMap,E=[],C=null,M=!1,S=null,w=null,N=null,U=null,k=null,O=null,B=null,T=new me(0,0,0),P=0,K=!1,G=null,q=null,lt=null,ut=null,Y=null,Tt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Mt,disable:It,bindFramebuffer:te,drawBuffers:Kt,useProgram:Oe,setBlending:Ce,setMaterial:re,setFlipSided:tn,setCullFace:ze,setLineWidth:pn,setPolygonOffset:X,setScissorTest:_e,activeTexture:Qt,bindTexture:Re,unbindTexture:Ct,compressedTexImage2D:Qe,compressedTexImage3D:D,texImage2D:ft,texImage3D:ht,pixelStorei:Pt,getParameter:Ut,updateUBOMapping:ae,uniformBlockBinding:se,texStorage2D:At,texStorage3D:Nt,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:gt,compressedTexSubImage3D:St,scissor:Lt,viewport:Dt,reset:ve}}function $2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):bu("canvas")}function M(D,b,$){let gt=1;const St=Qe(D);if((St.width>$||St.height>$)&&(gt=$/Math.max(St.width,St.height)),gt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const At=Math.floor(gt*St.width),Nt=Math.floor(gt*St.height);g===void 0&&(g=C(At,Nt));const ft=b?C(At,Nt):g;return ft.width=At,ft.height=Nt,ft.getContext("2d").drawImage(D,0,0,At,Nt),ee("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+At+"x"+Nt+")."),ft}else return"data"in D&&ee("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),D;return D}function S(D){return D.generateMipmaps}function w(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(D,b,$,gt,St,At=!1){if(D!==null){if(r[D]!==void 0)return r[D];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Nt;gt&&(Nt=t.get("EXT_texture_norm16"),Nt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=b;if(b===r.RED&&($===r.FLOAT&&(ft=r.R32F),$===r.HALF_FLOAT&&(ft=r.R16F),$===r.UNSIGNED_BYTE&&(ft=r.R8),$===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.R16_EXT),$===r.SHORT&&Nt&&(ft=Nt.R16_SNORM_EXT)),b===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.R8UI),$===r.UNSIGNED_SHORT&&(ft=r.R16UI),$===r.UNSIGNED_INT&&(ft=r.R32UI),$===r.BYTE&&(ft=r.R8I),$===r.SHORT&&(ft=r.R16I),$===r.INT&&(ft=r.R32I)),b===r.RG&&($===r.FLOAT&&(ft=r.RG32F),$===r.HALF_FLOAT&&(ft=r.RG16F),$===r.UNSIGNED_BYTE&&(ft=r.RG8),$===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.RG16_EXT),$===r.SHORT&&Nt&&(ft=Nt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.RG8UI),$===r.UNSIGNED_SHORT&&(ft=r.RG16UI),$===r.UNSIGNED_INT&&(ft=r.RG32UI),$===r.BYTE&&(ft=r.RG8I),$===r.SHORT&&(ft=r.RG16I),$===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),$===r.UNSIGNED_INT&&(ft=r.RGB32UI),$===r.BYTE&&(ft=r.RGB8I),$===r.SHORT&&(ft=r.RGB16I),$===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),$===r.UNSIGNED_INT&&(ft=r.RGBA32UI),$===r.BYTE&&(ft=r.RGBA8I),$===r.SHORT&&(ft=r.RGBA16I),$===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&($===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.RGB16_EXT),$===r.SHORT&&Nt&&(ft=Nt.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const ht=At?Mu:Te.getTransfer(St);$===r.FLOAT&&(ft=r.RGBA32F),$===r.HALF_FLOAT&&(ft=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ft=ht===Ve?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Nt&&(ft=Nt.RGBA16_EXT),$===r.SHORT&&Nt&&(ft=Nt.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function k(D,b){let $;return D?b===null||b===Ji||b===Sl?$=r.DEPTH24_STENCIL8:b===qi?$=r.DEPTH32F_STENCIL8:b===yl&&($=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===Sl?$=r.DEPTH_COMPONENT24:b===qi?$=r.DEPTH_COMPONENT32F:b===yl&&($=r.DEPTH_COMPONENT16),$}function O(D,b){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==zn&&D.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function B(D){const b=D.target;b.removeEventListener("dispose",B),P(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),G(b)}function P(D){const b=s.get(D);if(b.__webglInit===void 0)return;const $=D.source,gt=y.get($);if(gt){const St=gt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&K(D),Object.keys(gt).length===0&&y.delete($)}s.remove(D)}function K(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const $=D.source,gt=y.get($);delete gt[b.__cacheKey],f.memory.textures--}function G(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let St=0;St<b.__webglFramebuffer[gt].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[gt][St]);else r.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)r.deleteFramebuffer(b.__webglFramebuffer[gt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=D.textures;for(let gt=0,St=$.length;gt<St;gt++){const At=s.get($[gt]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),f.memory.textures--),s.remove($[gt])}s.remove(D)}let q=0;function lt(){q=0}function ut(){return q}function Y(D){q=D}function L(){const D=q;return D>=l.maxTextures&&ee("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),q+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ot(D,b){const $=s.get(D);if(D.isVideoTexture&&Re(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const gt=D.image;if(gt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{It($,D,b);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+b)}function mt(D,b){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){It($,D,b);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+b)}function bt(D,b){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){It($,D,b);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+b)}function z(D,b){const $=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){te($,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+b)}const J={[Vd]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[kd]:r.MIRRORED_REPEAT},yt={[zn]:r.NEAREST,[LM]:r.NEAREST_MIPMAP_NEAREST,[zc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Kh]:r.LINEAR_MIPMAP_NEAREST,[js]:r.LINEAR_MIPMAP_LINEAR},Tt={[zM]:r.NEVER,[GM]:r.ALWAYS,[BM]:r.LESS,[Pp]:r.LEQUAL,[IM]:r.EQUAL,[zp]:r.GEQUAL,[FM]:r.GREATER,[HM]:r.NOTEQUAL};function wt(D,b){if(b.type===qi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Kh||b.magFilter===zc||b.magFilter===js||b.minFilter===Bn||b.minFilter===Kh||b.minFilter===zc||b.minFilter===js)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,J[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,yt[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zn||b.minFilter!==zc&&b.minFilter!==js||b.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function rt(D,b){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",B));const gt=b.source;let St=y.get(gt);St===void 0&&(St={},y.set(gt,St));const At=F(b);if(At!==D.__cacheKey){St[At]===void 0&&(St[At]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),St[At].usedTimes++;const Nt=St[D.__cacheKey];Nt!==void 0&&(St[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&K(b)),D.__cacheKey=At,D.__webglTexture=St[At].texture}return $}function xt(D,b,$){return Math.floor(Math.floor(D/$)/b)}function Mt(D,b,$,gt){const At=D.updateRanges;if(At.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,$,gt,b.data);else{At.sort((Pt,Lt)=>Pt.start-Lt.start);let Nt=0;for(let Pt=1;Pt<At.length;Pt++){const Lt=At[Nt],Dt=At[Pt],ae=Lt.start+Lt.count,se=xt(Dt.start,b.width,4),ve=xt(Lt.start,b.width,4);Dt.start<=ae+1&&se===ve&&xt(Dt.start+Dt.count-1,b.width,4)===se?Lt.count=Math.max(Lt.count,Dt.start+Dt.count-Lt.start):(++Nt,At[Nt]=Dt)}At.length=Nt+1;const ft=i.getParameter(r.UNPACK_ROW_LENGTH),ht=i.getParameter(r.UNPACK_SKIP_PIXELS),Ut=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Pt=0,Lt=At.length;Pt<Lt;Pt++){const Dt=At[Pt],ae=Math.floor(Dt.start/4),se=Math.ceil(Dt.count/4),ve=ae%b.width,W=Math.floor(ae/b.width),Rt=se,pt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ve,W,Rt,pt,$,gt,b.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ft),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ut)}}function It(D,b,$){let gt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=r.TEXTURE_3D);const St=rt(D,b),At=b.source;i.bindTexture(gt,D.__webglTexture,r.TEXTURE0+$);const Nt=s.get(At);if(At.version!==Nt.__version||St===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pt=Te.getPrimaries(Te.workingColorSpace),Ft=b.colorSpace===hs?null:Te.getPrimaries(b.colorSpace),Ot=b.colorSpace===hs||pt===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ht=M(b.image,!1,l.maxTextureSize);ht=Ct(b,ht);const Ut=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type);let Lt=U(b.internalFormat,Ut,Pt,b.normalized,b.colorSpace,b.isVideoTexture);wt(gt,b);let Dt;const ae=b.mipmaps,se=b.isVideoTexture!==!0,ve=Nt.__version===void 0||St===!0,W=At.dataReady,Rt=O(b,ht);if(b.isDepthTexture)Lt=k(b.format===Ys,b.type),ve&&(se?i.texStorage2D(r.TEXTURE_2D,1,Lt,ht.width,ht.height):i.texImage2D(r.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Ut,Pt,null));else if(b.isDataTexture)if(ae.length>0){se&&ve&&i.texStorage2D(r.TEXTURE_2D,Rt,Lt,ae[0].width,ae[0].height);for(let pt=0,Ft=ae.length;pt<Ft;pt++)Dt=ae[pt],se?W&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ut,Pt,Dt.data):i.texImage2D(r.TEXTURE_2D,pt,Lt,Dt.width,Dt.height,0,Ut,Pt,Dt.data);b.generateMipmaps=!1}else se?(ve&&i.texStorage2D(r.TEXTURE_2D,Rt,Lt,ht.width,ht.height),W&&Mt(b,ht,Ut,Pt)):i.texImage2D(r.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Ut,Pt,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ve&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Lt,ae[0].width,ae[0].height,ht.depth);for(let pt=0,Ft=ae.length;pt<Ft;pt++)if(Dt=ae[pt],b.format!==Ii)if(Ut!==null)if(se){if(W)if(b.layerUpdates.size>0){const Ot=Av(Dt.width,Dt.height,b.format,b.type);for(const Et of b.layerUpdates){const Yt=Dt.data.subarray(Et*Ot/Dt.data.BYTES_PER_ELEMENT,(Et+1)*Ot/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,Et,Dt.width,Dt.height,1,Ut,Yt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ht.depth,Ut,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Lt,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ht.depth,Ut,Pt,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,Lt,Dt.width,Dt.height,ht.depth,0,Ut,Pt,Dt.data)}else{se&&ve&&i.texStorage2D(r.TEXTURE_2D,Rt,Lt,ae[0].width,ae[0].height);for(let pt=0,Ft=ae.length;pt<Ft;pt++)Dt=ae[pt],b.format!==Ii?Ut!==null?se?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ut,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,Lt,Dt.width,Dt.height,0,Dt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?W&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ut,Pt,Dt.data):i.texImage2D(r.TEXTURE_2D,pt,Lt,Dt.width,Dt.height,0,Ut,Pt,Dt.data)}else if(b.isDataArrayTexture)if(se){if(ve&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Lt,ht.width,ht.height,ht.depth),W)if(b.layerUpdates.size>0){const pt=Av(ht.width,ht.height,b.format,b.type);for(const Ft of b.layerUpdates){const Ot=ht.data.subarray(Ft*pt/ht.data.BYTES_PER_ELEMENT,(Ft+1)*pt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ft,ht.width,ht.height,1,Ut,Pt,Ot)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ut,Pt,ht.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Ut,Pt,ht.data);else if(b.isData3DTexture)se?(ve&&i.texStorage3D(r.TEXTURE_3D,Rt,Lt,ht.width,ht.height,ht.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ut,Pt,ht.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Ut,Pt,ht.data);else if(b.isFramebufferTexture){if(ve)if(se)i.texStorage2D(r.TEXTURE_2D,Rt,Lt,ht.width,ht.height);else{let pt=ht.width,Ft=ht.height;for(let Ot=0;Ot<Rt;Ot++)i.texImage2D(r.TEXTURE_2D,Ot,Lt,pt,Ft,0,Ut,Pt,null),pt>>=1,Ft>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pt=r.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ht.parentNode!==pt){pt.appendChild(ht),v.add(b),pt.onpaint=ie=>{const rn=ie.changedElements;for(const Ue of v)rn.includes(Ue.image)&&(Ue.needsUpdate=!0)},pt.requestPaint();return}const Ft=0,Ot=r.RGBA,Et=r.RGBA,Yt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ft,Ot,Et,Yt,ht),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ae.length>0){if(se&&ve){const pt=Qe(ae[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Lt,pt.width,pt.height)}for(let pt=0,Ft=ae.length;pt<Ft;pt++)Dt=ae[pt],se?W&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Ut,Pt,Dt):i.texImage2D(r.TEXTURE_2D,pt,Lt,Ut,Pt,Dt);b.generateMipmaps=!1}else if(se){if(ve){const pt=Qe(ht);i.texStorage2D(r.TEXTURE_2D,Rt,Lt,pt.width,pt.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Pt,ht)}else i.texImage2D(r.TEXTURE_2D,0,Lt,Ut,Pt,ht);S(b)&&w(gt),Nt.__version=At.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function te(D,b,$){if(b.image.length!==6)return;const gt=rt(D,b),St=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const At=s.get(St);if(St.version!==At.__version||gt===!0){i.activeTexture(r.TEXTURE0+$);const Nt=Te.getPrimaries(Te.workingColorSpace),ft=b.colorSpace===hs?null:Te.getPrimaries(b.colorSpace),ht=b.colorSpace===hs||Nt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,Pt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let Et=0;Et<6;Et++)!Ut&&!Pt?Lt[Et]=M(b.image[Et],!0,l.maxCubemapSize):Lt[Et]=Pt?b.image[Et].image:b.image[Et],Lt[Et]=Ct(b,Lt[Et]);const Dt=Lt[0],ae=c.convert(b.format,b.colorSpace),se=c.convert(b.type),ve=U(b.internalFormat,ae,se,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Rt=At.__version===void 0||gt===!0,pt=St.dataReady;let Ft=O(b,Dt);wt(r.TEXTURE_CUBE_MAP,b);let Ot;if(Ut){W&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ve,Dt.width,Dt.height);for(let Et=0;Et<6;Et++){Ot=Lt[Et].mipmaps;for(let Yt=0;Yt<Ot.length;Yt++){const ie=Ot[Yt];b.format!==Ii?ae!==null?W?pt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,0,0,ie.width,ie.height,ae,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,ve,ie.width,ie.height,0,ie.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,0,0,ie.width,ie.height,ae,se,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,ve,ie.width,ie.height,0,ae,se,ie.data)}}}else{if(Ot=b.mipmaps,W&&Rt){Ot.length>0&&Ft++;const Et=Qe(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ve,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Pt){W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Lt[Et].width,Lt[Et].height,ae,se,Lt[Et].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ve,Lt[Et].width,Lt[Et].height,0,ae,se,Lt[Et].data);for(let Yt=0;Yt<Ot.length;Yt++){const rn=Ot[Yt].image[Et].image;W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,0,0,rn.width,rn.height,ae,se,rn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,ve,rn.width,rn.height,0,ae,se,rn.data)}}else{W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,se,Lt[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ve,ae,se,Lt[Et]);for(let Yt=0;Yt<Ot.length;Yt++){const ie=Ot[Yt];W?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,0,0,ae,se,ie.image[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,ve,ae,se,ie.image[Et])}}}S(b)&&w(r.TEXTURE_CUBE_MAP),At.__version=St.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Kt(D,b,$,gt,St,At){const Nt=c.convert($.format,$.colorSpace),ft=c.convert($.type),ht=U($.internalFormat,Nt,ft,$.normalized,$.colorSpace),Ut=s.get(b),Pt=s.get($);if(Pt.__renderTarget=b,!Ut.__hasExternalTextures){const Lt=Math.max(1,b.width>>At),Dt=Math.max(1,b.height>>At);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,At,ht,Lt,Dt,b.depth,0,Nt,ft,null):i.texImage2D(St,At,ht,Lt,Dt,0,Nt,ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),Qt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,St,Pt.__webglTexture,0,_e(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,St,Pt.__webglTexture,At),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(D,b,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const gt=b.depthTexture,St=gt&&gt.isDepthTexture?gt.type:null,At=k(b.stencilBuffer,St),Nt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Qt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e(b),At,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e(b),At,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,At,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,D)}else{const gt=b.textures;for(let St=0;St<gt.length;St++){const At=gt[St],Nt=c.convert(At.format,At.colorSpace),ft=c.convert(At.type),ht=U(At.internalFormat,Nt,ft,At.normalized,At.colorSpace);Qt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e(b),ht,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(D,b,$){const gt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),wt(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ut=c.convert(b.depthTexture.format),Pt=c.convert(b.depthTexture.type);let Lt;b.depthTexture.format===Ca?Lt=r.DEPTH_COMPONENT24:b.depthTexture.format===Ys&&(Lt=r.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Lt,b.width,b.height,0,Ut,Pt,null)}}else ot(b.depthTexture,0);const At=St.__webglTexture,Nt=_e(b),ft=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,ht=b.depthTexture.format===Ys?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ca)Qt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ft,At,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ft,At,0);else if(b.depthTexture.format===Ys)Qt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ft,At,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ft,At,0);else throw new Error("Unknown depthTexture format")}function ge(D){const b=s.get(D),$=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const gt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",St)};gt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=gt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let gt=0;gt<6;gt++)fe(b.__webglFramebuffer[gt],D,gt);else{const gt=D.texture.mipmaps;gt&&gt.length>0?fe(b.__webglFramebuffer[0],D,0):fe(b.__webglFramebuffer,D,0)}else if($){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=r.createRenderbuffer(),Oe(b.__webglDepthbuffer[gt],D,!1);else{const St=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,At)}}else{const gt=D.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Oe(b.__webglDepthbuffer,D,!1);else{const St=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,At)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(D,b,$){const gt=s.get(D);b!==void 0&&Kt(gt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ge(D)}function re(D){const b=D.texture,$=s.get(D),gt=s.get(b);D.addEventListener("dispose",T);const St=D.textures,At=D.isWebGLCubeRenderTarget===!0,Nt=St.length>1;if(Nt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=b.version,f.memory.textures++),At){$.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[ft]=[];for(let ht=0;ht<b.mipmaps.length;ht++)$.__webglFramebuffer[ft][ht]=r.createFramebuffer()}else $.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)$.__webglFramebuffer[ft]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let ft=0,ht=St.length;ft<ht;ft++){const Ut=s.get(St[ft]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&Qt(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ft=0;ft<St.length;ft++){const ht=St[ft];$.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ft]);const Ut=c.convert(ht.format,ht.colorSpace),Pt=c.convert(ht.type),Lt=U(ht.internalFormat,Ut,Pt,ht.normalized,ht.colorSpace,D.isXRRenderTarget===!0),Dt=_e(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Lt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,$.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe($.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(At){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),wt(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Kt($.__webglFramebuffer[ft][ht],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ht);else Kt($.__webglFramebuffer[ft],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);S(b)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ft=0,ht=St.length;ft<ht;ft++){const Ut=St[ft],Pt=s.get(Ut);let Lt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Pt.__webglTexture),wt(Lt,Ut),Kt($.__webglFramebuffer,D,Ut,r.COLOR_ATTACHMENT0+ft,Lt,0),S(Ut)&&w(Lt)}i.unbindTexture()}else{let ft=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ft,gt.__webglTexture),wt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Kt($.__webglFramebuffer[ht],D,b,r.COLOR_ATTACHMENT0,ft,ht);else Kt($.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ft,0);S(b)&&w(ft),i.unbindTexture()}D.depthBuffer&&ge(D)}function tn(D){const b=D.textures;for(let $=0,gt=b.length;$<gt;$++){const St=b[$];if(S(St)){const At=N(D),Nt=s.get(St).__webglTexture;i.bindTexture(At,Nt),w(At),i.unbindTexture()}}}const ze=[],pn=[];function X(D){if(D.samples>0){if(Qt(D)===!1){const b=D.textures,$=D.width,gt=D.height;let St=r.COLOR_BUFFER_BIT;const At=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(D),ft=b.length>1;if(ft)for(let Ut=0;Ut<b.length;Ut++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const ht=D.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ut=0;Ut<b.length;Ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ut]);const Pt=s.get(b[Ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pt,0)}r.blitFramebuffer(0,0,$,gt,0,0,$,gt,St,r.NEAREST),m===!0&&(ze.length=0,pn.length=0,ze.push(r.COLOR_ATTACHMENT0+Ut),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ze.push(At),pn.push(At),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Ut=0;Ut<b.length;Ut++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ut]);const Pt=s.get(b[Ut]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,Pt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function _e(D){return Math.min(l.maxSamples,D.samples)}function Qt(D){const b=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(D){const b=f.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Ct(D,b){const $=D.colorSpace,gt=D.format,St=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Su&&$!==hs&&(Te.getTransfer($)===Ve?(gt!==Ii||St!==mi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",$)),b}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=L,this.resetTextureUnits=lt,this.getTextureUnits=ut,this.setTextureUnits=Y,this.setTexture2D=ot,this.setTexture2DArray=mt,this.setTexture3D=bt,this.setTextureCube=z,this.rebindTextures=Ce,this.setupRenderTarget=re,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function tR(r,t){function i(s,l=hs){let c;const f=Te.getTransfer(l);if(s===mi)return r.UNSIGNED_BYTE;if(s===Dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Np)return r.UNSIGNED_SHORT_5_5_5_1;if(s===px)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===mx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===hx)return r.BYTE;if(s===dx)return r.SHORT;if(s===yl)return r.UNSIGNED_SHORT;if(s===wp)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===gx)return r.ALPHA;if(s===_x)return r.RGB;if(s===Ii)return r.RGBA;if(s===Ca)return r.DEPTH_COMPONENT;if(s===Ys)return r.DEPTH_STENCIL;if(s===vx)return r.RED;if(s===Up)return r.RED_INTEGER;if(s===Zs)return r.RG;if(s===Lp)return r.RG_INTEGER;if(s===Op)return r.RGBA_INTEGER;if(s===hu||s===du||s===pu||s===mu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xd||s===Wd||s===jd||s===Yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===xu||s===$d)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qd||s===Zd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Qd)return c.COMPRESSED_R11_EAC;if(s===Jd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===xu)return c.COMPRESSED_RG11_EAC;if(s===$d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp||s===up||s===fp||s===hp||s===dp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===tp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ap)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===op)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===up)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pp||s===mp||s===gp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===pp)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_p||s===vp||s===yu||s===xp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===_p)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const eR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Dx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new $i({vertexShader:eR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new on(new Tl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aR extends xs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",M=new iR,S={},w=i.getContextAttributes();let N=null,U=null;const k=[],O=[],B=new Vt;let T=null;const P=new pi;P.viewport=new un;const K=new pi;K.viewport=new un;const G=[P,K],q=new fE;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let xt=k[rt];return xt===void 0&&(xt=new nd,k[rt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(rt){let xt=k[rt];return xt===void 0&&(xt=new nd,k[rt]=xt),xt.getGripSpace()},this.getHand=function(rt){let xt=k[rt];return xt===void 0&&(xt=new nd,k[rt]=xt),xt.getHandSpace()};function Y(rt){const xt=O.indexOf(rt.inputSource);if(xt===-1)return;const Mt=k[xt];Mt!==void 0&&(Mt.update(rt.inputSource,rt.frame,p||f),Mt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function L(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",F);for(let rt=0;rt<k.length;rt++){const xt=O[rt];xt!==null&&(O[rt]=null,k[rt].disconnect(xt))}lt=null,ut=null,M.reset();for(const rt in S)delete S[rt];t.setRenderTarget(N),y=null,g=null,v=null,l=null,U=null,wt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){d=rt,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(rt){p=rt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",L),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,It=null,te=null;w.depth&&(te=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=w.stencil?Ys:Ca,It=w.stencil?Sl:Ji);const Kt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Kt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Qi(g.textureWidth,g.textureHeight,{format:Ii,type:mi,depthTexture:new io(g.textureWidth,g.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Qi(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(rt){for(let xt=0;xt<rt.removed.length;xt++){const Mt=rt.removed[xt],It=O.indexOf(Mt);It>=0&&(O[It]=null,k[It].disconnect(Mt))}for(let xt=0;xt<rt.added.length;xt++){const Mt=rt.added[xt];let It=O.indexOf(Mt);if(It===-1){for(let Kt=0;Kt<k.length;Kt++)if(Kt>=O.length){O.push(Mt),It=Kt;break}else if(O[Kt]===null){O[Kt]=Mt,It=Kt;break}if(It===-1)break}const te=k[It];te&&te.connect(Mt)}}const ot=new I,mt=new I;function bt(rt,xt,Mt){ot.setFromMatrixPosition(xt.matrixWorld),mt.setFromMatrixPosition(Mt.matrixWorld);const It=ot.distanceTo(mt),te=xt.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,Oe=te[14]/(te[10]-1),fe=te[14]/(te[10]+1),ge=(te[9]+1)/te[5],Ce=(te[9]-1)/te[5],re=(te[8]-1)/te[0],tn=(Kt[8]+1)/Kt[0],ze=Oe*re,pn=Oe*tn,X=It/(-re+tn),_e=X*-re;if(xt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(_e),rt.translateZ(X),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),te[10]===-1)rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Qt=Oe+X,Re=fe+X,Ct=ze-_e,Qe=pn+(It-_e),D=ge*fe/Re*Qt,b=Ce*fe/Re*Qt;rt.projectionMatrix.makePerspective(Ct,Qe,D,b,Qt,Re),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function z(rt,xt){xt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(xt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let xt=rt.near,Mt=rt.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),q.near=K.near=P.near=xt,q.far=K.far=P.far=Mt,(lt!==q.near||ut!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),lt=q.near,ut=q.far),q.layers.mask=rt.layers.mask|6,P.layers.mask=q.layers.mask&-5,K.layers.mask=q.layers.mask&-3;const It=rt.parent,te=q.cameras;z(q,It);for(let Kt=0;Kt<te.length;Kt++)z(te[Kt],It);te.length===2?bt(q,P,K):q.projectionMatrix.copy(P.projectionMatrix),J(rt,q,It)};function J(rt,xt,Mt){Mt===null?rt.matrix.copy(xt.matrixWorld):(rt.matrix.copy(Mt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(xt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=bl*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(rt){m=rt,g!==null&&(g.fixedFoveation=rt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=rt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(rt){return S[rt]};let yt=null;function Tt(rt,xt){if(_=xt.getViewerPose(p||f),E=xt,_!==null){const Mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let It=!1;Mt.length!==q.cameras.length&&(q.cameras.length=0,It=!0);for(let fe=0;fe<Mt.length;fe++){const ge=Mt[fe];let Ce=null;if(y!==null)Ce=y.getViewport(ge);else{const tn=v.getViewSubImage(g,ge);Ce=tn.viewport,fe===0&&(t.setRenderTargetTextures(U,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(U))}let re=G[fe];re===void 0&&(re=new pi,re.layers.enable(fe),re.viewport=new un,G[fe]=re),re.matrix.fromArray(ge.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ge.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),fe===0&&(q.matrix.copy(re.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),It===!0&&q.cameras.push(re)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const fe=v.getDepthInformation(Mt[0]);fe&&fe.isValid&&fe.texture&&M.init(fe,l.renderState)}if(te&&te.includes("camera-access")&&C){t.state.unbindTexture(),v=s.getBinding();for(let fe=0;fe<Mt.length;fe++){const ge=Mt[fe].camera;if(ge){let Ce=S[ge];Ce||(Ce=new Dx,S[ge]=Ce);const re=v.getCameraImage(ge);Ce.sourceTexture=re}}}}for(let Mt=0;Mt<k.length;Mt++){const It=O[Mt],te=k[Mt];It!==null&&te!==void 0&&te.update(It,xt,p||f)}yt&&yt(rt,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),E=null}const wt=new Bx;wt.setAnimationLoop(Tt),this.setAnimationLoop=function(rt){yt=rt},this.dispose=function(){}}}const sR=new sn,Xx=new le;Xx.set(-1,0,0,0,1,0,0,0,1);function rR(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Lx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,N,U){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),C(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,w,N):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ti&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ti&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),N=w.envMap,U=w.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(U)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Xx),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const U=N.program;s.uniformBlockBinding(w,U)}function p(w,N){let U=l[w.id];U===void 0&&(E(w),U=_(w),l[w.id]=U,w.addEventListener("dispose",M));const k=N.program;s.updateUBOMapping(w,k);const O=t.render.frame;c[w.id]!==O&&(g(w),c[w.id]=O)}function _(w){const N=v();w.__bindingPointIndex=N;const U=r.createBuffer(),k=w.__size,O=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,k,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function v(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],U=w.uniforms,k=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let O=0,B=U.length;O<B;O++){const T=Array.isArray(U[O])?U[O]:[U[O]];for(let P=0,K=T.length;P<K;P++){const G=T[P];if(y(G,O,P,k)===!0){const q=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let Y=0;Y<lt.length;Y++){const L=lt[Y],F=C(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,q+ut,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):ArrayBuffer.isView(L)?G.__data.set(new L.constructor(L.buffer,L.byteOffset,G.__data.length)):(L.toArray(G.__data,ut),ut+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(w,N,U,k){const O=w.value,B=N+"_"+U;if(k[B]===void 0)return typeof O=="number"||typeof O=="boolean"?k[B]=O:ArrayBuffer.isView(O)?k[B]=O.slice():k[B]=O.clone(),!0;{const T=k[B];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return k[B]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(T.equals(O)===!1)return T.copy(O),!0}}return!1}function E(w){const N=w.uniforms;let U=0;const k=16;for(let B=0,T=N.length;B<T;B++){const P=Array.isArray(N[B])?N[B]:[N[B]];for(let K=0,G=P.length;K<G;K++){const q=P[K],lt=Array.isArray(q.value)?q.value:[q.value];for(let ut=0,Y=lt.length;ut<Y;ut++){const L=lt[ut],F=C(L),ot=U%k,mt=ot%F.boundary,bt=ot+mt;U+=mt,bt!==0&&k-bt<F.storage&&(U+=k-bt),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=U,U+=F.storage}}}const O=U%k;return O>0&&(U+=k-O),w.__size=U,w.__cache={},this}function C(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",w),N}function M(w){const N=w.target;N.removeEventListener("dispose",M);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function cR(){return ji===null&&(ji=new wb(lR,16,16,Zs,Ra),ji.name="DFG_LUT",ji.minFilter=Bn,ji.magFilter=Bn,ji.wrapS=ba,ji.wrapT=ba,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class uR{constructor(t={}){const{canvas:i=kM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=y,M=new Set([Op,Lp,Up]),S=new Set([mi,Ji,yl,Sl,Dp,Np]),w=new Uint32Array(4),N=new Int32Array(4),U=new I;let k=null,O=null;const B=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let G=!1,q=null;this._outputColorSpace=di;let lt=0,ut=0,Y=null,L=-1,F=null;const ot=new un,mt=new un;let bt=null;const z=new me(0);let J=0,yt=i.width,Tt=i.height,wt=1,rt=null,xt=null;const Mt=new un(0,0,yt,Tt),It=new un(0,0,yt,Tt);let te=!1;const Kt=new Gp;let Oe=!1,fe=!1;const ge=new sn,Ce=new I,re=new un,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function pn(){return Y===null?wt:1}let X=s;function _e(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cp}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",ie,!1),X===null){const Z="webgl2";if(X=_e(Z,A),X===null)throw _e(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ae("WebGLRenderer: "+A.message),A}let Qt,Re,Ct,Qe,D,b,$,gt,St,At,Nt,ft,ht,Ut,Pt,Lt,Dt,ae,se,ve,W,Rt,pt;function Ft(){Qt=new cA(X),Qt.init(),W=new tR(X,Qt),Re=new eA(X,Qt,t,W),Ct=new J2(X,Qt),Re.reversedDepthBuffer&&g&&Ct.buffers.depth.setReversed(!0),Qe=new hA(X),D=new I2,b=new $2(X,Qt,Ct,D,Re,W,Qe),$=new lA(K),gt=new gE(X),Rt=new $T(X,gt),St=new uA(X,gt,Qe,Rt),At=new pA(X,St,gt,Rt,Qe),ae=new dA(X,Re,b),Pt=new nA(D),Nt=new B2(K,$,Qt,Re,Rt,Pt),ft=new rR(K,D),ht=new H2,Ut=new j2(Qt),Dt=new JT(K,$,Ct,At,E,m),Lt=new Q2(K,At,Re),pt=new oR(X,Qe,Re,Ct),se=new tA(X,Qt,Qe),ve=new fA(X,Qt,Qe),Qe.programs=Nt.programs,K.capabilities=Re,K.extensions=Qt,K.properties=D,K.renderLists=ht,K.shadowMap=Lt,K.state=Ct,K.info=Qe}Ft(),C!==mi&&(P=new gA(C,i.width,i.height,l,c));const Ot=new aR(K,X);this.xr=Ot,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(A){A!==void 0&&(wt=A,this.setSize(yt,Tt,!1))},this.getSize=function(A){return A.set(yt,Tt)},this.setSize=function(A,Z,at=!0){if(Ot.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=A,Tt=Z,i.width=Math.floor(A*wt),i.height=Math.floor(Z*wt),at===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(yt*wt,Tt*wt).floor()},this.setDrawingBufferSize=function(A,Z,at){yt=A,Tt=Z,wt=at,i.width=Math.floor(A*at),i.height=Math.floor(Z*at),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(C===mi){Ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(Mt)},this.setViewport=function(A,Z,at,nt){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,Z,at,nt),Ct.viewport(ot.copy(Mt).multiplyScalar(wt).round())},this.getScissor=function(A){return A.copy(It)},this.setScissor=function(A,Z,at,nt){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,Z,at,nt),Ct.scissor(mt.copy(It).multiplyScalar(wt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){Ct.setScissorTest(te=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,at=!0){let nt=0;if(A){let it=!1;if(Y!==null){const Bt=Y.texture.format;it=M.has(Bt)}if(it){const Bt=Y.texture.type,kt=S.has(Bt),zt=Dt.getClearColor(),Wt=Dt.getClearAlpha(),Xt=zt.r,Jt=zt.g,ce=zt.b;kt?(w[0]=Xt,w[1]=Jt,w[2]=ce,w[3]=Wt,X.clearBufferuiv(X.COLOR,0,w)):(N[0]=Xt,N[1]=Jt,N[2]=ce,N[3]=Wt,X.clearBufferiv(X.COLOR,0,N))}else nt|=X.COLOR_BUFFER_BIT}Z&&(nt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",ie,!1),Dt.dispose(),ht.dispose(),Ut.dispose(),D.dispose(),$.dispose(),At.dispose(),Rt.dispose(),pt.dispose(),Nt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",lo),Ot.removeEventListener("sessionend",co),In.stop()};function Et(A){A.preventDefault(),Eu("WebGLRenderer: Context Lost."),G=!0}function Yt(){Eu("WebGLRenderer: Context Restored."),G=!1;const A=Qe.autoReset,Z=Lt.enabled,at=Lt.autoUpdate,nt=Lt.needsUpdate,it=Lt.type;Ft(),Qe.autoReset=A,Lt.enabled=Z,Lt.autoUpdate=at,Lt.needsUpdate=nt,Lt.type=it}function ie(A){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rn(A){const Z=A.target;Z.removeEventListener("dispose",rn),Ue(Z)}function Ue(A){gi(A),D.remove(A)}function gi(A){const Z=D.get(A).programs;Z!==void 0&&(Z.forEach(function(at){Nt.releaseProgram(at)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,at,nt,it,Bt){Z===null&&(Z=tn);const kt=it.isMesh&&it.matrixWorld.determinant()<0,zt=Ua(A,Z,at,nt,it);Ct.setMaterial(nt,kt);let Wt=at.index,Xt=1;if(nt.wireframe===!0){if(Wt=St.getWireframeAttribute(at),Wt===void 0)return;Xt=2}const Jt=at.drawRange,ce=at.attributes.position;let Zt=Jt.start*Xt,we=(Jt.start+Jt.count)*Xt;Bt!==null&&(Zt=Math.max(Zt,Bt.start*Xt),we=Math.min(we,(Bt.start+Bt.count)*Xt)),Wt!==null?(Zt=Math.max(Zt,0),we=Math.min(we,Wt.count)):ce!=null&&(Zt=Math.max(Zt,0),we=Math.min(we,ce.count));const en=we-Zt;if(en<0||en===1/0)return;Rt.setup(it,nt,zt,at,Wt);let Ze,Be=se;if(Wt!==null&&(Ze=gt.get(Wt),Be=ve,Be.setIndex(Ze)),it.isMesh)nt.wireframe===!0?(Ct.setLineWidth(nt.wireframeLinewidth*pn()),Be.setMode(X.LINES)):Be.setMode(X.TRIANGLES);else if(it.isLine){let Ie=nt.linewidth;Ie===void 0&&(Ie=1),Ct.setLineWidth(Ie*pn()),it.isLineSegments?Be.setMode(X.LINES):it.isLineLoop?Be.setMode(X.LINE_LOOP):Be.setMode(X.LINE_STRIP)}else it.isPoints?Be.setMode(X.POINTS):it.isSprite&&Be.setMode(X.TRIANGLES);if(it.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Be.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Ie=it._multiDrawStarts,Gt=it._multiDrawCounts,Fn=it._multiDrawCount,xe=Wt?gt.get(Wt).bytesPerElement:1,Mn=D.get(nt).currentProgram.getUniforms();for(let ni=0;ni<Fn;ni++)Mn.setValue(X,"_gl_DrawID",ni),Be.render(Ie[ni]/xe,Gt[ni])}else if(it.isInstancedMesh)Be.renderInstances(Zt,en,it.count);else if(at.isInstancedBufferGeometry){const Ie=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Gt=Math.min(at.instanceCount,Ie);Be.renderInstances(Zt,en,Gt)}else Be.render(Zt,en)};function ei(A,Z,at){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Qs(A,Z,at),A.side=gs,A.needsUpdate=!0,Qs(A,Z,at),A.side=zi):Qs(A,Z,at)}this.compile=function(A,Z,at=null){at===null&&(at=A),O=Ut.get(at),O.init(Z),T.push(O),at.traverseVisible(function(it){it.isLight&&it.layers.test(Z.layers)&&(O.pushLight(it),it.castShadow&&O.pushShadow(it))}),A!==at&&A.traverseVisible(function(it){it.isLight&&it.layers.test(Z.layers)&&(O.pushLight(it),it.castShadow&&O.pushShadow(it))}),O.setupLights();const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Bt=it.material;if(Bt)if(Array.isArray(Bt))for(let kt=0;kt<Bt.length;kt++){const zt=Bt[kt];ei(zt,at,it),nt.add(zt)}else ei(Bt,at,it),nt.add(Bt)}),O=T.pop(),nt},this.compileAsync=function(A,Z,at=null){const nt=this.compile(A,Z,at);return new Promise(it=>{function Bt(){if(nt.forEach(function(kt){D.get(kt).currentProgram.isReady()&&nt.delete(kt)}),nt.size===0){it(A);return}setTimeout(Bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ss=null;function oo(A){Ss&&Ss(A)}function lo(){In.stop()}function co(){In.start()}const In=new Bx;In.setAnimationLoop(oo),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Ss=A,Ot.setAnimationLoop(A),A===null?In.stop():In.start()},Ot.addEventListener("sessionstart",lo),Ot.addEventListener("sessionend",co),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(A,Z);const at=Ot.enabled===!0&&Ot.isPresenting===!0,nt=P!==null&&(Y===null||at)&&P.begin(K,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(Z),Z=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,Z,Y),O=Ut.get(A,T.length),O.init(Z),O.state.textureUnits=b.getTextureUnits(),T.push(O),ge.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Kt.setFromProjectionMatrix(ge,Zi,Z.reversedDepth),fe=this.localClippingEnabled,Oe=Pt.init(this.clippingPlanes,fe),k=ht.get(A,B.length),k.init(),B.push(k),Ot.enabled===!0&&Ot.isPresenting===!0){const kt=K.xr.getDepthSensingMesh();kt!==null&&fn(kt,Z,-1/0,K.sortObjects)}fn(A,Z,0,K.sortObjects),k.finish(),K.sortObjects===!0&&k.sort(rt,xt),ze=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,ze&&Dt.addToRenderList(k,A),this.info.render.frame++,Oe===!0&&Pt.beginShadows();const it=O.state.shadowsArray;if(Lt.render(it,A,Z),Oe===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&P.hasRenderPass())===!1){const kt=k.opaque,zt=k.transmissive;if(O.setupLights(),Z.isArrayCamera){const Wt=Z.cameras;if(zt.length>0)for(let Xt=0,Jt=Wt.length;Xt<Jt;Xt++){const ce=Wt[Xt];ta(kt,zt,A,ce)}ze&&Dt.render(A);for(let Xt=0,Jt=Wt.length;Xt<Jt;Xt++){const ce=Wt[Xt];Nn(k,A,ce,ce.viewport)}}else zt.length>0&&ta(kt,zt,A,Z),ze&&Dt.render(A),Nn(k,A,Z)}Y!==null&&ut===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),nt&&P.end(K),A.isScene===!0&&A.onAfterRender(K,A,Z),Rt.resetDefaultState(),L=-1,F=null,T.pop(),T.length>0?(O=T[T.length-1],b.setTextureUnits(O.state.textureUnits),Oe===!0&&Pt.setGlobalState(K.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?k=B[B.length-1]:k=null,q!==null&&q.renderEnd()};function fn(A,Z,at,nt){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Kt.intersectsSprite(A)){nt&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const kt=At.update(A),zt=A.material;zt.visible&&k.push(A,kt,zt,at,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Kt.intersectsObject(A))){const kt=At.update(A),zt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),re.copy(kt.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(zt)){const Wt=kt.groups;for(let Xt=0,Jt=Wt.length;Xt<Jt;Xt++){const ce=Wt[Xt],Zt=zt[ce.materialIndex];Zt&&Zt.visible&&k.push(A,kt,Zt,at,re.z,ce)}}else zt.visible&&k.push(A,kt,zt,at,re.z,null)}}const Bt=A.children;for(let kt=0,zt=Bt.length;kt<zt;kt++)fn(Bt[kt],Z,at,nt)}function Nn(A,Z,at,nt){const{opaque:it,transmissive:Bt,transparent:kt}=A;O.setupLightsView(at),Oe===!0&&Pt.setGlobalState(K.clippingPlanes,at),nt&&Ct.viewport(ot.copy(nt)),it.length>0&&Da(it,Z,at),Bt.length>0&&Da(Bt,Z,at),kt.length>0&&Da(kt,Z,at),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ta(A,Z,at,nt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[nt.id]===void 0){const Zt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[nt.id]=new Qi(1,1,{generateMipmaps:!0,type:Zt?Ra:mi,minFilter:js,samples:Math.max(4,Re.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Bt=O.state.transmissionRenderTarget[nt.id],kt=nt.viewport||ot;Bt.setSize(kt.z*K.transmissionResolutionScale,kt.w*K.transmissionResolutionScale);const zt=K.getRenderTarget(),Wt=K.getActiveCubeFace(),Xt=K.getActiveMipmapLevel();K.setRenderTarget(Bt),K.getClearColor(z),J=K.getClearAlpha(),J<1&&K.setClearColor(16777215,.5),K.clear(),ze&&Dt.render(at);const Jt=K.toneMapping;K.toneMapping=Ki;const ce=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),O.setupLightsView(nt),Oe===!0&&Pt.setGlobalState(K.clippingPlanes,nt),Da(A,at,nt),b.updateMultisampleRenderTarget(Bt),b.updateRenderTargetMipmap(Bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let we=0,en=Z.length;we<en;we++){const Ze=Z[we],{object:Be,geometry:Ie,material:Gt,group:Fn}=Ze;if(Gt.side===zi&&Be.layers.test(nt.layers)){const xe=Gt.side;Gt.side=ti,Gt.needsUpdate=!0,Al(Be,at,nt,Ie,Gt,Fn),Gt.side=xe,Gt.needsUpdate=!0,Zt=!0}}Zt===!0&&(b.updateMultisampleRenderTarget(Bt),b.updateRenderTargetMipmap(Bt))}K.setRenderTarget(zt,Wt,Xt),K.setClearColor(z,J),ce!==void 0&&(nt.viewport=ce),K.toneMapping=Jt}function Da(A,Z,at){const nt=Z.isScene===!0?Z.overrideMaterial:null;for(let it=0,Bt=A.length;it<Bt;it++){const kt=A[it],{object:zt,geometry:Wt,group:Xt}=kt;let Jt=kt.material;Jt.allowOverride===!0&&nt!==null&&(Jt=nt),zt.layers.test(at.layers)&&Al(zt,Z,at,Wt,Jt,Xt)}}function Al(A,Z,at,nt,it,Bt){A.onBeforeRender(K,Z,at,nt,it,Bt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(K,Z,at,nt,A,Bt),it.transparent===!0&&it.side===zi&&it.forceSinglePass===!1?(it.side=ti,it.needsUpdate=!0,K.renderBufferDirect(at,Z,nt,it,A,Bt),it.side=gs,it.needsUpdate=!0,K.renderBufferDirect(at,Z,nt,it,A,Bt),it.side=zi):K.renderBufferDirect(at,Z,nt,it,A,Bt),A.onAfterRender(K,Z,at,nt,it,Bt)}function Qs(A,Z,at){Z.isScene!==!0&&(Z=tn);const nt=D.get(A),it=O.state.lights,Bt=O.state.shadowsArray,kt=it.state.version,zt=Nt.getParameters(A,it.state,Bt,Z,at,O.state.lightProbeGridArray),Wt=Nt.getProgramCacheKey(zt);let Xt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,nt.fog=Z.fog;const Jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=$.get(A.envMap||nt.environment,Jt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",rn),Xt=new Map,nt.programs=Xt);let ce=Xt.get(Wt);if(ce!==void 0){if(nt.currentProgram===ce&&nt.lightsStateVersion===kt)return Na(A,zt),ce}else zt.uniforms=Nt.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,at,zt),A.onBeforeCompile(zt,K),ce=Nt.acquireProgram(zt,Wt),Xt.set(Wt,ce),nt.uniforms=zt.uniforms;const Zt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Pt.uniform),Na(A,zt),nt.needsLights=Ms(A),nt.lightsStateVersion=kt,nt.needsLights&&(Zt.ambientLightColor.value=it.state.ambient,Zt.lightProbe.value=it.state.probe,Zt.directionalLights.value=it.state.directional,Zt.directionalLightShadows.value=it.state.directionalShadow,Zt.spotLights.value=it.state.spot,Zt.spotLightShadows.value=it.state.spotShadow,Zt.rectAreaLights.value=it.state.rectArea,Zt.ltc_1.value=it.state.rectAreaLTC1,Zt.ltc_2.value=it.state.rectAreaLTC2,Zt.pointLights.value=it.state.point,Zt.pointLightShadows.value=it.state.pointShadow,Zt.hemisphereLights.value=it.state.hemi,Zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Zt.spotLightMatrix.value=it.state.spotLightMatrix,Zt.spotLightMap.value=it.state.spotLightMap,Zt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=O.state.lightProbeGridArray.length>0,nt.currentProgram=ce,nt.uniformsList=null,ce}function uo(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=_u.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Na(A,Z){const at=D.get(A);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function fo(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(Z.matrixWorld);for(let at=0,nt=A.length;at<nt;at++){const it=A[at];if(it.texture!==null&&it.boundingBox.containsPoint(U))return it}return null}function Ua(A,Z,at,nt,it){Z.isScene!==!0&&(Z=tn),b.resetTextureUnits();const Bt=Z.fog,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?Z.environment:null,zt=Y===null?K.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Te.workingColorSpace,Wt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Xt=$.get(nt.envMap||kt,Wt),Jt=nt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ce=!!at.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!at.morphAttributes.position,we=!!at.morphAttributes.normal,en=!!at.morphAttributes.color;let Ze=Ki;nt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ze=K.toneMapping);const Be=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ie=Be!==void 0?Be.length:0,Gt=D.get(nt),Fn=O.state.lights;if(Oe===!0&&(fe===!0||A!==F)){const Pe=A===F&&nt.id===L;Pt.setState(nt,A,Pe)}let xe=!1;nt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Fn.state.version||Gt.outputColorSpace!==zt||it.isBatchedMesh&&Gt.batching===!1||!it.isBatchedMesh&&Gt.batching===!0||it.isBatchedMesh&&Gt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Gt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Gt.instancing===!1||!it.isInstancedMesh&&Gt.instancing===!0||it.isSkinnedMesh&&Gt.skinning===!1||!it.isSkinnedMesh&&Gt.skinning===!0||it.isInstancedMesh&&Gt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Gt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Gt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Gt.instancingMorph===!1&&it.morphTexture!==null||Gt.envMap!==Xt||nt.fog===!0&&Gt.fog!==Bt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Jt||Gt.vertexTangents!==ce||Gt.morphTargets!==Zt||Gt.morphNormals!==we||Gt.morphColors!==en||Gt.toneMapping!==Ze||Gt.morphTargetsCount!==Ie||!!Gt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Gt.__version=nt.version);let Mn=Gt.currentProgram;xe===!0&&(Mn=Qs(nt,Z,it),q&&nt.isNodeMaterial&&q.onUpdateProgram(nt,Mn,Gt));let ni=!1,Ci=!1,ii=!1;const Fe=Mn.getUniforms(),nn=Gt.uniforms;if(Ct.useProgram(Mn.program)&&(ni=!0,Ci=!0,ii=!0),nt.id!==L&&(L=nt.id,Ci=!0),Gt.needsLights){const Pe=fo(O.state.lightProbeGridArray,it);Gt.lightProbeGrid!==Pe&&(Gt.lightProbeGrid=Pe,Ci=!0)}if(ni||F!==A){Ct.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(X,"projectionMatrix",A.projectionMatrix),Fe.setValue(X,"viewMatrix",A.matrixWorldInverse);const Hi=Fe.map.cameraPosition;Hi!==void 0&&Hi.setValue(X,Ce.setFromMatrixPosition(A.matrixWorld)),Re.logarithmicDepthBuffer&&Fe.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Fe.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Ci=!0,ii=!0)}if(Gt.needsLights&&(Fn.state.directionalShadowMap.length>0&&Fe.setValue(X,"directionalShadowMap",Fn.state.directionalShadowMap,b),Fn.state.spotShadowMap.length>0&&Fe.setValue(X,"spotShadowMap",Fn.state.spotShadowMap,b),Fn.state.pointShadowMap.length>0&&Fe.setValue(X,"pointShadowMap",Fn.state.pointShadowMap,b)),it.isSkinnedMesh){Fe.setOptional(X,it,"bindMatrix"),Fe.setOptional(X,it,"bindMatrixInverse");const Pe=it.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Fe.setValue(X,"boneTexture",Pe.boneTexture,b))}it.isBatchedMesh&&(Fe.setOptional(X,it,"batchingTexture"),Fe.setValue(X,"batchingTexture",it._matricesTexture,b),Fe.setOptional(X,it,"batchingIdTexture"),Fe.setValue(X,"batchingIdTexture",it._indirectTexture,b),Fe.setOptional(X,it,"batchingColorTexture"),it._colorsTexture!==null&&Fe.setValue(X,"batchingColorTexture",it._colorsTexture,b));const wi=at.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&ae.update(it,at,Mn),(Ci||Gt.receiveShadow!==it.receiveShadow)&&(Gt.receiveShadow=it.receiveShadow,Fe.setValue(X,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&Z.environment!==null&&(nn.envMapIntensity.value=Z.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=cR()),Ci){if(Fe.setValue(X,"toneMappingExposure",K.toneMappingExposure),Gt.needsLights&&La(nn,ii),Bt&&nt.fog===!0&&ft.refreshFogUniforms(nn,Bt),ft.refreshMaterialUniforms(nn,nt,wt,Tt,O.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Pe=Gt.lightProbeGrid;nn.probesSH.value=Pe.texture,nn.probesMin.value.copy(Pe.boundingBox.min),nn.probesMax.value.copy(Pe.boundingBox.max),nn.probesResolution.value.copy(Pe.resolution)}_u.upload(X,uo(Gt),nn,b)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(_u.upload(X,uo(Gt),nn,b),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Fe.setValue(X,"center",it.center),Fe.setValue(X,"modelViewMatrix",it.modelViewMatrix),Fe.setValue(X,"normalMatrix",it.normalMatrix),Fe.setValue(X,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Pe=nt.uniformsGroups;for(let Hi=0,Pa=Pe.length;Hi<Pa;Hi++){const bs=Pe[Hi];pt.update(bs,Mn),pt.bind(bs,Mn)}}return Mn}function La(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Ms(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ut},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,Z,at){const nt=D.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Z,D.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:at,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const at=D.get(A);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const Oa=X.createFramebuffer();this.setRenderTarget=function(A,Z=0,at=0){Y=A,lt=Z,ut=at;let nt=null,it=!1,Bt=!1;if(A){const zt=D.get(A);if(zt.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(X.FRAMEBUFFER,zt.__webglFramebuffer),ot.copy(A.viewport),mt.copy(A.scissor),bt=A.scissorTest,Ct.viewport(ot),Ct.scissor(mt),Ct.setScissorTest(bt),L=-1;return}else if(zt.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(zt.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&D.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Bt=!0);const Xt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[Z])?nt=Xt[Z][at]:nt=Xt[Z],it=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?nt=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?nt=Xt[at]:nt=Xt,ot.copy(A.viewport),mt.copy(A.scissor),bt=A.scissorTest}else ot.copy(Mt).multiplyScalar(wt).floor(),mt.copy(It).multiplyScalar(wt).floor(),bt=te;if(at!==0&&(nt=Oa),Ct.bindFramebuffer(X.FRAMEBUFFER,nt)&&Ct.drawBuffers(A,nt),Ct.viewport(ot),Ct.scissor(mt),Ct.setScissorTest(bt),it){const zt=D.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,at)}else if(Bt){const zt=Z;for(let Wt=0;Wt<A.textures.length;Wt++){const Xt=D.get(A.textures[Wt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Wt,Xt.__webglTexture,at,zt)}}else if(A!==null&&at!==0){const zt=D.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zt.__webglTexture,at)}L=-1},this.readRenderTargetPixels=function(A,Z,at,nt,it,Bt,kt,zt=0){if(!(A&&A.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt){Ct.bindFramebuffer(X.FRAMEBUFFER,Wt);try{const Xt=A.textures[zt],Jt=Xt.format,ce=Xt.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),!Re.textureFormatReadable(Jt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(ce)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-nt&&at>=0&&at<=A.height-it&&X.readPixels(Z,at,nt,it,W.convert(Jt),W.convert(ce),Bt)}finally{const Xt=Y!==null?D.get(Y).__webglFramebuffer:null;Ct.bindFramebuffer(X.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,at,nt,it,Bt,kt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt)if(Z>=0&&Z<=A.width-nt&&at>=0&&at<=A.height-it){Ct.bindFramebuffer(X.FRAMEBUFFER,Wt);const Xt=A.textures[zt],Jt=Xt.format,ce=Xt.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),!Re.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Zt),X.bufferData(X.PIXEL_PACK_BUFFER,Bt.byteLength,X.STREAM_READ),X.readPixels(Z,at,nt,it,W.convert(Jt),W.convert(ce),0);const we=Y!==null?D.get(Y).__webglFramebuffer:null;Ct.bindFramebuffer(X.FRAMEBUFFER,we);const en=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await XM(X,en,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Zt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Bt),X.deleteBuffer(Zt),X.deleteSync(en),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,at=0){const nt=Math.pow(2,-at),it=Math.floor(A.image.width*nt),Bt=Math.floor(A.image.height*nt),kt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;b.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,at,0,0,kt,zt,it,Bt),Ct.unbindTexture()};const mn=X.createFramebuffer(),Rl=X.createFramebuffer();this.copyTextureToTexture=function(A,Z,at=null,nt=null,it=0,Bt=0){let kt,zt,Wt,Xt,Jt,ce,Zt,we,en;const Ze=A.isCompressedTexture?A.mipmaps[Bt]:A.image;if(at!==null)kt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Wt=at.isBox3?at.max.z-at.min.z:1,Xt=at.min.x,Jt=at.min.y,ce=at.isBox3?at.min.z:0;else{const nn=Math.pow(2,-it);kt=Math.floor(Ze.width*nn),zt=Math.floor(Ze.height*nn),A.isDataArrayTexture?Wt=Ze.depth:A.isData3DTexture?Wt=Math.floor(Ze.depth*nn):Wt=1,Xt=0,Jt=0,ce=0}nt!==null?(Zt=nt.x,we=nt.y,en=nt.z):(Zt=0,we=0,en=0);const Be=W.convert(Z.format),Ie=W.convert(Z.type);let Gt;Z.isData3DTexture?(b.setTexture3D(Z,0),Gt=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(b.setTexture2DArray(Z,0),Gt=X.TEXTURE_2D_ARRAY):(b.setTexture2D(Z,0),Gt=X.TEXTURE_2D),Ct.activeTexture(X.TEXTURE0),Ct.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),Ct.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Ct.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const Fn=Ct.getParameter(X.UNPACK_ROW_LENGTH),xe=Ct.getParameter(X.UNPACK_IMAGE_HEIGHT),Mn=Ct.getParameter(X.UNPACK_SKIP_PIXELS),ni=Ct.getParameter(X.UNPACK_SKIP_ROWS),Ci=Ct.getParameter(X.UNPACK_SKIP_IMAGES);Ct.pixelStorei(X.UNPACK_ROW_LENGTH,Ze.width),Ct.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ze.height),Ct.pixelStorei(X.UNPACK_SKIP_PIXELS,Xt),Ct.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),Ct.pixelStorei(X.UNPACK_SKIP_IMAGES,ce);const ii=A.isDataArrayTexture||A.isData3DTexture,Fe=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const nn=D.get(A),wi=D.get(Z),Pe=D.get(nn.__renderTarget),Hi=D.get(wi.__renderTarget);Ct.bindFramebuffer(X.READ_FRAMEBUFFER,Pe.__webglFramebuffer),Ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Pa=0;Pa<Wt;Pa++)ii&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,D.get(A).__webglTexture,it,ce+Pa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,D.get(Z).__webglTexture,Bt,en+Pa)),X.blitFramebuffer(Xt,Jt,kt,zt,Zt,we,kt,zt,X.DEPTH_BUFFER_BIT,X.NEAREST);Ct.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||D.has(A)){const nn=D.get(A),wi=D.get(Z);Ct.bindFramebuffer(X.READ_FRAMEBUFFER,mn),Ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,Rl);for(let Pe=0;Pe<Wt;Pe++)ii?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nn.__webglTexture,it,ce+Pe):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,nn.__webglTexture,it),Fe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wi.__webglTexture,Bt,en+Pe):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,wi.__webglTexture,Bt),it!==0?X.blitFramebuffer(Xt,Jt,kt,zt,Zt,we,kt,zt,X.COLOR_BUFFER_BIT,X.NEAREST):Fe?X.copyTexSubImage3D(Gt,Bt,Zt,we,en+Pe,Xt,Jt,kt,zt):X.copyTexSubImage2D(Gt,Bt,Zt,we,Xt,Jt,kt,zt);Ct.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Fe?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Gt,Bt,Zt,we,en,kt,zt,Wt,Be,Ie,Ze.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Gt,Bt,Zt,we,en,kt,zt,Wt,Be,Ze.data):X.texSubImage3D(Gt,Bt,Zt,we,en,kt,zt,Wt,Be,Ie,Ze):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Bt,Zt,we,kt,zt,Be,Ie,Ze.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Bt,Zt,we,Ze.width,Ze.height,Be,Ze.data):X.texSubImage2D(X.TEXTURE_2D,Bt,Zt,we,kt,zt,Be,Ie,Ze);Ct.pixelStorei(X.UNPACK_ROW_LENGTH,Fn),Ct.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xe),Ct.pixelStorei(X.UNPACK_SKIP_PIXELS,Mn),Ct.pixelStorei(X.UNPACK_SKIP_ROWS,ni),Ct.pixelStorei(X.UNPACK_SKIP_IMAGES,Ci),Bt===0&&Z.generateMipmaps&&X.generateMipmap(Gt),Ct.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ct.unbindTexture()},this.resetState=function(){lt=0,ut=0,Y=null,Ct.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Kv={type:"change"},Zp={type:"start"},Wx={type:"end"},cu=new Hp,Qv=new fs,fR=Math.cos(70*yx.DEG2RAD),En=new I,$n=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nd=1e-6;class hR extends pE{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new _s,this._lastTargetPosition=new I,this._quat=new _s().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ev,this._sphericalDelta=new Ev,this._scale=1,this._panOffset=new I,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new I,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pR.bind(this),this._onPointerDown=dR.bind(this),this._onPointerUp=mR.bind(this),this._onContextMenu=MR.bind(this),this._onMouseWheel=vR.bind(this),this._onKeyDown=xR.bind(this),this._onTouchStart=yR.bind(this),this._onTouchMove=SR.bind(this),this._onMouseDown=gR.bind(this),this._onMouseMove=_R.bind(this),this._interceptControlDown=bR.bind(this),this._interceptControlUp=ER.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kv),this.update(),this.state=Ye.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;En.copy(i).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),i.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=En.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new I(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new I(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(cu.origin.copy(this.object.position),cu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cu.direction))<fR?this.object.lookAt(this.target):(Qv.setFromNormalAndCoplanarPoint(this.object.up,this.target),cu.intersectPlane(Qv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nd||this._lastTargetPosition.distanceToSquared(this.target)>Nd?(this.dispatchEvent(Kv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$n/60*this.autoRotateSpeed*t:$n/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){En.setFromMatrixColumn(i,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,i){this.screenSpacePanning===!0?En.setFromMatrixColumn(i,1):(En.setFromMatrixColumn(i,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Vt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function dR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function mR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wx),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function gR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Jr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Jr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Zp)}function _R(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function vR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(Zp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Wx))}function xR(r){this.enabled!==!1&&this._handleKeyDown(r)}function yR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Zp)}function SR(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function MR(r){this.enabled!==!1&&r.preventDefault()}function bR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ER(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ud={emissionRate:4.2,pumpPower:72,polarizerA:0,polarizerB:45,visibility:.86,coincidenceWindow:5},Tp=r=>r*Math.PI/180,wu=(r,t,i)=>Math.max(t,Math.min(i,r));function jx(r,t,i){return wu(.5*(1+i*Math.cos(2*Tp(r-t))),.04,.96)}function Jv(r,t=0){const i=jx(r.polarizerA,r.polarizerB,r.visibility),s=r.pumpPower/100,l=wu(.72+r.coincidenceWindow/18,.72,1.52),c=Math.round(6200*s*r.emissionRate+240*Math.sin(t*1.7)),f=Math.round(6e3*s*r.emissionRate+220*Math.cos(t*1.4)),d=Math.round(c*.18*i*r.visibility*l);return{detectorA:c,detectorB:f,coincidence:d,probability:i}}function Zr(r,t,i,s){const l=new jp(r,96,t,12,!1),c=new Ri({color:i,transparent:s<1,opacity:s,blending:ms,depthWrite:!1});return new on(l,c)}function xl(r,t={}){const{color:i="#e5eef8",background:s="rgba(6, 14, 26, 0.72)",width:l=560,height:c=150,scale:f=[1.8,.48,1],fontSize:d=46}=t,m=document.createElement("canvas");m.width=l,m.height=c;const p=m.getContext("2d"),_=new Ob(m);_.minFilter=Bn;const v=new Ax({map:_,transparent:!0,depthTest:!1}),g=new Rb(v);return g.scale.set(...f),g.userData.label={canvas:m,context:p,texture:_,options:{color:i,background:s,fontSize:d}},Ap(g,r),g}function Ap(r,t){const{canvas:i,context:s,texture:l,options:c}=r.userData.label,{color:f,background:d,fontSize:m}=c;s.clearRect(0,0,i.width,i.height),s.fillStyle=d,TR(s,10,18,i.width-20,i.height-36,28),s.fill(),s.font=`600 ${m}px "Microsoft YaHei", "Noto Sans SC", sans-serif`,s.fillStyle=f,s.textAlign="center",s.textBaseline="middle",s.fillText(t,i.width/2,i.height/2+2),l.needsUpdate=!0}function TR(r,t,i,s,l,c){r.beginPath(),r.moveTo(t+c,i),r.lineTo(t+s-c,i),r.quadraticCurveTo(t+s,i,t+s,i+c),r.lineTo(t+s,i+l-c),r.quadraticCurveTo(t+s,i+l,t+s-c,i+l),r.lineTo(t+c,i+l),r.quadraticCurveTo(t,i+l,t,i+l-c),r.lineTo(t,i+c),r.quadraticCurveTo(t,i,t+c,i),r.closePath()}function AR(r,t){const i=new I(0,0,1);r.quaternion.setFromUnitVectors(i,t.clone().normalize())}function $v(r,t,i,s){const l=new ds;l.position.copy(t),AR(l,i);const c=new ds;l.add(c);const f=new on(new Lu(.48,80),new Ri({color:s,transparent:!0,opacity:.34,side:zi,depthWrite:!1}));c.add(f);const d=new on(new Wp(.49,.014,10,96),new Ri({color:12446463,transparent:!0,opacity:.78}));c.add(d);const m=new on(new ys(.86,.038,.035),new Ri({color:16777215}));c.add(m);const p=xl(`${r} 0°`,{scale:[1.24,.33,1],fontSize:42,background:"rgba(9, 20, 36, 0.86)"});return p.position.copy(t.clone().add(new I(0,.74,0))),{group:l,rotator:c,label:p}}function tx(r,t,i){const s=new ds;s.position.copy(t);const l=new on(new ys(.56,.62,.74),new Cu({color:1054759,metalness:.45,roughness:.35,emissive:i,emissiveIntensity:.08}));s.add(l);const c=new on(new Lu(.22,48),new Ri({color:i,transparent:!0,opacity:.72,blending:ms}));c.position.x=-.31,c.rotation.y=-Math.PI/2,s.add(c);const f=new on(new Ou(.17,24,16),new Ri({color:i,transparent:!0,opacity:0,blending:ms,depthWrite:!1}));f.position.x=-.34,s.add(f);const d=new zx(i,0,2.4);d.position.set(-.24,.1,0),s.add(d);const m=xl(r,{scale:[1.1,.3,1],fontSize:42});return m.position.copy(t.clone().add(new I(.05,-.64,0))),{group:s,body:l,lens:c,flash:f,light:d,label:m}}function RR(r){r.geometry&&r.geometry.dispose(),(Array.isArray(r.material)?r.material:[r.material]).filter(Boolean).forEach(i=>{Object.values(i).forEach(s=>{s?.isTexture&&s.dispose()}),i.dispose()})}function CR(){const r=Sn.useRef(null),t=Sn.useRef(Ud),[i,s]=Sn.useState(Ud),[l,c]=Sn.useState(()=>Jv(Ud)),f=Sn.useMemo(()=>Math.abs(((i.polarizerA-i.polarizerB+90)%180+180)%180-90),[i.polarizerA,i.polarizerB]);Sn.useEffect(()=>{t.current=i},[i]),Sn.useEffect(()=>{const m=r.current;if(!m)return;const p=new Sb;p.background=new me(329485),p.fog=new Fp(329485,12,23);const _=new pi(42,1,.1,100);_.position.set(2.1,4.9,12.1);const v=new uR({antialias:!0,powerPreference:"high-performance"});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.outputColorSpace=di,m.appendChild(v.domElement);const g=new hR(_,v.domElement);g.enableDamping=!0,g.target.set(-.35,-.32,0),g.minDistance=10.2,g.maxDistance=19,g.maxPolarAngle=Math.PI*.49;const y=_.position.clone().sub(g.target).normalize();p.add(new cE(8230584,.55));const E=new lE(14150911,1.65);E.position.set(-2.5,4,2.5),p.add(E);const C=new zx(6220500,1.2,8);C.position.set(1.5,1.2,0),p.add(C);const M=new on(new Tl(12,5.8),new Cu({color:463135,metalness:.25,roughness:.72}));M.rotation.x=-Math.PI/2,M.position.y=-.55,p.add(M);const S=new dE(12,24,2377827,1451575);S.position.y=-.53,p.add(S);const w=new gu([new I(-5.2,0,0),new I(-3.7,0,0),new I(-2.25,0,0)]),N=new gu([new I(-2,.05,0),new I(-.9,.13,.72),new I(1.2,.16,1.28),new I(3.2,.12,1.78),new I(4.68,.1,2.08)]),U=new gu([new I(-2,.05,0),new I(-.9,.13,-.72),new I(1.2,.16,-1.28),new I(3.2,.12,-1.78),new I(4.68,.1,-2.08)]);p.add(Zr(w,.03,10451690,.92)),p.add(Zr(w,.11,8141549,.12)),p.add(Zr(N,.025,6809849,.86)),p.add(Zr(N,.09,561586,.12)),p.add(Zr(U,.025,11006928,.86)),p.add(Zr(U,.09,2278750,.12));const k=new ds;k.position.set(-5.55,0,0);const O=new on(new El(.24,.24,.72,32),new Cu({color:2107704,metalness:.6,roughness:.28}));O.rotation.z=Math.PI/2,k.add(O);const B=new on(new El(.18,.18,.045,32),new Ri({color:10980346}));B.rotation.z=Math.PI/2,B.position.x=.38,k.add(B),p.add(k);const T=xl("405 nm 激光器",{scale:[1.35,.36,1]});T.position.set(-5.4,-.55,0),p.add(T);const P=new on(new ys(.42,.8,.42),new nE({color:16436245,transparent:!0,opacity:.72,roughness:.08,transmission:.22,thickness:.35}));P.position.set(-2.02,.05,0),P.rotation.y=Math.PI/5,p.add(P);const K=xl("BBO 非线性晶体",{scale:[1.42,.36,1]});K.position.set(-2.05,-.58,0),p.add(K);const G=new Ri({color:3718648,transparent:!0,opacity:.07,side:zi,depthWrite:!1,blending:ms}),q=new on(new kp(1,2.2,64,1,!0),G);q.position.set(-.8,.06,.68),q.rotation.z=Math.PI/2,q.rotation.y=-.36,p.add(q);const lt=q.clone();lt.position.z=-.68,lt.rotation.y=.36,p.add(lt);const ut=$v("偏振片 A",N.getPoint(.56),N.getTangent(.56),6809849),Y=$v("偏振片 B",U.getPoint(.56),U.getTangent(.56),11006928);p.add(ut.group,ut.label,Y.group,Y.label);const L=tx("探测器 D1",new I(5.02,.1,2.12),6809849),F=tx("探测器 D2",new I(5.02,.1,-2.12),11006928);p.add(L.group,L.label,F.group,F.label);const ot=xl("符合计数",{color:"#cffafe",background:"rgba(8, 47, 73, 0.8)",scale:[1,.3,1]});ot.position.set(5.12,.95,0),p.add(ot);const mt=new Cx(new Dn().setFromPoints([new I(5.02,.45,1.82),new I(5.22,.72,0),new I(5.02,.45,-1.82)]),new sE({color:9361407,dashSize:.08,gapSize:.06,transparent:!0,opacity:.7}));mt.computeLineDistances(),p.add(mt);const bt=new Ou(.075,18,14),z=Array.from({length:9},(X,_e)=>{const Qt=new on(bt,new Ri({color:6809849,transparent:!0,blending:ms})),Re=new on(bt,new Ri({color:11006928,transparent:!0,blending:ms}));return p.add(Qt,Re),{upper:Qt,lower:Re,offset:_e/9}});let J=0,yt=Number.NaN,Tt=Number.NaN,wt=0;const rt=new hE,xt=new Set,Mt=new I,It=new I,te=new I,Kt=new I,Oe=new so(new I(-1.8,-.9,-1.25),new I(1.8,1.1,1.25)),fe=X=>X instanceof HTMLElement&&(X.tagName==="INPUT"||X.tagName==="TEXTAREA"||X.tagName==="SELECT"||X.isContentEditable),ge=X=>{const _e=X.key.toLowerCase();!["w","a","s","d"].includes(_e)||fe(X.target)||(xt.add(_e),X.preventDefault())},Ce=X=>{xt.delete(X.key.toLowerCase())},re=()=>xt.clear();window.addEventListener("keydown",ge),window.addEventListener("keyup",Ce),window.addEventListener("blur",re);const tn=()=>{const{clientWidth:X,clientHeight:_e}=m;v.setSize(X,_e,!1),_.aspect=X/Math.max(_e,1),_.fov=_.aspect<1.15?50:_.aspect<1.45?46:42,g.minDistance=_.aspect<1.15?15.8:_.aspect<1.45?13.6:12.8,g.maxDistance=Math.max(21,g.minDistance+6),_.position.distanceTo(g.target)<g.minDistance&&_.position.copy(g.target).add(y.clone().multiplyScalar(g.minDistance)),_.updateProjectionMatrix()},ze=new ResizeObserver(tn);ze.observe(m),tn();const pn=()=>{const X=Math.min(rt.getDelta(),.05),_e=rt.elapsedTime,Qt=t.current,Re=jx(Qt.polarizerA,Qt.polarizerB,Qt.visibility),Ct=yx.lerp(3,1.18,(Qt.emissionRate-1)/7),Qe=.55+.45*Math.sin(_e*3.2);if(xt.size>0&&(_.getWorldDirection(It),te.crossVectors(It,_.up).normalize(),Kt.crossVectors(te,It).normalize(),Mt.set(0,0,0),xt.has("a")&&Mt.sub(te),xt.has("d")&&Mt.add(te),xt.has("w")&&Mt.add(Kt),xt.has("s")&&Mt.sub(Kt),Mt.lengthSq()>0)){Mt.normalize().multiplyScalar(2.15*X);const St=g.target.clone();g.target.add(Mt),g.target.clamp(Oe.min,Oe.max),_.position.add(g.target.clone().sub(St))}Qt.polarizerA!==yt&&(yt=Qt.polarizerA,Ap(ut.label,`偏振片 A ${Number(Qt.polarizerA).toFixed(1)}°`)),Qt.polarizerB!==Tt&&(Tt=Qt.polarizerB,Ap(Y.label,`偏振片 B ${Number(Qt.polarizerB).toFixed(1)}°`)),ut.rotator.rotation.z=Tp(Qt.polarizerA),Y.rotator.rotation.z=Tp(Qt.polarizerB),B.scale.setScalar(1+Qe*Qt.pumpPower*.003),P.scale.setScalar(1+.025*Math.sin(_e*4.6));let D=0,b=0;z.forEach(St=>{const At=(_e/Ct+St.offset)%1;St.upper.position.copy(N.getPoint(At)),St.lower.position.copy(U.getPoint(At));const Nt=wu(At/.08,0,1),ft=wu((1-At)/.08,0,1),ht=Math.min(Nt,ft);St.upper.material.opacity=ht,St.lower.material.opacity=ht;const Ut=At>.9?(At-.9)/.1:0;D=Math.max(D,Ut),b=Math.max(b,Ut*(.6+Re*.6))});const $=1+D*1.9,gt=1+b*1.9;L.flash.material.opacity=D*.82,F.flash.material.opacity=b*.82,L.flash.scale.setScalar($),F.flash.scale.setScalar(gt),L.light.intensity=D*2.6,F.light.intensity=b*2.6,L.body.material.emissiveIntensity=.08+D*.9,F.body.material.emissiveIntensity=.08+b*.9,_e-wt>.18&&(wt=_e,c(Jv(Qt,_e))),g.update(),v.render(p,_),J=window.requestAnimationFrame(pn)};return pn(),()=>{window.cancelAnimationFrame(J),ze.disconnect(),window.removeEventListener("keydown",ge),window.removeEventListener("keyup",Ce),window.removeEventListener("blur",re),g.dispose(),p.traverse(RR),v.dispose(),v.domElement.parentElement===m&&m.removeChild(v.domElement)}},[]);const d=(m,p)=>{s(_=>({..._,[m]:Number(p)}))};return H.jsx("main",{className:"min-h-screen bg-[#05070d] text-slate-100",children:H.jsxs("div",{className:"mx-auto grid min-h-screen max-w-[1400px] items-center gap-4 px-4 py-4 lg:grid-cols-[minmax(0,1fr)_340px]",children:[H.jsxs("section",{className:"h-[min(740px,calc(100vh-32px))] min-h-[520px] overflow-hidden rounded-lg border border-cyan-400/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/30",children:[H.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 px-4 py-3",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs uppercase tracking-[0.24em] text-cyan-200/80",children:"Three.js optical bench"}),H.jsx("h1",{className:"mt-1 text-xl font-semibold text-white sm:text-2xl",children:"双光子纠缠实验 3D 交互演示"})]}),H.jsx("a",{href:"#/",className:"rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-100",children:"返回原页面"})]}),H.jsx("div",{ref:r,className:"h-[calc(100%_-_78px)] min-h-[440px] w-full"})]}),H.jsxs("aside",{className:"space-y-4",children:[H.jsxs("section",{className:"rounded-lg border border-slate-800 bg-slate-950 p-4",children:[H.jsx("h2",{className:"text-base font-semibold text-white",children:"实验参数"}),H.jsxs("div",{className:"mt-4 space-y-4",children:[H.jsx(Kr,{label:"光子发射频率",value:i.emissionRate,min:1,max:8,step:.1,unit:" pairs/s",onChange:m=>d("emissionRate",m)}),H.jsx(Kr,{label:"泵浦光功率",value:i.pumpPower,min:20,max:100,step:1,unit:"%",onChange:m=>d("pumpPower",m)}),H.jsx(Kr,{label:"偏振片 A 角度",value:i.polarizerA,min:0,max:180,step:.5,unit:"°",onChange:m=>d("polarizerA",m)}),H.jsx(Kr,{label:"偏振片 B 角度",value:i.polarizerB,min:0,max:180,step:.5,unit:"°",onChange:m=>d("polarizerB",m)}),H.jsx(Kr,{label:"干涉可见度",value:i.visibility,min:.35,max:.98,step:.01,unit:"",onChange:m=>d("visibility",m)}),H.jsx(Kr,{label:"符合时间窗口",value:i.coincidenceWindow,min:1,max:20,step:.5,unit:" ns",onChange:m=>d("coincidenceWindow",m)})]})]}),H.jsxs("section",{className:"rounded-lg border border-slate-800 bg-slate-950 p-4",children:[H.jsx("h2",{className:"text-base font-semibold text-white",children:"实时计数"}),H.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[H.jsx(uu,{label:"D1",value:l.detectorA,unit:"counts/s",tone:"cyan"}),H.jsx(uu,{label:"D2",value:l.detectorB,unit:"counts/s",tone:"green"}),H.jsx(uu,{label:"符合",value:l.coincidence,unit:"pairs/s",tone:"amber"}),H.jsx(uu,{label:"P(A,B)",value:l.probability.toFixed(2),unit:"",tone:"violet"})]}),H.jsxs("div",{className:"mt-4 rounded-md border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-300",children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsx("span",{children:"角度差"}),H.jsxs("span",{className:"font-mono text-cyan-100",children:[f.toFixed(1),"°"]})]}),H.jsx("div",{className:"mt-2 h-2 overflow-hidden rounded-full bg-slate-800",children:H.jsx("div",{className:"h-full rounded-full bg-cyan-300 transition-all",style:{width:`${Math.round(l.probability*100)}%`}})})]})]}),H.jsxs("section",{className:"rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-6 text-slate-300",children:[H.jsx("h2",{className:"text-base font-semibold text-white",children:"模型说明"}),H.jsxs("p",{className:"mt-3",children:["场景用 BBO 晶体处的成对发射表示 SPDC 过程，符合概率采用简化的",H.jsx("span",{className:"font-mono text-cyan-100",children:" cos(2Δθ)"})," 相关项，适合教学展示和页面演示。"]})]})]})]})})}function Kr({label:r,value:t,min:i,max:s,step:l,unit:c,onChange:f}){return H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"mb-2 flex items-center justify-between gap-3 text-sm",children:[H.jsx("span",{className:"text-slate-300",children:r}),H.jsxs("span",{className:"font-mono text-cyan-100",children:[Number(t).toFixed(l<1?1:0),c]})]}),H.jsx("input",{type:"range",min:i,max:s,step:l,value:t,onChange:d=>f(d.target.value),className:"w-full accent-cyan-300"})]})}function uu({label:r,value:t,unit:i,tone:s}){const l={cyan:"border-cyan-400/25 bg-cyan-400/10 text-cyan-100",green:"border-emerald-400/25 bg-emerald-400/10 text-emerald-100",amber:"border-amber-400/25 bg-amber-400/10 text-amber-100",violet:"border-violet-400/25 bg-violet-400/10 text-violet-100"};return H.jsxs("div",{className:`rounded-md border p-3 ${l[s]}`,children:[H.jsx("div",{className:"text-xs uppercase tracking-[0.18em] opacity-70",children:r}),H.jsx("div",{className:"mt-1 font-mono text-xl font-semibold",children:t}),H.jsx("div",{className:"text-xs opacity-70",children:i})]})}function wR(){const[r,t]=Sn.useState(window.location.hash||"#/");return Sn.useEffect(()=>{const i=()=>t(window.location.hash||"#/");return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),r==="#/three"?H.jsx(CR,{}):H.jsxs(H.Fragment,{children:[H.jsx(cM,{}),H.jsx("a",{href:"#/three",className:"fixed bottom-5 right-5 z-50 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-cyan-100 shadow-lg shadow-slate-900/30 ring-1 ring-cyan-300/30 transition hover:bg-slate-800",children:"打开 3D Demo"})]})}sM.createRoot(document.getElementById("root")).render(H.jsx(ex.StrictMode,{children:H.jsx(wR,{})}));

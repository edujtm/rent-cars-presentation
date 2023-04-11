(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Zt(n,t){const s=Object.create(null),o=n.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function cn(n){if(le(n)){const t={};for(let s=0;s<n.length;s++){const o=n[s],l=Ne(o)?mm(o):cn(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(Ne(n))return n;if(Be(n))return n}}const dm=/;(?![^(]*\))/g,fm=/:([^]+)/,Fm=/\/\*.*?\*\//gs;function mm(n){const t={};return n.replace(Fm,"").split(dm).forEach(s=>{if(s){const o=s.split(fm);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function He(n){let t="";if(Ne(n))t=n;else if(le(n))for(let s=0;s<n.length;s++){const o=He(n[s]);o&&(t+=o+" ")}else if(Be(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}function Ke(n){if(!n)return null;let{class:t,style:s}=n;return t&&!Ne(t)&&(n.class=He(t)),s&&(n.style=cn(s)),n}const ym="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",hm="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Iu=Zt(ym),gm=Zt(hm),vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_m=Zt(vm);function ju(n){return!!n||n===""}const At=n=>Ne(n)?n:n==null?"":le(n)||Be(n)&&(n.toString===Hu||!ue(n.toString))?JSON.stringify(n,Lu,2):String(n),Lu=(n,t)=>t&&t.__v_isRef?Lu(n,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Nu(t)?{[`Set(${t.size})`]:[...t.values()]}:Be(t)&&!le(t)&&!qu(t)?String(t):t,Le=Object.freeze({}),Ns=Object.freeze([]),_n=()=>{},Du=()=>!1,bm=/^on[^a-z]/,nl=n=>bm.test(n),Dl=n=>n.startsWith("onUpdate:"),ze=Object.assign,Fi=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},Am=Object.prototype.hasOwnProperty,Ce=(n,t)=>Am.call(n,t),le=Array.isArray,ms=n=>tl(n)==="[object Map]",Nu=n=>tl(n)==="[object Set]",wm=n=>tl(n)==="[object RegExp]",ue=n=>typeof n=="function",Ne=n=>typeof n=="string",mi=n=>typeof n=="symbol",Be=n=>n!==null&&typeof n=="object",yi=n=>Be(n)&&ue(n.then)&&ue(n.catch),Hu=Object.prototype.toString,tl=n=>Hu.call(n),hi=n=>tl(n).slice(8,-1),qu=n=>tl(n)==="[object Object]",gi=n=>Ne(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ol=Zt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xm=Zt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),rr=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},Cm=/-(\w)/g,it=rr(n=>n.replace(Cm,(t,s)=>s?s.toUpperCase():"")),Em=/\B([A-Z])/g,wt=rr(n=>n.replace(Em,"-$1").toLowerCase()),As=rr(n=>n.charAt(0).toUpperCase()+n.slice(1)),os=rr(n=>n?`on${As(n)}`:""),Ro=(n,t)=>!Object.is(n,t),as=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},Nl=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},km=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Sm=n=>{const t=Ne(n)?Number(n):NaN;return isNaN(t)?n:t};let hc;const zu=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let Sn;class Uu{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Sn,!t&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=Sn;try{return Sn=this,t()}finally{Sn=s}}else Hl("cannot run an inactive effect scope.")}on(){Sn=this}off(){Sn=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Om(n){return new Uu(n)}function $m(n,t=Sn){t&&t.active&&t.effects.push(n)}function vi(){return Sn}function Vu(n){Sn?Sn.cleanups.push(n):Hl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const _i=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Wu=n=>(n.w&Wt)>0,Ku=n=>(n.n&Wt)>0,Pm=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Wt},Tm=n=>{const{deps:t}=n;if(t.length){let s=0;for(let o=0;o<t.length;o++){const l=t[o];Wu(l)&&!Ku(l)?l.delete(n):t[s++]=l,l.w&=~Wt,l.n&=~Wt}t.length=s}},ql=new WeakMap;let ho=0,Wt=1;const da=30;let mn;const ys=Symbol("iterate"),fa=Symbol("Map key iterate");class bi{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,$m(this,o)}run(){if(!this.active)return this.fn();let t=mn,s=Lt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=mn,mn=this,Lt=!0,Wt=1<<++ho,ho<=da?Pm(this):gc(this),this.fn()}finally{ho<=da&&Tm(this),Wt=1<<--ho,mn=this.parent,Lt=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(gc(this),this.onStop&&this.onStop(),this.active=!1)}}function gc(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let Lt=!0;const Gu=[];function xs(){Gu.push(Lt),Lt=!1}function Cs(){const n=Gu.pop();Lt=n===void 0?!0:n}function An(n,t,s){if(Lt&&mn){let o=ql.get(n);o||ql.set(n,o=new Map);let l=o.get(s);l||o.set(s,l=_i()),Yu(l,{effect:mn,target:n,type:t,key:s})}}function Yu(n,t){let s=!1;ho<=da?Ku(n)||(n.n|=Wt,s=!Wu(n)):s=!n.has(mn),s&&(n.add(mn),mn.deps.push(n),mn.onTrack&&mn.onTrack(Object.assign({effect:mn},t)))}function xt(n,t,s,o,l,r){const a=ql.get(n);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(s==="length"&&le(n)){const u=Number(o);a.forEach((d,f)=>{(f==="length"||f>=u)&&i.push(d)})}else switch(s!==void 0&&i.push(a.get(s)),t){case"add":le(n)?gi(s)&&i.push(a.get("length")):(i.push(a.get(ys)),ms(n)&&i.push(a.get(fa)));break;case"delete":le(n)||(i.push(a.get(ys)),ms(n)&&i.push(a.get(fa)));break;case"set":ms(n)&&i.push(a.get(ys));break}const c={target:n,type:t,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&Fa(i[0],c);else{const u=[];for(const d of i)d&&u.push(...d);Fa(_i(u),c)}}function Fa(n,t){const s=le(n)?n:[...n];for(const o of s)o.computed&&vc(o,t);for(const o of s)o.computed||vc(o,t)}function vc(n,t){(n!==mn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(ze({effect:n},t)),n.scheduler?n.scheduler():n.run())}function Mm(n,t){var s;return(s=ql.get(n))===null||s===void 0?void 0:s.get(t)}const Bm=Zt("__proto__,__v_isRef,__isVue"),Zu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mi)),Rm=ar(),Im=ar(!1,!0),jm=ar(!0),Lm=ar(!0,!0),_c=Dm();function Dm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const o=fe(this);for(let r=0,a=this.length;r<a;r++)An(o,"get",r+"");const l=o[t](...s);return l===-1||l===!1?o[t](...s.map(fe)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){xs();const o=fe(this)[t].apply(this,s);return Cs(),o}}),n}function Nm(n){const t=fe(this);return An(t,"has",n),t.hasOwnProperty(n)}function ar(n=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(n?t?od:sd:t?td:nd).get(o))return o;const a=le(o);if(!n){if(a&&Ce(_c,l))return Reflect.get(_c,l,r);if(l==="hasOwnProperty")return Nm}const i=Reflect.get(o,l,r);return(mi(l)?Zu.has(l):Bm(l))||(n||An(o,"get",l),t)?i:Pe(i)?a&&gi(l)?i:i.value:Be(i)?n?ot(i):qe(i):i}}const Hm=Ju(),qm=Ju(!0);function Ju(n=!1){return function(s,o,l,r){let a=s[o];if(Kt(a)&&Pe(a)&&!Pe(l))return!1;if(!n&&(!zl(l)&&!Kt(l)&&(a=fe(a),l=fe(l)),!le(s)&&Pe(a)&&!Pe(l)))return a.value=l,!0;const i=le(s)&&gi(o)?Number(o)<s.length:Ce(s,o),c=Reflect.set(s,o,l,r);return s===fe(r)&&(i?Ro(l,a)&&xt(s,"set",o,l,a):xt(s,"add",o,l)),c}}function zm(n,t){const s=Ce(n,t),o=n[t],l=Reflect.deleteProperty(n,t);return l&&s&&xt(n,"delete",t,void 0,o),l}function Um(n,t){const s=Reflect.has(n,t);return(!mi(t)||!Zu.has(t))&&An(n,"has",t),s}function Vm(n){return An(n,"iterate",le(n)?"length":ys),Reflect.ownKeys(n)}const Xu={get:Rm,set:Hm,deleteProperty:zm,has:Um,ownKeys:Vm},Qu={get:jm,set(n,t){return Hl(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return Hl(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},Wm=ze({},Xu,{get:Im,set:qm}),Km=ze({},Qu,{get:Lm}),Ai=n=>n,ir=n=>Reflect.getPrototypeOf(n);function fl(n,t,s=!1,o=!1){n=n.__v_raw;const l=fe(n),r=fe(t);s||(t!==r&&An(l,"get",t),An(l,"get",r));const{has:a}=ir(l),i=o?Ai:s?wi:Io;if(a.call(l,t))return i(n.get(t));if(a.call(l,r))return i(n.get(r));n!==l&&n.get(t)}function Fl(n,t=!1){const s=this.__v_raw,o=fe(s),l=fe(n);return t||(n!==l&&An(o,"has",n),An(o,"has",l)),n===l?s.has(n):s.has(n)||s.has(l)}function ml(n,t=!1){return n=n.__v_raw,!t&&An(fe(n),"iterate",ys),Reflect.get(n,"size",n)}function bc(n){n=fe(n);const t=fe(this);return ir(t).has.call(t,n)||(t.add(n),xt(t,"add",n,n)),this}function Ac(n,t){t=fe(t);const s=fe(this),{has:o,get:l}=ir(s);let r=o.call(s,n);r?ed(s,o,n):(n=fe(n),r=o.call(s,n));const a=l.call(s,n);return s.set(n,t),r?Ro(t,a)&&xt(s,"set",n,t,a):xt(s,"add",n,t),this}function wc(n){const t=fe(this),{has:s,get:o}=ir(t);let l=s.call(t,n);l?ed(t,s,n):(n=fe(n),l=s.call(t,n));const r=o?o.call(t,n):void 0,a=t.delete(n);return l&&xt(t,"delete",n,void 0,r),a}function xc(){const n=fe(this),t=n.size!==0,s=ms(n)?new Map(n):new Set(n),o=n.clear();return t&&xt(n,"clear",void 0,void 0,s),o}function yl(n,t){return function(o,l){const r=this,a=r.__v_raw,i=fe(a),c=t?Ai:n?wi:Io;return!n&&An(i,"iterate",ys),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}}function hl(n,t,s){return function(...o){const l=this.__v_raw,r=fe(l),a=ms(r),i=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,u=l[n](...o),d=s?Ai:t?wi:Io;return!t&&An(r,"iterate",c?fa:ys),{next(){const{value:f,done:F}=u.next();return F?{value:f,done:F}:{value:i?[d(f[0]),d(f[1])]:d(f),done:F}},[Symbol.iterator](){return this}}}}function St(n){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${As(n)} operation ${s}failed: target is readonly.`,fe(this))}return n==="delete"?!1:this}}function Gm(){const n={get(r){return fl(this,r)},get size(){return ml(this)},has:Fl,add:bc,set:Ac,delete:wc,clear:xc,forEach:yl(!1,!1)},t={get(r){return fl(this,r,!1,!0)},get size(){return ml(this)},has:Fl,add:bc,set:Ac,delete:wc,clear:xc,forEach:yl(!1,!0)},s={get(r){return fl(this,r,!0)},get size(){return ml(this,!0)},has(r){return Fl.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:yl(!0,!1)},o={get(r){return fl(this,r,!0,!0)},get size(){return ml(this,!0)},has(r){return Fl.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:yl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=hl(r,!1,!1),s[r]=hl(r,!0,!1),t[r]=hl(r,!1,!0),o[r]=hl(r,!0,!0)}),[n,s,t,o]}const[Ym,Zm,Jm,Xm]=Gm();function cr(n,t){const s=t?n?Xm:Jm:n?Zm:Ym;return(o,l,r)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?o:Reflect.get(Ce(s,l)&&l in o?s:o,l,r)}const Qm={get:cr(!1,!1)},ey={get:cr(!1,!0)},ny={get:cr(!0,!1)},ty={get:cr(!0,!0)};function ed(n,t,s){const o=fe(s);if(o!==s&&t.call(n,o)){const l=hi(n);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const nd=new WeakMap,td=new WeakMap,sd=new WeakMap,od=new WeakMap;function sy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oy(n){return n.__v_skip||!Object.isExtensible(n)?0:sy(hi(n))}function qe(n){return Kt(n)?n:pr(n,!1,Xu,Qm,nd)}function ly(n){return pr(n,!1,Wm,ey,td)}function ot(n){return pr(n,!0,Qu,ny,sd)}function Ls(n){return pr(n,!0,Km,ty,od)}function pr(n,t,s,o,l){if(!Be(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=l.get(n);if(r)return r;const a=oy(n);if(a===0)return n;const i=new Proxy(n,a===2?o:s);return l.set(n,i),i}function hs(n){return Kt(n)?hs(n.__v_raw):!!(n&&n.__v_isReactive)}function Kt(n){return!!(n&&n.__v_isReadonly)}function zl(n){return!!(n&&n.__v_isShallow)}function Ul(n){return hs(n)||Kt(n)}function fe(n){const t=n&&n.__v_raw;return t?fe(t):n}function ur(n){return Nl(n,"__v_skip",!0),n}const Io=n=>Be(n)?qe(n):n,wi=n=>Be(n)?ot(n):n;function xi(n){Lt&&mn&&(n=fe(n),Yu(n.dep||(n.dep=_i()),{target:n,type:"get",key:"value"}))}function Ci(n,t){n=fe(n);const s=n.dep;s&&Fa(s,{target:n,type:"set",key:"value",newValue:t})}function Pe(n){return!!(n&&n.__v_isRef===!0)}function V(n){return ld(n,!1)}function ct(n){return ld(n,!0)}function ld(n,t){return Pe(n)?n:new ry(n,t)}class ry{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:fe(t),this._value=s?t:Io(t)}get value(){return xi(this),this._value}set value(t){const s=this.__v_isShallow||zl(t)||Kt(t);t=s?t:fe(t),Ro(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Io(t),Ci(this,t))}}function w(n){return Pe(n)?n.value:n}const ay={get:(n,t,s)=>w(Reflect.get(n,t,s)),set:(n,t,s,o)=>{const l=n[t];return Pe(l)&&!Pe(s)?(l.value=s,!0):Reflect.set(n,t,s,o)}};function rd(n){return hs(n)?n:new Proxy(n,ay)}class iy{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>xi(this),()=>Ci(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ad(n){return new iy(n)}function cy(n){Ul(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=le(n)?new Array(n.length):{};for(const s in n)t[s]=uy(n,s);return t}class py{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Mm(fe(this._object),this._key)}}function uy(n,t,s){const o=n[t];return Pe(o)?o:new py(n,t,s)}var id;class dy{constructor(t,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[id]=!1,this._dirty=!0,this.effect=new bi(t,()=>{this._dirty||(this._dirty=!0,Ci(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=fe(this);return xi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}id="__v_isReadonly";function fy(n,t,s=!1){let o,l;const r=ue(n);r?(o=n,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,l=n.set);const a=new dy(o,l,r||!l,s);return t&&!s&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const gs=[];function $l(n){gs.push(n)}function Pl(){gs.pop()}function I(n,...t){xs();const s=gs.length?gs[gs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=Fy();if(o)bt(o,s,11,[n+t.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${br(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${n}`,...t];l.length&&r.push(`
`,...my(l)),console.warn(...r)}Cs()}function Fy(){let n=gs[gs.length-1];if(!n)return[];const t=[];for(;n;){const s=t[0];s&&s.vnode===n?s.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function my(n){const t=[];return n.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...yy(s))}),t}function yy({vnode:n,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,l=` at <${br(n.component,n.type,o)}`,r=">"+s;return n.props?[l,...hy(n.props),r]:[l+r]}function hy(n){const t=[],s=Object.keys(n);return s.slice(0,3).forEach(o=>{t.push(...cd(o,n[o]))}),s.length>3&&t.push(" ..."),t}function cd(n,t,s){return Ne(t)?(t=JSON.stringify(t),s?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${n}=${t}`]:Pe(t)?(t=cd(n,fe(t.value),!0),s?t:[`${n}=Ref<`,t,">"]):ue(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=fe(t),s?t:[`${n}=`,t])}function gy(n,t){n!==void 0&&(typeof n!="number"?I(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&I(`${t} is NaN - the duration expression might be incorrect.`))}const Ei={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function bt(n,t,s,o){let l;try{l=o?n(...o):n()}catch(r){dr(r,t,s)}return l}function Nn(n,t,s,o){if(ue(n)){const r=bt(n,t,s,o);return r&&yi(r)&&r.catch(a=>{dr(a,t,s)}),r}const l=[];for(let r=0;r<n.length;r++)l.push(Nn(n[r],t,s,o));return l}function dr(n,t,s,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,i=Ei[s];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,a,i)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){bt(c,null,10,[n,a,i]);return}}vy(n,s,l,o)}function vy(n,t,s,o=!0){{const l=Ei[t];if(s&&$l(s),I(`Unhandled error${l?` during execution of ${l}`:""}`),s&&Pl(),o)throw n;console.error(n)}}let jo=!1,ma=!1;const rn=[];let tt=0;const Hs=[];let nt=null,Tt=0;const pd=Promise.resolve();let ki=null;const _y=100;function an(n){const t=ki||pd;return n?t.then(this?n.bind(this):n):t}function by(n){let t=tt+1,s=rn.length;for(;t<s;){const o=t+s>>>1;Lo(rn[o])<n?t=o+1:s=o}return t}function fr(n){(!rn.length||!rn.includes(n,jo&&n.allowRecurse?tt+1:tt))&&(n.id==null?rn.push(n):rn.splice(by(n.id),0,n),ud())}function ud(){!jo&&!ma&&(ma=!0,ki=pd.then(Fd))}function Ay(n){const t=rn.indexOf(n);t>tt&&rn.splice(t,1)}function dd(n){le(n)?Hs.push(...n):(!nt||!nt.includes(n,n.allowRecurse?Tt+1:Tt))&&Hs.push(n),ud()}function Cc(n,t=jo?tt+1:0){for(n=n||new Map;t<rn.length;t++){const s=rn[t];if(s&&s.pre){if(Si(n,s))continue;rn.splice(t,1),t--,s()}}}function fd(n){if(Hs.length){const t=[...new Set(Hs)];if(Hs.length=0,nt){nt.push(...t);return}for(nt=t,n=n||new Map,nt.sort((s,o)=>Lo(s)-Lo(o)),Tt=0;Tt<nt.length;Tt++)Si(n,nt[Tt])||nt[Tt]();nt=null,Tt=0}}const Lo=n=>n.id==null?1/0:n.id,wy=(n,t)=>{const s=Lo(n)-Lo(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function Fd(n){ma=!1,jo=!0,n=n||new Map,rn.sort(wy);const t=s=>Si(n,s);try{for(tt=0;tt<rn.length;tt++){const s=rn[tt];if(s&&s.active!==!1){if(t(s))continue;bt(s,null,14)}}}finally{tt=0,rn.length=0,fd(n),jo=!1,ki=null,(rn.length||Hs.length)&&Fd(n)}}function Si(n,t){if(!n.has(t))n.set(t,1);else{const s=n.get(t);if(s>_y){const o=t.ownerInstance,l=o&&zo(o.type);return I(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,s+1)}}let Dt=!1;const Is=new Set;zu().__VUE_HMR_RUNTIME__={createRecord:Br(md),rerender:Br(Ey),reload:Br(ky)};const ws=new Map;function xy(n){const t=n.type.__hmrId;let s=ws.get(t);s||(md(t,n.type),s=ws.get(t)),s.instances.add(n)}function Cy(n){ws.get(n.type.__hmrId).instances.delete(n)}function md(n,t){return ws.has(n)?!1:(ws.set(n,{initialDef:Ao(t),instances:new Set}),!0)}function Ao(n){return Gd(n)?n.__vccOpts:n}function Ey(n,t){const s=ws.get(n);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,Ao(o.type).render=t),o.renderCache=[],Dt=!0,o.update(),Dt=!1}))}function ky(n,t){const s=ws.get(n);if(!s)return;t=Ao(t),Ec(s.initialDef,t);const o=[...s.instances];for(const l of o){const r=Ao(l.type);Is.has(r)||(r!==s.initialDef&&Ec(r,t),Is.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(Is.add(r),l.ceReload(t.styles),Is.delete(r)):l.parent?fr(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}dd(()=>{for(const l of o)Is.delete(Ao(l.type))})}function Ec(n,t){ze(n,t);for(const s in n)s!=="__file"&&!(s in t)&&delete n[s]}function Br(n){return(t,s)=>{try{return n(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let st,go=[],ya=!1;function sl(n,...t){st?st.emit(n,...t):ya||go.push({event:n,args:t})}function yd(n,t){var s,o;st=n,st?(st.enabled=!0,go.forEach(({event:l,args:r})=>st.emit(l,...r)),go=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{yd(r,t)}),setTimeout(()=>{st||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ya=!0,go=[])},3e3)):(ya=!0,go=[])}function Sy(n,t){sl("app:init",n,t,{Fragment:$e,Text:rl,Comment:Xe,Static:Tl})}function Oy(n){sl("app:unmount",n)}const ha=Oi("component:added"),hd=Oi("component:updated"),$y=Oi("component:removed"),Py=n=>{st&&typeof st.cleanupBuffer=="function"&&!st.cleanupBuffer(n)&&$y(n)};function Oi(n){return t=>{sl(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Ty=gd("perf:start"),My=gd("perf:end");function gd(n){return(t,s,o)=>{sl(n,t.appContext.app,t.uid,t,s,o)}}function By(n,t,s){sl("component:emit",n.appContext.app,n,t,s)}function Ry(n,t,...s){if(n.isUnmounted)return;const o=n.vnode.props||Le;{const{emitsOptions:d,propsOptions:[f]}=n;if(d)if(!(t in d))(!f||!(os(t)in f))&&I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${os(t)}" prop.`);else{const F=d[t];ue(F)&&(F(...s)||I(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=s;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:F}=o[d]||Le;F&&(l=s.map(y=>Ne(y)?y.trim():y)),f&&(l=s.map(km))}By(n,t,l);{const d=t.toLowerCase();d!==t&&o[os(d)]&&I(`Event "${d}" is emitted in component ${br(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${wt(t)}" instead of "${t}".`)}let i,c=o[i=os(t)]||o[i=os(it(t))];!c&&r&&(c=o[i=os(wt(t))]),c&&Nn(c,n,6,l);const u=o[i+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[i])return;n.emitted[i]=!0,Nn(u,n,6,l)}}function vd(n,t,s=!1){const o=t.emitsCache,l=o.get(n);if(l!==void 0)return l;const r=n.emits;let a={},i=!1;if(!ue(n)){const c=u=>{const d=vd(u,t,!0);d&&(i=!0,ze(a,d))};!s&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!i?(Be(n)&&o.set(n,null),null):(le(r)?r.forEach(c=>a[c]=null):ze(a,r),Be(n)&&o.set(n,a),a)}function Fr(n,t){return!n||!nl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ce(n,t[0].toLowerCase()+t.slice(1))||Ce(n,wt(t))||Ce(n,t))}let Je=null,mr=null;function Vl(n){const t=Je;return Je=n,mr=n&&n.type.__scopeId||null,t}function en(n){mr=n}function nn(){mr=null}function W(n,t=Je,s){if(!t||n._n)return n;const o=(...l)=>{o._d&&Dc(-1);const r=Vl(t);let a;try{a=n(...l)}finally{Vl(r),o._d&&Dc(1)}return hd(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let ga=!1;function Wl(){ga=!0}function Rr(n){const{type:t,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:f,data:F,setupState:y,ctx:m,inheritAttrs:g}=n;let v,x;const A=Vl(n);ga=!1;try{if(s.shapeFlag&4){const O=l||o;v=Yn(d.call(O,O,f,r,y,F,m)),x=c}else{const O=t;c===r&&Wl(),v=Yn(O.length>1?O(r,{get attrs(){return Wl(),c},slots:i,emit:u}):O(r,null)),x=t.props?c:jy(c)}}catch(O){xo.length=0,dr(O,n,1),v=N(Xe)}let _=v,C;if(v.patchFlag>0&&v.patchFlag&2048&&([_,C]=Iy(v)),x&&g!==!1){const O=Object.keys(x),{shapeFlag:T}=_;if(O.length){if(T&7)a&&O.some(Dl)&&(x=Ly(x,a)),_=Jn(_,x);else if(!ga&&_.type!==Xe){const L=Object.keys(c),S=[],D=[];for(let Z=0,re=L.length;Z<re;Z++){const U=L[Z];nl(U)?Dl(U)||S.push(U[2].toLowerCase()+U.slice(3)):D.push(U)}D.length&&I(`Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),S.length&&I(`Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(kc(_)||I("Runtime directive used on component with non-element root node. The directives will not function as intended."),_=Jn(_),_.dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&(kc(_)||I("Component inside <Transition> renders non-element root node that cannot be animated."),_.transition=s.transition),C?C(_):v=_,Vl(A),v}const Iy=n=>{const t=n.children,s=n.dynamicChildren,o=_d(t);if(!o)return[n,void 0];const l=t.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{t[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(n.dynamicChildren=[...s,i]))};return[Yn(o),a]};function _d(n){let t;for(let s=0;s<n.length;s++){const o=n[s];if(Gt(o)){if(o.type!==Xe||o.children==="v-if"){if(t)return;t=o}}else return}return t}const jy=n=>{let t;for(const s in n)(s==="class"||s==="style"||nl(s))&&((t||(t={}))[s]=n[s]);return t},Ly=(n,t)=>{const s={};for(const o in n)(!Dl(o)||!(o.slice(9)in t))&&(s[o]=n[o]);return s},kc=n=>n.shapeFlag&7||n.type===Xe;function Dy(n,t,s){const{props:o,children:l,component:r}=n,{props:a,children:i,patchFlag:c}=t,u=r.emitsOptions;if((l||i)&&Dt||t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Sc(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const F=d[f];if(a[F]!==o[F]&&!Fr(u,F))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Sc(o,a,u):!0:!!a;return!1}function Sc(n,t,s){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==n[r]&&!Fr(s,r))return!0}return!1}function Ny({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const bd=n=>n.__isSuspense;function Hy(n,t){t&&t.pendingBranch?le(n)?t.effects.push(...n):t.effects.push(n):dd(n)}function On(n,t){if(!Ue)I("provide() can only be used inside setup().");else{let s=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===s&&(s=Ue.provides=Object.create(o)),s[n]=t}}function ee(n,t,s=!1){const o=Ue||Je;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&n in l)return l[n];if(arguments.length>1)return s&&ue(t)?t.call(o.proxy):t;I(`injection "${String(n)}" not found.`)}else I("inject() can only be used inside setup() or functional components.")}function Es(n,t){return $i(n,null,t)}const gl={};function ge(n,t,s){return ue(t)||I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),$i(n,t,s)}function $i(n,t,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Le){t||(s!==void 0&&I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=C=>{I("Invalid watch source: ",C,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=vi()===(Ue==null?void 0:Ue.scope)?Ue:null;let u,d=!1,f=!1;if(Pe(n)?(u=()=>n.value,d=zl(n)):hs(n)?(u=()=>n,o=!0):le(n)?(f=!0,d=n.some(C=>hs(C)||zl(C)),u=()=>n.map(C=>{if(Pe(C))return C.value;if(hs(C))return ds(C);if(ue(C))return bt(C,c,2);i(C)})):ue(n)?t?u=()=>bt(n,c,2):u=()=>{if(!(c&&c.isUnmounted))return F&&F(),Nn(n,c,3,[y])}:(u=_n,i(n)),t&&o){const C=u;u=()=>ds(C())}let F,y=C=>{F=A.onStop=()=>{bt(C,c,4)}},m;if(qo)if(y=_n,t?s&&Nn(t,c,3,[u(),f?[]:void 0,y]):u(),l==="sync"){const C=Gh();m=C.__watcherHandles||(C.__watcherHandles=[])}else return _n;let g=f?new Array(n.length).fill(gl):gl;const v=()=>{if(A.active)if(t){const C=A.run();(o||d||(f?C.some((O,T)=>Ro(O,g[T])):Ro(C,g)))&&(F&&F(),Nn(t,c,3,[C,g===gl?void 0:f&&g[0]===gl?[]:g,y]),g=C)}else A.run()};v.allowRecurse=!!t;let x;l==="sync"?x=v:l==="post"?x=()=>tn(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),x=()=>fr(v));const A=new bi(u,x);A.onTrack=r,A.onTrigger=a,t?s?v():g=A.run():l==="post"?tn(A.run.bind(A),c&&c.suspense):A.run();const _=()=>{A.stop(),c&&c.scope&&Fi(c.scope.effects,A)};return m&&m.push(_),_}function qy(n,t,s){const o=this.proxy,l=Ne(n)?n.includes(".")?Ad(o,n):()=>o[n]:n.bind(o,o);let r;ue(t)?r=t:(r=t.handler,s=t);const a=Ue;Ks(this);const i=$i(l,r.bind(o),s);return a?Ks(a):_s(),i}function Ad(n,t){const s=t.split(".");return()=>{let o=n;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function ds(n,t){if(!Be(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Pe(n))ds(n.value,t);else if(le(n))for(let s=0;s<n.length;s++)ds(n[s],t);else if(Nu(n)||ms(n))n.forEach(s=>{ds(s,t)});else if(qu(n))for(const s in n)ds(n[s],t);return n}function wd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ks(()=>{n.isMounted=!0}),ll(()=>{n.isUnmounting=!0}),n}const In=[Function,Array],zy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:In,onEnter:In,onAfterEnter:In,onEnterCancelled:In,onBeforeLeave:In,onLeave:In,onAfterLeave:In,onLeaveCancelled:In,onBeforeAppear:In,onAppear:In,onAfterAppear:In,onAppearCancelled:In},setup(n,{slots:t}){const s=Rn(),o=wd();let l;return()=>{const r=t.default&&Pi(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let g=!1;for(const v of r)if(v.type!==Xe){if(g){I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=v,g=!0}}const i=fe(n),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&I(`invalid <transition> mode: ${c}`),o.isLeaving)return Ir(a);const u=Oc(a);if(!u)return Ir(a);const d=Do(u,i,o,s);Ws(u,d);const f=s.subTree,F=f&&Oc(f);let y=!1;const{getTransitionKey:m}=u.type;if(m){const g=m();l===void 0?l=g:g!==l&&(l=g,y=!0)}if(F&&F.type!==Xe&&(!It(u,F)||y)){const g=Do(F,i,o,s);if(Ws(F,g),c==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},Ir(a);c==="in-out"&&u.type!==Xe&&(g.delayLeave=(v,x,A)=>{const _=xd(o,F);_[String(F.key)]=F,v._leaveCb=()=>{x(),v._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=A})}return a}}},Uy=zy;function xd(n,t){const{leavingVNodes:s}=n;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function Do(n,t,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:F,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:x,onAppearCancelled:A}=t,_=String(n.key),C=xd(s,n),O=(S,D)=>{S&&Nn(S,o,9,D)},T=(S,D)=>{const Z=D[1];O(S,D),le(S)?S.every(re=>re.length<=1)&&Z():S.length<=1&&Z()},L={mode:r,persisted:a,beforeEnter(S){let D=i;if(!s.isMounted)if(l)D=g||i;else return;S._leaveCb&&S._leaveCb(!0);const Z=C[_];Z&&It(n,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),O(D,[S])},enter(S){let D=c,Z=u,re=d;if(!s.isMounted)if(l)D=v||c,Z=x||u,re=A||d;else return;let U=!1;const _e=S._enterCb=ye=>{U||(U=!0,ye?O(re,[S]):O(Z,[S]),L.delayedLeave&&L.delayedLeave(),S._enterCb=void 0)};D?T(D,[S,_e]):_e()},leave(S,D){const Z=String(n.key);if(S._enterCb&&S._enterCb(!0),s.isUnmounting)return D();O(f,[S]);let re=!1;const U=S._leaveCb=_e=>{re||(re=!0,D(),_e?O(m,[S]):O(y,[S]),S._leaveCb=void 0,C[Z]===n&&delete C[Z])};C[Z]=n,F?T(F,[S,U]):U()},clone(S){return Do(S,t,s,o)}};return L}function Ir(n){if(ol(n))return n=Jn(n),n.children=null,n}function Oc(n){return ol(n)?n.children?n.children[0]:void 0:n}function Ws(n,t){n.shapeFlag&6&&n.component?Ws(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Pi(n,t=!1,s){let o=[],l=0;for(let r=0;r<n.length;r++){let a=n[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===$e?(a.patchFlag&128&&l++,o=o.concat(Pi(a.children,t,i))):(t||a.type!==Xe)&&o.push(i!=null?Jn(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Re(n){return ue(n)?{setup:n,name:n.name}:n}const qs=n=>!!n.type.__asyncLoader,ol=n=>n.type.__isKeepAlive,Vy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const s=Rn(),o=s.ctx;if(!o.renderer)return()=>{const A=t.default&&t.default();return A&&A.length===1?A[0]:A};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=o,F=f("div");o.activate=(A,_,C,O,T)=>{const L=A.component;u(A,_,C,0,i),c(L.vnode,A,_,C,L,i,O,A.slotScopeIds,T),tn(()=>{L.isDeactivated=!1,L.a&&as(L.a);const S=A.props&&A.props.onVnodeMounted;S&&jn(S,L.parent,A)},i),ha(L)},o.deactivate=A=>{const _=A.component;u(A,F,null,1,i),tn(()=>{_.da&&as(_.da);const C=A.props&&A.props.onVnodeUnmounted;C&&jn(C,_.parent,A),_.isDeactivated=!0},i),ha(_)};function y(A){jr(A),d(A,s,i,!0)}function m(A){l.forEach((_,C)=>{const O=zo(_.type);O&&(!A||!A(O))&&g(C)})}function g(A){const _=l.get(A);!a||!It(_,a)?y(_):a&&jr(a),l.delete(A),r.delete(A)}ge(()=>[n.include,n.exclude],([A,_])=>{A&&m(C=>vo(A,C)),_&&m(C=>!vo(_,C))},{flush:"post",deep:!0});let v=null;const x=()=>{v!=null&&l.set(v,Lr(s.subTree))};return ks(x),hr(x),ll(()=>{l.forEach(A=>{const{subTree:_,suspense:C}=s,O=Lr(_);if(A.type===O.type&&A.key===O.key){jr(O);const T=O.component.da;T&&tn(T,C);return}y(A)})}),()=>{if(v=null,!t.default)return null;const A=t.default(),_=A[0];if(A.length>1)return I("KeepAlive should contain exactly one component child."),a=null,A;if(!Gt(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return a=null,_;let C=Lr(_);const O=C.type,T=zo(qs(C)?C.type.__asyncResolved||{}:O),{include:L,exclude:S,max:D}=n;if(L&&(!T||!vo(L,T))||S&&T&&vo(S,T))return a=C,_;const Z=C.key==null?O:C.key,re=l.get(Z);return C.el&&(C=Jn(C),_.shapeFlag&128&&(_.ssContent=C)),v=Z,re?(C.el=re.el,C.component=re.component,C.transition&&Ws(C,C.transition),C.shapeFlag|=512,r.delete(Z),r.add(Z)):(r.add(Z),D&&r.size>parseInt(D,10)&&g(r.values().next().value)),C.shapeFlag|=256,a=C,bd(_.type)?_:C}}},Cd=Vy;function vo(n,t){return le(n)?n.some(s=>vo(s,t)):Ne(n)?n.split(",").includes(t):wm(n)?n.test(t):!1}function Ed(n,t){Sd(n,"a",t)}function kd(n,t){Sd(n,"da",t)}function Sd(n,t,s=Ue){const o=n.__wdc||(n.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(yr(t,o,s),s){let l=s.parent;for(;l&&l.parent;)ol(l.parent.vnode)&&Wy(o,t,s,l),l=l.parent}}function Wy(n,t,s,o){const l=yr(t,n,o,!0);gr(()=>{Fi(o[t],l)},s)}function jr(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Lr(n){return n.shapeFlag&128?n.ssContent:n}function yr(n,t,s=Ue,o=!1){if(s){const l=s[n]||(s[n]=[]),r=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;xs(),Ks(s);const i=Nn(t,s,n,a);return _s(),Cs(),i});return o?l.unshift(r):l.push(r),r}else{const l=os(Ei[n].replace(/ hook$/,""));I(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Et=n=>(t,s=Ue)=>(!qo||n==="sp")&&yr(n,(...o)=>t(...o),s),Ky=Et("bm"),ks=Et("m"),Gy=Et("bu"),hr=Et("u"),ll=Et("bum"),gr=Et("um"),Yy=Et("sp"),Zy=Et("rtg"),Jy=Et("rtc");function Xy(n,t=Ue){yr("ec",n,t)}function Od(n){xm(n)&&I("Do not use built-in directive ids as custom directive id: "+n)}function Ti(n,t){const s=Je;if(s===null)return I("withDirectives can only be used inside render functions."),n;const o=_r(s)||s.proxy,l=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[a,i,c,u=Le]=t[r];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&ds(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return n}function Qt(n,t,s,o){const l=n.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(xs(),Nn(c,s,8,[n.el,i,n,t]),Cs())}}const va="components",Qy="directives";function No(n,t){return $d(va,n,!0,t)||n}const eh=Symbol();function nh(n){return $d(Qy,n)}function $d(n,t,s=!0,o=!1){const l=Je||Ue;if(l){const r=l.type;if(n===va){const i=zo(r,!1);if(i&&(i===t||i===it(t)||i===As(it(t))))return r}const a=$c(l[n]||r[n],t)||$c(l.appContext[n],t);if(!a&&o)return r;if(s&&!a){const i=n===va?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";I(`Failed to resolve ${n.slice(0,-1)}: ${t}${i}`)}return a}else I(`resolve${As(n.slice(0,-1))} can only be used in render() or setup().`)}function $c(n,t){return n&&(n[t]||n[it(t)]||n[As(it(t))])}function Js(n,t,s,o){let l;const r=s&&s[o];if(le(n)||Ne(n)){l=new Array(n.length);for(let a=0,i=n.length;a<i;a++)l[a]=t(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){Number.isInteger(n)||I(`The v-for range expect an integer value but got ${n}.`),l=new Array(n);for(let a=0;a<n;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Be(n))if(n[Symbol.iterator])l=Array.from(n,(a,i)=>t(a,i,void 0,r&&r[i]));else{const a=Object.keys(n);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=t(n[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function Hn(n,t,s={},o,l){if(Je.isCE||Je.parent&&qs(Je.parent)&&Je.parent.isCE)return t!=="default"&&(s.name=t),N("slot",s,o&&o());let r=n[t];r&&r.length>1&&(I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),E();const a=r&&Pd(r(s)),i=ae($e,{key:s.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&n._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Pd(n){return n.some(t=>Gt(t)?!(t.type===Xe||t.type===$e&&!Pd(t.children)):!0)?n:null}const _a=n=>n?Vd(n)?_r(n)||n.proxy:_a(n.parent):null,vs=ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>Ls(n.props),$attrs:n=>Ls(n.attrs),$slots:n=>Ls(n.slots),$refs:n=>Ls(n.refs),$parent:n=>_a(n.parent),$root:n=>_a(n.root),$emit:n=>n.emit,$options:n=>Bi(n),$forceUpdate:n=>n.f||(n.f=()=>fr(n.update)),$nextTick:n=>n.n||(n.n=an.bind(n.proxy)),$watch:n=>qy.bind(n)}),Mi=n=>n==="_"||n==="$",Dr=(n,t)=>n!==Le&&!n.__isScriptSetup&&Ce(n,t),Td={get({_:n},t){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=n;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const y=a[t];if(y!==void 0)switch(y){case 1:return o[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(Dr(o,t))return a[t]=1,o[t];if(l!==Le&&Ce(l,t))return a[t]=2,l[t];if((u=n.propsOptions[0])&&Ce(u,t))return a[t]=3,r[t];if(s!==Le&&Ce(s,t))return a[t]=4,s[t];ba&&(a[t]=0)}}const d=vs[t];let f,F;if(d)return t==="$attrs"&&(An(n,"get",t),Wl()),d(n);if((f=i.__cssModules)&&(f=f[t]))return f;if(s!==Le&&Ce(s,t))return a[t]=4,s[t];if(F=c.config.globalProperties,Ce(F,t))return F[t];Je&&(!Ne(t)||t.indexOf("__v")!==0)&&(l!==Le&&Mi(t[0])&&Ce(l,t)?I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Je&&I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,s){const{data:o,setupState:l,ctx:r}=n;return Dr(l,t)?(l[t]=s,!0):l.__isScriptSetup&&Ce(l,t)?(I(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Le&&Ce(o,t)?(o[t]=s,!0):Ce(n.props,t)?(I(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:s}):r[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||n!==Le&&Ce(n,a)||Dr(t,a)||(i=r[0])&&Ce(i,a)||Ce(o,a)||Ce(vs,a)||Ce(l.config.globalProperties,a)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:Ce(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};Td.ownKeys=n=>(I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function th(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(vs).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>vs[s](n),set:_n})}),t}function sh(n){const{ctx:t,propsOptions:[s]}=n;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:_n})})}function oh(n){const{ctx:t,setupState:s}=n;Object.keys(fe(s)).forEach(o=>{if(!s.__isScriptSetup){if(Mi(o[0])){I(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:_n})}})}function lh(){const n=Object.create(null);return(t,s)=>{n[s]?I(`${t} property "${s}" is already defined in ${n[s]}.`):n[s]=t}}let ba=!0;function rh(n){const t=Bi(n),s=n.proxy,o=n.ctx;ba=!1,t.beforeCreate&&Pc(t.beforeCreate,n,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:f,mounted:F,beforeUpdate:y,updated:m,activated:g,deactivated:v,beforeDestroy:x,beforeUnmount:A,destroyed:_,unmounted:C,render:O,renderTracked:T,renderTriggered:L,errorCaptured:S,serverPrefetch:D,expose:Z,inheritAttrs:re,components:U,directives:_e,filters:ye}=t,be=lh();{const[Y]=n.propsOptions;if(Y)for(const oe in Y)be("Props",oe)}if(u&&ah(u,o,be,n.appContext.config.unwrapInjectedRef),a)for(const Y in a){const oe=a[Y];ue(oe)?(Object.defineProperty(o,Y,{value:oe.bind(s),configurable:!0,enumerable:!0,writable:!0}),be("Methods",Y)):I(`Method "${Y}" has type "${typeof oe}" in the component definition. Did you reference the function correctly?`)}if(l){ue(l)||I("The data option must be a function. Plain object usage is no longer supported.");const Y=l.call(s,s);if(yi(Y)&&I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Be(Y))I("data() should return an object.");else{n.data=qe(Y);for(const oe in Y)be("Data",oe),Mi(oe[0])||Object.defineProperty(o,oe,{configurable:!0,enumerable:!0,get:()=>Y[oe],set:_n})}}if(ba=!0,r)for(const Y in r){const oe=r[Y],Ae=ue(oe)?oe.bind(s,s):ue(oe.get)?oe.get.bind(s,s):_n;Ae===_n&&I(`Computed property "${Y}" has no getter.`);const Ie=!ue(oe)&&ue(oe.set)?oe.set.bind(s):()=>{I(`Write operation failed: computed property "${Y}" is readonly.`)},Cn=$({get:Ae,set:Ie});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>Cn.value,set:on=>Cn.value=on}),be("Computed",Y)}if(i)for(const Y in i)Md(i[Y],o,s,Y);if(c){const Y=ue(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(oe=>{On(oe,Y[oe])})}d&&Pc(d,n,"c");function Te(Y,oe){le(oe)?oe.forEach(Ae=>Y(Ae.bind(s))):oe&&Y(oe.bind(s))}if(Te(Ky,f),Te(ks,F),Te(Gy,y),Te(hr,m),Te(Ed,g),Te(kd,v),Te(Xy,S),Te(Jy,T),Te(Zy,L),Te(ll,A),Te(gr,C),Te(Yy,D),le(Z))if(Z.length){const Y=n.exposed||(n.exposed={});Z.forEach(oe=>{Object.defineProperty(Y,oe,{get:()=>s[oe],set:Ae=>s[oe]=Ae})})}else n.exposed||(n.exposed={});O&&n.render===_n&&(n.render=O),re!=null&&(n.inheritAttrs=re),U&&(n.components=U),_e&&(n.directives=_e)}function ah(n,t,s=_n,o=!1){le(n)&&(n=Aa(n));for(const l in n){const r=n[l];let a;Be(r)?"default"in r?a=ee(r.from||l,r.default,!0):a=ee(r.from||l):a=ee(r),Pe(a)?o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(I(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[l]=a):t[l]=a,s("Inject",l)}}function Pc(n,t,s){Nn(le(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,s)}function Md(n,t,s,o){const l=o.includes(".")?Ad(s,o):()=>s[o];if(Ne(n)){const r=t[n];ue(r)?ge(l,r):I(`Invalid watch handler specified by key "${n}"`,r)}else if(ue(n))ge(l,n.bind(s));else if(Be(n))if(le(n))n.forEach(r=>Md(r,t,s,o));else{const r=ue(n.handler)?n.handler.bind(s):t[n.handler];ue(r)?ge(l,r,n):I(`Invalid watch handler specified by key "${n.handler}"`,r)}else I(`Invalid watch option: "${o}"`,n)}function Bi(n){const t=n.type,{mixins:s,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,i=r.get(t);let c;return i?c=i:!l.length&&!s&&!o?c=t:(c={},l.length&&l.forEach(u=>Kl(c,u,a,!0)),Kl(c,t,a)),Be(t)&&r.set(t,c),c}function Kl(n,t,s,o=!1){const{mixins:l,extends:r}=t;r&&Kl(n,r,s,!0),l&&l.forEach(a=>Kl(n,a,s,!0));for(const a in t)if(o&&a==="expose")I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=ih[a]||s&&s[a];n[a]=i?i(n[a],t[a]):t[a]}return n}const ih={data:Tc,props:ls,emits:ls,methods:ls,computed:ls,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ls,directives:ls,watch:ph,provide:Tc,inject:ch};function Tc(n,t){return t?n?function(){return ze(ue(n)?n.call(this,this):n,ue(t)?t.call(this,this):t)}:t:n}function ch(n,t){return ls(Aa(n),Aa(t))}function Aa(n){if(le(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function dn(n,t){return n?[...new Set([].concat(n,t))]:t}function ls(n,t){return n?ze(ze(Object.create(null),n),t):t}function ph(n,t){if(!n)return t;if(!t)return n;const s=ze(Object.create(null),n);for(const o in t)s[o]=dn(n[o],t[o]);return s}function uh(n,t,s,o=!1){const l={},r={};Nl(r,vr,1),n.propsDefaults=Object.create(null),Bd(n,t,l,r);for(const a in n.propsOptions[0])a in l||(l[a]=void 0);Id(t||{},l,n),s?n.props=o?l:ly(l):n.type.props?n.props=l:n.props=r,n.attrs=r}function dh(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function fh(n,t,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=n,i=fe(l),[c]=n.propsOptions;let u=!1;if(!dh(n)&&(o||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let f=0;f<d.length;f++){let F=d[f];if(Fr(n.emitsOptions,F))continue;const y=t[F];if(c)if(Ce(r,F))y!==r[F]&&(r[F]=y,u=!0);else{const m=it(F);l[m]=wa(c,i,m,y,n,!1)}else y!==r[F]&&(r[F]=y,u=!0)}}}else{Bd(n,t,l,r)&&(u=!0);let d;for(const f in i)(!t||!Ce(t,f)&&((d=wt(f))===f||!Ce(t,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=wa(c,i,f,void 0,n,!0)):delete l[f]);if(r!==i)for(const f in r)(!t||!Ce(t,f))&&(delete r[f],u=!0)}u&&xt(n,"set","$attrs"),Id(t||{},l,n)}function Bd(n,t,s,o){const[l,r]=n.propsOptions;let a=!1,i;if(t)for(let c in t){if(Ol(c))continue;const u=t[c];let d;l&&Ce(l,d=it(c))?!r||!r.includes(d)?s[d]=u:(i||(i={}))[d]=u:Fr(n.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=fe(s),u=i||Le;for(let d=0;d<r.length;d++){const f=r[d];s[f]=wa(l,c,f,u[f],n,!Ce(u,f))}}return a}function wa(n,t,s,o,l,r){const a=n[s];if(a!=null){const i=Ce(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=l;s in u?o=u[s]:(Ks(l),o=u[s]=c.call(null,t),_s())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===wt(s))&&(o=!0))}return o}function Rd(n,t,s=!1){const o=t.propsCache,l=o.get(n);if(l)return l;const r=n.props,a={},i=[];let c=!1;if(!ue(n)){const d=f=>{c=!0;const[F,y]=Rd(f,t,!0);ze(a,F),y&&i.push(...y)};!s&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!c)return Be(n)&&o.set(n,Ns),Ns;if(le(r))for(let d=0;d<r.length;d++){Ne(r[d])||I("props must be strings when using array syntax.",r[d]);const f=it(r[d]);Mc(f)&&(a[f]=Le)}else if(r){Be(r)||I("invalid props options",r);for(const d in r){const f=it(d);if(Mc(f)){const F=r[d],y=a[f]=le(F)||ue(F)?{type:F}:Object.assign({},F);if(y){const m=Rc(Boolean,y.type),g=Rc(String,y.type);y[0]=m>-1,y[1]=g<0||m<g,(m>-1||Ce(y,"default"))&&i.push(f)}}}}const u=[a,i];return Be(n)&&o.set(n,u),u}function Mc(n){return n[0]!=="$"?!0:(I(`Invalid prop name: "${n}" is a reserved property.`),!1)}function xa(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function Bc(n,t){return xa(n)===xa(t)}function Rc(n,t){return le(t)?t.findIndex(s=>Bc(s,n)):ue(t)&&Bc(t,n)?0:-1}function Id(n,t,s){const o=fe(t),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&Fh(r,o[r],a,!Ce(n,r)&&!Ce(n,wt(r)))}}function Fh(n,t,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){I('Missing required prop: "'+n+'"');return}if(!(t==null&&!s.required)){if(l!=null&&l!==!0){let i=!1;const c=le(l)?l:[l],u=[];for(let d=0;d<c.length&&!i;d++){const{valid:f,expectedType:F}=yh(t,c[d]);u.push(F||""),i=f}if(!i){I(hh(n,t,u));return}}a&&!a(t)&&I('Invalid prop: custom validator check failed for prop "'+n+'".')}}const mh=Zt("String,Number,Boolean,Function,Symbol,BigInt");function yh(n,t){let s;const o=xa(t);if(mh(o)){const l=typeof n;s=l===o.toLowerCase(),!s&&l==="object"&&(s=n instanceof t)}else o==="Object"?s=Be(n):o==="Array"?s=le(n):o==="null"?s=n===null:s=n instanceof t;return{valid:s,expectedType:o}}function hh(n,t,s){let o=`Invalid prop: type check failed for prop "${n}". Expected ${s.map(As).join(" | ")}`;const l=s[0],r=hi(t),a=Ic(t,l),i=Ic(t,r);return s.length===1&&jc(l)&&!gh(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,jc(r)&&(o+=`with value ${i}.`),o}function Ic(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function jc(n){return["string","number","boolean"].some(s=>n.toLowerCase()===s)}function gh(...n){return n.some(t=>t.toLowerCase()==="boolean")}const jd=n=>n[0]==="_"||n==="$stable",Ri=n=>le(n)?n.map(Yn):[Yn(n)],vh=(n,t,s)=>{if(t._n)return t;const o=W((...l)=>(Ue&&I(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ri(t(...l))),s);return o._c=!1,o},Ld=(n,t,s)=>{const o=n._ctx;for(const l in n){if(jd(l))continue;const r=n[l];if(ue(r))t[l]=vh(l,r,o);else if(r!=null){I(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Ri(r);t[l]=()=>a}}},Dd=(n,t)=>{ol(n.vnode)||I("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Ri(t);n.slots.default=()=>s},_h=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=fe(t),Nl(t,"_",s)):Ld(t,n.slots={})}else n.slots={},t&&Dd(n,t);Nl(n.slots,vr,1)},bh=(n,t,s)=>{const{vnode:o,slots:l}=n;let r=!0,a=Le;if(o.shapeFlag&32){const i=t._;i?Dt?ze(l,t):s&&i===1?r=!1:(ze(l,t),!s&&i===1&&delete l._):(r=!t.$stable,Ld(t,l)),a=t}else t&&(Dd(n,t),a={default:1});if(r)for(const i in l)!jd(i)&&!(i in a)&&delete l[i]};function Nd(){return{app:null,config:{isNativeTag:Du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ah=0;function wh(n,t){return function(o,l=null){ue(o)||(o=Object.assign({},o)),l!=null&&!Be(l)&&(I("root props passed to app.mount() must be an object."),l=null);const r=Nd(),a=new Set;let i=!1;const c=r.app={_uid:Ah++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Yl,get config(){return r.config},set config(u){I("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?I("Plugin has already been applied to target app."):u&&ue(u.install)?(a.add(u),u.install(c,...d)):ue(u)?(a.add(u),u(c,...d)):I('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?I("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return ka(u,r.config),d?(r.components[u]&&I(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return Od(u),d?(r.directives[u]&&I(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(i)I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const F=N(o,l);return F.appContext=r,r.reload=()=>{n(Jn(F),u,f)},d&&t?t(F,u):n(F,u,f),i=!0,c._container=u,u.__vue_app__=c,c._instance=F.component,Sy(c,Yl),_r(F.component)||F.component.proxy}},unmount(){i?(n(null,c._container),c._instance=null,Oy(c),delete c._container.__vue_app__):I("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&I(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c}};return c}}function Ca(n,t,s,o,l=!1){if(le(n)){n.forEach((F,y)=>Ca(F,t&&(le(t)?t[y]:t),s,o,l));return}if(qs(o)&&!l)return;const r=o.shapeFlag&4?_r(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=n;if(!i){I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=i.refs===Le?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==c&&(Ne(u)?(d[u]=null,Ce(f,u)&&(f[u]=null)):Pe(u)&&(u.value=null)),ue(c))bt(c,i,12,[a,d]);else{const F=Ne(c),y=Pe(c);if(F||y){const m=()=>{if(n.f){const g=F?Ce(f,c)?f[c]:d[c]:c.value;l?le(g)&&Fi(g,r):le(g)?g.includes(r)||g.push(r):F?(d[c]=[r],Ce(f,c)&&(f[c]=d[c])):(c.value=[r],n.k&&(d[n.k]=c.value))}else F?(d[c]=a,Ce(f,c)&&(f[c]=a)):y?(c.value=a,n.k&&(d[n.k]=a)):I("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,tn(m,s)):m()}else I("Invalid template ref type:",c,`(${typeof c})`)}}let oo,Rt;function Ft(n,t){n.appContext.config.performance&&Gl()&&Rt.mark(`vue-${t}-${n.uid}`),Ty(n,t,Gl()?Rt.now():Date.now())}function mt(n,t){if(n.appContext.config.performance&&Gl()){const s=`vue-${t}-${n.uid}`,o=s+":end";Rt.mark(o),Rt.measure(`<${br(n,n.type)}> ${t}`,s,o),Rt.clearMarks(s),Rt.clearMarks(o)}My(n,t,Gl()?Rt.now():Date.now())}function Gl(){return oo!==void 0||(typeof window<"u"&&window.performance?(oo=!0,Rt=window.performance):oo=!1),oo}function xh(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const tn=Hy;function Ch(n){return Eh(n)}function Eh(n,t){xh();const s=zu();s.__VUE__=!0,yd(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:F,setScopeId:y=_n,insertStaticContent:m}=n,g=(h,b,k,B=null,M=null,q=null,G=!1,H=null,z=Dt?!1:!!b.dynamicChildren)=>{if(h===b)return;h&&!It(h,b)&&(B=Q(h),hn(h,M,q,!0),h=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:j,ref:te,shapeFlag:ne}=b;switch(j){case rl:v(h,b,k,B);break;case Xe:x(h,b,k,B);break;case Tl:h==null?A(b,k,B,G):_(h,b,k,G);break;case $e:_e(h,b,k,B,M,q,G,H,z);break;default:ne&1?T(h,b,k,B,M,q,G,H,z):ne&6?ye(h,b,k,B,M,q,G,H,z):ne&64||ne&128?j.process(h,b,k,B,M,q,G,H,z,ke):I("Invalid VNode type:",j,`(${typeof j})`)}te!=null&&M&&Ca(te,h&&h.ref,q,b||h,!b)},v=(h,b,k,B)=>{if(h==null)o(b.el=i(b.children),k,B);else{const M=b.el=h.el;b.children!==h.children&&u(M,b.children)}},x=(h,b,k,B)=>{h==null?o(b.el=c(b.children||""),k,B):b.el=h.el},A=(h,b,k,B)=>{[h.el,h.anchor]=m(h.children,b,k,B,h.el,h.anchor)},_=(h,b,k,B)=>{if(b.children!==h.children){const M=F(h.anchor);O(h),[b.el,b.anchor]=m(b.children,k,M,B)}else b.el=h.el,b.anchor=h.anchor},C=({el:h,anchor:b},k,B)=>{let M;for(;h&&h!==b;)M=F(h),o(h,k,B),h=M;o(b,k,B)},O=({el:h,anchor:b})=>{let k;for(;h&&h!==b;)k=F(h),l(h),h=k;l(b)},T=(h,b,k,B,M,q,G,H,z)=>{G=G||b.type==="svg",h==null?L(b,k,B,M,q,G,H,z):Z(h,b,M,q,G,H,z)},L=(h,b,k,B,M,q,G,H)=>{let z,j;const{type:te,props:ne,shapeFlag:se,transition:me,dirs:Ee}=h;if(z=h.el=a(h.type,q,ne&&ne.is,ne),se&8?d(z,h.children):se&16&&D(h.children,z,null,B,M,q&&te!=="foreignObject",G,H),Ee&&Qt(h,null,B,"created"),S(z,h,h.scopeId,G,B),ne){for(const je in ne)je!=="value"&&!Ol(je)&&r(z,je,null,ne[je],q,h.children,B,M,K);"value"in ne&&r(z,"value",null,ne.value),(j=ne.onVnodeBeforeMount)&&jn(j,B,h)}Object.defineProperty(z,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(z,"__vueParentComponent",{value:B,enumerable:!1}),Ee&&Qt(h,null,B,"beforeMount");const De=(!M||M&&!M.pendingBranch)&&me&&!me.persisted;De&&me.beforeEnter(z),o(z,b,k),((j=ne&&ne.onVnodeMounted)||De||Ee)&&tn(()=>{j&&jn(j,B,h),De&&me.enter(z),Ee&&Qt(h,null,B,"mounted")},M)},S=(h,b,k,B,M)=>{if(k&&y(h,k),B)for(let q=0;q<B.length;q++)y(h,B[q]);if(M){let q=M.subTree;if(q.patchFlag>0&&q.patchFlag&2048&&(q=_d(q.children)||q),b===q){const G=M.vnode;S(h,G,G.scopeId,G.slotScopeIds,M.parent)}}},D=(h,b,k,B,M,q,G,H,z=0)=>{for(let j=z;j<h.length;j++){const te=h[j]=H?Mt(h[j]):Yn(h[j]);g(null,te,b,k,B,M,q,G,H)}},Z=(h,b,k,B,M,q,G)=>{const H=b.el=h.el;let{patchFlag:z,dynamicChildren:j,dirs:te}=b;z|=h.patchFlag&16;const ne=h.props||Le,se=b.props||Le;let me;k&&es(k,!1),(me=se.onVnodeBeforeUpdate)&&jn(me,k,b,h),te&&Qt(b,h,k,"beforeUpdate"),k&&es(k,!0),Dt&&(z=0,G=!1,j=null);const Ee=M&&b.type!=="foreignObject";if(j?(re(h.dynamicChildren,j,H,k,B,Ee,q),k&&k.type.__hmrId&&wo(h,b)):G||Ae(h,b,H,null,k,B,Ee,q,!1),z>0){if(z&16)U(H,b,ne,se,k,B,M);else if(z&2&&ne.class!==se.class&&r(H,"class",null,se.class,M),z&4&&r(H,"style",ne.style,se.style,M),z&8){const De=b.dynamicProps;for(let je=0;je<De.length;je++){const Ge=De[je],Wn=ne[Ge],Ps=se[Ge];(Ps!==Wn||Ge==="value")&&r(H,Ge,Wn,Ps,M,h.children,k,B,K)}}z&1&&h.children!==b.children&&d(H,b.children)}else!G&&j==null&&U(H,b,ne,se,k,B,M);((me=se.onVnodeUpdated)||te)&&tn(()=>{me&&jn(me,k,b,h),te&&Qt(b,h,k,"updated")},B)},re=(h,b,k,B,M,q,G)=>{for(let H=0;H<b.length;H++){const z=h[H],j=b[H],te=z.el&&(z.type===$e||!It(z,j)||z.shapeFlag&70)?f(z.el):k;g(z,j,te,null,B,M,q,G,!0)}},U=(h,b,k,B,M,q,G)=>{if(k!==B){if(k!==Le)for(const H in k)!Ol(H)&&!(H in B)&&r(h,H,k[H],null,G,b.children,M,q,K);for(const H in B){if(Ol(H))continue;const z=B[H],j=k[H];z!==j&&H!=="value"&&r(h,H,j,z,G,b.children,M,q,K)}"value"in B&&r(h,"value",k.value,B.value)}},_e=(h,b,k,B,M,q,G,H,z)=>{const j=b.el=h?h.el:i(""),te=b.anchor=h?h.anchor:i("");let{patchFlag:ne,dynamicChildren:se,slotScopeIds:me}=b;(Dt||ne&2048)&&(ne=0,z=!1,se=null),me&&(H=H?H.concat(me):me),h==null?(o(j,k,B),o(te,k,B),D(b.children,k,te,M,q,G,H,z)):ne>0&&ne&64&&se&&h.dynamicChildren?(re(h.dynamicChildren,se,k,M,q,G,H),M&&M.type.__hmrId?wo(h,b):(b.key!=null||M&&b===M.subTree)&&wo(h,b,!0)):Ae(h,b,k,te,M,q,G,H,z)},ye=(h,b,k,B,M,q,G,H,z)=>{b.slotScopeIds=H,h==null?b.shapeFlag&512?M.ctx.activate(b,k,B,G,z):be(b,k,B,M,q,G,z):Te(h,b,z)},be=(h,b,k,B,M,q,G)=>{const H=h.component=jh(h,B,M);if(H.type.__hmrId&&xy(H),$l(h),Ft(H,"mount"),ol(h)&&(H.ctx.renderer=ke),Ft(H,"init"),Dh(H),mt(H,"init"),H.asyncDep){if(M&&M.registerDep(H,Y),!h.el){const z=H.subTree=N(Xe);x(null,z,b,k)}return}Y(H,h,b,k,M,q,G),Pl(),mt(H,"mount")},Te=(h,b,k)=>{const B=b.component=h.component;if(Dy(h,b,k))if(B.asyncDep&&!B.asyncResolved){$l(b),oe(B,b,k),Pl();return}else B.next=b,Ay(B.update),B.update();else b.el=h.el,B.vnode=b},Y=(h,b,k,B,M,q,G)=>{const H=()=>{if(h.isMounted){let{next:te,bu:ne,u:se,parent:me,vnode:Ee}=h,De=te,je;$l(te||h.vnode),es(h,!1),te?(te.el=Ee.el,oe(h,te,G)):te=Ee,ne&&as(ne),(je=te.props&&te.props.onVnodeBeforeUpdate)&&jn(je,me,te,Ee),es(h,!0),Ft(h,"render");const Ge=Rr(h);mt(h,"render");const Wn=h.subTree;h.subTree=Ge,Ft(h,"patch"),g(Wn,Ge,f(Wn.el),Q(Wn),h,M,q),mt(h,"patch"),te.el=Ge.el,De===null&&Ny(h,Ge.el),se&&tn(se,M),(je=te.props&&te.props.onVnodeUpdated)&&tn(()=>jn(je,me,te,Ee),M),hd(h),Pl()}else{let te;const{el:ne,props:se}=b,{bm:me,m:Ee,parent:De}=h,je=qs(b);if(es(h,!1),me&&as(me),!je&&(te=se&&se.onVnodeBeforeMount)&&jn(te,De,b),es(h,!0),ne&&pe){const Ge=()=>{Ft(h,"render"),h.subTree=Rr(h),mt(h,"render"),Ft(h,"hydrate"),pe(ne,h.subTree,h,M,null),mt(h,"hydrate")};je?b.type.__asyncLoader().then(()=>!h.isUnmounted&&Ge()):Ge()}else{Ft(h,"render");const Ge=h.subTree=Rr(h);mt(h,"render"),Ft(h,"patch"),g(null,Ge,k,B,h,M,q),mt(h,"patch"),b.el=Ge.el}if(Ee&&tn(Ee,M),!je&&(te=se&&se.onVnodeMounted)){const Ge=b;tn(()=>jn(te,De,Ge),M)}(b.shapeFlag&256||De&&qs(De.vnode)&&De.vnode.shapeFlag&256)&&h.a&&tn(h.a,M),h.isMounted=!0,ha(h),b=k=B=null}},z=h.effect=new bi(H,()=>fr(j),h.scope),j=h.update=()=>z.run();j.id=h.uid,es(h,!0),z.onTrack=h.rtc?te=>as(h.rtc,te):void 0,z.onTrigger=h.rtg?te=>as(h.rtg,te):void 0,j.ownerInstance=h,j()},oe=(h,b,k)=>{b.component=h;const B=h.vnode.props;h.vnode=b,h.next=null,fh(h,b.props,B,k),bh(h,b.children,k),xs(),Cc(),Cs()},Ae=(h,b,k,B,M,q,G,H,z=!1)=>{const j=h&&h.children,te=h?h.shapeFlag:0,ne=b.children,{patchFlag:se,shapeFlag:me}=b;if(se>0){if(se&128){Cn(j,ne,k,B,M,q,G,H,z);return}else if(se&256){Ie(j,ne,k,B,M,q,G,H,z);return}}me&8?(te&16&&K(j,M,q),ne!==j&&d(k,ne)):te&16?me&16?Cn(j,ne,k,B,M,q,G,H,z):K(j,M,q,!0):(te&8&&d(k,""),me&16&&D(ne,k,B,M,q,G,H,z))},Ie=(h,b,k,B,M,q,G,H,z)=>{h=h||Ns,b=b||Ns;const j=h.length,te=b.length,ne=Math.min(j,te);let se;for(se=0;se<ne;se++){const me=b[se]=z?Mt(b[se]):Yn(b[se]);g(h[se],me,k,null,M,q,G,H,z)}j>te?K(h,M,q,!0,!1,ne):D(b,k,B,M,q,G,H,z,ne)},Cn=(h,b,k,B,M,q,G,H,z)=>{let j=0;const te=b.length;let ne=h.length-1,se=te-1;for(;j<=ne&&j<=se;){const me=h[j],Ee=b[j]=z?Mt(b[j]):Yn(b[j]);if(It(me,Ee))g(me,Ee,k,null,M,q,G,H,z);else break;j++}for(;j<=ne&&j<=se;){const me=h[ne],Ee=b[se]=z?Mt(b[se]):Yn(b[se]);if(It(me,Ee))g(me,Ee,k,null,M,q,G,H,z);else break;ne--,se--}if(j>ne){if(j<=se){const me=se+1,Ee=me<te?b[me].el:B;for(;j<=se;)g(null,b[j]=z?Mt(b[j]):Yn(b[j]),k,Ee,M,q,G,H,z),j++}}else if(j>se)for(;j<=ne;)hn(h[j],M,q,!0),j++;else{const me=j,Ee=j,De=new Map;for(j=Ee;j<=se;j++){const un=b[j]=z?Mt(b[j]):Yn(b[j]);un.key!=null&&(De.has(un.key)&&I("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),De.set(un.key,j))}let je,Ge=0;const Wn=se-Ee+1;let Ps=!1,Fc=0;const so=new Array(Wn);for(j=0;j<Wn;j++)so[j]=0;for(j=me;j<=ne;j++){const un=h[j];if(Ge>=Wn){hn(un,M,q,!0);continue}let et;if(un.key!=null)et=De.get(un.key);else for(je=Ee;je<=se;je++)if(so[je-Ee]===0&&It(un,b[je])){et=je;break}et===void 0?hn(un,M,q,!0):(so[et-Ee]=j+1,et>=Fc?Fc=et:Ps=!0,g(un,b[et],k,null,M,q,G,H,z),Ge++)}const mc=Ps?kh(so):Ns;for(je=mc.length-1,j=Wn-1;j>=0;j--){const un=Ee+j,et=b[un],yc=un+1<te?b[un+1].el:B;so[j]===0?g(null,et,k,yc,M,q,G,H,z):Ps&&(je<0||j!==mc[je]?on(et,k,yc,2):je--)}}},on=(h,b,k,B,M=null)=>{const{el:q,type:G,transition:H,children:z,shapeFlag:j}=h;if(j&6){on(h.component.subTree,b,k,B);return}if(j&128){h.suspense.move(b,k,B);return}if(j&64){G.move(h,b,k,ke);return}if(G===$e){o(q,b,k);for(let ne=0;ne<z.length;ne++)on(z[ne],b,k,B);o(h.anchor,b,k);return}if(G===Tl){C(h,b,k);return}if(B!==2&&j&1&&H)if(B===0)H.beforeEnter(q),o(q,b,k),tn(()=>H.enter(q),M);else{const{leave:ne,delayLeave:se,afterLeave:me}=H,Ee=()=>o(q,b,k),De=()=>{ne(q,()=>{Ee(),me&&me()})};se?se(q,Ee,De):De()}else o(q,b,k)},hn=(h,b,k,B=!1,M=!1)=>{const{type:q,props:G,ref:H,children:z,dynamicChildren:j,shapeFlag:te,patchFlag:ne,dirs:se}=h;if(H!=null&&Ca(H,null,k,h,!0),te&256){b.ctx.deactivate(h);return}const me=te&1&&se,Ee=!qs(h);let De;if(Ee&&(De=G&&G.onVnodeBeforeUnmount)&&jn(De,b,h),te&6)J(h.component,k,B);else{if(te&128){h.suspense.unmount(k,B);return}me&&Qt(h,null,b,"beforeUnmount"),te&64?h.type.remove(h,b,k,M,ke,B):j&&(q!==$e||ne>0&&ne&64)?K(j,b,k,!1,!0):(q===$e&&ne&384||!M&&te&16)&&K(z,b,k),B&&kt(h)}(Ee&&(De=G&&G.onVnodeUnmounted)||me)&&tn(()=>{De&&jn(De,b,h),me&&Qt(h,null,b,"unmounted")},k)},kt=h=>{const{type:b,el:k,anchor:B,transition:M}=h;if(b===$e){h.patchFlag>0&&h.patchFlag&2048&&M&&!M.persisted?h.children.forEach(G=>{G.type===Xe?l(G.el):kt(G)}):P(k,B);return}if(b===Tl){O(h);return}const q=()=>{l(k),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(h.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:H}=M,z=()=>G(k,q);H?H(h.el,q,z):z()}else q()},P=(h,b)=>{let k;for(;h!==b;)k=F(h),l(h),h=k;l(b)},J=(h,b,k)=>{h.type.__hmrId&&Cy(h);const{bum:B,scope:M,update:q,subTree:G,um:H}=h;B&&as(B),M.stop(),q&&(q.active=!1,hn(G,h,b,k)),H&&tn(H,b),tn(()=>{h.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),Py(h)},K=(h,b,k,B=!1,M=!1,q=0)=>{for(let G=q;G<h.length;G++)hn(h[G],b,k,B,M)},Q=h=>h.shapeFlag&6?Q(h.component.subTree):h.shapeFlag&128?h.suspense.next():F(h.anchor||h.el),xe=(h,b,k)=>{h==null?b._vnode&&hn(b._vnode,null,null,!0):g(b._vnode||null,h,b,null,null,null,k),Cc(),fd(),b._vnode=h},ke={p:g,um:hn,m:on,r:kt,mt:be,mc:D,pc:Ae,pbc:re,n:Q,o:n};let Fe,pe;return t&&([Fe,pe]=t(ke)),{render:xe,hydrate:Fe,createApp:wh(xe,Fe)}}function es({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function wo(n,t,s=!1){const o=n.children,l=t.children;if(le(o)&&le(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=Mt(l[r]),i.el=a.el),s||wo(a,i)),i.type===rl&&(i.el=a.el),i.type===Xe&&!i.el&&(i.el=a.el)}}function kh(n){const t=n.slice(),s=[0];let o,l,r,a,i;const c=n.length;for(o=0;o<c;o++){const u=n[o];if(u!==0){if(l=s[s.length-1],n[l]<u){t[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,n[s[i]]<u?r=i+1:a=i;u<n[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=t[a];return s}const Sh=n=>n.__isTeleport,zs=n=>n&&(n.disabled||n.disabled===""),Lc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Ea=(n,t)=>{const s=n&&n.to;if(Ne(s))if(t){const o=t(s);return o||I(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return I("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!zs(n)&&I(`Invalid Teleport target: ${s}`),s},Oh={__isTeleport:!0,process(n,t,s,o,l,r,a,i,c,u){const{mc:d,pc:f,pbc:F,o:{insert:y,querySelector:m,createText:g,createComment:v}}=u,x=zs(t.props);let{shapeFlag:A,children:_,dynamicChildren:C}=t;if(Dt&&(c=!1,C=null),n==null){const O=t.el=v("teleport start"),T=t.anchor=v("teleport end");y(O,s,o),y(T,s,o);const L=t.target=Ea(t.props,m),S=t.targetAnchor=g("");L?(y(S,L),a=a||Lc(L)):x||I("Invalid Teleport target on mount:",L,`(${typeof L})`);const D=(Z,re)=>{A&16&&d(_,Z,re,l,r,a,i,c)};x?D(s,T):L&&D(L,S)}else{t.el=n.el;const O=t.anchor=n.anchor,T=t.target=n.target,L=t.targetAnchor=n.targetAnchor,S=zs(n.props),D=S?s:T,Z=S?O:L;if(a=a||Lc(T),C?(F(n.dynamicChildren,C,D,l,r,a,i),wo(n,t,!0)):c||f(n,t,D,Z,l,r,a,i,!1),x)S||vl(t,s,O,u,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const re=t.target=Ea(t.props,m);re?vl(t,re,null,u,0):I("Invalid Teleport target on update:",T,`(${typeof T})`)}else S&&vl(t,T,L,u,1)}Hd(t)},remove(n,t,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:f,props:F}=n;if(f&&r(d),(a||!zs(F))&&(r(u),i&16))for(let y=0;y<c.length;y++){const m=c[y];l(m,t,s,!0,!!m.dynamicChildren)}},move:vl,hydrate:$h};function vl(n,t,s,{o:{insert:o},m:l},r=2){r===0&&o(n.targetAnchor,t,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=n,f=r===2;if(f&&o(a,t,s),(!f||zs(d))&&c&16)for(let F=0;F<u.length;F++)l(u[F],t,s,2);f&&o(i,t,s)}function $h(n,t,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=t.target=Ea(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(zs(t.props))t.anchor=u(a(n),t,i(n),s,o,l,r),t.targetAnchor=f;else{t.anchor=a(n);let F=f;for(;F;)if(F=a(F),F&&F.nodeType===8&&F.data==="teleport anchor"){t.targetAnchor=F,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(f,t,d,s,o,l,r)}Hd(t)}return t.anchor&&a(t.anchor)}const Ph=Oh;function Hd(n){const t=n.ctx;if(t&&t.ut){let s=n.children[0].el;for(;s!==n.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const $e=Symbol("Fragment"),rl=Symbol("Text"),Xe=Symbol("Comment"),Tl=Symbol("Static"),xo=[];let Zn=null;function E(n=!1){xo.push(Zn=n?null:[])}function Th(){xo.pop(),Zn=xo[xo.length-1]||null}let Ho=1;function Dc(n){Ho+=n}function qd(n){return n.dynamicChildren=Ho>0?Zn||Ns:null,Th(),Ho>0&&Zn&&Zn.push(n),n}function R(n,t,s,o,l,r){return qd(e(n,t,s,o,l,r,!0))}function ae(n,t,s,o,l){return qd(N(n,t,s,o,l,!0))}function Gt(n){return n?n.__v_isVNode===!0:!1}function It(n,t){return t.shapeFlag&6&&Is.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const Mh=(...n)=>Bh(...n),vr="__vInternal",zd=({key:n})=>n??null,Ml=({ref:n,ref_key:t,ref_for:s})=>n!=null?Ne(n)||Pe(n)||ue(n)?{i:Je,r:n,k:t,f:!!s}:n:null;function e(n,t=null,s=null,o=0,l=null,r=n===$e?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&zd(t),ref:t&&Ml(t),scopeId:mr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Je};return i?(Ii(c,s),r&128&&n.normalize(c)):s&&(c.shapeFlag|=Ne(s)?8:16),c.key!==c.key&&I("VNode created with invalid key (NaN). VNode type:",c.type),Ho>0&&!a&&Zn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Zn.push(c),c}const N=Mh;function Bh(n,t=null,s=null,o=0,l=null,r=!1){if((!n||n===eh)&&(n||I(`Invalid vnode type when creating vnode: ${n}.`),n=Xe),Gt(n)){const i=Jn(n,t,!0);return s&&Ii(i,s),Ho>0&&!r&&Zn&&(i.shapeFlag&6?Zn[Zn.indexOf(n)]=i:Zn.push(i)),i.patchFlag|=-2,i}if(Gd(n)&&(n=n.__vccOpts),t){t=We(t);let{class:i,style:c}=t;i&&!Ne(i)&&(t.class=He(i)),Be(c)&&(Ul(c)&&!le(c)&&(c=ze({},c)),t.style=cn(c))}const a=Ne(n)?1:bd(n)?128:Sh(n)?64:Be(n)?4:ue(n)?2:0;return a&4&&Ul(n)&&(n=fe(n),I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,s,o,l,a,r,!0)}function We(n){return n?Ul(n)||vr in n?ze({},n):n:null}function Jn(n,t,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=n,i=t?we(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:i,key:i&&zd(i),ref:t&&t.ref?s&&l?le(l)?l.concat(Ml(t)):[l,Ml(t)]:Ml(t):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r===-1&&le(a)?a.map(Ud):a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==$e?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Jn(n.ssContent),ssFallback:n.ssFallback&&Jn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ud(n){const t=Jn(n);return le(n.children)&&(t.children=n.children.map(Ud)),t}function p(n=" ",t=0){return N(rl,null,n,t)}function X(n="",t=!1){return t?(E(),ae(Xe,null,n)):N(Xe,null,n)}function Yn(n){return n==null||typeof n=="boolean"?N(Xe):le(n)?N($e,null,n.slice()):typeof n=="object"?Mt(n):N(rl,null,String(n))}function Mt(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Jn(n)}function Ii(n,t){let s=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(le(t))s=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),Ii(n,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(vr in t)?t._ctx=Je:l===3&&Je&&(Je.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Je},s=32):(t=String(t),o&64?(s=16,t=[p(t)]):s=8);n.children=t,n.shapeFlag|=s}function we(...n){const t={};for(let s=0;s<n.length;s++){const o=n[s];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=He([t.class,o.class]));else if(l==="style")t.style=cn([t.style,o.style]);else if(nl(l)){const r=t[l],a=o[l];a&&r!==a&&!(le(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function jn(n,t,s,o=null){Nn(n,t,7,[s,o])}const Rh=Nd();let Ih=0;function jh(n,t,s){const o=n.type,l=(t?t.appContext:n.appContext)||Rh,r={uid:Ih++,vnode:n,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(o,l),emitsOptions:vd(o,l),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:o.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=th(r),r.root=t?t.root:r,r.emit=Ry.bind(null,r),n.ce&&n.ce(r),r}let Ue=null;const Rn=()=>Ue||Je,Ks=n=>{Ue=n,n.scope.on()},_s=()=>{Ue&&Ue.scope.off(),Ue=null},Lh=Zt("slot,component");function ka(n,t){const s=t.isNativeTag||Du;(Lh(n)||s(n))&&I("Do not use built-in or reserved HTML elements as component id: "+n)}function Vd(n){return n.vnode.shapeFlag&4}let qo=!1;function Dh(n,t=!1){qo=t;const{props:s,children:o}=n.vnode,l=Vd(n);uh(n,s,l,t),_h(n,o);const r=l?Nh(n,t):void 0;return qo=!1,r}function Nh(n,t){var s;const o=n.type;{if(o.name&&ka(o.name,n.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)ka(r[a],n.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)Od(r[a])}o.compilerOptions&&Hh()&&I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=ur(new Proxy(n.ctx,Td)),sh(n);const{setup:l}=o;if(l){const r=n.setupContext=l.length>1?Kd(n):null;Ks(n),xs();const a=bt(l,n,0,[Ls(n.props),r]);if(Cs(),_s(),yi(a)){if(a.then(_s,_s),t)return a.then(i=>{Nc(n,i,t)}).catch(i=>{dr(i,n,0)});if(n.asyncDep=a,!n.suspense){const i=(s=o.name)!==null&&s!==void 0?s:"Anonymous";I(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Nc(n,a,t)}else Wd(n,t)}function Nc(n,t,s){ue(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Be(t)?(Gt(t)&&I("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=rd(t),oh(n)):t!==void 0&&I(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Wd(n,s)}let Sa;const Hh=()=>!Sa;function Wd(n,t,s){const o=n.type;if(!n.render){if(!t&&Sa&&!o.render){const l=o.template||Bi(n).template;if(l){Ft(n,"compile");const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:i,compilerOptions:c}=o,u=ze(ze({isCustomElement:r,delimiters:i},a),c);o.render=Sa(l,u),mt(n,"compile")}}n.render=o.render||_n}Ks(n),xs(),rh(n),Cs(),_s(),!o.render&&n.render===_n&&!t&&(o.template?I('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):I("Component is missing template or render function."))}function qh(n){return new Proxy(n.attrs,{get(t,s){return Wl(),An(n,"get","$attrs"),t[s]},set(){return I("setupContext.attrs is readonly."),!1},deleteProperty(){return I("setupContext.attrs is readonly."),!1}})}function Kd(n){const t=o=>{if(n.exposed&&I("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(le(o)?l="array":Pe(o)&&(l="ref")),l!=="object"&&I(`expose() should be passed a plain object, received ${l}.`)}n.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=qh(n))},get slots(){return Ls(n.slots)},get emit(){return(o,...l)=>n.emit(o,...l)},expose:t})}function _r(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(rd(ur(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in vs)return vs[s](n)},has(t,s){return s in t||s in vs}}))}const zh=/(?:^|[-_])(\w)/g,Uh=n=>n.replace(zh,t=>t.toUpperCase()).replace(/[-_]/g,"");function zo(n,t=!0){return ue(n)?n.displayName||n.name:n.name||t&&n.__name}function br(n,t,s=!1){let o=zo(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&n&&n.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(n.components||n.parent.type.components)||l(n.appContext.components)}return o?Uh(o):s?"App":"Anonymous"}function Gd(n){return ue(n)&&"__vccOpts"in n}const $=(n,t)=>fy(n,t,qo);function Vh(){return Wh().slots}function Wh(){const n=Rn();return n||I("useContext() called without active instance."),n.setupContext||(n.setupContext=Kd(n))}function Tn(n,t,s){const o=arguments.length;return o===2?Be(t)&&!le(t)?Gt(t)?N(n,null,[t]):N(n,t):N(n,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Gt(s)&&(s=[s]),N(n,t,s))}const Kh=Symbol("ssrContext"),Gh=()=>{{const n=ee(Kh);return n||I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function Nr(n){return!!(n&&n.__v_isShallow)}function Yh(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Be(f)?f.__isVue?["div",n,"VueInstance"]:Pe(f)?["div",{},["span",n,d(f)],"<",i(f.value),">"]:hs(f)?["div",{},["span",n,Nr(f)?"ShallowReactive":"Reactive"],"<",i(f),`>${Kt(f)?" (readonly)":""}`]:Kt(f)?["div",{},["span",n,Nr(f)?"ShallowReadonly":"Readonly"],"<",i(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const F=[];f.type.props&&f.props&&F.push(a("props",fe(f.props))),f.setupState!==Le&&F.push(a("setup",f.setupState)),f.data!==Le&&F.push(a("data",fe(f.data)));const y=c(f,"computed");y&&F.push(a("computed",y));const m=c(f,"inject");return m&&F.push(a("injected",m)),F.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),F}function a(f,F){return F=ze({},F),Object.keys(F).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(F).map(y=>["div",{},["span",o,y+": "],i(F[y],!1)])]]:["span",{}]}function i(f,F=!0){return typeof f=="number"?["span",t,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Be(f)?["object",{object:F?fe(f):f}]:["span",s,String(f)]}function c(f,F){const y=f.type;if(ue(y))return;const m={};for(const g in f.ctx)u(y,g,F)&&(m[g]=f.ctx[g]);return m}function u(f,F,y){const m=f[y];if(le(m)&&m.includes(F)||Be(m)&&F in m||f.extends&&u(f.extends,F,y)||f.mixins&&f.mixins.some(g=>u(g,F,y)))return!0}function d(f){return Nr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Yl="3.2.47",Zh="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,Hc=is&&is.createElement("template"),Jh={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,o)=>{const l=t?is.createElementNS(Zh,n):is.createElement(n,s?{is:s}:void 0);return n==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:n=>is.createTextNode(n),createComment:n=>is.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>is.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,s,o,l,r){const a=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Hc.innerHTML=o?`<svg>${n}</svg>`:n;const i=Hc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function Xh(n,t,s){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function Qh(n,t,s){const o=n.style,l=Ne(s);if(s&&!l){if(t&&!Ne(t))for(const r in t)s[r]==null&&Oa(o,r,"");for(const r in s)Oa(o,r,s[r])}else{const r=o.display;l?t!==s&&(o.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=r)}}const eg=/[^\\];\s*$/,qc=/\s*!important$/;function Oa(n,t,s){if(le(s))s.forEach(o=>Oa(n,t,o));else if(s==null&&(s=""),eg.test(s)&&I(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))n.setProperty(t,s);else{const o=ng(n,t);qc.test(s)?n.setProperty(wt(o),s.replace(qc,""),"important"):n[o]=s}}const zc=["Webkit","Moz","ms"],Hr={};function ng(n,t){const s=Hr[t];if(s)return s;let o=it(t);if(o!=="filter"&&o in n)return Hr[t]=o;o=As(o);for(let l=0;l<zc.length;l++){const r=zc[l]+o;if(r in n)return Hr[t]=r}return t}const Uc="http://www.w3.org/1999/xlink";function tg(n,t,s,o,l){if(o&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Uc,t.slice(6,t.length)):n.setAttributeNS(Uc,t,s);else{const r=_m(t);s==null||r&&!ju(s)?n.removeAttribute(t):n.setAttribute(t,r?"":s)}}function sg(n,t,s,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),n[t]=s??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=s;const c=s??"";(n.value!==c||n.tagName==="OPTION")&&(n.value=c),s==null&&n.removeAttribute(t);return}let i=!1;if(s===""||s==null){const c=typeof n[t];c==="boolean"?s=ju(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{n[t]=s}catch(c){i||I(`Failed setting prop "${t}" on <${n.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&n.removeAttribute(t)}function og(n,t,s,o){n.addEventListener(t,s,o)}function lg(n,t,s,o){n.removeEventListener(t,s,o)}function rg(n,t,s,o,l=null){const r=n._vei||(n._vei={}),a=r[t];if(o&&a)a.value=o;else{const[i,c]=ag(t);if(o){const u=r[t]=pg(o,l);og(n,i,u,c)}else a&&(lg(n,i,a,c),r[t]=void 0)}}const Vc=/(?:Once|Passive|Capture)$/;function ag(n){let t;if(Vc.test(n)){t={};let o;for(;o=n.match(Vc);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wt(n.slice(2)),t]}let qr=0;const ig=Promise.resolve(),cg=()=>qr||(ig.then(()=>qr=0),qr=Date.now());function pg(n,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Nn(ug(o,s.value),t,5,[o])};return s.value=n,s.attached=cg(),s}function ug(n,t){if(le(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Wc=/^on[a-z]/,dg=(n,t,s,o,l=!1,r,a,i,c)=>{t==="class"?Xh(n,o,l):t==="style"?Qh(n,s,o):nl(t)?Dl(t)||rg(n,t,s,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fg(n,t,o,l))?sg(n,t,o,r,a,i,c):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),tg(n,t,o,l))};function fg(n,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Wc.test(t)&&ue(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Wc.test(t)&&Ne(s)?!1:t in n}const Ot="transition",lo="animation",Yd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fg=ze({},Uy.props,Yd),ns=(n,t=[])=>{le(n)?n.forEach(s=>s(...t)):n&&n(...t)},Kc=n=>n?le(n)?n.some(t=>t.length>1):n.length>1:!1;function mg(n){const t={};for(const U in n)U in Yd||(t[U]=n[U]);if(n.css===!1)return t;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=i,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:F=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=n,m=yg(l),g=m&&m[0],v=m&&m[1],{onBeforeEnter:x,onEnter:A,onEnterCancelled:_,onLeave:C,onLeaveCancelled:O,onBeforeAppear:T=x,onAppear:L=A,onAppearCancelled:S=_}=t,D=(U,_e,ye)=>{Pt(U,_e?d:i),Pt(U,_e?u:a),ye&&ye()},Z=(U,_e)=>{U._isLeaving=!1,Pt(U,f),Pt(U,y),Pt(U,F),_e&&_e()},re=U=>(_e,ye)=>{const be=U?L:A,Te=()=>D(_e,U,ye);ns(be,[_e,Te]),Gc(()=>{Pt(_e,U?c:r),yt(_e,U?d:i),Kc(be)||Yc(_e,o,g,Te)})};return ze(t,{onBeforeEnter(U){ns(x,[U]),yt(U,r),yt(U,a)},onBeforeAppear(U){ns(T,[U]),yt(U,c),yt(U,u)},onEnter:re(!1),onAppear:re(!0),onLeave(U,_e){U._isLeaving=!0;const ye=()=>Z(U,_e);yt(U,f),Jd(),yt(U,F),Gc(()=>{U._isLeaving&&(Pt(U,f),yt(U,y),Kc(C)||Yc(U,o,v,ye))}),ns(C,[U,ye])},onEnterCancelled(U){D(U,!1),ns(_,[U])},onAppearCancelled(U){D(U,!0),ns(S,[U])},onLeaveCancelled(U){Z(U),ns(O,[U])}})}function yg(n){if(n==null)return null;if(Be(n))return[zr(n.enter),zr(n.leave)];{const t=zr(n);return[t,t]}}function zr(n){const t=Sm(n);return gy(t,"<transition> explicit duration"),t}function yt(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(t)}function Pt(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:s}=n;s&&(s.delete(t),s.size||(n._vtc=void 0))}function Gc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let hg=0;function Yc(n,t,s,o){const l=n._endId=++hg,r=()=>{l===n._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=Zd(n,t);if(!a)return o();const u=a+"end";let d=0;const f=()=>{n.removeEventListener(u,F),r()},F=y=>{y.target===n&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},i+1),n.addEventListener(u,F)}function Zd(n,t){const s=window.getComputedStyle(n),o=m=>(s[m]||"").split(", "),l=o(`${Ot}Delay`),r=o(`${Ot}Duration`),a=Zc(l,r),i=o(`${lo}Delay`),c=o(`${lo}Duration`),u=Zc(i,c);let d=null,f=0,F=0;t===Ot?a>0&&(d=Ot,f=a,F=r.length):t===lo?u>0&&(d=lo,f=u,F=c.length):(f=Math.max(a,u),d=f>0?a>u?Ot:lo:null,F=d?d===Ot?r.length:c.length:0);const y=d===Ot&&/\b(transform|all)(,|$)/.test(o(`${Ot}Property`).toString());return{type:d,timeout:f,propCount:F,hasTransform:y}}function Zc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((s,o)=>Jc(s)+Jc(n[o])))}function Jc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Jd(){return document.body.offsetHeight}const Xd=new WeakMap,Qd=new WeakMap,ef={name:"TransitionGroup",props:ze({},Fg,{tag:String,moveClass:String}),setup(n,{slots:t}){const s=Rn(),o=wd();let l,r;return hr(()=>{if(!l.length)return;const a=n.moveClass||`${n.name||"v"}-move`;if(!wg(l[0].el,s.vnode.el,a))return;l.forEach(_g),l.forEach(bg);const i=l.filter(Ag);Jd(),i.forEach(c=>{const u=c.el,d=u.style;yt(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const f=u._moveCb=F=>{F&&F.target!==u||(!F||/transform$/.test(F.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Pt(u,a))};u.addEventListener("transitionend",f)})}),()=>{const a=fe(n),i=mg(a);let c=a.tag||$e;l=r,r=t.default?Pi(t.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Ws(d,Do(d,i,o,s)):I("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Ws(d,Do(d,i,o,s)),Xd.set(d,d.el.getBoundingClientRect())}return N(c,null,r)}}},gg=n=>delete n.mode;ef.props;const vg=ef;function _g(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function bg(n){Qd.set(n,n.el.getBoundingClientRect())}function Ag(n){const t=Xd.get(n),s=Qd.get(n),o=t.left-s.left,l=t.top-s.top;if(o||l){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",n}}function wg(n,t,s){const o=n.cloneNode();n._vtc&&n._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=Zd(o);return l.removeChild(o),r}const xg=["ctrl","shift","alt","meta"],Cg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>xg.some(s=>n[`${s}Key`]&&!t.includes(s))},Eg=(n,t)=>(s,...o)=>{for(let l=0;l<t.length;l++){const r=Cg[t[l]];if(r&&r(s,t))return}return n(s,...o)},kg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_l=(n,t)=>s=>{if(!("key"in s))return;const o=wt(s.key);if(t.some(l=>l===o||kg[l]===o))return n(s)},nf={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):ro(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(n),ro(n,!0),o.enter(n)):o.leave(n,()=>{ro(n,!1)}):ro(n,t))},beforeUnmount(n,{value:t}){ro(n,t)}};function ro(n,t){n.style.display=t?n._vod:"none"}const Sg=ze({patchProp:dg},Jh);let Xc;function Og(){return Xc||(Xc=Ch(Sg))}const $g=(...n)=>{const t=Og().createApp(...n);Pg(t),Tg(t);const{mount:s}=t;return t.mount=o=>{const l=Mg(o);if(!l)return;const r=t._component;!ue(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function Pg(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>Iu(t)||gm(t),writable:!1})}function Tg(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return I(o),s},set(){I(o)}})}}function Mg(n){if(Ne(n)){const t=document.querySelector(n);return t||I(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function Bg(){Yh()}Bg();function $a(n,t={},s){for(const o in n){const l=n[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?$a(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const Rg={run:n=>n()},Ig=()=>Rg,tf=typeof console.createTask<"u"?console.createTask:Ig;function jg(n,t){const s=t.shift(),o=tf(s);return n.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function Lg(n,t){const s=t.shift(),o=tf(s);return Promise.all(n.map(l=>o.run(()=>l(...t))))}function Ur(n,t){for(const s of[...n])s(t)}class Dg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,s,o={}){if(!t||typeof s!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(s),()=>{s&&(this.removeHook(t,s),s=void 0)}}hookOnce(t,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(t,l),o}removeHook(t,s){if(this._hooks[t]){const o=this._hooks[t].indexOf(s);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,s){this._deprecatedHooks[t]=typeof s=="string"?{to:s}:s;const o=this._hooks[t]||[];delete this._hooks[t];for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const s in t)this.deprecateHook(s,t[s])}addHooks(t){const s=$a(t),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const s=$a(t);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...s){return s.unshift(t),this.callHookWith(jg,t,...s)}callHookParallel(t,...s){return s.unshift(t),this.callHookWith(Lg,t,...s)}callHookWith(t,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Ur(this._before,l);const r=t(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Ur(this._after,l)}):(this._after&&l&&Ur(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const s=this._before.indexOf(t);s!==-1&&this._before.splice(s,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const s=this._after.indexOf(t);s!==-1&&this._after.splice(s,1)}}}}function Ng(){return new Dg}function Hg(n){return Array.isArray(n)?n:[n]}const sf=["title","script","style","noscript"],qg=["base","meta","link","style","script","noscript"],zg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Ug=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Vg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function of(n){let t=9;for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Pa(n){return of(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,s])=>`${t}:${String(s)}`).join(",")}`)}function Wg(n){let t=9;for(const s of n)for(let o=0;o<s.length;)t=Math.imul(t^s.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function lf(n,t){const{props:s,tag:o}=n;if(Ug.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}const Qc=(n,t)=>n==null?t||null:typeof n=="function"?n(t):n,bl=(n,t=!1,s)=>{const{tag:o,$el:l}=n;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;s&&s(n,u,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(n,i,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),sf.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))};let ao=!1;async function rf(n,t={}){var F,y;const s={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=t.document||n.resolvedOptions.document||window.document,l=(await n.resolveTags()).map(i);if(n.resolvedOptions.experimentalHashHydration&&(ao=ao||n._hash||!1,ao)){const m=Wg(l.map(g=>g.tag._h));if(ao===m)return;ao=m}const r=n._popSideEffectQueue();n.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([g,v])=>{r[g]=v})});const a=(m,g,v)=>{g=`${m.renderId}:${g}`,m.entry&&(m.entry._sde[g]=v),delete r[g]};function i(m){const g=n.headEntries().find(x=>x._i===m._e),v={renderId:!m.key&&m._d?m._d:Pa(m),$el:null,shouldRender:!0,tag:m,entry:g,markSideEffect:(x,A)=>a(v,x,A)};return v}const c=[],u={body:[],head:[]},d=m=>{n._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var g;(g=m.$el)==null||g.remove(),delete n._elMap[m.renderId]})};for(const m of l){if(await n.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){o.title=g.textContent||"",c.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=o[g.tag==="htmlAttrs"?"documentElement":"body"],bl(m,!1,a),c.push(m);continue}if(m.$el=n._elMap[m.renderId],!m.$el&&g.key&&(m.$el=o.querySelector(`${(F=g.tagPosition)!=null&&F.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),m.$el){m.tag._d&&bl(m),d(m);continue}u[(y=g.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,g])=>{var x;if(!g.length)return;const v=(x=o==null?void 0:o[m])==null?void 0:x.children;if(v){for(const A of[...v].reverse()){const _=A.tagName.toLowerCase();if(!qg.includes(_))continue;const C=A.getAttributeNames().reduce((S,D)=>({...S,[D]:A.getAttribute(D)}),{}),O={tag:_,props:C};A.innerHTML&&(O.innerHTML=A.innerHTML);const T=Pa(O);let L=g.findIndex(S=>(S==null?void 0:S.renderId)===T);if(L===-1){const S=lf(O);L=g.findIndex(D=>(D==null?void 0:D.tag._d)&&D.tag._d===S)}if(L!==-1){const S=g[L];S.$el=A,bl(S),d(S),delete g[L]}}g.forEach(A=>{const _=A.tag.tagPosition||"head";f[_]=f[_]||o.createDocumentFragment(),A.$el||(A.$el=o.createElement(A.tag.tag),bl(A,!0)),f[_].appendChild(A.$el),d(A)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await n.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Vr=null;async function af(n,t={}){function s(){return Vr=null,rf(n,t)}const o=t.delayFn||(l=>setTimeout(l,10));return Vr=Vr||new Promise(l=>o(()=>l(s())))}const Kg=n=>({hooks:{"entries:updated":function(t){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let s=n==null?void 0:n.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),af(t,{document:(n==null?void 0:n.document)||window.document,delayFn:s})}}});function Gg(n){var t;return((t=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const ep={critical:2,high:9,low:12,base:-1,title:1,meta:10};function np(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const t=n.tagPriority||n.tag;return t in ep?ep[t]:10}const Yg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Zg(){return{hooks:{"tags:resolve":n=>{const t=s=>{var o;return(o=n.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of Yg)for(const l of n.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=t(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}n.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>np(s)-np(o))}}}}const Jg=()=>({hooks:{"tags:resolve":n=>{const{tags:t}=n;let s=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=Qc(t[s].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(s!==-1){const l=Qc(t[s].textContent);l!==null&&(t[s].textContent=l,t[s].tag="title",s=-1)}s!==-1&&delete t[s],n.tags=t.filter(Boolean)}}}),Xg=()=>({hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}),Qg=["link","style","script","noscript"],ev=()=>({hooks:{"tag:normalise":({tag:n,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(n._h=Pa(n)),n.key&&Qg.includes(n.tag)&&(n._h=of(n.key),n.props[`data-h-${n._h}`]="")}}}),tp=["script","link","bodyAttrs"],nv=()=>{const n=(t,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return t==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(s=>(!tp.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=n("ssr",s).props),s))},"dom:beforeRenderTag":function(t){if(!tp.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=n("dom",t.tag);Object.keys(o).length&&(t.tag.props=s,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const s=t.$el;if(!t.tag._eventHandlers||!s)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const a=`${t.tag._d||t.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(t.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const u=r;s.setAttribute(c,""),o.addEventListener(i,u),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(i,u),s.removeAttribute(c)})}),t.tag._delayedSrc&&s.setAttribute("src",t.tag._delayedSrc)}}}},tv=["templateParams","htmlAttrs","bodyAttrs"],sv=()=>({hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const t=n.key?`${n.tag}:${n.key}`:lf(n);t&&(n._d=t)},"tags:resolve":function(n){const t={};n.tags.forEach(o=>{const l=o._d||o._p,r=t[l];if(r){let a=o==null?void 0:o.tagDuplicateStrategy;if(!a&&tv.includes(o.tag)&&(a="merge"),a==="merge"){const c=r.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),t[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}const i=Object.keys(o.props).length;if((i===0||i===1&&typeof o.props["data-h-key"]<"u")&&!o.innerHTML&&!o.textContent){delete t[l];return}}t[l]=o});const s=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),n.tags=s}}});function Al(n,t){function s(r){if(["s","pageTitle"].includes(r))return t.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,t):a=t[r],typeof a<"u"?a||"":!1}let o=n;try{o=decodeURI(n)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(n=n.replaceAll(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(n.endsWith(t.separator)&&(n=n.slice(0,-t.separator.length).trim()),n.startsWith(t.separator)&&(n=n.slice(t.separator.length).trim()),n=n.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),n}function ov(){return{hooks:{"tags:resolve":n=>{var r;const{tags:t}=n,s=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(a=>a.tag==="templateParams"),l=o!==-1?t[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=Al(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=Al(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=Al(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?Al(c,l):c)}catch{}n.tags=t.filter(a=>a.tag!=="templateParams")}}}}const lv=typeof window<"u";let cf;const rv=n=>cf=n,av=()=>cf;async function iv(n,t){const s={tag:n,props:{}};return n==="templateParams"?(s.props=t,s):["title","titleTemplate"].includes(n)?(s.textContent=t instanceof Promise?await t:t,s):typeof t=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?s.props.src=t:s.innerHTML=t,s):!1:(s.props=await pv(n,{...t}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>Vg.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||sf.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=cv(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function cv(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(t=>n[t])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function pv(n,t){for(const s of Object.keys(t)){const o=s.startsWith("data-");t[s]instanceof Promise&&(t[s]=await t[s]),String(t[s])==="true"?t[s]=o?"true":"":String(t[s])==="false"&&(o?t[s]="false":delete t[s])}return t}const uv=10;async function dv(n){const t=[];return Object.entries(n.resolvedInput).filter(([s,o])=>typeof o<"u"&&zg.includes(s)).forEach(([s,o])=>{const l=Hg(o);t.push(...l.map(r=>iv(s,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((s,o)=>(s._e=n._i,s._p=(n._i<<uv)+o,s))}const fv=()=>[sv(),Zg(),ov(),Jg(),ev(),nv(),Xg()],Fv=(n={})=>[Kg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})];function mv(n={}){const t=yv({...n,plugins:[...Fv(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Gg(t.resolvedOptions.document)),rv(t),t}function yv(n={}){let t=[],s={},o=0;const l=Ng();n!=null&&n.hooks&&l.addHooks(n.hooks),n.plugins=[...fv(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),n.document=n.document||(lv?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:n,headEntries(){return t},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),r(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(f=>(f._i===u._i&&(u.input=f.input=d,r()),f))}}},async resolveTags(){const i={tags:[],entries:[...t]};await l.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await dv(c)){const f={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function hv(n){return typeof n=="function"?n():w(n)}function Zl(n,t=""){if(n instanceof Promise)return n;const s=hv(n);return!n||!s?s:Array.isArray(s)?s.map(o=>Zl(o,t)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,w(l)]:[o,Zl(l,o)])):s}const gv=Yl.startsWith("3"),vv=typeof window<"u",pf="usehead";function ji(){return Rn()&&ee(pf)||av()}function _v(n){return{install(s){gv&&(s.config.globalProperties.$unhead=n,s.config.globalProperties.$head=n,s.provide(pf,n))}}.install}function bv(n={}){const t=mv({...n,domDelayFn:s=>setTimeout(()=>an(()=>s()),10),plugins:[Av(),...(n==null?void 0:n.plugins)||[]]});return t.install=_v(t),t}const Av=()=>({hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=Zl(t.input)}}});function wv(n,t={}){const s=ji(),o=V(!1),l=V({});Es(()=>{l.value=o.value?{}:Zl(n)});const r=s.push(l.value,t);return ge(l,i=>{r.patch(i)}),Rn()&&(ll(()=>{r.dispose()}),kd(()=>{o.value=!0}),Ed(()=>{o.value=!1})),r}function xv(n,t={}){return ji().push(n,t)}function Li(n,t={}){var o;const s=ji();if(s){const l=vv||!!((o=s.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?wv(n,t):xv(n,t)}}const Cv=n=>Li({htmlAttrs:n});function Ev(n,t){const s=bv(t||{}),o={unhead:s,install(l){Yl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=Li(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?rf(s,{document:l}):af(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const Co=Symbol("v-click-clicks"),cs=Symbol("v-click-clicks-elements"),Ta=Symbol("v-click-clicks-order-map"),Eo=Symbol("v-click-clicks-disabled"),uf=Symbol("slidev-slide-scale"),ie=Symbol("slidev-slidev-context"),kv=Symbol("slidev-route"),Sv=Symbol("slidev-slide-context"),rs="slidev-vclick-target",Wr="slidev-vclick-hidden",Ov="slidev-vclick-fade",Kr="slidev-vclick-hidden-explicitly",io="slidev-vclick-current",wl="slidev-vclick-prior",$v=["localhost","127.0.0.1"];let Pv=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Ma(n,t){if(!n)return!1;const s=n.indexOf(t);return s>=0?(n.splice(s,1),!0):!1}function Tv(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function Mv(n){return n!=null}function Bv(n,t){return Object.fromEntries(Object.entries(n).map(([s,o])=>t(s,o)).filter(Mv))}const _o={theme:"dracula",title:"Angular",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Apresentacao de conceitos basicos do angular</h2>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Nunito Sans","Fira Code"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",hightlighter:"shiki",class:"text-center"},Oe=_o,Nt=Oe.aspectRatio??16/9,Ht=Oe.canvasWidth??980,Di=Math.ceil(Ht/Nt),Ni=$(()=>Bv(Oe.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function zn(n,t,s){Object.defineProperty(n,t,{value:s,writable:!0,enumerable:!1})}const Ss=qe({page:0,clicks:0});let Rv=[],Iv=[];zn(Ss,"$syncUp",!0);zn(Ss,"$syncDown",!0);zn(Ss,"$paused",!1);zn(Ss,"$onSet",n=>Rv.push(n));zn(Ss,"$onPatch",n=>Iv.push(n));zn(Ss,"$patch",async()=>!1);function df(n,t,s=!1){const o=[];let l=!1,r=!1,a,i;const c=qe(t);function u(y){o.push(y)}function d(y,m){c[y]!==m&&(clearTimeout(a),l=!0,c[y]=m,a=setTimeout(()=>l=!1,0))}function f(y){l||(clearTimeout(i),r=!0,Object.entries(y).forEach(([m,g])=>{c[m]=g}),i=setTimeout(()=>r=!1,0))}function F(y){let m;s?s&&window.addEventListener("storage",v=>{v&&v.key===y&&v.newValue&&f(JSON.parse(v.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",v=>f(v.data)));function g(){!s&&m&&!r?m.postMessage(fe(c)):s&&!r&&window.localStorage.setItem(y,JSON.stringify(c)),l||o.forEach(v=>v(c))}if(ge(c,g,{deep:!0}),s){const v=window.localStorage.getItem(y);v&&f(JSON.parse(v))}}return{init:F,onPatch:u,patch:d,state:c}}const{init:jv,onPatch:Lv,patch:co,state:Gr}=df(Ss,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Os=qe({});let Dv=[],Nv=[];zn(Os,"$syncUp",!0);zn(Os,"$syncDown",!0);zn(Os,"$paused",!1);zn(Os,"$onSet",n=>Dv.push(n));zn(Os,"$onPatch",n=>Nv.push(n));zn(Os,"$patch",async()=>!1);const{init:Hv,onPatch:qv,patch:ff,state:Jl}=df(Os,{},!1),zv="modulepreload",Uv=function(n){return"/"+n},sp={},qt=function(t,s,o){if(!s||s.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Uv(r),r in sp)return;sp[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":zv,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var op;const Xn=typeof window<"u",Vv=n=>typeof n<"u",Wv=Object.prototype.toString,Uo=n=>typeof n=="function",Kv=n=>typeof n=="number",Ff=n=>typeof n=="string",Ba=n=>Wv.call(n)==="[object Object]",Ra=()=>+Date.now(),Us=()=>{},Gv=Xn&&((op=window==null?void 0:window.navigator)==null?void 0:op.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ln(n){return typeof n=="function"?n():w(n)}function Yv(n,t){function s(...o){return new Promise((l,r)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return s}const mf=n=>n();function Zv(n=mf){const t=V(!0);function s(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&n(...r)};return{isActive:ot(t),pause:s,resume:o,eventFilter:l}}function Jv(n){return n}function Xv(n,t){var s;if(typeof n=="number")return n+t;const o=((s=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=n.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?n:r+l}function Qv(n,t){let s,o,l;const r=V(!0),a=()=>{r.value=!0,l()};ge(n,a,{flush:"sync"});const i=Uo(t)?t:t.get,c=Uo(t)?void 0:t.set,u=ad((d,f)=>(o=d,l=f,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(F){c==null||c(F)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function pt(n){return vi()?(Vu(n),!0):!1}function e8(n){if(!Pe(n))return qe(n);const t=new Proxy({},{get(s,o,l){return w(Reflect.get(n.value,o,l))},set(s,o,l){return Pe(n.value[o])&&!Pe(l)?n.value[o].value=l:n.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(n.value,o)},has(s,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(t)}function yf(n){return typeof n=="function"?$(n):V(n)}var n8=Object.defineProperty,t8=Object.defineProperties,s8=Object.getOwnPropertyDescriptors,lp=Object.getOwnPropertySymbols,o8=Object.prototype.hasOwnProperty,l8=Object.prototype.propertyIsEnumerable,rp=(n,t,s)=>t in n?n8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,r8=(n,t)=>{for(var s in t||(t={}))o8.call(t,s)&&rp(n,s,t[s]);if(lp)for(var s of lp(t))l8.call(t,s)&&rp(n,s,t[s]);return n},a8=(n,t)=>t8(n,s8(t));function i8(n){if(!Pe(n))return cy(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const s in n.value)t[s]=ad(()=>({get(){return n.value[s]},set(o){if(Array.isArray(n.value)){const l=[...n.value];l[s]=o,n.value=l}else{const l=a8(r8({},n.value),{[s]:o});Object.setPrototypeOf(l,n.value),n.value=l}}}));return t}function Hi(n,t=!0){Rn()?ks(n):t?n():an(n)}function c8(n){Rn()&&gr(n)}function p8(n,t=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=V(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const d=ln(t);d<=0||(a.value=!0,l&&n(),i(),r=setInterval(n,d))}if(o&&Xn&&u(),Pe(t)||Uo(t)){const d=ge(t,()=>{a.value&&Xn&&u()});pt(d)}return pt(c),{isActive:a,pause:c,resume:u}}function u8(n,t,s={}){const{immediate:o=!0}=s,l=V(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,n(...u)},ln(t))}return o&&(l.value=!0,Xn&&c()),pt(i),{isPending:ot(l),start:c,stop:i}}function hf(n=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,l=Pe(n),r=V(n);function a(i){if(arguments.length)return r.value=i,r.value;{const c=ln(s);return r.value=r.value===c?ln(o):c,r.value}}return l?a:[r,a]}var ap=Object.getOwnPropertySymbols,d8=Object.prototype.hasOwnProperty,f8=Object.prototype.propertyIsEnumerable,F8=(n,t)=>{var s={};for(var o in n)d8.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&ap)for(var o of ap(n))t.indexOf(o)<0&&f8.call(n,o)&&(s[o]=n[o]);return s};function m8(n,t,s={}){const o=s,{eventFilter:l=mf}=o,r=F8(o,["eventFilter"]);return ge(n,Yv(l,t),r)}var y8=Object.defineProperty,h8=Object.defineProperties,g8=Object.getOwnPropertyDescriptors,Xl=Object.getOwnPropertySymbols,gf=Object.prototype.hasOwnProperty,vf=Object.prototype.propertyIsEnumerable,ip=(n,t,s)=>t in n?y8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,v8=(n,t)=>{for(var s in t||(t={}))gf.call(t,s)&&ip(n,s,t[s]);if(Xl)for(var s of Xl(t))vf.call(t,s)&&ip(n,s,t[s]);return n},_8=(n,t)=>h8(n,g8(t)),b8=(n,t)=>{var s={};for(var o in n)gf.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Xl)for(var o of Xl(n))t.indexOf(o)<0&&vf.call(n,o)&&(s[o]=n[o]);return s};function A8(n,t,s={}){const o=s,{eventFilter:l}=o,r=b8(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Zv(l);return{stop:m8(n,t,_8(v8({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function Pn(n){var t;const s=ln(n);return(t=s==null?void 0:s.$el)!=null?t:s}const Qe=Xn?window:void 0,_f=Xn?window.document:void 0,w8=Xn?window.navigator:void 0;function ve(...n){let t,s,o,l;if(Ff(n[0])||Array.isArray(n[0])?([s,o,l]=n,t=Qe):[t,s,o,l]=n,!t)return Us;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,f,F,y)=>(d.addEventListener(f,F,y),()=>d.removeEventListener(f,F,y)),c=ge(()=>[Pn(t),ln(l)],([d,f])=>{a(),d&&r.push(...s.flatMap(F=>o.map(y=>i(d,F,y,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return pt(u),u}let cp=!1;function x8(n,t,s={}){const{window:o=Qe,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;Gv&&!cp&&(cp=!0,Array.from(o.document.body.children).forEach(F=>F.addEventListener("click",Us)));let i=!0;const c=F=>l.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(m=>m===F.target||F.composedPath().includes(m));{const m=Pn(y);return m&&(F.target===m||F.composedPath().includes(m))}}),d=[ve(o,"click",F=>{const y=Pn(n);if(!(!y||y===F.target||F.composedPath().includes(y))){if(F.detail===0&&(i=!c(F)),!i){i=!0;return}t(F)}},{passive:!0,capture:r}),ve(o,"pointerdown",F=>{const y=Pn(n);y&&(i=!F.composedPath().includes(y)&&!c(F))},{passive:!0}),a&&ve(o,"blur",F=>{var y;const m=Pn(n);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(F)})].filter(Boolean);return()=>d.forEach(F=>F())}const C8=n=>typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0;function E8(...n){let t,s,o={};n.length===3?(t=n[0],s=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,s=n[0],o=n[1]):(t=n[0],s=n[1]):(t=!0,s=n[0]);const{target:l=Qe,eventName:r="keydown",passive:a=!1}=o,i=C8(t);return ve(l,r,u=>{i(u)&&s(u)},a)}function k8(n={}){var t;const{window:s=Qe}=n,o=(t=n.document)!=null?t:s==null?void 0:s.document,l=Qv(()=>null,()=>o==null?void 0:o.activeElement);return s&&(ve(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),ve(s,"focus",l.trigger,!0)),l}function al(n,t=!1){const s=V(),o=()=>s.value=!!n();return o(),Hi(o,t),s}function js(n,t={}){const{window:s=Qe}=t,o=al(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=V(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(yf(n).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return Es(i),pt(()=>a()),r}const S8={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var O8=Object.defineProperty,pp=Object.getOwnPropertySymbols,$8=Object.prototype.hasOwnProperty,P8=Object.prototype.propertyIsEnumerable,up=(n,t,s)=>t in n?O8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,T8=(n,t)=>{for(var s in t||(t={}))$8.call(t,s)&&up(n,s,t[s]);if(pp)for(var s of pp(t))P8.call(t,s)&&up(n,s,t[s]);return n};function M8(n,t={}){function s(i,c){let u=n[i];return c!=null&&(u=Xv(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Qe}=t;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>js(`(min-width: ${s(i)})`,t),a=Object.keys(n).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return T8({greater(i){return js(`(min-width: ${s(i,.1)})`,t)},greaterOrEqual:r,smaller(i){return js(`(max-width: ${s(i,-.1)})`,t)},smallerOrEqual(i){return js(`(max-width: ${s(i)})`,t)},between(i,c){return js(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function B8(n={}){const{navigator:t=w8,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=n,a=["copy","cut"],i=al(()=>t&&"clipboard"in t),c=$(()=>i.value||r),u=V(""),d=V(!1),f=u8(()=>d.value=!1,l);function F(){i.value?t.clipboard.readText().then(v=>{u.value=v}):u.value=g()}if(c.value&&s)for(const v of a)ve(v,F);async function y(v=ln(o)){c.value&&v!=null&&(i.value?await t.clipboard.writeText(v):m(v),u.value=v,d.value=!0,f.start())}function m(v){const x=document.createElement("textarea");x.value=v??"",x.style.position="absolute",x.style.opacity="0",document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function g(){var v,x,A;return(A=(x=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:x.toString())!=null?A:""}return{isSupported:c,text:u,copied:d,copy:y}}function R8(n){return JSON.parse(JSON.stringify(n))}const Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ja="__vueuse_ssr_handlers__";Ia[ja]=Ia[ja]||{};const I8=Ia[ja];function j8(n,t){return I8[n]||t}function L8(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var D8=Object.defineProperty,dp=Object.getOwnPropertySymbols,N8=Object.prototype.hasOwnProperty,H8=Object.prototype.propertyIsEnumerable,fp=(n,t,s)=>t in n?D8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Fp=(n,t)=>{for(var s in t||(t={}))N8.call(t,s)&&fp(n,s,t[s]);if(dp)for(var s of dp(t))H8.call(t,s)&&fp(n,s,t[s]);return n};const q8={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},mp="vueuse-storage";function z8(n,t,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=Qe,eventFilter:F,onError:y=S=>{console.error(S)}}=o,m=(d?ct:V)(t);if(!s)try{s=j8("getDefaultStorage",()=>{var S;return(S=Qe)==null?void 0:S.localStorage})()}catch(S){y(S)}if(!s)return m;const g=ln(t),v=L8(g),x=(l=o.serializer)!=null?l:q8[v],{pause:A,resume:_}=A8(m,()=>C(m.value),{flush:r,deep:a,eventFilter:F});return f&&i&&(ve(f,"storage",L),ve(f,mp,T)),L(),m;function C(S){try{if(S==null)s.removeItem(n);else{const D=x.write(S),Z=s.getItem(n);Z!==D&&(s.setItem(n,D),f&&f.dispatchEvent(new CustomEvent(mp,{detail:{key:n,oldValue:Z,newValue:D,storageArea:s}})))}}catch(D){y(D)}}function O(S){const D=S?S.newValue:s.getItem(n);if(D==null)return c&&g!==null&&s.setItem(n,x.write(g)),g;if(!S&&u){const Z=x.read(D);return Uo(u)?u(Z,g):v==="object"&&!Array.isArray(Z)?Fp(Fp({},g),Z):Z}else return typeof D!="string"?D:x.read(D)}function T(S){L(S.detail)}function L(S){if(!(S&&S.storageArea!==s)){if(S&&S.key==null){m.value=g;return}if(!(S&&S.key!==n)){A();try{m.value=O(S)}catch(D){y(D)}finally{S?an(_):_()}}}}}function U8(n){return js("(prefers-color-scheme: dark)",n)}var V8=Object.defineProperty,W8=Object.defineProperties,K8=Object.getOwnPropertyDescriptors,yp=Object.getOwnPropertySymbols,G8=Object.prototype.hasOwnProperty,Y8=Object.prototype.propertyIsEnumerable,hp=(n,t,s)=>t in n?V8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Z8=(n,t)=>{for(var s in t||(t={}))G8.call(t,s)&&hp(n,s,t[s]);if(yp)for(var s of yp(t))Y8.call(t,s)&&hp(n,s,t[s]);return n},J8=(n,t)=>W8(n,K8(t));function t$(n,t={}){var s,o,l;const r=(s=t.draggingElement)!=null?s:Qe,a=(o=t.handle)!=null?o:n,i=V((l=ln(t.initialValue))!=null?l:{x:0,y:0}),c=V(),u=m=>t.pointerTypes?t.pointerTypes.includes(m.pointerType):!0,d=m=>{ln(t.preventDefault)&&m.preventDefault(),ln(t.stopPropagation)&&m.stopPropagation()},f=m=>{var g;if(!u(m)||ln(t.exact)&&m.target!==ln(n))return;const v=ln(n).getBoundingClientRect(),x={x:m.clientX-v.left,y:m.clientY-v.top};((g=t.onStart)==null?void 0:g.call(t,x,m))!==!1&&(c.value=x,d(m))},F=m=>{var g;u(m)&&c.value&&(i.value={x:m.clientX-c.value.x,y:m.clientY-c.value.y},(g=t.onMove)==null||g.call(t,i.value,m),d(m))},y=m=>{var g;u(m)&&c.value&&(c.value=void 0,(g=t.onEnd)==null||g.call(t,i.value,m),d(m))};return Xn&&(ve(a,"pointerdown",f,!0),ve(r,"pointermove",F,!0),ve(r,"pointerup",y,!0)),J8(Z8({},i8(i)),{position:i,isDragging:$(()=>!!c.value),style:$(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var gp=Object.getOwnPropertySymbols,X8=Object.prototype.hasOwnProperty,Q8=Object.prototype.propertyIsEnumerable,e2=(n,t)=>{var s={};for(var o in n)X8.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&gp)for(var o of gp(n))t.indexOf(o)<0&&Q8.call(n,o)&&(s[o]=n[o]);return s};function n2(n,t,s={}){const o=s,{window:l=Qe}=o,r=e2(o,["window"]);let a;const i=al(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=ge(()=>Pn(n),f=>{c(),i.value&&l&&f&&(a=new ResizeObserver(t),a.observe(f,r))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return pt(d),{isSupported:i,stop:d}}function t2(n,t={}){const{immediate:s=!0,window:o=Qe}=t,l=V(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const f=d-r;n({delta:f,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),pt(u),{isActive:ot(l),pause:u,resume:c}}function s2(n,t={width:0,height:0},s={}){const{window:o=Qe,box:l="content-box"}=s,r=$(()=>{var c,u;return(u=(c=Pn(n))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=V(t.width),i=V(t.height);return n2(n,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=Pn(n);if(d){const f=o.getComputedStyle(d);a.value=parseFloat(f.width),i.value=parseFloat(f.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((f,{inlineSize:F})=>f+F,0),i.value=d.reduce((f,{blockSize:F})=>f+F,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),ge(()=>Pn(n),c=>{a.value=c?t.width:0,i.value=c?t.height:0}),{width:a,height:i}}const vp=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function o2(n,t={}){const{document:s=_f,autoExit:o=!1}=t,l=n||(s==null?void 0:s.querySelector("html")),r=V(!1);let a=vp[0];const i=al(()=>{if(s){for(const g of vp)if(g[1]in s)return a=g,!0}else return!1;return!1}),[c,u,d,,f]=a;async function F(){i.value&&(s!=null&&s[d]&&await s[u](),r.value=!1)}async function y(){if(!i.value)return;await F();const g=Pn(l);g&&(await g[c](),r.value=!0)}async function m(){r.value?await F():await y()}return s&&ve(s,f,()=>{r.value=!!(s!=null&&s[d])},!1),o&&pt(F),{isSupported:i,isFullscreen:r,enter:y,exit:F,toggle:m}}function l2(n,t,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=Qe}=s,i=al(()=>a&&"IntersectionObserver"in a);let c=Us;const u=i.value?ge(()=>({el:Pn(n),root:Pn(o)}),({el:f,root:F})=>{if(c(),!f)return;const y=new IntersectionObserver(t,{root:F,rootMargin:l,threshold:r});y.observe(f),c=()=>{y.disconnect(),c=Us}},{immediate:!0,flush:"post"}):Us,d=()=>{c(),u()};return pt(d),{isSupported:i,stop:d}}function Qn(n,t,s={}){const{window:o=Qe}=s;return z8(n,t,o==null?void 0:o.localStorage,s)}const r2={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function a2(n={}){const{reactive:t=!1,target:s=Qe,aliasMap:o=r2,passive:l=!0,onEventFired:r=Us}=n,a=qe(new Set),i={toJSON(){return{}},current:a},c=t?qe(i):i,u=new Set,d=new Set;function f(g,v){g in c&&(t?c[g]=v:c[g].value=v)}function F(){a.clear();for(const g of d)f(g,!1)}function y(g,v){var x,A;const _=(x=g.key)==null?void 0:x.toLowerCase(),O=[(A=g.code)==null?void 0:A.toLowerCase(),_].filter(Boolean);_&&(v?a.add(_):a.delete(_));for(const T of O)d.add(T),f(T,v);_==="meta"&&!v?(u.forEach(T=>{a.delete(T),f(T,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&v&&[...a,...O].forEach(T=>u.add(T))}ve(s,"keydown",g=>(y(g,!0),r(g)),{passive:l}),ve(s,"keyup",g=>(y(g,!1),r(g)),{passive:l}),ve("blur",F,{passive:!0}),ve("focus",F,{passive:!0});const m=new Proxy(c,{get(g,v,x){if(typeof v!="string")return Reflect.get(g,v,x);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const _=v.split(/[+_-]/g).map(C=>C.trim());c[v]=$(()=>_.every(C=>w(m[C])))}else c[v]=V(!1);const A=Reflect.get(g,v,x);return t?w(A):A}});return m}function s$(n={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Qe,eventFilter:a}=n,i=V(l.x),c=V(l.y),u=V(null),d=g=>{t==="page"?(i.value=g.pageX,c.value=g.pageY):t==="client"?(i.value=g.clientX,c.value=g.clientY):t==="movement"&&(i.value=g.movementX,c.value=g.movementY),u.value="mouse"},f=()=>{i.value=l.x,c.value=l.y},F=g=>{if(g.touches.length>0){const v=g.touches[0];t==="page"?(i.value=v.pageX,c.value=v.pageY):t==="client"&&(i.value=v.clientX,c.value=v.clientY),u.value="touch"}},y=g=>a===void 0?d(g):a(()=>d(g),{}),m=g=>a===void 0?F(g):a(()=>F(g),{});return r&&(ve(r,"mousemove",y,{passive:!0}),ve(r,"dragover",y,{passive:!0}),s&&t!=="movement"&&(ve(r,"touchstart",m,{passive:!0}),ve(r,"touchmove",m,{passive:!0}),o&&ve(r,"touchend",f,{passive:!0}))),{x:i,y:c,sourceType:u}}var _t;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(_t||(_t={}));function i2(n,t={}){const s=yf(n),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,i=qe({x:0,y:0}),c=(T,L)=>{i.x=T,i.y=L},u=qe({x:0,y:0}),d=(T,L)=>{u.x=T,u.y=L},f=$(()=>i.x-u.x),F=$(()=>i.y-u.y),{max:y,abs:m}=Math,g=$(()=>y(m(f.value),m(F.value))>=o),v=V(!1),x=V(!1),A=$(()=>g.value?m(f.value)>m(F.value)?f.value>0?_t.LEFT:_t.RIGHT:F.value>0?_t.UP:_t.DOWN:_t.NONE),_=T=>{var L,S,D;const Z=T.buttons===0,re=T.buttons===1;return(D=(S=(L=t.pointerTypes)==null?void 0:L.includes(T.pointerType))!=null?S:Z||re)!=null?D:!0},C=[ve(n,"pointerdown",T=>{var L,S;if(!_(T))return;x.value=!0,(S=(L=s.value)==null?void 0:L.style)==null||S.setProperty("touch-action","none");const D=T.target;D==null||D.setPointerCapture(T.pointerId);const{clientX:Z,clientY:re}=T;c(Z,re),d(Z,re),a==null||a(T)}),ve(n,"pointermove",T=>{if(!_(T)||!x.value)return;const{clientX:L,clientY:S}=T;d(L,S),!v.value&&g.value&&(v.value=!0),v.value&&(l==null||l(T))}),ve(n,"pointerup",T=>{var L,S;_(T)&&(v.value&&(r==null||r(T,A.value)),x.value=!1,v.value=!1,(S=(L=s.value)==null?void 0:L.style)==null||S.setProperty("touch-action","initial"))})],O=()=>C.forEach(T=>T());return{isSwiping:ot(v),direction:ot(A),posStart:ot(i),posEnd:ot(u),distanceX:f,distanceY:F,stop:O}}let c2=0;function o$(n,t={}){const s=V(!1),{document:o=_f,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++c2}`}=t,i=V(n);let c=()=>{};const u=()=>{if(!o)return;const f=o.getElementById(a)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=a,t.media&&(f.media=t.media),o.head.appendChild(f)),!s.value&&(c=ge(i,F=>{f.textContent=F},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&Hi(u),r||pt(d),{id:a,css:i,unload:d,load:u,isLoaded:ot(s)}}var p2=Object.defineProperty,_p=Object.getOwnPropertySymbols,u2=Object.prototype.hasOwnProperty,d2=Object.prototype.propertyIsEnumerable,bp=(n,t,s)=>t in n?p2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,f2=(n,t)=>{for(var s in t||(t={}))u2.call(t,s)&&bp(n,s,t[s]);if(_p)for(var s of _p(t))d2.call(t,s)&&bp(n,s,t[s]);return n};function l$(n={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=n,a=V(Ra()+s),i=()=>a.value=Ra()+s,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?t2(c,{immediate:o}):p8(c,l,{immediate:o});return t?f2({timestamp:a},u):a}var F2=Object.defineProperty,Ap=Object.getOwnPropertySymbols,m2=Object.prototype.hasOwnProperty,y2=Object.prototype.propertyIsEnumerable,wp=(n,t,s)=>t in n?F2(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,h2=(n,t)=>{for(var s in t||(t={}))m2.call(t,s)&&wp(n,s,t[s]);if(Ap)for(var s of Ap(t))y2.call(t,s)&&wp(n,s,t[s]);return n};const g2={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};h2({linear:Jv},g2);function lt(n,t,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f}=o,F=Rn(),y=s||(F==null?void 0:F.emit)||((l=F==null?void 0:F.$emit)==null?void 0:l.bind(F))||((a=(r=F==null?void 0:F.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(F==null?void 0:F.proxy));let m=u;t||(t="modelValue"),m=u||m||`update:${t.toString()}`;const g=x=>i?Uo(i)?i(x):R8(x):x,v=()=>Vv(n[t])?g(n[t]):f;if(c){const x=v(),A=V(x);return ge(()=>n[t],_=>A.value=g(_)),ge(A,_=>{(_!==n[t]||d)&&y(m,_)},{deep:d}),A}else return $({get(){return v()},set(x){y(m,x)}})}function r$({window:n=Qe}={}){if(!n)return V(!1);const t=V(n.document.hasFocus());return ve(n,"blur",()=>{t.value=!1}),ve(n,"focus",()=>{t.value=!0}),t}function v2(n={}){const{window:t=Qe,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=n,a=V(s),i=V(o),c=()=>{t&&(r?(a.value=t.innerWidth,i.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};return c(),Hi(c),ve("resize",c,{passive:!0}),l&&ve("orientationchange",c,{passive:!0}),{width:a,height:i}}function _2(){return bf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function bf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const b2=typeof Proxy=="function",A2="devtools-plugin:setup",w2="plugin:settings:set";let Ts,La;function x2(){var n;return Ts!==void 0||(typeof window<"u"&&window.performance?(Ts=!0,La=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(Ts=!0,La=global.perf_hooks.performance):Ts=!1),Ts}function C2(){return x2()?La.now():Date.now()}class E2{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const a in t.settings){const i=t.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return C2()}},s&&s.on(w2,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function k2(n,t){const s=n,o=bf(),l=_2(),r=b2&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(A2,n,t);else{const a=r?new E2(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gt=typeof window<"u";function S2(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Me=Object.assign;function Yr(n,t){const s={};for(const o in t){const l=t[o];s[o]=Bn(l)?l.map(n):n(l)}return s}const ko=()=>{},Bn=Array.isArray;function Se(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const O2=/\/$/,$2=n=>n.replace(O2,"");function Zr(n,t,s="/"){let o,l={},r="",a="";const i=t.indexOf("#");let c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,i>-1?i:t.length),l=n(r)),i>-1&&(o=o||t.slice(0,i),a=t.slice(i,t.length)),o=M2(o??t,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function P2(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function xp(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Cp(n,t,s){const o=t.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Yt(t.matched[o],s.matched[l])&&Af(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function Yt(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Af(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!T2(n[s],t[s]))return!1;return!0}function T2(n,t){return Bn(n)?Ep(n,t):Bn(t)?Ep(t,n):n===t}function Ep(n,t){return Bn(t)?n.length===t.length&&n.every((s,o)=>s===t[o]):n.length===1&&n[0]===t}function M2(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return Se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const s=t.split("/"),o=n.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Vo;(function(n){n.pop="pop",n.push="push"})(Vo||(Vo={}));var So;(function(n){n.back="back",n.forward="forward",n.unknown=""})(So||(So={}));function B2(n){if(!n)if(gt){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),$2(n)}const R2=/^[^#]+#/;function I2(n,t){return n.replace(R2,"#")+t}function j2(n,t){const s=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const Ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function L2(n){let t;if("el"in n){const s=n.el,o=typeof s=="string"&&s.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const r=document.querySelector(n.el);if(o&&r){Se(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Se(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){Se(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=j2(l,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function kp(n,t){return(history.state?history.state.position-t:-1)+n}const Da=new Map;function D2(n,t){Da.set(n,t)}function N2(n){const t=Da.get(n);return Da.delete(n),t}let H2=()=>location.protocol+"//"+location.host;function wf(n,t){const{pathname:s,search:o,hash:l}=t,r=n.indexOf("#");if(r>-1){let i=l.includes(n.slice(r))?n.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),xp(c,"")}return xp(s,n)+o+l}function q2(n,t,s,o){let l=[],r=[],a=null;const i=({state:F})=>{const y=wf(n,location),m=s.value,g=t.value;let v=0;if(F){if(s.value=y,t.value=F,a&&a===m){a=null;return}v=g?F.position-g.position:0}else o(y);l.forEach(x=>{x(s.value,m,{delta:v,type:Vo.pop,direction:v?v>0?So.forward:So.back:So.unknown})})};function c(){a=s.value}function u(F){l.push(F);const y=()=>{const m=l.indexOf(F);m>-1&&l.splice(m,1)};return r.push(y),y}function d(){const{history:F}=window;F.state&&F.replaceState(Me({},F.state,{scroll:Ar()}),"")}function f(){for(const F of r)F();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function Sp(n,t,s,o=!1,l=!1){return{back:n,current:t,forward:s,replaced:o,position:window.history.length,scroll:l?Ar():null}}function z2(n){const{history:t,location:s}=window,o={value:wf(n,s)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const f=n.indexOf("#"),F=f>-1?(s.host&&document.querySelector("base")?n:n.slice(f))+c:H2()+n+c;try{t[d?"replaceState":"pushState"](u,"",F),l.value=u}catch(y){Se("Error with push/replace State",y),s[d?"replace":"assign"](F)}}function a(c,u){const d=Me({},t.state,Sp(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,u){const d=Me({},l.value,t.state,{forward:c,scroll:Ar()});t.state||Se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Me({},Sp(o.value,c,null),{position:d.position+1},u);r(c,f,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function U2(n){n=B2(n);const t=z2(n),s=q2(n,t.state,t.location,t.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Me({location:"",base:n,go:o,createHref:I2.bind(null,n)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function V2(n){return typeof n=="string"||n&&typeof n=="object"}function xf(n){return typeof n=="string"||typeof n=="symbol"}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cf=Symbol("navigation failure");var Op;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Op||(Op={}));const W2={[1]({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${G2(t)}" via a navigation guard.`},[4]({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Gs(n,t){return Me(new Error(W2[n](t)),{type:n,[Cf]:!0},t)}function ft(n,t){return n instanceof Error&&Cf in n&&(t==null||!!(n.type&t))}const K2=["params","query","hash"];function G2(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const s of K2)s in n&&(t[s]=n[s]);return JSON.stringify(t,null,2)}const $p="[^/]+?",Y2={sensitive:!1,strict:!1,start:!0,end:!0},Z2=/[.+*?^${}()[\]/\\]/g;function J2(n,t){const s=Me({},Y2,t),o=[];let l=s.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const F=u[f];let y=40+(s.sensitive?.25:0);if(F.type===0)f||(l+="/"),l+=F.value.replace(Z2,"\\$&"),y+=40;else if(F.type===1){const{value:m,repeatable:g,optional:v,regexp:x}=F;r.push({name:m,repeatable:g,optional:v});const A=x||$p;if(A!==$p){y+=10;try{new RegExp(`(${A})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+C.message)}}let _=g?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(_=v&&u.length<2?`(?:/${_})`:"/"+_),v&&(_+="?"),l+=_,y+=20,v&&(y+=-8),g&&(y+=-20),A===".*"&&(y+=-50)}d.push(y)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const d=u.match(a),f={};if(!d)return null;for(let F=1;F<d.length;F++){const y=d[F]||"",m=r[F-1];f[m.name]=y&&m.repeatable?y.split("/"):y}return f}function c(u){let d="",f=!1;for(const F of n){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const y of F)if(y.type===0)d+=y.value;else if(y.type===1){const{value:m,repeatable:g,optional:v}=y,x=m in u?u[m]:"";if(Bn(x)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=Bn(x)?x.join("/"):x;if(!A)if(v)F.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=A}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function X2(n,t){let s=0;for(;s<n.length&&s<t.length;){const o=t[s]-n[s];if(o)return o;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Q2(n,t){let s=0;const o=n.score,l=t.score;for(;s<o.length&&s<l.length;){const r=X2(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Pp(o))return 1;if(Pp(l))return-1}return l.length-o.length}function Pp(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const e0={type:0,value:""},n0=/[a-zA-Z0-9_]/;function t0(n){if(!n)return[[]];if(n==="/")return[[e0]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(y){throw new Error(`ERR (${s})/"${u}": ${y}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",d="";function f(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function F(){u+=c}for(;i<n.length;){if(c=n[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),s=1):F();break;case 4:F(),s=o;break;case 1:c==="("?s=2:n0.test(c)?F():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),l}function s0(n,t,s){const o=J2(t0(n.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Se(`Found duplicated params with name "${a.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Me(o,{record:n,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function o0(n,t){const s=[],o=new Map;t=Bp({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,f,F){const y=!F,m=l0(d);c0(m,f),m.aliasOf=F&&F.record;const g=Bp(t,d),v=[m];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const C of _)v.push(Me({},m,{components:F?F.record.components:m.components,path:C,aliasOf:F?F.record:m}))}let x,A;for(const _ of v){const{path:C}=_;if(f&&C[0]!=="/"){const O=f.record.path,T=O[O.length-1]==="/"?"":"/";_.path=f.record.path+(C&&T+C)}if(_.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=s0(_,f,g),f&&C[0]==="/"&&p0(x,f),F?(F.alias.push(x),i0(F,x)):(A=A||x,A!==x&&A.alias.push(x),y&&d.name&&!Mp(x)&&a(d.name)),m.children){const O=m.children;for(let T=0;T<O.length;T++)r(O[T],x,F&&F.children[T])}F=F||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return A?()=>{a(A)}:ko}function a(d){if(xf(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let f=0;for(;f<s.length&&Q2(d,s[f])>=0&&(d.record.path!==s[f].record.path||!Ef(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!Mp(d)&&o.set(d.record.name,d)}function u(d,f){let F,y={},m,g;if("name"in d&&d.name){if(F=o.get(d.name),!F)throw Gs(1,{location:d});{const A=Object.keys(d.params||{}).filter(_=>!F.keys.find(C=>C.name===_));A.length&&Se(`Discarded invalid param(s) "${A.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=F.record.name,y=Me(Tp(f.params,F.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&Tp(d.params,F.keys.map(A=>A.name))),m=F.stringify(y)}else if("path"in d)m=d.path,m.startsWith("/")||Se(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),F=s.find(A=>A.re.test(m)),F&&(y=F.parse(m),g=F.record.name);else{if(F=f.name?o.get(f.name):s.find(A=>A.re.test(f.path)),!F)throw Gs(1,{location:d,currentLocation:f});g=F.record.name,y=Me({},f.params,d.params),m=F.stringify(y)}const v=[];let x=F;for(;x;)v.unshift(x.record),x=x.parent;return{name:g,path:m,params:y,matched:v,meta:a0(v)}}return n.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function Tp(n,t){const s={};for(const o of t)o in n&&(s[o]=n[o]);return s}function l0(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:r0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function r0(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const o in n.components)t[o]=typeof s=="boolean"?s:s[o];return t}function Mp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function a0(n){return n.reduce((t,s)=>Me(t,s.meta),{})}function Bp(n,t){const s={};for(const o in n)s[o]=o in t?t[o]:n[o];return s}function Na(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function i0(n,t){for(const s of n.keys)if(!s.optional&&!t.keys.find(Na.bind(null,s)))return Se(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!n.keys.find(Na.bind(null,s)))return Se(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`)}function c0(n,t){t&&t.record.name&&!n.name&&!n.path&&Se(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function p0(n,t){for(const s of t.keys)if(!n.keys.find(Na.bind(null,s)))return Se(`Absolute path "${n.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function Ef(n,t){return t.children.some(s=>s===n||Ef(n,s))}const kf=/#/g,u0=/&/g,d0=/\//g,f0=/=/g,F0=/\?/g,Sf=/\+/g,m0=/%5B/g,y0=/%5D/g,Of=/%5E/g,h0=/%60/g,$f=/%7B/g,g0=/%7C/g,Pf=/%7D/g,v0=/%20/g;function qi(n){return encodeURI(""+n).replace(g0,"|").replace(m0,"[").replace(y0,"]")}function _0(n){return qi(n).replace($f,"{").replace(Pf,"}").replace(Of,"^")}function Ha(n){return qi(n).replace(Sf,"%2B").replace(v0,"+").replace(kf,"%23").replace(u0,"%26").replace(h0,"`").replace($f,"{").replace(Pf,"}").replace(Of,"^")}function b0(n){return Ha(n).replace(f0,"%3D")}function A0(n){return qi(n).replace(kf,"%23").replace(F0,"%3F")}function w0(n){return n==null?"":A0(n).replace(d0,"%2F")}function Wo(n){try{return decodeURIComponent(""+n)}catch{Se(`Error decoding "${n}". Using original value`)}return""+n}function x0(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Sf," "),a=r.indexOf("="),i=Wo(a<0?r:r.slice(0,a)),c=a<0?null:Wo(r.slice(a+1));if(i in t){let u=t[i];Bn(u)||(u=t[i]=[u]),u.push(c)}else t[i]=c}return t}function Rp(n){let t="";for(let s in n){const o=n[s];if(s=b0(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}(Bn(o)?o.map(r=>r&&Ha(r)):[o&&Ha(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function C0(n){const t={};for(const s in n){const o=n[s];o!==void 0&&(t[s]=Bn(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const E0=Symbol("router view location matched"),Ip=Symbol("router view depth"),zi=Symbol("router"),Tf=Symbol("route location"),qa=Symbol("router view location");function po(){let n=[];function t(o){return n.push(o),()=>{const l=n.indexOf(o);l>-1&&n.splice(l,1)}}function s(){n=[]}return{add:t,list:()=>n,reset:s}}function Bt(n,t,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=f=>{f===!1?i(Gs(4,{from:s,to:t})):f instanceof Error?i(f):V2(f)?i(Gs(2,{from:t,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},u=n.call(o&&o.instances[l],t,s,k0(c,t,s));let d=Promise.resolve(u);if(n.length<3&&(d=d.then(c)),n.length>2){const f=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(F=>c._called?F:(Se(f),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Se(f),i(new Error("Invalid navigation guard"));return}}d.catch(f=>i(f))})}function k0(n,t,s){let o=0;return function(){o++===1&&Se(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Jr(n,t,s,o){const l=[];for(const r of n){!r.components&&!r.children.length&&Se(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Se(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Se(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Se(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(S0(i)){const u=(i.__vccOpts||i)[t];u&&l.push(Bt(u,s,o,r,a))}else{let c=i();"catch"in c||(Se(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=S2(u)?u.default:u;r.components[a]=d;const F=(d.__vccOpts||d)[t];return F&&Bt(F,s,o,r,a)()}))}}}return l}function S0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function jp(n){const t=ee(zi),s=ee(Tf),o=$(()=>t.resolve(w(n.to))),l=$(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],f=s.matched;if(!d||!f.length)return-1;const F=f.findIndex(Yt.bind(null,d));if(F>-1)return F;const y=Lp(c[u-2]);return u>1&&Lp(d)===y&&f[f.length-1].path!==y?f.findIndex(Yt.bind(null,c[u-2])):F}),r=$(()=>l.value>-1&&T0(s.params,o.value.params)),a=$(()=>l.value>-1&&l.value===s.matched.length-1&&Af(s.params,o.value.params));function i(c={}){return P0(c)?t[w(n.replace)?"replace":"push"](w(n.to)).catch(ko):Promise.resolve()}if(gt){const c=Rn();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Es(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:$(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const O0=Re({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jp,setup(n,{slots:t}){const s=qe(jp(n)),{options:o}=ee(zi),l=$(()=>({[Dp(n.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Dp(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return n.custom?r:Tn("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),$0=O0;function P0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function T0(n,t){for(const s in t){const o=t[s],l=n[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Bn(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function Lp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Dp=(n,t,s)=>n??t??s,M0=Re({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){R0();const o=ee(qa),l=$(()=>n.route||o.value),r=ee(Ip,0),a=$(()=>{let u=w(r);const{matched:d}=l.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=$(()=>l.value.matched[a.value]);On(Ip,$(()=>a.value+1)),On(E0,i),On(qa,l);const c=V();return ge(()=>[c.value,i.value,n.name],([u,d,f],[F,y,m])=>{d&&(d.instances[f]=u,y&&y!==d&&u&&u===F&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!Yt(d,y)||!F)&&(d.enterCallbacks[f]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=l.value,d=n.name,f=i.value,F=f&&f.components[d];if(!F)return Np(s.default,{Component:F,route:u});const y=f.props[d],m=y?y===!0?u.params:typeof y=="function"?y(u):y:null,v=Tn(F,Me({},m,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(gt&&v.ref){const x={depth:a.value,name:f.name,path:f.path,meta:f.meta};(Bn(v.ref)?v.ref.map(_=>_.i):[v.ref.i]).forEach(_=>{_.__vrv_devtools=x})}return Np(s.default,{Component:v,route:u})||v}}});function Np(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const B0=M0;function R0(){const n=Rn(),t=n.parent&&n.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";Se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function uo(n,t){const s=Me({},n,{matched:n.matched.map(o=>U0(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:s}}}function xl(n){return{_custom:{display:n}}}let I0=0;function j0(n,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=I0++;k2({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:uo(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const F=f.__vrv_devtools;d.tags.push({label:(F.name?`${F.name.toString()}: `:"")+F.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Mf})}Bn(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(F=>{let y=If,m="";F.isExactActive?(y=Rf,m="This is exactly active"):F.isActive&&(y=Bf,m="This link is active"),d.tags.push({label:F.route.path,textColor:0,tooltip:m,backgroundColor:y})}))}),ge(t.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let a=0;t.beforeEach((d,f)=>{const F={guard:xl("beforeEach"),from:uo(f,"Current Location during this navigation"),to:uo(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:F,groupId:d.meta.__navigationId}})}),t.afterEach((d,f,F)=>{const y={guard:xl("afterEach")};F?(y.failure={_custom:{type:Error,readOnly:!0,display:F?F.message:"",tooltip:"Navigation Failure",value:F}},y.status=xl("❌")):y.status=xl("✅"),y.from=uo(f,"Current Location during this navigation"),y.to=uo(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:y,logType:F?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let f=s.getRoutes().filter(F=>!F.parent);f.forEach(Df),d.filter&&(f=f.filter(F=>za(F,d.filter.toLowerCase()))),f.forEach(F=>Lf(F,t.currentRoute.value)),d.rootNodes=f.map(jf)}let u;l.on.getInspectorTree(d=>{u=d,d.app===n&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===i){const F=s.getRoutes().find(y=>y.record.__vd_id===d.nodeId);F&&(d.state={options:D0(F)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function L0(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function D0(n){const{record:t}=n,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${L0(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&s.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&s.push({editable:!1,key:"meta",value:n.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),s}const Mf=15485081,Bf=2450411,Rf=8702998,N0=2282478,If=16486972,H0=6710886;function jf(n){const t=[],{record:s}=n;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:N0}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:If}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Mf}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Rf}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Bf}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:H0});let o=s.__vd_id;return o==null&&(o=String(q0++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:n.children.map(jf)}}let q0=0;const z0=/^\/(.*)\/([a-z]*)$/;function Lf(n,t){const s=t.matched.length&&Yt(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=s,s||(n.__vd_active=t.matched.some(o=>Yt(o,n.record))),n.children.forEach(o=>Lf(o,t))}function Df(n){n.__vd_match=!1,n.children.forEach(Df)}function za(n,t){const s=String(n.re).match(z0);if(n.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return n.children.forEach(a=>za(a,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const l=n.record.path.toLowerCase(),r=Wo(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(a=>za(a,t))}function U0(n,t){const s={};for(const o in n)t.includes(o)||(s[o]=n[o]);return s}function V0(n){const t=o0(n.routes,n),s=n.parseQuery||x0,o=n.stringifyQuery||Rp,l=n.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=po(),a=po(),i=po(),c=ct($t);let u=$t;gt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yr.bind(null,P=>""+P),f=Yr.bind(null,w0),F=Yr.bind(null,Wo);function y(P,J){let K,Q;return xf(P)?(K=t.getRecordMatcher(P),Q=J):Q=P,t.addRoute(Q,K)}function m(P){const J=t.getRecordMatcher(P);J?t.removeRoute(J):Se(`Cannot remove non-existent route "${String(P)}"`)}function g(){return t.getRoutes().map(P=>P.record)}function v(P){return!!t.getRecordMatcher(P)}function x(P,J){if(J=Me({},J||c.value),typeof P=="string"){const pe=Zr(s,P,J.path),h=t.resolve({path:pe.path},J),b=l.createHref(pe.fullPath);return b.startsWith("//")?Se(`Location "${P}" resolved to "${b}". A resolved location cannot start with multiple slashes.`):h.matched.length||Se(`No match found for location with path "${P}"`),Me(pe,h,{params:F(h.params),hash:Wo(pe.hash),redirectedFrom:void 0,href:b})}let K;if("path"in P)"params"in P&&!("name"in P)&&Object.keys(P.params).length&&Se(`Path "${P.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),K=Me({},P,{path:Zr(s,P.path,J.path).path});else{const pe=Me({},P.params);for(const h in pe)pe[h]==null&&delete pe[h];K=Me({},P,{params:f(P.params)}),J.params=f(J.params)}const Q=t.resolve(K,J),xe=P.hash||"";xe&&!xe.startsWith("#")&&Se(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`),Q.params=d(F(Q.params));const ke=P2(o,Me({},P,{hash:_0(xe),path:Q.path})),Fe=l.createHref(ke);return Fe.startsWith("//")?Se(`Location "${P}" resolved to "${Fe}". A resolved location cannot start with multiple slashes.`):Q.matched.length||Se(`No match found for location with path "${"path"in P?P.path:P}"`),Me({fullPath:ke,hash:xe,query:o===Rp?C0(P.query):P.query||{}},Q,{redirectedFrom:void 0,href:Fe})}function A(P){return typeof P=="string"?Zr(s,P,c.value.path):Me({},P)}function _(P,J){if(u!==P)return Gs(8,{from:J,to:P})}function C(P){return L(P)}function O(P){return C(Me(A(P),{replace:!0}))}function T(P){const J=P.matched[P.matched.length-1];if(J&&J.redirect){const{redirect:K}=J;let Q=typeof K=="function"?K(P):K;if(typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=A(Q):{path:Q},Q.params={}),!("path"in Q)&&!("name"in Q))throw Se(`Invalid redirect found:
${JSON.stringify(Q,null,2)}
 when navigating to "${P.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Me({query:P.query,hash:P.hash,params:"path"in Q?{}:P.params},Q)}}function L(P,J){const K=u=x(P),Q=c.value,xe=P.state,ke=P.force,Fe=P.replace===!0,pe=T(K);if(pe)return L(Me(A(pe),{state:typeof pe=="object"?Me({},xe,pe.state):xe,force:ke,replace:Fe}),J||K);const h=K;h.redirectedFrom=J;let b;return!ke&&Cp(o,Q,K)&&(b=Gs(16,{to:h,from:Q}),Ie(Q,Q,!0,!1)),(b?Promise.resolve(b):D(h,Q)).catch(k=>ft(k)?ft(k,2)?k:Ae(k):Y(k,h,Q)).then(k=>{if(k){if(ft(k,2))return Cp(o,x(k.to),h)&&J&&(J._count=J._count?J._count+1:1)>10?(Se(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):L(Me({replace:Fe},A(k.to),{state:typeof k.to=="object"?Me({},xe,k.to.state):xe,force:ke}),J||h)}else k=re(h,Q,!0,Fe,xe);return Z(h,Q,k),k})}function S(P,J){const K=_(P,J);return K?Promise.reject(K):Promise.resolve()}function D(P,J){let K;const[Q,xe,ke]=W0(P,J);K=Jr(Q.reverse(),"beforeRouteLeave",P,J);for(const pe of Q)pe.leaveGuards.forEach(h=>{K.push(Bt(h,P,J))});const Fe=S.bind(null,P,J);return K.push(Fe),Ms(K).then(()=>{K=[];for(const pe of r.list())K.push(Bt(pe,P,J));return K.push(Fe),Ms(K)}).then(()=>{K=Jr(xe,"beforeRouteUpdate",P,J);for(const pe of xe)pe.updateGuards.forEach(h=>{K.push(Bt(h,P,J))});return K.push(Fe),Ms(K)}).then(()=>{K=[];for(const pe of P.matched)if(pe.beforeEnter&&!J.matched.includes(pe))if(Bn(pe.beforeEnter))for(const h of pe.beforeEnter)K.push(Bt(h,P,J));else K.push(Bt(pe.beforeEnter,P,J));return K.push(Fe),Ms(K)}).then(()=>(P.matched.forEach(pe=>pe.enterCallbacks={}),K=Jr(ke,"beforeRouteEnter",P,J),K.push(Fe),Ms(K))).then(()=>{K=[];for(const pe of a.list())K.push(Bt(pe,P,J));return K.push(Fe),Ms(K)}).catch(pe=>ft(pe,8)?pe:Promise.reject(pe))}function Z(P,J,K){for(const Q of i.list())Q(P,J,K)}function re(P,J,K,Q,xe){const ke=_(P,J);if(ke)return ke;const Fe=J===$t,pe=gt?history.state:{};K&&(Q||Fe?l.replace(P.fullPath,Me({scroll:Fe&&pe&&pe.scroll},xe)):l.push(P.fullPath,xe)),c.value=P,Ie(P,J,K,Fe),Ae()}let U;function _e(){U||(U=l.listen((P,J,K)=>{if(!kt.listening)return;const Q=x(P),xe=T(Q);if(xe){L(Me(xe,{replace:!0}),Q).catch(ko);return}u=Q;const ke=c.value;gt&&D2(kp(ke.fullPath,K.delta),Ar()),D(Q,ke).catch(Fe=>ft(Fe,12)?Fe:ft(Fe,2)?(L(Fe.to,Q).then(pe=>{ft(pe,20)&&!K.delta&&K.type===Vo.pop&&l.go(-1,!1)}).catch(ko),Promise.reject()):(K.delta&&l.go(-K.delta,!1),Y(Fe,Q,ke))).then(Fe=>{Fe=Fe||re(Q,ke,!1),Fe&&(K.delta&&!ft(Fe,8)?l.go(-K.delta,!1):K.type===Vo.pop&&ft(Fe,20)&&l.go(-1,!1)),Z(Q,ke,Fe)}).catch(ko)}))}let ye=po(),be=po(),Te;function Y(P,J,K){Ae(P);const Q=be.list();return Q.length?Q.forEach(xe=>xe(P,J,K)):(Se("uncaught error during route navigation:"),console.error(P)),Promise.reject(P)}function oe(){return Te&&c.value!==$t?Promise.resolve():new Promise((P,J)=>{ye.add([P,J])})}function Ae(P){return Te||(Te=!P,_e(),ye.list().forEach(([J,K])=>P?K(P):J()),ye.reset()),P}function Ie(P,J,K,Q){const{scrollBehavior:xe}=n;if(!gt||!xe)return Promise.resolve();const ke=!K&&N2(kp(P.fullPath,0))||(Q||!K)&&history.state&&history.state.scroll||null;return an().then(()=>xe(P,J,ke)).then(Fe=>Fe&&L2(Fe)).catch(Fe=>Y(Fe,P,J))}const Cn=P=>l.go(P);let on;const hn=new Set,kt={currentRoute:c,listening:!0,addRoute:y,removeRoute:m,hasRoute:v,getRoutes:g,resolve:x,options:n,push:C,replace:O,go:Cn,back:()=>Cn(-1),forward:()=>Cn(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:be.add,isReady:oe,install(P){const J=this;P.component("RouterLink",$0),P.component("RouterView",B0),P.config.globalProperties.$router=J,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),gt&&!on&&c.value===$t&&(on=!0,C(l.location).catch(xe=>{Se("Unexpected error when starting the router:",xe)}));const K={};for(const xe in $t)K[xe]=$(()=>c.value[xe]);P.provide(zi,J),P.provide(Tf,qe(K)),P.provide(qa,c);const Q=P.unmount;hn.add(P),P.unmount=function(){hn.delete(P),hn.size<1&&(u=$t,U&&U(),U=null,c.value=$t,on=!1,Te=!1),Q()},gt&&j0(P,J,t)}};return kt}function Ms(n){return n.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function W0(n,t){const s=[],o=[],l=[],r=Math.max(t.matched.length,n.matched.length);for(let a=0;a<r;a++){const i=t.matched[a];i&&(n.matched.find(u=>Yt(u,i))?o.push(i):s.push(i));const c=n.matched[a];c&&(t.matched.find(u=>Yt(u,c))||l.push(c))}return[s,o,l]}const Xr=V(!1),Oo=V(!1),Ds=V(!1),K0=V(!0),Ua=M8({xs:460,...S8}),bs=v2(),Nf=a2(),G0=$(()=>bs.height.value-bs.width.value/Nt>180),Hf=o2(Xn?document.body:null),zt=k8(),Y0=$(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=zt.value)==null?void 0:n.tagName)||"")||((t=zt.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Z0=$(()=>{var n;return["BUTTON","A"].includes(((n=zt.value)==null?void 0:n.tagName)||"")});Qn("slidev-camera","default");Qn("slidev-mic","default");const Bl=Qn("slidev-scale",0),fn=Qn("slidev-show-overview",!1),Qr=Qn("slidev-presenter-cursor",!0),Hp=Qn("slidev-show-editor",!1);Qn("slidev-editor-width",Xn?window.innerWidth*.4:100);const qf=hf(fn);function qp(n,t,s,o=l=>l){return n*o(.5-t*(.5-s))}function J0(n){return[-n[0],-n[1]]}function Gn(n,t){return[n[0]+t[0],n[1]+t[1]]}function Ln(n,t){return[n[0]-t[0],n[1]-t[1]]}function Kn(n,t){return[n[0]*t,n[1]*t]}function X0(n,t){return[n[0]/t,n[1]/t]}function fo(n){return[n[1],-n[0]]}function zp(n,t){return n[0]*t[0]+n[1]*t[1]}function Q0(n,t){return n[0]===t[0]&&n[1]===t[1]}function e_(n){return Math.hypot(n[0],n[1])}function n_(n){return n[0]*n[0]+n[1]*n[1]}function Up(n,t){return n_(Ln(n,t))}function zf(n){return X0(n,e_(n))}function t_(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function Fo(n,t,s){let o=Math.sin(s),l=Math.cos(s),r=n[0]-t[0],a=n[1]-t[1],i=r*l-a*o,c=r*o+a*l;return[i+t[0],c+t[1]]}function Va(n,t,s){return Gn(n,Kn(Ln(t,n),s))}function Vp(n,t,s){return Gn(n,Kn(t,s))}var{min:Bs,PI:s_}=Math,Wp=.275,mo=s_+1e-4;function o_(n,t={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=Y=>Y,start:i={},end:c={},last:u=!1}=t,{cap:d=!0,easing:f=Y=>Y*(2-Y)}=i,{cap:F=!0,easing:y=Y=>--Y*Y*Y+1}=c;if(n.length===0||s<=0)return[];let m=n[n.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,v=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,x=Math.pow(s*o,2),A=[],_=[],C=n.slice(0,10).reduce((Y,oe)=>{let Ae=oe.pressure;if(r){let Ie=Bs(1,oe.distance/s),Cn=Bs(1,1-Ie);Ae=Bs(1,Y+(Cn-Y)*(Ie*Wp))}return(Y+Ae)/2},n[0].pressure),O=qp(s,l,n[n.length-1].pressure,a),T,L=n[0].vector,S=n[0].point,D=S,Z=S,re=D,U=!1;for(let Y=0;Y<n.length;Y++){let{pressure:oe}=n[Y],{point:Ae,vector:Ie,distance:Cn,runningLength:on}=n[Y];if(Y<n.length-1&&m-on<3)continue;if(l){if(r){let ke=Bs(1,Cn/s),Fe=Bs(1,1-ke);oe=Bs(1,C+(Fe-C)*(ke*Wp))}O=qp(s,l,oe,a)}else O=s/2;T===void 0&&(T=O);let hn=on<g?f(on/g):1,kt=m-on<v?y((m-on)/v):1;O=Math.max(.01,O*Math.min(hn,kt));let P=(Y<n.length-1?n[Y+1]:n[Y]).vector,J=Y<n.length-1?zp(Ie,P):1,K=zp(Ie,L)<0&&!U,Q=J!==null&&J<0;if(K||Q){let ke=Kn(fo(L),O);for(let Fe=1/13,pe=0;pe<=1;pe+=Fe)Z=Fo(Ln(Ae,ke),Ae,mo*pe),A.push(Z),re=Fo(Gn(Ae,ke),Ae,mo*-pe),_.push(re);S=Z,D=re,Q&&(U=!0);continue}if(U=!1,Y===n.length-1){let ke=Kn(fo(Ie),O);A.push(Ln(Ae,ke)),_.push(Gn(Ae,ke));continue}let xe=Kn(fo(Va(P,Ie,J)),O);Z=Ln(Ae,xe),(Y<=1||Up(S,Z)>x)&&(A.push(Z),S=Z),re=Gn(Ae,xe),(Y<=1||Up(D,re)>x)&&(_.push(re),D=re),C=oe,L=Ie}let _e=n[0].point.slice(0,2),ye=n.length>1?n[n.length-1].point.slice(0,2):Gn(n[0].point,[1,1]),be=[],Te=[];if(n.length===1){if(!(g||v)||u){let Y=Vp(_e,zf(fo(Ln(_e,ye))),-(T||O)),oe=[];for(let Ae=1/13,Ie=Ae;Ie<=1;Ie+=Ae)oe.push(Fo(Y,_e,mo*2*Ie));return oe}}else{if(!(g||v&&n.length===1))if(d)for(let oe=1/13,Ae=oe;Ae<=1;Ae+=oe){let Ie=Fo(_[0],_e,mo*Ae);be.push(Ie)}else{let oe=Ln(A[0],_[0]),Ae=Kn(oe,.5),Ie=Kn(oe,.51);be.push(Ln(_e,Ae),Ln(_e,Ie),Gn(_e,Ie),Gn(_e,Ae))}let Y=fo(J0(n[n.length-1].vector));if(v||g&&n.length===1)Te.push(ye);else if(F){let oe=Vp(ye,Y,O);for(let Ae=1/29,Ie=Ae;Ie<1;Ie+=Ae)Te.push(Fo(oe,ye,mo*3*Ie))}else Te.push(Gn(ye,Kn(Y,O)),Gn(ye,Kn(Y,O*.99)),Ln(ye,Kn(Y,O*.99)),Ln(ye,Kn(Y,O)))}return A.concat(Te,_.reverse(),be)}function l_(n,t={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(n.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(n[0])?n:n.map(({x:y,y:m,pressure:g=.5})=>[y,m,g]);if(i.length===2){let y=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Va(i[0],y,m/4))}i.length===1&&(i=[...i,[...Gn(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],F=i.length-1;for(let y=1;y<i.length;y++){let m=r&&y===F?i[y].slice(0,2):Va(f.point,i[y],a);if(Q0(f.point,m))continue;let g=t_(m,f.point);if(d+=g,y<F&&!u){if(d<l)continue;u=!0}f={point:m,pressure:i[y][2]>=0?i[y][2]:.5,vector:zf(Ln(f.point,m)),distance:g,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function r_(n,t={}){return o_(l_(n,t),t)}var a_=()=>({events:{},emit(n,...t){let s=this.events[n]||[];for(let o=0,l=s.length;o<l;o++)s[o](...t)},on(n,t){var s;return(s=this.events[n])!=null&&s.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(l=>t!==l)}}});function Ql(n,t){return n-t}function i_(n){return n<0?-1:1}function er(n){return[Math.abs(n),i_(n)]}function Uf(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var c_=2,vt=c_,Xs=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-l.left)*o,y:(n.pageY-l.top)*o,pressure:n.pressure}}else{const l=this.drauu.svgPoint;l.x=n.clientX,l.y=n.clientY;const r=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:n.pressure}}}createElement(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(vt))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},p_=class extends Xs{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=r_(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},u_=class extends Xs{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=er(n.x-this.start.x),[o,l]=er(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Ql),[i,c]=[this.start.y,this.start.y+o*l].sort(Ql);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function Vf(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var d_=class extends Xs{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=Uf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Vf(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:s}=n;if(this.shiftPressed){const o=n.x-this.start.x,l=n.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},f_=class extends Xs{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=er(n.x-this.start.x),[o,l]=er(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Ql),[i,c]=[this.start.y,this.start.y+o*l].sort(Ql);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function F_(n,t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o}function m_(n,t,s){let o=t.x,l=t.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((n.x-o)*r+(n.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=n.x-o,a=n.y-l,r*r+a*a}function y_(n,t){let s=n[0];const o=[s];let l;for(let r=1,a=n.length;r<a;r++)l=n[r],F_(l,s)>t&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Wa(n,t,s,o,l){let r=o,a=0;for(let i=t+1;i<s;i++){const c=m_(n[i],n[t],n[s]);c>r&&(a=i,r=c)}r>o&&(a-t>1&&Wa(n,t,a,o,l),l.push(n[a]),s-a>1&&Wa(n,a,s,o,l))}function h_(n,t){const s=n.length-1,o=[n[0]];return Wa(n,0,s,t,o),o.push(n[s]),o}function Kp(n,t,s=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=s?n:y_(n,o),n=h_(n,o),n}var g_=class extends Xs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Uf();const t=Vf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Kp(this.points,1,!0),this.count=0),this.attr("d",Yp(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Yp(Kp(this.points,1,!0))),!n.getTotalLength()))}};function v_(n,t){const s=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Gp(n,t,s,o){const l=t||n,r=s||n,a=.2,i=v_(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,d=n.x+Math.cos(c)*u,f=n.y+Math.sin(c)*u;return{x:d,y:f}}function __(n,t,s){const o=Gp(s[t-1],s[t-2],n),l=Gp(n,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(vt)},${o.y.toFixed(vt)} ${l.x.toFixed(vt)},${l.y.toFixed(vt)} ${n.x.toFixed(vt)},${n.y.toFixed(vt)}`}function Yp(n){return n.reduce((t,s,o,l)=>o===0?`M ${s.x.toFixed(vt)},${s.y.toFixed(vt)}`:`${t} ${__(s,o,l)}`,"")}var b_=class extends Xs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&t(r.children,r)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!n.includes(s))),n.length>0}lineLineIntersect(n,t){const s=n.x1,o=n.x2,l=t.x1,r=t.x2,a=n.y1,i=n.y2,c=t.y1,u=t.y2,d=(s-o)*(c-u)-(a-i)*(l-r),f=(s*i-a*o)*(l-r)-(s-o)*(l*u-c*r),F=(s*i-a*o)*(c-u)-(a-i)*(l*u-c*r),y=(m,g,v)=>m>=g&&m<=v?!0:m>=v&&m<=g;if(d===0)return!1;{const m={x:f/d,y:F/d};return y(m.x,s,o)&&y(m.y,a,i)&&y(m.x,l,r)&&y(m.y,c,u)}}};function A_(n){return{draw:new g_(n),stylus:new p_(n),line:new d_(n),rectangle:new f_(n),ellipse:new u_(n),eraseLine:new b_(n)}}var w_=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=a_(),this._models=A_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function x_(n){return new w_(n)}const Ka=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],rt=Qn("slidev-drawing-enabled",!1),a$=Qn("slidev-drawing-pinned",!1),C_=V(!1),E_=V(!1),k_=V(!1),Ko=V(!1),fs=e8(Qn("slidev-drawing-brush",{color:Ka[0],size:4,mode:"stylus"})),Zp=V("stylus"),Wf=$(()=>Oe.drawings.syncAll||vn.value);let Go=!1;const yo=$({get(){return Zp.value},set(n){Zp.value=n,n==="arrow"?(fs.mode="line",fs.arrowEnd=!0):(fs.mode=n,fs.arrowEnd=!1)}}),S_=qe({brush:fs,acceptsInputTypes:$(()=>rt.value&&(!Oe.drawings.presenterOnly||vn.value)?void 0:["pen"]),coordinateTransform:!1}),yn=ur(x_(S_));function O_(){yn.clear(),Wf.value&&ff(Ve.value,"")}function Ui(){var n;E_.value=yn.canRedo(),C_.value=yn.canUndo(),k_.value=!!((n=yn.el)!=null&&n.children.length)}function $_(n){Go=!0;const t=Jl[n||Ve.value];t!=null?yn.load(t):yn.clear(),Ui(),Go=!1}yn.on("changed",()=>{if(Ui(),!Go){const n=yn.dump(),t=Ve.value;(Jl[t]||"")!==n&&Wf.value&&ff(t,yn.dump())}});qv(n=>{Go=!0,n[Ve.value]!=null&&yn.load(n[Ve.value]||""),Go=!1,Ui()});an(()=>{ge(Ve,()=>{yn.mounted&&$_()},{immediate:!0})});yn.on("start",()=>Ko.value=!0);yn.on("end",()=>Ko.value=!1);window.addEventListener("keydown",n=>{if(!rt.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let s=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?yn.redo():yn.undo():n.code==="Escape"?rt.value=!1:n.code==="KeyL"&&t?yo.value="line":n.code==="KeyA"&&t?yo.value="arrow":n.code==="KeyS"&&t?yo.value="stylus":n.code==="KeyR"&&t?yo.value="rectangle":n.code==="KeyE"&&t?yo.value="ellipse":n.code==="KeyC"&&t?O_():n.code.startsWith("Digit")&&t&&+n.code[5]<=Ka.length?fs.color=Ka[+n.code[5]-1]:s=!1,s&&(n.preventDefault(),n.stopPropagation())},!1);function Ze(...n){return $(()=>n.every(t=>ln(t)))}function kn(n){return $(()=>!ln(n))}const Jp=U8(),ea=Qn("slidev-color-schema","auto"),Ga=$(()=>Oe.colorSchema!=="auto"),Vi=$({get(){return Ga.value?Oe.colorSchema==="dark":ea.value==="auto"?Jp.value:ea.value==="dark"},set(n){Ga.value||(ea.value=n===Jp.value?"auto":n?"dark":"light")}}),Kf=hf(Vi);Xn&&ge(Vi,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const Rl=V(1),Il=$(()=>Ye.length-1),Mn=V(0),Wi=V(0);function P_(){Mn.value>Rl.value&&(Mn.value-=1)}function T_(){Mn.value<Il.value&&(Mn.value+=1)}function M_(){if(Mn.value>Rl.value){let n=Mn.value-Wi.value;n<Rl.value&&(n=Rl.value),Mn.value=n}}function B_(){if(Mn.value<Il.value){let n=Mn.value+Wi.value;n>Il.value&&(n=Il.value),Mn.value=n}}function R_(){const{escape:n,space:t,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:d}=Nf;let f=[{name:"next_space",key:Ze(t,kn(s)),fn:Ut,autoRepeat:!0},{name:"prev_space",key:Ze(t,s),fn:Vt,autoRepeat:!0},{name:"next_right",key:Ze(l,kn(s),kn(fn)),fn:Ut,autoRepeat:!0},{name:"prev_left",key:Ze(o,kn(s),kn(fn)),fn:Vt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ut,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Vt,autoRepeat:!0},{name:"next_down",key:Ze(a,kn(fn)),fn:Zo,autoRepeat:!0},{name:"prev_up",key:Ze(r,kn(fn)),fn:()=>Jo(!1),autoRepeat:!0},{name:"next_shift",key:Ze(l,s),fn:Zo,autoRepeat:!0},{name:"prev_shift",key:Ze(o,s),fn:()=>Jo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ze(c,kn(rt)),fn:Kf},{name:"toggle_overview",key:Ze(d,kn(rt)),fn:qf},{name:"hide_overview",key:Ze(n,kn(rt)),fn:()=>fn.value=!1},{name:"goto",key:Ze(u,kn(rt)),fn:()=>Ds.value=!Ds.value},{name:"next_overview",key:Ze(l,fn),fn:T_},{name:"prev_overview",key:Ze(o,fn),fn:P_},{name:"up_overview",key:Ze(r,fn),fn:M_},{name:"down_overview",key:Ze(a,fn),fn:B_},{name:"goto_from_overview",key:Ze(i,fn),fn:()=>{Zs(Mn.value),fn.value=!1}}];const F=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&F.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Gf=Ze(kn(Y0),kn(Z0),K0);function I_(n,t,s=!1){typeof n=="string"&&(n=Nf[n]);const o=Ze(n,Gf);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return ge(o,a,{flush:"sync"})}function j_(n,t){return E8(n,s=>{Gf.value&&(s.repeat||t())})}function L_(){const n=R_();new Map(n.map(s=>[s.key,s])).forEach(s=>{s.fn&&I_(s.key,s.fn,s.autoRepeat)}),j_("f",()=>Hf.toggle())}const D_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N_=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),H_=[N_];function q_(n,t){return E(),R("svg",D_,H_)}const z_={name:"carbon-close",render:q_};function Ki(n,t=""){var l,r;const s=["slidev-page",t],o=(r=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const U_=Re({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;ee(ie);const s=V(),o=s2(s),l=$(()=>t.width?t.width:o.width.value),r=$(()=>t.width?t.width/Nt:o.height.value);t.width&&Es(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=$(()=>l.value/r.value),i=$(()=>t.scale&&!Ys.value?t.scale:a.value<Nt?l.value/Ht:r.value*Nt/Ht),c=$(()=>({height:`${Di}px`,width:`${Ht}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=$(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return On(uf,i),(d,f)=>(E(),R("div",{id:"slide-container",ref_key:"root",ref:s,class:He(w(u))},[e("div",{id:"slide-content",style:cn(w(c))},[Hn(d.$slots,"default")],4),Hn(d.$slots,"controls")],2))}});const ce=(n,t)=>{const s=n.__vccOpts||n;for(const[o,l]of t)s[o]=l;return s},Yf=ce(U_,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Gi=Re({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const s=lt(n,"clicks",t),o=lt(n,"clicksElements",t),l=lt(n,"clicksDisabled",t),r=lt(n,"clicksOrderMap",t);o.value.length=0,On(kv,n.route),On(Sv,n.context),On(Co,s),On(Eo,l),On(cs,o),On(Ta,r)},render(){var n,t;return this.$props.is?Tn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),V_=["innerHTML"],W_=Re({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return ee(ie),(t,s)=>w(Jl)[n.page]?(E(),R("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Jl)[n.page]},null,8,V_)):X("v-if",!0)}}),Zf=ce(W_,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),K_=Object.freeze(Object.defineProperty({__proto__:null,default:Zf},Symbol.toStringTag,{value:"Module"})),G_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Y_=["onClick"],Z_=Re({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const s=n;ee(ie);const o=lt(s,"modelValue",t);function l(){o.value=!1}function r(y){Zs(y),l()}function a(y){return y===Mn.value}const i=Ua.smaller("xs"),c=Ua.smaller("sm"),u=4*16*2,d=2*16,f=$(()=>i.value?bs.width.value-u:c.value?(bs.width.value-u-d)/2:300),F=$(()=>Math.floor((bs.width.value-u)/(f.value+d)));return Es(()=>{Mn.value=Ve.value,Wi.value=F.value}),(y,m)=>{const g=z_;return E(),R($e,null,[Ti(e("div",G_,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:cn(`grid-template-columns: repeat(auto-fit,minmax(${w(f)}px,1fr))`)},[(E(!0),R($e,null,Js(w(Ye).slice(0,-1),(v,x)=>(E(),R("div",{key:v.path,class:"relative"},[e("div",{class:He(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(x+1),"border-gray-400":!a(x+1)}]),style:cn(w(Ni)),onClick:A=>r(+v.path)},[(E(),ae(Yf,{key:v.path,width:w(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:W(()=>[N(w(Gi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:He(w(Ki)(v)),route:v,context:"overview"},null,8,["is","class","route"]),N(Zf,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],14,Y_),e("div",{class:"absolute top-0 opacity-50",style:cn(`left: ${w(f)+5}px`)},At(x+1),5)]))),128))],4)],512),[[nf,w(o)]]),w(o)?(E(),R("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[N(g)])):X("v-if",!0)],64)}}});const J_=ce(Z_,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),X_="/assets/logo-b72bde5d.png",Q_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},e1=Re({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const s=n;ee(ie);const o=lt(s,"modelValue",t);function l(){o.value=!1}return(r,a)=>(E(),ae(Cd,null,[w(o)?(E(),R("div",Q_,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),e("div",{class:He(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[Hn(r.$slots,"default")],2)])):X("v-if",!0)],1024))}}),n1=ce(e1,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/Modal.vue"]]),t1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},s1=["innerHTML"],o1=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:X_,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),p("dev ")])])],-1),l1=Re({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const s=n;ee(ie);const o=lt(s,"modelValue",t),l=$(()=>typeof Oe.info=="string");return(r,a)=>(E(),ae(n1,{modelValue:w(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Pe(o)?o.value=i:null),class:"px-6 py-4"},{default:W(()=>[e("div",t1,[w(l)?(E(),R("div",{key:0,class:"mb-4",innerHTML:w(Oe).info},null,8,s1)):X("v-if",!0),o1])]),_:1},8,["modelValue"]))}});const r1=ce(l1,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Ct(n){return Array.isArray?Array.isArray(n):Qf(n)==="[object Array]"}const a1=1/0;function i1(n){if(typeof n=="string")return n;let t=n+"";return t=="0"&&1/n==-a1?"-0":t}function c1(n){return n==null?"":i1(n)}function at(n){return typeof n=="string"}function Jf(n){return typeof n=="number"}function p1(n){return n===!0||n===!1||u1(n)&&Qf(n)=="[object Boolean]"}function Xf(n){return typeof n=="object"}function u1(n){return Xf(n)&&n!==null}function $n(n){return n!=null}function na(n){return!n.trim().length}function Qf(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const d1="Incorrect 'index' type",f1=n=>`Invalid value for key ${n}`,F1=n=>`Pattern length exceeds max of ${n}.`,m1=n=>`Missing ${n} property in key`,y1=n=>`Property 'weight' in key '${n}' must be a positive integer`,Xp=Object.prototype.hasOwnProperty;class h1{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(o=>{let l=eF(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function eF(n){let t=null,s=null,o=null,l=1,r=null;if(at(n)||Ct(n))o=n,t=Qp(n),s=Ya(n);else{if(!Xp.call(n,"name"))throw new Error(m1("name"));const a=n.name;if(o=a,Xp.call(n,"weight")&&(l=n.weight,l<=0))throw new Error(y1(a));t=Qp(a),s=Ya(a),r=n.getFn}return{path:t,id:s,weight:l,src:o,getFn:r}}function Qp(n){return Ct(n)?n:n.split(".")}function Ya(n){return Ct(n)?n.join("."):n}function g1(n,t){let s=[],o=!1;const l=(r,a,i)=>{if($n(r))if(!a[i])s.push(r);else{let c=a[i];const u=r[c];if(!$n(u))return;if(i===a.length-1&&(at(u)||Jf(u)||p1(u)))s.push(c1(u));else if(Ct(u)){o=!0;for(let d=0,f=u.length;d<f;d+=1)l(u[d],a,i+1)}else a.length&&l(u,a,i+1)}};return l(n,at(t)?t.split("."):t,0),o?s:s[0]}const v1={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_1={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,t)=>n.score===t.score?n.idx<t.idx?-1:1:n.score<t.score?-1:1},b1={location:0,threshold:.6,distance:100},A1={useExtendedSearch:!1,getFn:g1,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var de={..._1,...v1,...b1,...A1};const w1=/[^ ]+/g;function x1(n=1,t=3){const s=new Map,o=Math.pow(10,t);return{get(l){const r=l.match(w1).length;if(s.has(r))return s.get(r);const a=1/Math.pow(r,.5*n),i=parseFloat(Math.round(a*o)/o);return s.set(r,i),i},clear(){s.clear()}}}class Yi{constructor({getFn:t=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){this.norm=x1(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,at(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();at(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!$n(t)||na(t))return;let o={v:t,i:s,n:this.norm.get(t)};this.records.push(o)}_addObject(t,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(t):this.getFn(t,l.path);if($n(a)){if(Ct(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if($n(d))if(at(d)&&!na(d)){let f={v:d,i:u,n:this.norm.get(d)};i.push(f)}else Ct(d)&&d.forEach((f,F)=>{c.push({nestedArrIndex:F,value:f})})}o.$[r]=i}else if(at(a)&&!na(a)){let i={v:a,n:this.norm.get(a)};o.$[r]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function nF(n,t,{getFn:s=de.getFn,fieldNormWeight:o=de.fieldNormWeight}={}){const l=new Yi({getFn:s,fieldNormWeight:o});return l.setKeys(n.map(eF)),l.setSources(t),l.create(),l}function C1(n,{getFn:t=de.getFn,fieldNormWeight:s=de.fieldNormWeight}={}){const{keys:o,records:l}=n,r=new Yi({getFn:t,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function Cl(n,{errors:t=0,currentLocation:s=0,expectedLocation:o=0,distance:l=de.distance,ignoreLocation:r=de.ignoreLocation}={}){const a=t/n.length;if(r)return a;const i=Math.abs(o-s);return l?a+i/l:i?1:a}function E1(n=[],t=de.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let a=n.length;r<a;r+=1){let i=n[r];i&&o===-1?o=r:!i&&o!==-1&&(l=r-1,l-o+1>=t&&s.push([o,l]),o=-1)}return n[r-1]&&r-o>=t&&s.push([o,r-1]),s}const ps=32;function k1(n,t,s,{location:o=de.location,distance:l=de.distance,threshold:r=de.threshold,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,includeMatches:c=de.includeMatches,ignoreLocation:u=de.ignoreLocation}={}){if(t.length>ps)throw new Error(F1(ps));const d=t.length,f=n.length,F=Math.max(0,Math.min(o,f));let y=r,m=F;const g=i>1||c,v=g?Array(f):[];let x;for(;(x=n.indexOf(t,m))>-1;){let L=Cl(t,{currentLocation:x,expectedLocation:F,distance:l,ignoreLocation:u});if(y=Math.min(L,y),m=x+d,g){let S=0;for(;S<d;)v[x+S]=1,S+=1}}m=-1;let A=[],_=1,C=d+f;const O=1<<d-1;for(let L=0;L<d;L+=1){let S=0,D=C;for(;S<D;)Cl(t,{errors:L,currentLocation:F+D,expectedLocation:F,distance:l,ignoreLocation:u})<=y?S=D:C=D,D=Math.floor((C-S)/2+S);C=D;let Z=Math.max(1,F-D+1),re=a?f:Math.min(F+D,f)+d,U=Array(re+2);U[re+1]=(1<<L)-1;for(let ye=re;ye>=Z;ye-=1){let be=ye-1,Te=s[n.charAt(be)];if(g&&(v[be]=+!!Te),U[ye]=(U[ye+1]<<1|1)&Te,L&&(U[ye]|=(A[ye+1]|A[ye])<<1|1|A[ye+1]),U[ye]&O&&(_=Cl(t,{errors:L,currentLocation:be,expectedLocation:F,distance:l,ignoreLocation:u}),_<=y)){if(y=_,m=be,m<=F)break;Z=Math.max(1,2*F-m)}}if(Cl(t,{errors:L+1,currentLocation:F,expectedLocation:F,distance:l,ignoreLocation:u})>y)break;A=U}const T={isMatch:m>=0,score:Math.max(.001,_)};if(g){const L=E1(v,i);L.length?c&&(T.indices=L):T.isMatch=!1}return T}function S1(n){let t={};for(let s=0,o=n.length;s<o;s+=1){const l=n.charAt(s);t[l]=(t[l]||0)|1<<o-s-1}return t}class tF{constructor(t,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(F,y)=>{this.chunks.push({pattern:F,alphabet:S1(F),startIndex:y})},f=this.pattern.length;if(f>ps){let F=0;const y=f%ps,m=f-y;for(;F<m;)d(this.pattern.substr(F,ps),F),F+=ps;if(y){const g=f-ps;d(this.pattern.substr(g),g)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,t.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],f=0,F=!1;this.chunks.forEach(({pattern:m,alphabet:g,startIndex:v})=>{const{isMatch:x,score:A,indices:_}=k1(t,m,g,{location:l+v,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});x&&(F=!0),f+=A,x&&_&&(d=[...d,..._])});let y={isMatch:F,score:F?f/this.chunks.length:1};return F&&o&&(y.indices=d),y}}class Jt{constructor(t){this.pattern=t}static isMultiMatch(t){return eu(t,this.multiRegex)}static isSingleMatch(t){return eu(t,this.singleRegex)}search(){}}function eu(n,t){const s=n.match(t);return s?s[1]:null}class O1 extends Jt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class $1 extends Jt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class P1 extends Jt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class T1 extends Jt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class M1 extends Jt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class B1 extends Jt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class sF extends Jt{constructor(t,{location:s=de.location,threshold:o=de.threshold,distance:l=de.distance,includeMatches:r=de.includeMatches,findAllMatches:a=de.findAllMatches,minMatchCharLength:i=de.minMatchCharLength,isCaseSensitive:c=de.isCaseSensitive,ignoreLocation:u=de.ignoreLocation}={}){super(t),this._bitapSearch=new tF(t,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class oF extends Jt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,o;const l=[],r=this.pattern.length;for(;(o=t.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Za=[O1,oF,P1,T1,B1,M1,$1,sF],nu=Za.length,R1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,I1="|";function j1(n,t={}){return n.split(I1).map(s=>{let o=s.trim().split(R1).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const i=o[r];let c=!1,u=-1;for(;!c&&++u<nu;){const d=Za[u];let f=d.isMultiMatch(i);f&&(l.push(new d(f,t)),c=!0)}if(!c)for(u=-1;++u<nu;){const d=Za[u];let f=d.isSingleMatch(i);if(f){l.push(new d(f,t));break}}}return l})}const L1=new Set([sF.type,oF.type]);class D1{constructor(t,{isCaseSensitive:s=de.isCaseSensitive,includeMatches:o=de.includeMatches,minMatchCharLength:l=de.minMatchCharLength,ignoreLocation:r=de.ignoreLocation,findAllMatches:a=de.findAllMatches,location:i=de.location,threshold:c=de.threshold,distance:u=de.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:i,threshold:c,distance:u},this.pattern=s?t:t.toLowerCase(),this.query=j1(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;t=l?t:t.toLowerCase();let r=0,a=[],i=0;for(let c=0,u=s.length;c<u;c+=1){const d=s[c];a.length=0,r=0;for(let f=0,F=d.length;f<F;f+=1){const y=d[f],{isMatch:m,indices:g,score:v}=y.search(t);if(m){if(r+=1,i+=v,o){const x=y.constructor.type;L1.has(x)?a=[...a,...g]:a.push(g)}}else{i=0,r=0,a.length=0;break}}if(r){let f={isMatch:!0,score:i/r};return o&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Ja=[];function N1(...n){Ja.push(...n)}function Xa(n,t){for(let s=0,o=Ja.length;s<o;s+=1){let l=Ja[s];if(l.condition(n,t))return new l(n,t)}return new tF(n,t)}const nr={AND:"$and",OR:"$or"},Qa={PATH:"$path",PATTERN:"$val"},ei=n=>!!(n[nr.AND]||n[nr.OR]),H1=n=>!!n[Qa.PATH],q1=n=>!Ct(n)&&Xf(n)&&!ei(n),tu=n=>({[nr.AND]:Object.keys(n).map(t=>({[t]:n[t]}))});function lF(n,t,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const a=H1(l);if(!a&&r.length>1&&!ei(l))return o(tu(l));if(q1(l)){const c=a?l[Qa.PATH]:r[0],u=a?l[Qa.PATTERN]:l[c];if(!at(u))throw new Error(f1(c));const d={keyId:Ya(c),pattern:u};return s&&(d.searcher=Xa(u,t)),d}let i={children:[],operator:r[0]};return r.forEach(c=>{const u=l[c];Ct(u)&&u.forEach(d=>{i.children.push(o(d))})}),i};return ei(n)||(n=tu(n)),o(n)}function z1(n,{ignoreFieldNorm:t=de.ignoreFieldNorm}){n.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:a})=>{const i=l?l.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(t?1:r))}),s.score=o})}function U1(n,t){const s=n.matches;t.matches=[],$n(s)&&s.forEach(o=>{if(!$n(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function V1(n,t){t.score=n.score}function W1(n,t,{includeMatches:s=de.includeMatches,includeScore:o=de.includeScore}={}){const l=[];return s&&l.push(U1),o&&l.push(V1),n.map(r=>{const{idx:a}=r,i={item:t[a],refIndex:a};return l.length&&l.forEach(c=>{c(r,i)}),i})}class Qs{constructor(t,s={},o){this.options={...de,...s},this.options.useExtendedSearch,this._keyStore=new h1(this.options.keys),this.setCollection(t,o)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof Yi))throw new Error(d1);this._myIndex=s||nF(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){$n(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];t(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let c=at(t)?at(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return z1(c,{ignoreFieldNorm:i}),r&&c.sort(a),Jf(s)&&s>-1&&(c=c.slice(0,s)),W1(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(t){const s=Xa(t,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:i})=>{if(!$n(r))return;const{isMatch:c,score:u,indices:d}=s.searchIn(r);c&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:i,indices:d}]})}),l}_searchLogical(t){const s=lF(t,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:f,searcher:F}=i,y=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:F});return y&&y.length?[{idx:u,item:c,matches:y}]:[]}const d=[];for(let f=0,F=i.children.length;f<F;f+=1){const y=i.children[f],m=o(y,c,u);if(m.length)d.push(...m);else if(i.operator===nr.AND)return[]}return d},l=this._myIndex.records,r={},a=[];return l.forEach(({$:i,i:c})=>{if($n(i)){let u=o(s,i,c);u.length&&(r[c]||(r[c]={idx:c,item:i,matches:[]},a.push(r[c])),u.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),a}_searchObjectList(t){const s=Xa(t,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i})=>{if(!$n(a))return;let c=[];o.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:s}))}),c.length&&r.push({idx:i,item:a,matches:c})}),r}_findMatches({key:t,value:s,searcher:o}){if(!$n(s))return[];let l=[];if(Ct(s))s.forEach(({v:r,i:a,n:i})=>{if(!$n(r))return;const{isMatch:c,score:u,indices:d}=o.searchIn(r);c&&l.push({score:u,key:t,value:r,idx:a,norm:i,indices:d})});else{const{v:r,n:a}=s,{isMatch:i,score:c,indices:u}=o.searchIn(r);i&&l.push({score:c,key:t,value:r,norm:a,indices:u})}return l}}Qs.version="6.6.2";Qs.createIndex=nF;Qs.parseIndex=C1;Qs.config=de;Qs.parseQuery=lF;N1(D1);const K1={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},G1=["value","disabled","onKeydown"],Y1=["border","onClick"],Z1={"w-4":"","text-right":"",op50:"","text-sm":""},J1=Re({__name:"Goto",setup(n){ee(ie);const t=V(),s=V(),o=V(),l=V(),r=V(""),a=V(0);function i(_){return _!=null}const c=$(()=>new Qs(Ye.map(_=>{var C;return(C=_.meta)==null?void 0:C.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=$(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=$(()=>c.value.search(u.value).map(_=>_.item)),f=$(()=>!!d.value.length);function F(){if(f.value){const _=d.value.at(a.value||0);_&&Zs(_.no)}y()}function y(){r.value="",Ds.value=!1}function m(_){_.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),v()}function g(_){_.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),v()}function v(){var C;const _=(C=l.value)==null?void 0:C[a.value];_&&o.value&&(_.offsetTop+_.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-o.value.offsetHeight+1}):_.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function x(_){a.value=0,r.value=_.target.value}function A(_){Zs(_),y()}return ge(Ds,async _=>{var C;_?(r.value="",a.value=0,setTimeout(()=>{var O;return(O=s.value)==null?void 0:O.focus()},0)):(C=s.value)==null||C.blur()}),ge(zt,()=>{var _;(_=t.value)!=null&&_.contains(zt.value)||y()}),(_,C)=>(E(),R("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:He(["fixed right-5 transition-all",w(Ds)?"top-5":"-top-20"])},[e("div",K1,[e("input",{ref_key:"input",ref:s,value:r.value,type:"text",disabled:!w(Ds),class:He(["outline-none bg-transparent",{"text-red-400":!w(f)&&r.value}]),placeholder:"Goto...",onKeydown:[_l(F,["enter"]),_l(y,["escape"]),_l(m,["down"]),_l(g,["up"])],onInput:x},null,42,G1)]),w(d).length>0?(E(),R("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(E(!0),R($e,null,Js(w(d),(O,T)=>(E(),R("li",{ref_for:!0,ref_key:"items",ref:l,key:O.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:T===0?"":"t main",class:He(a.value===T?"bg-active op100":"op80"),onClick:Eg(L=>A(O.no),["stop"])},[e("div",Z1,At(O.no),1),p(" "+At(O.title),1)],10,Y1))),128))],512)):X("v-if",!0)],2))}});const X1=ce(J1,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/Goto.vue"]]),Q1=Re({__name:"Controls",setup(n){ee(ie);const t=ct(),s=ct();return(o,l)=>(E(),R($e,null,[N(J_,{modelValue:w(fn),"onUpdate:modelValue":l[0]||(l[0]=r=>Pe(fn)?fn.value=r:null)},null,8,["modelValue"]),N(X1),w(t)?(E(),ae(w(t),{key:0})):X("v-if",!0),w(s)?(E(),ae(w(s),{key:1,modelValue:w(Xr),"onUpdate:modelValue":l[1]||(l[1]=r=>Pe(Xr)?Xr.value=r:null)},null,8,["modelValue"])):X("v-if",!0),w(Oe).info?(E(),ae(r1,{key:2,modelValue:w(Oo),"onUpdate:modelValue":l[2]||(l[2]=r=>Pe(Oo)?Oo.value=r:null)},null,8,["modelValue"])):X("v-if",!0)],64))}}),eb=ce(Q1,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/Controls.vue"]]),nb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tb=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),sb=[tb];function ob(n,t){return E(),R("svg",nb,sb)}const lb={name:"carbon-settings-adjust",render:ob},rb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ab=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),ib=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),cb=[ab,ib];function pb(n,t){return E(),R("svg",rb,cb)}const ub={name:"carbon-information",render:pb},db={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fb=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Fb=[fb];function mb(n,t){return E(),R("svg",db,Fb)}const yb={name:"carbon-download",render:mb},hb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gb=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),vb=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),_b=[gb,vb];function bb(n,t){return E(),R("svg",hb,_b)}const Ab={name:"carbon-user-speaker",render:bb},wb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xb=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Cb=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Eb=[xb,Cb];function kb(n,t){return E(),R("svg",wb,Eb)}const Sb={name:"carbon-presentation-file",render:kb},Ob={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$b=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Pb=[$b];function Tb(n,t){return E(),R("svg",Ob,Pb)}const Mb={name:"carbon-pen",render:Tb},Bb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Rb=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Ib=[Rb];function jb(n,t){return E(),R("svg",Bb,Ib)}const Lb={name:"ph-cursor-duotone",render:jb},Db={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Nb=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Hb=[Nb];function qb(n,t){return E(),R("svg",Db,Hb)}const rF={name:"ph-cursor-fill",render:qb},zb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ub=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Vb=[Ub];function Wb(n,t){return E(),R("svg",zb,Vb)}const Kb={name:"carbon-sun",render:Wb},Gb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yb=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Zb=[Yb];function Jb(n,t){return E(),R("svg",Gb,Zb)}const Xb={name:"carbon-moon",render:Jb},Qb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eA=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),nA=[eA];function tA(n,t){return E(),R("svg",Qb,nA)}const sA={name:"carbon-apps",render:tA},oA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lA=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),rA=[lA];function aA(n,t){return E(),R("svg",oA,rA)}const iA={name:"carbon-arrow-right",render:aA},cA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pA=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),uA=[pA];function dA(n,t){return E(),R("svg",cA,uA)}const fA={name:"carbon-arrow-left",render:dA},FA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mA=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),yA=[mA];function hA(n,t){return E(),R("svg",FA,yA)}const gA={name:"carbon-maximize",render:hA},vA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_A=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),bA=[_A];function AA(n,t){return E(),R("svg",vA,bA)}const wA={name:"carbon-minimize",render:AA},xA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CA=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),EA=[CA];function kA(n,t){return E(),R("svg",xA,EA)}const SA={name:"carbon-checkmark",render:kA},OA={class:"select-list"},$A={class:"title"},PA={class:"items"},TA=["onClick"],MA=Re({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const s=n;ee(ie);const o=lt(s,"modelValue",t,{passive:!0});return(l,r)=>{const a=SA;return E(),R("div",OA,[e("div",$A,At(n.title),1),e("div",PA,[(E(!0),R($e,null,Js(n.items,i=>(E(),R("div",{key:i.value,class:He(["item",{active:w(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[N(a,{class:He(["text-green-500",{"opacity-0":w(o)!==i.value}])},null,8,["class"]),p(" "+At(i.display||i.value),1)],10,TA))),128))])])}}});const BA=ce(MA,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/SelectList.vue"]]),RA={class:"text-sm"},IA=Re({__name:"Settings",setup(n){ee(ie);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(E(),R("div",RA,[N(BA,{modelValue:w(Bl),"onUpdate:modelValue":o[0]||(o[0]=l=>Pe(Bl)?Bl.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),jA=ce(IA,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/Settings.vue"]]),LA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},DA=Re({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const s=n;ee(ie);const o=lt(s,"modelValue",t,{passive:!0}),l=V();return x8(l,()=>{o.value=!1}),(r,a)=>(E(),R("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:He({disabled:n.disabled}),onClick:a[0]||(a[0]=i=>o.value=!w(o))},[Hn(r.$slots,"button",{class:He({disabled:n.disabled})})],2),(E(),ae(Cd,null,[w(o)?(E(),R("div",LA,[Hn(r.$slots,"menu")])):X("v-if",!0)],1024))],512))}}),NA=ce(DA,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/MenuButton.vue"]]),HA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},qA={__name:"VerticalDivider",setup(n){return ee(ie),(t,s)=>(E(),R("div",HA))}},El=ce(qA,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),zA={render(){return[]}},UA={class:"slidev-icon-btn"},VA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},WA={class:"my-auto"},KA={class:"opacity-50"},GA=Re({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;ee(ie);const s=Ua.smaller("md"),{isFullscreen:o,toggle:l}=Hf,r=$(()=>ti.value?`?password=${ti.value}`:""),a=$(()=>`/presenter/${Ve.value}${r.value}`),i=$(()=>`/${Ve.value}${r.value}`),c=V();function u(){c.value&&zt.value&&c.value.contains(zt.value)&&zt.value.blur()}const d=$(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=ct(),F=ct();return qt(()=>import("./DrawingControls-7ca63d32.js"),[]).then(y=>F.value=y.default),(y,m)=>{const g=wA,v=gA,x=fA,A=iA,_=sA,C=Xb,O=Kb,T=rF,L=Lb,S=Mb,D=Sb,Z=No("RouterLink"),re=Ab,U=yb,_e=ub,ye=lb;return E(),R("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:He(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:u},[w(ht)?X("v-if",!0):(E(),R("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...be)=>w(l)&&w(l)(...be))},[w(o)?(E(),ae(g,{key:0})):(E(),ae(v,{key:1}))])),e("button",{class:He(["slidev-icon-btn",{disabled:!w(Ck)}]),onClick:m[1]||(m[1]=(...be)=>w(Vt)&&w(Vt)(...be))},[N(x)],2),e("button",{class:He(["slidev-icon-btn",{disabled:!w(xk)}]),title:"Next",onClick:m[2]||(m[2]=(...be)=>w(Ut)&&w(Ut)(...be))},[N(A)],2),w(ht)?X("v-if",!0):(E(),R("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=be=>w(qf)())},[N(_)])),w(Ga)?X("v-if",!0):(E(),R("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=be=>w(Kf)())},[w(Vi)?(E(),ae(C,{key:0})):(E(),ae(O,{key:1}))])),N(El),w(ht)?X("v-if",!0):(E(),R($e,{key:3},[!w(vn)&&!w(s)&&w(f)?(E(),R($e,{key:0},[N(w(f)),N(El)],64)):X("v-if",!0),w(vn)?(E(),R("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=be=>Qr.value=!w(Qr))},[w(Qr)?(E(),ae(T,{key:0})):(E(),ae(L,{key:1,class:"opacity-50"}))])):X("v-if",!0)],64)),(!w(Oe).drawings.presenterOnly||w(vn))&&!w(ht)?(E(),R($e,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=be=>rt.value=!w(rt))},[N(S),w(rt)?(E(),R("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:cn({background:w(fs).color})},null,4)):X("v-if",!0)]),N(El)],64)):X("v-if",!0),w(ht)?X("v-if",!0):(E(),R($e,{key:5},[w(vn)?(E(),ae(Z,{key:0,to:w(i),class:"slidev-icon-btn",title:"Play Mode"},{default:W(()=>[N(D)]),_:1},8,["to"])):X("v-if",!0),w(vk)?(E(),ae(Z,{key:1,to:w(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:W(()=>[N(re)]),_:1},8,["to"])):X("v-if",!0),X("v-if",!0)],64)),(E(),R($e,{key:6},[w(Oe).download?(E(),R("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...be)=>w(si)&&w(si)(...be))},[N(U)])):X("v-if",!0)],64)),!w(vn)&&w(Oe).info&&!w(ht)?(E(),R("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=be=>Oo.value=!w(Oo))},[N(_e)])):X("v-if",!0),!w(vn)&&!w(ht)?(E(),ae(NA,{key:8},{button:W(()=>[e("button",UA,[N(ye)])]),menu:W(()=>[N(jA)]),_:1})):X("v-if",!0),w(ht)?X("v-if",!0):(E(),ae(El,{key:9})),e("div",VA,[e("div",WA,[p(At(w(Ve))+" ",1),e("span",KA,"/ "+At(w(_k)),1)])]),N(w(zA))],34)],512)}}}),YA=ce(GA,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/NavControls.vue"]]),aF={render(){return[]}},iF={render(){return[]}},ZA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},JA=Re({__name:"PresenterMouse",setup(n){return ee(ie),(t,s)=>{const o=rF;return w(Gr).cursor?(E(),R("div",ZA,[N(o,{class:"absolute",style:cn({left:`${w(Gr).cursor.x}%`,top:`${w(Gr).cursor.y}%`})},null,8,["style"])])):X("v-if",!0)}}}),XA=ce(JA,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),QA=Re({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){ee(ie),ge(Fn,()=>{var o,l;(o=Fn.value)!=null&&o.meta&&Fn.value.meta.preload!==!1&&(Fn.value.meta.__preloaded=!0),(l=ta.value)!=null&&l.meta&&ta.value.meta.preload!==!1&&(ta.value.meta.__preloaded=!0)},{immediate:!0});const t=ct();qt(()=>import("./DrawingLayer-16a4de38.js"),[]).then(o=>t.value=o.default);const s=$(()=>Ye.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===Fn.value}));return(o,l)=>(E(),R($e,null,[X(" Global Bottom "),N(w(iF)),X(" Slides "),N(vg,we(w(Sk),{id:"slideshow",tag:"div"}),{default:W(()=>[(E(!0),R($e,null,Js(w(s),r=>{var a;return Ti((E(),ae(w(Gi),{key:r.path,is:r==null?void 0:r.component,clicks:r===w(Fn)?w(Dn):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:He(w(Ki)(r)),route:r,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[nf,r===w(Fn)]])}),128))]),_:1},16),X(" Global Top "),N(w(aF)),w(t)?(E(),ae(w(t),{key:0})):X("v-if",!0),w(vn)?X("v-if",!0):(E(),ae(XA,{key:1}))],64))}});const ew=ce(QA,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),nw=Re({__name:"PrintStyle",setup(n){ee(ie);function t(s,{slots:o}){if(o.default)return Tn("style",o.default())}return(s,o)=>(E(),ae(t,null,{default:W(()=>[p(" @page { size: "+At(w(Ht))+"px "+At(w(Di))+"px; margin: 0px; } ",1)]),_:1}))}}),cF=ce(nw,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),tw=Re({__name:"Play",setup(n){ee(ie),L_();const t=V();function s(r){var a;Hp.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ut():Vt())}Ok(t);const o=$(()=>G0.value||Hp.value);ct();const l=ct();return qt(()=>import("./DrawingControls-7ca63d32.js"),[]).then(r=>l.value=r.default),(r,a)=>(E(),R($e,null,[w(Ys)?(E(),ae(cF,{key:0})):X("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:cn(w(Ni))},[N(Yf,{class:"w-full h-full",style:cn({background:"var(--slidev-slide-container-background, black)"}),width:w(Ys)?w(bs).width.value:void 0,scale:w(Bl),onPointerdown:s},{default:W(()=>[N(ew,{context:"slide"})]),controls:W(()=>[e("div",{class:He(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(o)?"opacity-100 right-0":"opacity-0 p-2",w(Ko)?"pointer-events-none":""]])},[N(YA,{class:"m-auto",persist:w(o)},null,8,["persist"])],2),!w(Oe).drawings.presenterOnly&&!w(ht)&&w(l)?(E(),ae(w(l),{key:0,class:"ml-0"})):X("v-if",!0)]),_:1},8,["style","width","scale"]),X("v-if",!0)],4),N(eb)],64))}}),sw=ce(tw,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function pF(n){return typeof n>"u"||n===null}function ow(n){return typeof n=="object"&&n!==null}function lw(n){return Array.isArray(n)?n:pF(n)?[]:[n]}function rw(n,t){var s,o,l,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)l=r[s],n[l]=t[l];return n}function aw(n,t){var s="",o;for(o=0;o<t;o+=1)s+=n;return s}function iw(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var cw=pF,pw=ow,uw=lw,dw=aw,fw=iw,Fw=rw,Zi={isNothing:cw,isObject:pw,toArray:uw,repeat:dw,isNegativeZero:fw,extend:Fw};function uF(n,t){var s="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(s+='in "'+n.mark.name+'" '),s+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(s+=`

`+n.mark.snippet),o+" "+s):o}function Yo(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=uF(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Yo.prototype=Object.create(Error.prototype);Yo.prototype.constructor=Yo;Yo.prototype.toString=function(t){return this.name+": "+uF(this,t)};var us=Yo,mw=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],yw=["scalar","sequence","mapping"];function hw(n){var t={};return n!==null&&Object.keys(n).forEach(function(s){n[s].forEach(function(o){t[String(o)]=s})}),t}function gw(n,t){if(t=t||{},Object.keys(t).forEach(function(s){if(mw.indexOf(s)===-1)throw new us('Unknown option "'+s+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=hw(t.styleAliases||null),yw.indexOf(this.kind)===-1)throw new us('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var pn=gw;function su(n,t){var s=[];return n[t].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function vw(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(l){l.multi?(n.multi[l.kind].push(l),n.multi.fallback.push(l)):n[l.kind][l.tag]=n.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return n}function ni(n){return this.extend(n)}ni.prototype.extend=function(t){var s=[],o=[];if(t instanceof pn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new us("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof pn))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new us("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new us("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof pn))throw new us("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(ni.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=su(l,"implicit"),l.compiledExplicit=su(l,"explicit"),l.compiledTypeMap=vw(l.compiledImplicit,l.compiledExplicit),l};var _w=ni,bw=new pn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Aw=new pn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),ww=new pn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),xw=new _w({explicit:[bw,Aw,ww]});function Cw(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function Ew(){return null}function kw(n){return n===null}var Sw=new pn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Cw,construct:Ew,predicate:kw,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ow(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function $w(n){return n==="true"||n==="True"||n==="TRUE"}function Pw(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var Tw=new pn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ow,construct:$w,predicate:Pw,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Mw(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function Bw(n){return 48<=n&&n<=55}function Rw(n){return 48<=n&&n<=57}function Iw(n){if(n===null)return!1;var t=n.length,s=0,o=!1,l;if(!t)return!1;if(l=n[s],(l==="-"||l==="+")&&(l=n[++s]),l==="0"){if(s+1===t)return!0;if(l=n[++s],l==="b"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(!Mw(n.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(!Bw(n.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=n[s],l!=="_"){if(!Rw(n.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function jw(n){var t=n,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Lw(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Zi.isNegativeZero(n)}var Dw=new pn("tag:yaml.org,2002:int",{kind:"scalar",resolve:Iw,construct:jw,predicate:Lw,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Nw=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Hw(n){return!(n===null||!Nw.test(n)||n[n.length-1]==="_")}function qw(n){var t,s;return t=n.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var zw=/^[-+]?[0-9]+e/;function Uw(n,t){var s;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Zi.isNegativeZero(n))return"-0.0";return s=n.toString(10),zw.test(s)?s.replace("e",".e"):s}function Vw(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Zi.isNegativeZero(n))}var Ww=new pn("tag:yaml.org,2002:float",{kind:"scalar",resolve:Hw,construct:qw,predicate:Vw,represent:Uw,defaultStyle:"lowercase"}),Kw=xw.extend({implicit:[Sw,Tw,Dw,Ww]}),Gw=Kw,dF=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fF=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Yw(n){return n===null?!1:dF.exec(n)!==null||fF.exec(n)!==null}function Zw(n){var t,s,o,l,r,a,i,c=0,u=null,d,f,F;if(t=dF.exec(n),t===null&&(t=fF.exec(n)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,o,l));if(r=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=+t[10],f=+(t[11]||0),u=(d*60+f)*6e4,t[9]==="-"&&(u=-u)),F=new Date(Date.UTC(s,o,l,r,a,i,c)),u&&F.setTime(F.getTime()-u),F}function Jw(n){return n.toISOString()}var Xw=new pn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Yw,construct:Zw,instanceOf:Date,represent:Jw});function Qw(n){return n==="<<"||n===null}var ex=new pn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Qw}),Ji=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function nx(n){if(n===null)return!1;var t,s,o=0,l=n.length,r=Ji;for(s=0;s<l;s++)if(t=r.indexOf(n.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function tx(n){var t,s,o=n.replace(/[\r\n=]/g,""),l=o.length,r=Ji,a=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function sx(n){var t="",s=0,o,l,r=n.length,a=Ji;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]),s=(s<<8)+n[o];return l=r%3,l===0?(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]):l===2?(t+=a[s>>10&63],t+=a[s>>4&63],t+=a[s<<2&63],t+=a[64]):l===1&&(t+=a[s>>2&63],t+=a[s<<4&63],t+=a[64],t+=a[64]),t}function ox(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var lx=new pn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:nx,construct:tx,predicate:ox,represent:sx}),rx=Object.prototype.hasOwnProperty,ax=Object.prototype.toString;function ix(n){if(n===null)return!0;var t=[],s,o,l,r,a,i=n;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,ax.call(l)!=="[object Object]")return!1;for(r in l)if(rx.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function cx(n){return n!==null?n:[]}var px=new pn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:ix,construct:cx}),ux=Object.prototype.toString;function dx(n){if(n===null)return!0;var t,s,o,l,r,a=n;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1){if(o=a[t],ux.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function fx(n){if(n===null)return[];var t,s,o,l,r,a=n;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var Fx=new pn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:dx,construct:fx}),mx=Object.prototype.hasOwnProperty;function yx(n){if(n===null)return!0;var t,s=n;for(t in s)if(mx.call(s,t)&&s[t]!==null)return!1;return!0}function hx(n){return n!==null?n:{}}var gx=new pn("tag:yaml.org,2002:set",{kind:"mapping",resolve:yx,construct:hx});Gw.extend({implicit:[Xw,ex],explicit:[lx,px,Fx,gx]});function ou(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var vx=new Array(256),_x=new Array(256);for(var Rs=0;Rs<256;Rs++)vx[Rs]=ou(Rs)?1:0,_x[Rs]=ou(Rs);function bx(n){return Array.from(new Set(n))}function lu(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function FF(n,t){if(!t||t==="all"||t==="*")return lu(1,n+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...lu(+l,r?+r+1:n+1))}return bx(s).filter(o=>o<=n).sort((o,l)=>o-l)}function mF(n){const t=$(()=>n.value.path),s=$(()=>Ye.length-1),o=$(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=$(()=>$r(o.value)),r=$(()=>Ye.find(F=>F.path===`${o.value}`)),a=$(()=>{var F,y,m;return(m=(y=(F=r.value)==null?void 0:F.meta)==null?void 0:y.slide)==null?void 0:m.id}),i=$(()=>{var F,y;return((y=(F=r.value)==null?void 0:F.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=$(()=>Ye.find(F=>F.path===`${Math.min(Ye.length,o.value+1)}`)),u=$(()=>Ye.filter(F=>{var y,m;return(m=(y=F.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((F,y)=>(Qi(F,y),F),[])),d=$(()=>ec(u.value,r.value)),f=$(()=>nc(d.value));return{route:n,path:t,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f,downloadPDF:si,next:Ut,nextSlide:Zo,openInEditor:$k,prev:Vt,prevSlide:Jo}}function yF(n,t,s){const o=V(0);an(()=>{bn.afterEach(async()=>{await an(),o.value+=1})});const l=$(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=$(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=$(()=>s.value<Ye.length-1||n.value<r.value),i=$(()=>s.value>1||n.value>0);return{clicks:n,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const Ax=["id"],wx=Re({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const s=n,o=lt(s,"clicksElements",t),l=$(()=>({height:`${Di}px`,width:`${Ht}px`})),r=ct();qt(()=>Promise.resolve().then(()=>K_),void 0).then(u=>r.value=u.default);const a=$(()=>s.clicks),i=yF(a,s.nav.currentRoute,s.nav.currentPage),c=$(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return On(ie,qe({nav:{...s.nav,...i},configs:Oe,themeConfigs:$(()=>Oe.themeConfig)})),(u,d)=>{var f;return E(),R("div",{id:w(c),class:"print-slide-container",style:cn(w(l))},[N(w(iF)),N(w(Gi),{is:(f=n.route)==null?void 0:f.component,"clicks-elements":w(o),"onUpdate:clicksElements":d[0]||(d[0]=F=>Pe(o)?o.value=F:null),clicks:w(a),"clicks-disabled":!1,class:He(w(Ki)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),w(r)?(E(),ae(w(r),{key:0,page:+n.route.path},null,8,["page"])):X("v-if",!0),N(w(aF))],12,Ax)}}}),ru=ce(wx,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),xx=Re({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var r;const t=n;ee(ie);const s=V(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=$(()=>t.route),l=mF(o);return(a,i)=>(E(),R($e,null,[N(ru,{"clicks-elements":s.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>s.value=c),clicks:0,nav:w(l),route:w(o)},null,8,["clicks-elements","nav","route"]),w($o)?X("v-if",!0):(E(!0),R($e,{key:0},Js(s.value.length,c=>(E(),ae(ru,{key:c,clicks:c,nav:w(l),route:w(o)},null,8,["clicks","nav","route"]))),128))],64))}}),Cx=ce(xx,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Ex={id:"print-content"},kx=Re({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;ee(ie);const s=$(()=>t.width),o=$(()=>t.width/Nt),l=$(()=>s.value/o.value),r=$(()=>l.value<Nt?s.value/Ht:o.value*Nt/Ht);let a=Ye.slice(0,-1);qn.value.query.range&&(a=FF(a.length,qn.value.query.range).map(u=>a[u-1]));const i=$(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return On(uf,r),(c,u)=>(E(),R("div",{id:"print-container",class:He(w(i))},[e("div",Ex,[(E(!0),R($e,null,Js(w(a),d=>(E(),ae(Cx,{key:d.path,route:d},null,8,["route"]))),128))]),Hn(c.$slots,"controls")],2))}});const Sx=ce(kx,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Ox=Re({__name:"Print",setup(n){return ee(ie),Es(()=>{Ys?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(E(),R($e,null,[w(Ys)?(E(),ae(cF,{key:0})):X("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:cn(w(Ni))},[N(Sx,{class:"w-full h-full",style:cn({background:"var(--slidev-slide-container-background, black)"}),width:w(bs).width.value},null,8,["style","width"])],4)],64))}});const $x=ce(Ox,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/internals/Print.vue"]]);const Px={class:"slidev-layout end"},Tx={__name:"end",setup(n){return ee(ie),(t,s)=>(E(),R("div",Px," END "))}},Mx=ce(Tx,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/layouts/end.vue"]]),Bx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rx=e("path",{fill:"currentColor",d:"M13.5 16h4.9L16 10.8L13.5 16z"},null,-1),Ix=e("path",{fill:"currentColor",d:"M16 3L3 7.6l2.7 15.8L16 29l10.3-5.6L29 7.6L16 3zm5.1 18.6l-1.5-3.2h-7.1L11 21.6H8.6L16 5.3l7.4 16.2h-2.3z"},null,-1),jx=[Rx,Ix];function Lx(n,t){return E(),R("svg",Bx,jx)}const Dx={name:"carbon-logo-angular",render:Lx},Nx={class:"slidev-layout cover"},Hx={class:"my-auto w-full"},qx={__name:"cover",setup(n){return ee(ie),(t,s)=>(E(),R("div",Nx,[e("div",Hx,[Hn(t.$slots,"default")])]))}},zx=ce(qx,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/slidev-theme-dracula/layouts/cover.vue"]]),Ux=e("h3",null,"Conceitos básicos",-1),Vx={__name:"1",setup(n){const t={theme:"dracula",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Apresentacao de conceitos basicos do angular
`,drawings:{persist:!1},colorSchema:"dark",transition:"slide-left",css:"unocss",fonts:{mono:"Fira Code"}};return ee(ie),(s,o)=>{const l=Dx;return E(),ae(zx,Ke(We(t)),{default:W(()=>[e("h1",null,[N(l,{color:"red"}),p(" Angular "),N(l,{color:"red"})]),Ux]),_:1},16)}}},Wx=ce(Vx,[["__file","/@slidev/slides/1.md"]]),Kx={class:"slidev-layout default"},Gx={__name:"default",setup(n){return ee(ie),(t,s)=>(E(),R("div",Kx,[Hn(t.$slots,"default")]))}},eo=ce(Gx,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/layouts/default.vue"]]);const wr=n=>(en("data-v-ae5e7f61"),n=n(),nn(),n),Yx=wr(()=>e("h1",null,[p(" Fundamentos do "),e("span",{class:"angular-name"},"Angular")],-1)),Zx=wr(()=>e("p",null,"O Angular é um framework de componentização de interfaces, similar ao React e Vue, que permite a arquitetura escalável de páginas web.",-1)),Jx=wr(()=>e("br",null,null,-1)),Xx=wr(()=>e("ul",null,[e("li",null,[p("Possui cinco pilares principais: "),e("span",{class:"components"},"componentes"),p(", "),e("span",{class:"directives"},"diretivas"),p(", "),e("span",{class:"pipes"},"pipes"),p(", "),e("span",{class:"services"},"serviços"),p(" e "),e("span",{class:"modules"},"módulos.")]),e("li",null,"Uso do framework RxJS para implementação de reatividade e gerenciamento de estados"),e("li",null,"Uníco framework de frontend que emprega container de injeção de dependências")],-1)),Qx={__name:"2",setup(n){const t={};return ee(ie),(s,o)=>(E(),ae(eo,Ke(We(t)),{default:W(()=>[Yx,Zx,Jx,Xx,X(`
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
`)]),_:1},16))}},eC=ce(Qx,[["__scopeId","data-v-ae5e7f61"],["__file","/@slidev/slides/2.md"]]),nC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},tC=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),sC=[tC];function oC(n,t){return E(),R("svg",nC,sC)}const lC={name:"ph-clipboard",render:oC},rC={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},aC=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),iC=[aC];function cC(n,t){return E(),R("svg",rC,iC)}const pC={name:"ph-check-circle",render:cC},uC=["title"],dC=Re({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;ee(ie);const s=ee(Co),o=ee(cs),l=ee(Eo);function r(f=5){const F=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let g=0;g<f;g++)F.push(y.charAt(Math.floor(Math.random()*m)));return F.join("")}const a=V(),i=Rn();ks(()=>{const f=t.at==null?o==null?void 0:o.value.length:t.at,F=$(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),t.ranges.length-1)),y=$(()=>t.ranges[F.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),g=Tv(t.ranges.length-1).map(v=>m+v);o!=null&&o.value&&(o.value.push(...g),gr(()=>g.forEach(v=>Ma(o.value,v)),i))}Es(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const v of g){const x=Array.from(v.querySelectorAll(".line")),A=FF(x.length,y.value);if(x.forEach((_,C)=>{const O=A.includes(C+1);_.classList.toggle(rs,!0),_.classList.toggle("highlighted",O),_.classList.toggle("dishonored",!O)}),t.maxHeight){const _=Array.from(v.querySelectorAll(".line.highlighted"));_.reduce((O,T)=>T.offsetHeight+O,0)>a.value.offsetHeight?_[0].scrollIntoView({behavior:"smooth",block:"start"}):_.length>0&&_[Math.round((_.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=B8();function d(){var F,y;const f=(y=(F=a.value)==null?void 0:F.querySelector(".slidev-code"))==null?void 0:y.textContent;f&&u(f)}return(f,F)=>{const y=pC,m=lC;return E(),R("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:cn({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Hn(f.$slots,"default"),w(Oe).codeCopy?(E(),R("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(c)?"Copied":"Copy",onClick:F[0]||(F[0]=g=>d())},[w(c)?(E(),ae(y,{key:0,class:"p-2 w-8 h-8"})):(E(),ae(m,{key:1,class:"p-2 w-8 h-8"}))],8,uC)):X("v-if",!0)],4)}}}),wn=ce(dC,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),fC={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},FC=Re({__name:"two-cols",props:{class:{type:String}},setup(n){const t=n;return ee(ie),(s,o)=>(E(),R("div",fC,[e("div",{class:He(["col-left",t.class])},[Hn(s.$slots,"default")],2),e("div",{class:He(["col-right",t.class])},[Hn(s.$slots,"right")],2)]))}}),Un=ce(FC,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/layouts/two-cols.vue"]]);const sn=n=>(en("data-v-1475a574"),n=n(),nn(),n),mC=sn(()=>e("h1",null,"Componentes",-1)),yC=sn(()=>e("p",null,"Conceito fundamental do angular que permite o encapsulamento de seções de interface",-1)),hC=sn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  selector"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F1FA8C"}},"`app-login`"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  templateUrl"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login.component.html"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  styleUrls"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login.component.scss"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  providers"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," [],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"LoginComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Input"),e("span",{style:{color:"#F8F8F2"}},"() username"),e("span",{style:{color:"#FF79C6"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},"; ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Output"),e("span",{style:{color:"#F8F8F2"}},"() submit "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"EventEmitter"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"void"),e("span",{style:{color:"#F8F8F2"}},">()")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Two way binding")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Input"),e("span",{style:{color:"#F8F8F2"}},"() password"),e("span",{style:{color:"#FF79C6"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Output"),e("span",{style:{color:"#F8F8F2"}},"() passwordChange "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"EventEmitter"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},">()")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"onLogin"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".submit."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  selector"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F1FA8C"}},"`app-login`"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  templateUrl"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login.component.html"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  styleUrls"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login.component.scss"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  providers"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," [],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"LoginComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Input"),e("span",{style:{color:"#F8F8F2"}},"() username"),e("span",{style:{color:"#FF79C6"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},"; ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Output"),e("span",{style:{color:"#F8F8F2"}},"() submit "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"EventEmitter"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"void"),e("span",{style:{color:"#F8F8F2"}},">()")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Two way binding")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Input"),e("span",{style:{color:"#F8F8F2"}},"() password"),e("span",{style:{color:"#FF79C6"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Output"),e("span",{style:{color:"#F8F8F2"}},"() passwordChange "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"EventEmitter"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},">()")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"onLogin"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".submit."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),gC={class:"right-side"},vC={key:0},_C=sn(()=>e("h3",null,"Selector",-1)),bC=sn(()=>e("p",null,"Exemplo:",-1)),AC=sn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- app.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},"></"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- app.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},"></"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),wC={key:1},xC=sn(()=>e("h3",null,"Template",-1)),CC={key:2},EC=sn(()=>e("h3",null,"StyleUrls",-1)),kC=sn(()=>e("li",null,"O componente pode possuir multiplas definições estilos",-1)),SC=sn(()=>e("li",null,"Os estilos podem ser definidos em tempo de execução",-1)),OC={key:3},$C=sn(()=>e("h3",null,"Providers",-1)),PC={key:4},TC=sn(()=>e("h3",null,"Inputs / Outputs",-1)),MC=sn(()=>e("p",null,"Exemplo:",-1)),BC=sn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- app.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[username]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"'eduze'"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(password)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"(submit)"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"onSubmit()"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  >")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- app.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[username]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"'eduze'"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(password)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"(submit)"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"onSubmit()"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  >")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),RC={key:5},IC=sn(()=>e("h3",null,"Inputs / Outputs",-1)),jC=sn(()=>e("p",null,"Exemplo:",-1)),LC=sn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- app.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[username]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"'eduze'"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(password)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"(submit)"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"onSubmit()"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  >")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- app.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[username]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"'eduze'"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(password)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"(submit)"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"onSubmit()"),e("span",{style:{color:"#E9F284"}},'"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  >")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"app-login"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),DC={__name:"3",setup(n){const t={layout:"two-cols",srcSequence:"./pages/basics.md"},s=ee(ie);return(o,l)=>{const r=wn,a=No("tt");return E(),ae(Un,Ke(We(t)),{right:W(i=>[e("div",gC,[w(s).nav.clicks===1?(E(),R("div",vC,[_C,p(" O seletor identifica como o componente será referido por outros componentes. "),bC,N(r,we({},{ranges:[""]}),{default:W(()=>[AC]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===2?(E(),R("div",wC,[xC,p(" O template define o layout do componente em html ")])):X("v-if",!0),w(s).nav.clicks===3?(E(),R("div",CC,[EC,N(a,null,{default:W(()=>[p("styleUrls")]),_:1}),p(" define os arquivos de estilização do componente. "),e("ul",null,[e("li",null,[p("A estilização do componente possui escopo limitado ao componente em que foi declarada. (porém isso pode ser alterado por meio de "),N(a,null,{default:W(()=>[p("ViewEncapsulation.None")]),_:1}),p(")")]),kC,SC])])):X("v-if",!0),w(s).nav.clicks===4?(E(),R("div",OC,[$C,p(" Os componentes também fazem parte do sistema de injeção de depêndencias do Angular, podendo prover serviços. ")])):X("v-if",!0),w(s).nav.clicks===5?(E(),R("div",PC,[TC,p(" Os componentes podem se comunicar com outros componentes por meio de inputs e outputs. "),MC,N(r,we({},{ranges:[""]}),{default:W(()=>[BC]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===6?(E(),R("div",RC,[IC,p(" Os componentes podem se comunicar com outros componentes por meio de inputs e outputs "),jC,N(r,we({},{ranges:["5"]}),{default:W(()=>[LC]),_:1},16),e("p",null,[p("Os componentes possuem suporte para two way data binding utilizando sufixo "),N(a,null,{default:W(()=>[p("Change")]),_:1})])])):X("v-if",!0)])]),default:W(()=>[mC,yC,N(r,we({},{ranges:["all","2","3","4","5","8-17","11-13"]}),{default:W(()=>[hC]),_:1},16)]),_:1},16)}}},NC=ce(DC,[["__scopeId","data-v-1475a574"],["__file","/@slidev/slides/3.md"]]);const $s=n=>(en("data-v-7c118cf2"),n=n(),nn(),n),HC=$s(()=>e("h1",null,"Diretivas",-1)),qC=$s(()=>e("p",null,"As diretivas permitem ampliar a funcionalidade de seu elemento hospedeiro, permitindo alteração de suas propriedades a interceptação de eventos do DOM.",-1)),zC=$s(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Directive"),e("span",{style:{color:"#F8F8F2"}},"({ selector"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F1FA8C"}},"`[appHighlight]`"),e("span",{style:{color:"#F8F8F2"}}," })")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"HighlightDirective"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Input"),e("span",{style:{color:"#F8F8F2"}},"() color"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"yellow"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"ref"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"ElementRef"),e("span",{style:{color:"#F8F8F2"}},") {}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"HostListener"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"mouseenter"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#50FA7B"}},"onMouseEnter"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"highlight"),e("span",{style:{color:"#F8F8F2"}},"(color);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"HostListener"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"mouseleave"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#50FA7B"}},"onMouseLeave"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"highlight"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"highlight"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"color"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".ref.nativeElement.style.backgroundColor "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," color;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Directive"),e("span",{style:{color:"#F8F8F2"}},"({ selector"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F1FA8C"}},"`[appHighlight]`"),e("span",{style:{color:"#F8F8F2"}}," })")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"HighlightDirective"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"Input"),e("span",{style:{color:"#F8F8F2"}},"() color"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"yellow"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"ref"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"ElementRef"),e("span",{style:{color:"#F8F8F2"}},") {}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"HostListener"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"mouseenter"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#50FA7B"}},"onMouseEnter"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"highlight"),e("span",{style:{color:"#F8F8F2"}},"(color);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  @"),e("span",{style:{color:"#50FA7B"}},"HostListener"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"mouseleave"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#50FA7B"}},"onMouseLeave"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"highlight"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"highlight"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"color"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".ref.nativeElement.style.backgroundColor "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," color;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),UC={class:"right-side"},VC={key:0},WC=$s(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"appHighlight"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Este texto será destacado na entrada do mouse")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"appHighlight"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Este texto será destacado na entrada do mouse")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),KC=$s(()=>e("ul",null,[e("li",null,"As diretivas acessam o elemento hospedeiro por injeção de depêndencias."),e("li",null,"é possível acessar também serviços do container de injeção de depências.")],-1)),GC={key:1},YC=$s(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"appHighlight"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[color]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"'blue'"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Este texto será destacado na entrada do mouse")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"appHighlight"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[color]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"'blue'"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Este texto será destacado na entrada do mouse")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),ZC=$s(()=>e("div",{class:"directive-infos"}," As diretivas também podem possuir inputs e outputs para configuração ou comunicação com outros componentes. ",-1)),JC={__name:"4",setup(n){const t={layout:"two-cols",srcSequence:"./pages/basics.md"},s=ee(ie);return(o,l)=>{const r=wn;return E(),ae(Un,Ke(We(t)),{right:W(a=>[e("div",UC,[w(s).nav.clicks===1?(E(),R("div",VC,[p(" Exemplo: "),N(r,we({},{ranges:[""]}),{default:W(()=>[WC]),_:1},16),KC])):X("v-if",!0),w(s).nav.clicks===2?(E(),R("div",GC,[p(" Exemplo: "),N(r,we({},{ranges:[""]}),{default:W(()=>[YC]),_:1},16),ZC])):X("v-if",!0)]),X(" right-side ")]),default:W(()=>[HC,qC,N(r,we({},{ranges:["all","4-11","3"]}),{default:W(()=>[zC]),_:1},16)]),_:1},16)}}},XC=ce(JC,[["__scopeId","data-v-7c118cf2"],["__file","/@slidev/slides/4.md"]]);const xr=n=>(en("data-v-90fd6163"),n=n(),nn(),n),QC=xr(()=>e("h1",null,"Pipes",-1)),e9={class:"left-side"},n9=xr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Pipe"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  name"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"uppercase"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  standalone"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"true"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"UpperCasePipe"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"implements"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"PipeTransform"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"transform"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#FF79C6"}},"|"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"null"),e("span",{style:{color:"#FF79C6"}},"|"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"undefined"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#FF79C6"}},"|"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"null"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," (value "),e("span",{style:{color:"#FF79C6"}},"=="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#FF79C6"}},"typeof"),e("span",{style:{color:"#F8F8F2"}}," value "),e("span",{style:{color:"#FF79C6"}},"!=="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"string"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      "),e("span",{style:{color:"#FF79C6"}},"throw"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"invalidPipeArgumentError"),e("span",{style:{color:"#F8F8F2"}},"(value);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," value."),e("span",{style:{color:"#50FA7B"}},"toUpperCase"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Pipe"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  name"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"uppercase"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  standalone"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"true"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"UpperCasePipe"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"implements"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"PipeTransform"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"transform"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#FF79C6"}},"|"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"null"),e("span",{style:{color:"#FF79C6"}},"|"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"undefined"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#FF79C6"}},"|"),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"null"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," (value "),e("span",{style:{color:"#FF79C6"}},"=="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#FF79C6"}},"typeof"),e("span",{style:{color:"#F8F8F2"}}," value "),e("span",{style:{color:"#FF79C6"}},"!=="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"string"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      "),e("span",{style:{color:"#FF79C6"}},"throw"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"invalidPipeArgumentError"),e("span",{style:{color:"#F8F8F2"}},"(value);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," value."),e("span",{style:{color:"#50FA7B"}},"toUpperCase"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),t9={class:"left-side"},s9=xr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},"> {{ name | uppercase }}</"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},"> {{ name | uppercase }}</"),e("span",{style:{color:"#FF79C6"}},"p"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),o9=xr(()=>e("p",null,"As pipes podem receber parâmetros que são passados como argumentos para a função transform.",-1)),l9={__name:"5",setup(n){const t={layout:"two-cols",srcSequence:"./pages/basics.md"};return ee(ie),(s,o)=>{const l=wn;return E(),ae(Un,Ke(We(t)),{right:W(r=>[e("div",t9,[e("div",null,[p(" Exemplo: "),N(l,we({},{ranges:[""]}),{default:W(()=>[s9]),_:1},16)]),o9])]),default:W(()=>[QC,e("div",e9,[p(" Utilizada para transformar valores para exibição em formato amigável ao usuário "),N(l,we({},{ranges:[""]}),{default:W(()=>[n9]),_:1},16)])]),_:1},16)}}},r9=ce(l9,[["__scopeId","data-v-90fd6163"],["__file","/@slidev/slides/5.md"]]);const Cr=n=>(en("data-v-2abe3208"),n=n(),nn(),n),a9=Cr(()=>e("h1",null,"Serviços",-1)),i9=Cr(()=>e("p",null,"Os serviços dão suporte aos componentes, lidando com lógica de negócio, gerenciamento de estados e comunicação entre componentes.",-1)),c9=Cr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Injectable"),e("span",{style:{color:"#F8F8F2"}},"({})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AuthService"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"http"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpClient"),e("span",{style:{color:"#F8F8F2"}},") {}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"isUserLoggedIn"),e("span",{style:{color:"#F8F8F2"}},"()"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#6272A4"}},"/* checa se o usuário está logado */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  } ")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"getAccessToken"),e("span",{style:{color:"#F8F8F2"}},"()"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccessToken"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#6272A4"}},"/* obtem a token de acesso do armazenamento */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"async"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"login"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"username"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"password"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"await"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".http."),e("span",{style:{color:"#50FA7B"}},"post"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#6272A4"}},"/* login route */"),e("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      ."),e("span",{style:{color:"#50FA7B"}},"asPromise"),e("span",{style:{color:"#F8F8F2"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Injectable"),e("span",{style:{color:"#F8F8F2"}},"({})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AuthService"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"http"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpClient"),e("span",{style:{color:"#F8F8F2"}},") {}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"isUserLoggedIn"),e("span",{style:{color:"#F8F8F2"}},"()"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#6272A4"}},"/* checa se o usuário está logado */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  } ")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"getAccessToken"),e("span",{style:{color:"#F8F8F2"}},"()"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccessToken"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#6272A4"}},"/* obtem a token de acesso do armazenamento */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"async"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"login"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"username"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"password"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"await"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".http."),e("span",{style:{color:"#50FA7B"}},"post"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#6272A4"}},"/* login route */"),e("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      ."),e("span",{style:{color:"#50FA7B"}},"asPromise"),e("span",{style:{color:"#F8F8F2"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),p9=Cr(()=>e("div",{class:"right-side"},[e("ul",null,[e("li",null,"São classes simples do Javascript/Typescript."),e("li",null,"Dependendo de como são configuradas na injeção de depêndencias do angular, podem ser utilizadas para comunicação entre componentes.")])],-1)),u9={__name:"6",setup(n){const t={layout:"two-cols",srcSequence:"./pages/basics.md"};return ee(ie),(s,o)=>{const l=wn;return E(),ae(Un,Ke(We(t)),{right:W(r=>[p9]),default:W(()=>[a9,i9,N(l,we({},{ranges:[""]}),{default:W(()=>[c9]),_:1},16)]),_:1},16)}}},d9=ce(u9,[["__scopeId","data-v-2abe3208"],["__file","/@slidev/slides/6.md"]]);const xn=n=>(en("data-v-0feb3694"),n=n(),nn(),n),f9=xn(()=>e("h1",null,"Módulos",-1)),F9=xn(()=>e("p",null,"Configura o container de injeção de depêndencias do Angular e permite a modularização do projeto por subdomínios de negócio.",-1)),m9=xn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  declarations"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," [")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"CartPageComponent"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"PaymentMethodComponent")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"FormsModule"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"UiLibraryModule"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  exports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"PaymentMethodComponent"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  providers"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"PaymentService"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"CheckoutModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  declarations"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," [")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"CartPageComponent"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"PaymentMethodComponent")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"FormsModule"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"UiLibraryModule"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  exports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"PaymentMethodComponent"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  providers"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"PaymentService"),e("span",{style:{color:"#F8F8F2"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"CheckoutModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),y9={class:"right-side"},h9={key:0},g9=xn(()=>e("h3",null,"Declarations",-1)),v9=xn(()=>e("p",null,"Nesse campo são declarados os elementos declaráveis (i.e. componentes, diretivas e pipes) que são utilizados por esse módulo.",-1)),_9=xn(()=>e("ul",null,[e("li",null,"Os componentes precisam ser declarados no módulo antes de serem utilizados em templates")],-1)),b9=[g9,v9,_9],A9={key:1},w9=xn(()=>e("h3",null,"Imports",-1)),x9=xn(()=>e("p",null,"Permite a importação de outros módulos que possuam elementos declaráveis ou serviços que são utilizados nos templates desse módulo.",-1)),C9=[w9,x9],E9={key:2},k9=xn(()=>e("h3",null,"Exports",-1)),S9=xn(()=>e("p",null,"Permite a exportação de componentes desse módulo para que possam ser utilizados em outros módulos (desde que importem este módulo).",-1)),O9=[k9,S9],$9={key:3},P9=xn(()=>e("h3",null,"Providers",-1)),T9=xn(()=>e("p",null,"Utilizado para declarar serviços no container de injeção de dependências do Angular.",-1)),M9=xn(()=>e("ul",null,[e("li",null,"Os serviços declarados em providers possuem escopo global.")],-1)),B9=[P9,T9,M9],R9={key:4},I9=xn(()=>e("ul",null,[e("li",null,"Lazy loading de módulos"),e("li",null,"Decomposição em microfrontends.")],-1)),j9={__name:"7",setup(n){const t={layout:"two-cols",srcSequence:"./pages/basics.md"},s=ee(ie);return(o,l)=>{const r=wn;return E(),ae(Un,Ke(We(t)),{right:W(a=>[e("div",y9,[w(s).nav.clicks===1?(E(),R("div",h9,b9)):X("v-if",!0),w(s).nav.clicks===2?(E(),R("div",A9,C9)):X("v-if",!0),w(s).nav.clicks===2?(E(),R("div",E9,O9)):X("v-if",!0),w(s).nav.clicks===3?(E(),R("div",$9,B9)):X("v-if",!0),w(s).nav.clicks===4?(E(),R("div",R9,[p(" Benefícios da modularização da aplicação: "),I9])):X("v-if",!0)])]),default:W(()=>[f9,F9,N(r,we({},{ranges:["all","2-5","6-7","8","all"]}),{default:W(()=>[m9]),_:1},16)]),_:1},16)}}},L9=ce(j9,[["__scopeId","data-v-0feb3694"],["__file","/@slidev/slides/7.md"]]);const Vn=n=>(en("data-v-1361642a"),n=n(),nn(),n),D9=Vn(()=>e("h1",null,"Injeção de dependências",-1)),N9=Vn(()=>e("p",null,"Técnica de desenvolvimento de software que permite que aplicações sejam mais flexíveis, extensíveis e testáveis.",-1)),H9={key:0},q9=Vn(()=>e("br",null,null,-1)),z9={key:1},U9=Vn(()=>e("ul",null,[e("li",null,"Alterar o banco de dados requer alterações em todos os services"),e("li",null,"É díficil testar a classe se o MongoClient faz uma conexão ao banco de dados")],-1)),V9=Vn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"BalanceService"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," accountRepository"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".accountRepository "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"MongoClient"),e("span",{style:{color:"#F8F8F2"}},"(MONGO_URL));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"transfer"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"from"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"to"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"amount"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"BalanceService"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," accountRepository"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".accountRepository "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"MongoClient"),e("span",{style:{color:"#F8F8F2"}},"(MONGO_URL));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"transfer"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"from"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"to"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"amount"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),W9={key:2},K9=Vn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," repo "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"MongoClient"),e("span",{style:{color:"#F8F8F2"}},"(MONGO_URL));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," balanceService "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"BalanceService"),e("span",{style:{color:"#F8F8F2"}},"(repo)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"BalanceService"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," accountRepository"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"accountRepository"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".accountRepository "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," accountRepository; ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"transfer"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"from"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"to"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"amount"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," repo "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"MongoClient"),e("span",{style:{color:"#F8F8F2"}},"(MONGO_URL));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," balanceService "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"BalanceService"),e("span",{style:{color:"#F8F8F2"}},"(repo)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"BalanceService"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," accountRepository"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"accountRepository"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AccountRepository"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".accountRepository "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," accountRepository; ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"transfer"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"from"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"to"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Account"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"amount"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),G9={key:3},Y9=Vn(()=>e("span",{class:"destaque"},'A "Injeção de depêndencias" nada mais é que a passagem de depêndencias para a classe dependente, por meio de seu construtor, propiedades ou parâmetros de funções. ',-1)),Z9=[Y9],J9=Vn(()=>e("br",null,null,-1)),X9={key:4},Q9=Vn(()=>e("br",null,null,-1)),e6=Vn(()=>e("br",null,null,-1)),n6=Vn(()=>e("br",null,null,-1)),t6=Vn(()=>e("div",{class:"solution"},[p(" Solução: "),e("span",{class:"answer"},"Container de injeção de depêndencias")],-1)),s6={__name:"8",setup(n){const t={clicks:4,srcSequence:"./pages/di.md"},s=ee(ie);return(o,l)=>{const r=wn;return E(),ae(eo,Ke(We(t)),{default:W(()=>[D9,N9,w(s).nav.clicks===1?(E(),R("div",H9," - Para que as depêndencias sejam injetadas, a classe precisa abrir mão de suas instanciações ")):X("v-if",!0),q9,w(s).nav.clicks===2?(E(),R("div",z9,[p(" Exemplo: a classe abaixo está acoplada as suas depêndencias. "),U9,N(r,we({},{ranges:[""]}),{default:W(()=>[V9]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===3?(E(),R("div",W9,[p(" Exemplo: Após introdução de injeção de depêndencias "),N(r,we({},{ranges:["1-2,7-9"]}),{default:W(()=>[K9]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===4?(E(),R("div",G9,Z9)):X("v-if",!0),J9,w(s).nav.clicks===4?(E(),R("div",X9,[p(" Porém em sistemas complexos, instanciar todas as classes e suas depêndencias manualmente é um processo tedioso. "),Q9,e6,n6,t6])):X("v-if",!0)]),_:1},16)}}},o6=ce(s6,[["__scopeId","data-v-1361642a"],["__file","/@slidev/slides/8.md"]]),l6="/assets/angular-di-58dbd636.webp";const Er=n=>(en("data-v-96ebd1d8"),n=n(),nn(),n),r6=Er(()=>e("h1",null,"Resolução de dependências no Angular",-1)),a6={class:"img-section"},i6=Er(()=>e("div",{class:"left"},[e("img",{src:l6,class:"di-img"})],-1)),c6={class:"right"},p6=Er(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  provides"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"ExampleService"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"RootModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  provides"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"ExampleService"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"RootModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),u6=Er(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  provides"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"ExampleService"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"RootComponent"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  provides"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"ExampleService"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"RootComponent"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),d6={__name:"9",setup(n){const t={srcSequence:"./pages/di.md"};return ee(ie),(s,o)=>{const l=wn;return E(),ae(eo,Ke(We(t)),{default:W(()=>[r6,e("div",a6,[i6,e("div",c6,[N(l,we({},{ranges:[""]}),{default:W(()=>[p6]),_:1},16),N(l,we({},{ranges:[""]}),{default:W(()=>[u6]),_:1},16)])])]),_:1},16)}}},f6=ce(d6,[["__scopeId","data-v-96ebd1d8"],["__file","/@slidev/slides/9.md"]]),F6={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m6=e("path",{fill:"currentColor",d:"m25 11.6l-.9-.3c0-.2.1-.4.1-.6c.7-3.3.2-6-1.3-6.9c-1.5-.8-3.9 0-6.3 2.1c-.2.2-.5.4-.7.6c-.2-.1-.3-.3-.5-.4C13 3.9 10.5 3 9 3.9c-1.5.8-1.9 3.4-1.3 6.5c.1.3.1.6.2.9c-.4.1-.7.2-1 .3c-3 1-4.9 2.7-4.9 4.3c0 1.7 2 3.5 5.1 4.5c.2.1.5.2.8.2c-.1.3-.2.7-.2 1c-.6 3.1-.1 5.5 1.3 6.4c1.5.9 4 0 6.5-2.2c.2-.2.4-.4.6-.5c.2.2.5.5.8.7c2.4 2.1 4.7 2.9 6.2 2c1.5-.9 2-3.5 1.4-6.7c0-.2-.1-.5-.2-.8c.2-.1.4-.1.5-.2c3.2-1.1 5.3-2.8 5.3-4.5c-.1-1.5-2.1-3.1-5.1-4.2zm-7.5-4.7c2.1-1.8 4-2.5 4.9-2c.9.5 1.3 2.7.7 5.6c0 .2-.1.4-.1.6c-1.2-.3-2.5-.5-3.7-.6c-.7-1-1.5-2-2.4-3l.6-.6zm-7.2 10.5c.3.5.5 1 .8 1.5c.3.5.6 1 .9 1.4c-.9-.1-1.7-.2-2.6-.4c.2-.8.5-1.6.9-2.5zm0-2.8c-.4-.8-.6-1.6-.9-2.4c.8-.2 1.7-.3 2.5-.4c-.3.5-.6.9-.9 1.4c-.2.4-.5.9-.7 1.4zm.6 1.4c.4-.8.8-1.5 1.2-2.3c.4-.7.9-1.5 1.4-2.2c.8-.1 1.7-.1 2.6-.1c.9 0 1.7 0 2.6.1c.5.7.9 1.4 1.3 2.2c.4.7.8 1.5 1.2 2.3c-.4.8-.8 1.5-1.2 2.3c-.4.7-.9 1.5-1.3 2.2c-.8.1-1.7.1-2.6.1c-.9 0-1.7 0-2.5-.1c-.5-.7-.9-1.4-1.4-2.2c-.5-.8-.9-1.5-1.3-2.3zm10 2.9c.3-.5.6-1 .8-1.5c.4.8.7 1.6.9 2.5c-.9.2-1.7.3-2.6.4c.4-.5.7-1 .9-1.4zm.8-4.3c-.3-.5-.5-1-.8-1.5c-.3-.5-.6-.9-.8-1.4c.9.1 1.7.3 2.6.4c-.3.9-.6 1.7-1 2.5zM16 8.3c.6.6 1.1 1.3 1.6 2c-1.1-.1-2.2-.1-3.3 0c.6-.7 1.2-1.4 1.7-2zM9.6 4.9c.9-.5 3 .2 5.2 2.2l.4.4c-.9.9-1.7 1.9-2.4 3c-1.3.1-2.5.3-3.7.6c-.1-.3-.1-.6-.2-.9c-.6-2.7-.2-4.8.7-5.3zM8.2 19.6c-.2-.1-.5-.1-.7-.2c-1.4-.5-2.5-1.1-3.3-1.7c-.7-.6-1-1.2-1-1.7c0-1 1.5-2.3 4.1-3.2c.3-.1.6-.2 1-.3c.3 1.2.7 2.4 1.3 3.5c-.6 1.2-1 2.4-1.4 3.6zm6.5 5.5c-1.1 1-2.2 1.6-3.1 2c-.9.3-1.5.3-2 .1c-.9-.5-1.3-2.5-.8-5.1c.1-.4.2-.7.2-1.1c1.2.3 2.5.5 3.8.5c.7 1 1.5 2 2.4 3c-.2.2-.3.4-.5.6zm1.3-1.4c-.6-.6-1.1-1.3-1.7-2h3.3c-.4.7-1 1.4-1.6 2zm7.3 1.7c-.2.9-.5 1.5-.9 1.7c-.9.5-2.8-.2-4.8-1.9c-.2-.2-.5-.4-.7-.6c.8-.9 1.6-1.9 2.3-3c1.3-.1 2.5-.3 3.8-.6c.1.2.1.5.2.7c.3 1.4.3 2.7.1 3.7zm1-6c-.2 0-.3.1-.5.1c-.4-1.2-.9-2.4-1.4-3.6c.5-1.1 1-2.3 1.4-3.5c.3.1.6.2.8.3c2.6.9 4.2 2.2 4.2 3.2c0 1.2-1.7 2.6-4.5 3.5z"},null,-1),y6=e("path",{fill:"currentColor",d:"M16 18.5c.5 0 1-.1 1.4-.4c.4-.3.7-.7.9-1.1c.2-.5.2-1 .1-1.5s-.3-.9-.7-1.3c-.3-.4-.8-.6-1.3-.7c-.5-.1-1 0-1.5.1c-.5.2-.9.5-1.1.9c-.3.4-.4.9-.4 1.4c0 .3.1.7.2 1c.1.3.3.6.5.8c.2.2.5.4.8.5c.4.2.8.3 1.1.3z"},null,-1),h6=[m6,y6];function g6(n,t){return E(),R("svg",F6,h6)}const v6={name:"carbon-logo-react",render:g6},_6="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUSDxEPDw8QEBAPEA8ODw8SEA4OFREWFhYRFRMYHSgiGBolGxUVITEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0mHyUtLSsuNTItLy02Li0tLS0yLy0tLS0tLS8tLi0tNy0tLSsvLS0tLS8vKy0tLS0vLS0tLf/AABEIAJIBWQMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADUQAQACAAMFBQYGAgMBAAAAAAABAgMEEQUhMUFREjJhcZEiYoGhwdETI0JSseEVknKC8BT/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADcRAQACAQIDBAgFBAEFAAAAAAABAgMEERIhMQVBUWETIjJxgZGh0QaxweHwFDNCUvEVI0OCkv/aAAwDAQACEQMRAD8A/LQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS5bL2xJ0pGs8+kecu6Um87Qs6XSZtVfgxRvP0j3r/APhMTTvU16b/AOU39Lbxhtz+GdTtvx13+P2UszlL4ffrp0mN8T8UN8dqdYY2r0GfSztlrt593zQOFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdPlspfEnSsTpztPdj4u6Y7XnkuaTQZ9VbbHXl490fz5t3BnDwa9mvtW42mOMz4y1cOnmK7Q9tpo03Z2L0VOdu/znz+zi2etPCIj5ysRiiOr5btDLb2YiPqjxMS1o0tOsTymI0Jx0mNphBlvfNXhyTvE9yH/AOWn7YRTp8X+qp/07Tz/AIQ4vs+k8NY+cIb6LHPTeEGTsXDb2ZmPr+arjZC8cPajw4+ipk0l69ObL1HZGoxc6+tHl9lVVZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTL4XbvWsfqnTyjm6pXitEJ9LgnPmrijvnZ9Pg5XDpG6sRpxtOmvnMtKmOteUQ/R9PoNNpabUrHLvnr8ZU81nZtupur15z/S7TFtzlnanXzk9THyr+f7PcllItGs8Nd0RzMmTblDrR6KMteO3RbnKU6aeUyh9JZpW0OGY5RsgxMvEcLevF3F91TJpop0s4iHW6OKuoq+bpIq6ir5u74EGayVb8d1v3R9eqDLgrk97P1vZeLUxvPK3j9/FjZjAtSdLR5TymPBl5MdqTtLx2p0uTTX4MkfafcicK4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3smPzqecz8NJS4P7kNTsWJnXY9vGfylp7RzWs9iO7He8Z6NzDj25y9R2jq+O3oqdI6+c/sqQmlQqv5LMRWJieHGPPogyU35w1dFqoxxNbdHeJmpng5jHt1TZNZNvZRRLpBEzPVJWHKasPMx2+xP4e+3L1RZZtwzwdUer9NGG04I9bud5WL9iPxN1+ej5jm3DHF1SaKM04Kznj1+/+e7qmmrvdbmqvmsvW9dJ+E84nq4yY4yV2lR1uipqcc0v8J8JfPYuHNbTWeMTpLJtWazwy8Bmw3w5Jx36w4cogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHeFhza0VrGszOkPtazadoS4cN82SMeON5luVwK5fDmY34lvZ7Xj4eDV02niJ/N7XFo8fZenm0c8luW/28o+rPo0pZlI35LFcLq4my5XFMRzJCeXRx+LMPvDCP0169Hdc7Ed6NPGPsiycNI3mdnUdo0p/c5fzwXMK8WjWsxMeCKtotG8S08GamWvFSd4TVklaqkiXKasvZkdTKO0vsIbSydsYca1t19mfp9VXPWvpKzPfyl5Xt7DWMmPL48pZlo0U8+KcV5pLzmSk0ttLxE4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAaGw5j8aNedbRHnu+0rGm9tufh60Rro374mI+n7rW2MXW8V/bHzn/wBDb09fV3bfbGbizRj8I+susvg9mNZ70/LwfLW3nZ1p9P6Ou89Z+j25Du0IbQ7hWtClj5jlX1+zO1Gu29XH82Fqtfz4cfz+ytMsy1ptO8yyptMzvLrDxLVnWszE+Evtb2rO8SkxZsmK3FjtMSvYO1rR3qxbxjdK1TWWj2oben7fy15ZaxPu5T9lzD2rhzxm1fOJ+ieuqxy1sXb2lt7UzHvj7bpYz2F++vzd+nx/7LUdraSf/JCPE2hhR+rXyiZJ1OKO9Dk7X0lf89/dEyy89m/xJjSNKxw14zPVSzZvSWjbo8z2j2h/V3jhjasdEWNHD0Xe06+zb4ItbXaIn4ImSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJcreYxKzHGL1/nR3SdrRKzo8k49RjtXrFo/NpRXt5i2vCLTM/DdD0O/Dih6qKem199+kTP05R9V20IYaloRWh3CvaFDaGLpHZjjPHyU9bmmscEd7B7W1HBHoq9Z6+792eynngAAAAAHWHGswn01OPLWPP8kuCnHkiEuPHCOq/2jPFNaQva7eZrSOsosSukzHRm5acF5r4KGXH6O818HKNGAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NiYEWxNZ/RHaiOs68fh9ljT1ib8+5u/h/TUzare/8AjG8R57/p9l7I0/MxZ9/T5zLZyT6tfc9Boaf9/PM/7bfWZWbQjhetCK0OolBarDzltcS3np6MfUW4stpeH7QvN9TefPb5IUCmAAAAAAtZXD5zz4eTW0GLhrOSfh7mv2fg2rOSfh7kmDTWe1PDhXy6pMVfSZJzW+H3T6bDOXJOa3T/AB93iq48+1Pmy9RO+W3vZOrnfPf3o0KuAAAAAAAAAAAAAAAAAAAAAAAAAAAAly2PNLxavGOXWOcO6Xmk7ws6PVX0uauWnd9Y74buRxK2tiWrwt2L+MTpMTE/GGxGSL46zHnD3HZ2fHnvlyY55W4Z907TExPyWbVIloWqitV1EoLVfP5yumJaPen7sfNG2S3veA19eHU5I85+6FEqAAAAAJsvgzafdjjP0WNNgnLby71zR6Wc9/KOv2aH4e7Tl9G3NYmOHuejnBWa8Pc6vuiZnhEOcl4pWZ8HWS0Ysc3npEMiZefmd53l4+ZmZ3l4+PgAAAAAAAAAAAAAAAAAAAAAAAAAAAADR2Hi6Ymk/rjT4xvj6rOmvtbh8W9+HdRGPVcE/wCUbfGOcfq3phoRL3M1R2q6iUNqsbbOBpaLxwtun/lHD5fwoaunPieP7f0s0yRmiOU8p98dPp+TOis750nSOPgqREsCK2mJmI6dfJ4+OQAAHeFWJn2p7MddJl3jrWZ9adoTYKY7W2yW2j4/ov1zOHG6ms9Iis7/AFaddTipHDTm36a7S46xjwxM+ERH3WcOkzvtu92OXnPOVis2nnb5NHDTJb1snLy8PfPfP0Uc9jdqexTfv36c7dGfqs3HPBVh9p6r014wYucb8/OfD4KSixQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtbTExMbpiYmJ6TD7E7c3VLzS0WrPOOb6jI5qMSkW58LR0s08eSL13fpHZuurrMEZI69Jjwn+dE8wkXphDj4EWrNbcJ+XiWrFq7Sq6rS0z45x36T/N2Plqzg43ZxNOxeJrrPC0Twn+PVQrHor7W6S8hpMduztb6PPHqW3rv3TE9/z6+BtHZk11th76cZrzr94fc2nmvOvR12r2JbBvkwRvTw74+8fWGaqvPAJMPAvbu1tPlEu647W6Qnx6bNl9ikz8FrB2Zee9pWPWVimktPtcmpg7Dz355JisfOfsv4OWphxu/2nfMrtMdMUcm7g0WDSV3j5zzmf54Q5xaYl91fy6c7W71o8I5OLzkyco5QhzU1Op9THHBTvmes+6O74oczh0waaV79t0TPHTnPghyVpgptXrKprMOHs7T7Y/bty3nrt3z5MpQeYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWMnmrYdu1G+OFo/dCTHkmk7wu6DXZNHl9JT4x4x/Oj6XL49b17VZ1j5xPSWlW8WjeH6JpdXi1OOMmOeX5eUpHSyjx8Ct47No1iXNqxaNpV9TpcWopOPLG8OcHCmsaa9qI7sz3tOk9fN9pExGyPT4MmGvBNuKI6TPXbwnx28VPObNpffX2LdY4T5wiyaatuccpZWu7Ew6iZvT1bfSffH2ZeLs/Frv7OunOm/+1O2DJXueaz9kazBO/Dv515/v9FrLbRtG7FrafeiJ1+MLGPVWjleGlpO2cmP1NTWZ89ufxjlu0cLErbu6+loWq5a26PQ4dRizexP0n7Jey73WeBxjXrSs2tuiPWZ6R4uL5IrG8otRmx6fHOTJPKPr5Q+dzWPN7TafKI6R0ZWTJN7by/PtZq76rLOS3wjwjwQuFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNlszbDtrSdOscrR0mHdLzSd4WtJrMulyceKdvHwn3x/JbuT2nS+6fYv0md0+Ur2PPW3lL22g7bwamIrb1beE9PhP8AJXk7aAeTV9czWCIDhe6Pj7saBsq5vO0w+9OtuVY4z9keTLWkc2dru09Po49ed7eEdf2YGbzdsSdbbojhWOFWfkyWvO8vCa7X5dZfiydO6O6P54q6NSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW8vtDFpwtrHS2+P6S0zXr3tLS9r6vT8q23jwnn/AML+FtyP10mPGsxPylYrqo74buH8T16Zcfyn9J2/NYjbGDzm0f8AWfokjU416v4i0U9ZmP8A1n9D/L4P7rf6X+x/UY/F1P4h0H+0/wDzP2R4m2sOO7W1vSIczqqx0hWy/iXT1/t1mfoo5ja2JbdGlI93j6q99Re3TkxdV+INVm5U9WPLr8/+FCZ6756ygYkzMzvLwfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z";const kr=n=>(en("data-v-e0c37f54"),n=n(),nn(),n),b6=kr(()=>e("h1",null,"Programação Reativa no Angular",-1)),A6=kr(()=>e("div",{class:"side-by-side"},[e("div",{class:"rxjs-text"}," O Angular utiliza a biblioteca RxJS para implementar reatividade. "),e("img",{src:_6,class:"rxjs-logo"})],-1)),w6={class:"below side-by-side"},x6=kr(()=>e("div",{class:"react-description"},[p(" Na programação reativa, a lógica do sistema é definida de forma declarativa como efeito colaterais de eventos do sistema. "),e("p",null,"Em frameworks de interface com paradigma reativo, as interfaces são definidas em função de alterações (i.e. eventos) no estado do sistema.")],-1)),C6=kr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"RootComponent"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," [isLoggedIn, _]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"useState"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"false"),e("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," (isLoggerIn) {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," <"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"HomePage"),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  } else {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    return <"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"AuthPage"),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"RootComponent"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," [isLoggedIn, _]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"useState"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"false"),e("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," (isLoggerIn) {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," <"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"HomePage"),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  } else {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    return <"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"AuthPage"),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),E6={__name:"10",setup(n){const t={srcSequence:"./pages/rxjs.md"};return ee(ie),(s,o)=>{const l=v6,r=wn;return E(),ae(eo,Ke(We(t)),{default:W(()=>[b6,A6,e("div",w6,[x6,e("div",null,[p(" O React "),N(l,{color:"blue"}),p(" é um exemplo de framework reativo: "),N(r,we({},{ranges:[""]}),{default:W(()=>[C6]),_:1},16)])])]),_:1},16)}}},k6=ce(E6,[["__scopeId","data-v-e0c37f54"],["__file","/@slidev/slides/10.md"]]);const Xt=n=>(en("data-v-71d1590b"),n=n(),nn(),n),S6=Xt(()=>e("h1",null,[e("span",{class:"rxjs-name"},"RxJS"),p(" - Observables ")],-1)),O6=Xt(()=>e("br",null,null,-1)),$6=Xt(()=>e("h4",null,[p('"Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - '),e("a",{href:"https://rxjs.dev/guide/observable",target:"_blank",rel:"noopener"},"rxjs.dev")],-1)),P6=Xt(()=>e("br",null,null,-1)),T6=Xt(()=>e("p",null,"Um observable é um emissor de valores ao longo do tempo, sem que seu consumidor possua influência sobre quando são emitidos.",-1)),M6=Xt(()=>e("p",null,"Isto pode ser utilizado para representar diversos conceitos:",-1)),B6=Xt(()=>e("ul",null,[e("li",null,"Eventos do mouse - (multiplos eventos ao longo tempo)"),e("li",null,"Requisição HTTP - (Unico evento ao longo tempo)")],-1)),R6={class:"right-side"},I6=Xt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," obs "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"sub"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," count "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," handle "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"setInterval"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    sub."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    count"),e("span",{style:{color:"#FF79C6"}},"++"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"clearInterval"),e("span",{style:{color:"#F8F8F2"}},"(handle);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," subs "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," obs."),e("span",{style:{color:"#50FA7B"}},"subscribe"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"count"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"(count); "),e("span",{style:{color:"#6272A4"}},"// 1, 2, 3, 4 ....")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"setTimeout"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," subs."),e("span",{style:{color:"#50FA7B"}},"unsubscribe"),e("span",{style:{color:"#F8F8F2"}},"(), "),e("span",{style:{color:"#BD93F9"}},"10000"),e("span",{style:{color:"#F8F8F2"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," obs "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"sub"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," count "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," handle "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"setInterval"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    sub."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    count"),e("span",{style:{color:"#FF79C6"}},"++"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"clearInterval"),e("span",{style:{color:"#F8F8F2"}},"(handle);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," subs "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," obs."),e("span",{style:{color:"#50FA7B"}},"subscribe"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"count"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"(count); "),e("span",{style:{color:"#6272A4"}},"// 1, 2, 3, 4 ....")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"setTimeout"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," subs."),e("span",{style:{color:"#50FA7B"}},"unsubscribe"),e("span",{style:{color:"#F8F8F2"}},"(), "),e("span",{style:{color:"#BD93F9"}},"10000"),e("span",{style:{color:"#F8F8F2"}},")")])])])],-1)),j6={__name:"11",setup(n){const t={layout:"two-cols",srcSequence:"./pages/rxjs.md"};return ee(ie),(s,o)=>{const l=wn,r=nh("click");return E(),ae(Un,Ke(We(t)),{right:W(a=>[Ti((E(),R("div",R6,[p(" Exemplo: "),N(l,we({},{ranges:[""]}),{default:W(()=>[I6]),_:1},16)])),[[r]])]),default:W(()=>[S6,O6,$6,P6,T6,M6,B6]),_:1},16)}}},L6=ce(j6,[["__scopeId","data-v-71d1590b"],["__file","/@slidev/slides/11.md"]]),D6="/assets/rxjs-observable-5095ff26.png";const ut=n=>(en("data-v-fe9fdad2"),n=n(),nn(),n),N6=ut(()=>e("h1",null,[e("span",{class:"rxjs-name"},"RxJS"),p(" - Comparação ")],-1)),H6=ut(()=>e("div",{class:"left-side"},[e("img",{src:D6,class:"cmp-img"})],-1)),q6={key:0,class:"right-side"},z6=ut(()=>e("h4",null,"Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor",-1)),U6=ut(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"function"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"double"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," number "),e("span",{style:{color:"#FF79C6"}},"*"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"2"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// Consumidor determina quando o")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// valor será retornado.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"setTimeout"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," doubled "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"double"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"4"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}, "),e("span",{style:{color:"#BD93F9"}},"2000"),e("span",{style:{color:"#F8F8F2"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"function"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"double"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," number "),e("span",{style:{color:"#FF79C6"}},"*"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"2"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// Consumidor determina quando o")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// valor será retornado.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"setTimeout"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," doubled "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"double"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"4"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}, "),e("span",{style:{color:"#BD93F9"}},"2000"),e("span",{style:{color:"#F8F8F2"}},")")])])])],-1)),V6={key:1,class:"right-side"},W6=ut(()=>e("h4",null,"Iteradores retornam multiplos elementos e o momento de retorno do valor é definido pelo consumidor",-1)),K6=ut(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"function*"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"fibbonacci"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," previous "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"0"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," current "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Multiplos elementos são retornados")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"while"),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#BD93F9"}},"true"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"yield"),e("span",{style:{color:"#F8F8F2"}}," previous;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," value "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," previous "),e("span",{style:{color:"#FF79C6"}},"+"),e("span",{style:{color:"#F8F8F2"}}," current;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    previous "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," current;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    current "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," value;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," iter "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"fibbonacci"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"/* O consumidor determina quando ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"  os elementos são retornados */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"setInteval"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," value "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," iter."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"function*"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"fibbonacci"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," previous "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"0"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," current "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Multiplos elementos são retornados")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"while"),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#BD93F9"}},"true"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"yield"),e("span",{style:{color:"#F8F8F2"}}," previous;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," value "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," previous "),e("span",{style:{color:"#FF79C6"}},"+"),e("span",{style:{color:"#F8F8F2"}}," current;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    previous "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," current;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    current "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," value;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," iter "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"fibbonacci"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"/* O consumidor determina quando ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"  os elementos são retornados */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"setInteval"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," value "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," iter."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"();")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},")")])])])],-1)),G6={key:2,class:"right-side"},Y6=ut(()=>e("h4",null,"Promises retornam apenas um único valor, porém o produtor decide quando o valor será retornado",-1)),Z6=ut(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," afterTimeout "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Promise"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"resolve"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"_"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Produtor define quando o valor será retornado")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"setTimeout"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B"}},"resolve"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"10"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// O consumidor precisa esperar o valor ser emitido")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"afterTimeout"),e("span",{style:{color:"#F8F8F2"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ."),e("span",{style:{color:"#50FA7B"}},"then"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"(value))")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," afterTimeout "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Promise"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"resolve"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"_"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Produtor define quando o valor será retornado")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"setTimeout"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B"}},"resolve"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#BD93F9"}},"10"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// O consumidor precisa esperar o valor ser emitido")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#50FA7B"}},"afterTimeout"),e("span",{style:{color:"#F8F8F2"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ."),e("span",{style:{color:"#50FA7B"}},"then"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"(value))")])])])],-1)),J6={key:3,class:"right-side"},X6=ut(()=>e("h4",null,"Observables retornam múltiplos valores e o produtor decide quando eles serão retornados",-1)),Q6=ut(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," counter "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"subs"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Produtor define quando os valorres serão retornados")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Multiplos valores são emitidos")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," count "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," handle "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"setInterval"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    subs."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"(count);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    count"),e("span",{style:{color:"#FF79C6"}},"++"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"clearInterval"),e("span",{style:{color:"#F8F8F2"}},"(handle);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// O consumidor espera os valores serem emitidos")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"counter")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ."),e("span",{style:{color:"#50FA7B"}},"subscribe"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"(value))")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," counter "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"subs"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Produtor define quando os valorres serão retornados")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#6272A4"}},"// Multiplos valores são emitidos")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," count "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"1"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"let"),e("span",{style:{color:"#F8F8F2"}}," handle "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"setInterval"),e("span",{style:{color:"#F8F8F2"}},"(() "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    subs."),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#F8F8F2"}},"(count);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    count"),e("span",{style:{color:"#FF79C6"}},"++"),e("span",{style:{color:"#F8F8F2"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }, "),e("span",{style:{color:"#BD93F9"}},"1000"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"clearInterval"),e("span",{style:{color:"#F8F8F2"}},"(handle);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// O consumidor espera os valores serem emitidos")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"counter")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ."),e("span",{style:{color:"#50FA7B"}},"subscribe"),e("span",{style:{color:"#F8F8F2"}},"(("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"value"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"(value))")])])])],-1)),eE={__name:"12",setup(n){const t={layout:"two-cols",clicks:4,srcSequence:"./pages/rxjs.md"},s=ee(ie);return(o,l)=>{const r=wn;return E(),ae(Un,Ke(We(t)),{right:W(a=>[w(s).nav.clicks===1?(E(),R("div",q6,[z6,N(r,we({},{ranges:[""]}),{default:W(()=>[U6]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===2?(E(),R("div",V6,[W6,N(r,we({},{ranges:[""]}),{default:W(()=>[K6]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===3?(E(),R("div",G6,[Y6,N(r,we({},{ranges:[""]}),{default:W(()=>[Z6]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===4?(E(),R("div",J6,[X6,N(r,we({},{ranges:[""]}),{default:W(()=>[Q6]),_:1},16)])):X("v-if",!0)]),default:W(()=>[N6,H6]),_:1},16)}}},nE=ce(eE,[["__scopeId","data-v-fe9fdad2"],["__file","/@slidev/slides/12.md"]]),tE={class:"slidev-layout center h-full grid place-content-center"},sE={class:"my-auto"},oE={__name:"center",setup(n){return ee(ie),(t,s)=>(E(),R("div",tE,[e("div",sE,[Hn(t.$slots,"default")])]))}},hF=ce(oE,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/layouts/center.vue"]]),lE=e("h1",null,"Ferramentas do Angular",-1),rE={__name:"13",setup(n){const t={layout:"center"};return ee(ie),(s,o)=>(E(),ae(hF,Ke(We(t)),{default:W(()=>[lE]),_:1},16))}},aE=ce(rE,[["__file","/@slidev/slides/13.md"]]);const Sr=n=>(en("data-v-092d4977"),n=n(),nn(),n),iE=Sr(()=>e("h2",null,"Formulários no Angular - Template Forms",-1)),cE=Sr(()=>e("div",{class:"left-side"},[p(" Utiliza two-way databinding para associar propriedades dos componentes para os inputs no DOM "),e("p",null,"Possível utilizar referências no DOM para obter o status de validação do formulário"),e("p",null,"Adiciona automaticamente classes CSS aos componentes, para que possam ser estilizadas")],-1)),pE=Sr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// login-form.component.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  templateUrls"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login-form.component.html"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"LoginFormComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  model "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    username"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    password"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"// login-form.component.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  templateUrls"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login-form.component.html"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"LoginFormComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  model "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    username"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    password"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),uE=Sr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- login-form.component.ts -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(ngModel)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"model.username"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"required"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"#username"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"ngModel"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"username.valid || username.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Username is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(ngModel)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"model.password"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"required"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"#password"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"ngModel"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password.valid || password.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Password is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- login-form.component.ts -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(ngModel)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"model.username"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"required"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"#username"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"ngModel"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},"/>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"username.valid || username.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Username is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[(ngModel)]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"model.password"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"required"),e("span",{style:{color:"#F8F8F2"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"#password"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"ngModel"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password.valid || password.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Password is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),dE={__name:"14",setup(n){const t={layout:"two-cols",srcSequence:"./pages/forms.md"};return ee(ie),(s,o)=>{const l=wn;return E(),ae(Un,Ke(We(t)),{right:W(r=>[N(l,we({},{ranges:[""]}),{default:W(()=>[pE]),_:1},16),N(l,we({},{ranges:[""]}),{default:W(()=>[uE]),_:1},16)]),default:W(()=>[iE,cE]),_:1},16)}}},fE=ce(dE,[["__scopeId","data-v-092d4977"],["__file","/@slidev/slides/14.md"]]);const no=n=>(en("data-v-bc9ae405"),n=n(),nn(),n),FE=no(()=>e("h1",null,"Formulários no Angular - Reactive Forms",-1)),mE={class:"left-side"},yE=no(()=>e("p",null,"Possui observables que emitem o valor do formulário quando há alguma alteração.",-1)),hE=no(()=>e("p",null,"Utiliza-se de funções para implementar lógica de validação dos inputs.",-1)),gE=no(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"requiredValidator"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"control"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AbstractControl"),e("span",{style:{color:"#F8F8F2"}},") ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," (control.value "),e("span",{style:{color:"#FF79C6"}},"=="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," { missingValue"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"Value is required"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}}," }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"requiredValidator"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"control"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"AbstractControl"),e("span",{style:{color:"#F8F8F2"}},") ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"if"),e("span",{style:{color:"#F8F8F2"}}," (control.value "),e("span",{style:{color:"#FF79C6"}},"=="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null"),e("span",{style:{color:"#F8F8F2"}},") {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," { missingValue"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"Value is required"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}}," }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#FF79C6"}},"return"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#BD93F9"}},"null")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),vE=no(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  templateUrls"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login-form.component.html"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"LoginFormComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  loginForm "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"FormGroup"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    username"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"FormControl"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", Validators.required),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    password"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"FormControl"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", Validators.required),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }) ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  templateUrls"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"./login-form.component.html"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"LoginFormComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  loginForm "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"FormGroup"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    username"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"FormControl"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", Validators.required),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    password"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"FormControl"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", Validators.required),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }) ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),_E=no(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- login-form.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[formGroup]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"loginForm"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"formControlName"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"username"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"loginForm.username.valid ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F1FA8C"}},"    || loginForm.username.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Username is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"formControlName"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"loginForm.password.valid ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F1FA8C"}},"    || loginForm.password.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Password is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6272A4"}},"<!-- login-form.component.html -->")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[formGroup]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"loginForm"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"formControlName"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"username"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"loginForm.username.valid ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F1FA8C"}},"    || loginForm.username.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Username is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"input"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"formControlName"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"password"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"type"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"text"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}}," />")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  <"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"[hidden]"),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"loginForm.password.valid ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F1FA8C"}},"    || loginForm.password.pristine"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    Password is required")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  </"),e("span",{style:{color:"#FF79C6"}},"div"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"</"),e("span",{style:{color:"#FF79C6"}},"form"),e("span",{style:{color:"#F8F8F2"}},">")])])])],-1)),bE={__name:"15",setup(n){const t={layout:"two-cols",srcSequence:"./pages/forms.md"};return ee(ie),(s,o)=>{const l=wn;return E(),ae(Un,Ke(We(t)),{right:W(r=>[N(l,we({},{ranges:[""]}),{default:W(()=>[vE]),_:1},16),N(l,we({},{ranges:[""]}),{default:W(()=>[_E]),_:1},16)]),default:W(()=>[FE,e("div",mE,[p(" Utiliza-se de classes reativas do Angular, chamadas de FormControl e FormGroup para representar o formulário. "),yE,hE,N(l,we({},{ranges:[""]}),{default:W(()=>[gE]),_:1},16)])]),_:1},16)}}},AE=ce(bE,[["__scopeId","data-v-bc9ae405"],["__file","/@slidev/slides/15.md"]]);const il=n=>(en("data-v-495789e1"),n=n(),nn(),n),wE=il(()=>e("h1",null,"HTTP Client",-1)),xE=il(()=>e("div",{class:"left-side"},[p(" O Angular utiliza a classe HttpClient para fazer requisições HTTP. "),e("p",null,"A classe representa requisições HTTP como Observables."),e("p",null,"É possível transformar os Observables em Promises, caso necessário.")],-1)),CE=il(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"HttpClient"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"get"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"post"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"put"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"delete"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"patch"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"options"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"HttpClient"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"get"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"post"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"put"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"delete"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"patch"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"public"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#50FA7B"}},"options"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">("),e("span",{style:{color:"#6272A4"}},"/* params */"),e("span",{style:{color:"#F8F8F2"}},")"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Observable"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),EE=il(()=>e("p",null,"Exemplo",-1)),kE=il(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({ "),e("span",{style:{color:"#6272A4"}},"/* ... */"),e("span",{style:{color:"#F8F8F2"}}," })")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"ExampleComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"http"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpClient"),e("span",{style:{color:"#F8F8F2"}},") {}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"onSubmit"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".http."),e("span",{style:{color:"#50FA7B"}},"post"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"http://example.com/api/auth/login"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      ."),e("span",{style:{color:"#50FA7B"}},"subscribe"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"        "),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"Sucesso ao logar"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"        "),e("span",{style:{color:"#50FA7B"}},"error"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"          console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"Algo de errado aconteceu"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"        }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      });")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"Component"),e("span",{style:{color:"#F8F8F2"}},"({ "),e("span",{style:{color:"#6272A4"}},"/* ... */"),e("span",{style:{color:"#F8F8F2"}}," })")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"ExampleComponent"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#FF79C6"}},"constructor"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#FF79C6"}},"private"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FFB86C","font-style":"italic"}},"http"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"HttpClient"),e("span",{style:{color:"#F8F8F2"}},") {}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#50FA7B"}},"onSubmit"),e("span",{style:{color:"#F8F8F2"}},"() {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    "),e("span",{style:{color:"#BD93F9","font-style":"italic"}},"this"),e("span",{style:{color:"#F8F8F2"}},".http."),e("span",{style:{color:"#50FA7B"}},"post"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F1FA8C"}},"http://example.com/api/auth/login"),e("span",{style:{color:"#E9F284"}},'"'),e("span",{style:{color:"#F8F8F2"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      ."),e("span",{style:{color:"#50FA7B"}},"subscribe"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"        "),e("span",{style:{color:"#50FA7B"}},"next"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"Sucesso ao logar"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"        "),e("span",{style:{color:"#50FA7B"}},"error"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," () "),e("span",{style:{color:"#FF79C6"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"          console."),e("span",{style:{color:"#50FA7B"}},"log"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"Algo de errado aconteceu"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"        }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      });")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),SE={__name:"16",setup(n){const t={layout:"two-cols",srcSequence:"./pages/httpclient.md"};return ee(ie),(s,o)=>{const l=wn;return E(),ae(Un,Ke(We(t)),{right:W(r=>[N(l,we({},{ranges:[""]}),{default:W(()=>[CE]),_:1},16),EE,N(l,we({},{ranges:[""]}),{default:W(()=>[kE]),_:1},16)]),default:W(()=>[wE,xE]),_:1},16)}}},OE=ce(SE,[["__scopeId","data-v-495789e1"],["__file","/@slidev/slides/16.md"]]);const dt=n=>(en("data-v-fd5b3f17"),n=n(),nn(),n),$E=dt(()=>e("h1",null,"Roteamento de páginas",-1)),PE=dt(()=>e("p",null,"O Angular utiliza um mapeamento de rotas para componentes de modo a fazer o roteamento de páginas da aplicação.",-1)),TE={key:0,class:"left-below"},ME=dt(()=>e("p",null,"Por padrão, o Angular utiliza apenas o prefixo para selecionar o mapeamento que será ativado.",-1)),BE={key:1,class:"left-below"},RE=dt(()=>e("span",{class:"destaque"},"auth",-1)),IE=dt(()=>e("span",{class:"destaque"},"auth/login.",-1)),jE=dt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"{ path: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", redirectTo: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}}," },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"{ path: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", component: LoginPageComponent }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"{ ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  path: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/register"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  component: RegisterPageComponent ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"{ path: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", redirectTo: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}}," },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"{ path: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", component: LoginPageComponent }")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"{ ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  path: "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/register"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  component: RegisterPageComponent ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])])],-1)),LE={key:0},DE=dt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," ROUTES"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," [")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    redirectTo"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    pathMatch"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"full"),e("span",{style:{color:"#E9F284"}},"'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," LoginPageComponent },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/register"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," RegisterPageComponent ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"forRoot"),e("span",{style:{color:"#F8F8F2"}},"(ROUTES)],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  exports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," ROUTES"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," [")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    redirectTo"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    pathMatch"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"full"),e("span",{style:{color:"#E9F284"}},"'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," LoginPageComponent },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/register"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," RegisterPageComponent ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"forRoot"),e("span",{style:{color:"#F8F8F2"}},"(ROUTES)],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  exports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),NE=dt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),HE={key:1},qE=dt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," ROUTES"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," [")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    redirectTo"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    pathMatch"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"full"),e("span",{style:{color:"#E9F284"}},"'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," LoginPageComponent },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/register"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," RegisterPageComponent ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"forRoot"),e("span",{style:{color:"#F8F8F2"}},"(ROUTES)],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  exports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"const"),e("span",{style:{color:"#F8F8F2"}}," ROUTES"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD","font-style":"italic"}},"Routes"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#FF79C6"}},"="),e("span",{style:{color:"#F8F8F2"}}," [")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"''"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    redirectTo"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    pathMatch"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"full"),e("span",{style:{color:"#E9F284"}},"'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/login"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," LoginPageComponent },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  { ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    path"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F1FA8C"}},"auth/register"),e("span",{style:{color:"#E9F284"}},"'"),e("span",{style:{color:"#F8F8F2"}},", ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    component"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," RegisterPageComponent ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"."),e("span",{style:{color:"#50FA7B"}},"forRoot"),e("span",{style:{color:"#F8F8F2"}},"(ROUTES)],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  exports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"RouterModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),zE=dt(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"@"),e("span",{style:{color:"#50FA7B"}},"NgModule"),e("span",{style:{color:"#F8F8F2"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  imports"),e("span",{style:{color:"#FF79C6"}},":"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#50FA7B","font-style":"italic"}},"AppRoutingModule"),e("span",{style:{color:"#F8F8F2"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FF79C6"}},"class"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#8BE9FD"}},"AppModule"),e("span",{style:{color:"#F8F8F2"}}," {}")])])])],-1)),UE={__name:"17",setup(n){const t={layout:"two-cols",clicks:2,srcSequence:"./pages/router.md"},s=ee(ie);return(o,l)=>{const r=wn;return E(),ae(Un,Ke(We(t)),{right:W(a=>[w(s).nav.clicks===0?(E(),R("div",LE,[N(r,we({},{ranges:["all"]}),{default:W(()=>[DE]),_:1},16),N(r,we({},{ranges:[""]}),{default:W(()=>[NE]),_:1},16)])):X("v-if",!0),w(s).nav.clicks===1||w(s).nav.clicks===2?(E(),R("div",HE,[N(r,we({},{ranges:["all","2-6","2-6"]}),{default:W(()=>[qE]),_:1},16),N(r,we({},{ranges:[""]}),{default:W(()=>[zE]),_:1},16)])):X("v-if",!0)]),default:W(()=>[$E,PE,w(s).nav.clicks===1?(E(),R("div",TE,[p(" É possível fazer redirecionamento de rotas. "),ME])):X("v-if",!0),w(s).nav.clicks===2?(E(),R("div",BE,[p(" Exemplo: A configuração abaixo gera um redirecionamento infinito, pois o path "),RE,p(" também é prefixo de "),IE,N(r,we({},{ranges:[""]}),{default:W(()=>[jE]),_:1},16)])):X("v-if",!0)]),_:1},16)}}},VE=ce(UE,[["__scopeId","data-v-fd5b3f17"],["__file","/@slidev/slides/17.md"]]),WE=e("h1",null,"Boas práticas no Angular",-1),KE={__name:"18",setup(n){const t={layout:"center",srcSequence:"./pages/best-practices.md"};return ee(ie),(s,o)=>(E(),ae(hF,Ke(We(t)),{default:W(()=>[WE]),_:1},16))}},GE=ce(KE,[["__file","/@slidev/slides/18.md"]]);const Xi=n=>(en("data-v-429d7d5f"),n=n(),nn(),n),YE=Xi(()=>e("h1",null,"Arquitetura de Componentes",-1)),ZE=Xi(()=>e("p",null,"Possível agrupar os componentes em três grupos principais",-1)),JE=Xi(()=>e("ul",null,[e("li",null,[e("p",null,[e("span",{class:"page-comp"},"Page components"),p(": componentes que representam páginas da aplicação")]),e("ul",null,[e("li",null,"Utilizados na definição de rotas da aplicação"),e("li",null,"Normalmente não possuem muita lógica, apenas definido layout da página")])]),e("li",null,[e("p",null,[e("span",{class:"cont-comp"},"Container components"),p(": componentes que agrupam seções da página por funcionalidade")]),e("ul",null,[e("li",null,"Possuem a maior parte da lógica do layout aplicação."),e("li",null,"Normalmente armazenam o estado da interface.")])]),e("li",null,[e("p",null,[e("span",{class:"pres-comp"},"Presentational components"),p(": componentes que representam seções reutilizaveis da interface")]),e("ul",null,[e("li",null,"Não possuem muita lógica."),e("li",null,"Se comunicam principalmente por meio de Input e Outputs")])])],-1)),XE={__name:"19",setup(n){const t={srcSequence:"./pages/best-practices.md"};return ee(ie),(s,o)=>(E(),ae(eo,Ke(We(t)),{default:W(()=>[YE,ZE,JE]),_:1},16))}},QE=ce(XE,[["__scopeId","data-v-429d7d5f"],["__file","/@slidev/slides/19.md"]]),ek="/assets/twitch-page-components-ebbb2e3f.png";const gF=n=>(en("data-v-ee371282"),n=n(),nn(),n),nk=gF(()=>e("h1",null,"Arquitetura de Componentes - Exemplo",-1)),tk=gF(()=>e("div",{class:"components-example"},[e("div",{class:"legenda"},[e("ul",null,[e("li",null,[e("span",{class:"page-comp"},"Page")]),e("li",null,[e("span",{class:"cont-comp"},"Container")]),e("li",null,[e("span",{class:"pres-comp"},"Presentational")])])]),e("img",{src:ek,class:"twitch-image"})],-1)),sk={__name:"20",setup(n){const t={srcSequence:"./pages/best-practices.md"};return ee(ie),(s,o)=>(E(),ae(eo,Ke(We(t)),{default:W(()=>[nk,tk]),_:1},16))}},ok=ce(sk,[["__scopeId","data-v-ee371282"],["__file","/@slidev/slides/20.md"]]),lk="/assets/angular-modules-afd155ec.png";const Or=n=>(en("data-v-95c30a12"),n=n(),nn(),n),rk=Or(()=>e("h1",null,"Estrutura do projeto",-1)),ak={key:0,class:"left-side"},ik=Or(()=>e("ul",null,[e("li",null,"Feature modules: Agrupam os componentes de um contexto do projeto"),e("li",null,"Core module: Módulo único que armazena classes e serviços globais"),e("li",null,"Shared module: Armazena componentes, diretivas e pipes que são utilizados por toda a aplicação")],-1)),ck={key:1,class:"left-side"},pk=Or(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"src/app/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"     home/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      pages/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      components/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      home.module.ts <-- shared.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"     settings/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      pages/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      components/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      settings.module.ts <-- shared.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    ... outros modulos ..")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"     core/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      services/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      models/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      http-interceptors/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      guards/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      enumerations/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      utilities/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      core.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    shared/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      shared.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      components/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      directives/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      pipes/")])])]),e("pre",{class:"slidev-code shiki shiki-light dracula",style:{"background-color":"#282A36"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"src/app/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"     home/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      pages/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      components/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      home.module.ts <-- shared.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"     settings/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      pages/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      components/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      settings.module.ts <-- shared.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    ... outros modulos ..")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"     core/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      services/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      models/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      http-interceptors/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      guards/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      enumerations/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      utilities/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      core.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"    shared/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      shared.module.ts")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      components/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      directives/")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"      pipes/")])])])],-1)),uk=[pk],dk=Or(()=>e("div",{class:"right-side"},[e("img",{src:lk,class:"modules-example"})],-1)),fk={__name:"21",setup(n){const t={layout:"two-cols",clicks:1,srcSequence:"./pages/best-practices.md"},s=ee(ie);return(o,l)=>(E(),ae(Un,Ke(We(t)),{right:W(r=>[dk]),default:W(()=>[rk,w(s).nav.clicks===0?(E(),R("div",ak,[p(" Os módulos de um projeto Angular podem ser divididos em três tipos: "),ik])):X("v-if",!0),w(s).nav.clicks===1?(E(),R("div",ck,uk)):X("v-if",!0)]),_:1},16))}},Fk=ce(fk,[["__scopeId","data-v-95c30a12"],["__file","/@slidev/slides/21.md"]]),mk=[{path:"1",name:"page-1",component:Wx,meta:{theme:"dracula",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Apresentacao de conceitos basicos do angular
`,drawings:{persist:!1},colorSchema:"dark",transition:"slide-left",css:"unocss",fonts:{mono:"Fira Code"},title:'<carbon-logo-angular color="red" /> Angular <carbon-logo-angular color="red" />',slide:{raw:`---
# try also 'default' to start simple
theme: dracula
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Apresentacao de conceitos basicos do angular
# persist drawings in exports and build
drawings:
  persist: false
colorSchema: 'dark'
# page transition
transition: slide-left
# use UnoCSS
css: unocss

fonts:
  mono: 'Fira Code'
---

# <carbon-logo-angular color="red" /> Angular <carbon-logo-angular color="red" />

<h3>Conceitos básicos</h3>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:'<carbon-logo-angular color="red" /> Angular <carbon-logo-angular color="red" />',level:1,content:`# <carbon-logo-angular color="red" /> Angular <carbon-logo-angular color="red" />

<h3>Conceitos básicos</h3>`,frontmatter:{theme:"dracula",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Apresentacao de conceitos basicos do angular
`,drawings:{persist:!1},colorSchema:"dark",transition:"slide-left",css:"unocss",fonts:{mono:"Fira Code"},title:'<carbon-logo-angular color="red" /> Angular <carbon-logo-angular color="red" />'},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:33,noteHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:eC,meta:{slide:{raw:`
<h1> 
Fundamentos do <span class="angular-name">Angular</span>
</h1>

O Angular é um framework de componentização de interfaces, similar ao React e Vue, que permite 
a arquitetura escalável de páginas web.

<br>

- Possui cinco pilares principais: <span class="components">componentes</span>, <span class="directives">diretivas</span>, <span class="pipes">pipes</span>, <span class="services">serviços</span> e <span class="modules">módulos.</span>
- Uso do framework RxJS para implementação de reatividade e gerenciamento de estados
- Uníco framework de frontend que emprega container de injeção de dependências


<!--
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
.angular-name {
  color: #ff726f;
}

li {
  font-size: 1.2em;
}

span.components {
  color: blue;
  font-weight: bold;
}

span.directives {
  color: darkgreen;
  font-weight: bold;
}

span.services {
  color: darkred;
  font-weight: bold;
}

span.modules {
  color: purple;
  font-weight: bold;
}

span.pipes {
  color: gold;
  font-weight: bold;
}
</style>

<!--
Here is another comment.
-->
`,content:`<h1> 
Fundamentos do <span class="angular-name">Angular</span>
</h1>

O Angular é um framework de componentização de interfaces, similar ao React e Vue, que permite 
a arquitetura escalável de páginas web.

<br>

- Possui cinco pilares principais: <span class="components">componentes</span>, <span class="directives">diretivas</span>, <span class="pipes">pipes</span>, <span class="services">serviços</span> e <span class="modules">módulos.</span>
- Uso do framework RxJS para implementação de reatividade e gerenciamento de estados
- Uníco framework de frontend que emprega container de injeção de dependências


<!--
You can have \`style\` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
.angular-name {
  color: #ff726f;
}

li {
  font-size: 1.2em;
}

span.components {
  color: blue;
  font-weight: bold;
}

span.directives {
  color: darkgreen;
  font-weight: bold;
}

span.services {
  color: darkred;
  font-weight: bold;
}

span.modules {
  color: purple;
  font-weight: bold;
}

span.pipes {
  color: gold;
  font-weight: bold;
}
</style>`,frontmatter:{},note:"Here is another comment.",index:1,start:34,end:93,noteHTML:`<p>Here is another comment.</p>
`,filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:NC,meta:{layout:"two-cols",title:"Componentes",srcSequence:"./pages/basics.md",slide:{raw:null,title:"Componentes",level:1,content:`# Componentes

Conceito fundamental do angular que permite o encapsulamento de seções de interface


\`\`\`ts {all|2|3|4|5|8-17|11-13}
@Component({
  selector: \`app-login\`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
class LoginComponent {
  @Input() username?: string; 
  @Output() submit = new EventEmitter<void>()

  // Two way binding
  @Input() password?: string;
  @Output() passwordChange = new EventEmitter<string>()

  onLogin() {
    this.submit.next();
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
<h3>Selector</h3>
O seletor identifica como o componente será referido por outros componentes.

Exemplo:

\`\`\`html
<!-- app.component.html -->
<div>
  <app-login></app-login>
</div>
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 2">
  <h3>Template</h3>
  O template define o layout do componente em html
</div>

<div v-if="$slidev.nav.clicks === 3">
  <h3>StyleUrls</h3>
  <tt>styleUrls</tt> define os arquivos de estilização do componente.

  - A estilização do componente possui escopo limitado ao componente em que foi declarada.
    (porém isso pode ser alterado por meio de <tt>ViewEncapsulation.None</tt>)
  - O componente pode possuir multiplas definições estilos
  - Os estilos podem ser definidos em tempo de execução
</div>

<div v-if="$slidev.nav.clicks === 4">
  <h3>Providers</h3>
  Os componentes também fazem parte do sistema de injeção de depêndencias do Angular,
  podendo prover serviços.
</div>

<div v-if="$slidev.nav.clicks === 5">
  <h3>Inputs / Outputs</h3>
  Os componentes podem se comunicar com outros componentes por meio de inputs e outputs.

 Exemplo: 
\`\`\`html
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 6">
<h3>Inputs / Outputs</h3>
Os componentes podem se comunicar com outros componentes por meio de inputs e outputs

 Exemplo: 
\`\`\`html {5}
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
\`\`\`

Os componentes possuem suporte para two way data binding utilizando sufixo <tt>Change</tt>
</div>


</div>

<style>
  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>`,frontmatter:{layout:"two-cols",title:"Componentes",srcSequence:"./pages/basics.md"},index:2,start:0,end:120,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",raw:`---
layout: two-cols
---
# Componentes

Conceito fundamental do angular que permite o encapsulamento de seções de interface


\`\`\`ts {all|2|3|4|5|8-17|11-13}
@Component({
  selector: \`app-login\`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
class LoginComponent {
  @Input() username?: string; 
  @Output() submit = new EventEmitter<void>()

  // Two way binding
  @Input() password?: string;
  @Output() passwordChange = new EventEmitter<string>()

  onLogin() {
    this.submit.next();
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
<h3>Selector</h3>
O seletor identifica como o componente será referido por outros componentes.

Exemplo:

\`\`\`html
<!-- app.component.html -->
<div>
  <app-login></app-login>
</div>
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 2">
  <h3>Template</h3>
  O template define o layout do componente em html
</div>

<div v-if="$slidev.nav.clicks === 3">
  <h3>StyleUrls</h3>
  <tt>styleUrls</tt> define os arquivos de estilização do componente.

  - A estilização do componente possui escopo limitado ao componente em que foi declarada.
    (porém isso pode ser alterado por meio de <tt>ViewEncapsulation.None</tt>)
  - O componente pode possuir multiplas definições estilos
  - Os estilos podem ser definidos em tempo de execução
</div>

<div v-if="$slidev.nav.clicks === 4">
  <h3>Providers</h3>
  Os componentes também fazem parte do sistema de injeção de depêndencias do Angular,
  podendo prover serviços.
</div>

<div v-if="$slidev.nav.clicks === 5">
  <h3>Inputs / Outputs</h3>
  Os componentes podem se comunicar com outros componentes por meio de inputs e outputs.

 Exemplo: 
\`\`\`html
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 6">
<h3>Inputs / Outputs</h3>
Os componentes podem se comunicar com outros componentes por meio de inputs e outputs

 Exemplo: 
\`\`\`html {5}
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
\`\`\`

Os componentes possuem suporte para two way data binding utilizando sufixo <tt>Change</tt>
</div>


</div>

<style>
  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>
`,title:"Componentes",level:1,content:`# Componentes

Conceito fundamental do angular que permite o encapsulamento de seções de interface


\`\`\`ts {all|2|3|4|5|8-17|11-13}
@Component({
  selector: \`app-login\`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
class LoginComponent {
  @Input() username?: string; 
  @Output() submit = new EventEmitter<void>()

  // Two way binding
  @Input() password?: string;
  @Output() passwordChange = new EventEmitter<string>()

  onLogin() {
    this.submit.next();
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
<h3>Selector</h3>
O seletor identifica como o componente será referido por outros componentes.

Exemplo:

\`\`\`html
<!-- app.component.html -->
<div>
  <app-login></app-login>
</div>
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 2">
  <h3>Template</h3>
  O template define o layout do componente em html
</div>

<div v-if="$slidev.nav.clicks === 3">
  <h3>StyleUrls</h3>
  <tt>styleUrls</tt> define os arquivos de estilização do componente.

  - A estilização do componente possui escopo limitado ao componente em que foi declarada.
    (porém isso pode ser alterado por meio de <tt>ViewEncapsulation.None</tt>)
  - O componente pode possuir multiplas definições estilos
  - Os estilos podem ser definidos em tempo de execução
</div>

<div v-if="$slidev.nav.clicks === 4">
  <h3>Providers</h3>
  Os componentes também fazem parte do sistema de injeção de depêndencias do Angular,
  podendo prover serviços.
</div>

<div v-if="$slidev.nav.clicks === 5">
  <h3>Inputs / Outputs</h3>
  Os componentes podem se comunicar com outros componentes por meio de inputs e outputs.

 Exemplo: 
\`\`\`html
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 6">
<h3>Inputs / Outputs</h3>
Os componentes podem se comunicar com outros componentes por meio de inputs e outputs

 Exemplo: 
\`\`\`html {5}
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
\`\`\`

Os componentes possuem suporte para two way data binding utilizando sufixo <tt>Change</tt>
</div>


</div>

<style>
  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>`,frontmatter:{layout:"two-cols",title:"Componentes"},index:0,start:0,end:120},inline:{raw:`---
src: ./pages/basics.md
---
`,content:"",frontmatter:{},index:2,start:93,end:97},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:XC,meta:{layout:"two-cols",srcSequence:"./pages/basics.md",slide:{raw:`---
layout: two-cols
---

# Diretivas

As diretivas permitem ampliar a funcionalidade de seu elemento hospedeiro,
permitindo alteração de suas propriedades a interceptação de eventos do DOM.

\`\`\`ts {all|4-11|3}
@Directive({ selector: \`[appHighlight]\` })
class HighlightDirective {
  @Input() color: string = "yellow";

  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
Exemplo:

\`\`\`html
<div>
  <p appHighlight>
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

- As diretivas acessam o elemento hospedeiro por injeção de depêndencias.
- é possível acessar também serviços do container de injeção de depências.
</div>


<div v-if="$slidev.nav.clicks === 2">
Exemplo:

\`\`\`html
<div>
  <p appHighlight [color]="'blue'">
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

<div class="directive-infos">
As diretivas também podem possuir inputs e outputs para 
configuração ou comunicação com outros componentes.
</div>
</div>

</div> <!-- right-side -->

<style>
.right-side {
  height: 100%;
  padding: 50px 20px;
  flex-direction: column;
  display: flex;
}

.right-side *:not(:first-child) {
  margin-top: 30px;
}

.directive-infos {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
`,title:"Diretivas",level:1,content:`# Diretivas

As diretivas permitem ampliar a funcionalidade de seu elemento hospedeiro,
permitindo alteração de suas propriedades a interceptação de eventos do DOM.

\`\`\`ts {all|4-11|3}
@Directive({ selector: \`[appHighlight]\` })
class HighlightDirective {
  @Input() color: string = "yellow";

  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
Exemplo:

\`\`\`html
<div>
  <p appHighlight>
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

- As diretivas acessam o elemento hospedeiro por injeção de depêndencias.
- é possível acessar também serviços do container de injeção de depências.
</div>


<div v-if="$slidev.nav.clicks === 2">
Exemplo:

\`\`\`html
<div>
  <p appHighlight [color]="'blue'">
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

<div class="directive-infos">
As diretivas também podem possuir inputs e outputs para 
configuração ou comunicação com outros componentes.
</div>
</div>

</div> <!-- right-side -->

<style>
.right-side {
  height: 100%;
  padding: 50px 20px;
  flex-direction: column;
  display: flex;
}

.right-side *:not(:first-child) {
  margin-top: 30px;
}

.directive-infos {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/basics.md"},index:3,start:120,end:209,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",raw:`---
layout: two-cols
---

# Diretivas

As diretivas permitem ampliar a funcionalidade de seu elemento hospedeiro,
permitindo alteração de suas propriedades a interceptação de eventos do DOM.

\`\`\`ts {all|4-11|3}
@Directive({ selector: \`[appHighlight]\` })
class HighlightDirective {
  @Input() color: string = "yellow";

  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
Exemplo:

\`\`\`html
<div>
  <p appHighlight>
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

- As diretivas acessam o elemento hospedeiro por injeção de depêndencias.
- é possível acessar também serviços do container de injeção de depências.
</div>


<div v-if="$slidev.nav.clicks === 2">
Exemplo:

\`\`\`html
<div>
  <p appHighlight [color]="'blue'">
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

<div class="directive-infos">
As diretivas também podem possuir inputs e outputs para 
configuração ou comunicação com outros componentes.
</div>
</div>

</div> <!-- right-side -->

<style>
.right-side {
  height: 100%;
  padding: 50px 20px;
  flex-direction: column;
  display: flex;
}

.right-side *:not(:first-child) {
  margin-top: 30px;
}

.directive-infos {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
`,title:"Diretivas",level:1,content:`# Diretivas

As diretivas permitem ampliar a funcionalidade de seu elemento hospedeiro,
permitindo alteração de suas propriedades a interceptação de eventos do DOM.

\`\`\`ts {all|4-11|3}
@Directive({ selector: \`[appHighlight]\` })
class HighlightDirective {
  @Input() color: string = "yellow";

  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
Exemplo:

\`\`\`html
<div>
  <p appHighlight>
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

- As diretivas acessam o elemento hospedeiro por injeção de depêndencias.
- é possível acessar também serviços do container de injeção de depências.
</div>


<div v-if="$slidev.nav.clicks === 2">
Exemplo:

\`\`\`html
<div>
  <p appHighlight [color]="'blue'">
    Este texto será destacado na entrada do mouse
  </p>
</div>
\`\`\`

<div class="directive-infos">
As diretivas também podem possuir inputs e outputs para 
configuração ou comunicação com outros componentes.
</div>
</div>

</div> <!-- right-side -->

<style>
.right-side {
  height: 100%;
  padding: 50px 20px;
  flex-direction: column;
  display: flex;
}

.right-side *:not(:first-child) {
  margin-top: 30px;
}

.directive-infos {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>`,frontmatter:{layout:"two-cols"},index:1,start:120,end:209},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:r9,meta:{layout:"two-cols",srcSequence:"./pages/basics.md",slide:{raw:`---
layout: two-cols
---

# Pipes

<div class="left-side">
Utilizada para transformar valores para exibição em formato amigável ao usuário

\`\`\`ts
@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string|null|undefined): string|null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(value);
    }
    return value.toUpperCase();
  }
}
\`\`\`
</div>

::right::

<div class="left-side">
<div>
Exemplo:

\`\`\`html
<div>
  <p> {{ name | uppercase }}</p>
</div>
\`\`\`
</div>

As pipes podem receber parâmetros que são passados como argumentos para a função transform.
</div>

<style>
  .right-side {
    padding: 10px;
  }

  .left-side {
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>
`,title:"Pipes",level:1,content:`# Pipes

<div class="left-side">
Utilizada para transformar valores para exibição em formato amigável ao usuário

\`\`\`ts
@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string|null|undefined): string|null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(value);
    }
    return value.toUpperCase();
  }
}
\`\`\`
</div>

::right::

<div class="left-side">
<div>
Exemplo:

\`\`\`html
<div>
  <p> {{ name | uppercase }}</p>
</div>
\`\`\`
</div>

As pipes podem receber parâmetros que são passados como argumentos para a função transform.
</div>

<style>
  .right-side {
    padding: 10px;
  }

  .left-side {
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/basics.md"},index:4,start:209,end:265,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",raw:`---
layout: two-cols
---

# Pipes

<div class="left-side">
Utilizada para transformar valores para exibição em formato amigável ao usuário

\`\`\`ts
@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string|null|undefined): string|null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(value);
    }
    return value.toUpperCase();
  }
}
\`\`\`
</div>

::right::

<div class="left-side">
<div>
Exemplo:

\`\`\`html
<div>
  <p> {{ name | uppercase }}</p>
</div>
\`\`\`
</div>

As pipes podem receber parâmetros que são passados como argumentos para a função transform.
</div>

<style>
  .right-side {
    padding: 10px;
  }

  .left-side {
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>
`,title:"Pipes",level:1,content:`# Pipes

<div class="left-side">
Utilizada para transformar valores para exibição em formato amigável ao usuário

\`\`\`ts
@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string|null|undefined): string|null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(value);
    }
    return value.toUpperCase();
  }
}
\`\`\`
</div>

::right::

<div class="left-side">
<div>
Exemplo:

\`\`\`html
<div>
  <p> {{ name | uppercase }}</p>
</div>
\`\`\`
</div>

As pipes podem receber parâmetros que são passados como argumentos para a função transform.
</div>

<style>
  .right-side {
    padding: 10px;
  }

  .left-side {
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,frontmatter:{layout:"two-cols"},index:2,start:209,end:265},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:d9,meta:{layout:"two-cols",srcSequence:"./pages/basics.md",slide:{raw:`---
layout: two-cols
---

# Serviços

Os serviços dão suporte aos componentes, lidando com lógica de negócio,
gerenciamento de estados e comunicação entre componentes.

\`\`\`ts
@Injectable({})
class AuthService {
  constructor(private http: HttpClient) {}

  public isUserLoggedIn(): boolean {
    /* checa se o usuário está logado */
  } 

  public getAccessToken(): AccessToken {
    /* obtem a token de acesso do armazenamento */
  }

  public async login(username: string, password: string) {
    return await this.http.post(/* login route */)
      .asPromise()
  }
}
\`\`\`

::right::

<div class="right-side">

- São classes simples do Javascript/Typescript.
- Dependendo de como são configuradas na injeção de depêndencias do angular, podem ser utilizadas para comunicação entre componentes.
</div>

<style>
.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->

`,title:"Serviços",level:1,content:`# Serviços

Os serviços dão suporte aos componentes, lidando com lógica de negócio,
gerenciamento de estados e comunicação entre componentes.

\`\`\`ts
@Injectable({})
class AuthService {
  constructor(private http: HttpClient) {}

  public isUserLoggedIn(): boolean {
    /* checa se o usuário está logado */
  } 

  public getAccessToken(): AccessToken {
    /* obtem a token de acesso do armazenamento */
  }

  public async login(username: string, password: string) {
    return await this.http.post(/* login route */)
      .asPromise()
  }
}
\`\`\`

::right::

<div class="right-side">

- São classes simples do Javascript/Typescript.
- Dependendo de como são configuradas na injeção de depêndencias do angular, podem ser utilizadas para comunicação entre componentes.
</div>

<style>
.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/basics.md"},note:`Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>`,index:5,start:265,end:323,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",raw:`---
layout: two-cols
---

# Serviços

Os serviços dão suporte aos componentes, lidando com lógica de negócio,
gerenciamento de estados e comunicação entre componentes.

\`\`\`ts
@Injectable({})
class AuthService {
  constructor(private http: HttpClient) {}

  public isUserLoggedIn(): boolean {
    /* checa se o usuário está logado */
  } 

  public getAccessToken(): AccessToken {
    /* obtem a token de acesso do armazenamento */
  }

  public async login(username: string, password: string) {
    return await this.http.post(/* login route */)
      .asPromise()
  }
}
\`\`\`

::right::

<div class="right-side">

- São classes simples do Javascript/Typescript.
- Dependendo de como são configuradas na injeção de depêndencias do angular, podem ser utilizadas para comunicação entre componentes.
</div>

<style>
.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->

`,title:"Serviços",level:1,content:`# Serviços

Os serviços dão suporte aos componentes, lidando com lógica de negócio,
gerenciamento de estados e comunicação entre componentes.

\`\`\`ts
@Injectable({})
class AuthService {
  constructor(private http: HttpClient) {}

  public isUserLoggedIn(): boolean {
    /* checa se o usuário está logado */
  } 

  public getAccessToken(): AccessToken {
    /* obtem a token de acesso do armazenamento */
  }

  public async login(username: string, password: string) {
    return await this.http.post(/* login route */)
      .asPromise()
  }
}
\`\`\`

::right::

<div class="right-side">

- São classes simples do Javascript/Typescript.
- Dependendo de como são configuradas na injeção de depêndencias do angular, podem ser utilizadas para comunicação entre componentes.
</div>

<style>
.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>`,frontmatter:{layout:"two-cols"},note:`Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>`,index:3,start:265,end:323},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",noteHTML:`<p>Presenter note with <strong>bold</strong>, <em>italic</em>, and <s>striked</s> text.</p>
<p>Also, HTML elements are valid:</p>
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>`,id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:L9,meta:{layout:"two-cols",srcSequence:"./pages/basics.md",slide:{raw:`---
layout: two-cols
---

# Módulos

Configura o container de injeção de depêndencias do Angular e permite a 
modularização do projeto por subdomínios de negócio.

\`\`\`ts {all|2-5|6-7|8|all}
@NgModule({
  declarations: [
    CartPageComponent, 
    PaymentMethodComponent
  ],
  imports: [FormsModule, UiLibraryModule],
  exports: [PaymentMethodComponent],
  providers: [PaymentService],
})
class CheckoutModule {}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">

<h3>Declarations</h3>

Nesse campo são declarados os elementos declaráveis (i.e. componentes, diretivas e pipes) que são utilizados por esse módulo.

- Os componentes precisam ser declarados no módulo antes de serem utilizados em templates
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Imports</h3>

Permite a importação de outros módulos que possuam elementos declaráveis ou serviços que são utilizados nos templates desse módulo.
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Exports</h3>

Permite a exportação de componentes desse módulo para que possam ser utilizados
em outros módulos (desde que importem este módulo). 
</div>

<div v-if="$slidev.nav.clicks === 3">
<h3>Providers</h3>

Utilizado para declarar serviços no container de injeção de dependências do Angular.

- Os serviços declarados em providers possuem escopo global.
</div>

<div v-if="$slidev.nav.clicks === 4">
  Benefícios da modularização da aplicação: 

  - Lazy loading de módulos
  - Decomposição em microfrontends.
</div>

</div>

<style>
  

  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>`,title:"Módulos",level:1,content:`# Módulos

Configura o container de injeção de depêndencias do Angular e permite a 
modularização do projeto por subdomínios de negócio.

\`\`\`ts {all|2-5|6-7|8|all}
@NgModule({
  declarations: [
    CartPageComponent, 
    PaymentMethodComponent
  ],
  imports: [FormsModule, UiLibraryModule],
  exports: [PaymentMethodComponent],
  providers: [PaymentService],
})
class CheckoutModule {}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">

<h3>Declarations</h3>

Nesse campo são declarados os elementos declaráveis (i.e. componentes, diretivas e pipes) que são utilizados por esse módulo.

- Os componentes precisam ser declarados no módulo antes de serem utilizados em templates
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Imports</h3>

Permite a importação de outros módulos que possuam elementos declaráveis ou serviços que são utilizados nos templates desse módulo.
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Exports</h3>

Permite a exportação de componentes desse módulo para que possam ser utilizados
em outros módulos (desde que importem este módulo). 
</div>

<div v-if="$slidev.nav.clicks === 3">
<h3>Providers</h3>

Utilizado para declarar serviços no container de injeção de dependências do Angular.

- Os serviços declarados em providers possuem escopo global.
</div>

<div v-if="$slidev.nav.clicks === 4">
  Benefícios da modularização da aplicação: 

  - Lazy loading de módulos
  - Decomposição em microfrontends.
</div>

</div>

<style>
  

  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/basics.md"},index:6,start:323,end:400,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",raw:`---
layout: two-cols
---

# Módulos

Configura o container de injeção de depêndencias do Angular e permite a 
modularização do projeto por subdomínios de negócio.

\`\`\`ts {all|2-5|6-7|8|all}
@NgModule({
  declarations: [
    CartPageComponent, 
    PaymentMethodComponent
  ],
  imports: [FormsModule, UiLibraryModule],
  exports: [PaymentMethodComponent],
  providers: [PaymentService],
})
class CheckoutModule {}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">

<h3>Declarations</h3>

Nesse campo são declarados os elementos declaráveis (i.e. componentes, diretivas e pipes) que são utilizados por esse módulo.

- Os componentes precisam ser declarados no módulo antes de serem utilizados em templates
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Imports</h3>

Permite a importação de outros módulos que possuam elementos declaráveis ou serviços que são utilizados nos templates desse módulo.
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Exports</h3>

Permite a exportação de componentes desse módulo para que possam ser utilizados
em outros módulos (desde que importem este módulo). 
</div>

<div v-if="$slidev.nav.clicks === 3">
<h3>Providers</h3>

Utilizado para declarar serviços no container de injeção de dependências do Angular.

- Os serviços declarados em providers possuem escopo global.
</div>

<div v-if="$slidev.nav.clicks === 4">
  Benefícios da modularização da aplicação: 

  - Lazy loading de módulos
  - Decomposição em microfrontends.
</div>

</div>

<style>
  

  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>`,title:"Módulos",level:1,content:`# Módulos

Configura o container de injeção de depêndencias do Angular e permite a 
modularização do projeto por subdomínios de negócio.

\`\`\`ts {all|2-5|6-7|8|all}
@NgModule({
  declarations: [
    CartPageComponent, 
    PaymentMethodComponent
  ],
  imports: [FormsModule, UiLibraryModule],
  exports: [PaymentMethodComponent],
  providers: [PaymentService],
})
class CheckoutModule {}
\`\`\`

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">

<h3>Declarations</h3>

Nesse campo são declarados os elementos declaráveis (i.e. componentes, diretivas e pipes) que são utilizados por esse módulo.

- Os componentes precisam ser declarados no módulo antes de serem utilizados em templates
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Imports</h3>

Permite a importação de outros módulos que possuam elementos declaráveis ou serviços que são utilizados nos templates desse módulo.
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Exports</h3>

Permite a exportação de componentes desse módulo para que possam ser utilizados
em outros módulos (desde que importem este módulo). 
</div>

<div v-if="$slidev.nav.clicks === 3">
<h3>Providers</h3>

Utilizado para declarar serviços no container de injeção de dependências do Angular.

- Os serviços declarados em providers possuem escopo global.
</div>

<div v-if="$slidev.nav.clicks === 4">
  Benefícios da modularização da aplicação: 

  - Lazy loading de módulos
  - Decomposição em microfrontends.
</div>

</div>

<style>
  

  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>`,frontmatter:{layout:"two-cols"},index:4,start:323,end:400},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/basics.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:o6,meta:{clicks:4,title:"Injeção de dependências",srcSequence:"./pages/di.md",slide:{raw:null,title:"Injeção de dependências",level:1,content:`# Injeção de dependências

Técnica de desenvolvimento de software que permite que aplicações sejam mais flexíveis, extensíveis e testáveis.

<div v-if="$slidev.nav.clicks === 1">
- Para que as depêndencias sejam injetadas, a classe precisa abrir mão de suas instanciações
</div>

<br/>

<div v-if="$slidev.nav.clicks === 2">
Exemplo: a classe abaixo está acoplada as suas depêndencias.

- Alterar o banco de dados requer alterações em todos os services
- É díficil testar a classe se o MongoClient faz uma conexão ao banco de dados

\`\`\`ts
class BalanceService {
  private accountRepository: AccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository(new MongoClient(MONGO_URL));
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 3">
Exemplo: Após introdução de injeção de depêndencias 

\`\`\`ts {1-2,7-9}
const repo = new AccountRepository(new MongoClient(MONGO_URL));
const balanceService = new BalanceService(repo)

class BalanceService {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository; 
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 4">
<span class="destaque">A "Injeção de depêndencias" nada mais é que a passagem de
depêndencias para a classe dependente, por meio de seu construtor,
propiedades ou parâmetros de funções. </span>
</div>

<br/>

<div v-if="$slidev.nav.clicks === 4">
Porém em sistemas complexos, instanciar todas as classes e suas depêndencias manualmente é um processo tedioso.
<br/>
<br/>
<br/>
<div class="solution">
  Solução: <span class="answer">Container de injeção de depêndencias</span>
</div>
</div>

<style>
.destaque {
  color: gold;
}

.solution {
  text-align: center;
  font-size: 1.3em;
}

.answer {
  color: gold;
}

</style>`,frontmatter:{clicks:4,title:"Injeção de dependências",srcSequence:"./pages/di.md"},index:7,start:0,end:88,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/di.md",raw:`---
clicks: 4
---

# Injeção de dependências

Técnica de desenvolvimento de software que permite que aplicações sejam mais flexíveis, extensíveis e testáveis.

<div v-if="$slidev.nav.clicks === 1">
- Para que as depêndencias sejam injetadas, a classe precisa abrir mão de suas instanciações
</div>

<br/>

<div v-if="$slidev.nav.clicks === 2">
Exemplo: a classe abaixo está acoplada as suas depêndencias.

- Alterar o banco de dados requer alterações em todos os services
- É díficil testar a classe se o MongoClient faz uma conexão ao banco de dados

\`\`\`ts
class BalanceService {
  private accountRepository: AccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository(new MongoClient(MONGO_URL));
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 3">
Exemplo: Após introdução de injeção de depêndencias 

\`\`\`ts {1-2,7-9}
const repo = new AccountRepository(new MongoClient(MONGO_URL));
const balanceService = new BalanceService(repo)

class BalanceService {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository; 
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 4">
<span class="destaque">A "Injeção de depêndencias" nada mais é que a passagem de
depêndencias para a classe dependente, por meio de seu construtor,
propiedades ou parâmetros de funções. </span>
</div>

<br/>

<div v-if="$slidev.nav.clicks === 4">
Porém em sistemas complexos, instanciar todas as classes e suas depêndencias manualmente é um processo tedioso.
<br/>
<br/>
<br/>
<div class="solution">
  Solução: <span class="answer">Container de injeção de depêndencias</span>
</div>
</div>

<style>
.destaque {
  color: gold;
}

.solution {
  text-align: center;
  font-size: 1.3em;
}

.answer {
  color: gold;
}

</style>
`,title:"Injeção de dependências",level:1,content:`# Injeção de dependências

Técnica de desenvolvimento de software que permite que aplicações sejam mais flexíveis, extensíveis e testáveis.

<div v-if="$slidev.nav.clicks === 1">
- Para que as depêndencias sejam injetadas, a classe precisa abrir mão de suas instanciações
</div>

<br/>

<div v-if="$slidev.nav.clicks === 2">
Exemplo: a classe abaixo está acoplada as suas depêndencias.

- Alterar o banco de dados requer alterações em todos os services
- É díficil testar a classe se o MongoClient faz uma conexão ao banco de dados

\`\`\`ts
class BalanceService {
  private accountRepository: AccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository(new MongoClient(MONGO_URL));
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 3">
Exemplo: Após introdução de injeção de depêndencias 

\`\`\`ts {1-2,7-9}
const repo = new AccountRepository(new MongoClient(MONGO_URL));
const balanceService = new BalanceService(repo)

class BalanceService {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository; 
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 4">
<span class="destaque">A "Injeção de depêndencias" nada mais é que a passagem de
depêndencias para a classe dependente, por meio de seu construtor,
propiedades ou parâmetros de funções. </span>
</div>

<br/>

<div v-if="$slidev.nav.clicks === 4">
Porém em sistemas complexos, instanciar todas as classes e suas depêndencias manualmente é um processo tedioso.
<br/>
<br/>
<br/>
<div class="solution">
  Solução: <span class="answer">Container de injeção de depêndencias</span>
</div>
</div>

<style>
.destaque {
  color: gold;
}

.solution {
  text-align: center;
  font-size: 1.3em;
}

.answer {
  color: gold;
}

</style>`,frontmatter:{clicks:4,title:"Injeção de dependências"},index:0,start:0,end:88},inline:{raw:`---
src: ./pages/di.md
---
`,content:"",frontmatter:{},index:3,start:97,end:101},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/di.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:f6,meta:{srcSequence:"./pages/di.md",slide:{raw:`
# Resolução de dependências no Angular

<div class="img-section">
<div class="left">
<img src="/imgs/angular-di.webp" class="di-img" />
</div>
<div class="right">

\`\`\`ts
@NgModule({
  provides: [ExampleService]
})
class RootModule {}
\`\`\`

\`\`\`ts
@Component({
  provides: [ExampleService]
})
class RootComponent {}
\`\`\`
</div>
</div>

<style>
.img-section {
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.di-img {
  height: 95%;
  width: 95%;
}
</style>`,title:"Resolução de dependências no Angular",level:1,content:`# Resolução de dependências no Angular

<div class="img-section">
<div class="left">
<img src="/imgs/angular-di.webp" class="di-img" />
</div>
<div class="right">

\`\`\`ts
@NgModule({
  provides: [ExampleService]
})
class RootModule {}
\`\`\`

\`\`\`ts
@Component({
  provides: [ExampleService]
})
class RootComponent {}
\`\`\`
</div>
</div>

<style>
.img-section {
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.di-img {
  height: 95%;
  width: 95%;
}
</style>`,frontmatter:{srcSequence:"./pages/di.md"},index:8,start:89,end:135,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/di.md",raw:`
# Resolução de dependências no Angular

<div class="img-section">
<div class="left">
<img src="/imgs/angular-di.webp" class="di-img" />
</div>
<div class="right">

\`\`\`ts
@NgModule({
  provides: [ExampleService]
})
class RootModule {}
\`\`\`

\`\`\`ts
@Component({
  provides: [ExampleService]
})
class RootComponent {}
\`\`\`
</div>
</div>

<style>
.img-section {
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.di-img {
  height: 95%;
  width: 95%;
}
</style>`,title:"Resolução de dependências no Angular",level:1,content:`# Resolução de dependências no Angular

<div class="img-section">
<div class="left">
<img src="/imgs/angular-di.webp" class="di-img" />
</div>
<div class="right">

\`\`\`ts
@NgModule({
  provides: [ExampleService]
})
class RootModule {}
\`\`\`

\`\`\`ts
@Component({
  provides: [ExampleService]
})
class RootComponent {}
\`\`\`
</div>
</div>

<style>
.img-section {
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.di-img {
  height: 95%;
  width: 95%;
}
</style>`,frontmatter:{},index:1,start:89,end:135},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/di.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:k6,meta:{title:"Programação Reativa no Angular",srcSequence:"./pages/rxjs.md",slide:{raw:null,title:"Programação Reativa no Angular",level:1,content:`# Programação Reativa no Angular

<div class="side-by-side">
<div class="rxjs-text">
O Angular utiliza a biblioteca RxJS para implementar reatividade.
</div>

<img src="/imgs/rxjs-logo.jpeg" class="rxjs-logo" />
</div>

<div class="below side-by-side">
<div class="react-description">
Na programação reativa, a lógica do sistema é definida de forma declarativa como efeito colaterais de eventos do sistema.

Em frameworks de interface com paradigma reativo, as interfaces são definidas em função de alterações (i.e. eventos) no estado do sistema.
</div>

<div>
O React <carbon-logo-react color="blue"/> é um exemplo de framework reativo:

\`\`\`ts

const RootComponent = () => {
  const [isLoggedIn, _]= useState(false)

  if (isLoggerIn) {
    return <HomePage />
  } else {
    return <AuthPage />
  }
}
\`\`\`
</div>
</div>

<style>
.rxjs-name {
  color: #E11299;
}

.rxjs-text {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}

.side-by-side {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.below {
  height: 300px;
  align-items: center;
}

.react-description {
  max-width: 350px;
  margin-right: 30px;
}
</style>`,frontmatter:{title:"Programação Reativa no Angular",srcSequence:"./pages/rxjs.md"},index:9,start:0,end:66,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/rxjs.md",raw:`
# Programação Reativa no Angular

<div class="side-by-side">
<div class="rxjs-text">
O Angular utiliza a biblioteca RxJS para implementar reatividade.
</div>

<img src="/imgs/rxjs-logo.jpeg" class="rxjs-logo" />
</div>

<div class="below side-by-side">
<div class="react-description">
Na programação reativa, a lógica do sistema é definida de forma declarativa como efeito colaterais de eventos do sistema.

Em frameworks de interface com paradigma reativo, as interfaces são definidas em função de alterações (i.e. eventos) no estado do sistema.
</div>

<div>
O React <carbon-logo-react color="blue"/> é um exemplo de framework reativo:

\`\`\`ts

const RootComponent = () => {
  const [isLoggedIn, _]= useState(false)

  if (isLoggerIn) {
    return <HomePage />
  } else {
    return <AuthPage />
  }
}
\`\`\`
</div>
</div>

<style>
.rxjs-name {
  color: #E11299;
}

.rxjs-text {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}

.side-by-side {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.below {
  height: 300px;
  align-items: center;
}

.react-description {
  max-width: 350px;
  margin-right: 30px;
}
</style>

`,title:"Programação Reativa no Angular",level:1,content:`# Programação Reativa no Angular

<div class="side-by-side">
<div class="rxjs-text">
O Angular utiliza a biblioteca RxJS para implementar reatividade.
</div>

<img src="/imgs/rxjs-logo.jpeg" class="rxjs-logo" />
</div>

<div class="below side-by-side">
<div class="react-description">
Na programação reativa, a lógica do sistema é definida de forma declarativa como efeito colaterais de eventos do sistema.

Em frameworks de interface com paradigma reativo, as interfaces são definidas em função de alterações (i.e. eventos) no estado do sistema.
</div>

<div>
O React <carbon-logo-react color="blue"/> é um exemplo de framework reativo:

\`\`\`ts

const RootComponent = () => {
  const [isLoggedIn, _]= useState(false)

  if (isLoggerIn) {
    return <HomePage />
  } else {
    return <AuthPage />
  }
}
\`\`\`
</div>
</div>

<style>
.rxjs-name {
  color: #E11299;
}

.rxjs-text {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}

.side-by-side {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.below {
  height: 300px;
  align-items: center;
}

.react-description {
  max-width: 350px;
  margin-right: 30px;
}
</style>`,frontmatter:{title:"Programação Reativa no Angular"},index:0,start:0,end:66},inline:{raw:`---
src: ./pages/rxjs.md
---
`,content:"",frontmatter:{},index:4,start:101,end:105},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/rxjs.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:L6,meta:{layout:"two-cols",srcSequence:"./pages/rxjs.md",slide:{raw:`---
layout: two-cols
---

<h1> 
<span class="rxjs-name">RxJS</span> - Observables
</h1>

<br />

#### "Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)

<br />

Um observable é um emissor de valores ao longo do tempo, sem que seu consumidor possua influência sobre quando são emitidos.

Isto pode ser utilizado para representar diversos conceitos:

- Eventos do mouse - (multiplos eventos ao longo tempo)
- Requisição HTTP - (Unico evento ao longo tempo)

::right::

<div class="right-side" v-click>
Exemplo:

\`\`\`ts
const obs = new Observable(sub => {
  let count = 1;

  let handle = setInterval(() => {
    sub.next(1);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

const subs = obs.subscribe((count) => {
  console.log(count); // 1, 2, 3, 4 ....
})

setTimeout(() => subs.unsubscribe(), 10000)
\`\`\`

</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
`,title:'"Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)',level:4,content:`<h1> 
<span class="rxjs-name">RxJS</span> - Observables
</h1>

<br />

#### "Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)

<br />

Um observable é um emissor de valores ao longo do tempo, sem que seu consumidor possua influência sobre quando são emitidos.

Isto pode ser utilizado para representar diversos conceitos:

- Eventos do mouse - (multiplos eventos ao longo tempo)
- Requisição HTTP - (Unico evento ao longo tempo)

::right::

<div class="right-side" v-click>
Exemplo:

\`\`\`ts
const obs = new Observable(sub => {
  let count = 1;

  let handle = setInterval(() => {
    sub.next(1);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

const subs = obs.subscribe((count) => {
  console.log(count); // 1, 2, 3, 4 ....
})

setTimeout(() => subs.unsubscribe(), 10000)
\`\`\`

</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/rxjs.md"},index:10,start:66,end:127,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/rxjs.md",raw:`---
layout: two-cols
---

<h1> 
<span class="rxjs-name">RxJS</span> - Observables
</h1>

<br />

#### "Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)

<br />

Um observable é um emissor de valores ao longo do tempo, sem que seu consumidor possua influência sobre quando são emitidos.

Isto pode ser utilizado para representar diversos conceitos:

- Eventos do mouse - (multiplos eventos ao longo tempo)
- Requisição HTTP - (Unico evento ao longo tempo)

::right::

<div class="right-side" v-click>
Exemplo:

\`\`\`ts
const obs = new Observable(sub => {
  let count = 1;

  let handle = setInterval(() => {
    sub.next(1);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

const subs = obs.subscribe((count) => {
  console.log(count); // 1, 2, 3, 4 ....
})

setTimeout(() => subs.unsubscribe(), 10000)
\`\`\`

</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
`,title:'"Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)',level:4,content:`<h1> 
<span class="rxjs-name">RxJS</span> - Observables
</h1>

<br />

#### "Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)

<br />

Um observable é um emissor de valores ao longo do tempo, sem que seu consumidor possua influência sobre quando são emitidos.

Isto pode ser utilizado para representar diversos conceitos:

- Eventos do mouse - (multiplos eventos ao longo tempo)
- Requisição HTTP - (Unico evento ao longo tempo)

::right::

<div class="right-side" v-click>
Exemplo:

\`\`\`ts
const obs = new Observable(sub => {
  let count = 1;

  let handle = setInterval(() => {
    sub.next(1);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

const subs = obs.subscribe((count) => {
  console.log(count); // 1, 2, 3, 4 ....
})

setTimeout(() => subs.unsubscribe(), 10000)
\`\`\`

</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>`,frontmatter:{layout:"two-cols"},index:1,start:66,end:127},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/rxjs.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:nE,meta:{layout:"two-cols",clicks:4,srcSequence:"./pages/rxjs.md",slide:{raw:`---
layout: two-cols
clicks: 4
---


<h1> 
<span class="rxjs-name">RxJS</span> - Comparação
</h1>


<div class="left-side">

<img src="/imgs/rxjs-observable.png" class="cmp-img" />

</div>

::right::

<div class="right-side" v-if="$slidev.nav.clicks === 1">

#### Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor

\`\`\`ts
function double(value: number) {
  return number * 2;
}

// Consumidor determina quando o
// valor será retornado.
setTimeout(() => {
  const doubled = double(4);
}, 2000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 2">

#### Iteradores retornam multiplos elementos e o momento de retorno do valor é definido pelo consumidor

\`\`\`ts
function* fibbonacci() {
  let previous = 0;
  let current = 1;

  // Multiplos elementos são retornados
  while (true) {
    yield previous;
    let value = previous + current;
    previous = current;
    current = value;
  }
}

const iter = fibbonacci();

/* O consumidor determina quando 
  os elementos são retornados */
setInteval(() => {
  const value = iter.next();
}, 1000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 3">

#### Promises retornam apenas um único valor, porém o produtor decide quando o valor será retornado

\`\`\`ts
const afterTimeout = new Promise((resolve, _) => {
  // Produtor define quando o valor será retornado
  setTimeout(() => {
    resolve(10);
  }, 1000);
})

// O consumidor precisa esperar o valor ser emitido
afterTimeout()
  .then((value) => console.log(value))

\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 4">

#### Observables retornam múltiplos valores e o produtor decide quando eles serão retornados

\`\`\`ts
const counter = new Observable((subs) => {
  // Produtor define quando os valorres serão retornados
  // Multiplos valores são emitidos
  let count = 1;
  let handle = setInterval(() => {
    subs.next(count);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

// O consumidor espera os valores serem emitidos
counter
  .subscribe((value) => console.log(value))

\`\`\`
</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 

  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,title:"Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor",level:4,content:`<h1> 
<span class="rxjs-name">RxJS</span> - Comparação
</h1>


<div class="left-side">

<img src="/imgs/rxjs-observable.png" class="cmp-img" />

</div>

::right::

<div class="right-side" v-if="$slidev.nav.clicks === 1">

#### Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor

\`\`\`ts
function double(value: number) {
  return number * 2;
}

// Consumidor determina quando o
// valor será retornado.
setTimeout(() => {
  const doubled = double(4);
}, 2000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 2">

#### Iteradores retornam multiplos elementos e o momento de retorno do valor é definido pelo consumidor

\`\`\`ts
function* fibbonacci() {
  let previous = 0;
  let current = 1;

  // Multiplos elementos são retornados
  while (true) {
    yield previous;
    let value = previous + current;
    previous = current;
    current = value;
  }
}

const iter = fibbonacci();

/* O consumidor determina quando 
  os elementos são retornados */
setInteval(() => {
  const value = iter.next();
}, 1000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 3">

#### Promises retornam apenas um único valor, porém o produtor decide quando o valor será retornado

\`\`\`ts
const afterTimeout = new Promise((resolve, _) => {
  // Produtor define quando o valor será retornado
  setTimeout(() => {
    resolve(10);
  }, 1000);
})

// O consumidor precisa esperar o valor ser emitido
afterTimeout()
  .then((value) => console.log(value))

\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 4">

#### Observables retornam múltiplos valores e o produtor decide quando eles serão retornados

\`\`\`ts
const counter = new Observable((subs) => {
  // Produtor define quando os valorres serão retornados
  // Multiplos valores são emitidos
  let count = 1;
  let handle = setInterval(() => {
    subs.next(count);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

// O consumidor espera os valores serem emitidos
counter
  .subscribe((value) => console.log(value))

\`\`\`
</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 

  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,frontmatter:{layout:"two-cols",clicks:4,srcSequence:"./pages/rxjs.md"},index:11,start:127,end:254,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/rxjs.md",raw:`---
layout: two-cols
clicks: 4
---


<h1> 
<span class="rxjs-name">RxJS</span> - Comparação
</h1>


<div class="left-side">

<img src="/imgs/rxjs-observable.png" class="cmp-img" />

</div>

::right::

<div class="right-side" v-if="$slidev.nav.clicks === 1">

#### Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor

\`\`\`ts
function double(value: number) {
  return number * 2;
}

// Consumidor determina quando o
// valor será retornado.
setTimeout(() => {
  const doubled = double(4);
}, 2000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 2">

#### Iteradores retornam multiplos elementos e o momento de retorno do valor é definido pelo consumidor

\`\`\`ts
function* fibbonacci() {
  let previous = 0;
  let current = 1;

  // Multiplos elementos são retornados
  while (true) {
    yield previous;
    let value = previous + current;
    previous = current;
    current = value;
  }
}

const iter = fibbonacci();

/* O consumidor determina quando 
  os elementos são retornados */
setInteval(() => {
  const value = iter.next();
}, 1000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 3">

#### Promises retornam apenas um único valor, porém o produtor decide quando o valor será retornado

\`\`\`ts
const afterTimeout = new Promise((resolve, _) => {
  // Produtor define quando o valor será retornado
  setTimeout(() => {
    resolve(10);
  }, 1000);
})

// O consumidor precisa esperar o valor ser emitido
afterTimeout()
  .then((value) => console.log(value))

\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 4">

#### Observables retornam múltiplos valores e o produtor decide quando eles serão retornados

\`\`\`ts
const counter = new Observable((subs) => {
  // Produtor define quando os valorres serão retornados
  // Multiplos valores são emitidos
  let count = 1;
  let handle = setInterval(() => {
    subs.next(count);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

// O consumidor espera os valores serem emitidos
counter
  .subscribe((value) => console.log(value))

\`\`\`
</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 

  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,title:"Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor",level:4,content:`<h1> 
<span class="rxjs-name">RxJS</span> - Comparação
</h1>


<div class="left-side">

<img src="/imgs/rxjs-observable.png" class="cmp-img" />

</div>

::right::

<div class="right-side" v-if="$slidev.nav.clicks === 1">

#### Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor

\`\`\`ts
function double(value: number) {
  return number * 2;
}

// Consumidor determina quando o
// valor será retornado.
setTimeout(() => {
  const doubled = double(4);
}, 2000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 2">

#### Iteradores retornam multiplos elementos e o momento de retorno do valor é definido pelo consumidor

\`\`\`ts
function* fibbonacci() {
  let previous = 0;
  let current = 1;

  // Multiplos elementos são retornados
  while (true) {
    yield previous;
    let value = previous + current;
    previous = current;
    current = value;
  }
}

const iter = fibbonacci();

/* O consumidor determina quando 
  os elementos são retornados */
setInteval(() => {
  const value = iter.next();
}, 1000)
\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 3">

#### Promises retornam apenas um único valor, porém o produtor decide quando o valor será retornado

\`\`\`ts
const afterTimeout = new Promise((resolve, _) => {
  // Produtor define quando o valor será retornado
  setTimeout(() => {
    resolve(10);
  }, 1000);
})

// O consumidor precisa esperar o valor ser emitido
afterTimeout()
  .then((value) => console.log(value))

\`\`\`
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 4">

#### Observables retornam múltiplos valores e o produtor decide quando eles serão retornados

\`\`\`ts
const counter = new Observable((subs) => {
  // Produtor define quando os valorres serão retornados
  // Multiplos valores são emitidos
  let count = 1;
  let handle = setInterval(() => {
    subs.next(count);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

// O consumidor espera os valores serem emitidos
counter
  .subscribe((value) => console.log(value))

\`\`\`
</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 

  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,frontmatter:{layout:"two-cols",clicks:4},index:2,start:127,end:254},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/rxjs.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:aE,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Ferramentas do Angular

`,title:"Ferramentas do Angular",level:1,content:"# Ferramentas do Angular",frontmatter:{layout:"center"},index:12,start:105,end:112,noteHTML:"",filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:fE,meta:{layout:"two-cols",title:"Formulários no Angular - Template Forms",srcSequence:"./pages/forms.md",slide:{raw:null,title:"Formulários no Angular - Template Forms",level:2,content:`## Formulários no Angular - Template Forms

<div class="left-side">
Utiliza two-way databinding para associar propriedades dos componentes
para os inputs no DOM

Possível utilizar referências no DOM para obter o status de validação
do formulário

Adiciona automaticamente classes CSS aos componentes, para que possam
ser estilizadas
</div>

::right::

\`\`\`ts
// login-form.component.ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  model = {
    username: '',
    password: '',
  }
}
\`\`\`

\`\`\`html
<!-- login-form.component.ts -->
<form>
  <input [(ngModel)]="model.username" required 
    type="text" #username="ngModel"/>
  <div [hidden]="username.valid || username.pristine">
    Username is required
  </div>
  <input [(ngModel)]="model.password" required 
    type="text" #password="ngModel" />
  <div [hidden]="password.valid || password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>`,frontmatter:{layout:"two-cols",title:"Formulários no Angular - Template Forms",srcSequence:"./pages/forms.md"},index:13,start:0,end:57,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/forms.md",raw:`---
layout: two-cols
---

## Formulários no Angular - Template Forms

<div class="left-side">
Utiliza two-way databinding para associar propriedades dos componentes
para os inputs no DOM

Possível utilizar referências no DOM para obter o status de validação
do formulário

Adiciona automaticamente classes CSS aos componentes, para que possam
ser estilizadas
</div>

::right::

\`\`\`ts
// login-form.component.ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  model = {
    username: '',
    password: '',
  }
}
\`\`\`

\`\`\`html
<!-- login-form.component.ts -->
<form>
  <input [(ngModel)]="model.username" required 
    type="text" #username="ngModel"/>
  <div [hidden]="username.valid || username.pristine">
    Username is required
  </div>
  <input [(ngModel)]="model.password" required 
    type="text" #password="ngModel" />
  <div [hidden]="password.valid || password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>
`,title:"Formulários no Angular - Template Forms",level:2,content:`## Formulários no Angular - Template Forms

<div class="left-side">
Utiliza two-way databinding para associar propriedades dos componentes
para os inputs no DOM

Possível utilizar referências no DOM para obter o status de validação
do formulário

Adiciona automaticamente classes CSS aos componentes, para que possam
ser estilizadas
</div>

::right::

\`\`\`ts
// login-form.component.ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  model = {
    username: '',
    password: '',
  }
}
\`\`\`

\`\`\`html
<!-- login-form.component.ts -->
<form>
  <input [(ngModel)]="model.username" required 
    type="text" #username="ngModel"/>
  <div [hidden]="username.valid || username.pristine">
    Username is required
  </div>
  <input [(ngModel)]="model.password" required 
    type="text" #password="ngModel" />
  <div [hidden]="password.valid || password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>`,frontmatter:{layout:"two-cols",title:"Formulários no Angular - Template Forms"},index:0,start:0,end:57},inline:{raw:`---
src: ./pages/forms.md
---
`,content:"",frontmatter:{},index:6,start:112,end:116},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/forms.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:AE,meta:{layout:"two-cols",srcSequence:"./pages/forms.md",slide:{raw:`---
layout: two-cols
---

# Formulários no Angular - Reactive Forms

<div class="left-side">
Utiliza-se de classes reativas do Angular, chamadas de FormControl e FormGroup para representar o formulário.

Possui observables que emitem o valor do formulário quando
há alguma alteração.

Utiliza-se de funções para implementar lógica de validação dos inputs.

\`\`\`ts
const requiredValidator = (control: AbstractControl) 
  => {
    if (control.value == null) {
      return { missingValue: 'Value is required' }
    }
    return null
}
\`\`\`
</div>


::right::

\`\`\`ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }) 
}
\`\`\`

\`\`\`html
<!-- login-form.component.html -->
<form [formGroup]="loginForm">
  <input formControlName="username" type="text" />
  <div [hidden]="loginForm.username.valid 
    || loginForm.username.pristine">
    Username is required
  </div>
  <input formControlName="password" type="text" />
  <div [hidden]="loginForm.password.valid 
    || loginForm.password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    padding: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>`,title:"Formulários no Angular - Reactive Forms",level:1,content:`# Formulários no Angular - Reactive Forms

<div class="left-side">
Utiliza-se de classes reativas do Angular, chamadas de FormControl e FormGroup para representar o formulário.

Possui observables que emitem o valor do formulário quando
há alguma alteração.

Utiliza-se de funções para implementar lógica de validação dos inputs.

\`\`\`ts
const requiredValidator = (control: AbstractControl) 
  => {
    if (control.value == null) {
      return { missingValue: 'Value is required' }
    }
    return null
}
\`\`\`
</div>


::right::

\`\`\`ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }) 
}
\`\`\`

\`\`\`html
<!-- login-form.component.html -->
<form [formGroup]="loginForm">
  <input formControlName="username" type="text" />
  <div [hidden]="loginForm.username.valid 
    || loginForm.username.pristine">
    Username is required
  </div>
  <input formControlName="password" type="text" />
  <div [hidden]="loginForm.password.valid 
    || loginForm.password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    padding: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>`,frontmatter:{layout:"two-cols",srcSequence:"./pages/forms.md"},index:14,start:57,end:122,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/forms.md",raw:`---
layout: two-cols
---

# Formulários no Angular - Reactive Forms

<div class="left-side">
Utiliza-se de classes reativas do Angular, chamadas de FormControl e FormGroup para representar o formulário.

Possui observables que emitem o valor do formulário quando
há alguma alteração.

Utiliza-se de funções para implementar lógica de validação dos inputs.

\`\`\`ts
const requiredValidator = (control: AbstractControl) 
  => {
    if (control.value == null) {
      return { missingValue: 'Value is required' }
    }
    return null
}
\`\`\`
</div>


::right::

\`\`\`ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }) 
}
\`\`\`

\`\`\`html
<!-- login-form.component.html -->
<form [formGroup]="loginForm">
  <input formControlName="username" type="text" />
  <div [hidden]="loginForm.username.valid 
    || loginForm.username.pristine">
    Username is required
  </div>
  <input formControlName="password" type="text" />
  <div [hidden]="loginForm.password.valid 
    || loginForm.password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    padding: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>`,title:"Formulários no Angular - Reactive Forms",level:1,content:`# Formulários no Angular - Reactive Forms

<div class="left-side">
Utiliza-se de classes reativas do Angular, chamadas de FormControl e FormGroup para representar o formulário.

Possui observables que emitem o valor do formulário quando
há alguma alteração.

Utiliza-se de funções para implementar lógica de validação dos inputs.

\`\`\`ts
const requiredValidator = (control: AbstractControl) 
  => {
    if (control.value == null) {
      return { missingValue: 'Value is required' }
    }
    return null
}
\`\`\`
</div>


::right::

\`\`\`ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }) 
}
\`\`\`

\`\`\`html
<!-- login-form.component.html -->
<form [formGroup]="loginForm">
  <input formControlName="username" type="text" />
  <div [hidden]="loginForm.username.valid 
    || loginForm.username.pristine">
    Username is required
  </div>
  <input formControlName="password" type="text" />
  <div [hidden]="loginForm.password.valid 
    || loginForm.password.pristine">
    Password is required
  </div>
</form>
\`\`\`

<style>
  .left-side {
    padding: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>`,frontmatter:{layout:"two-cols"},index:1,start:57,end:122},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/forms.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:OE,meta:{layout:"two-cols",title:"HTTP Client",srcSequence:"./pages/httpclient.md",slide:{raw:null,title:"HTTP Client",level:1,content:`# HTTP Client

<div class="left-side">
O Angular utiliza a classe HttpClient para fazer requisições HTTP.

A classe representa requisições HTTP como Observables.

É possível transformar os Observables em Promises, caso necessário.
</div>

::right::

\`\`\`ts
class HttpClient {
  public get<T>(/* params */): Observable<T>
  public post<T>(/* params */): Observable<T>
  public put<T>(/* params */): Observable<T>
  public delete<T>(/* params */): Observable<T>
  public patch<T>(/* params */): Observable<T>
  public options<T>(/* params */): Observable<T>
}
\`\`\`

Exemplo
\`\`\`ts
@Component({ /* ... */ })
class ExampleComponent {
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post("http://example.com/api/auth/login")
      .subscribe({
        next: () => console.log('Sucesso ao logar'),
        error: () => {
          console.log('Algo de errado aconteceu');
        }
      });
  }
}
\`\`\`

<style>
  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,frontmatter:{layout:"two-cols",title:"HTTP Client",srcSequence:"./pages/httpclient.md"},index:15,start:0,end:53,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/httpclient.md",raw:`---
layout: two-cols
---
# HTTP Client

<div class="left-side">
O Angular utiliza a classe HttpClient para fazer requisições HTTP.

A classe representa requisições HTTP como Observables.

É possível transformar os Observables em Promises, caso necessário.
</div>

::right::

\`\`\`ts
class HttpClient {
  public get<T>(/* params */): Observable<T>
  public post<T>(/* params */): Observable<T>
  public put<T>(/* params */): Observable<T>
  public delete<T>(/* params */): Observable<T>
  public patch<T>(/* params */): Observable<T>
  public options<T>(/* params */): Observable<T>
}
\`\`\`

Exemplo
\`\`\`ts
@Component({ /* ... */ })
class ExampleComponent {
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post("http://example.com/api/auth/login")
      .subscribe({
        next: () => console.log('Sucesso ao logar'),
        error: () => {
          console.log('Algo de errado aconteceu');
        }
      });
  }
}
\`\`\`

<style>
  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,title:"HTTP Client",level:1,content:`# HTTP Client

<div class="left-side">
O Angular utiliza a classe HttpClient para fazer requisições HTTP.

A classe representa requisições HTTP como Observables.

É possível transformar os Observables em Promises, caso necessário.
</div>

::right::

\`\`\`ts
class HttpClient {
  public get<T>(/* params */): Observable<T>
  public post<T>(/* params */): Observable<T>
  public put<T>(/* params */): Observable<T>
  public delete<T>(/* params */): Observable<T>
  public patch<T>(/* params */): Observable<T>
  public options<T>(/* params */): Observable<T>
}
\`\`\`

Exemplo
\`\`\`ts
@Component({ /* ... */ })
class ExampleComponent {
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post("http://example.com/api/auth/login")
      .subscribe({
        next: () => console.log('Sucesso ao logar'),
        error: () => {
          console.log('Algo de errado aconteceu');
        }
      });
  }
}
\`\`\`

<style>
  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>`,frontmatter:{layout:"two-cols",title:"HTTP Client"},index:0,start:0,end:53},inline:{raw:`---
src: ./pages/httpclient.md
---

`,content:"",frontmatter:{},index:7,start:116,end:121},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/httpclient.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:VE,meta:{layout:"two-cols",clicks:2,title:"Roteamento de páginas",srcSequence:"./pages/router.md",slide:{raw:null,title:"Roteamento de páginas",level:1,content:`# Roteamento de páginas

O Angular utiliza um mapeamento de rotas para componentes
de modo a fazer o roteamento de páginas da aplicação.

<div class="left-below" v-if="$slidev.nav.clicks === 1">
É possível fazer redirecionamento de rotas.

Por padrão, o Angular utiliza apenas o prefixo para
selecionar o mapeamento que será ativado.
</div>
<div class="left-below" v-if="$slidev.nav.clicks === 2">
Exemplo:
A configuração abaixo gera um redirecionamento infinito, pois o path <span class="destaque">auth</span> também é prefixo de <span class="destaque">auth/login.</span>

\`\`\`ts
{ path: 'auth', redirectTo: 'auth/login' },
{ path: 'auth/login', component: LoginPageComponent }
{ 
  path: 'auth/register', 
  component: RegisterPageComponent 
}
\`\`\`
</div>

::right::

<div v-if="$slidev.nav.clicks === 0">

\`\`\`ts {all}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
\`\`\`

\`\`\`ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 1 || $slidev.nav.clicks === 2">

\`\`\`ts {all|2-6|2-6}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
\`\`\`

\`\`\`ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
\`\`\`
</div>

<style>
.left-below {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.destaque {
  color: lightgreen;
}
</style>`,frontmatter:{layout:"two-cols",clicks:2,title:"Roteamento de páginas",srcSequence:"./pages/router.md"},index:16,start:0,end:106,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/router.md",raw:`---
layout: two-cols
clicks: 2
---

# Roteamento de páginas

O Angular utiliza um mapeamento de rotas para componentes
de modo a fazer o roteamento de páginas da aplicação.

<div class="left-below" v-if="$slidev.nav.clicks === 1">
É possível fazer redirecionamento de rotas.

Por padrão, o Angular utiliza apenas o prefixo para
selecionar o mapeamento que será ativado.
</div>
<div class="left-below" v-if="$slidev.nav.clicks === 2">
Exemplo:
A configuração abaixo gera um redirecionamento infinito, pois o path <span class="destaque">auth</span> também é prefixo de <span class="destaque">auth/login.</span>

\`\`\`ts
{ path: 'auth', redirectTo: 'auth/login' },
{ path: 'auth/login', component: LoginPageComponent }
{ 
  path: 'auth/register', 
  component: RegisterPageComponent 
}
\`\`\`
</div>

::right::

<div v-if="$slidev.nav.clicks === 0">

\`\`\`ts {all}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
\`\`\`

\`\`\`ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 1 || $slidev.nav.clicks === 2">

\`\`\`ts {all|2-6|2-6}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
\`\`\`

\`\`\`ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
\`\`\`
</div>

<style>
.left-below {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.destaque {
  color: lightgreen;
}
</style>`,title:"Roteamento de páginas",level:1,content:`# Roteamento de páginas

O Angular utiliza um mapeamento de rotas para componentes
de modo a fazer o roteamento de páginas da aplicação.

<div class="left-below" v-if="$slidev.nav.clicks === 1">
É possível fazer redirecionamento de rotas.

Por padrão, o Angular utiliza apenas o prefixo para
selecionar o mapeamento que será ativado.
</div>
<div class="left-below" v-if="$slidev.nav.clicks === 2">
Exemplo:
A configuração abaixo gera um redirecionamento infinito, pois o path <span class="destaque">auth</span> também é prefixo de <span class="destaque">auth/login.</span>

\`\`\`ts
{ path: 'auth', redirectTo: 'auth/login' },
{ path: 'auth/login', component: LoginPageComponent }
{ 
  path: 'auth/register', 
  component: RegisterPageComponent 
}
\`\`\`
</div>

::right::

<div v-if="$slidev.nav.clicks === 0">

\`\`\`ts {all}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
\`\`\`

\`\`\`ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
\`\`\`
</div>

<div v-if="$slidev.nav.clicks === 1 || $slidev.nav.clicks === 2">

\`\`\`ts {all|2-6|2-6}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
\`\`\`

\`\`\`ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
\`\`\`
</div>

<style>
.left-below {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.destaque {
  color: lightgreen;
}
</style>`,frontmatter:{layout:"two-cols",clicks:2,title:"Roteamento de páginas"},index:0,start:0,end:106},inline:{raw:`---
src: ./pages/router.md
---
`,content:"",frontmatter:{},index:8,start:121,end:125},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/router.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:GE,meta:{layout:"center",title:"Boas práticas no Angular",srcSequence:"./pages/best-practices.md",slide:{raw:null,title:"Boas práticas no Angular",level:1,content:"# Boas práticas no Angular",frontmatter:{layout:"center",title:"Boas práticas no Angular",srcSequence:"./pages/best-practices.md"},index:17,start:0,end:6,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",raw:`---
layout: center
---

# Boas práticas no Angular
`,title:"Boas práticas no Angular",level:1,content:"# Boas práticas no Angular",frontmatter:{layout:"center",title:"Boas práticas no Angular"},index:0,start:0,end:6},inline:{raw:`---
src: ./pages/best-practices.md
---
`,content:"",frontmatter:{},index:9,start:125,end:129},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:QE,meta:{srcSequence:"./pages/best-practices.md",slide:{raw:`
# Arquitetura de Componentes

Possível agrupar os componentes em três grupos principais


- <span class="page-comp">Page components</span>: componentes que representam páginas da aplicação

  - Utilizados na definição de rotas da aplicação
  - Normalmente não possuem muita lógica, apenas definido layout da página

- <span class="cont-comp">Container components</span>: componentes que agrupam seções da página por funcionalidade

  - Possuem a maior parte da lógica do layout aplicação.
  - Normalmente armazenam o estado da interface.

- <span class="pres-comp">Presentational components</span>: componentes que representam seções reutilizaveis da interface

  - Não possuem muita lógica.
  - Se comunicam principalmente por meio de Input e Outputs

<style>
.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>
`,title:"Arquitetura de Componentes",level:1,content:`# Arquitetura de Componentes

Possível agrupar os componentes em três grupos principais


- <span class="page-comp">Page components</span>: componentes que representam páginas da aplicação

  - Utilizados na definição de rotas da aplicação
  - Normalmente não possuem muita lógica, apenas definido layout da página

- <span class="cont-comp">Container components</span>: componentes que agrupam seções da página por funcionalidade

  - Possuem a maior parte da lógica do layout aplicação.
  - Normalmente armazenam o estado da interface.

- <span class="pres-comp">Presentational components</span>: componentes que representam seções reutilizaveis da interface

  - Não possuem muita lógica.
  - Se comunicam principalmente por meio de Input e Outputs

<style>
.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>`,frontmatter:{srcSequence:"./pages/best-practices.md"},index:18,start:7,end:42,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",raw:`
# Arquitetura de Componentes

Possível agrupar os componentes em três grupos principais


- <span class="page-comp">Page components</span>: componentes que representam páginas da aplicação

  - Utilizados na definição de rotas da aplicação
  - Normalmente não possuem muita lógica, apenas definido layout da página

- <span class="cont-comp">Container components</span>: componentes que agrupam seções da página por funcionalidade

  - Possuem a maior parte da lógica do layout aplicação.
  - Normalmente armazenam o estado da interface.

- <span class="pres-comp">Presentational components</span>: componentes que representam seções reutilizaveis da interface

  - Não possuem muita lógica.
  - Se comunicam principalmente por meio de Input e Outputs

<style>
.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>
`,title:"Arquitetura de Componentes",level:1,content:`# Arquitetura de Componentes

Possível agrupar os componentes em três grupos principais


- <span class="page-comp">Page components</span>: componentes que representam páginas da aplicação

  - Utilizados na definição de rotas da aplicação
  - Normalmente não possuem muita lógica, apenas definido layout da página

- <span class="cont-comp">Container components</span>: componentes que agrupam seções da página por funcionalidade

  - Possuem a maior parte da lógica do layout aplicação.
  - Normalmente armazenam o estado da interface.

- <span class="pres-comp">Presentational components</span>: componentes que representam seções reutilizaveis da interface

  - Não possuem muita lógica.
  - Se comunicam principalmente por meio de Input e Outputs

<style>
.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>`,frontmatter:{},index:1,start:7,end:42},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:ok,meta:{srcSequence:"./pages/best-practices.md",slide:{raw:`
# Arquitetura de Componentes - Exemplo

<div class="components-example">
<div class="legenda">

- <span class="page-comp">Page</span>
- <span class="cont-comp">Container</span>
- <span class="pres-comp">Presentational</span>
</div>
<img src="/imgs/twitch-page-components.png" class="twitch-image"/>
</div>

<style>
.components-example {
  height: 80%;
  display: flex;
}

.legenda {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.twitch-image {
  flex: 8;
  height: 100%
}

.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>
`,title:"Arquitetura de Componentes - Exemplo",level:1,content:`# Arquitetura de Componentes - Exemplo

<div class="components-example">
<div class="legenda">

- <span class="page-comp">Page</span>
- <span class="cont-comp">Container</span>
- <span class="pres-comp">Presentational</span>
</div>
<img src="/imgs/twitch-page-components.png" class="twitch-image"/>
</div>

<style>
.components-example {
  height: 80%;
  display: flex;
}

.legenda {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.twitch-image {
  flex: 8;
  height: 100%
}

.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>`,frontmatter:{srcSequence:"./pages/best-practices.md"},index:19,start:43,end:87,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",raw:`
# Arquitetura de Componentes - Exemplo

<div class="components-example">
<div class="legenda">

- <span class="page-comp">Page</span>
- <span class="cont-comp">Container</span>
- <span class="pres-comp">Presentational</span>
</div>
<img src="/imgs/twitch-page-components.png" class="twitch-image"/>
</div>

<style>
.components-example {
  height: 80%;
  display: flex;
}

.legenda {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.twitch-image {
  flex: 8;
  height: 100%
}

.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>
`,title:"Arquitetura de Componentes - Exemplo",level:1,content:`# Arquitetura de Componentes - Exemplo

<div class="components-example">
<div class="legenda">

- <span class="page-comp">Page</span>
- <span class="cont-comp">Container</span>
- <span class="pres-comp">Presentational</span>
</div>
<img src="/imgs/twitch-page-components.png" class="twitch-image"/>
</div>

<style>
.components-example {
  height: 80%;
  display: flex;
}

.legenda {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.twitch-image {
  flex: 8;
  height: 100%
}

.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>`,frontmatter:{},index:2,start:43,end:87},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Fk,meta:{layout:"two-cols",clicks:1,srcSequence:"./pages/best-practices.md",slide:{raw:`---
layout: two-cols
clicks: 1
---

# Estrutura do projeto

<div class="left-side" v-if="$slidev.nav.clicks === 0">
Os módulos de um projeto Angular podem ser divididos em três tipos:

- Feature modules: Agrupam os componentes de um contexto do projeto
- Core module: Módulo único que armazena classes e serviços globais
- Shared module: Armazena componentes, diretivas e pipes que são utilizados por toda a aplicação

</div>

<div class="left-side" v-if="$slidev.nav.clicks === 1">

\`\`\`
src/app/
     home/
      pages/
      components/
      home.module.ts <-- shared.module.ts
     settings/
      pages/
      components/
      settings.module.ts <-- shared.module.ts
    ... outros modulos ..
     core/
      services/
      models/
      http-interceptors/
      guards/
      enumerations/
      utilities/
      core.module.ts
    shared/
      shared.module.ts
      components/
      directives/
      pipes/
\`\`\`
</div>

::right::

<div class="right-side">
<img src="/imgs/angular-modules.png" class="modules-example"/>
</div>

<style>
h1 {
  margin-bottom: 10px !important;
}
.left-side {
  padding: 10px;
  height: 70%;
}

.right-side {
  padding: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-side code {
}

.line {
  margin: 0px 0px !important;
  line-height: 10% !important;
}
</style>`,title:"Estrutura do projeto",level:1,content:`# Estrutura do projeto

<div class="left-side" v-if="$slidev.nav.clicks === 0">
Os módulos de um projeto Angular podem ser divididos em três tipos:

- Feature modules: Agrupam os componentes de um contexto do projeto
- Core module: Módulo único que armazena classes e serviços globais
- Shared module: Armazena componentes, diretivas e pipes que são utilizados por toda a aplicação

</div>

<div class="left-side" v-if="$slidev.nav.clicks === 1">

\`\`\`
src/app/
     home/
      pages/
      components/
      home.module.ts <-- shared.module.ts
     settings/
      pages/
      components/
      settings.module.ts <-- shared.module.ts
    ... outros modulos ..
     core/
      services/
      models/
      http-interceptors/
      guards/
      enumerations/
      utilities/
      core.module.ts
    shared/
      shared.module.ts
      components/
      directives/
      pipes/
\`\`\`
</div>

::right::

<div class="right-side">
<img src="/imgs/angular-modules.png" class="modules-example"/>
</div>

<style>
h1 {
  margin-bottom: 10px !important;
}
.left-side {
  padding: 10px;
  height: 70%;
}

.right-side {
  padding: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-side code {
}

.line {
  margin: 0px 0px !important;
  line-height: 10% !important;
}
</style>`,frontmatter:{layout:"two-cols",clicks:1,srcSequence:"./pages/best-practices.md"},index:20,start:87,end:163,source:{filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",raw:`---
layout: two-cols
clicks: 1
---

# Estrutura do projeto

<div class="left-side" v-if="$slidev.nav.clicks === 0">
Os módulos de um projeto Angular podem ser divididos em três tipos:

- Feature modules: Agrupam os componentes de um contexto do projeto
- Core module: Módulo único que armazena classes e serviços globais
- Shared module: Armazena componentes, diretivas e pipes que são utilizados por toda a aplicação

</div>

<div class="left-side" v-if="$slidev.nav.clicks === 1">

\`\`\`
src/app/
     home/
      pages/
      components/
      home.module.ts <-- shared.module.ts
     settings/
      pages/
      components/
      settings.module.ts <-- shared.module.ts
    ... outros modulos ..
     core/
      services/
      models/
      http-interceptors/
      guards/
      enumerations/
      utilities/
      core.module.ts
    shared/
      shared.module.ts
      components/
      directives/
      pipes/
\`\`\`
</div>

::right::

<div class="right-side">
<img src="/imgs/angular-modules.png" class="modules-example"/>
</div>

<style>
h1 {
  margin-bottom: 10px !important;
}
.left-side {
  padding: 10px;
  height: 70%;
}

.right-side {
  padding: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-side code {
}

.line {
  margin: 0px 0px !important;
  line-height: 10% !important;
}
</style>`,title:"Estrutura do projeto",level:1,content:`# Estrutura do projeto

<div class="left-side" v-if="$slidev.nav.clicks === 0">
Os módulos de um projeto Angular podem ser divididos em três tipos:

- Feature modules: Agrupam os componentes de um contexto do projeto
- Core module: Módulo único que armazena classes e serviços globais
- Shared module: Armazena componentes, diretivas e pipes que são utilizados por toda a aplicação

</div>

<div class="left-side" v-if="$slidev.nav.clicks === 1">

\`\`\`
src/app/
     home/
      pages/
      components/
      home.module.ts <-- shared.module.ts
     settings/
      pages/
      components/
      settings.module.ts <-- shared.module.ts
    ... outros modulos ..
     core/
      services/
      models/
      http-interceptors/
      guards/
      enumerations/
      utilities/
      core.module.ts
    shared/
      shared.module.ts
      components/
      directives/
      pipes/
\`\`\`
</div>

::right::

<div class="right-side">
<img src="/imgs/angular-modules.png" class="modules-example"/>
</div>

<style>
h1 {
  margin-bottom: 10px !important;
}
.left-side {
  padding: 10px;
  height: 70%;
}

.right-side {
  padding: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-side code {
}

.line {
  margin: 0px 0px !important;
  line-height: 10% !important;
}
</style>`,frontmatter:{layout:"two-cols",clicks:1},index:3,start:87,end:163},filepath:"/home/runner/work/rent-cars-presentation/rent-cars-presentation/pages/best-practices.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",component:Mx,meta:{layout:"end"}}],Ye=mk,bo=[{name:"play",path:"/",component:sw,children:[...Ye]},{name:"print",path:"/print",component:$x},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!_o.remote||_o.remote===t.query.password)return!0;if(_o.remote&&t.query.password===void 0){const s=prompt("Enter password");if(_o.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};bo.push({path:"/presenter/print",component:()=>qt(()=>import("./PresenterPrint-7897e8d8.js"),["assets/PresenterPrint-7897e8d8.js","assets/NoteDisplay-ce41859c.js"])}),bo.push({name:"notes",path:"/notes",component:()=>qt(()=>import("./NotesView-401d0601.js"),["assets/NotesView-401d0601.js","assets/NoteDisplay-ce41859c.js"]),beforeEnter:n}),bo.push({name:"presenter",path:"/presenter/:no",component:()=>qt(()=>import("./Presenter-17b95dcb.js"),["assets/Presenter-17b95dcb.js","assets/NoteDisplay-ce41859c.js","assets/DrawingControls-7ca63d32.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),bo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bn=V0({history:U2("/"),routes:bo});function yk(n,t,{mode:s="replace"}={}){return $({get(){const o=bn.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){an(()=>{bn[w(s)]({query:{...bn.currentRoute.value.query,[n]:o}})})}})}const vF=V(0);an(()=>{bn.afterEach(async()=>{await an(),vF.value+=1})});const _F=V(0),qn=$(()=>bn.currentRoute.value),Ys=$(()=>qn.value.query.print!==void 0),hk=$(()=>qn.value.query.print==="clicks"),ht=$(()=>qn.value.query.embedded!==void 0),vn=$(()=>qn.value.path.startsWith("/presenter")),gk=$(()=>qn.value.path.startsWith("/notes")),$o=$(()=>Ys.value&&!hk.value),ti=$(()=>qn.value.query.password),vk=$(()=>!vn.value&&(!Oe.remote||ti.value===Oe.remote)),au=yk("clicks","0"),_k=$(()=>Ye.length-1),bk=$(()=>qn.value.path),Ve=$(()=>parseInt(bk.value.split(/\//g).slice(-1)[0])||1);$(()=>$r(Ve.value));const Fn=$(()=>Ye.find(n=>n.path===`${Ve.value}`));$(()=>{var n,t,s;return(s=(t=(n=Fn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:s.id});$(()=>{var n,t;return((t=(n=Fn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ve.value===1?"cover":"default")});const ta=$(()=>Ye.find(n=>n.path===`${Math.min(Ye.length,Ve.value+1)}`)),Ak=$(()=>Ye.find(n=>n.path===`${Math.max(1,Ve.value-1)}`)),wk=$(()=>{var n,t;return vF.value,((t=(n=Fn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Dn=$({get(){if($o.value)return 99999;let n=+(au.value||0);return isNaN(n)&&(n=0),n},set(n){au.value=n.toString()}}),tr=$(()=>{var n,t;return+(((t=(n=Fn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??wk.value.length)}),xk=$(()=>Ve.value<Ye.length-1||Dn.value<tr.value),Ck=$(()=>Ve.value>1||Dn.value>0),Ek=$(()=>Ye.filter(n=>{var t,s;return(s=(t=n.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((n,t)=>(Qi(n,t),n),[])),kk=$(()=>ec(Ek.value,Fn.value));$(()=>nc(kk.value));const Sk=$(()=>Mk(_F.value,Fn.value,Ak.value));ge(Fn,(n,t)=>{_F.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function Ut(){tr.value<=Dn.value?Zo():Dn.value+=1}async function Vt(){Dn.value<=0?await Jo():Dn.value-=1}function $r(n){return vn.value?`/presenter/${n}`:`/${n}`}function Zo(){const n=Math.min(Ye.length,Ve.value+1);return Zs(n)}async function Jo(n=!0){const t=Math.max(1,Ve.value-1);await Zs(t),n&&tr.value&&bn.replace({query:{...qn.value.query,clicks:tr.value}})}function Zs(n,t){return bn.push({path:$r(n),query:{...qn.value.query,clicks:t}})}function Ok(n){const t=V(0),{direction:s,distanceX:o,distanceY:l}=i2(n,{onSwipeStart(r){r.pointerType==="touch"&&(Ko.value||(t.value=Ra()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Ko.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===_t.LEFT?Ut():Vt():(i/window.innerHeight>.4||i>200)&&(s.value===_t.DOWN?Jo():Zo())}})}async function si(){const{saveAs:n}=await qt(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);n(Ff(Oe.download)?Oe.download:Oe.exportFilename?`${Oe.exportFilename}.pdf`:"/slidev-exported.pdf",`${Oe.title}.pdf`)}async function $k(n){var t,s;if(n==null){const o=(s=(t=Fn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Qi(n,t,s=1){var l,r,a,i,c;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&n.length>0?Qi(n[n.length-1].children,t,s+1):n.push({children:[],level:s,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function ec(n,t,s=!1,o){return n.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=ec(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function nc(n,t=1){return n.filter(s=>!s.hideInToc).map(s=>({...s,children:nc(s.children,t+1)}))}const Pk={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Tk(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let s=n.name.includes("|")?n.name:Pk[n.name]||n.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=t?l:o}if(s)return{...n,name:s}}function Mk(n,t,s){var l,r;let o=n>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Oe.transition),Tk(o,n<0)}function Bk(){const n=Oe.titleTemplate.replace("%s",Oe.title||"Slidev");Li({title:n}),Cv(Oe.htmlAttrs),jv(`${n} - shared`),Hv(`${n} - drawings`);const t=`${location.origin}_${Pv()}`;function s(){gk.value||!vn.value&&!$v.includes(location.host.split(":")[0])||(vn.value?(co("page",+Ve.value),co("clicks",Dn.value)):(co("viewerPage",+Ve.value),co("viewerClicks",Dn.value)),co("lastUpdate",{id:t,type:vn.value?"presenter":"viewer",time:new Date().getTime()}))}bn.afterEach(s),ge(Dn,s),Lv(o=>{var r;bn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ve.value||+Dn.value!=+o.clicks)&&bn.replace({path:$r(o.page),query:{...bn.currentRoute.value.query,clicks:o.clicks||0}})})}const Rk=Re({__name:"App",setup(n){return ee(ie),Bk(),(t,s)=>{const o=No("RouterView"),l=No("StarportCarrier");return E(),R($e,null,[N(o),N(l)],64)}}}),Ik=ce(Rk,[["__file","/home/runner/work/rent-cars-presentation/rent-cars-presentation/node_modules/@slidev/client/App.vue"]]);function sa(n){return n!==null&&typeof n=="object"}function oi(n,t,s=".",o){if(!sa(t))return oi(n,{},s,o);const l=Object.assign({},t);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const a=n[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:sa(a)&&sa(l[r])?l[r]=oi(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function jk(n){return(...t)=>t.reduce((s,o)=>oi(s,o,"",n),{})}const Lk=jk(),bF=1/60*1e3,Dk=typeof performance<"u"?()=>performance.now():()=>Date.now(),AF=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(Dk()),bF);function Nk(n){let t=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const f=d&&l,F=f?t:s;return u&&a.add(c),F.indexOf(c)===-1&&(F.push(c),f&&l&&(o=t.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),a.has(d)&&(i.schedule(d),n())}l=!1,r&&(r=!1,i.process(c))}};return i}const Hk=40;let li=!0,Xo=!1,ri=!1;const Vs={delta:0,timestamp:0},cl=["read","update","preRender","render","postRender"],Pr=cl.reduce((n,t)=>(n[t]=Nk(()=>Xo=!0),n),{}),ai=cl.reduce((n,t)=>{const s=Pr[t];return n[t]=(o,l=!1,r=!1)=>(Xo||Uk(),s.schedule(o,l,r)),n},{}),qk=cl.reduce((n,t)=>(n[t]=Pr[t].cancel,n),{});cl.reduce((n,t)=>(n[t]=()=>Pr[t].process(Vs),n),{});const zk=n=>Pr[n].process(Vs),wF=n=>{Xo=!1,Vs.delta=li?bF:Math.max(Math.min(n-Vs.timestamp,Hk),1),Vs.timestamp=n,ri=!0,cl.forEach(zk),ri=!1,Xo&&(li=!1,AF(wF))},Uk=()=>{Xo=!0,li=!0,ri||AF(wF)},xF=()=>Vs;function CF(n,t){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(n);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(n,o[l])&&(s[o[l]]=n[o[l]]);return s}var tc=function(){},Qo=function(){};tc=function(n,t){!n&&typeof console<"u"&&console.warn(t)},Qo=function(n,t){if(!n)throw new Error(t)};const ii=(n,t,s)=>Math.min(Math.max(s,n),t),oa=.001,Vk=.01,iu=10,Wk=.05,Kk=1;function Gk({duration:n=800,bounce:t=.25,velocity:s=0,mass:o=1}){let l,r;tc(n<=iu*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=ii(Wk,Kk,a),n=ii(Vk,iu,n/1e3),a<1?(l=u=>{const d=u*a,f=d*n,F=d-s,y=ci(u,a),m=Math.exp(-f);return oa-F/y*m},r=u=>{const f=u*a*n,F=f*s+s,y=Math.pow(a,2)*Math.pow(u,2)*n,m=Math.exp(-f),g=ci(Math.pow(u,2),a);return(-l(u)+oa>0?-1:1)*((F-y)*m)/g}):(l=u=>{const d=Math.exp(-u*n),f=(u-s)*n+1;return-oa+d*f},r=u=>{const d=Math.exp(-u*n),f=(s-u)*(n*n);return d*f});const i=5/n,c=Zk(l,r,i);if(n=n*1e3,isNaN(c))return{stiffness:100,damping:10,duration:n};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:n}}}const Yk=12;function Zk(n,t,s){let o=s;for(let l=1;l<Yk;l++)o=o-n(o)/t(o);return o}function ci(n,t){return n*Math.sqrt(1-t*t)}const Jk=["duration","bounce"],Xk=["stiffness","damping","mass"];function cu(n,t){return t.some(s=>n[s]!==void 0)}function Qk(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!cu(n,Xk)&&cu(n,Jk)){const s=Gk(n);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function sc(n){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:l}=n,r=CF(n,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:F}=Qk(r),y=pu,m=pu;function g(){const v=d?-(d/1e3):0,x=s-t,A=c/(2*Math.sqrt(i*u)),_=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),A<1){const C=ci(_,A);y=O=>{const T=Math.exp(-A*_*O);return s-T*((v+A*_*x)/C*Math.sin(C*O)+x*Math.cos(C*O))},m=O=>{const T=Math.exp(-A*_*O);return A*_*T*(Math.sin(C*O)*(v+A*_*x)/C+x*Math.cos(C*O))-T*(Math.cos(C*O)*(v+A*_*x)-C*x*Math.sin(C*O))}}else if(A===1)y=C=>s-Math.exp(-_*C)*(x+(v+_*x)*C);else{const C=_*Math.sqrt(A*A-1);y=O=>{const T=Math.exp(-A*_*O),L=Math.min(C*O,300);return s-T*((v+A*_*x)*Math.sinh(L)+C*x*Math.cosh(L))/C}}}return g(),{next:v=>{const x=y(v);if(F)a.done=v>=f;else{const A=m(v)*1e3,_=Math.abs(A)<=o,C=Math.abs(s-x)<=l;a.done=_&&C}return a.value=a.done?s:x,a},flipTarget:()=>{d=-d,[t,s]=[s,t],g()}}}sc.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const pu=n=>0,EF=(n,t,s)=>{const o=t-n;return o===0?1:(s-n)/o},oc=(n,t,s)=>-s*n+s*t+n,kF=(n,t)=>s=>Math.max(Math.min(s,t),n),Po=n=>n%1?Number(n.toFixed(5)):n,el=/(-)?([\d]*\.?[\d])+/g,pi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,e7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function pl(n){return typeof n=="string"}const ul={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},To=Object.assign(Object.assign({},ul),{transform:kF(0,1)}),kl=Object.assign(Object.assign({},ul),{default:1}),lc=n=>({test:t=>pl(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),ts=lc("deg"),Mo=lc("%"),he=lc("px"),uu=Object.assign(Object.assign({},Mo),{parse:n=>Mo.parse(n)/100,transform:n=>Mo.transform(n*100)}),rc=(n,t)=>s=>!!(pl(s)&&e7.test(s)&&s.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(s,t)),SF=(n,t,s)=>o=>{if(!pl(o))return o;const[l,r,a,i]=o.match(el);return{[n]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Fs={test:rc("hsl","hue"),parse:SF("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+Mo.transform(Po(t))+", "+Mo.transform(Po(s))+", "+Po(To.transform(o))+")"},n7=kF(0,255),la=Object.assign(Object.assign({},ul),{transform:n=>Math.round(n7(n))}),jt={test:rc("rgb","red"),parse:SF("red","green","blue"),transform:({red:n,green:t,blue:s,alpha:o=1})=>"rgba("+la.transform(n)+", "+la.transform(t)+", "+la.transform(s)+", "+Po(To.transform(o))+")"};function t7(n){let t="",s="",o="",l="";return n.length>5?(t=n.substr(1,2),s=n.substr(3,2),o=n.substr(5,2),l=n.substr(7,2)):(t=n.substr(1,1),s=n.substr(2,1),o=n.substr(3,1),l=n.substr(4,1),t+=t,s+=s,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const ui={test:rc("#"),parse:t7,transform:jt.transform},gn={test:n=>jt.test(n)||ui.test(n)||Fs.test(n),parse:n=>jt.test(n)?jt.parse(n):Fs.test(n)?Fs.parse(n):ui.parse(n),transform:n=>pl(n)?n:n.hasOwnProperty("red")?jt.transform(n):Fs.transform(n)},OF="${c}",$F="${n}";function s7(n){var t,s,o,l;return isNaN(n)&&pl(n)&&((s=(t=n.match(el))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(o=n.match(pi))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function PF(n){typeof n=="number"&&(n=`${n}`);const t=[];let s=0;const o=n.match(pi);o&&(s=o.length,n=n.replace(pi,OF),t.push(...o.map(gn.parse)));const l=n.match(el);return l&&(n=n.replace(el,$F),t.push(...l.map(ul.parse))),{values:t,numColors:s,tokenised:n}}function TF(n){return PF(n).values}function MF(n){const{values:t,numColors:s,tokenised:o}=PF(n),l=t.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<s?OF:$F,i<s?gn.transform(r[i]):Po(r[i]));return a}}const o7=n=>typeof n=="number"?0:n;function l7(n){const t=TF(n);return MF(n)(t.map(o7))}const dl={test:s7,parse:TF,createTransformer:MF,getAnimatableNone:l7},r7=new Set(["brightness","contrast","saturate","opacity"]);function a7(n){let[t,s]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=s.match(el)||[];if(!o)return n;const l=s.replace(o,"");let r=r7.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+l+")"}const i7=/([a-z-]*)\(.*?\)/g,di=Object.assign(Object.assign({},dl),{getAnimatableNone:n=>{const t=n.match(i7);return t?t.map(a7).join(" "):n}});function ra(n,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(t-n)*6*s:s<1/2?t:s<2/3?n+(t-n)*(2/3-s)*6:n}function du({hue:n,saturation:t,lightness:s,alpha:o}){n/=360,t/=100,s/=100;let l=0,r=0,a=0;if(!t)l=r=a=s;else{const i=s<.5?s*(1+t):s+t-s*t,c=2*s-i;l=ra(c,i,n+1/3),r=ra(c,i,n),a=ra(c,i,n-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const c7=(n,t,s)=>{const o=n*n,l=t*t;return Math.sqrt(Math.max(0,s*(l-o)+o))},p7=[ui,jt,Fs],fu=n=>p7.find(t=>t.test(n)),Fu=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,BF=(n,t)=>{let s=fu(n),o=fu(t);Qo(!!s,Fu(n)),Qo(!!o,Fu(t));let l=s.parse(n),r=o.parse(t);s===Fs&&(l=du(l),s=jt),o===Fs&&(r=du(r),o=jt);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=c7(l[c],r[c],i));return a.alpha=oc(l.alpha,r.alpha,i),s.transform(a)}},u7=n=>typeof n=="number",d7=(n,t)=>s=>t(n(s)),RF=(...n)=>n.reduce(d7);function IF(n,t){return u7(n)?s=>oc(n,t,s):gn.test(n)?BF(n,t):LF(n,t)}const jF=(n,t)=>{const s=[...n],o=s.length,l=n.map((r,a)=>IF(r,t[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},f7=(n,t)=>{const s=Object.assign(Object.assign({},n),t),o={};for(const l in s)n[l]!==void 0&&t[l]!==void 0&&(o[l]=IF(n[l],t[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function mu(n){const t=dl.parse(n),s=t.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const LF=(n,t)=>{const s=dl.createTransformer(t),o=mu(n),l=mu(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?RF(jF(o.parsed,l.parsed),s):(tc(!0,`Complex values '${n}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:n}`)},F7=(n,t)=>s=>oc(n,t,s);function m7(n){if(typeof n=="number")return F7;if(typeof n=="string")return gn.test(n)?BF:LF;if(Array.isArray(n))return jF;if(typeof n=="object")return f7}function y7(n,t,s){const o=[],l=s||m7(n[0]),r=n.length-1;for(let a=0;a<r;a++){let i=l(n[a],n[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=RF(c,i)}o.push(i)}return o}function h7([n,t],[s]){return o=>s(EF(n,t,o))}function g7(n,t){const s=n.length,o=s-1;return l=>{let r=0,a=!1;if(l<=n[0]?a=!0:l>=n[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<s&&!(n[c]>l||c===o);c++);r=c-1}const i=EF(n[r],n[r+1],l);return t[r](i)}}function DF(n,t,{clamp:s=!0,ease:o,mixer:l}={}){const r=n.length;Qo(r===t.length,"Both input and output ranges must be the same length"),Qo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[r-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const a=y7(t,o,l),i=r===2?h7(n,a):g7(n,a);return s?c=>i(ii(n[0],n[r-1],c)):i}const Tr=n=>t=>1-n(1-t),ac=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,v7=n=>t=>Math.pow(t,n),NF=n=>t=>t*t*((n+1)*t-n),_7=n=>{const t=NF(n);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},HF=1.525,b7=4/11,A7=8/11,w7=9/10,qF=n=>n,ic=v7(2),x7=Tr(ic),zF=ac(ic),UF=n=>1-Math.sin(Math.acos(n)),VF=Tr(UF),C7=ac(VF),cc=NF(HF),E7=Tr(cc),k7=ac(cc),S7=_7(HF),O7=4356/361,$7=35442/1805,P7=16061/1805,sr=n=>{if(n===1||n===0)return n;const t=n*n;return n<b7?7.5625*t:n<A7?9.075*t-9.9*n+3.4:n<w7?O7*t-$7*n+P7:10.8*n*n-20.52*n+10.72},T7=Tr(sr),M7=n=>n<.5?.5*(1-sr(1-n*2)):.5*sr(n*2-1)+.5;function B7(n,t){return n.map(()=>t||zF).splice(0,n.length-1)}function R7(n){const t=n.length;return n.map((s,o)=>o!==0?o/(t-1):0)}function I7(n,t){return n.map(s=>s*t)}function jl({from:n=0,to:t=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:n},a=Array.isArray(t)?t:[n,t],i=I7(o&&o.length===a.length?o:R7(a),l);function c(){return DF(i,a,{ease:Array.isArray(s)?s:B7(a,s)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function j7({velocity:n=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let i=s*n;const c=t+i,u=r===void 0?c:r(c);return u!==c&&(i=u-t),{next:d=>{const f=-i*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const yu={keyframes:jl,spring:sc,decay:j7};function L7(n){if(Array.isArray(n.to))return jl;if(yu[n.type])return yu[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?jl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?sc:jl}function WF(n,t,s=0){return n-t-s}function D7(n,t,s=0,o=!0){return o?WF(t+-n,t,s):t-(n-t)+s}function N7(n,t,s,o){return o?n>=t+s:n<=-s}const H7=n=>{const t=({delta:s})=>n(s);return{start:()=>ai.update(t,!0),stop:()=>qk.update(t)}};function KF(n){var t,s,{from:o,autoplay:l=!0,driver:r=H7,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:F,onRepeat:y,onUpdate:m}=n,g=CF(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=g,x,A=0,_=g.duration,C,O=!1,T=!0,L;const S=L7(g);!((s=(t=S).needsInterpolation)===null||s===void 0)&&s.call(t,o,v)&&(L=DF([0,100],[o,v],{clamp:!1}),o=0,v=100);const D=S(Object.assign(Object.assign({},g),{from:o,to:v}));function Z(){A++,c==="reverse"?(T=A%2===0,a=D7(a,_,u,T)):(a=WF(a,_,u),c==="mirror"&&D.flipTarget()),O=!1,y&&y()}function re(){x.stop(),F&&F()}function U(ye){if(T||(ye=-ye),a+=ye,!O){const be=D.next(Math.max(0,a));C=be.value,L&&(C=L(C)),O=T?be.done:a<=0}m==null||m(C),O&&(A===0&&(_??(_=a)),A<i?N7(a,_,u,T)&&Z():re())}function _e(){d==null||d(),x=r(U),x.start()}return l&&_e(),{stop:()=>{f==null||f(),x.stop()}}}function GF(n,t){return t?n*(1e3/t):0}function q7({from:n=0,velocity:t=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:F,onStop:y}){let m;function g(_){return s!==void 0&&_<s||o!==void 0&&_>o}function v(_){return s===void 0?o:o===void 0||Math.abs(s-_)<Math.abs(o-_)?s:o}function x(_){m==null||m.stop(),m=KF(Object.assign(Object.assign({},_),{driver:d,onUpdate:C=>{var O;f==null||f(C),(O=_.onUpdate)===null||O===void 0||O.call(_,C)},onComplete:F,onStop:y}))}function A(_){x(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},_))}if(g(n))A({from:n,velocity:t,to:v(n)});else{let _=l*t+n;typeof u<"u"&&(_=u(_));const C=v(_),O=C===s?-1:1;let T,L;const S=D=>{T=L,L=D,t=GF(D-T,xF().delta),(O===1&&D>C||O===-1&&D<C)&&A({from:D,to:C,velocity:t})};x({type:"decay",from:n,velocity:t,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:g(_)?S:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const YF=(n,t)=>1-3*t+3*n,ZF=(n,t)=>3*t-6*n,JF=n=>3*n,or=(n,t,s)=>((YF(t,s)*n+ZF(t,s))*n+JF(t))*n,XF=(n,t,s)=>3*YF(t,s)*n*n+2*ZF(t,s)*n+JF(t),z7=1e-7,U7=10;function V7(n,t,s,o,l){let r,a,i=0;do a=t+(s-t)/2,r=or(a,o,l)-n,r>0?s=a:t=a;while(Math.abs(r)>z7&&++i<U7);return a}const W7=8,K7=.001;function G7(n,t,s,o){for(let l=0;l<W7;++l){const r=XF(t,s,o);if(r===0)return t;const a=or(t,s,o)-n;t-=a/r}return t}const Ll=11,Sl=1/(Ll-1);function Y7(n,t,s,o){if(n===t&&s===o)return qF;const l=new Float32Array(Ll);for(let a=0;a<Ll;++a)l[a]=or(a*Sl,n,s);function r(a){let i=0,c=1;const u=Ll-1;for(;c!==u&&l[c]<=a;++c)i+=Sl;--c;const d=(a-l[c])/(l[c+1]-l[c]),f=i+d*Sl,F=XF(f,n,s);return F>=K7?G7(a,f,n,s):F===0?f:V7(a,i,i+Sl,n,s)}return a=>a===0||a===1?a:or(r(a),t,o)}const aa={};class Z7{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,s,o)}clear(){this.subscriptions.clear()}}const hu=n=>!isNaN(parseFloat(n));class J7{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Z7,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=xF();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),ai.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ai.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=hu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=hu(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?GF(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function X7(n){return new J7(n)}const{isArray:Q7}=Array;function eS(){const n=V({}),t=o=>{const l=r=>{n.value[r]&&(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};o?Q7(o)?o.forEach(l):l(o):Object.keys(n.value).forEach(l)},s=(o,l,r)=>{if(n.value[o])return n.value[o];const a=X7(l);return a.onChange(i=>r[o]=i),n.value[o]=a,a};return c8(t),{motionValues:n,get:s,stop:t}}const nS=n=>Array.isArray(n),ss=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),ia=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),tS=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),ca=()=>({type:"keyframes",ease:"linear",duration:300}),sS=n=>({type:"keyframes",duration:800,values:n}),gu={default:tS,x:ss,y:ss,z:ss,rotate:ss,rotateX:ss,rotateY:ss,rotateZ:ss,scaleX:ia,scaleY:ia,scale:ia,backgroundColor:ca,color:ca,opacity:ca},QF=(n,t)=>{let s;return nS(t)?s=sS:s=gu[n]||gu.default,{to:t,...s(t)}},vu={...ul,transform:Math.round},em={color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,borderWidth:he,borderTopWidth:he,borderRightWidth:he,borderBottomWidth:he,borderLeftWidth:he,borderRadius:he,radius:he,borderTopLeftRadius:he,borderTopRightRadius:he,borderBottomRightRadius:he,borderBottomLeftRadius:he,width:he,maxWidth:he,height:he,maxHeight:he,size:he,top:he,right:he,bottom:he,left:he,padding:he,paddingTop:he,paddingRight:he,paddingBottom:he,paddingLeft:he,margin:he,marginTop:he,marginRight:he,marginBottom:he,marginLeft:he,rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scale:kl,scaleX:kl,scaleY:kl,scaleZ:kl,skew:ts,skewX:ts,skewY:ts,distance:he,translateX:he,translateY:he,translateZ:he,x:he,y:he,z:he,perspective:he,transformPerspective:he,opacity:To,originX:uu,originY:uu,originZ:he,zIndex:vu,filter:di,WebkitFilter:di,fillOpacity:To,strokeOpacity:To,numOctaves:vu},pc=n=>em[n],nm=(n,t)=>t&&typeof n=="number"&&t.transform?t.transform(n):n;function oS(n,t){let s=pc(n);return s!==di&&(s=dl),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const lS={linear:qF,easeIn:ic,easeInOut:zF,easeOut:x7,circIn:UF,circInOut:C7,circOut:VF,backIn:cc,backInOut:k7,backOut:E7,anticipate:S7,bounceIn:T7,bounceInOut:M7,bounceOut:sr},_u=n=>{if(Array.isArray(n)){const[t,s,o,l]=n;return Y7(t,s,o,l)}else if(typeof n=="string")return lS[n];return n},rS=n=>Array.isArray(n)&&typeof n[0]!="number",bu=(n,t)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&dl.test(t)&&!t.startsWith("url("));function aS(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function iS({ease:n,times:t,delay:s,...o}){const l={...o};return t&&(l.offset=t),n&&(l.ease=rS(n)?n.map(_u):_u(n)),s&&(l.elapsed=-s),l}function cS(n,t,s){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),aS(t),pS(n)||(n={...n,...QF(s,t.to)}),{...t,...iS(n)}}function pS({delay:n,repeat:t,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function uS(n,t){return n[t]||n.default||n}function dS(n,t,s,o,l){const r=uS(o,n);let a=r.from===null||r.from===void 0?t.get():r.from;const i=bu(n,s);a==="none"&&i&&typeof s=="string"&&(a=oS(n,s));const c=bu(n,a);function u(f){const F={from:a,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:y=>t.set(y)};return r.type==="inertia"||r.type==="decay"?q7({...F,...r}):KF({...cS(r,F,n),onUpdate:y=>{F.onUpdate(y),r.onUpdate&&r.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return t.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!i||r.type===!1?d:u}function fS(){const{motionValues:n,stop:t,get:s}=eS();return{motionValues:n,stop:t,push:(l,r,a,i={},c)=>{const u=a[l],d=s(l,u,a);if(i&&i.immediate){d.set(r);return}const f=dS(l,d,r,i,c);d.start(f)}}}function FS(n,t={},{motionValues:s,push:o,stop:l}=fS()){const r=w(t),a=V(!1);ge(s,f=>{a.value=Object.values(f).filter(F=>F.isAnimating()).length>0},{immediate:!0,deep:!0});const i=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=i(f)),Promise.all(Object.entries(f).map(([F,y])=>{if(F!=="transition")return new Promise(m=>o(F,y,n,f.transition||QF(F,f[F]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const F=Ba(f)?f:i(f);Object.entries(F).forEach(([y,m])=>{y!=="transition"&&o(y,m,n,{immediate:!0})})},leave:async f=>{let F;if(r&&(r.leave&&(F=r.leave),!r.leave&&r.initial&&(F=r.initial)),!F){f();return}await c(F),f()},stop:l}}const uc=typeof window<"u",mS=()=>uc&&window.onpointerdown===null,yS=()=>uc&&window.ontouchstart===null,hS=()=>uc&&window.onmousedown===null;function gS({target:n,state:t,variants:s,apply:o}){const l=w(s),r=V(!1),a=V(!1),i=V(!1),c=$(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=$(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});l.hovered&&(ve(n,"mouseenter",()=>r.value=!0),ve(n,"mouseleave",()=>{r.value=!1,a.value=!1}),ve(n,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(hS()&&(ve(n,"mousedown",()=>a.value=!0),ve(n,"mouseup",()=>a.value=!1)),mS()&&(ve(n,"pointerdown",()=>a.value=!0),ve(n,"pointerup",()=>a.value=!1)),yS()&&(ve(n,"touchstart",()=>a.value=!0),ve(n,"touchend",()=>a.value=!1))),l.focused&&(ve(n,"focus",()=>i.value=!0),ve(n,"blur",()=>i.value=!1)),ge(u,o)}function vS({set:n,target:t,apply:s,variants:o,variant:l}){const r=w(o);ge(()=>t,()=>{r&&(r.initial&&n("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function _S({state:n,apply:t}){ge(n,s=>{s&&t(s)},{immediate:!0})}function bS({target:n,variants:t,variant:s}){const o=w(t);o&&(o.visible||o.visibleOnce)&&l2(n,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function AS(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&vS(n),t.syncVariants&&_S(n),t.visibilityHooks&&bS(n),t.eventListeners&&gS(n)}function tm(n={}){const t=qe({...n}),s=V({});return ge(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=pc(l),i=nm(r,a);o[l]=i}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function dc(n,t){ge(()=>Pn(n),s=>{s&&t(s)},{immediate:!0})}const wS={x:"translateX",y:"translateY",z:"translateZ"};function sm(n={},t=!0){const s=qe({...n}),o=V("");return ge(s,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(he.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const u=pc(i),d=nm(c,u);r+=`${wS[i]||i}(${d}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const xS=["","X","Y","Z"],CS=["perspective","translate","scale","rotate","skew"],om=["transformPerspective","x","y","z"];CS.forEach(n=>{xS.forEach(t=>{const s=n+t;om.push(s)})});const ES=new Set(om);function fc(n){return ES.has(n)}const kS=new Set(["originX","originY","originZ"]);function lm(n){return kS.has(n)}function SS(n){const t={},s={};return Object.entries(n).forEach(([o,l])=>{fc(o)||lm(o)?t[o]=l:s[o]=l}),{transform:t,style:s}}function rm(n){const{transform:t,style:s}=SS(n),{transform:o}=sm(t),{style:l}=tm(s);return o.value&&(l.value.transform=o.value),l.value}function OS(n,t){let s,o;const{state:l,style:r}=tm();return dc(n,a=>{o=a;for(const i of Object.keys(em))a.style[i]===null||a.style[i]===""||fc(i)||lm(i)||(l[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),t&&t(l)}),ge(r,a=>{if(!o){s=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function $S(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function PS(n,t){Object.entries($S(t)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>n[r]=0);return}o.forEach((r,a)=>n[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){n.x=o;return}if(s==="translateY"){n.y=o;return}if(s==="translateZ"){n.z=o;return}n[s]=o})}function TS(n,t){let s,o;const{state:l,transform:r}=sm();return dc(n,a=>{o=a,a.style.transform&&PS(l,a.style.transform),s&&(a.style.transform=s),t&&t(l)}),ge(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function MS(n,t){const s=qe({}),o=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:l}=OS(n,o),{transform:r}=TS(n,o);return ge(s,a=>{Object.entries(a).forEach(([i,c])=>{const u=fc(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),dc(n,()=>t&&o(t)),{motionProperties:s,style:l,transform:r}}function BS(n={}){const t=w(n),s=V();return{state:$(()=>{if(s.value)return t[s.value]}),variant:s}}function am(n,t={},s){const{motionProperties:o}=MS(n),{variant:l,state:r}=BS(t),a=FS(o,t),i={target:n,variant:l,variants:t,state:r,motionProperties:o,...a};return AS(i,s),i}const RS=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],IS=(n,t)=>{const s=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};s&&(s.variants&&Ba(s.variants)&&(t.value={...t.value,...s.variants}),RS.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Kv(s[o])){const l=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Ba(s[o])&&(t.value[o]=s[o])}))},pa=n=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&aa[r]&&aa[r].stop();const a=V(n||{});typeof o.value=="object"&&(a.value=o.value),IS(l,a);const i=am(s,a);s.motionInstance=i,r&&(aa[r]=i)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=w(l);const r=Lk((n==null?void 0:n.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:rm(r)}}}),jS={initial:{opacity:0},enter:{opacity:1}},LS={initial:{opacity:0},visible:{opacity:1}},DS={initial:{opacity:0},visibleOnce:{opacity:1}},NS={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},HS={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},qS={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},zS={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},US={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},VS={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},WS={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},KS={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},GS={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},YS={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ZS={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},JS={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},XS={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},QS={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},eO={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},nO={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},tO={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},sO={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},oO={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},lO={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},rO={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},aO={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},iO={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},cO={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},pO={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},uO={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},dO={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},fi={__proto__:null,fade:jS,fadeVisible:LS,fadeVisibleOnce:DS,pop:NS,popVisible:HS,popVisibleOnce:qS,rollBottom:XS,rollLeft:zS,rollRight:WS,rollTop:YS,rollVisibleBottom:QS,rollVisibleLeft:US,rollVisibleOnceBottom:eO,rollVisibleOnceLeft:VS,rollVisibleOnceRight:GS,rollVisibleOnceTop:JS,rollVisibleRight:KS,rollVisibleTop:ZS,slideBottom:pO,slideLeft:nO,slideRight:oO,slideTop:aO,slideVisibleBottom:uO,slideVisibleLeft:tO,slideVisibleOnceBottom:dO,slideVisibleOnceLeft:sO,slideVisibleOnceRight:rO,slideVisibleOnceTop:cO,slideVisibleRight:lO,slideVisibleTop:iO},fO=Re({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var i;const t=Vh(),s=qe({});if(!n.is&&!t.default)return()=>Tn("div",{});const o=$(()=>{let c;return n.preset&&(c=fi[n.preset]),c}),l=$(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=$(()=>{const c={...l.value,...o.value||{},...n.variants||{}};return n.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(n.delay)),c}),a=$(()=>{if(!n.is)return;let c=n.is;return typeof a.value=="string"&&!Iu(c)&&(c=No(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,F,y;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(F=u.variants)!=null&&F.visible&&u.apply("visible"),(y=u.variants)!=null&&y.visibleOnce&&u.apply("visibleOnce")},10)};hr(()=>Object.entries(s).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:r,instances:s}},render({slots:n,motionConfig:t,instances:s,component:o}){var i;const l=rm(t.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const f=am(d,t);s[u]=f},c);if(o){const c=Tn(o,void 0,n);return r(c,0),c}return(((i=n.default)==null?void 0:i.call(n))||[]).map((c,u)=>r(c,u))}});function FO(n){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const mO={install(n,t){if(n.directive("motion",pa()),n.component("Motion",fO),!t||t&&!t.excludePresets)for(const s in fi){const o=fi[s];n.directive(`motion-${FO(s)}`,pa(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,n.directive(`motion-${s}`,pa(o))}}};var Au;const Bo=typeof window<"u",yO=Object.prototype.toString,hO=n=>yO.call(n)==="[object Object]";Bo&&((Au=window==null?void 0:window.navigator)!=null&&Au.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function gO(n){return vi()?(Vu(n),!0):!1}function vO(n){var t;const s=w(n);return(t=s==null?void 0:s.$el)!=null?t:s}const _O=Bo?window:void 0,wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xu="__vueuse_ssr_handlers__";wu[xu]=wu[xu]||{};function bO(n,t={}){const{immediate:s=!0,window:o=_O}=t,l=V(!1);let r=null;function a(){!l.value||!o||(n(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&i(),gO(c),{isActive:l,pause:c,resume:i}}var Cu;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Cu||(Cu={}));const Mr="vue-starport-injection",im="vue-starport-options",AO={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},cm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var wO=Object.defineProperty,lr=Object.getOwnPropertySymbols,pm=Object.prototype.hasOwnProperty,um=Object.prototype.propertyIsEnumerable,Eu=(n,t,s)=>t in n?wO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,xO=(n,t)=>{for(var s in t||(t={}))pm.call(t,s)&&Eu(n,s,t[s]);if(lr)for(var s of lr(t))um.call(t,s)&&Eu(n,s,t[s]);return n},ku=(n,t)=>{var s={};for(var o in n)pm.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&lr)for(var o of lr(n))t.indexOf(o)<0&&um.call(n,o)&&(s[o]=n[o]);return s};const CO=Re({name:"StarportProxy",props:xO({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},cm),setup(n,t){const s=ee(Mr),o=$(()=>s.getInstance(n.port,n.component)),l=V(),r=o.value.generateId(),a=V(!1);return o.value.isVisible||(o.value.land(),a.value=!0),ks(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await an(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),ll(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await an(),await an(),!o.value.el&&s.dispose(o.value.port))}),ge(()=>n,async()=>{o.value.props&&await an();const i=n,{props:c}=i,u=ku(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=n,{initialProps:c,mountedProps:u}=i,d=ku(i,["initialProps","mountedProps"]),f=we(d,(a.value?u:c)||{});return Tn("div",we(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Tn(t.slots.default):void 0)}}});var EO=Object.defineProperty,kO=Object.defineProperties,SO=Object.getOwnPropertyDescriptors,Su=Object.getOwnPropertySymbols,OO=Object.prototype.hasOwnProperty,$O=Object.prototype.propertyIsEnumerable,Ou=(n,t,s)=>t in n?EO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,PO=(n,t)=>{for(var s in t||(t={}))OO.call(t,s)&&Ou(n,s,t[s]);if(Su)for(var s of Su(t))$O.call(t,s)&&Ou(n,s,t[s]);return n},TO=(n,t)=>kO(n,SO(t));const MO=Re({name:"Starport",inheritAttrs:!0,props:cm,setup(n,t){const s=V(!1);return ks(()=>{if(s.value=!0,!ee(Mr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!hO(r)||Gt(r))&&(r={render(){return o}}),Tn(CO,TO(PO({},n),{key:n.port,component:ur(r),props:l.props}))}}});function BO(n){const t=qe({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Bo?document.documentElement||document.body:void 0;function o(){if(!Bo)return;const i=vO(n);if(!i)return;const{height:c,width:u,left:d,top:f}=i.getBoundingClientRect(),F=window.getComputedStyle(i),y=F.margin,m=F.padding;Object.assign(t,{height:c,width:u,left:d,top:s.scrollTop+f,margin:y,padding:m})}const l=bO(o,{immediate:!1});function r(){Bo&&(o(),l.resume())}function a(){l.pause()}return t}let RO=(n,t=21)=>(s=t)=>{let o="",l=s;for(;l--;)o+=n[Math.random()*n.length|0];return o};const $u=RO("abcdefghijklmnopqrstuvwxyz",5);function Pu(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function IO(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var jO=Object.defineProperty,Tu=Object.getOwnPropertySymbols,LO=Object.prototype.hasOwnProperty,DO=Object.prototype.propertyIsEnumerable,Mu=(n,t,s)=>t in n?jO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,ua=(n,t)=>{for(var s in t||(t={}))LO.call(t,s)&&Mu(n,s,t[s]);if(Tu)for(var s of Tu(t))DO.call(t,s)&&Mu(n,s,t[s]);return n};function NO(n,t,s={}){const o=IO(t),l=Pu(o)||$u(),r=V(),a=V(null),i=V(!1),c=V(!1),u=Om(!0),d=V({}),f=$(()=>ua(ua(ua({},AO),s),d.value)),F=V(0);let y;u.run(()=>{y=BO(r),ge(r,async x=>{x&&(c.value=!0),await an(),r.value||(c.value=!1)})});const m=Pu(n);function g(){return`starport-${l}-${m}-${$u()}`}const v=g();return qe({el:r,id:v,port:n,props:a,rect:y,scope:u,isLanded:i,isVisible:c,options:f,liftOffTime:F,component:t,componentName:o,componentId:l,generateId:g,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return r},liftOff(){i.value&&(i.value=!1,F.value=Date.now(),y.listen())},land(){i.value||(i.value=!0,y.pause())}})}function HO(n){const t=qe(new Map);function s(l,r){let a=t.get(l);return a||(a=NO(l,r,n),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:s}}var qO=Object.defineProperty,zO=Object.defineProperties,UO=Object.getOwnPropertyDescriptors,Bu=Object.getOwnPropertySymbols,VO=Object.prototype.hasOwnProperty,WO=Object.prototype.propertyIsEnumerable,Ru=(n,t,s)=>t in n?qO(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,KO=(n,t)=>{for(var s in t||(t={}))VO.call(t,s)&&Ru(n,s,t[s]);if(Bu)for(var s of Bu(t))WO.call(t,s)&&Ru(n,s,t[s]);return n},GO=(n,t)=>zO(n,UO(t));const YO=Re({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=ee(Mr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=$(()=>t.getInstance(n.port,n.component)),o=$(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=$(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?GO(KO({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Tn("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Tn(Ph,{to:a?`#${o.value}`:"body",disabled:!a},Tn(s.value.component,we(r,s.value.props))))}}}),ZO=Re({name:"StarportCarrier",setup(n,{slots:t}){const s=HO(ee(im,{}));return Rn().appContext.app.provide(Mr,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:a}])=>Tn(YO,{key:r,port:r,component:a}))]}}});function JO(n={}){return{install(t){t.provide(im,n),t.component("Starport",MO),t.component("StarportCarrier",ZO)}}}function XO(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(mO),n.app.use(JO({keepAlive:!0}))}function En(n,t,s){var o;return((o=n.instance)==null?void 0:o.$).provides[t]??s}function QO(){return{install(n){n.directive("click",{name:"v-click",mounted(t,s){var d,f,F,y,m,g;if($o.value||(d=En(s,Eo))!=null&&d.value)return;const o=En(s,cs),l=En(s,Co),r=En(s,Ta),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=i?Ov:Wr;if(o&&!((F=o==null?void 0:o.value)!=null&&F.includes(t))&&o.value.push(t),s.value==null&&(s.value=(y=o==null?void 0:o.value)==null?void 0:y.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((g=r==null?void 0:r.value.get(s.value))!=null&&g.includes(t))){const v=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(v))}t==null||t.classList.toggle(rs,!0),l&&ge(l,()=>{const v=(l==null?void 0:l.value)??0,x=s.value!=null?v>=s.value:v>c;t.classList.contains(Kr)||t.classList.toggle(u,!x),a!==!1&&a!==void 0&&t.classList.toggle(u,x),t.classList.toggle(io,!1);const A=r==null?void 0:r.value.get(v);A==null||A.forEach((_,C)=>{_.classList.toggle(wl,!1),C===A.length-1?_.classList.toggle(io,!0):_.classList.toggle(wl,!0)}),t.classList.contains(io)||t.classList.toggle(wl,x)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(rs,!1);const o=En(s,cs);o!=null&&o.value&&Ma(o.value,t)}}),n.directive("after",{name:"v-after",mounted(t,s){var i,c,u;if($o.value||(i=En(s,Eo))!=null&&i.value)return;const o=En(s,cs),l=En(s,Co),r=En(s,Ta),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(rs,!0),l&&ge(l,()=>{const d=(l.value??0)>=(s.value??a??0);t.classList.contains(Kr)||t.classList.toggle(Wr,!d),t.classList.toggle(io,!1),t.classList.contains(io)||t.classList.toggle(wl,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(rs,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,s){var a,i,c;if($o.value||(a=En(s,Eo))!=null&&a.value)return;const o=En(s,cs),l=En(s,Co),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(rs,!0),l&&ge(l,()=>{const u=(l==null?void 0:l.value)??0,d=s.value!=null?u>=s.value:u>r;t.classList.toggle(Wr,d),t.classList.toggle(Kr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(rs,!1);const o=En(s,cs);o!=null&&o.value&&Ma(o.value,t)}})}}}function e$(n,t){const s=mF(n),o=yF(t,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Oe,themeConfigs:$(()=>Oe.themeConfig)}}function n$(){return{install(n){const t=e$(qn,Dn);n.provide(ie,qe(t))}}}const to=$g(Ik);to.use(bn);to.use(Ev());to.use(QO());to.use(n$());XO({app:to,router:bn});to.mount("#app");export{ew as $,gA as A,V as B,l$ as C,Fn as D,He as E,$e as F,L_ as G,Ok as H,Dn as I,tr as J,xk as K,ta as L,ks as M,qe as N,s$ as O,r$ as P,ge as Q,W as R,Yf as S,Pe as T,fn as U,J_ as V,en as W,nn as X,Ko as Y,Qr as Z,ce as _,ie as a,Ki as a0,Gi as a1,Ve as a2,YA as a3,X1 as a4,t$ as a5,Hn as a6,yo as a7,fs as a8,rt as a9,Ka as aa,C_ as ab,E_ as ac,k_ as ad,O_ as ae,Ti as af,nf as ag,a$ as ah,yn as ai,El as aj,Mb as ak,uf as al,$_ as am,ll as an,Li as b,Oe as c,Re as d,fy as e,R as f,e as g,w as h,ee as i,Ye as j,_k as k,p as l,N as m,cn as n,E as o,X as p,Ni as q,Js as r,Qn as s,At as t,o$ as u,$ as v,Gr as w,ae as x,Hf as y,wA as z};

import{h as Yn,n as Xn}from"./chunk-YJSZZTEX.js";Yn();Xn();var Z={context:void 0,registry:void 0,getContextId(){return Wo(this.context.count)},getNextContextId(){return Wo(this.context.count++)}};function Wo(e){let t=String(e),n=t.length-1;return Z.context.id+(n?String.fromCharCode(96+n):"")+t}function Lr(e){Z.context=e}function Sa(){return{...Z.context,id:Z.getNextContextId(),count:0}}var $a=(e,t)=>e===t,nr=Symbol("solid-proxy"),Mn=Symbol("solid-track"),rr={equals:$a},Qo=null,si=yi,ze=1,Cn=2,li={owned:null,cleanups:null,context:null,owner:null};var Y=null,_=null,on=null,nn=null,re=null,we=null,Oe=null,lr=0;function bt(e,t){let n=re,r=Y,o=e.length===0,i=t===void 0?r:t,s=o?li:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=o?e:()=>e(()=>ve(()=>Dt(s)));Y=s,re=null;try{return tt(a,!0)}finally{re=n,Y=r}}function z(e,t){t=t?Object.assign({},rr,t):rr;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(_&&_.running&&_.sources.has(n)?o=o(n.tValue):o=o(n.value)),hi(n,o));return[gi.bind(n),r]}function ai(e,t,n){let r=ar(e,t,!0,ze);on&&_&&_.running?we.push(r):sn(r)}function K(e,t,n){let r=ar(e,t,!1,ze);on&&_&&_.running?we.push(r):sn(r)}function B(e,t,n){si=Ta;let r=ar(e,t,!1,ze),o=qr&&Se(qr);o&&(r.suspense=o),(!n||!n.render)&&(r.user=!0),Oe?Oe.push(r):sn(r)}function E(e,t,n){n=n?Object.assign({},rr,n):rr;let r=ar(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,on&&_&&_.running?(r.tState=ze,we.push(r)):sn(r),gi.bind(r)}function ci(e){return tt(e,!1)}function ve(e){if(!nn&&re===null)return e();let t=re;re=null;try{return nn?nn.untrack(e):e()}finally{re=t}}function at(e,t,n){let r=Array.isArray(e),o,i=n&&n.defer;return s=>{let a;if(r){a=Array(e.length);for(let u=0;u<e.length;u++)a[u]=e[u]()}else a=e();if(i)return i=!1,s;let l=ve(()=>t(a,o,s));return o=a,l}}function wt(e){B(()=>ve(e))}function U(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function or(){return Y}function ka(e,t){let n=Y,r=re;Y=e,re=null;try{return tt(t,!0)}catch(o){cr(o)}finally{Y=n,re=r}}function ui(e){if(_&&_.running)return e(),_.done;let t=re,n=Y;return Promise.resolve().then(()=>{re=t,Y=n;let r;return(on||qr)&&(r=_||(_={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),tt(e,!1),re=Y=null,r?r.done:void 0})}var[Ea,Yo]=z(!1);function di(){return[Ea,ui]}function ke(e,t){let n=Symbol("context");return{id:n,Provider:Da(n),defaultValue:e}}function Se(e){let t;return Y&&Y.context&&(t=Y.context[e.id])!==void 0?t:e.defaultValue}function fi(e){let t=E(e),n=E(()=>_r(t()));return n.toArray=()=>{let r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}var qr;function gi(){let e=_&&_.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===ze)sn(this);else{let t=we;we=null,tt(()=>ir(this),!1),we=t}if(re){let t=this.observers?this.observers.length:0;re.sources?(re.sources.push(this),re.sourceSlots.push(t)):(re.sources=[this],re.sourceSlots=[t]),this.observers?(this.observers.push(re),this.observerSlots.push(re.sources.length-1)):(this.observers=[re],this.observerSlots=[re.sources.length-1])}return e&&_.sources.has(this)?this.tValue:this.value}function hi(e,t,n){let r=_&&_.running&&_.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(_){let o=_.running;(o||!n&&_.sources.has(e))&&(_.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&tt(()=>{for(let o=0;o<e.observers.length;o+=1){let i=e.observers[o],s=_&&_.running;s&&_.disposed.has(i)||((s?!i.tState:!i.state)&&(i.pure?we.push(i):Oe.push(i),i.observers&&mi(i)),s?i.tState=ze:i.state=ze)}if(we.length>1e6)throw we=[],new Error},!1)}return t}function sn(e){if(!e.fn)return;Dt(e);let t=lr;Xo(e,_&&_.running&&_.sources.has(e)?e.tValue:e.value,t),_&&!_.running&&_.sources.has(e)&&queueMicrotask(()=>{tt(()=>{_&&(_.running=!0),re=Y=e,Xo(e,e.tValue,t),re=Y=null},!1)})}function Xo(e,t,n){let r,o=Y,i=re;re=Y=e;try{r=e.fn(t)}catch(s){return e.pure&&(_&&_.running?(e.tState=ze,e.tOwned&&e.tOwned.forEach(Dt),e.tOwned=void 0):(e.state=ze,e.owned&&e.owned.forEach(Dt),e.owned=null)),e.updatedAt=n+1,cr(s)}finally{re=i,Y=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?hi(e,r,!0):_&&_.running&&e.pure?(_.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ar(e,t,n,r=ze,o){let i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:Y?Y.context:null,pure:n};if(_&&_.running&&(i.state=0,i.tState=r),Y===null||Y!==li&&(_&&_.running&&Y.pure?Y.tOwned?Y.tOwned.push(i):Y.tOwned=[i]:Y.owned?Y.owned.push(i):Y.owned=[i]),nn&&i.fn){let[s,a]=z(void 0,{equals:!1}),l=nn.factory(i.fn,a);U(()=>l.dispose());let u=()=>ui(a).then(()=>d.dispose()),d=nn.factory(i.fn,u);i.fn=c=>(s(),_&&_.running?d.track(c):l.track(c))}return i}function Sn(e){let t=_&&_.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===Cn)return ir(e);if(e.suspense&&ve(e.suspense.inFallback))return e.suspense.effects.push(e);let n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<lr);){if(t&&_.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,i=n[r+1];for(;(o=o.owner)&&o!==i;)if(_.disposed.has(o))return}if((t?e.tState:e.state)===ze)sn(e);else if((t?e.tState:e.state)===Cn){let o=we;we=null,tt(()=>ir(e,n[0]),!1),we=o}}}function tt(e,t){if(we)return e();let n=!1;t||(we=[]),Oe?n=!0:Oe=[],lr++;try{let r=e();return Aa(n),r}catch(r){n||(Oe=null),we=null,cr(r)}}function Aa(e){if(we&&(on&&_&&_.running?Ma(we):yi(we),we=null),e)return;let t;if(_){if(!_.promises.size&&!_.queue.size){let r=_.sources,o=_.disposed;Oe.push.apply(Oe,_.effects),t=_.resolve;for(let i of Oe)"tState"in i&&(i.state=i.tState),delete i.tState;_=null,tt(()=>{for(let i of o)Dt(i);for(let i of r){if(i.value=i.tValue,i.owned)for(let s=0,a=i.owned.length;s<a;s++)Dt(i.owned[s]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Yo(!1)},!1)}else if(_.running){_.running=!1,_.effects.push.apply(_.effects,Oe),Oe=null,Yo(!0);return}}let n=Oe;Oe=null,n.length&&tt(()=>si(n),!1),t&&t()}function yi(e){for(let t=0;t<e.length;t++)Sn(e[t])}function Ma(e){for(let t=0;t<e.length;t++){let n=e[t],r=_.queue;r.has(n)||(r.add(n),on(()=>{r.delete(n),tt(()=>{_.running=!0,Sn(n)},!1),_&&(_.running=!1)}))}}function Ta(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:Sn(r)}if(Z.context){if(Z.count){Z.effects||(Z.effects=[]),Z.effects.push(...e.slice(0,n));return}else Z.effects&&(e=[...Z.effects,...e],n+=Z.effects.length,delete Z.effects);Lr()}for(t=0;t<n;t++)Sn(e[t])}function ir(e,t){let n=_&&_.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){let o=e.sources[r];if(o.sources){let i=n?o.tState:o.state;i===ze?o!==t&&(!o.updatedAt||o.updatedAt<lr)&&Sn(o):i===Cn&&ir(o,t)}}}function mi(e){let t=_&&_.running;for(let n=0;n<e.observers.length;n+=1){let r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=Cn:r.state=Cn,r.pure?we.push(r):Oe.push(r),r.observers&&mi(r))}}function Dt(e){let t;if(e.sources)for(;e.sources.length;){let n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){let i=o.pop(),s=n.observerSlots.pop();r<o.length&&(i.sourceSlots[s]=r,o[r]=i,n.observerSlots[r]=s)}}if(_&&_.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Dt(e.tOwned[t]);delete e.tOwned}vi(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)Dt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}_&&_.running?e.tState=0:e.state=0}function vi(e,t){if(t||(e.tState=0,_.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)vi(e.owned[n])}function Oa(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Zo(e,t,n){try{for(let r of t)r(e)}catch(r){cr(r,n&&n.owner||null)}}function cr(e,t=Y){let n=Qo&&t&&t.context&&t.context[Qo],r=Oa(e);if(!n)throw r;Oe?Oe.push({fn(){Zo(r,n,t)},state:ze}):Zo(r,n,t)}function _r(e){if(typeof e=="function"&&!e.length)return _r(e());if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=_r(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Da(e,t){return function(r){let o;return K(()=>o=ve(()=>(Y.context={...Y.context,[e]:r.value},fi(()=>r.children))),void 0),o}}var Rr=Symbol("fallback");function sr(e){for(let t=0;t<e.length;t++)e[t]()}function Ia(e,t,n={}){let r=[],o=[],i=[],s=0,a=t.length>1?[]:null;return U(()=>sr(i)),()=>{let l=e()||[],u=l.length,d,c;return l[Mn],ve(()=>{let f,h,y,m,p,b,w,x,C;if(u===0)s!==0&&(sr(i),i=[],r=[],o=[],s=0,a&&(a=[])),n.fallback&&(r=[Rr],o[0]=bt(P=>(i[0]=P,n.fallback())),s=1);else if(s===0){for(o=new Array(u),c=0;c<u;c++)r[c]=l[c],o[c]=bt(g);s=u}else{for(y=new Array(u),m=new Array(u),a&&(p=new Array(u)),b=0,w=Math.min(s,u);b<w&&r[b]===l[b];b++);for(w=s-1,x=u-1;w>=b&&x>=b&&r[w]===l[x];w--,x--)y[x]=o[w],m[x]=i[w],a&&(p[x]=a[w]);for(f=new Map,h=new Array(x+1),c=x;c>=b;c--)C=l[c],d=f.get(C),h[c]=d===void 0?-1:d,f.set(C,c);for(d=b;d<=w;d++)C=r[d],c=f.get(C),c!==void 0&&c!==-1?(y[c]=o[d],m[c]=i[d],a&&(p[c]=a[d]),c=h[c],f.set(C,c)):i[d]();for(c=b;c<u;c++)c in y?(o[c]=y[c],i[c]=m[c],a&&(a[c]=p[c],a[c](c))):o[c]=bt(g);o=o.slice(0,s=u),r=l.slice(0)}return o});function g(f){if(i[c]=f,a){let[h,y]=z(c);return a[c]=y,t(l[c],h)}return t(l[c])}}}function Pa(e,t,n={}){let r=[],o=[],i=[],s=[],a=0,l;return U(()=>sr(i)),()=>{let u=e()||[],d=u.length;return u[Mn],ve(()=>{if(d===0)return a!==0&&(sr(i),i=[],r=[],o=[],a=0,s=[]),n.fallback&&(r=[Rr],o[0]=bt(g=>(i[0]=g,n.fallback())),a=1),o;for(r[0]===Rr&&(i[0](),i=[],r=[],o=[],a=0),l=0;l<d;l++)l<r.length&&r[l]!==u[l]?s[l](()=>u[l]):l>=r.length&&(o[l]=bt(c));for(;l<r.length;l++)i[l]();return a=s.length=i.length=d,r=u.slice(0),o=o.slice(0,a)});function c(g){i[l]=g;let[f,h]=z(u[l]);return s[l]=h,t(f,l)}}}var Fa=!1;function v(e,t){if(Fa&&Z.context){let n=Z.context;Lr(Sa());let r=ve(()=>e(t||{}));return Lr(n),r}return ve(()=>e(t||{}))}function Zn(){return!0}var zr={get(e,t,n){return t===nr?n:e.get(t)},has(e,t){return t===nr?!0:e.has(t)},set:Zn,deleteProperty:Zn,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Zn,deleteProperty:Zn}},ownKeys(e){return e.keys()}};function Pr(e){return(e=typeof e=="function"?e():e)?e:{}}function La(){for(let e=0,t=this.length;e<t;++e){let n=this[e]();if(n!==void 0)return n}}function W(...e){let t=!1;for(let s=0;s<e.length;s++){let a=e[s];t=t||!!a&&nr in a,e[s]=typeof a=="function"?(t=!0,E(a)):a}if(t)return new Proxy({get(s){for(let a=e.length-1;a>=0;a--){let l=Pr(e[a])[s];if(l!==void 0)return l}},has(s){for(let a=e.length-1;a>=0;a--)if(s in Pr(e[a]))return!0;return!1},keys(){let s=[];for(let a=0;a<e.length;a++)s.push(...Object.keys(Pr(e[a])));return[...new Set(s)]}},zr);let n={},r=Object.create(null);for(let s=e.length-1;s>=0;s--){let a=e[s];if(!a)continue;let l=Object.getOwnPropertyNames(a);for(let u=l.length-1;u>=0;u--){let d=l[u];if(d==="__proto__"||d==="constructor")continue;let c=Object.getOwnPropertyDescriptor(a,d);if(!r[d])r[d]=c.get?{enumerable:!0,configurable:!0,get:La.bind(n[d]=[c.get.bind(a)])}:c.value!==void 0?c:void 0;else{let g=n[d];g&&(c.get?g.push(c.get.bind(a)):c.value!==void 0&&g.push(()=>c.value))}}}let o={},i=Object.keys(r);for(let s=i.length-1;s>=0;s--){let a=i[s],l=r[a];l&&l.get?Object.defineProperty(o,a,l):o[a]=l?l.value:void 0}return o}function ee(e,...t){if(nr in e){let o=new Set(t.length>1?t.flat():t[0]),i=t.map(s=>new Proxy({get(a){return s.includes(a)?e[a]:void 0},has(a){return s.includes(a)&&a in e},keys(){return s.filter(a=>a in e)}},zr));return i.push(new Proxy({get(s){return o.has(s)?void 0:e[s]},has(s){return o.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!o.has(s))}},zr)),i}let n={},r=t.map(()=>({}));for(let o of Object.getOwnPropertyNames(e)){let i=Object.getOwnPropertyDescriptor(e,o),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable,a=!1,l=0;for(let u of t)u.includes(o)&&(a=!0,s?r[l][o]=i.value:Object.defineProperty(r[l],o,i)),++l;a||(s?n[o]=i.value:Object.defineProperty(n,o,i))}return[...r,n]}var qa=0;function Ke(){return Z.context?Z.getNextContextId():`cl-${qa++}`}var pi=e=>`Stale read from <${e}>.`;function bi(e){let t="fallback"in e&&{fallback:()=>e.fallback};return E(Ia(()=>e.each,e.children,t||void 0))}function wi(e){let t="fallback"in e&&{fallback:()=>e.fallback};return E(Pa(()=>e.each,e.children,t||void 0))}function N(e){let t=e.keyed,n=E(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return E(()=>{let r=n();if(r){let o=e.children;return typeof o=="function"&&o.length>0?ve(()=>o(t?r:()=>{if(!ve(n))throw pi("Show");return e.when})):o}return e.fallback},void 0,void 0)}function xi(e){let t=!1,n=(i,s)=>(t?i[1]===s[1]:!i[1]==!s[1])&&i[2]===s[2],r=fi(()=>e.children),o=E(()=>{let i=r();Array.isArray(i)||(i=[i]);for(let s=0;s<i.length;s++){let a=i[s].when;if(a)return t=!!i[s].keyed,[s,a,i[s]]}return[-1]},void 0,{equals:n});return E(()=>{let[i,s,a]=o();if(i<0)return e.fallback;let l=a.children;return typeof l=="function"&&l.length>0?ve(()=>l(t?s:()=>{if(ve(o)[0]!==i)throw pi("Match");return a.when})):l},void 0,void 0)}function ur(e){return e}var Ci=void 0,_a=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ra=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",..._a]),za=new Set(["innerHTML","textContent","innerText","children"]),Ka=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ba=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Na(e,t){let n=Ba[e];return typeof n=="object"?n[t]?n.$:void 0:n}var Va=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ua=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ga={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ha(e,t,n){let r=n.length,o=t.length,i=r,s=0,a=0,l=t[o-1].nextSibling,u=null;for(;s<o||a<i;){if(t[s]===n[a]){s++,a++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===s){let d=i<r?a?n[a-1].nextSibling:n[i-a]:l;for(;a<i;)e.insertBefore(n[a++],d)}else if(i===a)for(;s<o;)(!u||!u.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[a]===t[o-1]){let d=t[--o].nextSibling;e.insertBefore(n[a++],t[s++].nextSibling),e.insertBefore(n[--i],d),t[o]=n[i]}else{if(!u){u=new Map;let c=a;for(;c<i;)u.set(n[c],c++)}let d=u.get(t[s]);if(d!=null)if(a<d&&d<i){let c=s,g=1,f;for(;++c<o&&c<i&&!((f=u.get(t[c]))==null||f!==d+g);)g++;if(g>d-a){let h=t[s];for(;a<d;)e.insertBefore(n[a++],h)}else e.replaceChild(n[a++],t[s++])}else s++;else t[s++].remove()}}}var wn="_$DX_DELEGATE";function R(e,t,n){let r,o=()=>{let s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>ve(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return i.cloneNode=i,i}function Tn(e,t=self.document){let n=t[wn]||(t[wn]=new Set);for(let r=0,o=e.length;r<o;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,$i))}}function Si(e=self.document){if(e[wn]){for(let t of e[wn].keys())e.removeEventListener(t,$i);delete e[wn]}}function M(e,t,n){Z.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function ja(e,t,n,r){Z.context&&e.isConnected||(r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r))}function T(e,t){Z.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function Gr(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function Wa(e,t,n={}){let r=Object.keys(t||{}),o=Object.keys(n),i,s;for(i=0,s=o.length;i<s;i++){let a=o[i];!a||a==="undefined"||t[a]||(Jo(e,a,!1),delete n[a])}for(i=0,s=r.length;i<s;i++){let a=r[i],l=!!t[a];!a||a==="undefined"||n[a]===l||!l||(Jo(e,a,!0),n[a]=l)}return n}function Qa(e,t,n){if(!t)return n?M(e,"style"):t;let r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function Hr(e,t={},n,r){let o={};return r||K(()=>o.children=$n(e,t.children,o.children)),K(()=>typeof t.ref=="function"&&Nt(t.ref,e)),K(()=>Ya(e,t,n,!0,o,!0)),o}function Nt(e,t,n){return ve(()=>e(t,n))}function $(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return $n(e,t,r,n);K(o=>$n(e,t(),o,n),r)}function Ya(e,t,n,r,o={},i=!1){t||(t={});for(let s in o)if(!(s in t)){if(s==="children")continue;o[s]=ei(e,s,null,o[s],n,i)}for(let s in t){if(s==="children")continue;let a=t[s];o[s]=ei(e,s,a,o[s],n,i)}}function Xa(e){let t,n;return!Z.context||!(t=Z.registry.get(n=Ja()))?e():(Z.completed&&Z.completed.add(t),Z.registry.delete(n),t)}function Za(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Jo(e,t,n){let r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function ei(e,t,n,r,o,i){let s,a,l,u,d;if(t==="style")return Qa(e,n,r);if(t==="classList")return Wa(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){let c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){let c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){let c=t.slice(2).toLowerCase(),g=Va.has(c);if(!g&&r){let f=Array.isArray(r)?r[0]:r;e.removeEventListener(c,f)}(g||n)&&(Gr(e,c,n,g),g&&Tn([c]))}else if(t.slice(0,5)==="attr:")M(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(l=za.has(t))||!o&&((u=Na(t,e.tagName))||(a=Ra.has(t)))||(s=e.nodeName.includes("-"))){if(d)t=t.slice(5),a=!0;else if(Z.context&&e.isConnected)return n;t==="class"||t==="className"?T(e,n):s&&!a&&!l?e[Za(t)]=n:e[u||t]=n}else{let c=o&&t.indexOf(":")>-1&&Ga[t.split(":")[0]];c?ja(e,c,t,n):M(e,Ka[t]||t,n)}return n}function $i(e){let t=`$$${e.type}`,n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),Z.registry&&!Z.done&&(Z.done=_$HY.done=!0);n;){let r=n[t];if(r&&!n.disabled){let o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function $n(e,t,n,r,o){let i=!!Z.context&&e.isConnected;if(i){!n&&(n=[...e.childNodes]);let l=[];for(let u=0;u<n.length;u++){let d=n[u];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():l.push(d)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;let s=typeof t,a=r!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(i||s==="number"&&(t=t.toString(),t===n))return n;if(a){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=Jt(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(i)return n;n=Jt(e,n,r)}else{if(s==="function")return K(()=>{let l=t();for(;typeof l=="function";)l=l();n=$n(e,l,n,r)}),()=>n;if(Array.isArray(t)){let l=[],u=n&&Array.isArray(n);if(Kr(l,t,n,o))return K(()=>n=$n(e,l,n,r,!0)),()=>n;if(i){if(!l.length)return n;if(r===void 0)return[...e.childNodes];let d=l[0],c=[d];for(;(d=d.nextSibling)!==r;)c.push(d);return n=c}if(l.length===0){if(n=Jt(e,n,r),a)return n}else u?n.length===0?ti(e,l,r):Ha(e,n,l):(n&&Jt(e),ti(e,l));n=l}else if(t.nodeType){if(i&&t.parentNode)return n=a?[t]:t;if(Array.isArray(n)){if(a)return n=Jt(e,n,r,t);Jt(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Kr(e,t,n,r){let o=!1;for(let i=0,s=t.length;i<s;i++){let a=t[i],l=n&&n[e.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Kr(e,a,l)||o;else if(u==="function")if(r){for(;typeof a=="function";)a=a();o=Kr(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else e.push(a),o=!0;else{let d=String(a);l&&l.nodeType===3&&l.data===d?e.push(l):e.push(document.createTextNode(d))}}return o}function ti(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Jt(e,t,n,r){if(n===void 0)return e.textContent="";let o=r||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){let a=t[s];if(o!==a){let l=a.parentNode===e;!i&&!s?l?e.replaceChild(o,a):e.insertBefore(o,n):l&&a.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}function Ja(){return Z.getNextContextId()}var De=!1,ec="http://www.w3.org/2000/svg";function ki(e,t=!1){return t?document.createElementNS(ec,e):document.createElement(e)}function jr(e){let{useShadow:t}=e,n=document.createTextNode(""),r=()=>e.mount||document.body,o=or(),i,s=!!Z.context;return B(()=>{s&&(or().user=s=!1),i||(i=ka(o,()=>E(()=>e.children)));let a=r();if(a instanceof HTMLHeadElement){let[l,u]=z(!1),d=()=>u(!0);bt(c=>$(a,()=>l()?c():i(),null)),U(d)}else{let l=ki(e.isSVG?"g":"div",e.isSVG),u=t&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"_$host",{get(){return n.parentNode},configurable:!0}),$(u,i),a.appendChild(l),e.ref&&e.ref(l),U(()=>a.removeChild(l))}},void 0,{render:!s}),n}function Ei(e){let[t,n]=ee(e,["component"]),r=E(()=>t.component);return E(()=>{let o=r();switch(typeof o){case"function":return ve(()=>o(n));case"string":let i=Ua.has(o),s=Z.context?Xa():ki(o,i);return Hr(s,n,i),s}})}var tc=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)}getByKey(e){return this.keyToValue.get(e)}getByValue(e){return this.valueToKey.get(e)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},Ai=class{constructor(e){this.generateIdentifier=e,this.kv=new tc}register(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))}clear(){this.kv.clear()}getIdentifier(e){return this.kv.getByValue(e)}getValue(e){return this.kv.getByKey(e)}},nc=class extends Ai{constructor(){super(e=>e.name),this.classToAllowedProps=new Map}register(e,t){typeof t=="object"?(t.allowProps&&this.classToAllowedProps.set(e,t.allowProps),super.register(e,t.identifier)):super.register(e,t)}getAllowedProps(e){return this.classToAllowedProps.get(e)}};function rc(e){if("values"in Object)return Object.values(e);let t=[];for(let n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function oc(e,t){let n=rc(e);if("find"in n)return n.find(t);let r=n;for(let o=0;o<r.length;o++){let i=r[o];if(t(i))return i}}function rn(e,t){Object.entries(e).forEach(([n,r])=>t(r,n))}function tr(e,t){return e.indexOf(t)!==-1}function ni(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(t(r))return r}}var ic=class{constructor(){this.transfomers={}}register(e){this.transfomers[e.name]=e}findApplicable(e){return oc(this.transfomers,t=>t.isApplicable(e))}findByName(e){return this.transfomers[e]}},sc=e=>Object.prototype.toString.call(e).slice(8,-1),Mi=e=>typeof e>"u",lc=e=>e===null,kn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Br=e=>kn(e)&&Object.keys(e).length===0,It=e=>Array.isArray(e),ac=e=>typeof e=="string",cc=e=>typeof e=="number"&&!isNaN(e),uc=e=>typeof e=="boolean",dc=e=>e instanceof RegExp,En=e=>e instanceof Map,An=e=>e instanceof Set,Ti=e=>sc(e)==="Symbol",fc=e=>e instanceof Date&&!isNaN(e.valueOf()),gc=e=>e instanceof Error,ri=e=>typeof e=="number"&&isNaN(e),hc=e=>uc(e)||lc(e)||Mi(e)||cc(e)||ac(e)||Ti(e),yc=e=>typeof e=="bigint",mc=e=>e===1/0||e===-1/0,vc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),pc=e=>e instanceof URL,Oi=e=>e.replace(/\./g,"\\."),Fr=e=>e.map(String).map(Oi).join("."),xn=e=>{let t=[],n="";for(let o=0;o<e.length;o++){let i=e.charAt(o);if(i==="\\"&&e.charAt(o+1)==="."){n+=".",o++;continue}if(i==="."){t.push(n),n="";continue}n+=i}let r=n;return t.push(r),t};function lt(e,t,n,r){return{isApplicable:e,annotation:t,transform:n,untransform:r}}var Di=[lt(Mi,"undefined",()=>null,()=>{}),lt(yc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):e),lt(fc,"Date",e=>e.toISOString(),e=>new Date(e)),lt(gc,"Error",(e,t)=>{let n={name:e.name,message:e.message};return t.allowedErrorProps.forEach(r=>{n[r]=e[r]}),n},(e,t)=>{let n=new Error(e.message);return n.name=e.name,n.stack=e.stack,t.allowedErrorProps.forEach(r=>{n[r]=e[r]}),n}),lt(dc,"regexp",e=>""+e,e=>{let t=e.slice(1,e.lastIndexOf("/")),n=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,n)}),lt(An,"set",e=>[...e.values()],e=>new Set(e)),lt(En,"map",e=>[...e.entries()],e=>new Map(e)),lt(e=>ri(e)||mc(e),"number",e=>ri(e)?"NaN":e>0?"Infinity":"-Infinity",Number),lt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),lt(pc,"URL",e=>e.toString(),e=>new URL(e))];function dr(e,t,n,r){return{isApplicable:e,annotation:t,transform:n,untransform:r}}var Ii=dr((e,t)=>Ti(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,n)=>{let r=n.symbolRegistry.getValue(t[1]);if(!r)throw new Error("Trying to deserialize unknown symbol");return r}),bc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Pi=dr(vc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{let n=bc[t[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(e)});function Fi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}var Li=dr(Fi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{let n=t.classRegistry.getAllowedProps(e.constructor);if(!n)return{...e};let r={};return n.forEach(o=>{r[o]=e[o]}),r},(e,t,n)=>{let r=n.classRegistry.getValue(t[1]);if(!r)throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(r.prototype),e)}),qi=dr((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,n)=>{let r=n.customTransformerRegistry.findByName(t[1]);if(!r)throw new Error("Trying to deserialize unknown custom value");return r.deserialize(e)}),wc=[Li,Ii,qi,Pi],oi=(e,t)=>{let n=ni(wc,o=>o.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation(e,t)};let r=ni(Di,o=>o.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation}},_i={};Di.forEach(e=>{_i[e.annotation]=e});var xc=(e,t,n)=>{if(It(t))switch(t[0]){case"symbol":return Ii.untransform(e,t,n);case"class":return Li.untransform(e,t,n);case"custom":return qi.untransform(e,t,n);case"typed-array":return Pi.untransform(e,t,n);default:throw new Error("Unknown transformation: "+t)}else{let r=_i[t];if(!r)throw new Error("Unknown transformation: "+t);return r.untransform(e,n)}},en=(e,t)=>{let n=e.keys();for(;t>0;)n.next(),t--;return n.next().value};function Ri(e){if(tr(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(tr(e,"prototype"))throw new Error("prototype is not allowed as a property");if(tr(e,"constructor"))throw new Error("constructor is not allowed as a property")}var Cc=(e,t)=>{Ri(t);for(let n=0;n<t.length;n++){let r=t[n];if(An(e))e=en(e,+r);else if(En(e)){let o=+r,i=+t[++n]==0?"key":"value",s=en(e,o);switch(i){case"key":e=s;break;case"value":e=e.get(s);break}}else e=e[r]}return e},Nr=(e,t,n)=>{if(Ri(t),t.length===0)return n(e);let r=e;for(let i=0;i<t.length-1;i++){let s=t[i];if(It(r)){let a=+s;r=r[a]}else if(kn(r))r=r[s];else if(An(r)){let a=+s;r=en(r,a)}else if(En(r)){if(i===t.length-2)break;let l=+s,u=+t[++i]==0?"key":"value",d=en(r,l);switch(u){case"key":r=d;break;case"value":r=r.get(d);break}}}let o=t[t.length-1];if(It(r)?r[+o]=n(r[+o]):kn(r)&&(r[o]=n(r[o])),An(r)){let i=en(r,+o),s=n(i);i!==s&&(r.delete(i),r.add(s))}if(En(r)){let i=+t[t.length-2],s=en(r,i);switch(+o==0?"key":"value"){case"key":{let l=n(s);r.set(l,r.get(s)),l!==s&&r.delete(s);break}case"value":{r.set(s,n(r.get(s)));break}}}return e};function Vr(e,t,n=[]){if(!e)return;if(!It(e)){rn(e,(i,s)=>Vr(i,t,[...n,...xn(s)]));return}let[r,o]=e;o&&rn(o,(i,s)=>{Vr(i,t,[...n,...xn(s)])}),t(r,n)}function Sc(e,t,n){return Vr(t,(r,o)=>{e=Nr(e,o,i=>xc(i,r,n))}),e}function $c(e,t){function n(r,o){let i=Cc(e,xn(o));r.map(xn).forEach(s=>{e=Nr(e,s,()=>i)})}if(It(t)){let[r,o]=t;r.forEach(i=>{e=Nr(e,xn(i),()=>e)}),o&&rn(o,n)}else rn(t,n);return e}var kc=(e,t)=>kn(e)||It(e)||En(e)||An(e)||Fi(e,t);function Ec(e,t,n){let r=n.get(e);r?r.push(t):n.set(e,[t])}function Ac(e,t){let n={},r;return e.forEach(o=>{if(o.length<=1)return;t||(o=o.map(a=>a.map(String)).sort((a,l)=>a.length-l.length));let[i,...s]=o;i.length===0?r=s.map(Fr):n[Fr(i)]=s.map(Fr)}),r?Br(n)?[r]:[r,n]:Br(n)?void 0:n}var zi=(e,t,n,r,o=[],i=[],s=new Map)=>{let a=hc(e);if(!a){Ec(e,o,t);let f=s.get(e);if(f)return r?{transformedValue:null}:f}if(!kc(e,n)){let f=oi(e,n),h=f?{transformedValue:f.value,annotations:[f.type]}:{transformedValue:e};return a||s.set(e,h),h}if(tr(i,e))return{transformedValue:null};let l=oi(e,n),u=l?.value??e,d=It(u)?[]:{},c={};rn(u,(f,h)=>{if(h==="__proto__"||h==="constructor"||h==="prototype")throw new Error(`Detected property ${h}. This is a prototype pollution risk, please remove it from your object.`);let y=zi(f,t,n,r,[...o,h],[...i,e],s);d[h]=y.transformedValue,It(y.annotations)?c[h]=y.annotations:kn(y.annotations)&&rn(y.annotations,(m,p)=>{c[Oi(h)+"."+p]=m})});let g=Br(c)?{transformedValue:d,annotations:l?[l.type]:void 0}:{transformedValue:d,annotations:l?[l.type,c]:c};return a||s.set(e,g),g};function Ki(e){return Object.prototype.toString.call(e).slice(8,-1)}function ii(e){return Ki(e)==="Array"}function Mc(e){if(Ki(e)!=="Object")return!1;let t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Tc(e,t,n,r,o){let i={}.propertyIsEnumerable.call(r,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=n),o&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function Ur(e,t={}){if(ii(e))return e.map(o=>Ur(o,t));if(!Mc(e))return e;let n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertySymbols(e);return[...n,...r].reduce((o,i)=>{if(ii(t.props)&&!t.props.includes(i))return o;let s=e[i],a=Ur(s,t);return Tc(o,i,a,e,t.nonenumerable),o},{})}var X=class{constructor({dedupe:e=!1}={}){this.classRegistry=new nc,this.symbolRegistry=new Ai(t=>t.description??""),this.customTransformerRegistry=new ic,this.allowedErrorProps=[],this.dedupe=e}serialize(e){let t=new Map,n=zi(e,t,this,this.dedupe),r={json:n.transformedValue};n.annotations&&(r.meta={...r.meta,values:n.annotations});let o=Ac(t,this.dedupe);return o&&(r.meta={...r.meta,referentialEqualities:o}),r}deserialize(e){let{json:t,meta:n}=e,r=Ur(t);return n?.values&&(r=Sc(r,n.values,this)),n?.referentialEqualities&&(r=$c(r,n.referentialEqualities)),r}stringify(e){return JSON.stringify(this.serialize(e))}parse(e){return this.deserialize(JSON.parse(e))}registerClass(e,t){this.classRegistry.register(e,t)}registerSymbol(e,t){this.symbolRegistry.register(e,t)}registerCustom(e,t){this.customTransformerRegistry.register({name:t,...e})}allowErrorProps(...e){this.allowedErrorProps.push(...e)}};X.defaultInstance=new X;X.serialize=X.defaultInstance.serialize.bind(X.defaultInstance);X.deserialize=X.defaultInstance.deserialize.bind(X.defaultInstance);X.stringify=X.defaultInstance.stringify.bind(X.defaultInstance);X.parse=X.defaultInstance.parse.bind(X.defaultInstance);X.registerClass=X.defaultInstance.registerClass.bind(X.defaultInstance);X.registerSymbol=X.defaultInstance.registerSymbol.bind(X.defaultInstance);X.registerCustom=X.defaultInstance.registerCustom.bind(X.defaultInstance);X.allowErrorProps=X.defaultInstance.allowErrorProps.bind(X.defaultInstance);var Wr=X.serialize;X.deserialize;var Bi=X.stringify;X.parse;X.registerClass;X.registerCustom;X.registerSymbol;X.allowErrorProps;function Vt(e){return e.state.fetchStatus==="fetching"?"fetching":e.getObserversCount()?e.state.fetchStatus==="paused"?"paused":e.isStale()?"stale":"fresh":"inactive"}function Ni(e,t){return`${e}${t.charAt(0).toUpperCase()+t.slice(1)}`}function Vi({queryState:e,observerCount:t,isStale:n}){return e.fetchStatus==="fetching"?"blue":t?e.fetchStatus==="paused"?"purple":n?"yellow":"green":"gray"}function Ut({status:e,isPaused:t}){return t?"purple":e==="error"?"red":e==="pending"?"yellow":e==="success"?"green":"gray"}function Ui(e){return e==="fresh"?"green":e==="stale"?"yellow":e==="paused"?"purple":e==="inactive"?"gray":"blue"}var On=(e,t=!1)=>{let{json:n}=Wr(e);return JSON.stringify(n,null,t?2:void 0)},Jn=e=>e.state.fetchStatus!=="idle"?0:e.getObserversCount()?e.isStale()?2:1:3,Oc=(e,t)=>e.queryHash.localeCompare(t.queryHash),Gi=(e,t)=>e.state.dataUpdatedAt<t.state.dataUpdatedAt?1:-1,Dc=(e,t)=>Jn(e)===Jn(t)?Gi(e,t):Jn(e)>Jn(t)?1:-1,fr={status:Dc,"query hash":Oc,"last updated":Gi},er=e=>e.state.isPaused?0:e.state.status==="error"?2:e.state.status==="pending"?1:3,Hi=(e,t)=>e.state.submittedAt<t.state.submittedAt?1:-1,Ic=(e,t)=>er(e)===er(t)?Hi(e,t):er(e)>er(t)?1:-1,gr={status:Ic,"last updated":Hi},Qr=e=>e*parseFloat(getComputedStyle(document.documentElement).fontSize),eh=()=>{let[e,t]=z("dark");return wt(()=>{let n=self.matchMedia("(prefers-color-scheme: dark)");t(n.matches?"dark":"light");let r=o=>{t(o.matches?"dark":"light")};n.addEventListener("change",r),U(()=>n.removeEventListener("change",r))}),e},Ot=(e,t,n)=>{if(t.length===0)return n;if(e instanceof Map){let r=new Map(e);if(t.length===1)return r.set(t[0],n),r;let[o,...i]=t;return r.set(o,Ot(r.get(o),i,n)),r}if(e instanceof Set){let r=Ot(Array.from(e),t,n);return new Set(r)}if(Array.isArray(e)){let r=[...e];if(t.length===1)return r[t[0]]=n,r;let[o,...i]=t;return r[o]=Ot(r[o],i,n),r}if(e instanceof Object){let r={...e};if(t.length===1)return r[t[0]]=n,r;let[o,...i]=t;return r[o]=Ot(r[o],i,n),r}return e},tn=(e,t)=>{if(e instanceof Map){let n=new Map(e);if(t.length===1)return n.delete(t[0]),n;let[r,...o]=t;return n.set(r,tn(n.get(r),o)),n}if(e instanceof Set){let n=tn(Array.from(e),t);return new Set(n)}if(Array.isArray(e)){let n=[...e];if(t.length===1)return n.filter((i,s)=>s.toString()!==t[0]);let[r,...o]=t;return n[r]=tn(n[r],o),n}if(e instanceof Object){let n={...e};if(t.length===1)return delete n[t[0]],n;let[r,...o]=t;return n[r]=tn(n[r],o),n}return e};Yn();Xn();var Pc=!De,Fc=Pc&&!!Ci,ji=()=>{},Lc=e=>e!=null,qc=e=>e.filter(Lc);function _c(e){return(...t)=>{for(let n of e)n&&n(...t)}}var A=e=>typeof e=="function"&&!e.length?e():e,to=e=>Array.isArray(e)?e:e?[e]:[];function Rc(e,...t){return typeof e=="function"?e(...t):e}var zc=Fc?e=>or()?U(e):e:U;function Kc(e,t,n,r){let o=e.length,i=t.length,s=0;if(!i){for(;s<o;s++)n(e[s]);return}if(!o){for(;s<i;s++)r(t[s]);return}for(;s<i&&t[s]===e[s];s++);let a,l;t=t.slice(s),e=e.slice(s);for(a of t)e.includes(a)||r(a);for(l of e)t.includes(l)||n(l)}function Bc(e){let[t,n]=z(),r=e?.throw?(g,f)=>{throw n(g instanceof Error?g:new Error(f)),g}:(g,f)=>{n(g instanceof Error?g:new Error(f))},o=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),i=e?.prefix?`${e.prefix}.`:"",s=new Map,a=new Proxy({},{get(g,f){let h=s.get(f);h||(h=z(void 0,{equals:!1}),s.set(f,h)),h[0]();let y=o.reduce((m,p)=>{if(m!==null||!p)return m;try{return p.getItem(`${i}${f}`)}catch(b){return r(b,`Error reading ${i}${f} from ${p.name}`),null}},null);return y!==null&&e?.deserializer?e.deserializer(y,f,e.options):y}}),l=(g,f,h)=>{let y=e?.serializer?e.serializer(f,g,h??e.options):f,m=`${i}${g}`;o.forEach(b=>{try{b.getItem(m)!==y&&b.setItem(m,y)}catch(w){r(w,`Error setting ${i}${g} to ${y} in ${b.name}`)}});let p=s.get(g);p&&p[1]()},u=g=>o.forEach(f=>{try{f.removeItem(`${i}${g}`)}catch(h){r(h,`Error removing ${i}${g} from ${f.name}`)}}),d=()=>o.forEach(g=>{try{g.clear()}catch(f){r(f,`Error clearing ${g.name}`)}}),c=()=>{let g={},f=(h,y)=>{if(!g.hasOwnProperty(h)){let m=y&&e?.deserializer?e.deserializer(y,h,e.options):y;m&&(g[h]=m)}};return o.forEach(h=>{if(typeof h.getAll=="function"){let y;try{y=h.getAll()}catch(m){r(m,`Error getting all values from in ${h.name}`)}for(let m of y)f(m,y[m])}else{let y=0,m;try{for(;m=h.key(y++);)g.hasOwnProperty(m)||f(m,h.getItem(m))}catch(p){r(p,`Error getting all values from ${h.name}`)}}}),g};return e?.sync!==!1&&wt(()=>{let g=f=>{let h=!1;o.forEach(y=>{try{y!==f.storageArea&&f.key&&f.newValue!==y.getItem(f.key)&&(f.newValue?y.setItem(f.key,f.newValue):y.removeItem(f.key),h=!0)}catch(m){r(m,`Error synching api ${y.name} from storage event (${f.key}=${f.newValue})`)}}),h&&f.key&&s.get(f.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",g),U(()=>globalThis.removeEventListener("storage",g))):(o.forEach(f=>f.addEventListener?.("storage",g)),U(()=>o.forEach(f=>f.removeEventListener?.("storage",g))))}),[a,l,{clear:d,error:t,remove:u,toJSON:c}]}var uh=Bc,Nc=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Wi=e=>{if(!e)return"";let t="";for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},He=Nc({_cookies:[globalThis.document,"cookie"],getItem:e=>He._cookies[0][He._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,n)=>{let r=He.getItem(e);He._cookies[0][He._cookies[1]]=`${e}=${t}${Wi(n)}`;let o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:He});self.dispatchEvent(o)},removeItem:e=>{He._cookies[0][He._cookies[1]]=`${e}=deleted${Wi({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return He._cookies[0][He._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return He._cookies[0][He._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Vc=1024,Ht=796,go=700,Uc="bottom-right",no="bottom",dh="system",Gc=!1,Vs=500,Hc=500,Us=500,jc=Object.keys(fr)[0],Qi=1,Wc=Object.keys(gr)[0],Qc=ke({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function V(){return Se(Qc)}var Gs=ke(void 0),fh=e=>{let[t,n]=z(null),r=()=>{let s=t();s!=null&&(s.close(),n(null))},o=(s,a)=>{if(t()!=null)return;let l=self.open("","TSQD-Devtools-Panel",`width=${s},height=${a},popup`);if(!l)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");l.document.head.innerHTML="",l.document.body.innerHTML="",Si(l.document),l.document.title="TanStack Query Devtools",l.document.body.style.margin="0",l.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(V().shadowDOMTarget||document).styleSheets].forEach(u=>{try{let d=[...u.cssRules].map(h=>h.cssText).join(""),c=document.createElement("style"),g=u.ownerNode,f="";g&&"id"in g&&(f=g.id),f&&c.setAttribute("id",f),c.textContent=d,l.document.head.appendChild(c)}catch{let c=document.createElement("link");if(u.href==null)return;c.rel="stylesheet",c.type=u.type,c.media=u.media.toString(),c.href=u.href,l.document.head.appendChild(c)}}),Tn(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],l.document),e.setLocalStore("pip_open","true"),n(l)};B(()=>{(e.localStore.pip_open??"false")==="true"&&!e.disabled&&o(Number(self.innerWidth),Number(e.localStore.height||Hc))}),B(()=>{let s=(V().shadowDOMTarget||document).querySelector("#_goober"),a=t();if(s&&a){let l=new MutationObserver(()=>{let u=(V().shadowDOMTarget||a.document).querySelector("#_goober");u&&(u.textContent=s.textContent)});l.observe(s,{childList:!0,subtree:!0,characterDataOldValue:!0}),U(()=>{l.disconnect()})}});let i=E(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return v(Gs.Provider,{value:i,get children(){return e.children}})},ho=()=>E(()=>{let t=Se(Gs);if(!t)throw new Error("usePiPWindow must be used within a PiPProvider");return t()}),Yc=ke(()=>"dark");function Ae(){return Se(Yc)}var Hs={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u1EA4:"A",\u1EAE:"A",\u1EB2:"A",\u1EB4:"A",\u1EB6:"A",\u00C6:"AE",\u1EA6:"A",\u1EB0:"A",\u0202:"A",\u00C7:"C",\u1E08:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u1EBE:"E",\u1E16:"E",\u1EC0:"E",\u1E14:"E",\u1E1C:"E",\u0206:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u1E2E:"I",\u020A:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u1ED0:"O",\u1E4C:"O",\u1E52:"O",\u020E:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00DD:"Y",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u1EA5:"a",\u1EAF:"a",\u1EB3:"a",\u1EB5:"a",\u1EB7:"a",\u00E6:"ae",\u1EA7:"a",\u1EB1:"a",\u0203:"a",\u00E7:"c",\u1E09:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u1EBF:"e",\u1E17:"e",\u1EC1:"e",\u1E15:"e",\u1E1D:"e",\u0207:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u1E2F:"i",\u020B:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u1ED1:"o",\u1E4D:"o",\u1E53:"o",\u020F:"o",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00FD:"y",\u00FF:"y",\u0100:"A",\u0101:"a",\u0102:"A",\u0103:"a",\u0104:"A",\u0105:"a",\u0106:"C",\u0107:"c",\u0108:"C",\u0109:"c",\u010A:"C",\u010B:"c",\u010C:"C",\u010D:"c",C\u0306:"C",c\u0306:"c",\u010E:"D",\u010F:"d",\u0110:"D",\u0111:"d",\u0112:"E",\u0113:"e",\u0114:"E",\u0115:"e",\u0116:"E",\u0117:"e",\u0118:"E",\u0119:"e",\u011A:"E",\u011B:"e",\u011C:"G",\u01F4:"G",\u011D:"g",\u01F5:"g",\u011E:"G",\u011F:"g",\u0120:"G",\u0121:"g",\u0122:"G",\u0123:"g",\u0124:"H",\u0125:"h",\u0126:"H",\u0127:"h",\u1E2A:"H",\u1E2B:"h",\u0128:"I",\u0129:"i",\u012A:"I",\u012B:"i",\u012C:"I",\u012D:"i",\u012E:"I",\u012F:"i",\u0130:"I",\u0131:"i",\u0132:"IJ",\u0133:"ij",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u1E30:"K",\u1E31:"k",K\u0306:"K",k\u0306:"k",\u0139:"L",\u013A:"l",\u013B:"L",\u013C:"l",\u013D:"L",\u013E:"l",\u013F:"L",\u0140:"l",\u0141:"l",\u0142:"l",\u1E3E:"M",\u1E3F:"m",M\u0306:"M",m\u0306:"m",\u0143:"N",\u0144:"n",\u0145:"N",\u0146:"n",\u0147:"N",\u0148:"n",\u0149:"n",N\u0306:"N",n\u0306:"n",\u014C:"O",\u014D:"o",\u014E:"O",\u014F:"o",\u0150:"O",\u0151:"o",\u0152:"OE",\u0153:"oe",P\u0306:"P",p\u0306:"p",\u0154:"R",\u0155:"r",\u0156:"R",\u0157:"r",\u0158:"R",\u0159:"r",R\u0306:"R",r\u0306:"r",\u0212:"R",\u0213:"r",\u015A:"S",\u015B:"s",\u015C:"S",\u015D:"s",\u015E:"S",\u0218:"S",\u0219:"s",\u015F:"s",\u0160:"S",\u0161:"s",\u0162:"T",\u0163:"t",\u021B:"t",\u021A:"T",\u0164:"T",\u0165:"t",\u0166:"T",\u0167:"t",T\u0306:"T",t\u0306:"t",\u0168:"U",\u0169:"u",\u016A:"U",\u016B:"u",\u016C:"U",\u016D:"u",\u016E:"U",\u016F:"u",\u0170:"U",\u0171:"u",\u0172:"U",\u0173:"u",\u0216:"U",\u0217:"u",V\u0306:"V",v\u0306:"v",\u0174:"W",\u0175:"w",\u1E82:"W",\u1E83:"w",X\u0306:"X",x\u0306:"x",\u0176:"Y",\u0177:"y",\u0178:"Y",Y\u0306:"Y",y\u0306:"y",\u0179:"Z",\u017A:"z",\u017B:"Z",\u017C:"z",\u017D:"Z",\u017E:"z",\u017F:"s",\u0192:"f",\u01A0:"O",\u01A1:"o",\u01AF:"U",\u01B0:"u",\u01CD:"A",\u01CE:"a",\u01CF:"I",\u01D0:"i",\u01D1:"O",\u01D2:"o",\u01D3:"U",\u01D4:"u",\u01D5:"U",\u01D6:"u",\u01D7:"U",\u01D8:"u",\u01D9:"U",\u01DA:"u",\u01DB:"U",\u01DC:"u",\u1EE8:"U",\u1EE9:"u",\u1E78:"U",\u1E79:"u",\u01FA:"A",\u01FB:"a",\u01FC:"AE",\u01FD:"ae",\u01FE:"O",\u01FF:"o",\u00DE:"TH",\u00FE:"th",\u1E54:"P",\u1E55:"p",\u1E64:"S",\u1E65:"s",X\u0301:"X",x\u0301:"x",\u0403:"\u0413",\u0453:"\u0433",\u040C:"\u041A",\u045C:"\u043A",A\u030B:"A",a\u030B:"a",E\u030B:"E",e\u030B:"e",I\u030B:"I",i\u030B:"i",\u01F8:"N",\u01F9:"n",\u1ED2:"O",\u1ED3:"o",\u1E50:"O",\u1E51:"o",\u1EEA:"U",\u1EEB:"u",\u1E80:"W",\u1E81:"w",\u1EF2:"Y",\u1EF3:"y",\u0200:"A",\u0201:"a",\u0204:"E",\u0205:"e",\u0208:"I",\u0209:"i",\u020C:"O",\u020D:"o",\u0210:"R",\u0211:"r",\u0214:"U",\u0215:"u",B\u030C:"B",b\u030C:"b",\u010C\u0323:"C",\u010D\u0323:"c",\u00CA\u030C:"E",\u00EA\u030C:"e",F\u030C:"F",f\u030C:"f",\u01E6:"G",\u01E7:"g",\u021E:"H",\u021F:"h",J\u030C:"J",\u01F0:"j",\u01E8:"K",\u01E9:"k",M\u030C:"M",m\u030C:"m",P\u030C:"P",p\u030C:"p",Q\u030C:"Q",q\u030C:"q",\u0158\u0329:"R",\u0159\u0329:"r",\u1E66:"S",\u1E67:"s",V\u030C:"V",v\u030C:"v",W\u030C:"W",w\u030C:"w",X\u030C:"X",x\u030C:"x",Y\u030C:"Y",y\u030C:"y",A\u0327:"A",a\u0327:"a",B\u0327:"B",b\u0327:"b",\u1E10:"D",\u1E11:"d",\u0228:"E",\u0229:"e",\u0190\u0327:"E",\u025B\u0327:"e",\u1E28:"H",\u1E29:"h",I\u0327:"I",i\u0327:"i",\u0197\u0327:"I",\u0268\u0327:"i",M\u0327:"M",m\u0327:"m",O\u0327:"O",o\u0327:"o",Q\u0327:"Q",q\u0327:"q",U\u0327:"U",u\u0327:"u",X\u0327:"X",x\u0327:"x",Z\u0327:"Z",z\u0327:"z"},Xc=Object.keys(Hs).join("|"),Zc=new RegExp(Xc,"g");function Jc(e){return e.replace(Zc,t=>Hs[t])}var Re={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Yi(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:Re.MATCHES,!n.accessors){let s=Xi(e,t,n);return{rankedValue:e,rank:s,accessorIndex:-1,accessorThreshold:n.threshold,passed:s>=n.threshold}}let o=ru(e,n.accessors),i={rankedValue:e,rank:Re.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let s=0;s<o.length;s++){let a=o[s],l=Xi(a.itemValue,t,n),{minRanking:u,maxRanking:d,threshold:c=n.threshold}=a.attributes;l<u&&l>=Re.MATCHES?l=u:l>d&&(l=d),l=Math.min(l,d),l>=c&&l>i.rank&&(i.rank=l,i.passed=!0,i.accessorIndex=s,i.accessorThreshold=c,i.rankedValue=a.itemValue)}return i}function Xi(e,t,n){return e=Zi(e,n),t=Zi(t,n),t.length>e.length?Re.NO_MATCH:e===t?Re.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Re.EQUAL:e.startsWith(t)?Re.STARTS_WITH:e.includes(` ${t}`)?Re.WORD_STARTS_WITH:e.includes(t)?Re.CONTAINS:t.length===1?Re.NO_MATCH:eu(e).includes(t)?Re.ACRONYM:tu(e,t))}function eu(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(i=>{t+=i.substr(0,1)})}),t}function tu(e,t){let n=0,r=0;function o(l,u,d){for(let c=d,g=u.length;c<g;c++)if(u[c]===l)return n+=1,c+1;return-1}function i(l){let u=1/l,d=n/t.length;return Re.MATCHES+d*u}let s=o(t[0],e,0);if(s<0)return Re.NO_MATCH;r=s;for(let l=1,u=t.length;l<u;l++){let d=t[l];if(r=o(d,e,r),!(r>-1))return Re.NO_MATCH}let a=r-s;return i(a)}function Zi(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=Jc(e)),e}function nu(e,t){let n=t;typeof t=="object"&&(n=t.accessor);let r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function ru(e,t){let n=[];for(let r=0,o=t.length;r<o;r++){let i=t[r],s=ou(i),a=nu(e,i);for(let l=0,u=a.length;l<u;l++)n.push({itemValue:a[l],attributes:s})}return n}var Ji={maxRanking:1/0,minRanking:-1/0};function ou(e){return typeof e=="function"?Ji:{...Ji,...e}}var iu={data:""},su=e=>typeof self=="object"?((e?e.querySelector("#_goober"):self._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||iu,lu=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,au=/\/\*[^]*?\*\/|  +/g,es=/\n+/g,Gt=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?Gt(s,i):i+"{"+Gt(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=Gt(s,t?t.replace(/([^,])+/g,a=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Gt.p?Gt.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},xt={},js=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+js(e[n]);return t}return e},cu=(e,t,n,r,o)=>{let i=js(e),s=xt[i]||(xt[i]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(i));if(!xt[s]){let l=i!==e?e:(u=>{let d,c,g=[{}];for(;d=lu.exec(u.replace(au,""));)d[4]?g.shift():d[3]?(c=d[3].replace(es," ").trim(),g.unshift(g[0][c]=g[0][c]||{})):g[0][d[1]]=d[2].replace(es," ").trim();return g[0]})(e);xt[s]=Gt(o?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&xt.g?xt.g:null;return n&&(xt.g=xt[s]),((l,u,d,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(xt[s],t,r,a),s},uu=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":Gt(a,""):a===!1?"":a}return r+o+(s??"")},"");function Q(e){let t=this||{},n=e.call?e(t.p):e;return cu(n.unshift?n.raw?uu(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,su(t.target),t.g,t.o,t.k)}Q.bind({g:1});Q.bind({k:1});function Ws(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ws(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function L(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ws(e))&&(r&&(r+=" "),r+=t);return r}var ts=()=>{};function du(e,t){let n=ve(e);if(De){let c=n.slice();return()=>c}let{onChange:r}=t,o=new Set(t.appear?void 0:n),i=new WeakSet,[s,a]=z([],{equals:!1}),[l]=di(),u=t.exitMethod==="remove"?ts:c=>{a(g=>(g.push.apply(g,c),g));for(let g of c)i.delete(g)},d=t.exitMethod==="remove"?ts:t.exitMethod==="keep-index"?(c,g,f)=>c.splice(f,0,g):(c,g)=>c.push(g);return E(c=>{let g=s(),f=e();if(f[Mn],ve(l))return l(),c;if(g.length){let h=c.filter(y=>!g.includes(y));return g.length=0,r({list:h,added:[],removed:[],unchanged:h,finishRemoved:u}),h}return ve(()=>{let h=new Set(f),y=f.slice(),m=[],p=[],b=[];for(let x of f)(o.has(x)?b:m).push(x);let w=!m.length;for(let x=0;x<c.length;x++){let C=c[x];h.has(C)||(i.has(C)||(p.push(C),i.add(C)),d(y,C,x)),w&&C!==y[x]&&(w=!1)}return!p.length&&w?c:(r({list:y,added:m,removed:p,unchanged:b,finishRemoved:u}),o=h,y)})},t.appear?[]:n.slice())}function qe(...e){return _c(e)}var ns=De?e=>e!=null&&typeof e=="object"&&"t"in e:e=>e instanceof Element;function ro(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return ro(e(),t);if(Array.isArray(e)){let n=[];for(let r of e){let o=ro(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function fu(e,t=ns,n=ns){let r=E(e),o=E(()=>ro(r(),De?n:t));return o.toArray=()=>{let i=o();return Array.isArray(i)?i:i?[i]:[]},o}function gu(e){return E(()=>{let t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Qs(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function hu(e,t,n,r){let{onBeforeEnter:o,onEnter:i,onAfterEnter:s}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();i?.(n,()=>a())}),Qs(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(l){(!l||l.target===n)&&(n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),s?.(n))}}function yu(e,t,n,r){let{onBeforeExit:o,onExit:i,onAfterExit:s}=t;if(!n.parentNode)return r?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),i?.(n,()=>a()),Qs(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(l){(!l||l.target===n)&&(r?.(),n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),s?.(n))}}var rs=e=>{let t=gu(e);return du(fu(()=>e.children).toArray,{appear:e.appear,exitMethod:"keep-index",onChange({added:n,removed:r,finishRemoved:o,list:i}){let s=t();for(let l of n)hu(s,e,l);let a=[];for(let l of i)l.isConnected&&(l instanceof HTMLElement||l instanceof SVGElement)&&a.push({el:l,rect:l.getBoundingClientRect()});queueMicrotask(()=>{let l=[];for(let{el:u,rect:d}of a)if(u.isConnected){let c=u.getBoundingClientRect(),g=d.left-c.left,f=d.top-c.top;(g||f)&&(u.style.transform=`translate(${g}px, ${f}px)`,u.style.transitionDuration="0s",l.push(u))}document.body.offsetHeight;for(let u of l){let d=function(c){(c.target===u||/transform$/.test(c.propertyName))&&(u.removeEventListener("transitionend",d),u.classList.remove(...s.move))};u.classList.add(...s.move),u.style.transform=u.style.transitionDuration="",u.addEventListener("transitionend",d)}});for(let l of r)yu(s,e,l,()=>o([l]))}})},Yr=Symbol("fallback");function os(e){for(let t of e)t.dispose()}function mu(e,t,n,r={}){if(De){let s=e(),a=[];if(s&&s.length)for(let l=0,u=s.length;l<u;l++)a.push(n(()=>s[l],()=>l));else r.fallback&&(a=[r.fallback()]);return()=>a}let o=new Map;return U(()=>os(o.values())),()=>{let s=e()||[];return s[Mn],ve(()=>{if(!s.length)return os(o.values()),o.clear(),r.fallback?[bt(c=>(o.set(Yr,{dispose:c}),r.fallback()))]:[];let a=new Array(s.length),l=o.get(Yr);if(!o.size||l){l?.dispose(),o.delete(Yr);for(let d=0;d<s.length;d++){let c=s[d],g=t(c,d);i(a,c,d,g)}return a}let u=new Set(o.keys());for(let d=0;d<s.length;d++){let c=s[d],g=t(c,d);u.delete(g);let f=o.get(g);f?(a[d]=f.mapped,f.setIndex?.(d),f.setItem(()=>c)):i(a,c,d,g)}for(let d of u)o.get(d)?.dispose(),o.delete(d);return a})};function i(s,a,l,u){bt(d=>{let[c,g]=z(a),f={setItem:g,dispose:d};if(n.length>1){let[h,y]=z(l);f.setIndex=y,f.mapped=n(c,h)}else f.mapped=n(c);o.set(u,f),s[l]=f.mapped})}}function vr(e){let{by:t}=e;return E(mu(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function vu(e,t,n,r){return e.addEventListener(t,n,r),zc(e.removeEventListener.bind(e,t,n,r))}function pu(e,t,n,r){if(De)return;let o=()=>{to(A(e)).forEach(i=>{i&&to(A(t)).forEach(s=>vu(i,s,n,r))})};typeof e=="function"?B(o):K(o)}function bu(e,t){if(De)return{observe:ji,unobserve:ji};let n=new ResizeObserver(e);return U(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function Ys(e,t,n){if(De)return;let r=new WeakMap,{observe:o,unobserve:i}=bu(s=>{for(let a of s){let{contentRect:l,target:u}=a,d=Math.round(l.width),c=Math.round(l.height),g=r.get(u);(!g||g.width!==d||g.height!==c)&&(t(l,u,a),r.set(u,{width:d,height:c}))}},n);B(s=>{let a=qc(to(A(e)));return Kc(a,s,o,i),a},[])}var wu=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function is(e){let t={},n;for(;n=wu.exec(e);)t[n[1]]=n[2];return t}function $r(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=is(e)}else typeof t=="string"&&(t=is(t));return{...e,...t}}function xu(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function oo(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Cu(e){return typeof e=="number"}function an(e){return Object.prototype.toString.call(e)==="[object String]"}function Su(e){return typeof e=="function"}function Bn(e){return t=>`${e()}-${t}`}function Qe(e,t){return e?e===t||e.contains(t):!1}function Fn(e,t=!1){let{activeElement:n}=ut(e);if(!n?.nodeName)return null;if(Xs(n)&&n.contentDocument)return Fn(n.contentDocument.body,t);if(t){let r=n.getAttribute("aria-activedescendant");if(r){let o=ut(n).getElementById(r);if(o)return o}}return n}function $u(e){return ut(e).defaultView||self}function ut(e){return e?e.ownerDocument||e:document}function Xs(e){return e.tagName==="IFRAME"}var yo=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(yo||{});function mo(e){return typeof self<"u"&&self.navigator!=null?e.test(self.navigator.userAgentData?.platform||self.navigator.platform):!1}function kr(){return mo(/^Mac/i)}function ku(){return mo(/^iPhone/i)}function Eu(){return mo(/^iPad/i)||kr()&&navigator.maxTouchPoints>1}function Au(){return ku()||Eu()}function Mu(){return kr()||Au()}function ye(e,t){return t&&(Su(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function Ee(e){return t=>{for(let n of e)ye(t,n)}}function Tu(e){return kr()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function Pe(e){if(e)if(Ou())e.focus({preventScroll:!0});else{let t=Du(e);e.focus(),Iu(t)}}var hr=null;function Ou(){if(hr==null){hr=!1;try{document.createElement("div").focus({get preventScroll(){return hr=!0,!0}})}catch{}}return hr}function Du(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function Iu(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var Zs=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Pu=[...Zs,'[tabindex]:not([tabindex="-1"]):not([disabled])'],vo=Zs.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Fu=Pu.join(':not([hidden]):not([tabindex="-1"]),');function Js(e,t){let r=Array.from(e.querySelectorAll(vo)).filter(ss);return t&&ss(e)&&r.unshift(e),r.forEach((o,i)=>{if(Xs(o)&&o.contentDocument){let s=o.contentDocument.body,a=Js(s,!1);r.splice(i,1,...a)}}),r}function ss(e){return el(e)&&!Lu(e)}function el(e){return e.matches(vo)&&po(e)}function Lu(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function po(e,t){return e.nodeName!=="#comment"&&qu(e)&&_u(e,t)&&(!e.parentElement||po(e.parentElement,e))}function qu(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;let{getComputedStyle:o}=e.ownerDocument.defaultView,{display:i,visibility:s}=o(e);r=i!=="none"&&s!=="hidden"&&s!=="collapse"}return r}function _u(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Ru(e,t,n){let r=t?.tabbable?Fu:vo,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){return t?.from?.contains(i)?NodeFilter.FILTER_REJECT:i.matches(r)&&po(i)&&!n&&(!t?.accept||t.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(o.currentNode=t.from),o}function ls(e){for(;e&&!zu(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function zu(e){let t=self.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Ku(){}function Bu(e,t){let[n,r]=e,o=!1,i=t.length;for(let s=i,a=0,l=s-1;a<s;l=a++){let[u,d]=t[a],[c,g]=t[l],[,f]=t[l===0?s-1:l-1]||[0,0],h=(d-g)*(n-u)-(u-c)*(r-d);if(g<d){if(r>=g&&r<d){if(h===0)return!0;h>0&&(r===g?r>f&&(o=!o):o=!o)}}else if(d<g){if(r>d&&r<=g){if(h===0)return!0;h<0&&(r===g?r<f&&(o=!o):o=!o)}}else if(r==d&&(n>=c&&n<=u||n>=u&&n<=c))return!0}return o}function J(e,t){return W(e,t)}var Dn=new Map,as=new Set;function cs(){if(typeof self>"u")return;let e=n=>{if(!n.target)return;let r=Dn.get(n.target);r||(r=new Set,Dn.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;let r=Dn.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),Dn.delete(n.target)),Dn.size===0)){for(let o of as)o();as.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?cs():document.addEventListener("DOMContentLoaded",cs));function io(e,t){let n=us(e,t,"left"),r=us(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight,s=e.scrollLeft,a=e.scrollTop,l=s+e.offsetWidth,u=a+e.offsetHeight;n<=s?s=n:n+o>l&&(s+=n+o-l),r<=a?a=r:r+i>u&&(a+=r+i-u),e.scrollLeft=s,e.scrollTop=a}function us(e,t,n){let r=n==="left"?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Nu(e,t){if(document.contains(e)){let n=document.scrollingElement||document.documentElement;if(self.getComputedStyle(n).overflow==="hidden"){let o=ls(e);for(;e&&o&&e!==n&&o!==n;)io(o,e),e=o,o=ls(e)}else{let{left:o,top:i}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});let{left:s,top:a}=e.getBoundingClientRect();(Math.abs(o-s)>1||Math.abs(i-a)>1)&&e.scrollIntoView?.({block:"nearest"})}}}var tl={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Ye(e){return t=>(e(t),()=>e(void 0))}function Er(e,t){let[n,r]=z(ds(t?.()));return B(()=>{r(e()?.tagName.toLowerCase()||ds(t?.()))}),n}function ds(e){return an(e)?e:void 0}function me(e){let[t,n]=ee(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return v(Ei,W(n,{get component(){return t.as}}))}var Vu=["id","name","validationState","required","disabled","readOnly"];function Uu(e){let t=`form-control-${Ke()}`,n=J({id:t},e),[r,o]=z(),[i,s]=z(),[a,l]=z(),[u,d]=z(),c=(y,m,p)=>{let b=p!=null||r()!=null;return[p,r(),b&&m!=null?y:void 0].filter(Boolean).join(" ")||void 0},g=y=>[a(),u(),y].filter(Boolean).join(" ")||void 0,f=E(()=>({"data-valid":A(n.validationState)==="valid"?"":void 0,"data-invalid":A(n.validationState)==="invalid"?"":void 0,"data-required":A(n.required)?"":void 0,"data-disabled":A(n.disabled)?"":void 0,"data-readonly":A(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>A(n.name)??A(n.id),dataset:f,validationState:()=>A(n.validationState),isRequired:()=>A(n.required),isDisabled:()=>A(n.disabled),isReadOnly:()=>A(n.readOnly),labelId:r,fieldId:i,descriptionId:a,errorMessageId:u,getAriaLabelledBy:c,getAriaDescribedBy:g,generateId:Bn(()=>A(n.id)),registerLabel:Ye(o),registerField:Ye(s),registerDescription:Ye(l),registerErrorMessage:Ye(d)}}}var nl=ke();function Nn(){let e=Se(nl);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function rl(e){let t=Nn(),n=J({id:t.generateId("description")},e);return B(()=>U(t.registerDescription(n.id))),v(me,W({as:"div"},()=>t.dataset(),n))}function ol(e){let t=Nn(),n=J({id:t.generateId("error-message")},e),[r,o]=ee(n,["forceMount"]),i=()=>t.validationState()==="invalid";return B(()=>{i()&&U(t.registerErrorMessage(o.id))}),v(N,{get when(){return r.forceMount||i()},get children(){return v(me,W({as:"div"},()=>t.dataset(),o))}})}function Gu(e){let t,n=Nn(),r=J({id:n.generateId("label")},e),[o,i]=ee(r,["ref"]),s=Er(()=>t,()=>"label");return B(()=>U(n.registerLabel(i.id))),v(me,W({as:"label",ref(a){let l=qe(u=>t=u,o.ref);typeof l=="function"&&l(a)},get for(){return E(()=>s()==="label")()?n.fieldId():void 0}},()=>n.dataset(),i))}function Hu(e,t){B(at(e,n=>{if(n==null)return;let r=ju(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),U(()=>{r.removeEventListener("reset",t)}))}))}function ju(e){return Wu(e)?e.form:e.closest("form")}function Wu(e){return e.matches("textarea, input, select, button")}function Vn(e){let[t,n]=z(e.defaultValue?.()),r=E(()=>e.value?.()!==void 0),o=E(()=>r()?e.value?.():t());return[o,s=>{ve(()=>{let a=Rc(s,o());return Object.is(a,o())||(r()||n(a),e.onChange?.(a)),a})}]}function il(e){let[t,n]=Vn(e);return[()=>t()??!1,n]}function Qu(e){let[t,n]=Vn(e);return[()=>t()??[],n]}function Yu(e={}){let[t,n]=il({value:()=>A(e.isSelected),defaultValue:()=>!!A(e.defaultIsSelected),onChange:i=>e.onSelectedChange?.(i)});return{isSelected:t,setIsSelected:i=>{!A(e.isReadOnly)&&!A(e.isDisabled)&&n(i)},toggle:()=>{!A(e.isReadOnly)&&!A(e.isDisabled)&&n(!t())}}}var Xu=Object.defineProperty,Ar=(e,t)=>{for(var n in t)Xu(e,n,{get:t[n],enumerable:!0})},sl=ke();function ll(){return Se(sl)}function Zu(){let e=ll();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function al(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function Ju(e,t){let n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){let o=e[r]?.ref();if(o&&al(o,n))return r+1}return 0}function ed(e){let t=e.map((r,o)=>[o,r]),n=!1;return t.sort(([r,o],[i,s])=>{let a=o.ref(),l=s.ref();return a===l||!a||!l?0:al(a,l)?(r>i&&(n=!0),-1):(r<i&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function cl(e,t){let n=ed(e);e!==n&&t(n)}function td(e){let t=e[0],n=e[e.length-1]?.ref(),r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return ut(r).body}function nd(e,t){B(()=>{let n=setTimeout(()=>{cl(e(),t)});U(()=>clearTimeout(n))})}function rd(e,t){if(typeof IntersectionObserver!="function"){nd(e,t);return}let n=[];B(()=>{let r=()=>{let s=!!n.length;n=e(),s&&cl(e(),t)},o=td(e()),i=new IntersectionObserver(r,{root:o});for(let s of e()){let a=s.ref();a&&i.observe(a)}U(()=>i.disconnect())})}function od(e={}){let[t,n]=Qu({value:()=>A(e.items),onChange:i=>e.onItemsChange?.(i)});rd(t,n);let r=i=>(n(s=>{let a=Ju(s,i);return xu(s,i,a)}),()=>{n(s=>{let a=s.filter(l=>l.ref()!==i.ref());return s.length===a.length?s:a})});return{DomCollectionProvider:i=>v(sl.Provider,{value:{registerItem:r},get children(){return i.children}})}}function id(e){let t=Zu(),n=J({shouldRegisterItem:!0},e);B(()=>{if(!n.shouldRegisterItem)return;let r=t.registerItem(n.getItem());U(r)})}function ul(e){let t=e.startIndex??0,n=e.startLevel??0,r=[],o=l=>{if(l==null)return"";let u=e.getKey??"key",d=an(u)?l[u]:u(l);return d!=null?String(d):""},i=l=>{if(l==null)return"";let u=e.getTextValue??"textValue",d=an(u)?l[u]:u(l);return d!=null?String(d):""},s=l=>{if(l==null)return!1;let u=e.getDisabled??"disabled";return(an(u)?l[u]:u(l))??!1},a=l=>{if(l!=null)return an(e.getSectionChildren)?l[e.getSectionChildren]:e.getSectionChildren?.(l)};for(let l of e.dataSource){if(an(l)||Cu(l)){r.push({type:"item",rawValue:l,key:String(l),textValue:String(l),disabled:s(l),level:n,index:t}),t++;continue}if(a(l)!=null){r.push({type:"section",rawValue:l,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;let u=a(l)??[];if(u.length>0){let d=ul({dataSource:u,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...d),t+=d.length}}else r.push({type:"item",rawValue:l,key:o(l),textValue:i(l),disabled:s(l),level:n,index:t}),t++}return r}function sd(e,t=[]){return E(()=>{let n=ul({dataSource:A(e.dataSource),getKey:A(e.getKey),getTextValue:A(e.getTextValue),getDisabled:A(e.getDisabled),getSectionChildren:A(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var ld=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ad=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function cd(e){if(Intl.Locale){let n=new Intl.Locale(e).maximize().script??"";return ld.has(n)}let t=e.split("-")[0];return ad.has(t)}function ud(e){return cd(e)?"rtl":"ltr"}function dl(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:ud(e)}}var so=dl(),Ln=new Set;function fs(){so=dl();for(let e of Ln)e(so)}function dd(){let e={locale:"en-US",direction:"ltr"},[t,n]=z(so),r=E(()=>De?e:t());return wt(()=>{Ln.size===0&&self.addEventListener("languagechange",fs),Ln.add(n),U(()=>{Ln.delete(n),Ln.size===0&&self.removeEventListener("languagechange",fs)})}),{locale:()=>r().locale,direction:()=>r().direction}}var fd=ke();function Rt(){let e=dd();return Se(fd)||e}var Xr=new Map;function gd(e){let{locale:t}=Rt(),n=E(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return E(()=>{let r=n(),o;return Xr.has(r)&&(o=Xr.get(r)),o||(o=new Intl.Collator(t(),e),Xr.set(r,o)),o})}var Ct=class fl extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof fl?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function hd(e){let[t,n]=Vn(e);return[()=>t()??new Ct,n]}function gl(e){return Mu()?e.altKey:e.ctrlKey}function cn(e){return kr()?e.metaKey:e.ctrlKey}function gs(e){return new Ct(e)}function yd(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function md(e){let t=J({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=z(!1),[o,i]=z(),s=E(()=>{let y=A(t.selectedKeys);return y!=null?gs(y):y}),a=E(()=>{let y=A(t.defaultSelectedKeys);return y!=null?gs(y):new Ct}),[l,u]=hd({value:s,defaultValue:a,onChange:y=>t.onSelectionChange?.(y)}),[d,c]=z(A(t.selectionBehavior)),g=()=>A(t.selectionMode),f=()=>A(t.disallowEmptySelection)??!1,h=y=>{(A(t.allowDuplicateSelectionEvents)||!yd(y,l()))&&u(y)};return B(()=>{let y=l();A(t.selectionBehavior)==="replace"&&d()==="toggle"&&typeof y=="object"&&y.size===0&&c("replace")}),B(()=>{c(A(t.selectionBehavior)??"toggle")}),{selectionMode:g,disallowEmptySelection:f,selectionBehavior:d,setSelectionBehavior:c,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:i,selectedKeys:l,setSelectedKeys:h}}function vd(e){let[t,n]=z(""),[r,o]=z(-1);return{typeSelectHandlers:{onKeyDown:s=>{if(A(e.isDisabled))return;let a=A(e.keyboardDelegate),l=A(e.selectionManager);if(!a.getKeyForSearch)return;let u=pd(s.key);if(!u||s.ctrlKey||s.metaKey)return;u===" "&&t().trim().length>0&&(s.preventDefault(),s.stopPropagation());let d=n(g=>g+u),c=a.getKeyForSearch(d,l.focusedKey())??a.getKeyForSearch(d);c==null&&bd(d)&&(d=d[0],c=a.getKeyForSearch(d,l.focusedKey())??a.getKeyForSearch(d)),c!=null&&(l.setFocusedKey(c),e.onTypeSelect?.(c)),clearTimeout(r()),o(self.setTimeout(()=>n(""),500))}}}}function pd(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function bd(e){return e.split("").every(t=>t===e[0])}function wd(e,t,n){let o=W({selectOnFocus:()=>A(e.selectionManager).selectionBehavior()==="replace"},e),i=()=>t(),{direction:s}=Rt(),a={top:0,left:0};pu(()=>A(o.isVirtualized)?void 0:i(),"scroll",()=>{let m=i();m&&(a={top:m.scrollTop,left:m.scrollLeft})});let{typeSelectHandlers:l}=vd({isDisabled:()=>A(o.disallowTypeAhead),keyboardDelegate:()=>A(o.keyboardDelegate),selectionManager:()=>A(o.selectionManager)}),u=()=>A(o.orientation)??"vertical",d=m=>{ye(m,l.onKeyDown),m.altKey&&m.key==="Tab"&&m.preventDefault();let p=t();if(!p?.contains(m.target))return;let b=A(o.selectionManager),w=A(o.selectOnFocus),x=F=>{F!=null&&(b.setFocusedKey(F),m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(F):w&&!gl(m)&&b.replaceSelection(F))},C=A(o.keyboardDelegate),P=A(o.shouldFocusWrap),D=b.focusedKey();switch(m.key){case(u()==="vertical"?"ArrowDown":"ArrowRight"):{if(C.getKeyBelow){m.preventDefault();let F;D!=null?F=C.getKeyBelow(D):F=C.getFirstKey?.(),F==null&&P&&(F=C.getFirstKey?.(D)),x(F)}break}case(u()==="vertical"?"ArrowUp":"ArrowLeft"):{if(C.getKeyAbove){m.preventDefault();let F;D!=null?F=C.getKeyAbove(D):F=C.getLastKey?.(),F==null&&P&&(F=C.getLastKey?.(D)),x(F)}break}case(u()==="vertical"?"ArrowLeft":"ArrowUp"):{if(C.getKeyLeftOf){m.preventDefault();let F=s()==="rtl",k;D!=null?k=C.getKeyLeftOf(D):k=F?C.getFirstKey?.():C.getLastKey?.(),x(k)}break}case(u()==="vertical"?"ArrowRight":"ArrowDown"):{if(C.getKeyRightOf){m.preventDefault();let F=s()==="rtl",k;D!=null?k=C.getKeyRightOf(D):k=F?C.getLastKey?.():C.getFirstKey?.(),x(k)}break}case"Home":if(C.getFirstKey){m.preventDefault();let F=C.getFirstKey(D,cn(m));F!=null&&(b.setFocusedKey(F),cn(m)&&m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(F):w&&b.replaceSelection(F))}break;case"End":if(C.getLastKey){m.preventDefault();let F=C.getLastKey(D,cn(m));F!=null&&(b.setFocusedKey(F),cn(m)&&m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(F):w&&b.replaceSelection(F))}break;case"PageDown":if(C.getKeyPageBelow&&D!=null){m.preventDefault();let F=C.getKeyPageBelow(D);x(F)}break;case"PageUp":if(C.getKeyPageAbove&&D!=null){m.preventDefault();let F=C.getKeyPageAbove(D);x(F)}break;case"a":cn(m)&&b.selectionMode()==="multiple"&&A(o.disallowSelectAll)!==!0&&(m.preventDefault(),b.selectAll());break;case"Escape":m.defaultPrevented||(m.preventDefault(),A(o.disallowEmptySelection)||b.clearSelection());break;case"Tab":if(!A(o.allowsTabNavigation)){if(m.shiftKey)p.focus();else{let F=Ru(p,{tabbable:!0}),k,q;do q=F.lastChild(),q&&(k=q);while(q);k&&!k.contains(document.activeElement)&&Pe(k)}break}}},c=m=>{let p=A(o.selectionManager),b=A(o.keyboardDelegate),w=A(o.selectOnFocus);if(p.isFocused()){m.currentTarget.contains(m.target)||p.setFocused(!1);return}if(m.currentTarget.contains(m.target)){if(p.setFocused(!0),p.focusedKey()==null){let x=P=>{P!=null&&(p.setFocusedKey(P),w&&p.replaceSelection(P))},C=m.relatedTarget;C&&m.currentTarget.compareDocumentPosition(C)&Node.DOCUMENT_POSITION_FOLLOWING?x(p.lastSelectedKey()??b.getLastKey?.()):x(p.firstSelectedKey()??b.getFirstKey?.())}else if(!A(o.isVirtualized)){let x=i();if(x){x.scrollTop=a.top,x.scrollLeft=a.left;let C=x.querySelector(`[data-key="${p.focusedKey()}"]`);C&&(Pe(C),io(x,C))}}}},g=m=>{let p=A(o.selectionManager);m.currentTarget.contains(m.relatedTarget)||p.setFocused(!1)},f=m=>{i()===m.target&&m.preventDefault()},h=()=>{let m=A(o.autoFocus);if(!m)return;let p=A(o.selectionManager),b=A(o.keyboardDelegate),w;m==="first"&&(w=b.getFirstKey?.()),m==="last"&&(w=b.getLastKey?.());let x=p.selectedKeys();x.size&&(w=x.values().next().value),p.setFocused(!0),p.setFocusedKey(w);let C=t();C&&w==null&&!A(o.shouldUseVirtualFocus)&&Pe(C)};return wt(()=>{o.deferAutoFocus?setTimeout(h,0):h()}),B(at([i,()=>A(o.isVirtualized),()=>A(o.selectionManager).focusedKey()],m=>{let[p,b,w]=m;if(b)w&&o.scrollToKey?.(w);else if(w&&p){let x=p.querySelector(`[data-key="${w}"]`);x&&io(p,x)}})),{tabIndex:E(()=>{if(!A(o.shouldUseVirtualFocus))return A(o.selectionManager).focusedKey()==null?0:-1}),onKeyDown:d,onMouseDown:f,onFocusIn:c,onFocusOut:g}}function hl(e,t){let n=()=>A(e.selectionManager),r=()=>A(e.key),o=()=>A(e.shouldUseVirtualFocus),i=b=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):b?.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||cn(b)||"pointerType"in b&&b.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},s=()=>n().isSelected(r()),a=()=>A(e.disabled)||n().isDisabled(r()),l=()=>!a()&&n().canSelectItem(r()),u=null,d=b=>{l()&&(u=b.pointerType,b.pointerType==="mouse"&&b.button===0&&!A(e.shouldSelectOnPressUp)&&i(b))},c=b=>{l()&&b.pointerType==="mouse"&&b.button===0&&A(e.shouldSelectOnPressUp)&&A(e.allowsDifferentPressOrigin)&&i(b)},g=b=>{l()&&(A(e.shouldSelectOnPressUp)&&!A(e.allowsDifferentPressOrigin)||u!=="mouse")&&i(b)},f=b=>{!l()||!["Enter"," "].includes(b.key)||(gl(b)?n().toggleSelection(r()):i(b))},h=b=>{a()&&b.preventDefault()},y=b=>{let w=t();o()||a()||!w||b.target===w&&n().setFocusedKey(r())},m=E(()=>{if(!(o()||a()))return r()===n().focusedKey()?0:-1}),p=E(()=>A(e.virtualized)?void 0:r());return B(at([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([b,w,x,C,P])=>{b&&w===C&&P&&!x&&document.activeElement!==b&&(e.focus?e.focus():Pe(b))})),{isSelected:s,isDisabled:a,allowsSelection:l,tabIndex:m,dataKey:p,onPointerDown:d,onPointerUp:c,onClick:g,onKeyDown:f,onMouseDown:h,onFocus:y}}var xd=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=this.state.selectedKeys(),r=n.anchorKey||t,o=new Ct(n,r,t);for(let i of this.getKeyRange(r,n.currentKey||t))o.delete(i);for(let i of this.getKeyRange(t,r))this.canSelectItem(i)&&o.add(i);this.state.setSelectedKeys(o)}getKeyRange(e,t){let n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r!=null;){let o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){let t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new Ct(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new Ct([t],t,t):new Ct;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;let t=new Ct;for(let n of e){let r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new Ct)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;let t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(n=>{for(;n!=null;){if(this.canSelectItem(n)){let r=this.collection().getItem(n);if(!r)continue;r.type==="item"&&e.push(n)}n=this.collection().getKeyAfter(n)}})(this.collection().getFirstKey()),e}},hs=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(let r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(let[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}};function Cd(e){let t=md(e),r=sd({dataSource:()=>A(e.dataSource),getKey:()=>A(e.getKey),getTextValue:()=>A(e.getTextValue),getDisabled:()=>A(e.getDisabled),getSectionChildren:()=>A(e.getSectionChildren),factory:i=>e.filter?new hs(e.filter(i)):new hs(i)},[()=>e.filter]),o=new xd(r,t);return ai(()=>{let i=t.focusedKey();i!=null&&!r().getItem(i)&&t.setFocusedKey(void 0)}),{collection:r,selectionManager:()=>o}}var Ie=e=>typeof e=="function"?e():e,Sd=e=>{let t=E(()=>{let s=Ie(e.element);if(s)return getComputedStyle(s)}),n=()=>t()?.animationName??"none",[r,o]=z(Ie(e.show)?"present":"hidden"),i="none";return B(s=>{let a=Ie(e.show);return ve(()=>{if(s===a)return a;let l=i,u=n();a?o("present"):u==="none"||t()?.display==="none"?o("hidden"):o(s===!0&&l!==u?"hiding":"hidden")}),a}),B(()=>{let s=Ie(e.element);if(!s)return;let a=u=>{u.target===s&&(i=n())},l=u=>{let c=n().includes(u.animationName);u.target===s&&c&&r()==="hiding"&&o("hidden")};s.addEventListener("animationstart",a),s.addEventListener("animationcancel",l),s.addEventListener("animationend",l),U(()=>{s.removeEventListener("animationstart",a),s.removeEventListener("animationcancel",l),s.removeEventListener("animationend",l)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},$d=Sd,yl=$d,pr="data-kb-top-layer",ml,lo=!1,$t=[];function _n(e){return $t.findIndex(t=>t.node===e)}function kd(e){return $t[_n(e)]}function Ed(e){return $t[$t.length-1].node===e}function vl(){return $t.filter(e=>e.isPointerBlocking)}function Ad(){return[...vl()].slice(-1)[0]}function bo(){return vl().length>0}function pl(e){let t=_n(Ad()?.node);return _n(e)<t}function Md(e){$t.push(e)}function Td(e){let t=_n(e);t<0||$t.splice(t,1)}function Od(){for(let{node:e}of $t)e.style.pointerEvents=pl(e)?"none":"auto"}function Dd(e){if(bo()&&!lo){let t=ut(e);ml=document.body.style.pointerEvents,t.body.style.pointerEvents="none",lo=!0}}function Id(e){if(bo())return;let t=ut(e);t.body.style.pointerEvents=ml,t.body.style.length===0&&t.body.removeAttribute("style"),lo=!1}var Be={layers:$t,isTopMostLayer:Ed,hasPointerBlockingLayer:bo,isBelowPointerBlockingLayer:pl,addLayer:Md,removeLayer:Td,indexOf:_n,find:kd,assignPointerEventToLayers:Od,disableBodyPointerEvents:Dd,restoreBodyPointerEvents:Id},Pd={};Ar(Pd,{Button:()=>qd,Root:()=>wo});var Fd=["button","color","file","image","reset","submit"];function Ld(e){let t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Fd.indexOf(e.type)!==-1:!1}function wo(e){let t,n=J({type:"button"},e),[r,o]=ee(n,["ref","type","disabled"]),i=Er(()=>t,()=>"button"),s=E(()=>{let u=i();return u==null?!1:Ld({tagName:u,type:r.type})}),a=E(()=>i()==="input"),l=E(()=>i()==="a"&&t?.getAttribute("href")!=null);return v(me,W({as:"button",ref(u){let d=qe(c=>t=c,r.ref);typeof d=="function"&&d(u)},get type(){return s()||a()?r.type:void 0},get role(){return!s()&&!l()?"button":void 0},get tabIndex(){return!s()&&!l()&&!r.disabled?0:void 0},get disabled(){return s()||a()?r.disabled:void 0},get"aria-disabled"(){return!s()&&!a()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var qd=wo,_d=["top","right","bottom","left"],ct=Math.min,Ve=Math.max,br=Math.round,yr=Math.floor,Lt=e=>({x:e,y:e}),Rd={left:"right",right:"left",bottom:"top",top:"bottom"},zd={start:"end",end:"start"};function ao(e,t,n){return Ve(e,ct(t,n))}function Qt(e,t){return typeof e=="function"?e(t):e}function qt(e){return e.split("-")[0]}function fn(e){return e.split("-")[1]}function bl(e){return e==="x"?"y":"x"}function xo(e){return e==="y"?"height":"width"}function jt(e){return["top","bottom"].includes(qt(e))?"y":"x"}function Co(e){return bl(jt(e))}function Kd(e,t,n){n===void 0&&(n=!1);let r=fn(e),o=Co(e),i=xo(o),s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=wr(s)),[s,wr(s)]}function Bd(e){let t=wr(e);return[co(e),t,co(t)]}function co(e){return e.replace(/start|end/g,t=>zd[t])}function Nd(e,t,n){let r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}function Vd(e,t,n,r){let o=fn(e),i=Nd(qt(e),n==="start",r);return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(co)))),i}function wr(e){return e.replace(/left|right|bottom|top/g,t=>Rd[t])}function Ud(e){return{top:0,right:0,bottom:0,left:0,...e}}function wl(e){return typeof e!="number"?Ud(e):{top:e,right:e,bottom:e,left:e}}function xr(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function ys(e,t,n){let{reference:r,floating:o}=e,i=jt(t),s=Co(t),a=xo(s),l=qt(t),u=i==="y",d=r.x+r.width/2-o.width/2,c=r.y+r.height/2-o.height/2,g=r[a]/2-o[a]/2,f;switch(l){case"top":f={x:d,y:r.y-o.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:c};break;case"left":f={x:r.x-o.width,y:c};break;default:f={x:r.x,y:r.y}}switch(fn(t)){case"start":f[s]-=g*(n&&u?-1:1);break;case"end":f[s]+=g*(n&&u?-1:1);break}return f}var Gd=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t)),u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:c}=ys(u,r,l),g=r,f={},h=0;for(let y=0;y<a.length;y++){let{name:m,fn:p}=a[y],{x:b,y:w,data:x,reset:C}=await p({x:d,y:c,initialPlacement:r,placement:g,strategy:o,middlewareData:f,rects:u,platform:s,elements:{reference:e,floating:t}});d=b??d,c=w??c,f={...f,[m]:{...f[m],...x}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(g=C.placement),C.rects&&(u=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):C.rects),{x:d,y:c}=ys(u,g,l)),y=-1)}return{x:d,y:c,placement:g,strategy:o,middlewareData:f}};async function Rn(e,t){var n;t===void 0&&(t={});let{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:g=!1,padding:f=0}=Qt(t,e),h=wl(f),m=a[g?c==="floating"?"reference":"floating":c],p=xr(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(m)))==null||n?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),b=c==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),x=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},C=xr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:w,strategy:l}):b);return{top:(p.top-C.top+h.top)/x.y,bottom:(C.bottom-p.bottom+h.bottom)/x.y,left:(p.left-C.left+h.left)/x.x,right:(C.right-p.right+h.right)/x.x}}var Hd=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:u,padding:d=0}=Qt(e,t)||{};if(u==null)return{};let c=wl(d),g={x:n,y:r},f=Co(o),h=xo(f),y=await s.getDimensions(u),m=f==="y",p=m?"top":"left",b=m?"bottom":"right",w=m?"clientHeight":"clientWidth",x=i.reference[h]+i.reference[f]-g[f]-i.floating[h],C=g[f]-i.reference[f],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u)),D=P?P[w]:0;(!D||!await(s.isElement==null?void 0:s.isElement(P)))&&(D=a.floating[w]||i.floating[h]);let F=x/2-C/2,k=D/2-y[h]/2-1,q=ct(c[p],k),j=ct(c[b],k),G=q,se=D-y[h]-j,oe=D/2-y[h]/2+F,fe=ao(G,oe,se),ce=!l.arrow&&fn(o)!=null&&oe!==fe&&i.reference[h]/2-(oe<G?q:j)-y[h]/2<0,le=ce?oe<G?oe-G:oe-se:0;return{[f]:g[f]+le,data:{[f]:fe,centerOffset:oe-fe-le,...ce&&{alignmentOffset:le}},reset:ce}}}),jd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;let{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:y=!0,...m}=Qt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let p=qt(o),b=jt(a),w=qt(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),C=g||(w||!y?[wr(a)]:Bd(a)),P=h!=="none";!g&&P&&C.push(...Vd(a,y,h,x));let D=[a,...C],F=await Rn(t,m),k=[],q=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&k.push(F[p]),c){let oe=Kd(o,s,x);k.push(F[oe[0]],F[oe[1]])}if(q=[...q,{placement:o,overflows:k}],!k.every(oe=>oe<=0)){var j,G;let oe=(((j=i.flip)==null?void 0:j.index)||0)+1,fe=D[oe];if(fe)return{data:{index:oe,overflows:q},reset:{placement:fe}};let ce=(G=q.filter(le=>le.overflows[0]<=0).sort((le,ue)=>le.overflows[1]-ue.overflows[1])[0])==null?void 0:G.placement;if(!ce)switch(f){case"bestFit":{var se;let le=(se=q.filter(ue=>{if(P){let ge=jt(ue.placement);return ge===b||ge==="y"}return!0}).map(ue=>[ue.placement,ue.overflows.filter(ge=>ge>0).reduce((ge,Ce)=>ge+Ce,0)]).sort((ue,ge)=>ue[1]-ge[1])[0])==null?void 0:se[0];le&&(ce=le);break}case"initialPlacement":ce=a;break}if(o!==ce)return{reset:{placement:ce}}}return{}}}};function ms(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function vs(e){return _d.some(t=>e[t]>=0)}var Wd=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...o}=Qt(e,t);switch(r){case"referenceHidden":{let i=await Rn(t,{...o,elementContext:"reference"}),s=ms(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:vs(s)}}}case"escaped":{let i=await Rn(t,{...o,altBoundary:!0}),s=ms(i,n.floating);return{data:{escapedOffsets:s,escaped:vs(s)}}}default:return{}}}}};async function Qd(e,t){let{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=qt(n),a=fn(n),l=jt(n)==="y",u=["left","top"].includes(s)?-1:1,d=i&&l?-1:1,c=Qt(t,e),{mainAxis:g,crossAxis:f,alignmentAxis:h}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&typeof h=="number"&&(f=a==="end"?h*-1:h),l?{x:f*d,y:g*u}:{x:g*u,y:f*d}}var Yd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:o,y:i,placement:s,middlewareData:a}=t,l=await Qd(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:s}}}}},Xd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:m=>{let{x:p,y:b}=m;return{x:p,y:b}}},...l}=Qt(e,t),u={x:n,y:r},d=await Rn(t,l),c=jt(qt(o)),g=bl(c),f=u[g],h=u[c];if(i){let m=g==="y"?"top":"left",p=g==="y"?"bottom":"right",b=f+d[m],w=f-d[p];f=ao(b,f,w)}if(s){let m=c==="y"?"top":"left",p=c==="y"?"bottom":"right",b=h+d[m],w=h-d[p];h=ao(b,h,w)}let y=a.fn({...t,[g]:f,[c]:h});return{...y,data:{x:y.x-n,y:y.y-r}}}}},Zd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=Qt(e,t),l=await Rn(t,a),u=qt(n),d=fn(n),c=jt(n)==="y",{width:g,height:f}=r.floating,h,y;u==="top"||u==="bottom"?(h=u,y=d===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(y=u,h=d==="end"?"top":"bottom");let m=f-l.top-l.bottom,p=g-l.left-l.right,b=ct(f-l[h],m),w=ct(g-l[y],p),x=!t.middlewareData.shift,C=b,P=w;if(c?P=d||x?ct(w,p):p:C=d||x?ct(b,m):m,x&&!d){let F=Ve(l.left,0),k=Ve(l.right,0),q=Ve(l.top,0),j=Ve(l.bottom,0);c?P=g-2*(F!==0||k!==0?F+k:Ve(l.left,l.right)):C=f-2*(q!==0||j!==0?q+j:Ve(l.top,l.bottom))}await s({...t,availableWidth:P,availableHeight:C});let D=await o.getDimensions(i.floating);return g!==D.width||f!==D.height?{reset:{rects:!0}}:{}}}};function gn(e){return xl(e)?(e.nodeName||"").toLowerCase():"#document"}function Ue(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||self}function kt(e){var t;return(t=(xl(e)?e.ownerDocument:e.document)||self.document)==null?void 0:t.documentElement}function xl(e){return e instanceof Node||e instanceof Ue(e).Node}function ot(e){return e instanceof Element||e instanceof Ue(e).Element}function dt(e){return e instanceof HTMLElement||e instanceof Ue(e).HTMLElement}function ps(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ue(e).ShadowRoot}function Un(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Jd(e){return["table","td","th"].includes(gn(e))}function Mr(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function So(e){let t=$o(),n=ot(e)?it(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function ef(e){let t=_t(e);for(;dt(t)&&!dn(t);){if(So(t))return t;if(Mr(t))return null;t=_t(t)}return null}function $o(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function dn(e){return["html","body","#document"].includes(gn(e))}function it(e){return Ue(e).getComputedStyle(e)}function Tr(e){return ot(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function _t(e){if(gn(e)==="html")return e;let t=e.assignedSlot||e.parentNode||ps(e)&&e.host||kt(e);return ps(t)?t.host:t}function Cl(e){let t=_t(e);return dn(t)?e.ownerDocument?e.ownerDocument.body:e.body:dt(t)&&Un(t)?t:Cl(t)}function zn(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);let o=Cl(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Ue(o);return i?t.concat(s,s.visualViewport||[],Un(o)?o:[],s.frameElement&&n?zn(s.frameElement):[]):t.concat(o,zn(o,[],n))}function Sl(e){let t=it(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=dt(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=br(n)!==i||br(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function ko(e){return ot(e)?e:e.contextElement}function un(e){let t=ko(e);if(!dt(t))return Lt(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Sl(t),s=(i?br(n.width):n.width)/r,a=(i?br(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}var tf=Lt(0);function $l(e){let t=Ue(e);return!$o()||!t.visualViewport?tf:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nf(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ue(e)?!1:t}function Wt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let o=e.getBoundingClientRect(),i=ko(e),s=Lt(1);t&&(r?ot(r)&&(s=un(r)):s=un(e));let a=nf(i,n,r)?$l(i):Lt(0),l=(o.left+a.x)/s.x,u=(o.top+a.y)/s.y,d=o.width/s.x,c=o.height/s.y;if(i){let g=Ue(i),f=r&&ot(r)?Ue(r):r,h=g,y=h.frameElement;for(;y&&r&&f!==h;){let m=un(y),p=y.getBoundingClientRect(),b=it(y),w=p.left+(y.clientLeft+parseFloat(b.paddingLeft))*m.x,x=p.top+(y.clientTop+parseFloat(b.paddingTop))*m.y;l*=m.x,u*=m.y,d*=m.x,c*=m.y,l+=w,u+=x,h=Ue(y),y=h.frameElement}}return xr({width:d,height:c,x:l,y:u})}function rf(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,i=o==="fixed",s=kt(r),a=t?Mr(t.floating):!1;if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},u=Lt(1),d=Lt(0),c=dt(r);if((c||!c&&!i)&&((gn(r)!=="body"||Un(s))&&(l=Tr(r)),dt(r))){let g=Wt(r);u=un(r),d.x=g.x+r.clientLeft,d.y=g.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+d.x,y:n.y*u.y-l.scrollTop*u.y+d.y}}function of(e){return Array.from(e.getClientRects())}function kl(e){return Wt(kt(e)).left+Tr(e).scrollLeft}function sf(e){let t=kt(e),n=Tr(e),r=e.ownerDocument.body,o=Ve(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ve(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),s=-n.scrollLeft+kl(e),a=-n.scrollTop;return it(r).direction==="rtl"&&(s+=Ve(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}function lf(e,t){let n=Ue(e),r=kt(e),o=n.visualViewport,i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;let u=$o();(!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}function af(e,t){let n=Wt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=dt(e)?un(e):Lt(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,u=r*i.y;return{width:s,height:a,x:l,y:u}}function bs(e,t,n){let r;if(t==="viewport")r=lf(e,n);else if(t==="document")r=sf(kt(e));else if(ot(t))r=af(t,n);else{let o=$l(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return xr(r)}function El(e,t){let n=_t(e);return n===t||!ot(n)||dn(n)?!1:it(n).position==="fixed"||El(n,t)}function cf(e,t){let n=t.get(e);if(n)return n;let r=zn(e,[],!1).filter(a=>ot(a)&&gn(a)!=="body"),o=null,i=it(e).position==="fixed",s=i?_t(e):e;for(;ot(s)&&!dn(s);){let a=it(s),l=So(s);!l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Un(s)&&!l&&El(e,s))?r=r.filter(d=>d!==s):o=a,s=_t(s)}return t.set(e,r),r}function uf(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,s=[...n==="clippingAncestors"?Mr(t)?[]:cf(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,d)=>{let c=bs(t,d,o);return u.top=Ve(c.top,u.top),u.right=ct(c.right,u.right),u.bottom=ct(c.bottom,u.bottom),u.left=Ve(c.left,u.left),u},bs(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function df(e){let{width:t,height:n}=Sl(e);return{width:t,height:n}}function ff(e,t,n){let r=dt(t),o=kt(t),i=n==="fixed",s=Wt(e,!0,i,t),a={scrollLeft:0,scrollTop:0},l=Lt(0);if(r||!r&&!i)if((gn(t)!=="body"||Un(o))&&(a=Tr(t)),r){let c=Wt(t,!0,i,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else o&&(l.x=kl(o));let u=s.left+a.scrollLeft-l.x,d=s.top+a.scrollTop-l.y;return{x:u,y:d,width:s.width,height:s.height}}function Zr(e){return it(e).position==="static"}function ws(e,t){return!dt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function Al(e,t){let n=Ue(e);if(Mr(e))return n;if(!dt(e)){let o=_t(e);for(;o&&!dn(o);){if(ot(o)&&!Zr(o))return o;o=_t(o)}return n}let r=ws(e,t);for(;r&&Jd(r)&&Zr(r);)r=ws(r,t);return r&&dn(r)&&Zr(r)&&!So(r)?n:r||ef(e)||n}var gf=async function(e){let t=this.getOffsetParent||Al,n=this.getDimensions,r=await n(e.floating);return{reference:ff(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function hf(e){return it(e).direction==="rtl"}var Ml={convertOffsetParentRelativeRectToViewportRelativeRect:rf,getDocumentElement:kt,getClippingRect:uf,getOffsetParent:Al,getElementRects:gf,getClientRects:of,getDimensions:df,getScale:un,isElement:ot,isRTL:hf};function yf(e,t){let n=null,r,o=kt(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();let{left:u,top:d,width:c,height:g}=e.getBoundingClientRect();if(a||t(),!c||!g)return;let f=yr(d),h=yr(o.clientWidth-(u+c)),y=yr(o.clientHeight-(d+g)),m=yr(u),b={rootMargin:-f+"px "+-h+"px "+-y+"px "+-m+"px",threshold:Ve(0,ct(1,l))||1},w=!0;function x(C){let P=C[0].intersectionRatio;if(P!==l){if(!w)return s();P?s(!1,P):r=setTimeout(()=>{s(!1,1e-7)},1e3)}w=!1}try{n=new IntersectionObserver(x,{...b,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,b)}n.observe(e)}return s(!0),i}function mf(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=ko(e),d=o||i?[...u?zn(u):[],...zn(t)]:[];d.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});let c=u&&a?yf(u,n):null,g=-1,f=null;s&&(f=new ResizeObserver(p=>{let[b]=p;b&&b.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var w;(w=f)==null||w.observe(t)})),n()}),u&&!l&&f.observe(u),f.observe(t));let h,y=l?Wt(e):null;l&&m();function m(){let p=Wt(e);y&&(p.x!==y.x||p.y!==y.y||p.width!==y.width||p.height!==y.height)&&n(),y=p,h=requestAnimationFrame(m)}return n(),()=>{var p;d.forEach(b=>{o&&b.removeEventListener("scroll",n),i&&b.removeEventListener("resize",n)}),c?.(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(h)}}var vf=Yd,pf=Xd,bf=jd,wf=Zd,xf=Wd,Cf=Hd,Sf=(e,t,n)=>{let r=new Map,o={platform:Ml,...n},i={...o.platform,_c:r};return Gd(e,t,{...o,platform:i})},Eo=ke();function Ao(){let e=Se(Eo);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var $f=R('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),uo=30,xs=uo/2,kf={top:180,right:-90,bottom:0,left:90};function Mo(e){let t=Ao(),n=J({size:uo},e),[r,o]=ee(n,["ref","style","size"]),i=()=>t.currentPlacement().split("-")[0],s=Ef(t.contentRef),a=()=>s()?.getPropertyValue("background-color")||"none",l=()=>s()?.getPropertyValue(`border-${i()}-color`)||"none",u=()=>s()?.getPropertyValue(`border-${i()}-width`)||"0px",d=()=>Number.parseInt(u())*2*(uo/r.size),c=()=>`rotate(${kf[i()]} ${xs} ${xs}) translate(0 2)`;return v(me,W({as:"div",ref(g){let f=qe(t.setArrowRef,r.ref);typeof f=="function"&&f(g)},"aria-hidden":"true",get style(){return $r({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:a(),stroke:l(),"stroke-width":d()},r.style)}},o,{get children(){let g=$f(),f=g.firstChild;return K(()=>M(f,"transform",c())),g}}))}function Ef(e){let[t,n]=z();return B(()=>{let r=e();r&&n($u(r).getComputedStyle(r))}),t}function Af(e){let t=Ao(),[n,r]=ee(e,["ref","style"]);return v(me,W({as:"div",ref(o){let i=qe(t.setPositionerRef,n.ref);typeof i=="function"&&i(o)},"data-popper-positioner":"",get style(){return $r({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function Cs(e){let{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);let i={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...i,toJSON:()=>i}}function Mf(e,t){return{contextElement:e,getBoundingClientRect:()=>{let r=t(e);return r?Cs(r):e?e.getBoundingClientRect():Cs()}}}function Tf(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Of={top:"bottom",right:"left",bottom:"top",left:"right"};function Df(e,t){let[n,r]=e.split("-"),o=Of[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function If(e){let t=J({getAnchorRect:g=>g?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=z(),[o,i]=z(),[s,a]=z(t.placement),l=()=>Mf(t.anchorRef?.(),t.getAnchorRect),{direction:u}=Rt();async function d(){let g=l(),f=n(),h=o();if(!g||!f)return;let y=(h?.clientHeight||0)/2,m=typeof t.gutter=="number"?t.gutter+y:t.gutter??y;f.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),g.getBoundingClientRect();let p=[vf(({placement:P})=>{let D=!!P.split("-")[1];return{mainAxis:m,crossAxis:D?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){let P=typeof t.flip=="string"?t.flip.split(" "):void 0;if(P!==void 0&&!P.every(Tf))throw new Error("`flip` expects a spaced-delimited list of placements");p.push(bf({padding:t.overflowPadding,fallbackPlacements:P}))}(t.slide||t.overlap)&&p.push(pf({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),p.push(wf({padding:t.overflowPadding,apply({availableWidth:P,availableHeight:D,rects:F}){let k=Math.round(F.reference.width);P=Math.floor(P),D=Math.floor(D),f.style.setProperty("--kb-popper-anchor-width",`${k}px`),f.style.setProperty("--kb-popper-content-available-width",`${P}px`),f.style.setProperty("--kb-popper-content-available-height",`${D}px`),t.sameWidth&&(f.style.width=`${k}px`),t.fitViewport&&(f.style.maxWidth=`${P}px`,f.style.maxHeight=`${D}px`)}})),t.hideWhenDetached&&p.push(xf({padding:t.detachedPadding})),h&&p.push(Cf({element:h,padding:t.arrowPadding}));let b=await Sf(g,f,{placement:t.placement,strategy:"absolute",middleware:p,platform:{...Ml,isRTL:()=>u()==="rtl"}});if(a(b.placement),t.onCurrentPlacementChange?.(b.placement),!f)return;f.style.setProperty("--kb-popper-content-transform-origin",Df(b.placement,u()));let w=Math.round(b.x),x=Math.round(b.y),C;if(t.hideWhenDetached&&(C=b.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(f.style,{top:"0",left:"0",transform:`translate3d(${w}px, ${x}px, 0)`,visibility:C}),h&&b.middlewareData.arrow){let{x:P,y:D}=b.middlewareData.arrow,F=b.placement.split("-")[0];Object.assign(h.style,{left:P!=null?`${P}px`:"",top:D!=null?`${D}px`:"",[F]:"100%"})}}B(()=>{let g=l(),f=n();if(!g||!f)return;let h=mf(g,f,d,{elementResize:typeof ResizeObserver=="function"});U(h)}),B(()=>{let g=n(),f=t.contentRef?.();!g||!f||queueMicrotask(()=>{g.style.zIndex=getComputedStyle(f).zIndex})});let c={currentPlacement:s,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:i};return v(Eo.Provider,{value:c,get children(){return t.children}})}var Tl=Object.assign(If,{Arrow:Mo,Context:Eo,usePopperContext:Ao,Positioner:Af});function Pf(e){let t=n=>{n.key===yo.Escape&&e.onEscapeKeyDown?.(n)};B(()=>{if(De||A(e.isDisabled))return;let n=e.ownerDocument?.()??ut();n.addEventListener("keydown",t),U(()=>{n.removeEventListener("keydown",t)})})}var Ss="interactOutside.pointerDownOutside",$s="interactOutside.focusOutside";function Ff(e,t){let n,r=Ku,o=()=>ut(t()),i=c=>e.onPointerDownOutside?.(c),s=c=>e.onFocusOutside?.(c),a=c=>e.onInteractOutside?.(c),l=c=>{let g=c.target;return!(g instanceof HTMLElement)||g.closest(`[${pr}]`)||!Qe(o(),g)||Qe(t(),g)?!1:!e.shouldExcludeElement?.(g)},u=c=>{function g(){let f=t(),h=c.target;if(!f||!h||!l(c))return;let y=Ee([i,a]);h.addEventListener(Ss,y,{once:!0});let m=new CustomEvent(Ss,{bubbles:!1,cancelable:!0,detail:{originalEvent:c,isContextMenu:c.button===2||Tu(c)&&c.button===0}});h.dispatchEvent(m)}c.pointerType==="touch"?(o().removeEventListener("click",g),r=g,o().addEventListener("click",g,{once:!0})):g()},d=c=>{let g=t(),f=c.target;if(!g||!f||!l(c))return;let h=Ee([s,a]);f.addEventListener($s,h,{once:!0});let y=new CustomEvent($s,{bubbles:!1,cancelable:!0,detail:{originalEvent:c,isContextMenu:!1}});f.dispatchEvent(y)};B(()=>{De||A(e.isDisabled)||(n=self.setTimeout(()=>{o().addEventListener("pointerdown",u,!0)},0),o().addEventListener("focusin",d,!0),U(()=>{self.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",u,!0),o().removeEventListener("focusin",d,!0)}))})}var Ol=ke();function Lf(){return Se(Ol)}function qf(e){let t,n=Lf(),[r,o]=ee(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),i=new Set([]),s=c=>{i.add(c);let g=n?.registerNestedLayer(c);return()=>{i.delete(c),g?.()}};Ff({shouldExcludeElement:c=>t?r.excludedElements?.some(g=>Qe(g(),c))||[...i].some(g=>Qe(g,c)):!1,onPointerDownOutside:c=>{!t||Be.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Be.isTopMostLayer(t)||(r.onPointerDownOutside?.(c),r.onInteractOutside?.(c),c.defaultPrevented||r.onDismiss?.())},onFocusOutside:c=>{r.onFocusOutside?.(c),r.onInteractOutside?.(c),c.defaultPrevented||r.onDismiss?.()}},()=>t),Pf({ownerDocument:()=>ut(t),onEscapeKeyDown:c=>{!t||!Be.isTopMostLayer(t)||(r.onEscapeKeyDown?.(c),!c.defaultPrevented&&r.onDismiss&&(c.preventDefault(),r.onDismiss()))}}),wt(()=>{if(!t)return;Be.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});let c=n?.registerNestedLayer(t);Be.assignPointerEventToLayers(),Be.disableBodyPointerEvents(t),U(()=>{t&&(Be.removeLayer(t),c?.(),Be.assignPointerEventToLayers(),Be.restoreBodyPointerEvents(t))})}),B(at([()=>t,()=>r.disableOutsidePointerEvents],([c,g])=>{if(!c)return;let f=Be.find(c);f&&f.isPointerBlocking!==g&&(f.isPointerBlocking=g,Be.assignPointerEventToLayers()),g&&Be.disableBodyPointerEvents(c),U(()=>{Be.restoreBodyPointerEvents(c)})},{defer:!0}));let d={registerNestedLayer:s};return v(Ol.Provider,{value:d,get children(){return v(me,W({as:"div",ref(c){let g=qe(f=>t=f,r.ref);typeof g=="function"&&g(c)}},o))}})}function Dl(e={}){let[t,n]=il({value:()=>A(e.open),defaultValue:()=>!!A(e.defaultOpen),onChange:s=>e.onOpenChange?.(s)}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var We={};Ar(We,{Description:()=>rl,ErrorMessage:()=>ol,Item:()=>Ll,ItemControl:()=>ql,ItemDescription:()=>_l,ItemIndicator:()=>Rl,ItemInput:()=>zl,ItemLabel:()=>Kl,Label:()=>Bl,RadioGroup:()=>_f,Root:()=>Nl});var Il=ke();function Pl(){let e=Se(Il);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Fl=ke();function Gn(){let e=Se(Fl);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Ll(e){let t=Nn(),n=Pl(),r=`${t.generateId("item")}-${Ke()}`,o=J({id:r},e),[i,s]=ee(o,["value","disabled","onPointerDown"]),[a,l]=z(),[u,d]=z(),[c,g]=z(),[f,h]=z(),[y,m]=z(!1),p=E(()=>n.isSelectedValue(i.value)),b=E(()=>i.disabled||t.isDisabled()||!1),w=P=>{ye(P,i.onPointerDown),y()&&P.preventDefault()},x=E(()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":p()?"":void 0})),C={value:()=>i.value,dataset:x,isSelected:p,isDisabled:b,inputId:a,labelId:u,descriptionId:c,inputRef:f,select:()=>n.setSelectedValue(i.value),generateId:Bn(()=>s.id),registerInput:Ye(l),registerLabel:Ye(d),registerDescription:Ye(g),setIsFocused:m,setInputRef:h};return v(Fl.Provider,{value:C,get children(){return v(me,W({as:"div",role:"group",onPointerDown:w},x,s))}})}function ql(e){let t=Gn(),n=J({id:t.generateId("control")},e),[r,o]=ee(n,["onClick","onKeyDown"]);return v(me,W({as:"div",onClick:a=>{ye(a,r.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:a=>{ye(a,r.onKeyDown),a.key===yo.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),o))}function _l(e){let t=Gn(),n=J({id:t.generateId("description")},e);return B(()=>U(t.registerDescription(n.id))),v(me,W({as:"div"},()=>t.dataset(),n))}function Rl(e){let t=Gn(),n=J({id:t.generateId("indicator")},e),[r,o]=ee(n,["ref","forceMount"]),[i,s]=z(),{present:a}=yl({show:()=>r.forceMount||t.isSelected(),element:()=>i()??null});return v(N,{get when(){return a()},get children(){return v(me,W({as:"div",ref(l){let u=qe(s,r.ref);typeof u=="function"&&u(l)}},()=>t.dataset(),o))}})}function zl(e){let t=Nn(),n=Pl(),r=Gn(),o=J({id:r.generateId("input")},e),[i,s]=ee(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),a=()=>[i["aria-labelledby"],r.labelId(),i["aria-labelledby"]!=null&&s["aria-label"]!=null?s.id:void 0].filter(Boolean).join(" ")||void 0,l=()=>[i["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[u,d]=z(!1),c=h=>{if(ye(h,i.onChange),h.stopPropagation(),!u()){n.setSelectedValue(r.value());let y=h.target;y.checked=r.isSelected()}d(!1)},g=h=>{ye(h,i.onFocus),r.setIsFocused(!0)},f=h=>{ye(h,i.onBlur),r.setIsFocused(!1)};return B(at([()=>r.isSelected(),()=>r.value()],h=>{if(!h[0]&&h[1]===r.value())return;d(!0);let y=r.inputRef();y?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),y?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),B(()=>U(r.registerInput(s.id))),v(me,W({as:"input",ref(h){let y=qe(r.setInputRef,i.ref);typeof y=="function"&&y(h)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return $r({...tl},i.style)},get"aria-labelledby"(){return a()},get"aria-describedby"(){return l()},onChange:c,onFocus:g,onBlur:f},()=>r.dataset(),s))}function Kl(e){let t=Gn(),n=J({id:t.generateId("label")},e);return B(()=>U(t.registerLabel(n.id))),v(me,W({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function Bl(e){return v(Gu,W({as:"span"},e))}function Nl(e){let t,n=`radiogroup-${Ke()}`,r=J({id:n,orientation:"vertical"},e),[o,i,s]=ee(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Vu),[a,l]=Vn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:h=>o.onChange?.(h)}),{formControlContext:u}=Uu(i);Hu(()=>t,()=>l(o.defaultValue??""));let d=()=>u.getAriaLabelledBy(A(i.id),s["aria-label"],o["aria-labelledby"]),c=()=>u.getAriaDescribedBy(o["aria-describedby"]),g=h=>h===a(),f={ariaDescribedBy:c,isSelectedValue:g,setSelectedValue:h=>{if(!(u.isReadOnly()||u.isDisabled())&&(l(h),t))for(let y of t.querySelectorAll("[type='radio']")){let m=y;m.checked=g(m.value)}}};return v(nl.Provider,{value:u,get children(){return v(Il.Provider,{value:f,get children(){return v(me,W({as:"div",ref(h){let y=qe(m=>t=m,o.ref);typeof y=="function"&&y(h)},role:"radiogroup",get id(){return A(i.id)},get"aria-invalid"(){return u.validationState()==="invalid"||void 0},get"aria-required"(){return u.isRequired()||void 0},get"aria-disabled"(){return u.isDisabled()||void 0},get"aria-readonly"(){return u.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return d()},get"aria-describedby"(){return c()}},()=>u.dataset(),s))}})}})}var _f=Object.assign(Nl,{Description:rl,ErrorMessage:ol,Item:Ll,ItemControl:ql,ItemDescription:_l,ItemIndicator:Rl,ItemInput:zl,ItemLabel:Kl,Label:Bl}),Rf=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){let n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){let n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight),o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=o!=null?this.getItem(o):null;return o}getKeyPageBelow(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight),o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=o!=null?this.getItem(o):null;return o}getKeyForSearch(e,t){let n=this.collator?.();if(!n)return;let r=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;r!=null;){let o=this.collection().getItem(r);if(o){let i=o.textValue.slice(0,e.length);if(o.textValue&&n.compare(i,e)===0)return r}r=this.getKeyBelow(r)}}};function zf(e,t,n){let r=gd({usage:"search",sensitivity:"base"}),o=E(()=>{let i=A(e.keyboardDelegate);return i||new Rf(e.collection,t,r)});return wd({selectionManager:()=>A(e.selectionManager),keyboardDelegate:o,autoFocus:()=>A(e.autoFocus),deferAutoFocus:()=>A(e.deferAutoFocus),shouldFocusWrap:()=>A(e.shouldFocusWrap),disallowEmptySelection:()=>A(e.disallowEmptySelection),selectOnFocus:()=>A(e.selectOnFocus),disallowTypeAhead:()=>A(e.disallowTypeAhead),shouldUseVirtualFocus:()=>A(e.shouldUseVirtualFocus),allowsTabNavigation:()=>A(e.allowsTabNavigation),isVirtualized:()=>A(e.isVirtualized),scrollToKey:i=>A(e.scrollToKey)?.(i),orientation:()=>A(e.orientation)},t)}var Jr="focusScope.autoFocusOnMount",eo="focusScope.autoFocusOnUnmount",ks={bubbles:!1,cancelable:!0},Es={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=oo(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=oo(this.stack,e),this.active()?.resume()}};function Kf(e,t){let[n,r]=z(!1),o={pause(){r(!0)},resume(){r(!1)}},i=null,s=h=>e.onMountAutoFocus?.(h),a=h=>e.onUnmountAutoFocus?.(h),l=()=>ut(t()),u=()=>{let h=l().createElement("span");return h.setAttribute("data-focus-trap",""),h.tabIndex=0,Object.assign(h.style,tl),h},d=()=>{let h=t();return h?Js(h,!0).filter(y=>!y.hasAttribute("data-focus-trap")):[]},c=()=>{let h=d();return h.length>0?h[0]:null},g=()=>{let h=d();return h.length>0?h[h.length-1]:null},f=()=>{let h=t();if(!h)return!1;let y=Fn(h);return!y||Qe(h,y)?!1:el(y)};B(()=>{if(De)return;let h=t();if(!h)return;Es.add(o);let y=Fn(h);if(!Qe(h,y)){let p=new CustomEvent(Jr,ks);h.addEventListener(Jr,s),h.dispatchEvent(p),p.defaultPrevented||setTimeout(()=>{Pe(c()),Fn(h)===y&&Pe(h)},0)}U(()=>{h.removeEventListener(Jr,s),setTimeout(()=>{let p=new CustomEvent(eo,ks);f()&&p.preventDefault(),h.addEventListener(eo,a),h.dispatchEvent(p),p.defaultPrevented||Pe(y??l().body),h.removeEventListener(eo,a),Es.remove(o)},0)})}),B(()=>{if(De)return;let h=t();if(!h||!A(e.trapFocus)||n())return;let y=p=>{let b=p.target;b?.closest(`[${pr}]`)||(Qe(h,b)?i=b:Pe(i))},m=p=>{let w=p.relatedTarget??Fn(h);w?.closest(`[${pr}]`)||Qe(h,w)||Pe(i)};l().addEventListener("focusin",y),l().addEventListener("focusout",m),U(()=>{l().removeEventListener("focusin",y),l().removeEventListener("focusout",m)})}),B(()=>{if(De)return;let h=t();if(!h||!A(e.trapFocus)||n())return;let y=u();h.insertAdjacentElement("afterbegin",y);let m=u();h.insertAdjacentElement("beforeend",m);function p(w){let x=c(),C=g();w.relatedTarget===x?Pe(C):Pe(x)}y.addEventListener("focusin",p),m.addEventListener("focusin",p);let b=new MutationObserver(w=>{for(let x of w)x.previousSibling===m&&(m.remove(),h.insertAdjacentElement("beforeend",m)),x.nextSibling===y&&(y.remove(),h.insertAdjacentElement("afterbegin",y))});b.observe(h,{childList:!0,subtree:!1}),U(()=>{y.removeEventListener("focusin",p),m.removeEventListener("focusin",p),y.remove(),m.remove(),b.disconnect()})})}var Bf="data-live-announcer";function Nf(e){B(()=>{A(e.isDisabled)||U(Vf(A(e.targets),A(e.root)))})}var In=new WeakMap,je=[];function Vf(e,t=document.body){let n=new Set(e),r=new Set,o=l=>{for(let g of l.querySelectorAll(`[${Bf}], [${pr}]`))n.add(g);let u=g=>{if(n.has(g)||g.parentElement&&r.has(g.parentElement)&&g.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let f of n)if(g.contains(f))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},d=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,{acceptNode:u}),c=u(l);if(c===NodeFilter.FILTER_ACCEPT&&i(l),c!==NodeFilter.FILTER_REJECT){let g=d.nextNode();for(;g!=null;)i(g),g=d.nextNode()}},i=l=>{let u=In.get(l)??0;l.getAttribute("aria-hidden")==="true"&&u===0||(u===0&&l.setAttribute("aria-hidden","true"),r.add(l),In.set(l,u+1))};je.length&&je[je.length-1].disconnect(),o(t);let s=new MutationObserver(l=>{for(let u of l)if(!(u.type!=="childList"||u.addedNodes.length===0)&&![...n,...r].some(d=>d.contains(u.target))){for(let d of u.removedNodes)d instanceof Element&&(n.delete(d),r.delete(d));for(let d of u.addedNodes)(d instanceof HTMLElement||d instanceof SVGElement)&&(d.dataset.liveAnnouncer==="true"||d.dataset.reactAriaTopLayer==="true")?n.add(d):d instanceof Element&&o(d)}});s.observe(t,{childList:!0,subtree:!0});let a={observe(){s.observe(t,{childList:!0,subtree:!0})},disconnect(){s.disconnect()}};return je.push(a),()=>{s.disconnect();for(let l of r){let u=In.get(l);if(u==null)return;u===1?(l.removeAttribute("aria-hidden"),In.delete(l)):In.set(l,u-1)}a===je[je.length-1]?(je.pop(),je.length&&je[je.length-1].observe()):je.splice(je.indexOf(a),1)}}var mr=new Map,Uf=e=>{B(()=>{let t=Ie(e.style)??{},n=Ie(e.properties)??[],r={};for(let i in t)r[i]=e.element.style[i];let o=mr.get(e.key);o?o.activeCount++:mr.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(i=>i.key)}),Object.assign(e.element.style,e.style);for(let i of n)e.element.style.setProperty(i.key,i.value);U(()=>{let i=mr.get(e.key);if(i){if(i.activeCount!==1){i.activeCount--;return}mr.delete(e.key);for(let[s,a]of Object.entries(i.originalStyles))e.element.style[s]=a;for(let s of i.properties)e.element.style.removeProperty(s);e.element.style.length===0&&e.element.removeAttribute("style"),e.cleanup?.()}})})},As=Uf,Gf=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Hf=(e,t)=>{let n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},jf=(e,t,n)=>{let r=t==="x"&&self.getComputedStyle(e).direction==="rtl"?-1:1,o=e,i=0,s=0,a=!1;do{let[l,u,d]=Gf(o,t),c=d-l-r*u;(u!==0||c!==0)&&Hf(o,t)&&(i+=c,s+=u),o===(n??document.documentElement)?a=!0:o=o._$host??o.parentElement}while(o&&!a);return[i,s]},[Ms,Ts]=z([]),Wf=e=>Ms().indexOf(e)===Ms().length-1,Qf=e=>{let t=W({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=Ke(),r=[0,0],o=null,i=null;B(()=>{Ie(t.enabled)&&(Ts(u=>[...u,n]),U(()=>{Ts(u=>u.filter(d=>d!==n))}))}),B(()=>{if(!Ie(t.enabled)||!Ie(t.hideScrollbar))return;let{body:u}=document,d=self.innerWidth-u.offsetWidth;if(Ie(t.preventScrollbarShift)){let c={overflow:"hidden"},g=[];d>0&&(Ie(t.preventScrollbarShiftMode)==="padding"?c.paddingRight=`calc(${self.getComputedStyle(u).paddingRight} + ${d}px)`:c.marginRight=`calc(${self.getComputedStyle(u).marginRight} + ${d}px)`,g.push({key:"--scrollbar-width",value:`${d}px`}));let f=self.scrollY,h=self.scrollX;As({key:"prevent-scroll",element:u,style:c,properties:g,cleanup:()=>{Ie(t.restoreScrollPosition)&&d>0&&self.scrollTo(h,f)}})}else As({key:"prevent-scroll",element:u,style:{overflow:"hidden"}})}),B(()=>{!Wf(n)||!Ie(t.enabled)||(document.addEventListener("wheel",a,{passive:!1}),document.addEventListener("touchstart",s,{passive:!1}),document.addEventListener("touchmove",l,{passive:!1}),U(()=>{document.removeEventListener("wheel",a),document.removeEventListener("touchstart",s),document.removeEventListener("touchmove",l)}))});let s=u=>{r=Os(u),o=null,i=null},a=u=>{let d=u.target,c=Ie(t.element),g=Yf(u),f=Math.abs(g[0])>Math.abs(g[1])?"x":"y",h=f==="x"?g[0]:g[1],y=Ds(d,f,h,c),m;c&&fo(c,d)?m=!y:m=!0,m&&u.cancelable&&u.preventDefault()},l=u=>{let d=Ie(t.element),c=u.target,g;if(u.touches.length===2)g=!Ie(t.allowPinchZoom);else{if(o==null||i===null){let f=Os(u).map((y,m)=>r[m]-y),h=Math.abs(f[0])>Math.abs(f[1])?"x":"y";o=h,i=h==="x"?f[0]:f[1]}if(c.type==="range")g=!1;else{let f=Ds(c,o,i,d);d&&fo(d,c)?g=!f:g=!0}}g&&u.cancelable&&u.preventDefault()}},Yf=e=>[e.deltaX,e.deltaY],Os=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Ds=(e,t,n,r)=>{let o=r!==null&&fo(r,e),[i,s]=jf(e,t,o?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(s)<1)},fo=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},Xf=Qf,Zf=Xf,Vl=ke();function Ul(){return Se(Vl)}function Et(){let e=Ul();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Gl=ke();function To(){let e=Se(Gl);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Hl=ke();function ft(){let e=Se(Hl);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Oo(e){let t,n=ft(),r=Et(),o=J({id:n.generateId(`item-${Ke()}`)},e),[i,s]=ee(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[a,l]=z(),[u,d]=z(),[c,g]=z(),f=()=>r.listState().selectionManager(),h=()=>s.id,y=()=>f().focusedKey()===h(),m=()=>{i.onSelect?.(),i.closeOnSelect&&setTimeout(()=>{r.close(!0)})};id({getItem:()=>({ref:()=>t,type:"item",key:h(),textValue:i.textValue??c()?.textContent??t?.textContent??"",disabled:i.disabled??!1})});let p=hl({key:h,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),b=k=>{ye(k,i.onPointerMove),k.pointerType==="mouse"&&(i.disabled?r.onItemLeave(k):(r.onItemEnter(k),k.defaultPrevented||(Pe(k.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(h()))))},w=k=>{ye(k,i.onPointerLeave),k.pointerType==="mouse"&&r.onItemLeave(k)},x=k=>{ye(k,i.onPointerUp),!i.disabled&&k.button===0&&m()},C=k=>{if(ye(k,i.onKeyDown),!k.repeat&&!i.disabled)switch(k.key){case"Enter":case" ":m();break}},P=E(()=>{if(i.indeterminate)return"mixed";if(i.checked!=null)return i.checked}),D=E(()=>({"data-indeterminate":i.indeterminate?"":void 0,"data-checked":i.checked&&!i.indeterminate?"":void 0,"data-disabled":i.disabled?"":void 0,"data-highlighted":y()?"":void 0})),F={isChecked:()=>i.checked,dataset:D,setLabelRef:g,generateId:Bn(()=>s.id),registerLabel:Ye(l),registerDescription:Ye(d)};return v(Gl.Provider,{value:F,get children(){return v(me,W({as:"div",ref(k){let q=qe(j=>t=j,i.ref);typeof q=="function"&&q(k)},get tabIndex(){return p.tabIndex()},get"aria-checked"(){return P()},get"aria-disabled"(){return i.disabled},get"aria-labelledby"(){return a()},get"aria-describedby"(){return u()},get"data-key"(){return p.dataKey()},get onPointerDown(){return Ee([i.onPointerDown,p.onPointerDown])},get onPointerUp(){return Ee([x,p.onPointerUp])},get onClick(){return Ee([i.onClick,p.onClick])},get onKeyDown(){return Ee([C,p.onKeyDown])},get onMouseDown(){return Ee([i.onMouseDown,p.onMouseDown])},get onFocus(){return Ee([i.onFocus,p.onFocus])},onPointerMove:b,onPointerLeave:w},D,s))}})}function jl(e){let t=J({closeOnSelect:!1},e),[n,r]=ee(t,["checked","defaultChecked","onChange","onSelect"]),o=Yu({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:s=>n.onChange?.(s),isDisabled:()=>r.disabled});return v(Oo,W({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{n.onSelect?.(),o.toggle()}},r))}var Jf=ke();function Or(){return Se(Jf)}var Kn={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>Kn.next(e==="ltr"?"rtl":"ltr",t)},Is={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function Wl(e){let t=ft(),n=Et(),r=Or(),{direction:o}=Rt(),i=J({id:t.generateId("trigger")},e),[s,a]=ee(i,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]),l=()=>t.value();r!==void 0&&(l=()=>t.value()??s.id,r.lastValue()===void 0&&r.setLastValue(l));let u=Er(()=>n.triggerRef(),()=>"button"),d=E(()=>u()==="a"&&n.triggerRef()?.getAttribute("href")!=null);B(at(()=>r?.value(),p=>{d()&&p===l()&&n.triggerRef()?.focus()}));let c=()=>{r!==void 0?n.isOpen()?r.value()===l()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},g=p=>{ye(p,s.onPointerDown),p.currentTarget.dataset.pointerType=p.pointerType,!s.disabled&&p.pointerType!=="touch"&&p.button===0&&c()},f=p=>{ye(p,s.onClick),s.disabled||p.currentTarget.dataset.pointerType==="touch"&&c()},h=p=>{if(ye(p,s.onKeyDown),!s.disabled){if(d())switch(p.key){case"Enter":case" ":return}switch(p.key){case"Enter":case" ":case Is.first(t.orientation()):p.stopPropagation(),p.preventDefault(),Nu(p.currentTarget),n.open("first"),r?.setAutoFocusMenu(!0),r?.setValue(l);break;case Is.last(t.orientation()):p.stopPropagation(),p.preventDefault(),n.open("last");break;case Kn.next(o(),t.orientation()):if(r===void 0)break;p.stopPropagation(),p.preventDefault(),r.nextMenu();break;case Kn.previous(o(),t.orientation()):if(r===void 0)break;p.stopPropagation(),p.preventDefault(),r.previousMenu();break}}},y=p=>{ye(p,s.onMouseOver),n.triggerRef()?.dataset.pointerType!=="touch"&&!s.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(l)},m=p=>{ye(p,s.onFocus),r!==void 0&&p.currentTarget.dataset.pointerType!=="touch"&&r.setValue(l)};return B(()=>U(n.registerTriggerId(s.id))),v(wo,W({ref(p){let b=qe(n.setTriggerRef,s.ref);typeof b=="function"&&b(p)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return s.id},get disabled(){return s.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return E(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return l()!==void 0&&r?.value()===l()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===l()||r.lastValue()===l()?0:-1:void 0},onPointerDown:g,onMouseOver:y,onClick:f,onKeyDown:h,onFocus:m,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),a))}var e0=ke();function Ql(){return Se(e0)}function Yl(e){let t,n=ft(),r=Et(),o=Or(),i=Ql(),{direction:s}=Rt(),a=J({id:n.generateId(`content-${Ke()}`)},e),[l,u]=ee(a,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]),d=0,c=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),g=zf({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);Kf({trapFocus:()=>c()&&r.isOpen(),onMountAutoFocus:w=>{o===void 0&&l.onOpenAutoFocus?.(w)},onUnmountAutoFocus:l.onCloseAutoFocus},()=>t);let f=w=>{if(Qe(w.currentTarget,w.target)&&(w.key==="Tab"&&r.isOpen()&&w.preventDefault(),o!==void 0&&w.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(w.key){case Kn.next(s(),n.orientation()):w.stopPropagation(),w.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case Kn.previous(s(),n.orientation()):if(w.currentTarget.hasAttribute("data-closed"))break;w.stopPropagation(),w.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},h=w=>{l.onEscapeKeyDown?.(w),o?.setAutoFocusMenu(!1),r.close(!0)},y=w=>{l.onFocusOutside?.(w),n.isModal()&&w.preventDefault()},m=w=>{ye(w,l.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},p=w=>{if(ye(w,l.onPointerMove),w.pointerType!=="mouse")return;let x=w.target,C=d!==w.clientX;Qe(w.currentTarget,x)&&C&&(r.setPointerDir(w.clientX>d?"right":"left"),d=w.clientX)};B(()=>U(r.registerContentId(l.id)));let b={ref:qe(w=>{r.setContentRef(w),t=w},l.ref),role:"menu",get id(){return l.id},get tabIndex(){return g.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:Ee([l.onKeyDown,g.onKeyDown,f]),onMouseDown:Ee([l.onMouseDown,g.onMouseDown]),onFocusIn:Ee([l.onFocusIn,g.onFocusIn]),onFocusOut:Ee([l.onFocusOut,g.onFocusOut]),onPointerEnter:m,onPointerMove:p,get"data-orientation"(){return n.orientation()}};return v(N,{get when(){return r.contentPresent()},get children(){return v(N,{get when(){return i===void 0||r.parentMenuContext()!=null},get fallback(){return v(me,W({as:"div"},()=>r.dataset(),b,u))},get children(){return v(Tl.Positioner,{get children(){return v(qf,W({get disableOutsidePointerEvents(){return E(()=>!!c())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return $r({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},l.style)},onEscapeKeyDown:h,onFocusOutside:y,get onDismiss(){return r.close}},()=>r.dataset(),b,u))}})}})}})}function t0(e){let t,n=ft(),r=Et(),[o,i]=ee(e,["ref"]);return Zf({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),v(Yl,W({ref(s){let a=qe(l=>{t=l},o.ref);typeof a=="function"&&a(s)}},i))}var Xl=ke();function n0(){let e=Se(Xl);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function Do(e){let t=ft(),n=J({id:t.generateId(`group-${Ke()}`)},e),[r,o]=z(),i={generateId:Bn(()=>n.id),registerLabelId:Ye(o)};return v(Xl.Provider,{value:i,get children(){return v(me,W({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function Zl(e){let t=n0(),n=J({id:t.generateId("label")},e),[r,o]=ee(n,["id"]);return B(()=>U(t.registerLabelId(r.id))),v(me,W({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function Jl(e){let t=Et(),n=J({children:"\u25BC"},e);return v(me,W({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function ea(e){return v(Oo,W({role:"menuitem",closeOnSelect:!0},e))}function ta(e){let t=To(),n=J({id:t.generateId("description")},e),[r,o]=ee(n,["id"]);return B(()=>U(t.registerDescription(r.id))),v(me,W({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function na(e){let t=To(),n=J({id:t.generateId("indicator")},e),[r,o]=ee(n,["forceMount"]);return v(N,{get when(){return r.forceMount||t.isChecked()},get children(){return v(me,W({as:"div"},()=>t.dataset(),o))}})}function ra(e){let t=To(),n=J({id:t.generateId("label")},e),[r,o]=ee(n,["ref","id"]);return B(()=>U(t.registerLabel(r.id))),v(me,W({as:"div",ref(i){let s=qe(t.setLabelRef,r.ref);typeof s=="function"&&s(i)},get id(){return r.id}},()=>t.dataset(),o))}function oa(e){let t=Et();return v(N,{get when(){return t.contentPresent()},get children(){return v(jr,e)}})}var ia=ke();function r0(){let e=Se(ia);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function sa(e){let n=ft().generateId(`radiogroup-${Ke()}`),r=J({id:n},e),[o,i]=ee(r,["value","defaultValue","onChange","disabled"]),[s,a]=Vn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:u=>o.onChange?.(u)}),l={isDisabled:()=>o.disabled,isSelectedValue:u=>u===s(),setSelectedValue:a};return v(ia.Provider,{value:l,get children(){return v(Do,i)}})}function la(e){let t=r0(),n=J({closeOnSelect:!1},e),[r,o]=ee(n,["value","onSelect"]);return v(Oo,W({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{r.onSelect?.(),t.setSelectedValue(r.value)}},o))}function o0(e,t,n){let r=e.split("-")[0],o=n.getBoundingClientRect(),i=[],s=t.clientX,a=t.clientY;switch(r){case"top":i.push([s,a+5]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]);break;case"right":i.push([s-5,a]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]);break;case"bottom":i.push([s,a-5]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]);break;case"left":i.push([s+5,a]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]);break}return i}function i0(e,t){return t?Bu([e.clientX,e.clientY],t):!1}function aa(e){let t=ft(),n=ll(),r=Ul(),o=Or(),i=Ql(),s=J({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[a,l]=ee(s,["open","defaultOpen","onOpenChange"]),u=0,d=null,c="right",[g,f]=z(),[h,y]=z(),[m,p]=z(),[b,w]=z(),[x,C]=z(!0),[P,D]=z(l.placement),[F,k]=z([]),[q,j]=z([]),{DomCollectionProvider:G}=od({items:q,onItemsChange:j}),se=Dl({open:()=>a.open,defaultOpen:()=>a.defaultOpen,onOpenChange:H=>a.onOpenChange?.(H)}),{present:oe}=yl({show:()=>t.forceMount()||se.isOpen(),element:()=>b()??null}),fe=Cd({selectionMode:"none",dataSource:q}),ce=H=>{C(H),se.open()},le=(H=!1)=>{se.close(),H&&r&&r.close(!0)},ue=H=>{C(H),se.toggle()},ge=()=>{let H=b();H&&(Pe(H),fe.selectionManager().setFocused(!0),fe.selectionManager().setFocusedKey(void 0))},Ce=()=>{i!=null?setTimeout(()=>ge()):ge()},_e=H=>{k(Te=>[...Te,H]);let Je=r?.registerNestedMenu(H);return()=>{k(Te=>oo(Te,H)),Je?.()}},be=H=>c===d?.side&&i0(H,d?.area),Fe=H=>{be(H)&&H.preventDefault()},O=H=>{be(H)||Ce()},pe=H=>{be(H)&&H.preventDefault()};Nf({isDisabled:()=>!(r==null&&se.isOpen()&&t.isModal()),targets:()=>[b(),...F()].filter(Boolean)}),B(()=>{let H=b();if(!H||!r)return;let Je=r.registerNestedMenu(H);U(()=>{Je()})}),B(()=>{r===void 0&&o?.registerMenu(t.value(),[b(),...F()])}),B(()=>{r!==void 0||o===void 0||(o.value()===t.value()?(m()?.focus(),o.autoFocusMenu()&&ce(!0)):le())}),B(()=>{r!==void 0||o===void 0||se.isOpen()&&o.setValue(t.value())}),U(()=>{r===void 0&&o?.unregisterMenu(t.value())});let At={dataset:E(()=>({"data-expanded":se.isOpen()?"":void 0,"data-closed":se.isOpen()?void 0:""})),isOpen:se.isOpen,contentPresent:oe,nestedMenus:F,currentPlacement:P,pointerGraceTimeoutId:()=>u,autoFocus:x,listState:()=>fe,parentMenuContext:()=>r,triggerRef:m,contentRef:b,triggerId:g,contentId:h,setTriggerRef:p,setContentRef:w,open:ce,close:le,toggle:ue,focusContent:Ce,onItemEnter:Fe,onItemLeave:O,onTriggerLeave:pe,setPointerDir:H=>c=H,setPointerGraceTimeoutId:H=>u=H,setPointerGraceIntent:H=>d=H,registerNestedMenu:_e,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:Ye(f),registerContentId:Ye(y)};return v(G,{get children(){return v(Vl.Provider,{value:At,get children(){return v(N,{when:i===void 0,get fallback(){return l.children},get children(){return v(Tl,W({anchorRef:m,contentRef:b,onCurrentPlacementChange:D},l))}})}})}})}function ca(e){let{direction:t}=Rt();return v(aa,W({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var s0={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function ua(e){let t=Et(),n=ft(),[r,o]=ee(e,["onFocusOutside","onKeyDown"]),{direction:i}=Rt();return v(Yl,W({onOpenAutoFocus:d=>{d.preventDefault()},onCloseAutoFocus:d=>{d.preventDefault()},onFocusOutside:d=>{r.onFocusOutside?.(d);let c=d.target;Qe(t.triggerRef(),c)||t.close()},onKeyDown:d=>{ye(d,r.onKeyDown);let c=Qe(d.currentTarget,d.target),g=s0.close(i(),n.orientation()).includes(d.key),f=t.parentMenuContext()!=null;c&&g&&f&&(t.close(),Pe(t.triggerRef()))}},o))}var Ps=["Enter"," "],l0={open:(e,t)=>e==="ltr"?[...Ps,t==="horizontal"?"ArrowRight":"ArrowDown"]:[...Ps,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function da(e){let t,n=ft(),r=Et(),o=J({id:n.generateId(`sub-trigger-${Ke()}`)},e),[i,s]=ee(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),a=null,l=()=>{De||(a&&self.clearTimeout(a),a=null)},{direction:u}=Rt(),d=()=>i.id,c=()=>{let w=r.parentMenuContext();if(w==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return w.listState().selectionManager()},g=()=>r.listState().collection(),f=()=>c().focusedKey()===d(),h=hl({key:d,selectionManager:c,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),y=w=>{ye(w,i.onClick),!r.isOpen()&&!i.disabled&&r.open(!0)},m=w=>{if(ye(w,i.onPointerMove),w.pointerType!=="mouse")return;let x=r.parentMenuContext();if(x?.onItemEnter(w),!w.defaultPrevented){if(i.disabled){x?.onItemLeave(w);return}!r.isOpen()&&!a&&(r.parentMenuContext()?.setPointerGraceIntent(null),a=self.setTimeout(()=>{r.open(!1),l()},100)),x?.onItemEnter(w),w.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),Pe(w.currentTarget),x?.listState().selectionManager().setFocused(!0),x?.listState().selectionManager().setFocusedKey(d()))}},p=w=>{if(ye(w,i.onPointerLeave),w.pointerType!=="mouse")return;l();let x=r.parentMenuContext(),C=r.contentRef();if(C){x?.setPointerGraceIntent({area:o0(r.currentPlacement(),w,C),side:r.currentPlacement().split("-")[0]}),self.clearTimeout(x?.pointerGraceTimeoutId());let P=self.setTimeout(()=>{x?.setPointerGraceIntent(null)},300);x?.setPointerGraceTimeoutId(P)}else{if(x?.onTriggerLeave(w),w.defaultPrevented)return;x?.setPointerGraceIntent(null)}x?.onItemLeave(w)},b=w=>{ye(w,i.onKeyDown),!w.repeat&&(i.disabled||l0.open(u(),n.orientation()).includes(w.key)&&(w.stopPropagation(),w.preventDefault(),c().setFocused(!1),c().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(g().getFirstKey())))};return B(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");let w=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:d(),textValue:i.textValue??t?.textContent??"",disabled:i.disabled??!1});U(w)}),B(at(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),w=>{U(()=>{self.clearTimeout(w),r.parentMenuContext()?.setPointerGraceIntent(null)})})),B(()=>U(r.registerTriggerId(i.id))),U(()=>{l()}),v(me,W({as:"div",ref(w){let x=qe(C=>{r.setTriggerRef(C),t=C},i.ref);typeof x=="function"&&x(w)},get id(){return i.id},role:"menuitem",get tabIndex(){return h.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return E(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return i.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return f()?"":void 0},get"data-disabled"(){return i.disabled?"":void 0},get onPointerDown(){return Ee([i.onPointerDown,h.onPointerDown])},get onPointerUp(){return Ee([i.onPointerUp,h.onPointerUp])},get onClick(){return Ee([y,h.onClick])},get onKeyDown(){return Ee([b,h.onKeyDown])},get onMouseDown(){return Ee([i.onMouseDown,h.onMouseDown])},get onFocus(){return Ee([i.onFocus,h.onFocus])},onPointerMove:m,onPointerLeave:p},()=>r.dataset(),s))}function a0(e){let t=Or(),n=`menu-${Ke()}`,r=J({id:n,modal:!0},e),[o,i]=ee(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),s=Dl({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:l=>o.onOpenChange?.(l)}),a={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??a.isModal(),forceMount:()=>o.forceMount??!1,generateId:Bn(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??t?.orientation()??"horizontal"};return v(Hl.Provider,{value:a,get children(){return v(aa,W({get open(){return s.isOpen()},get onOpenChange(){return s.setIsOpen}},i))}})}var c0={};Ar(c0,{Root:()=>Dr,Separator:()=>u0});function Dr(e){let t,n=J({orientation:"horizontal"},e),[r,o]=ee(n,["ref","orientation"]),i=Er(()=>t,()=>"hr");return v(me,W({as:"hr",ref(s){let a=qe(l=>t=l,r.ref);typeof a=="function"&&a(s)},get role(){return i()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var u0=Dr,xe={};Ar(xe,{Arrow:()=>Mo,CheckboxItem:()=>jl,Content:()=>fa,DropdownMenu:()=>d0,Group:()=>Do,GroupLabel:()=>Zl,Icon:()=>Jl,Item:()=>ea,ItemDescription:()=>ta,ItemIndicator:()=>na,ItemLabel:()=>ra,Portal:()=>oa,RadioGroup:()=>sa,RadioItem:()=>la,Root:()=>ga,Separator:()=>Dr,Sub:()=>ca,SubContent:()=>ua,SubTrigger:()=>da,Trigger:()=>Wl});function fa(e){let t=ft(),n=Et(),[r,o]=ee(e,["onCloseAutoFocus","onInteractOutside"]),i=!1;return v(t0,W({onCloseAutoFocus:l=>{r.onCloseAutoFocus?.(l),i||Pe(n.triggerRef()),i=!1,l.preventDefault()},onInteractOutside:l=>{r.onInteractOutside?.(l),(!t.isModal()||l.detail.isContextMenu)&&(i=!0)}},o))}function ga(e){let t=`dropdownmenu-${Ke()}`,n=J({id:t},e);return v(a0,n)}var d0=Object.assign(ga,{Arrow:Mo,CheckboxItem:jl,Content:fa,Group:Do,GroupLabel:Zl,Icon:Jl,Item:ea,ItemDescription:ta,ItemIndicator:na,ItemLabel:ra,Portal:oa,RadioGroup:sa,RadioItem:la,Separator:Dr,Sub:ca,SubContent:ua,SubTrigger:da,Trigger:Wl}),S={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},f0=R('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),g0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),h0=R('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),y0=R('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Io=R('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),m0=R('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),v0=R('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),p0=R('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),b0=R('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),w0=R('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),x0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),C0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),S0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),$0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ha=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),k0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),E0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),A0=R('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),M0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),T0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),O0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),D0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),I0=R('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function P0(){return f0()}function ya(){return g0()}function qn(){return h0()}function Fs(){return y0()}function Ls(){return Io()}function F0(){return(()=>{var e=Io();return e.style.setProperty("transform","rotate(90deg)"),e})()}function L0(){return(()=>{var e=Io();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function q0(){return m0()}function _0(){return v0()}function R0(){return p0()}function z0(){return b0()}function K0(){return w0()}function B0(){return x0()}function N0(){return C0()}function V0(){return S0()}function U0(){return $0()}function G0(e){return(()=>{var t=ha(),n=t.firstChild;return K(()=>M(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function H0(){return k0()}function j0(){return E0()}function W0(e){return[v(N,{get when(){return e.checked},get children(){var t=ha(),n=t.firstChild;return K(()=>M(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),v(N,{get when(){return!e.checked},get children(){var t=A0(),n=t.firstChild;return K(()=>M(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function Q0(){return M0()}function Y0(){return T0()}function X0(){return O0()}function Z0(){return D0()}function qs(){let e=Ke();return(()=>{var t=I0(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,i=o.firstChild,s=o.nextSibling,a=s.firstChild,l=s.nextSibling,u=l.nextSibling,d=u.firstChild,c=u.nextSibling,g=c.firstChild,f=c.nextSibling,h=f.nextSibling,y=h.firstChild,m=h.nextSibling,p=m.firstChild,b=m.nextSibling,w=b.nextSibling,x=w.firstChild,C=w.nextSibling,P=C.firstChild,D=C.nextSibling,F=D.nextSibling,k=F.firstChild,q=F.nextSibling,j=q.firstChild,G=q.nextSibling,se=G.nextSibling,oe=se.firstChild,fe=se.nextSibling,ce=fe.firstChild,le=fe.nextSibling,ue=le.nextSibling,ge=ue.firstChild,Ce=ue.nextSibling,_e=Ce.firstChild,be=Ce.nextSibling,Fe=be.firstChild,O=Fe.nextSibling,pe=O.nextSibling,te=pe.nextSibling,At=te.nextSibling,H=be.nextSibling,Je=H.firstChild,Te=H.nextSibling,Yt=Te.firstChild,Ge=Te.nextSibling,Mt=Ge.firstChild,zt=Mt.nextSibling,gt=zt.nextSibling,st=gt.firstChild,ht=st.nextSibling,I=ht.nextSibling,ae=I.nextSibling,Le=ae.nextSibling,de=Le.nextSibling,ie=de.nextSibling,he=ie.nextSibling,$e=he.nextSibling,ne=$e.nextSibling,yt=ne.nextSibling,mt=yt.nextSibling,et=Ge.nextSibling,Kt=et.firstChild,vt=et.nextSibling,Bt=vt.firstChild,pt=vt.nextSibling,Tt=pt.firstChild,jn=Tt.nextSibling,mn=pt.nextSibling,Wn=mn.firstChild,Xt=mn.nextSibling,Qn=Xt.firstChild,vn=Xt.nextSibling,pn=vn.firstChild,bn=pn.nextSibling,Zt=bn.nextSibling,Fo=Zt.nextSibling,Lo=Fo.nextSibling,qo=Lo.nextSibling,_o=qo.nextSibling,Ro=_o.nextSibling,zo=Ro.nextSibling,Ko=zo.nextSibling,Bo=Ko.nextSibling,No=Bo.nextSibling,Vo=No.nextSibling,Uo=Vo.nextSibling,Go=Uo.nextSibling,Ho=Go.nextSibling,jo=Ho.nextSibling,xa=jo.nextSibling;return M(n,"id",`a-${e}`),M(r,"fill",`url(#a-${e})`),M(i,"id",`am-${e}`),M(s,"id",`b-${e}`),M(a,"filter",`url(#am-${e})`),M(l,"mask",`url(#b-${e})`),M(d,"id",`ah-${e}`),M(c,"id",`k-${e}`),M(g,"filter",`url(#ah-${e})`),M(f,"mask",`url(#k-${e})`),M(y,"id",`ae-${e}`),M(m,"id",`j-${e}`),M(p,"filter",`url(#ae-${e})`),M(b,"mask",`url(#j-${e})`),M(x,"id",`ai-${e}`),M(C,"id",`i-${e}`),M(P,"filter",`url(#ai-${e})`),M(D,"mask",`url(#i-${e})`),M(k,"id",`aj-${e}`),M(q,"id",`h-${e}`),M(j,"filter",`url(#aj-${e})`),M(G,"mask",`url(#h-${e})`),M(oe,"id",`ag-${e}`),M(fe,"id",`g-${e}`),M(ce,"filter",`url(#ag-${e})`),M(le,"mask",`url(#g-${e})`),M(ge,"id",`af-${e}`),M(Ce,"id",`f-${e}`),M(_e,"filter",`url(#af-${e})`),M(be,"mask",`url(#f-${e})`),M(te,"id",`m-${e}`),M(At,"fill",`url(#m-${e})`),M(Je,"id",`ak-${e}`),M(Te,"id",`e-${e}`),M(Yt,"filter",`url(#ak-${e})`),M(Ge,"mask",`url(#e-${e})`),M(Mt,"id",`n-${e}`),M(zt,"fill",`url(#n-${e})`),M(st,"id",`r-${e}`),M(ht,"fill",`url(#r-${e})`),M(I,"id",`s-${e}`),M(ae,"fill",`url(#s-${e})`),M(Le,"id",`q-${e}`),M(de,"fill",`url(#q-${e})`),M(ie,"id",`p-${e}`),M(he,"fill",`url(#p-${e})`),M($e,"id",`o-${e}`),M(ne,"fill",`url(#o-${e})`),M(yt,"id",`l-${e}`),M(mt,"fill",`url(#l-${e})`),M(Kt,"id",`al-${e}`),M(vt,"id",`d-${e}`),M(Bt,"filter",`url(#al-${e})`),M(pt,"mask",`url(#d-${e})`),M(Tt,"id",`u-${e}`),M(jn,"fill",`url(#u-${e})`),M(Wn,"id",`ad-${e}`),M(Xt,"id",`c-${e}`),M(Qn,"filter",`url(#ad-${e})`),M(vn,"mask",`url(#c-${e})`),M(pn,"id",`t-${e}`),M(bn,"fill",`url(#t-${e})`),M(Zt,"id",`v-${e}`),M(Fo,"stroke",`url(#v-${e})`),M(Lo,"id",`aa-${e}`),M(qo,"stroke",`url(#aa-${e})`),M(_o,"id",`w-${e}`),M(Ro,"stroke",`url(#w-${e})`),M(zo,"id",`ac-${e}`),M(Ko,"stroke",`url(#ac-${e})`),M(Bo,"id",`ab-${e}`),M(No,"stroke",`url(#ab-${e})`),M(Vo,"id",`y-${e}`),M(Uo,"stroke",`url(#y-${e})`),M(Go,"id",`x-${e}`),M(Ho,"stroke",`url(#x-${e})`),M(jo,"id",`z-${e}`),M(xa,"stroke",`url(#z-${e})`),t})()}var J0=R('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),eg=R('<button title="Copy object to clipboard">'),tg=R('<button title="Remove all items"aria-label="Remove all items">'),ng=R('<button title="Delete item"aria-label="Delete item">'),rg=R('<button title="Toggle value"aria-label="Toggle value">'),og=R('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),Pn=R("<div>"),ig=R("<div><button> <span></span> <span> "),sg=R("<input>"),_s=R("<span>"),lg=R("<div><span>:"),ag=R("<div><div><button> [<!>...<!>]");function cg(e,t){let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var Rs=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?yn(n):hn(n));return(()=>{var o=J0();return K(()=>T(o,L(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},ug=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?yn(n):hn(n)),[o,i]=z("NoCopy");return(()=>{var s=eg();return Gr(s,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(Bi(e.value)).then(()=>{i("SuccessCopy"),setTimeout(()=>{i("NoCopy")},1500)},a=>{i("ErrorCopy"),setTimeout(()=>{i("NoCopy")},1500)})}:void 0,!0),$(s,v(xi,{get children(){return[v(ur,{get when(){return o()==="NoCopy"},get children(){return v(V0,{})}}),v(ur,{get when(){return o()==="SuccessCopy"},get children(){return v(G0,{get theme(){return t()}})}}),v(ur,{get when(){return o()==="ErrorCopy"},get children(){return v(H0,{})}})]}})),K(a=>{var l=r().actionButton,u=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return l!==a.e&&T(s,a.e=l),u!==a.t&&M(s,"aria-label",a.t=u),a},{e:void 0,t:void 0}),s})()},dg=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?yn(n):hn(n)),o=V().client;return(()=>{var i=tg();return i.$$click=()=>{let s=e.activeQuery.state.data,a=Ot(s,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,a)},$(i,v(j0,{})),K(()=>T(i,r().actionButton)),i})()},zs=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?yn(n):hn(n)),o=V().client;return(()=>{var i=ng();return i.$$click=()=>{let s=e.activeQuery.state.data,a=tn(s,e.dataPath);o.setQueryData(e.activeQuery.queryKey,a)},$(i,v(ya,{})),K(()=>T(i,L(r().actionButton))),i})()},fg=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?yn(n):hn(n)),o=V().client;return(()=>{var i=rg();return i.$$click=()=>{let s=e.activeQuery.state.data,a=Ot(s,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,a)},$(i,v(W0,{get theme(){return t()},get checked(){return e.value}})),K(()=>T(i,L(r().actionButton,n`
          width: ${S.size[3.5]};
          height: ${S.size[3.5]};
        `))),i})()};function Ks(e){return Symbol.iterator in e}function Pt(e){let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?yn(n):hn(n)),o=V().client,[i,s]=z((e.defaultExpanded||[]).includes(e.label)),a=()=>s(h=>!h),[l,u]=z([]),d=E(()=>Array.isArray(e.value)?e.value.map((h,y)=>({label:y.toString(),value:h})):e.value!==null&&typeof e.value=="object"&&Ks(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([h,y])=>({label:h,value:y})):Array.from(e.value,(h,y)=>({label:y.toString(),value:h})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([h,y])=>({label:h,value:y})):[]),c=E(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&Ks(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),g=E(()=>cg(d(),100)),f=e.dataPath??[];return(()=>{var h=Pn();return $(h,v(N,{get when(){return g().length},get children(){return[(()=>{var y=ig(),m=y.firstChild,p=m.firstChild,b=p.nextSibling,w=b.nextSibling,x=w.nextSibling,C=x.firstChild;return m.$$click=()=>a(),$(m,v(Rs,{get expanded(){return i()}}),p),$(b,()=>e.label),$(x,()=>String(c()).toLowerCase()==="iterable"?"(Iterable) ":"",C),$(x,()=>d().length,C),$(x,()=>d().length>1?"items":"item",null),$(y,v(N,{get when(){return e.editable},get children(){var P=Pn();return $(P,v(ug,{get value(){return e.value}}),null),$(P,v(N,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return v(zs,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),$(P,v(N,{get when(){return c()==="array"&&e.activeQuery!==void 0},get children(){return v(dg,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),$(P,v(N,{get when(){return E(()=>!!e.onEdit)()&&!Wr(e.value).meta},get children(){var D=og();return D.$$click=()=>{e.onEdit?.()},$(D,v(U0,{})),K(()=>T(D,r().actionButton)),D}}),null),K(()=>T(P,r().actions)),P}}),null),K(P=>{var D=r().expanderButtonContainer,F=r().expanderButton,k=r().info;return D!==P.e&&T(y,P.e=D),F!==P.t&&T(m,P.t=F),k!==P.a&&T(x,P.a=k),P},{e:void 0,t:void 0,a:void 0}),y})(),v(N,{get when(){return i()},get children(){return[v(N,{get when(){return g().length===1},get children(){var y=Pn();return $(y,v(vr,{get each(){return d()},by:m=>m.label,children:m=>v(Pt,{get defaultExpanded(){return e.defaultExpanded},get label(){return m().label},get value(){return m().value},get editable(){return e.editable},get dataPath(){return[...f,m().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return c()==="array"||c()==="Iterable"||c()==="object"}})})),K(()=>T(y,r().subEntry)),y}}),v(N,{get when(){return g().length>1},get children(){var y=Pn();return $(y,v(wi,{get each(){return g()},children:(m,p)=>(()=>{var b=ag(),w=b.firstChild,x=w.firstChild,C=x.firstChild,P=C.nextSibling,D=P.nextSibling,F=D.nextSibling;return F.nextSibling,x.$$click=()=>u(k=>k.includes(p)?k.filter(q=>q!==p):[...k,p]),$(x,v(Rs,{get expanded(){return l().includes(p)}}),C),$(x,p*100,P),$(x,p*100+100-1,F),$(w,v(N,{get when(){return l().includes(p)},get children(){var k=Pn();return $(k,v(vr,{get each(){return m()},by:q=>q.label,children:q=>v(Pt,{get defaultExpanded(){return e.defaultExpanded},get label(){return q().label},get value(){return q().value},get editable(){return e.editable},get dataPath(){return[...f,q().label]},get activeQuery(){return e.activeQuery}})})),K(()=>T(k,r().subEntry)),k}}),null),K(k=>{var q=r().entry,j=r().expanderButton;return q!==k.e&&T(w,k.e=q),j!==k.t&&T(x,k.t=j),k},{e:void 0,t:void 0}),b})()})),K(()=>T(y,r().subEntry)),y}})]}})]}}),null),$(h,v(N,{get when(){return g().length===0},get children(){var y=lg(),m=y.firstChild,p=m.firstChild;return $(m,()=>e.label,p),$(y,v(N,{get when(){return E(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(c()==="string"||c()==="number"||c()==="boolean")},get fallback(){return(()=>{var b=_s();return $(b,()=>On(e.value)),K(()=>T(b,r().value)),b})()},get children(){return[v(N,{get when(){return E(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(c()==="string"||c()==="number")},get children(){var b=sg();return b.addEventListener("change",w=>{let x=e.activeQuery.state.data,C=Ot(x,f,c()==="number"?w.target.valueAsNumber:w.target.value);o.setQueryData(e.activeQuery.queryKey,C)}),K(w=>{var x=c()==="number"?"number":"text",C=L(r().value,r().editableInput);return x!==w.e&&M(b,"type",w.e=x),C!==w.t&&T(b,w.t=C),w},{e:void 0,t:void 0}),K(()=>b.value=e.value),b}}),v(N,{get when(){return c()==="boolean"},get children(){var b=_s();return $(b,v(fg,{get activeQuery(){return e.activeQuery},dataPath:f,get value(){return e.value}}),null),$(b,()=>On(e.value),null),K(()=>T(b,L(r().value,r().actions,r().editableInput))),b}})]}}),null),$(y,v(N,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return v(zs,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),K(b=>{var w=r().row,x=r().label;return w!==b.e&&T(y,b.e=w),x!==b.t&&T(m,b.t=x),b},{e:void 0,t:void 0}),y}}),null),K(()=>T(h,r().entry)),h})()}var ma=(e,t)=>{let{colors:n,font:r,size:o,border:i}=S,s=(a,l)=>e==="light"?a:l;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${s(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${s(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${s(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${s(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${i.radius.xs};
      background-color: ${s(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${s(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${s(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${s(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},hn=e=>ma("light",e),yn=e=>ma("dark",e);Tn(["click"]);var gg=R('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),Hn=R("<div>"),hg=R('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),yg=R("<select name=tsqd-queries-filter-sort>"),mg=R("<select name=tsqd-mutations-filter-sort>"),vg=R("<span>Asc"),pg=R("<span>Desc"),bg=R('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),wg=R("<div>Settings"),xg=R("<span>Position"),Cg=R("<span>Top"),Sg=R("<span>Bottom"),$g=R("<span>Left"),kg=R("<span>Right"),Eg=R("<span>Theme"),Ag=R("<span>Light"),Mg=R("<span>Dark"),Tg=R("<span>System"),Og=R("<div><div class=tsqd-queries-container>"),Dg=R("<div><div class=tsqd-mutations-container>"),Ig=R('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),Bs=R("<option>Sort by "),Pg=R("<div class=tsqd-query-disabled-indicator>disabled"),va=R("<button><div></div><code class=tsqd-query-hash>"),Fg=R("<div role=tooltip id=tsqd-status-tooltip>"),Lg=R("<span>"),qg=R("<button><span></span><span>"),_g=R("<button><span></span> Error"),Rg=R('<div><span></span>Trigger Error<select><option value=""disabled selected>'),zg=R('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Kg=R("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),Bg=R('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Ng=R("<option>"),Vg=R('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[Ne,Ir]=z(null),[Ft,pa]=z(null),[rt,Po]=z(0),[ln,Ns]=z(!1),gh=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?Ze(n):Xe(n)),o=ho(),i=E(()=>V().buttonPosition||Uc),s=E(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:V().initialIsOpen||Gc),a=E(()=>e.localStore.position||V().position||no),l;B(()=>{let d=l.parentElement,c=e.localStore.height||Vs,g=e.localStore.width||Us,f=a();d.style.setProperty("--tsqd-panel-height",`${f==="top"?"-":""}${c}px`),d.style.setProperty("--tsqd-panel-width",`${f==="left"?"-":""}${g}px`)}),wt(()=>{let d=()=>{let c=l.parentElement,g=getComputedStyle(c).fontSize;c.style.setProperty("--tsqd-font-size",g)};d(),self.addEventListener("focus",d),U(()=>{self.removeEventListener("focus",d)})});let u=E(()=>e.localStore.pip_open??"false");return[v(N,{get when(){return E(()=>!!o().pipWindow)()&&u()=="true"},get children(){return v(jr,{get mount(){return o().pipWindow?.document.body},get children(){return v(Ug,{get children(){return v(ba,e)}})}})}}),(()=>{var d=Hn(),c=l;return typeof c=="function"?Nt(c,d):l=d,$(d,v(rs,{name:"tsqd-panel-transition",get children(){return v(N,{get when(){return E(()=>!!(s()&&!o().pipWindow))()&&u()=="false"},get children(){return v(Gg,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),$(d,v(rs,{name:"tsqd-button-transition",get children(){return v(N,{get when(){return!s()},get children(){var g=gg(),f=g.firstChild,h=f.nextSibling;return $(f,v(qs,{})),h.$$click=()=>e.setLocalStore("open","true"),$(h,v(qs,{})),K(()=>T(g,L(r().devtoolsBtn,r()[`devtoolsBtn-position-${i()}`],"tsqd-open-btn-container"))),g}})}}),null),K(()=>T(d,L(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${a()==="top"||a()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${i()==="relative"?"none;":i()==="top-left"?"translateX(-72px);":i()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),d})()]},Ug=e=>{let t=ho(),n=Ae(),r=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,o=E(()=>n()==="dark"?Ze(r):Xe(r)),i=()=>{let{colors:s}=S,a=(l,u)=>n()==="dark"?u:l;return rt()<Ht?r`
        flex-direction: column;
        background-color: ${a(s.gray[300],s.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${a(s.gray[200],s.darkGray[900])};
    `};return B(()=>{let s=t().pipWindow,a=()=>{s&&Po(s.innerWidth)};s&&(s.addEventListener("resize",a),a()),U(()=>{s&&s.removeEventListener("resize",a)})}),(()=>{var s=Hn();return s.style.setProperty("--tsqd-font-size","16px"),s.style.setProperty("max-height","100vh"),s.style.setProperty("height","100vh"),s.style.setProperty("width","100vw"),$(s,()=>e.children),K(()=>T(s,L(o().panel,i(),{[r`
            min-width: min-content;
          `]:rt()<go},"tsqd-main-panel"))),s})()},hh=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?Ze(n):Xe(n)),o;wt(()=>{Ys(o,({width:s},a)=>{a===o&&Po(s)})});let i=()=>{let{colors:s}=S,a=(l,u)=>t()==="dark"?u:l;return rt()<Ht?n`
        flex-direction: column;
        background-color: ${a(s.gray[300],s.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${a(s.gray[200],s.darkGray[900])};
    `};return(()=>{var s=Hn(),a=o;return typeof a=="function"?Nt(a,s):o=s,s.style.setProperty("--tsqd-font-size","16px"),$(s,()=>e.children),K(()=>T(s,L(r().parentPanel,i(),{[n`
            min-width: min-content;
          `]:rt()<go},"tsqd-main-panel"))),s})()},Gg=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?Ze(n):Xe(n)),[o,i]=z(!1),s=E(()=>e.localStore.position||V().position||no),a=d=>{let c=d.currentTarget.parentElement;if(!c)return;i(!0);let{height:g,width:f}=c.getBoundingClientRect(),h=d.clientX,y=d.clientY,m=0,p=Qr(3.5),b=Qr(12),w=C=>{if(C.preventDefault(),s()==="left"||s()==="right"){let P=s()==="right"?h-C.clientX:C.clientX-h;m=Math.round(f+P),m<b&&(m=b),e.setLocalStore("width",String(Math.round(m)));let D=c.getBoundingClientRect().width;Number(e.localStore.width)<D&&e.setLocalStore("width",String(D))}else{let P=s()==="bottom"?y-C.clientY:C.clientY-y;m=Math.round(g+P),m<p&&(m=p,Ir(null)),e.setLocalStore("height",String(Math.round(m)))}},x=()=>{o()&&i(!1),document.removeEventListener("mousemove",w,!1),document.removeEventListener("mouseUp",x,!1)};document.addEventListener("mousemove",w,!1),document.addEventListener("mouseup",x,!1)},l;wt(()=>{Ys(l,({width:d},c)=>{c===l&&Po(d)})}),B(()=>{let d=l.parentElement?.parentElement?.parentElement;if(!d)return;let c=e.localStore.position||no,g=Ni("padding",c),f=e.localStore.position==="left"||e.localStore.position==="right",h=(({padding:y,paddingTop:m,paddingBottom:p,paddingLeft:b,paddingRight:w})=>({padding:y,paddingTop:m,paddingBottom:p,paddingLeft:b,paddingRight:w}))(d.style);d.style[g]=`${f?e.localStore.width:e.localStore.height}px`,U(()=>{Object.entries(h).forEach(([y,m])=>{d.style[y]=m})})});let u=()=>{let{colors:d}=S,c=(g,f)=>t()==="dark"?f:g;return rt()<Ht?n`
        flex-direction: column;
        background-color: ${c(d.gray[300],d.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${c(d.gray[200],d.darkGray[900])};
    `};return(()=>{var d=hg(),c=d.firstChild,g=c.nextSibling,f=l;return typeof f=="function"?Nt(f,d):l=d,c.$$mousedown=a,g.$$click=()=>e.setLocalStore("open","false"),$(g,v(qn,{})),$(d,v(ba,e),null),K(h=>{var y=L(r().panel,r()[`panel-position-${s()}`],u(),{[n`
            min-width: min-content;
          `]:rt()<go&&(s()==="right"||s()==="left")},"tsqd-main-panel"),m=s()==="bottom"||s()==="top"?`${e.localStore.height||Vs}px`:"auto",p=s()==="right"||s()==="left"?`${e.localStore.width||Us}px`:"auto",b=L(r().dragHandle,r()[`dragHandle-position-${s()}`],"tsqd-drag-handle"),w=L(r().closeBtn,r()[`closeBtn-position-${s()}`],"tsqd-minimize-btn");return y!==h.e&&T(d,h.e=y),m!==h.t&&((h.t=m)!=null?d.style.setProperty("height",m):d.style.removeProperty("height")),p!==h.a&&((h.a=p)!=null?d.style.setProperty("width",p):d.style.removeProperty("width")),b!==h.o&&T(c,h.o=b),w!==h.i&&T(g,h.i=w),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),d})()},ba=e=>{Zg(),Jg();let t,n=Ae(),r=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,o=E(()=>n()==="dark"?Ze(r):Xe(r)),i=ho(),[s,a]=z("queries"),l=E(()=>e.localStore.sort||jc),u=E(()=>Number(e.localStore.sortOrder)||Qi),d=E(()=>e.localStore.mutationSort||Wc),c=E(()=>Number(e.localStore.mutationSortOrder)||Qi),g=E(()=>fr[l()]),f=E(()=>gr[d()]),h=E(()=>V().onlineManager),y=E(()=>V().client.getQueryCache()),m=E(()=>V().client.getMutationCache()),p=Me(D=>D().getAll().length,!1),b=E(at(()=>[p(),e.localStore.filter,l(),u()],()=>{let D=y().getAll(),F=e.localStore.filter?D.filter(q=>Yi(q.queryHash,e.localStore.filter||"").passed):[...D];return g()?F.sort((q,j)=>g()(q,j)*u()):F})),w=nt(D=>D().getAll().length,!1),x=E(at(()=>[w(),e.localStore.mutationFilter,d(),c()],()=>{let D=m().getAll(),F=e.localStore.mutationFilter?D.filter(q=>{let j=`${q.options.mutationKey?JSON.stringify(q.options.mutationKey)+" - ":""}${new Date(q.state.submittedAt).toLocaleString()}`;return Yi(j,e.localStore.mutationFilter||"").passed}):[...D];return f()?F.sort((q,j)=>f()(q,j)*c()):F})),C=D=>{e.setLocalStore("position",D)},P=D=>{let k=getComputedStyle(t).getPropertyValue("--tsqd-font-size");D.style.setProperty("--tsqd-font-size",k)};return[(()=>{var D=Ig(),F=D.firstChild,k=F.firstChild,q=k.firstChild,j=q.firstChild,G=j.nextSibling,se=G.firstChild,oe=F.nextSibling,fe=oe.firstChild,ce=fe.firstChild,le=ce.firstChild,ue=ce.nextSibling,ge=ue.nextSibling,Ce=fe.nextSibling,_e=Ce.firstChild,be=_e.nextSibling,Fe=t;return typeof Fe=="function"?Nt(Fe,D):t=D,q.$$click=()=>{if(!i().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},$(G,()=>V().queryFlavor,se),$(G,()=>V().version,null),$(k,v(We.Root,{get class(){return L(o().viewToggle)},get value(){return s()},onChange:O=>{a(O),Ir(null),pa(null)},get children(){return[v(We.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[v(We.ItemInput,{}),v(We.ItemControl,{get children(){return v(We.ItemIndicator,{})}}),v(We.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),v(We.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[v(We.ItemInput,{}),v(We.ItemControl,{get children(){return v(We.ItemIndicator,{})}}),v(We.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),$(F,v(N,{get when(){return s()==="queries"},get children(){return v(Wg,{})}}),null),$(F,v(N,{get when(){return s()==="mutations"},get children(){return v(Qg,{})}}),null),$(ce,v(P0,{}),le),le.$$input=O=>{s()==="queries"?e.setLocalStore("filter",O.currentTarget.value):e.setLocalStore("mutationFilter",O.currentTarget.value)},$(ue,v(N,{get when(){return s()==="queries"},get children(){var O=yg();return O.addEventListener("change",pe=>{e.setLocalStore("sort",pe.currentTarget.value)}),$(O,()=>Object.keys(fr).map(pe=>(()=>{var te=Bs();return te.firstChild,te.value=pe,$(te,pe,null),te})())),K(()=>O.value=l()),O}}),null),$(ue,v(N,{get when(){return s()==="mutations"},get children(){var O=mg();return O.addEventListener("change",pe=>{e.setLocalStore("mutationSort",pe.currentTarget.value)}),$(O,()=>Object.keys(gr).map(pe=>(()=>{var te=Bs();return te.firstChild,te.value=pe,$(te,pe,null),te})())),K(()=>O.value=d()),O}}),null),$(ue,v(qn,{}),null),ge.$$click=()=>{s()==="queries"?e.setLocalStore("sortOrder",String(u()*-1)):e.setLocalStore("mutationSortOrder",String(c()*-1))},$(ge,v(N,{get when(){return(s()==="queries"?u():c())===1},get children(){return[vg(),v(Fs,{})]}}),null),$(ge,v(N,{get when(){return(s()==="queries"?u():c())===-1},get children(){return[pg(),v(Ls,{})]}}),null),_e.$$click=()=>{s()==="queries"?y().clear():m().clear()},$(_e,v(ya,{})),be.$$click=()=>{ln()?(h().setOnline(!0),Ns(!1)):(h().setOnline(!1),Ns(!0))},$(be,(()=>{var O=E(()=>!!ln());return()=>O()?v(K0,{}):v(z0,{})})()),$(Ce,v(N,{get when(){return E(()=>!i().pipWindow)()&&!i().disabled},get children(){var O=bg();return O.$$click=()=>{i().requestPipWindow(Number(self.innerWidth),Number(e.localStore.height??500))},$(O,v(N0,{})),K(()=>T(O,L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),O}}),null),$(Ce,v(xe.Root,{gutter:4,get children(){return[v(xe.Trigger,{get class(){return L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return v(B0,{})}}),v(xe.Portal,{ref:O=>P(O),get mount(){return E(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return v(xe.Content,{get class(){return L(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var O=wg();return K(()=>T(O,L(o().settingsMenuHeader,"tsqd-settings-menu-header"))),O})(),v(N,{get when(){return!e.showPanelViewOnly},get children(){return v(xe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[v(xe.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[xg(),v(qn,{})]}}),v(xe.Portal,{ref:O=>P(O),get mount(){return E(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return v(xe.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[v(xe.Item,{onSelect:()=>{C("top")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Cg(),v(Fs,{})]}}),v(xe.Item,{onSelect:()=>{C("bottom")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Sg(),v(Ls,{})]}}),v(xe.Item,{onSelect:()=>{C("left")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[$g(),v(F0,{})]}}),v(xe.Item,{onSelect:()=>{C("right")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[kg(),v(L0,{})]}})]}})}})]}})}}),v(xe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[v(xe.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Eg(),v(qn,{})]}}),v(xe.Portal,{ref:O=>P(O),get mount(){return E(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return v(xe.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[v(xe.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.theme_preference==="light"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ag(),v(q0,{})]}}),v(xe.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.theme_preference==="dark"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Mg(),v(_0,{})]}}),v(xe.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.theme_preference==="system"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Tg(),v(R0,{})]}})]}})}})]}})]}})}})]}}),null),$(D,v(N,{get when(){return s()==="queries"},get children(){var O=Og(),pe=O.firstChild;return $(pe,v(vr,{by:te=>te.queryHash,get each(){return b()},children:te=>v(Hg,{get query(){return te()}})})),K(()=>T(O,L(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),O}}),null),$(D,v(N,{get when(){return s()==="mutations"},get children(){var O=Dg(),pe=O.firstChild;return $(pe,v(vr,{by:te=>te.mutationId,get each(){return x()},children:te=>v(jg,{get mutation(){return te()}})})),K(()=>T(O,L(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),O}}),null),K(O=>{var pe=L(o().queriesContainer,rt()<Ht&&(Ne()||Ft())&&r`
              height: 50%;
              max-height: 50%;
            `,rt()<Ht&&!(Ne()||Ft())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),te=L(o().row,"tsqd-header"),At=o().logoAndToggleContainer,H=L(o().logo,"tsqd-text-logo-container"),Je=L(o().tanstackLogo,"tsqd-text-logo-tanstack"),Te=L(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),Yt=L(o().row,"tsqd-filters-actions-container"),Ge=L(o().filtersContainer,"tsqd-filters-container"),Mt=L(o().filterInput,"tsqd-query-filter-textfield-container"),zt=L("tsqd-query-filter-textfield"),gt=L(o().filterSelect,"tsqd-query-filter-sort-container"),st=`Sort order ${(s()==="queries"?u():c())===-1?"descending":"ascending"}`,ht=(s()==="queries"?u():c())===-1,I=L(o().actionsContainer,"tsqd-actions-container"),ae=L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),Le=`Clear ${s()} cache`,de=L(o().actionsBtn,ln()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),ie=`${ln()?"Unset offline mocking behavior":"Mock offline behavior"}`,he=ln(),$e=`${ln()?"Unset offline mocking behavior":"Mock offline behavior"}`;return pe!==O.e&&T(D,O.e=pe),te!==O.t&&T(F,O.t=te),At!==O.a&&T(k,O.a=At),H!==O.o&&T(q,O.o=H),Je!==O.i&&T(j,O.i=Je),Te!==O.n&&T(G,O.n=Te),Yt!==O.s&&T(oe,O.s=Yt),Ge!==O.h&&T(fe,O.h=Ge),Mt!==O.r&&T(ce,O.r=Mt),zt!==O.d&&T(le,O.d=zt),gt!==O.l&&T(ue,O.l=gt),st!==O.u&&M(ge,"aria-label",O.u=st),ht!==O.c&&M(ge,"aria-pressed",O.c=ht),I!==O.w&&T(Ce,O.w=I),ae!==O.m&&T(_e,O.m=ae),Le!==O.f&&M(_e,"title",O.f=Le),de!==O.y&&T(be,O.y=de),ie!==O.g&&M(be,"aria-label",O.g=ie),he!==O.p&&M(be,"aria-pressed",O.p=he),$e!==O.b&&M(be,"title",O.b=$e),O},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),K(()=>le.value=s()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),D})(),v(N,{get when(){return E(()=>s()==="queries")()&&Ne()},get children(){return v(Yg,{})}}),v(N,{get when(){return E(()=>s()==="mutations")()&&Ft()},get children(){return v(Xg,{})}})]},Hg=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?Ze(n):Xe(n)),{colors:o,alpha:i}=S,s=(f,h)=>t()==="dark"?h:f,a=Me(f=>f().find({queryKey:e.query.queryKey})?.state,!0,f=>f.query.queryHash===e.query.queryHash),l=Me(f=>f().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,f=>f.query.queryHash===e.query.queryHash),u=Me(f=>f().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,f=>f.query.queryHash===e.query.queryHash),d=Me(f=>f().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,f=>f.query.queryHash===e.query.queryHash),c=E(()=>Vi({queryState:a(),observerCount:d(),isStale:u()})),g=()=>c()==="gray"?n`
        background-color: ${s(o[c()][200],o[c()][700])};
        color: ${s(o[c()][700],o[c()][300])};
      `:n`
      background-color: ${s(o[c()][200]+i[80],o[c()][900])};
      color: ${s(o[c()][800],o[c()][300])};
    `;return v(N,{get when(){return a()},get children(){var f=va(),h=f.firstChild,y=h.nextSibling;return f.$$click=()=>Ir(e.query.queryHash===Ne()?null:e.query.queryHash),$(h,d),$(y,()=>e.query.queryHash),$(f,v(N,{get when(){return l()},get children(){return Pg()}}),null),K(m=>{var p=L(r().queryRow,Ne()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),b=`Query key ${e.query.queryHash}`,w=L(g(),"tsqd-query-observer-count");return p!==m.e&&T(f,m.e=p),b!==m.t&&M(f,"aria-label",m.t=b),w!==m.a&&T(h,m.a=w),m},{e:void 0,t:void 0,a:void 0}),f}})},jg=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?Ze(n):Xe(n)),{colors:o,alpha:i}=S,s=(g,f)=>t()==="dark"?f:g,a=nt(g=>g().getAll().find(y=>y.mutationId===e.mutation.mutationId)?.state),l=nt(g=>{let h=g().getAll().find(y=>y.mutationId===e.mutation.mutationId);return h?h.state.isPaused:!1}),u=nt(g=>{let h=g().getAll().find(y=>y.mutationId===e.mutation.mutationId);return h?h.state.status:"idle"}),d=E(()=>Ut({isPaused:l(),status:u()})),c=()=>d()==="gray"?n`
        background-color: ${s(o[d()][200],o[d()][700])};
        color: ${s(o[d()][700],o[d()][300])};
      `:n`
      background-color: ${s(o[d()][200]+i[80],o[d()][900])};
      color: ${s(o[d()][800],o[d()][300])};
    `;return v(N,{get when(){return a()},get children(){var g=va(),f=g.firstChild,h=f.nextSibling;return g.$$click=()=>{pa(e.mutation.mutationId===Ft()?null:e.mutation.mutationId)},$(f,v(N,{get when(){return d()==="purple"},get children(){return v(Z0,{})}}),null),$(f,v(N,{get when(){return d()==="green"},get children(){return v(Q0,{})}}),null),$(f,v(N,{get when(){return d()==="red"},get children(){return v(X0,{})}}),null),$(f,v(N,{get when(){return d()==="yellow"},get children(){return v(Y0,{})}}),null),$(h,v(N,{get when(){return e.mutation.options.mutationKey},get children(){return[E(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),$(h,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),K(y=>{var m=L(r().queryRow,Ft()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),p=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=L(c(),"tsqd-query-observer-count");return m!==y.e&&T(g,y.e=m),p!==y.t&&M(g,"aria-label",y.t=p),b!==y.a&&T(f,y.a=b),y},{e:void 0,t:void 0,a:void 0}),g}})},Wg=()=>{let e=Me(l=>l().getAll().filter(u=>Vt(u)==="stale").length),t=Me(l=>l().getAll().filter(u=>Vt(u)==="fresh").length),n=Me(l=>l().getAll().filter(u=>Vt(u)==="fetching").length),r=Me(l=>l().getAll().filter(u=>Vt(u)==="paused").length),o=Me(l=>l().getAll().filter(u=>Vt(u)==="inactive").length),i=Ae(),s=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,a=E(()=>i()==="dark"?Ze(s):Xe(s));return(()=>{var l=Hn();return $(l,v(St,{label:"Fresh",color:"green",get count(){return t()}}),null),$(l,v(St,{label:"Fetching",color:"blue",get count(){return n()}}),null),$(l,v(St,{label:"Paused",color:"purple",get count(){return r()}}),null),$(l,v(St,{label:"Stale",color:"yellow",get count(){return e()}}),null),$(l,v(St,{label:"Inactive",color:"gray",get count(){return o()}}),null),K(()=>T(l,L(a().queryStatusContainer,"tsqd-query-status-container"))),l})()},Qg=()=>{let e=nt(a=>a().getAll().filter(l=>Ut({isPaused:l.state.isPaused,status:l.state.status})==="green").length),t=nt(a=>a().getAll().filter(l=>Ut({isPaused:l.state.isPaused,status:l.state.status})==="yellow").length),n=nt(a=>a().getAll().filter(l=>Ut({isPaused:l.state.isPaused,status:l.state.status})==="purple").length),r=nt(a=>a().getAll().filter(l=>Ut({isPaused:l.state.isPaused,status:l.state.status})==="red").length),o=Ae(),i=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,s=E(()=>o()==="dark"?Ze(i):Xe(i));return(()=>{var a=Hn();return $(a,v(St,{label:"Paused",color:"purple",get count(){return n()}}),null),$(a,v(St,{label:"Pending",color:"yellow",get count(){return t()}}),null),$(a,v(St,{label:"Success",color:"green",get count(){return e()}}),null),$(a,v(St,{label:"Error",color:"red",get count(){return r()}}),null),K(()=>T(a,L(s().queryStatusContainer,"tsqd-query-status-container"))),a})()},St=e=>{let t=Ae(),n=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,r=E(()=>t()==="dark"?Ze(n):Xe(n)),{colors:o,alpha:i}=S,s=(f,h)=>t()==="dark"?h:f,a,[l,u]=z(!1),[d,c]=z(!1),g=E(()=>!(Ne()&&rt()<Vc&&rt()>Ht||rt()<Ht));return(()=>{var f=qg(),h=f.firstChild,y=h.nextSibling,m=a;return typeof m=="function"?Nt(m,f):a=f,f.addEventListener("mouseleave",()=>{u(!1),c(!1)}),f.addEventListener("mouseenter",()=>u(!0)),f.addEventListener("blur",()=>c(!1)),f.addEventListener("focus",()=>c(!0)),Hr(f,W({get disabled(){return g()},get class(){return L(r().queryStatusTag,!g()&&n`
            cursor: pointer;
            &:hover {
              background: ${s(o.gray[200],o.darkGray[400])}${i[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>l()||d()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),$(f,v(N,{get when(){return E(()=>!g())()&&(l()||d())},get children(){var p=Fg();return $(p,()=>e.label),K(()=>T(p,L(r().statusTooltip,"tsqd-query-status-tooltip"))),p}}),h),$(f,v(N,{get when(){return g()},get children(){var p=Lg();return $(p,()=>e.label),K(()=>T(p,L(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),p}}),y),$(y,()=>e.count),K(p=>{var b=L(n`
            width: ${S.size[1.5]};
            height: ${S.size[1.5]};
            border-radius: ${S.border.radius.full};
            background-color: ${S.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),w=L(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${s(o[e.color][100],o[e.color][900])};
              color: ${s(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==p.e&&T(h,p.e=b),w!==p.t&&T(y,p.t=w),p},{e:void 0,t:void 0}),f})()},Yg=()=>{let e=Ae(),t=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,n=E(()=>e()==="dark"?Ze(t):Xe(t)),{colors:r}=S,o=(k,q)=>e()==="dark"?q:k,i=V().client,[s,a]=z(!1),[l,u]=z("view"),[d,c]=z(!1),g=E(()=>V().errorTypes||[]),f=Me(k=>k().getAll().find(q=>q.queryHash===Ne()),!1),h=Me(k=>k().getAll().find(q=>q.queryHash===Ne()),!1),y=Me(k=>k().getAll().find(q=>q.queryHash===Ne())?.state,!1),m=Me(k=>k().getAll().find(q=>q.queryHash===Ne())?.state.data,!1),p=Me(k=>{let q=k().getAll().find(j=>j.queryHash===Ne());return q?Vt(q):"inactive"}),b=Me(k=>{let q=k().getAll().find(j=>j.queryHash===Ne());return q?q.state.status:"pending"}),w=Me(k=>k().getAll().find(q=>q.queryHash===Ne())?.getObserversCount()??0),x=E(()=>Ui(p())),C=()=>{f()?.fetch()?.catch(()=>{})},P=k=>{let q=k?.initializer(f())??new Error("Unknown error from devtools"),j=f().options;f().setState({status:"error",error:q,fetchMeta:{...f().state.fetchMeta,__previousQueryOptions:j}})},D=()=>{let k=f(),q=k.state,j=k.state.fetchMeta.__previousQueryOptions;k.cancel({silent:!0}),k.setState({...q,fetchStatus:"idle",fetchMeta:null}),k.fetch(j)};B(()=>{p()!=="fetching"&&a(!1)});let F=()=>x()==="gray"?t`
        background-color: ${o(r[x()][200],r[x()][700])};
        color: ${o(r[x()][700],r[x()][300])};
        border-color: ${o(r[x()][400],r[x()][600])};
      `:t`
      background-color: ${o(r[x()][100],r[x()][900])};
      color: ${o(r[x()][700],r[x()][300])};
      border-color: ${o(r[x()][400],r[x()][600])};
    `;return v(N,{get when(){return E(()=>!!f())()&&y()},get children(){var k=Bg(),q=k.firstChild,j=q.nextSibling,G=j.firstChild,se=G.firstChild,oe=se.firstChild,fe=se.nextSibling,ce=G.nextSibling,le=ce.firstChild,ue=le.nextSibling,ge=ce.nextSibling,Ce=ge.firstChild,_e=Ce.nextSibling,be=j.nextSibling,Fe=be.nextSibling,O=Fe.firstChild,pe=O.firstChild,te=O.nextSibling,At=te.firstChild,H=te.nextSibling,Je=H.firstChild,Te=H.nextSibling,Yt=Te.firstChild,Ge=Te.nextSibling,Mt=Ge.firstChild,zt=Mt.nextSibling,gt=Fe.nextSibling;gt.firstChild;var st=gt.nextSibling,ht=st.nextSibling;return $(oe,()=>On(f().queryKey,!0)),$(fe,p),$(ue,w),$(_e,()=>new Date(y().dataUpdatedAt).toLocaleTimeString()),O.$$click=C,te.$$click=()=>i.invalidateQueries(f()),H.$$click=()=>i.resetQueries(f()),Te.$$click=()=>{i.removeQueries(f()),Ir(null)},Ge.$$click=()=>{if(f()?.state.data===void 0)a(!0),D();else{let I=f();if(!I)return;let ae=I.options;I.fetch({...ae,queryFn:()=>new Promise(()=>{}),gcTime:-1}),I.setState({data:void 0,status:"pending",fetchMeta:{...I.state.fetchMeta,__previousQueryOptions:ae}})}},$(Ge,()=>b()==="pending"?"Restore":"Trigger",zt),$(Fe,v(N,{get when(){return g().length===0||b()==="error"},get children(){var I=_g(),ae=I.firstChild,Le=ae.nextSibling;return I.$$click=()=>{f().state.error?i.resetQueries(f()):P()},$(I,()=>b()==="error"?"Restore":"Trigger",Le),K(de=>{var ie=L(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),he=b()==="pending",$e=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return ie!==de.e&&T(I,de.e=ie),he!==de.t&&(I.disabled=de.t=he),$e!==de.a&&T(ae,de.a=$e),de},{e:void 0,t:void 0,a:void 0}),I}}),null),$(Fe,v(N,{get when(){return!(g().length===0||b()==="error")},get children(){var I=Rg(),ae=I.firstChild,Le=ae.nextSibling,de=Le.nextSibling;return de.firstChild,de.addEventListener("change",ie=>{let he=g().find($e=>$e.name===ie.currentTarget.value);P(he)}),$(de,v(bi,{get each(){return g()},children:ie=>(()=>{var he=Ng();return $(he,()=>ie.name),K(()=>he.value=ie.name),he})()}),null),$(I,v(qn,{}),null),K(ie=>{var he=L(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),$e=t`
                  background-color: ${S.colors.red[400]};
                `,ne=b()==="pending";return he!==ie.e&&T(I,ie.e=he),$e!==ie.t&&T(ae,ie.t=$e),ne!==ie.a&&(de.disabled=ie.a=ne),ie},{e:void 0,t:void 0,a:void 0}),I}}),null),$(gt,()=>l()==="view"?"Explorer":"Editor",null),$(k,v(N,{get when(){return l()==="view"},get children(){var I=zg();return $(I,v(Pt,{label:"Data",defaultExpanded:["Data"],get value(){return m()},editable:!0,onEdit:()=>u("edit"),get activeQuery(){return f()}})),K(ae=>(ae=S.size[2])!=null?I.style.setProperty("padding",ae):I.style.removeProperty("padding")),I}}),st),$(k,v(N,{get when(){return l()==="edit"},get children(){var I=Kg(),ae=I.firstChild,Le=ae.nextSibling,de=Le.firstChild,ie=de.nextSibling,he=ie.firstChild,$e=he.nextSibling;return I.addEventListener("submit",ne=>{ne.preventDefault();let mt=new FormData(ne.currentTarget).get("data");try{let et=JSON.parse(mt);f().setState({...f().state,data:et}),u("view")}catch{c(!0)}}),ae.addEventListener("focus",()=>c(!1)),$(de,()=>d()?"Invalid Value":""),he.$$click=()=>u("view"),K(ne=>{var yt=L(n().devtoolsEditForm,"tsqd-query-details-data-editor"),mt=n().devtoolsEditTextarea,et=d(),Kt=n().devtoolsEditFormActions,vt=n().devtoolsEditFormError,Bt=n().devtoolsEditFormActionContainer,pt=L(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),Tt=L(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return yt!==ne.e&&T(I,ne.e=yt),mt!==ne.t&&T(ae,ne.t=mt),et!==ne.a&&M(ae,"data-error",ne.a=et),Kt!==ne.o&&T(Le,ne.o=Kt),vt!==ne.i&&T(de,ne.i=vt),Bt!==ne.n&&T(ie,ne.n=Bt),pt!==ne.s&&T(he,ne.s=pt),Tt!==ne.h&&T($e,ne.h=Tt),ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),K(()=>ae.value=JSON.stringify(m(),null,2)),I}}),st),$(ht,v(Pt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),K(I=>{var ae=L(n().detailsContainer,"tsqd-query-details-container"),Le=L(n().detailsHeader,"tsqd-query-details-header"),de=L(n().detailsBody,"tsqd-query-details-summary-container"),ie=L(n().queryDetailsStatus,F()),he=L(n().detailsHeader,"tsqd-query-details-header"),$e=L(n().actionsBody,"tsqd-query-details-actions-container"),ne=L(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),yt=p()==="fetching",mt=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,et=L(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),Kt=b()==="pending",vt=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,Bt=L(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),pt=b()==="pending",Tt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,jn=L(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),mn=p()==="fetching",Wn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,Xt=L(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),Qn=s(),vn=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,pn=L(n().detailsHeader,"tsqd-query-details-header"),bn=L(n().detailsHeader,"tsqd-query-details-header"),Zt=S.size[2];return ae!==I.e&&T(k,I.e=ae),Le!==I.t&&T(q,I.t=Le),de!==I.a&&T(j,I.a=de),ie!==I.o&&T(fe,I.o=ie),he!==I.i&&T(be,I.i=he),$e!==I.n&&T(Fe,I.n=$e),ne!==I.s&&T(O,I.s=ne),yt!==I.h&&(O.disabled=I.h=yt),mt!==I.r&&T(pe,I.r=mt),et!==I.d&&T(te,I.d=et),Kt!==I.l&&(te.disabled=I.l=Kt),vt!==I.u&&T(At,I.u=vt),Bt!==I.c&&T(H,I.c=Bt),pt!==I.w&&(H.disabled=I.w=pt),Tt!==I.m&&T(Je,I.m=Tt),jn!==I.f&&T(Te,I.f=jn),mn!==I.y&&(Te.disabled=I.y=mn),Wn!==I.g&&T(Yt,I.g=Wn),Xt!==I.p&&T(Ge,I.p=Xt),Qn!==I.b&&(Ge.disabled=I.b=Qn),vn!==I.T&&T(Mt,I.T=vn),pn!==I.A&&T(gt,I.A=pn),bn!==I.O&&T(st,I.O=bn),Zt!==I.I&&((I.I=Zt)!=null?ht.style.setProperty("padding",Zt):ht.style.removeProperty("padding")),I},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),k}})},Xg=()=>{let e=Ae(),t=V().shadowDOMTarget?Q.bind({target:V().shadowDOMTarget}):Q,n=E(()=>e()==="dark"?Ze(t):Xe(t)),{colors:r}=S,o=(d,c)=>e()==="dark"?c:d,i=nt(d=>{let g=d().getAll().find(f=>f.mutationId===Ft());return g?g.state.isPaused:!1}),s=nt(d=>{let g=d().getAll().find(f=>f.mutationId===Ft());return g?g.state.status:"idle"}),a=E(()=>Ut({isPaused:i(),status:s()})),l=nt(d=>d().getAll().find(c=>c.mutationId===Ft()),!1),u=()=>a()==="gray"?t`
        background-color: ${o(r[a()][200],r[a()][700])};
        color: ${o(r[a()][700],r[a()][300])};
        border-color: ${o(r[a()][400],r[a()][600])};
      `:t`
      background-color: ${o(r[a()][100],r[a()][900])};
      color: ${o(r[a()][700],r[a()][300])};
      border-color: ${o(r[a()][400],r[a()][600])};
    `;return v(N,{get when(){return l()},get children(){var d=Vg(),c=d.firstChild,g=c.nextSibling,f=g.firstChild,h=f.firstChild,y=h.firstChild,m=h.nextSibling,p=f.nextSibling,b=p.firstChild,w=b.nextSibling,x=g.nextSibling,C=x.nextSibling,P=C.nextSibling,D=P.nextSibling,F=D.nextSibling,k=F.nextSibling,q=k.nextSibling,j=q.nextSibling;return $(y,v(N,{get when(){return l().options.mutationKey},fallback:"No mutationKey found",get children(){return On(l().options.mutationKey,!0)}})),$(m,v(N,{get when(){return a()==="purple"},children:"pending"}),null),$(m,v(N,{get when(){return a()!=="purple"},get children(){return s()}}),null),$(w,()=>new Date(l().state.submittedAt).toLocaleTimeString()),$(C,v(Pt,{label:"Variables",defaultExpanded:["Variables"],get value(){return l().state.variables}})),$(D,v(Pt,{label:"Context",defaultExpanded:["Context"],get value(){return l().state.context}})),$(k,v(Pt,{label:"Data",defaultExpanded:["Data"],get value(){return l().state.data}})),$(j,v(Pt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return l()}})),K(G=>{var se=L(n().detailsContainer,"tsqd-query-details-container"),oe=L(n().detailsHeader,"tsqd-query-details-header"),fe=L(n().detailsBody,"tsqd-query-details-summary-container"),ce=L(n().queryDetailsStatus,u()),le=L(n().detailsHeader,"tsqd-query-details-header"),ue=S.size[2],ge=L(n().detailsHeader,"tsqd-query-details-header"),Ce=S.size[2],_e=L(n().detailsHeader,"tsqd-query-details-header"),be=S.size[2],Fe=L(n().detailsHeader,"tsqd-query-details-header"),O=S.size[2];return se!==G.e&&T(d,G.e=se),oe!==G.t&&T(c,G.t=oe),fe!==G.a&&T(g,G.a=fe),ce!==G.o&&T(m,G.o=ce),le!==G.i&&T(x,G.i=le),ue!==G.n&&((G.n=ue)!=null?C.style.setProperty("padding",ue):C.style.removeProperty("padding")),ge!==G.s&&T(P,G.s=ge),Ce!==G.h&&((G.h=Ce)!=null?D.style.setProperty("padding",Ce):D.style.removeProperty("padding")),_e!==G.r&&T(F,G.r=_e),be!==G.d&&((G.d=be)!=null?k.style.setProperty("padding",be):k.style.removeProperty("padding")),Fe!==G.l&&T(q,G.l=Fe),O!==G.u&&((G.u=O)!=null?j.style.setProperty("padding",O):j.style.removeProperty("padding")),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),d}})},Cr=new Map,Zg=()=>{let e=E(()=>V().client.getQueryCache()),t=e().subscribe(n=>{ci(()=>{for(let[r,o]of Cr.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return U(()=>{Cr.clear(),t()}),t},Me=(e,t=!0,n=()=>!0)=>{let r=E(()=>V().client.getQueryCache()),[o,i]=z(e(r),t?void 0:{equals:!1});return B(()=>{i(e(r))}),Cr.set(e,{setter:i,shouldUpdate:n}),U(()=>{Cr.delete(e)}),o},Sr=new Map,Jg=()=>{let e=E(()=>V().client.getMutationCache()),t=e().subscribe(()=>{for(let[n,r]of Sr.entries())queueMicrotask(()=>{r(n(e))})});return U(()=>{Sr.clear(),t()}),t},nt=(e,t=!0)=>{let n=E(()=>V().client.getMutationCache()),[r,o]=z(e(n),t?void 0:{equals:!1});return B(()=>{o(e(n))}),Sr.set(e,o),U(()=>{Sr.delete(e)}),r},wa=(e,t)=>{let{colors:n,font:r,size:o,alpha:i,shadow:s,border:a}=S,l=(u,d)=>e==="light"?u:d;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${s.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${S.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${l(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${l(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${S.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${l(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${l(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${l(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${l(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${a.radius.sm} ${a.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${a.radius.sm} 0px 0px ${a.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${a.radius.sm} ${a.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${l(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${l("",i[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${S.size[2]} ${S.size[2.5]};
      gap: ${S.size[2.5]};
      border-bottom: ${l(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${S.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${S.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${l(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${l("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${S.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${S.size[1.5]};
      box-sizing: border-box;
      height: ${S.size[6.5]};
      background: ${l(n.gray[50],n.darkGray[500])};
      color: ${l(n.gray[700],n.gray[300])};
      border-radius: ${S.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${S.size[1]};
      padding-left: ${S.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${l("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l(n.gray[500],n.gray[400])};
      background-color: ${l(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${S.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${l(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${S.size[2]}));
      padding: ${S.size[.5]} ${S.size[2]};
      border-radius: ${S.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${l(n.gray[400],n.gray[600])};
      color: ${l(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${l(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${l(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${S.size[2]};
      & > button {
        cursor: pointer;
        padding: ${S.size[.5]} ${S.size[1.5]} ${S.size[.5]}
          ${S.size[2]};
        border-radius: ${S.border.radius.sm};
        background-color: ${l(n.gray[100],n.darkGray[400])};
        border: 1px solid ${l(n.gray[300],n.darkGray[200])};
        color: ${l(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${S.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${S.size[3]};
          height: ${S.size[3]};
          color: ${l(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${S.border.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${S.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${l(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${l(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${l(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${l(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${S.size[.5]} ${S.size[2]};
      border-radius: ${S.border.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${S.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${l(n.gray[600],n.gray[400])};
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
      & > select {
        appearance: none;
        color: ${l(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${l(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${S.size[2]};
    `,actionsBtn:t`
      border-radius: ${S.border.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[400])};
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      width: ${S.size[6.5]};
      height: ${S.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${S.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${l(n.gray[700],n.gray[300])};
        width: ${S.size[3]};
        height: ${S.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${l(n.yellow[700],n.yellow[500])};
        fill: ${l(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${l(n.gray[700],n.gray[300])};
      background-color: ${l(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${l(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${S.size[1]};
        user-select: none;
        min-width: ${S.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${l(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${S.size[6]};
        flex: 1;
        padding: ${S.size[1]} ${S.size[2]};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${l(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${S.size[2]};
        color: ${l(n.gray[800],n.gray[300])};
        background-color: ${l(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${l(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${l(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${l(n.gray[50],n.darkGray[700])};
      color: ${l(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${l(n.gray[200],n.darkGray[600])};
      padding: ${S.size[1.5]} ${S.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${S.size[1.5]} 0px ${S.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${S.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${S.size[1.5]};
      }

      & code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${S.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${S.size[1]} ${S.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${S.size[2]} 0px ${S.size[2]} 0px;
      display: flex;
      gap: ${S.size[2]};
      padding: 0px ${S.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${S.size[1]} ${S.size[2]};
        display: flex;
        border-radius: ${S.border.radius.sm};
        background-color: ${l(n.gray[100],n.darkGray[600])};
        border: 1px solid ${l(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${S.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${l(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${S.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${S.size[.5]} ${S.size[2]};
      display: flex;
      border-radius: ${S.border.radius.sm};
      overflow: hidden;
      background-color: ${l(n.gray[100],n.darkGray[600])};
      border: 1px solid ${l(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${S.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${l(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${S.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${S.colors.red[400]};
      }
      & svg {
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${S.border.radius.sm};
      border: 1px solid ${l(n.gray[300],n.gray[700])};
      background-color: ${l(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${l(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${S.border.radius.xs};
      padding: ${S.size[1]} ${S.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${l(n.gray[700],n.gray[300])};
      & svg {
        color: ${l(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${S.size[1]} ${S.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${l(n.gray[300],n.darkGray[400])};
      color: ${l(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${l(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${S.border.radius.xs};
      padding: ${S.size[1]} ${S.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${l(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${l(n.purple[100],n.purple[900])};
      color: ${l(n.purple[700],n.purple[300])};
      & svg {
        color: ${l(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${l(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${S.border.radius.sm};
      background-color: ${l(n.gray[200],n.darkGray[600])};
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${l(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${l(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${l(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${l(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${S.size[1.5]} 0 ${S.size[2]};
        }
        border-right: 1px solid ${l(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${S.size[2]} 0 ${S.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${l(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${a.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${l(n.gray[100],n.darkGray[800])};
      color: ${l(n.gray[900],n.gray[100])};
      border: 1px solid ${l(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${l(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${l(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${S.size[2]};
      display: flex;
      border-radius: ${a.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[600])};
      border: 1px solid ${l(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Xe=e=>wa("light",e),Ze=e=>wa("dark",e);Tn(["click","mousedown","input"]);export{E as a,v as b,eh as c,uh as d,dh as e,Qc as f,fh as g,Yc as h,gh as i,hh as j,ba as k};
/*! Bundled license information:

@tanstack/query-devtools/build/chunk/VREWMQAW.js:
  (*! Bundled license information:
  
  @tanstack/match-sorter-utils/build/lib/index.mjs:
    (**
       * match-sorter-utils
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       *)
    (**
     * @name match-sorter
     * @license MIT license.
     * @copyright (c) 2099 Kent C. Dodds
     * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
     *)
  
  @kobalte/utils/dist/index.js:
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/da142672eddefa99365773ced72171facc06fdcb/packages/ariakit-utils/src/array.ts
     *)
    (*!
     * Original code by Chakra UI
     * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
     *
     * Credits to the Chakra UI team:
     * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/solidjs-community/solid-aria/blob/2c5f54feb5cfea514b1ee0a52d0416878f882351/packages/utils/src/createGlobalListeners.ts
     *)
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/focusWithoutScrolling.ts
     *)
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/focus.ts
     *
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/focus/src/isElementVisible.ts
     * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/focus/src/FocusScope.tsx
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/f6e686fe9d3b983d48650980c1ecfdde320bc62f/packages/@react-aria/focus/src/FocusScope.tsx
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/getScrollParent.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/isVirtualEvent.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/ff3e690fffc6c54367b8057e28a0e5b9211f37b5/packages/@react-stately/utils/src/number.ts
     *)
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/84e97943ad637a582c01c9b56d880cd95f595737/packages/ariakit/src/hovercard/__utils/polygon.ts
     * https://github.com/ariakit/ariakit/blob/f2a96973de523d67e41eec983263936c489ef3e2/packages/ariakit/src/hovercard/__utils/debug-polygon.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/runAfterTransition.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/utils/src/scrollIntoView.ts
     *)
  *)
*/
//# sourceMappingURL=chunk-246I2MMB.js.map

import{p as O,w as M}from"./chunk-DAKQXEWH.js";import{za as _}from"./chunk-R3TVD7ZG.js";import{f as N,h as H}from"./chunk-KLYKJSXB.js";import{c as L}from"./chunk-5ANSHKRX.js";import{b as x}from"./chunk-6QNUOYSW.js";import{ga as T}from"./chunk-T66NYVB2.js";import{c as $,da as I,ea as w,l as d,m as o}from"./chunk-OA5YQ6R3.js";import{Ea as v,c as k}from"./chunk-DAZNTGG2.js";import{f as D,h as m,n as c}from"./chunk-YJSZZTEX.js";m();c();var n=D(k());m();c();var f=D(k());var V=5,S=5,p=2,K=S+2*p,A=14,X=A+2*p,B=S+2*p,G=o.div`
  display: flex;
  justify-content: ${t=>t.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${t=>(t.maxVisible-1)*K+X}px;
`,q=o.div`
  align-items: center;
  display: flex;
  ${t=>t.shouldShift&&d`
      transform: translateX(calc(-${B}px * ${t.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,z=o.div`
  align-items: center;
  background-color: ${v.colors.legacy.textSecondary};
  border-radius: 95px;
  display: flex;
  height: ${V}px;
  justify-content: center;
  margin: 0 ${p}px;
  min-width: ${S}px;
  transition: all 0.3s ease-in-out;
  ${t=>t.isActive&&d`
      min-width: ${A}px;
    `}
  ${t=>t.isSmall&&d`
      min-width: 3px;
      margin: 0 ${p}px;
      height: 3px;
    `}
`,F=o.div`
  width: ${A}px;
  height: ${V}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${p}px;
  background-color: ${v.colors.legacy.accentPrimary};
  transition: transform 0.3s ease-in-out;
  ${t=>t.position&&d`
      transform: translateX(${t.position*B}px);
    `}
`,J=({numOfItems:t,currentIndex:i,maxVisible:a=5})=>{let e=t>a?i>a-3:!1,r=e?i-(a-3):0;return f.default.createElement(G,{shouldCenter:a>t,maxVisible:a},f.default.createElement(q,{shouldShift:e,shiftAmount:r},Array.from({length:t}).map((y,l)=>{let h=(l===i-2||l===i+2)&&e;return f.default.createElement(z,{key:`pagination-dot-${l}`,isActive:i===l,isSmall:h})}),f.default.createElement(F,{position:i})))},E=J;var Q=o.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${t=>t.animate?`height: ${t.shouldCollapse?t.itemHeight+26:t.itemHeight+46}px`:""}
`,Y=o.div`
  transition: transform 0.5s ease;
  width: 100%;
`,U=o(L)``,W=o.div`
  visibility: ${t=>t.isVisible?"visible":"hidden"};
`,Z=o.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,R=o.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${t=>`translateX(${t.currentIndex*-100}%)`};
`,tt=o.li`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  padding: ${t=>t.isActive?"0":t.isNext||t.isPrevious?"0 6px":"0"};
  height: ${t=>t.isActive?t.itemHeight:.9*t.itemHeight}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
`,pt=({items:t,onIndexChange:i,itemHeight:a})=>{let[e,r]=(0,n.useState)(0),y=(0,n.useCallback)(()=>{r(s=>s+1)},[]),l=(0,n.useCallback)(()=>{r(s=>s-1)},[]),h=e<t.length-1,b=e>0;(0,n.useEffect)(()=>{!t.length||e>t.length-1||i(e)},[t,i,e]),(0,n.useEffect)(()=>{t.length>0&&e>=t.length&&r(t.length-1)},[e,t]);let C=t.length<=1;return n.default.createElement(Q,{animate:t.length>0,shouldCollapse:C,itemHeight:a},n.default.createElement(Y,null,n.default.createElement(R,{currentIndex:e},t.map((s,u)=>n.default.createElement(tt,{key:s.key,isActive:e===u,isNext:e+1===u,isPrevious:e-1===u,itemHeight:a},s.node))),!C&&n.default.createElement(Z,null,n.default.createElement(W,{isVisible:b},n.default.createElement(U,{onClick:l},n.default.createElement(I,null))),n.default.createElement(E,{numOfItems:t.length,currentIndex:e,maxVisible:5}),n.default.createElement(W,{isVisible:h},n.default.createElement(U,{onClick:y},n.default.createElement(w,null))))))};m();c();var g=D(k());m();c();var j=t=>{if(t==="Settings: Security & Privacy")return M;if(t==="Settings: Currency")return O};var et=g.default.lazy(()=>import("./FungibleDetailPage-R2QANPZF.js")),Nt=()=>{let{showSettingsMenu:t}=H(),{handleShowModalVisibility:i}=_(),{pushDetailView:a}=N(),e=T(),r=$();return(0,g.useCallback)((l,h)=>{let{destinationType:b,url:C,caip19:s}=h;switch(b){case"External Link":x({url:C});break;case"Buy":i("onramp");break;case"Collectibles":r("/",{state:{defaultTab:"collectibles",nonce:Date.now()}});break;case"Explore":r("/explore");break;case"Swapper":r("/swap");break;case"Settings: Claim Username":i("quickClaimUsername");break;case"Settings: Import Seed Phrase":x({url:"onboarding.html?append=true"});break;case"Connect Hardware Wallet":x({url:"connect_hardware.html"});break;case"Convert to Jito":i(e?"mintPSOLUKInfo":"mintPSOLInfo",{presentNext:!0});break;case"Token":{if(!s)return;a(g.default.createElement(et,{caip19:s,title:void 0,entryPoint:"actionBanner"}));break}default:{let u=j(b);if(!u)return;t(l,g.default.createElement(u,null))}}},[r,t,i,a,e])};export{Nt as a,pt as b};
//# sourceMappingURL=chunk-QSOXKVS5.js.map

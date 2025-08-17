import{b as c}from"./chunk-CWW3WR5J.js";import{S as l,db as T,m as e}from"./chunk-OA5YQ6R3.js";import{a as u}from"./chunk-IHGFL7KF.js";import{f as E}from"./chunk-2UCAAWZM.js";import{b as m,c as y}from"./chunk-OYJH24PS.js";import{c as h}from"./chunk-FVJIE3BT.js";import{Ea as a,R as x,c as F,v as i}from"./chunk-DAZNTGG2.js";import{f as P,h as b,n as k}from"./chunk-YJSZZTEX.js";b();k();var r=P(F());var w="Unknown Error",D="Looks like you ran into an unknown error. Please close Phantom and try again.",S="Close",f=e(T).attrs({wordBreak:"break-word",color:a.colors.legacy.textSecondary,size:16,lineHeight:20.8,maxWidth:"400px"})``,g=e.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: ${a.colors.legacy.accentPrimary};
  text-decoration: none;
  cursor: pointer;
  svg {
    fill: ${a.colors.legacy.accentPrimary};
    margin-right: 5px;
  }
`,C=o=>r.default.createElement(u,{fallback:n=>n instanceof E?r.default.createElement(B,null):o.fallback},o.children),B=()=>{let{t:o}=x(),n=()=>{h.capture("walletScreenErrorBoundaryClosed"),self.close()};return r.default.createElement(A,null,r.default.createElement(c,{icon:"error",title:o("transactionsDisabledTitle"),buttonText:o("commandClose"),onClose:n},r.default.createElement(f,{margin:"0 0 5px 0"},o("transactionsDisabledMessage")),r.default.createElement(g,{href:i,onClick:n},r.default.createElement(l,null),"Help & Support")))},A=e.main`
  width: ${m}px;
  height: ${y}px;
  padding: 15px;
`,j=({title:o=w,message:n=D,buttonText:s=S,onReset:t=()=>self.close(),children:d})=>{function p(){return r.default.createElement(H,null,r.default.createElement(c,{icon:"error",title:o,buttonText:s,onClose:t},r.default.createElement(f,{margin:"0 0 5px 0"},n),r.default.createElement(g,{href:i,onClick:t},r.default.createElement(l,null),"Help & Support")))}return r.default.createElement(C,{fallback:r.default.createElement(p,null)},d)},H=e.main`
  min-width: ${m}px;
  height: 100vh;
  padding: 15px;
  width: 100vw;
`,q=({title:o=w,message:n="Looks like you ran into an unknown error. Please refresh the page and try again.",buttonText:s="Refresh",onReset:t=()=>self.location.reload(),children:d})=>{function p(){return r.default.createElement(N,null,r.default.createElement(c,{icon:"error",title:o,buttonText:s,onClose:t},r.default.createElement(f,{margin:"0 0 5px 0"},n),r.default.createElement(g,{href:i,onClick:t},r.default.createElement(l,null),"Help & Support")))}return r.default.createElement(C,{fallback:r.default.createElement(p,null)},d)},N=e.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 450px;
  background-color: ${a.colors.legacy.bgWallet};
  border: 1px solid ${a.colors.legacy.borderSecondary};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;export{C as a,j as b,q as c};
//# sourceMappingURL=chunk-54A4UP2W.js.map

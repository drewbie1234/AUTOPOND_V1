import{b as $}from"./chunk-WGGKE3W4.js";import{c as U}from"./chunk-5ANSHKRX.js";import{R as k,ba as O,da as E,db as R,m as x}from"./chunk-OA5YQ6R3.js";import{d as H}from"./chunk-OYJH24PS.js";import{Ye as F,me as M}from"./chunk-S3GUIRR4.js";import{e as I,na as w}from"./chunk-AG2PIQR6.js";import{Ea as y,Oa as N,Rb as ie,Sa as W,c as g}from"./chunk-DAZNTGG2.js";import{f as c,h as s,n as u}from"./chunk-YJSZZTEX.js";s();u();var B=c(g());s();u();var z=c(g());function G(){var e=(0,z.useRef)(!0);return e.current?(e.current=!1,!0):e.current}var ne=function(e,t){return e===t};function D(e,t){t===void 0&&(t=ne);var o=(0,B.useRef)(),r=(0,B.useRef)(e),d=G();return!d&&!t(r.current,e)&&(o.current=r.current,r.current=e),o.current}s();u();s();u();var j=function(){};function K(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function q(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var C=typeof self<"u";s();u();var v=c(g());var fe=["mousedown","touchstart"],le=function(e,t,o){o===void 0&&(o=fe);var r=(0,v.useRef)(t);(0,v.useEffect)(function(){r.current=t},[t]),(0,v.useEffect)(function(){for(var d=function(a){var m=e.current;m&&!m.contains(a.target)&&r.current(a)},f=0,l=o;f<l.length;f++){var p=l[f];K(document,p,d)}return function(){for(var a=0,m=o;a<m.length;a++){var L=m[a];q(document,L,d)}}},[o,e])},de=le;s();u();var V=c(g());var pe=C?V.useLayoutEffect:V.useEffect,J=pe;s();u();var b=c(g());function Q(e){var t=(0,b.useRef)();return(0,b.useEffect)(function(){t.current=e}),t.current}s();u();var S=c(g());var X={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function me(){var e=(0,S.useState)(null),t=e[0],o=e[1],r=(0,S.useState)(X),d=r[0],f=r[1],l=(0,S.useMemo)(function(){return new self.ResizeObserver(function(p){if(p[0]){var a=p[0].contentRect,m=a.x,L=a.y,te=a.width,oe=a.height,re=a.top,ae=a.left,se=a.bottom,ue=a.right;f({x:m,y:L,width:te,height:oe,top:re,left:ae,bottom:se,right:ue})}})},[]);return J(function(){if(t)return l.observe(t),function(){l.disconnect()}},[t]),[o,d]}var ce=C&&typeof self.ResizeObserver<"u"?me:function(){return[j,X]};s();u();var Z=c(ie());var i=c(g());var Y=(0,i.createContext)({pushDetailViewCallback:()=>w,pushDetailView:w,popDetailView:w,resetDetailView:w,detailViewStackLength:0}),xe=x(W.div)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${e=>e.theme?.detailViewMaxHeight??"100%"};
  min-height: ${e=>e.theme?.detailViewMinHeight??"initial"};
`,ct=i.default.memo(({children:e,shouldResetOnAccountChange:t,shouldPushDetailView:o})=>{let{detailViewStack:r,setDetailViewStack:d,pushDetailView:f,...l}=ge(),{data:p}=F();return(0,i.useEffect)(()=>{t&&d([])},[p,d,t]),(0,i.useEffect)(()=>{o&&f(e)},[e,o,f]),i.default.createElement(Y.Provider,{value:{...l,pushDetailView:f,detailViewStackLength:r.length}},i.default.createElement(ve,{stack:r},e))}),he=navigator.webdriver?0:500,ge=()=>{let[e,t]=(0,i.useState)([]),o=(0,i.useMemo)(()=>(0,Z.default)(l=>{t(p=>M(p,a=>{a.push(l)}))},he,{leading:!0,trailing:!1}),[t]),r=(0,i.useCallback)(()=>{t(l=>M(l,p=>{p.pop()}))},[t]),d=(0,i.useCallback)(l=>()=>{o(l)},[o]),f=(0,i.useCallback)(()=>()=>{t([])},[t]);return(0,i.useMemo)(()=>({detailViewStack:e,setDetailViewStack:t,pushDetailView:o,popDetailView:r,resetDetailView:f,pushDetailViewCallback:d}),[e,r,o,f,d])},we=.15,ve=({children:e,stack:t})=>{let o=D(t,(a,m)=>a?.length===m.length),r=I(t),d=t.length>(o??[]).length,f=o===void 0,l=f?0:d?10:-10,p=f?1:0;return i.default.createElement(N,{mode:"wait"},i.default.createElement(xe,{key:`${t.length}_${o?.length}`,initial:{x:l,opacity:p},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:we},ref:Se},r||e))},A=()=>{let e=(0,i.useContext)(Y);if(!e)throw new Error("Missing detail view context");return e},Se=e=>{e&&e.parentElement&&(e.parentElement.scrollTop=0)};s();u();var P=c(g()),ye=(0,P.createContext)({isOpen:!1,showSettingsMenu:w,hideSettingsMenu:w}),_=()=>(0,P.useContext)(ye);s();u();var n=c(g());var De=x.section.attrs(e=>({justifyContent:e.justifyContent??"center",height:e.height??H}))`
  z-index: 1;
  background-color: ${y.colors.legacy.bgWallet};
  padding: 10px 16px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: ${e=>e.justifyContent};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${y.colors.legacy.borderSecondary};
  height: ${e=>e.height}px;
  width: 100%;
`,Ce=x(R).attrs(e=>({size:16,weight:500,lineHeight:25,maxWidth:e.maxWidth??"280px",noWrap:e.noWrap??!0}))``,Ve=x.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding-bottom: 17px;
  position: relative;
  width: 100%;
`,ee=x($)`
  position: absolute;
  right: 0;
`,T=x(U)`
  position: absolute;
  left: 0;
`,Et=({children:e,items:t,sections:o,icon:r,shouldWrap:d,onIconClick:f,onLeftButtonClick:l,useCloseButton:p})=>{let a=Le({withCloseButton:p??!1,onLeftButtonClick:l}),m=o&&o.length>0||t&&t.length>0;return n.default.createElement(Ve,null,a,n.default.createElement(R,{weight:500,size:22,noWrap:!d,maxWidth:"280px"},e),m||f?n.default.createElement(ee,{sections:o,items:t,icon:r||n.default.createElement(O,null),onIconClick:f}):n.default.createElement("div",null))},be=x(De).attrs(e=>({justifyContent:e.justifyContent??"center",height:e.height??H}))`
  position: relative;
  border-bottom: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid ${y.colors.legacy.borderSecondary};
  }
`,Pe=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`,Rt=({children:e,sections:t,items:o,icon:r,shouldWrap:d,onIconClick:f,onLeftButtonClick:l,disableIconBackground:p})=>{let a=Me(l),m=t&&t.length>0||o&&o.length>0;return n.default.createElement(be,null,a,n.default.createElement(Pe,null,typeof e=="string"?n.default.createElement(Ce,{noWrap:!d},e):e),m||f?n.default.createElement(ee,{sections:t,items:o,icon:r,onIconClick:f,disableIconBackground:p}):n.default.createElement("div",null))},Le=({withCloseButton:e,onLeftButtonClick:t})=>{let{popDetailView:o,detailViewStackLength:r}=A();return(0,n.useMemo)(()=>r===0?n.default.createElement("div",null):n.default.createElement(T,{onClick:()=>{t?.(),o()},"data-testid":"header--back"},e?n.default.createElement(k,null):n.default.createElement(E,null)),[e])},Me=e=>{let{hideSettingsMenu:t}=_(),{popDetailView:o,detailViewStackLength:r}=A();return(0,n.useMemo)(()=>r>0?n.default.createElement(T,{onClick:()=>{o()},"data-testid":"header--back"},n.default.createElement(E,null)):n.default.createElement(T,{"data-testid":"settings-menu-close-button",onClick:e??t},n.default.createElement(k,null)),[])};export{de as a,Q as b,D as c,ce as d,ct as e,A as f,ye as g,_ as h,De as i,Et as j,Rt as k};
//# sourceMappingURL=chunk-KLYKJSXB.js.map

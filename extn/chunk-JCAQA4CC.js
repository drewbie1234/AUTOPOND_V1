import{r as h}from"./chunk-WF7GYM4L.js";import{_ as m,db as g,m as r}from"./chunk-OA5YQ6R3.js";import{Ea as e,c as W}from"./chunk-DAZNTGG2.js";import{f as P,h as f,n as c}from"./chunk-YJSZZTEX.js";f();c();var o=P(W());var A=r.div`
  display: flex;
  ${n=>n.isVisible?"cursor: pointer;":""}
  align-items: center;
  margin-right: ${n=>n.hasChildren?10:0}px;
  p {
    margin-right: 6px;
    ${n=>!n.allowWrap&&"white-space: nowrap;"}
  }
`,V=r.div`
  position: relative;
  top: 1px;
`,N=({children:n,fontWeight:I,fontSize:b=14,iconSize:u,info:l,lineHeight:d,tooltipAlignment:C,noWrap:a,textAlign:x="left",showInfoIcon:w=!0,textColor:T,iconColor:y})=>{let[S,s]=(0,o.useState)(!1),i=!!l,t=i&&S,p=t?e.colors.legacy.accentPrimary:e.colors.legacy.textSecondary;return o.default.createElement(h,{label:i?l:o.default.createElement(o.default.Fragment,null),ariaLabel:"Info",color:e.colors.legacy.bgWallet,alignment:C,isVisible:t,triggerParams:{onMouseEnter:()=>s(!0),onMouseLeave:()=>{s(!1)}}},o.default.createElement(A,{isVisible:t,hasChildren:!!n,allowWrap:!a},o.default.createElement(g,{color:T??p,lineHeight:d,size:b,weight:I,noWrap:a,textAlign:x},n),i&&w?o.default.createElement(V,null,o.default.createElement(m,{fill:y??p,width:u})):null))};export{N as a};
//# sourceMappingURL=chunk-JCAQA4CC.js.map

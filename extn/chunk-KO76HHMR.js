import{a as C}from"./chunk-JCAQA4CC.js";import{a as P}from"./chunk-FQHIVBIR.js";import{o as S}from"./chunk-WF7GYM4L.js";import{ba as z}from"./chunk-4MBFYWFI.js";import{O as L,m as i,w as I}from"./chunk-OA5YQ6R3.js";import{c as k}from"./chunk-FVJIE3BT.js";import{ga as T}from"./chunk-C5GK3F6I.js";import{ld as b}from"./chunk-S3GUIRR4.js";import{L as w}from"./chunk-AG2PIQR6.js";import{$b as B,Ea as l,Ia as h,Ja as f,c as V}from"./chunk-DAZNTGG2.js";import{f as v,h as g,n as x}from"./chunk-YJSZZTEX.js";g();x();var t=v(V());g();x();var y={header:"_14rx5di1 _14rx5di0 _51gazn5a _51gazn3o _51gazn6w _51gazn22 _51gazn1kj _51gazn1nq _51gazn1mv _51gaznkv _51gazn2ca _51gazns2 _51gaznxd",summaryContainer:"_14rx5di2 _51gazn1c8 _51gazn1xp"};g();x();var u=v(V()),$=u.default.memo(({address:e,networkID:o,showConcise:a})=>{let{getExistingAccount:d,getKnownAddressLabel:n}=T(),{data:R}=z(e,o),c=R?.address;if(!e)return null;let r=d(e),m=n(e,o),p=r?r.name:m;return c?u.default.createElement(f,null,e," ",u.default.createElement(f,{color:"textSecondary"},"(",b(c,4),")")):p?u.default.createElement(f,null,p," ",u.default.createElement(f,{color:"textSecondary"},"(",b(e,4),")")):u.default.createElement(f,null,a?b(e,4):e)});function _(e){if(!e){let a=parseInt(l.radiusRow.replace("px",""),10);return{borderTopLeftRadius:a,borderTopRightRadius:a,borderBottomRightRadius:a,borderBottomLeftRadius:a}}let o=e.split(" ").map(a=>a.replace("px","")).map(a=>parseInt(a,10));return o.length===1?{borderTopLeftRadius:o[0],borderTopRightRadius:o[0],borderBottomRightRadius:o[0],borderBottomLeftRadius:o[0]}:o.length===2?{borderTopLeftRadius:o[0],borderTopRightRadius:o[1],borderBottomRightRadius:o[0],borderBottomLeftRadius:o[1]}:{borderTopLeftRadius:o[0],borderTopRightRadius:o[1],borderBottomRightRadius:o[2],borderBottomLeftRadius:o[3]}}var F=i.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${l.colors.legacy.bgWallet};
  border-bottom-width: ${e=>e.border?1:0}px;
  padding: ${e=>e.padding?e.padding:14}px;
  cursor: ${e=>e.onClick?"pointer":"default"};
`,N=i.div`
  padding-top: 3px;
`,O=i.div`
  display: flex;
  justify-content: space-between;
  font-size: ${e=>e.fontSize?e.fontSize:14}px;
`,W=i.div`
  display: flex;
  justify-content: space-between;
`,j=i.div`
  text-align: left;
  flex: 1;
`,E=i.div`
  text-align: right;
  flex: 1;
`,M=i.div`
  display: flex;
  align-items: center;
  ${e=>e.truncate?"flex: 1; min-width: 0; justify-content:end;":""}
`,H=i.div`
  padding-left: 8px;
  color: ${l.colors.legacy.textSecondary};
`,A=({children:e,showArrow:o})=>t.createElement(M,{truncate:!o},e,o&&t.createElement(H,null,t.createElement(I,{height:12}))),s=i.span`
  color: ${e=>e.color||"white"};
  text-align: ${e=>e.align||"left"};
  font-weight: ${e=>e.weight||400};
  overflow-wrap: break-word;
  ${e=>e.margin?"margin: "+e.margin+";":""};
  ${e=>e.size?"font-size: "+e.size+"px;":""}
  ${e=>e.truncate?"white-space: nowrap; text-overflow: ellipsis; overflow:hidden; width: 100%;"+(e.size?"line-height: "+e.size*1.2+"px;":"line-height: 17px;"):""}
`,U=i.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${l.colors.legacy.accentPrimary};
  text-decoration: none;
  cursor: pointer;
`,q=i.div`
  text-align: center;
  width: 100%;
`,K=({children:e,label:o,tooltipContent:a,fontSize:d})=>t.createElement(t.Fragment,null,t.createElement(C,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontSize:d,fontWeight:500,info:a?t.createElement(S,null,a):null},o),e),G=e=>{k.capture("activityItemDetailLinkClicked",{data:{hostname:w(e)}})},J=e=>"designSystemOptIn"in e&&e.designSystemOptIn===!0?t.createElement(Q,{...e}):t.createElement(X,{...e}),Q=({header:e,rows:o,borderRadius:a})=>{let d=_(a);return t.createElement(h,{className:y.summaryContainer,...d},e?t.createElement("div",{className:y.header},e):null,t.createElement(B,{rows:o.map(n=>({...n.onPress?{onClick:n.onPress}:{},topLeft:n.tooltipContent?{component:()=>t.createElement(C,{textColor:l.colors.legacy.textSecondary,iconColor:l.colors.legacy.textSecondary,tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontSize:14,fontWeight:500,info:t.createElement(S,null,n.tooltipContent)},n.label)}:{text:n.label,font:"captionMedium",color:"textSecondary"},topRight:{text:n.value,font:"captionMedium",color:"textPrimary"}}))}))},X=({header:e,rows:o,borderRadius:a,padding:d,fontSize:n,networkID:R})=>{let c=_(a);return t.createElement(h,{className:y.summaryContainer,...c}," ",e?t.createElement("div",{className:y.header},e):null,o.map((r,m)=>{if(r.value===void 0)return null;let p=r.onClick?{role:"button"}:void 0;return t.createElement(F,{border:o.length-1!==m,padding:d,onClick:r.onClick,key:`summary-row-${m}`,...p},t.createElement(O,{key:r.label,fontSize:n},typeof r.value=="string"?r.type==="link"?t.createElement(q,null,t.createElement(U,{href:r.value,onClick:()=>G(r.value)},r.label)):t.createElement(K,{label:r.label,tooltipContent:r.tooltipContent,fontSize:n},t.createElement(A,{showArrow:!!r.onClick},r.type==="address"?t.createElement($,{address:r.value,networkID:R??"solana:101"}):t.createElement(s,{color:r.color,weight:500,align:"right",truncate:!r.onClick},r.value))):t.createElement(t.Fragment,null,t.createElement(s,{color:l.colors.legacy.textSecondary,size:n},r.label),t.createElement(A,{showArrow:!!r.onClick},r.value))),t.createElement(W,null,r.leftSubtext?t.createElement(j,null,t.createElement(N,null,t.createElement(s,{color:r.leftSubtextColor||l.colors.legacy.textSecondary,size:13},r.leftSubtext))):null,r.rightSubtext?t.createElement(E,null,t.createElement(N,null,t.createElement(s,{color:r.rightSubtextColor||l.colors.legacy.textSecondary,size:13},r.rightSubtext))):null))}))},at=({name:e,imageURL:o})=>t.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},t.createElement(P,{iconUrl:o,width:16}),t.createElement(s,{margin:"0 0 0 5px",weight:500},e)),Y=i.div`
  height: 100%;
  overflow: scroll;
  margin-top: -16px;
  padding-top: 16px;
  padding-bottom: 64px;
`,Z=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ee=i.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,te=i.div`
  margin-top: 10px;
  margin-bottom: 20px;
`,oe=i.div`
  margin-bottom: 10px;
`,re=i.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0 10px 0;
`,ie=i(s)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`,ae=i.div`
  background-color: ${l.colors.legacy.accentWarning};
  width: 100%;
  margin-top: 24px;
  margin-bottom: 14px;
  border-radius: 9px;
  padding: 16px;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`,ne=i.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`,nt=({title:e,primaryText:o,secondaryText:a,image:d,sections:n,leftButton:R,warning:c})=>t.createElement(Y,null,t.createElement(Z,null,t.createElement(re,null,R||!1,t.createElement(s,{weight:500,size:22},e)),t.createElement(ee,null,d),o.value&&t.createElement(ie,{weight:600,size:34,color:o.color,align:"center",margin:"10px 0 10px 0"},o.value),a.value&&t.createElement(s,{size:16,color:l.colors.legacy.textSecondary,margin:"0 0 10px 0"},a.value),c&&t.createElement(ae,null,t.createElement(ne,null,t.createElement(L,null)),t.createElement(s,{size:14,color:l.colors.legacy.bgWallet,margin:"3px 0px 3px 8px"},c))),n.map(({title:r,rows:m},p)=>t.createElement(te,{key:`summary-item-${p}`},r&&t.createElement(oe,null,t.createElement(s,{size:14,weight:500,color:l.colors.legacy.textSecondary},r)),t.createElement(J,{rows:m}))));export{J as a,at as b,nt as c};
//# sourceMappingURL=chunk-KO76HHMR.js.map

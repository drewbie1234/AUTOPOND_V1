import{a as Z}from"./chunk-BTR7NPM7.js";import{a as j}from"./chunk-NX2TPU4G.js";import{a as G}from"./chunk-XJNZGVSE.js";import{a as U}from"./chunk-HOL5BAIY.js";import{b as F}from"./chunk-YZVPAGSO.js";import{b as $}from"./chunk-IWKNJK2T.js";import"./chunk-3REPXWWI.js";import{za as K}from"./chunk-R3TVD7ZG.js";import{l as B}from"./chunk-5L73R4BT.js";import"./chunk-KZ5DTHAI.js";import"./chunk-KTETFJNC.js";import"./chunk-MZXI3U4A.js";import"./chunk-DDDNAWUZ.js";import{a as x}from"./chunk-YEA3RDR6.js";import"./chunk-XQXZVJWW.js";import"./chunk-6OVSPI3T.js";import"./chunk-U2ESYN6B.js";import"./chunk-MVPAPIC5.js";import"./chunk-FQHIVBIR.js";import"./chunk-WF7GYM4L.js";import"./chunk-M5BU2PW7.js";import"./chunk-44CPIUAN.js";import{g as Q}from"./chunk-D4L3JZNR.js";import"./chunk-2LWT7HCH.js";import{a as O}from"./chunk-IWKHOUY6.js";import"./chunk-KLYKJSXB.js";import"./chunk-64KUFJMR.js";import{a as V}from"./chunk-QCLMZS5E.js";import"./chunk-FTVLZLLN.js";import"./chunk-WGGKE3W4.js";import"./chunk-5ANSHKRX.js";import"./chunk-DC74PDKK.js";import{P as E,T as A,V as D,W as _,l as P}from"./chunk-SYKKPS5X.js";import"./chunk-N37TUQ6O.js";import"./chunk-6QNUOYSW.js";import"./chunk-T66NYVB2.js";import"./chunk-CXKBWI2Z.js";import"./chunk-T7KN34I4.js";import"./chunk-4MBFYWFI.js";import"./chunk-DR6UT56S.js";import"./chunk-54A4UP2W.js";import"./chunk-CWW3WR5J.js";import"./chunk-K5JGLO2R.js";import{c as z}from"./chunk-SOBOWLRY.js";import{C as N,db as y,m as s}from"./chunk-OA5YQ6R3.js";import"./chunk-6QC2YHQA.js";import"./chunk-TEXQAPAF.js";import"./chunk-IHGFL7KF.js";import"./chunk-2UCAAWZM.js";import"./chunk-OYJH24PS.js";import"./chunk-FVJIE3BT.js";import"./chunk-MW7L7CKT.js";import"./chunk-GYYECUZK.js";import"./chunk-XA7AAXB6.js";import"./chunk-C5GK3F6I.js";import{Pc as M,Ze as W}from"./chunk-S3GUIRR4.js";import"./chunk-JAJRGPOT.js";import"./chunk-AG2PIQR6.js";import{Bb as L,Ca as v,Ea as f,Jb as k,R as p,c as H}from"./chunk-DAZNTGG2.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as T,h as S,n as I}from"./chunk-YJSZZTEX.js";S();I();var t=T(H());S();I();var o=T(H());var J=v({marginLeft:4}),R=s(x).attrs({align:"center",padding:"10px"})`
  background-color: ${f.colors.legacy.bgRow};
  border-radius: 6px;
  height: 74px;
  margin: 4px 0;
`,Y=s.div`
  display: flex;
  align-items: center;
`,tt=s(O)`
  flex: 1;
  min-width: 0;
  text-align: left;
  align-items: normal;
`,et=s(y).attrs({size:16,weight:600,lineHeight:19,noWrap:!0,maxWidth:"175px",textAlign:"left"})``,ot=s(y).attrs({color:f.colors.legacy.textSecondary,size:14,lineHeight:17,noWrap:!0})`
  text-align: left;
  margin-top: 5px;
`,it=s.div`
  width: 55px;
  min-width: 55px;
  max-width: 55px;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  aspect-ratio: 1;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=o.default.memo(e=>{let{t:n}=p(),{collection:i,unknownItem:m,isHidden:r,isSpam:a,onToggleHidden:d}=e,{name:c,id:g}=i,l=D(i),h=l?.chainData,C=_(i),u=A(l?.media,"image",!1,"small"),b=c||l?.name||m;return o.default.createElement(R,null,o.default.createElement(it,null,a&&r?o.default.createElement(Z,{width:32}):u?o.default.createElement(F,{uri:u}):P(h)?o.default.createElement(j,{...h.utxoDetails}):o.default.createElement($,{type:"image",width:42})),o.default.createElement(x,null,o.default.createElement(tt,null,o.default.createElement(Y,null,o.default.createElement(et,null,b),a?o.default.createElement(N,{className:J,fill:f.colors.legacy.accentWarning,height:16,width:16}):null),o.default.createElement(ot,null,n("collectiblesSearchNrOfItems",{nrOfItems:C})))),o.default.createElement(U,{id:g,label:`${c} visible`,checked:!r,onChange:w=>{d(w.target.checked?"show":"hide")}}))});var nt=74,lt=10,st=nt+lt,rt=20,at=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,mt=s.div`
  position: relative;
  width: 100%;
`,ct=()=>{let{handleHideModalVisibility:e}=K(),{data:n,isPending:i}=W(),{viewState:m,viewStateLoading:r}=E({account:n}),a=(0,t.useCallback)(()=>e("collectiblesVisibility"),[e]),d=(0,t.useMemo)(()=>({...m,handleCloseModal:a}),[a,m]),c=(0,t.useMemo)(()=>i||r,[i,r]);return{data:d,loading:c}},dt=t.default.memo(e=>{let{t:n}=p(),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{setTimeout(()=>i.current?.focus(),200)},[]),t.default.createElement(t.default.Fragment,null,t.default.createElement(mt,null,t.default.createElement(Q,{ref:i,tabIndex:0,placeholder:n("assetListSearch"),maxLength:M,onChange:e.handleSearch,value:e.searchQuery,name:"Search collectibles"})),t.default.createElement(B,null,t.default.createElement(L,null,({height:m,width:r})=>t.default.createElement(k,{style:{padding:`${rt}px 0`},scrollToIndex:e.searchQuery!==e.debouncedSearchQuery?0:void 0,height:m,width:r,rowCount:e.listItems.length,rowHeight:st,rowRenderer:a=>t.default.createElement(pt,{...a,data:e.listItems,unknownItem:n("assetListUnknownToken"),getIsHidden:e.getIsHidden,getIsSpam:e.getIsSpam,getSpamStatus:e.getSpamStatus,onToggleHidden:e.onToggleHidden})}))))}),pt=e=>{let{index:n,data:i,style:m,unknownItem:r,getIsHidden:a,getIsSpam:d,getSpamStatus:c,onToggleHidden:g}=e,l=i[n],h=a(l),C=d(l),u=c(l),b=(0,t.useCallback)(w=>g({item:l,status:w}),[g,l]);return t.default.createElement("div",{style:m},t.default.createElement(X,{collection:l,unknownItem:r,isHidden:h,isSpam:C,spamStatus:u,onToggleHidden:b}))},gt=()=>{let{data:e,loading:n}=ct(),{t:i}=p();return t.default.createElement(at,null,n?t.default.createElement(G,null):t.default.createElement(dt,{...e}),t.default.createElement(V,null,t.default.createElement(z,{onClick:e.handleCloseModal},i("commandClose"))))},$t=gt;export{gt as CollectiblesVisibilityPage,$t as default};
//# sourceMappingURL=CollectiblesVisibilityPage-WV6AKVE7.js.map

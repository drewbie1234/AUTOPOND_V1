import{a as s,c as f}from"./chunk-4JSROWN4.js";import{a as T}from"./chunk-CGOTMQG6.js";import"./chunk-JCAQA4CC.js";import{J as I,za as b}from"./chunk-R3TVD7ZG.js";import"./chunk-5L73R4BT.js";import"./chunk-KZ5DTHAI.js";import"./chunk-KTETFJNC.js";import"./chunk-MZXI3U4A.js";import"./chunk-DDDNAWUZ.js";import"./chunk-YEA3RDR6.js";import"./chunk-XQXZVJWW.js";import"./chunk-6OVSPI3T.js";import"./chunk-U2ESYN6B.js";import"./chunk-MVPAPIC5.js";import"./chunk-FQHIVBIR.js";import"./chunk-WF7GYM4L.js";import"./chunk-M5BU2PW7.js";import"./chunk-44CPIUAN.js";import"./chunk-D4L3JZNR.js";import"./chunk-2LWT7HCH.js";import"./chunk-IWKHOUY6.js";import"./chunk-KLYKJSXB.js";import"./chunk-64KUFJMR.js";import"./chunk-QCLMZS5E.js";import"./chunk-FTVLZLLN.js";import"./chunk-WGGKE3W4.js";import"./chunk-5ANSHKRX.js";import"./chunk-DC74PDKK.js";import"./chunk-SYKKPS5X.js";import"./chunk-N37TUQ6O.js";import"./chunk-6QNUOYSW.js";import"./chunk-T66NYVB2.js";import"./chunk-CXKBWI2Z.js";import"./chunk-T7KN34I4.js";import"./chunk-4MBFYWFI.js";import"./chunk-DR6UT56S.js";import"./chunk-54A4UP2W.js";import"./chunk-CWW3WR5J.js";import"./chunk-K5JGLO2R.js";import{c as C,d as h}from"./chunk-SOBOWLRY.js";import{db as l,m as o}from"./chunk-OA5YQ6R3.js";import"./chunk-6QC2YHQA.js";import"./chunk-TEXQAPAF.js";import"./chunk-IHGFL7KF.js";import"./chunk-2UCAAWZM.js";import"./chunk-OYJH24PS.js";import"./chunk-FVJIE3BT.js";import"./chunk-MW7L7CKT.js";import"./chunk-GYYECUZK.js";import"./chunk-XA7AAXB6.js";import"./chunk-C5GK3F6I.js";import{Ib as g,nb as c,tb as x}from"./chunk-S3GUIRR4.js";import"./chunk-JAJRGPOT.js";import"./chunk-AG2PIQR6.js";import{Ea as a,Ia as B,R as y,c as M}from"./chunk-DAZNTGG2.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as v,h as u,n as d}from"./chunk-YJSZZTEX.js";u();d();var n=v(M());var P=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,S=o(l).attrs({size:28,weight:500,color:a.colors.legacy.textPrimary})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textSecondary})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=({networkId:t,token:r})=>{let{t:i}=y(),{handleHideModalVisibility:m}=b(),p=(0,n.useCallback)(()=>{m("insufficientBalance")},[m]),w=t&&x(g(c.getChainID(t))),{canBuy:k,openBuy:F}=I({caip19:w||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?c.getTokenSymbol(t):i("tokens");return n.default.createElement(P,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(T,{type:"failure",backgroundWidth:75}),n.default.createElement(S,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),r?n.default.createElement(B,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(s,{label:i("insufficientBalanceRemaining")},n.default.createElement(f,{color:a.colors.legacy.accentAlert},`${r.balance} ${e}`)),n.default.createElement(s,{label:i("insufficientBalanceRequired")},n.default.createElement(f,null,`${r.required} ${e}`))):null)),k?n.default.createElement(h,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:F,secondaryText:i("commandCancel"),onSecondaryClicked:p}):n.default.createElement(C,{onClick:p},i("commandCancel")))},L=$;export{$ as InsufficientBalance,L as default};
//# sourceMappingURL=InsufficientBalance-P7YVQ7PJ.js.map

import{za as g}from"./chunk-R3TVD7ZG.js";import"./chunk-5L73R4BT.js";import"./chunk-KZ5DTHAI.js";import"./chunk-KTETFJNC.js";import"./chunk-MZXI3U4A.js";import"./chunk-DDDNAWUZ.js";import"./chunk-YEA3RDR6.js";import"./chunk-XQXZVJWW.js";import"./chunk-6OVSPI3T.js";import"./chunk-U2ESYN6B.js";import"./chunk-MVPAPIC5.js";import"./chunk-FQHIVBIR.js";import"./chunk-WF7GYM4L.js";import"./chunk-M5BU2PW7.js";import"./chunk-44CPIUAN.js";import"./chunk-D4L3JZNR.js";import"./chunk-2LWT7HCH.js";import"./chunk-IWKHOUY6.js";import"./chunk-KLYKJSXB.js";import"./chunk-64KUFJMR.js";import"./chunk-QCLMZS5E.js";import"./chunk-FTVLZLLN.js";import"./chunk-WGGKE3W4.js";import"./chunk-5ANSHKRX.js";import{Fa as y,Qb as u}from"./chunk-DC74PDKK.js";import"./chunk-SYKKPS5X.js";import"./chunk-N37TUQ6O.js";import"./chunk-6QNUOYSW.js";import"./chunk-T66NYVB2.js";import"./chunk-CXKBWI2Z.js";import"./chunk-T7KN34I4.js";import"./chunk-4MBFYWFI.js";import"./chunk-DR6UT56S.js";import"./chunk-54A4UP2W.js";import"./chunk-CWW3WR5J.js";import"./chunk-K5JGLO2R.js";import{d as w}from"./chunk-SOBOWLRY.js";import{db as c,fa as T,m as o}from"./chunk-OA5YQ6R3.js";import"./chunk-6QC2YHQA.js";import"./chunk-TEXQAPAF.js";import{b as S}from"./chunk-IHGFL7KF.js";import"./chunk-2UCAAWZM.js";import"./chunk-OYJH24PS.js";import"./chunk-FVJIE3BT.js";import"./chunk-MW7L7CKT.js";import"./chunk-GYYECUZK.js";import"./chunk-XA7AAXB6.js";import"./chunk-C5GK3F6I.js";import"./chunk-S3GUIRR4.js";import"./chunk-JAJRGPOT.js";import"./chunk-AG2PIQR6.js";import{Ea as i,R as f,c as x,x as p,y as d}from"./chunk-DAZNTGG2.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as C,h as l,n as m}from"./chunk-YJSZZTEX.js";l();m();var e=C(x());var O=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,k=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,h=o(c).attrs({size:28,weight:500,color:i.colors.legacy.textPrimary})`
  margin-top: 24px;
`,b=o(c).attrs({size:16,weight:500,color:i.colors.legacy.textSecondary})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: ${i.colors.legacy.textPrimary};
  }
  label {
    color: ${i.colors.legacy.accentPrimary};
    cursor: pointer;
  }
`,P=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=o.div`
  margin-top: auto;
  width: 100%;
`,B=()=>{let{t:n}=f(),{mutateAsync:t}=u(),{handleHideModalVisibility:r,handleShowModalVisibility:a}=g(),v=(0,e.useCallback)(()=>{a("swapConfirmation",void 0,{event:"showSwapModal",payload:{data:{uiContext:"SwapConfirmation"}}}),r("swapTermsOfService")},[a,r]),s=y({goToConfirmation:v});return{onAgreeClick:(0,e.useCallback)(()=>{t(!0),s()},[t,s]),onCancelClick:()=>{r("swapTermsOfService")},t:n}},M=()=>{self.open(p,"_blank")},F=()=>{self.open(d,"_blank")},L=e.default.memo(({onAgreeClick:n,onCancelClick:t,t:r})=>e.default.createElement(O,null,e.default.createElement(k,null,e.default.createElement(P,null,e.default.createElement(T,null),e.default.createElement(h,null,r("termsOfServicePrimaryText")),e.default.createElement(b,null,e.default.createElement(S,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:M},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:F},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(w,{primaryText:r("termsOfServiceActionButtonAgree"),secondaryText:r("commandCancel"),onPrimaryClicked:n,onSecondaryClicked:t})))),_=()=>{let n=B();return e.default.createElement(L,{...n})},X=_;export{_ as SwapTermsOfServicePage,X as default};
//# sourceMappingURL=SwapTermsOfServicePage-YN56YGYZ.js.map

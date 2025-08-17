import{a as N,c as D,d as F,g as G}from"./chunk-HWTNO5Z3.js";import{a as S}from"./chunk-ZWRRK7YX.js";import"./chunk-CGOTMQG6.js";import{a as T}from"./chunk-MFTXGDFN.js";import"./chunk-2NDOR73C.js";import"./chunk-HBIBYXLK.js";import"./chunk-XA6BHT2K.js";import"./chunk-OTQJ6QHF.js";import"./chunk-R3TVD7ZG.js";import"./chunk-5L73R4BT.js";import"./chunk-KZ5DTHAI.js";import"./chunk-KTETFJNC.js";import"./chunk-MZXI3U4A.js";import"./chunk-DDDNAWUZ.js";import{a as L}from"./chunk-YEA3RDR6.js";import"./chunk-XQXZVJWW.js";import"./chunk-6OVSPI3T.js";import"./chunk-U2ESYN6B.js";import"./chunk-MVPAPIC5.js";import"./chunk-FQHIVBIR.js";import"./chunk-WF7GYM4L.js";import"./chunk-M5BU2PW7.js";import"./chunk-44CPIUAN.js";import"./chunk-D4L3JZNR.js";import"./chunk-2LWT7HCH.js";import"./chunk-IWKHOUY6.js";import{c as _}from"./chunk-KLYKJSXB.js";import{a as u}from"./chunk-64KUFJMR.js";import"./chunk-QCLMZS5E.js";import"./chunk-T6YJWTA6.js";import{a as f}from"./chunk-ECTFIIM4.js";import"./chunk-FTVLZLLN.js";import"./chunk-WGGKE3W4.js";import"./chunk-5ANSHKRX.js";import"./chunk-ED7UTSLI.js";import"./chunk-DC74PDKK.js";import"./chunk-SYKKPS5X.js";import"./chunk-N37TUQ6O.js";import"./chunk-6QNUOYSW.js";import"./chunk-T66NYVB2.js";import"./chunk-CXKBWI2Z.js";import"./chunk-T7KN34I4.js";import"./chunk-4MBFYWFI.js";import"./chunk-DR6UT56S.js";import"./chunk-54A4UP2W.js";import"./chunk-CWW3WR5J.js";import"./chunk-K5JGLO2R.js";import"./chunk-SOBOWLRY.js";import{m as s,v as O}from"./chunk-OA5YQ6R3.js";import"./chunk-6QC2YHQA.js";import"./chunk-TEXQAPAF.js";import"./chunk-IHGFL7KF.js";import"./chunk-2UCAAWZM.js";import"./chunk-OYJH24PS.js";import"./chunk-FVJIE3BT.js";import"./chunk-MW7L7CKT.js";import"./chunk-GYYECUZK.js";import"./chunk-XA7AAXB6.js";import"./chunk-C5GK3F6I.js";import{Ge as B,Ne as E}from"./chunk-S3GUIRR4.js";import"./chunk-JAJRGPOT.js";import{g as v}from"./chunk-AG2PIQR6.js";import{Ea as e,Oa as P,Sa as $,c as H}from"./chunk-DAZNTGG2.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as A,h as n,n as i}from"./chunk-YJSZZTEX.js";n();i();var t=A(H());n();i();var a=A(H());n();i();var I=s(u)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${o=>o.$isExpanded?e.colors.legacy.black:e.colors.legacy.bgButton} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o=>o.$isExpanded?"white":e.colors.legacy.textSecondary};
    transition: fill 200ms ease;
    position: relative;
    ${o=>o.top?`top: ${o.top}px;`:""}
    ${o=>o.right?`right: ${o.right}px;`:""}
  }
`;var V=s(L).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.bgWallet};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderSecondary};
  height: 46px;
  opacity: ${o=>o.opacity??"1"};
`,q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,M=s.div`
  width: 24px;
  height: 24px;
`,W=({onBackClick:o,totalSteps:c,currentStepIndex:l,isHidden:d,showBackButtonOnFirstStep:r,showBackButton:g=!0})=>a.default.createElement(V,{opacity:d?0:1},g&&(r||l!==0)?a.default.createElement(I,{right:1,onClick:o},a.default.createElement(O,null)):a.default.createElement(M,null),a.default.createElement(q,null,v(c).map(p=>{let m=p<=l?e.colors.legacy.accentPrimary:e.colors.legacy.bgButton;return a.default.createElement(u,{key:p,diameter:12,color:m})})),a.default.createElement(M,null));n();i();var K=()=>{let{mutateAsync:o}=E(),{hardwareStepStack:c,pushStep:l,popStep:d,currentStep:r,setOnConnectHardwareAccounts:g,setOnConnectHardwareDone:y,setExistingAccounts:p}=N(),{data:m=[],isFetched:x,isError:k}=B(),C=_(c,(h,U)=>h?.length===U.length),X=c.length>(C??[]).length,b=C?.length===0,j={initial:{x:b?0:X?150:-150,opacity:b?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},J=(0,t.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),d())},[r,d]);return T(()=>{g(async h=>{await o(h),await f.set(S,!await f.get(S))}),y(()=>self.close()),l(t.default.createElement(G,null))},c.length===0),(0,t.useEffect)(()=>{p({data:m,isFetched:x,isError:k})},[m,x,k,p]),t.default.createElement(D,null,t.default.createElement(W,{totalSteps:3,onBackClick:J,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),t.default.createElement(P,{mode:"wait"},t.default.createElement($.div,{style:{display:"flex",flexGrow:1},key:`${c.length}_${C?.length}`,...j},t.default.createElement(F,null,r()))))},Po=K;export{Po as default};
//# sourceMappingURL=SettingsConnectHardware-DWHMTL2V.js.map

import{a as L}from"./chunk-CGOTMQG6.js";import{a as J}from"./chunk-XQXZVJWW.js";import{e as q,f as I,g as D}from"./chunk-U2ESYN6B.js";import{a as O}from"./chunk-IWKHOUY6.js";import{p as V}from"./chunk-N37TUQ6O.js";import{va as k,y as B}from"./chunk-T66NYVB2.js";import{a as H,c as T,e as F}from"./chunk-SOBOWLRY.js";import{db as K,m}from"./chunk-OA5YQ6R3.js";import{b as g}from"./chunk-IHGFL7KF.js";import{T as y}from"./chunk-AG2PIQR6.js";import{Ea as c,Ia as b,Ja as x,Oa as f,Sa as P,c as v}from"./chunk-DAZNTGG2.js";import{f as A,h as u,n as S}from"./chunk-YJSZZTEX.js";u();S();var n=A(v());u();S();var e=A(v());var M=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${r=>r.addScreenPadding?"16px":"0"};
`,G=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,W=m.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,X=m(O).attrs({align:"center",justify:"center",margin:"0 0 15px 0"})`
  position: relative;
  border-radius: 50%;
  background-color: ${y(c.colors.legacy.accentPrimary,.2)};
  box-shadow: 0 0 0 20px ${y(c.colors.legacy.accentPrimary,.2)};
`,z=m(K).attrs({size:28,weight:500,color:c.colors.legacy.textPrimary})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,Y=()=>e.default.createElement(X,null,e.default.createElement(H,{diameter:54,color:c.colors.legacy.accentPrimary,trackColor:c.colors.legacy.bgArea})),Q=({message:r})=>e.default.createElement(b,{marginX:12,alignItems:"center"},Array.isArray(r)?r.map((i,o)=>e.default.createElement(x,{key:`message-${o}`,font:"body",color:"textSecondary",align:"center",marginX:12,marginTop:16},i)):e.default.createElement(x,{font:"body",marginTop:16,color:"textSecondary",align:"center"},r)),h=({header:r,icon:i,title:o,message:a,txHash:t,txHashTitle:l,isClosable:s,primaryButton:p,secondaryButton:d})=>e.default.createElement(M,null,r,e.default.createElement(G,null,e.default.createElement(f,{mode:"wait",initial:!0},e.default.createElement(P.div,{key:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},i)),e.default.createElement(z,null,o),e.default.createElement(Q,{message:a}),t&&e.default.createElement(f,{mode:"wait",initial:!1},e.default.createElement(P.div,{key:t,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},e.default.createElement(J,{txHash:t},l)))),s?e.default.createElement(W,null,d&&p?e.default.createElement(F,{buttons:[{text:d.title,onClick:d.onPress},{theme:"primary",text:p.title,onClick:p.onPress}]}):p?e.default.createElement(T,{theme:"primary",onClick:p.onPress},p.title):d?e.default.createElement(T,{onClick:d.onPress},d.title):null):null),$=({ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:a})=>e.default.createElement(M,{addScreenPadding:!0},e.default.createElement(I,{ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:a})),N=({title:r,message:i,txHash:o,txHashTitle:a,primaryButton:t,showUKDisclaimer:l,openExternalLink:s})=>e.default.createElement(h,{icon:e.default.createElement(Y,null),message:i,title:r,txHash:o,txHashTitle:a,primaryButton:t,isClosable:!!o,header:l&&s?e.default.createElement(k,{navigateToExternalLink:s,paddingTop:8}):null}),C=({title:r,message:i,txHash:o,txHashTitle:a,primaryButton:t,showUKDisclaimer:l,openExternalLink:s})=>e.default.createElement(h,{icon:e.default.createElement(L,{type:"failure"}),message:i,title:r,txHash:o,txHashTitle:a,primaryButton:t,isClosable:!0,header:l&&s?e.default.createElement(k,{navigateToExternalLink:s,paddingTop:8}):null}),U=({title:r,message:i,txHash:o,txHashTitle:a,primaryButton:t,secondaryButton:l,showUKDisclaimer:s,openExternalLink:p})=>e.default.createElement(h,{icon:e.default.createElement(L,{type:"success"}),title:r,message:i,txHash:o,txHashTitle:a,isClosable:!0,primaryButton:t,secondaryButton:l,header:s&&p?e.default.createElement(k,{navigateToExternalLink:p,paddingTop:8}):null});var w=m.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${r=>r.theme.purple};
  text-decoration: none;
  cursor: pointer;
`,Z=({txError:r,addressType:i,statusPageProps:o,executeConvertStake:a,onClose:t})=>q(r)?n.default.createElement(D,{ledgerActionError:r,onRetryClick:a,onCancelClick:t}):o.type==="error"?n.default.createElement(C,{...o}):n.default.createElement($,{ledgerAction:a,numberOfTransactions:1,cancel:t,ledgerApp:V(i)}),Te=n.default.memo(r=>{let{process:i,addressType:o,isLedger:a,statusPageProps:t,txError:l,onClose:s,executeLiquidStake:p,learnMoreLink:d,isJitoSOL:_}=r;if(a&&!t.txHash)return n.default.createElement(Z,{txError:l,addressType:o,statusPageProps:t,executeConvertStake:p,onClose:s});switch(t.type){case"loading":return n.default.createElement(N,{...t});case"error":return n.default.createElement(C,{...t});case"success":{let E=null;return _&&(E=i==="convert"?[n.default.createElement(g,{i18nKey:"liquidStakeDepositStakeDisclaimer"},"You'll receive JitoSOL in 10 hours. ",n.default.createElement(w,{href:B},"Learn more")),n.default.createElement(g,{i18nKey:"convertStakeStatusSuccessMessage"},"Earn additional rewards with your JitoSOL ",n.default.createElement(w,{href:d},"here."))]:n.default.createElement(g,{i18nKey:"convertStakeStatusSuccessMessage"},"Earn additional rewards with your JitoSOL ",n.default.createElement(w,{href:d},"here."))),n.default.createElement(U,{title:t.title,txHash:t.txHash,txHashTitle:t.txHashTitle,primaryButton:t.primaryButton,secondaryButton:t.secondaryButton,message:E,paddingBottom:t.paddingBottom,showUKDisclaimer:t.showUKDisclaimer,openExternalLink:t.openExternalLink})}default:throw new Error("Unsupported status page type")}});export{Te as a};
//# sourceMappingURL=chunk-WZM2POJC.js.map

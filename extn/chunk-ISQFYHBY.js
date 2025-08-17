import{a as u,b as H,c as g}from"./chunk-4JSROWN4.js";import{a as J}from"./chunk-JCAQA4CC.js";import{K as E,d as V,n as q,s as B}from"./chunk-R3TVD7ZG.js";import{o as c}from"./chunk-WF7GYM4L.js";import{a as _}from"./chunk-QCLMZS5E.js";import{va as U,x as O,y as N}from"./chunk-T66NYVB2.js";import{a as z}from"./chunk-K5JGLO2R.js";import{cb as K,db as h,m as i}from"./chunk-OA5YQ6R3.js";import{b as y}from"./chunk-IHGFL7KF.js";import{ld as P}from"./chunk-S3GUIRR4.js";import{Ca as l,Ea as f,Ia as b,Ja as I,c as C,eb as D}from"./chunk-DAZNTGG2.js";import{f as v,h as w,n as T}from"./chunk-YJSZZTEX.js";w();T();var o=v(C());w();T();var n=v(C());var mo=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 83px;
  padding: 16px;
`,ao=i.div`
  margin-left: 12px;
  width: 100%;
`,po=i(h).attrs({size:14,weight:400,color:f.colors.legacy.textSecondary,textAlign:"left"})``,fo=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,uo=i(h).attrs({size:28,lineHeight:32,weight:600,color:f.colors.legacy.textPrimary,textAlign:"left"})`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=({title:r,network:a,tokenType:d,symbol:s,logoUri:p,tokenAddress:k,amount:t,amountUsd:e})=>n.default.createElement(mo,null,n.default.createElement(B,{image:{type:"fungible",src:p,fallback:s||k},size:44,tokenType:d,chainMeta:a}),n.default.createElement(ao,null,n.default.createElement(fo,null,n.default.createElement(po,null,r),n.default.createElement(V,{value:e,font:"caption",color:"textSecondary"})),n.default.createElement(uo,null,t)));var m={screen:l({overflow:"auto"}),body:l({display:"flex",flexDirection:"column",justifyContent:"space-between"}),content:l({display:"flex",flexDirection:"column",width:"100%"}),assets:l({backgroundColor:"bgRow",borderRadius:6,width:"100%"}),line:l({backgroundColor:"bgWallet",width:"100%",height:1}),button:l({width:"100%",height:48})},x=i(K).attrs({color:z.grayLight,size:14})`
  text-align: left;
  line-height: normal;
  max-width: 100%;
  margin: 16px 0;
`,W=i.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${r=>r.theme.purple};
  text-decoration: none;
  cursor: pointer;
`,go=({isJitoSOL:r,feeFootnoteText:a,feeFootnoteDescriptionText:d,feeFootnoteTooltipText:s,showUKDisclaimer:p})=>r?o.default.createElement(x,null,o.default.createElement(y,{i18nKey:"liquidStakeReviewConversionFootnote"},"When you stake Solana tokens in exchange for JitoSOL you'll receive a slightly lesser amount of JitoSOL.",o.default.createElement(W,{href:O},"Learn more"))):p?o.default.createElement(E,{disclaimers:[],showUKDisclaimer:!0,marginTop:16,onPastPerformancePress:void 0,onDisclosuresPress:void 0}):o.default.createElement(o.default.Fragment,null,o.default.createElement(x,null,o.default.createElement(J,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontWeight:400,info:o.default.createElement(H,{tooltipContent:o.default.createElement(c,null,s)}),textColor:f.colors.legacy.textSecondary},a)),o.default.createElement(x,null,d)),wo=()=>o.default.createElement(x,null,o.default.createElement(y,{i18nKey:"liquidStakeDepositStakeDisclaimer"},"You'll receive JitoSOL in 10 hours.",o.default.createElement(W,{href:N},"Learn more"))),zo=o.default.memo(({process:r,headerTitle:a,onBack:d,openExternalLink:s,onPrimaryButtonPress:p,canSubmit:k,payAsset:t,receiveAsset:e,account:j,providerName:M,apy:A,networkFee:Y,isLoading:F,networkFeeErrorMsg:$,isJitoSOL:G,strings:Q,showUKDisclaimer:S})=>{let{accountLabelText:X,providerLabelText:Z,apyLabelText:R,apyLabelTextTooltip:oo,networkFeeLabelText:eo,primaryButtonText:to,feeFootnoteText:io,feeFootnoteDescriptionText:no,feeFootnoteTooltipText:ro}=Q,lo=[e?o.default.createElement(u,{key:"account-row",label:X},o.default.createElement(g,null,o.default.createElement(I,{font:"body",children:P(j,4)}))):null,o.default.createElement(u,{key:"provider-row",label:Z},o.default.createElement(g,null,M)),o.default.createElement(u,{key:"apy-row",label:R,tooltipContent:o.default.createElement(c,null,oo)},o.default.createElement(g,null,A)),o.default.createElement(u,{key:"network-fee-row",label:eo,isLoading:F,error:$},o.default.createElement(g,null,Y))];return o.default.createElement("div",{className:m.screen},o.default.createElement(q,{leftButton:{type:"back",onClick:d},titleSize:"regular"},a),o.default.createElement("div",{className:m.body},s&&S?o.default.createElement(b,{marginBottom:"base"},o.default.createElement(U,{navigateToExternalLink:s,paddingTop:8})):null,o.default.createElement("div",{className:m.content},o.default.createElement("div",{className:m.assets},t?o.default.createElement(L,{title:t.title,amount:t.amount+" "+t.symbol,amountUsd:t.amountUsd,logoUri:t.logoUri,symbol:t.symbol,tokenType:t.tokenType,tokenAddress:t.tokenAddress,network:t.network}):null,o.default.createElement("div",{className:m.line}),e?o.default.createElement(L,{title:e.title,amount:e.amount+" "+e.symbol,amountUsd:e.amountUsd,logoUri:e.logoUri,symbol:e.symbol,tokenType:e.tokenType,tokenAddress:e.tokenAddress,network:e.network}):null),o.default.createElement(b,{borderRadius:8,gap:1,overflow:"hidden",marginTop:"base"},lo),r==="mint"?o.default.createElement(go,{isJitoSOL:G,feeFootnoteText:io,feeFootnoteDescriptionText:no,feeFootnoteTooltipText:ro,showUKDisclaimer:S}):o.default.createElement(wo,null)),o.default.createElement(_,null,o.default.createElement(D,{className:m.button,theme:"primary",disabled:!k||F,onClick:p},to))))});export{zo as a};
//# sourceMappingURL=chunk-ISQFYHBY.js.map

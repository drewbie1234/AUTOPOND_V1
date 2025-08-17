import{a as G,b as _}from"./chunk-KZ5DTHAI.js";import{d as K}from"./chunk-6OVSPI3T.js";import{b as q}from"./chunk-FQHIVBIR.js";import{b as W}from"./chunk-M5BU2PW7.js";import{j as f}from"./chunk-KLYKJSXB.js";import{E as F,L as I,R as D,V as z,Y as H,t as B}from"./chunk-T66NYVB2.js";import{S as M,ha as N}from"./chunk-CXKBWI2Z.js";import{J as L,U as E}from"./chunk-4MBFYWFI.js";import{a as U,d as O}from"./chunk-SOBOWLRY.js";import{db as n,m as r}from"./chunk-OA5YQ6R3.js";import{b as V}from"./chunk-IHGFL7KF.js";import{Ib as k,If as P,L as h,M as b,P as yo,ld as w}from"./chunk-S3GUIRR4.js";import{c as v}from"./chunk-AG2PIQR6.js";import{Ea as a,R as g,c as So}from"./chunk-DAZNTGG2.js";import{f as fo,h as T,n as A}from"./chunk-YJSZZTEX.js";T();A();var o=fo(So());var xo=i=>{let{t}=g(),{voteAccountPubkey:l}=i,{showStakeAccountCreateAndDelegateStatusModal:Y,closeAllModals:j}=W(),J=()=>{i.onClose(),j()},{data:X}=P("solana"),{data:Z}=M(),R=Z?.totalQuantityString??"";N(X,"STAKE_FUNGIBLE");let{cluster:oo,connection:u}=E(),s=I(u),to=k("solana"),{data:eo}=L({query:{data:to}}),no=eo?.usd,e=(0,o.useMemo)(()=>s.results?.find(go=>go.voteAccountPubkey===l),[s.results,l]),ao=e?.info?.name??e?.info?.keybaseUsername??w(l),ro=K(u),[m,S]=(0,o.useState)(""),c=v(m),p=h(1+(z(u).data??0)),y=D({balance:R,cluster:oo,rentExemptionMinimum:p}),io=()=>S(y.toString()),so=c.isLessThan(p),lo=c.isGreaterThan(y),mo=c.isFinite(),d=m&&so?t("validatorViewAmountSOLRequiredToStakeInterpolated",{amount:p}):m&&lo?t("validatorViewInsufficientBalance"):"",co=ro.isPending,x=mo&&!d&&!co,uo=()=>{Y({lamports:b(c).toNumber(),votePubkey:l,usdPerSol:no,onClose:J,validatorName:ao})},{data:C=null}=H(),po=C?F(C,e?.commission??0):null;return o.default.createElement(Co,null,s.isPending?o.default.createElement(U,null):s.isError||!e?o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(Q,null,o.default.createElement(n,{size:16,color:a.colors.legacy.textSecondary,lineHeight:20},t("validatorViewErrorFetching")," ",s.error?.message??""))):o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(Q,null,o.default.createElement(n,{size:16,color:a.colors.legacy.textSecondary,lineHeight:20,margin:"0 0 20px 0"},o.default.createElement(V,{i18nKey:"validatorViewDescriptionInterpolated"},"Choose how much SOL you\u2019d like to ",o.default.createElement("br",null),"stake with this validator. ",o.default.createElement($,{href:B},"Learn more"))),o.default.createElement(G,{value:m,symbol:"SOL",alignSymbol:"right",buttonText:t("maxInputMax"),width:47,warning:!!d,onSetTarget:io,onUserInput:S}),o.default.createElement(Ao,null,o.default.createElement(n,{color:d?a.colors.legacy.accentAlert:"transparent",size:16,textAlign:"left"},d)),o.default.createElement(ho,{onEdit:i.onClose}),o.default.createElement(_,{identifier:e.voteAccountPubkey,name:e.info?.name,keybaseUsername:e.info?.keybaseUsername,iconUrl:e.info?.iconUrl,website:e.info?.website,data:[{label:t("validatorCardEstimatedApy"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},po,"%")},{label:t("validatorCardCommission"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},e.commission,"%")},{label:t("validatorCardTotalStake"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},o.default.createElement(q,null,e.activatedStake))}]})),o.default.createElement(To,null,o.default.createElement(O,{primaryText:t("validatorViewActionButtonStake"),secondaryText:t("commandClose"),onPrimaryClicked:uo,onSecondaryClicked:i.onClose,primaryTheme:x?"primary":"default",primaryDisabled:!x}))))},ot=xo,Co=r.div`
  display: grid;
  grid-template-rows: 42px auto 47px;
  height: 100%;
`,Q=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,$=r.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${a.colors.legacy.accentPrimary};
  text-decoration: none;
  cursor: pointer;
`,To=r.section`
  display: flex;
  gap: 15px;
`,Ao=r.div`
  width: 100%;
`,vo=r(n)`
  width: 100%;
  margin-top: 15px;
  > a {
    color: ${a.colors.legacy.accentPrimary};
    cursor: pointer;
  }
`,ho=i=>{let{t}=g();return o.default.createElement(vo,{size:16,color:a.colors.legacy.textSecondary,lineHeight:20,textAlign:"left"},t("validatorViewValidator")," \u2022 ",o.default.createElement($,{onClick:i.onEdit},t("commandEdit")))};export{xo as a,ot as b};
//# sourceMappingURL=chunk-BZWP4BNT.js.map

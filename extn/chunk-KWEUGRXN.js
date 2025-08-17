import{e as ce}from"./chunk-4DM6CL4C.js";import{a as E,c as z,d as K,e as H,f as _}from"./chunk-TJXJO23Z.js";import{a as y}from"./chunk-YEA3RDR6.js";import{a as pe,b as V}from"./chunk-D4L3JZNR.js";import{kc as de,lc as le}from"./chunk-DC74PDKK.js";import{a as L}from"./chunk-T7KN34I4.js";import{db as x,m as s,u as W}from"./chunk-OA5YQ6R3.js";import{c as se}from"./chunk-FVJIE3BT.js";import{b as ae}from"./chunk-C5GK3F6I.js";import{Be as oe,Hd as R,Je as re,Md as ee,Nf as ie,bd as Y,cc as Q,cf as ne,ld as Z,ma as G,nb as g,ve as B,xc as J,ye as te,yf as U}from"./chunk-S3GUIRR4.js";import{Ea as M,I as X,J as q,Ma as b,R as A,c as C,ib as v}from"./chunk-DAZNTGG2.js";import{f as I,h as p,n as c}from"./chunk-YJSZZTEX.js";p();c();var n=I(C());p();c();var r=I(C());var ue=({onChange:e,value:t,networkID:o})=>{let d=B(),i=(0,r.useMemo)(()=>{if(!o)return[];let f=g.getAddressTypes(o);return d.filter(l=>f.includes(l))},[d,o]);if(!i||i.length===0)return null;let m=i.includes(t)?t:i[0];return r.default.createElement(Ce,{onChange:e,value:m},({isExpanded:f})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(be,{isActive:f},r.default.createElement(me,{networkID:o,addressType:m},r.default.createElement(fe,null,r.default.createElement(W,{fill:M.colors.legacy.textSecondary,width:10})))),r.default.createElement(ve,{portal:!1},r.default.createElement(H,{maxHeight:"300px"},i?.filter(l=>l!==m)?.map(l=>r.default.createElement(Te,{key:l,value:l},r.default.createElement(me,{networkID:o,addressType:l})))))))},me=({addressType:e,networkID:t,children:o})=>!t||!e?null:r.default.createElement(y,{justify:"space-between"},r.default.createElement(y,null,r.default.createElement(L,{networkID:t,size:32}),r.default.createElement(ke,null,G.getDisplayName(e))),o),Ce=s(E)`
  width: 100%;
  position: relative;
`,fe=s.div`
  display: inline-flex;
  line-height: 0;
`,be=s(({isActive:e,...t})=>r.default.createElement(z,{...t}))`
  padding: 8px 16px 8px 12px;

  ${fe} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,ve=s(K)`
  z-index: 2;
  width: 100%;
`,Te=s(_)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,ke=s(x).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``;p();c();var a=I(C());var Pe=s(E)`
  width: 100%;
  position: relative;
`,he=s.div`
  display: inline-flex;
  line-height: 0;
`,De=s(({isActive:e,...t})=>a.default.createElement(z,{...t}))`
  padding: 8px 16px 8px 12px;

  ${he} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,Fe=s(K)`
  z-index: 2;
  width: 100%;
`,Ne=s(_)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,Be=s(x).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``,Se=({onChange:e,value:t})=>{let o=te();return a.default.createElement(Pe,{onChange:e,value:t},({isExpanded:d})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(De,{isActive:d},a.default.createElement(ye,{networkID:t},a.default.createElement(he,null,a.default.createElement(W,{fill:M.colors.legacy.textSecondary,width:10})))),a.default.createElement(Fe,{portal:!1},a.default.createElement(H,{maxHeight:"300px"},o.filter(i=>i!==t).map(i=>a.default.createElement(Ne,{key:i,value:i},a.default.createElement(ye,{networkID:i})))))))},ye=({networkID:e,children:t})=>a.default.createElement(y,{justify:"space-between"},a.default.createElement(y,null,a.default.createElement(L,{networkID:e,size:32}),a.default.createElement(Be,null,g.getNetworkName(e))),t);var Tt=({onClick:e,disabled:t})=>{let{t:o}=A(),d=oe();return n.default.createElement(b,{topLeft:{text:o("addAccountImportWalletPrimaryText"),font:"bodyMedium"},bottomLeft:{text:o(d?"addAccountImportWalletSolanaSecondaryText":"addAccountImportWalletSecondaryText")},start:n.default.createElement(v,{backgroundColor:"borderPrimary",color:"textPrimary",icon:"Download",shape:"circle",size:32}),onClick:e,disabled:t})},kt=({control:e,getValues:t,register:o,setValue:d,trigger:i,errors:m,nameValidations:f,privateKey:l,privateKeyValidations:D,addressPreview:T})=>{let{t:k}=A(),F=ie(w=>w.editableAccountMetadata),h=t("networkID"),S=g.getAddressTypes(h),u=B(),Ae=u.filter(w=>S.includes(w));return n.default.createElement(ce,null,n.default.createElement(U,{name:"networkID",control:e,render:({field:{onChange:w,value:O}})=>u.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(Se,{onChange:N=>{w(N);let ge=g.getAddressTypes(N),xe=u.filter(Ie=>ge.includes(Ie));d("addressType",xe[0]),l&&i("privateKey")},value:O})}),n.default.createElement(U,{name:"addressType",control:e,render:({field:{onChange:w,value:O}})=>Ae.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(ue,{onChange:N=>{w(N),l&&i("privateKey")},value:O,networkID:h})}),n.default.createElement(V.WithWarning,{placeholder:k("addAccountImportAccountName"),defaultValue:F?.name,warning:!!m.name,warningMessage:m.name?.message,autoComplete:"off",maxLength:ae,...o("name",f)}),n.default.createElement(We.WithWarning,{placeholder:k("addAccountImportAccountPrivateKey"),defaultValue:"",warning:!!m.privateKey,warningMessage:m.privateKey?.message,autoComplete:"off",...o("privateKey",D)}),T?n.default.createElement(Me,{label:k("settingsWalletAddress"),pubkey:T}):null)},Me=n.default.memo(({label:e,pubkey:t})=>n.default.createElement(y,{justify:"space-between",align:"center",margin:"-7px 0 0"},n.default.createElement(x,{size:16,weight:600},e),n.default.createElement(x,{size:16},Z(t,4)))),Le=s(V).attrs({as:"textarea"})`
  height: 120px;
  text-align: start;
  resize: none;
  -webkit-text-security: disc;
  font-size: 16px;
`,We=pe(Le);p();c();var $=I(C()),Lt=({onClick:e,disabled:t})=>{let{t:o}=A(),d=X||q;return $.default.createElement(b,{topLeft:{text:o("addAccountHardwareWalletPrimaryText"),font:"bodyMedium"},bottomLeft:{text:o("addAccountHardwareWalletSecondaryText")},start:$.default.createElement(v,{backgroundColor:"borderPrimary",color:"textPrimary",icon:"WalletHardware",shape:"circle",size:32}),onClick:e,disabled:t||d})};p();c();var j=I(C()),_t=({onClick:e,disabled:t})=>{let{t:o}=A();return j.default.createElement(b,{topLeft:{text:o("addAccountImportSeedPhrasePrimaryText"),font:"bodyMedium"},bottomLeft:{text:o("addAccountImportSeedPhraseSecondaryText")},start:j.default.createElement(v,{backgroundColor:"borderPrimary",color:"textPrimary",icon:"File",shape:"circle",size:32}),onClick:e,disabled:t})};p();c();var we=I(C());var eo=e=>{let t=ee(),{mutateAsync:o}=ne(),{mutateAsync:d}=re(),i=J();return{handleImportSeed:(0,we.useCallback)(async({mnemonic:f,accountMetas:l,accountName:D,offsetIndex:T=0,seedlessOnboardingType:k})=>{let F={},h=await(e==="seed"?de(f,l,D):le(f,l,D));if(h.forEach((S,u)=>{F[S.identifier]=Y({account:S,index:u,offsetIndex:T})}),h.length===0)throw new Error("Failed to set seed phrase");if(await d({metadataBatch:F}),await o({identifier:h[0].identifier}),e==="seedless"&&k==="seedlessBackup")try{let S=new Set(h.map(u=>u.seedIdentifier));await Promise.all([...S].map(u=>t.addAuthFactor({secretIdentifier:u})))}catch{Q.captureError(new Error("Unable to add auth factor for se*dless!"),"Auth")}se.capture("addSeedAccount",{data:{walletIndex:T+1}}),R(i)},[d,o,e,i,t])}};export{eo as a,Se as b,Tt as c,kt as d,Lt as e,_t as f};
//# sourceMappingURL=chunk-KWEUGRXN.js.map

import{a as B}from"./chunk-CGOTMQG6.js";import{a as at}from"./chunk-MFTXGDFN.js";import{b as le}from"./chunk-2NDOR73C.js";import{b as it,c as dt,d as Te}from"./chunk-U2ESYN6B.js";import{d as Y}from"./chunk-MVPAPIC5.js";import{b as st}from"./chunk-44CPIUAN.js";import{a as Oe}from"./chunk-ED7UTSLI.js";import{c as Xe}from"./chunk-DC74PDKK.js";import{a as et,l as tt,w as ae}from"./chunk-N37TUQ6O.js";import{l as nt,m as rt}from"./chunk-6QNUOYSW.js";import{a as se}from"./chunk-T7KN34I4.js";import{b as ie,c as E}from"./chunk-SOBOWLRY.js";import{db as $,m as s,va as ct}from"./chunk-OA5YQ6R3.js";import{b as ot}from"./chunk-FVJIE3BT.js";import{$ as Ve,Mf as Qe,_ as Ue,_b as Ye,aa as qe,gd as ye,ld as Re,mb as Ke,me as we,nb as G,ue as Ze,ve as be,we as Je,ye as xe}from"./chunk-S3GUIRR4.js";import{E as je,e as De,ha as $e,na as ze}from"./chunk-AG2PIQR6.js";import{Ea as P,R as v,c as te}from"./chunk-DAZNTGG2.js";import{f as ee,h as A,n as S}from"./chunk-YJSZZTEX.js";A();S();var kt={existingAccounts:{data:[],isFetched:!1,isError:!1},hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{},onConnectHardwareAccounts:e=>Promise.resolve(),onConnectHardwareDone:()=>{}},N=Qe((e,o)=>({...kt,pushStep:t=>{let n=o().hardwareStepStack;e({hardwareStepStack:n.concat(t)})},popStep:()=>{let n=o().hardwareStepStack.length-1;if((o().hardwareStepSubStack[n]??[]).length)return e(we(d=>{d.hardwareStepSubStack[n]=d.hardwareStepSubStack[n].slice(0,-1)}));e(we(d=>{d.hardwareStepStack=d.hardwareStepStack.slice(0,-1)}))},pushSubStep:t=>{let r=o().hardwareStepStack.length-1,d=o().hardwareStepSubStack[r]??[];e(we(w=>{w.hardwareStepSubStack[r]=d.concat([t])}))},currentStep:()=>{let t=o().hardwareStepStack,n=o().hardwareStepSubStack,r=t.length>0?t.length-1:t.length;return n[r]?.length?De(n[r]):De(t)},setExistingAccounts:t=>{e({existingAccounts:t})},setSelectedChains:(t,n)=>{e({selectedChains:t,selectedChainsMap:n})},setDecrementChainImportStep:()=>{let t=o().chainImportStep;e({chainImportStep:t-1})},setIncrementChainImportStep:()=>{let t=o().chainImportStep;e({chainImportStep:t+1})},setDerivedAccountGroups:t=>{e({derivedAccountGroups:t})},setDiscoveredAccounts:(t,n)=>{e({discoveredAccounts:t,activeAccountsFound:n})},selectAccount:t=>{let r={...o().selectedAccounts};r[t]=!0,e({selectedAccounts:r})},deselectAccount:t=>{let r={...o().selectedAccounts};delete r[t],e({selectedAccounts:r})},setSelectedAccounts:t=>{e({selectedAccounts:t})},setOnConnectHardwareAccounts:t=>{e({onConnectHardwareAccounts:t})},setOnConnectHardwareDone:t=>{e({onConnectHardwareDone:t})}}));A();S();A();S();A();S();var pt=s.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  width: ${420}px;
  min-height: ${480}px;
  position: relative;
  overflow: hidden;
  background-color: ${P.colors.legacy.bgWallet};
  border: 1px solid ${P.colors.legacy.borderPrimary};
  border-radius: 16px;
`;var go=s(pt)`
  display: flex;
  flex-direction: column;
`,Ao=s.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
`,R=s.div`
  padding-top: 44px;
`,W=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  overflow: auto;
`;A();S();var H=ee(te());A();S();var a=ee(te());A();S();var k=ee(te());A();S();var _=ee(te());var ve=()=>{let{t:e}=v(),{discoveredAccounts:o,selectedAccounts:t,onConnectHardwareAccounts:n,onConnectHardwareDone:r}=N(),{mutateAsync:d}=Ze(),[w,C]=(0,_.useState)(!1),f=(0,_.useMemo)(()=>o.filter(l=>!!t[l.discoveryIdentifier]),[o,t]);return(0,_.useEffect)(()=>{if(f.length){let l=[],c=new Set;for(let u of f){let{accounts:g,seedIndex:T,accountIndex:b}=u,L=[],I=[];for(let y of g)Ue(y.derivationPathType)?(I.push({pathType:y.derivationPathType,value:y.publicKey}),(!("amount"in y)||parseFloat(y.amount)!==0)&&c.add(y.chainType)):(Ve(y.derivationPathType)||qe(y.derivationPathType))&&L.push({pathType:y.derivationPathType,value:y.address});l.push({derivationIndex:T,addresses:L,publicKeys:I,accountIndex:b})}n({accounts:l}).then(()=>{c.size>0&&d({addressTypes:Array.from(c)})}).finally(()=>C(!0))}else C(!0)},[f,n,d]),_.default.createElement(W,null,_.default.createElement(R,null,_.default.createElement(Y,{icon:_.default.createElement(B,{type:"success"}),primaryText:e("connectHardwareAccountsAddedInterpolated",{numOfAccounts:f.length}),headerStyle:"large",secondaryText:e("connectHardwareFinishSecondaryText")})),_.default.createElement(E,{onClick:r,theme:"primary",disabled:!w},e("pastParticipleDone")))};A();S();var M=ee(te());A();S();var h=ee(te());var Ot=(e,o,t)=>{switch(o){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:t});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:t})}},Pt=({account:e})=>{let{t:o}=v();return h.default.createElement(Wt,null,h.default.createElement(Bt,null,h.default.createElement(se,{networkID:e.chain.id,size:40,borderColor:"bgRow"})),h.default.createElement(Nt,null,h.default.createElement(Lt,null,h.default.createElement(st,{networkID:e.chain.id,walletAddress:e.address},h.default.createElement(He,null,e.chain.name)),h.default.createElement(He,null,Re(e.address,4))),h.default.createElement(ke,null,"amount"in e&&"chain"in e?h.default.createElement(ut,null,$e(e.amount)," ",e.chain.symbol):null,"amount"in e&&e.lastActivityTimestamp?h.default.createElement(ut,null,o("onboardingImportAccountsLastActive",{formattedTimestamp:je(e.lastActivityTimestamp*1e3,!0)})):null)))},lt=h.default.memo(({accountType:e,accounts:o,checked:t,accountIndex:n,onPress:r})=>{let{t:d}=v(),w=n+1;return h.default.createElement(mt,null,h.default.createElement(Ft,null,h.default.createElement(He,null,Ot(d,e,w)),h.default.createElement(le,{checked:t,onChange:r,"data-testid":"account-select-address-row-checkbox"})),o.map((C,f)=>h.default.createElement(Pt,{key:`${C.address}-${f}`,account:C})))}),jo=h.default.memo(({totalAccounts:e,selectedAccounts:o,onPress:t})=>{let{t:n}=v();return h.default.createElement(mt,null,h.default.createElement(Et,null,h.default.createElement(He,null,n("onboardingSelectAccountsNoOfAccountsSelected",{numOfAccounts:o}))," ",h.default.createElement(Mt,null,n("onboardingSelectAccountSelectAllText")," ",h.default.createElement(le,{checked:o===e,onChange:t,"data-testid":"account-select-all-checkbox"}))))}),mt=s.div`
  margin-bottom: 24px;
  width: 100%;
`,Bt=s.div`
  flex-shrink: 0;
  margin-right: 10px;
`,Nt=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ke=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Lt=s(ke)`
  margin-bottom: 2px;
`,Et=s(ke)`
  background: ${P.colors.legacy.bgRow};
  margin-bottom: 1px;
  padding: 12px 10px 12px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Mt=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ft=s(ke)`
  background: ${P.colors.legacy.bgRow};
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,Wt=s.div`
  background: ${P.colors.legacy.bgRow};
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,He=s($).attrs({size:16,lineHeight:19,weight:600})``,ut=s($).attrs({size:14,lineHeight:17,weight:400,color:P.colors.legacy.textSecondary})``;var ht=({activeAccounts:e})=>{let{t:o}=v(),{selectedAccounts:t,selectAccount:n,deselectAccount:r,pushSubStep:d}=N(),w=(0,M.useMemo)(()=>Object.values(t).filter(l=>!!l).length===0,[t]),C=(0,M.useCallback)(()=>{d(M.default.createElement(ve,{preventBack:!0}))},[d]);return M.default.createElement(W,null,M.default.createElement("div",{style:{marginBottom:15}},M.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},M.default.createElement($,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},o("connectHardwareSelectAccounts")),M.default.createElement(Gt,{wordBreak:"break-word",size:18,lineHeight:22,color:P.colors.legacy.textSecondary},o("connectHardwareChooseAccountsToConnect"))),M.default.createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},e.map(({accounts:f,discoveryIdentifier:l,accountIndex:c})=>{let F=!!t[l];return M.default.createElement(lt,{key:l,accountType:"ledger",accounts:f,accountIndex:c,checked:F,onPress:()=>{F?r(l):n(l)}})}))),M.default.createElement(E,{onClick:C,theme:"primary",disabled:w},o("commandContinue")))},Gt=s($)`
  margin-top: 15px;
`;var ft=()=>{let{t:e}=v(),{discoveredAccounts:o,activeAccountsFound:t,setSelectedAccounts:n,pushSubStep:r}=N(),d=(0,k.useMemo)(()=>{let f;if(t){let l=o.filter(c=>c.status==="undiscovered"||c.isSelectedByDefault);f=e(l.length===1?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:l.length})}else f=e("connectHardwareFoundSomeAccounts");return f},[t,e,o]),w=(0,k.useCallback)(()=>{r(k.default.createElement(ht,{activeAccounts:o}))},[r,o]),C=(0,k.useCallback)(()=>{r(k.default.createElement(ve,{preventBack:!0}))},[r]);return(0,k.useEffect)(()=>{let f=o.reduce((l,c,F)=>((c.status==="discovered"&&c.isSelectedByDefault||F===0)&&(l[c.discoveryIdentifier]=!0),l),{});n(f)},[o,n,t,e]),k.default.createElement(W,null,k.default.createElement(_t,null,k.default.createElement(Y,{icon:k.default.createElement(B,{type:"success"}),primaryText:e("connectHardwareConnectAccounts"),headerStyle:"large",secondaryText:d})),k.default.createElement(jt,{onClick:w,theme:"default"},e("connectHardwareSelectAccounts")),k.default.createElement(E,{onClick:C,theme:"primary"},e("commandContinue")))},_t=s(R)`
  margin-bottom: 35px;
`,jt=s(E)`
  margin-bottom: 10px;
`;var $t=19,zt=e=>{let o=new Set;for(let t of e)for(let{address:n}of t.addresses)o.add(n);return o},me=()=>{let{chainImportStep:e,setIncrementChainImportStep:o,selectedChains:t,selectedChainsMap:n,pushStep:r,pushSubStep:d,setDiscoveredAccounts:w,setDerivedAccountGroups:C,derivedAccountGroups:f}=N(),l=(0,a.useRef)(f),{t:c,i18n:F}=v(),u=e-1,g=t[u],{data:T=[],isFetched:b,isError:L}=N(p=>p.existingAccounts),[I,y]=(0,a.useState)(!1),D=(0,a.useMemo)(()=>{let p=[],m=n.get(g)||{};for(let[j,Z]of Object.entries(m))Z&&p.push(j);return[p[0]]},[g,n]),{chainNameTextOr:X,chainNameTextAnd:oe}=(0,a.useMemo)(()=>{let p=D.map(Z=>G.getChainName(ae.get(Z).ledgerAppOverride??Z)),m=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"disjunction"}),j=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:m.format(p),chainNameTextAnd:j.format(p)}},[D,F]),he=(0,a.useMemo)(()=>D.map(p=>{let m=ae.get(p).ledgerAppOverride??p;return a.default.createElement(se,{key:G.getMainnetNetworkID(ae.get(m).ledgerAppOverride??m),networkID:m,size:72,borderColor:"bgWallet"})}),[D]);(0,a.useEffect)(()=>{let p=N.subscribe(m=>l.current=m.derivedAccountGroups);return()=>p()},[]);let z=(0,a.useMemo)(()=>{let p=[];switch(g){case"solana":{p.push({pathType:"bip44Root"});break}case"eip155":{p.push({pathType:"bip44RootEthereum"});break}case"bip122_p2tr":case"bip122_p2wpkh":case"bip122_p2sh":case"bip122_p2pkh":case"sui":break}for(let m=0;m<$t;++m)switch(g){case"solana":{p.push({index:m,pathType:"bip44Change"}),p.push({index:m,pathType:"bip44"});break}case"eip155":{p.push({index:m,pathType:"bip44Ethereum"}),p.push({index:m,pathType:"bip44EthereumSecondary"});break}case"bip122_p2tr":case"bip122_p2wpkh":case"bip122_p2sh":case"bip122_p2pkh":{p.push({index:m,pathType:"bitcoinTaproot"},{index:m,pathType:"bitcoinNativeSegwit"});break}case"sui":throw new Ke("connect hardware")}return p},[g]),[fe,ge]=(0,a.useState)(!0),{data:ne=et}=dt(fe,!0),{data:[At]}=Ye(["kill-ledger-xpub-derivation"]),{data:J,error:Ne,fetchStatus:St,refetch:Le}=it(ne,z,!0,!At),Ct=St==="fetching",Ie=!ne.isConnected&&ne.status!=="reconnecting",[yt,wt]=(0,a.useState)(!1),{data:Ae,refetch:Ee}=Te(yt,!0);(0,a.useEffect)(()=>{Ie&&ge(!1)},[Ie]),(0,a.useEffect)(()=>{Ae?.type==="granted"&&(ge(!0),wt(!1))},[Ae]);let Me=Je(),Fe=(0,a.useCallback)(async()=>{if(J&&Object.keys(J).length){let p=[...l.current],m=0;for(let j of Object.values(J)){let de={accounts:{...(p[m]??{accounts:{}}).accounts},derivationIndex:z[m].index},Se=G.getChainIDs(j.addressType).filter(Ce=>Me.includes(Ce));for(let Ce of Se){let pe=G.getNetworkIDs(Ce);for(let ce of pe)D.includes(ce)&&(de.accounts[`${ce}-${j.address}`]={chainType:j.addressType,chainId:ce,address:j.address,publicKey:j.publicKey,pathParams:z[m]})}p[m]=de,m++}if(C(p),b&&t.length===e){y(!0);let j=zt(T),Z=p.reduce((i,O)=>{let ue=!1;for(let Ge of Object.values(O.accounts))ue=ue||j.has(Ge.address);return ue||i.push(O),i},[]),de=[],Se=[];for(let i=0;i<Z.length;i+=Oe.extension){let O=Z.slice(i,i+Oe.extension).map(ue=>Object.entries(ue.accounts).reduce((_e,[vt,Ht])=>(_e[vt]={account:Ht},_e),{}));Se.push(O)}for(let i of Se)de.push(Xe(i));let pe=(await Promise.all(de)).flat().map(i=>{switch(i.status){case"discovered":return{...i,accounts:i.accounts.filter(O=>O.hasAccountActivity||ye(O.derivationPathType))};case"undiscovered":return{...i,accounts:i.accounts.filter(O=>ye(O.derivationPathType))}}}).filter(i=>i.accounts.length>0).map(i=>{let O=ot();return{...i,discoveryIdentifier:O}}),ce=pe.filter(i=>i.status==="undiscovered"||i.isSelectedByDefault),bt=pe.filter(i=>!(i.status==="undiscovered"||i.isSelectedByDefault)).slice(0,2),We=ce.length>0,xt=T.filter(i=>i.type==="ledger").length,Tt=(We?[...ce,...bt]:pe.filter(i=>!i.accounts.some(O=>!ye(O.derivationPathType))).slice(0,3)).map((i,O)=>({...i,accountIndex:xt+O}));w(Tt,We),r(a.default.createElement(ft,{preventBack:!0}))}}},[J,C,b,t.length,e,z,Me,D,T,w,r]);(0,a.useEffect)(()=>{J&&Object.keys(J).length===z.length&&(Fe(),t.length!==e&&(o(),d(a.default.createElement(me,{preventBack:!0}))))},[J,z,r,d,e,t,Fe,o]);let U,V,q,Q,re=()=>{};return L?(U=a.default.createElement(B,{type:"failure"}),V=c("connectHardwareErrorLedgerGeneric"),q=c("connectHardwareErrorLedgerPhantomLocked"),re=async()=>{let p=await nt();p.id!==void 0&&rt(p.id)},Q=c("commandClose")):Ae&&Ae.type!=="granted"?(U=a.default.createElement(B,{type:"warning"}),V=c("connectHardwarePermissionDeniedPrimary"),q=c("connectHardwarePermissionDeniedSecondary"),Q=c("homeErrorButtonText"),re=Ee):Ie?(U=a.default.createElement(B,{type:"warning"}),V=c("connectHardwarePermissionUnableToConnect"),q=c("connectHardwarePermissionUnableToConnectDescription"),Q=c("commandConnect"),re=Ee):Ne instanceof tt?(U=a.default.createElement(B,{type:"failure"}),V=c("connectHardwareErrorLedgerLocked"),q=c("connectHardwareErrorLedgerLockedDescription"),Q=c("homeErrorButtonText"),re=Le):Ne?(U=a.default.createElement(B,{type:"failure"}),V=c("connectHardwareErrorLedgerGeneric"),q=c("connectHardwareErrorLedgerGenericDescription"),Q=c("homeErrorButtonText"),re=Le):ne.status=="reconnecting"?(U=a.default.createElement(B,{defaultIcon:a.default.createElement(ie,null),type:"default"}),V=c("connectHardwareConnecting"),q=c("connectHardwareConnectingDescription")):I?(U=a.default.createElement(B,{defaultIcon:a.default.createElement(ie,null),type:"default"}),V=c("connectHardwareDiscoveringAccounts"),q=c("connectHardwareDiscoveringAccountsDescription")):Ct?(U=a.default.createElement(B,{defaultIcon:a.default.createElement(ie,null),type:"default"}),V=c("connectHardwareConnectingAccounts"),q=c("connectHardwareFindingAccountsWithActivity",{chainName:oe})):(U=a.default.createElement(Vt,null,he),V=c("connectHardwareMobileOpenAppSingleChain",{chainName:X}),q=c("connectHardwareOpenAppDescription")),a.default.createElement(W,null,a.default.createElement(R,null,a.default.createElement(Y,{icon:U,primaryText:V,headerStyle:"large",secondaryText:q})),Q?a.default.createElement(E,{onClick:re,theme:"primary"},Q):a.default.createElement(Ut,null,a.default.createElement($,{color:P.colors.legacy.textSecondary,size:14},c("connectHardwareAccountsStepOfSteps",{stepNum:e,totalSteps:t.length}))))},Ut=s.div`
  align-self: center;
  background-color: ${P.colors.legacy.borderSecondary};
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,Vt=s.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: -12.5px;
  }
`;A();S();var x=ee(te());var gt=()=>{let{t:e}=v(),{pushSubStep:o,selectedChains:t,setSelectedChains:n,selectedChainsMap:r}=N(),d=xe(),w=(0,x.useMemo)(()=>d.filter(u=>ae.get(u).isLedgerEnabled),[d]),C=be(),f=(0,x.useCallback)(u=>{let g=new Map(r),T=G.getAddressTypes(u);for(let L of T){let I=r.get(L),y=I?.[u];g.set(L,{...I,[u]:!y})}let b=C.filter(L=>{let I=g.get(L)||{};return Object.values(I).reduce((D,X)=>X?++D:D,0)>0});n(b,g)},[C,n,r]),l=()=>{o(x.default.createElement(me,{preventBack:!0}))};at(()=>{let u=new Map;for(let g of C)u.set(g,{});for(let g of w){let T=G.getAddressTypes(g);for(let b of T){let L=u.get(b);u.set(b,{...L,[g]:!1})}}n(t,u)},C.length>0&&w.length>0);let c=(0,x.useMemo)(()=>w.map(u=>{let g=G.getAddressTypes(u),T=!1;for(let b of g)T=r.get(b)?.[u]||T;return x.default.createElement(qt,{key:u,icon:x.default.createElement(se,{networkID:u,size:40}),networkID:u,onPressChain:f,isChecked:T})}),[w,r,f]),F=(0,x.useMemo)(()=>{let u=0;for(let g of r.values())u+=Object.values(g).reduce((T,b)=>b?++T:T,0);return u===0},[r]);return x.default.createElement(W,null,x.default.createElement($,{weight:500,size:28,lineHeight:34},e("connectHardwareSelectChains")),x.default.createElement(Rt,null,c),x.default.createElement(E,{onClick:l,theme:"primary",disabled:F},e("commandContinue")))},qt=({networkID:e,icon:o,onPressChain:t,isChecked:n})=>x.default.createElement(Kt,{onClick:()=>{t(e)}},x.default.createElement(Xt,null,x.default.createElement(Yt,null,o),x.default.createElement($,{size:16,weight:600},G.getNetworkName(e))),x.default.createElement(le,{checked:n})),Kt=s.div`
  align-items: center;
  background-color: ${P.colors.legacy.bgRow};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  > span {
    margin-right: 0px;
  }
`,Yt=s.div`
  margin-right: 12px;
`,Rt=s.div`
  margin-top: 20px;
`,Xt=s.div`
  display: flex;
  align-items: center;
`;var Zt=()=>{let{t:e}=v(),{pushStep:o,setSelectedChains:t}=N(),n=xe(),r=be(),{data:d,isFetching:w,refetch:C}=Te(!0,!0),{buttonDisabled:f,defaultIcon:l,primaryText:c,secondaryText:F,buttonText:u,iconType:g,onClick:T}=(0,H.useMemo)(()=>{let b=!1,L=H.default.createElement(ie,null),I,y,D,X="default",oe=ze;if(w)I=e("connectHardwareSearching"),y=e("connectHardwareMakeSureConnected"),D=e("commandContinue"),b=!0;else if(d?.type==="granted"){let he=d.transport.deviceModel?.productName??"Ledger";X="success",I=e("connectHardwarePairSuccessPrimary",{productName:he}),y=e("connectHardwarePairSuccessSecondary",{productName:he}),D=e("commandContinue"),b=!1,oe=()=>{if(r.length===1){let z=new Map;z.set(r[0],{});for(let fe of n){let ge=G.getAddressTypes(fe);for(let ne of ge)z.set(ne,{[fe]:!0})}t(r,z),o(H.default.createElement(me,{preventBack:!0}))}else o(H.default.createElement(gt,{onBackCallback:()=>{t([],new Map)}}))}}else d?.type==="denied"?(X="failure",I=e("connectHardwarePermissionDeniedPrimary"),y=e("connectHardwarePermissionDeniedSecondary"),D=e("commandTryAgain"),b=!1,oe=C):(!d||d.type==="unable-to-connect")&&(X="failure",I=e("connectHardwarePermissionUnableToConnect"),y=e("connectHardwareWaitingForApplicationSecondaryText"),D=e("commandTryAgain"),b=!1,oe=C);return{buttonDisabled:b,defaultIcon:L,primaryText:I,secondaryText:y,buttonText:D,iconType:X,onClick:oe}},[n,r,d,o,C,w,t,e]);return H.default.createElement(W,null,H.default.createElement(R,null,H.default.createElement(Y,{icon:H.default.createElement(B,{defaultIcon:l,type:g}),primaryText:c,headerStyle:"large",secondaryText:F})),H.default.createElement(E,{onClick:T,theme:"primary",disabled:f},u))},br=()=>{let{t:e}=v(),{pushSubStep:o}=N(),t=()=>o(H.default.createElement(Zt,null));return H.default.createElement(W,null,H.default.createElement(R,null,H.default.createElement(Y,{icon:H.default.createElement(ct,null),primaryText:e("connectHardwareLedger"),headerStyle:"large",secondaryText:e("connectHardwareStartConnection"),animateText:!0})),H.default.createElement(E,{onClick:t,theme:"primary"},e("commandConnect")))};export{N as a,pt as b,go as c,Ao as d,lt as e,jo as f,br as g};
//# sourceMappingURL=chunk-HWTNO5Z3.js.map

import{A as Y,C as Ge,da as Ve}from"./chunk-VZIPQGVK.js";import"./chunk-B5HUTZOW.js";import{b as Z,d as Ne}from"./chunk-4BIFBETB.js";import"./chunk-AEGB75R5.js";import{a as k}from"./chunk-TU4CQRN3.js";import"./chunk-GIUU5FZA.js";import"./chunk-I5RT5666.js";import"./chunk-F4B3PU3Z.js";import"./chunk-RAXNGD6N.js";import"./chunk-255U7RYV.js";import"./chunk-RNS57IWG.js";import"./chunk-S24UABH5.js";import"./chunk-GD4PMTOF.js";import"./chunk-MP5POVPU.js";import"./chunk-EGXLQXDH.js";import"./chunk-XNMBE4DK.js";import{b as L}from"./chunk-RE3FKPVD.js";import"./chunk-X5D7DNCH.js";import{a as Fe}from"./chunk-CNOUWZHQ.js";import"./chunk-VL5EYDTL.js";import"./chunk-3P3EBL6I.js";import"./chunk-OVQZ6HTN.js";import{b as Ue}from"./chunk-EQDXPIVC.js";import"./chunk-ZON27MKP.js";import{g as Be}from"./chunk-I6TBOMK3.js";import"./chunk-7PWA24OU.js";import{c as Ae}from"./chunk-7KE5H3S3.js";import"./chunk-W27Z2YZM.js";import"./chunk-HRJPGCUD.js";import"./chunk-XJTFMD4C.js";import"./chunk-QY4L72L3.js";import"./chunk-VDM5O2ZT.js";import"./chunk-7ZVEM3WY.js";import"./chunk-VQVTLSDS.js";import{h as W,j as X,k as z}from"./chunk-BL5NQCM4.js";import{P as Me,db as w,k as le,l as me,w as pe}from"./chunk-ONJA4ZEG.js";import{e as d}from"./chunk-RBBZHETH.js";import{F as ue}from"./chunk-ZZPI23JA.js";import"./chunk-UCBZOSRF.js";import"./chunk-ZSQU2ZM6.js";import"./chunk-2THQDEWP.js";import"./chunk-O5D25TI4.js";import{i as be}from"./chunk-PKAXVJFX.js";import"./chunk-DUJHHCZR.js";import{a as Ee,b as j}from"./chunk-YOIJCLV6.js";import"./chunk-TBS5VNTB.js";import"./chunk-BTKBODVJ.js";import"./chunk-EQXZ32NI.js";import"./chunk-GS2UJNU3.js";import{Ba as Pe,Ha as H,Tb as we,Uc as Ie,ac as J,ec as Se,fa as oe,fc as ke,kc as De,rc as ce,vc as ve,x as Ce,xc as Q}from"./chunk-R5HJQXZQ.js";import"./chunk-WFPABEAU.js";import"./chunk-PPMPQKRK.js";import"./chunk-UDFQ3C42.js";import{S as N,a as F,c as A,j as G}from"./chunk-P4LRI3S3.js";import{r as rt}from"./chunk-GBKSQA4Y.js";import"./chunk-IBEI3NGL.js";import"./chunk-ALR5MBQI.js";import"./chunk-UFPGJN5T.js";import"./chunk-BFV33OZC.js";import"./chunk-MT5RYI7C.js";import"./chunk-EMR4O6UP.js";import{de as V,gb as C}from"./chunk-S6KJ2BHO.js";import{p as ae}from"./chunk-7ZZNCPHU.js";import{m as U}from"./chunk-MNQ7RLHG.js";import"./chunk-N7UFQNLW.js";import{xa as q}from"./chunk-NMZ7IVPZ.js";import{E as ye,R as se,c as $}from"./chunk-H6ILHDLW.js";import{a as ie}from"./chunk-7X4NV6OJ.js";import"./chunk-UNDMYLJW.js";import{f as te,h as B,n as M}from"./chunk-3KENBVE7.js";B();M();var a=te(ie());B();M();var T=te(ie());var at=d.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`,st=d.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ct=d(w)`
  margin-top: 20px;
  margin-bottom: 20px;
`,lt=d(w)`
  margin-top: 16px;
`,mt=d.div`
  margin-top: 16px;
  padding-bottom: 20px;
`,ze=({pendingTransaction:e,onSuccess:i})=>{let{t:o}=U(),[u,n]=(0,T.useState)(void 0),{popDetailView:f}=L(),t=e.networkID,m=C.getAddressType(t),b=e.data.transactions[e.data.transactions.length-1],{data:s}=V(),{data:r,status:D}=ce(e,()=>f(),s),{data:h}=J(t,r),P=h?.gasEstimationPriceUSD??"",{data:S}=N(),I=[];if(S){let g=S.explorers[t]??F.get(t).defaultExplorer,p=G({networkID:t,endpoint:"transaction",explorerType:g,param:b.hash});p!==""&&I.push({label:o("richTransactionDetailViewOnExplorer",{explorer:A[g]}),value:p,type:"link"})}let{data:v,status:O}=Q(t,r?.maxFeePerGas,r?.maxPriorityFeePerGas),x=H(o,O,v),E=[{label:o("richTransactionDetailNetworkFee"),value:P.length>0?o("gasUpTo",{amount:P}):T.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"})},{label:o("transactionEstimatedTime"),value:x!==""?x:T.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"})},...I],{mutateAsync:y}=be(),R=(0,T.useCallback)(async()=>{if(!s||!r)return;let g=s.addresses.find(p=>p.networkID===t);if(g){e.type==="cancel"?j.capture("transactionPrioritizeCancelConfirmClicked",{data:{chainID:t,chainType:m}}):j.capture("transactionCancelConfirmClicked",{data:{chainID:t,chainType:m}});try{n("inflight");let p=Ie({ethereumNetworkID:t,sender:g.address,destination:g.address,value:new $("0",10),nonce:e.data.nonce});await y({multichainTransaction:{networkID:t,unsignedTransaction:p},pendingTransactionInput:{networkID:t,pendingTransactionId:e.id,hash:"",unsignedTransaction:ae.parse({from:e.ownerAddress})},senderAddress:g,gasEstimation:r}),f(),i(),n(void 0)}catch(p){q.captureError(p,"transaction"),n("error")}}},[s,t,m,e,r,y,f,i]);return T.default.createElement(at,null,T.default.createElement(st,null,T.default.createElement(Ue,{image:{type:"icon",preset:"x-bold"},size:64}),T.default.createElement(ct,{size:28,weight:600},e.type==="cancel"?o("transactionPrioritizeCancel"):o("transactionCancel")),T.default.createElement(Z,{rows:E}),u!=="error"&&T.default.createElement(lt,{lineHeight:16,color:"#777777",size:14},o("transactionCancelHelperText")),u==="error"&&T.default.createElement(mt,null,T.default.createElement(Y,{color:"#EB3742",title:T.default.createElement(w,{color:"#EB3742",lineHeight:16,size:14,weight:400},o("transactionReplaceError"))}))),T.default.createElement(z,{onSecondaryClicked:()=>f(),onPrimaryClicked:R,primaryTheme:"warning",primaryText:u==="inflight"?T.default.createElement(W,{trackColor:"#EB3742",color:"white",diameter:20}):o("commandConfirm"),primaryDisabled:!r?.maxFeePerGas||D==="error",secondaryText:o("commandClose")}))};B();M();var Le=te(rt()),c=te(ie());var dt=d.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`,ft=d.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ut=d(w)`
  margin-top: 20px;
  margin-bottom: 20px;
`,Tt=d(w)`
  margin-top: 16px;
`,gt=d.div`
  margin-top: 16px;
  padding-bottom: 20px;
`,xt=({size:e})=>c.default.createElement(me,{size:e},c.default.createElement(le,{shape:"circle",color:se("#21E56F",.1)},c.default.createElement(pe,{width:32}))),Oe=({pendingTransaction:e,onSuccess:i})=>{let{t:o}=U(),[u,n]=(0,c.useState)(void 0),{popDetailView:f}=L(),t=e.networkID,{data:m}=V(),{data:b,status:s}=we({networkID:t}),r=b?.fast,D=oe.get(t).transactionSpeedSeconds("fast"),{data:h}=N(),P=[];if(h){let x=h.explorers[t]??F.get(t).defaultExplorer,E=G({networkID:t,endpoint:"transaction",explorerType:x,param:e.data.txID});E!==""&&P.push({label:o("richTransactionDetailViewOnExplorer",{explorer:A[x]}),value:E,type:"link"})}let S=H(o,s,D?{timeToMineSeconds:D}:void 0),I=[{label:o("richTransactionDetailNetworkFee"),value:r?`${Ce(r.btcPerKilobyte)} sats/vB`:c.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"})},{label:o("transactionEstimatedTime"),value:S!==""?S:c.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"})},...P],v=De(),O=(0,c.useCallback)(async()=>{if(!m||!r?.btcPerKilobyte)return;let x=m.addresses.filter(y=>y.networkID===t),E=x[0];x.length>1&&(E=x.find(y=>y.addressType==="bip122_p2wpkh")),j.capture("transactionSpeedUpConfirmClicked",{data:{chainID:t}});try{n("inflight"),await Pe(Be(),{addressType:E.addressType,accountIdentifier:m.identifier,pendingTransaction:e,pendingTransactionInput:{...(0,Le.default)(e)},desiredFeeRateInBtcPerKilobyte:r.btcPerKilobyte,safeToSendUtxos:await v.getSafeToSendUtxos(E.address),utxoManager:v},new Ee),f(),i(),n(void 0)}catch(y){q.captureError(y,"transaction"),n("error")}},[m,t,e,r?.btcPerKilobyte,f,i,v]);return c.default.createElement(dt,null,c.default.createElement(ft,null,c.default.createElement(xt,{size:64}),c.default.createElement(ut,{size:28,weight:600},o("transactionSpeedUp")),c.default.createElement(Z,{rows:I}),u!=="error"&&c.default.createElement(Tt,{lineHeight:16,color:"#777777",size:14},o("transactionSpeedUplHelperText")),u==="error"&&c.default.createElement(gt,null,c.default.createElement(Y,{color:"#EB3742",title:c.default.createElement(w,{color:"#EB3742",lineHeight:16,size:14,weight:400},o("transactionReplaceError"))}))),c.default.createElement(z,{onSecondaryClicked:()=>f(),onPrimaryClicked:O,primaryText:u==="inflight"?c.default.createElement(W,{color:"white",diameter:20}):o("commandConfirm"),primaryDisabled:s==="error"&&!r?.btcPerKilobyte,secondaryText:o("commandClose")}))};B();M();var l=te(ie());var ht=d.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`,yt=d.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ct=d(w)`
  margin-top: 20px;
  margin-bottom: 20px;
`,Pt=d(w)`
  margin-top: 16px;
`,Et=d.div`
  margin-top: 16px;
  padding-bottom: 20px;
`,wt=({size:e})=>l.default.createElement(me,{size:e},l.default.createElement(le,{shape:"circle",color:se("#21E56F",.1)},l.default.createElement(pe,{width:32}))),_e=({pendingTransaction:e,onSuccess:i})=>{let{t:o}=U(),[u,n]=(0,l.useState)(void 0),{popDetailView:f}=L(),t=e.networkID,m=C.getAddressType(t),b=e.data.transactions[e.data.transactions.length-1],{data:s}=V(),{data:r,status:D}=ce(e,()=>f(),s),{data:h}=J(t,r),P=h?.gasEstimationPriceUSD??"",{data:S}=N(),I=[];if(S){let g=S.explorers[t]??F.get(t).defaultExplorer,p=G({networkID:t,endpoint:"transaction",explorerType:g,param:b.hash});p!==""&&I.push({label:o("richTransactionDetailViewOnExplorer",{explorer:A[g]}),value:p,type:"link"})}let{data:v,status:O}=Q(t,r?.maxFeePerGas,r?.maxPriorityFeePerGas),x=H(o,O,v),E=[{label:o("richTransactionDetailNetworkFee"),value:P.length>0?o("gasUpTo",{amount:P}):l.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"})},{label:o("transactionEstimatedTime"),value:x!==""?x:l.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"})},...I],{mutateAsync:y}=ve(),R=(0,l.useCallback)(async()=>{if(!(!s||!r||!s.addresses.find(p=>p.networkID===t))){j.capture("transactionSpeedUpConfirmClicked",{data:{chainID:t,chainType:m}});try{n("inflight"),await y({chainType:"eip155",accountIdentifier:s.identifier,pendingTransaction:e,pendingTransactionInput:{networkID:t,pendingTransactionId:e.id,hash:"",unsignedTransaction:ae.parse({from:e.ownerAddress})},gasEstimation:r,nonce:e.data.nonce}),f(),i(),n(void 0)}catch(p){q.captureError(p,"transaction"),n("error")}}},[s,t,m,e,r,y,i,f]);return l.default.createElement(ht,null,l.default.createElement(yt,null,l.default.createElement(wt,{size:64}),l.default.createElement(Ct,{size:28,weight:600},o("transactionSpeedUp")),l.default.createElement(Z,{rows:E}),u!=="error"&&l.default.createElement(Pt,{lineHeight:16,color:"#777777",size:14},o("transactionSpeedUplHelperText")),u==="error"&&l.default.createElement(Et,null,l.default.createElement(Y,{color:"#EB3742",title:l.default.createElement(w,{color:"#EB3742",lineHeight:16,size:14,weight:400},o("transactionReplaceError"))}))),l.default.createElement(z,{onSecondaryClicked:()=>f(),onPrimaryClicked:R,primaryText:u==="inflight"?l.default.createElement(W,{color:"white",diameter:20}):o("commandConfirm"),primaryDisabled:!r?.maxFeePerGas||D==="error",secondaryText:o("commandClose")}))};var St=e=>{let{networkID:i}=e,[o,u]=(0,a.useState)(Date.now());(0,a.useEffect)(()=>{let _=setInterval(()=>u(Date.now()),5e3);return()=>clearInterval(_)},[u]);let{t:n}=U(),{pushDetailView:f}=L(),{handleHideModalVisibility:t}=Ve(),m=(0,a.useCallback)(()=>t("pendingTransaction"),[t]),{data:b}=V(),{data:s}=ke(b?.addresses||[]),r=s?.pendingTransaction.filter(_=>e.networkID===_.networkID),D=r?r[r.length-1]?.id:void 0,h=oe.get(e.networkID).isPendingTransactionConfirmed(e),P=!1,S=e.type??"dappInteraction",I=ye(e.timestamp??0,n("richTransactionDetailAt")),{header:v,assetSymbol:O,tokenUSDPrice:x,uiRecipient:E,logoUri:y}=(0,a.useMemo)(()=>({header:e.display.detail?.header??"",assetSymbol:e.display.detail?.assetSymbol??"",tokenUSDPrice:e.display.detail?.tokenUSDPrice??"",uiRecipient:e.display.detail?.uiRecipient??"",logoUri:e.display.detail?.logoUri??""}),[e]),R=C.getNetworkName(i),g="",p="#999999";h?P?(g=n("transactionsFailed"),p="#EB3742"):(g=n("transactionsSuccess"),p="#21E56F"):e.type==="cancel"?(g=n("pendingTransactionCancelling"),p="#EB3742"):g=n("pendingTransactionPending");let ee;if("transactions"in e.data&&C.isEVMNetworkID(i)){let K=e.data.transactions[e.data.transactions.length-1].unsignedTransaction,re=new $(K.maxFeePerGas??"0"),nt=new $(K.maxPriorityFeePerGas??"0");ee={networkID:i,gasLimit:new $(K.gas??"0"),maxFeePerGas:re,maxPriorityFeePerGas:nt},P=!!e.data?.transactions?.[e.data?.transactions?.length-1]?.error}let{data:Ke}=J(i,ee),je=n("gasUpTo",{amount:Ke?.gasEstimationPriceUSD}),{data:Xe,status:$e}=Q(i,ee?.maxFeePerGas,ee?.maxPriorityFeePerGas),ge=H(n,$e,Xe),{data:xe}=N(),he=[];if(xe){let _=xe.explorers[i]??F.get(i).defaultExplorer,K="";C.isEVMNetworkID(e.networkID)&&"transactions"in e.data&&(K=e.data.transactions[e.data.transactions.length-1].hash),C.isBitcoinNetworkID(e.networkID)&&(K=e.data.txID);let re=G({networkID:i,endpoint:"transaction",explorerType:_,param:K});re!==""&&he.push({label:n("richTransactionDetailViewOnExplorer",{explorer:A[_]}),value:re,type:"link"})}let qe=C.getNetworkName(i),Je={label:n("pendingTransactionDate"),value:I},Qe={label:n("pendingTransactionStatus"),value:g,color:p},We={label:n("transactionsTo"),value:E??""},Ye={label:n("historyNetwork"),value:R},Ze={label:n("pendingTransactionNetworkFee"),value:je,tooltipContent:n("networkFeesTooltipDescription",{chainName:qe})},Re={label:n("pendingTransactionEstimatedTime"),value:ge!==""?ge:a.default.createElement(k,{width:"75px",height:"8px",borderRadius:"8px",backgroundColor:"#484848"}),tooltipContent:n("sendFungibleSummaryEstimatedTimeDescription")},de=a.default.createElement(Ge,{pendingTransactionType:S,isError:P,isConfirmed:h,logoUri:y,size:"medium"}),ne,et=!h&&ue.get(i).showFeeRowInPendingTransactionDetail,tt=ue.get(i).showTimeToMineRowInPendingTransactionDetail&&!h,ot=e.display.detail?.secondaryHeader,fe=[Je,Qe,We,Ye,...et?[Ze]:[],...tt?[Re]:[],...he];switch(S){case"send":{ne={sections:[{rows:fe}],title:h?n("richTransactionDetailSent"):n("pendingTransactionsSendingTitle",{assetSymbol:O}),primaryText:{value:v},secondaryText:{value:x},image:de};break}case"cancel":{ne={sections:[{rows:fe}],title:n(h?"transactionCancelled":"pendingTransactionCancelling"),primaryText:{value:v},secondaryText:{value:x},image:de};break}case"dappInteraction":default:{ne={sections:[{rows:fe}],title:n(h?"richTransactionDetailAppInteraction":"pendingTransactionPendingInteraction"),primaryText:{value:""},secondaryText:{value:ot??n("pendingTransactionUnknownApp")},image:de};break}}return{detailsProps:ne,pendingTransaction:e,isOldestPendingTx:D===e.id,leftButton:a.default.createElement(kt,{onClick:m},a.default.createElement(Me,null)),showCancelEvmTransactionModal:()=>{f(a.default.createElement(ze,{onSuccess:m,pendingTransaction:e}))},showSpeedUpEvmTransactionModal:()=>{f(a.default.createElement(_e,{onSuccess:m,pendingTransaction:e}))},showSpeedUpBitcoinTransactionModal:()=>{f(a.default.createElement(Oe,{onSuccess:m,pendingTransaction:e}))},hidePendingTransactionModal:m,now:o}},kt=d(Ae)`
  position: absolute;
  left: 5px;
`,Dt=({pendingTransaction:e})=>{let i=St(e);return a.default.createElement(bt,{...i})},vt=({pendingTransactionId:e})=>{let{data:i}=Se(e),[o,u]=(0,a.useState)();return(0,a.useEffect)(()=>{i&&u(i)},[i]),o?a.default.createElement(Dt,{pendingTransaction:o}):null},Pn=vt,bt=a.default.memo(({detailsProps:e,showCancelEvmTransactionModal:i,showSpeedUpEvmTransactionModal:o,showSpeedUpBitcoinTransactionModal:u,hidePendingTransactionModal:n,leftButton:f,pendingTransaction:t,isOldestPendingTx:m,now:b})=>{let{t:s}=U(),r=a.default.createElement(X,{onClick:n},s("commandClose"));if(t&&(m||t.type!=="cancel")&&!oe.get(t.networkID).isPendingTransactionMined(t)){if(C.isPolygonNetworkID(t.networkID)){t=t;let D=t.data.transactions[t.data.transactions.length-1];b-D.timestamp>6e4&&(t.type==="cancel"?r=a.default.createElement(X,{theme:"warning",onClick:i},s("transactionPrioritizeCancel")):r=a.default.createElement(X,{theme:"warning",onClick:i},s("pendingTransactionCancel")))}C.isEthereumNetworkID(t.networkID)&&(t.type==="cancel"?r=a.default.createElement(X,{theme:"warning",onClick:i},s("transactionPrioritizeCancel")):m?r=a.default.createElement(z,{primaryText:s("pendingTransactionSpeedUp"),secondaryText:s("pendingTransactionCancel"),onPrimaryClicked:o,onSecondaryClicked:i,primaryTheme:"default",secondaryTheme:"warning"}):r=a.default.createElement(X,{theme:"warning",onClick:i},s("pendingTransactionCancel"))),C.isBitcoinNetworkID(t.networkID)&&(r=a.default.createElement(X,{theme:"default",onClick:u},s("pendingTransactionSpeedUp")))}return a.default.createElement(a.default.Fragment,null,a.default.createElement(Ne,{...e,leftButton:f}),a.default.createElement(Fe,null,r))});export{vt as PendingTransactionDetail,Pn as default};
//# sourceMappingURL=PendingTransactionDetail-PQSGWFEZ.js.map

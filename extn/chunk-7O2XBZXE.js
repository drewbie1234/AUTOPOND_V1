import{a as x,b as _}from"./chunk-Y4LB2GZ6.js";import{a as z}from"./chunk-4DM6CL4C.js";import{d as N}from"./chunk-44CPIUAN.js";import{c as D}from"./chunk-D4L3JZNR.js";import{a as v}from"./chunk-IWKHOUY6.js";import{j as I,k as P}from"./chunk-KLYKJSXB.js";import{a as u}from"./chunk-T7KN34I4.js";import{c as H}from"./chunk-SOBOWLRY.js";import{db as l,m as n,z as B}from"./chunk-OA5YQ6R3.js";import{Wc as A,ld as w,nb as k,ud as b}from"./chunk-S3GUIRR4.js";import{Ca as T,Ea as r,Na as S,R as h,c as y}from"./chunk-DAZNTGG2.js";import{f as g,h as c,n as m}from"./chunk-YJSZZTEX.js";c();m();var p=g(y());var eo=p.default.memo(({chainAddress:i,onQRClick:d})=>{let{networkID:a,address:e}=i,{buttonText:s,copied:f,copy:C}=x(e),L=w(e,4),M=b(i.networkID),$=(0,p.useCallback)(O=>{O.stopPropagation(),C()},[C]);return p.default.createElement(S,{copied:f,copiedText:s,formattedAddress:L,networkBadge:p.default.createElement(N,{networkID:a,address:e}),networkLogo:p.default.createElement(u,{networkID:a,size:40}),networkName:M,onCopyClick:$,onQRClick:d})});c();m();var E=g(_()),o=g(y());c();m();var t=g(y());var j=n.div`
  width: 100%;
`,F=n(D)`
  background: ${r.colors.legacy.bgArea};
  border: 1px solid ${r.colors.legacy.borderSecondary};
  border-radius: 6px 6px 0 0;
  border-bottom: none;
  margin: 0;
  padding: 16px 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  resize: none;
  overflow: hidden;
`,U=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${r.colors.legacy.bgArea};
  border: 1px solid ${r.colors.legacy.borderSecondary};
  border-radius: 0 0 6px 6px;
  border-top: none;
  height: 40px;
  width: 100%;
  padding: 0;
  cursor: pointer;

  &:hover {
    background: ${r.colors.brand.black};
  }
`,q=n(l).attrs({size:16,weight:600,lineHeight:16})`
  margin-left: 6px;
`,W=({value:i})=>{let{buttonText:d,copy:a}=x(i),e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{(()=>{if(e&&e.current){let f=e.current.scrollHeight;e.current.style.height=f+"px"}})()},[]),t.default.createElement(j,null,t.default.createElement(F,{ref:e,readOnly:!0,value:i}),t.default.createElement(U,{onClick:a},t.default.createElement(B,null),t.default.createElement(q,null,d)))};var G=48,Ho=o.default.memo(({address:i,networkID:d,headerType:a,onCloseClick:e})=>{let{t:s}=h();return o.default.createElement(o.default.Fragment,null,o.default.createElement(a==="page"?I:P,null,s("depositAddress")),o.default.createElement(z,null,o.default.createElement(v,{align:"center",justify:"center",id:"column"},o.default.createElement(Z,{id:"QRCodeWrapper"},o.default.createElement(R,{value:i,size:160,level:"Q",id:"styledqrcode"}),o.default.createElement(u,{networkID:d,size:G,borderColor:"bgWallet",className:T({position:"absolute"})}))),o.default.createElement(l,{size:16,lineHeight:22,weight:600,margin:"16px 0 8px"},s("depositAddressChainInterpolated",{chain:k.getNetworkName(d)})),o.default.createElement(W,{value:i}),o.default.createElement(l,{size:14,color:r.colors.legacy.textSecondary,lineHeight:20,margin:"16px 0"},s("depositAssetSecondaryText")," ",o.default.createElement(J,{href:A,target:"_blank",rel:"noopener noreferrer"},s("commandLearnMore")))),o.default.createElement(H,{onClick:e},s("commandClose")))}),R=n(E.default)`
  padding: 8px;
  background: ${r.colors.legacy.white};
  border-radius: 6px;
  position: relative;
`,Z=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,J=n.a`
  color: ${r.colors.legacy.accentPrimary};
  text-decoration: none;
  font-weight: 500;
`;export{eo as a,W as b,Ho as c};
//# sourceMappingURL=chunk-7O2XBZXE.js.map

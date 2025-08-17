import{E as d,db as c,m as a,o as x,oa as p}from"./chunk-OA5YQ6R3.js";import{Ea as t,c as L}from"./chunk-DAZNTGG2.js";import{f as R,h as r,n as i}from"./chunk-YJSZZTEX.js";r();i();var o=R(L());r();i();var z=t.colors.legacy.accentWarning,$=t.colors.legacy.accentAlert,g=t.colors.legacy.accentAlert;var _=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,C=x`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,N=a.div`
  animation-name: ${e=>e.animateText?C:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,k=a(c).attrs(e=>({margin:e.margin??"20px auto 0 auto"}))`
  margin: ${e=>e.margin};
`,A=a(c).attrs(e=>({margin:e.margin??"15px 0px 0px 0px"}))`
  margin: ${e=>e.margin};
`,P=a.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var b={large:30,medium:28,small:24},v={large:34,medium:34,small:29},w={large:18,medium:16,small:14},B=({className:e,icon:T,primaryText:m,secondaryText:l,headerStyle:n="medium",showWarning:y=!1,showError:I=!1,animateText:H=!1})=>{n=n??"medium";let S=b[n],f=v[n],u=w[n],E={large:22,medium:19,small:17}[n],s=n==="small"?"16px 0 0 0":void 0,M=I?g:t.colors.legacy.textSecondary;return o.default.createElement(_,{className:e},T??o.default.createElement(d,null),y?o.default.createElement(P,null,o.default.createElement(p,null)):o.default.createElement(o.default.Fragment,null),o.default.createElement(N,{animateText:H},m&&o.default.createElement(k,{margin:s,weight:500,size:S,lineHeight:f,maxWidth:"320px"},m),l&&o.default.createElement(A,{margin:s,wordBreak:"break-word",size:u,lineHeight:E,color:M},l)))};export{z as a,$ as b,g as c,B as d};
//# sourceMappingURL=chunk-MVPAPIC5.js.map

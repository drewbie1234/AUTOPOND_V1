import{a as T}from"./chunk-CGOTMQG6.js";import{f as C}from"./chunk-U2ESYN6B.js";import{c as y}from"./chunk-SOBOWLRY.js";import{S as x,db as p,l as f,m as i}from"./chunk-OA5YQ6R3.js";import{Ea as e,Oa as l,R as w,Sa as m,c as v}from"./chunk-DAZNTGG2.js";import{f as B,h as S,n as u}from"./chunk-YJSZZTEX.js";S();u();var t=B(v());var k=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${o=>o.addScreenPadding?"16px":"0"};
`,L=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,A=i.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,$=i.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  padding: 16px;
`,N=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,tt=i.div`
  position: relative;
`,ot=i.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${e.colors.legacy.accentSuccess};
  }
`,D=i(p).attrs({size:28,weight:500,color:e.colors.legacy.textPrimary})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,b=i(p).attrs({size:16,weight:400,color:e.colors.legacy.textSecondary})`
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  span {
    color: ${e.colors.legacy.textSecondary};
    font-weight: bold;
  }
`,I=i(p).attrs({size:16,weight:500,color:e.colors.legacy.accentPrimary})`
  margin-top: 18px;
  text-decoration: none;
  ${o=>o.opacity!==0&&f`
      &:hover {
        cursor: pointer;
        color: ${e.colors.legacy.accentPrimaryLight};
      }
    `}
`,E=({description:o,header:r,icon:a,onClose:n,title:s,txLink:c,isClosable:d,disclaimer:h})=>{let{t:g}=w(),P=()=>{c&&self.open(c)};return t.default.createElement(k,null,r,t.default.createElement(L,null,t.default.createElement(l,{mode:"wait",initial:!0},t.default.createElement(m.div,{key:s,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},a)),t.default.createElement(D,null,s),t.default.createElement(b,null,o),c&&t.default.createElement(l,{mode:"wait",initial:!1},t.default.createElement(m.div,{key:c,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},t.default.createElement(I,{opacity:1,onClick:P},g("swapTxConfirmationViewTransaction"))))),d&&n?t.default.createElement(A,null,t.default.createElement(b,null,h),d&&n?t.default.createElement(y,{onClick:n},g("commandClose")):null):null)};var it=({ledgerAction:o,numberOfTransactions:r,cancel:a,ledgerApp:n})=>t.default.createElement(k,{addScreenPadding:!0},t.default.createElement(C,{ledgerAction:o,numberOfTransactions:r,cancel:a,ledgerApp:n}));var F=o=>self.open(o,"_blank"),nt=({txErrorTitle:o,txErrorMessage:r,txErrorHelpButtonLink:a,txLink:n,onClose:s})=>t.default.createElement(E,{header:t.default.createElement($,null,t.default.createElement(N,{onClick:()=>F(a)},t.default.createElement(x,{fill:"white"}))),icon:t.default.createElement(T,{type:"failure"}),description:r,onClose:s,title:o,txLink:n,isClosable:!0});export{it as a,nt as b};
//# sourceMappingURL=chunk-GIY2GCZS.js.map

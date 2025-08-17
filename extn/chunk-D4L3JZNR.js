import{a as f}from"./chunk-SOBOWLRY.js";import{J as m,l as g,m as r,sa as I}from"./chunk-OA5YQ6R3.js";import{Ea as n,c as z}from"./chunk-DAZNTGG2.js";import{f as A,h as x,n as y}from"./chunk-YJSZZTEX.js";x();y();var t=A(z());var c=g`
  width: 100%;
  padding: ${e=>e.padding||"14px"};
  background: ${e=>e.backgroundColor||n.colors.legacy.bgArea};
  border-width: ${e=>e.borderWidth||"1px"};
  border-style: solid;
  border-color: ${e=>e.warning?n.colors.legacy.accentAlert:n.colors.legacy.borderSecondary};
  border-radius: ${e=>e.borderRadius||"6px"};
  color: white;
  font-size: ${e=>e.fontSize||"16px"};
  line-height: 19px;

  &::placeholder {
    color: ${e=>e.placeholderColor||n.colors.legacy.textTertiary};
  }

  &:focus {
    outline: 0;
  }

  ::selection {
    background: ${n.colors.legacy.accentPrimary};
  }

  ::-moz-selection {
    background: ${n.colors.legacy.accentPrimary};
  }
`,E=g`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,d=e=>{let s=(0,t.forwardRef)(({warningMessage:o,...a},l)=>t.default.createElement(H,null,t.default.createElement(e,{...a,ref:l}),o&&t.default.createElement(R,null,o))),p=(0,t.forwardRef)(({label:o,...a},l)=>t.default.createElement(F,{label:o},t.default.createElement(e,{...a,ref:l}))),i=e;return i.WithWarning=s,i.WithLabel=p,i},H=r.div`
  width: 100%;
`,u=r.input`
  ${c}
  ${E}
`,R=r.div`
  color: ${n.colors.legacy.accentAlert};
  font-size: 16px;
  line-height: 1.2;
  margin-top: 10px;
  text-align: left;
`,F=r.div`
  position: relative;
  &:after {
    ${e=>e.label?`content: "${e.label}"`:""};
    color: ${n.colors.legacy.textTertiary};
    position: absolute;
    right: 20px;
    bottom: 17px;
    font-size: 16px;
  }
`,Z=d(u),V=r.textarea`
  ${c}
  resize: none;
  padding: 25px;
  line-height: 150%;
  word-spacing: 10px;
  text-align: left;
  white-space: normal;
  &:placeholder-shown {
    word-spacing: 3px;
  }
`,N=r.textarea`
  ${c}
  height: 68px;
  text-align: start;
  resize: none;
`,K=r.textarea`
  ${c}
  height: 68px;
  text-align: start;
  resize: none;
`,q=r.textarea`
  ${c}
  overflow: auto;
  height: 50px;
  text-align: start;
`,_=d(V),ee=d(N),te=d(K),re=d(q),D=r(u)`
  padding-left: 43px;
  padding-right: 43px;
`,O=r.div`
  width: 100%;
  position: relative;
`,U=r.div`
  position: absolute;
  top: 16px;
  left: 15px;
`,j=r.div`
  position: absolute;
  top: 16px;
  right: 15px;
  cursor: pointer;
`,ne=(0,t.forwardRef)((e,s)=>{let{showClearIcon:p,onClear:i,showLoadingIcon:o=!1,...a}=e;return t.default.createElement(O,null,t.default.createElement(U,null,o?t.default.createElement(f,{diameter:17}):t.default.createElement(m,null)),t.default.createElement(D,{...a,ref:s,type:"text"}),p&&t.default.createElement(j,{onClick:i},t.default.createElement(I,null)))}),B=r(u)`
  border: ${({border:e})=>e||"inherit"};
  color: ${({color:e})=>e||"inherit"};

  &:disabled {
    cursor: not-allowed;
  }
`,oe=t.default.memo(function({value:s,placeholder:p,fontSize:i="16px",required:o,warning:a,minLength:l=1,maxLength:W=79,decimalLimit:P=9,border:S,borderRadius:C,disabled:T,"aria-labelledby":w,"aria-label":$,onKeyPress:L,onUserInput:v,name:M}){return t.default.createElement(B,{value:s,required:o,warning:a,border:S,borderRadius:C,color:a?n.colors.legacy.accentAlert:n.colors.legacy.textPrimary,type:"text",inputMode:"decimal",pattern:`^\\d*(\\.\\d{0,${P}})?$`,autoComplete:"off",autoCorrect:"off",spellCheck:"false",fontSize:i,placeholder:p,step:"any",minLength:l,maxLength:W,disabled:T,name:M,"aria-labelledby":w,"aria-label":$,onKeyPress:L,onInput:h=>{let b=h.target;if(!b.validity.valid)h.preventDefault();else{let k=b.value.replace(/,/g,".");v(k)}}})});export{d as a,Z as b,_ as c,ee as d,te as e,re as f,ne as g,oe as h};
//# sourceMappingURL=chunk-D4L3JZNR.js.map

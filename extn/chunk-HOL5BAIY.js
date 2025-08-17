import{m as a}from"./chunk-OA5YQ6R3.js";import{Ea as t,R as r,c as v}from"./chunk-DAZNTGG2.js";import{f as w,h as l,n as g}from"./chunk-YJSZZTEX.js";l();g();var o=w(v());var f=a.div`
  position: relative;
  width: ${e=>`${e.width}px`};
  height: ${e=>`${e.height}px`};
  opacity: ${e=>e.disabled?e.disabledToggleOpacity:1};

  input[type="checkbox"] {
    width: ${e=>`${e.width}px`};
    height: ${e=>`${e.height}px`};
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  }

  label {
    width: ${e=>`${e.width}px`};
    height: ${e=>`${e.height}px`};
    background: ${e=>e.disabled?e.disabledBackgroundColor:e.inactiveBackgroundColor};
    border-radius: ${e=>`${(e.height||0)/2}px`};
    cursor: pointer;
    text-indent: -9999px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  label:after {
    content: "";
    position: absolute;
    top: ${e=>`${((e.height||0)-(e.toggleHeight||0))/2}px`};
    left: ${e=>`${((e.width||0)-(e.toggleWidth||0)*2)/2}px`};
    width: ${e=>`${e.toggleWidth}px`};
    height: ${e=>`${e.toggleHeight}px`};
    background: ${e=>e.inactiveToggleColor};
    border-radius: 100px;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${e=>e.disabled?e.disabledBackgroundColor:e.activeBackgroundColor};
    &:after {
      background: ${e=>e.disabled?e.disabledToggleColor:e.activeToggleColor};
    }
  }

  input:checked + label:after {
    left: calc(100% - ${e=>`${((e.width||0)-(e.toggleWidth||0)*2)/2}px`});
    transform: translateX(-100%);
  }

  label:active:after {
    width: 14px;
    background: ${t.colors.legacy.textPrimary};
  }
`,H=o.default.memo(({id:e,width:c=34,height:d=20,toggleWidth:n=14,toggleHeight:h=14,activeBackgroundColor:s=t.colors.legacy.accentPrimary,activeToggleColor:b=t.colors.legacy.textPrimary,inactiveBackgroundColor:u=t.colors.legacy.bgArea,inactiveToggleColor:$=t.colors.legacy.borderAccent,disabledBackgroundColor:p=t.colors.legacy.accentPrimary,disabledToggleColor:k=t.colors.legacy.textPrimary,disabledToggleOpacity:m=.4,checked:x=!1,disabled:i=!1,onChange:C,label:y})=>{let{t:T}=r();return o.default.createElement(f,{width:c,height:d,toggleWidth:n,toggleHeight:h,activeBackgroundColor:s,inactiveBackgroundColor:u,disabledBackgroundColor:p,activeToggleColor:b,inactiveToggleColor:$,disabledToggleColor:k,disabledToggleOpacity:m,disabled:i},o.default.createElement("input",{type:"checkbox","aria-label":y??"checkbox",id:e,checked:i||x,onChange:C,disabled:i,"data-testid":e}),o.default.createElement("label",{htmlFor:e},T("switchToggle")))});export{H as a};
//# sourceMappingURL=chunk-HOL5BAIY.js.map

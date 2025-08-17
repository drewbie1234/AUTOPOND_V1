import{l as e,m as c}from"./chunk-OA5YQ6R3.js";import{Ea as o}from"./chunk-DAZNTGG2.js";import{h as n,n as t}from"./chunk-YJSZZTEX.js";n();t();var i=5,a=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o.colors.legacy.textSecondary};
    transition: fill 200ms ease;
  }
  padding: ${i}px;
  margin: -${i}px;
  ${r=>r.isActive&&e`
      svg {
        fill: white;
      }
    `}
`,g=c(a).attrs(r=>({diameter:r.diameter??28}))`
  height: ${r=>r.diameter}px;
  min-width: ${r=>r.diameter}px;
  transition: background-color 200ms ease;
  border-radius: 50%;
  background-color: ${r=>r.backgroundColor||""};

  :hover {
    background-color: ${o.colors.legacy.bgArea};
  }
  ${r=>r.isActive&&e`
      background-color: ${o.colors.legacy.bgArea};
    `}
`;export{i as a,a as b,g as c};
//# sourceMappingURL=chunk-5ANSHKRX.js.map

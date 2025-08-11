// src/menu.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var menu = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Menu" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Home" }),
      /* @__PURE__ */ jsx("li", { children: "About" }),
      /* @__PURE__ */ jsx("li", { children: "Contact" })
    ] })
  ] });
};
export {
  menu
};

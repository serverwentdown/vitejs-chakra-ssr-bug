import React from "react";
import ReactDOM from "react-dom/client";
import { Button, ChakraProvider } from "@chakra-ui/react";
import * as jsxRuntime from "react/jsx-runtime";
const jsx = jsxRuntime.jsx;
function App() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(Button, {
      children: "Hello, world"
    })
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(ChakraProvider, {
    children: /* @__PURE__ */ jsx(App, {})
  })
}));

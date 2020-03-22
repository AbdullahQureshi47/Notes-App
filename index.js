import "panic-overlay";
import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import App from "./src/App";

const engine = new Styletron();

ReactDom.render(
  <StyletronProvider value={engine} debugAfterHydration>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

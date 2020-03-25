import "panic-overlay";
import React from "react";
import ReactDom from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { ThemeProvider, CSSReset, Theme } from "@chakra-ui/core";
import { CategoryProvider } from "./src/contexts/useCategory";
import App from "./src/App";

const engine = new Styletron();

ReactDom.render(
  <StyletronProvider value={engine} debugAfterHydration>
    <ThemeProvider theme={Theme}>
      <CategoryProvider>
        <CSSReset />
        <App />
      </CategoryProvider>
    </ThemeProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

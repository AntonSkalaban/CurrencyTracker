import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FontStyles, NormalStyles } from "components/styled";
import { lightTheme } from "components/Theme/Theme";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <NormalStyles />
        <FontStyles />

        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

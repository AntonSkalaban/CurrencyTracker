import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FontStyles, NormalStyles } from "components/styled";
import { lightTheme } from "components/Theme/Theme";
import { App } from "./App";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <NormalStyles />
        <FontStyles />

        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);

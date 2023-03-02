import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from "./App";
import { I18nextProvider } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "rgba(158, 130, 30, 0.8)"
      // main: "#9E821E"
      // main: "#89752A"
      // main: "#8D7D1F"
    }
  }
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);

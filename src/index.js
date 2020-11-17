import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalContextProvider from "./globalContext";

ReactDOM.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </GlobalContextProvider>,
  document.getElementById("root")
);

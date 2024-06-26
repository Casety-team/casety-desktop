import React from "react";
import ReactDOM from "react-dom";
import Router from "./pages/Router";
import reportWebVitals from "./config/reportWebVitals";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/font-size-overrides.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/zeeshan-react-portfolio/">
    <App />
  </BrowserRouter>
);

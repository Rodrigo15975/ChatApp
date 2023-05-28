import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { domAnimation, LazyMotion } from "framer-motion";
import ContextAuth from "./Context/ContextAuth.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <ContextAuth>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextAuth>
    </LazyMotion>
  </React.StrictMode>
);

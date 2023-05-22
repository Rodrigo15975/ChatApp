import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { domAnimation, LazyMotion } from "framer-motion";
import ContextAuth from "./Context/ContextAuth.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <ContextAuth>
        <App />
      </ContextAuth>
    </LazyMotion>
  </React.StrictMode>
);

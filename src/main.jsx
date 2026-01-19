import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* ---------- Application Entry Point ----------
   Creates the React root and mounts the App component
   All global styles are imported via index.css
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  /* ---------- Strict Mode Wrapper ----------
     Helps identify potential problems during development
     Does not affect production build
  */
  <React.StrictMode>
    {/* ---------- Root Application Component ----------
        App contains routing, pages, and core UI structure
    */}
    <App />
  </React.StrictMode>
);

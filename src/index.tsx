import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./pages/application";
import { BrowserRouter } from "react-router-dom";
import "./index.css"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();

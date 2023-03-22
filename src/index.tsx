import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route } from "react-router-dom";
import LastName from "./LastName";

// Find all widget divs
const WidgetDivs = document.querySelectorAll(".json_widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  const root = createRoot(Div);
  root.render(
    <React.StrictMode>
      <Route path="/" element={<App domElement={Div} />} />
      <Route path="/lastName" element={<LastName domElement={Div} />} />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

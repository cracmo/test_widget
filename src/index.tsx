import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LastName from "./LastName";

// Find all widget divs
const WidgetDivs = document.querySelectorAll(".json_widget");

const getBrowserRouter = (Div: Element) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <App domElement={Div} />,
    },
    {
      path: "/lastName",
      element: <LastName domElement={Div} />,
    },
  ]);
};

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  const root = createRoot(Div);
  root.render(
    <React.StrictMode>
      <RouterProvider router={getBrowserRouter(Div)} />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

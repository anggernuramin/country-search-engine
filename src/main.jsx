import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Country from "./pages/country.jsx";
import "./index.css";

const app = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:name",
    element: <Country />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    Element: <App />,
    children: [
      {
        path: "/",
        element: <Mainpage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

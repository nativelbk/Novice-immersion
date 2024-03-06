import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";



const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NextUIProvider> */}
      <RouterProvider router={router} />
    {/* </NextUIProvider> */}
  </React.StrictMode>
);

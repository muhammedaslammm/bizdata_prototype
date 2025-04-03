import React from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./client/pages/Home.jsx";
import Wishlist from "./client/pages/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "wishlist", element: <Wishlist /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

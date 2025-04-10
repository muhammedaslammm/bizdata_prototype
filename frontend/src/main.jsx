import React from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./client/pages/Home.jsx";
import Wishlist from "./client/pages/Wishlist.jsx";
import Productpage from "./client/pages/productpage.jsx";

// router is created, which handles various routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //cliend side frontend
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      } /*specifies default route when
      no specific route is defined*/,
      { path: "home", element: <Home /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product/:productid", element: <Productpage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root")
); /*root element is accessed from the DOM and created as the root*/

root.render(<RouterProvider router={router} />); /*'RouterProvider' provides the
defined routing configuration to the application*/

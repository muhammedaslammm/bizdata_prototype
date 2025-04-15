import React from "react";
import ReactDOM from "react-dom/client";
import App from "./client/App.jsx";
import { WishlistProvider } from "./client/context/WishlistContext.jsx"; // path may vary
import { CartProvider } from "./client/context/CartContext";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./client/pages/Home.jsx";
import Wishlist from "./client/pages/Wishlist.jsx";
import Productpage from "./client/pages/Productpage.jsx";
import Cart from "./client/pages/Cart.jsx";
import Profile from "./client/pages/Profile.jsx";
import Userdata from "./data/userdata.js";
import ProductList from "./client/pages/ProductList.jsx";

// router is created, which handles various routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      { path: "home", element: <Home /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product/:productid", element: <Productpage /> },
      {
        path: "/:category/:sub_category/:sub_category_2",
        element: <ProductList />,
      },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);

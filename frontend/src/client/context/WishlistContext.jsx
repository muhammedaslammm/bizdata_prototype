import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishList = (product) => {
    let addedToWishlist = false;
    setWishlist((prev) => {
      const matchingProduct = prev.find((pro) => pro.id === product.id);
      if (!matchingProduct) {
        addedToWishlist = true;
        return [...prev, product];
      }
      return prev;
    });

    if (addedToWishlist) return { success: true };
    else
      return { success: false, message: "product already added to wishlist" };
  };

  const value = {
    wishlist,
    addToWishList,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

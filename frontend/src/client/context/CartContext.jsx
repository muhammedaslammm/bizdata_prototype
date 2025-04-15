import React, { createContext, useContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add a product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      return {
        success: false,
        message: "Item already in cart",
      };
    }

    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);

    return {
      success: true,
      message: "Item added to cart",
    };
  };

  // ❌ Remove an item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 🔁 Increase or decrease quantity
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta), // Prevent 0 or negative
            }
          : item
      )
    );
  };

  // 💰 Calculate total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.offer_price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);

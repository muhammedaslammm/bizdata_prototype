import { WishlistProvider } from "./WishlistContext";
import { CartProvider } from "./CartContext";
import UserProvider from "./UserProvider";

const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default ContextProvider;

import WishlistProvider from "./WishlistProvider";
import CartProvider from "./CartProvider";
import UserProvider from "./UserProvider";
import CategoryProvider from "./CategoryProvider";

const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <CategoryProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CategoryProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default ContextProvider;

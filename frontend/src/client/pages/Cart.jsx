import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    updateQuantity(id, delta);
  };

  const subtotal = getCartTotal();

  return (
    <div className="w-[90%] mx-auto py-10 space-y-8 text-slate-800">
      <h1 className="text-2xl font-semibold border-b pb-4">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-6 gap-4"
            >
              {/* Image and Info */}
              <div className="flex gap-6 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-slate-500">{item.name}</p>
                  <p className="mt-2 text-blue-600 font-semibold">
                    {item.offer_price} AED
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 mt-2 underline"
                  >
                    Remove item
                  </button>
                </div>
              </div>

              {/* Quantity and Total */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center border rounded-md overflow-hidden">
                  <button
                    className="px-3 py-1 text-xl"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-lg">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-xl"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <p className="text-sm mt-1">
                  Total: {(item.offer_price * item.quantity).toFixed(2)} AED
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border rounded-xl p-6 bg-gray-50 shadow-md space-y-6 h-fit">
          <h2 className="text-lg font-semibold border-b pb-2">Cart Totals</h2>
          <div className="flex justify-between text-sm text-slate-700">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)} AED</span>
          </div>
          {/* Add Coupon */}
          <details className="text-sm text-blue-600 cursor-pointer">
            <summary>Add a coupon</summary>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border p-2 rounded w-full mt-2"
              />
              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Apply Coupon
              </button>
            </div>
          </details>
          {/* Total */}
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>{subtotal.toFixed(2)} AED</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

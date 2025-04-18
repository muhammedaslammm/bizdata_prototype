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
    <div className="w-[90%] mx-auto text-neutral-900 my-6 py-8">
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-[.5rem]">
          <div className="py-[10rem] text-center">
            <div className="leading-[3.5rem]">
              <h2 className="text-[3.3rem] font-semibold">
                Your cart is empty
              </h2>
              <p className="text-[1.8rem] text-neutral-700">
                Looks like you haven't added anything yet.
              </p>
            </div>

            <button
              onClick={() => navigate("/home")}
              className="button--cart bg-cyan-800 text-white font-medium mt-8 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-8">
          {/* Cart Items */}
          <div className="space-y-6 w-8/12">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-[.5rem] p-8 gap-12"
              >
                <div className="flex flex-col items-start">
                  {/* title and price */}
                  <div>
                    <h2 className="text-[1.8rem] font-medium">{item.title}</h2>
                    <p className="text-nuetral-600  font-semibold text-[2.2rem] my-[1.5rem] flex gap-[1rem] items-baseline">
                      Rs. {item.offer_price.toFixed(2)}{" "}
                      <span className="text-green-700  font-medium text-[1.5rem]">{`x ${
                        item.quantity
                      } = Rs ${(item.offer_price * item.quantity).toFixed(
                        2
                      )}`}</span>
                    </p>
                  </div>
                  {/* quantity handling button */}
                  <div className="flex items-center justify-between text-[2rem] border border-neutral-300 rounded-[.3rem] w-[10rem] my-[1rem]">
                    <button
                      className="px-3 py-1 cursor-pointer font-medium "
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 cursor-pointer">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 cursor-pointer font-medium "
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  {/* remove button
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 mt-2 underline"
                  >
                    Remove item
                  </button> */}
                </div>
                <div className="image w-[17rem] h-[15rem] rounded-[.5rem] p-4 self-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-4/12 self-start rounded-[.5rem] p-8 bg-gray-50 space-y-6">
            <h2 className="text-[2rem] font-semibold">Cart Totals</h2>
            <div className="flex justify-between text-[1.7rem] text-neutral-700">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} AED</span>
            </div>

            <details className="text-[1.6rem] text-red-800 cursor-pointer">
              <summary>Add a coupon</summary>
              <div className="flex flex-col gap-[1.5rem]">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border border-neutral-500 text-neutral-800 outline-0  p-2 rounded w-full mt-2"
                />
                <button className="py-3 w-full bg-neutral-800 text-white font-medium cursor-pointer rounded ">
                  Apply Coupon
                </button>
              </div>
            </details>

            <div className="flex justify-between text-[1.7rem] font-medium border-t border-neutral-500 pt-4">
              <span>Total</span>
              <span className="font-semibold">{subtotal.toFixed(2)} AED</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full text-[1.7rem] bg-cyan-800 text-white font-medium py-3 rounded cursor-pointer mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

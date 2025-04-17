import { useWishlist } from "../context/WishlistContext"; // adjust path
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="w-[90%] mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-slate-600">
            Your wishlist is currently empty.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative border p-4 rounded-xl shadow-md bg-white"
            >
              {/* Remove button with increased size */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 text-slate-500 hover:text-red-500 text-4xl"
                title="Remove from Wishlist"
              >
                &times;
              </button>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-contain mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-slate-800 mb-1">
                {item.title}
              </h2>
              <p className="text-slate-600">{item.name}</p>
              <p className="text-blue-600 font-semibold text-lg mt-2">
                ₹{item.offer_price}
              </p>
              <Link
                to={`/product/${item.id}`}
                className="inline-block mt-4 text-sm text-blue-500 hover:underline"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

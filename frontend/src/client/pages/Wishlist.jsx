import { useWishlist } from "../context/WishlistContext"; // adjust path
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="w-[90%] mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-slate-600">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-xl shadow-md bg-white"
            >
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

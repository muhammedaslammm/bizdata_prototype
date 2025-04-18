import EmptyPage from "../components/EmptyPage";
import { useWishlist } from "../context/WishlistContext"; // adjust path
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="w-[90%] mx-auto my-8">
      {wishlist.length === 0 ? (
        <EmptyPage title="wishlist" />
      ) : (
        <div className="w-[70%] bg-white p-8">
          <h2 className="text-[2rem] font-medium capitalize pb-4">
            your wishlist <span>{`(${wishlist.length})`}</span>
          </h2>
          <div className="">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className=" border-t border-neutral-300 py-8 bg-white"
              >
                {/* Remove button with increased size */}

                <div className="flex justify-between gap-8">
                  <div>
                    <h2 className="text-[1.8rem] font-medium text-neutral-800">
                      {item.title}
                    </h2>
                    <p className="text-neutral-600 font-semibold text-[1.8rem] mb-8 mt-4">
                      Rs {item.offer_price}
                    </p>
                    <div className="flex gap-8 items-center ">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-sm text-blue-500 text-[1.5rem] capitalize cursor-pointer hover:underline"
                      >
                        View Product
                      </Link>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-500 text-[1.5rem] capitalize cursor-pointer hover:underline"
                      >
                        remove product
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="image w-[10rem]">
                      <img src={item.image} alt={item.name} className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

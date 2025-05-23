import { Heart } from "lucide-react";
import projectors from "../../data/projectors";
import laptops from "../../data/laptops";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext"; // import cart context

const Productpage = () => {
  const [product, setProduct] = useState(null);
  const products = [...projectors, ...laptops];
  const urlpath = useParams();
  const navigate = useNavigate();

  const { addToWishList } = useWishlist();
  const { addToCart } = useCart(); // ✅ Call useCart inside the component

  const addProductToWishlist = (product) => {
    const response = addToWishList(product);
    if (response.success) navigate("/wishlist");
    else window.alert(response.message);
  };

  const handleAddToCart = (product) => {
    const response = addToCart(product);
    if (response.success) {
      navigate("/cart");
    } else {
      if (window.confirm(response.message + ". Go to cart?")) {
        navigate("/cart");
      }
    }
  };

  useEffect(() => {
    const matchingProduct = products.find((product) => {
      return product.id === Number(urlpath.productid);
    });

    setProduct(matchingProduct);
  }, [urlpath.productid]); // ✅ Better dependency

  return product ? (
    <div className="w-[90%] mx-auto py-12 text-slate-800 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section - Sticky */}
        <div className="sticky top-24 h-fit bg-white shadow-md p-4 rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] h-[300px] object-contain rounded-lg mx-auto"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-slate-600">{product.name}</p>

          {/* Rating */}
          <div className="mt-4 text-yellow-700 font-semibold text-[15px]">
            ⭐ 4.6/5 (2,300 reviews)
          </div>

          {/* Price */}
          <div className="flex gap-4 items-baseline">
            <p className="text-[25px] text-blue-600 font-semibold">
              ₹{product.offer_price}
            </p>
            <p className="text-[15px] line-through text-slate-400">
              ₹{product.price}
            </p>
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <h2 className="text-[15px] font-semibold text-slate-700">
              Description
            </h2>
            <p className="text-[13px] leading-relaxed text-slate-700">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg transition"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl text-lg flex items-center gap-2 transition"
              onClick={() => addProductToWishlist(product)}
            >
              <Heart size={20} /> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="space-y-10">
        {Object.values(product.specifications).map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold border-b border-slate-300 pb-2 mb-4 capitalize">
              {section.head}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {section.details.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-slate-600 font-medium capitalize text-[16px]">
                    {item.label}
                  </span>
                  <span className="text-slate-800 text-[15px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Productpage;

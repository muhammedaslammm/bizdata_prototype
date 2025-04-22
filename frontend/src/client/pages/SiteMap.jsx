import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <div className="px-8 py-14 max-w-7xl mx-auto text-gray-800 bg-white shadow-md rounded-2xl">
      <h1 className="text-5xl font-bold text-center text-black mb-12 underline decoration-black decoration-4">
        Site Map
      </h1>

      <section className="mb-14">
        <h2 className="text-3xl font-semibold text-black mb-4">
          🧭 Quick Navigation
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Explore all our important pages and sections at a glance. Use this map
          to easily access what you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Main Pages */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-black">Main Pages</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <Link to="/home" className="hover:underline text-black">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-black">
                  ℹ️ About Us
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:underline text-black">
                  🛍 Store
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-black">
                  📞 Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:underline text-black">
                  👤 My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Shopping */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-black">Shopping</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <Link to="/cart" className="hover:underline text-black">
                  🛒 Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:underline text-black">
                  ❤️ Wishlist
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:underline text-black">
                  ✅ Checkout
                </Link>
              </li>

              <li>
                <Link
                  to="/order-summary"
                  className="hover:underline text-black"
                >
                  📦 Order Summary
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies & Help */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Policies & Help
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <Link to="/faq" className="hover:underline text-black">
                  ❓ FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:underline text-black">
                  📄 Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:underline text-black"
                >
                  🔐 Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation-return"
                  className="hover:underline text-black"
                >
                  ↩️ Cancellation & Return
                </Link>
              </li>
              <li>
                <Link
                  to="/payment-policy"
                  className="hover:underline text-black"
                >
                  💰 Payment Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="hover:underline text-black"
                >
                  🚚 Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/security-policy"
                  className="hover:underline text-black"
                >
                  🔒 Security
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:underline text-black">
                  👨‍💼 Careers
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:underline text-black">
                  🗺 Site Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10 text-center">
        <p className="text-lg text-gray-700">
          We’re continuously improving to serve you better. Thank you for
          visiting!
        </p>
      </section>
    </div>
  );
};

export default SiteMap;

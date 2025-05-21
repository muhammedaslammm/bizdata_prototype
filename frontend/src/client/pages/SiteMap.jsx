import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <div className="bg-gradient-to-br from-[#e9edff] to-white min-h-screen py-14 px-6">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h1 className="text-5xl font-bold text-center text-[#283ea8] mb-14">
          Site Map
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#283ea8] mb-4">
            🧭 Quick Navigation
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Explore all our important pages and sections at a glance. Use this
            map to easily access what you need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 1: Main Pages */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#283ea8]">
                Main Pages
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>
                  <Link to="/home" className="hover:underline text-[#1a1a1a]">
                    🏠 Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline text-[#1a1a1a]">
                    ℹ️ About Us
                  </Link>
                </li>
                <li>
                  <Link to="/store" className="hover:underline text-[#1a1a1a]">
                    🛍 Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    📞 Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    👤 My Profile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Shopping */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#283ea8]">
                Shopping
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>
                  <Link to="/cart" className="hover:underline text-[#1a1a1a]">
                    🛒 Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    ❤️ Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/checkout"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    ✅ Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-summary"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    📦 Order Summary
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Policies & Help */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#283ea8]">
                Policies & Help
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>
                  <Link to="/faq" className="hover:underline text-[#1a1a1a]">
                    ❓ FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-use"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    📄 Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    🔐 Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cancellation-return"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    ↩️ Cancellation & Return
                  </Link>
                </li>
                <li>
                  <Link
                    to="/payment-policy"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    💰 Payment Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    🚚 Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security-policy"
                    className="hover:underline text-[#1a1a1a]"
                  >
                    🔒 Security
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="hover:underline text-[#1a1a1a]">
                    👨‍💼 Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sitemap"
                    className="hover:underline text-[#1a1a1a]"
                  >
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
    </div>
  );
};

export default SiteMap;

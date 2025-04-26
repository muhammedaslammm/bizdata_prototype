import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this line
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-[6rem] mt-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-[90%] mx-auto text-[15px]">
        <div>
          <h3 className="font-medium text-xl mb-5">About</h3>
          <ul className="space-y-2 pl-1 text-[1.5rem]">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:underline">
                Store
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[1.5rem] mb-5">Grouped Companies</h3>
          <ul className="space-y-2 pl-1 text-[1.5rem] ">
            <li>Flipkart</li>
            <li>Myntra</li>
            <li>Amazon</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Help
          </h3>
          <ul className="space-y-2 pl-1 text-[1.5rem]">
            <li>
              <Link to="/payment-policy" className="hover:underline transition">
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-policy"
                className="hover:underline text-[1.5rem] text-shadow-white"
              >
                Shipping
              </Link>
            </li>

            <li>Cancellation</li>
            <li>Return</li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Consumer Policy
          </h3>
          <ul className="space-y-2 pl-1 text-[1.5rem]">
            <li>
              {" "}
              <Link to="/cancellation-return" className="hover:underline">
                Cancellation & Return
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/security-policy" className="hover:underline">
                Security
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:underline">
                Site Map
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Mail Us
          </h3>
          <ul className="space-y-2 pl-1 text-[1.5rem]">
            <li className="flex items-center gap-2">info@gmail.com</li>
            <li className="flex items-center gap-2">@facebook.com</li>
            <li className="flex items-center gap-2">@instagram.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Registered Office Address
          </h3>
          <ul className="pl-1">
            <li className="text-[1.5rem]  leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              ipsa. Culpa minus optio vero ex asperiores perferendis. Harum ab
              nisi quis ex repellendus, in non sapiente possimus est porro
              recusandae?
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

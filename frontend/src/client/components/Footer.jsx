import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-300 text-black py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-[90%] mx-auto text-[15px]">
        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">
            About
          </h3>
          <ul className="space-y-2 pl-1 text-xl">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Store</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">
            Grouped Companies
          </h3>
          <ul className="space-y-2 pl-1 text-xl">
            <li>Flipkart</li>
            <li>Myntra</li>
            <li>Amazon</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">Help</h3>
          <ul className="space-y-2 pl-1 text-xl">
            <li>Payment</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">
            Consumer Policy
          </h3>
          <ul className="space-y-2 pl-1 text-xl">
            <li>Cancellation & Return</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">
            Mail Us
          </h3>
          <ul className="space-y-2 pl-1 text-xl">
            <li className="flex items-center gap-2">
              <Mail size={20} /> info@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={20} /> @facebook.com
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={20} /> @instagram.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">
            Registered Office Address
          </h3>
          <ul className="pl-1">
            <li className="text-xl leading-relaxed">
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

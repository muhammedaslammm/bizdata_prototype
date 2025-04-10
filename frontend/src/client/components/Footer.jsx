const Footer = () => {
  return (
    <footer className="bg-neutral-300 text-black py-[6rem] mt-[10rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-[90%] mx-auto text-[15px]">
        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">About</h3>
          <ul className="space-y-2 pl-1 text-xl">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Store</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Grouped Companies
          </h3>
          <ul className="space-y-2 pl-1 text-[1.5rem] text-neutral-700">
            <li>Flipkart</li>
            <li>Myntra</li>
            <li>Amazon</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Help
          </h3>
          <ul className="space-y-2 pl-1 text-[1.5rem] text-neutral-700">
            <li>Payment</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-medium text-[1.5rem] mb-5">
            Consumer Policy
          </h3>
          <ul className="space-y-2 pl-1 text-[1.5rem] text-neutral-700">
            <li>Cancellation & Return</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h3 className="text-shadow-white font-bold text-xl mb-5">Mail Us</h3>
          <ul className="space-y-2 pl-1 text-xl">
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
            <li className="text-[1.5rem] text-neutral-700 leading-relaxed">
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

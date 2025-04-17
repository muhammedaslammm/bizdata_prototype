import React from "react";

const About = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-7">
          We are one of the leading e-commerce platforms, offering a wide range
          of products across multiple categories like electronics, fashion, home
          appliances, beauty, groceries, and more. Our goal is to provide
          customers with a seamless shopping experience through innovative
          technology, fast delivery, and exceptional customer service.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-7">
          To bring the best of online shopping to your fingertips. We aim to
          offer quality products at competitive prices while maintaining trust,
          reliability, and satisfaction for every customer.
        </p>
      </section>

      <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Electronics</h3>
          <p>
            From smartphones to smart TVs, we provide a wide range of the latest
            electronic gadgets and appliances with unbeatable deals.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Laptops & Accessories</h3>
          <p>
            Shop high-performance laptops, gaming devices, and essential
            accessories from top brands tailored for both professionals and
            students.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Fashion</h3>
          <p>
            Explore trending styles for men, women, and kids including top
            brands in apparel, footwear, and accessories.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Reach</h2>
        <p className="text-lg leading-7">
          With a presence in over 10,000+ cities and towns, we ensure timely
          delivery, multiple payment methods including COD and UPI, and a
          user-friendly app and website experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Trusted by millions of customers</li>
          <li>24/7 Customer support</li>
          <li>Easy returns and fast delivery</li>
          <li>Secure and smooth checkout process</li>
          <li>Regular sales and exciting discounts</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

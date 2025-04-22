import React from "react";

const About = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      {/* Intro */}
      <section className="mb-12 text-center">
        <p className="text-lg leading-7 max-w-3xl mx-auto">
          We're a top-tier e-commerce platform dedicated to providing quality
          products and a seamless shopping experience. From electronics to
          fashion, our platform connects customers with trusted brands and
          unbeatable deals.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-neutral-100 p-6 rounded-xl shadow-inner">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600">10M+</h3>
          <p className="text-sm mt-1">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-indigo-600">100K+</h3>
          <p className="text-sm mt-1">Products Available</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
          <p className="text-sm mt-1">Customer Support</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-indigo-600">15+</h3>
          <p className="text-sm mt-1">Years of Service</p>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Electronics",
              desc: "Smartphones, TVs, headphones, and smart home gadgets.",
            },
            {
              title: "Laptops & Accessories",
              desc: "Laptops, printers, bags, and gaming gear.",
            },
            {
              title: "Fashion",
              desc: "Trendy wear for men, women, and children.",
            },
            {
              title: "Home & Kitchen",
              desc: "Furniture, cookware, decor, and appliances.",
            },
            {
              title: "Beauty & Personal Care",
              desc: "Skincare, grooming tools, and wellness products.",
            },
            {
              title: "Groceries",
              desc: "Daily essentials delivered to your doorstep.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mb-16 bg-indigo-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">
          Our Mission & Core Values
        </h2>
        <p className="text-lg mb-4">
          Our mission is to democratize online shopping by making it fast,
          affordable, and reliable for everyone.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Customer-first approach</li>
          <li>Innovation through technology</li>
          <li>Transparency and trust</li>
          <li>Sustainability and inclusivity</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Aditi Sharma",
              feedback:
                "I love the quick delivery and amazing support team. Super reliable!",
            },
            {
              name: "Rahul Mehra",
              feedback:
                "Great discounts and genuine products. My go-to app for electronics.",
            },
            {
              name: "Sneha Kapoor",
              feedback:
                "Amazing variety and smooth returns. Shopping made fun and safe!",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md">
              <p className="text-gray-700 mb-3 italic">"{item.feedback}"</p>
              <h4 className="text-indigo-600 font-semibold">— {item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer-style Closing Note */}
      <section className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ShopKart Pvt. Ltd. All rights
        reserved.
      </section>
    </div>
  );
};

export default About;

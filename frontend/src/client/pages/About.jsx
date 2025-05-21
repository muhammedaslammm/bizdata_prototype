import React from "react";

const About = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#283ea8]">
        About Us
      </h1>

      {/* Intro */}
      <section className="mb-12 text-center">
        <p className="text-lg leading-7 max-w-3xl mx-auto text-gray-700">
          We're a premium e-commerce platform delivering quality and elegance.
          From tech to fashion, we connect you with trusted brands and
          irresistible deals—all in one beautiful experience.
        </p>
      </section>

      {/* Stats Banner */}
      <section className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-[#f0f2ff] p-6 rounded-xl shadow-inner">
        {[
          { stat: "10M+", label: "Happy Customers" },
          { stat: "100K+", label: "Products Available" },
          { stat: "24/7", label: "Customer Support" },
          { stat: "15+", label: "Years of Service" },
        ].map((item, idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-bold text-[#283ea8]">{item.stat}</h3>
            <p className="text-sm mt-1 text-gray-600">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#283ea8]">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-[#283ea8]"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#283ea8]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mb-16 bg-[#e9edff] p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-[#283ea8]">
          Our Mission & Core Values
        </h2>
        <p className="text-lg mb-4 text-gray-700">
          Our mission is to democratize online shopping by making it fast,
          affordable, and reliable for everyone.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2 text-gray-700">
          <li>Customer-first approach</li>
          <li>Innovation through technology</li>
          <li>Transparency and trust</li>
          <li>Sustainability and inclusivity</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#283ea8]">
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
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md border-l-4 border-[#283ea8]"
            >
              <p className="text-gray-700 mb-3 italic">"{item.feedback}"</p>
              <h4 className="text-[#283ea8] font-semibold">— {item.name}</h4>
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

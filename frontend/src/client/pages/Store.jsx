import React from "react";

const Store = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#283ea8]">
        Our Store
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#283ea8]">
          🛍 One-Stop Shopping Destination
        </h2>
        <p className="text-lg text-gray-700 leading-7">
          Welcome to your trusted online store—where convenience meets quality.
          From electronics and fashion to groceries and home essentials, we
          offer a wide range of products across all categories. With millions of
          items and unbeatable deals, our store is designed for every type of
          shopper.
        </p>
      </section>

      <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "📱 Electronics & Gadgets",
            desc: "Latest smartphones, smartwatches, audio gear, and more—direct from top brands.",
          },
          {
            title: "👚 Fashion & Lifestyle",
            desc: "Trendy clothing, shoes, and accessories for men, women, and kids.",
          },
          {
            title: "🏠 Home Essentials",
            desc: "Furniture, kitchenware, appliances, and everything you need to make your house a home.",
          },
          {
            title: "🥫 Grocery & Daily Needs",
            desc: "Fresh groceries, pantry staples, snacks, and more delivered to your doorstep.",
          },
          {
            title: "💻 Laptops & Accessories",
            desc: "High-performance laptops, gaming gear, and accessories from leading tech brands.",
          },
          {
            title: "🎁 Gifts & Offers",
            desc: "Exclusive offers, seasonal deals, and curated gift ideas for all occasions.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#283ea8]">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#283ea8]">
          🚚 Fast & Reliable Delivery
        </h2>
        <p className="text-lg text-gray-700 leading-7">
          We deliver across 10,000+ cities and towns with real-time tracking,
          safe packaging, and flexible delivery options. Our logistics partners
          ensure your order reaches you on time, every time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#283ea8]">
          🏢 Physical Store Experience (Coming Soon)
        </h2>
        <p className="text-lg text-gray-700 leading-7">
          We're working on launching physical experience centers where you can
          touch, feel, and explore our best products before purchase. Stay tuned
          for updates on our store locations!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#283ea8]">
          🛒 Your Store, Your Way
        </h2>
        <p className="text-lg text-gray-700 leading-7">
          Whether you shop from the comfort of your home or explore deals on the
          go through our app, our store adapts to your lifestyle. Experience
          seamless navigation, secure checkout, and lightning-fast delivery.
        </p>
      </section>
    </div>
  );
};

export default Store;

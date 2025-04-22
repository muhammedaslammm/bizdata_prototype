import React from "react";

const FAQ = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-black">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-800">
        Frequently Asked Questions
      </h1>

      <section className="mb-12 space-y-6">
        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            1. How do I place an order?
          </h2>
          <p className="text-gray-700 text-lg">
            Browse your favorite categories or use the search bar. Select a
            product, click “Add to Cart”, then proceed to checkout and choose
            your payment method.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            2. Can I cancel my order?
          </h2>
          <p className="text-gray-700 text-lg">
            Yes, you can cancel your order before it is shipped. Go to your
            Profile → Orders and click on “Cancel” next to the order you want to
            cancel.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            3. What is the return policy?
          </h2>
          <p className="text-gray-700 text-lg">
            You can return most items within 7 days of delivery. Make sure the
            product is unused and in its original condition.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            4. What payment options are available?
          </h2>
          <p className="text-gray-700 text-lg">
            We accept UPI, Debit/Credit Cards, Net Banking, and Cash on Delivery
            (COD).
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            5. How long does delivery take?
          </h2>
          <p className="text-gray-700 text-lg">
            Delivery usually takes 2-5 working days depending on your location.
            You can track your order in the “Orders” section.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            6. How do I contact customer support?
          </h2>
          <p className="text-gray-700 text-lg">
            You can reach us through the Contact page, or email us at
            support@example.com. Our team is available 24/7.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

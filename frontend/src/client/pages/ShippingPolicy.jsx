import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800 bg-[#e9edff]">
      <h1 className="text-5xl font-bold text-center text-[#283ea8] mb-12">
        Shipping Policy
      </h1>

      {/* Delivery Coverage */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          🚚 Delivery Coverage
        </h2>
        <p className="text-lg leading-7">
          We deliver across 10,000+ pin codes in India. Whether you're in a
          metro or a remote area, our extensive logistics network ensures your
          order reaches you swiftly and safely.
        </p>
      </section>

      {/* Delivery Time */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          ⏱️ Delivery Timeframe
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>📦 Standard Delivery: 3–7 business days</li>
          <li>⚡ Express Delivery: 1–3 business days (on eligible products)</li>
          <li>🌍 Remote Areas: May take 7–10 business days</li>
        </ul>
      </section>

      {/* Shipping Charges */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          💸 Shipping Charges
        </h2>
        <p className="text-lg leading-7">
          We offer <strong>free shipping</strong> on most orders. Some low-cost
          or heavy items may include a small shipping fee, clearly mentioned
          during checkout.
        </p>
      </section>

      {/* Order Tracking */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          🔍 Track Your Order
        </h2>
        <p className="text-lg leading-7">
          Once your order is shipped, you'll receive a tracking link via SMS and
          email. You can also track your order status in the{" "}
          <strong>"My Orders"</strong> section of your account.
        </p>
      </section>

      {/* Undelivered Orders */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          ❗ Failed Delivery Attempts
        </h2>
        <p className="text-lg leading-7 mb-2">
          If we're unable to deliver your order after multiple attempts, the
          product will be returned to the warehouse, and a refund will be
          processed.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Please ensure your address & phone number are accurate</li>
          <li>Keep your phone available for delivery coordination</li>
        </ul>
      </section>

      {/* International Shipping */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          🌐 International Shipping
        </h2>
        <p className="text-lg leading-7">
          Currently, we ship only within India. International shipping is not
          available yet, but we’re working to expand globally soon!
        </p>
      </section>

      {/* Help Section */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#283ea8] mb-4 flex items-center gap-2">
          📞 Need Help with Delivery?
        </h2>
        <p className="text-lg leading-7">
          For delivery delays or tracking issues, contact our support team at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="text-[#283ea8] underline font-medium"
          >
            support@yourstore.com
          </a>{" "}
          or call <strong>1800-000-000</strong>.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;

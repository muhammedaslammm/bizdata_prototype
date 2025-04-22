import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-5xl font-bold text-center text-blue-800 mb-10">
        Shipping Policy
      </h1>

      {/* Delivery Coverage */}
      <section className="mb-12 bg-indigo-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
          🚚 Delivery Coverage
        </h2>
        <p className="text-lg leading-7">
          We deliver across 10,000+ pin codes in India. Whether you're in a
          metro or a remote area, our extensive logistics network ensures your
          order reaches you swiftly and safely.
        </p>
      </section>

      {/* Delivery Time */}
      <section className="mb-12 bg-white rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          ⏱️ Delivery Timeframe
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>📦 Standard Delivery: 3–7 business days</li>
          <li>⚡ Express Delivery: 1–3 business days (on eligible products)</li>
          <li>🌍 Remote Areas: May take 7–10 business days</li>
        </ul>
      </section>

      {/* Shipping Charges */}
      <section className="mb-12 bg-yellow-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
          💸 Shipping Charges
        </h2>
        <p className="text-lg leading-7">
          We offer **free shipping** on most orders. Some low-cost or heavy
          items may include a small shipping fee, clearly mentioned during
          checkout.
        </p>
      </section>

      {/* Order Tracking */}
      <section className="mb-12 bg-sky-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-sky-700 mb-3">
          🔍 Track Your Order
        </h2>
        <p className="text-lg leading-7">
          Once your order is shipped, you'll receive a tracking link via SMS and
          email. You can also track your order status in the{" "}
          <strong>"My Orders"</strong> section of your account.
        </p>
      </section>

      {/* Undelivered Orders */}
      <section className="mb-12 bg-red-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-red-700 mb-3">
          ❗ Failed Delivery Attempts
        </h2>
        <p className="text-lg leading-7 mb-2">
          If we're unable to deliver your order after multiple attempts, the
          product will be returned to the warehouse, and a refund will be
          processed.
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Please ensure your address & phone number are accurate</li>
          <li>Keep your phone available for delivery coordination</li>
        </ul>
      </section>

      {/* International Shipping */}
      <section className="mb-12 bg-purple-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">
          🌐 International Shipping
        </h2>
        <p className="text-lg leading-7">
          Currently, we ship only within India. International shipping is not
          available yet, but we’re working to expand globally soon!
        </p>
      </section>

      {/* Contact for Delivery Issues */}
      <section className="mb-12 bg-emerald-50 rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
          📞 Need Help with Delivery?
        </h2>
        <p className="text-lg leading-7">
          For delivery delays or tracking issues, contact our support team at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="text-indigo-600 underline"
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

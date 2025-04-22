import React from "react";
import { HelpCircle, Truck, RefreshCcw, AlertTriangle } from "lucide-react";

const CancellationReturn = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
        Cancellation & Return Policy
      </h1>

      {/* Overview */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Truck className="text-black" size={28} />
          <h2 className="text-2xl font-semibold text-black">Overview</h2>
        </div>
        <p className="text-lg text-gray-700 leading-7">
          We understand that sometimes plans change. Our Cancellation & Return
          policy is designed to be simple, transparent, and customer‑friendly.
          Read on to learn how you can cancel an order or return a product
          within the stipulated timeframe.
        </p>
      </section>

      {/* Cancellation Policy */}
      <section className="mb-16 bg-neutral-100 p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCcw className="text-black" size={26} />
          <h2 className="text-2xl font-semibold text-black">
            Cancellation Policy
          </h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            You can cancel an order any time <strong>before it ships</strong>.
          </li>
          <li>
            Go to <em>My Orders</em> and click “Cancel”. A full refund will be
            issued within 5–7 business days.
          </li>
          <li>
            If your order has already shipped, please initiate a return after
            delivery.
          </li>
        </ul>
      </section>

      {/* Return Policy */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCcw className="text-black" size={26} />
          <h2 className="text-2xl font-semibold text-black">Return Policy</h2>
        </div>
        <p className="text-lg leading-7 text-gray-700 mb-4">
          Most new, unopened items are eligible for return within{" "}
          <strong>30 days</strong> of delivery.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Items must be unused, unwashed, and in original packaging.</li>
          <li>
            Visit <em>My Orders</em> → “Return” to initiate the return process.
          </li>
          <li>
            Refunds are processed within 5 business days after inspection.
          </li>
        </ul>
      </section>

      {/* Common Reasons */}
      <section className="mb-16 bg-gray-100 p-6 rounded-2xl shadow-inner">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-black" size={26} />
          <h2 className="text-2xl font-semibold text-black">
            Common Reasons for Return
          </h2>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Wrong, damaged, or defective item delivered.</li>
          <li>Item doesn’t match the listing or expectations.</li>
          <li>Issues with size, fit, or color.</li>
          <li>Missing accessories or components.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-black" size={26} />
          <h2 className="text-2xl font-semibold text-black">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-black">
              How do I cancel my order?
            </h3>
            <p className="text-lg text-gray-700">
              Go to <em>My Orders</em>, choose your order, and click “Cancel” if
              it hasn’t shipped. You’ll receive an email and refund within a
              week.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">
              Can I return a gift item?
            </h3>
            <p className="text-lg text-gray-700">
              Yes! Use the gift receipt's order number. The refund goes to the
              original payment method.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">
              Who pays for return shipping?
            </h3>
            <p className="text-lg text-gray-700">
              If the item is defective or incorrect, return shipping is free.
              Otherwise, a small fee may be deducted from the refund.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="mb-24 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">Need Help?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our support team is available 24/7 to assist with cancellations,
          returns, and any other queries.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all"
        >
          Contact Support
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ShopKart Pvt. Ltd. All rights
        reserved.
      </footer>
    </div>
  );
};

export default CancellationReturn;

import React from "react";

const PaymentPolicy = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-black bg-[#e9edff]">
      <h1 className="text-5xl font-bold text-center mb-12 text-[#283ea8]">
        Payment Policy
      </h1>

      {/* Section Template */}
      {[
        {
          title: "💳 Overview",
          content: `We aim to provide a secure, fast, and convenient payment process. Our
            platform supports multiple modes of payment to ensure flexibility and
            convenience for our customers.`,
        },
        {
          title: "✅ Accepted Payment Methods",
          list: [
            "💳 Credit/Debit Cards (Visa, MasterCard, RuPay, Maestro)",
            "📱 UPI (Google Pay, PhonePe, Paytm, BHIM, etc.)",
            "🏦 Net Banking (All major banks supported)",
            "💵 Cash on Delivery (COD)",
            "🛒 EMI & Pay Later options (for eligible products)",
            "💼 Wallets (Paytm, Mobikwik, Amazon Pay)",
          ],
        },
        {
          title: "🔒 Secure Transactions",
          content: `All online transactions are encrypted using SSL (Secure Socket Layer)
          and processed through PCI-DSS compliant gateways. Your payment
          information is never stored on our servers.`,
        },
        {
          title: "📩 Payment Confirmation",
          content: `Once a payment is successful, you’ll receive an order confirmation via
          email and SMS. You can also check your status under the "My Orders"
          section.`,
        },
        {
          title: "⚠️ Failed or Cancelled Payments",
          content: `If a transaction fails, no amount is deducted. If the amount was
          debited, it will be refunded to your account within 5–7 business days.`,
          list: [
            "Check your bank SMS/email for credit confirmation.",
            "Still need help? Contact our support team.",
          ],
        },
        {
          title: "💰 Refund Policy",
          content: `Refunds are processed once product pickup or cancellation is complete.
          Funds will be credited to your original payment method within:`,
          list: [
            "UPI/Wallet: 2–3 working days",
            "Credit/Debit Card & Net Banking: 5–7 working days",
            "COD Refunds: Via bank transfer or wallet credit",
          ],
        },
      ].map((section, i) => (
        <section
          key={i}
          className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#283ea8] flex items-center gap-2">
            {section.title}
          </h2>
          {section.content && (
            <p className="text-lg leading-7 text-gray-800 mb-4">
              {section.content}
            </p>
          )}
          {section.list && (
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Help Section */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-[#283ea8] flex items-center gap-2">
          📞 Need Help with Payments?
        </h2>
        <p className="text-lg leading-7 text-gray-800">
          We’re here 24/7 to help. Reach out at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="underline font-medium text-[#283ea8]"
          >
            support@yourstore.com
          </a>{" "}
          or call our toll-free number:{" "}
          <span className="font-semibold">1800-000-000</span>.
        </p>
      </section>
    </div>
  );
};

export default PaymentPolicy;

import React from "react";

const PaymentPolicy = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-black bg-white">
      <h1 className="text-5xl font-bold text-center mb-12">Payment Policy</h1>

      {/* Overview */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          💳 Overview
        </h2>
        <p className="text-lg leading-7">
          We aim to provide a secure, fast, and convenient payment process. Our
          platform supports multiple modes of payment to ensure flexibility and
          convenience for our customers.
        </p>
      </section>

      {/* Accepted Methods */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          ✅ Accepted Payment Methods
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>💳 Credit/Debit Cards (Visa, MasterCard, RuPay, Maestro)</li>
          <li>📱 UPI (Google Pay, PhonePe, Paytm, BHIM, etc.)</li>
          <li>🏦 Net Banking (All major banks supported)</li>
          <li>💵 Cash on Delivery (COD)</li>
          <li>🛒 EMI & Pay Later options (for eligible products)</li>
          <li>💼 Wallets (Paytm, Mobikwik, Amazon Pay)</li>
        </ul>
      </section>

      {/* Secure Payments */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          🔒 Secure Transactions
        </h2>
        <p className="text-lg leading-7">
          All online transactions are encrypted using SSL (Secure Socket Layer)
          and processed through PCI-DSS compliant gateways. Your payment
          information is never stored on our servers.
        </p>
      </section>

      {/* Confirmation */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          📩 Payment Confirmation
        </h2>
        <p className="text-lg leading-7">
          Once a payment is successful, you’ll receive an order confirmation via
          email and SMS. You can also check your status under the{" "}
          <strong>"My Orders"</strong> section.
        </p>
      </section>

      {/* Failed Transactions */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          ⚠️ Failed or Cancelled Payments
        </h2>
        <p className="text-lg leading-7 mb-2">
          If a transaction fails, no amount is deducted. If the amount was
          debited, it will be refunded to your account within 5–7 business days.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>Check your bank SMS/email for credit confirmation.</li>
          <li>Still need help? Contact our support team.</li>
        </ul>
      </section>

      {/* Refund Policy */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          💰 Refund Policy
        </h2>
        <p className="text-lg leading-7 mb-4">
          Refunds are processed once product pickup or cancellation is complete.
          Funds will be credited to your original payment method within:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>UPI/Wallet: 2–3 working days</li>
          <li>Credit/Debit Card & Net Banking: 5–7 working days</li>
          <li>COD Refunds: Via bank transfer or wallet credit</li>
        </ul>
      </section>

      {/* Help Section */}
      <section className="mb-10 bg-white rounded-xl p-6 shadow-md border">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          📞 Need Help with Payments?
        </h2>
        <p className="text-lg leading-7">
          We’re here 24/7 to help. Reach out at{" "}
          <a
            href="mailto:support@yourstore.com"
            className="underline font-medium"
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

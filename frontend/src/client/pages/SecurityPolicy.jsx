import React from "react";

const SecurityPolicy = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800 bg-white shadow-md rounded-2xl">
      <h1 className="text-5xl font-bold mb-12 text-center text-black underline decoration-black decoration-4">
        Security Policy
      </h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Your Security Matters
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We take your online security very seriously. Our platform uses
          advanced security technologies and protocols to ensure that your data
          and transactions are safe and secure at all times.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-black">
          🔒 Secure Transactions
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          All payments are processed through encrypted and secure payment
          gateways that comply with PCI DSS standards. Your card, UPI, and
          banking credentials are never stored on our servers.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-black">
          🛡️ Data Protection
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          We protect your personal data using SSL encryption, advanced
          firewalls, and role-based access controls to prevent unauthorized
          access.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-black">
          👤 Account Security
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          For your safety, we advise using strong, unique passwords and enabling
          two-factor authentication wherever possible. Avoid sharing your login
          credentials with anyone.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-black">
          ⚠️ Fraud Monitoring
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our system continuously monitors for suspicious behavior. If we detect
          unusual activity, we may temporarily lock your account or reach out to
          verify your identity.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-black">
          📧 Contact & Support
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          If you suspect unauthorized access or encounter security concerns,
          please contact our support team immediately at:{" "}
          <span className="text-black font-medium">security@example.com</span>
        </p>
      </section>
    </div>
  );
};

export default SecurityPolicy;

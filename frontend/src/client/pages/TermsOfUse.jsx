import React from "react";
import { ShieldCheck, User, FileText, Lock, Info } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="bg-gradient-to-br from-[#e9edff] to-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-14 text-center text-[#283ea8]">
          Terms of Use
        </h1>

        {/* Section 1: Acceptance */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[#283ea8]" />
            <h2 className="text-2xl font-semibold text-[#283ea8]">
              1. Acceptance of Terms
            </h2>
          </div>
          <p className="text-lg leading-7 text-gray-700">
            By accessing or using our platform, you agree to comply with and be
            bound by these Terms of Use. If you do not agree to these terms,
            please do not use the website.
          </p>
        </section>

        {/* Section 2: Registration */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-[#283ea8]" />
            <h2 className="text-2xl font-semibold text-[#283ea8]">
              2. Account Registration
            </h2>
          </div>
          <p className="text-lg leading-7 text-gray-700">
            To use certain features, you must register and create an account.
            You're responsible for keeping your login credentials safe and for
            any activity under your account.
          </p>
        </section>

        {/* Section 3: Guidelines */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-[#283ea8]" />
            <h2 className="text-2xl font-semibold text-[#283ea8]">
              3. Usage Guidelines
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Use the platform for legal and ethical purposes only.</li>
            <li>Do not impersonate others or provide false information.</li>
            <li>Avoid spamming, hacking, or abusing services.</li>
          </ul>
        </section>

        {/* Section 4: IP */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-[#283ea8]" />
            <h2 className="text-2xl font-semibold text-[#283ea8]">
              4. Intellectual Property & Content
            </h2>
          </div>
          <p className="text-lg leading-7 text-gray-700">
            All logos, designs, text, and graphics are the intellectual property
            of our company and may not be reused or copied without permission.
          </p>
        </section>

        {/* Section 5: Changes */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Info className="text-[#283ea8]" />
            <h2 className="text-2xl font-semibold text-[#283ea8]">
              5. Changes to Terms
            </h2>
          </div>
          <p className="text-lg leading-7 text-gray-700">
            We may update these Terms of Use at any time. Continued use of our
            platform implies your acceptance of the modified terms.
          </p>
        </section>

        {/* Section 6: Contact */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-16 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#283ea8] mb-4">
            6. Contact Us
          </h2>
          <p className="text-lg leading-7 text-gray-700">
            For any questions about our Terms of Use, please reach out through
            our{" "}
            <a
              href="/contact"
              className="underline font-medium text-[#283ea8] hover:text-blue-800"
            >
              Contact Page
            </a>
            .
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShopKart Pvt. Ltd. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsOfUse;

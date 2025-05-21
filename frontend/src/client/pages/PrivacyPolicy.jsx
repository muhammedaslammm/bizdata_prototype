// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-10 px-6">
//       <div className="max-w-6xl mx-auto text-black">
//         <h1 className="text-4xl font-bold mb-10 text-center">Privacy Policy</h1>

//         <p className="mb-8 text-lg leading-7">
//           Your privacy is important to us. This privacy policy explains how we
//           collect, use, and protect your personal information when you visit our
//           website or use our services.
//         </p>

//         <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
//           <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
//           <ul className="list-disc space-y-2 pl-6 text-lg">
//             <li>Personal identification details (name, email, phone number, etc.)</li>
//             <li>Transaction and order-related data</li>
//             <li>Device and browser information</li>
//             <li>Website interaction and usage patterns</li>
//           </ul>
//         </section>

//         <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
//           <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
//           <p className="text-lg leading-7">
//             We use your data to improve your experience, process orders, provide
//             customer support, personalize content, and send offers or updates.
//           </p>
//         </section>

//         <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
//           <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
//           <p className="text-lg leading-7">
//             We use industry-standard security protocols and technologies to
//             safeguard your data. Access is restricted and monitored to ensure your
//             information remains safe.
//           </p>
//         </section>

//         <section className="bg-white shadow-md rounded-2xl p-6 mb-10">
//           <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
//           <p className="text-lg leading-7">
//             You can request access to your personal data, update or delete it, or
//             restrict certain uses. For questions, feel free to contact our support
//             team.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-[#e9edff] to-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h1 className="text-5xl font-bold mb-14 text-center text-[#283ea8]">
          Privacy Policy
        </h1>

        <p className="mb-10 text-lg leading-7 text-gray-700 text-center max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect,
          use, and safeguard your information when you use our website or
          services.
        </p>

        {/* Section: Information We Collect */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#283ea8] mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
            <li>Personal identification (name, email, phone number)</li>
            <li>Order and transaction details</li>
            <li>Device and browser data</li>
            <li>Interaction and usage behavior on our platform</li>
          </ul>
        </section>

        {/* Section: How We Use Your Information */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#283ea8] mb-4">
            How We Use Your Information
          </h2>
          <p className="text-lg leading-7 text-gray-700">
            We use your data to enhance your shopping experience, fulfill
            orders, provide customer support, personalize recommendations, and
            share promotional offers or updates.
          </p>
        </section>

        {/* Section: Data Protection */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#283ea8] mb-4">
            Data Protection
          </h2>
          <p className="text-lg leading-7 text-gray-700">
            We implement industry-standard security protocols to protect your
            information. Access to personal data is strictly controlled and
            monitored.
          </p>
        </section>

        {/* Section: Your Rights */}
        <section className="bg-white shadow-md rounded-2xl p-6 mb-16 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#283ea8] mb-4">
            Your Rights
          </h2>
          <p className="text-lg leading-7 text-gray-700">
            You may request access, correction, deletion, or restriction of your
            personal data. For any concerns, please reach out via our{" "}
            <a
              href="/contact"
              className="text-[#283ea8] underline hover:text-blue-800 font-medium"
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

export default PrivacyPolicy;

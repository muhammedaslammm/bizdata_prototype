import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-[90%] max-w-5xl mx-auto py-12 text-slate-800">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-[#283ea8]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border-t-4 border-[#283ea8]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#283ea8]">
            Send a Message
          </h2>
          {submitted && (
            <p className="text-green-600 font-medium">
              Thank you! We'll get back to you soon.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#283ea8]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#283ea8]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#283ea8]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#283ea8] text-white py-3 rounded-xl hover:bg-[#1f2f85] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          className="bg-[#e9edff] rounded-2xl p-8 shadow-lg space-y-6 border-t-4 border-[#283ea8]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#283ea8]">
            Contact Information
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              📧 <strong>Email:</strong> support@example.com
            </p>
            <p>
              📞 <strong>Phone:</strong> +971 50 123 4567
            </p>
            <p>
              📍 <strong>Location:</strong> Dubai, United Arab Emirates
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

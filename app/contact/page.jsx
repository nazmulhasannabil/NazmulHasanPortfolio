"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-teal-400 text-center">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-white">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-400 text-gray-900 font-semibold py-2 rounded-md hover:bg-teal-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

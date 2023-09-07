import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(31,74,35,0.68)] via-[rgba(31,74,35,0.54)] to-[rgba(31,74,35,0.45)] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Contact Me
        </h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me using the form below.
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#F4F4F4]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#F4F4F4]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-[#F4F4F4]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#F4F4F4]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-[#FFD700] text-[#1F4A23] rounded-md font-semibold hover:bg-[#333333] hover:text-white focus:outline-none focus:ring focus:ring-[#FFD700]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

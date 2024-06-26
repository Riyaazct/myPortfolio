import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  // Define your service, template, and user IDs using environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Initialize the form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Function to reset the form data
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the emailjs library to send the form data
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="h-screen bg-gradient-to-r from-[#1f4a23e8] via-[#1f4a2386] to-[#1f4a23ce] text-white py-12 px-4 sm:px-6 lg:px-8 relative flex items-center"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Contact Me
        </h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me using the form below.
        </p>
        <form ref={form} className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#F4F4F4]"
            >
              Your Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm text-black"
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
              required
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm text-black"
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
              required
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm text-black"
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
              required
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#FFD700] focus:border-[#FFD700] sm:text-sm text-black"
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
    </section>
  );
};

export default ContactForm;

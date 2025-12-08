import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 py-20 px-6 mt-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#76b900] border-b border-[#76b900]/30 inline-block pb-2 mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-400 text-lg">
              Have questions, feedback, or partnership ideas? We'd love to hear from you!
              Reach out to us through the form or our contact details below.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <Mail className="text-[#76b900]" />
                <span>support@nextrig.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#76b900]" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#76b900]" />
                <span>Kasaragod, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-md p-3 text-gray-100 placeholder-gray-400 focus:border-[#76b900] focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-md p-3 text-gray-100 placeholder-gray-400 focus:border-[#76b900] focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border border-white/20 rounded-md p-3 text-gray-100 placeholder-gray-400 focus:border-[#76b900] focus:outline-none resize-none"
                placeholder="Type your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#76b900] text-black font-semibold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_#76b900] hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
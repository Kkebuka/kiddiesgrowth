import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello KiddiesGrowth!

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Please get back to me. Thank you!`;

    const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppDirect = () => {
    const message = "Hello! I'd like to know more about KiddiesGrowth toys.";
    const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about our toys or need help choosing the perfect gift?
          We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Floating Label Input */}
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.id} className="relative">
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  {field.label}
                </label>
              </div>
            ))}

            {/* Floating Label Textarea */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                rows={5}
                className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 placeholder-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <label
                htmlFor="message"
                className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Info Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>

            {[
              {
                icon: <FaWhatsapp className="w-5 h-5 text-green-500" />,
                title: "WhatsApp",
                value: "+234 800 000 0000",
              },
              {
                icon: <FaEnvelope className="w-5 h-5 text-blue-500" />,
                title: "Email",
                value: "hello@kiddiesgrowth.com",
              },
              {
                icon: <FaPhone className="w-5 h-5 text-orange-500" />,
                title: "Phone",
                value: "+234 800 000 0000",
              },
              {
                icon: <FaMapMarkerAlt className="w-5 h-5 text-red-500" />,
                title: "Location",
                value: "Lagos, Nigeria",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {item.icon}
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick WhatsApp Chat */}
          <div className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Quick Chat on WhatsApp
            </h3>
            <p className="text-green-700 mb-4">
              Need immediate assistance? Chat with us directly on WhatsApp for
              quick responses to your questions.
            </p>
            <button
              onClick={handleWhatsAppDirect}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
            >
              <FaWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Business Hours */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Business Hours
            </h3>
            <div className="space-y-2 text-blue-700">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

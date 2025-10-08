"use client";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";
import { MdDeliveryDining, MdPayment } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-amber-800 via-red-800 to-amber-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience the magic of Damosa? We'd love to hear from you!
            Reach out for orders, questions, or just to say hello.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 h-fit">
              {" "}
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-orange-500" />
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all placeholder-gray-500 text-gray-800"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all placeholder-gray-500 text-gray-800"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all placeholder-gray-500 text-gray-800"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-gray-500" />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none placeholder-gray-500 text-gray-800"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Quick Contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                    <FaWhatsapp className="text-2xl text-green-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        WhatsApp Orders
                      </h4>
                      <p className="text-gray-600">+92 XXX XXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <FaPhone className="text-2xl text-blue-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Call Us</h4>
                      <p className="text-gray-600">+92 XXX XXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <FaEnvelope className="text-2xl text-orange-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">hello@damosa.pk</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer">
                    <FaInstagram className="text-2xl text-pink-500" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Follow Us</h4>
                      <p className="text-gray-600">@damosapakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Business Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FaClock className="text-2xl text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Operating Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Sunday: 11:00 AM - 11:00 PM
                      </p>
                      <p className="text-sm text-gray-500">
                        Orders accepted during these hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-2xl text-red-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Service Area
                      </h4>
                      <p className="text-gray-600">
                        Peshawar & Surrounding Areas
                      </p>
                      <p className="text-sm text-gray-500">
                        Delivery available in selected zones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MdDeliveryDining className="text-2xl text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Delivery Time
                      </h4>
                      <p className="text-gray-600">30-45 minutes</p>
                      <p className="text-sm text-gray-500">
                        Fresh and hot, delivered to your door
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MdPayment className="text-2xl text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Payment Methods
                      </h4>
                      <p className="text-gray-600">
                        Cash on Delivery, Bank Transfer
                      </p>
                      <p className="text-sm text-gray-500">
                        More payment options coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Order? Let's Make It Happen!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From "Aloo'd Up" to "Pookie Damosa" - your perfect meal is just a
            message away. We're here to serve you the best!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
            >
              Browse Our Menu
            </a>
            <a
              href="https://wa.me/92XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <FaWhatsapp />
                <span>Order Now via WhatsApp</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

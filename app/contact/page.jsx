"use client";
import { useState } from "react";
import Link from "next/link";
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
  FaStar,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import { GiHotMeal, GiSparkles, GiCook } from "react-icons/gi";
import {
  MdDeliveryDining,
  MdPayment,
  MdRestaurant,
  MdLocalDining,
} from "react-icons/md";

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

    // Show success message or redirect
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl text-amber-400 animate-pulse">
          <GiHotMeal />
        </div>
        <div className="absolute top-60 right-20 text-7xl text-orange-400 animate-bounce">
          <GiCook />
        </div>
        <div className="absolute bottom-40 left-1/4 text-8xl text-yellow-400 animate-pulse">
          <GiSparkles />
        </div>
        <div className="absolute bottom-20 right-1/3 text-6xl text-amber-300 animate-bounce">
          <FaHeart />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 text-center relative z-10">
        <div className="container mx-auto px-4">
          {/* Brand Logo Area */}
          <div className="flex justify-center items-center mb-8">
            <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-6 rounded-2xl shadow-2xl">
              <GiHotMeal className="text-6xl text-white" />
            </div>
          </div>

          <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text mb-6 tracking-wider">
            GET IN TOUCH
          </h1>
          <h2 className="text-3xl font-semibold text-amber-200 mb-8 tracking-wide">
            CONNECT WITH THE DAMOSA FAMILY
          </h2>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Ready to experience the magic of Damosa? We'd love to hear from you!
            Reach out for orders, questions, collaborations, or just to share
            your love for our creations.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-amber-200/50 hover:shadow-amber-500/20 transition-all duration-500 h-fit">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPaperPlane className="text-2xl text-white" />
                </div>
                <h2 className="text-4xl font-bold text-amber-900 mb-3">
                  Send us a Message
                </h2>
                <p className="text-amber-700">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <FaUser className="absolute left-4 top-4 text-amber-600 group-focus-within:text-orange-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all placeholder-amber-500 text-amber-900 bg-white/80 backdrop-blur"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-4 text-amber-600 group-focus-within:text-orange-600 transition-colors" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all placeholder-amber-500 text-amber-900 bg-white/80 backdrop-blur"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="relative group">
                  <FaPhone className="absolute left-4 top-4 text-amber-600 group-focus-within:text-orange-600 transition-colors" />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all placeholder-amber-500 text-amber-900 bg-white/80 backdrop-blur"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="relative group">
                  <FaComment className="absolute left-4 top-4 text-amber-600 group-focus-within:text-orange-600 transition-colors" />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200/50 transition-all resize-none placeholder-amber-500 text-amber-900 bg-white/80 backdrop-blur"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-600/40 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Send Message
                  <FaArrowRight />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-amber-200/50">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FaWhatsapp className="text-2xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900 mb-2">
                    Quick Contact
                  </h3>
                  <p className="text-amber-700">Fastest way to reach us</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/923001234567"
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl hover:from-green-200 hover:to-green-100 transition-all duration-300 cursor-pointer group border-2 border-green-200 hover:border-green-300"
                  >
                    <div className="bg-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 text-lg">
                        WhatsApp Orders
                      </h4>
                      <p className="text-green-600">+92 300 1234567</p>
                      <p className="text-sm text-green-500">Available 24/7</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl border-2 border-blue-200 group">
                    <div className="bg-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <FaPhone className="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 text-lg">
                        Call Us
                      </h4>
                      <p className="text-blue-600">+92 300 1234567</p>
                      <p className="text-sm text-blue-500">
                        Business hours only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl border-2 border-orange-200 group">
                    <div className="bg-orange-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-800 text-lg">
                        Email Us
                      </h4>
                      <p className="text-orange-600">info@damosa.pk</p>
                      <p className="text-sm text-orange-500">
                        24-48 hours response
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://instagram.com/damosapakistan"
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl hover:from-pink-200 hover:to-pink-100 transition-all duration-300 cursor-pointer group border-2 border-pink-200 hover:border-pink-300"
                  >
                    <div className="bg-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <FaInstagram className="text-2xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-pink-800 text-lg">
                        Follow Us
                      </h4>
                      <p className="text-pink-600">@damosapakistan</p>
                      <p className="text-sm text-pink-500">
                        Daily updates & offers
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Info */}
              <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-amber-200/50">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MdRestaurant className="text-2xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900 mb-2">
                    Business Information
                  </h3>
                  <p className="text-amber-700">Everything you need to know</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <FaClock className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg">
                        Operating Hours
                      </h4>
                      <p className="text-amber-700 font-medium">
                        Monday - Sunday: 10:00 AM - 11:00 PM
                      </p>
                      <p className="text-sm text-amber-600">
                        Orders accepted during these hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl">
                    <div className="bg-red-500 p-3 rounded-xl">
                      <FaMapMarkerAlt className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg">
                        Service Area
                      </h4>
                      <p className="text-amber-700 font-medium">
                        Peshawar & Surrounding Areas
                      </p>
                      <p className="text-sm text-amber-600">
                        Delivery available in selected zones
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl">
                    <div className="bg-blue-500 p-3 rounded-xl">
                      <MdDeliveryDining className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg">
                        Delivery Time
                      </h4>
                      <p className="text-amber-700 font-medium">
                        30-45 minutes
                      </p>
                      <p className="text-sm text-amber-600">
                        Fresh and hot, delivered to your door
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl">
                    <div className="bg-green-500 p-3 rounded-xl">
                      <MdPayment className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg">
                        Payment Methods
                      </h4>
                      <p className="text-amber-700 font-medium">
                        Cash on Delivery, Bank Transfer
                      </p>
                      <p className="text-sm text-amber-600">
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

      {/* Special Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <FaStar className="text-5xl text-amber-400" />
              <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                WHY CHOOSE DAMOSA?
              </h2>
              <FaStar className="text-5xl text-amber-400" />
            </div>
            <p className="text-amber-200 text-xl">
              What makes us the preferred choice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <GiSparkles />,
                title: "Premium Quality",
                description:
                  "Fresh ingredients, authentic flavors, and uncompromising standards in every bite.",
              },
              {
                icon: <FaHeart />,
                title: "Made with Love",
                description:
                  "Every Damosa is crafted with passion and attention to detail by our skilled team.",
              },
              {
                icon: <MdDeliveryDining />,
                title: "Fast Delivery",
                description:
                  "Quick and reliable delivery service to bring hot, fresh food right to your door.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-amber-200/50 hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105 text-center"
              >
                <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-600/90 to-red-600/90 backdrop-blur-lg rounded-3xl p-16 text-center shadow-2xl border border-orange-400/30">
            <GiHotMeal className="text-8xl text-white mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-white mb-6">
              READY TO ORDER? LET'S MAKE IT HAPPEN!
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              From "Aloo'd Up" to "Pookie Damosa" - your perfect meal is just a
              message away. We're here to serve you the best authentic flavors
              with a modern twist!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu"
                className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
              >
                <MdLocalDining />
                Browse Our Menu
                <FaArrowRight />
              </Link>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                Order Now via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-900/80 to-transparent pointer-events-none"></div>
    </div>
  );
}

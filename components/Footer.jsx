"use client";
import Link from "next/link";
import Image from "next/image";
import { GiHotMeal, GiSparkles, GiCook } from "react-icons/gi";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocalDining } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 text-6xl text-amber-400 animate-pulse">
          <GiHotMeal />
        </div>
        <div className="absolute bottom-10 right-20 text-5xl text-orange-400 animate-bounce">
          <GiSparkles />
        </div>
        <div className="absolute top-20 right-40 text-4xl text-yellow-400 animate-pulse">
          <GiCook />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-4 rounded-2xl shadow-xl">
                <Image
                  src="/damosa-logo.png"
                  alt="Damosa Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                DAMOSA
              </h2>
            </div>
            <p className="text-amber-100 text-lg leading-relaxed mb-8 max-w-md">
              Authentic flavors made fresh daily with love and traditional
              recipes. Where every bite tells a story of quality and passion.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "#",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaInstagram />,
                  href: "#",
                  color: "hover:text-pink-400",
                },
                {
                  icon: <FaTwitter />,
                  href: "#",
                  color: "hover:text-blue-300",
                },
                {
                  icon: <FaWhatsapp />,
                  href: "https://wa.me/923001234567",
                  color: "hover:text-green-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-white/10 backdrop-blur p-3 rounded-full text-xl transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-2">
              <MdLocalDining className="text-3xl" />
              Quick Links
            </h3>
            <div className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-amber-200 hover:text-amber-400 transition-colors duration-300 text-lg hover:translate-x-2 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-2">
              <FaPhoneAlt className="text-2xl" />
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/30 p-2 rounded-lg">
                  <FaPhoneAlt className="text-xl text-orange-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Call Us</p>
                  <a
                    href="tel:+923001234567"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600/30 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-xl text-orange-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Visit Us</p>
                  <p className="text-white">
                    Main Market, Lahore
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600/30 p-2 rounded-lg">
                  <FaClock className="text-xl text-orange-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Hours</p>
                  <p className="text-white">Daily: 10 AM - 11 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600/30 p-2 rounded-lg">
                  <MdEmail className="text-xl text-orange-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Email</p>
                  <a
                    href="mailto:info@damosa.com"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    info@damosa.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-600/30 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-2 rounded-xl">
              <GiHotMeal className="text-2xl text-white" />
            </div>
            <p className="text-amber-200">
              © 2024 Damosa. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-amber-300">
            <Link
              href="/privacy"
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Special Message */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-2xl border border-orange-400/30">
          <div className="flex justify-center items-center gap-3 mb-3">
            <GiSparkles className="text-3xl text-amber-400" />
            <p className="text-xl font-bold text-amber-300">
              Made with Love in Pakistan
            </p>
            <GiSparkles className="text-3xl text-amber-400" />
          </div>
          <p className="text-amber-200">
            Crafting authentic flavors and creating memorable experiences, one
            bite at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}

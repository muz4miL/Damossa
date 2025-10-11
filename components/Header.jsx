"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "./CartSidebar";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { GiHotMeal, GiSparkles } from "react-icons/gi";
import { MdLocalDining, MdRestaurant } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const { getCartCount, setShowCart } = useCart();

  const navLinks = [
    { name: "Home", href: "/", icon: <GiHotMeal /> },
    { name: "Menu", href: "/menu", icon: <MdLocalDining /> },
    { name: "About", href: "/about", icon: <GiSparkles /> },
    { name: "Contact", href: "/contact", icon: <MdRestaurant /> },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-orange-400/30">
        {/* Top highlight bar */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <Link
              href="/"
              className="group flex items-center space-x-4 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                {/* Larger logo without background */}
                <div className="p-1 group-hover:scale-110 transition-all duration-300">
                  <Image
                    src="/damosa-logo (2).png"
                    alt="Damosa Logo"
                    width={80}
                    height={80}
                    className="drop-shadow-2xl group-hover:drop-shadow-orange-500/50 transition-all duration-300 object-contain group-hover:scale-110"
                    style={{
                      filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                      background: "transparent",
                    }}
                  />
                </div>
              </div>

              <div className="relative">
                <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text tracking-wider group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                  DAMOSA
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <p className="text-amber-200 text-sm tracking-widest mt-1 opacity-80">
                  AUTHENTIC FLAVORS
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur relative overflow-hidden ${
                    currentPath === link.href
                      ? "text-white bg-gradient-to-r from-amber-600/30 to-orange-600/30 shadow-xl border border-amber-400/50"
                      : "text-amber-200 hover:text-white"
                  }`}
                >
                  {/* Background glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r rounded-xl transition-all duration-300 ${
                      currentPath === link.href
                        ? "from-amber-500/40 via-orange-500/40 to-amber-500/40"
                        : "from-orange-500/0 via-amber-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-amber-500/20 group-hover:to-orange-500/20"
                    }`}
                  ></div>

                  <span
                    className={`text-xl transition-transform duration-300 relative z-10 ${
                      currentPath === link.href
                        ? "text-amber-300 scale-110"
                        : "group-hover:scale-110"
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                    {link.name}
                  </span>

                  {/* Underline effect */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-300 ${
                      currentPath === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></div>
                </Link>
              ))}
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setShowCart(true)}
                className="relative group bg-gradient-to-br from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white p-4 rounded-2xl shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <FaShoppingCart className="text-xl group-hover:animate-bounce" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center animate-pulse shadow-lg">
                    {getCartCount()}
                  </span>
                )}

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden group bg-gradient-to-br from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white p-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                {isMenuOpen ? (
                  <FaTimes className="text-xl group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <FaBars className="text-xl group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-orange-800/90 to-amber-800/90 backdrop-blur-lg rounded-2xl p-6 mt-4 border border-orange-400/30 shadow-2xl">
              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-3 rounded-xl text-amber-200 hover:text-white font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur"
                  >
                    <span className="text-2xl group-hover:scale-125 group-hover:text-amber-400 transition-all duration-300">
                      {link.icon}
                    </span>
                    <span className="text-lg group-hover:tracking-wider transition-all duration-300">
                      {link.name}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <GiSparkles className="text-amber-400" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-orange-400/30">
                <a
                  href="tel:+923001234567"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-xl">📞</span>
                  Order Now: +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </header>

      <CartSidebar />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import {
  GiHotMeal,
  GiSparkles,
  GiIceCreamCone,
  GiChiliPepper,
  GiCook,
  GiForkKnifeSpoon,
} from "react-icons/gi";
import {
  FaPlus,
  FaFire,
  FaStar,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  MdRestaurant,
  MdIcecream,
  MdLocalDining,
  MdDeliveryDining,
} from "react-icons/md";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { addToCart } = useCart();

  // Featured items (sample data)
  const featuredItems = [
    {
      id: 1,
      name: "Aloo'd Up",
      description: "Chicken & Potato Damosa",
      price: "Rs. 60/-",
      image: "/samosa1.jpg",
      category: "samosas",
    },
    {
      id: 2,
      name: "Sweet Day",
      description: "Mango Ice Cream",
      price: "Rs. 150/-",
      cupPrice: "Rs. 150/-",
      category: "ice-creams",
    },
    {
      id: 3,
      name: "Emotional Cheese",
      description: "Chicken & Cheese Damosa",
      price: "Rs. 120/-",
      image: "/samosa2.jpg",
      category: "samosas",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      rating: 5,
      text: "The Damosa originals are absolutely incredible! Never tasted anything like it.",
      location: "Karachi",
    },
    {
      name: "Ali Hassan",
      rating: 5,
      text: "Best ice cream in the city! The flavors are so unique and delicious.",
      location: "Lahore",
    },
    {
      name: "Fatima Khan",
      rating: 5,
      text: "Amazing quality and taste. Damosa has become our family favorite!",
      location: "Islamabad",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl text-amber-400 animate-pulse">
          <GiHotMeal />
        </div>
        <div className="absolute top-60 right-20 text-7xl text-orange-400 animate-bounce">
          <MdIcecream />
        </div>
        <div className="absolute bottom-40 left-1/4 text-8xl text-yellow-400 animate-pulse">
          <GiSparkles />
        </div>
        <div className="absolute bottom-20 right-1/3 text-6xl text-amber-300 animate-bounce">
          <FaFire />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center relative z-10">
        <div className="container mx-auto px-4">
          {/* Brand Logo */}
          <div className="flex justify-center items-center mb-12">
            <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <GiHotMeal className="text-8xl text-white" />
            </div>
          </div>

          <h1 className="text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text mb-6 tracking-wider">
            DAMOSA
          </h1>
          <h2 className="text-2xl lg:text-4xl font-semibold text-amber-200 mb-8 tracking-wide">
            AUTHENTIC FLAVORS & FROZEN DELIGHTS
          </h2>
          <p className="text-xl lg:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Where tradition meets innovation in every bite. Experience
            extraordinary taste with our signature creations and premium ice
            creams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/menu"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/40 flex items-center gap-3"
            >
              <MdLocalDining className="text-2xl" />
              Explore Menu
              <FaArrowRight />
            </Link>
            <a
              href="tel:+923001234567"
              className="bg-white/10 backdrop-blur border-2 border-amber-300 text-amber-200 hover:bg-white/20 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <FaPhoneAlt />
              Order Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <GiHotMeal />, number: "50+", label: "Unique Flavors" },
              {
                icon: <MdIcecream />,
                number: "1000+",
                label: "Happy Customers",
              },
              { icon: <FaStar />, number: "4.9", label: "Rating" },
              {
                icon: <MdDeliveryDining />,
                number: "30min",
                label: "Delivery",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-amber-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-amber-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <GiForkKnifeSpoon className="text-5xl text-amber-400" />
              <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                SIGNATURE COLLECTION
              </h2>
              <GiForkKnifeSpoon className="text-5xl text-amber-400" />
            </div>
            <p className="text-amber-200 text-xl">
              Our most loved creations that define the Damosa experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/30 transition-all duration-500 group hover:scale-105 border border-amber-200/50"
              >
                {item.image && (
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500 p-4"
                    />
                  </div>
                )}
                {!item.image && (
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <MdIcecream className="text-8xl text-blue-600" />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3 group-hover:text-orange-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600 flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      {item.price}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <FaPlus />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              View Full Menu
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GiCook className="text-6xl text-amber-400" />
                <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                  OUR STORY
                </h2>
              </div>
              <p className="text-amber-100 text-lg leading-relaxed mb-8">
                Born from a passion for authentic flavors and innovative
                creations, Damosa represents the perfect fusion of traditional
                recipes with modern culinary artistry. Every item on our menu
                tells a story of quality, creativity, and unwavering commitment
                to excellence.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Fresh ingredients sourced daily",
                  "Handcrafted with traditional techniques",
                  "Innovative flavor combinations",
                  "Premium quality guaranteed",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaStar className="text-amber-400" />
                    <span className="text-amber-200">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-50/10 to-orange-50/10 backdrop-blur-lg rounded-3xl p-8 border border-amber-200/30">
              <div className="text-center">
                <GiSparkles className="text-8xl text-amber-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-amber-300 mb-4">
                  Quality Promise
                </h3>
                <p className="text-amber-200 leading-relaxed">
                  We believe in serving only the finest. Every Damosa creation
                  undergoes rigorous quality checks to ensure you get nothing
                  but perfection in every bite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text mb-4">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <p className="text-amber-200 text-xl">
              Real experiences from real customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-amber-200/50">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <FaStar
                        key={i}
                        className="text-3xl text-yellow-500 mx-1"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-2xl text-amber-900 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-amber-700">
                  <div className="font-bold text-xl">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <FaMapMarkerAlt />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-amber-400 scale-125"
                      : "bg-amber-600/50 hover:bg-amber-500/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-600/90 to-red-600/90 backdrop-blur-lg rounded-3xl p-16 text-center shadow-2xl border border-orange-400/30">
            <GiHotMeal className="text-8xl text-white mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-white mb-6">
              READY TO EXPERIENCE DAMOSA?
            </h2>
            <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Damosa their
              favorite destination for authentic flavors and premium delights.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Call Us",
                  info: "+92 300 1234567",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit Us",
                  info: "Main Market, Lahore",
                },
                { icon: <FaClock />, title: "Hours", info: "10 AM - 11 PM" },
              ].map((contact, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-orange-200 mb-4 flex justify-center">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-orange-100">{contact.info}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu"
                className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <MdLocalDining />
                Order Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-900/80 to-transparent pointer-events-none"></div>
    </div>
  );
}

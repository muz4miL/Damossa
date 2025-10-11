"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaLightbulb,
  FaCrown,
  FaPalette,
  FaStar,
  FaFire,
  FaUtensils,
  FaHeart,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  GiHotMeal,
  GiSparkles,
  GiCook,
  GiChefToque,
  GiChiliPepper,
} from "react-icons/gi";
import {
  MdRestaurant,
  MdLightbulbOutline,
  MdLocalDining,
} from "react-icons/md";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: <FaHome />,
      title: "Hospitality",
      description:
        "Representing KP's legendary spirit of hospitality in every interaction, every service, and every delicious bite we serve.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Constantly experimenting and pushing boundaries to create unique flavors, experiences, and memorable moments that surprise and delight.",
    },
    {
      icon: <FaCrown />,
      title: "Authentic Taste",
      description:
        "Never compromising on flavor – every Damosa is a celebration of authentic Pakistani taste with a creative modern twist.",
    },
  ];

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
          <FaFire />
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
            OUR STORY
          </h1>
          <h2 className="text-3xl font-semibold text-amber-200 mb-8 tracking-wide">
            THE JOURNEY BEHIND DAMOSA
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-amber-200/50 mb-8">
              <blockquote className="text-2xl text-amber-900 mb-6 italic leading-relaxed font-medium">
                "The story behind Damosa is not just about food – it's about
                vision, resilience, and countless sleepless nights."
              </blockquote>
              <p className="text-lg text-amber-800 leading-relaxed">
                From day one, our dream was to build a brand that represents
                KP's spirit of hospitality, innovation, and taste. A brand that
                doesn't just serve food, but creates an experience, connects
                people, and celebrates our culture in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <GiChefToque className="text-5xl text-amber-400" />
              <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                MEET OUR FOUNDERS
              </h2>
              <GiChefToque className="text-5xl text-amber-400" />
            </div>
            <p className="text-amber-200 text-xl">
              The visionaries behind the Damosa experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Manayal Ahmed */}
            <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/30 transition-all duration-500 group hover:scale-105 border border-amber-200/50">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <Image
                  src="/founder-manayal.jpg"
                  alt="Manayal Ahmed - Co-Founder"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Co-Founder
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-3 group-hover:text-orange-700 transition-colors">
                  Manayal Ahmed
                </h3>
                <p className="text-orange-600 font-bold mb-6 text-lg flex items-center gap-3">
                  <FaPalette className="text-2xl" />
                  Creative Visionary & Co-Founder
                </p>
                <p className="text-amber-800 leading-relaxed text-lg">
                  The creative powerhouse behind Damosa's unique flavors and
                  innovative approach. Manayal brings passion for culinary arts
                  and a vision to revolutionize traditional Pakistani snacks
                  with modern, creative twists that tell a story in every bite.
                </p>
              </div>
            </div>

            {/* Ammar Ahmed Qureshi */}
            <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/30 transition-all duration-500 group hover:scale-105 border border-amber-200/50">
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <Image
                  src="/founder-ammar.jpg"
                  alt="Ammar Ahmed Qureshi - Founder"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Founder
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-3 group-hover:text-orange-700 transition-colors">
                  Ammar Ahmed Qureshi
                </h3>
                <p className="text-orange-600 font-bold mb-6 text-lg flex items-center gap-3">
                  <MdLightbulbOutline className="text-2xl" />
                  Business Strategist & Founder
                </p>
                <p className="text-amber-800 leading-relaxed text-lg">
                  The strategic mastermind behind Damosa's growth and business
                  development. Ammar combines entrepreneurial spirit with deep
                  market understanding to build a sustainable food brand that
                  honors tradition while embracing innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Interactive */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <GiSparkles className="text-5xl text-amber-400" />
              <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                OUR MISSION & VALUES
              </h2>
              <GiSparkles className="text-5xl text-amber-400" />
            </div>
            <p className="text-amber-200 text-xl">
              The principles that guide everything we do
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive Value Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveValue(index)}
                  className={`bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-amber-200/50 cursor-pointer transition-all duration-500 hover:scale-105 ${
                    activeValue === index
                      ? "ring-4 ring-amber-400/50 shadow-amber-500/30"
                      : ""
                  }`}
                >
                  <div className="text-6xl mb-6 text-amber-600 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">
                    {value.title}
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-orange-600/90 to-red-600/90 backdrop-blur-lg rounded-3xl p-12 text-center shadow-2xl border border-orange-400/30">
              <GiHotMeal className="text-8xl text-white mx-auto mb-8" />
              <blockquote className="text-2xl italic text-orange-100 mb-6 leading-relaxed">
                "From brainstorming sessions to sleepless nights, every
                challenge has brought us closer to our vision of creating
                something more than just another food brand."
              </blockquote>
              <cite className="text-orange-200 font-bold text-xl flex items-center justify-center gap-3">
                <FaHeart className="text-red-300 text-2xl" />
                - The Damosa Founders
                <FaHeart className="text-red-300 text-2xl" />
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <FaStar className="text-5xl text-amber-400" />
              <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                OUR JOURNEY
              </h2>
              <FaStar className="text-5xl text-amber-400" />
            </div>
            <p className="text-amber-200 text-xl">
              From vision to reality - the Damosa story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: <FaLightbulb />,
                  title: "The Vision Takes Shape",
                  description:
                    "Two siblings with a shared dream to revolutionize Pakistani street food. Countless brainstorming sessions, sleepless nights, and an unwavering commitment to creating something extraordinary.",
                },
                {
                  step: 2,
                  icon: <FaStar />,
                  title: "First Major Milestone",
                  description:
                    "Our successful second stall at Peshawar Services Club marked an emotional turning point. The overwhelming love, appreciation, and community support validated our concept and reminded us why we started this journey.",
                },
                {
                  step: 3,
                  icon: <FaFire />,
                  title: "Building Something Bigger",
                  description:
                    "Today, we continue expanding our unique menu and reach while staying true to our core values. Every creative name, every unique flavor, every satisfied customer brings us closer to our vision of celebrating Pakistani culture through food.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-8 group">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform shadow-2xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-amber-200/50 group-hover:shadow-amber-500/30 transition-all duration-500">
                    <h3 className="text-3xl font-bold text-amber-900 mb-4 flex items-center gap-3">
                      <span className="text-amber-600 text-2xl">
                        {item.icon}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-amber-800 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Damosa Difference */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-6">
              <GiChiliPepper className="text-5xl text-amber-400" />
              <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text">
                WHAT MAKES US SPECIAL
              </h2>
              <GiChiliPepper className="text-5xl text-amber-400" />
            </div>
            <p className="text-amber-200 text-xl">
              The secret ingredients that set us apart
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-amber-200/50 hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <FaPalette className="text-6xl text-amber-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">
                    Creative Names with Meaning
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    "Aloo'd Up", "Emotional Cheese", "Pookie Damosa" - each name
                    tells a story and creates a connection before the first
                    bite.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-amber-200/50 hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <FaStar className="text-6xl text-amber-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">
                    Quality Without Compromise
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    Fresh ingredients, traditional techniques, and innovative
                    flavors come together in perfect harmony.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/90 to-red-600/90 backdrop-blur-lg rounded-3xl p-12 text-center shadow-2xl border border-orange-400/30">
              <MdRestaurant className="text-8xl text-white mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Promise
              </h3>
              <p className="text-xl text-orange-100 leading-relaxed">
                We don't just make food – we create experiences, build
                connections, and celebrate culture one Damosa at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-600/90 to-orange-700/90 backdrop-blur-lg rounded-3xl p-16 text-center shadow-2xl border border-amber-400/30">
            <GiSparkles className="text-8xl text-white mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-white mb-6">
              READY TO EXPERIENCE DAMOSA?
            </h2>
            <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every Damosa we serve is a step forward in our mission. Be part of
              our story and taste the passion, innovation, and love in every
              bite.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/menu"
                className="bg-white text-amber-600 hover:bg-amber-50 px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
              >
                <FaUtensils />
                Explore Our Menu
                <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaHeart />
                Get in Touch
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

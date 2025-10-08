import Image from "next/image";
import {
  FaHome,
  FaLightbulb,
  FaCrown,
  FaPalette,
  FaStar,
  FaFire,
  FaUtensils,
  FaHeart,
} from "react-icons/fa";
import { GiMeal, GiSparkles } from "react-icons/gi";
import { MdRestaurant, MdLightbulbOutline } from "react-icons/md";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              The Story Behind{" "}
              <span className="bg-gradient-to-r from-amber-800 via-red-800 to-amber-700 bg-clip-text text-transparent">
                DAMOSA
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 italic border-l-4 border-orange-400 pl-6">
              "The story behind Damosa is not just about food – it's about
              vision, resilience, and countless sleepless nights."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From day one, our dream was to build a brand that represents KP's
              spirit of hospitality, innovation, and taste. A brand that doesn't
              just serve food, but creates an experience, connects people, and
              celebrates our culture in every bite.
            </p>
          </div>
        </div>

        {/* Background Pattern with React Icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl animate-pulse text-orange-400">
            <GiMeal />
          </div>
          <div className="absolute top-40 right-20 text-4xl animate-bounce text-yellow-400">
            <GiSparkles />
          </div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-pulse text-orange-400">
            <FaStar />
          </div>
          <div className="absolute bottom-40 right-1/3 text-3xl animate-pulse text-red-400">
            <FaFire />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-amber-800 via-red-800 to-amber-700 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Manayal Ahmed */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-orange-200">
                  <Image
                    src="/founder-manayal.jpg"
                    alt="Manayal Ahmed - Co-Founder"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Co-Founder
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Manayal Ahmed
              </h3>
              <p className="text-orange-600 font-semibold mb-4 flex items-center justify-center gap-2">
                <FaPalette className="text-lg" />
                Creative Visionary & Co-Founder
              </p>
              <p className="text-gray-700 leading-relaxed">
                The creative powerhouse behind Damosa's unique flavors and
                innovative approach. Manayal brings passion for culinary arts
                and a vision to revolutionize traditional Pakistani snacks with
                modern, creative twists that tell a story in every bite.
              </p>
            </div>

            {/* Ammar Ahmed Qureshi */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-orange-200">
                  <Image
                    src="/founder-ammar.jpg"
                    alt="Ammar Ahmed Qureshi - Founder"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Founder
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Ammar Ahmed Qureshi
              </h3>
              <p className="text-orange-600 font-semibold mb-4 flex items-center justify-center gap-2">
                <MdLightbulbOutline className="text-lg" />
                Business Strategist & Founder
              </p>
              <p className="text-gray-700 leading-relaxed">
                The strategic mastermind behind Damosa's growth and business
                development. Ammar combines entrepreneurial spirit with deep
                market understanding to build a sustainable food brand that
                honors tradition while embracing innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">
              Our <span className="text-orange-400">Mission & Values</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-orange-400/30">
                <div className="text-5xl mb-6 text-orange-300 flex justify-center">
                  <FaHome />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">
                  Hospitality
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Representing KP's legendary spirit of hospitality in every
                  interaction, every service, and every delicious bite we serve.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-orange-400/30">
                <div className="text-5xl mb-6 text-orange-300 flex justify-center">
                  <FaLightbulb />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">
                  Innovation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Constantly experimenting and pushing boundaries to create
                  unique flavors, experiences, and memorable moments that
                  surprise and delight.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-orange-400/30">
                <div className="text-5xl mb-6 text-orange-300 flex justify-center">
                  <FaCrown />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">
                  Authentic Taste
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Never compromising on flavor – every Damosa is a celebration
                  of authentic Pakistani taste with a creative modern twist.
                </p>
              </div>
            </div>

            <div className="bg-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/50">
              <blockquote className="text-xl italic text-orange-200 mb-4">
                "From brainstorming sessions to sleepless nights, every
                challenge has brought us closer to our vision of creating
                something more than just another food brand."
              </blockquote>
              <cite className="text-orange-300 font-semibold flex items-center justify-center gap-2">
                <FaHeart className="text-red-400" />- The Damosa Founders
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-800 via-red-800 to-amber-700 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                  1
                </div>
                <div className="flex-1 bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl group-hover:shadow-xl transition-all duration-300 border border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FaLightbulb className="text-orange-500" />
                    The Vision Takes Shape
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Two siblings with a shared dream to revolutionize Pakistani
                    street food. Countless brainstorming sessions, sleepless
                    nights, and an unwavering commitment to creating something
                    extraordinary.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                  2
                </div>
                <div className="flex-1 bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl group-hover:shadow-xl transition-all duration-300 border border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FaStar className="text-orange-500" />
                    First Major Milestone
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our successful second stall at Peshawar Services Club marked
                    a emotional turning point. The overwhelming love,
                    appreciation, and community support validated our concept
                    and reminded us why we started this journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform shadow-lg">
                  3
                </div>
                <div className="flex-1 bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl group-hover:shadow-xl transition-all duration-300 border border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FaFire className="text-orange-500" />
                    Building Something Bigger
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we continue expanding our unique menu and reach while
                    staying true to our core values. Every creative name, every
                    unique flavor, every satisfied customer brings us closer to
                    our vision of celebrating Pakistani culture through food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Damosa Difference */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              What Makes Damosa Special?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/30 transition-all">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                  <FaPalette className="text-2xl" />
                  Creative Names with Meaning
                </h3>
                <p className="text-white/90">
                  "Aloo'd Up", "Emotional Cheese", "Pookie Damosa" - each name
                  tells a story and creates a connection before the first bite.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/30 transition-all">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                  <FaStar className="text-2xl" />
                  Quality Without Compromise
                </h3>
                <p className="text-white/90">
                  Fresh ingredients, traditional techniques, and innovative
                  flavors come together in perfect harmony.
                </p>
              </div>
            </div>

            <p className="text-xl mb-8 font-medium flex items-center justify-center gap-2">
              <MdRestaurant className="text-2xl" />
              We don't just make food – we create experiences, build
              connections, and celebrate culture one Damosa at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to <span className="text-orange-500">Experience Damosa?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every Damosa we serve is a step forward in our mission. Be part of
            our story and taste the passion, innovation, and love in every bite.
          </p>
          <div className="space-x-4">
            <a
              href="/menu"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaUtensils className="inline mr-2" />
              Explore Our Menu
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
            >
              <FaHeart className="inline mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

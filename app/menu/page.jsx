"use client";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { menuData } from "@/data/menuData";
import { GiHotMeal, GiSparkles } from "react-icons/gi";
import { MdLocalDining, MdIcecream } from "react-icons/md";
import { FaPlus, FaFire } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDamosa, setSelectedDamosa] = useState(null);
  const { addToCart } = useCart();

  const categories = [
    { id: "all", name: "All Items", icon: <GiHotMeal /> },
    { id: "damosa-originals", name: "Damosa Originals", icon: <GiSparkles /> },
    { id: "ice-creams", name: "Ice Creams", icon: <MdIcecream /> },
    { id: "ice-cream-shakes", name: "Ice Cream Shakes", icon: <BiDrink /> },
    { id: "sauces", name: "Sauces & Extras", icon: <FaFire /> },
  ];

  const handleAddToCart = (item, type = null) => {
    let cartItem = { ...item };

    if (type === "ice-cream") {
      cartItem.price = item.cupPrice || "150/-"; // Add fallback
      cartItem.name = `${item.name} (Cup)`;
      cartItem.image = item.image;
    } else if (type === "shake") {
      cartItem.price = item.shakePrice || "500/-"; // Add fallback
      cartItem.name = `${item.name} (Shake)`;
      cartItem.image = item.shakeImage;
    } else {
      cartItem.price = item.price || "0/-"; // Add fallback
    }

    addToCart(cartItem, type);
  };

  const handleDamosaSelect = (damosa) => {
    setSelectedDamosa(damosa);
    // Auto add the damosa to cart
    handleAddToCart(damosa);
  };

  const renderSectionHeader = (title, icon, description) => (
    <div className="text-center mb-12">
      <div className="mb-1 inline-block">
        <div className="text-4xl text-white">{icon}</div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text mb-4">
        {title}
      </h2>
      <p className="text-amber-200 text-lg max-w-2xl mx-auto">{description}</p>
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-md mx-auto mt-6"></div>
    </div>
  );

  const renderProductCard = (item, type = null) => (
    <div
      key={`${item.id}-${type || "default"}`}
      className="bg-gradient-to-br from-amber-50/95 to-orange-50/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 border border-amber-200/50"
    >
      {/* Product Image */}
      <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
        <img
          src={type === "shake" ? item.shakeImage : item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "/placeholder-food.jpg";
          }}
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-amber-700 text-white px-3 py-1 rounded-full text-sm font-bold">
          {type === "shake"
            ? "SHAKE"
            : item.category?.replace("-", " ").toUpperCase() || "ITEM"}
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-amber-900 mb-2">
          {type === "shake" ? `${item.name} Shake` : item.name}
        </h3>

        {item.flavor && (
          <p className="text-orange-600 font-semibold mb-2">{item.flavor}</p>
        )}

        {item.description && (
          <p className="text-amber-700 text-sm mb-4">{item.description}</p>
        )}

        {/* Pricing */}
        <div className="mb-6">
          {type === "ice-cream" ? (
            <div className="text-2xl font-bold text-orange-700">
              {item.cupPrice}
              <span className="text-sm text-amber-600 block">Cup/Waffle</span>
            </div>
          ) : type === "shake" ? (
            <div className="text-2xl font-bold text-orange-700">
              {item.shakePrice}
              <span className="text-sm text-amber-600 block">Shake</span>
            </div>
          ) : (
            <div className="text-2xl font-bold text-orange-700">
              {item.price}
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        {item.category === "damosa-originals" ? (
          <button
            onClick={() => handleDamosaSelect(item)}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white py-3 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/40"
          >
            <FaPlus className="text-sm" />
            Select Damosa
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(item, type)}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white py-3 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/40"
          >
            <FaPlus className="text-sm" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 pt-20">
      {/* Hero Section */}
      <div className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-3xl mx-4"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-6 rounded-3xl mb-8 inline-block">
            <MdLocalDining className="text-6xl text-white mx-auto" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text mb-6">
            DAMOSA
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-amber-200 mb-4">
            ORIGINALS & DELIGHTS
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Experience the extraordinary with our signature creations - where
            tradition meets innovation in every bite
          </p>
        </div>
      </div>

      {/* Category Filter */}
      {/* Category Filter - Better Placement */}
      <div className="px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-amber-200 text-center mb-6">
              Explore Our Menu
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-orange-600 to-amber-700 text-white shadow-xl scale-105"
                      : "bg-white/20 text-amber-200 hover:bg-white/30 hover:text-white backdrop-blur-lg border border-white/30"
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-12 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-orange-600 to-amber-700 text-white shadow-xl"
                    : "bg-white/10 text-amber-200 hover:bg-white/20 hover:text-white backdrop-blur-lg"
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="px-4 pb-20 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* ALL ITEMS VIEW - Organized by Sections */}
          {activeCategory === "all" && (
            <div className="space-y-20">
              {/* DAMOSA ORIGINALS SECTION */}
              <section>
                {renderSectionHeader(
                  "DAMOSA ORIGINALS",
                  <img
                    src="/menu-logo.png"
                    alt="Damosa"
                    className="w-40 h-40 mx-auto drop-shadow-2xl hover:scale-110 transition-all duration-300"
                  />,
                  "Our signature samosas with authentic flavors and creative twists"
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {menuData.samosas.map((item) => renderProductCard(item))}
                </div>
              </section>

              {/* ICE CREAMS SECTION */}
              <section>
                {renderSectionHeader(
                  "ICE CREAMS",
                  <MdIcecream />,
                  "Premium frozen delights in cups and waffles with unique flavors"
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {menuData.iceCreams.map((item) =>
                    renderProductCard(item, "ice-cream")
                  )}
                </div>
              </section>

              {/* ICE CREAM SHAKES SECTION */}
              <section>
                {renderSectionHeader(
                  "ICE CREAM SHAKES",
                  <BiDrink />,
                  "Creamy blended perfection with the same beloved flavors"
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {menuData.iceCreams.map((item) =>
                    renderProductCard({ ...item, id: item.id + 100 }, "shake")
                  )}
                </div>
              </section>
            </div>
          )}

          {/* CATEGORY-SPECIFIC VIEWS */}
          {activeCategory === "damosa-originals" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuData.samosas.map((item) => renderProductCard(item))}
            </div>
          )}

          {activeCategory === "ice-creams" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuData.iceCreams.map((item) =>
                renderProductCard(item, "ice-cream")
              )}
            </div>
          )}

          {activeCategory === "ice-cream-shakes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuData.iceCreams.map((item) =>
                renderProductCard({ ...item, id: item.id + 100 }, "shake")
              )}
            </div>
          )}

          {activeCategory === "sauces" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuData.extras.map((item) => renderProductCard(item))}
            </div>
          )}
        </div>
      </div>

      {/* SAUCE SELECTION MODAL */}
      {selectedDamosa && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Add Sauces to your {selectedDamosa.name}?
              </h3>
              <p className="text-amber-700">
                Enhance your damosa with our signature sauces (optional)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {menuData.extras.map((sauce) => (
                <div key={sauce.id} className="text-center">
                  <div className="relative h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                    <img
                      src={sauce.image}
                      alt={sauce.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder-food.jpg";
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-amber-900 mb-2">
                    {sauce.name}
                  </h4>
                  <p className="text-orange-700 font-bold mb-3">
                    {sauce.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(sauce)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 px-4 rounded-xl font-bold text-sm transition-all duration-300"
                  >
                    Add Sauce
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedDamosa(null)}
                className="flex-1 bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-300"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

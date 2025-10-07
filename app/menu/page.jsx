"use client";
import { useState } from "react";
import Image from "next/image";
import { menuData } from "@/data/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add item to cart
  const addToCart = (item, type = null) => {
    const cartItem = {
      id: Date.now(),
      name: item.name,
      price: type ? item[type] : item.price,
      type: type || "regular",
      quantity: 1,
      category: item.category,
    };
    setCart([...cart, cartItem]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  // Generate WhatsApp order
  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let orderText = "🥟 *DAMOSA ORDER* 🥟\n\n";

    cart.forEach((item, index) => {
      orderText += `${index + 1}. ${item.name}`;
      if (item.type !== "regular") {
        orderText += ` (${item.type})`;
      }
      orderText += ` - ${item.price}\n`;
    });

    orderText += `\n💰 *Total: Rs. ${getTotal()}/-*\n\n`;
    orderText += "📍 Please confirm delivery address\n";
    orderText += "⏰ Expected delivery time: 30-45 mins";

    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(
      orderText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const filterItems = (category) => {
    if (category === "all")
      return [...menuData.samosas, ...menuData.iceCreams, ...menuData.extras];
    if (category === "samosas") return menuData.samosas;
    if (category === "ice-creams") return menuData.iceCreams;
    if (category === "extras") return menuData.extras;
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Cart Button */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed top-20 right-6 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      >
        🛒{" "}
        <span className="ml-2 bg-white text-orange-500 px-2 py-1 rounded-full text-sm font-bold">
          {cart.length}
        </span>
      </button>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Your Order</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        {item.type !== "regular" && (
                          <p className="text-xs text-gray-500">({item.type})</p>
                        )}
                        <p className="text-orange-500 font-bold text-sm">
                          {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-xl font-bold text-orange-500">
                      Rs. {getTotal()}/-
                    </span>
                  </div>

                  <button
                    onClick={sendWhatsAppOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors duration-300"
                  >
                    📱 Order via WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 text-center relative">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            DAMOSA MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the extraordinary with our unique creations - each bite
            tells a story!
          </p>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">
            🥟
          </div>
          <div className="absolute top-40 right-20 text-4xl opacity-10 animate-bounce">
            🍦
          </div>
          <div className="absolute bottom-20 left-1/4 text-5xl opacity-10 animate-pulse">
            ✨
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-4">
            {[
              { key: "all", label: "All Items", emoji: "🌟" },
              { key: "samosas", label: "Damosa Originals", emoji: "🥟" },
              { key: "ice-creams", label: "Ice Creams", emoji: "🍦" },
              { key: "extras", label: "Sauces & Extras", emoji: "🌶️" },
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.key
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-2xl scale-105"
                    : "bg-white/10 backdrop-blur text-white hover:bg-white/20"
                }`}
              >
                {category.emoji} {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Samosas Section */}
          {(activeCategory === "all" || activeCategory === "samosas") && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                🥟 DAMOSA ORIGINALS
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuData.samosas.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden hover:shadow-orange-500/25 transition-all duration-500 group hover:scale-105 border border-white/20"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        {item.description}
                      </p>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ice Creams Section */}
          {(activeCategory === "all" || activeCategory === "ice-creams") && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🍦 FROZEN FANTASIES
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.iceCreams.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/25 transition-all duration-500 group hover:scale-105 border border-white/20"
                  >
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4 group-hover:animate-bounce">
                          🍦
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {item.flavor}
                        </p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <button
                          onClick={() => addToCart(item, "cupPrice")}
                          className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 border border-blue-400/30"
                        >
                          <span className="font-medium text-white">
                            Cup/Waffle
                          </span>
                          <span className="font-bold text-blue-400">
                            {item.cupPrice}
                          </span>
                        </button>
                        <button
                          onClick={() => addToCart(item, "shakePrice")}
                          className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 border border-purple-400/30"
                        >
                          <span className="font-medium text-white">Shake</span>
                          <span className="font-bold text-purple-400">
                            {item.shakePrice}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extras Section */}
          {(activeCategory === "all" || activeCategory === "extras") && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                🌶️ FLAVOR BOOSTERS
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {menuData.extras.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 backdrop-blur-lg rounded-2xl shadow-2xl p-6 hover:shadow-green-500/25 transition-all duration-500 group hover:scale-105 border border-white/20"
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-4 group-hover:animate-pulse">
                        🌶️
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 mb-6 text-sm">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-400">
                          {item.price}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white px-6 py-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

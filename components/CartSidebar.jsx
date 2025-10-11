"use client";
import { useCart } from "@/contexts/CartContext";
import { FaTimes, FaPlus, FaMinus, FaWhatsapp } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import Image from "next/image";

export default function CartSidebar() {
  const {
    cart,
    showCart,
    setShowCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    sendWhatsAppOrder,
    clearCart,
  } = useCart();

  if (!showCart) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setShowCart(false)}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-br from-orange-50 via-white to-yellow-50 shadow-2xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">Your Order</h3>
                <p className="text-orange-100 text-sm">
                  {cart.length} {cart.length === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                onClick={() => setShowCart(false)}
                className="text-white hover:text-orange-200 text-2xl p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 opacity-20">🛒</div>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">
                  Add some delicious items!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-4 shadow-md border border-orange-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      {/* Item Image/Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-2xl">
                            {item.category === "samosas"
                              ? "🥟"
                              : item.category === "ice-creams"
                              ? "🍦"
                              : "🌶️"}
                          </span>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-sm leading-tight">
                          {item.name}
                        </h4>
                        {item.type !== "regular" && (
                          <p className="text-xs text-orange-600 font-medium">
                            ({item.type})
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-orange-600 font-bold text-sm">
                            {item.price}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-7 h-7 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors"
                            >
                              <FaMinus className="text-xs" />
                            </button>
                            <span className="w-8 text-center font-bold text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-7 h-7 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-600 transition-colors"
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-all"
                      >
                        <FaTimes className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-orange-100 p-4 bg-white">
              {/* Total */}
              <div className="flex justify-between items-center mb-4 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-orange-600">
                  Rs. {getTotal()}/-
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25"
                >
                  <FaWhatsapp className="text-xl" />
                  Order via WhatsApp
                </button>

                <button
                  onClick={clearCart}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-lg font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

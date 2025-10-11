"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("damosa-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("damosa-cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (item, type = null) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id && cartItem.type === type
      );

      // Ensure price is always a string
      const itemPrice = item.price ? item.price.toString() : "0";

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id && cartItem.type === type
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [
        ...prevCart,
        {
          ...item,
          price: itemPrice, // Make sure price is string
          quantity: 1,
          type: type,
        },
      ];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(
        (item.price || "0").toString().replace(/[^\d]/g, "")
      );
      return total + price * item.quantity;
    }, 0);
  };

  // Get cart count
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Generate WhatsApp order
  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let orderText = "*** DAMOSA ORDER ***\n\n";

    cart.forEach((item, index) => {
      orderText += `${index + 1}. ${item.name}`;
      if (item.type !== "regular") {
        orderText += ` (${item.type})`;
      }
      orderText += ` x${item.quantity} - ${item.price}\n`;
    });

    orderText += `\n*** Total: Rs. ${getTotal()}/-***\n\n`;
    orderText += "- Please confirm delivery address\n";
    orderText += "- Expected delivery time: 30-45 mins\n\n";
    orderText += "Thank you for choosing Damosa!";

    const phoneNumber = "923140078748";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      orderText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const value = {
    cart,
    showCart,
    setShowCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getCartCount,
    sendWhatsAppOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authLoading) return;

    if (isAuthenticated) {
      setCart(Array.isArray(user?.cart) ? user.cart : []);
    } else {
      setCart([]);
    }
  }, [authLoading, isAuthenticated, user]);

  const syncCartToServer = async (updatedCart) => {
    if (!user?.id) return;

    try {
      await axios.patch(`http://localhost:3000/users/${user.id}`, {
        cart: updatedCart,
        updatedAt: new Date().toISOString(),
      });

      //Update localStorage copy
      const updatedUser = { ...user, cart: updatedCart };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Failed to sync cart:", error);
    }
  };

  const addToCart = async (product) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items to cart");
      return;
    }

    setLoading(true);
    try {
      const existingItem = cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...cart, { ...product, quantity: 1 }];
      }

      setCart(updatedCart);
      await syncCartToServer(updatedCart);
      toast.success(`${product.name} added to cart`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item");
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (id) => {
    if (!isAuthenticated) return;

    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    await syncCartToServer(updatedCart);
    toast("Item removed from cart");
  };

  const updateQuantity = async (id, newQuantity) => {
    if (!isAuthenticated) return;
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    await syncCartToServer(updatedCart);
  };

  const clearCart = async () => {
    if (!isAuthenticated) return;

    setCart([]);
    await syncCartToServer([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        totalPrice,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
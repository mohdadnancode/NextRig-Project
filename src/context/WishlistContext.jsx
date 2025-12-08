import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setWishlist(Array.isArray(user?.wishlist) ? user.wishlist : []);
    } else {
      setWishlist([]);
    }
  }, [isAuthenticated, user]);

  const syncWishlistToServer = async (updatedWishlist) => {
    if (!user?.id) return;

    try {
      await axios.patch(`http://localhost:3000/users/${user.id}`, {
        wishlist: updatedWishlist,
        updatedAt: new Date().toISOString(),
      });

      const updatedUser = { ...user, wishlist: updatedWishlist };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Failed to sync wishlist:", error);
    }
  };

  const toggleWishlist = async (product) => {
    if (!isAuthenticated) {
      toast.error("Please login to manage your wishlist");
      return;
    }

    setLoading(true);
    try {
      const exists = wishlist.some((item) => item.id === product.id);
      let updatedWishlist;

      if (exists) {
        updatedWishlist = wishlist.filter((item) => item.id !== product.id);
        toast.success(`${product.name} removed from wishlist`);
      } else {
        updatedWishlist = [...wishlist, product];
        toast.success(`${product.name} added to wishlist`);
      }

      setWishlist(updatedWishlist);
      await syncWishlistToServer(updatedWishlist);
    } catch (error) {
      console.error("Wishlist update failed:", error);
      toast.error("Error updating wishlist");
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (id) => {
    if (!isAuthenticated) return;

    const removedItem = wishlist.find((item) => item.id === id);
    const updatedWishlist = wishlist.filter((item) => item.id !== id);

    setWishlist(updatedWishlist);
    await syncWishlistToServer(updatedWishlist);

    if (removedItem) {
      toast.success(`${removedItem.name} removed from wishlist`);
    } else {
      toast("Item removed from wishlist");
    }
  };

  const clearWishlist = async () => {
    if (!isAuthenticated) return;
    setWishlist([]);
    await syncWishlistToServer([]);
  };

  const isInWishlist = (id) =>
    Array.isArray(wishlist) && wishlist.some((item) => item.id === id);

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        wishlistCount,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
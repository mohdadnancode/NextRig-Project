import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/client";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    setAuthLoading(true);
    setAuthError("");

    try {
      const { data: existing } = await api.get(
        `/users?email=${userData.email}`
      );

      if (existing.length > 0) throw new Error("Email already registered");

      const newUser = {
        id: Math.random().toString(36).substr(2, 4),
        username: userData.username.trim(),
        email: userData.email.trim(),
        password: userData.password,
        role: "user",
        profileImage: "",
        address: [],
        cart: [],
        orders: [],
        wishlist: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isBlock: false,
      };

      await api.post("/users", newUser);
      return { success: true };
    } catch (error) {
      setAuthError(error.message || "Registration failed. Try again.");
      return { success: false };
    } finally {
      setAuthLoading(false);
    }
  };

  const login = async (email, password) => {
    setAuthLoading(true);
    setAuthError("");

    try {
      const { data: users } = await api.get(
        `/users?email=${email}&password=${password}`
      );

      if (users.length === 0) throw new Error("Invalid email or password");
      if (users[0].isBlock) throw new Error("Your account has been blocked");

      const loggedInUser = users[0];
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      setAuthError(error.message);
      return { success: false };
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        authLoading,
        authError,
        login,
        register,
        logout,
        setAuthError,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
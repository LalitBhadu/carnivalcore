// Components/Context/AuthContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true); // ✅ add loading

useEffect(() => {
    const tokenData = localStorage.getItem("csfuser");
    if (tokenData) {
      const user = JSON.parse(tokenData);
      if (user?.token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

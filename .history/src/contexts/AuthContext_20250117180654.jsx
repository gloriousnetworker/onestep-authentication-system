// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user has passed login from localStorage
    const hasPassedLogin = localStorage.getItem("hasPassedLogin") === "true";
    setIsAuthenticated(hasPassedLogin);
  }, []);

  const login = () => {
    localStorage.setItem("hasPassedLogin", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("hasPassedLogin");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

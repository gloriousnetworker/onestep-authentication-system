import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const hasPassedLogin = localStorage.getItem("hasPassedLogin");
    if (hasPassedLogin) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async () => {
    // Perform your authentication (e.g., API call or token validation)
    // This is just an example; replace with actual login logic
    const loginSuccess = true; // Simulating a successful login
    if (loginSuccess) {
      setIsAuthenticated(true);
      localStorage.setItem("hasPassedLogin", "true");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("hasPassedLogin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

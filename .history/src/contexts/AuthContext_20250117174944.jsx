import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already authenticated (e.g., via localStorage)
  useEffect(() => {
    const hasPassedLogin = localStorage.getItem("hasPassedLogin") === "true";
    setIsAuthenticated(hasPassedLogin);
  }, []);

  // Login function
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("hasPassedLogin", "true"); // Persist the login state
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("hasPassedLogin");
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

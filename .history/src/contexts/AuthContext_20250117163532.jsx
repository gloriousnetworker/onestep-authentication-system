import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // When the user logs in, set isAuthenticated to true
    setIsAuthenticated(true);
    localStorage.setItem("hasPassedLogin", "true"); // Ensure this flag is set
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("hasPassedLogin"); // Clear the flag on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Check if the user has passed through the login
  const hasPassedLogin = localStorage.getItem("hasPassedLogin");

  // Redirect to login if user is not authenticated or has not passed through login
  if (!isAuthenticated || !hasPassedLogin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

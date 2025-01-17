import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Check if the user has passed login (by checking localStorage)
  const hasPassedLogin = localStorage.getItem("hasPassedLogin");

  // Redirect to login if the user is not authenticated or has not passed login
  if (!isAuthenticated || !hasPassedLogin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

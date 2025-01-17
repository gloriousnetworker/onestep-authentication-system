import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GrantAccess from "./pages/GrantAccess";
import GrantAccessSignup from "./pages/GrantAccessSignup";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import OTPVerificationSignupPage from "./pages/OTPVerificationSignup";
import AccountSetupPage from "./pages/AccountSetupPage";
import PasswordPage from "./pages/PasswordPage";
import PasscodeSetupPage from "./pages/PasscodeSetupPage";
import KYCAmlSetupPage from "./pages/KYCSetupPage";
import VerifyIdentityPage from "./pages/VerifyIdentityPage";
import DashboardPage from "./pages/DashboardPage";
import BiometricsLoginPage from "./pages/BiometricLoginPage";
import BiometricsRegistrationPage from "./pages/BiometricsSetupPage";
import PhotoSelfieWithIDPage from "./pages/PhotoSelfieWithIdPage";
import NotificationPopup from "./components/NotificationPopup";
import { useState } from "react";

function App() {
  // State for managing notification
  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });

  // Function to trigger notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  return (
    <AuthProvider>
      <Router>
        {/* Notification Popup */}
        <NotificationPopup
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: "", type: "" })}
        />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage showNotification={showNotification} />} />
          <Route path="/sign-up" element={<SignupPage showNotification={showNotification} />} />
          <Route path="/grant-access" element={<GrantAccess showNotification={showNotification} />} />
          <Route path="/grant-access-signup" element={<GrantAccessSignup showNotification={showNotification} />} />
          <Route path="/otp-verification" element={<OTPVerificationPage showNotification={showNotification} />} />
          <Route path="/otp-verification-signup" element={<OTPVerificationSignupPage showNotification={showNotification} />} />

          {/* Protected routes */}
          <Route
            path="/account-setup"
            element={
              <ProtectedRoute>
                <AccountSetupPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/password"
            element={
              <ProtectedRoute>
                <PasswordPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/passcode"
            element={
              <ProtectedRoute>
                <PasscodeSetupPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/biometrics-setup"
            element={
              <ProtectedRoute>
                <BiometricsRegistrationPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/biometrics-login"
            element={
              <ProtectedRoute>
                <BiometricsLoginPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kyc-setup"
            element={
              <ProtectedRoute>
                <KYCAmlSetupPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/verify-kyc"
            element={
              <ProtectedRoute>
                <VerifyIdentityPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/photo-verification"
            element={
              <ProtectedRoute>
                <PhotoSelfieWithIDPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

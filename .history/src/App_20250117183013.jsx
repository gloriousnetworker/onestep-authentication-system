import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GrantAccess from './pages/GrantAccess';
import GrantAccessSignup from './pages/GrantAccessSignup';
import OTPVerificationPage from './pages/OTPVerificationPage';
import OTPVerificationSignupPage from './pages/OTPVerificationSignup';
import AccountSetupPage from './pages/AccountSetupPage';
import PasswordPage from './pages/PasswordPage';
import PasscodeSetupPage from './pages/PasscodeSetupPage';
import KYCAmlSetupPage from './pages/KYCSetupPage';
import VerifyIdentityPage from './pages/VerifyIdentityPage';
import DashboardPage from './pages/DashboardPage';
import BiometricsLoginPage from './pages/BiometricLoginPage';
import BiometricsRegistrationPage from './pages/BiometricsSetupPage';
import NotificationPopup from './components/NotificationPopup';
import PhotoSelfieWithIDPage from './pages/PhotoSelfieWithIdPage';

function App() {
  // State for managing notification
  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });

  // Function to trigger notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    // Automatically clear notification after 3 seconds
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

          {/* Protected routes */}
          <Route
            path="/grant-access"
            element={
              <ProtectedRoute>
                <GrantAccess showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grant-access-signup"
            element={
              <ProtectedRoute>
                <GrantAccessSignup showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/otp-verification"
            element={
              <ProtectedRoute>
                <OTPVerificationPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/otp-verification-signup"
            element={
              <ProtectedRoute>
                <OTPVerificationSignupPage showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
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
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

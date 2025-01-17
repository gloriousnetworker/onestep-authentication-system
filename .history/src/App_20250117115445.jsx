import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';  // Import useState to manage notification state
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GrantAccess from './pages/GrantAccess';
import GrantAccessSignup from './pages/GrantAccessSignup';
import OTPVerificationPage from './pages/OTPVerificationPage';
import AccountSetupPage from './pages/AccountSetupPage';
import PasswordPage from './pages/PasswordPage';
import PasscodeSetupPage from './pages/PasscodeSetupPage';
import KYCAmlSetupPage from './pages/KYCSetupPage';
import VerifyIdentityPage from './pages/VerifyIdentityPage';
import DashboardPage from './pages/DashboardPage';
import BiometricsLoginPage from './pages/BiometricLoginPage';
import BiometricsRegistrationPage from './pages/BiometricsSetupPage';
import NotificationPopup from './components/NotificationPopup';  // Import NotificationPopup
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
    <Router>
      {/* Notification Popup */}
      <NotificationPopup
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />

      <Routes>
        <Route path="/" element={<LoginPage showNotification={showNotification} />} />
        <Route path="/sign-up" element={<SignupPage showNotification={showNotification} />} />
        <Route path="/grant-access" element={<GrantAccess showNotification={showNotification} />} />
        <Route path="/grant-access" element={<GrantAccessSignup showNotification={showNotification} />} />
        <Route path="/otp-verification" element={<OTPVerificationPage showNotification={showNotification} />} />
        <Route path="/account-setup" element={<AccountSetupPage showNotification={showNotification} />} />
        <Route path="/password" element={<PasswordPage showNotification={showNotification} />} />
        <Route path="/passcode" element={<PasscodeSetupPage showNotification={showNotification} />} />
        <Route path="/biometrics-setup" element={<BiometricsRegistrationPage showNotification={showNotification} />} />
        <Route path="/biometrics-login" element={<BiometricsLoginPage showNotification={showNotification} />} />
        <Route path="/kyc-setup" element={<KYCAmlSetupPage showNotification={showNotification} />} />
        <Route path="/verify-kyc" element={<VerifyIdentityPage showNotification={showNotification} />} />
        <Route path="/photo-verification" element={<PhotoSelfieWithIDPage showNotification={showNotification} />} />
        <Route path="/dashboard" element={<DashboardPage showNotification={showNotification} />} />
      </Routes>
    </Router>
  );
}

export default App;

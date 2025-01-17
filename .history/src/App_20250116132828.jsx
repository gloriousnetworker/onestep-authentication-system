import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';  // Import useState to manage notification state
import LoginPage from './pages/LoginPage';
import GrantAccess from './pages/GrantAccess';
import OTPVerificationPage from './pages/OTPVerificationPage';
import AccountCreationPage from './pages/AccountCreationPage';
import PasswordPage from './pages/PasswordPage';
import BiometricsPage from './pages/BiometricsPage';
import KYCPage from './pages/KYCPage';
import DashboardPage from './pages/DashboardPage';
import BiometricsLoginPage from './'
import NotificationPopup from './components/NotificationPopup';  // Import NotificationPopup

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
        <Route path="/grant-access" element={<GrantAccess showNotification={showNotification} />} />
        <Route path="/otp-verification" element={<OTPVerificationPage showNotification={showNotification} />} />
        <Route path="/account-creation" element={<AccountCreationPage showNotification={showNotification} />} />
        <Route path="/password" element={<PasswordPage showNotification={showNotification} />} />
        <Route path="/biometrics" element={<BiometricsPage showNotification={showNotification} />} />
        <Route path="/kyc" element={<KYCPage showNotification={showNotification} />} />
        <Route path="/dashboard" element={<DashboardPage showNotification={showNotification} />} />
      </Routes>
    </Router>
  );
}

export default App;

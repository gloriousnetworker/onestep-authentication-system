import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GrantAccess from './pages/GrantAccess';
import OTPVerificationPage from './pages/OTPVerificationPage';
import AccountCreationPage from './pages/AccountCreationPage';
import PasswordPage from './pages/PasswordPage';
import BiometricsPage from './pages/BiometricsPage';
import KYCPage from './pages/KYCPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/grant-access" element={<GrantAccess />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/account-creation" element={<AccountCreationPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/biometrics" element={<BiometricsPage />} />
        <Route path="/kyc" element={<KYCPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

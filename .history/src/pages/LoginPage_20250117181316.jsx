import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = ({ showNotification }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Assuming you have login functionality in AuthContext
  const [redirecting, setRedirecting] = useState(false); // State to handle redirect message
  const [otpGenerated, setOtpGenerated] = useState(false); // State to manage OTP generation status

  // Simulate OTP generation
  const generateOtp = async () => {
    try {
      // Simulate API call or OTP generation process here
      // You can replace this with your actual OTP generation logic
      const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random OTP for demonstration
      console.log(`Generated OTP: ${otp}`); // Log OTP for testing

      // If OTP generation is successful, update the state
      setOtpGenerated(true);
      showNotification("OTP generated successfully!", "success");

      // Optionally, send the OTP via a message or proceed with your flow
    } catch (error) {
      showNotification("Failed to generate OTP. Please try again.", "error");
    }
  };

  // Handle login and set the hasPassedLogin flag
  const handleLogin = async () => {
    try {
      await generateOtp(); // Generate OTP when login is triggered
login()
      // Your login logic here (e.g., proceed with further steps like authentication via OTP)

      localStorage.setItem("hasPassedLogin", "true"); // Set the flag on successful login
      showNotification("Login successful!", "success");

      // Show the redirecting message and wait for 2 seconds before navigating
      setRedirecting(true);
      setTimeout(() => {
        navigate("/grant-access"); // Navigate to the protected route
      }, 2000); // 2 seconds delay before redirection
    } catch (error) {
      showNotification("Login failed. Please try again.", "error");
    }
  };

  // Navigate to the Create Account page
  const handleCreateAccount = () => {
    navigate("/sign-up");
  };

  // Navigate to the Sign Up page
  const handleSignUp = () => {
    navigate("/sign-up");
  };

  // Close the login page or navigate to the home page
  const handleClose = () => {
    navigate("/"); // Assuming the home page is at '/'
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Top Left: Create Account */}
      <div className="absolute top-4 left-4 flex items-center gap-2 cursor-pointer" onClick={handleCreateAccount}>
        <img
          src="/avatar.avif"
          alt="User avatar for account creation"
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <span className="text-white text-sm">Create Account</span>
      </div>

      {/* Top Middle: Logo */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <img
          src="/onestep.png"
          alt="OneStep Logo"
          className="w-28 sm:w-25 h-6"
          loading="lazy"
        />
      </div>

      {/* Top Right: Close Button */}
      <div
        className="absolute top-4 right-4 text-white cursor-pointer text-xl hover:text-gray-400"
        aria-label="Close login page"
        onClick={handleClose}  // Close button functionality
      >
        X
      </div>

      {/* Center Login Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">Login</h1>
        <p className="text-gray-400 text-sm mb-2 text-center">
          Access Wealth with either your OneStep Passcode, Biometrics, or ID Verification.
        </p>
        <div className="text-center text-gray-200 font-semibold mb-2 mt-6 font-serif">
          USE ONESTEP ID TO LOGIN
        </div>
        <p className="text-center text-gray-400 mb-4">Use the OneStep Verification to Log into your Account</p>

        {/* Select Messenger Section */}
        <div className="flex flex-col justify-center items-center mb-4 mt-6 cursor-pointer">
          <div className="text-center text-gray-200 font-semibold mb-2">KINDLY SELECT A MESSENGER BELOW</div>
          <img
            src="/telelogo.png"
            alt="Telegram icon for verification"
            className="w-12 sm:w-16 h-12 sm:h-16"
            loading="lazy"
            onClick={handleLogin}  // Clicking the logo triggers the login
          />
          {redirecting && (
            <div className="text-white mt-4">Redirecting to Telegram...</div>
          )}
        </div>

        {/* Help Center */}
        <div className="text-center text-gray-400 mb-4">
          <p className="mb-2">Having trouble using OneStep Verification?</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 sm:px-40 py-2 rounded">
            HELP CENTRE
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-500 mb-48">
        <p className="mb-2">
          By using Login, you agree to our <span className="text-yellow-500 underline cursor-pointer">Terms & Privacy Policy</span>
        </p>
        <p className="mb-2">Are you new here?</p>
        <button 
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-16 sm:px-40 py-3 mb-4 rounded w-auto"
          onClick={handleSignUp}  // Navigate to Sign Up page
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

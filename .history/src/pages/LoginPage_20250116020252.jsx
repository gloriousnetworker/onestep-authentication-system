// src/pages/LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("otp", otp);
    navigate("/grant-access");
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Centered Login Card */}
      <div className="bg-black bg-opacity-90 border border-white rounded-lg shadow-lg p-8 w-[90%] sm:w-[80%] md:w-[70%] max-w-3xl">
        {/* Login Card Contents */}
        <h1 className="text-white text-3xl font-bold mb-4 mt-6 text-center font-serif">Login</h1>

        <p className="text-gray-400 text-sm mb-4 text-center whitespace-nowrap">
          Access Wealth with either your OneStep Passcode, Biometrics, or ID Verification.
        </p>

        <div className="text-center text-gray-200 font-semibold mb-2 mt-8 font-serif">
          USE ONESTEP ID TO LOGIN
        </div>

        <p className="text-center text-gray-400 mb-6">Use the OneStep Verification to Log into your Account</p>

        {/* Telegram Image & Text */}
        <div className="flex flex-col justify-center items-center mb-6 mt-8 cursor-pointer">
          <div className="text-center text-gray-200 font-semibold mb-2">
            KINDLY SELECT A MESSENGER BELOW
          </div>

          {/* Image (click to generate OTP and navigate) */}
          <img
            src="/telelogo.png"
            alt="Telegram"
            className="w-16 h-16"
            onClick={generateOTP} 
          /> {/* Telegram Image Placeholder */}

          {/* "Recovery Center" text underlined and golden, flexed to the right */}
          <div className="flex justify-end w-full mt-4">
            <span className="text-yellow-500 underline">Recovery Center</span>
          </div>
        </div>

        {/* Help Center */}
        <div className="text-center text-gray-400 mb-6">
          <p className="mb-2">Having trouble using OneStep Verification?</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">
            HELP CENTRE
          </button>
        </div>
      </div>

      {/* Footer Text - Outside the Login Card */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p className="mb-2">
          By using Login, you agree to our{" "}
          <span className="underline cursor-pointer text-yellow-500">Terms & Privacy Policy</span>
        </p>
        <p className="mb-2">Are you new here?</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded w-full sm:w-auto">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

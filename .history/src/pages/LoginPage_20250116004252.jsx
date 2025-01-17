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
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white font-sans">
      {/* Logo Placeholder */}
      <div className="absolute top-4 text-center w-full">
        <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full"></div>
      </div>

      {/* Login Card */}
      <div className="bg-black/90 p-8 rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p className="mb-4 text-sm">
          Access Wealth with either your OneStep Passcode, OneStep Biometrics, or OneStep ID Verification
        </p>
        <h2 className="font-semibold mb-2">USE ONESTEP ID TO LOGIN</h2>
        <p className="mb-4 text-sm">Use the OneStep Verification to Log into your Account</p>
        <p className="font-semibold mb-4">KINDLY SELECT A MESSENGER BELOW</p>

        {/* Messenger Placeholder */}
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 bg-gray-700 rounded-full cursor-pointer"
            onClick={generateOTP}
          ></div>
        </div>

        <a href="/recovery-center" className="underline text-sm mb-4 block">
          Recovery Center
        </a>

        {/* Help Center */}
        <p className="text-sm mb-4">Having trouble using OneStep Verification?</p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded"
          onClick={generateOTP}
        >
          HELP CENTRE
        </button>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-sm">
        <p className="mb-2">
          By using Login you agree to our <span className="underline">Terms & Privacy Policy</span>
        </p>
        <p className="mb-2">Are you new Here?</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGenerateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp);
    alert("OTP has been generated. Please check your registered device.");
    localStorage.setItem("otp", otp);
    navigate("/grant-access");
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <img src="/avatar.avif" alt="User avatar for account creation" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-white text-sm cursor-pointer">Create Account</span>
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <img src="/onestep.png" alt="OneStep Logo" className="w-25 h-6" />
      </div>

      <div className="absolute top-4 right-4 text-white cursor-pointer text-xl hover:text-gray-400" aria-label="Close login page">
        X
      </div>

      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-32 mx-auto px-4 py-6">
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2 mt-4 text-center font-serif">Login</h1>
        <p className="text-gray-400 text-sm mb-2 text-center whitespace-nowrap">
          Access Wealth with either your OneStep Passcode, Biometrics, or ID Verification.
        </p>
        <div className="text-center text-gray-200 font-semibold mb-2 mt-6 font-serif">
          USE ONESTEP ID TO LOGIN
        </div>
        <p className="text-center text-gray-400 mb-4">Use the OneStep Verification to Log into your Account</p>
        <div className="flex flex-col justify-center items-center mb-4 mt-6 cursor-pointer">
          <div className="text-center text-gray-200 font-semibold mb-2">KINDLY SELECT A MESSENGER BELOW</div>
          <img src="/telelogo.png" alt="Telegram icon for verification" className="w-16 h-16" onClick={handleGenerateOTP} />
          <div className="flex justify-end w-full mt-4 pr-28 lg:pr-60">
            <span className="text-yellow-500 underline">Recovery Center</span>
          </div>
        </div>
        <div className="text-center text-gray-400 mb-4">
          <p className="mb-2">Having trouble using OneStep Verification?</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 sm:px-20 lg:px-40 py-2 rounded">
            HELP CENTRE
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-auto">
        <p className="mb-2">
          By using Login, you agree to our <span className="text-yellow-500 underline cursor-pointer">Terms & Privacy Policy</span>
        </p>
        <p className="mb-2">Are you new here?</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-24 py-3 mb-4 rounded w-auto">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

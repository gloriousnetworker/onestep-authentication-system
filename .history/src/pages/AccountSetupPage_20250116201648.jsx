import React from "react";
import { useNavigate } from "react-router-dom";

const AccountSetupPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Top Left: Back with arrow */}
      <div
        className="absolute top-4 left-4 flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span className="text-white text-xl">&#8592;</span>
        <span className="text-white text-sm">Back</span>
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
        aria-label="Close account setup page"
      >
        X
      </div>

      {/* Center Account Setup Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          Setup your Account
        </h1>
        <p className="text-gray-400 text-sm mb-2 text-center font-serif">
          Enter your Username, Date of Birth, and Phone Number below.
        </p>

        {/* Active Steps */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex items-center gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
                1
              </div>
              <span className="text-gray-200 text-xs">Account Setup</span>
            </div>
            <hr className="w-8 border-gray-400" />
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-600 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
                2
              </div>
              <span className="text-gray-500 text-xs">Setup Passcode</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 mb-6" />

        {/* Username Input */}
        <div className="mb-6">
          <label className="block text-gray-200 text-sm mb-1">USERNAME</label>
          <div className="flex items-center border border-purple-500 rounded px-2 py-1">
            <span className="text-gray-400">👤</span>
            <span className="text-gray-400 mx-2">|</span>
            <input
              type="text"
              placeholder="Enter Username"
              className="bg-transparent outline-none text-gray-200 flex-1"
            />
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Must be up to 8 characters and unique
          </p>
        </div>

        {/* Date of Birth Input */}
        <div className="mb-6">
          <label className="block text-gray-200 text-sm mb-1">DATE OF BIRTH</label>
          <div className="flex items-center border border-purple-500 rounded px-2 py-1">
            <span className="text-gray-400">📅</span>
            <span className="text-gray-400 mx-2">|</span>
            <input
              type="date"
              className="bg-transparent outline-none text-gray-200 flex-1"
            />
            <span className="text-gray-400">▼</span>
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <label className="block text-gray-200 text-sm mb-1">PHONE NUMBER</label>
          <div className="flex items-center border border-purple-500 rounded px-2 py-1">
            <img
              src="/nigeria-flag.png"
              alt="Nigeria Flag"
              className="w-6 h-6"
            />
            <span className="text-gray-400 mx-2">|</span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent outline-none text-gray-200 flex-1"
            />
          </div>
        </div>

        <hr className="border-gray-500 mb-4" />
        <div className="text-center text-gray-400 text-sm mb-4">
          Optionally, Input Referral & Promo Codes
        </div>

        {/* Referral Code Input */}
        <div className="mb-6">
          <div className="flex items-center border border-purple-500 rounded px-2 py-1">
            <span className="text-gray-400">↔</span>
            <span className="text-gray-400 mx-2">Referral Code</span>
            <input
              type="text"
              placeholder="Enter referral code"
              className="bg-transparent outline-none text-gray-200 flex-1"
            />
            <span className="text-gray-400">📋</span>
          </div>
        </div>

        {/* Proceed Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full py-2 rounded mb-4">
          PROCEED
        </button>

        {/* Disclaimer */}
        <div className="text-gray-400 text-sm">
          <span className="text-yellow-500">★</span> NOTE: Provide correct
          information related to yourself. Your Phone Number and other details
          will be used for authentication, authorization, and verification
          before payments and essential support services are made.
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-500 mt-auto">
        <p className="mb-32">
          By using Login, you agree to our{" "}
          <span className="text-yellow-500 underline cursor-pointer">
            Terms & Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default AccountSetupPage;

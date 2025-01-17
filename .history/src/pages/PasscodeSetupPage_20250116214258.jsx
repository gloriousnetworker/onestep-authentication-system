import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasscodeSetupPage = () => {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState("");

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Top Left: Back Button */}
      <div
        className="absolute top-4 left-4 flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/account-setup")}
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
        aria-label="Close passcode setup page"
      >
        X
      </div>

      {/* Center Passcode Setup Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          Setup your Passcode
        </h1>
        <p className="text-gray-400 text-sm mb-6 text-center font-serif">
          You need to setup your OneStep passcode to properly keep your account
          completely safe and secured from the prying eyes of hackers.
        </p>

        {/* Steps */}
        <div className="flex justify-center items-start gap-12 mb-6">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="bg-green-500 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
              &#10003;
            </div>
            <div className="ml-4">
              <h2 className="text-gray-200 text-sm font-bold">Account Setup</h2>
              <p className="text-gray-400 text-xs">
                Enter your Account Information
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-center">
            <div className="bg-gray-300 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
              2
            </div>
            <div className="ml-4">
              <h2 className="text-gray-200 text-sm font-bold">Transaction Request Form</h2>
              <p className="text-gray-400 text-xs">
                Secure your Account using OneStep Passcode
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 mb-6" />

        {/* Passcode Input */}
        <div className="mb-6">
          <div className="relative border border-purple-300 rounded px-2 py-4">
            <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-gray-400">
              PASSCODE
            </label>
            <div className="flex items-center">
              <span className="text-gray-400">🔒</span>
              <span className="text-gray-400 mx-2">|</span>
              <input
                type="password"
                placeholder="Enter Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="bg-transparent outline-none text-gray-200 flex-1"
              />
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Your Passcode must not be related to your Date of Birth in any way.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            className="border border-white text-white font-semibold py-2 px-6 rounded hover:bg-gray-800"
            onClick={() => navigate("/account-setup")}
          >
            PREVIOUS
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded">
            PROCEED
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          <span className="text-yellow-500">★</span> NOTE: Provide correct
          information related to yourself. Your Passcode and other details will
          be used for authentication, authorization, and verification before
          payments and essential support services are made.
        </p>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-4">
        By using Login, you agree to our {" "}
        <span className="text-yellow-500 underline cursor-pointer">
          Terms & Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default PasscodeSetupPage;

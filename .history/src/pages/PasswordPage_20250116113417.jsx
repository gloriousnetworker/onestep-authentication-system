import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordPage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    console.log("Proceed button clicked");
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Top Left: Create Account */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <img
          src="/avatar.avif"
          alt="User avatar for account creation"
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <span className="text-white text-sm cursor-pointer">Create Account</span>
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
        aria-label="Close password page"
      >
        X
      </div>

      {/* Center Password Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        {/* Passcode Section */}
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          OneStep Passcode
        </h1>
        <p className="text-gray-400 text-sm mb-2 text-center">
          Enter your Passcode to Log into your Account
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="password"
              maxLength={1}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white text-center text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            />
          ))}
        </div>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 sm:px-40 py-2 rounded mb-4"
          onClick={handleProceed}
        >
          PROCEED
        </button>

        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-gray-400">Can't remember your Passcode?</span>
          <span className="text-yellow-500 underline flex items-center cursor-pointer">
            Reset Passcode <span className="ml-2">&#x27A1;</span>
          </span>
        </div>

        {/* Divider */}
        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="flex flex-col sm:flex-row">
          {/* Left Section: Biometrics */}
          <div className="flex-1 flex flex-col items-center border-r border-gray-600 pr-4">
            <h2 className="text-white font-bold mb-2 font-serif ml-8">Use Onestep Biometrics to Login</h2>
            <p className="text-gray-400 text-center mb-4 ml-8">
              Login into your Account made easy with <br /> the Onestep Biometrics
            </p>
            <div className="flex gap-4 mb-2">
              <img src="/fingerprint.png" alt="Fingerprint" className="w-32 h-18" />
              <img src="/faceID.png" alt="Face ID" className="w-16 h-16 mt-3" />
            </div>
            <div className="flex gap-14 text-gray-400 text-sm ml-8">
              <span>Touch ID</span>
              <span>Face ID</span>
            </div>
            <button className="bg-[#7c3aed] hover:bg-purple-700 text-white font-semibold px-12 py-2 rounded mt-4 mb-2 ml-8">
              Onestep Biometrics
            </button>
            <p className="text-gray-400 mb-2 ml-8">Having Trouble using Biometric Verification?</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 py-2 rounded ml-8">
              HELP CENTRE
            </button>
          </div>

          {/* Right Section: Onestep ID */}
          <div className="flex-1 flex flex-col items-center pl-4">
            <h2 className="text-white font-bold mb-2 font-serif">Use Onestep ID to Login</h2>
            <p className="text-gray-400 text-center mb-4">
              Use your Onestep ID to login to your ECU Account
            </p>
            <h3 className="text-gray-400 mb-2">Kindly select a Messenger</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {['google', 'twitter', 'tiktok', 'telegram', 'facebook', 'pinterest', 'whatsapp'].map((logo) => (
                <img
                  key={logo}
                  src={`/${logo}.png`}
                  alt={`${logo} logo`}
                  className="w-12 h-12"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="text-yellow-500 underline cursor-pointer mb-4">Recovery Centre</span>
            <p className="text-gray-400 mb-2">Having trouble using Onestep ID Verification?</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 py-2 rounded">
              HELP CENTRE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-500 mt-auto">
        <p className="mb-2">
          By using Login, you agree to our <span className="text-yellow-500 underline cursor-pointer">Terms & Privacy Policy</span>
        </p>
        <p className="mb-2">Are you new here?</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-16 sm:px-40 py-3 mb-4 rounded w-auto">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;

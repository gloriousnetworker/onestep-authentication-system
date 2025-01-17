import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BiometricsRegistrationPage = () => {
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
        aria-label="Close biometrics registration page"
      >
        X
      </div>

      {/* Center Biometrics Registration Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        {/* Header */}
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          Biometrics Registration
        </h1>
        <h3 className="text-yellow-500 text-lg font-semibold text-center mb-2">
          REGISTER YOUR BIOMETRICS FOR FASTER LOGIN <br /> DO IT NOW OR LATER
        </h3>
        <p className="text-gray-400 text-sm mb-6 text-center font-serif">
          Register with Biometrics such as Touch ID, Face ID, and Pass Code for
          enhanced Login and Account Security.
        </p>

        {/* Horizontal Line */}
        <hr className="border-gray-500 mb-6" />

        {/* Biometrics Options */}
        <div className="flex justify-between items-center gap-8 mb-6">
          {/* Touch ID */}
          <div className="text-center">
            <img
              src="/digitalfingerprint.png"
              alt="Touch ID"
              className="w-24 h-24 mx-auto"
              loading="lazy"
            />
            <p className="text-white text-sm font-semibold mt-4">Touch ID</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded mt-4">
              SETUP TOUCH ID
            </button>
          </div>

          {/* Face ID */}
          <div className="text-center">
            <img
              src="/faceids.png"
              alt="Face ID"
              className="w-24 h-24 mx-auto"
              loading="lazy"
            />
            <p className="text-white text-sm font-semibold mt-4">Face ID</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded mt-4">
              SETUP FACE ID
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mb-32">
        By using Login, you agree to our{" "}
        <span className="text-yellow-500 underline cursor-pointer">
          Terms & Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default BiometricsRegistrationPage;

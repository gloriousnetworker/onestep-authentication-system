import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BiometricsRegistrationPage = () => {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState("");
  const [isTouchIdSetup, setIsTouchIdSetup] = useState(false);
  const [isFaceIdSetup, setIsFaceIdSetup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTouchIdSetup = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsTouchIdSetup(true);
      setIsProcessing(false);
      setTimeout(() => {
        alert("Fingerprint recorded successfully!");
        navigate("/kyc-setup");
      }, 1000);
    }, 2000); // Simulating fingerprint setup time
  };

  const handleFaceIdSetup = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsFaceIdSetup(true);
      setIsProcessing(false);
      setTimeout(() => {
        alert("Face ID recorded successfully!");
        navigate("/kyc-setup");
      }, 1000);
    }, 2000); // Simulating face capture setup time
  };

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
        onClick={() => navigate("/passcode")}
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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4 lg:gap-8 mb-6">
          {/* Touch ID */}
          <div className="text-center">
            <img
              src={isTouchIdSetup ? "/fingerprint-success.png" : "/digitalfingerprint.png"}
              alt="Touch ID"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto"
              loading="lazy"
            />
            <p className="text-white text-sm font-semibold mt-4">Touch ID</p>
            <button
              onClick={handleTouchIdSetup}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded mt-4 text-sm sm:text-base"
              disabled={isProcessing || isTouchIdSetup}
            >
              {isProcessing ? "Setting up..." : isTouchIdSetup ? "Fingerprint Recorded" : "SETUP TOUCH ID"}
            </button>
            {isProcessing && <p className="text-white mt-2">Input Fingerprint...</p>}
            {isTouchIdSetup && !isProcessing && <p className="text-green-500 mt-2">Fingerprint recorded successfully!</p>}
          </div>

          {/* Face ID */}
          <div className="text-center">
            <img
              src={isFaceIdSetup ? "/faceIDsuccess.png" : "/faceids.png"}
              alt="Face ID"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto"
              loading="lazy"
            />
            <p className="text-white text-sm font-semibold mt-4">Face ID</p>
            <button
              onClick={handleFaceIdSetup}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded mt-4 text-sm sm:text-base"
              disabled={isProcessing || isFaceIdSetup}
            >
              {isProcessing ? "Setting up..." : isFaceIdSetup ? "Face ID Recorded" : "SETUP FACE ID"}
            </button>
            {isProcessing && <p className="text-white mt-2">Fix your face on the camera...</p>}
            {isFaceIdSetup && !isProcessing && <p className="text-green-500 mt-2">Face ID recorded successfully!</p>}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mb-64">
        By using Login, you agree to our{" "}
        <span className="text-yellow-500 underline cursor-pointer">
          Terms & Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default BiometricsRegistrationPage;

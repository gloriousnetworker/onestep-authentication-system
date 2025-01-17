import React, { useEffect } from "react";
import { useRouter } from "next/router";

const GrantAccess = () => {
  const router = useRouter();

  // Ensure the OTP exists in localStorage when the component is loaded
  useEffect(() => {
    const otp = localStorage.getItem("otp");
    if (!otp) {
      alert("No OTP found in localStorage! Redirecting to Login Page.");
      router.push("/"); // Navigate to Login Page if OTP doesn't exist
    }
  }, [router]);

  // Handle SEND MESSAGE button click
  const handleSendMessage = () => {
    const otp = localStorage.getItem("otp"); // Get OTP from localStorage

    if (otp) {
      // Trigger notification
      alert(`Your OTP is: ${otp}`);

      // Copy OTP to clipboard
      navigator.clipboard
        .writeText(otp)
        .then(() => {
          alert("OTP copied to clipboard!");
          router.push("/OTPVerification"); // Navigate to OTPVerification page
        })
        .catch(() => alert("Failed to copy OTP to clipboard!"));
    } else {
      alert("No OTP found in localStorage!");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/telegram background.png')",
      }}
    >
      {/* Navbar */}
      <nav className="bg-black py-4 px-6 flex items-center justify-between">
        {/* Left: Telegram logo and text */}
        <div className="flex items-center gap-3">
          <img
            src="/telegramlogo.png"
            alt="Telegram logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            loading="lazy"
          />
          <span className="text-white text-lg sm:text-xl font-semibold">
            Telegram
          </span>
        </div>

        {/* Right: Download button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-full">
          DOWNLOAD
        </button>
      </nav>

      {/* Body */}
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-black bg-opacity-90 text-white rounded-xl shadow-lg w-full max-w-md p-6 text-center">
          {/* Card Content */}
          <h2 className="text-lg sm:text-xl font-bold mb-2">OneStepID</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            @OneStepID_Bot
          </p>
          <p className="text-sm sm:text-base text-gray-300 mb-8">
            Authorize OneStep to send you messages on your Telegram account.
          </p>

          {/* Send Message Button */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full"
            onClick={handleSendMessage}
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantAccess;

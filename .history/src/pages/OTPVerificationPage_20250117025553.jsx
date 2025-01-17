import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Add this import to use toastr styles

const OTPVerificationPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(600); // 10-minute countdown timer (600 seconds)

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return; // Prevent non-numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Resent OTP:", newOtp);
    localStorage.setItem("otp", newOtp);
    alert("OTP has been resent to your Telegram account.");
    setTimer(600); // Reset timer to 10 minutes
  };

  const handleProceed = () => {
    const enteredOtp = otp.join("");
    const storedOtp = localStorage.getItem("otp");

    // Show "Redirecting to Dashboard..." message
    toast.info("Redirecting to Dashboard...", {
      autoClose: 2000, // Display this message for 2 seconds
    });

    // Simulate OTP verification process
    setTimeout(() => {
      if (enteredOtp === storedOtp) {
        // OTP verified successfully
        toast.success("OTP Verified Successfully!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        navigate("/home"); // Redirect to the home page after a short delay
      } else {
        // OTP verification failed
        toast.error("Invalid OTP. Please try again.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    }, 2000); // Simulate a small delay before checking the OTP
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
        onClick={() => navigate(-1)}
      >
        <span className="text-white text-sm">← Back</span>
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
        aria-label="Close verification page"
      >
        X
      </div>

      {/* Center Verification Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          OTP Verification
        </h1>
        <p className="text-gray-400 text-sm mb-2 text-center">
          Complete the OneStep verification to proceed. It is important for account verification.
        </p>
        <p className="text-gray-400 text-sm mb-4 text-center">
          Enter the OTP verification code sent to you
        </p>

        {/* Line Break */}
        <hr className="border-gray-600 mb-4" />

        {/* Timer */}
        <div className="text-center text-gray-200 font-semibold mb-4">
          OTP expires in: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </div>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white text-center text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
            />
          ))}
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 sm:px-40 py-3 rounded mb-4"
        >
          PROCEED
        </button>

        {/* Resend OTP */}
        <div className="text-center text-gray-400">
          <p className="mb-2">
            Didn't receive your OTP?{" "}
            <span
              className="text-yellow-500 underline cursor-pointer flex items-center justify-center gap-2"
              onClick={handleResendOtp}
            >
              Resend OTP <span className="text-xl">↻</span>
            </span>
          </p>
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

      {/* Toast Container for Toastify */}
      <toast.Container />
    </div>
  );
};

export default OTPVerificationPage;

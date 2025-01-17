import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AccountSetupPage = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState("");

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

        {/* Steps */}
        <div className="flex justify-center items-start gap-12 mb-6">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="bg-gray-300 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
              1
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
            <div className="bg-gray-600 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
              2
            </div>
            <div className="ml-4">
              <h2 className="text-gray-500 text-sm font-bold">Setup Passcode</h2>
              <p className="text-gray-400 text-xs">
                Secure your Account using OneStep Passcode
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-500 mb-6" />

        {/* Username Input */}
        <div className="mb-6">
          <div className="relative border border-purple-300 rounded px-2 py-4">
            <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-gray-400">
              USERNAME
            </label>
            <div className="flex items-center">
              <span className="text-gray-400">👤</span>
              <span className="text-gray-400 mx-2">|</span>
              <input
                type="text"
                placeholder="Enter Username"
                className="bg-transparent outline-none text-gray-200 flex-1"
              />
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Must be up to 8 characters and unique
          </p>
        </div>

        {/* Date of Birth Input */}
        <div className="mb-6">
          <div className="relative border border-purple-300 rounded px-2 py-4 flex items-center">
          <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-gray-400">
              DATE OF BIRTH
            </label>
            <span className="text-gray-400">📅</span>
            <span className="text-gray-400 mx-2">|</span>
            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              className="bg-transparent outline-none text-gray-200 flex-1 w-full"
              placeholderText="Select Date of Birth"
            />
            <span className="text-gray-400">&#9662;</span>
          </div>
        </div>

        {/* Phone Number Input */}
<div className="mb-6">
  <div className="relative border border-purple-300 rounded px-2 py-4 flex items-center">
    <label className="absolute -top-2 left-3 bg-black px-1 text-xs text-gray-400">
      PHONE NUMBER
    </label>
    <PhoneInput
      country={"ng"}
      value={phone}
      onChange={(phone) => setPhone(phone)}
      inputStyle={{
        background: "transparent",
        color: "#e5e7eb",
        border: "none",
        paddingLeft: "50px", // Creates space for the country code dropdown and separator
      }}
      buttonStyle={{
        background: "transparent", // Removes white background
        border: "none", // Removes border
      }}
      containerClass="phone-input-container"
      dropdownClass="custom-dropdown" // Optional: Add custom dropdown styles if needed
    />
    {/* Separator and Placeholder */}
    <div className="absolute left-12 flex items-center text-gray-400">
      <span>|</span>
    </div>
  </div>
</div>


        <div className="relative flex items-center justify-center mb-6">
  <hr className="border-gray-500 w-full" />
  <span className="absolute bg-black px-2 text-gray-400 text-sm">
    Optionally, Input Referral & Promo Codes
  </span>
</div>


        {/* Referral and Promo Codes Section */}
        <div className="mb-6">
          <div className="border border-gray-600 rounded px-2 py-3 flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter Referral Code"
              className="bg-transparent text-gray-200 outline-none flex-1"
            />
            <span className="text-gray-400 ml-2">📋</span>
          </div>
        </div>

        {/* Proceed Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full py-2 rounded mb-4">
          PROCEED
        </button>

        <p className="text-gray-400 text-sm">
          <span className="text-yellow-500">★</span> NOTE: Provide correct
          information related to yourself. Your Phone Number and other details
          will be used for authentication, authorization, and verification
          before payments and essential support services are made.
        </p>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-auto mb-4">
        By using Login, you agree to our{" "}
        <span className="text-yellow-500 underline cursor-pointer">
          Terms & Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default AccountSetupPage;

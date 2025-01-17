import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const KYCAmlSetupPage = () => {
  const [dob, setDob] = useState(null);

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Breadcrumbs */}
      <div className="absolute top-10 left-10 text-white text-sm">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="text-gray-400">&#8962;</span> {/* Home Icon */}
            <span className="cursor-pointer hover:underline">Home</span>
          </span>
          <span>{">"}</span>
          <span className="cursor-pointer hover:underline">Profile</span>
          <span>{">"}</span>
          <span className="font-bold">KYC and AML</span>
        </div>
        <div
          className="flex items-center gap-1 mt-2 cursor-pointer"
          onClick={() => console.log("Back button clicked")}
        >
          <span className="text-gray-400">&#8592;</span>
          <span className="hover:underline">Back</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-black bg-opacity-90 text-white rounded-xl shadow-lg w-[90%] max-w-[900px] p-8 relative">
        {/* Step Circles */}
        <div className="absolute right-10 top-10 flex flex-col gap-4 ml">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              1
            </div>
            <span className="text-white">Personal Information</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-black">
              2
            </div>
            <span className="text-gray-400">Verify your Identity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-black">
              3
            </div>
            <span className="text-gray-400">Photo Selfie with ID</span>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-serif">Complete your Profile</h1>
        <hr className="border-white mb-4" />

        {/* Step Information */}
        <h2 className="text-lg font-semibold mb-4">Step 1: Personal Info</h2>

        {/* Warning */}
        <div className="bg-yellow-100 text-yellow-700 font-medium text-sm p-3 rounded mb-6">
          ⚠️ Carefully fill the form below. Please ensure to input your authentic information only.
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "FIRST NAME", type: "text", placeholder: "Enter your first name" },
            { label: "LAST NAME", type: "text", placeholder: "Enter your last name" },
            { label: "EMAIL ADDRESS", type: "email", placeholder: "Enter your email address" },
            { label: "COUNTRY OF RESIDENCE", type: "text", placeholder: "Enter your country" },
            { label: "CITY OF RESIDENCE", type: "text", placeholder: "Enter your city" },
            { label: "ADDRESS", type: "text", placeholder: "Enter your address" },
            { label: "ZIP/POSTAL CODE", type: "text", placeholder: "Enter your ZIP or postal code" },
            { label: "ADDRESS #2 (OPTIONAL)", type: "text", placeholder: "Enter additional address info" },
          ].map((input, idx) => (
            <div key={idx} className="relative">
              <input
                type={input.type}
                placeholder={input.placeholder}
                className="w-full border border-white bg-black text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <label className="absolute top-1 left-3 text-sm text-gray-400">
                {input.label}
              </label>
            </div>
          ))}
        </div>

        <hr className="border-white my-6" />

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="border border-white text-white py-2 px-6 rounded">
            PREVIOUS
          </button>
          <button className="bg-gold text-black py-2 px-6 rounded font-bold">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCAmlSetupPage;

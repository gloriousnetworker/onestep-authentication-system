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
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-white text-xs sm:text-sm">
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
        <div className="absolute flex flex-col sm:flex-row sm:right-[-60px] sm:top-10 top-[-40px] sm:gap-4 gap-3 sm:items-start items-center sm:w-auto w-full">
          {[
            { step: 1, label: "Personal Information", active: true },
            { step: 2, label: "Verify your Identity", active: false },
            { step: 3, label: "Photo Selfie with ID", active: false },
          ].map(({ step, label, active }) => (
            <div
              key={step}
              className={`flex items-center gap-2 ${
                active ? "text-white" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 ${
                  active ? "bg-gold text-black" : "bg-gray-500 text-black"
                } rounded-full flex items-center justify-center`}
              >
                {step}
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-serif">
          Complete your Profile
        </h1>
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
                className="w-full h-12 border border-white bg-gray-800 text-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <label className="absolute top-[-6px] left-3 bg-black text-sm px-1 text-gray-400">
                {input.label}
              </label>
            </div>
          ))}
        </div>

        <hr className="border-white my-6" />

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="border border-white text-white py-2 w-[48%] rounded">
            PREVIOUS
          </button>
          <button className="bg-gold text-black py-2 w-[48%] rounded font-bold">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCAmlSetupPage;

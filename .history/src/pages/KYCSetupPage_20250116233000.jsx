import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const KYCAmlSetupPage = () => {
  const [dob, setDob] = useState(null);

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Center Login Card */}
      <div className="bg-white bg-opacity-95 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col mt-12 sm:mt-24 mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="text-gray-400">&#8962;</span> {/* Home Icon */}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Home
            </span>
          </span>
          <span className="text-gray-400">{">"}</span>
          <span className="text-blue-600 cursor-pointer hover:underline">
            Profile
          </span>
          <span className="text-gray-400">{">"}</span>
          <span className="text-black font-bold">KYC and AML</span>
        </div>

        {/* Back Button */}
        <div
          className="text-sm text-gray-500 flex items-center cursor-pointer gap-1 mb-4"
          onClick={() => console.log("Back button clicked")}
        >
          <span className="text-gray-500">&#8592;</span>
          <span className="hover:underline">Back</span>
        </div>

        {/* Header */}
        <h1 className="text-black text-2xl sm:text-3xl font-bold mb-4">
          Complete your Profile
        </h1>
        <hr className="border-black mb-4" />

        {/* Step Information */}
        <h2 className="text-gray-600 text-lg font-semibold mb-2">
          Step 1: Personal Info
        </h2>

        {/* Warning Button */}
        <div className="bg-yellow-100 text-yellow-700 font-medium text-sm p-3 rounded mb-6 flex items-center gap-2">
          <span className="font-bold">⚠️</span>
          Carefully fill the form below. Please ensure to input your authentic
          information only.
        </div>

        {/* Input Forms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              FIRST NAME
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              LAST NAME
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country of Residence */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              COUNTRY OF RESIDENCE
            </label>
            <input
              type="text"
              placeholder="Enter your country of residence"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* City of Residence */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              CITY OF RESIDENCE
            </label>
            <input
              type="text"
              placeholder="Enter your city of residence"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              ADDRESS
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ZIP/Postal Code */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              ZIP/POSTAL CODE
            </label>
            <input
              type="text"
              placeholder="Enter your ZIP or postal code"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address 2 (Optional) */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              ADDRESS #2 (OPTIONAL)
            </label>
            <input
              type="text"
              placeholder="Enter additional address info"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <hr className="border-black my-6" />

        {/* Proceed Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
          PROCEED
        </button>
      </div>
    </div>
  );
};

export default KYCAmlSetupPage;

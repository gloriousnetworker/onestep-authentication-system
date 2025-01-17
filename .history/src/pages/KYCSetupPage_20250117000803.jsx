import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountSetupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Breadcrumb Navigation */}
      <div className="text-white text-sm flex items-center gap-2 justify-center mb-4">
        <span className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
          <span>🏠</span>
          <span>Home</span>
        </span>
        <span className="mx-1">{">"}</span>
        <span className="flex items-center gap-1 cursor-pointer">
          <span>Profile</span>
        </span>
        <span className="mx-1">{">"}</span>
        <span className="text-yellow-500 font-semibold">KYC and AML</span>
      </div>

      {/* Back Button */}
      <div
        className="text-white text-sm flex items-center gap-2 cursor-pointer mb-6"
        onClick={() => navigate(-1)}
      >
        <span className="text-lg">{"<"}</span>
        <span>Back</span>
      </div>

      {/* Center Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] mx-auto px-6 py-8">
        {/* Header */}
        <h1 className="text-white text-xl sm:text-2xl font-bold mb-4 font-serif">
          Complete your Profile
        </h1>
        <hr className="border-gray-700 mb-4" />

        {/* Step Info */}
        <h2 className="text-gray-400 text-base mb-4 font-medium">
          Step 1: Personal Info
        </h2>

        {/* Warning */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p className="text-sm">
            <span className="font-bold">⚠ Warning:</span> Carefully fill the form below.
            Please ensure to input your authentic information only.
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* First Name */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">FIRST NAME</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">LAST NAME</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Email */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">COUNTRY OF RESIDENCE</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* City */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">CITY OF RESIDENCE</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">ADDRESS</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Postal Code */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">ZIP/POSTAL CODE</label>
            <input
              type="text"
              name="postalCode"
              placeholder="Enter Postal Code"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full py-2 rounded mt-4">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default KY;

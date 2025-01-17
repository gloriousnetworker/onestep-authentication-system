import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const KYCAmlSetupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    address2: "", // New address input for Address #2 (optional)
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
        className="text-white text-sm flex items-center gap-2 cursor-pointer mb-6 m"
        onClick={() => navigate(-1)}
      >
        <span className="text-lg">{"<"}</span>
        <span>Back</span>
      </div>

      {/* Card and Content */}
      <div className="w-full max-w-[900px] mx-auto px-6 py-8 bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg relative">

        {/* Header */}
        <h1 className="text-white text-xl sm:text-2xl font-bold mb-4 font-serif">
          Complete your Profile
        </h1>
        <hr className="border-gray-700 mb-4" />

        

{/* Step Info (For Large Screens - Right Side) */}
<div className="hidden md:flex flex-col items-start gap-6 md:absolute md:top-1/2 md:-right-80  md:transform md:-translate-y-1/2">
  {/* Step 1 */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-yellow-500 text-yellow-500 text-sm font-semibold">
      1
    </div>
    <span className="text-gray-400 text-base font-medium">Personal Info</span>
  </div>
  {/* Connector */}
  <div className="h-8 w-1 bg-gray-500 ml-5"></div>
  {/* Step 2 */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
      2
    </div>
    <span className="text-gray-400 text-base font-medium">Verify Identity</span>
  </div>
  {/* Connector */}
  <div className="h-8 w-1 bg-gray-500 ml-5"></div>
  {/* Step 3 */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
      3
    </div>
    <span className="text-gray-400 text-base font-medium">Photo Selfie with ID</span>
  </div>
</div>

{/* Step Info (For Mobile Screens - Top) */}
<div className="flex md:hidden justify-center items-center gap-6 mb-6">
  {/* Circle 1 */}
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm font-semibold">
      1
    </div>
    <p className="text-xs text-gray-300 mt-2">Personal Info</p>
  </div>
  {/* Circle 2 */}
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
      2
    </div>
    <p className="text-xs text-gray-300 mt-2">Verify Identity</p>
  </div>
  {/* Circle 3 */}
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
      3
    </div>
    <p className="text-xs text-gray-300 mt-2">Photo Selfie with ID</p>
  </div>
</div>

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

          {/* Address #2 (Optional) */}
          <div>
            <label className="text-gray-400 text-xs block mb-1">ADDRESS #2 (Optional)</label>
            <input
              type="text"
              name="address2"
              placeholder="Enter Additional Address"
              className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-gray-200 outline-none"
              value={formData.address2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Previous and Next Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-black border border-gray-600 font-semibold w-full py-2 rounded mt-4">
            PREVIOUS
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full py-2 rounded mt-4">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCAmlSetupPage;

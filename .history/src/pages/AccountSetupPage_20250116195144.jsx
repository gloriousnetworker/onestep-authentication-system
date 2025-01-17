import React from "react";
import { useNavigate } from "react-router-dom";

const AccountSetupPage = () => {
  const navigate = useNavigate();

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
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">Setup your Account</h1>
        <p className="text-gray-400 text-sm mb-2 text-center font-serif">
          Enter your Username, Date of Birth, and Phone Number below
        </p>

        {/* Steps */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-silver text-black font-bold">1</div>
              <p className="text-gray-200">Account Setup</p>
            </div>
            <div className="w-px h-8 bg-gray-500 mx-4"></div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-500 text-white">2</div>
              <p className="text-gray-500">Setup Passcode</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mb-4" />

        {/* Username Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">USERNAME</label>
          <div className="flex items-center border border-purple-500 rounded px-3 py-2">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A11.961 11.961 0 0012 20c1.93 0 3.77-.457 5.379-1.271"
              />
            </svg>
            <span className="mx-2">|</span>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full bg-transparent text-white outline-none"
            />
          </div>
          <p className="text-red-500 mt-1 text-sm">Must be up to 8 characters and unique</p>
        </div>

        {/* Date of Birth Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">DATE OF BIRTH</label>
          <div className="flex items-center border border-purple-500 rounded px-3 py-2">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A11.961 11.961 0 0012 20c1.93 0 3.77-.457 5.379-1.271"
              />
            </svg>
            <input
              type="text"
              placeholder="Date"
              className="w-full bg-transparent text-white outline-none"
            />
          </div>

        <p<

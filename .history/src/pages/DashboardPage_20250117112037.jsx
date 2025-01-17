import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState("Your account is under verification");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleKYCStatus = () => {
    navigate("/verify-kyc");
  };

  const handleEditProfile = () => {
    navigate("/kyc-setup");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownOption = (route) => {
    navigate(route);
    setDropdownOpen(false);
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Profile Section */}
      <div className="absolute -top- left-4 sm:left-8 flex items-center gap-2 relative">
        <img
          src="/avatar.avif"
          alt="User avatar"
          className="w-16 h-16 rounded-full object-cover cursor-pointer"
          onClick={toggleDropdown}
        />
        <div className="text-white">
          <h2 className="font-semibold flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
            Anna <FaChevronDown className="text-sm" />
          </h2>
          <p className="text-sm">Account Status: Pending Verification</p>
        </div>
        {dropdownOpen && (
          <div className="absolute top-20 left-0 bg-gray-200 text-black shadow-lg rounded-lg w-48">
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
                onClick={() => handleDropdownOption("/kyc-setup")}
              >
                View Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
                onClick={() => handleDropdownOption("/password")}
              >
                Change Password
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
                onClick={() => handleDropdownOption("/biometrics-setup")}
              >
                Biometric Setup
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
                onClick={() => handleDropdownOption("/photo-verification")}
              >
                Update Profile Picture
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Notifications */}
      <div className="absolute top-4 right-20 sm:right-28 flex items-center gap-2 cursor-pointer">
        <IoIosNotifications className="text-white text-xl" />
        <span className="text-white text-sm">{notification}</span>
      </div>

      {/* Logout Button */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-red-500 text-white font-semibold px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Dashboard */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mx-auto px-4 py-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          Welcome to Your Dashboard
        </h1>

        {/* Progress Indicators */}
        <div className="flex flex-wrap justify-center items-start gap-12 mb-6">
          {["Account Setup", "Passcode Setup", "Biometric Setup", "KYC/AML Verification"].map((title, index) => (
            <div key={index} className="flex items-center w-full sm:w-auto justify-start sm:justify-center mb-4 sm:mb-0">
              <div className="bg-gray-300 text-black font-semibold w-8 h-8 flex justify-center items-center rounded-full">
                {index + 1}
              </div>
              <div className="ml-4">
                <h2 className="text-gray-200 text-sm font-bold">{title}</h2>
                <p className="text-gray-400 text-xs">Step {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Options */}
        <div className="flex flex-wrap justify-between items-center mt-8 mb-6">
          <button
            className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded mb-4 sm:mb-0"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          <button
            className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded"
            onClick={handleKYCStatus}
          >
            KYC Status
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-auto">
          <p className="mb-2">
            By using the dashboard, you agree to our <span className="text-yellow-500 underline cursor-pointer">Terms & Privacy Policy</span>
          </p>
        </div>
      </div>

      {/* Fixed Image on Dashboard */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <img
          src="/onestep.png"
          alt="OneStep Logo"
          className="w-28 sm:w-25 h-6"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default DashboardPage;

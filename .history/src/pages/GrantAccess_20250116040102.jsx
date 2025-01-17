import React from "react";

const GrantAccess = () => {
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
            className="w-24 h-11 sm:w-24 sm:h-11 rounded-full"
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
          <p className="text-sm sm:text-base text-gray-400 mb-6">@OneStepID_Bot</p>
          <p className="text-sm sm:text-base text-gray-300 mb-8">
            Authorize OneStep to send you messages on your Telegram account.
          </p>

          {/* Send Message Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantAccess;

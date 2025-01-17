import React from "react";

const NotificationPopup = ({ message, type, onClose }) => {
  // Define alert styles based on the type
  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`fixed top-4 right-4 w-[300px] sm:w-[400px] p-4 rounded-md shadow-lg transition-transform transform ${
        message ? "scale-100" : "scale-0"
      } ${typeStyles[type] || "bg-gray-500 text-white"}`}
    >
      <div className="flex justify-between items-center">
        {/* Message Content */}
        <span className="text-sm sm:text-base">{message}</span>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold hover:text-opacity-80"
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;

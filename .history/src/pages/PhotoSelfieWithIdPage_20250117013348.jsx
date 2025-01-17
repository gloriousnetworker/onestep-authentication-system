import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotoSelfieWithIDPage = () => {
  const navigate = useNavigate();
  const [selfieData, setSelfieData] = useState({
    selfieImage: "", // File upload for selfie with ID
    selfieStatus: "", // Optional status
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSelfieData({ ...selfieData, [name]: files[0] });
  };

  // Preview the image when captured or uploaded
  const handleImagePreview = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelfieData({ ...selfieData, selfieImage: reader.result });
      };
      reader.readAsDataURL(files[0]);
    }
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
        <span
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span>🏠</span>
          <span>Home</span>
        </span>
        <span className="mx-1">{">"}</span>
        <span className="flex items-center gap-1 cursor-pointer">
          <span>Profile</span>
        </span>
        <span className="mx-1">{">"}</span>
        <span className="flex items-center gap-1 cursor-pointer">
          <span>Verify Identity</span>
        </span>
        <span className="mx-1">{">"}</span>
        <span className="text-yellow-500 font-semibold">Selfie with ID</span>
      </div>

      {/* Back Button */}
      <div
        className="text-white text-sm flex items-center gap-2 cursor-pointer mb-6 lg:ml-10 lg:mt-2"
        onClick={() => navigate(-1)}
      >
        <span className="text-lg">{"<"}</span>
        <span>Back</span>
      </div>

      {/* Card and Content */}
      <div className="w-full max-w-[900px] mx-auto px-6 py-8 bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg relative">
        {/* Header */}
        <h1 className="text-white text-xl sm:text-2xl font-bold mb-4 font-serif text-center sm:text-left">
          Upload Your Selfie with ID
        </h1>

        <hr className="border-gray-700 mb-4" />

        {/* Step Info */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm font-semibold">
              1
            </div>
            <p className="text-xs text-gray-300 mt-2">Personal Info</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm font-semibold">
              2
            </div>
            <p className="text-xs text-gray-300 mt-2">Verify Identity</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm font-semibold">
              3
            </div>
            <p className="text-xs text-gray-300 mt-2">Selfie with ID</p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p className="text-sm">
            <span className="font-bold">⚠ Warning:</span> Please upload a clear selfie with your ID document (ID card, passport, etc.) visible in the photo.
          </p>
        </div>

        {/* Form */}
        <div className="mb-6">
          {/* Selfie Upload */}
          <div className="relative mb-4">
            <input
              type="file"
              name="selfieImage"
              accept="image/*"
              capture="camera"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              onChange={(e) => {
                handleFileChange(e);
                handleImagePreview(e);
              }}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              SELFIE WITH ID (Take or Upload Photo)
            </label>
          </div>
          
          {/* Image Preview */}
          {selfieData.selfieImage && (
            <div className="mb-4">
              <img
                src={selfieData.selfieImage}
                alt="Selfie Preview"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <hr className="border-gray-700 mb-4" />

        {/* Previous and Next Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-black border border-gray-600 rounded px-6 py-2 hover:bg-gray-200 focus:outline-none">
            Previous
          </button>
          <button className="bg-yellow-500 text-white border border-yellow-500 rounded px-6 py-2 hover:bg-yellow-400 focus:outline-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoSelfieWithIDPage;

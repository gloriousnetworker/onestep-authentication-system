import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyIdentityPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identityNumber: "",
    identityProof: "", // Optional - File upload for proof of identity
  });
  const [error, setError] = useState({
    identityNumber: "",
    identityProof: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear previous errors
    setError({ identityNumber: "", identityProof: "" });

    // Validation
    if (!formData.identityNumber) {
      setError((prevState) => ({
        ...prevState,
        identityNumber: "Identity Number is required",
      }));
    }

    if (!formData.identityProof) {
      setError((prevState) => ({
        ...prevState,
        identityProof: "Proof of Identity is required",
      }));
    }

    if (formData.identityNumber && formData.identityProof) {
      // After successful validation, navigate to the next page
      navigate("/photo-verification");
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
        <span className="text-yellow-500 font-semibold">Verify Identity</span>
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
          Verify Your Identity
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
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
              3
            </div>
            <p className="text-xs text-gray-300 mt-2">Photo Selfie with ID</p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p className="text-sm">
            <span className="font-bold">⚠ Warning:</span> Please carefully fill in the form below to ensure your identity is verified successfully.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Identity Number */}
            <div className="relative">
              <input
                type="text"
                name="identityNumber"
                className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
                value={formData.identityNumber}
                onChange={handleInputChange}
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
                IDENTITY NUMBER
              </label>
              {error.identityNumber && (
                <span className="text-red-500 text-xs">{error.identityNumber}</span>
              )}
            </div>

            {/* Identity Proof (File Upload) */}
            <div className="relative">
              <input
                type="file"
                name="identityProof"
                className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
                onChange={handleFileChange}
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
                PROOF OF IDENTITY (Upload File)
              </label>
              {error.identityProof && (
                <span className="text-red-500 text-xs">{error.identityProof}</span>
              )}
            </div>
          </div>

          <hr className="border-gray-700 mb-4" />

          {/* Previous and Next Buttons */}
<div className="flex gap-4 justify-center">
  <button
    className="w-1/2 bg-white text-black border border-gray-600 rounded px-6 py-2 hover:bg-gray-200 focus:outline-none"
    onClick={() => navigate(-1)} // Navigate to the previous page
  >
    Previous
  </button>
  <button
    type="submit"
    className="w-1/2 bg-yellow-500 text-white border border-yellow-500 rounded px-6 py-2 hover:bg-yellow-400 focus:outline-none"
  >
    Next
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default VerifyIdentityPage;

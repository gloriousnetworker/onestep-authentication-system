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
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation logic
  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First Name is required.";
    if (!formData.lastName) formErrors.lastName = "Last Name is required.";
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid.";
    }
    if (!formData.country) formErrors.country = "Country is required.";
    if (!formData.city) formErrors.city = "City is required.";
    if (!formData.address) formErrors.address = "Address is required.";
    if (!formData.postalCode) formErrors.postalCode = "Postal code is required.";
    if (!formData.address) formErrors.address = "Address is required.";

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setFormSubmitted(false);
      // Simulate API call or further processing
      setTimeout(() => {
        setIsLoading(false);
        setFormSubmitted(true);
        // Redirect after successful form submission
        navigate("/verify-kyc");
      }, 2000); // Simulated delay for loading
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
        <span className="text-yellow-500 font-semibold">KYC and AML</span>
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
            <span className="text-gray-400 text-base font-medium">
              Personal Info
            </span>
          </div>
          {/* Connector */}
          <div className="h-8 w-1 bg-gray-500 ml-5"></div>
          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
              2
            </div>
            <span className="text-gray-400 text-base font-medium">
              Verify Identity
            </span>
          </div>
          {/* Connector */}
          <div className="h-8 w-1 bg-gray-500 ml-5"></div>
          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 text-gray-300 text-sm font-semibold">
              3
            </div>
            <span className="text-gray-400 text-base font-medium">
              Photo Selfie with ID
            </span>
          </div>
        </div>

        {/* Step Info (For Mobile and Tablet Screens - Top) */}
        <div className="flex lg:hidden justify-center items-center gap-6 mb-6">
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
            <span className="font-bold">⚠ Warning:</span> Carefully fill the
            form below. Please ensure to input your authentic information only.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              name="firstName"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              FIRST NAME
            </label>
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              name="lastName"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              LAST NAME
            </label>
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              EMAIL ADDRESS
            </label>
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Country */}
          <div className="relative">
            <input
              type="text"
              name="country"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.country}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              COUNTRY OF RESIDENCE
            </label>
            {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* City */}
          <div className="relative">
            <input
              type="text"
              name="city"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.city}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              CITY OF RESIDENCE
            </label>
            {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
          </div>

          {/* Address */}
          <div className="relative">
            <input
              type="text"
              name="address"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.address}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              ADDRESS
            </label>
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Postal Code */}
          <div className="relative">
            <input
              type="text"
              name="postalCode"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              ZIP/POSTAL CODE
            </label>
            {errors.postalCode && <p className="text-red-500 text-xs">{errors.postalCode}</p>}
          </div>

          {/* Address #2 (Optional) */}
          <div className="relative">
            <input
              type="text"
              name="address2"
              className="peer w-full bg-transparent border border-gray-600 rounded px-3 pt-5 pb-2 text-gray-200 outline-none focus:border-blue-500"
              value={formData.address2}
              onChange={handleInputChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
              ADDRESS #2 (Optional)
            </label>
            {errors.address2 && <p className="text-red-500 text-xs">{errors.address2}</p>}
          </div>
        </div>
        <hr className="border-gray-700 mb-4" />

        {/* Previous and Next Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-black border border-gray-600 font-semibold w-full py-2 rounded mt-4">
            PREVIOUS
          </button>
          <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full py-2 rounded mt-4"
            >
              {isLoading ? "Submitting..." : "NEXT"}
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default KYCAmlSetupPage;

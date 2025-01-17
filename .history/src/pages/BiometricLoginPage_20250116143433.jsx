import React from "react";

const BiometricsLoginPage = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background.jpg')",
      }}
    >
      {/* Top Navbar */}
      <div className="absolute top-4 w-full flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            src="/avatar.avif"
            alt="User avatar for account creation"
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-white text-sm cursor-pointer">Create Account</span>
        </div>
        <div className="flex justify-center">
          <img
            src="/onestep.png"
            alt="OneStep Logo"
            className="w-28 h-6 object-contain"
            loading="lazy"
          />
        </div>
        <div
          className="text-white cursor-pointer text-xl hover:text-gray-400"
          aria-label="Close biometrics login page"
        >
          X
        </div>
      </div>

      {/* Center Login Card */}
      <div className="bg-black bg-opacity-90 border border-white border-opacity-20 rounded-xl shadow-lg w-[90%] max-w-[900px] flex flex-col justify-between mt-12 sm:mt-24 mx-auto px-4 py-6 relative">
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 mt-4 text-center font-serif">
          Login
        </h1>
        <p className="text-gray-400 text-sm mb-2 text-center font-serif">
          Access Wealth with either your OneStep Passcode, OneStep Biometrics or OneStep ID Verification
        </p>

        <h2 className="text-white text-lg font-bold mt-4 text-center font-serif">
          USE ONESTEP BIOMETRICS TO LOGIN
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Login to your Account made easy with the OneStep Biometrics
        </p>

        <h3 className="text-gray-400 text-center text-md font-semibold mb-4">
          KINDLY SELECT A METHOD BELOW
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-gray-800 text-white w-28 h-32 flex flex-col items-center justify-center rounded-lg shadow-md">
            <img
              src="/fingerprint.png"
              alt="Touch ID"
              className="w-32 h-20 mb-2"
              loading="lazy"
            />
            <span className="text-sm text-center">Touch ID</span>
          </div>
          <div className="bg-gray-800 text-white w-28 h-32 flex flex-col items-center justify-center rounded-lg shadow-md">
            <img
              src="/faceID.png"
              alt="Face ID"
              className="w-20 h-20 mb-2"
              loading="lazy"
            />
            <span className="text-sm text-center">Face ID</span>
          </div>
        </div>

        <p className="text-gray-400 text-center mb-4">
          Having trouble using OneStep Verification?
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-2 rounded mb-4 mx-auto block">
          HELP CENTRE
        </button>

        <div className="relative flex items-center mb-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 flex flex-col items-center border-r border-gray-600 sm:pr-4 mb-6 sm:mb-0">
            <h2 className="text-white font-bold mb-2 font-serif">
              Use Onestep ID to Login
            </h2>
            <p className="text-gray-400 text-center mb-4">
              Use your Onestep ID to login to your ECU Account
            </p>
            <h3 className="text-gray-400 text-center mt-4">
              Select a Messenger
            </h3>
            <div className="flex flex-wrap justify-center gap-2 my-4">
              {["google", "twitter", "tiktok", "telegram", "facebook", "pinterest", "whatsapp"].map((logo) => (
                <img
                  key={logo}
                  src={`/${logo}.png`}
                  alt={`${logo} logo`}
                  className="w-10 h-10"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="text-yellow-500 underline cursor-pointer">
              Recovery Centre
            </span>
            <p className="text-gray-400 mb-2 ml-6">Having trouble using Onestep ID Verification?</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 py-2 rounded">
              HELP CENTRE
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center sm:pl-4">
            <h2 className="text-white font-bold mb-2 font-serif">
              Use Onestep Biometrics to Login
            </h2>
            <p className="text-gray-400 text-center mb-4">
              Use your Onestep Passcode for fast and easy logins.
            </p>
            <img
              src="/passcode.png"
              alt="Passcode"
              className="w-16 h-16 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-white font-bold text-center mb-4">Passcode</h3>
            <button className="bg-[#7c3aed] hover:bg-purple-700 text-white font-semibold px-8 py-2 rounded mb-4">
              Onestep Passcode
            </button>
            <p className="text-gray-400 mb-2 ml-8">Having Trouble using Biometric Verification?</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-20 py-2 rounded">
              HELP CENTRE
            </button>
          </div>
        </div>

        {/* New Recovery Center Button */}
<button className="absolute top-24 right-0 translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 -mr-48 rounded-full mt-72 hidden sm:block">
  Recovery Center
</button>

      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          By using Login, you agree to our{" "}
          <span className="text-yellow-500 underline cursor-pointer">
            Terms & Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default BiometricsLoginPage;

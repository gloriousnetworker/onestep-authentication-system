OneStep Authentication System


Introduction
OneStep is an advanced multi-layered authentication and identity verification system designed to deliver secure and seamless access to digital platforms. The system integrates various authentication methods, such as social logins, passcodes, and biometric authentication (FaceID and TouchID) via WebAuthn technology.

Additionally, OneStep provides features like device management, KYC/AML compliance, and an auto-verification system (AVV) to safeguard user accounts against fraud, hacking, and malicious activities.

OneStep's robust ecosystem serves as the foundation for secure transactions, user verification, and fraud prevention across blockchain-integrated platforms.

Key Features
1. Social Login Integration: Use Telegram for seamless account sign-in and sign-up.
2. Passcode Creation: Users create unique, secure passcodes validated by the AVV system.
3. Biometric Authentication: Enable FaceID or TouchID authentication via WebAuthn.
4. Device Management: Register up to 5 devices for account access control.
5. Security Monitoring: Detect and respond to unauthorized activities in real-time.
6. KYC/AML Compliance: Ensure regulatory compliance with ID verification.
7. Auto-Verification System (AVV): Validate passcodes and biometric inputs automatically.
8. Single Sign-On (SSO): Use OS-IDs for seamless access across multiple dApps.

Table of Contents
1. Getting Started
2. Features Overview
3. How to Clone and Run Locally
4. Technical Details
5. Live Demo
6. Project Structure
7. Future Enhancements

Getting Started
OneStep is a responsive web application built using React.js. This README will guide you through setting up the project locally, understanding its core features, and contributing effectively.

Features Overview
Authentication Flows:

Sign in using Telegram social login and OTP verification.
Sign up with Telegram and proceed to account setup.
Account Setup:

Enter personal details like full name, date of birth (DOB), and phone number.
Create a passcode and validate its strength.
Biometric Authentication:
Mock biometric setup using WebAuthn for FaceID and fingerprint scanning.

KYC/AML Compliance:
Upload a selfie with an ID, provide government-issued ID, and track verification status.

Notification System:
Stay informed about OTP validations, KYC updates, login attempts, and security alerts.

How to Clone and Run Locally
Follow these steps to clone and run the project on your local machine:

Prerequisites
Node.js (v16 or above)
npm or yarn
Git

Steps
Clone the Repository

git clone https://github.com/gloriousnetworker/onestep-authentication-system.git
cd onestep-authentication-system
Install Dependencies

npm install
Start the Development Server

npm run dev
Open in Browser
Visit http://localhost:3000 in your web browser.

Technical Details
Framework: React.js
Styling: Tailwind CSS
State Management: React Context API
API Integration: Mock APIs for authentication and KYC validation

Live Demo
Check out the live version of OneStep here:
https://onestep-authentication-system.vercel.app/

Project Structure

/src
│
├── /components      # Reusable React components (e.g., LoginForm, KYCForm)
├── /pages           # Application pages (e.g., Login, Signup, Dashboard)
├── /styles          # Tailwind CSS configurations and global styles
├── /utils           # Utility functions and mock API calls
├── App.js           # Main entry point
└── index.js         # Application bootstrapping

Future Enhancements
Expand support for more social login providers (e.g., Google, Facebook).
Integrate real-time backend API for authentication.
Enhance security features like multi-factor authentication (MFA).
Deploy production-ready biometric authentication with WebAuthn.
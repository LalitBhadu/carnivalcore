"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter(); // Initialize useRouter


  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setAvatar(files[0]); // Use the first file from the FileList
    } else {
      setAvatar(null);
    }
  };

  const handleRegister = () => {
    console.log("Registered with", { name, password, avatar });
    toast.success(data.message || "Login sucessed");

  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image (visible only on md and up) */}
      <div className="hidden md:flex md:w-1/2 h-64 md:h-auto bg-blue-100 items-center justify-center">
        <img
          src="https://carnivalcore.com/assets/images/slideshow-banner/2.jpg"
          alt="Login Illustration"
          className="w-3/4 max-w-md"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 min-h-screen">
        <div className="w-full max-w-md space-y-6 overflow-auto max-h-[90vh] hide-scrollbar">
          <h2 className="text-3xl font-bold text-center">Forget</h2>
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Mobile</label>
              <input
                type="tel"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-[34px] text-sm"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="relative">
              <label className="block mb-1 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-[34px] text-sm"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              onClick={handleRegister}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Forget
            </button>
            <Link href="/auth" className="text-blue-600 hover:underline">
            Already have account.Login?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

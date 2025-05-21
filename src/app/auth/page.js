"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/Components/firebasedata";
import { signInWithPopup } from "firebase/auth";
import url from "@/Components/url";
import axios from "axios";

const LoginPage = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleLogin = () => {
    console.log("Login clicked", { name, password });
    toast.success(data.message || "Login sucessed");
    router.push("/");
  };

const LoginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const user = response.user;

    const userData = {
      name: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      phoneNumber: undefined,
    };

    const res = await axios.post(
      `http://localhost:5600/api/v1/user/login_with_google`,
      userData
    );

    if (res.data.success) {
      localStorage.setItem("csfuser", JSON.stringify(res.data.data));
      toast.success(res.data.message || "Login success");
      router.push("/dashboard"); 
      console.log("User logged in successfully:", res.data.data);
    } else {
      toast.error(res.data.message || "Login failed");
      console.error("Error logging in user:", res.data.message);
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Something went wrong with Google login");
  }
};


  return (
    <>
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
          <div className="w-full max-w-md space-y-6">
            <img
              src="/assets/logo.png"
              alt="Login Logo"
              className="w-1/4 max-w-md mx-auto"
            />
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <div className="flex flex-col space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <Link
                href="/auth/register"
                className="text-blue-600 hover:underline"
              >
                Register
              </Link>
              <button
                onClick={handleLogin}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
              <h2 className="text-center">or</h2>
              <button
                onClick={LoginWithGoogle}
                className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
              >
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

// Components/Common/ProtectedWrapper.js
"use client";

import { useAuth } from "@/Components/Context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"; // ✅ Install: npm i react-hot-toast


const ProtectedWrapper = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
            toast.error("Please login to access this page");
      router.push("/auth");
    }
  }, [loading, isLoggedIn, router]);

  if (loading) return null;

  return (
    <>
    {children}
      {/* {isLoggedIn ? (
        children
      ) : (
        <>
        <Modal isOpen={isModalOpen} onClose={() => router.push("/")}>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </Modal> 

        </>
      )} */}
    </>
  );
}
export default ProtectedWrapper;

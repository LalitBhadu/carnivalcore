"use client";

import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ProtectedWrapper from "../../Components/Layout/ProtectedWrapper/ProtectedWrapper";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // New state to check if it's client-side
  const [router, setRouter] = useState(null);

  useEffect(() => {
    setIsClient(true); // This ensures useRouter is used only on the client
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    confirmAlert({
      title: "Confirm Logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            localStorage.removeItem("csfuser");
            toast.success("Logout successful");
            router.push("/");
          },
        },
        {
          label: "No",
          onClick: () => {
            toast("Logout cancelled");
          },
        },
      ],
    });
  };

  if (!isClient) return null;

  return (
    <Layout>
      <ProtectedWrapper>
        <div className="flex min-h-screen">
          {/* Mobile Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-4 absolute top-6 left-2 z-50"
          >
            {isSidebarOpen ? (
              <X
                size={30}
                style={{
                  background: "red",
                  color: "white",
                  borderRadius: "30px",
                  padding: "4px",
                }}
              />
            ) : (
              <Menu size={30} />
            )}
          </button>

          {/* Sidebar */}
          <aside
            className={`bg-gray-100 fixed md:static z-40 top-0 left-0 transform transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:w-1/4 w-64 p-4
    md:h-screen overflow-y-auto`}
          >
            <ul className="space-y-4 mt-14 md:mt-0 cursor-pointer">
              <li>
                <Link
                  href="/dashboard/profile"
                  className="block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition mt-5"
                  onClick={closeSidebar}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings"
                  className="block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
                  onClick={closeSidebar}
                >
                  Settings
                </Link>
              </li>
              <li
                className="block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 md:w-3/4 p-6 bg-white ml-0 md:ml-0 mt-14 md:mt-0">
            {children}
          </main>
        </div>
      </ProtectedWrapper>
    </Layout>
  );
}

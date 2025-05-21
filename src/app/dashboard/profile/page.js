"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../page";
import { FcEditImage } from "react-icons/fc";

export default function ProfilePage() {
  const [user, setUser] = useState({ name: "", email: "", address: "" });
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("csfuser");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser({
        name: parsedData.name || "",
        email: parsedData.email || "",
        address: parsedData.address || "Not provided",
      });
      setFormData({
        name: parsedData.name || "",
        email: parsedData.email || "",
        address: parsedData.address || "Not provided",
      });
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("csfuser", JSON.stringify(formData)); // Save edited data to localStorage
    setUser(formData); // Update the UI with edited data
    setIsEditing(false); // Exit editing mode
  };

  return (
    <DashboardLayout>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          User Profile
        </h2>

        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-medium text-gray-700"> Edit Your Profile</div>
          <FcEditImage
            size={24}
            className="cursor-pointer"
            onClick={handleEditClick}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Name:</span>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-gray-900 border rounded-md p-1"
              />
            ) : (
              <span className="text-gray-900">{user.name}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-gray-900 border rounded-md p-1"
              />
            ) : (
              <span className="text-gray-900">{user.email}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Address:</span>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="text-gray-900 border rounded-md p-1"
              />
            ) : (
              <span className="text-gray-900">{user.address}</span>
            )}
          </div>

          {isEditing && (
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

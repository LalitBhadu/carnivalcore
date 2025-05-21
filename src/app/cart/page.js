"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const updateCart = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);

    toast.warning("Product Remove from Cart!");

    updateCart(updated);
  };

  const handleSendEnquiry = () => {
    const existing = JSON.parse(localStorage.getItem("enquiries")) || [];
    const newEnquiry = {
      ...formData,
      cart,
      date: new Date().toISOString(),
    };
    localStorage.setItem(
      "enquiries",
      JSON.stringify([...existing, newEnquiry])
    );
    toast.success("Enquiry sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <Layout>
      <Toaster position="top-right" />
      <div className="mt-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Cart</h2>
        {cart.length === 0 ? (
          <>
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
  <p className="text-gray-500 text-lg mb-4">Cart is empty.</p>
  <motion.img
    src="/assets/cart-5504_256.gif"
    alt="Shopping Cart Animation"
    className="w-72 h-auto rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  />
</div>

          </>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3"
              >
                <div className="flex gap-4 items-center">
                  <img src={item.primarySrc} className="w-16 h-16 rounded" />
                  <div>
                    <p className="font-medium">{item.productName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 mb-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Your Enquiry to CarnivalCore
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Enquiry Form</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSendEnquiry}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;

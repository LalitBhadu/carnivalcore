"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";


const Cart = () => {
  const [cart, setCart] = useState([]);

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

  const increment = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };

  const decrement = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  return (
    <Layout>
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        cart.map((item) => (
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
              <button onClick={() => decrement(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>{item.qty}</span>
              <button onClick={() => increment(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 px-3 py-1 bg-red-600 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    </Layout>
  );
};

export default Cart;

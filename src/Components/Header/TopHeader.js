"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaSpotify,
  FaApple,
  FaEnvelope,
} from "react-icons/fa";

export default function TopNavbar() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-IN", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setDateTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-gray-900 text-white text-xs px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>{dateTime}</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
          <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer"><FaApple /></a>
          <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        </div>
      </div>
    </>
  );
}

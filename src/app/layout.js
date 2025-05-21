"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../Components/Context/AuthContext";
import { useEffect, useState } from "react";
import { X } from "lucide-react"; // Top of the file

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Carnival Core - Global Industrial & Trade Solutions",
  description:
    "Carnival Core is your trusted partner for Agro, Apparel, Industrial Machinery, Electrical Equipment, Automobiles, Consumer Electronics and more. Explore our quality products and services for diverse industries worldwide.",
  keywords: [
    "Carnival Core",
    "industrial products",
    "agriculture equipment",
    "apparel and fashion",
    "industrial machinery",
    "electrical equipment",
    "automobile parts",
    "consumer electronics",
    "global trade",
    "manufacturing solutions",
  ],
  authors: [{ name: "Carnival Core", url: "https://carnivalcore.com" }],
  creator: "Carnival Core",
  publisher: "Carnival Core",
  themeColor: "#005c4b",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Carnival Core - Industrial & Trade Solutions",
    description:
      "Explore Carnival Core’s extensive product range including agriculture tools, industrial machinery, apparel, electrical equipment, and automobiles. Quality products with global reach.",
    url: "https://carnivalcore.com/",
    siteName: "Carnival Core",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://carnivalcore.com/assets/images/logo.png",
        width: 1400,
        height: 630,
        alt: "Carnival Core Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnival Core - Industrial & Trade Solutions",
    description:
      "Discover top-quality industrial, agricultural, apparel, and automotive products from Carnival Core. Serving global industries with trusted solutions.",
    images: ["https://carnivalcore.com/assets/images/logo.png"],
    creator: "@CarnivalCore",
  },
};

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("popupLastShown");
    const now = new Date().getTime();

    // Show modal if never shown or 24 hours have passed
    if (!lastShown || now - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      setShowModal(true);
      localStorage.setItem("popupLastShown", now.toString());

      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <AuthProvider>
          {children}
          {showModal && (
            <div className="fixed inset-0 z-[999] bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full px-6 py-5 text-center">
                {/* Close Icon */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Logo */}
                <img
                  src="https://carnivalcore.com/assets/images/logo.png"
                  alt="Carnival Core Logo"
                  className="mx-auto w-20 h-20 object-contain mb-4"
                />

                {/* Text */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome to{" "}
                  <span className="text-blue-600">Carnival Core</span>!
                </h2>
                <p className="text-sm text-gray-600">
                  Explore trusted global solutions in{" "}
                  <strong>Agro, Apparel, Electronics, and Machinery</strong>.
                </p>
              </div>
            </div>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}

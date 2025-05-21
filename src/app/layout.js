import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../Components/Context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
        url: "https://carnivalcore.com/assets/images/logo.png", // Replace with your logo image URL
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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <AuthProvider>
          {/* <Toaster position="top-right" /> */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

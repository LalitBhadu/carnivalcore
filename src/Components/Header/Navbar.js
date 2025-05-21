"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  HelpingHand,
  Users,
  Mail,
  User,
  Flame,
  HandHelping,
  ChevronDown,
  ShoppingCart,
  PackageSearch,
} from "lucide-react";
import TopHeader from "./TopHeader";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const { isLoggedIn } = useAuth();

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopHeader />

      {/* Desktop Navbar */}
      <nav
        className={`z-50 hidden sm:flex transition-all duration-300 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 w-full bg-[#11182f] shadow-md"
            : "relative"
        } justify-between items-center p-4 border-b bg-[#11182f] border-gray-700`}
        style={{ background: "black" }}
      >
        <div className="text-2xl font-bold">
          <Link href="/">
            <img
              src="https://carnivalcore.com/assets/images/logo.png"
              alt="Logo"
              className="h-13 md:h-20"
            />
          </Link>
        </div>

        <ul className="flex gap-6 text-sm text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>
        

          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
            <li>
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </li>

          <li>
            <Link href={isLoggedIn ? "/dashboard" : "/auth"}>
              <span>
                {isLoggedIn ? (
                  <>
                    {" "}
                    <User size={20} />
                  </>
                ) : (
                  "Login"
                )}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-700 z-50">
        <div className="flex justify-around py-3 text-white">
          <Link href="/" className="flex flex-col items-center text-xs">
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          <Link href="/products" className="flex flex-col items-center text-xs">
            <PackageSearch size={20} />
            <span>Product</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center text-xs">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>


          <Link
            href="/contact-us"
            className="flex flex-col items-center text-xs"
          >
            <Mail size={20} />
            <span>Contact</span>
          </Link>

          <Link
            href={isLoggedIn ? "/dashboard" : "/auth"}
            className="flex flex-col items-center text-xs"
          >
            <User size={20} />
            <span>{isLoggedIn ? "Dashboard" : "Admin"}</span>
          </Link>
        </div>
      </nav>

      {isSticky && <div className="hidden sm:block h-20"></div>}
    </>
  );
}

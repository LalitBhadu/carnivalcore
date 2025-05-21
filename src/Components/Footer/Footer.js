"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#11182f] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <Link href="/" prefetch={true}>
            <Image
              src="/assets/csf-main-logo-removebg-preview.png"
              alt="Chandan Singh Foundation"
              width={100}
              height={100}
              className="mb-2"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-300">
            Welcome to the Chandan Singh Foundation, where compassion meets
            impact.
          </p>
          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, i) => (
              <Link href="#" key={i} prefetch={true}>
                <div className="bg-white text-[#11182f] p-2 rounded-full hover:bg-red-500 hover:text-white transition">
                  <Icon size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold border-b-2 border-red-500 pb-1 w-fit">
            Services
          </h3>
          <ul className="text-sm text-gray-300 space-y-2 mt-2">
            {[
              { label: "About Us", path: "/about-us" },
              { label: "Team", path: "/team" },
              { label: "Contact Us", path: "/contact-us" },
              { label: "Our Team", path: "/team" },
              { label: "Privacy Policy", path: "/privacy-policy" },
            ].map(({ label, path }, i) => (
              <li key={i}>
                <Link href={path} prefetch={true} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold border-b-2 border-red-500 pb-1 w-fit">
            Contact
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mt-2">
            Meester Thorbeckestraat 3 <br />
            City: Tiel, Geiderland 4001 CE, Netherlands
          </p>
          <div className="mt-2 space-y-2 text-sm text-red-400">
            <p className="flex items-center gap-2">
              <FaEnvelope /> carnivalcoretrade@outlook.com
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@carnivalcore.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +31 629109047
            </p>
          </div>
        </div>

        {/* Quick Action / CTA */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold border-b-2 border-red-500 pb-1 w-fit">
            Join the Movement
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Support our causes by staying connected. Follow us and help us make
            a bigger impact.
          </p>
          <Link
            href="/get-involved"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm w-fit mt-2"
          >
            Get Involved
          </Link>
          <img src="https://carnivalcore.com/assets/images/footer-payment.png" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Carnival Core Trade LLC. All rights reserved.
      </div>
    </footer>
  );
}

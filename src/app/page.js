"use client";

import { useEffect, useState } from "react";
import WhatWeDoSection from "../Components/Home-child-components/WhatWeDoSection";
import Testimonials from "../Components/Home-child-components/Testimonials";
import StatsCounter from "../Components/Home-child-components/StatsCounter";
import NewsletterSection from "../Components/Home-child-components/NewsletterSection";
import Layout from "../Components/Layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Blogs from "./blogs/page";
import Products from "../Components/Home-child-components/products";
import Slideshow from "../Components/Home-child-components/Slideshow";
import Category from "../Components/Home-child-components/Category";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set timeout for 3 seconds to simulate loading

    return () => clearTimeout(timer);
  }, []);

  const renderLoadingCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3 mb-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-md animate-pulse"
          >
            <div className="h-32 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 mb-2"></div>
            <div className="h-4 bg-gray-300 mb-2"></div>
            <div className="h-4 bg-gray-300"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left Column: Text Content */}
              <div className="text-center md:text-left md:w-1/2 text-white ml-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Elevate Your Business
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  with Carnival Core
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                  Your Global Partner in Premium Trade & Sourcing Solutions
                </p>
                <Link href="/contact-us">
                  <p className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                    Get in Touch
                  </p>
                </Link>
              </div>

              {/* Right Column: Image */}
              <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <img
                  src="https://carnivalcore.com/assets/images/agro9.jpg"
                  alt="Meet"
                  width={500}
                  height={400}
                  className="rounded-lg mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally Render Sections */}
      {loading ? (
        renderLoadingCards() // Show loading cards
      ) : (
        <>
          {/* Sections go here */}
          <Category />
          <Slideshow />
          <Products />
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Main Image */}
            <div className="overflow-hidden rounded-lg shadow-lg mb-8 group cursor-pointer">
              <img
                src="https://carnivalcore.com/assets/images/fashion-in-netherland.jpg"
                alt="Fashion in Netherland"
                className="w-full object-cover max-h-96 transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
            </div>

            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Our Services
            </h2>

            {/* Two-column Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="overflow-hidden rounded-lg shadow-md group cursor-pointer">
                <img
                  src="https://carnivalcore.com/assets/images/slideshow-banner/banner4.jpg"
                  alt="Service Banner 1"
                  className="w-full object-cover h-64 md:h-72 transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 group-hover:brightness-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md group cursor-pointer">
                <img
                  src="https://carnivalcore.com/assets/images/slideshow-banner/banner5.jpg"
                  alt="Service Banner 2"
                  className="w-full object-cover h-64 md:h-72 transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 group-hover:brightness-110"
                />
              </div>
            </div>

            {/* Last Image */}
            <div className="overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <img
                src="https://carnivalcore.com/assets/images/containers.jpg"
                alt="Containers"
                className="w-full object-cover max-h-96 transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          </div>

          <WhatWeDoSection />
        <div className="bg-[#005c4b] text-white rounded-xl mx-auto max-w-5xl py-8 px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-y-6 mb-16 mt-10">
  <StatsCounter value="20+" label="Agro Products" />
  <StatsCounter value="15+" label="Industrial Equipment" />
  <StatsCounter value="10+" label="Home Appliances" />
  <StatsCounter value="12+" label="Fashion Garments" />
</div>

          <Testimonials />
          <NewsletterSection />
        </>
      )}
    </Layout>
  );
};

export default Home;

"use client";

import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import Testimonials from '../../Components/Home-child-components/Testimonials';
import NewsletterSection from '../../Components/Home-child-components/NewsletterSection';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const renderLoadingContent = () => {
    return (
      <div className="space-y-8">
        <div className="relative h-[300px] md:h-[400px] w-full bg-gray-300 animate-pulse">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10 animate-pulse text-center">About Us</h1>
        </div>
        <section className="bg-white text-gray-800 py-16 px-4 animate-pulse">
          <div className="max-w-4xl mx-auto text-left mb-12">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 mb-6"></div>
            <div className="h-6 bg-gray-300"></div>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index}>
                  <div className="h-6 bg-gray-300 mb-2"></div>
                  <div className="h-4 bg-gray-300"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-20 bg-gray-300 animate-pulse rounded mb-12"></div>
          <div className="h-20 bg-gray-300 animate-pulse rounded"></div>
        </section>
      </div>
    );
  };

  return (
    <Layout>
      {loading ? (
        renderLoadingContent()
      ) : (
        <>
          <div
            className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/assets/background/fun-fact-bg-image.jpg')" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">About Us</h1>
          </div>
<section className="bg-white text-gray-800 py-16 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
    {/* Left: Image */}
    <div className="md:w-1/2 w-full">
      <img
        src="https://carnivalcore.com/assets/images/office-Thorbeckestraat.jpg"
        alt="Carnival Core Office"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>

    {/* Right: Text Content */}
    <div className="md:w-1/2 w-full text-left">
      <h2 className="text-4xl font-bold mb-4">About Carnival Core Trade LLC</h2>
      <p className="text-lg mb-6">
        Carnival Core Trade LLC, established in 2015, stands as a beacon of innovation and quality in the manufacturing sector.
        Based in the vibrant region of Tiel, Geiderland, we have quickly established a reputation for excellence across multiple product categories.
        Our dedication to superior craftsmanship, customer satisfaction, and continuous improvement sets us apart in a competitive industry.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
      <p className="mb-6">
        Every product that leaves our facility is subjected to stringent quality checks to ensure it meets our rigorous standards.
        We are committed to providing products that are not only functional but also durable and reliable.
      </p>

      <h3 className="text-2xl font-semibold mb-2">Our Diverse Product Range</h3>

      <h4 className="text-xl font-semibold mt-6">Agro Products</h4>
      <p className="mb-4">
        From seeds and fertilizers to advanced farming equipment, we provide products that enhance productivity and sustainability in agriculture.
      </p>

      <h4 className="text-xl font-semibold mt-4">Men’s & Women’s Garments</h4>
      <p className="mb-4">
        Stylish and durable clothing combining fashion with comfort and affordability.
      </p>

      <h4 className="text-xl font-semibold mt-4">Machinery and Equipment</h4>
      <p className="mb-4">
        Our machinery is built to enhance operational efficiency and productivity.
      </p>

      <h4 className="text-xl font-semibold mt-4">Metal Product Repair</h4>
      <p>
        We provide expert metal repair services to restore functionality and extend product life (excluding vehicles).
      </p>
    </div>
  </div>

  {/* Testimonials */}
  <div className="mt-16">
    <Testimonials />
  </div>

  {/* Newsletter Section */}
  <div className="mt-16">
    <NewsletterSection />
  </div>
</section>

        </>
      )}
    </Layout>
  );
}

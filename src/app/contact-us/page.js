'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';

export default function ContactUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderLoadingContent = () => (
    <section className="py-16 bg-white text-gray-800 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
          <div className="h-12 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      {/* HERO BANNER */}
      <div
        className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background/fun-fact-bg-image.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
          Drop A Message
        </h1>
      </div>

      {/* CONTACT SECTION */}
      {loading ? (
        renderLoadingContent()
      ) : (
        <section className="py-16 bg-white text-gray-800 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Having any question..? contact us..</h2>
              <p className="mb-4">
                Feel free to reach out to us with any inquiries or feedback. We`re here to help!
              </p>
              <div className="space-y-3">
                <p><strong>Address:</strong><br />Meester Thorbeckestraat 3<br />City: Tiel, Geiderland 4001 CE, Netherlands</p>
                <p><strong>Phone:</strong> +31 629109047</p>
                <p><strong>Email:</strong> carnivalcoretrade@outlook.com</p>
                <div>
                  <strong>Opening Hours:</strong>
                  <ul className="ml-4 list-disc">
                    <li>Mon - Sat: 9am - 11pm</li>
                    <li>Sunday: 11am - 5pm</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <strong>Follow us:</strong> Twitter • Pinterest • Instagram • Tu
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Your Message</label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#005c4b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#004638] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

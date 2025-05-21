// components/HelpSection.js
import React from 'react';

export default function HelpSection() {
  return (
    <section className="relative bg-pattern bg-cover bg-center py-20 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">How Can You Help?</h2>
        <p className="text-sm mb-8">
          Your donation will help us save and improve lives with research, education and emergency care.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/donate"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            Donate Now
          </a>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Optional background style (if using CSS pattern instead of image) */}
      <style jsx>{`
        .bg-pattern {
          background-image: url('/assets/background/fun-fact-bg-image.jpg'); /* Replace with your background pattern */
        }
      `}</style>
    </section>
  );
}

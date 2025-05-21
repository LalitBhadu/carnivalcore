import React from 'react';

export default function NewsletterSection() {
  return (
    <section className="relative bg-gray-900">
      {/* Background Map (you can replace with map embed or static image) */}
      <div className="h-64 w-full">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=84.2%2C25.3%2C85.2%2C26.0&amp;layer=mapnik"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      {/* Newsletter Card */}
      <div className="absolute inset-x-0 top-40 flex justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-red-500 font-semibold mb-1">Newsletter</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              To get weekly & monthly news,<br /> Subscribe to our newsletter.
            </h3>
          </div>

          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your mail address"
              className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Spacer to prevent overlap */}
      <div className="h-32"></div>
    </section>
  );
}



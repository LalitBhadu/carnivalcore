'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../Components/Layout/Layout';

const blogs = [
  {
    slug: 'top-carnival-trends-2025',
    heading: 'Top Carnival Fashion Trends to Watch in 2025',
    mainContent:
      'From neon feathers to metallic bodysuits, discover what styles will dominate the carnival scene in 2025. Stay ahead of the curve with our fashion-forward predictions.',
    image: 'https://carnivalcore.com/assets/images/slideshow-banner/2.jpg',
  },
  {
    slug: 'how-to-style-carnival-core',
    heading: 'How to Style Your CarnivalCore Outfits Like a Pro',
    mainContent:
      'Looking to make heads turn this season? Check out our expert styling tips to make the most out of your CarnivalCore wardrobe.',
    image: 'https://carnivalcore.com/assets/images/product2-1.jpg',
  },
  {
    slug: 'sustainable-carnival-fashion',
    heading: 'Sustainable Fashion in the Carnival World',
    mainContent:
      'Go green and glam! Learn how CarnivalCore blends eco-friendly materials with high fashion for a better future.',
    image: 'https://carnivalcore.com/assets/images/product5.jpg',
  },
  {
    slug: 'accessories-to-elevate-your-look',
    heading: 'Accessories That Elevate Your Carnival Look Instantly',
    mainContent:
      'Feathers, glitter, visors, and more — these accessories can take your outfit from good to jaw-dropping in seconds.',
    image: 'https://carnivalcore.com/assets/images/product3-1.jpg',
  },
  {
    slug: 'backstage-carnivalcore-story',
    heading: 'Behind the Scenes at CarnivalCore',
    mainContent:
      'Go backstage with the CarnivalCore team and discover how our collections come to life — from concept to catwalk.',
    image: 'https://carnivalcore.com/assets/images/product7.jpg',
  },
  {
    slug: 'must-have-2025-collection',
    heading: 'Must-Have Pieces from Our 2025 Collection',
    mainContent:
      'Our latest collection is here! Explore bold new arrivals, statement prints, and limited-edition pieces you can’t miss.',
    image: 'https://carnivalcore.com/assets/images/product13.jpg',
  },
];

const BlogList = () => {
  const router = useRouter();

  const handleBlogSelect = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <Layout>
      {/* Banner */}
      <div
        className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/background/fun-fact-bg-image.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <h1 className="relative text-white text-2xl md:text-5xl font-bold z-10">
          CarnivalCore Blogs
        </h1>
      </div>

      <div className="bg-white px-6 py-10">
        <div className="mb-6">
          <h2 className="text-3xl text-center font-bold text-black">Our Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((item, index) => (
            <div
              key={index}
              onClick={() => handleBlogSelect(item.slug)}
              className="bg-gray-100 hover:bg-gray-200 transition duration-200 cursor-pointer rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.mainContent.substring(0, 130)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogList;

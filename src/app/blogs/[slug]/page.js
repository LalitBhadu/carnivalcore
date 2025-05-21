"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Layout from "../../../Components/Layout/Layout";

// Local static blog array
const blogs = [
  {
    slug: "top-carnival-trends-2025",
    heading: "Top Carnival Fashion Trends to Watch in 2025",
    mainContent:
      "From neon feathers to metallic bodysuits, discover what styles will dominate the carnival scene in 2025. Stay ahead of the curve with our fashion-forward predictions.",
    image: "https://carnivalcore.com/assets/images/slideshow-banner/2.jpg",
  },
  {
    slug: "how-to-style-carnival-core",
    heading: "How to Style Your CarnivalCore Outfits Like a Pro",
    mainContent:
      "Looking to make heads turn this season? Check out our expert styling tips to make the most out of your CarnivalCore wardrobe.",
    image: "https://carnivalcore.com/assets/images/product2-1.jpg",
  },
  {
    slug: "sustainable-carnival-fashion",
    heading: "Sustainable Fashion in the Carnival World",
    mainContent:
      "Go green and glam! Learn how CarnivalCore blends eco-friendly materials with high fashion for a better future.",
    image: "https://carnivalcore.com/assets/images/product5.jpg",
  },
  {
    slug: "accessories-to-elevate-your-look",
    heading: "Accessories That Elevate Your Carnival Look Instantly",
    mainContent:
      "Feathers, glitter, visors, and more — these accessories can take your outfit from good to jaw-dropping in seconds.",
    image: "https://carnivalcore.com/assets/images/product3-1.jpg",
  },
  {
    slug: "backstage-carnivalcore-story",
    heading: "Behind the Scenes at CarnivalCore",
    mainContent:
      "Go backstage with the CarnivalCore team and discover how our collections come to life — from concept to catwalk.",
    image: "https://carnivalcore.com/assets/images/product7.jpg",
  },
  {
    slug: "must-have-2025-collection",
    heading: "Must-Have Pieces from Our 2025 Collection",
    mainContent:
      "Our latest collection is here! Explore bold new arrivals, statement prints, and limited-edition pieces you can’t miss.",
    image: "https://carnivalcore.com/assets/images/product13.jpg",
  },
];

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      const selectedBlog = blogs.find((item) => item.slug === slug);
      setBlog(selectedBlog);
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center">Blog not found.</h1>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">{blog.heading}</h1>

        <img
          src={blog.image}
          alt={blog.heading}
          className="w-full h-auto object-cover rounded-lg mb-6"
        />

        <p className="text-lg text-gray-700 whitespace-pre-line mb-6">
          {blog.mainContent}
        </p>
      </div>
    </Layout>
  );
};

export default BlogPage;

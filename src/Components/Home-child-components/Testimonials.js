"use client";

import { useState, useEffect } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Fashion Designer",
      text: "CarnivalCore helped me connect with the best fashion trends worldwide. Their curated collections are stunning!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Carter",
      role: "Stylist",
      text: "I love how easy it is to find unique pieces on CarnivalCore. Their platform is sleek and user-friendly.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Model",
      text: "The quality and variety of products on CarnivalCore are unmatched. A must-visit site for fashion lovers.",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Fashion Designer",
      text: "CarnivalCore helped me connect with the best fashion trends worldwide. Their curated collections are stunning!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Carter",
      role: "Stylist",
      text: "I love how easy it is to find unique pieces on CarnivalCore. Their platform is sleek and user-friendly.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Model",
      text: "The quality and variety of products on CarnivalCore are unmatched. A must-visit site for fashion lovers.",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Michael Scott",
      role: "Creative Director",
      text: "Working with CarnivalCore gave our brand a fresh, modern look. Their attention to detail is incredible.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Olivia Brown",
      role: "Blogger",
      text: "CarnivalCore is my go-to platform for discovering emerging designers and exclusive styles.",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "David Lee",
      role: "Photographer",
      text: "The community and network on CarnivalCore have opened many doors for me in the fashion industry.",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Sophia Turner",
      role: "Makeup Artist",
      text: "I trust CarnivalCore for trends that keep my clients looking fresh and unique.",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      name: "Liam Johnson",
      role: "Fashion Consultant",
      text: "Their curated collections help me recommend the best pieces to my clients with confidence.",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { name, role, text, img } = testimonials[currentIndex];

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 bg-white text-center">
      <div className="mb-12">
        <p className="text-[#f44e28] font-semibold uppercase tracking-wide mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          What Our Clients Say
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
        <p className="text-gray-700 mb-8 italic">&quot;{text}&quot;</p>

        <img
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-[#f44e28] object-cover mb-4"
        />
        <h4 className="text-gray-900 font-semibold text-xl">{name}</h4>
        <p className="text-[#f44e28] text-sm uppercase tracking-wide mb-6">
          {role}
        </p>

        <div className="flex justify-center gap-10">
          <button
            onClick={handlePrev}
            className="text-[#00b894] text-3xl hover:scale-125 transition"
            aria-label="Previous Testimonial"
          >
            <IoArrowBackOutline />
          </button>
          <button
            onClick={handleNext}
            className="text-[#00b894] text-3xl hover:scale-125 transition"
            aria-label="Next Testimonial"
          >
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </section>
  );
}

// components/ProductCategoriesSlider.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const categories = [
  {
    title: 'Agro & Agriculture',
    image: 'https://carnivalcore.com/assets/images/agro4.jpg',
  },
  {
    title: 'Apparel & Fashion',
    image: 'https://carnivalcore.com/assets/images/product3-1.jpg',
  },
  {
    title: 'Industrial Machinery',
    image: 'https://carnivalcore.com/assets/images/slideshow-banner/2.jpg',
  },
  {
    title: 'Electrical Equipment',
    image: 'https://carnivalcore.com/assets/images/product7.jpg',
  },
  {
    title: 'Automobile & Motorcycle',
    image: 'https://carnivalcore.com/assets/images/product23.jpg',
  },
  {
    title: 'Consumer Electronics',
    image: 'https://carnivalcore.com/assets/images/product25.jpg',
  },
  {
    title: 'Home & Garden',
    image: 'https://carnivalcore.com/assets/images/agro6.jpg',
  },
];

export default function ProductCategoriesSlider() {
  return (
    <div className="w-full px-4 py-12 bg-[#f9f9f9]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#005c4b]">
        Explore Our Top Categories
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2000 }}
        loop
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <Link href="/products">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-20 h-20 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <span className="bg-white text-[#005c4b] font-semibold px-4 py-2 rounded-full text-sm md:text-base shadow-md">
                    {cat.title}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

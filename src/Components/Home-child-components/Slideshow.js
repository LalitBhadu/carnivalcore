'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://carnivalcore.com/assets/images/slideshow-banner/banner7.jpg',
    title: 'Designer Swim & Beachwear',
  },
  {
    image: 'https://carnivalcore.com/assets/images/agro9.jpg',
    title: 'Dry Fruits',
  },
  {
    image: 'https://carnivalcore.com/assets/images/slideshow-banner/2.jpg',
    title: 'Machinery and Equipment',
  },
  {
    image: 'https://carnivalcore.com/assets/images/product9.jpg',
    title: 'Metal Product Repair',
  },
  {
    image: 'https://carnivalcore.com/assets/images/product7.jpg',
    title: 'Automobiles vehicles & Motorcycles',
  },
];

export default function Slideshow() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 500 }} // Half-second delay
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[450px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

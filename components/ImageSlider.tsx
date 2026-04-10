"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importación de estilos base de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

const images: SliderImage[] = [
  { id: 1, src: '/image-1.jpg', alt: 'Proyecto 1' },
  { id: 2, src: '/image-2.jpg', alt: 'Proyecto 2' },
  { id: 3, src: '/image-3.jpg', alt: 'Proyecto 3' },
  { id: 4, src: '/image-4.jpg', alt: 'Proyecto 4' },
  { id: 5, src: '/image-5.jpg', alt: 'Proyecto 5' },
  { id: 6, src: '/image-6.jpg', alt: 'Proyecto 6' },
  { id: 7, src: '/image-7.jpg', alt: 'Proyecto 7' },
  { id: 8, src: '/image-8.jpg', alt: 'Proyecto 8' },
];

const ProjectSlider: React.FC = () => {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container w-3/4 mx-auto px-5 md:mb-24">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          
          
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className=" overflow-hidden shadow-lg"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;

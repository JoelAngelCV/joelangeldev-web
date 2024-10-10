"use client"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { skillsData } from '@/data';
import Image from "next/image";

const SkillsList = () => {
  return (
    <Swiper
      breakpoints={{
          320: {
              slidesPerView: 3,
              spaceBetween: 15
          },
          768: {
              slidesPerView: 6,
              spaceBetween: 15
          },
          1024: {
              slidesPerView: 8,
              spaceBetween: 15
          }
      }}
      freeMode={true}
      pagination={{
          clickable: true
      }}
      modules={[Pagination]}
      className="h-[200px] w-full"
    >

      {skillsData.map((item, index) => (
        <SwiperSlide key={index} >
          <div className="text-center p-2 w-24 rounded-lg mx-auto mt-10
                      bg-[rgba(65,47,123,0.19)] sm:flex-col group cursor-pointer 
                        shadow-sm shadow-black hover:shadow-secondary
                      hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
                      hover:border-secondary">
            <Image className="my-1 mx-auto" src={item.image} alt={item.alt} height={60} width={60}/>
            <h3 className="mx-auto text-lg" >{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SkillsList

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const achievementImages = [
  {
    src: "/images/achievement/Group-40163.png",
    alt: "partner-item",
  },
  {
    src: "/images/achievement/Group-40130.png",
    alt: "partner-item",
  },
  {
    src: "/images/achievement/Group-40160.png",
    alt: "partner-item",
  },
  {
    src: "/images/achievement/Group-40161.png",
    alt: "partner-item",
  },
  {
    src: "/images/achievement/Group-40163-1.png",
    alt: "partner-item",
  },
];

const duplicatedImages = [
  ...achievementImages,
  ...achievementImages,
  ...achievementImages,
];

export default function AchievementSection() {
  return (
    <section className="bg-[#adc2e6] border-y-2">
      <style>{`
        .achievement-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      <div className="flex flex-row items-center max-[750px]:flex-col max-[750px]:mt-[50px] max-[750px]:mb-[70px] max-[750px]:overflow-hidden">
        <div className="flex-[0_0_auto] w-[64.5vw] -ml-[4%] max-[750px]:w-[160%] max-[750px]:ml-0 max-[750px]:order-2">
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            slidesPerView="auto"
            spaceBetween={120}
            grabCursor={true}
            className="achievement-swiper"
          >
            {duplicatedImages.map((img, index) => (
              <SwiperSlide key={index} style={{ width: "161.6px" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={162}
                  height={94}
                  className="w-full h-auto"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex-[0_0_auto] w-[38.1vw] py-[70px] pr-[195px] pl-[50px] bg-[#ADC2E6] border-l-2 border-[#222] z-10 min-[768px]:max-[1367px]:pr-[70px] max-[750px]:w-full max-[750px]:px-[15px] max-[750px]:py-0 max-[750px]:order-1 max-[750px]:border-l-0 max-[750px]:mb-[30px]">
          <div className="mb-[15px]">
            <p className="text-[#513B6A] text-[14px] font-medium leading-normal m-0 text-right max-[750px]:text-[16px] max-[750px]:text-center">
              OUR ACHIEVEMENTS
            </p>
          </div>
          <div>
            <p className="text-[#222] text-[36px] font-normal leading-11.25 m-0 text-right max-[750px]:text-[24px] max-[750px]:leading-[28px] max-[750px]:text-center">
              A Legacy of Excellence: Our Journey of Achievements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

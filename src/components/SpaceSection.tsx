"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  { src: "/images/space/K65C5474-scaled.webp", alt: "Studio space 1" },
  { src: "/images/space/K65C5783-scaled.webp", alt: "Studio space 2" },
  { src: "/images/space/K65C6068-scaled.webp", alt: "Studio space 3" },
  { src: "/images/space/K65C7243-scaled.webp", alt: "Studio space 4" },
  { src: "/images/space/K65C7343-scaled.webp", alt: "Studio space 5" },
  {
    src: "/images/space/eeeqhfqzu3t14ddvxkkl-scaled.webp",
    alt: "Studio space 6",
  },
  {
    src: "/images/space/grzuzsktcxecllzxxr6r-scaled.webp",
    alt: "Studio space 7",
  },
  {
    src: "/images/space/rgqymvpzefbfms03pbfj-scaled.webp",
    alt: "Studio space 8",
  },
];

export default function SpaceSection() {
  return (
    <section className="flex flex-col items-center pt-[100px] pb-[120px] px-0 max-[750px]:pt-[50px] max-[750px]:pb-[30px] max-[750px]:px-4 border-b-2 border-[#222222]">
      <div className="max-w-[1140px] mb-[25px] text-center">
        <h2 className="text-[#222222] text-[36px] font-normal leading-[45px] max-[750px]:text-[24px] max-[750px]:leading-[28px]">
          Our Space - Where Ideas Take Flight
        </h2>
      </div>

      <div className="max-w-[400px] mx-auto text-center text-[#222222] text-[16px] font-light leading-[24px] mb-[50px] max-[750px]:text-[14px] max-[750px]:leading-[17px] max-[750px]:mb-[30px]">
        Step into BDD’s Agency—where strategy meets imagination. A space
        designed for collaboration, innovation, and bringing bold ideas to life.
      </div>

      <div className="max-w-[1140px] w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            751: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
          }}
          className="space-carousel"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <figure className="px-[7px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={360}
                  height={240}
                  className="w-full h-auto rounded-none"
                  loading="lazy"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .space-carousel .swiper-pagination {
          position: relative;
          margin-top: 15px;
          --swiper-pagination-bullet-horizontal-gap: 6px;
        }
        .space-carousel .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d0d5dd;
          opacity: 0.85;
          margin: 0 28px;
          transition:
            background 0.3s,
            opacity 0.3s;
        }
        .space-carousel .swiper-pagination-bullet-active {
          background: #222222;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

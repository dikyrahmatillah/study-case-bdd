"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  {
    src: "/images/studio/rpjytqsehhtnzfuubk5h-scaled.webp",
    alt: "rpjytqsehhtnzfuubk5h",
  },
  {
    src: "/images/studio/ai30bdaygyygklwd0qzo-scaled.webp",
    alt: "ai30bdaygyygklwd0qzo",
  },
  {
    src: "/images/studio/hszihff55j6xx2lriyly-scaled.webp",
    alt: "hszihff55j6xx2lriyly",
  },
  {
    src: "/images/studio/kqczncp8weskziezifev-scaled.webp",
    alt: "kqczncp8weskziezifev",
  },
  {
    src: "/images/studio/lynpf4051tpbo6imi2jb-scaled.webp",
    alt: "lynpf4051tpbo6imi2jb",
  },
  {
    src: "/images/studio/m3hibq7thfioruqzkbrk-scaled.webp",
    alt: "m3hibq7thfioruqzkbrk",
  },
  {
    src: "/images/studio/m5r9ehqcse4ryvnxyybj-scaled.webp",
    alt: "m5r9ehqcse4ryvnxyybj",
  },
  {
    src: "/images/studio/owfdizawyrmrrzenlpf6-scaled.webp",
    alt: "owfdizawyrmrrzenlpf6",
  },
  {
    src: "/images/studio/vh4optmciqrjpqm2eyc2-scaled.webp",
    alt: "vh4optmciqrjpqm2eyc2",
  },
  {
    src: "/images/studio/wzbisivbh2k6sqiejtes-scaled.webp",
    alt: "wzbisivbh2k6sqiejtes",
  },
];

export default function StudioSection() {
  return (
    <section className="flex flex-col items-center pt-[100px] pb-[120px] px-0 max-[750px]:pt-[50px] max-[750px]:pb-[30px] max-[750px]:px-4 border-b-2 border-[#222222]">
      <div className="max-w-[1140px] mb-[25px] text-center">
        <h2 className="text-[#222222] text-[36px] font-normal leading-[45px] max-[750px]:text-[24px] max-[750px]:leading-[28px]">
          Our Live Studio – Lights, Camera, Conversion!
        </h2>
      </div>

      <div className="max-w-[450px] mx-auto text-center text-[#222222] text-[16px] font-light leading-[24px] mb-[50px] max-[750px]:text-[15px] max-[750px]:leading-[22px] max-[750px]:mb-[30px]">
        BDD&apos;s state-of-the-art studio is built for high-impact live
        streaming and content production. From brands to creators, we turn every
        session into a performance that sells.
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
            },
            751: {
              slidesPerView: 3,
            },
          }}
          speed={500}
          className="studio-carousel"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <figure className="px-[7px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={356}
                  height={475}
                  className="w-full h-auto rounded-none"
                  loading="lazy"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .studio-carousel .swiper-pagination {
          position: relative;
          margin-top: 13px;
          --swiper-pagination-bullet-horizontal-gap: 6px;
        }
        .studio-carousel .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d0d5dd;
          opacity: 0.85;
          transition:
            background 0.3s,
            opacity 0.3s;
        }
        .studio-carousel .swiper-pagination-bullet-active {
          background: #222222;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

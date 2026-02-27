"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";

const tabs = [
  { id: "Fashion", label: "Fashion" },
  { id: "FnB", label: "FnB" },
  { id: "Beauty", label: "Beauty" },
  { id: "Lifestyle", label: "Lifestyle" },
  { id: "Product_and_Services", label: "Startup & Other" },
  { id: "Corporate", label: "FMCGs & Corporations" },
];

const clientData: Record<string, { src: string; alt: string }[]> = {
  Fashion: [
    { src: "/images/client/Property-1Hoops.png", alt: "fashion-item" },
    { src: "/images/client/Property-1M231.png", alt: "fashion-item" },
    { src: "/images/client/Property-1calla.png", alt: "fashion-item" },
    { src: "/images/client/Property-1love-fair.png", alt: "fashion-item" },
    { src: "/images/client/Property-1cottonink.png", alt: "fashion-item" },
    { src: "/images/client/Property-1eiger.png", alt: "fashion-item" },
    { src: "/images/client/Property-1MKS-1.png", alt: "fashion-item" },
    { src: "/images/client/Property-1Spotec.png", alt: "fashion-item" },
    { src: "/images/client/Property-1brodo.png", alt: "fashion-item" },
    { src: "/images/client/Property-1Jiniso.png", alt: "fashion-item" },
    { src: "/images/client/Property-1dauky.png", alt: "fashion-item" },
    { src: "/images/client/Property-1elzatta.png", alt: "fashion-item" },
    { src: "/images/client/Property-1mayoutfit.png", alt: "fashion-item" },
    { src: "/images/client/Property-1Viola.png", alt: "fashion-item" },
    { src: "/images/client/Property-1Ripcurl.png", alt: "fashion-item" },
    { src: "/images/client/Property-1NCR.png", alt: "fashion-item" },
    { src: "/images/client/Property-1CRSL.png", alt: "fashion-item" },
    { src: "/images/client/Property-1Sophie-Martin.png", alt: "fashion-item" },
    { src: "/images/client/Property-1kalibre.png", alt: "fashion-item" },
  ],
  FnB: [
    { src: "/images/client/Property-1Sukha.png", alt: "fnb-item" },
    { src: "/images/client/Property-1Holycow.png", alt: "fnb-item" },
    { src: "/images/client/Property-1Richeese.png", alt: "fnb-item" },
    { src: "/images/client/Property-1Boca-Rica.png", alt: "fnb-item" },
    { src: "/images/client/Property-1Primaflakes.png", alt: "fnb-item" },
  ],
  Beauty: [
    { src: "/images/client/Property-1Npure.png", alt: "beauty-item" },
    { src: "/images/client/Property-1Studio-Tropik.png", alt: "beauty-item" },
    { src: "/images/client/Property-1ESQA.png", alt: "beauty-item" },
    { src: "/images/client/Property-1shinzui.png", alt: "beauty-item" },
    { src: "/images/client/Property-1evangeline.png", alt: "beauty-item" },
    { src: "/images/client/Property-1HMNS.png", alt: "beauty-item" },
    { src: "/images/client/Property-1Kitshy.png", alt: "beauty-item" },
    { src: "/images/client/Property-1Kiva.png", alt: "beauty-item" },
    { src: "/images/client/Property-1dear-me-beauty.png", alt: "beauty-item" },
    { src: "/images/client/Property-1rose-all-day.png", alt: "beauty-item" },
    { src: "/images/client/Property-1elsheskin.png", alt: "beauty-item" },
    { src: "/images/client/Property-1hayyu-clinic.png", alt: "beauty-item" },
    { src: "/images/client/Property-1nadifa-clinic.png", alt: "beauty-item" },
    { src: "/images/client/Property-1layr.png", alt: "beauty-item" },
    { src: "/images/client/Property-1fordive.png", alt: "beauty-item" },
    { src: "/images/client/Property-1emina.png", alt: "beauty-item" },
    { src: "/images/client/Property-1BG-Skin.png", alt: "beauty-item" },
  ],
  Lifestyle: [
    { src: "/images/client/Property-1Domibed.png", alt: "lifestyle-item" },
    {
      src: "/images/client/Property-1UBS-lifestyle.png",
      alt: "lifestyle-item",
    },
    { src: "/images/client/Property-1Desty.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Lotus-archi.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Mom-Uung.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1mama-Bear.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Moro.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Eyesight.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Satu-momen.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Digimo.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1infarm.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Seolmi.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Slimsure.png", alt: "lifestyle-item" },
    { src: "/images/client/Property-1Moell.png", alt: "lifestyle-item" },
  ],
  Product_and_Services: [
    {
      src: "/images/client/Property-1Domibed.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Prosleep.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Hawkeye.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1kasanoa.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1UBS-lifestyle.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Deltomed.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Lotus-archi.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Satu-momen.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Ivory-Bridal.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1mahatex.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Octopus.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Eyesight.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1NP-Cunsult.png",
      alt: "product_services-item",
    },
    {
      src: "/images/client/Property-1Digitravel.png",
      alt: "product_services-item",
    },
  ],
  Corporate: [
    { src: "/images/client/Property-1Axa.png", alt: "corporate-item" },
    { src: "/images/client/Property-1UNHCR.png", alt: "corporate-item" },
    { src: "/images/client/Property-1IDX.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Logitech.png", alt: "corporate-item" },
    { src: "/images/client/Property-1tokocrypto.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Gowork.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Jobstreet.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Grab.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Djarum.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Sidomuncul.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Grand-duta.png", alt: "corporate-item" },
    {
      src: "/images/client/Property-1Sido-muncul-natural.png",
      alt: "corporate-item",
    },
    { src: "/images/client/Property-1deltomedd.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Amoda.png", alt: "corporate-item" },
    { src: "/images/client/Property-1DNVB.png", alt: "corporate-item" },
    { src: "/images/client/Property-1Tsurvey.png", alt: "corporate-item" },
    { src: "/images/client/Property-1NPC-office.png", alt: "corporate-item" },
    {
      src: "/images/client/Property-1Kantor-Gunawa.png",
      alt: "corporate-item",
    },
  ],
};

function ClientSlider({ items }: { items: { src: string; alt: string }[] }) {
  const shouldLoop = items.length > 6;

  return (
    <Swiper
      modules={[FreeMode, Autoplay]}
      slidesPerView="auto"
      spaceBetween={0}
      freeMode={{
        enabled: true,
        momentum: true,
      }}
      loop={shouldLoop}
      speed={5000}
      autoplay={
        shouldLoop
          ? {
              delay: 0,
              disableOnInteraction: false,
            }
          : false
      }
      className="client-slider"
      wrapperClass={`swiper-wrapper ${!shouldLoop ? "!justify-center" : ""}`}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="w-auto!">
          <Image
            src={item.src}
            alt={item.alt}
            width={161}
            height={80}
            className="object-contain"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function ClientSection() {
  const [activeTab, setActiveTab] = useState("Fashion");
  const tabsContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeEl = tabsContainerRef.current.querySelector(
        '[data-active="true"]',
      );
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeTab]);

  return (
    <section
      className="
        mx-0 border-y-2 border-[#222] bg-white rounded-none
        md:mx-12.5 md:my-5 md:mb-10 md:border-2 md:rounded-[20px]
      "
    >
      <div className="mt-7.5 mb-3.25 md:mt-17.5 md:mb-7.5">
        <div className="text-center">
          <h4 className="text-[#222] text-[24px] font-normal leading-8 m-0">
            Over <span className="text-[#33B8A5] font-semibold">800+</span>{" "}
            Business growing with Boleh Dicoba Digital
          </h4>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <ul
          ref={tabsContainerRef}
          className="
            flex justify-start md:justify-center
            overflow-x-auto overflow-y-hidden flex-nowrap
            px-3.75 md:px-0
            mb-7.5 md:mb-12.5
            border-b-0
            scrollbar-hide
          "
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="shrink-0">
              <button
                data-active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 text-[18px] leading-6 bg-transparent border-0 cursor-pointer
                  transition-colors whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "text-[#4D7BC8] font-medium border-b-2 border-[#4D7BC8]"
                      : "text-[#999] font-light hover:text-[#666]"
                  }
                `}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          className="
            mx-0 px-3.75 mb-7.5
            md:mx-[-5%] md:px-0 md:mb-17.5
          "
        >
          {clientData[activeTab] && (
            <ClientSlider key={activeTab} items={clientData[activeTab]} />
          )}
        </div>
      </div>
    </section>
  );
}

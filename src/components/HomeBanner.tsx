"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="hidden md:flex flex-row justify-between py-30 px-15 mt-[90px]">
        <div className="relative shrink-0 w-[19.306vw]">
          <Image
            src="/images/Group-40451-1.png"
            alt="home-banner-desktop-left"
            width={400}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="relative shrink-0 w-[18.819vw]">
          <Image
            src="/images/Group-40452-1.png"
            alt="home-banner-desktop-right"
            width={400}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className="
          relative mx-auto flex flex-col items-center justify-center
          px-[15px] pt-25 pb-10 bg-[#F7F4F2] max-w-none
          md:absolute md:inset-0 md:mt-40 md:mb-0 md:px-0 md:pt-0 md:pb-0 md:bg-transparent md:max-w-[690px]
        "
      >
        <div className="mb-[15px] md:mb-0">
          <h6
            className="
              text-[#513B6A] text-center font-sans text-[16px] md:text-[18px]
              font-medium leading-normal md:mt-2 md:mb-4
              m-0
            "
          >
            GROW WITH US
          </h6>
        </div>

        <div className="md:mb-0">
          <h1
            className="
              text-[#222] text-center text-[36px] leading-[38px]
              md:text-[64px]  md:leading-18 lg:md:leading-20
              font-semibold
              md:mt-2 md:mb-4
            "
          >
            Expand your brand through measurable Digital Strategies
          </h1>
        </div>

        <div className="mb-[30px] md:mb-[50px]">
          <p
            className="
              text-[#222] text-center text-[14px] md:text-[18px]
              font-light leading-4.5 md:leading-5.5
              m-0  mt-2 mb-4
            "
          >
            At BDD, we are players in the integrated digital marketing game,
            devoted to the pursuit of collective sustainable growth that ensures
            lasting success. Our mission is to elevate your business to new
            heights by exploring actionable possibilities.
          </p>
        </div>

        <div>
          <Link
            href="#"
            className="
              inline-flex flex-row items-center gap-[15px]
              px-5 py-3 border-2 border-[#222] rounded-lg
              text-[#222] font-[500] text-base
              bg-[#ffb14c]
              transition-all duration-200 ease-in-out
              hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]
              w-fit
            "
          >
            Get to Know Us!
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

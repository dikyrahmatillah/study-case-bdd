"use client";

import { useState } from "react";
import Image from "next/image";

type ProgramItem = {
  icon: string;
  title: string;
  badge?: string;
  paragraphs: string[];
  link: string;
};

const programs: ProgramItem[] = [
  {
    icon: "/images/programs/Group-40249.png",
    title: "Events",
    badge: "NEW!",
    paragraphs: [
      "As one of the players in the industry, being dexterous and adaptive are keys. Generating and expanding networks has become one of our values, as lists of events and collaborations from our notable media and partners are displayed",
    ],
    link: "https://bolehdicoba.com/program/events/",
  },
  {
    icon: "/images/programs/Group-40251.png",
    title: "Breakfast Club",
    paragraphs: [
      "\u201cGOOD FOOD ENDS WITH GOOD TALK\u201d - Geoffrey Neighor",
      "We bring you one of the most relaxed yet productive sharing sessions during breakfast time. Curated and tasteful. Two words that would best describe this monthly program, a set of two-hour discussion with our selected group of guest lists.",
      "No matter what you say over a cup of coffee and any preferred choice of croissants, it might lead to something bigger: network and collaboration.",
    ],
    link: "https://bolehdicoba.com/program/breakfast-club/",
  },
  {
    icon: "/images/programs/Group-40252-1.png",
    title: "Bulletin Report by BDD",
    paragraphs: [
      "Throughout our journey in the industry since its establishment in 2017, we have encountered numerous challenges and collaborated with brands from various industries. As your growth partner, one of our main sources of satisfaction is acknowledgement that brands we work with are able to create and achieve the desired results.",
      "We decided to share our two-cents in order to assist and give several trends and insights for business owners in understanding the industry better during a particular period of time.",
    ],
    link: "https://bolehdicoba.com/program/bulletin/",
  },
];

export default function OurProgramSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F4F2] border-b-2 border-[#222222]">
      <div
        className="mx-auto my-12.5 flex max-w-none flex-col items-center gap-7.5 px-3.75
        md:my-25 md:max-w-285 md:flex-row md:px-0
        md:max-xl:justify-center"
      >
        <div className="md:max-xl:w-[40.517vw] md:max-xl:flex-none">
          <div className="mb-4">
            <p className="m-0 text-center text-base font-medium leading-normal text-[#513B6A] md:text-left md:text-sm">
              OUR PROGRAM
            </p>
          </div>

          <div className="mb-3.75 md:mb-5">
            <h4 className="m-0 text-center text-2xl leading-7 font-normal text-[#222] md:text-left md:text-4xl md:leading-normal">
              We Offer More Than Meets The Eye
            </h4>
          </div>

          <div className="mb-7.5">
            <p className="m-0 text-center text-sm font-light leading-normal text-[#222] md:text-left md:text-base">
              As your go-to digital marketing partner to support your brand
              business, we manage to provide integrated programmes within the
              company to resonate our values externally, as we keep on spreading
              our wings to influence the industry.
            </p>
          </div>

          <div className="relative mb-7.5 w-full flex-none overflow-hidden md:hidden">
            <Image
              src="/images/programs/Group-40343-8.png"
              alt="program-us"
              width={510}
              height={510}
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col gap-3.75">
            {programs.map((program, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border-2 border-black"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center bg-transparent p-2.5 text-left shadow-none md:p-3.75"
                  >
                    <Image
                      src={program.icon}
                      alt="accordion-image"
                      width={44}
                      height={44}
                      className="h-11 w-auto"
                    />
                    <span className="ml-2 text-base font-medium leading-normal text-[#222] md:ml-3.75 md:text-xl">
                      {program.title}
                    </span>
                    {program.badge && (
                      <span className="ml-2 rounded-sm bg-[#FC5649] px-1.25 py-1 text-xs font-semibold leading-normal text-white md:ml-2.5 md:rounded-md md:px-2.5 md:py-1.5 md:text-base">
                        {program.badge}
                      </span>
                    )}
                    <span
                      className="ml-auto flex h-7.5 w-7.5 flex-none items-center justify-center rounded-full border-2 border-[#222] text-lg font-bold text-[#222]
                      md:h-9 md:w-9 md:text-2xl"
                    >
                      {isActive ? "\u2212" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3.5 pb-3.5 md:px-4.75 md:pb-4.75 md:pt-0">
                        {program.paragraphs.map((text, pIdx) => (
                          <p
                            key={pIdx}
                            className={`text-sm font-normal leading-4.25 text-[#333333]  ${
                              pIdx === program.paragraphs.length - 1
                                ? "mb-0"
                                : "mb-4"
                            }`}
                          >
                            {text}
                          </p>
                        ))}
                        <a
                          href={program.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex w-fit items-center gap-3.75 rounded-lg  border-2 border-[#222] bg-[#ffb14c] px-4 py-2.25 pl-6 text-[16px] font-semibold text-[#222] transition-all hover:bg-[#E8A145] hover:text-black hover:shadow-[4px_4px_0px_0px_#222]"
                        >
                          Explore More
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 448 512"
                            className="h-4 w-4"
                            fill="currentColor"
                          >
                            <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden flex-none overflow-hidden md:block md:w-[41.517vw] xl:w-127.5">
          <Image
            src="/images/programs/Group-40343-8.png"
            alt="program-us"
            width={510}
            height={510}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

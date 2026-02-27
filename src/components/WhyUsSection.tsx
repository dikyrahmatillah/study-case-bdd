"use client";

import { useState } from "react";
import Image from "next/image";

const accordionItems = [
  {
    icon: "/images/why-us/Group-40532.png",
    title: "Meaningful Growth",
    body: "Trust the process in elevating your business by enhancing every step of the way, guided by a team of professionals.",
  },
  {
    icon: "/images/why-us/Group-40530-1.png",
    title: "Collaborative Partnership",
    body: "Company values meet potential augmentation, create an exciting connection towards propitious business development.",
  },
  {
    icon: "/images/why-us/Group-40529.png",
    title: "Perceptive Exploration",
    body: "We're not just a player in this industry; we're visionaries. Watch our unique exploration and discover what others overlook.",
  },
];

export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-[1140px] mx-auto my-[100px_auto_139px] mt-[100px] mb-[139px] flex flex-row items-center gap-[50px] overflow-hidden max-[750px]:max-w-none max-[750px]:mx-auto max-[750px]:my-[50px_auto_70px] max-[750px]:mt-[50px] max-[750px]:mb-[70px] max-[750px]:flex-col max-[750px]:px-[15px] max-[750px]:gap-[30px] border-b-2 md:border-b-0">
      <div className="relative flex-none w-[510px] max-[750px]:w-full max-[750px]:order-2">
        <Image
          src="/images/why-us/Group-40343-7.png"
          alt="choose-us"
          width={510}
          height={510}
          className="w-full h-auto"
        />
      </div>

      <div className="max-[750px]:order-1">
        <div className="mb-4">
          <p className="text-[#513B6A] text-[14px] font-medium leading-normal m-0 max-[750px]:text-center max-[750px]:mb-3">
            WHY CHOOSE US
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-[#222] text-[44px] font-normal leading-14 m-0 max-[750px]:text-[24px] max-[750px]:leading-[28px] max-[750px]:text-center">
            It&apos;s not about how much budget you spent, but how you spend
            them.
          </h4>
        </div>

        <div className="mb-[30px]">
          <p className="text-[#222] text-[16px] font-light leading-[22px] max-[750px]:text-[14px] max-[750px]:text-center">
            Embracing a focus of sustainable growth, we prioritise cultivating
            long-term partnerships, ensuring your brand&apos;s growth aligns
            with effective practices. Together, we create a positive impact that
            goes beyond immediate gains, making a meaningful difference in the
            lives of your customers and the market you serve.
          </p>
        </div>

        <div>
          {accordionItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`border-0 rounded-none bg-transparent border-l border-l-[#D9D4CB] ${
                  index !== accordionItems.length - 1 ? "pb-5" : "pb-0"
                }`}
              >
                <h2
                  className={`m-0 ${
                    isActive ? "-ml-px border-l-2 border-l-[#33B8A5]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    className="w-full rounded-none border-0 text-[#222] text-[20px] leading-normal px-5 py-0 bg-transparent shadow-none text-left flex items-center gap-[15px] cursor-pointer max-[750px]:px-[10px]"
                  >
                    <Image
                      src={item.icon}
                      alt="accordion-image"
                      width={44}
                      height={44}
                      className="w-11 h-11 object-contain"
                    />
                    {item.title}
                  </button>
                </h2>

                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100 -ml-px border-l-2 border-l-[#33B8A5]"
                      : "grid-rows-[0fr] opacity-0 border-l-2"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-20 pb-0 mx-auto text-[#222] text-[14px] font-normal leading-4.5 max-[750px]:pl-[70px]">
                      {item.body}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

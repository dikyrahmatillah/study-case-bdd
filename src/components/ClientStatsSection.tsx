"use client";

import { useState } from "react";

type StatCardData = {
  title: string;
  description: string;
  color: string;
};

const stats: StatCardData[] = [
  { title: "800+", description: "Clients Growing", color: "#8A7C9B" },
  { title: "140+", description: "Teams of Professional", color: "#FFCB87" },
  {
    title: "50+",
    description: "Meta & Google Certified Professional",
    color: "#88A7DA",
  },
  {
    title: "400 Mio+",
    description: "Online Engagement Performance",
    color: "#76CFC3",
  },
  {
    title: "USD 15 Mio+",
    description: "Advertising Spend",
    color: "#FD8E85",
  },
];

function StatCard({
  title,
  description,
  color,
  wide,
}: StatCardData & { wide: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative bg-white border-2 border-[#222] rounded-lg min-h-37.75 max-md:min-h-27 transition-all duration-200 ease-in-out ${
        wide
          ? "flex-1 min-w-0 basis-64.75 max-md:flex-none max-md:w-[46.6vw]"
          : "flex-none w-52.75 max-md:w-[42.267vw]"
      } ${hovered ? "shadow-[4px_4px_0px_0px_#222]" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-0 right-0 bottom-0 rounded-r-md border-l-2 border-[#222]"
        style={{
          backgroundColor: color,
          animation: hovered ? "statistikCardAnim 1s forwards" : undefined,
          width: hovered ? undefined : "10px",
          borderColor: hovered ? undefined : "#222",
          borderRadius: hovered ? undefined : "0 6px 6px 0",
        }}
      />
      <div className="absolute inset-0 p-[30px_20px_30px_30px] max-md:p-0 max-md:px-4.5 max-md:flex max-md:flex-col max-md:justify-center">
        <h6 className="text-[#222] text-4xl max-md:text-2xl font-semibold leading-11 mt-0 mb-1.25 max-md:mb-0">
          {title}
        </h6>
        <p className="text-[#222] text-base max-md:text-xs leading-5 font-light m-0">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ClientStatsSection() {
  return (
    <>
      <style>{`
        @keyframes statistikCardAnim {
          from {
            width: 10px;
            border-color: #222;
            border-radius: 0 6px 6px 0;
          }
          to {
            width: 100%;
            border-color: transparent;
            border-radius: 6px;
          }
        }
      `}</style>
      <section className="max-w-285 mx-auto my-25 max-md:my-12.5 max-md:max-w-none max-md:px-2.75 flex flex-row max-md:flex-col gap-12.5 max-md:gap-7.5 items-center md:max-xl:justify-center">
        <div className="flex-none max-w-[35.417vw] md:max-xl:max-w-[42.817vw] max-md:max-w-none max-md:w-full flex flex-col gap-3.75">
          <p className="text-[#513B6A] text-sm max-md:text-base font-medium leading-normal m-0 max-md:text-center">
            WE ON NUMBERS
          </p>
          <h4 className="text-[#222] text-[44px] max-md:text-2xl max-md:leading-7 font-normal leading-14 m-0 max-md:text-center">
            We Establish an Ecosystem to Enhance Brand Growth.
          </h4>
          <p className="text-[#222] text-base max-md:text-sm font-light leading-6 max-md:leading-normal m-0 max-md:text-center">
            Beyond conventional marketing norms, we craft innovative strategies
            infused with data-driven insights to create comprehensive campaigns
            that resonate with target audiences for 800+ clients.
          </p>
        </div>

        <div className="flex-none max-w-[34.028vw] md:max-xl:max-w-[40.028vw] max-md:max-w-none max-md:w-full">
          <div className="flex flex-row flex-wrap gap-5 max-md:gap-3.5">
            {stats.map((stat, i) => {
              const wide = [0, 3, 4].includes(i);
              return <StatCard key={i} {...stat} wide={wide} />;
            })}

            <div className="relative bg-[#EEE9DF] border-2 border-[#222] rounded-lg min-h-37.75 max-md:min-h-27 flex-none w-40 max-md:w-[42.267vw]">
              <div className="absolute inset-0 p-[50px_22px_50px_30px] max-md:p-0 max-md:px-4.5 max-md:flex max-md:flex-col max-md:justify-center">
                <h6 className="text-[#222] text-xl font-semibold leading-normal m-0">
                  +And
                  <br />
                  Many More
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

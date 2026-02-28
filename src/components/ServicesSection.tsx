"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Digital Advertising",
    description:
      "Reach your optimum growth through Digital Advertising with actionable and impactful strategies.",
    image: "/images/services/Frame-770432-2.png",
    link: "https://bolehdicoba.com/services/digital-advertising/",
    bgColor: "#C8D6EE",
    textColor: "#222",
  },
  {
    title: "Creative Content & Live Shopping",
    description:
      "Performance creative brings the data- and tech-driven process that designed to amplify the impact of the creative itself",
    image: "/images/services/Group-40596-1.png",
    link: "services/performance-creative",
    bgColor: "#222222",
    textColor: "#fff",
  },
  {
    title: "Web Development & Maintenance",
    description:
      "We design and develop the most suitable website for your business to help you sell your products and services effectively.",
    image: "/images/services/Group-40597-1.png",
    link: "https://bolehdicoba.com/services/website-development/",
    bgColor: "#C0E9E3",
    textColor: "#222",
  },
  {
    title: "Search Engine Optimization",
    description:
      "SEO is a long term investment in marketing to drive organic traffic and skyrocket website rank.",
    image: "/images/services/Group-40598-1.png",
    link: "https://bolehdicoba.com/services/seo/",
    bgColor: "#C9C2D1",
    textColor: "#222",
  },
  {
    title: "Professional\nServices",
    description:
      "Growth Hack is the art of choosing the right audience, offer and strategy. Will you trust us to guide you through it?",
    image: "/images/services/Group-40599-1.png",
    link: "https://bolehdicoba.com/services/professional-service/",
    bgColor: "#FECBC7",
    textColor: "#222",
  },
  {
    title: "Community Program Development",
    description:
      "We help the business to retain customers, and encourages them to explore more of your products and services.",
    image: "/images/services/Group-40600-1.png",
    link: "https://bolehdicoba.com/services/community-program-development/",
    bgColor: "#FFE7C8",
    textColor: "#222",
  },
  {
    title: "Digital Marketing Training by Boleh Belajar",
    description:
      "Tailored training program guided by industry experts and professionals.",
    image: "/images/services/Group-40601-1.png",
    link: "https://bolehbelajar.com/",
    bgColor: "#F1EDE5",
    textColor: "#222",
  },
];

function ArrowRight() {
  return (
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
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      gsap.set(cards.slice(1), { y: "100vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 20%",
          end: `+=${(cards.length - 1) * 700}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { y: 0, ease: "none", duration: 1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-25 px-12.5 pb-0 overflow-hidden max-[750px]:pt-12.5 max-[750px]:px-3.75 max-[750px]:pb-17.5 border-b-2 border-[#222222]"
    >
      <div className="flex flex-row justify-center items-end max-w-262.5 mx-auto mb-12.5 max-[750px]:flex-col max-[750px]:items-center max-[750px]:max-w-none max-[750px]:mb-7.5">
        <div className="services-header-left flex-1 pr-12.5 max-[900px]:pr-7.5 max-[750px]:pr-0">
          <div className="mb-3.5">
            <p className="text-[#222] text-[14px] font-medium leading-normal m-0 max-[750px]:text-[16px] max-[750px]:text-center">
              OUR SERVICES
            </p>
          </div>
          <div className="max-[750px]:mb-3.75">
            <h4 className="text-[#222] text-[44px] font-normal leading-14 m-0 max-[750px]:text-[24px] max-[750px]:leading-7 max-[750px]:text-center whitespace-pre-line">
              {"We Offer a Wide Services\nAimed to Support your Business"}
            </h4>
          </div>
        </div>
        <div className="services-header-right w-[45%] pl-6 self-end max-[1050px]:w-[48%] max-[900px]:pl-5 max-[750px]:w-full max-[750px]:pl-0 max-[750px]:self-center">
          <div>
            <p className="text-[#222] text-[16px] font-light leading-5 m-0 max-[750px]:text-[14px] max-[750px]:text-center">
              It may surprise you, but digital marketing is not a single
              strategy, it covers a lot of spectrum, but don&apos;t worry, we
              got you!
            </p>
          </div>
        </div>
      </div>

      <div className="services-body">
        <div
          ref={listRef}
          className="flex flex-col relative min-h-[41.667vw] max-[750px]:min-h-[155vw]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-135 border-2 border-[#222] rounded-2xl flex items-center max-[750px]:h-[155vw]"
              style={{
                backgroundColor: service.bgColor,
                color: service.textColor,
                zIndex: index,
              }}
            >
              <div className="max-w-262.5 mx-auto flex flex-row items-center gap-12.5 max-[750px]:max-w-none max-[750px]:mx-0 max-[750px]:flex-col max-[750px]:gap-3.75 max-[750px]:px-3.5">
                <div className="services-card-text max-[750px]:order-2">
                  <div className="mb-5">
                    <h4 className="text-[44px] font-normal leading-14 m-0 max-[750px]:text-[24px] max-[750px]:leading-7 max-[750px]:text-center whitespace-pre-line">
                      {service.title}
                    </h4>
                  </div>
                  <div className="mb-17.5 max-[750px]:mb-7.5">
                    <p className="text-[16px] font-light leading-5.5 m-0 max-[750px]:text-[14px] max-[750px]:leading-normal max-[750px]:text-center">
                      {service.description}
                    </p>
                  </div>
                  <div className="max-[750px]:flex max-[750px]:justify-center">
                    <a
                      href={service.link}
                      className="inline-flex flex-row gap-3.75 items-center text-[16px] border-2 rounded-lg px-5 py-3 font-medium bg-[#ffb14c] transition-all duration-300 hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222] hover:text-black"
                      style={{
                        borderColor: service.textColor,
                        color: service.textColor,
                      }}
                    >
                      See Detail Service
                      <ArrowRight />
                    </a>
                  </div>
                </div>

                <div className="relative shrink-0 w-[33.217vw] max-[750px]:w-full max-[750px]:order-1">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={640}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

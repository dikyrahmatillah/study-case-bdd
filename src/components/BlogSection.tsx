"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    image: "/images/blogs/Colorbox-Post-Featured.webp",
    category: "Digital Advertising",
    logo: "/images/blogs/colorbox-logo.png",
    title:
      "Offline-Focused, Digitally-Activated: How Click & Collect Delivered 30% of Monthly Web Revenue",
    description:
      "Unlock growth by activating untapped eCommerce features like Click & Collect, boosting sales, ROAS, and cross-team alignment for sustainable fashion retail success",
    link: "https://bolehdicoba.com/news-blog/case-study/offline-focused-digitally-activated-how-click-collect-delivered-30-of-monthly-web-revenue/",
  },
  {
    id: 2,
    image: "/images/blogs/Rectangle-9899-3.png",
    category: "Digital Advertising",
    logo: "/images/blogs/Group-40398-1.png",
    title:
      "Consistently crushed expectations with an average ROAS of 10x per month, soaring past our 8x target.",
    description:
      "Discover how our actionable strategies works brilliantly, delivering impressive average ROAS for Logitech.",
    link: "https://bolehdicoba.com/news-blog/case-study/consistently-crushed-expectations-with-an-average-roas-of-10x-per-month-soaring-past-our-8x-target/",
  },
  {
    id: 3,
    image: "/images/blogs/Rectangle-9899.png",
    category: "Digital Advertising",
    logo: "/images/blogs/image-301-1.png",
    title:
      "Generated a monthly three-fold increase in the quantity and quality of leads.",
    description:
      "Axa Insurance Indonesia achieved a remarkable threefold increase in both the quality and quantity of leads by leveraging the BDD digital advertising strategy.",
    link: "https://bolehdicoba.com/news-blog/case-study/generated-a-monthly-three-fold-increase-in-the-quantity-and-quality-of-leads/",
  },
  {
    id: 4,
    image: "/images/blogs/Rectangle-9899-1.png",
    category: "Digital Advertising",
    logo: "/images/blogs/Frame-2200447.png",
    title:
      "Yamaha Jabar connected with an audience of 1 million people each month.",
    description:
      "Yamaha's ambition to boost its brand awareness aligns seamlessly with the BDD strategy. Check out how it all comes together here!",
    link: "https://bolehdicoba.com/news-blog/case-study/yamaha-jabar-connected-with-an-audience-of-1-million-people-each-month/",
  },
];

interface BlogCardProps {
  image: string;
  category: string;
  logo?: string;
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({
  image,
  category,
  logo,
  title,
  description,
  link,
}: BlogCardProps) => (
  <div
    onPointerDown={(e) => e.stopPropagation()}
    className="relative flex flex-col h-auto md:w-[309.6px] md:flex-shrink-0 md:snap-start max-md:w-[48%] group transition-all duration-200"
  >
    <div className="mb-[8px] border-2 border-[#222] rounded-[8px] transition-all duration-200 flex flex-col h-full group-hover:shadow-[6px_6px_0px_0px_#222]">
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={309}
          height={200}
          className="w-full rounded-t-[6px] object-cover"
        />
      </div>
      <div className="p-[14px] max-md:py-[6px] max-md:px-[20px] bg-[#F4F0EA] text-center border-y-2 border-[#222]">
        <p className="text-[16px] max-md:text-[12px] font-medium leading-normal m-0 max-md:whitespace-nowrap">
          {category}
        </p>
      </div>
      <div className="p-[20px] max-md:p-[10px] flex flex-col flex-grow">
        {logo ? (
          <div className="mb-[5px] max-md:mb-[10px]">
            <Image
              src={logo}
              alt="logo"
              width={45}
              height={45}
              className="max-h-[45px] max-md:max-h-[30px] object-contain"
            />
          </div>
        ) : null}
        <div className="mb-[10px] max-md:mb-[4px]">
          <a href={link} className="group-hover:underline">
            <h6 className="text-[#222] text-[24px] max-md:text-[14px] max-md:leading-[20px] font-medium leading-7.5 m-0 line-clamp-5 max-md:line-clamp-4">
              {title}
            </h6>
          </a>
        </div>
        <div className="mb-[20px] max-md:mb-[10px]">
          <p className="text-[#222] text-[16px] max-md:text-[12px] font-light leading-5 m-0 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={link}
            className="text-[#222] text-[18px] max-md:text-[14px] font-medium leading-6 m-0 flex items-center gap-[10px] max-md:gap-[5px]"
          >
            Read The Story
            <FaArrowRight className="-rotate-45 -mb-[3px]" />
          </a>
        </div>
      </div>
      <div className="absolute top-[20px] right-[20px] max-md:top-[9px] max-md:right-[12px] flex transition-all duration-200">
        <a
          href={link}
          className="text-[#222] border-2 border-[#222] rounded-full bg-white text-[30px] max-md:text-[12px] p-[11px] px-[16px] max-md:p-[3px] max-md:px-[4.5px] w-[64px] h-[64px] max-md:w-[24px] max-md:h-[24px] transition-all duration-200 flex items-center justify-center group-hover:bg-[#FFB14C] group-hover:shadow-[6px_6px_0px_0px_#222]"
        >
          <FaArrowRight className="-rotate-45 -mb-[3px]" />
        </a>
      </div>
    </div>
  </div>
);

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrollbarDragging, setIsScrollbarDragging] = useState(false);
  const [thumbLeft, setThumbLeft] = useState(0);
  const pointerActiveRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const scrollbarDragRef = useRef<HTMLDivElement | null>(null);
  const scrollbarDraggingRef = useRef(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
      const m = getScrollbarMetrics();
      if (m) {
        const thumbWidth = m.thumb.width;
        const usable = Math.max(0, m.track.width - thumbWidth);
        setThumbLeft(progress * usable);
      }
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current || window.innerWidth <= 750) return;
    pointerActiveRef.current = true;
    hasDraggedRef.current = false;
    suppressClickRef.current = false;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerActiveRef.current || !scrollRef.current) return;
    const deltaX = event.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 4) {
      hasDraggedRef.current = true;
      suppressClickRef.current = true;
    }
    scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const stopDragging = () => {
    pointerActiveRef.current = false;
    setIsDragging(false);
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  const handlePointerUp = () => {
    stopDragging();
  };

  const handlePointerCancel = () => {
    stopDragging();
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current || hasDraggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const getScrollbarMetrics = () => {
    if (
      !scrollRef.current ||
      !scrollbarRef.current ||
      !scrollbarDragRef.current
    )
      return null;
    const container = scrollRef.current;
    const track = scrollbarRef.current.getBoundingClientRect();
    const thumb = scrollbarDragRef.current.getBoundingClientRect();
    const maxScroll = container.scrollWidth - container.clientWidth;
    return { container, track, thumb, maxScroll };
  };

  const handleScrollbarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const m = getScrollbarMetrics();
    if (!m) return;
    const clickX = e.clientX - m.track.left;
    const thumbWidth = m.thumb.width;
    const usable = Math.max(0, m.track.width - thumbWidth);
    const percent = Math.min(
      1,
      Math.max(0, (clickX - thumbWidth / 2) / usable),
    );
    m.container.scrollLeft = percent * m.maxScroll;
    setScrollProgress(percent);
  };

  const handleScrollbarPointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    const m = getScrollbarMetrics();
    if (!m) return;
    e.stopPropagation();
    scrollbarDraggingRef.current = true;
    setIsScrollbarDragging(true);
    if (scrollbarDragRef.current)
      scrollbarDragRef.current.setPointerCapture(e.pointerId);
  };

  const handleScrollbarPointerMove = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!scrollbarDraggingRef.current) return;
    const m = getScrollbarMetrics();
    if (!m) return;
    const pointerX = e.clientX - m.track.left;
    const thumbWidth = m.thumb.width;
    const usable = Math.max(0, m.track.width - thumbWidth);
    const percent = Math.min(
      1,
      Math.max(0, (pointerX - thumbWidth / 2) / usable),
    );
    m.container.scrollLeft = percent * m.maxScroll;
    setScrollProgress(percent);
  };

  const handleScrollbarPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    scrollbarDraggingRef.current = false;
    setIsScrollbarDragging(false);
    try {
      if (scrollbarDragRef.current)
        scrollbarDragRef.current.releasePointerCapture(e.pointerId);
    } catch {}
  };

  useEffect(() => {
    const handleResize = () => handleScroll();
    window.addEventListener("resize", handleResize);
    const timeoutId = setTimeout(() => handleScroll(), 0);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white border-b md:border-b-2 border-[#222222]">
      <div className="my-[100px] mx-auto flex flex-col md:flex-row justify-end items-center gap-[30px] max-md:gap-[50px] max-md:my-[50px] max-md:mb-[70px] max-md:px-[15px] max-md:justify-center">
        <div className="flex-none w-full md:w-[22.917vw]">
          <div className="mb-[5px]">
            <p className="text-[#513B6A] text-[14px] max-md:text-[16px] font-medium leading-normal m-0 max-md:text-center">
              CASE STUDY
            </p>
          </div>
          <div className="mb-[70px] max-md:mb-[15px]">
            <h4 className="text-[#222] text-[36px] max-md:text-[24px] max-md:leading-[28px] font-normal leading-12 m-0 max-md:text-center">
              Explore more about our partner success stories
            </h4>
          </div>
          <div className="max-md:flex max-md:justify-center">
            <a
              href="https://bolehdicoba.com/case-study/"
              className="inline-flex items-center gap-3 px-5.5 py-3 bg-[#FFB14C] border-2 border-[#222] rounded-[8px] text-[#111] text-[18px] font-semibold leading-normal transition-all duration-200 hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
            >
              <span>See More Success Stories</span>
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex-none w-full md:w-[calc(100%-455px)] xl:w-[calc(100%-576px)] relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onLostPointerCapture={handlePointerCancel}
            onClickCapture={handleClickCapture}
            className={`flex flex-row items-stretch w-full md:overflow-x-auto md:pb-[135px] md:pr-[30px] md:min-h-[600px] max-md:flex-wrap max-md:justify-center max-md:gap-y-[10px] max-md:gap-x-[13px] gap-[30px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:cursor-grab md:touch-pan-x md:select-none ${isDragging ? "md:cursor-grabbing" : ""}`}
          >
            {blogData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          <div
            ref={scrollbarRef}
            onClick={handleScrollbarClick}
            className="hidden md:block absolute bottom-[35px] left-0 w-[47.917vw] h-[1px] bg-[#A9A59E]"
          >
            <div
              ref={scrollbarDragRef}
              onPointerDown={handleScrollbarPointerDown}
              onPointerMove={handleScrollbarPointerMove}
              onPointerUp={handleScrollbarPointerUp}
              onPointerCancel={handleScrollbarPointerUp}
              className="absolute h-[135px] top-[-45px] bg-transparent bg-no-repeat bg-[length:100%_auto] transition-all duration-75"
              style={{
                backgroundImage: "url('/images/blogs/slide-indicator.png')",
                width: "100px",
                left: `${thumbLeft}px`,
                touchAction: "none",
                transition: isScrollbarDragging ? "none" : undefined,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

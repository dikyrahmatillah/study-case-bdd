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
    className="relative flex flex-col h-auto md:w-77.4 md:shrink-0 md:snap-start max-md:w-[48%] group transition-all duration-200"
  >
    <div className="mb-2 border-2 border-[#222] rounded-lg transition-all duration-200 flex flex-col h-full group-hover:shadow-[6px_6px_0px_0px_#222]">
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={309}
          height={200}
          className="w-full rounded-t-1.5 object-cover"
        />
      </div>
      <div className="p-3.5 max-md:py-1.5 max-md:px-5 bg-[#F4F0EA] text-center border-y-2 border-[#222]">
        <p className="text-[16px] max-md:text-[12px] font-medium leading-normal m-0 max-md:whitespace-nowrap">
          {category}
        </p>
      </div>
      <div className="p-5 max-md:p-2.5 flex flex-col grow">
        {logo ? (
          <div className="mb-1.25 max-md:mb-2.5">
            <Image
              src={logo}
              alt="logo"
              width={45}
              height={45}
              className="max-h-11.25 max-md:max-h-7.5 object-contain"
            />
          </div>
        ) : null}
        <div className="mb-2.5 max-md:mb-1">
          <a href={link} className="group-hover:underline">
            <h6 className="text-[#222] text-[24px] max-md:text-[14px] max-md:leading-5 font-medium leading-7.5 m-0 line-clamp-5 max-md:line-clamp-4">
              {title}
            </h6>
          </a>
        </div>
        <div className="mb-5 max-md:mb-2.5">
          <p className="text-[#222] text-[16px] max-md:text-[12px] font-light leading-5 m-0 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={link}
            className="text-[#222] text-[18px] max-md:text-[14px] font-medium leading-6 m-0 flex items-center gap-2.5 max-md:gap-1.25"
          >
            Read The Story
            <FaArrowRight className="-rotate-45 -mb-0.75" />
          </a>
        </div>
      </div>
      <div className="absolute top-5 right-5 max-md:top-2.25 max-md:right-3 flex transition-all duration-200">
        <a
          href={link}
          className="text-[#222] border-2 border-[#222] rounded-full bg-white text-[30px] max-md:text-[12px] p-2.75 px-4 max-md:p-0.75 max-md:px-1.125 w-16 h-16 max-md:w-6 max-md:h-6 transition-all duration-200 flex items-center justify-center group-hover:bg-[#FFB14C] group-hover:shadow-[6px_6px_0px_0px_#222]"
        >
          <FaArrowRight className="-rotate-45 -mb-0.75" />
        </a>
      </div>
    </div>
  </div>
);

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <section className="relative overflow-hidden bg-white border-b md:border-b-2 border-[#222222]">
      <div className="my-25 mx-auto flex flex-col md:flex-row justify-end items-center gap-7.5 max-md:gap-12.5 max-md:my-12.5 max-md:mb-17.5 max-md:px-3.75 max-md:justify-center">
        <div className="flex-none w-full md:w-[22.917vw]">
          <div className="mb-1.25">
            <p className="text-[#513B6A] text-[14px] max-md:text-[16px] font-medium leading-normal m-0 max-md:text-center">
              CASE STUDY
            </p>
          </div>
          <div className="mb-17.5 max-md:mb-3.75">
            <h4 className="text-[#222] text-[36px] max-md:text-[24px] max-md:leading-7 font-normal leading-12 m-0 max-md:text-center">
              Explore more about our partner success stories
            </h4>
          </div>
          <div className="max-md:flex max-md:justify-center">
            <a
              href="https://bolehdicoba.com/case-study/"
              className="inline-flex items-center gap-3 px-5.5 py-3 bg-[#FFB14C] border-2 border-[#222] rounded-lg text-[#111] text-[18px] font-semibold leading-normal transition-all duration-200 hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
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
            className={`flex flex-row items-stretch w-full md:overflow-x-auto md:pb-33.75 md:pr-7.5 md:min-h-150 max-md:flex-wrap max-md:justify-center max-md:gap-y-2.5 max-md:gap-x-3.25 gap-7.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:cursor-grab md:touch-pan-x md:select-none ${isDragging ? "md:cursor-grabbing" : ""}`}
          >
            {blogData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          <div
            ref={scrollbarRef}
            onClick={handleScrollbarClick}
            className="hidden md:block absolute bottom-8.75 left-0 w-[47.917vw] h-px bg-[#A9A59E]"
          >
            <div
              ref={scrollbarDragRef}
              onPointerDown={handleScrollbarPointerDown}
              onPointerMove={handleScrollbarPointerMove}
              onPointerUp={handleScrollbarPointerUp}
              onPointerCancel={handleScrollbarPointerUp}
              className="absolute h-33.75 -top-11.25 bg-transparent bg-no-repeat bg-size-[100%_auto] transition-all duration-75"
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

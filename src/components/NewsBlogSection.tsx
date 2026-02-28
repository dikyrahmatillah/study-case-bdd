"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";

type NewsItem = {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
  alt: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    image: "/images/news/image-25.jpeg",
    category: "News",
    date: "23 Feb 2026",
    title:
      "Webinar Recap BDD x Ruang Seller x Lion Parcel : Beriklan di Social Commerce Tanpa Takut Over Budget",
    description:
      "Webinar BDD x Ruang Seller x Lion Parcel bareng Annissa Adiwijaya (Lead Commerce Boost) bahas cara UMKM beriklan tanpa takut rugi. Simak insight & strategi praktisnya di sini!",
    link: "https://bolehdicoba.com/news-blog/webinar-recap-bdd-x-ruang-seller-x-lion-parcel-beriklan-di-social-commerce-tanpa-takut-over-budget/",
    alt: "Social Commerce",
  },
  {
    id: 2,
    image: "/images/news/Rayza-Strategic-Partner-scaled.jpg",
    category: "All Article",
    date: "11 Feb 2026",
    title:
      "Kenapa Brand Tetap Butuh Strategic Partner di Era AI untuk Tumbuh Lebih Cepat",
    description:
      "Brand sudah pakai AI tapi belum optimal? Cari tahu kenapa strategic partner tetap dibutuhkan agar AI lebih berdampak.",
    link: "https://bolehdicoba.com/news-blog/kenapa-brand-tetap-butuh-strategic-partner-di-era-ai-untuk-tumbuh-lebih-cepat/",
    alt: "BDD Strategic Partner",
  },
  {
    id: 3,
    image: "/images/news/Ai-search-scaled.webp",
    category: "All Article",
    date: "11 Feb 2026",
    title: "AI Search Mengubah SEO: Apa yang Berubah dan Apa Dampaknya",
    description:
      "Di era AI Search, traffic bukan satu-satunya indikator sukses SEO. Artikel ini membahas perubahan, dampak, dan strategi adaptasinya.",
    link: "https://bolehdicoba.com/news-blog/ai-search-mengubah-seo-apa-yang-berubah-dan-apa-dampaknya/",
    alt: "Ai search",
  },
  {
    id: 4,
    image: "/images/news/Rayza-Monthly-Report--scaled.jpg",
    category: "All Article",
    date: "10 Feb 2026",
    title: "Monthly Report: Bukan Sekadar Laporan, Tapi Alat Evaluasi Agency",
    description:
      "Monthly report bukan sekadar laporan rutin. Pelajari fungsi reporting sebagai alat evaluasi strategis antara agency dan klien.",
    link: "https://bolehdicoba.com/news-blog/monthly-report-bukan-sekadar-laporan-tapi-alat-evaluasi-agency/",
    alt: "BDD Monthly Report",
  },
  {
    id: 5,
    image: "/images/news/optimasi-wordpress-scaled.webp",
    category: "All Article",
    date: "07 Feb 2026",
    title:
      "Optimasi WordPress: Kunci Sukses Memenangkan Persaingan di Search Engine",
    description:
      "Mau tahu gimana cara bikin website kamu jadi favorit Google secara instan? Bongkar rahasia optimasi WordPress yang jarang dibahas orang di artikel ini!",
    link: "https://bolehdicoba.com/news-blog/optimasi-wordpress-kunci-sukses-memenangkan-persaingan-di-search-engine/",
    alt: "optimasi wordpress",
  },
  {
    id: 6,
    image: "/images/news/Gamal-podcast-marketing-scaled.webp",
    category: "All Article",
    date: "07 Feb 2026",
    title:
      "Podcast Marketing: Senjata Rahasia B2B untuk Membangun Authority di 2026",
    description:
      "Masih ragu pakai format audio? Simak kenapa Podcast Marketing adalah strategi B2B paling underrated di 2026 untuk menjangkau klien high-level",
    link: "https://bolehdicoba.com/news-blog/podcast-marketing-senjata-rahasia-b2b-untuk-membangun-authority-di-2026/",
    alt: "bdd podcast marketing bolehdicoba",
  },
];

type NewsCardProps = NewsItem;

function NewsCard({
  image,
  category,
  date,
  title,
  description,
  link,
  alt,
}: NewsCardProps) {
  return (
    <article
      onPointerDown={(e) => e.stopPropagation()}
      className="group relative h-auto w-80.21425 shrink-0 max-md:w-[48%]"
    >
      <div className="mb-2 flex h-full flex-col rounded-lg border-2 border-[#222] bg-[#F4F0EA] transition-all duration-200 group-hover:shadow-[6px_6px_0px_0px_#222]">
        <div className="news-card-image">
          <Image
            src={image}
            alt={alt}
            width={320}
            height={240}
            className="w-full rounded-t-1.5"
          />
        </div>

        <div className="flex h-full flex-col rounded-b-1.5 border-t-2 border-[#222] p-5 max-md:p-2.5">
          <div className="mb-3.25 w-fit rounded-full border-2 border-[#222] bg-white px-3.5 py-1.125 text-center max-md:mb-2.5 max-md:px-2 max-md:py-0.75">
            <p className="m-0 text-[14px] leading-normal font-medium max-md:text-[10px] max-md:leading-3.5">
              {category}
            </p>
          </div>

          <div className="mb-2 max-md:mb-1">
            <p className="m-0 text-[16px] leading-normal font-light uppercase max-md:text-[12px]">
              {date}
            </p>
          </div>

          <div className="mb-2.5 max-md:mb-1">
            <a href={link} target="_blank" rel="noreferrer" className="block">
              <h6 className="m-0 line-clamp-4 text-[24px] leading-7.5 font-medium text-[#222] transition-all duration-200 group-hover:underline max-md:text-[14px] max-md:leading-5">
                {title}
              </h6>
            </a>
          </div>

          <div className="mb-5 max-md:mb-2.5">
            <p className="m-0 line-clamp-3 text-[16px] leading-5 font-light text-[#222] max-md:text-[12px]">
              {description}
            </p>
          </div>

          <div className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="m-0 flex items-center gap-2.5 text-[18px] leading-5.5 font-medium text-[#222] max-md:gap-1.25 max-md:text-[14px] max-md:leading-5"
            >
              Read More
              <FaArrowRight className="-mb-0.75 -rotate-45" />
            </a>
          </div>
        </div>

        <div className="absolute top-5 right-5 flex max-md:top-2.25 max-md:right-3">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#222] bg-white text-[30px] text-[#222] transition-all duration-200 group-hover:bg-[#FFB14C] group-hover:shadow-[6px_6px_0px_0px_#222] max-md:h-6 max-md:w-6 max-md:px-1.125 max-md:py-0.75 max-md:text-[12px]"
          >
            <GoArrowUpRight className="-mb-0.75" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NewsBlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const pointerActiveRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const scrollbarDragRef = useRef<HTMLDivElement | null>(null);
  const scrollbarDraggingRef = useRef(false);
  const [isScrollbarDragging, setIsScrollbarDragging] = useState(false);
  const [thumbLeft, setThumbLeft] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const metrics = getScrollbarMetrics();
      if (metrics) {
        const thumbWidth = metrics.thumb.width;
        const usable = Math.max(0, metrics.track.width - thumbWidth);
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
    ) {
      return null;
    }

    const container = scrollRef.current;
    const track = scrollbarRef.current.getBoundingClientRect();
    const thumb = scrollbarDragRef.current.getBoundingClientRect();
    const maxScroll = container.scrollWidth - container.clientWidth;

    return { container, track, thumb, maxScroll };
  };

  const handleScrollbarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const metrics = getScrollbarMetrics();
    if (!metrics) return;

    const clickX = event.clientX - metrics.track.left;
    const thumbWidth = metrics.thumb.width;
    const usable = Math.max(0, metrics.track.width - thumbWidth);
    const percent = Math.min(
      1,
      Math.max(0, (clickX - thumbWidth / 2) / usable),
    );

    metrics.container.scrollLeft = percent * metrics.maxScroll;
    setThumbLeft(percent * usable);
  };

  const handleScrollbarPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const metrics = getScrollbarMetrics();
    if (!metrics) return;

    event.stopPropagation();
    scrollbarDraggingRef.current = true;
    setIsScrollbarDragging(true);

    if (scrollbarDragRef.current) {
      scrollbarDragRef.current.setPointerCapture(event.pointerId);
    }
  };

  const handleScrollbarPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!scrollbarDraggingRef.current) return;
    const metrics = getScrollbarMetrics();
    if (!metrics) return;

    const pointerX = event.clientX - metrics.track.left;
    const thumbWidth = metrics.thumb.width;
    const usable = Math.max(0, metrics.track.width - thumbWidth);
    const percent = Math.min(
      1,
      Math.max(0, (pointerX - thumbWidth / 2) / usable),
    );

    metrics.container.scrollLeft = percent * metrics.maxScroll;
    setThumbLeft(percent * usable);
  };

  const handleScrollbarPointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    scrollbarDraggingRef.current = false;
    setIsScrollbarDragging(false);
    try {
      if (scrollbarDragRef.current) {
        scrollbarDragRef.current.releasePointerCapture(event.pointerId);
      }
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
    <section className="my-25 max-md:my-12.5 max-md:mb-17.5 max-md:px-3.75">
      <div className="mx-auto mb-12.5 flex max-w-285 items-end justify-between max-md:flex-col max-md:items-center max-md:justify-center max-md:px-1.25">
        <div className="flex-1">
          <div className="mb-1.25">
            <p className="m-0 text-[14px] leading-normal font-medium text-[#513B6A] max-md:text-center max-md:text-[16px]">
              NEWS & BLOG
            </p>
          </div>

          <div className=" max-md:mb-7.5">
            <h4 className="m-0 text-[36px] leading-normal font-normal text-[#222] max-md:text-center max-md:text-[24px] max-md:leading-7">
              Your time is valuable.
              <span className="block leading-none">
                Read our insightful article within 5 minutes.
              </span>
            </h4>
          </div>
        </div>

        <Link
          href="/news-blog/"
          className="m-0 flex w-fit items-center gap-3.75 bg-[#ffb14c] text-black border-2 border-[#222222] rounded-lg px-5 py-3.25 text-[16px] font-medium leading-5.04 transition-all duration-200 hover:bg-[#E8A145] hover:text-black hover:shadow-[4px_4px_0px_0px_#222] max-md:shadow-[4px_4px_0px_0px_#222]"
        >
          Explore More Article
          <FaArrowRight />
        </Link>
      </div>

      <div className="ml-auto flex w-[calc(100%-195px)] items-center justify-end max-[1367px]:w-[calc(100%-110px)] max-md:w-full max-md:justify-center">
        <div className="relative w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onLostPointerCapture={handlePointerCancel}
            onClickCapture={handleClickCapture}
            className={`flex w-full flex-row items-stretch gap-7.5 pr-7.5 pb-33.75 md:overflow-x-auto md:cursor-grab md:touch-pan-x md:select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-md:flex-wrap max-md:gap-2.5 max-md:pr-0 max-md:pb-0 ${isDragging ? "md:cursor-grabbing" : ""}`}
          >
            {newsData.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>

          <div
            ref={scrollbarRef}
            onClick={handleScrollbarClick}
            className="absolute bottom-13.5 left-0 hidden h-px w-[47.917vw] bg-[#A9A59E] md:block"
          >
            <div
              ref={scrollbarDragRef}
              onPointerDown={handleScrollbarPointerDown}
              onPointerMove={handleScrollbarPointerMove}
              onPointerUp={handleScrollbarPointerUp}
              onPointerCancel={handleScrollbarPointerUp}
              className="absolute -top-11.25 h-33.75 bg-transparent bg-size-[100%_auto] bg-no-repeat transition-all duration-75"
              style={{
                backgroundImage: "url('/images/news/slide-indicator.png')",
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

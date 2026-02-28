"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";

interface SubMenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

interface MenuItem {
  id: string;
  title: string;
  href: string;
  subMenu?: SubMenuItem[];
  subMenuMod?: "sub-menu-mod-1" | "sub-menu-mod-2";
}

const menuData: MenuItem[] = [
  {
    id: "services",
    title: "Services",
    href: "#",
    subMenuMod: "sub-menu-mod-2",
    subMenu: [
      {
        id: "performance-creative",
        title: "Performance Creative",
        description:
          "Create ads-ready contents to better communicate your brand message.",
        href: "https://bolehdicoba.com/services/performance-creative/",
        buttonText: "See Service",
      },
      {
        id: "website-development",
        title: "Website Development",
        description:
          "Effective website with sufficient performance and aesthetic to fulfill transaction and deliver brand identity",
        href: "https://bolehdicoba.com/services/website-development/",
        buttonText: "See Service",
      },
      {
        id: "seo",
        title: "Search Engine Optimization",
        description:
          "Organically increase your website and online store visibility.",
        href: "https://bolehdicoba.com/services/seo/",
        buttonText: "See Service",
      },
      {
        id: "professional-service",
        title: "Professional Service",
        description:
          "Tailored training program guided by industry experts and professionals.",
        href: "https://bolehdicoba.com/services/professional-service/",
        buttonText: "See Service",
      },
      {
        id: "digital-advertising",
        title: "Digital Advertising",
        description:
          "Optimize ads performance, install CPAS, solve invisible issues on your online ads campaign.",
        href: "https://bolehdicoba.com/services/digital-advertising/",
        buttonText: "See Service",
      },
    ],
  },
  {
    id: "program",
    title: "Program",
    href: "#",
    subMenu: [
      {
        id: "bulletin",
        title: "Bulletin",
        description:
          "We put our eye close to the movement in this digital marketing industry.",
        href: "https://bolehdicoba.com/program/bulletin/",
        buttonText: "Explore",
      },
      {
        id: "events",
        title: "Events",
        description:
          "BDD Open House is Back! We are thrilled to return for our 7th anniversary.",
        href: "https://bolehdicoba.com/open-house-2024/",
        buttonText: "Explore",
      },
      {
        id: "breakfast-club",
        title: "Breakfast Club",
        description:
          "We gather our friends in 2-hours intimate and warm breezy discussion to connect and collaborate",
        href: "https://bolehdicoba.com/program/breakfast-club/",
        buttonText: "Explore",
      },
    ],
  },
  {
    id: "information",
    title: "Information",
    href: "#",
    subMenuMod: "sub-menu-mod-2",
    subMenu: [
      {
        id: "about-us",
        title: "About Us",
        description:
          "We pay close attention while we listen and customize every strategy.",
        href: "https://bolehdicoba.com/about-us/",
        buttonText: "More",
      },
      {
        id: "case-studies",
        title: "Case Studies",
        description:
          "Witness how businesses similar to yours are achieving remarkable growth hand in hand with our services.",
        href: "https://bolehdicoba.com/case-study/",
        buttonText: "More",
      },
    ],
  },
  {
    id: "news-blog",
    title: "News & Blog",
    href: "https://bolehdicoba.com/news-blog/",
  },
  {
    id: "loyalty-program",
    title: "Loyalty Program",
    href: "https://bolehdicoba.com/loyalty-program/",
  },
  {
    id: "web-seo-audit",
    title: "Web & SEO Audit",
    href: "https://bolehdicoba.com/web-seo-audit/",
  },
  {
    id: "career",
    title: "Career",
    href: "https://bolehdicoba.com/career/",
  },
];

const DesktopMenu = ({ menuData }: { menuData: MenuItem[] }) => (
  <nav className="hidden lg:flex flex-1 justify-end">
    <ul className="flex items-center gap-3 text-sm font-normal px-10">
      {menuData.map((item) => (
        <li
          key={item.id}
          className={`menu-item group flex items-center hover:text-gray-400 transition-colors cursor-pointer`}
        >
          <Link
            href={item.href}
            className="title px-2 py-3 text-black no-underline hover:text-gray-400 text-sm font-normal"
          >
            {item.title}
          </Link>

          {item.subMenu && (
            <FaAngleDown
              className="text-gray-500 w-3.5 h-3.5"
              aria-hidden="true"
            />
          )}

          {item.subMenu && (
            <ul
              className={`sub-menu ${item.subMenuMod || ""} hidden group-hover:flex absolute left-0 right-0 top-full z-30`}
            >
              <div className="mx-auto w-full  flex flex-row flex-wrap border-[0.5px] border-[#d9d4cb] bg-[#f7f5f0]">
                {item.subMenu.map((subItem, index) => {
                  const itemCount = item.subMenu!.length;
                  let widthClass = "w-1/3";

                  if (item.subMenuMod === "sub-menu-mod-2") {
                    if (itemCount % 2 === 0 && index >= itemCount - 2) {
                      widthClass = "w-1/2";
                    }
                  } else if (item.subMenuMod === "sub-menu-mod-1") {
                    if (index === itemCount - 1) {
                      widthClass = "w-full";
                    }
                  }

                  return (
                    <li
                      key={subItem.id}
                      className={`menu-item ${widthClass} p-[30px_50px] border-[0.5px] border-[#d9d4cb]`}
                    >
                      <div className="title text-[#222] text-xl font-medium mb-2.5">
                        {subItem.title}
                      </div>
                      <div className="description text-[#222] text-base font-light leading-5.5 mb-5">
                        {subItem.description}
                      </div>
                      <Link
                        href={subItem.href}
                        className="button_link text-[#33b8a5] text-base font-medium flex items-center gap-1.5 no-underline hover:gap-2 transition-all"
                      >
                        {subItem.buttonText}
                        <svg
                          className="w-4 h-4 -rotate-45 -mb-0.75"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                        </svg>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

const MobileMenu = ({
  isOpen,
  toggleMenu,
  menuData,
  openSubMenu,
  toggleSubMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  menuData: MenuItem[];
  openSubMenu: string | null;
  toggleSubMenu: (id: string) => void;
}) => (
  <nav
    className={`site-navigation-dropdown lg:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg transition-all duration-300 overflow-hidden ${
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >
    <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
      <div className="flex flex-1 items-center gap-3 border-2 border-gray-300 rounded-full px-6 py-3 bg-white">
        <svg
          className="w-6 h-6 text-gray-500 shrink-0"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
        </svg>
        <input
          type="text"
          placeholder="Masukkan kata kunci pencarian"
          className="flex-1 text-base outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>
      <button className="shrink-0 bg-[#4d7bc8] text-white text-base font-semibold px-6 py-3 rounded-full hover:bg-[#1c1c1c] transition-colors">
        Cari sekarang
      </button>
    </div>

    <ul className="menu-main-menu-container list-none p-0 m-0">
      {menuData.map((item) => (
        <li key={item.id} className="menu-item border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Link
              href={item.href}
              className="flex-1 px-4 py-4 text-black no-underline text-[14px] font-normal"
              onClick={(e) => {
                if (item.subMenu) {
                  e.preventDefault();
                  toggleSubMenu(item.id);
                } else {
                  toggleMenu();
                }
              }}
            >
              {item.title}
            </Link>
            {item.subMenu && (
              <span
                className="px-4 py-5"
                aria-hidden="true"
                onClick={() => toggleSubMenu(item.id)}
              >
                <svg
                  className={`w-4.5 h-4.5 transition-transform ${
                    openSubMenu === item.id ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>

          {item.subMenu && openSubMenu === item.id && (
            <ul className="sub-menu pl-6 pb-2 list-none">
              {item.subMenu.map((subItem) => (
                <li key={subItem.id} className="py-2">
                  <Link
                    href={subItem.href}
                    className="text-sm text-gray-600 no-underline hover:text-black"
                    onClick={toggleMenu}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>

    <p className="menu-copyright text-left text-sm text-gray-500 px-4 py-5">
      ©2026 Boleh Dicoba Digital All right reserved
    </p>
  </nav>
);

const SearchDropdown = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`hidden md:block absolute top-full left-0 right-0 bg-white z-50 shadow-lg border-b border-gray-200 transition-all duration-300 overflow-hidden ${
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >
    <div className="flex items-center gap-4 px-11 py-7">
      <div className="flex flex-1 items-center gap-4 border rounded-full px-4 py-3 bg-white">
        <svg
          className="w-6 h-6 text-black shrink-0"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
        </svg>
        <input
          type="text"
          placeholder="Masukkan kata kunci pencarian"
          className="flex-1 text-[14px] outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>
      <button className="shrink-0 bg-[#4d7bc8] text-white text-[14px] font-normal px-6 py-3 rounded-full hover:bg-[#1c1c1c] transition-colors">
        Cari sekarang
      </button>
    </div>
  </div>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setOpenSubMenu(null);
    }
  };

  const toggleSubMenu = (id: string) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-20">
      <div
        className={`relative flex items-center py-4 md:py-0 px-12.5 max-md:px-4 border max-w-none transition-colors ${
          scrolled ? "bg-white border-gray-200" : " border-transparent"
        }`}
      >
        <div className="flex items-center pl-0.75">
          <div className="md:hidden">
            <button
              className="site-navigation-toggle cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>
          <Link
            href="https://bolehdicoba.com"
            className="custom-logo-link hidden md:block"
          >
            <Image
              width={201}
              height={80}
              src="/images/Logo.png"
              className="custom-logo"
              alt="Boleh Dicoba Digital"
              priority
            />
          </Link>
        </div>

        <Link href="https://bolehdicoba.com" className="md:hidden pl-[11%]">
          <Image
            width={40}
            height={30}
            src="/images/Group-81518.png"
            className="custom-logo"
            alt="Boleh Dicoba Digital"
            priority
          />
        </Link>

        <div className="hidden md:flex lg:hidden flex-1 justify-center">
          <button
            className="site-navigation-toggle bg-[#eae8e6] p-2 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>

        <DesktopMenu menuData={menuData} />

        <div className="flex items-center gap-5 flex-1 md:flex-initial justify-end ml-auto lg:ml-0">
          <button
            className="hidden md:flex h-10 w-10 items-center justify-center text-[#222] hover:text-gray-500"
            aria-label="Search"
            onClick={() => setSearchOpen((prev) => !prev)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </button>

          <Link
            href="https://api.whatsapp.com/send?phone=6281805757585&text=Halo%20saya%20tau%20BDD%20dari%20Website,%20mohon%20diinformasikan%20terkait%20servisnya%20ya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white bg-[#4d7bc8] border-2 border-[#222] py-2.5 px-4.5 lg:py-2.75 lg:px-4.5 rounded-lg text-[16px] lg:text-base font-bold gap-1 hover:bg-[#1c1c1c] transition-colors"
          >
            <Image
              src="/images/32px-WhatsApp_icon.png"
              alt="WhatsApp icon"
              width={20}
              height={20}
              className="w-5 h-5 mt-0.5"
            />
            <span>Free Consultation!</span>
          </Link>
        </div>
      </div>

      <SearchDropdown isOpen={searchOpen} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        menuData={menuData}
        openSubMenu={openSubMenu}
        toggleSubMenu={toggleSubMenu}
      />
    </header>
  );
}

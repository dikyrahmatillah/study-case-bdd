import Link from "next/link";
import Image from "next/image";

const InstagramIcon = () => (
  <svg
    className="w-5.5 h-5.5 text-dark"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="instagram"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    ></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="w-5.5 h-5.5 text-dark"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="linkedin"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.5 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    ></path>
  </svg>
);

const TiktokIcon = () => (
  <svg
    className="w-5.5 h-5.5 text-dark"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="tiktok"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.2 121.2 0 0 0 1.86 22.17h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.14z"
    ></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer id="site-footer" className="relative w-full bg-white ">
      <div className="bg-[#513b6a] py-17.5 rounded-t-[60px]">
        <div className="max-w-285 mx-auto relative px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
            <div className="flex-none max-w-150 text-center md:text-left">
              <div className="mb-3.75">
                <h6 className="text-white text-[44px] font-normal leading-[1.26] m-0">
                  Let&apos;s grow and collaborate with us!
                </h6>
              </div>
              <div>
                <p className="text-white text-[16px] font-light leading-normal m-0">
                  Creating sustainable partnerships with our clients.
                  Transparency, honesty, and real talk are part of our
                  collaborative DNA.
                </p>
              </div>
            </div>

            <div className="flex-none">
              <div className="inline-block">
                <a
                  href="https://api.whatsapp.com/send?phone=6281805757585&text=Halo%20saya%20tau%20BDD%20dari%20Website,%20mohon%20diinformasikan%20terkait%20servisnya%20ya"
                  className="flex items-center gap-3.75 bg-[#ffb14c] border-2 border-[#222] hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222] text-black font-medium py-3.25 px-5 rounded-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start our Journey
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#513b6a] relative">
        <div className="bg-[#131313] rounded-t-[60px] relative z-10">
          <div className="py-17.5 pb-25 px-3.75 mx-auto lg:px-0 max-w-285">
            <div className="flex flex-col lg:flex-row lg:gap-30">
              <div className="grow shrink-0">
                <div className="max-w-50.25 mb-6.25">
                  <Link href="https://bolehdicoba.com" className="block">
                    <Image
                      src="/images/footer/Frame.png"
                      alt="Boleh Dicoba Digital"
                      width={201}
                      height={40}
                      className="h-10 w-auto"
                      decoding="async"
                    />
                  </Link>
                </div>
                <div className="lg:hidden mb-7.5">
                  <h4 className="text-white text-[24px] lg:text-[36px] font-semibold leading-3">
                    Get any update from us!
                  </h4>
                </div>
                <div className="max-w-104.75 mb-7.5">
                  <p className="text-[#b8b8b8] text-[16px] font-light leading-5.5 m-0">
                    We are players in the integrated digital marketing game,
                    devoted to the pursuit of collective sustainable growth that
                    ensures lasting success. Our mission is to elevate your
                    business to new heights by exploring actionable
                    possibilities.
                  </p>
                </div>
              </div>

              <div className="grow shrink-0">
                <div className="mb-7.5">
                  <div className="hidden lg:block mb-7.5">
                    <h4 className="text-white text-[36px] font-medium m-0 leading-normal">
                      Get any update from us!
                    </h4>
                  </div>
                  <form
                    className="w-full"
                    id="newsletter-form"
                    action="https://bolehdicoba.com/wp-admin/admin-ajax.php"
                    method="POST"
                  >
                    <div className="flex flex-row gap-3.75">
                      <input
                        type="hidden"
                        name="action"
                        value="form_subscribe_action"
                      />
                      <input
                        type="hidden"
                        name="page_submit"
                        value="footer-homepage"
                      />
                      <input
                        type="text"
                        name="email"
                        className="grow bg-[#222] border-2 border-[#222] text-white rounded-lg px-4 py-3 placeholder-white/50 focus:bg-white focus:text-[#222] outline-none transition-colors"
                        placeholder="Email address"
                      />
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-1.25 bg-[#ffb14c] border-2 border-[#222] hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222] text-black font-medium py-3.25 px-5 rounded-lg transition-all duration-300"
                      >
                        Subscribe
                        <ArrowRightIcon />
                      </button>
                    </div>
                    <div id="result-message-footer" className="mt-3"></div>
                  </form>
                </div>

                <div className="flex flex-row gap-12.25 mb-12.5">
                  <div className="flex-1">
                    <div className="mb-2.5">
                      <h6 className="text-white text-[14px] leading-5 uppercase m-0 font-normal">
                        FOLLOW US
                      </h6>
                    </div>
                    <div className="flex gap-[8.67px]">
                      <a
                        href="https://www.instagram.com/bolehdicobadigital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[36.67px] h-[36.67px] bg-white rounded-full flex items-center justify-center p-[7.3px] hover:bg-gray-200 transition-colors text-black"
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href="https://id.linkedin.com/company/bolehdicoba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[36.67px] h-[36.67px] bg-white rounded-full flex items-center justify-center p-[7.3px] hover:bg-gray-200 transition-colors text-black"
                      >
                        <LinkedinIcon />
                      </a>
                      <a
                        href="https://www.tiktok.com/@bolehdicobadigital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[36.67px] h-[36.67px] bg-white rounded-full flex items-center justify-center p-[7.3px] hover:bg-gray-200 transition-colors text-black"
                      >
                        <TiktokIcon />
                      </a>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-2.5">
                      <h6 className="text-white text-[14px] leading-5 uppercase m-0 font-normal">
                        OUR ECOSYSTEM
                      </h6>
                    </div>
                    <div className="flex flex-col md:flex-row lg:items-center gap-4.5">
                      <a
                        href="https://bolehbelajar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/footer/Frame-1.png"
                          alt="boleh belajar"
                          width={120}
                          height={29}
                          className="h-auto max-w-25"
                        />
                      </a>
                      <div className="hidden sm:block w-px h-6 bg-white"></div>
                      <a
                        href="https://sksdigital.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/footer/Group-40281.png"
                          alt="sks digital"
                          width={79}
                          height={39}
                          className="h-auto max-w-25"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 ">
              <div className="flex-1">
                <ul className="grid grid-cols-2 gap-y-7.5 gap-x-7.5 lg:flex lg:flex-col lg:flex-wrap lg:max-h-92.5 list-none p-0 mt-4.25">
                  <li className="flex flex-col gap-3.75">
                    <Link
                      href="/"
                      className="text-white text-[14px] font-normal uppercase leading-5"
                    >
                      BOLEH DICOBA DIGITAL
                    </Link>
                    <ul className="flex flex-col gap-3 pl-0 list-none">
                      <li>
                        <Link
                          href="/about-us"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/news-blog"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          News & Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/case-study"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/loyalty-program"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Loyalty Program
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/web-seo-audit"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Web & SEO Audit
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="flex flex-col gap-3.75">
                    <span className="text-white text-[14px] font-normal uppercase leading-5 lg:leading-6 cursor-default">
                      PROGRAM
                    </span>
                    <ul className="flex flex-col gap-3 pl-0 list-none">
                      <li>
                        <Link
                          href="/program/bulletin"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Bulletin by BDD
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/program/breakfast-club"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Breakfast Club
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/program/events"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Events
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="flex flex-col gap-3.75">
                    <span className="text-white text-[14px] font-normal uppercase leading-5 lg:leading-6 cursor-default">
                      SERVICES
                    </span>
                    <ul className="flex flex-col gap-3 pl-0 list-none">
                      <li>
                        <Link
                          href="/services/digital-advertising"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Digital Advertising
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/performance-creative"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Performance Creative
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/website-development"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Web Development & Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/seo"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/professional-service"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Professional Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/community-program-development"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Community Program Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://bolehbelajar.com/"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Digital Marketing Training by Boleh Belajar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/career"
                          className="text-white/70 text-[14px] lg:text-[16px] font-light leading-5 lg:leading-6 hover:text-white transition-colors block max-w-67.5"
                        >
                          Career
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-7.5">
                <div className="grow shrink-0 basis-82.5 max-w-82.5">
                  <div className="mb-3.75">
                    <h6 className="text-white text-[14px] font-normal uppercase leading-5 m-0">
                      OUR OFFICE
                    </h6>
                  </div>
                  <div className="flex flex-col gap-3.75">
                    <div>
                      <div className="flex items-center gap-1.25 mb-1.25">
                        <Image
                          src="/images/footer/Flag-Indonesia.png"
                          alt="office-item-title"
                          width={24}
                          height={16}
                          className="w-6 h-auto"
                        />
                        <h6 className="text-white font-light text-[16px] leading-6 m-0">
                          Bandung HQ
                        </h6>
                      </div>
                      <p className="text-white/70 text-[14px] lg:text-[16px] leading-6 m-0 font-light">
                        Jl. Lembong No.32, Braga, Kec. Sumur Bandung, Kota
                        Bandung, Jawa Barat 40111
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.25 mb-1.25">
                        <Image
                          src="/images/footer/Flag-Indonesia.png"
                          alt="office-item-title"
                          width={24}
                          height={16}
                          className="w-6 h-auto"
                        />
                        <h6 className="text-white font-light text-[14px] lg:text-[16px] leading-6 m-0">
                          Jakarta HQ
                        </h6>
                      </div>
                      <p className="text-white/70 text-[14px] lg:text-[16px] leading-6 m-0 font-light">
                        Jl. Kemang Raya Selatan VIII No.55, Jakarta Selatan,
                        Indonesia
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.25 mb-1.25">
                        <Image
                          src="/images/footer/Flag-Singapore.png"
                          alt="office-item-title"
                          width={24}
                          height={16}
                          className="w-6 h-auto"
                        />
                        <h6 className="text-white font-light text-[14px] lg:text-[16px] leading-6 m-0">
                          Singapore HQ
                        </h6>
                      </div>
                      <p className="text-white/70 text-[14px] lg:text-[16px] leading-6 m-0 font-light">
                        531A Upper Cross Street #04-95, Hong Lim Complex
                        Singapore 051531
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden sm:block">
                  <div className="mb-3.75">
                    <h6 className="text-white text-[14px] font-normal uppercase leading-5 m-0">
                      CONTACT US
                    </h6>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="contact-item">
                      <a
                        href="https://api.whatsapp.com/send?phone=6281805757585"
                        className="text-white/70 hover:text-white transition-colors text-[14px] lg:text-[16px] font-light leading-6"
                      >
                        <span className="text-[#ffb14c] font-normal">P.</span>{" "}
                        +62818 0575 7585
                      </a>
                    </div>
                    <div className="contact-item">
                      <a
                        href="mailto:hi@bolehdicoba.com"
                        className="text-white/70 hover:text-white transition-colors text-[14px] lg:text-[16px] font-light leading-6"
                      >
                        <span className="text-[#ffb14c] font-normal">E.</span>{" "}
                        hi@bolehdicoba.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] py-5 lg:py-7.5 border-t text-center">
        <p className="text-[#ffffffb3] text-[14px] lg:text-[16px] m-0 leading-5.5 font-light">
          ©2026 Boleh Dicoba Digital All right reserved
        </p>
      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaSpinner, FaChevronDown } from "react-icons/fa6";

export default function KnowMoreSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState<{
    msg: string;
    isError: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResultMessage(null);

    const formData = new FormData(e.currentTarget);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted", Object.fromEntries(formData.entries()));

      setResultMessage({
        msg: "Thank you! Your message has been sent.",
        isError: false,
      });
      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setResultMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setResultMessage({
        msg: "An error occurred. Please try again.",
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-[50px] pt-0 md:pt-[50px] pb-[100px] max-[750px]:items-start max-[750px]:px-0 bg-white md:bg-transparent  ">
      <div className="border-2 border-[#222222] rounded-[24px] mx-auto max-w-[1340px] w-full max-[750px]:border-t-2 max-[750px]:border-x-0 max-[750px]:border-b-0 max-[750px]:rounded-none max-[750px]:mt-0 max-[750px]:mb-0 max-[750px]:px-[15px]">
        <div className="max-w-[1140px] mx-auto mt-[70px] mb-[60px] flex gap-[30px] md:mx-[30px] xl:mx-auto max-[750px]:max-w-none max-[750px]:mx-0 max-[750px]:px-0 max-[750px]:mt-[50px] max-[750px]:mb-0 max-[750px]:pb-[50px] max-[750px]:gap-0">
          <div className="relative flex-1 mt-[30px] max-[750px]:hidden max-[750px]:mt-0">
            <Image
              src="/images/Group-40387-4.png"
              alt="Want to know more?"
              width={510}
              height={510}
              className="w-[510px] h-auto"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <div className="mb-[9px] max-[750px]:mb-[10px]">
              <h4 className="text-[#222222] text-[36px] font-normal leading-normal m-0 max-[750px]:text-[24px] max-[750px]:leading-[28px] max-[750px]:text-center">
                Want to know more?
              </h4>
            </div>
            <div className="mb-[26px]">
              <p className="text-[#222222] text-[16px] font-light leading-normal m-0 max-[750px]:text-[14px] max-[750px]:text-center">
                Fill out this form below &amp; consult with us!
              </p>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit} id="form_send_email">
                <input
                  type="hidden"
                  name="action"
                  value="my_form_knowmore_action"
                />
                <input type="hidden" name="page_submit" value="homepage" />

                <div className="mb-[15px] last:mb-0">
                  <label
                    htmlFor="first_name"
                    className="block text-[#222222] text-[14px] font-normal leading-normal mb-[10px]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Your Name"
                    className="w-full text-[#222] text-[16px] font-light leading-normal p-[15px] rounded-[8px] border border-[#BABABA] focus:outline-none focus:border-[#222] focus:shadow-[0_0_0_4px_rgba(73,137,255,0.25)] transition-shadow duration-300"
                    required
                  />
                </div>

                <div className="mb-[15px] last:mb-0">
                  <label
                    htmlFor="brand_name"
                    className="block text-[#222222] text-[14px] font-normal leading-normal mb-[10px]"
                  >
                    Brand Name
                  </label>
                  <input
                    type="text"
                    id="brand_name"
                    name="brand_name"
                    placeholder="Brand Name"
                    className="w-full text-[#222] text-[16px] font-light leading-normal p-[15px] rounded-[8px] border border-[#BABABA] focus:outline-none focus:border-[#222] focus:shadow-[0_0_0_4px_rgba(73,137,255,0.25)] transition-shadow duration-300"
                    required
                  />
                </div>

                <div className="mb-[15px] last:mb-0">
                  <label
                    htmlFor="wa_number"
                    className="block text-[#222222] text-[14px] font-normal leading-normal mb-[10px]"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    id="wa_number"
                    name="wa_number"
                    placeholder="WhatsApp Number"
                    className="w-full text-[#222] text-[16px] font-light leading-normal m-0 p-[15px] rounded-[8px] border border-[#BABABA] focus:outline-none focus:border-[#222] focus:shadow-[0_0_0_4px_rgba(73,137,255,0.25)] transition-shadow duration-300"
                    required
                  />
                </div>

                <div className="mb-[15px] last:mb-0">
                  <label
                    htmlFor="industry"
                    className="block text-[#222222] text-[14px] font-normal leading-normal mb-[10px]"
                  >
                    Industry
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      id="industry"
                      className="appearance-none w-full text-[#222] text-[16px] font-light leading-normal m-0 p-[15px] rounded-[8px] border border-[#BABABA] focus:outline-none focus:border-[#222] focus:shadow-[0_0_0_4px_rgba(73,137,255,0.25)] transition-shadow duration-300 bg-white pr-[40px]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Options
                      </option>
                      <option value="Fashion">Fashion</option>
                      <option value="Home and Living">Home and Living</option>
                      <option value="FMCG">FMCG</option>
                      <option value="FnB">FnB</option>
                      <option value="Moms and Baby">Moms and Baby</option>
                      <option value="Accesories">Accesories</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Services">Services</option>
                      <option value="Others">Others</option>
                    </select>
                    <FaChevronDown className="pointer-events-none absolute w-3 h-3 right-4 top-1/2 -translate-y-1/2 text-[#222]" />
                  </div>
                </div>

                <div className="mb-[15px] last:mb-0">
                  <label
                    htmlFor="services"
                    className="block text-[#222222] text-[14px] font-normal leading-normal mb-[10px]"
                  >
                    Services
                  </label>
                  <div className="relative">
                    <select
                      name="services"
                      id="services"
                      className="appearance-none w-full text-[#222] text-[16px] font-light leading-normal m-0 p-[15px] rounded-[8px] border border-[#BABABA] focus:outline-none focus:border-[#222] focus:shadow-[0_0_0_4px_rgba(73,137,255,0.25)] transition-shadow duration-300 bg-white pr-[40px]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Any services you&apos;re interested in?
                      </option>
                      <option value="Digital Advertising">
                        Digital Advertising
                      </option>
                      <option value="Creative Content & Liveshopping">
                        Creative Content & Liveshopping
                      </option>
                      <option value="Website Development & Maintenance">
                        Website Development & Maintenance
                      </option>
                      <option value="Search Engine Optimization">
                        Search Engine Optimization
                      </option>
                      <option value="Growth-Hack Consultation">
                        Growth-Hack Consultation
                      </option>
                      <option value="Digital Marketing Training">
                        Digital Marketing Training
                      </option>
                    </select>
                    <FaChevronDown
                      className="pointer-events-none absolute w-3 h-3 right-4 top-1/2 -translate-y-1/2 text-[#222]"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="mb-[15px] last:mb-0">
                  <label
                    htmlFor="get_information"
                    className="block text-[#222222] text-[14px] font-normal leading-normal mb-[10px]"
                  >
                    How do you know BDD?
                  </label>
                  <div className="relative">
                    <select
                      name="get_information"
                      id="get_information"
                      className="appearance-none w-full text-[#222] text-[16px] font-light leading-normal m-0 p-[15px] rounded-[8px] border border-[#BABABA] focus:outline-none focus:border-[#222] focus:shadow-[0_0_0_4px_rgba(73,137,255,0.25)] transition-shadow duration-300 bg-white pr-[40px]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Options
                      </option>
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="WhatsApp Blasting">
                        WhatsApp Blasting
                      </option>
                      <option value="Offline Events">Offline Events</option>
                    </select>
                    <FaChevronDown
                      className="pointer-events-none absolute w-3 h-3 right-4 top-1/2 -translate-y-1/2 text-[#222]"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="mb-[15px] last:mb-0">
                  <div className="mt-[25px] mr-[20px] mb-0 ml-0 text-right max-[750px]:m-[30px_0_0_0] max-[750px]:text-center">
                    <button
                      id="send_email"
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center bg-[#ffb14c] text-[#000] border-2 border-[#222222] rounded-[8px] px-[20px] py-[13px] text-[18px] font-medium leading-[20.16px] shadow-none transition-all duration-300 hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222] hover:text-[#000] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <FaSpinner
                          className="animate-spin h-5 w-5 text-[#000]"
                          aria-hidden
                        />
                      ) : (
                        <>
                          Consult Now
                          <FaArrowRight
                            className="ml-[16px] w-4.5 h-4.5"
                            aria-hidden
                          />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-[15px] last:mb-0">
                  <div id="result">
                    {resultMessage && (
                      <div
                        className={`mt-[20px] text-[16px] ${resultMessage.isError ? "text-[#ff0303]" : "text-green-600"}`}
                      >
                        {resultMessage.msg}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

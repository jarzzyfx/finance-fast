"use client";

import React from "react";
import Nigeria from "../assets/nigeria.svg";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Phone from "./global/Phone";
import Phone2 from "../assets/phone2.svg";
import Phone1 from "../assets/phone1.svg";
import Phone3 from "../assets/phone3.svg";
import Phone4 from "../assets/phone4.svg";
import huffpost from "../assets/huffpost.svg";
import bloomberg from "../assets/bloomberg.svg";
import tc from "../assets/tc.svg";
import havard from "../assets/hbr-ar.svg";
import ycombinator from "../assets/y-combinator.svg";
import { useGSAP } from "@gsap/react";
import { ShowPhone } from "@/animations/phoneSHowcase";

const Hero = () => {
  useGSAP(() => {
    ShowPhone(
      [".phone_one", ".phone_two", ".phone_three", ".phone_four"],
      "#showcase"
    );
  });
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-full max-w-[928px] px-4 lg:px-14 flex flex-col items-center gap-[20px] lg:gap-[40px]">
        <h1 className="text-[40px] lg:text-[48px] leading-[40px] lg:leading-[54px] font-bold text-[#1A1A1A] capitalize text-center">
          <span>Simplify</span> <span>Your</span> <span>International</span>{" "}
          <span>Transactions</span>
          <span>with</span> <span>One</span> <span>Platform</span>
        </h1>
        <p className="text-[14px] lg:text-[18px] font-normal text-center">
          Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast
          allows you effortlessly transfer money anywhere in the world with
          confidence and ease.
        </p>
        {/* input */}
        <div className="overflow-hidden w-full max-w-[498px] h-[50px] lg:h-[60px] cursor-pointer bg-white ring-1 ring-slate-400 hover:ring-[#6364ff] transition-colors duration-300 ease-linear rounded-full flex items-center gap-2">
          <Button
            variant={"ghost"}
            className="h-full gap-1 hover:bg-slate-200 hidden lg:flex"
            id="country_code"
          >
            <Image src={Nigeria} alt="nigeria flag" />
            <ChevronDown width={24} height={24} />
            <span className="text-[18px] font-normal">+234</span>
          </Button>
          <Input className="w-2/3 h-full bg-transparent focus:border-none focus:ring-0 focus:outline-none active:border-none shadow-none ring-0 border-none outline-none" />
          <Button className="mr-1 group hover:ring-1 hover:ring-[#D8C6FF] rounded-3xl h-[48px] text-[14px] lg:text-[18px] font-medium bg-[#6364ff] text-white hover:bg-transparent ">
            <span className="group-hover:-translate-x-4 group-hover:-scale-x-50 group-hover:opacity-0 group-hover:text-[#6364ff] transition-all  ease-in-out duration-300">
              Download Now
            </span>
            <Download
              //   width={24}
              //   hanging={24}
              className="g:w-[24px] w-[12px] h-[12px] lg:h-[24px] text-[#6364ff] lg:group-hover:-translate-x-14 group-hover:-translate-x-10 group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all  ease-in-out duration-300"
            />
          </Button>
        </div>
      </section>

      <section
        id="showcase"
        className="w-full translate-y-[200px] flex justify-center gap-10 items-center relative"
      >
        <div
          id="blur_left"
          className="w-[255px] h-[155px] bg-gradient-to-r from-[#E5DBFB] to-transparent absolute top-[50%] left-0 z-20"
        />
        <div
          id="blur_left"
          className="w-[255px] h-[155px] bg-gradient-to-r from-transparent to-[#E5DBFB] absolute top-[50%] right-0 z-20"
        />
        <div
          id="banner"
          className="group w-full h-[155px] bg-[#E5DBFB] absolute top-[50%] left-0 z-10 flex items-center gap-[200px] px-14 overflow-hidden
          "
        >
          <section
            id="banner_carrousel"
            aria-hidden={true}
            className="flex items-center gap-[200px] w-[100%] animate-scroll group-hover:paused"
          >
            <h3 className="w-[339px] font-medium text-[18px] capitalize">
              We&apos;re have been recognized by Leading Finance Publications
              and Organizations.
            </h3>
            <Image className="max-w-none" src={huffpost} alt="huffpost" />
            <Image className="max-w-none" src={bloomberg} alt="bloomberg" />
            <Image className="max-w-none" src={tc} alt="tc" />
            <Image className="max-w-none" src={havard} alt="havard" />
            <Image className="max-w-none" src={ycombinator} alt="ycombinator" />
          </section>
          <section
            id="banner_carrousel"
            className="flex items-center gap-[200px] w-[100%] animate-scroll group-hover:paused"
          >
            <h3 className="w-[339px] font-medium text-[18px] capitalize">
              We&apos;re have been recognized by Leading Finance Publications
              and Organizations.
            </h3>
            <Image className="max-w-none" src={huffpost} alt="huffpost" />
            <Image className="max-w-none" src={bloomberg} alt="bloomberg" />
            <Image className="max-w-none" src={tc} alt="tc" />
            <Image className="max-w-none" src={havard} alt="havard" />
            <Image className="max-w-none" src={ycombinator} alt="ycombinator" />
          </section>
        </div>
        <div
          id="cover_banner"
          className="w-full h-[250px] lg:h-[310px] bg-[#f9f9f9] absolute top-[50%] translate-y-[155px] left-0 z-30
          "
        />
        <Phone id="phone_one" className="phone_one">
          <Image src={Phone1} alt="img1" fill />
        </Phone>
        <Phone id="phone_two" className="phone_two">
          <Image src={Phone2} alt="img2" fill />
        </Phone>
        <Phone id="phone_three" className="phone_three">
          <Image src={Phone3} alt="img1" fill />
        </Phone>
        <Phone id="phone_four" className="phone_four">
          <Image src={Phone4} alt="img1" fill />
        </Phone>
      </section>
    </main>
  );
};

export default Hero;

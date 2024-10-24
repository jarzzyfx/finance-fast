"use client";

import { X } from "lucide-react";
import React from "react";
import Phone from "./global/Phone";
import Image from "next/image";
import Phone2 from "../assets/phone2.svg";
import { crossBorderList } from "@/lib/constanst";
import { useGSAP } from "@gsap/react";
import { headingReveal } from "@/animations/heading";

const Features = () => {
  useGSAP(() => {
    headingReveal(".f1-sh", ".f1-bh", ".features", ".desc-1");
  });
  return (
    <main className="features min-h-screen flex flex-col gap-10 items-center justify-center mt-[400px] px-0 lg:px-[150px]">
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <h3 className="overflow-hidden text-[12px] lg:text-[16px] font-semibold text-[#6364FF] text-center uppercase relative">
          Cross-Border Transactions
          <div className="f1-sh bg-[#F9F9F9] absolute top-0 left-0 w-full h-full"></div>
        </h3>
        <h1 className="text-[40px] lg:text-[48px] font-bold text-black max-w-[622px] px-4 text-center capitalize flex flex-wrap justify-center gap-2">
          <span className="overflow-hidden relative">
            <div className="f1-bh absolute top-0 left-0 w-full h-full bg-[#f9f9f9]" />
            Say
          </span>
          <span className="relative overflow-hidden">
            <div className="f1-bh absolute top-0 left-0 w-full h-full bg-[#f9f9f9]" />
            Goodbye
          </span>
          <span className="relative overflow-hidden">
            <div className="f1-bh absolute top-0 left-0 w-full h-full bg-[#f9f9f9]" />
            to
          </span>
          <span className="relative overflow-hidden">
            <div className="f1-bh absolute top-0 left-0 w-full h-full bg-[#f9f9f9]" />
            International
          </span>
          <span className="relative overflow-hidden">
            <div className="f1-bh absolute top-0 left-0 w-full h-full bg-[#f9f9f9]" />
            Payment
          </span>
          <span className="relative overflow-hidden">
            <div className="f1-bh absolute top-0 left-0 w-full h-full bg-[#f9f9f9]" />
            Hassles
          </span>{" "}
        </h1>
        <p className="desc-1 opacity-0 text-[12px] lg:text-[16px] font-normal text-black max-w-[560px] px-4 text-center">
          Start your journey to hassle free Cross-Border Payments by downloading
          the FastFinance app from your iOS of Android store.
        </p>
      </div>

      <section
        className="showcase flex flex-col lg:flex-row items-center justify-center gap-[40px] w-full lg:w-[70%] h-[full] lg:h-[542px] p-4"
        id="showcase"
      >
        <ul className="w-[90%] max-w-[556px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-2/5  bg-gradient-to-b from-[#f9f9f9] from-5% to-90% to-[#f9f9f984]" />
          <div className="absolute bottom-0 left-0 w-full h-2/5  bg-gradient-to-t from-[#f9f9f9] from-5% to-90% to-[#f9f9f984]" />
          <div className="features flex items-start flex-col gap-2 justify-start h-full">
            {crossBorderList.map((list) => (
              <li
                key={list}
                className="w-auto p-2 rounded-full text-[12px] lg:text-[16px] font-normal text-black flex items-center gap-2"
              >
                <X width={12} height={12} className="text-[#F20C0C]" />
                <span>{list}</span>
              </li>
            ))}
          </div>
        </ul>
        <div
          className="w-[90%] flex lg:flex-col h-full items-center gap-2"
          id="separators"
        >
          <div
            id="separator"
            className="lg:h-full lg:w-[1px] w-full h-[1px] bg-[#949494] z-30"
          />
          <span className="text-[14px] lg:text-[18px] font-bold text-black">
            vs
          </span>
          <div
            id="separator"
            className="lg:h-full lg:w-[1px] w-full h-[1px] bg-[#949494] z-30"
          />
        </div>
        <div
          id="phone_container"
          className="w-[90%] mx-auto lg:mx-0 max-w-[618px] h-full rounded-[24px] bg-[#EAE7FF] p-6 flex flex-col items-center gap-4"
        >
          <div
            className="w-[314px] h-[288px] overflow-hidden flex justify-center pt-8"
            id="phone_box"
          >
            <Phone>
              <Image src={Phone2} alt="image" />
            </Phone>
          </div>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-black text-center">
            Global accounts in minutes
          </h2>
          <p className="max-w-[459px] text-[12px] lg:text-[16px] font-normal text-black text-center">
            FinanceFast solves problems by proving low fees, fast transfers,
            secure transactions, and a user-friendly platform.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="text-[12px] lg:text-[16px] font-semibold text-[#6364FF] text-center uppercase">
          real-time exchange rate
        </h3>
        <h1 className="text-[40px] lg:text-[48px] font-bold text-black max-w-[622px] px-4 text-center capitalize">
          Effortlessly Convert Currency
        </h1>
        <p className="text-[12px] lg:text-[16px] font-normal text-black max-w-[560px] px-4 text-center">
          Convert your currency from Pounds to Naira or Naira to Dollars.
          Convert Currency Anytime, Anywhere with FinanceFast&apos;s Seamless
          and Efficient Service.
        </p>
      </div>

      <section
        className="showcase flex flex-col lg:flex-row items-center justify-center gap-[40px] w-full lg:w-[70%] h-[full] lg:h-[542px] p-4"
        id="showcase"
      >
        <div
          id="phone_container"
          className="w-[90%] mx-auto lg:mx-0 max-w-[618px] h-full rounded-[24px] bg-[#EAE7FF] p-6 flex flex-col items-center gap-4"
        >
          <div
            className="w-[314px] h-[288px] overflow-hidden flex justify-center pt-8"
            id="phone_box"
          >
            <Phone>
              <Image src={Phone2} alt="image" />
            </Phone>
          </div>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-black text-center">
            Global accounts in minutes
          </h2>
          <p className="max-w-[459px] text-[12px] lg:text-[16px] font-normal text-black text-center">
            FinanceFast solves problems by proving low fees, fast transfers,
            secure transactions, and a user-friendly platform.
          </p>
        </div>
        <div
          className="w-[90%] flex lg:flex-col h-full items-center gap-2"
          id="separators"
        >
          <div
            id="separator"
            className="lg:h-full lg:w-[1px] w-full h-[1px] bg-[#949494] z-30"
          />
          <span className="text-[14px] lg:text-[18px] font-bold text-black">
            vs
          </span>
          <div
            id="separator"
            className="lg:h-full lg:w-[1px] w-full h-[1px] bg-[#949494] z-30"
          />
        </div>
        <ul className="w-[90%] max-w-[556px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-2/5  bg-gradient-to-b from-[#f9f9f9] from-5% to-90% to-[#f9f9f984]" />
          <div className="absolute bottom-0 left-0 w-full h-2/5  bg-gradient-to-t from-[#f9f9f9] from-5% to-90% to-[#f9f9f984]" />
          <div className="features flex items-start flex-col gap-2 justify-start h-full">
            {crossBorderList.map((list) => (
              <li
                key={list}
                className="w-auto p-2 rounded-full text-[12px] lg:text-[16px] font-normal text-black flex items-center gap-2"
              >
                <X width={12} height={12} className="text-[#F20C0C]" />
                <span>{list}</span>
              </li>
            ))}
          </div>
        </ul>
      </section>

      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="text-[12px] lg:text-[16px] font-semibold text-[#6364FF] text-center uppercase">
          Easily Receive & Request
        </h3>
        <h1 className="text-[40px] lg:text-[48px] font-bold text-black max-w-[622px] px-4 text-center capitalize">
          Experience Seamless Money Transfers
        </h1>
        <p className="text-[12px] lg:text-[16px] font-normal text-black max-w-[560px] px-4 text-center">
          Simplify Your Money Management with Receive & Request Payments
        </p>
      </div>

      <section
        className="showcase flex flex-col lg:flex-row items-center justify-center gap-[40px] w-full lg:w-[70%] h-[full] lg:h-[542px] p-4"
        id="showcase"
      >
        <ul className="w-[90%] max-w-[556px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-2/5  bg-gradient-to-b from-[#f9f9f9] from-5% to-90% to-[#f9f9f984]" />
          <div className="absolute bottom-0 left-0 w-full h-2/5  bg-gradient-to-t from-[#f9f9f9] from-5% to-90% to-[#f9f9f984]" />
          <div className="features flex items-start flex-col gap-2 justify-start h-full">
            {crossBorderList.map((list) => (
              <li
                key={list}
                className="w-auto p-2 rounded-full text-[12px] lg:text-[16px] font-normal text-black flex items-center gap-2"
              >
                <X width={12} height={12} className="text-[#F20C0C]" />
                <span>{list}</span>
              </li>
            ))}
          </div>
        </ul>
        <div
          className="w-[90%] flex lg:flex-col h-full items-center gap-2"
          id="separators"
        >
          <div
            id="separator"
            className="lg:h-full lg:w-[1px] w-full h-[1px] bg-[#949494] z-30"
          />
          <span className="text-[14px] lg:text-[18px] font-bold text-black">
            vs
          </span>
          <div
            id="separator"
            className="lg:h-full lg:w-[1px] w-full h-[1px] bg-[#949494] z-30"
          />
        </div>
        <div
          id="phone_container"
          className="w-[90%] mx-auto lg:mx-0 max-w-[618px] h-full rounded-[24px] bg-[#EAE7FF] p-6 flex flex-col items-center gap-4"
        >
          <div
            className="w-[314px] h-[288px] overflow-hidden flex justify-center pt-8"
            id="phone_box"
          >
            <Phone>
              <Image src={Phone2} alt="image" />
            </Phone>
          </div>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-black text-center">
            Global accounts in minutes
          </h2>
          <p className="max-w-[459px] text-[12px] lg:text-[16px] font-normal text-black text-center">
            FinanceFast solves problems by proving low fees, fast transfers,
            secure transactions, and a user-friendly platform.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Features;

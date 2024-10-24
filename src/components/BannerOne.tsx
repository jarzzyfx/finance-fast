import React from "react";
import Lines from "../assets/Group.svg";
import Image from "next/image";
import { Check } from "lucide-react";
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import redZap from "../assets/red-zap.svg";

const BannerOne = () => {
  return (
    <main className="w-full h-screen flex items-center">
      <div className="mx-auto w-[90%] max-w-[1264px] h-[432px] rounded-[24px] bg-[#5A5DF7] relative overflow-hidden flex flex-col lg:flex-row">
        {/* bg */}
        <Image
          src={Lines}
          alt="lines image"
          className="absolute right-0 top-0 "
        />
        {/* content */}
        <section className="h-full w-full lg:w-2/3 flex flex-col justify-center gap-[20px] lg:gap-[40px] px-[40px]">
          <h1 className="text-center lg:text-left text-[24px] lg:text-[40px] leading-[28px] lg:leading-[48px] font-bold text-white w-[90%]">
            Make International Payments a Breeze with FinanceFast
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between w-[80%]">
            <span className="text-white font-medium text-[14px] lg:text-[20px] flex items-center gap-4">
              <Check className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]" /> No
              hidden fees
            </span>
            <span className="text-white font-medium text-[14px] lg:text-[20px] flex items-center gap-4">
              <Check className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]" /> No
              hidden fees
            </span>
            <span className="text-white font-medium text-[14px] lg:text-[20px] flex items-center gap-4">
              <Check className="w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]" /> No
              hidden fees
            </span>
          </div>
        </section>

        <section className="relative h-full w-full lg:w-1/3 flex flex-col justify-center gap-[10px] lg:gap-[20px] px-8 lg:px-0 lg:pr-10">
          <Image
            src={card1}
            alt="image1"
            className="-translate-x-5 lg:-translate-x-20 w-[230px] h-[60px] lg:h-auto lg:w-auto"
          />
          <Image
            src={card2}
            alt="image2"
            className="translate-x-10 lg:translate-x-20 w-[230px] h-[60px] lg:h-auto lg:w-auto"
          />
          <Image
            src={card3}
            alt="image3"
            className=" w-[230px] h-[60px] lg:h-auto lg:w-auto"
          />
          <Image
            src={redZap}
            alt="zap"
            className="absolute top-0 right-0 -translate-x-[50px] -translate-y-[20px] lg:translate-y-[50px] scale-75 lg:scale-100"
          />
        </section>
      </div>
    </main>
  );
};

export default BannerOne;

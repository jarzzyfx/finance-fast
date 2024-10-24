import Image from "next/image";
import React from "react";
import Lines from "../assets/goupLines.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import Apple from "../assets/Apple.svg";
import Chat from "../assets/chat.svg";
import { Button } from "./ui/button";
import Phone from "./global/Phone";
import Phone2 from "../assets/phone2.svg";

const BannerTwo = () => {
  return (
    <main className="w-full h-screen flex items-center">
      <div className="mx-auto w-[90%] max-w-[1264px] h-[432px] rounded-[24px] bg-[#563ACC] relative overflow-hidden flex">
        <Image src={Lines} alt="lines" />
        <section className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-6 p-4 lg:p-14">
          <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-8 mx-auto lg:mx-0">
            <h1 className="text-[24px] lg:text-[40px] lg:leading-[46px] font-bold text-white text-center lg:text-left">
              One Solution for All Your Cross-Border Payments
            </h1>
            <div className="flex items-center gap-2 lg:gap-4">
              <Button className="h-auto items-center p-1 lg:p-2 gap-1 lg:gap-2">
                <Image src={GooglePlay} alt="google play" />
                <div className="flex flex-col gap-1 lg:gap-2 items-start">
                  <span className=" text-[12px] lg:text-[16px] font-medium text-white uppercase">
                    get it on
                  </span>
                  <span className="text-[18px] lg:text-[32px] font-bold text-white capitalize">
                    Google Play
                  </span>
                </div>
              </Button>
              <Button className="h-auto items-center p-1 lg:p-2 gap-1 lg:gap-2">
                <Image src={Apple} alt="google play" />
                <div className="flex flex-col gap-1 lg:gap-2 items-start">
                  <span className=" text-[12px] lg:text-[16px] font-medium text-white uppercase">
                    get it on
                  </span>
                  <span className="text-[18px] lg:text-[32px] font-bold text-white capitalize">
                    App Store
                  </span>
                </div>
              </Button>
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              src={Chat}
              alt="chat"
              className="absolute top-0 left-0 lg:relative translate-y-[10%] scale-75 lg:scale-100 z-30"
            />
            <Phone className="lg:translate-x-[100%] translate-x-[25%] lg:-translate-y-[20%] translate-y-[10%]">
              <Image src={Phone2} alt="phone2" />
            </Phone>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BannerTwo;

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import AvatarPng from "../assets/Avatar.png";

const Testimonials = () => {
  return (
    <main className="w-full h-screen flex flex-col py-14 px-4 lg:px-14 gap-[40px] lg:gap-[100px] ">
      <div className="flex flex-col gap-2 lg:gap-4 items-center">
        <h3 className="text-[12px] lg:text-[16px] font-semibold text-[#6364FF] text-center uppercase">
          Testimonials
        </h3>
        <h1 className="text-[40px] lg:text-[48px] font-bold text-black max-w-[622px] px-4 text-center capitalize">
          What Our Customers are Saying
        </h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-[#E5DBFB] ring-[1px] ring-[#949494] ">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-[14px] lg:text-[24px] font-medium lg:leading-[35px] text-center">
                      “I&apos;ve been using FinanceFast for a few months now and
                      it&apos;s completely transformed the way I send money to
                      my family abroad. The platform is so easy to use and
                      transfers are always fast and secure.”
                    </span>
                  </CardContent>
                  <CardFooter className="h-[80px] lg:h-[128px] justify-center border-t-[1px] border-[#949494] bg-[#E5DBFB]">
                    <div className="flex items-center gap-2">
                      <Image
                        src={AvatarPng}
                        alt="avatar"
                        className="rounded-full scale-75 lg:scale-100"
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[14px] lg:text-[20px] font-bold capitalize text-black">
                          Carl Rowan
                        </h3>
                        <p className="text-[12px] lg:text-[16px] font-normal text-black capitalize">
                          Aglets Inc
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-x-[600px]" />
        <CarouselNext className="-translate-x-[600px]" />
      </Carousel>
    </main>
  );
};

export default Testimonials;

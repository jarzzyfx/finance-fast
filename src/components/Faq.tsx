import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faq } from "@/lib/constanst";

const Faq = () => {
  return (
    <main className="w-full px-4 lg:px-14 py-[100px] flex flex-col gap-[40px] lg:gap-[100px] justify-center min-h-screen">
      <div className="flex flex-col gap-2 items-center lg:gap-4">
        <h3 className="text-[12px] lg:text-[16px] font-semibold text-[#6364FF] text-center uppercase">
          FAQ’S
        </h3>
        <h1 className="text-[40px] lg:text-[48px] font-bold text-black max-w-[622px] px-4 text-center capitalize">
          Got questions?
        </h1>
        <p className="text-[12px] lg:text-[16px] font-normal text-black max-w-[560px] px-4 text-center">
          Get the answers to your questions about FastFinance.
        </p>
      </div>

      <Accordion
        className="max-w-[719px] w-full mx-auto px-4 lg:px-0"
        type="single"
        collapsible
      >
        {faq.map((q, index) => (
          <AccordionItem key={index} value={`${index}`}>
            <AccordionTrigger className="text-left text-[16px] lg:text-[20px] font-bold text-black">
              {q.question}
            </AccordionTrigger>
            <AccordionContent className="text-[12px] lg:text-[16px] text-black font-normal">
              {q.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default Faq;

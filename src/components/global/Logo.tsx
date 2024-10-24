"use client";

import { defaultState, hoverState } from "@/animations/logo";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const route = useRouter();
  useGSAP(() => {
    defaultState();
  });
  return (
    <div
      onClick={() => {
        route.push("/");
      }}
      onMouseEnter={hoverState}
      onMouseLeave={defaultState}
      className={`flex items-center w-fit gap-2 hover:cursor-pointer z-50`}
    >
      <div className={`flex items-center gap-[1px]`} id="triangles_container">
        <div className="triangle w-10 h-10" id="triangle1" />
        <div className="triangle w-10 h-10" id="triangle2" />
      </div>
      <div className="text-[24px] font-medium overflow-hidden pr-2">
        <div id="logo_text">Financefast</div>
      </div>
    </div>
  );
};

export default Logo;

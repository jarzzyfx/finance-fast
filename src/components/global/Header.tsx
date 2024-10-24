"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { flexRowHorizontal } from "@/lib/class.utility";
import { navigation } from "@/lib/constanst";
import Link from "next/link";
import { Button } from "../ui/button";
import { Smartphone } from "lucide-react";
import Hamburger from "hamburger-react";
import { toggleNav } from "@/animations/navbar";

const Header = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    toggleNav(nav);
  }, [nav]);
  return (
    <header
      className={`w-full px-4 lg:px-14 py-10 ${flexRowHorizontal} justify-between overflow-hidden z-50`}
    >
      <Logo />
      {/* pc nav */}
      <nav className="hidden lg:flex items-center gap-[48px] ">
        {navigation.map((nav) => (
          <Link
            className="group text-[16px] font-normal relative overflow-hidden hover:text-[#6364ff] active:text-[#6364ff] transition-colors ease-in-out duration-200 delay-300"
            key={nav.text}
            href={nav.link}
          >
            {nav.text}
            <div className="absolute top-0 left-0 bg-[#6364ff] w-full h-full translate-y-[100%] group-hover:-translate-y-[100%] transition-transform ease-in-out duration-300" />
          </Link>
        ))}
        <Button className="group hover:ring-1 hover:ring-[#6364ff] rounded-3xl w-[159px] h-[48px] text-[18px] font-medium bg-[#D8C6FF] text-black hover:bg-transparent ">
          <Smartphone
            className="group-hover:translate-x-2 group-hover:opacity-0 transition-all  ease-in-out duration-300"
            width={24}
            height={24}
          />
          <span className="group-hover:-translate-x-4 group-hover:text-[#6364ff] transition-all  ease-in-out duration-300">
            Download
          </span>
        </Button>
      </nav>
      {/* handbugger */}
      <div className="z-50 lg:hidden">
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              setNav(true);
            } else {
              setNav(false);
            }
          }}
          direction="right"
        />
      </div>

      {/* md device nav */}
      <nav className="mobile_nav fixed right-0 top-0 w-full h-full bg-white translate-x-[100%] flex flex-col gap-2 p-4 pt-[100px] items-center z-40">
        {navigation.map((nav) => (
          <Link
            className="group border-b-1 text-[16px] font-normal relative overflow-hidden hover:text-[#6364ff] active:text-[#6364ff] transition-colors ease-in-out duration-200 delay-300"
            key={nav.text}
            href={nav.link}
          >
            {nav.text}
            <div className="absolute top-0 left-0 bg-[#6364ff] w-full h-full translate-y-[100%] group-hover:-translate-y-[100%] transition-transform ease-in-out duration-300" />
          </Link>
        ))}
        <Button className="mt-auto group hover:ring-1 hover:ring-[#6364ff] rounded-3xl w-[159px] h-[48px] text-[18px] font-medium bg-[#D8C6FF] text-black hover:bg-transparent ">
          <Smartphone
            className="group-hover:translate-x-2 group-hover:opacity-0 transition-all  ease-in-out duration-300"
            width={24}
            height={24}
          />
          <span className="group-hover:-translate-x-4 group-hover:text-[#6364ff] transition-all  ease-in-out duration-300">
            Download
          </span>
        </Button>
      </nav>
    </header>
  );
};

export default Header;

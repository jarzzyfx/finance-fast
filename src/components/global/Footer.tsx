import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Rss } from "lucide-react";
import { Input } from "../ui/input";
import InstagramBl from "../../assets/instagram.svg";
import TiktokBl from "../../assets/tiktok.svg";
import TwitterBl from "../../assets/twitter.svg";
import YoutubeBl from "../../assets/youtube.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] w-full p-14 h-[365px] flex flex-col gap-10">
      <section className="flex flex-wrap gap-[72px]">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-[20px] font-bold capitalize text-black">
            Company
          </h3>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>Blog</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-[20px] font-bold capitalize text-black">
            Product
          </h3>
          <Link href={"#"}>Money conversion</Link>
          <Link href={"#"}>International transactions</Link>
          <Link href={"#"}>International transactions</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-[20px] font-bold capitalize text-black">
            Legal
          </h3>
          <Link href={"#"}>Terms & conditions</Link>
          <Link href={"#"}>Privacy policy</Link>
        </div>
        <div className="hidden lg:flex flex-col gap-2 ml-auto">
          <h3 className="mb-2 text-[20px] font-bold capitalize text-black">
            Sign up for our newsletter
          </h3>
          <div className="overflow-hidden w-[498px] h-[60px] cursor-pointer bg-white ring-1 ring-slate-400 hover:ring-[#6364ff] transition-colors duration-300 ease-linear rounded-full lg:flex items-center gap-2">
            <Input className="w-2/3 h-full bg-transparent focus:border-none focus:ring-0 focus:outline-none active:border-none shadow-none ring-0 border-none outline-none" />
            <Button className="ml-auto mr-[4px] group hover:ring-1 hover:ring-[#D8C6FF] rounded-3xl h-[48px] text-[18px] font-medium bg-[#6364ff] text-white hover:bg-transparent ">
              <span className="group-hover:-translate-x-4 group-hover:-scale-x-50 group-hover:opacity-0 group-hover:text-[#6364ff] transition-all  ease-in-out duration-300">
                Subscribe
              </span>
              <Rss
                //   width={24}
                //   hanging={24}
                className="w-[24px] h-[24px] text-[#6364ff] group-hover:-translate-x-7 group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all  ease-in-out duration-300"
              />
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex items-center gap-4">
          <Button className="bg-white rounded-full" size={"icon"}>
            <Image src={InstagramBl} alt="instagram" />
          </Button>
          <Button className="bg-white rounded-full" size={"icon"}>
            <Image src={TwitterBl} alt="twitter" />
          </Button>
          <Button className="bg-white rounded-full" size={"icon"}>
            <Image src={TiktokBl} alt="tiktok" />
          </Button>
          <Button className="bg-white rounded-full" size={"icon"}>
            <Image src={YoutubeBl} alt="youtube" />
          </Button>
        </div>
        <p className="text-[14px] font-normal">
          © 2023, FinanaceFast All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;

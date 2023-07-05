"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <header className="fixed flex z-20 w-full items-center justify-between bg-mistyrose-100 px-[20px] md:px-[32px] lg:px-[65px] md:h-[80px] lg:h-[112px]">
      <Image
        className="w-[150px] h-[88px]"
        alt="Logo"
        src="/logo.svg"
        width={200}
        height={120}
      />
      <div id="menuToggle" className="md:hidden">
        <input
          checked={open}
          type="checkbox"
          onChange={(v) => {
            setOpen(v.target.checked);
          }}
        />

        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <Link href="">
              <span onClick={handleClick}> Home</span>
            </Link>
          </li>
          <li>
            <Link href={"#why-us"}>
              <span onClick={handleClick}> Why Us</span>
            </Link>
          </li>
          <li>
            <Link href={"#our-pricing"}>
              <span onClick={handleClick}> Pricing</span>
            </Link>
          </li>

          <li>
            <Link href={"#contact-us"}>
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
      <nav className="hidden md:flex">
        <div className="flex items-center mr-4">
          <Link
            href={"#why-us"}
            className="relative cursor-pointer font-medium flex items-center justify-center w-[77px] h-[38px] shrink-0"
          >
            Why Us
          </Link>
          <Link
            href={"#our-pricing"}
            className="relative cursor-pointer font-medium flex items-center justify-center w-[113px] h-[38px] shrink-0"
          >
            Our Pricing
          </Link>
          <Link
            href={"#contact-us"}
            className="relative cursor-pointer font-medium flex items-center justify-center w-[109px] shrink-0"
          >
            Contact Us
          </Link>
        </div>
        <button className="w-[175px] h-12 text-center rounded-[62px] bg-royalblue text-[16px] text-white">
          Sign up for Free
        </button>
      </nav>
      {/* <div className="w-[1440px] h-28 text-center text-lg">
        <div className="absolute top-[0px] left-[0px] bg-mistyrose-100 w-[1440px] h-28" />
        <div className="absolute top-[37px] left-[837px] flex flex-row items-center justify-start gap-[24px]">
          <div className="relative cursor-pointer font-medium flex items-center justify-center w-[77px] h-[38px] shrink-0">
            Why Us
          </div>
          <div className="relative cursor-pointer font-medium flex items-center justify-center w-[113px] h-[38px] shrink-0">
            Our Pricing
          </div>
          <div className="relative cursor-pointer font-medium flex items-center justify-center w-[109px] shrink-0">
            Contact Us
          </div>
        </div>
      </div>
      <div className="absolute top-[32px] left-[1206px] w-[175px] h-12 text-center text-[16px] text-white">
        <div className="absolute top-[0px] left-[0px] rounded-[62px] bg-royalblue w-[175px] h-12" />
        <div className="absolute top-[14px] left-[27px] cursor-pointer font-medium">
          Sign up for Free
        </div>
      </div> */}
    </header>
  );
};

export default Header;

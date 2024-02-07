"use client";

import React, { useState } from "react";
import Image from "next/image";
import useWindowHeight from "@/hooks/useDimension";

const Subscribe = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-between items-center mt-14">
      <div className={`font-nunito`}>
        <p className="text-white text-sm lg:text-base">
          Subscribe to get latest updates on our Summits
        </p>
        <div className="mt-4 flex w-full">
          <input
            type="email"
            className="w-[80%] lg:w-[362px] h-[55px] rounded-l-lg bg-gray-100 outline-none text-[#282828] px-4 text-base"
            placeholder="Enter Email Address"
          />
          <button className="w-[160px] h-[55px] rounded-r-lg bg-primary1-700 text-base text-white">
            Subscribe
          </button>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="hidden xl:flex items-center gap-4 cursor-pointer"
      >
        <p className={` font-nunito text-white`}>Back to Top</p>
        <Image src={"/images/top.svg"} alt="" width={32} height={32} />
      </button>
    </div>
  );
};

export default Subscribe;

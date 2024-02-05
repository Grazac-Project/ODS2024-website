"use client";

import React from "react";
import Image from "next/image";
import { teams } from "@/libs";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

const Why = () => {
  const WhyRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(WhyRef);
  return (
    <div
      ref={WhyRef}
      className={cn(
        " font-nunito mt-20 z-20 container mt-24`",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <h2 className="text-black font-semibold text-[40px] font-montserrat">
        Why attend ODS?
      </h2>

      <div className="mt-10 flex justify-between">
        <div className="w-[251px] h-[180px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy1.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium text-[#282828] mt-4`}
            >
              Access to industry experts
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[180px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box2.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy2.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium text-[#282828] mt-4`}
            >
              Networking Opportunities
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[180px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy3.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium text-[#282828] mt-4`}
            >
              Cut edge Ai exploration
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[180px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box2.svg"}
              alt="box"
              width={251}
              height={180}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy4.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-mediumtext-[#282828] mt-4`}
            >
              Have fun and unwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

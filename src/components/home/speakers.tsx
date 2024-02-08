"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SpeakersSlder from "../sloder/speakers";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";
import Link from "next/link";

const SpeakerSection = () => {
  const SpeakersRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SpeakersRef);
  return (
    <div
      ref={SpeakersRef}
      className={cn(
        "container mt-20",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 bg-white z-[20]"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className={` font-montserrat mb-5 `}>
        <h2 className="text-black font-semibold text-[40px]">
          Meet the Speakers
        </h2>
        <p className={` font-nunito w-full  md:w-[30%] font-medium text-lg`}>
          Here are the amazing outstanding people who will be speaking at this
          year&apos;s Ogun Digital Summit
        </p>
      </div>
      <SpeakersSlder />
      <div className="flex justify-center items-center mt-12">
        <Link
          href="/speakers"
          className={`font- font-nunito border border-primary text-lg text-primary px-8 py-2 rounded-xl flex items-center gap-3`}
        >
          See all the Speakers{" "}
          <div>
            <IoIosArrowForward />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SpeakerSection;

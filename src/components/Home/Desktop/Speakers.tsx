"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SpeakersSlder from "@/components/sliders/Speakers";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
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
          ? "opacity-100 translate-y-0 md:delay-300 duration-500  z-[20] relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="font-montserrat mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-black font-semibold md:text-[40px] text-[24px]">
            Meet the Speakers
          </h2>
          <p className="font-nunito w-[60%] font-medium text-[14px] md:text-lg">
            Here are the amazing outstanding people who have graced &apos;s Ogun Digital Summit
          </p>
        </div>
        <div>
          <Link
            href="/speakers"
            className="font-nunito text-lg text-primary w-full flex items-center text-nowrap"
          >
            See All
            <div>
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      </div>
      <SpeakersSlder />
    </div>
  );
};

export default SpeakerSection;

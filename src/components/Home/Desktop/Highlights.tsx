"use client";

import React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import Link from "next/link";
import HighlightsSlider from "@/components/sliders/Highlights";
import { IoIosArrowForward } from "react-icons/io";

const HighLight = () => {
  const HighlightRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HighlightRef);
  return (
    <div
      ref={HighlightRef}
      className={cn(
        "container mt-20 px-4 sm:px-8 xl:px-16 2xl:px-24 items-center justify-center w-full",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-black font-semibold md:text-[40px] text-[24px]">
          Highlights
        </h3>
      </div>
      <HighlightsSlider />
    </div>
  );
};

export default HighLight;

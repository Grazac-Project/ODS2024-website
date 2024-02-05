"use client";

import React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";
import Link from "next/link";
import HighlightsSlider from "../sloder/highlight";
import { IoIosArrowForward } from "react-icons/io";

const HighLight = () => {
  const HighlightRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HighlightRef);
  return (
    <div
      ref={HighlightRef}
      className={cn(
        "container mt-20",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <h3
        className={`font-montserrat font-semibold text-black text-[40px] mb-5`}
      >
        Highlights
      </h3>
      <HighlightsSlider />
      <div className="flex justify-center items-center mt-12">
        <Link
          href="/"
          className={` font-nunito border border-primary1-500 text-lg text-primary1-500 px-8 py-2 rounded-xl flex items-center gap-3`}
        >
          See all highlights{" "}
          <div>
            <IoIosArrowForward />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HighLight;

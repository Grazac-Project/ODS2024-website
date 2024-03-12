"use client";
import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import WhySlider from "../../sliders/WhySlider";

const Attend = () => {
  const AttendRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(AttendRef);
  return (
    <section
      ref={AttendRef}
      className={cn(
        "font-montserrat mt-20 z-20 container",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="container mb-5">
        <h2 className="text-black-100 font-semibold text-[40px] ">
          ODS&apos;24 Featuring
        </h2>
        <p className="font-nunito w-[40%]">
          We are at the forefront of innovation, shaping the future and hosting
          the largest digital summit.
        </p>
      </div>
      <div className="mt-4 attend pb-20 relative">
        <WhySlider />
      </div>
    </section>
  );
};

export default Attend;

import { cn } from "@/utils/twcx";
import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";

const Gallery = () => {
  const AttendRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(AttendRef);
  const ReaasonRef1 = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ReaasonRef1);
  const ReasonRef2 = React.useRef<HTMLDivElement>(null);
  const isInView2 = useInView(ReasonRef2);
  const ReasonRef3 = React.useRef<HTMLDivElement>(null);
  const isInView3 = useInView(ReasonRef3);
  const ReasonRef4 = React.useRef<HTMLDivElement>(null);
  const isInView4 = useInView(ReasonRef4);
  return (
    <>
      <div className="container mb-5">
        <h2 className="text-black-100 font-semibold text-[40px] ">
          ODS Gallery
        </h2>
        <p className="font-nunito w-[851px]">
          Explore the incredible journey of Ogun digital summit through these
          capitivating pictures, each frame tells a story of innovation and
          excitement.
        </p>
      </div>
      <div
        className={cn(
          "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 xl:gap-x-4"
        )}
      >
        
      </div>
    </>
  );
};

export default Gallery;

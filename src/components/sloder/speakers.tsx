"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { speakers } from "@/libs";
import { cn } from "@/utils/twcx";
import useInView from "@/hooks/useInView";

function SpeakersSlder() {
  const slideRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(slideRef);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      ref={slideRef}
      className={cn(
        "w-full items-center justify-center  text-black",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-36"
      )}
    >
      <Slider
        {...carouselSettings}
        className="justify-between items-center w-full"
      >
        {speakers?.map((speaker) => (
          <div key={speaker?.id} className={`relative`}>
            <Image src={speaker?.src} alt="" width={420} height={360} />
            <div className="absolute bottom-3 left-8">
              <h3 className={`font-semibold text-xl text-white`}>
                {speaker?.name}
              </h3>
              <p className="font-medium text-white">{speaker?.title}</p>
              {speaker?.title2 && (
                <p className="font-medium text-white">{speaker?.title2}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SpeakersSlder;

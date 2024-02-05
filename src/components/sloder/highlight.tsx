"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { highlights } from "@/libs";
import { cn } from "@/utils/twcx";
import useInView from "@/hooks/useInView";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function HighlightsSlider() {
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
        {highlights?.map((item) => (
          <div key={item?.id} className="max-w-[353px]">
            <div className="w-full max-h-[288px]">
              <Image src={item?.img} alt="" width={353} height={288} />
            </div>
            <h3
              className={`font-nunito font-medium text-[30px] text-gray-400 leading-[120%] mt-1`}
            >
              {item?.title}
            </h3>
            <Link
              href="/"
              className={`font-nunito text-2xl text-primary1-500 mt-5 flex items-center gap-2`}
            >
              Learn more
              <div>
                <FaArrowRight size={17} />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HighlightsSlider;

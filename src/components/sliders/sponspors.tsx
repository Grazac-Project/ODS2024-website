import React from "react";
import Slider from "react-slick";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import Image from "next/image";

const sponspors = () => {
  const slideRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(slideRef);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      ref={slideRef}
      className={cn(
        "w-full items-center justify-center py-4 pb-8",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-36"
      )}
    >
      <Slider
        {...carouselSettings}
        className="justify-center items-center max-h-[64px] "
      >
        <div>
          <Image src="/one.svg" alt={""} width={151} height={64} />
        </div>
        <div>
          <Image src="/two.svg" alt={""} width={127} height={64} />
        </div>
        <div>
          <Image src="/three.svg" alt={""} width={64} height={64} />
        </div>
        <div>
          <Image src="/four.svg" alt={""} width={215} height={64} />
        </div>
        <div>
          <Image src="/five.svg" alt={""} width={141} height={64} />
        </div>
      </Slider>
    </div>
  );
};

export default sponspors;

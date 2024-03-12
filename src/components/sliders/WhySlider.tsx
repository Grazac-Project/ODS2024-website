import React from "react";
import Slider from "react-slick";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import WhyCard from "@/components/cards/WhyCard";
import { WHY } from "@/libs";

const WhySlider = () => {
  const slideRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(slideRef);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
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
          slidesToShow: 1,
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
      <Slider {...carouselSettings} className="justify-center items-center">
        {WHY.map((items) => (
          <WhyCard key={items.id} {...items} />
        ))}
      </Slider>
    </div>
  );
};

export default WhySlider;

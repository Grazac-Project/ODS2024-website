"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight2 } from "iconsax-react";
import { HeroImage } from "@/libs";
import Slider from "react-slick";

const NewHeroSection = () => {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <section className="w-full relative min-h-full">
      <div className="w-full h-full max-h-[600px] hidden md:block top-0 left-0 absolute">
        <Slider {...settings}>
          {HeroImage.map((image) => (
            <div key={image.id}>
              <Image
                src={image.image}
                alt="heroImage"
                width={1440}
                height={600}
                priority
                loading="eager"
                className="w-full max-h-[600px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex relative z-10 text-white min-h-[600px] w-full justify-center items-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col items-center justify-center h-full w-8/12">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div
              className="flex gap-1.5 self-start p-2 text-sm justify-center items-center font-medium leading-5 text-black whitespace-nowrap rounded-2xl bg-neutral-200"
              aria-label="Date"
              role="img"
            >
              <Calendar />
              <div className="grow">{todayDate}</div>
            </div>
            <h2 className="mt-5 text-5xl font-bold leading-9  text-white uppercase max-md:max-w-full max-md:text-4xl">
              Innovation:
            </h2>
            <h1 className="mt-5 text-6xl font-semibold text-white leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              PATHWAY TO OUR NATION{" "}
              <span
                className="graphik"
                style={{
                  background:
                    "-webkit-linear-gradient(270deg, #00A651, #FFE840)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                PROSPERITY
              </span>
            </h1>

            <div className="flex gap-5 justify-between self-start mt-10 text-lg leading-5 whitespace-nowrap">
              <Link
                href="/"
                className="flex items-center justify-center min-h-[56px] text-center w-[194px] text-white bg-green-600 rounded-xl max-md:px-5"
              >
                Attend
              </Link>
              <Link
                href="/"
                className="flex justify-center items-center bg-white min-h-[56px] w-[215px] text-lg leading-5 text-green-600 whitespace-nowrap rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] max-md:px-5"
              >
                <div>Speak at ODS&apos;24</div>
                <ArrowRight2 />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;

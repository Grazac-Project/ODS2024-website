"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { HeroImage } from "@/libs";
import Slider from "react-slick";

const Hero = () => {
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
    <section className="relative max-h-[911px] w-full">
      <div className="w-full h-full absolute top-0 left-0 object-cover">
        <Slider {...settings}>
          {HeroImage.map((image) => (
            <div key={image.id}>
              <Image
                src={image.image}
                alt="heroImage"
                width={380}
                height={500}
                priority
                loading="eager"
                className="w-full min-h-[500px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex top-0 relative z-10 text-white items-center w-full bg-black bg-opacity-[60%] justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500 h-[500px]">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div
              className="flex gap-1.5 self-start p-2 text-sm justify-center items-center font-medium leading-5 text-black whitespace-nowrap rounded-2xl bg-neutral-200"
              aria-label="Date"
              role="img"
            >
              <Calendar />
              <div className="grow">{todayDate}</div>
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-9  text-white uppercase max-md:max-w-full max-md:text-4xl">
              Innovation:
            </h2>
            <h1 className="mt-5 text-4xl font-semibold text-white leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
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

            <div className="flex gap-2 justify-between self-center mt-10 text-lg leading-5 whitespace-nowrap max-w-[342px] items-center">
              <Link
                href="/"
                className="flex justify-center items-center h-[50px]  text-white bg-green-600 rounded-xl min-w-[153px]"
              >
                Attend
              </Link>
              <Link
                href="/"
                className="flex gap-1 justify-between  text-green-600 h-[50px] px-3 items-center bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
              >
                <div className="grow">Speak at ODS&apos;24</div>
                <ArrowRight2 />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

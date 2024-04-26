"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";

const Hero = () => {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section className="relative max-h-[911px] w-full py-[60px] overflow-x-hidden">
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          loading="eager"
          src="/home-mobile.svg"
          alt="hero image"
          width={390}
          height={911}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full sm:bg-black/50 lg:bg-black/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
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
              PATHWAY TO OUR NATION PROSPERITY
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
      <div className="relative z-10 items-center justify-center-center mt-[40px] mx-auto max-w-[390px] min-h-[395px] object-contain">
        <Image
          loading="eager"
          src="/home.svg"
          alt="hero image"
          width={390}
          height={395}
          priority
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;

export const MobileHero = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section
      ref={HomePageRef}
      className={cn(
        "w-full bg-primary",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="px-4 sm:px-8 mx-auto py-12">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            loading="eager"
            src="/hero/hero2.webp"
            alt="hero image"
            width={380}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 px-2">
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

            <div className="flex gap-2 justify-between mt-10 text-lg leading-5 whitespace-nowrap w-full items-center">
              <Link
                href="/"
                className="flex justify-center items-center h-[50px]  text-white bg-green-600 rounded-xl w-[160px]"
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

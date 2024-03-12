import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight2 } from "iconsax-react";

const HeroSection = () => {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[600px] hidden md:block absolute top-0 left-0">
        <Image
          src="/hero.svg"
          alt="hero image"
          width={1440}
          height={600}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[911px] md:hidden block absolute top-0 left-0">
        <Image
          src="/hero-mobile.svg"
          alt="hero image"
          width={911}
          height={911}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full w-full justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
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
            <h2 className="mt-5 text-5xl font-bold leading-9  text-white uppercase max-md:max-w-full max-md:text-4xl">
              Innovation:
            </h2>
            <h1 className="mt-5 text-6xl font-semibold text-white leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              PATHWAY TO OUR NATION PROSPERITY
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
        <div className="shrink-0">
          <Image src="/hero_img.svg" alt="" width={618} height={632} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

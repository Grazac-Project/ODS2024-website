"use client";
import React from "react";

import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { ArrowRight2 } from "iconsax-react";
import SponsorsSlider from "../../sliders/sponspors";

const Sponsors = () => {
  const SponsorsRef = React.useRef<HTMLDivElement>(null);
  const whoWeareRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SponsorsRef);
  const isInView2 = useInView(whoWeareRef);
  return (
    <section className="container my-8 max-md:pt-12 lg:my-20 w-full flex flex-col items-center px-4">
      <div
        ref={SponsorsRef}
        className={cn(
          "flex flex-col container items-center max-w-[1000px] px-2 sm:px-4",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <h2 className="font-semibold text-xl sm:text-3xl lg:text-5xl text-header mb-4 font-montserrat">
          Our Sponsors
        </h2>
      </div>
      <SponsorsSlider />
      <div
        ref={whoWeareRef}
        className={cn(
          "flex flex-col items-center pb-3.5 text-black max-w-[917px] mt-[52px]",
          {
            "opacity-100 translate-y-0 delay-1000 duration-1000": isInView2,
            "opacity-0 translate-y-36": !isInView2,
          }
        )}
      >
        <h1 className="text-5xl font-semibold whitespace-nowrap font-montserrat">
          Who we are
        </h1>
        <p className="self-stretch mt-6 w-full text-xl leading-8 text-center max-md:max-w-full font-nunito">
          In the last three years, the Ogun Digital Summit has ignited a fire
          within the hearts of more than 6,000 individuals, propelling them to
          not only forge careers in the digital technology sector but also to
          harness the power of technology in tackling significant challenges,
          thereby revolutionizing our digital economy.
        </p>
        <div className="flex ">
          <Link
            href="/"
            className="flex gap-1 justify-center items-center h-[56px] min-w-[214px] mt-9 text-lg leading-5 text-green-600 whitespace-nowrap rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] max-md:px-5"
          >
            <span aria-label="Learn more" role="button">
              Learn more
            </span>
            <ArrowRight2 />
          </Link>
          <Image src="/arrow.png" alt={""} width={100} height={100} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

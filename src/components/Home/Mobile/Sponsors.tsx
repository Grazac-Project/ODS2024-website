"use client";
import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import Sponspors from "@/components/sliders/sponspors";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";

const Sponsors = () => {
  const SponsorsRef = React.useRef<HTMLDivElement>(null);
  const whoWeareRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SponsorsRef);
  const isInView2 = useInView(whoWeareRef);
  return (
    <section className="mt-[60px]">
      <div
        ref={SponsorsRef}
        className={cn(
          "flex flex-col items-center w-full px-2 sm:px-2",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <h2 className="font-bold text-[30px] text-header mb-4 font-montserrat">
          Our Sponsors
        </h2>
        {/* <Sponspors /> */}
        <div
          className={cn(
            "w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 justify-center items-center  place-content-start place-items-center"
          )}
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
        </div>
        <div
          ref={whoWeareRef}
          className={cn(
            "flex flex-col items-center pb-3.5 text-black mt-[52px]",
            {
              "opacity-100 translate-y-0 delay-1000 duration-1000": isInView2,
              "opacity-0 translate-y-36": !isInView2,
            }
          )}
        >
          <h1 className="text-[30px] font-semibold whitespace-nowrap font-montserrat">
            Who we are
          </h1>
          <p className="self-stretch mt-6 w-full text-xl leading-8 text-center max-md:max-w-full font-nunito">
            In the last three years, the Ogun Digital Summit has ignited a fire
            within the hearts of more than 6,000 individuals, propelling them to
            not only forge careers in the digital technology sector but also to
            harness the power of technology in tackling significant challenges,
            thereby revolutionizing our digital economy.
          </p>
          <div className="flex justify-end max-w-[272px] min-h-[74]">
            <Link
              href="/about"
              className=" min-w-[215px] min-h-[46px]  flex  justify-center items-center mt-9 text-lg leading-5 text-green-600 whitespace-nowrap rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] max-md:px-5"
            >
              <span aria-label="Learn more" role="button">
                Learn more
              </span>
              <ArrowRight2 />
            </Link>
            <Image
              loading="eager"
              src="/Arrow-sm.svg"
              alt={""}
              width={53}
              height={47}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

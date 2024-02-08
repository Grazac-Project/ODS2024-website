"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import Team from "../desktop/Team";
import Hero from "../desktop/Hero";
import SponsorsSlider from "@/components/sloder/sponsors";

const ABOUTMOBILE = () => {
  const SponsorsRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SponsorsRef);
  const AboutRef = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(AboutRef);
  const MissionRef = React.useRef<HTMLDivElement>(null);
  const isInView2 = useInView(MissionRef);
  const WhyRef = React.useRef<HTMLDivElement>(null);
  const isInView3 = useInView(WhyRef);

  return (
    <>
      <Hero />
      {/* sponsors  */}
      <section className="mt-[60px]">
        <div
          ref={SponsorsRef}
          className={cn(
            "flex flex-col items-center w-full px-2 sm:px-4",
            isInView
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h2 className="font-bold text-[30px] text-header mb-4 font-montserrat">
            Our Sponsors
          </h2>
          <SponsorsSlider />
        </div>
      </section>
      {/* sbout AboutRef */}
      <section>
        <div
          ref={AboutRef}
          className={cn(
            "flex flex-col items-center justify-center  w-full px-4 mt-[40px]",
            isInView1
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h2 className="font-bold text-[24px]  text-header mb-4 font-montserrat">
            About ODS
          </h2>
          <p className="text-text-500 text-lg text-center font-nunito font-medium ">
            Ogun Digital Summit is one of the largest digital summits in Nigeria
            with a strong goal to reiterate the need and importance of digital
            knowledge for youths in a bid to eradicate barriers in acquiring
            technology skills and embracing technology entrepreneurship. In the
            last three years, the Ogun Digital Summit has ignited a fire within
            the hearts of more than 6,000 individuals, propelling them to not
            only forge careers in the digital technology sector but also to
            harness the power of technology in tackling significant challenges,
            thereby revolutionizing our digital economy. The impact of this
            summit cannot be overstated. In fact, the ecosystem has witnessed an
            unprecedented surge in talent, with numbers quadrupling since the
            summits inception in 2020.
          </p>
          <p className="text-text-500 text-lg text-center mt-5 font-medium">
            But the impact extends far beyond statistics and figures. The Ogun
            Digital Summit has played a pivotal role in enhancing access to
            technology for communities in need. In the spirit of inclusivity and
            progress, a remarkable digital economy station, valued at over 8
            million naira, now graces the Isara community in Ogun State,
            equipped with state-of-the-art IT facilities, this station empowers
            local pupils with early exposure to computers, opening doors of
            opportunity that were previously inaccessible.
          </p>
        </div>
      </section>
      {/* mission*/}
      <section>
        <div
          ref={MissionRef}
          className={cn(
            "flex flex-col items-center justify-center text-center w-full px-4 mt-[60px]",
            isInView2
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <div>
            <Image src="/about.svg" alt="" width={342} height={284} />
          </div>
          <div>
            <div className="mt-14">
              <h3
                className={`font-semibold text-[24px] text-text-500 font-montserrat `}
              >
                Our Mission
              </h3>
              <p className={`text-[18px] text-text-500 mt-2 font-nunito`}>
                The Ogun Digital Summit has played a pivotal role in enhancing
                access to technology for communities in need.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <h3
              className={`font-semibold text-[24px] text-text-500 font-montserrat`}
            >
              Our Vision
            </h3>
            <p className={`text-[18px] text-text-500 mt-2 font-nunito`}>
              Through our summit, startup founders would be able to connected
              with visionary investors, paving the way for groundbreaking
              collaborations that have propelled ingenious ideas into reality.
            </p>
          </div>
        </div>
      </section>
      {/* why  */}
      <section>
        <div
          ref={WhyRef}
          className={cn(
            "flex flex-col items-center justify-center text-center w-full px-4 mt-[60px]",
            isInView
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h2 className="text-black font-semibold text-[40px] font-montserrat">
            Why attend ODS?
          </h2>
          <div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ABOUTMOBILE;

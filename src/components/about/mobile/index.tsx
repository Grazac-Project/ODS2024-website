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

  const JoinRef = React.useRef<HTMLDivElement>(null);
  const isInView8 = useInView(JoinRef);
  const JoinRef2 = React.useRef<HTMLDivElement>(null);
  const isInView9 = useInView(JoinRef2);
  const FianlRef = React.useRef<HTMLDivElement>(null);
  const isInView10 = useInView(FianlRef);

  return (
    <>
      <Hero />
      {/* sponsors  */}
      <section className="mt-[60px]">
        <div
          ref={SponsorsRef}
          className={cn(
            "flex flex-col items-center w-full px-4",
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
            isInView3
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h2 className="text-black font-bold text-[24px] font-montserrat">
            Why attend ODS?
          </h2>
          <div className="mt-10 ">
            <Image width={251} height={856} src="/whyattend.svg" alt="why" />
          </div>
        </div>
      </section>
      {/* TEAM  */}
      <section className="mt-[60px]">
        <Team />
      </section>
      {/* almost under */}
      <section>
        <div
          ref={JoinRef}
          className={cn(
            "flex flex-col w-full justify-center mt-[60px] py-11 text-base leading-5 text-white bg-neutral-900 ",
            isInView8
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <div className="max-w-[328px] flex flex-col self-center items-center justify-center">
            <header className="text-2xl font-semibold  text-center">
              Join as a Partner/Sponsor/ <br /> Exhibitors
            </header>
            <div className="mt-4 capitalize whitespace-nowrap">
              Unlock Boundless Opportunities at ODS 24
            </div>
            <div>
              <div className="self-center flex">
                <Link
                  href="/"
                  className="flex gap-2.5 justify-center self-center px-11 py-2 mt-8 max-w-full whitespace-nowrap bg-green-600 rounded-xl w-[245px]"
                >
                  <span className="grow self-start mt-1">Become a partner</span>

                  <ArrowRight2 />
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="flex gap-2.5 justify-center self-center px-8 py-2 mt-4 max-w-full text-green-600 whitespace-nowrap rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] w-[245px]"
                >
                  <span className="grow self-start mt-1">
                    Become an Exhibitor
                  </span>

                  <ArrowRight2 />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={JoinRef2}
          className={cn(
            "flex flex-col justify-center w-full",
            isInView9
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <Image
            src="/under.svg"
            alt="hero image"
            width={390}
            height={304}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* FinalSection */}
      <section>
        <div
          ref={FianlRef}
          className={cn(
            "flex flex-col mt-[60px] px-5 ",
            isInView10
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h2 className=" font-montserrat w-full text-3xl font-semibold leading-10 text-neutral-900">
            Unlocking Tech Innovations Without Boundaries
          </h2>
          <span className="mt-4 w-full text-base leading-5 text-neutral-900 font-nunito">
            The ODS 23 Mobile App is your all-in-one tool for an immersive tech
            experience at your fingertip. Connect with like minds like never
            before
          </span>
          <div className="flex flex-col gap-5 justify-between mt-9 w-full self-center">
            <Image
              src="/phone.svg"
              alt="hero image"
              width={342}
              height={332}
              priority
              className="w-full h-full object-cover"
            />
            <div className="flex gap-4 mt-5">
              <Link href="/">
                <Image
                  src="/apple.svg"
                  alt="hero image"
                  width={144}
                  height={48}
                  priority
                  className="w-full h-full object-cover"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/google.svg"
                  alt="hero image"
                  width={162}
                  height={48}
                  priority
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ABOUTMOBILE;

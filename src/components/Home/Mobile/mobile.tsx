"use client";
import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import Sponspors from "@/components/sliders/sponspors";
import Attend from "../Desktop/Attend";
import HighLight from "../Desktop/Highlights";
import SpeakerSection from "../Desktop/Speakers";

const Mobile = () => {
  const SponsorsRef = React.useRef<HTMLDivElement>(null);
  const whoWeareRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SponsorsRef);
  const isInView2 = useInView(whoWeareRef);
  const AttendRef = React.useRef<HTMLDivElement>(null);
  const isInView3 = useInView(AttendRef);
  const ReaasonRef1 = React.useRef<HTMLDivElement>(null);
  const isInView4 = useInView(ReaasonRef1);
  const ReasonRef2 = React.useRef<HTMLDivElement>(null);
  const isInView5 = useInView(ReasonRef2);
  const ReasonRef3 = React.useRef<HTMLDivElement>(null);
  const isInView6 = useInView(ReasonRef3);
  const ReasonRef4 = React.useRef<HTMLDivElement>(null);
  const isInView7 = useInView(ReasonRef4);
  const JoinRef = React.useRef<HTMLDivElement>(null);
  const isInView8 = useInView(JoinRef);
  const JoinRef2 = React.useRef<HTMLDivElement>(null);
  const isInView9 = useInView(JoinRef2);
  const FianlRef = React.useRef<HTMLDivElement>(null);
  const isInView10 = useInView(FianlRef);
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      {/* hero  section */}
      <section className="relative max-h-[911px] w-full py-[60px]">
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

      {/* Sponsors */}
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
          <Sponspors />
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
              In the last three years, the Ogun Digital Summit has ignited a
              fire within the hearts of more than 6,000 individuals, propelling
              them to not only forge careers in the digital technology sector
              but also to harness the power of technology in tackling
              significant challenges, thereby revolutionizing our digital
              economy.
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
      {/* attend  section 401 2369 */}
      <Attend />
      <HighLight />
      <SpeakerSection />
      {/* almost under */}
      <section>
        <div
          ref={JoinRef}
          className={cn(
            "flex flex-col justify-center px-8 py-11 text-base leading-5 text-white bg-neutral-900 ",
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
            "flex flex-col justify-center",
            isInView9
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <Image
            loading="eager"
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
            "flex flex-col mt-9 px-5 ",
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
          <div className="flex flex-col gap-5 items-center justify-between mt-9 w-full self-center">
            <Image
              loading="eager"
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
                  loading="eager"
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
                  loading="eager"
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

export default Mobile;

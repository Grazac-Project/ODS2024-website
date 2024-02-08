"use client";
import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";
import SponsorsSlider from "@/components/sloder/sponsors";
import HighLight from "../Highlights";
import SpeakerSection from "../speakers";

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

              <div className="flex gap-2 justify-between self-center mt-10 text-lg leading-5 whitespace-nowrap max-w-[342px] h-[40px] items-center">
                <Link
                  href="/"
                  className="flex justify-center items-center h-[40px] text-white bg-green-600 rounded-xl min-w-[153px]"
                >
                  Attend
                </Link>
                <Link
                  href="/"
                  className="flex gap-1 justify-between px-2 text-green-600 h-full items-center bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
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
          <div
            ref={whoWeareRef}
            className={cn(
              "flex flex-col items-center pb-3.5 text-black max-w-[390px] mt-[52px]",
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
                href="/"
                className=" max-w-[215px] max-h-[40px] py-4 px-9 flex gap-2.5 justify-center items-center mt-9 text-lg leading-5 text-green-600 whitespace-nowrap rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] max-md:px-5"
              >
                <span aria-label="Learn more" role="button" className="grow">
                  Learn more
                </span>
                <ArrowRight2 />
              </Link>
              <Image src="/Arrow-sm.svg" alt={""} width={53} height={47} />
            </div>
          </div>
        </div>
      </section>
      {/* attend  section 401 2369 */}
      <section>
        <div
          ref={AttendRef}
          className={cn(
            "font-montserrat mt-20 z-20 pb-[40px]",
            isInView3
              ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative mb-[60px]"
              : " opacity-0 translate-y-36"
          )}
        >
          <div className="container mb-5 max-w-[342px] self-center">
            <h2 className="text-black font-semibold text-[24px] ">
              WHY ATTEND ODS23?
            </h2>
            <p className="font-nunito">
              We are at the forefront of innovation, shaping the future and
              hosting the largest digital summit.
            </p>
          </div>
          <div>
            <div className="w-full h-full absolute top-0 left-0">
              <Image
                src="/attend-mob.svg"
                alt="hero image"
                width={401}
                height={2369}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 px-5">
              {/* first reason */}
              <div
                ref={ReaasonRef1}
                className={cn(
                  "flex flex-col justify-between items-center max-w-[343px] object-contain self-center",
                  isInView4
                    ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                    : " opacity-0 translate-y-36"
                )}
              >
                <div>
                  <Image src="attend01.svg" alt="" width={343} height={284} />
                </div>
                <div className="space-y-4 mb:pl-4 lg:pl-0">
                  <h3
                    className="graphik"
                    style={{
                      background:
                        "-webkit-linear-gradient(270deg, #00A651, #FFE840)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    01
                  </h3>
                  <h3 className="font-medium text-[40px] text-white leading-[120%]  max-w-[154]">
                    Access to <br /> Industry Experts
                  </h3>
                  <p className="text-xl text-white font-nunito">
                    You get access to interact with Industry Experts and engage
                    them in conversation both directly and indirectly. This
                    access can be invaluable in gaining deeper insights into
                    your areas of interest.
                  </p>
                </div>
              </div>
              {/* second reason */}
              <div
                ref={ReasonRef2}
                className={cn(
                  "flex flex-col justify-between items-center max-w-[343px] object-contain self-center mt-8",
                  isInView5
                    ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                    : " opacity-0 translate-y-36"
                )}
              >
                <div>
                  <Image src="attend02.svg" alt="" width={343} height={284} />
                </div>
                <div className="space-y-4 mb:pl-4 lg:pl-0">
                  <h3
                    className="graphik"
                    style={{
                      background:
                        "-webkit-linear-gradient(270deg, #00A651, #FFE840)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    02
                  </h3>
                  <h3 className="font-medium text-[40px] text-white leading-[120%]  max-w-[154]">
                    Networking <br /> Opportunities
                  </h3>
                  <p className="text-xl text-white font-nunito">
                    ODS’ 23 brings together industry leaders, experts and
                    enthusiasts. It’s an ideal place to expand your professional
                    work, giving opportunities to potential collaboration and
                    partnerships.
                  </p>
                </div>
              </div>
              {/* third reason */}
              <div
                ref={ReasonRef3}
                className={cn(
                  "flex flex-col justify-between items-center max-w-[343px] object-contain self-center mt-8",
                  isInView6
                    ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                    : " opacity-0 translate-y-36"
                )}
              >
                <div>
                  <Image src="attend03.svg" alt="" width={343} height={284} />
                </div>
                <div className="space-y-4 mb:pl-4 lg:pl-0">
                  <h3
                    className="graphik"
                    style={{
                      background:
                        "-webkit-linear-gradient(270deg, #00A651, #FFE840)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    03
                  </h3>
                  <h3 className="font-medium text-[40px] text-white leading-[120%] max-w-[154]">
                    Cutting Edge <br /> AI Exploration
                  </h3>
                  <p className="text-xl text-white font-nunito">
                    This year’s event promises to delve deep into the
                    explorative power of AI & WEB3 technologies, while also
                    gaining access to latest trends and innovation in the tech
                    industry. Come experience how these technologies are shaping
                    the world we know.
                  </p>
                </div>
              </div>
              {/* fourth reason */}
              <div
                ref={ReasonRef4}
                className={cn(
                  "flex flex-col justify-between items-center max-w-[343px] object-contain self-center mt-8",
                  isInView7
                    ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                    : " opacity-0 translate-y-36"
                )}
              >
                <div>
                  <Image src="attend04.svg" alt="" width={343} height={284} />
                </div>
                <div className="space-y-4 mb:pl-4 lg:pl-0">
                  <h3
                    className="graphik"
                    style={{
                      background:
                        "-webkit-linear-gradient(270deg, #00A651, #FFE840)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    04
                  </h3>
                  <h3 className="font-medium text-[40px] text-white leading-[120%] max-w-[154]">
                    Have Fun and <br /> Unwind
                  </h3>
                  <p className="text-xl text-white font-nunito">
                    Build an enriching experience from ODS’ 23. Explore your
                    interest, meet like-minded individuals, have fun and be a
                    part of an evolving tech community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            src="/under.svg"
            alt="hero image"
            width={390}
            height={304}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Highlight  */}
      <HighLight />
      {/* SpeakerSection */}
      <SpeakerSection />
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

export default Mobile;

"use client";
import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";

const Attend = () => {
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

  return (
    <section>
      <div
        ref={AttendRef}
        className={cn(
          "font-montserrat mt-20  z-20 px-5",
          isInView3
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
            : " opacity-0 translate-y-36"
        )}
      ></div>
      <div
        ref={AttendRef}
        className={cn(
          "font-montserrat z-20 pb-[40px]",
          isInView3
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative mb-[60px] py-5"
            : " opacity-0 translate-y-36"
        )}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              loading="eager"
              src="/attend-mob.svg"
              alt="hero image"
              width={401}
              height={2369}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-5 max-w-[342px]">
            <h2 className="text-white font-semibold text-[24px] ">
              WHY ATTEND ODS23?
            </h2>
            <p className="font-nunito">
              We are at the forefront of innovation, shaping the future and
              hosting the largest digital summit.
            </p>
          </div>
          <div className="relative z-10 px-2">
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
              <div className="">
                <Image
                  loading="eager"
                  src="/attend01.svg"
                  alt=""
                  width={343}
                  priority
                  height={284}
                />
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
                  them in conversation both directly and indirectly. This access
                  can be invaluable in gaining deeper insights into your areas
                  of interest.
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
                <Image
                  loading="eager"
                  src="/attend02.svg"
                  alt=""
                  width={343}
                  priority
                  height={284}
                />
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
                <Image
                  loading="eager"
                  src="/attend03.svg"
                  alt=""
                  width={343}
                  priority
                  height={284}
                />
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
                  This year’s event promises to delve deep into the explorative
                  power of AI & WEB3 technologies, while also gaining access to
                  latest trends and innovation in the tech industry. Come
                  experience how these technologies are shaping the world we
                  know.
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
                <Image
                  loading="eager"
                  src="/attend04.svg"
                  alt=""
                  width={343}
                  priority
                  height={284}
                />
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
                  interest, meet like-minded individuals, have fun and be a part
                  of an evolving tech community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attend;

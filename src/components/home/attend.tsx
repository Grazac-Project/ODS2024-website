"use client";

import Image from "next/image";
import React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

function Attend() {
  const AttendRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(AttendRef);
  const ReaasonRef1 = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ReaasonRef1);
  const ReasonRef2 = React.useRef<HTMLDivElement>(null);
  const isInView2 = useInView(ReasonRef2);
  const ReasonRef3 = React.useRef<HTMLDivElement>(null);
  const isInView3 = useInView(ReasonRef3);
  const ReasonRef4 = React.useRef<HTMLDivElement>(null);
  const isInView4 = useInView(ReasonRef4);

  return (
    <div
      ref={AttendRef}
      className={cn(
        "font-montserrat mt-20 z-20",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="container mb-5">
        <h2 className="text-black-100 font-semibold text-[40px] ">
          WHY ATTEND ODS23?
        </h2>
        <p className="font-nunito w-[40%]">
          We are at the forefront of innovation, shaping the future and hosting
          the largest digital summit.
        </p>
      </div>
      <div className="bg-[#111111] mt-4 attend pb-20 relative">
        <div className="container">
          {/* First Reason */}
          <div
            ref={ReaasonRef1}
            className={cn(
              "flex justify-between items-center pt-20",
              isInView1
                ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                : " opacity-0 translate-y-36"
            )}
          >
            <div>
              <Image src="/images/why-1.svg" alt="" width={540} height={440} />
            </div>
            <div className="w-[533px] space-y-4 mb:pl-4 lg:pl-0">
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
              <h3 className="font-medium text-[40px] text-white leading-[120%]">
                Access to <br /> Industry Experts
              </h3>
              <p className="text-xl text-white font-nunito">
                You get access to interact with Industry Experts and engage them
                in conversation both directly and indirectly.
              </p>
              <p className="text-xl text-white font-nunito">
                This access can be invaluable in gaining deeper insights into
                your areas of interest.
              </p>
            </div>
          </div>
          {/* Second Reason */}
          <div
            ref={ReasonRef2}
            className={cn(
              "flex justify-between items-center pt-20",
              isInView2
                ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                : " opacity-0 translate-y-36"
            )}
          >
            <div className="w-[533px] space-y-4">
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
              <h3 className="font-medium text-[40px] text-white leading-[120%]">
                Networking <br /> Opportunities
              </h3>
              <p className="text-xl text-white font-nunito">
                ODS’ 23 brings together industry leaders, experts and
                enthusiasts. It’s an ideal place to expand your professional
                work, giving opportunities to potential collaboration and
                partnerships.
              </p>
            </div>
            <div>
              <Image src="/images/why-2.svg" alt="" width={540} height={440} />
            </div>
          </div>
          {/* Third Reason */}
          <div
            ref={ReasonRef3}
            className={cn(
              "flex justify-between items-center pt-20",
              isInView3
                ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                : " opacity-0 translate-y-36"
            )}
          >
            <div>
              <Image src="/images/why-3.svg" alt="" width={540} height={440} />
            </div>
            <div className="w-[533px] space-y-4">
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
              <h3 className="font-medium text-[40px] text-white leading-[120%]">
                Cutting Edge <br /> AI Exploration
              </h3>
              <p className="text-xl text-white font-nunito">
                This year’s event promises to delve deep into the explorative
                power of AI & WEB3 technologies, while also gaining access to
                latest trends and innovation in the tech industry.
              </p>
              <p className="text-xl text-white font-nunito">
                Come experience how these technologies are shaping the world we
                know.
              </p>
            </div>
          </div>
          {/* Fourth Reason */}
          <div
            ref={ReasonRef4}
            className={cn(
              "flex justify-between items-center pt-20",
              isInView4
                ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                : " opacity-0 translate-y-36"
            )}
          >
            <div className="w-[533px] space-y-4">
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
              <h3 className="font-medium text-[40px] text-white leading-[120%]">
                Have Fun and <br /> Unwind
              </h3>
              <p className="text-xl text-white font-nunito">
                Build an enriching experience from ODS’ 23. Explore your
                interest, meet like-minded individuals, have fun and be a part
                of an evolving tech community.
              </p>
            </div>
            <div>
              <Image src="/images/why-4.svg" alt="" width={540} height={440} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attend;

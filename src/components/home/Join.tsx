"use client";

import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

export function JoinCard() {
  return (
    <>
      <div className={cn("w-full h-[473px] grid grid-cols-2")}>
        <div className="bg-black loop flex flex-col gap-5 justify-center pl-10 relative">
          <h3 className="font-medium text-5xl text-white  font-montserrat leading-[120%]">
            Join as a Partner/ <br /> Sponsor/Exhibitors
          </h3>
          <p className={`font-nunitotext-white`}>
            Unlock Boundless Opportunities at ODS 24
          </p>
          <div className="flex items-center gap-5">
            <button
              className={`font-nunito bg-primary1-500 text-white rounded-xl py-[10px] px-8 text-lg`}
            >
              Become a partner
            </button>
            <button
              className={`font-nunito bg-white text-primary1-500 rounded-xl py-[10px] px-8 text-lg flex items-center gap-1 border-b-4 border-b-primary1-500 border-r-4 border-r-primary1-500`}
            >
              Become an exhibitor
              <div>
                <IoIosArrowForward />
              </div>
            </button>
          </div>
          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/stars1.svg"
              alt="stars"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="join2"></div>
      </div>
    </>
  );
}

function Join() {
  const JoinRef = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(JoinRef);
  return (
    <div
      ref={JoinRef}
      className={cn(
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex justify-between">
        <div className="-mt-56 -z-10">
          <Image src="/images/loop1.svg" alt="loop" width={300} height={300} />
        </div>
        <div className="-mt-48 -z-10">
          <Image
            src="/images/pattern1.svg"
            alt=""
            width={432.06}
            height={355.94}
          />
        </div>
        <div className="-mt-56 -z-10">
          <Image src="/images/loop2.svg" alt="" width={200} height={200} />
        </div>
      </div>
      <div className="-mt-52">
        <JoinCard />
      </div>
    </div>
  );
}

export default Join;

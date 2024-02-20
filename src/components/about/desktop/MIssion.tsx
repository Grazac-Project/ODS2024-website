"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

const MIssion = () => {
  const MissionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(MissionRef);
  return (
    <div
      ref={MissionRef}
      className={cn(
        " font-nunito mt-20 z-20 container flex items-center justify-between gap-24",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div>
        <div>
          <h3
            className={`font-semibold text-[40px] text-text-500 font-montserrat`}
          >
            Our Mission
          </h3>
          <p className={`text-2xl text-text-500 mt-2 font-nunito`}>
            The Ogun Digital Summit has played a pivotal role in enhancing
            access to technology for communities in need.
          </p>
        </div>
        <div className="mt-14">
          <h3
            className={`font-semibold text-[40px] text-text-500 font-montserrat`}
          >
            Our Vision
          </h3>
          <p className={`text-2xl text-text-500 mt-2 font-nunito`}>
            Through our summit, startup founders would be able to connected with
            visionary investors, paving the way for groundbreaking
            collaborations that have propelled ingenious ideas into reality.
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <Image src={"/images/mission.svg"} alt="" width={558} height={469} />
      </div>
    </div>
  );
};

export default MIssion;

"use client";

import React from "react";
import Image from "next/image";
import { teams } from "@/libs";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

const Team = () => {
  const TeamRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(TeamRef);
  return (
    <div
      ref={TeamRef}
      className={cn(
        " font-nunito mt-20 z-20 container w-full relative bg-white",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <h3 className="text-[40px] font-semibold text-black-100 font-montserrat">
        Meet our Team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {teams.map((team) => (
          <div key={team.id}>
            <Image
              src={team.src}
              alt=""
              width={420}
              height={360}
              className="border-r-4 border-r-black-500 border-b-4 border-b-black-500 rounded-xl"
            />
            <h3 className="font-semibold text-2xl text-text-500 text-center mt-3">
              {team.name}
            </h3>
            <p className={`text-lg text-black text-center font-nunito`}>
              {team.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

const Team = () => {
  const TeamRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(TeamRef);
  return (
    <div
      ref={TeamRef}
      className={cn(
        " font-nunito mt-20 z-20 container mt-24`",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      Team
    </div>
  );
};

export default Team;

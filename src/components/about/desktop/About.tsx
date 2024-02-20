"use client";

import React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

const About = () => {
  const AboutRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(AboutRef);

  return (
    <div
      ref={AboutRef}
      className={cn(
        " font-nunito mt-20 z-20 container flex flex-col items-center gap-5",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <h2 className="font-semibold text-[40px] text-black text-center">
        About ODS
      </h2>
      <p className="text-text-500 text-lg text-center">
        Ogun Digital Summit is one of the largest digital summits in Nigeria
        with a strong goal to reiterate the need and importance of digital
        knowledge for youths in a bid to eradicate barriers in acquiring
        technology skills and embracing technology entrepreneurship. In the last
        three years, the Ogun Digital Summit has ignited a fire within the
        hearts of more than 6,000 individuals, propelling them to not only forge
        careers in the digital technology sector but also to harness the power
        of technology in tackling significant challenges, thereby
        revolutionizing our digital economy. The impact of this summit cannot be
        overstated. In fact, the ecosystem has witnessed an unprecedented surge
        in talent, with numbers quadrupling since the summits inception in 2020.
      </p>
      <p className="text-text-500 text-lg text-center">
        But the impact extends far beyond statistics and figures. The Ogun
        Digital Summit has played a pivotal role in enhancing access to
        technology for communities in need. In the spirit of inclusivity and
        progress, a remarkable digital economy station, valued at over 8 million
        naira, now graces the Isara community in Ogun State, equipped with
        state-of-the-art IT facilities, this station empowers local pupils with
        early exposure to computers, opening doors of opportunity that were
        previously inaccessible.
      </p>
    </div>
    
  );
};

export default About;

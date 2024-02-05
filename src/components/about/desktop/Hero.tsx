"use client";

import dynamic from "next/dynamic";

import React from "react";

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

function Hero() {
  return (
    <div className="w-full h-[384px] hero flex flex-col gap-3 items-center justify-center">
      <h1
        className={` font-montserrat font-semibold text-[56px] text-white px-[24%] text-center leading-tight`}
      >
        <TypewriterComponent
          component="p"
          options={{
            autoStart: true,
            delay: 100,
            loop: true,
            strings: [
              "Framing the Future of Technology",
              "Crafting the Tomorrow Techscape",
              "Molding the Tech Horizon Ahead",
              "Architecting the Landscape of Future Tech",
              "Shaping Tomorrow's Tech Landscape",
            ],
            deleteSpeed: 50,
          }}
        />
      </h1>
      <p
        className={`font-nunito font-semibold text-white px-[24%] text-center`}
      >
        We are at the forefront of innovation, shaping the future and hosting
        the largest digital summit in Ogun State with over 2,000 participants
        annually.
      </p>
    </div>
  );
}

export default Hero;

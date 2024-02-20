"use client";

import dynamic from "next/dynamic";

import React from "react";

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

function Hero() {
  return (
    <div className="w-full h-[384px] hero flex flex-col gap-3 items-center justify-center">
      <h2 className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8 font-montserrat">
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
      </h2>
      <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg font-nunito">
        We are at the forefront of innovation, shaping the future and hosting
        the largest digital summit in Ogun State with over 2,000 participants
        annually.
      </p>
    </div>
  );
}

export default Hero;

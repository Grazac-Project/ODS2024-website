/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[600px] hidden md:block absolute top-0 left-0">
        <Image
          src="/assets/hero.svg"
          alt="hero image"
          width={1440}
          height={600}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[911px] md:hidden block absolute top-0 left-0">
        <Image
          src="/assets/hero-mobile.svg"
          alt="hero image"
          width={390}
          height={911}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import LoadingSpinner from "@/components/loader";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <LoadingSpinner color="border-white" />,
});

const AboutHero = () => {
  return (
    <section className="relative h-[384px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0 bg-primary">
        <Image
          src="/about.webp"
          alt="AboutHero image"
          width={1440}
          height={384}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0 bg-primary">
        <Image
          src="/about_mb.webp"
          alt="AboutHero image"
          width={380}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full sm:bg-black/50 lg:bg-black/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[85%] 2xl:max-w-[90%]  items-center">
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
            We are at the forefront of innovation, shaping the future and
            hosting the largest digital summit in Ogun State with over 2,000
            participants annually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

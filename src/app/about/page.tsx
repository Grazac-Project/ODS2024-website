import React from "react";
import Hero from "@/components/about/desktop/Hero";
import AboutSection from "@/components/about/desktop/About";
import MIssion from "@/components/about/desktop/MIssion";
import Team from "@/components/about/desktop/Team";
import Join from "@/components/home/Join";
import Why from "@/components/about/desktop/Why";
import ODG from "@/components/home/odg";
import ABOUTMOBILE from "@/components/about/mobile";

const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
        {/* <Sponsors /> */}
        <AboutSection />
        <MIssion />
        <Why />
        <Team />
        <Join />
        <ODG />
      </div>
      <div className="block md:hidden">
        <ABOUTMOBILE />
      </div>
    </>
  );
};

export default About;

import React from "react";
import Hero from "@/components/about/desktop/Hero";
import Sponsors from "@/components/home/Sponsors";
import AboutSection from "@/components/about/desktop/About";
import MIssion from "@/components/about/desktop/MIssion";

const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
        <Sponsors />
        <AboutSection />
        <MIssion />
      </div>
    </>
  );
};

export default About;

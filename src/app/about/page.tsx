import React from "react";
import Hero from "@/components/about/desktop/Hero";
import Sponsors from "@/components/home/Sponsors";
import AboutSection from "@/components/about/desktop/About";

const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
        <Sponsors />
        <AboutSection />
      </div>
    </>
  );
};

export default About;

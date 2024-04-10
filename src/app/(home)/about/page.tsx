import React from "react";
import Hero from "@/components/about/desk/hero";
import AboutSec from "@/components/about/desk/About";
import MIssion from "@/components/about/desk/Mission";
import Why from "@/components/about/desk/why";
import Team from "@/components/about/desk/Team";
import Join from "@/components/General/Join";
import ODG from "@/components/General/ODG";
import ABOUTMOBILE from "@/components/about/mob";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT OGUN DIGITAL",
};

const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
        <AboutSec />
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

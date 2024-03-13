import React from "react";
import HeroSection from "@/components/Home/Desktop/Hero";
import Sponsors from "@/components/Home/Desktop/Sponsors";
import Attend from "@/components/Home/Desktop/Attend";
import SpeakerSection from "@/components/Home/Desktop/Speakers";
import Join from "@/components/General/Join";
import ODG from "@/components/General/ODG";
import HighLight from "@/components/Home/Desktop/Highlights";
import Mobile from "@/components/Home/Mobile/Index";

const Home = () => {
  return (
    <div className="hidden md:block">
      <HeroSection />
      <Sponsors />
      <Attend />
      <HighLight />
      <SpeakerSection />
      <Join />
      <ODG />
      <div 
      // className="block md:hidden"
      >
        <Mobile />
      </div>
    </div>
  );
};

export default Home;

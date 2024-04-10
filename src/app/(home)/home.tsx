import React from "react";
import HeroSection from "@/components/Home/Desktop/Hero";
import Sponsors from "@/components/Home/Desktop/Sponsors";
import NewHeroSection from "@/components/Home/Desktop/newHero";
import SpeakerSection from "@/components/Home/Desktop/Speakers";
import Join from "@/components/General/Join";
import ODG from "@/components/General/ODG";
import HighLight from "@/components/Home/Desktop/Highlights";
import Mobile from "@/components/Home/Mobile/mobile";
import Attend from "@/components/Home/Desktop/Attend2";

const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        {/* <HeroSection /> */}
        <NewHeroSection />
        <Sponsors />
        <Attend />
        <HighLight />
        <SpeakerSection />
        <Join />
        <ODG />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
    </>
  );
};

export default Home;
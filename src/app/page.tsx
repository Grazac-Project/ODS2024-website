import React from "react";
import HeroSection from "@/components/Home/Desktop/Hero";
import Sponsors from "@/components/Home/Desktop/Sponsors";
import Attend from "@/components/Home/Desktop/Attend";
import SpeakerSection from "@/components/Home/Desktop/Speakers";

const Home = () => {
  return (
    <div className="hidden md:block">
      <HeroSection />
      <Sponsors />
      <Attend />
      <SpeakerSection/>
    </div>
  );
};

export default Home;

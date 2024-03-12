import React from "react";
import HeroSection from "@/components/Home/Desktop/Hero";
import Sponsors from "@/components/Home/Desktop/Sponsors";
import Attend from "@/components/Home/Desktop/Attend";

const Home = () => {
  return (
    <div className="hidden md:block">
      <HeroSection />
      <Sponsors />
      <Attend />
    </div>
  );
};

export default Home;

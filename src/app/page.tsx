import React from "react";
import HeroSection from "@/components/Home/Desktop/Hero";
import Sponsors from "@/components/Home/Desktop/Sponsors";

const Home = () => {
  return (
    <div className="hidden md:block">
      <HeroSection />
      <Sponsors />
    </div>
  );
};

export default Home;

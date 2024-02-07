import HeroSection from "@/components/home/HeroSection";
import HighLight from "@/components/home/Highlights";
import SpeakerSection from "@/components/home/speakers";
import Sponsors from "@/components/home/Sponsors";
import Attend from "@/components/home/attend";
import Join from "@/components/home/Join";
import ODG from "@/components/home/odg";

const Home = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <Sponsors />
        <Attend />
        <Join />
        <HighLight />
        <SpeakerSection />
        <ODG />
      </div>
    </>
  );
};

export default Home;

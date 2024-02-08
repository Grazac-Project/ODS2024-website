import HeroSection from "@/components/home/HeroSection";
import HighLight from "@/components/home/Highlights";
import SpeakerSection from "@/components/home/speakers";
import Sponsors from "@/components/home/Sponsors";
import Attend from "@/components/home/attend";
import Join from "@/components/home/Join";
import ODG from "@/components/home/odg";
import Mobile from "@/components/home/mobile";

const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeroSection />
        <Sponsors />
        <Attend />
        <Join />
        <HighLight />
        <SpeakerSection />
        <ODG />
      </div>
      <div className="flex flex-col items-center justify-center self-center md:hidden">
        <Mobile />
      </div>
    </>
  );
};

export default Home;

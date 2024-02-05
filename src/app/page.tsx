import HeroSection from "@/components/home/HeroSection";
import SpeakerSection from "@/components/home/speakers";
import Sponsors from "@/components/home/Sponsors";
import Attend from "@/components/home/attend";
import HighLight from "@/components/home/Highlights";
import Join from "@/components/home/Join";
import ODG from "@/components/home/odg";

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
    </>
  );
};

export default Home;

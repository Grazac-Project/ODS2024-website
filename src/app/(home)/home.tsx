import dynamic from "next/dynamic";
import HeroSection from "@/components/Home/Desktop/Hero";
import Sponsors from "@/components/Home/Desktop/Sponsors";
import SpeakerSection from "@/components/Home/Desktop/Speakers";
import Join from "@/components/General/Join";
import ODG from "@/components/General/ODG";
import HighLight from "@/components/Home/Desktop/Highlights";
import Mobile from "@/components/Home/Mobile/mobile";
import Attend from "@/components/Home/Desktop/Attend2";

const NewHeroSection = dynamic(
  () => import("@/components/Home/Desktop/newHero"),
  {
    ssr: false,
    loading: () => <HeroSection />,
  }
);

const Home = () => {
  return (
    <>
      <div className="hidden md:block overflow-x-hidden">
        <NewHeroSection />
        <Sponsors />
        <Attend />
        <HighLight />
        <SpeakerSection />
        <Join />
        <ODG />
      </div>
      <div className="block md:hidden overflow-x-hidden">
        <Mobile />
      </div>
    </>
  );
};

export default Home;

import Sponsors from "./Sponsors";
import Attend from "./Attend";
import AlmostUnder from "./AlmostUnder";
import Final from "./Final";
import HighLight from "../Desktop/Highlights";
import SpeakerSection from "../Desktop/Speakers";
import Hero from "./NewheroMobile";
import { MobileHero } from "./Hero";

const Mobile = () => {
  return (
    <>
      {/* hero  section */}
      <MobileHero />
      {/* Sponsors */}
      <Sponsors />
      {/* attend  section 401 2369 */}
      <Attend />
      <HighLight />
      <SpeakerSection />
      {/* almost under */}
      <AlmostUnder />
      {/* FinalSection */}
      <Final />
    </>
  );
};

export default Mobile;

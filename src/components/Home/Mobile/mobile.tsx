import Sponsors from "./Sponsors";
import Hero from "./Hero";
import Attend from "./Attend";
import AlmostUnder from "./AlmostUnder";
import Final from "./Final";
import HighLight from "../Desktop/Highlights";
import SpeakerSection from "../Desktop/Speakers";

const Mobile = () => {
  return (
    <>
      {/* hero  section */}
      <Hero />
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

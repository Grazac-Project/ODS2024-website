import React from "react";
import Image from "next/image";

interface Speaker {
  id: number;
  src: string;
  name: string;
  title: string;
  title2?: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div key={speaker.id} className={`relative font-montserrat`}>
      <Image src={speaker.src} alt="" width={420} height={360} />
      <div className="absolute bottom-3 left-8">
        <h3 className={`font-semibold text-xl text-white-500`}>
          {speaker.name}
        </h3>
        <p className="font-medium text-white-500">{speaker.title}</p>
        {speaker.title2 && (
          <p className="font-medium text-white-500">{speaker.title2}</p>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;

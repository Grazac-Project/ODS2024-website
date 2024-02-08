"use client";
import React from "react";
import { speakers } from "@/libs";
import { cn } from "@/utils/twcx";
import Speakers from "@/components/speakers";
import PreviewSkeleton from "@/components/highlightSkelton";


interface SpeakerDetails {
  searchParams: {
    [key: string]: string;
  };
}

const SpeakerDetails = ({ searchParams: { speakers_id } }: SpeakerDetails) => {
  const speaker = speakers.find(
    (speakers) => speakers.id === Number(speakers_id)
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <PreviewSkeleton /> : <Speakers speaker={speaker} />} </>;
};

export default SpeakerDetails;

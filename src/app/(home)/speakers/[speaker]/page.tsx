import { Metadata } from "next";
import Speakers from "./details/Speaker";
import { Speaker } from "@prisma/client";
import { baseUrl } from "@/actions/baseurl";

export interface SpeakerDetails {
  searchParams: {
    [key: string]: string;
  };
}

export async function generateMetadata({
  searchParams: { speakers_id },
}: SpeakerDetails): Promise<Metadata> {
  const response = await fetch(`${baseUrl}/api/speakers/${speakers_id}`);

  const data = await response.json();
  const post: Speaker = data.speaker;

  return {
    title: post.name,
    description: post.bio,
    openGraph: {
      images: [
        {
          url: post.image,
        },
      ],
    },
  };
}

const SpeakerDetails = ({ searchParams: { speakers_id } }: SpeakerDetails) => {
  return <Speakers speakers_id={speakers_id} />;
};

export default SpeakerDetails;

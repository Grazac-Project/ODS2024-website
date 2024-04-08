import { Metadata } from "next";
import Speakers from "./details/Speaker";
import { Speaker } from "@prisma/client";

export interface SpeakerDetails {
  searchParams: {
    [key: string]: string;
  };
}

export async function generateMetadata({
  searchParams: { speakers_id },
}: SpeakerDetails): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${speakers_id}`);
  const post: Speaker = await response.json();

  return {
    title: post.title,
    description: post.bio,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}

const SpeakerDetails = ({ searchParams: { speakers_id } }: SpeakerDetails) => {
  return <Speakers speakers_id={speakers_id} />;
};

export default SpeakerDetails;

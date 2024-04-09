import React from "react";
import MAIN from "../content/Details";
import { SpeakerDetails } from "@/app/(home)/speakers/[speaker]/page";
import { Highlight } from "@prisma/client";
import { Metadata } from "next";
import { baseUrl } from "@/actions/baseurl";

export async function generateMetadata({
  searchParams: { highlight_id },
}: SpeakerDetails): Promise<Metadata> {
  const response = await fetch(`${baseUrl}/api/highlights/${highlight_id}`);
  const data = await response.json();
  const post: Highlight = data.highlight;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.image,
        },
      ],
    },
  };
}

const page = ({ searchParams: { highlight_id } }: SpeakerDetails) => {
  return (
    <>
      <MAIN highlight_id={highlight_id} />
    </>
  );
};

export default page;

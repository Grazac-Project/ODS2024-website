import React from "react";
import MAIN from "../content/Details";
import { SpeakerDetails } from "@/app/(home)/speakers/[speaker]/page";


const page = ({ searchParams: { highlight_id } }: SpeakerDetails) => {
  return (
    <>
      <MAIN highlight_id={highlight_id} />
    </>
  );
};

export default page;

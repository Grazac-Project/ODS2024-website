import React from "react";
import High from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ODS Highlights",
};

const page = () => {
  return (
    <>
      <High />
    </>
  );
};

export default page;

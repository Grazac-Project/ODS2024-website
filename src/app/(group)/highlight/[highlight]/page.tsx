"use client";

import React from "react";
import { highlights } from "@/libs";
import MAIN from "@/components/gallery/main";
import PreviewSkeleton from "@/components/highlightSkelton";

interface HighlightPageProps {
  searchParams: {
    [key: string]: string;
  };
}

const HighlightPage = ({
  searchParams: { highlight_id },
}: HighlightPageProps) => {
  const highlight = highlights.find(
    (highlights) => highlights.id === Number(highlight_id)
  );

  return <MAIN highlight={highlight} />;
};

export default HighlightPage;

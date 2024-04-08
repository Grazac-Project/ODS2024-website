import { Speaker, Highlight } from "@prisma/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/speakers`);
  const speakers: Speaker[] = await res.json();

  const high = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/highlights`);
  const highlights: Highlight[] = await high.json();

  const highlightEntries: MetadataRoute.Sitemap = highlights.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/highlight/highlight?highlight_id${id}`,
  }));

  const speakerEntries: MetadataRoute.Sitemap = speakers.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/speakers/speaker?speakers_id=${id}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}/gallery`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASEURL}/shop`,
    },
    ...speakerEntries,
    ...highlightEntries,
  ];
}

import { Speaker, Highlight } from "@prisma/client";
import { MetadataRoute } from "next";
import { baseUrl } from "@/actions/baseurl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(`${baseUrl}/api/speakers`);
    const speakerData = await res.json();
    const speakers: Speaker[] = speakerData.speakers;

    const high = await fetch(`${baseUrl}/api/highlights`);
    const highLightData = await high.json();
    const highlights: Highlight[] = highLightData.highlights;

    const highlightEntries: MetadataRoute.Sitemap = highlights.map(
      ({ id }) => ({
        url: `${baseUrl}/highlight/highlight?highlight_id=${id}`,
      })
    );

    const speakerEntries: MetadataRoute.Sitemap = speakers.map(({ id }) => ({
      url: `${baseUrl}/speakers/speaker?speakers_id=${id}`,
    }));

    return [
      {
        url: `${baseUrl}`,
      },
      {
        url: `${baseUrl}/privacy`,
      },
      {
        url: `${baseUrl}/about`,
      },
      {
        url: `${baseUrl}/gallery`,
      },
      {
        url: `${baseUrl}/shop`,
      },
      ...speakerEntries,
      ...highlightEntries,
    ];
  } catch (error) {
    console.error("Error generating sitemap:", error);

    return [
      {
        url: `${baseUrl}`,
      },
      {
        url: `${baseUrl}/privacy`,
      },
      {
        url: `${baseUrl}/about`,
      },
      {
        url: `${baseUrl}/gallery`,
      },
      {
        url: `${baseUrl}/shop`,
      },
    ];
  }
}

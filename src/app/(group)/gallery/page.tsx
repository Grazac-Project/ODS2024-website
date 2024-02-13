import React from "react";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "@/components/gallery/Image";

type SearchResult = {
  public_id: string;
};

export default async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  console.log(results);

  return (
    <div className="grid grid-cols-4 gap-4">
      {results.resources.map((result) => (
        <CloudinaryImage
          key={result.public_id}
          src={result.public_id}
          width="400"
          height="300"
          alt="an image of something"
        />
      ))}
    </div>
  );
}

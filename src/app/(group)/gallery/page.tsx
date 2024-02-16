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
    .max_results(400)
    .execute()) as { resources: SearchResult[] };

  console.log(results);

  return (
       <section
     
        className=" min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 p-7 w-full h-full sm:border border-gray-200 dark:border-primary-light",
      <div className="container mb-5">
        <h2 className="text-black-100 font-semibold text-[40px] ">
         ODS Gallery
        </h2>
        <p className="font-nunito">
        Explore the incredible journey of Ogun digital summit through these
            capitivating pictures, each frame tells a story of innovation and
            excitement.
        </p>
      </div>
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
</section>
  );
}

import React from "react";
import cloudinary from "cloudinary";
import Body from "./Body";

export default async function Gallery() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  console.log(results);

  return <Body images={results} />;
}

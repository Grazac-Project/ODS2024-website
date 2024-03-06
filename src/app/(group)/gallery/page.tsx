import React from "react";
import cloudinary from "cloudinary";
import Body from "./Body";

export type Folder = { name: string; path: string };

export default async function Gallery({
  params: { folderName },
}: {
  params: {
    folderName: string;
  };
}) {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(400)
    .execute();

  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  console.log(folderName!);

  // const results = (await cloudinary.v2.search
  //   .expression(`resource_type:image AND folder=${name}`)
  //   .sort_by("created_at", "desc")
  //   .with_field("tags")
  //   .max_results(30)
  //   .execute()) as { resources: SearchResult[] };

  console.log(folders);

  // console.log(results);

  return <Body images={results} />;
}

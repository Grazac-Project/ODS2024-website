import React from "react";
import cloudinary from "cloudinary";
import Body from "./Body";

export type Folder = { name: string; path: string };

interface GalleryProps {
  params: {
    folderName: string;
  };
}

const Gallery: React.FC<GalleryProps> = async ({ params: { folderName } }) => {
  let images;

  if (folderName) {
    // Fetch filtered images based on the folderName
    images = await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${folderName}`)
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();
  } else {
    // Fetch all images if no folderName is provided
    images = await cloudinary.v2.search
      .expression("resource_type:image")
      .sort_by("created_at", "asc")
      .max_results(400)
      .execute();
  }

  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  console.log(folderName);

  return <Body images={images} folder={folders} />;
};

export default Gallery;

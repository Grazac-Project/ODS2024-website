import React from "react";
import cloudinary from "cloudinary";
import Body from "./content/body";

export type Folder = { name: string; path: string };

interface GalleryProps {
  params: {
    folderName: string;
  };
}

const Gallery: React.FC<GalleryProps> = async ({ params: { folderName } }) => {
  const { folders } = (await cloudinary.v2.api.sub_folders("ODS CONTENT")) as {
    folders: Folder[];
  };

  // console.log(folders);

  return (
    <>
      <Body folder={folders} />
    </>
  );
};

export default Gallery;

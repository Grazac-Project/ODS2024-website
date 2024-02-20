"use client";

import * as React from "react";
import { CloudinaryImage } from "@/components/gallery/Image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

interface BodyProps {
  images?: {
    total_count: number;
    time: number;
    resources: Resource[];
    rate_limit_allowed: number;
    rate_limit_reset_at: Date;
  };
}

interface Resource {
  public_id: string;
  folder: string;
}

const Body = ({ images }: BodyProps) => {
  const GalleryRe = React.useRef<HTMLDivElement>(null);
  const ImageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(GalleryRe);
  const isInView1 = useInView(ImageRef);
  const [selectedFolder, setSelectedFolder] = React.useState("");
  const [FilteredImages, setFilteredImages] = React.useState([] as Resource[]);

  const filterResourcesByFolder = (resources: Resource[], folder: string) => {
    return resources.filter((resource) => resource.folder === folder);
  };

  console.log(FilteredImages);

  React.useEffect(() => {
    if (images?.resources) {
      const updatedResources = selectedFolder
        ? filterResourcesByFolder(images.resources, selectedFolder)
        : images.resources;

      setFilteredImages(updatedResources);
    }
  }, [selectedFolder]);

  const handleFolderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFolder(event.target.value);
  };

  return (
    <section
      ref={GalleryRe}
      className={cn(
        " min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7 w-full h-full",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="md:flex flex-col hidden md:max-w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold text-neutral-900 md:text-4xl font-montserrat">
            ODS Gallery
          </h1>
          <div className="mb-4">
            <label htmlFor="folderSelect" className="mr-2 font-semibold">
              Folder
            </label>
            <select
              // id="folderSelect"
              value={selectedFolder}
              onChange={handleFolderChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">All</option>
              <option value="ODS 2021">2021</option>
              <option value="ODS 22">2022</option>
            </select>
          </div>
        </div>
        <p className="mt-4 text-[24px] text-neutral-950 md:w-[60%] lg:w-[854px] font-nunito">
          Explore the incredible journey of Ogun digital summit through these
          captivating pictures, each frame tells a story of innovation and
          excitement.
        </p>
      </div>
      <div className="flex flex-col md:hidden max-w-[343px] px-5">
        <div className="flex gap-5 justify-between  w-full text-neutral-900">
          <h1 className="flex-auto self-start mt-1.5 text-2xl font-semibold font-montserrat">
            ODS Gallery
          </h1>
          <div className="mb-4">
            <label htmlFor="folderSelect" className="mr-2 font-semibold">
              Folder
            </label>
            <select
              id="folderSelect"
              value={selectedFolder}
              onChange={handleFolderChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">All</option>
              <option value="ODS 2021">ODS 2021</option>
              <option value="ODS 22">ODS 22</option>
            </select>
          </div>
        </div>
        <p className="mt-4 w-full text-sm text-neutral-950 font-nunito">
          Explore the incredible journey of Ogun digital summit through these
          captivating pictures, each frame tells a story of innovation and
          excitement.
        </p>
      </div>

      <div
        ref={ImageRef}
        className={cn(
          "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
          isInView1
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
            : " opacity-0 translate-y-36"
        )}
      >
        {FilteredImages.map((resource) => (
          <CloudinaryImage
            key={resource.public_id}
            src={resource.public_id}
            width="400"
            height="300"
            alt="ODS IMAGES"
            className="w-full rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Body;

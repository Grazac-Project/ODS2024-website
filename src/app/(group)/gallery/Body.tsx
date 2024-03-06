/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck

"use client";

import * as React from "react";
import { CloudinaryImage } from "@/components/gallery/Image";
import useInView from "@/hooks/useInView";
import { Calendar } from "iconsax-react";
import { cn } from "@/utils/twcx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Folder } from "./page";

interface BodyProps {
  folder?: Folder[];
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

const Body = ({ images, folder }: BodyProps) => {
  const GalleryRef = React.useRef<HTMLDivElement>(null);
  const ImageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(GalleryRef);
  const isInView1 = useInView(ImageRef);
  const [selectedFolder, setSelectedFolder] = React.useState("");
  const [FilteredImages, setFilteredImages] = React.useState([] as Resource[]);
  const [filterVisibility, setFilterVisibility] = React.useState(false);

  const filterResourcesByFolder = (resources: Resource[], folder: string) => {
    return resources.filter((resource) => resource.folder === folder);
  };

  console.log(folder);

  React.useEffect(() => {
    if (images?.resources) {
      const updatedResources = selectedFolder
        ? filterResourcesByFolder(images.resources, selectedFolder)
        : images.resources;

      setFilteredImages(updatedResources);
    }
  }, [selectedFolder]);

  const handleFolderChange = (value?: string) => {
    setSelectedFolder(value!);
  };

  const all = "";
  return (
    <section
      ref={GalleryRef}
      className={cn(
        "min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7  w-full h-full",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="md:flex flex-col hidden md:max-w-full mb-[70px]">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold text-neutral-900 md:text-4xl font-montserrat">
            ODS Gallery
          </h1>

          <Select
            onValueChange={handleFolderChange}
            defaultValue={selectedFolder}
          >
            <SelectTrigger className="w-[154px] h-[53px] rounded-xl border flex items-center justify-between px-2 cursor-pointer bg-[#FDFDFD]">
              <SelectValue placeholder="ALL" />
            </SelectTrigger>
            <SelectContent className="bg-[#FDFDFD] rounded-xl border border-border-600 flex flex-col items-center gap-6 max-w-[154px]">
              <SelectGroup>
                {/* <SelectLabel>Years</SelectLabel> */}
                <SelectItem
                  value={undefined}
                  // className=""
                >
                  <div className="flex items-center justify-between w-[100px]">
                    <Calendar size={32} variant="Bold" />
                    <span className="text-2xl text-text-500">All</span>
                  </div>
                </SelectItem>
                <SelectItem value="ODS 22">
                  <div className="flex items-center justify-between w-[100px]">
                    <Calendar size="32" color="#111111" variant="Bold" />
                    <span className="text-2xl text-text-500">2022</span>
                  </div>
                </SelectItem>
                <SelectItem value="ODS 2021">
                  <div className="flex items-center justify-between w-[100px]">
                    <Calendar size="32" color="#111111" variant="Bold" />
                    <span className="text-2xl text-text-500">2021</span>{" "}
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="mt-4 text-[24px] text-neutral-950 md:w-[60%] lg:w-[854px] font-nunito">
          Explore the incredible journey of Ogun digital summit through these
          captivating pictures, each frame tells a story of innovation and
          excitement.
        </p>
      </div>
      <div className="flex flex-col md:hidden px-5 mb-5">
        <div className="flex justify-between  text-neutral-900 gap-10">
          <h1 className="flex-auto self-start mt-1.5 text-2xl font-semibold font-montserrat">
            ODS Gallery
          </h1>

          <Select
            onValueChange={handleFolderChange}
            defaultValue={selectedFolder}
          >
            <SelectTrigger className="w-[154px] h-[53px] rounded-xl border flex items-center justify-between px-2 cursor-pointer bg-[#FDFDFD]">
              <SelectValue placeholder="ALL" />
            </SelectTrigger>
            <SelectContent className="bg-[#FDFDFD] rounded-xl border border-border-600 flex flex-col items-center gap-6 max-w-[154px]">
              <SelectGroup>
                {/* <SelectLabel>Years</SelectLabel> */}
                <SelectItem
                  value={undefined}
                  // className=""
                >
                  <div className="flex items-center justify-between w-[100px]">
                    <Calendar size={32} variant="Bold" />
                    <span className="text-2xl text-text-500">All</span>
                  </div>
                </SelectItem>
                <SelectItem value="ODS 22">
                  <div className="flex items-center justify-between w-[100px]">
                    <Calendar size="32" color="#111111" variant="Bold" />
                    <span className="text-2xl text-text-500">2022</span>
                  </div>
                </SelectItem>
                <SelectItem value="ODS 2021">
                  <div className="flex items-center justify-between w-[100px]">
                    <Calendar size="32" color="#111111" variant="Bold" />
                    <span className="text-2xl text-text-500">2021</span>{" "}
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
          "w-full min-h-[941px] px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
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

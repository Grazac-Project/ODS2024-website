/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useInView from "@/hooks/useInView";
import { Calendar } from "iconsax-react";
import { Folder } from "../page";
import { cn } from "@/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";
import { encryptString, decryptString } from "@/utils";
import { CloudinaryImage } from "./Image";
import LoadingSpinner from "@/components/loader";

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
}

const Body = ({ folder }: BodyProps) => {
  const GalleryRef = useRef<HTMLDivElement>(null);
  const ImageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(GalleryRef);
  const isInView1 = useInView(ImageRef);
  const [images, setImages] = useState<Resource[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSelectChange = (value: string) => {
    setSelectedFolder(encryptString(value));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setImages([]);
        const apiUrl = selectedFolder
          ? `/api/image/${selectedFolder}`
          : "/api/image";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setImages(data.results.resources || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedFolder]);

  return (
    <section
      ref={GalleryRef}
      className={cn(
        "min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7  w-full h-full container",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="md:flex flex-col hidden md:max-w-fukk mb-[70px]">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold text-neutral-900 md:text-4xl font-montserrat">
            ODS Gallery
          </h1>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[154px] h-[53px] rounded-xl border flex items-center justify-between px-2 cursor-pointer bg-[#FDFDFD]">
              <SelectValue placeholder="Random" />
            </SelectTrigger>
            <SelectContent className="bg-[#FDFDFD] rounded-xl border border-border-600 flex flex-col items-center gap-6 max-w-[154px]">
              <SelectGroup>
                <SelectLabel>YEAR</SelectLabel>
                {folder &&
                  folder.map((f) => (
                    <SelectItem key={f.path} value={f.path}>
                      <div className="flex items-center justify-between w-full gap-x-1">
                        <Calendar size="20" color="#111111" variant="Bold" />
                        <span className="text-text-500">{f.name}</span>
                      </div>
                    </SelectItem>
                  ))}
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
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[154px] h-[53px] rounded-xl border flex items-center justify-between px-2 cursor-pointer bg-[#FDFDFD]">
              <SelectValue placeholder="Random" />
            </SelectTrigger>
            <SelectContent className="bg-[#FDFDFD] rounded-xl border border-border-600 flex flex-col items-center gap-6 max-w-[154px]">
              <SelectGroup>
                <SelectLabel>YEAR</SelectLabel>
                {folder &&
                  folder.map((f) => (
                    <SelectItem key={f.path} value={f.path}>
                      <div className="flex items-center justify-between w-full">
                        <Calendar size="32" color="#111111" variant="Bold" />
                        <span className="text-2xl text-text-500">{f.name}</span>
                      </div>
                    </SelectItem>
                  ))}
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
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full text-gray-400">
          <LoadingSpinner />
        </div>
      )}
      {images && images.length === 0 && (
        <div className="flex items-center justify-center w-full h-full text-gray-400">
          😞 No images found
        </div>
      )}
      <div
        ref={ImageRef}
        className={cn(
          "w-full min-h-[941px] px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
          isInView1
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
            : " opacity-0 translate-y-36"
        )}
      >
        {images?.map((image) => (
          <CloudinaryImage
            key={image.public_id}
            publicId={image.public_id}
            src={image.public_id}
            width="400"
            height="300"
            alt="ODS IMAGES"
            className="w-full rounded-lg"
          />
        ))}
        {/* {images && images.length === 0 && (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            😞 No images found
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Body;

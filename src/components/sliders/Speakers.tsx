"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Speaker } from "@prisma/client";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { useFetch } from "@/hooks/useFetch";
import { SpeakerSkeletonCard } from "./SpeakerCard";

function SpeakersSlder() {
  const slideRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(slideRef);
  const [speakersData, setSpeakersData] = useState<Speaker[]>([]);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const url = "/api/speakers";
  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setSpeakersData(data.speakers || []);
    }
  }, [data]);

  return (
    <div
      ref={slideRef}
      className={cn(
        "w-full items-center justify-center  text-black",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-36"
      )}
    >
      {isLoading ? (
        <div className="items-center justify-center h-full w-full">
          <div className="md:hidden">
            <SpeakerSkeletonCard />
          </div>
          <div className="hidden lg:hidden md:flex w-full items-center justify-between gap-x-1">
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
          </div>
          <div className="hidden lg:flex w-full items-center justify-between gap-x-1">
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
          </div>
        </div>
      ) : error ? (
        <div className="grid place-items-center min-h-[400px]">
          <div className="text-center ">
            <h3 className="text-2xl">{error.message}</h3>
            <p>⚒️ We are currently working on this ⚒️</p>
          </div>
        </div>
      ) : (
        <>
          {speakersData.length > 0 && (
            <Slider
              {...carouselSettings}
              className="justify-between items-center w-full"
            >
              {speakersData?.map((speaker) => (
                <div key={speaker?.id} className={`relative`}>
                  <Image
                    src={speaker?.image || "/speaker1.svg"}
                    alt=""
                    width={420}
                    height={360}
                    className="w-full aspect-[1.05] object-cover rounded-xl max-md:max-w-full"
                  />
                  <div className="absolute bottom-3 left-8">
                    <h3 className="font-semibold text-xl text-white">
                      {speaker?.name}
                    </h3>
                    <p className="font-medium text-white">{speaker?.title}</p>
                    {speaker?.occupation && (
                      <p className="font-medium text-white">
                        {speaker?.occupation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {speakersData.length === 0 && (
            <div className="text-center">
              <p>No highlights available</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SpeakersSlder;

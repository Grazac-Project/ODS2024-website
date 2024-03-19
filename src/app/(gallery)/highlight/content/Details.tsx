"use client";

import React, { useEffect } from "react";
import { Calendar } from "iconsax-react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import Image from "next/image";
import { Highlight } from "@prisma/client";
import HighlightsSlider from "@/components/sliders/Highlights";
import { SpeakerDetails } from "@/app/speakers/[speaker]/page";
import { useFetch } from "@/hooks/useFetch";
import PreviewSkeleton from "@/components/highlightSkelton";

const MAIN = ({ highlight_id }: { highlight_id?: string }) => {
  const MainRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(MainRef);
  const TextRef = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(TextRef);
  const HighlightRef = React.useRef<HTMLDivElement>(null);
  const isInView2 = useInView(HighlightRef);
  const [highlight, setHighlight] = React.useState<Highlight>();

  const url = `/api/highlights/${highlight_id}`;
  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setHighlight(data.highlight);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <PreviewSkeleton />
      ) : (
        <>
          <section
            ref={MainRef}
            className={cn(
              "justify-between md:mt-[50px] mx-auto items-center flex flex-col md:flex-row md:px-[30px] px-[10px]",
              isInView
                ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                : " opacity-0 translate-y-36"
            )}
          >
            <div className="flex flex-col md:w-[571px] max-md:ml-0 max-md:w-full mb-[40px] md:mb-0">
              <div className="flex flex-col self-stretch px-5 my-auto text-neutral-900 max-md:mt-10 max-md:max-w-full">
                <div
                  aria-label="Date"
                  role="img"
                  className="flex gap-1.5 justify-center  self-start px-6 py-2 text-xs font-medium leading-5 text-black whitespace-nowrap rounded-2xl bg-neutral-200 max-md:px-5"
                >
                  <Calendar />
                  <div className="grow">{highlight?.date}</div>
                </div>
                <h1 className="mt-4 text-[56px] font-semibold font-montserrat leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  {highlight?.title}
                </h1>
                <div className="mt-6 text-xl leading-6 max-md:max-w-full font-nunito items-center justify-center">
                  <span className="font-bold text-black text-[40px]">.</span>{" "}
                  {highlight?.speaker}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 lg:min-w-[540px] max-w-[342px] max-md:ml-0 max-md:w-full bg-black rounded-xl md:max-h-[447px] max-h-[284px] items-center justify-center">
              <Image
                src={highlight?.image!}
                alt="speaker"
                width={540}
                height={477}
                loading="eager"
              />
            </div>
          </section>

          <div
            ref={TextRef}
            className={cn(
              " font-nunito mt-20 md:px-[30px] px-[10px] text-start flex flex-col gap-9",
              isInView1
                ? "opacity-100 translate-y-0 md:delay-300 duration-500"
                : " opacity-0 translate-y-36"
            )}
          >
            <p>{highlight?.description}</p>
            <p>{highlight?.description}</p>
          </div>
        </>
      )}
      <section>
        <div
          ref={HighlightRef}
          className={cn(
            "container mt-20 items-center justify-center",
            isInView2
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <h3
            className={`font-montserrat font-semibold text-black text-[40px] mb-5`}
          >
            Other Highlights
          </h3>
          <HighlightsSlider />
        </div>
      </section>
    </>
  );
};

export default MAIN;

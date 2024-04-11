"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { Highlight } from "@prisma/client";
import { useFetch } from "@/hooks/useFetch";
import LoadingSpinner from "@/components/loader";
import { SpeakerSkeletonCard } from "./SkeltonCard";

const High = () => {
  const AttendRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(AttendRef);
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  const url = "/api/highlights";
  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setHighlights(data.highlights || []);
    }
  }, [data]);

  const firstHighlight = highlights.length > 0 ? highlights[0] : null;
  return (
    <section
      ref={AttendRef}
      className={cn(
        " min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7 w-full h-full",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div>
        {isLoading ? (
          <div
            className={cn(
              "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4"
            )}
          >
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
            <SpeakerSkeletonCard />
          </div>
        ) : error ? (
          <div className="grid place-items-center min-h-[200px]">
            <div className="text-center ">
              <h3 className="text-2xl">{error.message}</h3>
              <p>⚒️ We are currently working on this ⚒️</p>
            </div>
          </div>
        ) : (
          <>
            {highlights.length > 0 && (
              <div
                className={cn(
                  "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
                  {}
                )}
              >
                {highlights?.map((highlights) => (
                  <div
                    key={highlights?.id}
                    className="flex flex-col text-lg leading-5 max-w-[380px] min-w-[380px]"
                  >
                    <Image
                      src={highlights?.image}
                      alt=""
                      width={420}
                      height={360}
                      className="w-full aspect-[1.05] object-cover rounded-[20px]"
                    />
                    {/* <h3 className="font-semibold text-2xl text-text-500 text-center mt-3">
              {highlights?.name}
            </h3>
            <p className="mt-2 w-full font-semibold text-center text-zinc-950">
              {highlights?.title}{" "}
            </p> */}
                    <Link
                      href={`/highlight/highlight?highlight_id=${highlights?.id}`}
                      className="flex gap-2.5 justify-center self-center px-16 py-4 mt-6 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
                    >
                      <span className="grow">View details</span>
                      <IoIosArrowForward />
                    </Link>
                  </div>
                ))}
                {highlights.length === 0 && (
                  <div className="text-center">
                    <p>No highlights available</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default High;

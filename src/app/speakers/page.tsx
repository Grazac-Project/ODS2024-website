import React from "react";
import { speakers } from "@/libs";
import { cn } from "@/utils/twcx";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Speakers = () => {
  return (
    <section
      className={cn(
        " min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7 w-full h-full sm:border border-gray-200 dark:border-primary-light"
      )}
    >
      <div
        className={cn(
          "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
          {
            // hidden: subset.length === 0,
          }
        )}
      >
        {speakers?.map((speaker) => (
          <div
            key={speaker?.id}
            className="flex flex-col text-lg leading-5 max-w-[420px]"
          >
            <Image
              src={speaker?.src}
              alt=""
              width={420}
              height={360}
              // className="w-full border-t border-r-4 border-b-4 border-l border-solid aspect-[1.16] border-b-[color:var(--Foundation-black-black-500,#111)] border-l-[color:var(--Foundation-black-black-500,#111)] border-r-[color:var(--Foundation-black-black-500,#111)] border-t-[color:var(--Foundation-black-black-500,#111)]"
            />
            <h3 className="font-semibold text-2xl text-text-500 text-center mt-3">
              {speaker?.name}
            </h3>
            <p className="mt-2 w-full font-semibold text-center text-zinc-950">
              {speaker?.title}{" "}
            </p>
            <Link
              href={`/speakers/speaker?speakers_id=${speaker?.id}`}
              className="flex gap-2.5 justify-center self-center px-16 py-4 mt-6 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
            >
              <span className="grow">View Bio</span>
              <IoIosArrowForward />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;

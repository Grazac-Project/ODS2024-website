import React from "react";
import Image from "next/image";
import { Speaker, Social } from "@prisma/client";
import Link from "next/link";

const Speakers = ({
  speaker,
  socials,
}: {
  speaker?: Speaker;
  socials: Social[];
}) => {
  return (
    <div className="px-16 pt-6 pb-4 max-md:px-5 z-20 bg-white relative container">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div>
          <Image
            src={speaker?.image!}
            alt="speaker"
            width={540}
            height={477}
            loading="eager"
            className="w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <h2 className="text-5xl font-semibold text-green-700 max-md:max-w-full max-md:text-4xl">
            {speaker?.name}
          </h2>
          <div className="mt-4 text-2xl font-semibold leading-7 text-zinc-950 max-md:max-w-full">
            {speaker?.title}
          </div>
          <div className="mt-8 text-lg leading-6 text-neutral-950 max-md:max-w-full">
            {speaker?.bio}
          </div>
          <div className="flex gap-4 self-start mt-6">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                className="flex justify-center items-center  bg-green-300 rounded-md aspect-[1.07]"
              >
                <Image
                  src={`/socials/${social.platform}.svg`}
                  alt="twitter"
                  width={60}
                  height={60}
                  loading="eager"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;

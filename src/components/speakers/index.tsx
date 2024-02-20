import React from "react";
import Image from "next/image";
import { SpeakerProps } from "@/types";
import Link from "next/link";

const Speakers = ({ speaker }: { speaker?: SpeakerProps }) => {
  return (
    <div className="px-16 pt-6 pb-4 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div
        // className="bg-green-300 max-w-[500px] max-h-[476px] rounded-[140px_0px_155px_211px]"
        >
          <Image
            src={speaker?.src!}
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
            {speaker?.description.bio}
          </div>
          <div className="flex gap-4 self-start mt-6">
            {speaker?.socials.map((social, index) => (
              <Link
                key={index}
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
            {/* <Link
              href={speaker?.socials.url }
              className="flex justify-center items-center px-5 py-4 bg-green-300 rounded-md aspect-[1.07]"
            >
              <Image
                src="/socials/twitter.svg"
                alt="twitter"
                width={60}
                height={60}
              />
            </Link>
            <div className="flex justify-center items-center px-5 py-4 bg-green-300 rounded-md aspect-[1.07]">
              <Image
                src="/socials/insta.svg"
                alt="twitter"
                width={60}
                height={60}
              />
            </div>
            <div className="flex justify-center items-center p-5 bg-green-300 rounded-md aspect-[1.07]">
              <Image
                src="/socials/link.svg"
                alt="twitter"
                width={60}
                height={60}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;

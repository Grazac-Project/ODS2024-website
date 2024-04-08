"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Speaker, Social } from "@prisma/client";
import Link from "next/link";
import { baseUrl } from "@/actions/baseurl";
import { useInView } from "framer-motion";
import Join from "@/components/General/Join";
import { cn } from "@/utils";
import { ArrowRight2 } from "iconsax-react";
import { Skeleton } from "@/components/ui/skeleton";

const Speakers = ({ speakers_id }: { speakers_id?: string }) => {
  const [speakerDetails, setSpeakerDetails] = useState<Speaker>();
  const [socials, setSocials] = useState<Social[]>();
  const [Status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchSpeakerDetails = async () => {
      try {
        setStatus("loading");
        const response = await fetch(`${baseUrl}/api/speakers/${speakers_id}`);
        const data = await response.json();
        setStatus("success");
        setSpeakerDetails(data.speaker);
        setSocials(data.speaker.socials);
      } catch (error) {
        setStatus("error");
        console.error("Error fetching speaker details:", error);
      }
    };

    fetchSpeakerDetails();
  }, [speakers_id]);

  const [loading, setLoading] = React.useState(true);
  const JoinRef = React.useRef<HTMLDivElement>(null);
  const isInView8 = useInView(JoinRef);
  const JoinRef2 = React.useRef<HTMLDivElement>(null);
  const isInView9 = useInView(JoinRef2);

  const isLoading = Status === "loading";

  return (
    <>
      <div className="px-16 pt-6 pb-4 max-md:px-5 z-20 bg-white relative container">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          {isLoading ? (
            <Skeleton className="h-[330px] w-[320px] max-w-full rounded-xl" />
          ) : (
            <div>
              <Image
                src={speakerDetails?.image!}
                alt="speaker"
                width={540}
                height={477}
                loading="eager"
                className="w-full aspect-[1.05] object-cover duration-300 max-md:mt-10 max-md:max-w-full"
              />
            </div>
          )}

          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            {isLoading ? (
              <Skeleton className="h-4 max-w-full" />
            ) : (
              <h2 className="text-5xl font-semibold text-green-700 max-md:max-w-full max-md:text-4xl">
                {speakerDetails?.name}
              </h2>
            )}

            {isLoading ? (
              <Skeleton className="h-4 max-w-full" />
            ) : (
              <div className="mt-4 text-2xl font-semibold leading-7 text-zinc-950 max-md:max-w-full">
                {speakerDetails?.title}
              </div>
            )}
            {isLoading ? (
              <Skeleton className="h-4 max-w-full" />
            ) : (
              <div className="mt-8 text-lg leading-6 text-neutral-950 max-md:max-w-full">
                {speakerDetails?.bio}
              </div>
            )}

            <div className="flex gap-4 self-start mt-6">
              {socials?.map((social) => (
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
      <div className="hidden md:block">
        <Join />
      </div>
      <section className="block md:hidden">
        <div
          ref={JoinRef}
          className={cn(
            "flex flex-col w-full justify-center mt-[60px] py-11 text-base leading-5 text-white bg-neutral-900 ",
            isInView8
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <div className="max-w-[328px] flex flex-col self-center items-center justify-center">
            <header className="text-2xl font-semibold  text-center">
              Join as a Partner/Sponsor/ <br /> Exhibitors
            </header>
            <div className="mt-4 capitalize whitespace-nowrap">
              Unlock Boundless Opportunities at ODS 24
            </div>
            <div>
              <div className="self-center flex">
                <Link
                  href="/"
                  className="flex gap-2.5 justify-center self-center px-11 py-2 mt-8 max-w-full whitespace-nowrap bg-green-600 rounded-xl w-[245px]"
                >
                  <span className="grow self-start mt-1">Become a partner</span>

                  <ArrowRight2 />
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="flex gap-2.5 justify-center self-center px-8 py-2 mt-4 max-w-full text-green-600 whitespace-nowrap rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] w-[245px]"
                >
                  <span className="grow self-start mt-1">
                    Become an Exhibitor
                  </span>

                  <ArrowRight2 />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={JoinRef2}
          className={cn(
            "flex flex-col justify-center w-full",
            isInView9
              ? "opacity-100 translate-y-0 md:delay-300 duration-500"
              : " opacity-0 translate-y-36"
          )}
        >
          <Image
            src="/under.svg"
            alt="hero image"
            width={390}
            height={304}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </section>{" "}
    </>
  );
};

export default Speakers;

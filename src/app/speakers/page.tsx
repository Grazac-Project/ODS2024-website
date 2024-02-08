"use client";

import React from "react";
import { speakers } from "@/libs";
import { cn } from "@/utils/twcx";
import Image from "next/image";
import { ArrowLeft, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import useInView from "@/hooks/useInView";
import Join from "@/components/home/Join";

const Speakers = () => {
  const router = useRouter();
  const AttendRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(AttendRef);

  const JoinRef = React.useRef<HTMLDivElement>(null);
  const isInView8 = useInView(JoinRef);
  const JoinRef2 = React.useRef<HTMLDivElement>(null);
  const isInView9 = useInView(JoinRef2);
  return (
    <>
      <div className="fex w-full justify-start max-[500px]:py-2 px-4 sm:px-8 xl:px-10 2xl:px-20 my-[60px]">
        <div className="flex w-full justify-start">
          <button
            tabIndex={0}
            aria-label="Go Back"
            onClick={() => router.back()}
            type="button"
            className="flex font-medium items-center gap-x-1 text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20 pr-1 pt-4"
          >
            <ArrowLeft aria-hidden />
            <span>Back</span>
          </button>
        </div>
      </div>
      <section
        ref={AttendRef}
        className={cn(
          " min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 p-7 w-full h-full sm:border border-gray-200 dark:border-primary-light",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
            : " opacity-0 translate-y-36"
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
      <div className="hidden md:block">
        <Join />
      </div>
      {/* almost under */}
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
      </section>
    </>
  );
};

export default Speakers;

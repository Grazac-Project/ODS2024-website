"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";

const Final = () => {
  const FianlRef = React.useRef<HTMLDivElement>(null);
  const isInView10 = useInView(FianlRef);
  return (
    <section>
      <div
        ref={FianlRef}
        className={cn(
          "flex flex-col mt-9 px-5 ",
          isInView10
            ? "opacity-100 translate-y-0 md:delay-300 duration-500"
            : " opacity-0 translate-y-36"
        )}
      >
        <h2 className=" font-montserrat w-full text-3xl font-semibold leading-10 text-neutral-900">
          Unlocking Tech Innovations Without Boundaries
        </h2>
        <span className="mt-4 w-full text-base leading-5 text-neutral-900 font-nunito">
          The ODS 23 Mobile App is your all-in-one tool for an immersive tech
          experience at your fingertip. Connect with like minds like never
          before
        </span>
        <div className="flex flex-col gap-5 items-center justify-between mt-9 w-full self-center">
          <Image
            loading="eager"
            src="/phone.svg"
            alt="hero image"
            width={342}
            height={332}
            priority
            className="w-full h-full object-cover"
          />
          <div className="flex gap-4 mt-5">
            <Link href="/">
              <Image
                loading="eager"
                src="/apple.svg"
                alt="hero image"
                width={144}
                height={48}
                priority
                className="w-full h-full object-cover"
              />
            </Link>
            <Link href="/">
              <Image
                loading="eager"
                src="/google.svg"
                alt="hero image"
                width={162}
                height={48}
                priority
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;

"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, ArrowSquareLeft } from "iconsax-react";
import Link from "next/link";
import { cn } from "@/utils/twcx";

const TopContent = () => {
  const router = useRouter();
  const pathname = usePathname();

  const HighLight = "/highlight" ? "/highlight" : "/highlight/highlight";

  const Gallery = "/gallery";
  return (
    <>
      <div className="mt-[50px]">
        <div className="fex w-full justify-start max-[500px]:py-2 px-4 sm:px-8 xl:px-10 2xl:px-20 ">
          <div className="flex w-full justify-start">
            <button
              tabIndex={0}
              aria-label="Go Back"
              onClick={() => router.back()}
              type="button"
              className="flex font-medium items-center gap-x-1 text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/20 pr-1 pt-4"
            >
              <ArrowSquareLeft size={30} aria-hidden />
              <span>Back</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center md:my-[70px] my-[40px]">
          <div className="flex items-center max-w-[372px] max-h-[58px] min-h-[56px] min-w-[342px] gap-5 justify-between px-4 pb-4 text-lg leading-5 whitespace-nowrap rounded-xl border-b border-solid border-b-[color:var(--Foundation-stroke-stroke-600,#CDCDCD)] font-[18px]">
            <Link
              href="/highlight"
              className={cn(
                "justify-center px-6 py-2.5  max-w-[150px]  border border-solid border-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] rounded-[100px]",
                pathname === HighLight
                  ? "text-white bg-primary"
                  : "text-primary bg-white"
              )}
            >
              Highlights
            </Link>
            <Link
              href="/gallery"
              className={cn(
                "justify-center px-6 py-2.5  min-w-[150px]  border border-solid border-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] rounded-[100px]",
                pathname === Gallery
                  ? "text-white bg-primary"
                  : "text-primary bg-white"
              )}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContent;

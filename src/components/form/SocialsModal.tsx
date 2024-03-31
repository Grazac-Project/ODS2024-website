"use client";

import React from "react";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";
import { X } from "lucide-react";
import Image from "next/image";

interface Social {
  id?: string;
  image?: string;
  name?: string;
}
const SocialsModal = ({ id, image, name }: Social) => {
  const { ShowSocialModal, setShowSocialModal } = useStateCtx();
  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all duration-300 z-[99] backdrop-blur-sm",
          ShowSocialModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowSocialModal(false)}
      />
      <div
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          "py-6   flex flex-col  w-[360px] h-[300px] min-[450px]:h-[330px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[400px] justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ",
          ShowSocialModal
            ? "-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl"
            : "translate-x-full duration-300 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1]  pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header capitalize">
            Add {name ? `${name}'s Social` : "Speakers Social"}
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => {
              setShowSocialModal(false);
            }}
            className="dark:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialsModal;

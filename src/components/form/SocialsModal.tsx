"use client";

import React, { useState } from "react";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";
import { CheckCircle, X } from "lucide-react";
import Image from "next/image";
import { baseUrl } from "@/actions/baseurl";

interface Social {
  id?: string;
  image?: string;
  name?: string;
}

type Data = {
  platform: string;
  url: string;
};
const SocialsModal = ({ id, image, name }: Social) => {
  const { ShowSocialModal, setShowSocialModal } = useStateCtx();
  const [status, setStatus] = useState("idle");
  const [showInstagramInput, setShowInstagramInput] = useState(false);
  const [showLinkedinInput, setShowLinkedinInput] = useState(false);
  const [showTwitterInput, setShowTwitterInput] = useState(false);
  const [instagramLink, setInstagramLink] = useState<Data>({
    platform: "instagram",
    url: "",
  });
  const [linkedinLink, setLinkedinLink] = useState<Data>({
    platform: "linkedin",
    url: "",
  });
  const [twitterLink, setTwitterLink] = useState<Data>({
    platform: "twitter",
    url: "",
  });

  const handleTwitterSubmit = async () => {
    try {
      setStatus("loading");
      const res = await fetch(`${baseUrl}/api/speakers/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(twitterLink),
      });

      if (res.status === 200) {
        setStatus("success3");
        setShowTwitterInput(!showTwitterInput);
      }
      if (res.status === 500) {
        setStatus("error");
      }
    } catch (e: any) {
      setStatus("error");
    }
  };

  const handleInstagramSubmit = async () => {
    try {
      setStatus("loading");
      const res = await fetch(`${baseUrl}/api/speakers/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(instagramLink),
      });

      if (res.status === 200) {
        setStatus("success1");
        setShowInstagramInput(!showInstagramInput);
      }
      if (res.status === 500) {
        setStatus("error");
      }
    } catch (e: any) {
      setStatus("error");
    }
  };

  const handleLinkedinSubmit = async () => {
    try {
      setStatus("loading");
      const res = await fetch(`${baseUrl}/api/speakers/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(linkedinLink),
      });

      if (res.status === 200) {
        setStatus("success2");
        setShowLinkedinInput(!showLinkedinInput);
      }
      if (res.status === 500) {
        setStatus("error");
      }
    } catch (e: any) {
      setStatus("error");
    }
  };
  const Success = status === "success1";

  const Success2 = status === "success2";

  const Success3 = status === "success3";
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
        <div className="flex h-full p-6 md:px-12 w-full">
          <div className="flex flex-col w-full items-center justify-between">
            <button
              type="button"
              onClick={() => setShowInstagramInput(!showInstagramInput)}
            >
              <Image
                src="/socials/instagram.svg"
                alt="Instagram"
                width={60}
                height={60}
                loading="eager"
              />
            </button>
            {Success && (
              <div className="bg-emerald-700/10 p-3 rounded-md flex  items-center gap-x-2 text-sm text-emerald-700">
                <CheckCircle className="h-4 w-4" />
                <p className="text-center">Added</p>
              </div>
            )}
            {showInstagramInput && (
              <>
                <input
                  type="text"
                  name="url"
                  value={instagramLink.url}
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  onChange={(e) =>
                    setInstagramLink({
                      ...instagramLink,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter Instagram link"
                />

                <button
                  type="button"
                  className={cn(
                    "rounded-lg bg-primary text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                  )}
                  onClick={handleInstagramSubmit}
                >
                  Submit
                </button>
              </>
            )}
          </div>
          <div className="flex flex-col w-full items-center justify-between">
            <button
              type="button"
              onClick={() => setShowLinkedinInput(!showLinkedinInput)}
            >
              <Image
                src="/socials/linkedin.svg"
                alt="Socials"
                width={60}
                height={60}
                loading="eager"
              />
            </button>
            {Success2 && (
              <div className="bg-emerald-700/10 p-3 rounded-md flex  items-center gap-x-2 text-sm text-emerald-700">
                <CheckCircle className="h-4 w-4" />
                <p className="text-center">Added</p>
              </div>
            )}
            {showLinkedinInput && (
              <>
                <input
                  type="text"
                  name="url"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={linkedinLink.url}
                  onChange={(e) =>
                    setLinkedinLink({
                      ...linkedinLink,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter LinkedIn link"
                />

                <button
                  type="button"
                  className={cn(
                    "rounded-lg bg-primary text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                  )}
                  onClick={handleLinkedinSubmit}
                >
                  Submit
                </button>
              </>
            )}
          </div>
          <div className="flex flex-col w-full items-center justify-between">
            <button
              type="button"
              onClick={() => setShowTwitterInput(!showTwitterInput)}
            >
              <Image
                src="/socials/twitter.svg"
                alt="Socials"
                width={60}
                height={60}
                loading="eager"
              />
            </button>
            {Success3 && (
              <div className="bg-emerald-700/10 p-3 rounded-md flex  items-center gap-x-2 text-sm text-emerald-700">
                <CheckCircle className="h-4 w-4" />
                <p className="text-center">Added</p>
              </div>
            )}
            {showTwitterInput && (
              <>
                <input
                  type="text"
                  name="url"
                  value={twitterLink.url}
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  onChange={(e) =>
                    setTwitterLink({
                      ...twitterLink,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter Twitter link"
                />

                <button
                  type="button"
                  onClick={handleTwitterSubmit}
                  className={cn(
                    "rounded-lg bg-primary text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                  )}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialsModal;

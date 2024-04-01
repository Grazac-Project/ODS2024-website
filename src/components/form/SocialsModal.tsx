"use client";

import React, { useState } from "react";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";
import { X } from "lucide-react";
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

      if (res.status === 200 || res.ok) {
        setStatus("sucess");
      }
      if (res.status === 500) {
        setStatus("error");
      }
    } catch (e: any) {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

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
            {showInstagramInput && (
              <form>
                <input
                  type="text"
                  name="url"
                  value={instagramLink.url}
                  onChange={(e) =>
                    setInstagramLink({
                      ...instagramLink,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter Instagram link"
                />
                <button type="submit">Submit</button>
              </form>
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
            {showLinkedinInput && (
              <form>
                <input
                  type="text"
                  name="url"
                  value={linkedinLink.url}
                  onChange={(e) =>
                    setLinkedinLink({
                      ...linkedinLink,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter LinkedIn link"
                />
                <button type="submit">Submit</button>
              </form>
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
            {showTwitterInput && (
              <>
                <input
                  type="text"
                  name="url"
                  value={twitterLink.url}
                  onChange={(e) =>
                    setTwitterLink({
                      ...twitterLink,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter Twitter link"
                />
                <button onClick={handleTwitterSubmit}>Submit</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialsModal;

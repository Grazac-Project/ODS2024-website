/* eslint-disable react-hooks/exhaustive-deps */

"üse client";

import Link from "next/link";
import { useStateCtx } from "@/context/StateCtx";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useWindowHeight from "@/hooks/useDimension";
import { ArrowRight2, ArrowDown2 } from "iconsax-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/utils/twcx";
import { BsX } from "react-icons/bs";
import { NAV_LINKS } from "@/libs";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [openAbout, setopenAbout] = useState(false);
  const pathname = usePathname();

  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu]);

  const home = "/";
  return (
    <nav
      className={cn(
        "menu lg:hidden bg-white min-h-[100dvh] absolute top-0 left-0 right-0 transition-all opacity-0",
        showMobileMenu
          ? "translate-x-0 duration-1000 opacity-100"
          : "translate-x-full duration-300"
      )}
    >
      <div className="flex justify-between px-4 py-6 bg-white-100 border-[#EBEEEF] border-b-[1px] max-h-[64px] ">
        <Link
          href="/"
          className={cn(
            " max-sm:w-[120px] max-[450px]:w-[100px]",
            scrollHeight > 200 ? "w-[120px] " : "w-fit"
          )}
        >
          <Image
            src="/assets/logo-sm.svg"
            alt="logo"
            width={155}
            height={55}
            loading="eager"
          />
        </Link>
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none text-[35px] font-normal"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <BsX />
        </button>
      </div>
      <div className="flex flex-col items-start h-full w-full gap-y-6 p-6 whitespace-nowrap relative">
        <Image
          src="/assets/ogun.svg"
          alt={""}
          width={155}
          height={55}
          className="self-center w-full aspect-[1.09] max-w-[287px] absolute"
        />
        <Link
          onClick={() => {
            setShowMobileMenu(false);
          }}
          href="/"
          className={cn(
            "flex capitalize relative text-lg font-medium before:bg-primary before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
            pathname === home ? "before:w-full text-primary" : "text-header"
          )}
        >
          Home
        </Link>
        <button
          onClick={() => {
            setopenAbout(!openAbout);
          }}
          className={cn(
            "flex capitalize relative text-lg font-medium text-header gap-2"
          )}
        >
          <span>About</span>
          <ArrowDown2
            className={cn(
              "self-center w-5 h-5 transform transition-transform duration-500",
              openAbout ? "rotate-180" : ""
            )}
          />
        </button>
        {openAbout && (
          <div
            className={cn(
              "about transition-opacity duration-300 ease-in-out flex flex-col space-y-3",
              openAbout ? "opacity-100" : "opacity-0"
            )}
          >
            <Link
              href=""
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              About ODS
            </Link>
            <Link
              href=""
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              Speakers
            </Link>
          </div>
        )}

        {NAV_LINKS.map((link) => (
          <Link
            href={link.link}
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
              setShowMobileMenu(false);
            }}
            className={cn(
              " focus-visible:rounded-md focus-visible:border-2 outline-none focus-visible:p-1 focus-visible:border-primary text-black  flex justify-center capitalize relative font-medium  before:bg-primary before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 text-lg",
              isActive === link.link
                ? "before:w-full text-primary"
                : "text-header"
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
        <div>
          <div className="flex flex-col px-6 w-full text-lg leading-5 whitespace-nowrap">
            <Link
              href="/"
              className="justify-center text-center px-20 py-4 w-[100%] mt-4 text-white bg-primary rounded-2xl border-2 border-solid border-[color:var(--Attend-stroke,rgba(95,95,95,0.75))]"
            >
              Attend
            </Link>
            <Link
              className="flex gap-2.5 justify-between px-20 w-[100%] py-4 mt-6 rounded-2xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--speaker-stroke-1,#00A651)] border-l-[color:var(--speaker-stroke-1,#00A651)] border-r-[color:var(--speaker-stroke-1,#00A651)] border-t-[color:var(--speaker-stroke-1,#00A651)] text-header"
              href={""}
            >
              <div className="grow">Speak at ODS&apos;24</div>
              <ArrowRight2 />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;

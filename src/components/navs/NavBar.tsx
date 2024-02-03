"use client";

import { NAV_LINKS } from "@/libs";
import { cn } from "@/utils/twcx";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import { ArrowRight2, ArrowDown2 } from "iconsax-react";
import DropdownLink from "../miscellaneous/dropdown";
import SkeletonNavbar from "../skelton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [openAbout, setopenAbout] = useState(false);
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const pathname = usePathname();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  const home = "/";

  return (
    <nav
      onMouseLeave={() => setopenAbout(false)}
      className={cn(
        " max-[500px]:py-2   px-4 sm:px-8 xl:px-10 2xl:px-20 flex w-full justify-between items-center  transition-colors duration-500 relative",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-white/90 dark:bg-gray-900/90 py-2 border-b border-gray-200 dark:border-primary-light shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-white/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px]",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={155}
          height={55}
          loading="eager"
        />
      </Link>

      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        <Link
          href="/"
          className={cn(
            " w-full   flex justify-center capitalize text-base relative font-medium before:bg-primary before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
            pathname === home ? "before:w-full text-primary" : "text-header"
          )}
        >
          Home
        </Link>
        <button
          type="button"
          aria-haspopup
          aria-label="Open About"
          aria-expanded={openAbout}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setopenAbout((prev) => !prev);
              return;
            }
          }}
          onClick={() => setopenAbout((prev) => !prev)}
          onMouseOver={() => setopenAbout((prev) => !prev)}
          tabIndex={0}
          className="flex items-center justify-center gap-x-2"
        >
          About
          <ArrowDown2
            className={cn(
              "text-main-sec transition-all transform-gpu duration-300",
              openAbout ? "rotate-180" : ""
            )}
          />
        </button>
        {openAbout && (
          <div
            className="top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/25 cursor-default"
            role="dialog"
            onClick={() => setopenAbout(!openAbout)}
          />
        )}
        <div
          role="dialog"
          className={cn(
            " absolute border p-4 border-soft-light  w-[125px] top-16 z-[999]  self-center right-[760px] bg-white backdrop-blur-xl flex flex-col gap-y-2   justify-between  shadow-[0_10px_40px_rgba(0,0,0,0.23)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl  before:overflow-hidden before:-top-2 before:rotate-[45deg] before:right-4 before:z-[-1] transform-gpu transition-all ",
            openAbout
              ? "opacity-100 h-[90px] duration-500 "
              : "opacity-0 h-0 duration-200 overflow-hidden pointer-events-none"
          )}
        >
          <DropdownLink text="About ODS" href="about" ariaLabel="about" />
          <DropdownLink text="Speakers" href="speakers" ariaLabel="speakers" />
        </div>

        {NAV_LINKS.map((link) => (
          <Link
            href={link.link}
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-primary before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
              isActive === link.link ? "before:w-full text-primary" : ""
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex ">
        <button
          type="button"
          className="flex gap-2.5 justify-center px-5 py-4 text-lg leading-5 text-white whitespace-nowrap bg-green-600 rounded-xl border border-solid border-[color:var(--Foundation-stroke-stroke-500,#E1E1E1)]"
        >
          <div className="grow"> Speak at ODS&apos;24</div>
          <ArrowRight2 />
        </button>
      </div>
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
        onClick={() => setShowMobileMenu(true)}
      >
        <FaBars className="text-header" />
      </div>
      <Suspense fallback={<SkeletonNavbar />}>
        <MobileNav />
      </Suspense>
    </nav>
  );
};

export default Navbar;

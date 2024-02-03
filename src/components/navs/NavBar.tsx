"use client";

import { NAV_LINKS } from "@/libs";
import { cn } from "@/utils/twcx";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
// import MobileNav from "./MobileNav";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
// import SkeletonNavbar from "../skeleton/SkeletonNavbar";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav
      className={cn(
        " max-[500px]:py-2   px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500",
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
        {NAV_LINKS.map((link) => (
          <Link
            href={link.link}
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full   flex justify-center capitalize text-base relative font-medium before:dark:bg-gray-200 before:bg-primary before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
              isActive === link.link
                ? "before:w-full text-primary"
                : "text-header"
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
        onClick={() => setShowMobileMenu(true)}
      >
        <FaBars className="text-header dark:text-gray-200" />
      </div>
      {/* <Suspense fallback={<SkeletonNavbar />}>
        <MobileNav />
      </Suspense> */}
    </nav>
  );
};

export default Navbar;

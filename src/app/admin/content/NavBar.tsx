"use client";

import React from "react";
import { cn } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import { Add, HambergerMenu } from "iconsax-react";
import ModMobileSidebar from "./mobilesodebar";
import Link from "next/link";

const NavBar = () => {
  const { ShowAdminSidebar, setShowAdminSidebar, currentPath } = useStateCtx();
  const pathName = currentPath
    .replace("admin/", "")
    .replace("-", " ")
    .replace("speakers/", " ");

  return (
    <header
      className={cn(
        "lg:px-9 px-3 border-b border-gray-200 h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 backdrop-blur-lg w-full",
        {
          "md:overflow-hidden": ShowAdminSidebar,
        }
      )}
    >
      <div
        className={cn("flex items-center gap-x-4", {
          "w-full ": ShowAdminSidebar,
        })}
      >
        <button
          tabIndex={0}
          aria-haspopup
          aria-expanded={ShowAdminSidebar}
          type="button"
          className={cn(
            "md:hidden rounded-full focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/80",
            {
              "rotate-45 absolute right-1 top-1 z-[9999] text-white":
                ShowAdminSidebar,
            }
          )}
          onClick={() => setShowAdminSidebar(!ShowAdminSidebar)}
        >
          {ShowAdminSidebar ? <Add size={60} /> : <HambergerMenu size={32} />}
        </button>
        <div className="flex gap-x-2 sm:gap-x-4 items-center">
          <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl capitalize font-medium text-header  ">
            {pathName}
          </h2>
        </div>
        {pathName === "speakers" && (
          <div className="flex gap-x-2 sm:gap-x-4 items-center">
            <Link
              href={`/${currentPath}/view`}
              className="justify-center px-5 py-3 text-base font-semibold leading-6 text-white whitespace-nowrap bg-[#33059F] rounded-lg border border-solid shadow-sm border-[color:var(--purple-secondary-900,#33059F)]"
            >
              View All Speakers
            </Link>
          </div>
        )}
      </div>
      <ModMobileSidebar />
    </header>
  );
};

export default NavBar;

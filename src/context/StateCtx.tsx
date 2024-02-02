"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

// Add Your Props here
interface StateContextProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    if (pathname === "/") return;
    let timeoutId: any;

    const showScrollbar = () => {
      document.documentElement.setAttribute("scrollbar", "");
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        hideScrollbar();
      }, 2000);
    };

    const hideScrollbar = () => {
      document.documentElement.removeAttribute("scrollbar");
    };

    window.addEventListener("scroll", showScrollbar);

    return () => {
      window.removeEventListener("scroll", showScrollbar);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  const value = useMemo(
    () => ({ showMobileMenu, setShowMobileMenu }),
    [showMobileMenu, setShowMobileMenu]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// Call this function whenever you want to use the context
export const useStateCtx = () => {
  const ctx = useContext(StateContext);

  if (!ctx) {
    throw new Error("useStateCtx must be used within a StateContextProvider");
  }
  return ctx;
};

export default StateContextProvider;

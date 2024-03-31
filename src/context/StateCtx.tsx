"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

interface StateContextProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  ShowAdminSidebar: boolean;
  setShowAdminSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  ShowProductModal: boolean;
  setShowProductModal: React.Dispatch<React.SetStateAction<boolean>>;
  ShowCartModal: boolean;
  setShowCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  ShowOptionModal: boolean;
  setShowOptionModal: React.Dispatch<React.SetStateAction<boolean>>;
  ShowSocialModal: boolean;
  setShowSocialModal: React.Dispatch<React.SetStateAction<boolean>>;
  SelectedProductId: string;
  setSelectedProductId: React.Dispatch<React.SetStateAction<string>>;
}

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [ShowAdminSidebar, setShowAdminSidebar] = React.useState(false);
  const [ShowProductModal, setShowProductModal] = React.useState(false);
  const [ShowSocialModal, setShowSocialModal] = React.useState(false);

  const [SelectedProductId, setSelectedProductId] = React.useState<string>("");

  const [ShowCartModal, setShowCartModal] = React.useState(false);
  const [ShowOptionModal, setShowOptionModal] = React.useState(false);

  const pathname = usePathname();

  // Modals State
  const anyModalOpen =
    ShowProductModal || ShowCartModal || ShowOptionModal || ShowSocialModal;
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator?.userAgent
    );
  };

  const mobileSidebarOpen = ShowAdminSidebar;

  useEffect(() => {
    if (!isMobileDevice()) return;
    const isSwiped = localStorage.getItem("swiped");
    if (isSwiped) {
      // setSwipeIndicator(false);
      return;
    }
    if (mobileSidebarOpen) {
      // setSwipeIndicator(true);
    } else {
      // setSwipeIndicator(false);
    }
  }, [mobileSidebarOpen]);

  useEffect(() => {
    const t = "%c  Made By \ud83d\udc9a  - Pheonix ",
      n = [
        "font-size: 12px",
        "color: #fffce1",
        "font-family: monospace",
        "background: #0e100f",
        "display: inline-block",
        "padding: 1rem 3rem",
        "border: 1px solid #0ff",
        "border-radius: 4px;",
      ].join(";");
    // console.log(t, n);
  }, []);

  useEffect(() => {
    if (showMobileMenu || anyModalOpen || ShowAdminSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false), setShowAdminSidebar(false);
        setShowProductModal(false), setShowCartModal(false);
        setShowOptionModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu, anyModalOpen, ShowAdminSidebar]);

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
    () => ({
      showMobileMenu,
      setShowMobileMenu,
      ShowProductModal,
      setShowProductModal,
      ShowCartModal,
      setShowCartModal,
      SelectedProductId,
      setSelectedProductId,
      ShowOptionModal,
      setShowOptionModal,
      ShowAdminSidebar,
      setShowAdminSidebar,
      ShowSocialModal,
      setShowSocialModal,
    }),
    [
      showMobileMenu,
      setShowMobileMenu,
      ShowProductModal,
      ShowCartModal,
      SelectedProductId,
      ShowOptionModal,
      ShowAdminSidebar,
      ShowSocialModal,
    ]
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

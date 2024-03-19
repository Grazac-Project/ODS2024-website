import React from "react";
import NavBar from "@/components/Navs/NavBar";
import StateContextProvider from "@/context/StateCtx";
import SkeletonNavbar from "@/components/skelton/Nav";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <NavBar />
      </Suspense>
      {children}
      <GoToTop />
      <Footer />
    </>
  );
}

import React from "react";
import NavBar from "@/components/Navs/NavBar";
import SkeletonNavbar from "@/components/skelton/Nav";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import LenisProvider from "@/components/LenisProvider";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <Suspense fallback={<SkeletonNavbar />}>
        <NavBar />
      </Suspense>
      {children}
      <GoToTop />
      <Footer />
    </LenisProvider>
  );
}

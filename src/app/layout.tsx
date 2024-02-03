import type { Metadata } from "next";
import { nunito, montserrat } from "@/fonts";
import StateContextProvider from "@/context/StateCtx";
import { Suspense } from "react";
import Footer from "@/components/footer";
import GotoTop from "@/components/GoToTop";
import Navbar from "@/components/navs/NavBar";
import "../styles/globals.scss";
import SkeletonNavbar from "@/components/skelton";

export const metadata: Metadata = {
  title: "OGUN DIGITAL SUMMIT",
  description: "Pathway to our nation's prosperity",
  // image: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${nunito.className}`}>
        <StateContextProvider>
          <Suspense fallback={<SkeletonNavbar />}>
            <Navbar />
          </Suspense>
          {children}
          <GotoTop />
          <Footer />
        </StateContextProvider>
      </body>
    </html>
  );
}

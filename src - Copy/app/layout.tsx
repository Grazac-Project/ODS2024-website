import "../styles/globals.scss";
import type { Metadata } from "next";
import GoToTop from "@/components/GoToTop";
import { nunito, montserrat } from "@/fonts";
import NavBar from "@/components/Navs/NavBar";
import Footer from "@/components/Footer";
import StateContextProvider from "@/context/StateCtx";

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
          <NavBar />
          {children}
          <GoToTop />
          <Footer />
        </StateContextProvider>
      </body>
    </html>
  );
}

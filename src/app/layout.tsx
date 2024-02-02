import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StateContextProvider from "@/context/StateCtx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGUN DIGITAL SUMMIT",
  description: "Pathway to our nation's prosperity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContextProvider>{children}</StateContextProvider>
      </body>
    </html>
  );
}

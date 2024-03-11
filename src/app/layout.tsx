import "../styles/globals.scss";
import type { Metadata } from "next";
import { nunito, montserrat } from "@/fonts";

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
        {children}
      </body>
    </html>
  );
}

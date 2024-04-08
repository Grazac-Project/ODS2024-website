import "../styles/globals.scss";
import type { Metadata } from "next";
import { nunito, montserrat } from "@/fonts";
import StateContextProvider from "@/context/StateCtx";
import AuthProvider from "./providers";

const currentYear = new Date().getFullYear().toString().slice(-2);
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL as string),
  title: {
    default: "OGUN DIGITAL SUMMIT",
    template: `%s - ODS${currentYear}`,
  },
  description: "Pathway to our nation's prosperity",
  openGraph: {
    title: "Wiscaksono",
    description: "Pathway to our nation's prosperity",
    url: process.env.NEXT_PUBLIC_BASEURL,
    siteName: "ODS",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "OGUN DIGITAL SUMMIT",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${montserrat.className} ${nunito.className}`}>
          <StateContextProvider>{children}</StateContextProvider>
        </body>
      </AuthProvider>
    </html>
  );
}

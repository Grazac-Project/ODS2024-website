import "../styles/globals.scss";
import type { Metadata } from "next";
import { nunito, montserrat } from "@/fonts";
import StateContextProvider from "@/context/StateCtx";
import AuthProvider from "./providers";

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
      <AuthProvider>
        <body className={`${montserrat.className} ${nunito.className}`}>
          <StateContextProvider>{children}</StateContextProvider>
        </body>
      </AuthProvider>
    </html>
  );
}

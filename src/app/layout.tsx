import "../styles/globals.scss";
import type { Metadata } from "next";
import { nunito, montserrat } from "@/fonts";
import StateContextProvider from "@/context/StateCtx";
import AuthProvider from "./providers";

const currentYear = new Date().getFullYear().toString().slice(-2);
console.log(currentYear);
export const metadata: Metadata = {
  title: {
    default: "OGUN DIGITAL SUMMIT",
    template: `%s - ODS${currentYear}`,
  },
  description: "Pathway to our nation's prosperity",
  twitter: {
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

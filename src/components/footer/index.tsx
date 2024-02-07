"use client";

import { Montserrat, Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect } from "react";
import Subscribe from "./Subscribe";
import MobileFooter from "./Mobile";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

function Footer() {
  return (
    <>
      <div className="hidden xl:flex flex-col">
        <div className="bg-primary1-900 mt-24 py-8">
          <div className="container flex justify-between">
            <div>
              <div>
                <Image
                  src={"/images/logo_white.svg"}
                  alt="logo"
                  width={156}
                  height={48}
                />
              </div>
              <p className={`${nunito.className} text-white w-[55%] mt-6`}>
                We are at the forefront of innovation, shaping the future and
                hosting the largest digital summit in Ogun State with over 2,000
                participants annually.
              </p>
              <div className={`${montserrat.className} mt-8`}>
                <h3 className="text-xl font-semibold text-white">
                  Follow us on
                </h3>
                <div className="mt-5 flex items-center gap-4">
                  <Image
                    src={"/images/facebook.svg"}
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={"/images/twitter.svg"}
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                  <Image
                    src={"/images/instagram.svg"}
                    alt="instagram"
                    width={26}
                    height={26}
                  />
                  <Image
                    src={"/images/linkedin.svg"}
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-24 shrink-0">
              <div className={`${nunito.className}`}>
                <h3
                  className={`${montserrat.className} text-2xl font-semibold text-white`}
                >
                  Links
                </h3>
                <nav className="mt-5 flex flex-col gap-4">
                  <Link href="/about" className="text-white">
                    About ODS
                  </Link>
                  <Link href="/about" className="text-white">
                    Speakers
                  </Link>
                  <Link href="/about" className="text-white">
                    Gallery
                  </Link>
                  <Link href="/about" className="text-white">
                    Highlights
                  </Link>
                </nav>
              </div>
              <div className={`${nunito.className}`}>
                <h3
                  className={`${montserrat.className} text-2xl font-semibold text-white`}
                >
                  Contact Us
                </h3>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-white">
                    <Image
                      src={"/images/location.svg"}
                      alt="location"
                      width={24}
                      height={24}
                    />
                    <p className="text-white">
                      The Eagle (Top Floor), Providence <br /> Event Center, MKO
                      Abiola <br />
                      Way, Leme, Abeokuta, Ogun State
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Image
                      src={"/images/email.svg"}
                      alt="email"
                      width={24}
                      height={24}
                    />
                    <p className="text-white-500">
                      hello@ogundigitalsummit.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Subscribe />
          </div>
        </div>
        <div
          className={`w-full h-[52px] bg-black ${nunito.className} text-base font-normal text-white text-center flex items-center justify-center`}
        >
          Copyright &copy; {new Date().getFullYear()} Ogun Digital Summit. All
          Rights Reserved
        </div>
      </div>
      <Suspense>
        <MobileFooter />
      </Suspense>
    </>
  );
}

export default Footer;

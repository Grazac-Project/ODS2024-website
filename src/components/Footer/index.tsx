"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Location } from "iconsax-react";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <>
      <footer className="hidden xl:flex flex-col">
        <div className="bg-primarytwo mt-24 py-24">
          <div className="container flex justify-between">
            <div>
              <Image src="/footerLogo.svg" alt="logo" width={156} height={48} />
              <p className="text-white font-nunito w-[55%] mt-6">
                We are at the forefront of innovation, shaping the future and
                hosting the largest digital summit in Ogun State with over 2,000
                participants annually.
              </p>
              <div className="mt-8 font-montserrat">
                <h3 className="text-xl font-semibold text-white">
                  Follow us on
                </h3>
                <div className="mt-5 flex items-center gap-4">
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/twitter.svg"
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={26}
                    height={26}
                  />
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-24 shrink-0">
              <div className=" font-nunito">
                <h3 className="text-2xl font-semibold text-white font-montserrat">
                  Links
                </h3>
                <div className="mt-5 flex flex-col gap-4">
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
                </div>
              </div>
              <div className="font-nunito">
                <h3 className="text-2xl font-semibold text-white font-montserrat">
                  Contact us
                </h3>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="flex justify-center gap-3 text-white">
                    <Location size={24} />
                    <p className="text-white">
                      The Eagle (Top Floor), Providence <br /> Event Center, MKO
                      Abiola <br />
                      Way, Leme, Abeokuta, Ogun State
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Image
                      src="/email.svg"
                      alt="email"
                      width={24}
                      height={24}
                    />
                    <a
                      href="mailto:hello@ogundigitalsummit.com"
                      className="text-white-500"
                    >
                      hello@ogundigitalsummit.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Subscribe />
          </div>
        </div>
        <div className=" text-base font-normal text-white text-center flex items-center justify-center bg-black h-[52px] w-full">
          Copyright &copy; {new Date().getFullYear()} Ogun Digital Summit. All
          Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;

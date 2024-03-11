"use client";
import Image from "next/image";
import Subscribe from "./Subscribe";
import Link from "next/link";
import { Location } from "iconsax-react";

const Mobile = () => {
  return (
    <footer className="block lg:hidden">
      <div className="bg-primarytwo mt-24 py-8 w-full">
        <div className="container flex flex-col gap-14">
          <div>
            <Image src="/footerLogo.svg" alt="logo" width={156} height={48} />
            <p className="text-white font-nunito w-[85%] mt-6">
              We are at the forefront of innovation, shaping the future and
              hosting the largest digital summit in Ogun State with over 2,000
              participants annually.
            </p>
            <div className="mt-8 font-montserrat">
              <h3 className="text-xl font-semibold text-white">Follow us on</h3>
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
          <div className="-mt-14">
            <Subscribe />
          </div>
          <div className="flex flex-col gap-14 shrink-0">
            <div className="font-nunito">
              <h3 className=" text-2xl font-semibold text-white font-montserrat">
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
              <h3 className=" text-2xl font-semibold text-white font-montserrat">
                Contact Us
              </h3>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex  gap-3 text-white">
                  <Location size={24} />
                  <p className="text-white w-[90%] leading-7">
                    The Eagle (Top Floor), Providence <br /> Event Center, MKO
                    Abiola <br />
                    Way, Leme, Abeokuta, Ogun State
                  </p>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Image src="/email.svg" alt="email" width={24} height={24} />
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
      </div>
      <div className="text-base font-normal text-white text-center flex items-center justify-center w-full px-10 bg-black font-nunito">
        {" "}
        Copyright &copy; {new Date().getFullYear()} Ogun Digital Summit. All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Mobile;

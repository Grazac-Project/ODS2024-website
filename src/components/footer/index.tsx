import React from "react";
import Image from "next/image";
import Subscribe from "./Subscribe";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./icons";
import Link from "next/link";
import { Location } from "iconsax-react";

const socials = [
  {
    href: "",
    icon: FacebookIcon,
  },
  {
    href: "",
    icon: TwitterIcon,
  },
  {
    href: "",
    icon: InstagramIcon,
  },
  {
    href: "",
    icon: LinkedinIcon,
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-full  pt-5 lg:pt-10 border-t border-gray-300 bg-footer text-white">
      <div className="w-full h-full max-container flex flex-col justify-between px-4 lg:px-8 min-[1490px]:px-0 pb-8">
        <div className="flex flex-col gap-y-5 ">
          <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
            <div className="flex  max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start ">
              <div className="w-full max-w-[380px] flex flex-col justify-between gap-[50px]">
                <Image
                  src="/footer.svg"
                  alt="logo"
                  width={155}
                  height={55}
                  className="max-sm:w-[120px]"
                />
                <p className="font-nunito">
                  We are at the forefront of innovation, shaping the future and
                  hosting the largest digital summit in Ogun State with over
                  2,000 participants annually.
                </p>
                <div className="text-[28px] font-montserrat flex flex-col gap-2 font-semibold">
                  <span>Follow us on</span>
                  <div className="flex gap-4 lg:gap-6">
                    {socials.map((social) => {
                      return (
                        <Link
                          key={social.href}
                          href={social.href}
                          className="w-15 h-15 flex items-center justify-center rounded-full text-white"
                        >
                          <social.icon />
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <Subscribe />
              </div>
              <div className="w-[450px] flex justify-between gap-[30px]">
                <div>
                  <h3 className="font-semibold text-[28px] font-montserrat">
                    Links
                  </h3>
                  <ul className="w-full flex flex-col gap-6 font-nunito text-[18px]">
                    <li>
                      <Link className="text-white" href="/">
                        About ODS
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-white">
                        Speakers
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-white">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/">Highlights</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[28px] font-montserrat">
                    Contact Us
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="md:max-w-[301px] flex  font-nunito text-[18px] items-center space-x-2">
                      <Location size={150} />
                      <p>
                        The Eagle (Top Floor), Providence Event Center, MKO
                        Abiola Way, Leme, Abeokuta, Ogun State
                      </p>
                    </div>
                    <div className="max-w-[301px] flex font-nunito text-[18px] items-center space-x-2">
                      <Location size={150} />
                      <p>
                        The Eagle (Top Floor), Providence Event Center, MKO
                        Abiola Way, Leme, Abeokuta, Ogun State
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[50px] w-full justify-center items-center bg-black/90  text-white py-3 bottom-0">
        <p>
          Copyright &copy; {new Date().getFullYear()} Ogun Digital Summit. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

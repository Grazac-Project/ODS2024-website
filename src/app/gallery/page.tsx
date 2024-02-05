import { Montserrat, Nunito } from "next/font/google";
import Image from "next/image";
import React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

function Why() {
  return (
    <div className={`container mt-24 ${montserrat.className}`}>
      <h2 className="text-black-100 font-semibold text-[40px]">
        Why attend ODS?
      </h2>
      <div className="mt-10 flex justify-between">
        <div className="w-[251px] h-[180px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy1.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium ${nunito.className} text-[#282828] mt-4`}
            >
              Access to industry experts
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[190px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy2.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium ${nunito.className} text-[#282828] mt-4`}
            >
              Networking Opportunities
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[190px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy3.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium ${nunito.className} text-[#282828] mt-4`}
            >
              Cut edge Ai exploration
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[190px] shadow-lg relative rounded-[10px]">
          <div className="absolute">
            <Image
              src={"/images/box.svg"}
              alt="box"
              width={251}
              height={190}
              className="w-full h-full"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center h-[190px]">
            <div className="w-[42px] h-[42px] rounded-[10px] bg-gray-100 flex items-center justify-center">
              <Image
                src={"/images/aboutWhy4.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p
              className={`text-center px-5 text-2xl font-medium ${nunito.className} text-[#282828] mt-4`}
            >
              Have fun and unwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;

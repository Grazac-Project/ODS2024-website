"use client";

import React, { useState } from "react";
import Image from "next/image";
import useWindowHeight from "@/hooks/useDimension";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Subscribed with email: ${email}`);

    setEmail("");
  };
  const scrollY = useWindowHeight();
  const handleTop = () => {
    if (!window) return;
    window && window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container flex justify-between items-center mt-14">
      <div className={`ont-nunito`}>
        <p className="text-white">
          Subscribe to get latest updates on our Summits
        </p>
        <div className="mt-4">
          <input
            type="email"
            className="w-[362px] h-[55px] rounded-l-lg bg-gray-100 outline-none text-[#282828] px-4 text-base"
            placeholder="Enter Email Address"
          />
          <button className="w-[160px] h-[55px] rounded-r-lg bg-primary text-base text-white">
            Subscribe
          </button>
        </div>
      </div>
      <button
        onClick={handleTop}
        className="flex items-center gap-4 cursor-pointer"
      >
        <p className={` font-nunito text-white`}>Back to Top</p>
        <Image src={"/images/top.svg"} alt="" width={32} height={32} />
      </button>
    </div>
  );
};

export default Subscribe;

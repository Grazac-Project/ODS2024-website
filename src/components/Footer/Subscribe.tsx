"use client";

import React, { useState } from "react";
import { ArrowCircleUp2 } from "iconsax-react";
import { useToast } from "../ui/use-toast";

interface body {
  email: string;
}

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [Status, setStatus] = useState("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!email) {
        setStatus("error");
      }
      setStatus("loading");
      const res = await fetch("/api/subscribe", {
        method: "POST",

        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          credentials: "include",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setEmail("");
        toast({
          title: "successfull",
          description: `Thanks ${email}`,
        });
        setStatus("sucess");
      }
      if (data.status === 400) {
        setStatus("error");
        toast({
          title: "Error",
          description: `${email} already exists`,
        });
      }
    } catch (e: any) {
      setStatus("error");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-between items-center mt-14">
      <div className="font-nunito">
        <p className="text-white text-sm lg:text-base">
          Subscribe to get latest updates on our Summits
        </p>
        <form className="mt-4 flex w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-[80%] lg:w-[362px] h-[55px] rounded-l-lg bg-gray-100 outline-none text-[#282828] px-4 text-base"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={Status === "loading"}
            className="w-[160px] h-[55px] rounded-r-lg bg-[#00763A] text-base text-white"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
      <button
        onClick={scrollToTop}
        className="hidden xl:flex items-center gap-4"
      >
        <p className="text-white font-nunito">Back to Top</p>
        <ArrowCircleUp2 size="32" color="#00A651" />
      </button>
    </div>
  );
};

export default Subscribe;

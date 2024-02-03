"use client";

import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Subscribed with email: ${email}`);

    setEmail("");
  };
  return (
    <div className="min-w-[552px]  text-white font-nunito gap-6 flex flex-col">
      <span>Subscribe to get latest updates on our Summits</span>
      <div className="flex items-center w-full">
        <input
          type="email"
          id="subscribe"
          name="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          className="border border-gray-300 p-2 rounded-l-md focus:outline-none outline-none h-[55px] text-black font-medium"
        />
        <button
          onClick={handleSubscribe}
          className="bg-primary text-white p-2 rounded-r-md h-[55px] hover:bg-primary focus:outline-none"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;

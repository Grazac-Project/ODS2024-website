"use client";

import React from "react";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";


interface Social {
  speakerId: string;
}

const SocialsModal = ({ speakerId }: Social) => {
  return <div>SocialsModal</div>;
};

export default SocialsModal;

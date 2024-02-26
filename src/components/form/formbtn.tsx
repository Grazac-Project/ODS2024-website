"use client";

import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Product } from "@prisma/client";

const Formbtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="justify-center items-center px-16 py-3.5 mt-3 text-lg leading-5 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
      type="submit"
    >
      {pending ? "Adding..." : "Add Product"}
    </Button>
  );
};

export default Formbtn;

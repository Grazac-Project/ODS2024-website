"use client";

import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const Formbtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full " type="submit">
      {pending ? "Adding..." : "Add Product"}
    </Button>
  );
};

export default Formbtn;

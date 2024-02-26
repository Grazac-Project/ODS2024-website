"use client";

import React from "react";
import { cn } from "@/utils/twcx";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import Formbtn from "./formbtn";
import { Label } from "../ui/label";
import useInView from "@/hooks/useInView";
import { prisma } from "@/utils/db/prisma";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import { Addproduct } from "@/actions/addProduct";

const productInput = {
  name: "",
  description: "",
  image: "",
  price: 0,
  discount: 0,
  rating: 0,
};
const AddProductForm = () => {
  const [formData, setFormData] = useState(productInput);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  return (
    <>
      <form
        action=""
        className="flex flex-col mt-4 z-10 gap-y-2 min-[850px]:gap-y-6 "
      >
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Name" className="font-medium">
            ProductName
          </Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Description" className="font-medium">
            Product Description
          </Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Image" className="font-medium">
            Product Image
          </Label>
          <Input
            type="text"
            name="image"
            value={formData.image}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Price" className="font-medium">
            Product Price
          </Label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Discount" className="font-medium">
            Product Discount
          </Label>
          <Input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Rating" className="font-medium">
            Product Rating
          </Label>
          <Input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <Formbtn />
      </form>
    </>
  );
};

export default AddProductForm;

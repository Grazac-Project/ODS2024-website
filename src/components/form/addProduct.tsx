"use client";

import React, { useRef } from "react";
import { cn } from "@/utils";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { useTransition } from "react";
import { X, CheckCircle } from "lucide-react";
import { BsExclamationTriangle } from "react-icons/bs";
import { Button } from "../ui/button";
import { baseUrl } from "@/actions/baseurl";

interface UploadedAssetData {
  public_id: string;
  width: number;
  height: number;
  id: string;
  info: Record<string, unknown>;
  original_filename: string;
  url: string;
  [key: string]: unknown;
}

export type UploadResult = {
  info: {
    public_id: string;
    original_filename: string;
  };
  event: "success";
};

interface Product {
  name: string;
  description: string;
  discount: number;
  image: string;
  price: number;
  // sizes: string[];
}

const AddProduct = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [result, setResult] = useState<UploadedAssetData | null>(null);
  const [isLoading, startTransition] = useTransition();

  const [formData, setformData] = useState<Product>({
    name: "",
    description: "",
    image: "",
    price: 0,
    discount: 0,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    startTransition(async () => {
      const res = await fetch(`${baseUrl}/api/addproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200 || res.ok) {
        setSuccess("sucess");
        setformData({
          name: "",
          description: "",
          image: "",
          price: 0,
          discount: 0,
          // sizes: [],
        });
      }
    });
  };

  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
    >
      <div
        ref={scrollRef}
        className="flex flex-col w-[300px] gap-5 max-md:w-full max-md:justify-center "
      >
        {formData.image ? (
          <div className="flex flex-col gap-y-2 h-full w-full relative overflow-hidden rounded-lg">
            <Image
              width={300}
              height={300}
              src={result?.url!}
              alt="Client"
              className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
            />
            {/* @ts-ignore */}
            <span className="absolute bottom-1 left-0 bg-gradient-to-r from-white via-white/50 to-white/5 px-2 w-full text-left font-medium">
              {/* @ts-ignore */}
              {result?.original_filename!}
            </span>
            <button
              type="button"
              tabIndex={0}
              aria-label="Remove image"
              onClick={() => setformData({ ...formData, image: "" })}
              className="text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full bg-white/60 backdrop-blur-sm absolute top-1 right-1 w-8 h-8 flex items-center justify-center hover:text-red-500 hover:bg-white/80 hover:brightness-150 transition-all duration-700 hover:duration-200"
              title="Remove image"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <div
            className={cn(
              "flex w-full h-full min-h-[300px] items-center justify-center bg-[#f6f6f6] px-8",
              {
                hidden: formData.image,
              }
            )}
          >
            <CldUploadButton
              onSuccess={(result) => {
                setResult(result?.info as UploadedAssetData);
                setformData({
                  ...formData,
                  // @ts-ignore
                  image: result?.info?.url,
                });
              }}
              uploadPreset="phoenix"
            />
          </div>
        )}

        {success && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert>
            <BsExclamationTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0">
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Name" className="font-medium">
            ProductName
          </Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
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
              setformData({
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
            disabled
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        {/* <div className="flex flex-col gap-y-2 w-full">
            <Label htmlFor="Product Sizes" className="font-medium">
              Product Sizes (this feild is optional)
            </Label>
            <Input
              type="text"
              name="sizes"
              value={formData.sizes.join(", ")}
              placeholder="use commas to seprate the sizes perfably use sizes 'S', 'M', 'L' "
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
              onChange={(e) =>
                setformData({
                  ...formData,
                  sizes: e.target.value.split(",").map((size) => size.trim()),
                })
              }
            />
          </div> */}
        <div className="flex flex-col  gap-y-2 w-full">
          <Label htmlFor="Product Price" className="font-medium">
            Product Price
          </Label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
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
            className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
            onChange={(e) =>
              setformData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <Button
          className="justify-center items-center px-16 py-3.5 mt-3 text-lg leading-5 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
          type="submit"
        >
          {isLoading ? "Adding..." : "Add Product"}
        </Button>
      </div>
    </form>
  );
};

export default AddProduct;

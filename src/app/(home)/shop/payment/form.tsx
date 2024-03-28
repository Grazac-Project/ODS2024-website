"use client";

import React, { useEffect, useState } from "react";
// import { createuser } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { encryptString, decryptString } from "@/utils";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { Buyer } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { baseUrl } from "@/actions/baseurl";
import { ShoppingCartProps } from "@/actions/cart";
import { useFetch } from "@/hooks/useFetch";

interface user {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  price: string;
}

const PaymentForm = () => {
  const searchParams = useSearchParams();
  const cartID = searchParams.get("cartid");
  const cartId = searchParams.get("cartId");

  const decryptedId = cartID
    ? decryptString(cartID)
    : cartId
    ? decryptString(cartId)
    : "";

  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);

  const url = `/api/shop/cart/${decryptedId}`;
  const { data, isLoading: loading } = useFetch(url);

  useEffect(() => {
    if (data) {
      setCart(data || []);
    }
  }, [data]);

  // console.log(cart?.subtotal);

  const [formData, setformData] = useState<user>({
    name: "",
    email: "",
    phoneNumber: 0,
    address: "",
    price: cart?.subtotal ? cart.subtotal.toString() : "",
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [status, setStatus] = useState("idle");
  const isLoading = status === "loading" || loading;

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("loading");
      const res = await fetch(`${baseUrl}/api/shop/cart/buyer/${decryptedId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200 || res.ok) {
        setSuccess("sucess");
        setStatus("sucess");
        setformData({
          name: "",
          email: "",
          phoneNumber: 0,
          price: "",
          address: "",
        });
        // console.log(res);
        const json = await res.json();
        // console.log(json);
        const data: Buyer = json.buyer;
        // console.log(data);
        setTimeout(() => {
          router.push(
            `/shop/makepayment?paymentstatus='false'&cartId=${encryptString(
              data.cartId
            )}&buyerId=${encryptString(data.id)}`
          );
        }, 100);
      }

      if (res.status === 500) {
        setError("something when wrong");
        setStatus("error");
      }
    } catch (e: any) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="flex w-full">
        <form
          action=""
          onSubmit={onSubmit}
          className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
        >
          <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0">
            <div className="flex flex-col  gap-y-2 w-full">
              <Label htmlFor="Product Name" className="font-medium">
                Name:
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                disabled={isLoading}
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
              <Label htmlFor="Product Name" className="font-medium">
                Email:
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                disabled={isLoading}
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
              <Label htmlFor="Product Name" className="font-medium">
                Phone Number
              </Label>
              <Input
                type="number"
                disabled={isLoading}
                name="phoneNumber"
                value={formData.phoneNumber}
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
              <Label htmlFor="Product Name" className="font-medium">
                address:
              </Label>

              <Textarea
                name="address"
                value={formData.address}
                disabled={isLoading}
                placeholder="Enter delivery address"
                onChange={(e) =>
                  setformData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="resize-none h-[90px]"
              />
            </div>
            <Button
              className="justify-center items-center px-16 py-5 mt-3 text-lg leading-5 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
              type="submit"
            >
              {isLoading ? "Please Wait" : "Continue"}
            </Button>
          </div>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default PaymentForm;

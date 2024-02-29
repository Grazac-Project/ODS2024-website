"use client";

import React, { useEffect, useState } from "react";
import { createuser } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Flutterconfig } from "@/actions/payment";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/twcx";
import { Textarea } from "@/components/ui/textarea";

const PaymentForm = ({
  cartId,
  price,
}: {
  cartId?: string;
  price?: string;
}) => {
  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: 0,
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phoneNumber, address } = formData;

    const result = await createuser(name, email, phoneNumber, address, cartId!);

    if (result && result.success) {
      console.log("User created successfully:", result.newUser);
    } else {
      console.error("Failed to create user");
    }
  };

  return (
    <>
      <div className="flex md:flex-col">
        <form
          action=""
          onSubmit={handleSubmit}
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
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
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
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col  gap-y-2 w-full">
              <Label htmlFor="Product Name" className="font-medium">
                Phone Number
              </Label>
              <Input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col  gap-y-2 w-full">
              <Label htmlFor="Product Name" className="font-medium">
                Address:
              </Label>

              <Textarea
                name="address"
                value={formData.address}
                placeholder="Enter delivery address"
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="resize-none h-[90px]"
              />
            </div>
            <Button
              className="justify-center items-center px-16 py-5 mt-3 text-lg leading-5 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]"
              type="submit"
            >
              {/* {isLoading ? "" : "Continue"} */}
              Continue
            </Button>
          </div>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default PaymentForm;

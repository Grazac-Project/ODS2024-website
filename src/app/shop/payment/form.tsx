"use client";

import React, { useEffect, useState } from "react";
import { createuser } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Flutterconfig } from "@/actions/payment";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import { Label } from "@/components/ui/label";
import { useTransition } from "react";
import { cn } from "@/utils/twcx";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

interface user {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
}

interface paymentderails {
  amount: number;
  phone_number: number;
  email: string;
  name: string;
}

const PaymentForm = ({
  cartId,
  price,
}: {
  cartId?: string;
  price?: number;
}) => {
  const [formData, setformData] = useState<user>({
    name: "",
    email: "",
    phoneNumber: 0,
    address: "",
  });

  const [fluterdetails, setfluterdetails] = useState<paymentderails>({
    amount: 0,
    phone_number: 0,
    email: "",
    name: "",
  });

  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const { amount, phone_number, email, name } = fluterdetails;

  const config = Flutterconfig(amount, phone_number, email, name);

  const handleFlutterPayment = useFlutterwave(config);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      const form1Data = new FormData();
      form1Data.append("name", formData.name);
      form1Data.append("email", formData.email);
      form1Data.append("address", formData.address);
      form1Data.append("phoneNumber", formData.phoneNumber.toString());

      console.log(form1Data);
      createuser(form1Data, cartId!).then((data) => {
        if (data?.success) {
          console.log(data?.success);
          setformData({
            name: "",
            email: "",
            phoneNumber: 0,
            address: "",
          });
          setfluterdetails({
            amount: price!,
            phone_number: data.User.phoneNumber,
            email: data.User.email,
            name: data.User.name,
          });
          handleFlutterPayment({
            callback: (response) => {
              console.log(response.status);
              closePaymentModal();
              if (response.status === "completed") {
                router.push("/shop/success?paymentstatus=true");
              }
            },
            onClose: () => {},
          });
        } else {
          console.log("error");
        }
      });
    });
  };

  return (
    <>
      <div className="flex md:flex-col">
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

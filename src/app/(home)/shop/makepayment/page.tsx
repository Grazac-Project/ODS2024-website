"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { decryptString } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import { useRouter } from "next/navigation";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import Image from "next/image";
import { ShoppingCartProps } from "@/actions/cart";
import { useFetch } from "@/hooks/useFetch";
import { Buyer } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

const Makepayment = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("buyerId");
  const cartId = searchParams.get("cartId");

  const PaymentRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PaymentRef);

  const decryptedId = decryptString(cartId!);
  const decryptedbuerId = decryptString(userId!);

  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);

  const url = `/api/shop/cart/${decryptedId}`;
  const { data, isLoading } = useFetch(url);

  const buyerUrl = `/api/shop/cart/buyer/${decryptedbuerId}`;

  const [buyer, setBuyer] = useState<Buyer | undefined>(undefined);

  const { data: data2, isLoading: loading } = useFetch(buyerUrl);

  useEffect(() => {
    if (data) {
      setCart(data || []);
    }
    if (data2) {
      setBuyer(data2.buyer || "");
    }
  }, [data]);

  const isDisabled = isLoading || loading || !data || !data2;

  const config = {
    public_key:
      (process.env.NEXT_PUBLIC_FLUTER_PUBLIC_KEY as string) ||
      "FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X",
    tx_ref: buyer?.id!,
    amount: cart?.subtotal!,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: buyer?.email!,
      phone_number: buyer?.phoneNumber!,
      name: buyer?.name!,
    },
    customizations: {
      title: "ODS SHOP",
      description: "Payment for Order",
      logo: "http://res.cloudinary.com/ddjt9wfuv/image/upload/v1709210521/product/bdalfy8btveazx5kiyq6.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const router = useRouter();
  const { setShowOptionModal } = useStateCtx();

  const image = `https://ui-avatars.com/api/?name=${buyer?.name!}&background=random`;

  return (
    <section
      ref={PaymentRef}
      className={cn(
        "min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7  w-full h-full flex items-center justify-center",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div>
        <div className="w-full max-w-[799px] h-full flex flex-col md:flex-row items-start gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-10 ">
          <div className="flex w-full h-full md:max-w-[300px] max-md:justify-center">
            <div className="w-full h-full max-h-[300px] max-w-[300px] relative ">
              {isDisabled ? (
                <div
                  className={cn(
                    "w-full h-full  rounded-xl bg-gradient-to-r from-transparent via-black/10  to-transparent absolute  before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer  before:bg-gradient-to-r  before:from-transparent before:via-black/20 dark:before:via-white/20 before:to-transparent isolate overflow-hidden shadow-lg shadow-black/20 before:border-t-2 before:border-b-2 before:border-primary max-w-[305px] max-h-[215px] dark:before:border-color-dark"
                  )}
                />
              ) : (
                <Image
                  src={image}
                  alt={buyer?.name!}
                  width={300}
                  height={300}
                  className={cn("rounded-xl")}
                />
              )}
            </div>
          </div>

          {isDisabled ? (
            <>
              <div className="w-full space-y-2">
                <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-y-3 max-md:w-full max-md:py-6 max-md:mt-12 max-md:border-t border-[#e1e1e1]">
              <h3 className="text-lg font-semibold text-headertracking-wide">
                {buyer?.name}
              </h3>
              <p className="font-medium">
                Email: <span className="font-medium">{buyer?.email}</span>
              </p>
              <p className="font-medium">
                Phone: <span className="font-medium">{buyer?.phoneNumber}</span>
              </p>
              <p className="font-medium">
                Address: <span className="font-medium">{buyer?.address}</span>
              </p>
              <p className="font-medium">
                CartId: <span className="font-medium">{decryptedId}</span>
              </p>
              <h3 className="text-lg font-semibold text-headertracking-wide">
                Amount To Pay:{" "}
                <span className="font-medium"> ₦ {cart?.subtotal}</span>
              </h3>
            </div>
          )}
        </div>
        <button
          disabled={isDisabled}
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response.status);
                closePaymentModal();
                if (response.status === "successful") {
                  router.push(
                    `/shop/success?paymentstatus=true&userId=${userId}`
                  );
                }
              },
              onClose: () => {
                setShowOptionModal(true);
              },
            });
          }}
          className="bg-green-600 w-full mt-5 rounded-md text-white py-4 font-nunito disabled:bg-white disabled:border-primary"
        >
          continue payment
        </button>
      </div>
    </section>
  );
};

export default Makepayment;

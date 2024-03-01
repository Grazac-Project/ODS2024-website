"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { decryptString } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/twcx";
import useInView from "@/hooks/useInView";
import Image from "next/image";

const Makepayment = () => {
  const searchParams = useSearchParams();
  const payment = searchParams.get("paymentstatus");
  const id = searchParams.get("id");
  const price = searchParams.get("price");
  const addresss = searchParams.get("address");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const PaymentRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PaymentRef);

  const originalname = decryptString(name!);
  const originalemail = decryptString(email!);
  const originalphone = phone!;
  const originaladdress = decryptString(addresss!);

  const config = {
    public_key:
      (process.env.Fluter_Public_Key as string) ||
      "FLWPUBK_TEST-b6c44d3213f2d2b3c0c3142f3ab81b72-X",
    tx_ref: Date.now().toString(),
    amount: parseFloat(price!),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: originalemail,
      phone_number: originalphone,
      name: originalname,
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

  const image = `https://ui-avatars.com/api/?name=${originalname}&background=random`;

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
              <Image
                src={image}
                alt={originalname}
                width={300}
                height={300}
                className={cn("rounded-xl")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 max-md:w-full max-md:py-6 max-md:mt-12 max-md:border-t border-[#e1e1e1]">
            <h3 className="text-lg font-semibold text-headertracking-wide">
              {originalname}
            </h3>
            <p className="font-medium">
              Email: <span className="font-medium">{originalemail}</span>
            </p>
            <p className="font-medium">
              Phone: <span className="font-medium">{originalphone}</span>
            </p>
            <p className="font-medium">
              Address: <span className="font-medium">{originaladdress}</span>
            </p>
            <p className="font-medium">
              CartId: <span className="font-medium">{id}</span>
            </p>
            <h3 className="text-lg font-semibold text-headertracking-wide">
              Amount To Pay:{" "}
              <span className="font-medium"> ₦ {parseFloat(price!)}</span>
            </h3>
          </div>
        </div>
        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response.status);
                closePaymentModal();
                if (response.status === "successful") {
                  router.push("/shop/success?paymentstatus=true");
                }
              },
              onClose: () => {
                setShowOptionModal(true);
              },
            });
          }}
          className="bg-green-600 w-full mt-5 rounded-md text-white py-4 font-nunito"
        >
          continue payment
        </button>
      </div>
    </section>
  );
};

export default Makepayment;

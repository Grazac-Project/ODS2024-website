"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { baseUrl } from "@/actions/baseurl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { decryptString } from "@/utils";

interface BodyProps {
  status: boolean;
  paymentId: string;
}

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("paymentstatus");
  const userID = searchParams.get("userId");
  const PaymentRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PaymentRef);
  const [loading, setLoading] = useState(false);
  const decryptedId = decryptString(userID!);

  useEffect(() => {
    const postData = async () => {
      if (paymentStatus === "true") {
        const requestBody: BodyProps = {
          status: true,
          paymentId: decryptedId,
        };
        try {
          setLoading(true);
          const res = await fetch(
            `${baseUrl}/api/shop/payment/${decryptedId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
            }
          );

          if (res.ok || res.status === 200) {
            setLoading(false);
          }
        } catch (e: any) {
          setLoading(false);
        }
      }
    };
    postData();
  });
  return (
    <>
      <section
        ref={PaymentRef}
        className={cn(
          "min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7  w-full h-full flex items-center justify-center",
          isInView
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
            : " opacity-0 translate-y-36"
        )}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="flex items-center justify-center text-center bg-gray-100">
              <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  Thank You for Shopping with Us!
                </h2>
                <p className="text-gray-600">
                  We appreciate your business. Your order has been confirmed,
                  and you will receive a confirmation email shortly.
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default PaymentSuccess;

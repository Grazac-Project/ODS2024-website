"use client";

import { useSearchParams } from "next/navigation";
import { cn } from "@/utils/twcx";
import useInView from "@/hooks/useInView";
import { updatePaymentStatus } from "@/actions/payment";
import { sendMail } from "@/utils/mail";
import { compileOrder } from "@/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("paymentstatus");
  const userID = searchParams.get("userId");
  const PaymentRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PaymentRef);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlePaymentSuccess = async () => {
      if (paymentStatus === "true") {
        const userId = userID;

        setLoading(true);
        const result = await updatePaymentStatus(userId!, true);
        setLoading(false);

        if (result.error) {
          console.error(result.error);
        } else {
          console.log("Payment status updated successfully:", result.user);
          const subject = "Order Confirmation";
          const htmlBody = compileOrder(
            result.user?.name!,
            "https://ods-ogun.vercel.app/"
          );
          await sendMail({
            to: result.user?.email!,
            name: result.user?.name!,
            subject,
            body: htmlBody,
          });
        }
      }
    };

    handlePaymentSuccess();
  }, [paymentStatus]);
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

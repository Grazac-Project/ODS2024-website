"use client";

import { useSearchParams } from "next/navigation";
import { baseUrl } from "@/actions/baseurl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Buyer } from "@prisma/client";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import { Skeleton } from "@/components/ui/skeleton";

interface BodyProps {
  status: boolean;
  paymentId: string;
}

const Sucesspage = () => {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("paymentstatus");
  const userID = searchParams.get("userId");
  const tx_ref = searchParams.get("tx_ref");

  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [buyer, setBuyer] = useState<Buyer | undefined>(undefined);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);

        const cartData = await getCart(tx_ref!);
        if (cartData) {
          setCart({
            size: cartData.size ?? 0,
            subtotal: cartData.subtotal ?? 0,
            items: cartData.items ?? [],
            id: cartData.id ?? "",
            createdAt: cartData.createdAt ?? new Date(),
            updatedAt: cartData.updatedAt ?? new Date(),
          });
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

  //   useEffect(() => {
  //     const postData = async () => {
  //       if (paymentStatus === "true") {
  //         const requestBody: BodyProps = {
  //           status: true,
  //           paymentId: tx_ref!,
  //         };
  //         try {
  //           setLoading(true);
  //           const res = await fetch(`${baseUrl}/api/shop/payment/${userID}`, {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(requestBody),
  //           });

  //           if (res.ok || res.status === 200) {
  //             setLoading(false);
  //           }
  //         } catch (e: any) {
  //           setLoading(false);
  //         }
  //       }
  //     };
  //     postData();
  //   }, []);

  useEffect(() => {
    const getBuyer = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/shop/cart/buyer/${userID}`);
        if (res.ok) {
          const data = await res.json();
          setBuyer(data.buyer);
        } else {
          console.error("Failed to fetch buyer data");
        }
      } catch (error) {
        console.error("Error fetching buyer data:", error);
      }
    };
    getBuyer();
  }, []);

  const expectedDeliveryDate = buyer
    ? formatDate(
        addDays(buyer.updatedAt?.toString() ?? new Date().toISOString(), 30)
      )
    : "N/A";

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="font-bold text-4xl leading-10 text-black text-start">
          Payment Successful
        </h2>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-start">
          Thanks {buyer?.name} for making a purchase you can check our order
          summary frm below
        </p>
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div className="data">
              {isLoading && <Skeleton className="h-[30px] w-[100px]" />}
              {cart && (
                <>
                  {" "}
                  <p className="font-semibold text-base leading-7 text-black flex">
                    Order Id:{" "}
                    <span className="text-indigo-600 font-medium">
                      {" "}
                      {cart?.id}
                    </span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-black mt-4">
                    Order Payment :{" "}
                    <span className="text-gray-400 font-medium">
                      {" "}
                      {buyer?.updatedAt
                        ? formatDate(buyer.updatedAt.toString())
                        : "N/A"}
                    </span>
                  </p>
                </>
              )}
            </div>
            <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              Track Your Order
            </button>
          </div>
          <div className="w-full px-3 min-[400px]:px-6">
            {isLoading && (
              <>
                <div className="flex flex-col items-center justify-between w-full gap-4">
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <Skeleton className="w-[240px] h-[200px]" />
                        <div className="flex flex-col h-full items-center justify-between">
                          <Skeleton className="w-[240px] h-[40px]" />
                          <Skeleton className="w-[240px] h-[40px]" />
                          <Skeleton className="w-[240px] h-[40px]" />
                        </div>
                      </div>
                      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                        <div className="flex items-center justify-center">
                          <Skeleton className="w-[140px] h-[40px]" />
                        </div>
                        <div className="flex items-center justify-center">
                          <Skeleton className="w-[240px] h-[40px]" />
                        </div>
                        <div className="flex items-center justify-center">
                          <Skeleton className="w-[200px] h-[40px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <Skeleton className="w-[240px] h-[200px]" />
                        <div className="flex flex-col h-full items-center justify-between">
                          <Skeleton className="w-[240px] h-[40px]" />
                          <Skeleton className="w-[240px] h-[40px]" />
                          <Skeleton className="w-[240px] h-[40px]" />
                        </div>
                      </div>
                      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                        <div className="flex items-center justify-center">
                          <Skeleton className="w-[140px] h-[40px]" />
                        </div>
                        <div className="flex items-center justify-center">
                          <Skeleton className="w-[240px] h-[40px]" />
                        </div>
                        <div className="flex items-center justify-center">
                          <Skeleton className="w-[200px] h-[40px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {cart && (
              <>
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full"
                  >
                    <div className="img-box max-lg:w-full">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={305}
                        height={215}
                        priority
                        className="w-full rounded-2xl max-w-[305px]  max-h-[215px] object-cover aspect-[1.39] "
                        //    className="xl:w-[140px]"
                      />
                    </div>
                    <div className="flex flex-row items-center w-full ">
                      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        <div className="flex items-center">
                          <div className="">
                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                              {item.product.name}
                            </h2>

                            <div className="flex items-center ">
                              <p className="font-medium text-base leading-7 text-black ">
                                Qty:{" "}
                                <span className="text-gray-500">
                                  {item.quantity}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3"></div>
                          <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">
                                Status
                              </p>
                              <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                {buyer?.tracking}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                Expected Delivery Time
                              </p>
                              <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500 text-center">
                                {expectedDeliveryDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
            <div className="text-center">
              Note: all confirmed orders will be shipped between 2 to 3 days of
              purchase
            </div>
            <p className="font-semibold text-lg text-black py-6">
              Total Price:
              <span className="text-indigo-600">{buyer?.price}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sucesspage;

const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const nth = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${nth(day)} ${month} ${year}`;
};

const addDays = (isoString: string, days: number): string => {
  const date = new Date(isoString);
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

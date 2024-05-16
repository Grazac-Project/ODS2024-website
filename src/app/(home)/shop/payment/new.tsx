"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { decryptString } from "@/utils";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const SummaryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);
  const searchParams = useSearchParams();
  const cartID = searchParams.get("cartid");
  const cartId = searchParams.get("cartId");

  const decryptedId = cartID
    ? decryptString(cartID)
    : cartId
    ? decryptString(cartId)
    : "";

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);

        const cartData = await getCart(decryptedId);
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

  const calculateDiscountedPrice = (
    originalPrice: number,
    discount: number
  ): number => {
    const discountedAmount = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountedAmount;
    return discountedPrice;
  };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  return (
    <>
      <section>
        <div className="bg-gray-50">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
            <div className="bg-primarytwo  lg:sticky lg:top-0">
              <div className="relative h-full">
                <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-100px)]">
                  <h2 className="text-2xl font-bold text-white">
                    Order Summary
                  </h2>
                  <div className="space-y-6 mt-10">
                    {cart?.items && (
                      <>
                        {cart.items.map((item) => (
                          <div className="grid sm:grid-cols-2 items-start gap-6">
                            <div className=" rounded-md">
                              <Image
                                src={item.product.image}
                                alt={item.product.name}
                                width={305}
                                height={215}
                                priority
                                className="w-full rounded-2xl max-w-[305px]  max-h-[215px] object-cover aspect-[1.39] "
                              />
                            </div>
                            <div className="items-center flex flex-col h-full justify-center">
                              <h3 className="text-base text-white">
                                {item.product.name}
                              </h3>
                              <ul className="text-xs text-white space-y-3 mt-4">
                                <li>
                                  Quantity{" "}
                                  <span className="float-right">
                                    {item.quantity}
                                  </span>
                                </li>
                                <li>
                                  Total Price:
                                  <span className="float-right">
                                    {" "}
                                    ₦{" "}
                                    {calculateDiscountedPrice(
                                      item.product.price,
                                      item.product.discount
                                    ) * item.quantity}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 bg-primary w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-white">
                    Total <span className="ml-auto"> ₦ {cart?.subtotal}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
              <h2 className="text-2xl font-bold text-[#333]">
                Complete your order
              </h2>
              <form className="mt-10">
                <div>
                  <h3 className="text-lg font-bold text-[#333] mb-6">
                    Personal Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative flex items-center">
                      <div className="relative w-full">
                        <input
                          id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="John Doe"
                          className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                        />
                        <label
                          htmlFor="firstname"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                        >
                          First Name
                        </label>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#00A651"
                        stroke="#00A651"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <div className="relative w-full">
                        <input
                          id="lastname"
                          name="lastname"
                          type="text"
                          placeholder="John Doe"
                          className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                        />
                        <label
                          htmlFor="lastname"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                        >
                          Last Name
                        </label>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#00A651"
                        stroke="#00A651"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <div className="relative w-full">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="John Doe"
                          className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                        >
                          Email
                        </label>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#00A651"
                        stroke="#00A651"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 682.667 682.667"
                      >
                        <defs>
                          <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path
                              d="M0 512h512V0H0Z"
                              data-original="#000000"
                            ></path>
                          </clipPath>
                        </defs>
                        <g
                          clipPath="url(#a)"
                          transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                          <path
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </div>

                    <div className="relative flex items-center">
                      <div className="relative w-full">
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="(234) 123 456 789"
                          className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                        >
                          Phone Number
                        </label>
                      </div>
                      <svg
                        fill="#00A651"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#333] mb-6">
                    Shipping Address
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative w-full">
                      <input
                        id="addressline"
                        name="addressline"
                        type="text"
                        placeholder="John Doe"
                        className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                      />
                      <label
                        htmlFor="addressline"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                      >
                        Address Line
                      </label>
                    </div>

                    <div className="relative w-full">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="John Doe"
                        className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                      />
                      <label
                        htmlFor="city"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                      >
                        City
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        placeholder="John Doe"
                        className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                      />
                      <label
                        htmlFor="state"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                      >
                        State
                      </label>
                    </div>
                    <div className="relative w-full">
                      <input
                        id="postalcode"
                        name="postalcode"
                        type="text"
                        placeholder="John Doe"
                        className="peer h-12 w-full bg-transparent border-b-2 text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
                      />
                      <label
                        htmlFor="postalcode"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                      >
                        Postal Code
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-6 max-sm:flex-col mt-10">
                    <button
                      type="button"
                      className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
                    >
                      Complete Purchase
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SummaryPage;

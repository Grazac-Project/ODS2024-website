"use client";

import React, { useState, useEffect } from "react";
import { Fullproduct } from "@/types";
import Image from "next/image";
import { cn } from "@/utils";

const page = () => {
  const [product, setProduct] = useState<Fullproduct | undefined>();
  const [loading, setLoading] = useState(false);

  const discountedAmount = product?.price! * (product?.discount! / 100);
  const discountedPrice = (product?.price! - discountedAmount).toFixed(2);
  const id = "6646408cc1c2e3d258bb00c9";
  const [more, setMore] = useState(false);

  const renderSizes = () => {
    const sizesArray: string[] = [];
    if (product?.sizes) {
      const { s, m, l, xl, xxl } = product.sizes[0];
      if (s) sizesArray.push("S");
      if (m) sizesArray.push("M");
      if (l) sizesArray.push("L");
      if (xl) sizesArray.push("XL");
      if (xxl) sizesArray.push("XXL");
    }
    return sizesArray.map((size) => (
      <button
        key={size}
        className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50"
      >
        {size}
      </button>
    ));
  };

  //   console.log(typeof Fullproduct);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const response = await fetch(`/api/shop/product/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const result = await response.json();
        setProduct(result.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }

      setLoading(false);
    };

    fetchProduct();
  }, []);

  return (
    <section className="relative ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
          <div className="img">
            <div className="img-box h-full max-lg:mx-auto ">
              <Image
                src={product?.image!}
                alt="product"
                className="w-full h-full object-cover rounded-lg max-lg:mx-auto lg:ml-auto"
                height={207}
                width={247}
              />
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              {product?.categories && (
                <p className="text-lg font-medium leading-8 text-primary mb-4 capitalize">
                  {product?.categories.map((category) => (
                    <>
                      <div key={category.id}>{category.category}</div>
                    </>
                  ))}
                </p>
              )}
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                {product?.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  ₦{discountedPrice}
                </h6>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-2 text-sm font-bold text-gray-900">4.95</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full " />

                  <p className="text-sm font-medium text-gray-900 underline hover:no-underline">
                    73 reviews
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal mb-5">
                <span className={cn(more ? "" : "line-clamp-3")}>
                  {product?.description}
                </span>{" "}
                <button
                  className={cn("text-indigo-600")}
                  onClick={() => setMore(!more)}
                >
                  {more ? " ....Close" : "More...."}
                </button>
              </p>
              {product?.feature && (
                <ul className="grid gap-y-4 mb-8">
                  {product?.feature.map((feature) => (
                    <>
                      <li className="flex items-center gap-3" key={feature.id}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#00A651" />
                          <path
                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                            stroke="white"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                        <span className="font-normal text-base text-gray-900 ">
                          {feature.feature}
                        </span>
                      </li>
                    </>
                  ))}
                </ul>
              )}
              <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                Size
              </p>
              <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                  {renderSizes()}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                <div className="flex sm:items-center sm:justify-center w-full">
                  <button className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                    <svg
                      className="stroke-gray-900 group-hover:stroke-black"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 11H5.5"
                        stroke=""
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                      <path
                        d="M16.5 11H5.5"
                        stroke=""
                        stroke-opacity="0.2"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                      <path
                        d="M16.5 11H5.5"
                        stroke=""
                        stroke-opacity="0.2"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                    placeholder="1"
                  />
                  <button className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                    <svg
                      className="stroke-gray-900 group-hover:stroke-black"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="#9CA3AF"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="black"
                        stroke-opacity="0.2"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
                  <svg
                    className="stroke-indigo-600 "
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

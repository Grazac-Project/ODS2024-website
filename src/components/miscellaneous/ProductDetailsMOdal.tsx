"use client";

import React, { useState, useEffect, useTransition } from "react";
import { cn } from "@/utils/twcx";
import { useStateCtx } from "@/context/StateCtx";
import Image from "next/image";
import { CloseSquare } from "iconsax-react";
import { getProductById } from "@/actions/addProduct";
import { Product } from "@prisma/client";
import LoadingSpinner from "../loader";
import { incrementProductQuantity } from "@/actions/cart";
import AddToCartButton from "./AddToCartButton";

const ProductDetailsMOdal = () => {
  const { ShowProductModal, setShowProductModal, SelectedProductId } =
    useStateCtx();

  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(false);
  const [success, setsuccess] = useState(false);
  const [isLoading, startTransition] = useTransition();

  const discountedAmount = product?.price! * (product?.discount! / 100);
  const discountedPrice = (product?.price! - discountedAmount).toFixed(2);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      const result = await getProductById(SelectedProductId);

      if (result.status === 200) {
        setProduct(result.product);
      } else {
      }

      setLoading(false);
    };

    if (ShowProductModal) {
      fetchProduct();
    }
  }, [SelectedProductId, ShowProductModal]);

  const trimmedName =
    product?.name &&
    product?.name.split(" ").slice(0, 3).join(" ") +
      (product?.name.split(" ").length > 3 ? "..." : "");

  const closeModal = () => {
    setShowProductModal(false);
    setProduct(undefined);
  };

  console.log(product);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/10 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]",
          ShowProductModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-labelledby="product-details"
        className={cn(
          "py-6   flex flex-col w-[360px] h-[500px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[600px] overflow-y-auto overflow-x-hidden hide-scroll justify-between items-center bg-white  backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ",
          ShowProductModal
            ? "-translate-x-1/2 duration-700 opacity-100 rounded-xl md:rounded-2xl"
            : "-translate-x-full duration-300 pointer-events-none"
        )}
      >
        {loading && (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner />
          </div>
        )}
        {product && (
          <>
            <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
              <h3 className="sm:text-lg md:text-2xl font-medium text-header">
                <span className="lg:font-bold">{product?.name}</span>
              </h3>
              <button
                type="button"
                tabIndex={0}
                aria-label="Close"
                onClick={closeModal}
                className="dark:text-[#e80000] rounded-full"
              >
                <CloseSquare size="32" />
              </button>
            </div>
            <div className="self-stretch mx-6 mt-5">
              <div className="flex gap-5">
                <div className="flex flex-col w-[73%]">
                  <div className="flex flex-col grow">
                    <Image
                      src={product?.image!}
                      alt="product"
                      className="max-w-[247px] aspect-[1.2] border border-[color:var(--Foundation-stroke-stroke-300,#EBEBEB)] rounded-2xl object-cover"
                      height={207}
                      width={247}
                    />

                    <div className="flex gap-5 justify-between mt-6">
                      <div className="justify-center px-2.5 py-1 text-base leading-5 text-green-600 whitespace-nowrap rounded bg-zinc-100">
                        In stock
                      </div>
                      <p className="flex-auto text-2xl font-semibold leading-7 text-neutral-900">
                        ₦ {discountedPrice}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[200px]">
                  {/* {product?.sizes && product.sizes.length > 0 && (
                    <>
                      <h2 className="mt-2 text-base font-semibold leading-6 text-zinc-800">
                        Sizes
                      </h2>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {product?.sizes.map((size) => (
                          <button
                            key={size}
                            className="px-4 py-2 bg-gray-200 rounded text-center"
                            onClick={() => {
                              // Handle size selection logic here
                              console.log(`Selected size: ${size}`);
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </>
                  )} */}
                </div>
              </div>
            </div>
            <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
            <>
              <div className="flex flex-col max-h-[160px] gap-3 justify-between px-5 mt-3 w-full text-base leading-6 text-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex-auto font-semibold">Product Name:</div>
                  <h2 className="flex-auto font-medium">{trimmedName}</h2>
                </div>
                <div className="self-stretch mt-2 w-full bg-neutral-200 min-h-[1px]" />
                <div>
                  <h2 className="mt-2 text-base font-semibold leading-6 text-zinc-800">
                    Product Description:
                  </h2>
                  <p className="mt-2.5 text-base font-medium leading-6 text-zinc-800">
                    {product?.description}
                  </p>
                </div>
              </div>
            </>
            <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
            <AddToCartButton
              productId={product.id}
              // incrementProductQuantity={incrementProductQuantity}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailsMOdal;

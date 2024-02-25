"use client";

import React from "react";
import { cn } from "@/utils/twcx";
import { useStateCtx } from "@/context/StateCtx";
import Image from "next/image";
import { products } from "@/libs";
import { CloseSquare } from "iconsax-react";

const ProductDetailsMOdal = () => {
  const { ShowProductModal, setShowProductModal, SelectedProductId } =
    useStateCtx();

  const product = products.find((project) => project.id === SelectedProductId);
  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/10 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]",
          ShowProductModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowProductModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="product-details"
        className={cn(
          "py-6   flex flex-col w-[360px] h-[330px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[400px] justify-between items-center bg-white  backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ",
          ShowProductModal
            ? "-translate-x-1/2 duration-700 opacity-100 rounded-xl md:rounded-2xl"
            : "-translate-x-full duration-300 pointer-events-none"
        )}
      >
        {" "}
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header">
            <span className="lg:font-bold">{product?.name}</span>
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setShowProductModal(false)}
            className="dark:text-[#e80000] rounded-full"
          >
            <CloseSquare size="32" />
          </button>
        </div>
        <div className="self-stretch mx-6 mt-11">
          <div className="flex gap-5">
            <div className="flex flex-col w-[73%]">
              <div className="flex flex-col grow">
                <Image
                  src={product?.image!}
                  alt="product"
                  className="w-full aspect-[1.2]"
                  height={207}
                  width={247}
                />

                <div className="flex gap-5 justify-between mt-6">
                  <div className="justify-center px-2.5 py-1 text-base leading-5 text-green-600 whitespace-nowrap rounded bg-zinc-100">
                    In stock
                  </div>
                  <p className="flex-auto text-2xl font-semibold leading-7 text-neutral-900">
                    ₦ {product?.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%]">
              {/* <ProductSize
                size="M-size"
                iconsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7100ea7840c08766578d24a3e74d6b66b836a23539897c1a270cb984411e07e1?apiKey=252f8d5a726747838fcb04939a832fc3&"
              /> */}
            </div>
          </div>
        </div>
        <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
        <>
          <div className="flex gap-5 justify-between px-5 mt-6 w-full text-base leading-6 text-zinc-800">
            <div className="flex-auto font-semibold">Product Name:</div>
            <h2 className="flex-auto font-medium">{product?.name}</h2>
          </div>
          <section>
            <h2 className="mt-5 text-base font-semibold leading-6 text-zinc-800">
              Product Description:
            </h2>
            <p className="mt-2.5 text-base font-medium leading-6 text-zinc-800">
              {product?.description}
            </p>
          </section>
        </>
        <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
        <button className="justify-center items-center px-16 py-4 mt-6 w-full text-lg leading-5 text-white whitespace-nowrap bg-green-600 rounded-xl border border-solid cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetailsMOdal;

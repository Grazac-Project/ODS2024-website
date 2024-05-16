"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import Image from "next/image";
import { CloseSquare } from "iconsax-react";
import { Product } from "@prisma/client";
import LoadingSpinner from "@/components/loader";
import AddToCartButton from "./AddToCartButton";

const ProductDetailsMOdal = () => {
  const { ShowProductModal, setShowProductModal, SelectedProductId } =
    useStateCtx();

  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(false);

  const discountedAmount = product?.price! * (product?.discount! / 100);
  const discountedPrice = (product?.price! - discountedAmount).toFixed(2);

  const id = SelectedProductId;

  console.log(id);

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
        // Handle error if needed
      }

      setLoading(false);
    };

    if (ShowProductModal) {
      fetchProduct();
    }
  }, [SelectedProductId, ShowProductModal, id]);

  const closeModal = () => {
    setShowProductModal(false);
    setProduct(undefined);
  };

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
          <div className="flex flex-col">
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
              </div>
            </div>
            <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
            <div className="flex flex-col">
              <div className="flex flex-col max-h-[160px] gap-3 justify-between px-5 mt-3 w-full text-base leading-6 text-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex-auto font-semibold">Product Name:</div>
                  <h2 className="flex-auto font-medium">{product.name}</h2>
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
            </div>
          </div>
        )}
        {product && (
          <div className="flex bottom-0 items-center justify-center">
            <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
            <AddToCartButton productId={product.id} />
            <div className="items-center justify-center w-full flex bg-white"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailsMOdal;

export const NewProductDetailsMOdal = () => {
  const { ShowProductModal, setShowProductModal, SelectedProductId } =
    useStateCtx();

  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(false);

  const discountedAmount = product?.price! * (product?.discount! / 100);
  const discountedPrice = (product?.price! - discountedAmount).toFixed(2);

  const id = SelectedProductId;

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

    if (ShowProductModal) {
      fetchProduct();
    }
  }, [SelectedProductId, ShowProductModal, id]);

  const closeModal = () => {
    setShowProductModal(false);
    setProduct(undefined);
  };

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
        aria-labelledby="create-project"
        aria-modal
        className={cn(
          "pt-2 pb-6 sm:py-6   flex flex-col w-[98%] sm:w-[95%]  min-[500px]:h-[750px] md:h-[600px] max-w-[1000px] h-[600px] max-h-[1458px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ",
          ShowProductModal
            ? "-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl"
            : "-translate-x-full duration-300 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-black">
            <span className="lg:font-bold">
              {product?.name || "Product name"}
            </span>
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
        <section className="w-full h-full  pt-2 sm:pt-4">
          {loading ? (
            <div className="w-full items-center justify-center h-full flex">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start">
              <div className="flex flex-col w-[350px] h-[300px] max-md:w-full max-md:justify-center ">
                <div className="flex flex-col gap-y-2 h-full w-full relative overflow-hidden rounded-lg">
                  <Image
                    src={product?.image!}
                    alt="product"
                    className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
                    height={207}
                    width={247}
                  />
                  <span className="absolute bottom-1 left-0 bg-gradient-to-r from-white via-white/50 to-white/5 px-2 w-full text-left font-medium">
                    {product?.name!}
                  </span>
                </div>
                <div className="flex w-full justify-between mt-6 space-x-2">
                  <div className="justify-center w-[100px] text-center text-base text-green-600 whitespace-nowrap rounded bg-zinc-100">
                    In stock
                  </div>
                  <p className="flex text-lg font-semibold text-neutral-900">
                    ₦{discountedPrice}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0 hide-scroll overflow-y-auto overflow-x-hidden h-full">
                <div className="flex gap-x-2 w-full">
                  <div className="font-semibold">Product Name:</div>
                  <h2 className="font-medium">{product?.name}</h2>
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
                <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
                <div className="flex items-center w-full justify-center self-center">
                  <AddToCartButton productId={product?.id!} />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

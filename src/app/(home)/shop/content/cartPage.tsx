/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck

"use client";

import React, { useEffect, useState } from "react";
import {
  ShoppingCartProps,
  getCart,
  deleteCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "@/actions/cart";
import { Minus, Add, ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { encryptString } from "@/utils";


interface CartTotals {
  totalDiscount: number;
  totalPriceWithoutDiscount: number;
  totalDiscountedPrice: number;
}

const CartPage = ({ Cart_id }: { Cart_id?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);

        const cartData = await getCart(Cart_id);
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

  const handleDeleteItem = async (productId: string) => {
    try {
      const updatedCart = await deleteCartItem(productId, Cart_id);

      setCart({
        size: updatedCart?.size ?? 0,
        subtotal: updatedCart?.subtotal ?? 0,
        items: updatedCart?.items ?? [],
        id: updatedCart?.id ?? "",
        createdAt: updatedCart?.createdAt ?? new Date(),
        updatedAt: updatedCart?.updatedAt ?? new Date(),
      });

      console.log("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleIncreaseQuantity = async (productId: string) => {
    try {
      const updatedCart = await increaseCartItemQuantity(productId, Cart_id);
      setCart({
        size: updatedCart?.size ?? 0,
        subtotal: updatedCart?.subtotal ?? 0,
        items: updatedCart?.items ?? [],
        id: updatedCart?.id ?? "",
        createdAt: updatedCart?.createdAt ?? new Date(),
        updatedAt: updatedCart?.updatedAt ?? new Date(),
      });

      // console.log("Item quantity increased successfully!");
    } catch (error) {
      // console.error("Error increasing item quantity:", error);
    }
  };

  const handleDecreaseQuantity = async (productId: string) => {
    try {
      const updatedCart = await decreaseCartItemQuantity(productId, Cart_id);
      setCart({
        size: updatedCart?.size ?? 0,
        subtotal: updatedCart?.subtotal ?? 0,
        items: updatedCart?.items ?? [],
        id: updatedCart?.id ?? "",
        createdAt: updatedCart?.createdAt ?? new Date(),
        updatedAt: updatedCart?.updatedAt ?? new Date(),
      });

      console.log("Item quantity decreased successfully!");
    } catch (error) {
      console.error("Error decreasing item quantity:", error);
    }
  };

  const calculateDiscountedPrice = (
    originalPrice: number,
    discount: number
  ): number => {
    const discountedAmount = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountedAmount;
    return discountedPrice;
  };

  const calculateCartTotals = (cart: ShoppingCartProps): CartTotals => {
    let totalDiscount = 0;
    let totalPriceWithoutDiscount = 0;
    let totalDiscountedPrice = 0;

    for (const item of cart.items) {
      const discountedPrice = calculateDiscountedPrice(
        item.product.price,
        item.product.discount
      );
      totalDiscountedPrice += discountedPrice * item.quantity;
      totalDiscount += item.product.discount * item.quantity;
      totalPriceWithoutDiscount += item.product.price * item.quantity;
    }

    return { totalDiscount, totalPriceWithoutDiscount, totalDiscountedPrice };
  };

  const cartTotals = cart
    ? calculateCartTotals(cart)
    : {
        totalDiscount: 0,
        totalPriceWithoutDiscount: 0,
        totalDiscountedPrice: 0,
      };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-start text-black">
          Shopping Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">Discount</span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>

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
                      <Skeleton className="w-[240px] h-[40px]" />
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
                      <Skeleton className="w-[240px] h-[40px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {cart?.items && (
          <>
            {cart.items.map((item) => (
              <div className="relative" key={item.id}>
                <button
                  onClick={() => handleDeleteItem(item.product.id)}
                  className="rounded-full group flex items-center w-full mt-6 focus-within:outline-red-500 absolute justify-end"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                      cx="17"
                      cy="17"
                      r="17"
                      fill=""
                    />
                    <path
                      className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                      d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                      stroke="#EF4444"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                  <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box">
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
                    <div className="pro-data w-full max-w-sm ">
                      <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                        {item.product.name}
                      </h5>

                      <h6 className="font-medium text-lg leading-8 text-primary  max-[550px]:text-center">
                        ₦ {item.product.price}
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-lg leading-9 text-black w-full max-w-[176px] text-center">
                      {item.product.discount}%
                      <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                        (Discount)
                      </span>
                    </h6>
                    <div className="flex items-center w-full mx-auto justify-center text-black">
                      <button
                        onClick={() => handleDecreaseQuantity(item.product.id)}
                        disabled={item.quantity === 1}
                        className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Minus size={22} />
                      </button>
                      <input
                        type="text"
                        className="border-y border-gray-200  outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        placeholder="1"
                        value={item.quantity}
                        disabled
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(item.product.id)}
                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Add size={22} />
                      </button>
                    </div>
                    <h6 className="text-primary font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                      ₦ {item.product.price * item.quantity}
                      <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                        (Price)
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {cart && (
          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ₦ {cartTotals.totalPriceWithoutDiscount}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Discount
              </p>
              {cart && (
                <h6 className="font-semibold text-xl leading-8 text-gray-900">
                  ₦ {cartTotals.totalPriceWithoutDiscount - cart?.subtotal!}
                </h6>
              )}
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-primary">
                ₦ {cart?.subtotal}
              </h6>
            </div>
          </div>
        )}
        {isLoading && (
          <div>
            <Skeleton className="h-[250px] w-full" />
          </div>
        )}
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link
            href={`/shop?cartId=${encryptString(Cart_id!)}`}
            // onClick={() => router.back()}
            className="rounded-full py-4 w-full max-w-[280px] flex items-center border border-primary justify-center transition-all duration-500  text-primary"
          >
            <ArrowLeft2 />
            <span className="px-2 font-semibold text-lg leading-8">
              continute shopping
            </span>
          </Link>
          <Link
            href={`/shop/payment?cartId=${encryptString(Cart_id!)}`}
            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 hover:bg-primary/50"
          >
            Continue to Payment
            <ArrowRight2 />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

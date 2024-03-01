"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils/twcx";
import { CloseSquare } from "iconsax-react";
import {
  ShoppingCartProps,
  getCart,
  deleteCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "@/actions/cart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSearchParams } from "next/navigation";
import { encryptString, decryptString } from "@/utils";
import ProductCard from "./productCard";
import LoadingSpinner from "./Loader";
import MobileCrd from "./mobilecard";
import ShopCardSkelon from "../cardskelton";
import Link from "next/link";

const CartModal = () => {
  const { setShowCartModal, ShowCartModal } = useStateCtx();
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);
  const searchParams = useSearchParams();

  const cartID = searchParams.get("cartid");

  const decryptedId = decryptString(cartID!);

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

    if (ShowCartModal) {
      fetchCart();
    }
  }, [ShowCartModal]);

  const handleDeleteItem = async (productId: string) => {
    try {
      const updatedCart = await deleteCartItem(productId, decryptedId);

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
      const updatedCart = await increaseCartItemQuantity(
        productId,
        decryptedId
      );
      setCart({
        size: updatedCart?.size ?? 0,
        subtotal: updatedCart?.subtotal ?? 0,
        items: updatedCart?.items ?? [],
        id: updatedCart?.id ?? "",
        createdAt: updatedCart?.createdAt ?? new Date(),
        updatedAt: updatedCart?.updatedAt ?? new Date(),
      });

      console.log("Item quantity increased successfully!");
    } catch (error) {
      console.error("Error increasing item quantity:", error);
    }
  };

  const handleDecreaseQuantity = async (productId: string) => {
    try {
      const updatedCart = await decreaseCartItemQuantity(
        productId,
        decryptedId
      );
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

  const closeModal = () => {
    setShowCartModal(false);
    setCart(undefined);
  };

  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/10 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]",
          ShowCartModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeModal}
      />
      <div
        role="dialog"
        aria-labelledby="Cart-Modal"
        className={cn(
          "py-6   flex flex-col w-[360px] min-h-[80%] max-h-[90%] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[600px] overflow-y-auto overflow-x-hidden hide-scroll justify-between items-center bg-white  backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ",
          ShowCartModal
            ? "-translate-x-1/2 duration-700 opacity-100 rounded-xl md:rounded-2xl"
            : "-translate-x-full duration-300 pointer-events-none"
        )}
      >
        <div className="flex bg-white items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header">
            <span className="lg:font-bold">Cart</span>
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
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {cart && cart.items.length > 0 ? (
              <>
                <div className="hidden md:flex md:flex-col max-w-[550px] h-[326px] mt-3 items-center place-items-center justify-between gap-y-2 overflow-y-auto overflow-x-hidden hide-scroll">
                  {cart.items.map((item) => (
                    <>
                      <Suspense key={item.id} fallback={<ShopCardSkelon />}>
                        <ProductCard
                          key={item.id}
                          cartItem={item}
                          handleDeleteItem={handleDeleteItem}
                          handleIncreaseQuantity={handleIncreaseQuantity}
                          handleDecreaseQuantity={handleDecreaseQuantity}
                        />
                      </Suspense>
                    </>
                  ))}
                </div>
                <Carousel className="w-[350px] block md:hidden">
                  <CarouselContent className="max-h-[200px]">
                    {cart.items.map((item) => (
                      <Suspense key={item.id} fallback={<ShopCardSkelon />}>
                        <CarouselItem key={item.id}>
                          <MobileCrd
                            key={item.id}
                            cartItem={item}
                            handleDeleteItem={handleDeleteItem}
                            handleIncreaseQuantity={handleIncreaseQuantity}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                          />
                        </CarouselItem>
                      </Suspense>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-[326px] mt-3 text-lg font-nunito font-medium">
                <p>Your cart is empty! 🛒</p>
                <p>Start shopping now! 🛍️</p>
              </div>
            )}
          </>
        )}
        {cart && cart.items.length > 0 && (
          <>
            <div className="self-stretch w-full bg-neutral-200 min-h-[1px]" />
            <div className="flex flex-col pt-4 w-full px-5 bg-white">
              <div className="flex items-center justify-between px-5 py-4 font-semibold rounded-xl bg-neutral-200 bg-opacity-50 max-w-[646px] sm:flex-wrap">
                <h3 className="flex-auto self-start mt-1 text-xl leading-6 text-zinc-800 font-nunito">
                  Total amount:
                </h3>
                <span className="leading-7 text-[#00A651] font-nunito">
                  ₦ {cart?.subtotal}
                </span>
              </div>
              <div className="self-stretch mt-4 w-full bg-neutral-200 min-h-[1px]" />
              <Link
                href={`/shop/payment?cartId=${encryptString(cart?.id!)}&price=${
                  cart?.subtotal
                }`}
                onClick={closeModal}
                className="justify-center items-center text-center py-4 mt-6 w-full text-lg leading-5 text-white whitespace-nowrap bg-green-600 rounded-xl border border-solid border-[color:var(--Foundation-stroke-stroke-500,#E1E1E1)] max-md:px-5 max-md:max-w-full"
              >
                Proceed
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;

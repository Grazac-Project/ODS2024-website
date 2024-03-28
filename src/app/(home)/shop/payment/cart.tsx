"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useSearchParams } from "next/navigation";
import { decryptString } from "@/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShopCardSkelon from "../content/cardskelton";
import {
  decreaseCartItemQuantity,
  deleteCartItem,
  increaseCartItemQuantity,
  ShoppingCartProps,
} from "@/actions/cart";
import MobileCrd from "./card";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: string;
  description: string;
  discount: number;
  image: string;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  cartId: string;
  product: Product;
}

const FORMCART = () => {
  const searchParams = useSearchParams();
  const cartID = searchParams.get("cartid");
  const cartId = searchParams.get("cartId");

  const decryptedId = cartID
    ? decryptString(cartID)
    : cartId
    ? decryptString(cartId)
    : "";

  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);

  const url = `/api/shop/cart/${decryptedId}`;
  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setCart(data || []);
    }
  }, [data]);

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
    } catch (error) {}
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

  if (!cart) {
    return null;
  }
  return (
    <div className="hidden md:block py-7 mt-[40px] ml-[60px]">
      {isLoading && (
        <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
      )}
      <h2 className="capitalize font-montserrat mb-5">here is your cart</h2>
      <>
        {cart ? (
          <Carousel className="w-[350px]">
            <CarouselContent className="min-h-[200px]">
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
        ) : (
          <>
            <p>No items in the cart</p>
            <p>
              <span role="img" aria-label="sad-face">
                😞
              </span>
              <span role="img" aria-label="disappointed-face">
                😟
              </span>
              <span role="img" aria-label="cry-face">
                😢
              </span>
              <span role="img" aria-label="anguished-face">
                😧
              </span>
              <span role="img" aria-label="weary-face">
                😩
              </span>
            </p>
          </>
        )}
      </>

      <div className=" border-y-2 border-black mt-5">
        <div className="flex justify-between">
          <div className="flex items-center mt-2 justify-between w-full">
            <span className="font-bold">Total Price</span>
            <span className="font-bold">₦ {cart.subtotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FORMCART;

"use client";

import React, { useEffect, useState } from "react";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils/twcx";
import { CloseSquare } from "iconsax-react";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import ProductCard from "./productCard";

const CartModal = () => {
  const { setShowCartModal, ShowCartModal } = useStateCtx();

  const [cart, setCart] = useState<ShoppingCartProps | undefined>(undefined);

  console.log(cart);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart();
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
    };

    if (ShowCartModal) {
      fetchCart();
    }
  }, [ShowCartModal]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/10 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]",
          ShowCartModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowCartModal(false)}
      />
      <div
        role="dialog"
        aria-labelledby="Cart-Modal"
        className={cn(
          "py-6   flex flex-col w-[360px] h-[500px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[600px] overflow-y-auto overflow-x-hidden hide-scroll justify-between items-center bg-white  backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ",
          ShowCartModal
            ? "-translate-x-1/2 duration-700 opacity-100 rounded-xl md:rounded-2xl"
            : "-translate-x-full duration-300 pointer-events-none"
        )}
      >
        <div className="flex fixed bg-white items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header">
            <span className="lg:font-bold">Cart</span>
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setShowCartModal(false)}
            className="dark:text-[#e80000] rounded-full"
          >
            <CloseSquare size="32" />
          </button>
        </div>
        {cart?.items.map((item) => (
          <ProductCard key={item.id} cartItem={item} />
        ))}
      </div>
    </>
  );
};

export default CartModal;

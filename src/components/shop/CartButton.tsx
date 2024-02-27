"use client";

import React from "react";
import { useStateCtx } from "@/context/StateCtx";
import { ShoppingCart } from "iconsax-react";
import { Product, Cart, CartItem } from "@prisma/client";

const CartButton = () => {
  const { setShowCartModal } = useStateCtx();
  return (
    <>
      <button
        onClick={() => setShowCartModal(true)}
        className="border-px bg-[#E6F6EE] fixed bottom-[30px] right-[35px] !z-[99] flex h-[40px] w-[40px] items-center justify-center rounded-full p-0"
      >
        <ShoppingCart color="#00A651" variant="Bold" />
      </button>
    </>
  );
};

export default CartButton;

"use client";

import { useStateCtx } from "@/context/StateCtx";
import { ShoppingCart } from "iconsax-react";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import React, { useEffect, useState } from "react";

const CartButton = () => {
  const [cart, setCart] = useState<ShoppingCartProps | null>(null);
  const { setShowCartModal } = useStateCtx();

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart();
      setCart(cartData);
    };

    fetchCart();
  }, [cart]);
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

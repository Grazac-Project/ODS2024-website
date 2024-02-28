"use client";

import { useStateCtx } from "@/context/StateCtx";
import { ShoppingCart } from "iconsax-react";
import { ShoppingCartProps, getCart } from "@/actions/cart";
import React, { useEffect, useState } from "react";

const CartButton = () => {
  const [cart, setCart] = useState<number>();
  const { setShowCartModal } = useStateCtx();

  const fetchCart = async () => {
    const cartData = await getCart();
    setCart(cartData?.size);
  };

  useEffect(() => {
    fetchCart();
    const intervalId = setInterval(() => {
      fetchCart();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <button
        onClick={() => setShowCartModal(true)}
        className="border-px bg-[#E6F6EE] fixed bottom-[30px] right-[35px] !z-[99] h-[60px] w-[60px] flex items-center justify-center rounded-full p-0"
      >
        <div className="relative py-2">
          <div className="t-0 absolute left-3">
            <p className="flex h-1 w-1 items-center justify-center rounded-full  p-3 text-xs bg-red-200 text-green-600">
              {cart}
            </p>
          </div>
          <ShoppingCart
            color="#00A651"
            variant="Bold"
            className="mt-4 h-6 w-6"
          />
        </div>
      </button>
    </>
  );
};

export default CartButton;

"use client";

import { useState, useTransition } from "react";
import { useStateCtx } from "@/context/StateCtx";

interface AddToCartButtonProps {
  productId: string;
}

import { incrementProductQuantity } from "@/actions/cart";

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const { setShowProductModal } = useStateCtx();

  return (
    <>
      <button
        disabled={isPending}
        className="justify-center items-center px-16 py-4 mt-3 w-[80%] text-lg leading-5 disabled:bg-white/60 disabled:text-green-700 text-white whitespace-nowrap bg-green-600 rounded-xl border border-solid cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        onClick={async () => {
          startTransition(() => {
            setSuccess(false);
            incrementProductQuantity(productId).then((data) => {
              setSuccess(!!data?.success);
              if (data?.success) {
                setTimeout(() => {
                  setShowProductModal(false);
                }, 3000);
              }
            });
          });
        }}
      >
        {success
          ? "Successfully Added to Cart"
          : isPending
          ? "Adding..."
          : "Add to Cart"}
      </button>
    </>
  );
};

export default AddToCartButton;

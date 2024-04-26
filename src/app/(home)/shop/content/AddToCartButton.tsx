"use client";

import { useState, useTransition } from "react";
import { addTocart } from "@/actions/cart";
import { encryptString, decryptString } from "@/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const cartID = searchParams.get("cartid");
  const cartId = searchParams.get("cartId");

  const decryptedId = cartID
    ? decryptString(cartID)
    : cartId
    ? decryptString(cartId)
    : "";

  return (
    <>
      <button
        disabled={isPending}
        className="justify-center items-center text-center py-4 mt-3 w-[80%] disabled:cursor-not-allowed text-lg leading-5 disabled:bg-white/60 disabled:text-green-700 text-white whitespace-nowrap bg-green-600 rounded-xl border border-solid cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        onClick={async () => {
          startTransition(() => {
            setSuccess(false);
            if (decryptedId) {
              addTocart(productId, decryptedId).then((data) => {
                setSuccess(!!data?.success);
                if (data?.success) {
                  replace(
                    `${pathname}?cartid=${encryptString(data.updatedCart?.id!)}`
                  );
                  setTimeout(() => {
                    router.refresh();
                  }, 100);
                }
              });
            } else {
              addTocart(productId).then((data) => {
                setSuccess(!!data?.success);
                if (data?.success) {
                  replace(
                    `${pathname}?cartid=${encryptString(data.updatedCart?.id!)}`
                  );
                  setTimeout(() => {
                    router.refresh();
                  }, 100);
                }
              });
            }
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

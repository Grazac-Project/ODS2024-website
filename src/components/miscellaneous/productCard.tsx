import React from "react";
import Image from "next/image";
import { CartItemWithProduct } from "@/actions/cart";
import { AddCircle, MinusCirlce, Trash } from "iconsax-react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  //   setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

const productCard = ({ cartItem: { product, quantity } }: CartEntryProps) => {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={305}
          height={215}
          priority
          className="w-full border rounded-2xl max-w-[305px] max-h-[215px] object-cover aspect-[1.39] "
        />
      </div>
      <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:mt-4">
          <div className="flex gap-0 justify-between px-5 whitespace-nowrap">
            <div className="grow my-auto text-2xl font-semibold leading-6 text-zinc-800">
              {product.name}
            </div>
            {/* <div className="grow justify-center p-1 text-base leading-5 rounded bg-stone-100 text-neutral-600">
              {variant}
            </div> */}
          </div>
          <div className="flex gap-5 justify-between mt-4 w-full">
            <div className="flex gap-4 justify-between">
              <div className="flex justify-center items-center my-auto aspect-square">
                <AddCircle size="32" />
              </div>
              <div className="flex gap-4 justify-between text-base whitespace-nowrap">
                <div className="flex gap-1 justify-between">
                  <div className="justify-center items-center px-2.5 h-8 rounded aspect-[0.97] bg-zinc-100 leading-[122.5%] text-neutral-600">
                    1
                  </div>
                  <div className="grow justify-center px-2 py-2.5 leading-7 rounded bg-zinc-100 text-zinc-800">
                    <span className="leading-7 text-zinc-800">₦</span>
                    <span className="font-semibold leading-7 text-zinc-800">
                      {product.price}
                    </span>
                  </div>
                </div>
                <Trash size="32" />
              </div>
            </div>
            <div className="flex justify-center items-center aspect-square">
              <MinusCirlce size="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCard;

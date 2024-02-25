"use client";

import React, { Suspense } from "react";
import ShopCard from "@/components/shop/card";
import { products } from "@/libs";
import { ShoppingCart } from "iconsax-react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils/twcx";

const page = () => {
  const ShopRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ShopRef);
  const ProductRef = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ProductRef);

  return (
    <section
      ref={ShopRef}
      className={cn(
        " min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7 w-full h-full sm:border border-gray-200 dark:border-primary-light",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex items-center justify-center place-items-center">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[40px] font-montserrat font-medium">HOT Deals</h2>
          <div>
            <figure className="flex flex-col text-xs leading-5 whitespace-nowrap">
              <div className="bg-[#E6F6EE] rounded-full p-4">
                <ShoppingCart size="32" color="#00A651" variant="Bold" />
              </div>
              <figcaption className="self-center">Cart</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div
        ref={ProductRef}
        className={cn(
          "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
          isInView1
            ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
            : " opacity-0 translate-y-36"
        )}
      >
        {products.map((product, index) => (
          <Suspense>
            <ShopCard {...product} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default page;

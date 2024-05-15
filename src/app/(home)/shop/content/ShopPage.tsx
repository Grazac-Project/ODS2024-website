"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import ShopCard from "./card";
import useInView from "@/hooks/useInView";
import { Product } from "@prisma/client";
import CardSkelton from "./cardskelton";
import { cn } from "@/utils";
import { Skeleton } from "@/components/ui/skeleton";

const Shop = () => {
  const ShopRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ShopRef);
  const ProductRef = React.useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ProductRef);
  const [products, setProducts] = useState<Product[]>([]);
  const url = "/api/shop/product";
  const { isLoading, data, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setProducts(data.products || []);
    }
  }, [data]);

  return (
    <section
      ref={ShopRef}
      className={cn(
        " min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7 w-full h-full px-4 sm:px-8 xl:px-10 2xl:px-20 ",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-center place-items-center mb-6 mt-8">
          <div className="flex items-center justify-between w-full">
            <h2 className="md:text-[40px] font-montserrat font-medium text-[30px]">
              HOT Deals
            </h2>
          </div>
        </div>
        {isLoading && (
          <div
            className={cn(
              "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4"
            )}
          >
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
            <Skeleton className="h-80 w-[400px] max-w-full rounded-xl" />
          </div>
        )}
        <div
          ref={ProductRef}
          className={cn(
            "w-full min-h-[941px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4",
            isInView1
              ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
              : " opacity-0 translate-y-36"
          )}
        >
          {products.map((product) => (
            <Suspense key={product.id} fallback={<CardSkelton />}>
              <ShopCard {...product} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;

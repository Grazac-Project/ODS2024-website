import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CartItemWithProduct } from "@/actions/cart";
import { AddCircle, MinusCirlce, Trash } from "iconsax-react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  handleDeleteItem: (productId: string) => Promise<void>;
  handleIncreaseQuantity: (productId: string) => Promise<void>;
  handleDecreaseQuantity: (productId: string) => Promise<void>;
}

const MobileCrd = ({
  cartItem: { product, quantity },
  handleDeleteItem,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: CartEntryProps) => {
  const calculateDiscountedPrice = (
    originalPrice: number,
    discount: number
  ): number => {
    const discountedAmount = (originalPrice * discount) / 100;
    const discountedPrice = originalPrice - discountedAmount;
    return discountedPrice;
  };

  const trimmedName =
    product.name &&
    product.name.split(" ").slice(0, 3).join(" ") +
      (product.name.split(" ").length > 3 ? "..." : "");
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="font-montserrat"> {trimmedName}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={105}
          priority
          className="w-full rounded-2xl max-w-[150px]  max-h-[105px] object-cover aspect-[1.39] "
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => handleDecreaseQuantity(product.id)}>
              <MinusCirlce
                size="21"
                className="bg-zinc-100 border-solid rounded-full"
              />
            </button>
            <button onClick={() => handleIncreaseQuantity(product.id)}>
              <AddCircle
                size="21"
                className="bg-zinc-100 border-solid rounded-full"
              />
            </button>
            <button
              className="flex justify-center items-center aspect-square"
              onClick={() => handleDeleteItem(product.id)}
            >
              <Trash size="21" color="#FF0000" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="h-8 text-center self-center rounded w-[31px] bg-zinc-100 text-neutral-600">
              {quantity}
            </span>
            <span className="font-semibold leading-7 text-center self-center h-8 rounded font-nunito w-[100px] bg-zinc-100 text-zinc-800">
              ₦{" "}
              {calculateDiscountedPrice(
                product.price,
                product.discount
              ).toFixed(1)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileCrd;

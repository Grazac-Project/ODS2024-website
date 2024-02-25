import React from "react";
import { ProductProps } from "@/types";
import Image from "next/image";
import { Star1 } from "iconsax-react";

const ShopCard = ({
  imageURL,
  imageDescription,
  rating,
  title,
  price,
  reviewsCount,
  discount,
  originalPrice,
}: ProductProps) => {
  return (
    <>
      <div className="flex flex-col max-w-[305px] min-h-[390px] max-h-[400px] rounded-2xl bg-white">
        <Image
          loading="lazy"
          src={imageURL!}
          alt={imageDescription!}
          width={305}
          height={215}
          className="w-full border-t rounded-t-2xl max-w-[305px] max-h-[215px] border-r border-l border-solid aspect-[1.39] "
        />
        <div className="flex flex-col px-4 py-3 w-full shadow-sm min-h-[171px] gap-2">
          <div className="flex gap-2 justify-between">
            <div className="flex flex-col flex-1">
              <h3 className="text-base font-semibold">{title}</h3>
              <div className="flex items-center text-xs gap-1 max-w-[137px]">
                <p className="">{rating}</p>

                <Image src="/shop/star.svg" alt="star" width={18} height={16} />
                <p>-</p>
                <p>{reviewsCount} Reviews</p>
              </div>
            </div>
            <div className="justify-center self-start px-1.5 max-h-[28px] max-w-[58px] py-1 text-xs leading-5 text-gray-200 whitespace-nowrap rounded aspect-[2.07] bg-[#466850]">
              {discount}% Off
            </div>
          </div>
          <div className="flex gap-1 items-center max-h-[28px] max-w-[147px] mt-3.5 text-xl font-semibold text-[#282828]">
            <div>
              <span className="text-lg">₦</span>
              <span className="text-xl font-semibold">{price}</span>
            </div>
            <span className="text-xs line-through">{originalPrice}</span>
          </div>
          <button className="justify-center items-center px-16 py-3.5 mt-3 text-lg leading-5 text-green-600 whitespace-nowrap bg-white rounded-xl border-t border-r-4 border-b-4 border-l border-solid border-b-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-l-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-r-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)] border-t-[color:var(--Foundation-Primary-color-primary-color-500,#00A651)]">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopCard;

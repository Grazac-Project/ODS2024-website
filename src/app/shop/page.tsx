import React from "react";
import ShopCard from "@/components/shop/card";
import { CgProductHunt } from "react-icons/cg";

const page = () => {
  const product = {
    imageURL: "/shop/bag.svg",
    imageDescription: "ODS 2024 T-Shirt",
    ratingImageURL:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/74875b7513d8a4138ef2278be9a83c40fb5d0970604812feb7116d0e38c9a838?apiKey=252f8d5a726747838fcb04939a832fc3&",
    title: "ODS 2024 T-Shirt",
    rating: "3.9",
    starImageURL:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b5446450f8ebbf787f80275916eb5bd1bc53cc3c99df2430d7e35c8072a5716c?apiKey=252f8d5a726747838fcb04939a832fc3&",
    reviewsCount: "546",
    discount: "20",
    price: "250,000",
    originalPrice: "350,000",
  };

  return (
    <>
      <div className="flex items-center justify-center place-items-center bg-black p-9">
        <ShopCard {...product} />
      </div>
    </>
  );
};

export default page;

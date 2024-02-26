"use server";

import { prisma } from "@/utils/db/prisma";

export const Addproduct = async (formdata: FormData) => {
  const name = formdata.get("name")?.toString();
  const description = formdata.get("description")?.toString();
  const imageUrl = formdata.get("imageUrl")?.toString();
  const price = Number(formdata.get("price") || 0);
  const discount = formdata.get("discount")?.toString() || "10";
  const rating = formdata.get("rating")?.toString() || "2";

  if (!name || !description || !imageUrl || !price) {
    return {
      error: "All Fields are required",
      status: 400,
    };
  }

  const productInput = {
    name,
    description,
    image: imageUrl,
    price,
    discount,
    rating,
  };

  await prisma.product.create({
    data: productInput,
  });
  return {
    success: "Product Added Successfully",
    status: 200,
  };
};

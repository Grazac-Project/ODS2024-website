"use server";

import { prisma } from "@/utils/db/prisma";

export const Addproduct = async (formdata: FormData) => {
  const name = formdata.get("name")?.toString();
  const description = formdata.get("description")?.toString();
  const image = formdata.get("image")?.toString();
  const price = Number(formdata.get("price") || 0);
  const discount = Number(formdata.get("discount") || 10);

  if (!name || !description || !image || !price) {
    return {
      error: "All Fields are required",
      status: 400,
    };
  }

  const productInput = {
    name,
    description,
    image: image,
    price,
    discount,
  };

  await prisma.product.create({
    data: productInput,
  });

  return {
    success: "Product Added Successfully",
    status: 200,
  };
};
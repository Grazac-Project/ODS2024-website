"use server";

import { prisma } from "@/utils/db/prisma";

export const Addproduct = async (formdata: FormData) => {
  const name = formdata.get("name")?.toString();
  const description = formdata.get("description")?.toString();
  const image = formdata.get("image")?.toString();
  const price = Number(formdata.get("price") || 0);
  const discount = Number(formdata.get("discount") || 10);
  const sizes = formdata.getAll("sizes").map((size) => size.toString());

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

  console.log(productInput);

  await prisma.product.create({
    // @ts-ignore
    data: productInput,
  });

  return {
    success: "Product Added Successfully",
    status: 200,
  };
};

export const Products = async () => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "desc" },
    });

    return {
      products,
      success: "Products Retrieved Successfully",
      status: 200,
    };
  } catch (error) {
    return {
      success: "Error retrieving products",
      status: 500,
    };
  }
};

export const getProductById = async (productId: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return {
        error: "Product not found",
        status: 404,
      };
    }

    return {
      product,
      success: "Product retrieved successfully",
      status: 200,
    };
  } catch (error) {
    return {
      error: "Internal server error",
      status: 500,
    };
  }
};

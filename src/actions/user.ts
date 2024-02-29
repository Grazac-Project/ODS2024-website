"use server";

import { prisma } from "@/utils/db/prisma";

export const createuser = async (
  formData: FormData,
  cartId: string,
  price: string
) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const address = formData.get("address")?.toString();
  const phoneNumber = Number(formData.get("phoneNumber") || 0);

  if (!name || !email || !address || !phoneNumber) {
    return {
      error: "All Fields are required",
      status: 400,
    };
  }

  const productInput = {
    name,
    email,
    phoneNumber,
    address,
    cartId,
    price,
  };

  console.log(productInput);

  try {
    const newUser = await prisma.user.create({
      data: productInput,
    });

    console.log(newUser);
    return { success: true, User: newUser };
  } catch (error) {
    console.error("Error creating user:", error);

    return { Error: "Internal Server Error", status: 500, error };
  }
};


// export const getuser = async
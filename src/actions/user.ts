"use server";

import { prisma } from "@/utils/db/prisma";
import { cookies } from "next/headers";

const cookie = cookies();

export const createuser = async (
  name: string,
  email: string,
  phoneNumber: number,
  address: string,
  cartid: string
) => {
  const cartId = cookie.get("cartId")?.value;

  if (!cartId) {
    return null;
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      phoneNumber,
      address,
      cartId: cartid,
    },
  });

  console.log(newUser);

  return { success: true, newUser };
};

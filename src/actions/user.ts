"use server";

import { prisma } from "@/utils/db/prisma";
import { cookies } from "next/headers";
import { encryptString, decryptString } from "@/utils";

const cookie = cookies();

export const createuser = async (
  name: string,
  email: string,
  phoneNumber: number,
  address: string
) => {
  const cartId = cookie.get("cartId")?.value;

  if (!cartId) {
    return null;
  }

  const decryptedId = decryptString(cartId);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      phoneNumber,
      address,
      cartId: decryptedId,
    },
  });

  return { success: true, newUser };
};

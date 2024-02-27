"use server";

import { prisma } from "@/utils/db/prisma";
import { cookies } from "next/headers";
import { encryptString, decryptString } from "@/utils";

const cookie = cookies();

export const increaseProductCount = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
};

export const createCart = async () => {
  const newCart = await prisma.cart.create({
    data: {},
  });

  const encryptedId = encryptString(newCart.id);

  cookie.set("cartId", encryptedId, {
    maxAge: 60 * 60 * 24 * 1, // 1 day
    httpOnly: true,
    path: "/",
    priority: "high",
  });

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
};

// export const getCart = async () => {
//   const cartId = cookie.get("cartId")?.value;

//   if (!cartId) {
//     return null;
//   }

//   const decryptedId = decryptString(cartId);

//   const cart = await prisma.cart.findUnique({
//     where: {
//       id: decryptedId,
//     },
//     include: { items: { include: { product: true } } },
//   });

//  return {
//     ...cart,
//     size: cart?.items.reduce((acc, item) => acc + item.quantity, 0),
//     subtotal: cart?.items.reduce(
//       (acc, item) => acc + item.quantity * item.product.price,
//       0
//     ),
//   };
// }


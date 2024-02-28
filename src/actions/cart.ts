"use server";

import { prisma } from "@/utils/db/prisma";
import { cookies } from "next/headers";
import { encryptString, decryptString } from "@/utils";
import { Prisma } from "@prisma/client";

const cookie = cookies();

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCartProps = CartWithProducts & {
  size: number;
  subtotal?: number;
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

export const getCart = async () => {
  const cartId = cookie.get("cartId")?.value;

  if (!cartId) {
    return null;
  }

  const decryptedId = decryptString(cartId);

  const cart = await prisma.cart.findUnique({
    where: {
      id: decryptedId,
    },
    include: { items: { include: { product: true } } },
  });

  return {
    success: "cart Item",
    ...cart,
    size: cart?.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart?.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
};

export async function incrementProductQuantity(
  productId: string
): Promise<{ success: boolean }> {
  try {
    const cart = (await getCart()) ?? (await createCart());

    const articleInCart = cart.items?.find(
      (item) => item.productId === productId
    );

    if (articleInCart) {
      await prisma.cartItem.update({
        where: { id: articleInCart.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id!,
          productId,
          quantity: 1,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error incrementing product quantity:", error);
    return { success: false };
  }
}

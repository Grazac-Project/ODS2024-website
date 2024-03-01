"use server";

import { prisma } from "@/utils/db/prisma";
import { cookies } from "next/headers";
import { encryptString, decryptString } from "@/utils";
import { Prisma } from "@prisma/client";
import { GetFromSessionStorage, SetToSessionStorage } from "@/utils";

const cookie = cookies();

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type ShoppingCartProps = CartWithProducts & {
  size: number;
  subtotal?: number;
};

export const createCart = async () => {
  const newCart = await prisma.cart.create({
    data: {},
  });

  if (newCart) {
    const encryptedId = encryptString(newCart.id);
    console.log(encryptedId);

    // Store in session storage
    SetToSessionStorage("cartId", encryptedId);
    console.log("Stored to session");

    cookie.set("cartId", encryptedId, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      httpOnly: true,
      path: "/",
      priority: "high",
    });
    console.log("Stored to cookie");

    return {
      ...newCart,
      items: [],
      size: 0,
      subtotal: 0,
    };
  } else {
    console.error("Failed to create a new cart");

    return null;
  }
};

export const getCart = async (cartID?: string) => {
  const cartId = cookie.get("cartId")?.value;
  const cartIdFromSession = GetFromSessionStorage("cartId");

  if (!cartId && !cartIdFromSession) {
    return;
  }
  // console.log(cartID);

  const decryptedId = decryptString(cartId! || cartIdFromSession!);

  const cart = await prisma.cart.findUnique({
    where: {
      id: cartID,
    },
    include: { items: { include: { product: true } } },
  });

  return {
    success: "cart Item",
    ...cart,
    size: cart?.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart?.items.reduce(
      (acc, item) =>
        acc +
        (1 - item.product.discount / 100) * item.quantity * item.product.price,
      0
    ),
  };
};

export const addTocart = async (productId: string, cartid?: string) => {
  try {
    const cart = (await getCart(cartid)) ?? (await createCart());

    const articleInCart = cart?.items?.find(
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
          cartId: cart?.id!,
          productId,
          quantity: 1,
        },
      });
    }

    const updatedCart = await getCart(cartid);

    return { success: true, updatedCart };
  } catch (error) {
    console.error("Error incrementing product quantity:", error);
    return { success: false };
  }
};

export async function incrementProductQuantity(
  productId: string,
  cartid?: string
): Promise<{ success: boolean }> {
  try {
    const cart = (await getCart(cartid)) ?? (await createCart());

    const articleInCart = cart?.items?.find(
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
          cartId: cart?.id!,
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

export const deleteCartItem = async (productId: string, cartID?: string) => {
  const cartId = cookie.get("cartId")?.value;
  const cartIdFromSession = GetFromSessionStorage("cartId");

  if (!cartId && !cartIdFromSession) {
    return;
  }

  const decryptedId = decryptString(cartId! || cartIdFromSession!);

  const cart = await prisma.cart.findUnique({
    where: {
      id: cartID!,
    },
    include: { items: { include: { product: true } } },
  });

  if (!cart) {
    return;
  }

  const cartItemToDelete = cart.items.find(
    (item) => item.product.id === productId
  );

  if (!cartItemToDelete) {
    return;
  }

  await prisma.cart.update({
    where: {
      id: cartID,
    },
    data: {
      items: {
        delete: {
          id: cartItemToDelete.id,
        },
      },
    },
  });

  const updatedCart = await getCart(cartID);

  return updatedCart;
};

export const increaseCartItemQuantity = async (
  productId: string,
  cartId?: string
) => {
  try {
    const updatedCart = await updateCartItemQuantity(productId, 1, cartId);
    return updatedCart;
  } catch (error) {
    console.error("Error increasing item quantity:", error);
    throw error;
  }
};

export const decreaseCartItemQuantity = async (
  productId: string,
  cartId?: string
) => {
  try {
    const updatedCart = await updateCartItemQuantity(productId, -1, cartId);
    return updatedCart;
  } catch (error) {
    console.error("Error decreasing item quantity:", error);
    throw error;
  }
};

const updateCartItemQuantity = async (
  productId: string,
  quantityChange: number,
  cartID?: string
) => {
  const cartId = cookie.get("cartId")?.value;
  const cartIdFromSession = GetFromSessionStorage("cartId");

  if (!cartId && !cartIdFromSession) {
    return;
  }

  const cart = await prisma.cart.findUnique({
    where: {
      id: cartID,
    },
    include: { items: { include: { product: true } } },
  });

  if (!cart) {
    return;
  }

  const cartItemToUpdate = cart.items.find(
    (item) => item.product.id === productId
  );

  if (cartItemToUpdate) {
    await prisma.cart.update({
      where: {
        id: cartID,
      },
      data: {
        items: {
          update: {
            where: {
              id: cartItemToUpdate.id,
            },
            data: {
              quantity: {
                increment: quantityChange,
              },
            },
          },
        },
      },
    });

    const updatedCart = await getCart(cartID);

    return updatedCart;
  } else {
    console.error("Item not found in the cart");
    return null;
  }
};

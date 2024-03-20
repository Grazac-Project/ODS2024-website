"use server";

import { prisma } from "@/utils/db";
import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";
import { encryptString } from "@/utils";
import { NextResponse } from "next/server";

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

// get cart
export const GET = async () => {
  try {
    
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
      })
    );
  }
};

export const POST = async (cartID?: string) => {};

const createCart = async () => {
  const newCart = await prisma.cart.create({
    data: {},
  });

  if (newCart) {
    const encryptedID = encryptString(newCart.id);

    cookie.set("cartId", encryptedID, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      httpOnly: true,
      path: "/",
      priority: "high",
    });
  }
};

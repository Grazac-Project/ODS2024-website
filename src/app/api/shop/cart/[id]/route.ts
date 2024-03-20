import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

type Params = {
  id: string;
};

// get cart items
export async function GET(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    const cart = await prisma.cart.findUnique({
      where: { id },
      include: { items: { include: { product: true } } },
    });

    if (!cart) {
      return new NextResponse(
        JSON.stringify({
          status: 404,
          message: "Cart not found",
        })
      );
    }

    return new NextResponse(
      JSON.stringify({
        status: 200,
        ...cart,
        size: cart?.items.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: cart?.items.reduce(
          (acc, item) =>
            acc +
            (1 - item.product.discount / 100) *
              item.quantity *
              item.product.price,
          0
        ),
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
      })
    );
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

type Params = {
  id: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    const cart = await prisma.cart.findUnique({
      where: { id },
      include: { items: { include: { product: true } } },
    });

    
    return new NextResponse(
      JSON.stringify({ cart, message: "sucess", status: 200 })
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

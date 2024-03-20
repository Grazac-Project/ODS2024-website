import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

type Params = {
  id: string;
};
export async function GET(context: { params: Params }) {
  const id = context.params.id;

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({
          status: 404,
          message: "Product not found",
        })
      );
    }

    return new NextResponse(
      JSON.stringify({
        status: 200,
        product,
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

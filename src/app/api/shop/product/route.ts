import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export const GET = async () => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "desc" },
      include: {
        reviews: true,
      },
    });

    // console.log(products);

    return new NextResponse(
      JSON.stringify({
        status: 200,
        products,
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
};

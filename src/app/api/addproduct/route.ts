import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

interface ProductData {
  name: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
}

export const POST = async (req: Request) => {
  try {
    const {
      name,
      description,
      image,
      price,
      discount = 0,
    }: ProductData = await req.json();

    const product = await prisma.product.create({
      data: {
        name,
        description,
        image,
        price,
        discount,
      },
    });

    return NextResponse.json({ success: true, data: product });
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
      })
    );
  }
};

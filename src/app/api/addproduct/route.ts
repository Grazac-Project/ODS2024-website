import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

interface ProductData {
  name: string;
  description: string;
  image: string;
  price: string;
  discount?: string;
}

export const POST = async (req: Request) => {
  try {
    const {
      name,
      description,
      image,
      price,
      discount = "0",
    }: ProductData = await req.json();

    const parsedPrice = parseFloat(price);
    const parsedDiscount = parseFloat(discount);

    const product = await prisma.product.create({
      data: {
        name,
        description,
        image,
        price: parsedPrice,
        discount: parsedDiscount,
      },
    });

    return NextResponse.json({ success: true, data: product, status: 200 });
  } catch (e: any) {
    console.log(e);
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
        success: false,
      })
    );
  }
};

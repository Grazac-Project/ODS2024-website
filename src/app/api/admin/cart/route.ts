import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export const GET = async () => {
  try {
    const buyers = await prisma.buyer.findMany();
    return new NextResponse(
      JSON.stringify({
        buyers,
        message: "sucess",
        status: 200,
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

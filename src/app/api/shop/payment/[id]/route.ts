import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

type Params = {
  id: string;
};

interface RequestBody {
  status: boolean;
  paymentId: string;
}
export async function POST(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    const { status, paymentId }: RequestBody = await req.json();

    const updatedbuyer = await prisma.buyer.update({
      where: { id },
      data: {
        paymentStatus: status,
        paymentId,
      },
    });

    if (updatedbuyer && updatedbuyer.email && updatedbuyer.name) {
      const response = await fetch(
        "https://mail-service-1omd.onrender.com/api/ods/sendorder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: updatedbuyer.email,
            name: updatedbuyer.name,
          }),
        }
      );

      if (!response.ok) {
        return new NextResponse(
          JSON.stringify({
            message: "something went wrong",
            status: 402,
            success: false,
          })
        );
      }
    }

    return new NextResponse(
      JSON.stringify({
        updatedbuyer,
        message: "sucess",
        status: 200,
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
        success: false,
      })
    );
  }
}

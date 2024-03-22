import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import { sendMail } from "@/utils/mail";
import { compileOrder } from "@/utils";

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

    let retryCount = 0;
    const maxRetries = 3;

    const updatedbuyer = await prisma.buyer.update({
      where: { id },
      data: {
        paymentStatus: status,
        paymentId,
      },
    });

    if (updatedbuyer) {
      const subject = "Order Confirmation";
      const htmlBody = compileOrder(
        updatedbuyer?.name!,
        "https://ods-ogun.vercel.app/"
      );
      await sendMail({
        to: updatedbuyer?.email!,
        name: updatedbuyer?.name!,
        subject,
        body: htmlBody,
      });
    }

    return new NextResponse(
      JSON.stringify({
        updatedbuyer,
        message: "sucess",
        status: 200,
      })
    );
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
}

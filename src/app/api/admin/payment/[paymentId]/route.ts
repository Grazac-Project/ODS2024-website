import { NextResponse } from "next/server";
const Flutterwave = require("flutterwave-node-v3");

type Params = {
  paymentId: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const paymentId = context.params.paymentId;
  const { NEXT_PUBLIC_FLUTER_PUBLIC_KEY, Fluter_Secret_Key } = process.env;

  try {
    const flw = new Flutterwave(
      NEXT_PUBLIC_FLUTER_PUBLIC_KEY,
      Fluter_Secret_Key
    );

    const payload = { id: paymentId };
    const res = await flw.Transaction.verify(payload);
    return new NextResponse(
      JSON.stringify({
        message: "success",
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
}

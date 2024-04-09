import { NextResponse } from "next/server";
const Flutterwave = require("flutterwave-node-v3");

type Params = {
  paymentId: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const paymentId = context.params.paymentId;
  const tx_ref = context.params.paymentId;
  const { NEXT_PUBLIC_FLUTER_PUBLIC_KEY, Fluter_Secret_Key } = process.env;

  console.log(Fluter_Secret_Key);
  try {
    const url = `https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=${tx_ref}`;
    console.log(url);
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Fluter_Secret_Key}`,
        "Content-Type": "application/json",
      },
    });

    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to verify transaction");
    }

    const data = await res.json();
    return new NextResponse(
      JSON.stringify({
        data,
        message: "success",
        status: 200,
      })
    );
  } catch (e: any) {
    console.log(e);
    return new NextResponse(
      JSON.stringify({
        e,
        message: "something went wrong",
        status: 500,
      })
    );
  }
}

// "660576e6e409e5ba76f23b13"

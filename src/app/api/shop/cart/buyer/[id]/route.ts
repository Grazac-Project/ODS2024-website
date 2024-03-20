import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

type Params = {
  id: string;
};

type ProductInput = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  price: string;
};

export async function POST(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    const { name, email, phoneNumber, price, address }: ProductInput =
      await req.json();
    if (!name || !email || !address || !phoneNumber) {
      return new NextResponse(
        JSON.stringify({
          error: "All Fields are required",
          status: 400,
        })
      );
    }
    const productInput = {
      name,
      email,
      phoneNumber,
      address,
      cartId: id,
      price,
    };

    const newUser = await primsa.buyer.create({
      data: productInput,
    });

    return NextResponse.json({ success: true, data: newUser, status: 200 });
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

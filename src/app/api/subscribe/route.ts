import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const existingUser = await primsa.subscribe.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
          message: "User already exists",
          status: 400,
        })
      );
    }

    await primsa.subscribe.create({
      data: {
        email,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "registration suscessfull",
        status: 201,
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

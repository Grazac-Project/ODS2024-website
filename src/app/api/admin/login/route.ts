"use server";
import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";
import { signIn } from "@/auth";

interface AdminData {
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  try {
    const { email, password }: AdminData = await req.json();

    const admin = await primsa.admin.findUnique({
      where: {
        email: email,
      },
    });

    if (!admin) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Admin not found",
          status: 404,
        })
      );
    }

    const isAdmin = admin.password === password;

    if (!isAdmin) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid Credentials",
          status: 404,
        })
      );
    }

    // const callback = await signIn(email);
    // console.log(callback);

    return NextResponse.json({ admin, status: 200 });
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
      })
    );
  }
};

import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

export const GET = async () => {
  try {
    const highlights = await primsa.highlight.findMany();
    return new NextResponse(
      JSON.stringify({
        highlights,
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

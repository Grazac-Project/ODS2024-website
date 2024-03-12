import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

export const GET = async () => {
  try {
    const speakers = await primsa.speaker.findMany();
    return new NextResponse(
      JSON.stringify({
        speakers,
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

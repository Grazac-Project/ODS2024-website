import { NextRequest, NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

type Params = {
  id: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    const speaker = await primsa.speaker.findUnique({
      where: { id },
      include: { socials: true },
    });
    return new NextResponse(
      JSON.stringify({
        speaker,
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
}

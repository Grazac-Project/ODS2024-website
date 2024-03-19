import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

type Params = {
  id: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    const highlight = await primsa.highlight.findUnique({
      where: { id },
    });
    return new NextResponse(
      JSON.stringify({
        highlight,
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

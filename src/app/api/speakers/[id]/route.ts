import { NextResponse } from "next/server";
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

type SocialData = {
  platform: string;
  url: string;
};

export async function POST(req: Request, context: { params: Params }) {
  const id = context.params.id;

  const { platform, url }: SocialData = await req.json();

  try {
    await primsa.speaker.update({
      where: { id },
      data: {
        socials: {
          create: {
            platform,
            url,
          },
        },
      },
    });
    return new NextResponse(
      JSON.stringify({
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

export async function DELETE(req: Request, context: { params: Params }) {
  const id = context.params.id;

  try {
    await primsa.speaker.delete({
      where: { id },
      include: { socials: true },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Speaker and associated socials deleted successfully",
        status: 200,
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Something went wrong while deleting the speaker",
        status: 500,
      })
    );
  }
}

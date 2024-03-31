import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";
import { Speaker } from "@prisma/client";

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

export const POST = async (req: Request) => {
  const { bio, name, image, occupation, title }: Speaker = await req.json();

  if (!bio || !name || !image || !occupation || !title) {
    return new NextResponse(
      JSON.stringify({
        message: "all fields are required",
        status: 400,
      })
    );
  }

  try {
    const speaker = await primsa.speaker.create({
      data: {
        bio,
        name,
        image,
        occupation,
        title,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "sucess",
        status: 200,
        speaker,
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

import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/types";

export const GET = async (req: NextRequest) => {
  const albumName = req.body;
  try {
    const results = (await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${albumName}`)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(30)
      .execute()) as { resources: SearchResult[] };

    return new NextResponse(
      JSON.stringify({
        results,
        message: "success",
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

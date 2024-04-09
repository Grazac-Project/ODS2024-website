import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/types";

export async function GET(req: Request) {
  try {
    const results = (await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${"hero"}`)
      .sort_by("created_at", "asc")
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
}

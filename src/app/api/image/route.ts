import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

export const GET = async () => {
  try {
    const results = (await cloudinary.v2.search
      .expression(`resource_type:image AND folder="ODS CONTENT"`)
      .sort_by("created_at", "desc")
      .with_field("tags")
      .max_results(500)
      .execute()) as { resources: SearchResult[] };

    return new NextResponse(
      JSON.stringify({
        results,
        message: "success",
        status: 200,
      })
    );
  } catch (e: any) {}
};

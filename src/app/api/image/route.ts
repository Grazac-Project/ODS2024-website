import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

export const GET = async () => {
  try {
    const results = (await cloudinary.v2.search
      .expression("resource_type:image")
      .sort_by("created_at", "asc")
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
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
      })
    );
  }
};

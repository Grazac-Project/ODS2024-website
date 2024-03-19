import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/types";

type Params = {
  folderName: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const folderName = context.params.folderName;

  try {
    const results = (await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${folderName}`)
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
  } catch (e: any) {}
}

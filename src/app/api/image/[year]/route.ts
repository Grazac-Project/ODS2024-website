import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { SearchResult } from "@/types";
import { decryptString } from "@/utils";

type Params = {
  folderName: string;
};
export async function GET(req: Request, context: { params: Params }) {
  const folderName = context.params.folderName;
  const dec = decryptString(folderName);
  console.log(dec);

  try {
    const results = (await cloudinary.v2.search
      .expression(`resource_type:image AND folder=${dec!}`)
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
};



import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { Folder, SearchResult } from "@/types";

export const GET = async () => {
  try {
    const { folders } = (await cloudinary.v2.api.sub_folders(
      "ODS CONTENT"
    )) as {
      folders: Folder[];
    };

    return new NextResponse(
      JSON.stringify({
        folders,
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

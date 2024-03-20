"use server";

import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

export const results = (await cloudinary.v2.search
  .expression("resource_type:image")
  .sort_by("created_at", "desc")
  .max_results(400)
  .execute()) as { resources: SearchResult[] };

import { NextResponse } from "next/server";
import { primsa } from "@/utils/connect";

type Params = {
  id: string;
};

export async function POST(req: Request, context: { params: Params }) {
    
}

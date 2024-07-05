import { type NextRequest, NextResponse } from "next/server";

export const revalidate = 300;

export const GET = async (req: NextRequest) => {
    const url = new URL(req.url, "http://localhost:3000");
    console.log(`GET ${url.pathname}`);

    return NextResponse.json({ message: "Hello, World!" });
};

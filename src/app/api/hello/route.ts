import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
    console.log("GET /api/hello");

    return NextResponse.json({ message: "Hello, World!" });
};

import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    console.log("POST /api/echo");

    const reqHeaders = headers();
    const contentType = reqHeaders.get("content-type");
    if (contentType !== "application/json") {
        return NextResponse.json({ message: "Invalid Content-Type" }, { status: 400 });
    }

    try {
        const body = await req.json();
        return NextResponse.json(body);
    } catch (error) {
        return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
    }
};

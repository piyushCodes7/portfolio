import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Try to save to DB — graceful fallback if Prisma not fully set up
    try {
      const { prisma } = await import("@/lib/db");
      await prisma.contactMessage.create({
        data: { name, email, subject, message },
      });
    } catch (dbError) {
      // DB not set up in this env — log and continue
      console.warn("DB save skipped:", dbError);
    }

    // Log to server console regardless
    console.log("📬 New contact message:", { name, email, subject, message });

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

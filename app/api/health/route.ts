import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`SELECT NOW() as time`;
    return NextResponse.json({ ok: true, time: result[0].time });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: String(error) },
      { status: 500 }
    );
  }
}

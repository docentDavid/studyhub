import { sql } from "@/lib/db";

export async function GET() {
  const result = await sql`
    SELECT NOW() as current_time
  `;

  return Response.json(result.rows[0]);
}

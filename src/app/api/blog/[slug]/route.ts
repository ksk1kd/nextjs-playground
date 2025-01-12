import type { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const url = request.nextUrl;
  const slug = (await params).slug;
  return Response.json({ url, slug });
}

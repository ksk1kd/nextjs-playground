import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  if (path) {
    revalidatePath(path);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  const tag = request.nextUrl.searchParams.get("tag");
  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
  });
}

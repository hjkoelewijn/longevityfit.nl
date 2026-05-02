import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/onboarding/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/auth/:path*",
  ],
};

// proxy.ts
import { updateSession } from "@/lib/supabase/middleware";
import type { NextFetchEvent, NextRequest } from "next/server";

export const proxy = {
  async rewrite(request: NextRequest, event: NextFetchEvent) {
    // 👇 Same logic you had in your middleware
    return await updateSession(request);
  },

  // 👇 Use the same matcher config as before
  config: {
    matcher: [
      "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
  },
};

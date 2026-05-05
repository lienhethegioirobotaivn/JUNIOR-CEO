import { NextRequest, NextResponse } from "next/server";

export function mrstranMiddleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl;

  if (hostname === "mrstran.juniorceo.edu.vn") {
    if (url.pathname === "/") {
      return NextResponse.redirect(new URL("/landing", request.url));
    }

    if (!url.pathname.startsWith("/landing")) {
      return NextResponse.redirect(new URL("/landing", request.url));
    }
  }

  return NextResponse.next();
}

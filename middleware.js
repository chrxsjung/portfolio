import { NextResponse } from "next/server";

const LEGACY = {
  "/about": "/#about",
  "/contact": "/#contact",
  "/projects": "/#projects",
  "/work": "/#work",
};

export function middleware(request) {
  const dest = LEGACY[request.nextUrl.pathname];
  if (dest) {
    return NextResponse.redirect(new URL(dest, request.url));
  }
}

export const config = {
  matcher: ["/about", "/contact", "/projects", "/work"],
};

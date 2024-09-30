import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/casques") {
    return NextResponse.redirect(new URL("/casques/index", request.url));
  } else if (request.nextUrl.pathname === "/lunettes") {
    return NextResponse.redirect(new URL("/lunettes/index", request.url));
  } else if (request.nextUrl.pathname === "/chaussures") {
    return NextResponse.redirect(new URL("/chaussures/index", request.url));
  } else if (request.nextUrl.pathname === "/vetements") {
    return NextResponse.redirect(new URL("/vetements/index", request.url));
  }
}

export const config = {
  matcher: [
    "/casques",
    "/casques/index",
    "/lunettes",
    "/lunettes/index",
    "/chaussures",
    "/chaussures/index",
    "/vetements",
    "/vetements/index",
  ],
};

import { NextRequest, NextResponse } from "next/server";

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const pathname = nextUrl.pathname;
  // console.log("pathname", pathname, req.auth);

  if (pathname.startsWith("/admin")) {
    if (isAuthenticated) {
      if (req?.auth?.user.role === "admin") {
        console.log("session admin", req.auth, isAuthenticated);

        return NextResponse.next();
        //
      } else {
        // console.log("session", session);
        return NextResponse.redirect(
          new URL("/auth/login?type=admin", nextUrl)
        );
      }
    } else {
      return NextResponse.redirect(new URL("/auth/login?type=admin", nextUrl));
    }
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};

import { NextResponse, type NextRequest } from "next/server";

import { auth } from "@/lib/auth";

const guestRoutes = ["/login", "/register"];
const loggedInRoutes = ["/profile"];
const adminRoutes = ["/dashboard"];

export default async function authMiddleware(request: NextRequest) {
  const session = await auth();
  const currentRoute = request.nextUrl.pathname;

  const isGuestRoute = guestRoutes.includes(currentRoute);
  const isAdminRoute = adminRoutes.includes(currentRoute);
  const isLoggedInRoute = loggedInRoutes.includes(currentRoute);

  if (!session && isLoggedInRoute) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (session && isGuestRoute) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isAdminRoute && (!session || session.user.role !== "admin")) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
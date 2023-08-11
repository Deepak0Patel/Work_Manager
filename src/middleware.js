import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware");

  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  // If the user doesn't have an authToken and is trying to access any page, redirect to login
  if (!authToken) {
    console.log("No authToken, redirecting to login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user has an authToken, prevent access to login and signup
  if (
    authToken &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signup")
  ) {
    console.log(
      "User with authToken trying to access login/signup, redirecting to profile"
    );
    return NextResponse.redirect(new URL("/profile/user", request.url));
  }
}
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ],
};

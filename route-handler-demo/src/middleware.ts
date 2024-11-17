import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
   // method one: using the config
   // return NextResponse.redirect(new URL("/", request.url));

   // method two: using conditionals
   // if (request.nextUrl.pathname === "/profile") {
   //    // return NextResponse.redirect(new URL("/hello", request.url));
   //    return NextResponse.rewrite(new URL("/hello", request.url)); // rewrites the route content to /hello
   // }

   const response = NextResponse.next();

   const themePreference = request.cookies.get("theme");
   if (!themePreference) {
      response.cookies.set("theme", "dark");
   }

   response.headers.set("custom-header", "custom-value");

   return response;
}

// export const config = {
//    matcher: "/profile",
// };

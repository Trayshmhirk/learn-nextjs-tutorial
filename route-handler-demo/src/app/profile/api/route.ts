import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
   const requestHeaders = new Headers(request.headers);
   const headerList = headers();

   (await cookies()).set("resultsPerPage", "20");
   console.log((await cookies()).get("resultsPerPage"));

   const theme = request.cookies.get("theme");
   console.log(theme);

   console.log(requestHeaders.get("Authorization"));
   console.log((await headerList).get("Authorization"));

   return new Response("<h1>Profile Data!</h1>", {
      headers: {
         "Content-Type": "text/html",
         "SET-Cookie": "theme=dark",
      },
   });
}

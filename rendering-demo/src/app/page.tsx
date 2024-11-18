import Link from "next/link";

export default function Home() {
   return (
      <div className="">
         <h1 className="text-2xl font-bold">Home page</h1>

         <div>
            <Link href="/dashboard" className="text-blue-300 underline">
               Dashboard
            </Link>
         </div>
      </div>
   );
}

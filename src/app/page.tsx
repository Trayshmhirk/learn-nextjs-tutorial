import Link from "next/link";

export default function Home() {
   return (
      <div className="p-4">
         <h1>Home Page</h1>

         <div className="flex flex-col gap-1 items-start">
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
         </div>
      </div>
   );
}

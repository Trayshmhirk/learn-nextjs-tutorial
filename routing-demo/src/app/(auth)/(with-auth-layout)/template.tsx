"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
   { name: "Register", href: "/register" },
   { name: "Login", href: "/login" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   const [input, setInput] = useState("");

   return (
      <div className="flex flex-col gap-3">
         <h2 className="text-lg font-medium">Signin/Signup layout</h2>

         <div>
            <input
               type="text"
               className="border border-gray-500 text-black rounded p-2"
               placeholder="Input text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
         </div>

         <div className="flex gap-3">
            {navlinks.map((link) => {
               const isActive = pathname.startsWith(link.href);
               return (
                  <Link
                     key={link.name}
                     href={link.href}
                     className={`${isActive ? "font-bold text-blue-700" : "text-blue-400"}`}
                  >
                     {link.name}
                  </Link>
               );
            })}
         </div>
         {children}
      </div>
   );
};

export default AuthLayout;

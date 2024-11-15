"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
   { name: "Register", href: "/register" },
   { name: "Login", href: "/login" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   return (
      <div className="flex flex-col gap-3">
         <h2 className="text-lg font-medium">Signin/Signup layout</h2>

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
         {children}
      </div>
   );
};

export default AuthLayout;

"use client";
import Link from "next/link";
import UserMenu from "./user-menu";
import {} from "@repo/ui";
import ThemeToggle from "@repo/ui/components/theme-toggle";

export default function Header() {
   const links = [
      { to: "/", label: "Home" },
      { to: "/dashboard", label: "Dashboard" },
   ] as const;

   return (
      <div>
         <div className="flex flex-row items-center justify-between px-2 py-1">
            <nav className="flex gap-4 text-lg">
               {links.map(({ to, label }) => {
                  return (
                     <Link key={to} href={to}>
                        {label}
                     </Link>
                  );
               })}
            </nav>
            <div className="flex items-center gap-2">
               <ThemeToggle />
               <UserMenu />
            </div>
         </div>
         <hr />
      </div>
   );
}

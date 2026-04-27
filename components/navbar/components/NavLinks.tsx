"use client";

import { menuItems } from "@/components/navbar/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center flex-wrap justify-center gap-x-6 gap-y-4 px-4">
      {menuItems.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link
            key={item.name}
            href={item.link}
            className={`text-white hover:text-yellow-400 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-102 whitespace-nowrap ${
              isActive ? "text-yellow-400" : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

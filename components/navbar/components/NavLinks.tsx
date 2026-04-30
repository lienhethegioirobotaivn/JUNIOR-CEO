"use client";

import { NavbarLink } from "@/services/navbar-service";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  links: NavbarLink[];
}

export function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  if (!links || links.length === 0) return null;

  return (
    <div className="hidden lg:flex items-center flex-wrap justify-center gap-x-6 gap-y-4 px-4">
      {links.map((item, index) => {
        const isActive = pathname === item.endpoint;

        return (
          <Link
            key={`${item.label}-${index}`}
            href={item.endpoint}
            className={`text-white hover:text-[#D4AF37] text-sm font-medium transition-all duration-200 ease-in-out hover:scale-102 whitespace-nowrap ${isActive ? "text-[#D4AF37]! font-bold" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

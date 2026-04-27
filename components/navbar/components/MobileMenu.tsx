"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/components/navbar/Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <div
      className={`absolute top-full left-0 w-full bg-black/95 border-b border-yellow-700 flex flex-col p-4 gap-2 lg:hidden transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-64px)]
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {menuItems.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link
            key={item.name}
            href={item.link}
            className={`text-white hover:text-yellow-400 py-3 px-2 border-b border-gray-900 transition-colors ${
              isActive ? "text-yellow-400" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        );
      })}

      <Link href="/dang-ky" onClick={() => setIsOpen(false)}>
        <button className="w-full bg-linear-to-r from-yellow-600 to-yellow-400 px-4 py-2 mt-2 rounded-md font-semibold text-black flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm cursor-pointer">
          <span>ĐĂNG KÝ NGAY</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  );
}

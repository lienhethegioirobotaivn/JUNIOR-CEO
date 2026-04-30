"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { NavbarButtons, NavbarLink } from "@/services/navbar-service";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  links: NavbarLink[];
  buttons: NavbarButtons[];
}

export function MobileMenu({
  isOpen,
  setIsOpen,
  links,
  buttons,
}: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <div
      className={`absolute top-full left-0 w-full bg-black/95 border-b border-yellow-700 flex flex-col p-4 gap-2 lg:hidden transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-64px)]
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {links.map((item, index) => {
        const isActive = pathname === item.endpoint;

        return (
          <Link
            key={`${item.label}-${index}`}
            href={item.endpoint}
            className={`text-white hover:text-yellow-400 py-3 px-2 border-b border-gray-900 transition-colors flex items-center justify-between ${
              isActive ? "text-[#D4AF37]!" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            <span>{item.label}</span>
          </Link>
        );
      })}

      {buttons.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.endpoint}
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full bg-linear-to-r from-[#d4b075] to-[#c59c5d] px-4 py-2 mt-2 rounded-md font-semibold text-black flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm cursor-pointer">
              <p>{item.label}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
}

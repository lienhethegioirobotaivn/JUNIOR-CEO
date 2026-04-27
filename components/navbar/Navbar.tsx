"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const menuItems = [
  { name: "TRANG CHỦ", link: "/" },
  { name: "CHƯƠNG TRÌNH", link: "/chuong-trinh" },
  { name: "GIẢNG VIÊN", link: "/giang-vien" },
  { name: "HỌC PHÍ", link: "/hoc-phi" },
  { name: "PHỤ HUYNH NÓI GÌ", link: "/phu-huynh" },
  { name: "FAQ", link: "/faq" },
  { name: "LIÊN HỆ", link: "/lien-he" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-black px-4 md:px-8 py-2 lg:py-4 xl:py-0 flex items-center justify-between border-b border-yellow-700 z-50">
      {/* Left side */}
      <div className="shrink-0 flex items-center">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={"/navbar/Logo Junior CEO.png"}
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-auto object-contain transition-all duration-300"
          />
        </Link>
      </div>

      {/* Middle side */}
      <div className="hidden lg:flex items-center flex-wrap justify-center gap-x-6 gap-y-4 px-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`text-white hover:text-yellow-400 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-102 whitespace-nowrap ${isActive ? "text-yellow-400" : ""}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 shrink-0">
        <Link href="/dang-ky">
          <button className="hidden md:flex bg-linear-to-r from-[#d4b075] to-[#c59c5d] px-4 py-2 rounded-md font-semibold text-black items-center gap-2 hover:opacity-90 text-xs md:text-sm whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
            <span>ĐĂNG KÝ NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>

        <button
          className="lg:hidden text-white p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 border-b border-yellow-700 flex flex-col p-4 gap-2 lg:hidden transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-64px)] ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {menuItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`text-white hover:text-yellow-400 py-3 px-2 border-b border-gray-900 transition-colors ${isActive ? "text-yellow-400" : ""}`}
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
    </nav>
  );
}

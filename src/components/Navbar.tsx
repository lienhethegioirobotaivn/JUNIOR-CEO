import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/assets/navbar/Logo Junior CEO.png";

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

  return (
    <nav className="fixed w-full h-18 bg-black px-4 md:px-8 py-1 flex items-center justify-between border-b border-yellow-700 z-50">
      <div className="h-full shrink-0">
        <Link to={"/"} className="block h-full select-none">
          <img src={Logo} alt="Logo" className="h-full w-auto object-contain" />
        </Link>
      </div>

      <div className="hidden lg:flex items-center flex-wrap justify-center gap-6 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              `text-white hover:text-yellow-500 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-102 whitespace-nowrap ${isActive ? "text-yellow-500" : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <Link to={"/dang-ky"}>
          <button className="hidden md:flex bg-linear-to-r from-yellow-600 to-yellow-400 px-4 py-2 rounded-md font-semibold text-black items-center gap-2 hover:opacity-90 text-xs md:text-sm whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
            <span>ĐĂNG KÝ NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/95 border-b border-yellow-700 flex flex-col p-4 gap-2 lg:hidden transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-64px)] ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              `text-white hover:text-yellow-500 py-3 px-2 border-b border-gray-900 transition-colors ${isActive ? "text-yellow-500" : ""}`
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            {item.name}
          </NavLink>
        ))}
        <Link to={"/dang-ky"}>
          <button
            className="w-full bg-linear-to-r from-yellow-600 to-yellow-400 px-4 py-2 mt-2 rounded-md font-semibold text-black flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>ĐĂNG KÝ NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </nav>
  );
}

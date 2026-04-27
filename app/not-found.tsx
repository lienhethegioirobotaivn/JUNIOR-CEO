import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 pt-10 mt-14 lg:mt-0 mb-6 lg:mb-0">
      <div className="text-center space-y-6">
        <AlertTriangle className="size-24 sm:size-32 text-[#d4b075] mx-auto" />

        <h1 className="text-6xl sm:text-7xl font-bold bg-linear-to-b from-[#d4b075] to-[#b38b4d] bg-clip-text text-transparent">
          404 NOT FOUND
        </h1>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold">TRANG KHÔNG TỒN TẠI</h2>
          <p className="text-gray-400">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di
            chuyển.
          </p>
        </div>

        <Link href="/">
          <button className="flex items-center gap-2 mx-auto bg-linear-to-r from-[#d4b075] to-[#c59c5d] px-8 py-3 rounded-md font-semibold text-black hover:opacity-90 transition-all duration-200 hover:scale-105 cursor-pointer">
            <ArrowLeft size={20} />
            QUAY VỀ TRANG CHỦ
          </button>
        </Link>
      </div>
    </section>
  );
}

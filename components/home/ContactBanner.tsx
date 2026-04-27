import {
  MessageCircleMore,
  MoveRight,
  Phone,
  Globe,
  MessageSquareText,
} from "lucide-react";

export function ContactBanner() {
  return (
    <section className="flex flex-col lg:flex-row w-full overflow-hidden text-white">
      {/* Left side */}
      <div
        className="w-full lg:w-4/7 flex items-center justify-center lg:justify-end p-6 bg-cover bg-center"
        style={{ backgroundImage: `url('/home/LeftContactBannerImg.png')` }}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="text-center space-y-2 mb-1">
            <h3 className="text-[#f5d08c] text-3xl font-bold tracking-wider">
              ĐĂNG KÝ NGAY HÔM NAY
            </h3>
            <p className="text-gray-200">40 suất duy nhất cho mỗi khóa học</p>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-linear-to-r from-[#c4985b] to-[#d9b47e] text-[#2b231a] transition-all duration-200 ease-in-out hover:scale-105 px-6 py-2 rounded font-bold cursor-pointer">
              ĐĂNG KÝ NGAY <MoveRight size={18} />
            </button>
            <button className="flex items-center gap-2 border border-[#d4a76a] text-[#d4a76a] px-4 py-2 rounded font-bold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
              NHẬN TƯ VẤN 1:1 <MessageCircleMore size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative items-center">
        <div className="absolute inset-y-0 w-px bg-linear-to-b from-transparent via-[#d4a76a] to-transparent hidden lg:block" />
      </div>

      {/* Right side */}
      <div
        className="w-full lg:w-3/7 flex flex-col justify-center gap-4 p-8 lg:px-6 bg-cover bg-center border-l border-white/20"
        style={{ backgroundImage: `url('/home/RightContactBannerImg.png')` }}
      >
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-yellow-600" />
          <span className="text-white/95">0815 66 55 58</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe size={20} className="text-yellow-600" />
          <span className="text-white/95">juniorceo.edu.vn</span>
        </div>
        <div className="flex items-center gap-3">
          <MessageSquareText size={20} className="text-yellow-600" />
          <span className="text-white/95">Zalo OA: Junior CEO</span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { CheckCircle2, UserCircle } from "lucide-react";

const instructors = [
  { name: "Mã Thanh Danh", role: "CEO SIHUB" },
  { name: "Võ Thị Mỹ Duyên", role: "COO SIHUB" },
  { name: "Nguyễn Anh Toản", role: "CEO ASK Academy" },
];

export function Highlight() {
  return (
    <section className="bg-black py-8 sm:pt-2 lg:py-8 text-white">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-4 mb-4 text-xl sm:text-3xl lg:text-lg font-semibold lg:font-normal">
          <span>Kết thúc bằng</span>
          <div className="h-full bg-linear-to-b from-[#d4af37] to-[#b8860b] px-2 lg:px-6 py-1 lg:py-1 rounded-md font-bold text-black">
            PITCHING DAY
          </div>
          <span className="text-center">Gọi vốn trước hội đồng doanh nhân</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
          <div className="lg:col-span-2 flex border border-yellow-700/50 hover:border-yellow-500 rounded-2xl bg-gray-900/50 overflow-hidden transition-all duration-200 ease-in-out hover:scale-103">
            <div className="w-2/5 relative">
              <Image
                src={"/home/PitchingDayImg.png"}
                alt="PitchingDayImg"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </div>
            <div className="w-3/5 p-4 sm:p-6 lg:p-4">
              <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
                PITCHING DAY
              </h3>
              <p className="text-sm sm:text-lg lg:text-sm font-medium text-white/95 mb-3">
                Sân khấu tỏa sáng
              </p>
              <p className="text-sm sm:text-lg lg:text-sm text-gray-300">
                Trình bày - Gọi vốn - Thuyết phục hội đồng doanh nhân
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 border border-yellow-700/50 hover:border-yellow-500 p-4 sm:p-6 lg:p-4 rounded-2xl bg-gray-900/50 transition-all duration-200 ease-in-out hover:scale-103">
            <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-4">
              KHÁC BIỆT CỐT LÕI
            </h3>
            <ul className="space-y-3">
              {[
                "Vận hành thật",
                "Bán sản phẩm thật",
                "Có doanh thu & báo cáo",
                "Dự án tạo tác động xã hội",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm sm:text-lg lg:text-sm text-gray-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-yellow-600 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex border border-yellow-700/50 hover:border-yellow-500 rounded-2xl bg-gray-900/50 overflow-hidden transition-all duration-200 ease-in-out hover:scale-103">
            <div className="w-2/3 p-4 sm:p-6 lg:p-4">
              <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
                CHỨNG NHẬN MINI MBA
              </h3>
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#D4AF37] to-[#F1C40F] text-sm sm:text-lg lg:text-sm mb-3">
                GLOBAL YOUNG FOUNDER
              </p>
              <ul className="space-y-3">
                {[
                  "Tăng uy tín hồ sơ học bổng",
                  "Nâng cao năng lực cá nhân",
                  "Khẳng định tư duy lãnh đạo",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm sm:text-lg lg:text-sm text-gray-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-yellow-600 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/3 pr-1 pb-1 relative">
              <Image
                src={"/home/ChungNhanMiniMBA.png"}
                alt="ChungNhanMiniMBA"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 33vw, 15vw"
              />
            </div>
          </div>

          <div className="lg:col-span-3 border border-yellow-700/50 hover:border-yellow-500 p-4 sm:p-6 lg:p-4 rounded-2xl bg-gray-900/50 transition-all duration-200 ease-in-out hover:scale-103">
            <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
              ĐỘI NGŨ GIẢNG VIÊN
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-lg lg:text-sm">
              Doanh nhân & chuyên gia thực chiến
            </p>
            <div className="grid grid-cols-3 gap-3">
              {instructors.map((person, i) => (
                <div key={i} className="text-center">
                  <div className="size-16 sm:size-28 lg:size-16 mx-auto bg-gray-700 rounded-full mb-2 flex items-center justify-center">
                    <UserCircle size={40} className="text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-lg lg:text-xs text-[#D4AF37] font-bold">
                      {person.name}
                    </p>
                    <p className="text-[10px] sm:text-[13px] lg:text-[10px] text-gray-400">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

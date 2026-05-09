import Image from "next/image";
import React from "react";

const MODULES = [
  { title: "Tư duy lãnh đạo & Thành công cá nhân", icon: "🏆" },
  { title: "Kinh tế học dành cho nhà lãnh đạo trẻ", icon: "📈" },
  { title: "Marketing & Xây dựng thương hiệu", icon: "🚀" },
  { title: "Tài chính thông minh", icon: "💰" },
  { title: "Quản trị vận hành", icon: "⚙️" },
  { title: "Khởi nghiệp & Đổi mới sáng tạo", icon: "💡" },
  { title: "Kỹ năng thuyết trình & Đàm phán", icon: "🎤" },
  { title: "Dự án tốt nghiệp Mini MBA", icon: "🎓" },
];

const RECOGNITIONS = [
  {
    title: "JUNIOR CEO BUSINESS SCHOOL",
    desc: "Được bảo chứng bởi chương trình giáo dục doanh nhân trẻ hàng đầu Việt Nam",
    icon: "🛡️",
  },
  {
    title: "CHUẨN ĐẦU RA QUỐC TẾ",
    desc: "Nội dung chương trình bám sát các mô hình Mini MBA quốc tế",
    icon: "🌐",
  },
  {
    title: "GIÁ TRỊ DÀI HẠN",
    desc: "Là lợi thế khi xét tuyển, học bổng và định hướng du học",
    icon: "🏛️",
  },
];

export function ProgramOverview() {
  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-yellow-900/30 rounded-2xl py-6 shadow-2xl">
          <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-2xl font-bold text-center uppercase mb-2">
            Nội dung chương trình
          </h2>
          <p className="text-center text-gray-400 text-sm mb-6 uppercase">
            8 Module - 48 giờ học
          </p>
          <div className="space-y-2 px-4">
            {MODULES.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-linear-to-r from-[#1a1a1a] to-transparent lg:px-4 py-2 rounded-lg border border-yellow-900/10"
              >
                <div className="flex items-center justify-center text-xl w-8 shrink-0">
                  {item.icon}
                </div>

                <span className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-base font-bold w-6 shrink-0">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <span className="text-gray-300 text-sm font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111] border border-yellow-900/30 rounded-2xl py-6 flex flex-col items-center shadow-2xl">
          <div>
            <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-2xl font-bold text-center uppercase mb-2">
              Chứng nhận mẫu
            </h2>
            <p className="text-center text-gray-400 text-sm">
              Thiết kế sang trọng - Chuẩn quốc tế
            </p>
          </div>
          <div className="w-full h-fit rounded-xl overflow-hidden mt-2">
            <Image
              src="/chung-nhan/ChungNhan.png"
              alt="Chung Nhan Image"
              width={500}
              height={700}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-[#111] border border-yellow-900/30 rounded-2xl p-6 shadow-2xl">
          <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-2xl font-bold text-center uppercase mb-2">
            Công nhận & Uy tín
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            Chứng nhận Mini MBA được công nhận bởi
          </p>
          <div className="space-y-10">
            {RECOGNITIONS.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#111] flex items-center justify-center text-3xl border border-yellow-900/30 shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)]">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent font-bold text-base tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

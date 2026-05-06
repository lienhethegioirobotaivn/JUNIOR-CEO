"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Image from "next/image";

interface Student {
  name: string;
  description: string;
  tag: string;
  achievements: string[];
  image: string;
}

const students: Student[] = [
  {
    name: "DANH KHÔI",
    description: "Con trai ông Mã Thanh Danh\nPhó Tổng Tập đoàn KIDO",
    tag: "HỌC VIÊN NHÓM ELITE",
    achievements: [
      "Top 1 Dự án Xuất sắc - Business Pitching Day 2024",
      "Nhà sáng lập dự án 'KIDO Farm' Ứng dụng công nghệ vào nông nghiệp",
      "Tăng trưởng doanh thu 150% sau 3 tháng triển khai dự án",
    ],
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "ANH THƯ",
    description: "Con gái ông Nguyễn Hòa Bình\nShark - Nhà đầu tư",
    tag: "HỌC VIÊN NHÓM PREMIUM",
    achievements: [
      "Giải Nhất cuộc thi Marketing Challenge 2024",
      "Tự xây dựng thương hiệu thời trang bền vững 'GreenStyle'",
      "Gọi vốn thành công 200 triệu đồng cho dự án từ nhà đầu tư",
    ],
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "MINH KHANG",
    description: "Con trai ông Trần Lệ Nguyên\nCEO - PNJ",
    tag: "HỌC VIÊN NHÓM ELITE",
    achievements: [
      "Top 3 Business Strategy Competition 2024",
      "Dự án 'Smart Jewelry Box' đạt 1.000+ đơn hàng",
      "Được vinh danh 'Học viên có tư duy chiến lược xuất sắc'",
    ],
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "BẢO NGỌC",
    description: "Con gái bà Nguyễn Phi Vân\nChủ tịch Go Global Holdings",
    tag: "HỌC VIÊN NHÓM STANDARD",
    achievements: [
      "Giải Nhì cuộc thi Social Impact Project 2024",
      "Sáng lập dự án 'Books for Future' - Thư viện sách cho trẻ em vùng cao",
      "Tổ chức 3 sự kiện cộng đồng với hơn 500 người tham gia",
    ],
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "QUANG MINH",
    description: "Con trai ông Lê Hồng Minh\nNhà sáng lập VNG",
    tag: "HỌC VIÊN NHÓM PREMIUM",
    achievements: [
      "Top 5 Dự án Công nghệ sáng tạo 2024",
      "Phát triển ứng dụng học tập 'MindHub' với 10.000+ người dùng",
      "Được mời chia sẻ tại Vietnam Young Innovators Forum",
    ],
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
];

export function OutStandingStudents() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1280) setItemsPerView(3);
      else setItemsPerView(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, students.length - itemsPerView);

  const prev = () => setIndex((p) => (p <= 0 ? maxIndex : p - 1));
  const next = () => setIndex((p) => (p >= maxIndex ? 0 : p + 1));

  return (
    <section className="pt-12 px-6 bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-6 relative">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="hidden md:block h-px w-50 bg-linear-to-r from-transparent via-[#f3d9a9]/50 to-[#f3d9a9]" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase bg-linear-to-b from-[#f3d9a9] via-[#d4b06d] to-[#a67c37] bg-clip-text text-transparent">
              CÁC HỌC VIÊN TIÊU BIỂU
            </h2>
            <div className="hidden md:block h-px w-50 bg-linear-to-l from-transparent via-[#f3d9a9]/50 to-[#f3d9a9]" />
          </div>
          <p className="text-gray-400 text-sm md:text-base mx-auto">
            Những bạn trẻ đã và đang tạo nên dấu ấn riêng trên hành trình trở
            thành nhà lãnh đạo tương lai.
          </p>
        </div>

        <div className="relative group px-7 lg:px-5">
          <button
            onClick={prev}
            className="absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 border border-[#c7a96b]/40 rounded-full text-[#c7a96b] bg-black/50 hover:bg-[#c7a96b] hover:text-black transition-all cursor-pointer backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * (100 / itemsPerView)}%)`,
              }}
            >
              {students.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2 transition-all duration-300"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="h-full mx-auto bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-[#c7a96b]/20 flex flex-col items-center group/card hover:border-[#c7a96b]/60 transition-colors">
                    <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden border border-[#c7a96b]/10 mb-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center w-full flex flex-col grow px-4 pb-4">
                      <h4 className="text-lg font-bold text-[#f3e2c3] mb-1 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed mb-2 whitespace-pre-line">
                        {item.description}
                      </p>

                      <div className="inline-block mx-auto px-2 py-1.5 rounded-md bg-linear-to-r from-[#8a6b3f] via-[#c7a96b] to-[#8a6b3f] text-black text-[10px] font-bold mb-4 shadow-[0_0_15px_rgba(199,169,107,0.3)] uppercase">
                        {item.tag}
                      </div>

                      <ul className="text-left space-y-3 mt-auto">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 group/item"
                          >
                            <Check
                              size={12}
                              className="text-[#c7a96b] mt-1 shrink-0 group-hover/item:scale-125 transition-transform"
                            />
                            <span className="text-[10px] text-gray-300 leading-snug">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 border border-[#c7a96b]/40 rounded-full text-[#c7a96b] bg-black/50 hover:bg-[#c7a96b] hover:text-black transition-all cursor-pointer backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

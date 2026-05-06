"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Chị Hương Giang",
    role: "Doanh nhân",
    location: "TP. Hồ Chí Minh",
    content:
      "Chương trình không chỉ dạy kiến thức kinh doanh, mà còn giúp con tôi thay đổi tư duy, tự tin hơn rất nhiều. Sau 3 tháng, tôi thấy con chủ động đặt mục tiêu và lên kế hoạch rõ ràng.",
    tag: "PHỤ HUYNH HỌC VIÊN NHÓM ELITE",
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "Anh Quốc Bảo",
    role: "CEO - Lĩnh vực Logistics",
    location: "Hà Nội",
    content:
      "Tôi ấn tượng với cách Junior CEO đào tạo thực chiến. Con tôi đã tự xây dựng dự án kinh doanh nhỏ và thuyết trình rất chuyên nghiệp trước nhà đầu tư nhí.",
    tag: "PHỤ HUYNH HỌC VIÊN NHÓM PREMIUM",
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "Chị Thu Thủy",
    role: "Giám đốc Marketing",
    location: "Đà Nẵng",
    content:
      "Môi trường học tập truyền cảm hứng, giảng viên tận tâm và chương trình bài bản. Con tôi hào hứng đi học mỗi tuần và luôn muốn áp dụng ngay những gì đã học.",
    tag: "PHỤ HUYNH HỌC VIÊN NHÓM STANDARD",
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "Anh Minh Đức",
    role: "Founder - Lĩnh vực F&B",
    location: "Hải Phòng",
    content:
      "Junior CEO giúp con phát triển kỹ năng lãnh đạo sớm, biết lắng nghe, phân tích và đưa ra quyết định. Đó là hành trang vô giá cho tương lai.",
    tag: "PHỤ HUYNH HỌC VIÊN NHÓM ELITE",
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "Chị Lan Anh",
    role: "Nội trợ",
    location: "Cần Thơ",
    content:
      "Tôi không ngờ con mình lại có thể thuyết trình tự tin đến vậy. Chương trình thực sự giúp con bước ra khỏi vùng an toàn.",
    tag: "PHỤ HUYNH HỌC VIÊN NHÓM STANDARD",
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
  {
    name: "Anh Hoàng Nam",
    role: "CEO - Lĩnh vực Công nghệ",
    location: "TP. Hồ Chí Minh",
    content:
      "Đầu tư cho con học Junior CEO là quyết định đúng đắn nhất. Con không chỉ học kiến thức mà còn học được cách làm chủ cuộc đời.",
    tag: "PHỤ HUYNH HỌC VIÊN NHÓM PREMIUM",
    image: "/phu-huynh-noi-gi/Avatar.png",
  },
];

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <div className="relative p-4 lg:p-8 rounded-2xl bg-[#0f0f0f] border border-[#222] hover:border-[#f3d9a9]/30 transition-all duration-300 flex flex-col h-full group">
    <Quote className="hidden lg:block absolute top-6 right-6 text-[#f3d9a9] opacity-20 w-6 h-6 group-hover:rotate-12 transition-transform" />

    <div className="flex gap-2 lg:gap-4 mb-4">
      <div className="relative size-20 rounded-full overflow-hidden border-2 border-[#f3d9a9]/40 p-0.5">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div>
        <h3 className="text-[#f3d9a9] font-bold text-lg leading-tight">
          {item.name}
        </h3>
        <p className="text-gray-300 text-sm mt-0.5">{item.role}</p>
        <p className="text-gray-500 text-xs mb-1">{item.location}</p>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#f3d9a9] text-[#f3d9a9]" />
          ))}
        </div>
      </div>
    </div>

    <p className="text-gray-400 italic text-[15px] leading-relaxed mb-4 grow">
      &ldquo;{item.content}&rdquo;
    </p>

    <div className="inline-block bg-[#1a160f] border border-[#f3d9a9]/20 px-4 py-1.5 rounded text-[10px] text-[#f3d9a9] font-bold tracking-widest w-fit uppercase">
      {item.tag}
    </div>
  </div>
);

export default function TestimonialSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-[#050505] pt-12 px-4 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-7">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="hidden md:block h-px w-35 bg-linear-to-r from-transparent via-[#f3d9a9]/50 to-[#f3d9a9]" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase bg-linear-to-b from-[#f3d9a9] via-[#d4b06d] to-[#a67c37] bg-clip-text text-transparent">
              Cảm nhận thực tế từ phụ huynh
            </h2>
            <div className="hidden md:block h-px w-35 bg-linear-to-l from-transparent via-[#f3d9a9]/50 to-[#f3d9a9]" />
          </div>
          <p className="text-gray-300 text-sm md:text-base tracking-wide">
            Mỗi câu chuyện là một minh chứng cho sự thay đổi tích cực của con.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, visibleCount).map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>

        {visibleCount < testimonials.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleShowMore}
              className="group flex items-center gap-3 px-10 py-4 rounded-xl bg-linear-to-b from-[#f3d9a9] via-[#d4b06d] to-[#a67c37] text-black font-bold uppercase text-xs hover:brightness-110 hover:shadow-[0_0_20px_rgba(243,217,169,0.3)] transition-all duration-300 cursor-pointer"
            >
              Xem thêm câu chuyện
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

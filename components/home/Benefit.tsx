import Image from "next/image";
import { Target, Lightbulb, Zap, Award } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Khởi dậy",
    description: "Tố chất & đam mê kinh doanh",
  },
  {
    icon: Lightbulb,
    title: "Trải nghiệm",
    description: "Vận hành doanh nghiệp mini",
  },
  {
    icon: Zap,
    title: "Ứng dụng AI",
    description: "Tạo sinh trong kinh doanh",
  },
  {
    icon: Award,
    title: "Tạo sản phẩm thật",
    description: "Doanh thu thật",
  },
];

export function Benefit() {
  return (
    <section className="bg-black py-4">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row border border-[#333] rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl">
          <div className="flex flex-col py-4 w-full">
            <h2 className="text-white text-center text-3xl sm:text-3xl lg:text-3xl font-semibold mb-8 tracking-wide">
              CHƯƠNG TRÌNH MANG LẠI CHO CON
            </h2>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center text-center py-2 px-4 border-[#333] transition-all duration-200 ease-in-out hover:scale-104 ${index !== benefits.length - 1 ? "border-r" : ""}`}
                  >
                    <div className="mb-2 text-[#d4b075]">
                      <Icon className="size-8 sm:size-10 lg:size-8" />
                    </div>
                    <h3 className="text-white/90 font-semibold text-lg sm:text-xl lg:text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm lg:text-xs uppercase tracking-wider font-medium">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-[35%] w-full h-75 lg:h-auto overflow-hidden border-l border-[#333] relative">
            <Image
              src="/home/BenefitImg.png"
              alt="BenefitImg"
              fill
              sizes="100"
              className="object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

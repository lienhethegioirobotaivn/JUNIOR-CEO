import { BookOpen, Settings, Coins, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "HỌC THẬT",
    description: "Kiến thức sát với doanh nghiệp thực tế",
    icon: BookOpen,
  },
  {
    title: "LÀM THẬT",
    description: "Vận hành dự án từ A đến Z",
    icon: Settings,
  },
  {
    title: "KIẾM TIỀN THẬT",
    description: "Tạo doanh thu ngay trong quá trình học",
    icon: Coins,
  },
  {
    title: "DẪN DẮT TƯƠNG LAI",
    description: "Tư duy lãnh đạo - Tự tin - Sẵn sàng hội nhập",
    icon: ShieldCheck,
  },
];

export function FeatureBar() {
  return (
    <div className="bg-[#0a0a0a] border border-[#3d3326] rounded-2xl py-6 grid grid-cols-1 lg:grid-cols-4 justify-center items-center w-full mx-auto shadow-xl gap-3">
      {features.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={`flex items-center gap-4 px-6 transition-all duration-200 ease-in-out hover:scale-103 ${index !== features.length - 1 ? "border-r border-[#3d3326]" : ""} flex-1 min-w-62.5`}
          >
            <div className="text-[#d4b075]">
              <Icon
                className="size-11 sm:size-12.5 lg:size-15"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#e6c891] font-bold sm:text-2xl lg:text-lg tracking-wide">
                {item.title}
              </h3>
              <p className="text-[#a3a3a3] sm:text-xl lg:text-sm leading-tight mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

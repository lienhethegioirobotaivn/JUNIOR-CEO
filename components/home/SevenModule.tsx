import {
  TrendingUp,
  Search,
  Cpu,
  ShoppingCart,
  Users,
  BarChart3,
  Rocket,
} from "lucide-react";

const modules = [
  {
    id: "01",
    title: "Tư duy tài chính & kinh doanh",
    icon: <TrendingUp size={32} />,
  },
  {
    id: "02",
    title: "Nghiên cứu thị trường & ý tưởng",
    icon: <Search size={32} />,
  },
  { id: "03", title: "Ứng dụng AI trong kinh doanh", icon: <Cpu size={32} /> },
  { id: "04", title: "Bán hàng & Marketing", icon: <ShoppingCart size={32} /> },
  { id: "05", title: "Quản lý vận hành", icon: <Users size={32} /> },
  { id: "06", title: "Chiến lược phát triển", icon: <BarChart3 size={32} /> },
  { id: "07", title: "Xây dựng dự án thực tế", icon: <Rocket size={32} /> },
];

export function SevenModule() {
  return (
    <section className="bg-[#0a0a0a] border border-[#3d3326] rounded-2xl py-6 px-4">
      <div className="mx-auto">
        <h2 className="text-white text-center text-2xl sm:text-3xl lg:text-3xl font-semibold mb-8 uppercase tracking-wide">
          7 Modules vận hành doanh nghiệp thật
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {modules.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group transition-all duration-200 ease-in-out hover:scale-104"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#d4b075] flex items-center justify-center text-[#d4b075] mb-6 transition-all duration-300 group-hover:bg-[#d4b075] group-hover:text-black">
                {item.icon}

                <span className="absolute -bottom-4 bg-black px-2 text-[#d4b075] font-bold text-lg">
                  {item.id}
                </span>
              </div>

              <h3 className="text-white/80 text-sm sm:text-[16px] lg:text-md font-medium leading-tight mt-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Brain, Check, Settings, Trophy } from "lucide-react";

const roadmapData = [
  {
    month: "THÁNG 1",
    title: "TƯ DUY",
    icon: <Brain size={48} />,
    tasks: [
      "Tư duy doanh nhân",
      "Tài chính cá nhân & doanh nghiệp",
      "Ứng dụng AI cơ bản",
    ],
  },
  {
    month: "THÁNG 2",
    title: "ỨNG DỤNG",
    icon: <Settings size={48} />,
    tasks: ["Xây dựng sản phẩm", "Quản lý nhân sự", "Logistics & vận hành"],
  },
  {
    month: "THÁNG 3",
    title: "THỰC CHIẾN",
    icon: <Trophy size={48} />,
    tasks: ["Bán hàng", "Marketing", "Pitching gọi vốn"],
  },
];

export function Roadmap() {
  return (
    <section className="pt-6 sm:mt-5">
      <div className="mx-auto">
        <h2 className="text-white text-center text-2xl sm:text-3xl font-semibold uppercase">
          Lộ trình 3 tháng: Học - Làm - Kiếm tiền
        </h2>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 lg:gap-4">
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-[#3d3326] rounded-2xl p-3 grid grid-cols-12 gap-1 hover:border-yellow-500 transition-all duration-200 ease-in-out hover:scale-103"
            >
              <div className="col-span-4 text-yellow-400 flex items-center justify-center">
                <div className="bg-yellow-500/10 p-4 sm:p-3 lg:p-5 rounded-full">
                  {item.icon}
                </div>
              </div>

              <div className="col-span-8 pl-1 lg:pl-0">
                <h3 className="text-[#d4b075] font-semibold text-xl mb-2">
                  {item.month}: {item.title}
                </h3>

                <ul className="space-y-2">
                  {item.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-start gap-2 text-sm"
                    >
                      <span className="text-[#d4b075] mt-1">
                        <Check className="size-4" />
                      </span>
                      <span className="flex-1">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

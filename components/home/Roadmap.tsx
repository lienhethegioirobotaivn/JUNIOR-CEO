import { TrangChuData } from "@/services/trang-chu-service";

type RoadmapProps = Pick<
  TrangChuData["pageBy"]["trangchu"],
  "item31" | "item32" | "item33" | "item34"
>;

export function Roadmap({ item31, item32, item33, item34 }: RoadmapProps) {
  const roadmapData = [
    {
      icon: item32.icon,
      title: item32.label,
      tasks: item32.text,
    },
    {
      icon: item33.icon,
      title: item33.label,
      tasks: item33.text,
    },
    {
      icon: item34.icon,
      title: item34.label,
      tasks: item34.text,
    },
  ];

  return (
    <section className="pt-6 sm:mt-5">
      <div className="mx-auto">
        <h2 className="text-white/90 text-center text-2xl sm:text-3xl font-semibold uppercase">
          {item31}
        </h2>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 lg:gap-4">
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content border border-transparent relative rounded-2xl p-3 grid grid-cols-12 gap-1 shadow-[0_0_5px_rgba(245,210,122,0.5)] transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)]"
            >
              <div className="col-span-4 text-yellow-400 flex items-center justify-center">
                <div className="flex items-center justify-center w-25 h-25 bg-yellow-500/10 p-4 sm:p-3 lg:p-5 rounded-full">
                  <p className="text-5xl">{item.icon}</p>
                </div>
              </div>

              <div className="col-span-8 pl-1 lg:pl-0">
                <h3 className="text-[#d4b075] font-semibold text-xl mb-2">
                  {item.title}
                </h3>

                <div
                  className="text-white/80 space-y-12"
                  dangerouslySetInnerHTML={{ __html: item.tasks }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

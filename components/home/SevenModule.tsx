import { TrangChuData } from "@/services/trang-chu-service";

type SevenModuleProps = Pick<
  TrangChuData["pageBy"]["trangchu"],
  | "item23"
  | "item24"
  | "item25"
  | "item26"
  | "item27"
  | "item28"
  | "item29"
  | "item30"
>;

export function SevenModule({
  item23,
  item24,
  item25,
  item26,
  item27,
  item28,
  item29,
  item30,
}: SevenModuleProps) {
  const modules = [
    {
      icon: item24.icon,
      title: item24.text,
    },
    {
      icon: item25.icon,
      title: item25.text,
    },
    {
      icon: item26.icon,
      title: item26.text,
    },
    {
      icon: item27.icon,
      title: item27.text,
    },
    {
      icon: item28.icon,
      title: item28.text,
    },
    {
      icon: item29.icon,
      title: item29.text,
    },
    {
      icon: item30.icon,
      title: item30.text,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-2xl py-6 px-4">
      <div className="mx-auto">
        <h2 className="text-white/90 text-center text-2xl sm:text-3xl lg:text-3xl font-semibold mb-8 uppercase tracking-wide">
          {item23}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {modules.map((item, index) => {
            const number = index + 1;
            const displayId = String(number).padStart(2, "0");
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-all duration-200 ease-in-out hover:scale-104"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#d4b075] flex items-center justify-center text-[#d4b075] mb-6 transition-all duration-300 group-hover:bg-[#d4b075] group-hover:text-black">
                  <p className="text-[clamp(1rem,5vw,2rem)]">{item.icon}</p>

                  <span className="absolute -bottom-4 bg-black px-2 text-[#d4b075] font-bold text-lg">
                    {displayId}
                  </span>
                </div>

                <h3 className="text-white/80 text-sm sm:text-[16px] lg:text-md font-medium leading-tight mt-2">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

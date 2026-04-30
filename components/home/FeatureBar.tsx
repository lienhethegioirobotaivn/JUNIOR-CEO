import { TrangChuData } from "@/services/trang-chu-service";

type FeatureBarProps = Pick<
  TrangChuData["pageBy"]["trangchu"],
  "item13" | "item14" | "item15" | "item16"
>;

export function FeatureBar({
  item13,
  item14,
  item15,
  item16,
}: FeatureBarProps) {
  const features = [
    {
      icon: item13.icon,
      title: item13.text1,
      description: item13.text2,
    },
    {
      icon: item14.icon,
      title: item14.text1,
      description: item14.text2,
    },
    {
      icon: item15.icon,
      title: item15.text1,
      description: item15.text2,
    },
    {
      icon: item16.icon,
      title: item16.text1,
      description: item16.text2,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-2xl py-6 grid grid-cols-1 lg:grid-cols-4 justify-center items-center w-full mx-auto gap-3">
      {features.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex items-center gap-4 px-6 transition-all duration-200 ease-in-out hover:scale-103 ${index !== features.length - 1 ? "border-r border-[#3d3326]" : ""} flex-1 min-w-62.5`}
          >
            <div className="text-[#d4b075]">
              <div className="w-full h-full">
                <p className="text-4xl">{item.icon}</p>
              </div>
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

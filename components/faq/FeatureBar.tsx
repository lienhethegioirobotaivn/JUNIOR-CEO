import { FAQData } from "@/services/faq-service";

type FeatureBarProps = Pick<FAQData, "item_6">;

export function FeatureBar({ item_6 }: FeatureBarProps) {
  return (
    <div className="bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-2xl py-6 grid grid-cols-1 lg:grid-cols-4 justify-center items-center w-full mx-auto gap-3">
      {item_6.stats.map((item, index) => {
        return (
          <div
            key={index}
            className={`grid grid-cols-5 lg:flex items-center gap-4 px-6 transition-all duration-200 ease-in-out hover:scale-103 ${index !== item_6.stats.length - 1 ? "border-r border-[#3d3326]" : ""} flex-1 min-w-62.5`}
          >
            <div className="text-[#d4b075]">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-4xl lg:text-5xl">{item.icon}</p>
              </div>
            </div>
            <div className="col-span-4 flex flex-col">
              <h3 className="text-[#e6c891] font-bold sm:text-2xl lg:text-xl tracking-wide">
                {item.text_1}
              </h3>
              <p className="text-[#a3a3a3] sm:text-xl lg:text-base leading-tight mt-0.5">
                {item.text_2}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

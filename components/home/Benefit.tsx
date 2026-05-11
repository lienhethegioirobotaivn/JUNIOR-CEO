import Image from "next/image";
import { TrangChuData } from "@/services/trang-chu-service";

type BenefitProps = Pick<TrangChuData, "item_11">;

export function Benefit({ item_11 }: BenefitProps) {
  return (
    <section className="bg-black py-4">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row bg-[#0a0a0a] rounded-2xl border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)]">
          <div className="flex flex-col py-4 w-full">
            <h2 className="text-white/85 text-center text-3xl sm:text-3xl lg:text-3xl font-semibold mb-8 tracking-wide">
              {item_11.title}
            </h2>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4">
              {item_11.features.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center text-center py-2 px-4 border-[#333] transition-all duration-200 ease-in-out hover:scale-104 ${index !== item_11.features.length - 1 ? "border-r" : ""}`}
                  >
                    <div className="mb-2 text-[#d4b075]">
                      <div className="shrink-0 w-12 h-12 lg:size-16 flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={56}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                    <h3 className="text-white/85 font-semibold text-lg sm:text-xl lg:text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm lg:text-sm tracking-wider font-medium">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-[35%] w-full h-75 lg:h-auto overflow-hidden border-l border-[#333] relative">
            <Image
              src={item_11.image}
              alt="Right Image"
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

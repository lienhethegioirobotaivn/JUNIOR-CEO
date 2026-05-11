import { ChuongTrinhData } from "@/services/chuong-trinh-service";
import Image from "next/image";

type SevenModuleProps = Pick<ChuongTrinhData, "item_8">;

export function SevenModule({ item_8 }: SevenModuleProps) {
  return (
    <section className="bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-2xl py-6 px-4">
      <div className="mx-auto">
        <h2 className="text-[#edd9b4] lg:bg-linear-to-b from-white via-[#c7ae7f] to-[#927740] bg-clip-text lg:text-transparent text-center text-2xl sm:text-3xl lg:text-3xl font-semibold mb-8 uppercase tracking-wide">
          7 Modules vận hành doanh nghiệp thật
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {item_8.map((item, index) => {
            const number = index + 1;
            const displayId = String(number).padStart(2, "0");
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-all duration-200 ease-in-out hover:scale-104"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#d4b075] flex items-center justify-center text-[#d4b075] mb-6 transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 lg:size-16 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <span className="absolute -bottom-4 bg-black px-2 text-[#d4b075] font-bold text-lg">
                    {displayId}
                  </span>
                </div>

                <h3 className="text-white/80 text-sm sm:text-[16px] lg:text-md font-medium leading-tight mt-2">
                  {item.text}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ChuongTrinhData } from "@/services/chuong-trinh-service";
import Image from "next/image";

type HeroProps = Pick<
  ChuongTrinhData,
  "item_1" | "item_2" | "item_3" | "item_4" | "item_5" | "item_6"
>;

export function Hero({
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
}: HeroProps) {
  return (
    <section
      className="relative w-full bg-black text-white pt-12 pb-4 px-8 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${item_6}')` }}
    >
      <div className="lg:flex mx-auto gap-12 items-center">
        <div className="w-full lg:w-[50%] space-y-4">
          {/* Top tag */}
          <div className="flex items-center justify-center lg:justify-normal gap-4 mb-3 lg:ml-2 transition-all duration-200 ease-in-out hover:scale-102">
            <div className="flex items-center w-fit py-2 px-3 bg-white/5 border border-white/30 rounded-full">
              <p className="p-2 lg:p-0 sm:text-xl lg:text-[17.5px] bg-linear-to-r from-[#d4b075] to-[#e8d0a9] bg-clip-text text-transparent font-semibold tracking-wider">
                {item_1}
              </p>
            </div>
          </div>

          {/* Main title */}
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-6xl sm:text-8xl lg:text-7xl text-center lg:text-left font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-103">
              {item_2}
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-[25px] text-center lg:text-left font-bold text-white/90 transition-all duration-200 ease-in-out hover:scale-102">
              {item_3}
            </h2>
            <p className="lg:max-w-[80%] text-gray-300 text-sm sm:text-lg lg:text-base mt-2 transition-all duration-200 ease-in-out hover:scale-102">
              {item_4}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-3 lg:gap-3">
            {item_5.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-fit flex items-center justify-center bg-[#1a1a1a] border border-[#3d3326] gap-2 lg:gap-3 p-2 lg:p-2 px-2 lg:px-5 rounded-xl transition-all duration-200 ease-in-out hover:scale-105"
                >
                  <div className="text-[#e6c891] shrink-0 size-6 lg:size-12 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[11px] sm:text-lg lg:text-sm font-semibold text-[#e6c891]">
                      {item.text_1}
                    </p>
                    <p className="text-[9px] sm:text-[12px] lg:text-xs text-gray-300">
                      {item.text_2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { PhuHuynhNoiGiData } from "@/services/phu-huynh-noi-gi-service";
import Image from "next/image";

type HeroProps = Pick<
  PhuHuynhNoiGiData,
  "item_1" | "item_2" | "item_3" | "item_4" | "item_5"
>;

export function Hero({ item_1, item_2, item_3, item_4, item_5 }: HeroProps) {
  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={item_4}
          alt="Hero Background"
          fill
          className="hidden lg:block object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-8 pt-14 pb-10">
        <div className="lg:w-3/5">
          <div className="space-y-4">
            <p className="bg-linear-to-br from-[#f3e7d3] to-[#967941] bg-clip-text text-transparent text-sm md:text-lg font-bold uppercase">
              {item_1}
            </p>

            <h1 className="text-4xl md:text-[42px] font-bold uppercase">
              <span className="bg-linear-to-b from-[#f3e7d3] to-[#967941]/90 bg-clip-text text-transparent drop-shadow-2xl">
                {item_2.text_1}
              </span>
              <br />
              <span className="bg-linear-to-b from-[#f3e7d3] to-[#967941]/90 bg-clip-text text-transparent drop-shadow-2xl">
                {item_2.text_2}
              </span>
            </h1>

            <div className="space-y-2 pt-2 lg:pr-32">
              <p className="text-gray-200 text-[15px] drop-shadow-sm">
                {item_3.text_1}
              </p>
              <p className="text-gray-200 text-[15px] drop-shadow-sm">
                {item_3.text_2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 lg:w-[95%] mx-auto bg-black/5 backdrop-blur-md border border-white/20 rounded-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
            {item_5.stats.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-5 px-4 transition-transform duration-300 hover:scale-105 
                  ${index !== item_5.stats.length - 1 ? "lg:border-r lg:border-white/20" : ""}`}
              >
                <div className="shrink-0 w-12 h-12 lg:size-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-3xl">
                  <div className="shrink-0 size-10 lg:size-11 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="bg-linear-to-b from-[#f3e7d3] to-[#967941] bg-clip-text text-transparent font-bold text-2xl tracking-wide">
                    {item.text_1}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-tighter uppercase mt-1">
                    {item.text_2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

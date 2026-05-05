import { GiangVienData } from "@/services/giang-vien-service";
import Image from "next/image";

type HeroProps = Pick<
  GiangVienData,
  "item_1" | "item_2" | "item_3" | "item_4" | "item_5"
>;

export function Hero({ item_1, item_2, item_3, item_4, item_5 }: HeroProps) {
  return (
    <section className="relative w-full h-fit flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={item_5}
          alt="Hero Background"
          fill
          className="hidden lg:block object-fill"
          priority
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 py-11 pb-8">
        <div className="lg:w-[60%]">
          <div className="lg:pr-18">
            <div className="transition-all duration-200 ease-in-out hover:scale-103">
              <p className="bg-linear-to-b from-white via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent text-[28px] font-semibold pt-1 uppercase">
                {item_1.small_text}
              </p>

              <h1 className="text-4xl md:text-[68px] font-semibold py-1 bg-linear-to-b from-white/80 via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent mb-1 uppercase">
                {item_1.big_text}
              </h1>
            </div>

            <p className=" text-white/90 text-[18px] mb-6 font-semibold uppercase transition-all duration-200 ease-in-out hover:scale-103">
              {item_2}
            </p>

            <p className="text-white/70 text-[15px] font-medium mb-10 lg:pr-18 transition-all duration-200 ease-in-out hover:scale-103">
              {item_3}
            </p>
          </div>

          {/* Features Horizontal */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {item_4.benefit.map((item, i) => (
              <div
                key={i}
                className="flex transition-all duration-200 ease-in-out hover:scale-103"
              >
                <div className="w-fit flex items-start gap-3">
                  <div className="size-13 lg:size-15 bg-linear-to-br from-[#c7a96b]/10 to-black border border-[#c7a96b]/40 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl text-[#c7a96b]">{item.icon}</span>
                  </div>

                  <div className="flex flex-col justify-center">
                    <h4 className="text-[#c7a96b] font-bold text-base uppercase">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-[12px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

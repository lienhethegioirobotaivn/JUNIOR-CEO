import { TuVanData } from "@/services/tu-van-service";
import Image from "next/image";

type HeroProps = Pick<
  TuVanData,
  "item_1" | "item_2" | "item_3" | "item_4" | "item_5"
>;

export function Hero({ item_1, item_2, item_3, item_4, item_5 }: HeroProps) {
  return (
    <section className="w-full bg-[#0a0a0a] flex items-stretch">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-[50%] px-6 lg:pl-12 py-10 lg:py-6 flex flex-col justify-center z-10">
          <p className="text-lg font-bold bg-linear-to-b from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent mb-1">
            {item_1}
          </p>

          <h1 className="text-3xl lg:text-[45px] font-bold py-1 bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent uppercase">
            {item_2}
          </h1>

          <p className="text-gray-300 mt-2 text-sm">{item_3}</p>

          <div className="flex flex-col gap-6 mt-6">
            {item_4.features.map((item, i) => (
              <div key={i} className="flex items-start gap-4 lg:gap-2">
                <div className="mt-1 shrink-0 w-12 h-12 lg:size-11 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#e6d3a3] uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-[55%]">
          <Image
            src={item_5}
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

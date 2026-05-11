import { ChungNhanData } from "@/services/chung-nhan-service";
import Image from "next/image";

type HeroProps = Pick<
  ChungNhanData,
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
    <section className="relative bg-black text-white lg:overflow-hidden flex items-center min-h-fit">
      {/* Background Image Container (Desktop) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image src={item_6.desktop_image} alt="Hero Background" fill priority />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-12 lg:pt-8 lg:py-12 z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="space-y-4 order-2">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#c4aa79] transition-all duration-200 ease-in-out hover:scale-102">
            <span className="bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent text-base font-semibold uppercase pt-1">
              {item_1}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-[40px] lg:text-6xl pt-1 font-bold uppercase bg-linear-to-br from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102 leading-tight lg:leading-14">
              {item_2}
            </h1>
            <p className="bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102 text-xl lg:text-[22px] font-semibold uppercase">
              {item_3}
            </p>
          </div>

          <p className="text-zinc-300 text-base drop-shadow-md transition-all duration-200 ease-in-out hover:scale-102">
            {item_4}
          </p>

          {/* MobileImg Container */}
          <div className="block lg:hidden relative w-full aspect-square order-1 border-2 border-white/20 rounded-2xl overflow-hidden">
            <Image
              src={item_6.mobile_image}
              alt="Hero Mobile"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2 pb-8 lg:pb-0">
            {item_5.benefit.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-2 lg:px-4 lg:py-3 rounded-2xl bg-[#111] border-2 border-white/20 hover:border-white/30 transition-all duration-200 ease-in-out hover:scale-104"
              >
                <div className="mb-3 shrink-0 w-12 h-12 lg:size-16 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h4 className="text-[#f0ca85] text-[11px] lg:text-[14px] font-bold uppercase mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-zinc-300/80 text-[10px] lg:text-[11px] line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

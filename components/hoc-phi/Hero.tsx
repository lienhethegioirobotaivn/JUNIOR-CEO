import { HocPhiData } from "@/services/hoc-phi-service";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

type HeroProps = Pick<
  HocPhiData,
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
    <section className="relative w-full lg:h-125 bg-black overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src={item_5}
          alt="Hero Background Image"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-8 py-4 pt-12 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 lg:pr-12">
            <div className="space-y-1 lg:w-[90%]">
              <div className="flex items-center gap-2">
                <p className="text-[14px] md:text-base font-bold uppercase bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
                  {item_1}
                </p>
              </div>

              <h1 className="text-[44px] md:text-5xl font-bold leading-[1.1] py-2 bg-linear-to-b from-[#f3e7d3] to-[#967941] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
                {item_2}
              </h1>

              <p className="text-gray-300 text-sm md:text-base transition-all duration-200 ease-in-out hover:scale-102">
                {item_3}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:flex gap-6 lg:gap-4">
              {item_4.advertise.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 group transition-all duration-200 ease-in-out hover:scale-103"
                >
                  <div className="size-fit p-1.5 shrink-0 flex items-center justify-center rounded-lg border border-white/25 bg-linear-to-br from-black to-[#1a1a1a] shadow-[0_0_15px_rgba(150,121,65,0.1)] transition-all duration-300 group-hover:border-white/40">
                    <span className="text-[#c4aa79] drop-shadow-[0_0_8px_rgba(196,170,121,0.5)]">
                      <div className="shrink-0 size-10 lg:size-10 flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt="Icon"
                          width={56}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[13px] font-bold text-[#eace9a] uppercase tracking-wider leading-tight">
                      {item.text_1}
                    </h3>
                    <p className="text-[12px] text-gray-300 leading-snug whitespace-pre-line">
                      {item.text_2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Quote Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full lg:pt-0">
            <div className="lg:absolute bottom-0 right-1 lg:w-76 p-4 rounded-2xl border border-[#967941]/40 bg-linear-to-b from-[#1a1a1a] to-black lg:bg-none lg:bg-black/30 backdrop-blur-md transition-all duration-200 ease-in-out hover:scale-103">
              <BiSolidQuoteAltLeft
                className="absolute top-2 left-2 text-[#c4aa79] fill-[#c4aa79] size-6"
                size={32}
              />
              <div className="ml-7">
                <p className="text-gray-200 text-sm mb-2">{item_6.content}</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="h-px w-4 bg-[#c4aa79]" />
                <span className="text-[#c4aa79] text-sm font-bold">
                  {item_6.cre}
                </span>
                <div className="h-px w-4 bg-[#c4aa79]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

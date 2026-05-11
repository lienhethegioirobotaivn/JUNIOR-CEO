import { PitchingDayData } from "@/services/pitching-day-service";
import Image from "next/image";

type PrizeProps = Pick<PitchingDayData, "item_11">;

export function Prize({ item_11 }: PrizeProps) {
  return (
    <section className="bg-black text-white font-sans">
      <div className="mx-auto border border-[#d4b075]/20 rounded-2xl overflow-hidden bg-linear-to-b from-white/5 to-transparent relative">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 px-6 py-6 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent uppercase mb-3">
                {item_11.title}
              </h2>
              <p className="text-[11px] md:text-[13px] text-gray-300">
                {item_11.sub_title}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {item_11.prizes.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#d4b075]/20 bg-black/40 transition-all duration-300 hover:border-[#d4b075]/60 hover:scale-104"
                >
                  <div className="shrink-0 w-12 h-12 lg:size-18 flex items-center justify-center mb-4 drop-shadow-[0_0_12px_rgba(212,176,117,0.4)] transition-transform group-hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.rank}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-[10px] md:text-[11px] font-bold text-[#f3d9a9] mb-2">
                    {item.rank}
                  </h3>
                  <p className="text-sm md:text-base font-bold text-white mb-2">
                    {item.value}
                  </p>
                  <p className="text-[10px] text-gray-400">{item.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 z-10 " />
            <Image
              src={item_11.image}
              alt="Prize Image"
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

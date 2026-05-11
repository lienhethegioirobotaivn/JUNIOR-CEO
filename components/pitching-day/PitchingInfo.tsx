import { PitchingDayData } from "@/services/pitching-day-service";
import Image from "next/image";

type PitchingInfoProps = Pick<PitchingDayData, "item_9" | "item_10">;

export function PitchingInfo({ item_9, item_10 }: PitchingInfoProps) {
  return (
    <section className="bg-black text-white font-sans overflow-hidden">
      <div className="mx-auto border border-[#d4b075]/20 rounded-3xl p-8 lg:p-8 bg-linear-to-b from-white/5 to-transparent relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,117,0.05),transparent_70%)]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl font-bold text-center bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent uppercase">
              {item_9.title}
            </h2>

            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-4">
              <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-linear-to-r from-transparent via-[#d4b075]/40 to-transparent" />
              {item_9.steps.map((step, index) => (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center flex-1 group transition-transform duration-300 hover:scale-105"
                >
                  <div className="size-18 md:w-20 md:h-20 rounded-full bg-black border border-[#d4b075]/50 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(212,176,117,0.2)] mb-3 group-hover:border-[#d4b075] transition-colors">
                    <span className="drop-shadow-[0_0_8px_rgba(212,176,117,0.5)]">
                      <div className="shrink-0 w-12 h-12 lg:size-14 flex items-center justify-center">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={56}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </span>
                  </div>
                  <span className="text-[#f3d9a9] font-bold text-xl mb-3">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-base lg:text-[11px] text-[#e8d0a9] mb-1 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-[10px] text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#d4b075]/10 pt-16 lg:pt-0 lg:pl-12">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent uppercase">
                Hội đồng giám khảo
              </h2>
              <p className="text-[11px] text-white/70 mt-3 uppercase">
                Các doanh nhân, nhà đầu tư và chuyên gia uy tín
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-3">
              {item_10.examiners.map((judge, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div className="relative w-full aspect-3/4 overflow-hidden rounded-xl border border-[#d4b075]/20 mb-4 transition-all duration-500 group-hover:border-[#d4b075]/50">
                    <Image
                      src={judge.image}
                      alt={judge.name}
                      fill
                      className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="text-center px-1">
                    <p className="text-[8px] md:text-[10px] text-[#d4b075] font-bold uppercase mb-1">
                      {judge.title}
                    </p>
                    <h4 className="text-[10px] md:text-[12px] font-bold text-white mb-1">
                      {judge.name}
                    </h4>
                    <p className="text-[9px] text-gray-400 font-medium">
                      {judge.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

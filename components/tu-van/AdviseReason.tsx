import { TuVanData } from "@/services/tu-van-service";

type AdviseReasonProps = Pick<TuVanData, "item_6">;

export function AdviseReason({ item_6 }: AdviseReasonProps) {
  return (
    <section className="bg-black lg:pt-12 lg:pb-8">
      <div className="mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-28 bg-linear-to-r from-transparent to-[#f3d9a9]" />
          <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl lg:text-3xl font-bold text-center uppercase">
            {item_6.title}
          </h2>
          <div className="h-px w-28 bg-linear-to-l from-transparent to-[#f3d9a9]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {item_6.reasons.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-104 hover:border-[#d4a373]/50 group"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-base font-bold flex items-center">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

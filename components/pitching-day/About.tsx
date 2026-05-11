import { PitchingDayData } from "@/services/pitching-day-service";
import Image from "next/image";

type AboutProps = Pick<PitchingDayData, "item_8">;

export function About({ item_8 }: AboutProps) {
  return (
    <section className="bg-black pt-8 lg:pt-12">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="pt-1 bg-linear-to-b from-[#f3d9a9] via-[#d4a373] to-[#a67c37] bg-clip-text text-transparent text-3xl lg:text-4xl font-bold uppercase mb-3">
            {item_8.title}
          </h2>
          <p className="lg:w-[60%] text-gray-300 text-sm lg:text-[15px] mx-auto">
            {item_8.description}
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {item_8.content.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-white/15 hover:border-white/35 rounded-xl px-4 py-4 flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-102"
            >
              <div className="mb-2 shrink-0 w-12 h-12 lg:size-16 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>

              <h3 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent text-sm md:text-base font-bold mb-2 uppercase">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[13px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

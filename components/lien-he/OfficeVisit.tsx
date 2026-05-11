import { LienHeData } from "@/services/lien-he-service";
import { CalendarCheck } from "lucide-react";
import Image from "next/image";

type OfficeVisitProps = Pick<LienHeData, "item_8" | "item_9">;

export function OfficeVisit({ item_8, item_9 }: OfficeVisitProps) {
  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* LEFT: INTERACTIVE MAP BOX */}
        <div className="relative lg:col-span-2 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={item_8}
            alt="Location Image"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* RIGHT: CONTENT BOX */}
        <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl mb-4 uppercase font-semibold bg-linear-to-b from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent">
              {item_9.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {item_9.description}
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {item_9.visit_highlight.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-3 items-center gap-1 lg:gap-2 ${index !== item_9.visit_highlight.length - 1 ? "lg:border-r lg:border-[#3d3326]" : ""}`}
                  >
                    <div className="shrink-0 size-18 lg:size-16 flex items-center justify-center rounded-xl">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={56}
                        height={56}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <h5 className="text-[#f3d9a9] text-sm font-bold uppercase tracking-wider">
                        {item.title}
                      </h5>
                      <p className="text-gray-500 text-xs leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CALL TO ACTION BUTTON */}
          <div className="flex justify-center md:justify-start mx-auto">
            <button className="group flex items-center gap-3 px-6 py-3 rounded-xl font-bold uppercase tracking-[0.15em] text-sm text-black bg-linear-to-r from-[#f3d9a9] via-[#c9a35d] to-[#a67c37] hover:shadow-[0_0_20px_rgba(166,124,55,0.3)] transition-all duration-200 ease-in-out hover:scale-103 cursor-pointer">
              <CalendarCheck size={18} />
              Đặt lịch tham quan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

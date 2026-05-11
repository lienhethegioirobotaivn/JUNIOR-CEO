"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HocPhiData } from "@/services/hoc-phi-service";
import Image from "next/image";

type InfoProps = Pick<HocPhiData, "item_9" | "item_10">;

export function Info({ item_9, item_10 }: InfoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-black pt-8">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: FAQ Side */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-6 lg:p-8">
          <h2 className="bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl font-bold text-center mb-8 tracking-widest uppercase">
            {item_9.title}
          </h2>
          <div className="space-y-4">
            {item_9.faq.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-800/50 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-2 group cursor-pointer"
                >
                  <span className="text-[#f3d9a9] font-semibold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-[#f3d9a9] transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Why Choose Us Side */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-6 lg:p-8">
          <h2 className="bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl font-bold text-center mb-10 tracking-widest uppercase">
            {item_10.title}
          </h2>
          <div className="space-y-10">
            {item_10.result.map((item, idx) => (
              <div key={idx} className="flex gap-3 lg:gap-6 items-start group">
                <div className="shrink-0 size-14 md:w-14 md:h-14 rounded-xl border border-[#f3d9a9]/30 bg-[#1a1a1a] flex items-center justify-center shadow-[inset_0_0_10px_rgba(243,217,169,0.1)] transition-transform group-hover:scale-110">
                  <div className="shrink-0 w-12 h-12 lg:size-11 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#f3d9a9] font-bold tracking-wider mb-1 text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
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

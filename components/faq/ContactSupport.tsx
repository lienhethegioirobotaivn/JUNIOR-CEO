"use client";

import { FAQData } from "@/services/faq-service";
import Image from "next/image";

type ContactSupportProps = Pick<FAQData, "item_8">;

export function ContactSupport({ item_8 }: ContactSupportProps) {
  return (
    <section className="bg-black py-12">
      <div className="mx-auto border border-[#f3d9a9]/20 rounded-2xl p-4 md:p-6 bg-linear-to-b from-[#111] to-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#f3d9a9] to-transparent opacity-50" />

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold pt-1 tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent mb-4">
            {item_8.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {item_8.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Direct */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#f3d9a9]/30 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 lg:size-14 flex items-center justify-center">
                <Image
                  src={item_8.contact_method.direct.icon}
                  alt="Icon"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-left">
                <h3 className="text-[#f3d9a9] text-sm font-bold tracking-wider">
                  {item_8.contact_method.direct.title}
                </h3>
                <p className="text-gray-400 text-[11px] uppercase tracking-tight">
                  {item_8.contact_method.direct.description}
                </p>
              </div>
            </div>

            <button className="w-full py-3 px-4 rounded-lg bg-linear-to-b from-[#f3d9a9] to-[#a67c37] text-black text-xs md:text-sm font-bold transition-transform duration-300 active:scale-95 hover:brightness-110 cursor-pointer">
              {item_8.contact_method.direct.button_text}
            </button>
          </div>

          {/* Online */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#f3d9a9]/30 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 lg:size-14 flex items-center justify-center">
                <Image
                  src={item_8.contact_method.online.icon}
                  alt="Icon"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-left">
                <h3 className="text-[#f3d9a9] text-sm font-bold tracking-wider">
                  {item_8.contact_method.online.title}
                </h3>
                <p className="text-gray-400 text-[11px] uppercase tracking-tight">
                  {item_8.contact_method.online.description}
                </p>
              </div>
            </div>

            <button className="w-full py-3 px-4 rounded-lg bg-linear-to-b from-[#f3d9a9] to-[#a67c37] text-black text-xs md:text-sm font-bold transition-transform duration-300 active:scale-95 hover:brightness-110 cursor-pointer">
              {item_8.contact_method.online.button_text}
            </button>
          </div>

          {/* Email */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#f3d9a9]/30 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 lg:size-14 flex items-center justify-center">
                <Image
                  src={item_8.contact_method.email.icon}
                  alt="Icon"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-left">
                <h3 className="text-[#f3d9a9] text-sm font-bold tracking-wider">
                  {item_8.contact_method.email.title}
                </h3>
                <p className="text-gray-400 text-[11px] uppercase tracking-tight">
                  {item_8.contact_method.email.description}
                </p>
              </div>
            </div>

            <button className="w-full py-3 px-4 rounded-lg bg-linear-to-b from-[#f3d9a9] to-[#a67c37] text-black text-xs md:text-sm font-bold transition-transform duration-300 active:scale-95 hover:brightness-110 cursor-pointer">
              {item_8.contact_method.email.button_text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { HocPhiData } from "@/services/hoc-phi-service";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import { Phone } from "lucide-react";

type ContactCTAProps = Pick<HocPhiData, "item_11">;

export function ContactCTA({ item_11 }: ContactCTAProps) {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  return (
    <section className="bg-black pt-6 pb-2">
      <div className="mx-auto bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Content */}
        <div className="text-center md:text-left">
          <h2 className="bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl font-bold mb-3 uppercase">
            {item_11.text_1}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">{item_11.text_2}</p>
        </div>

        {/* Right Side: Action */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <button
            className="group flex items-center gap-3 py-3 px-8 rounded-lg bg-linear-to-r from-[#f3d9a9] to-[#a67c37] text-black font-bold text-sm hover:brightness-110 shadow-[0_4px_20px_rgba(243,217,169,0.3)] transition-all duration-200 ease-in-out hover:scale-103 cursor-pointer"
            onClick={openDialog}
          >
            ĐĂNG KÝ TƯ VẤN NGAY
          </button>

          <div className="flex items-center gap-3 text-[#f3d9a9] font-bold text-lg tracking-wider">
            <Phone size={20} fill="#f3d9a9" className="rotate-15" />
            <p>{item_11.phone_number}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

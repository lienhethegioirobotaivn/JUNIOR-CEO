"use client";

import { LienHeData } from "@/services/lien-he-service";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import Image from "next/image";

type SupportProps = Pick<LienHeData, "item_10" | "item_11">;

export function Support({ item_10, item_11 }: SupportProps) {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT: FAQ SUMMARY SECTION */}
        <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-4">
          <div className="mb-8">
            <h2 className="text-xl font-semibold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent uppercase mb-1">
              {item_10.title}
            </h2>
            <p className="text-gray-400 text-lg">{item_10.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item_10.faq.map((faq, index) => (
              <div key={index} className="space-y-1 group">
                <div className="flex items-center gap-1">
                  <div className="shrink-0 size-14 lg:size-14 flex items-center justify-center p-2 rounded-lg">
                    <Image
                      src={faq.icon}
                      alt={faq.question}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h4 className="text-[#f3d9a9] text-base font-semibold">
                    {faq.question}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: CTA SECTION */}
        <div className="lg:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-4 py-4 gap-0">
            <div className="shrink-0 size-18 lg:size-24 flex justify-center">
              <Image
                src={item_11.icon}
                alt="Icon"
                width={56}
                height={56}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="col-span-3">
              <div className="flex flex-col mb-8">
                <h3 className="bg-linear-to-r from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent font-semibold text-sm md:text-base uppercase mb-2">
                  {item_11.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {item_11.description}
                </p>
                <div>
                  <button
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold uppercase text-sm text-black bg-linear-to-r from-[#f3d9a9] via-[#c9a35d] to-[#a67c37] hover:scale-[1.02] transition-transform shadow-lg shadow-[#a67c37]/10 cursor-pointer"
                    onClick={openDialog}
                  >
                    Đăng ký tư vấn miễn phí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

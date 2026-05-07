"use client";

import { TrangChuData } from "@/services/trang-chu-service";
import { useLandingRegisterDialogStore } from "@/store/useLandingRegisterDialogStore";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import Link from "next/link";

type ContactBannerProps = { type?: "default" | "landing" } & Pick<
  TrangChuData["pageBy"]["trangchu"],
  "item40" | "item41"
>;

export function ContactBanner({
  type = "default",
  item40,
  item41,
}: ContactBannerProps) {
  const openDefault = useRegisterDialogStore((state) => state.openDialog);
  const openLanding = useLandingRegisterDialogStore(
    (state) => state.openDialog,
  );

  const handleOpen = type === "landing" ? openLanding : openDefault;

  return (
    <section className="flex flex-col lg:flex-row w-full overflow-hidden text-white">
      {/* Left side */}
      <div
        className="w-full lg:w-4/7 flex items-center justify-center lg:justify-end p-6 bg-cover bg-center"
        style={{ backgroundImage: `url('${item40.image.node.sourceUrl}')` }}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="text-center space-y-2 mb-1">
            <h3 className="text-[#f5d08c] text-3xl font-bold tracking-wider">
              {item40.label}
            </h3>
            <p className="text-gray-200">{item40.subLabel}</p>
          </div>

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 bg-linear-to-r from-[#c4985b] to-[#d9b47e] text-[#2b231a] transition-all duration-200 ease-in-out hover:scale-105 px-6 py-2 rounded font-bold cursor-pointer"
              onClick={handleOpen}
            >
              {item40.buttonLeft.text}
            </button>
            <Link href={item40.buttonRight.endpoint}>
              <button className="flex items-center gap-2 border border-[#d4a76a] text-[#d4a76a] px-4 py-2 rounded font-bold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
                {item40.buttonRight.text}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative items-center">
        <div className="absolute inset-y-0 w-px bg-linear-to-b from-transparent via-[#d4a76a] to-transparent hidden lg:block" />
      </div>

      {/* Right side */}
      <div
        className="w-full lg:w-3/7 flex flex-col justify-center gap-4 p-8 lg:px-6 bg-cover bg-center border-l border-white/20"
        style={{ backgroundImage: `url('${item41.image.node.sourceUrl}')` }}
      >
        <div className="flex items-center gap-3">
          <span>{item41.content1.icon}</span>
          <span className="text-white/95">0702685588</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{item41.content2.icon}</span>
          <span className="text-white/95">{item41.content2.text}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{item41.content3.icon}</span>
          <span className="text-white/95">Zalo Mrs. Trân</span>
        </div>
      </div>
    </section>
  );
}

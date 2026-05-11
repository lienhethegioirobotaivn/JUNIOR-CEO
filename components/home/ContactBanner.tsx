"use client";

import { TrangChuData } from "@/services/trang-chu-service";
import { useLandingRegisterDialogStore } from "@/store/useLandingRegisterDialogStore";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import Image from "next/image";
import Link from "next/link";

type ContactBannerProps = { type?: "default" | "landing" } & Pick<
  TrangChuData,
  "item_15"
>;

export function ContactBanner({ type, item_15 }: ContactBannerProps) {
  const openDefault = useRegisterDialogStore((state) => state.openDialog);
  const openLanding = useLandingRegisterDialogStore(
    (state) => state.openDialog,
  );

  const handleOpen = type === "default" ? openDefault : openLanding;

  return (
    <section className="flex flex-col lg:flex-row w-full overflow-hidden text-white">
      {/* Left side */}
      <div
        className="w-full lg:w-4/7 flex items-center justify-center lg:justify-end p-6 bg-cover bg-center"
        style={{ backgroundImage: `url('${item_15.left.background_image}')` }}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="text-center space-y-2 mb-1">
            <h3 className="text-[#f5d08c] text-3xl font-bold tracking-wider">
              {item_15.left.text_1}
            </h3>
            <p className="text-gray-200">{item_15.left.text_2}</p>
          </div>

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 bg-linear-to-r from-[#c4985b] to-[#d9b47e] text-[#2b231a] transition-all duration-200 ease-in-out hover:scale-105 px-6 py-2 rounded font-bold cursor-pointer"
              onClick={handleOpen}
            >
              {item_15.left.buttons.button_1.text}
            </button>
            <Link
              href={
                type === "default"
                  ? item_15.left.buttons.button_2.endpoint
                  : "#hoc-phi"
              }
            >
              <button className="flex items-center gap-2 border border-[#d4a76a] text-[#d4a76a] px-4 py-2 rounded font-bold transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer">
                {item_15.left.buttons.button_2.text}
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
        style={{ backgroundImage: `url('${item_15.right.background_image}')` }}
      >
        {/* Phone */}
        <div className="flex items-center gap-2">
          <div className="shrink-0 size-10 lg:size-10 flex items-center justify-center">
            <Image
              src={item_15.right.phone.icon}
              alt="Icon"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white/95">
            {type === "default" ? item_15.right.phone.text : "0702685588"}
          </span>
        </div>
        {/* Website */}
        <div className="flex items-center gap-3">
          <div className="shrink-0 size-10 lg:size-10 flex items-center justify-center">
            <Image
              src={item_15.right.website.icon}
              alt="Icon"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white/95">{item_15.right.website.text}</span>
        </div>
        {/* Zalo */}
        <div className="flex items-center gap-3">
          <div className="shrink-0 size-10 lg:size-10 flex items-center justify-center">
            <Image
              src={item_15.right.zalo.icon}
              alt="Icon"
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white/95">
            {type === "default" ? item_15.right.zalo.text : "Zalo Mrs. Trân"}
          </span>
        </div>
      </div>
    </section>
  );
}

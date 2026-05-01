"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkle } from "lucide-react";
import { TrangChuData } from "@/services/trang-chu-service";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";

type HeroProps = Pick<
  TrangChuData["pageBy"]["trangchu"],
  | "item1"
  | "item2"
  | "item3"
  | "item4"
  | "item5"
  | "item6"
  | "item7"
  | "item8"
  | "item9"
  | "item10"
  | "item11"
  | "item12"
>;

export function Hero({
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
}: HeroProps) {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  const Stats = [
    {
      icon: item5.icon,
      firstParagraph: item5.text1,
      secondParagraph: item5.text2,
    },
    {
      icon: item6.icon,
      firstParagraph: item6.text1,
      secondParagraph: item6.text2,
    },
    {
      icon: item7.icon,
      firstParagraph: item7.text1,
      secondParagraph: item7.text2,
    },
  ];

  return (
    <section
      className="relative w-full bg-black text-white pt-12 pb-4 px-8 bg-cover lg:bg-center xl:bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${item11.node.sourceUrl}')` }}
    >
      <div className="lg:flex mx-auto gap-12 items-center">
        <div className="w-full lg:w-[40%] space-y-4">
          {/* Top tag */}
          <div className="flex items-center justify-center lg:justify-normal gap-4 mb-3 lg:ml-2 transition-all duration-200 ease-in-out hover:scale-102">
            <Sparkle className="size-3 text-[#fce094] fill-current drop-shadow-[0_0_5px_rgba(252,224,148,0.8)]" />
            <div className="flex items-center w-fit py-2 px-3 bg-white/5 border border-white/30 rounded-full">
              <p className="p-2 lg:p-0 sm:text-xl lg:text-xs bg-linear-to-r from-[#d4b075] to-[#e8d0a9] bg-clip-text text-transparent font-semibold tracking-wider">
                {item1}
              </p>
            </div>
          </div>

          {/* Main title */}
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-6xl sm:text-8xl lg:text-7xl text-center lg:text-left font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-103">
              {item2}
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center lg:text-left font-bold text-white/90 transition-all duration-200 ease-in-out hover:scale-102">
              {item3}
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg lg:text-md mt-2 transition-all duration-200 ease-in-out hover:scale-102">
              {item4}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 lg:gap-3">
            {Stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center bg-[#1a1a1a] border border-[#3d3326] gap-2 lg:gap-2 p-1 lg:p-2 rounded-xl transition-all duration-200 ease-in-out hover:scale-105"
                >
                  <div className="text-[#e6c891]">
                    <p className="text-2xl">{item.icon}</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[11px] sm:text-lg lg:text-sm font-semibold text-[#e6c891]">
                      {item.firstParagraph}
                    </p>
                    <p className="text-[9px] sm:text-[12px] lg:text-xs text-[#e6c891]/70">
                      {item.secondParagraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions buttons */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 h-11">
            <button
              className="flex justify-center w-full h-full font-semibold bg-linear-to-r from-[#d4b075] to-[#c59c5d] rounded-md text-black items-center gap-1 lg:gap-2 hover:opacity-90 whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer"
              onClick={openDialog}
            >
              <p className="text-sm sm:text-lg">{item8.label}</p>
            </button>
            <Link href={item9.endpoint}>
              <button className="flex justify-center w-full h-full py-1 px-2 border border-[#3d3326] text-white/90 rounded-md hover:bg-white/10 transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
                <div className="flex items-center justify-center gap-0 sm:gap-2 lg:gap-3 font-semibold">
                  <p className="text-sm sm:text-lg">{item9.label}</p>
                </div>
              </button>
            </Link>
          </div>

          {/* Target audience */}
          <div className="grid grid-cols-4 items-center text-white/85 transition-all duration-200 ease-in-out hover:scale-105 lg:mt-8">
            <div className="col-span-1">
              <Image
                src={item10.image.node.sourceUrl}
                alt={item10.image.node.altText}
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="col-span-3">
              <p className="text-md sm:text-lg md:text-2xl lg:text-xl">
                {item10.text}
              </p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mx-auto mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:right-6 size-65 sm:size-90 lg:size-40 transition-all duration-200 ease-in-out hover:scale-105">
          <Image
            src={item12.node.sourceUrl}
            alt={item12.node.altText}
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

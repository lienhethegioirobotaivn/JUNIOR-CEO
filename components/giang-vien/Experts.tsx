"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { GiangVienData } from "@/services/giang-vien-service";

type ExpertsProps = Pick<GiangVienData, "item_7">;

export function Experts({ item_7 }: ExpertsProps) {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredExperts = item_7.expert.filter(
    (e) => e.name && e.name.trim() !== "",
  );

  const maxIndex = Math.max(0, filteredExperts.length - itemsPerView);

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-8 mx-auto bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-b from-[#f3e2c3] via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent uppercase tracking-wider mb-3">
          {item_7.title}
        </h2>
        <p className="text-gray-400 text-sm">{item_7.sub_title}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mx-4 lg:mx-12 border border-[#c7a96b]/30 rounded-xl py-3 px-4 lg:px-8 justify-between items-center gap-6 mb-8 bg-[#0b0b0b]">
        {item_7.category.map((c, i) => (
          <div key={i} className="flex items-center gap-1.5 lg:gap-3">
            <div className="p-2 border border-[#c7a96b]/50 rounded-full text-[#c7a96b] shrink-0">
              <div className="shrink-0 size-6 lg:size-8 flex items-center justify-center">
                <Image
                  src={c.icon}
                  alt={c.text}
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <span className="text-[10px] lg:text-[13px] font-bold text-[#dfbe7a]">
              {c.text}
            </span>
          </div>
        ))}
      </div>

      <div className="relative px-4 sm:px-12">
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 lg:left-12 top-1/2 -translate-y-1/2 z-10 p-2 border border-[#c7a96b]/50 rounded-full text-[#c7a96b] bg-[#0a0a0a]/80 hover:bg-[#c7a96b]/20 transition-all cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-[90%] mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / itemsPerView)}%)`,
            }}
          >
            {filteredExperts.map((e, i) => (
              <div
                key={i}
                className="shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="w-[90%] lg:w-full mx-auto flex flex-col items-center">
                  <div className="relative w-[90%] aspect-3/4 rounded-2xl overflow-hidden border border-[#c7a96b]/20 mb-3 bg-[#1a1a1a]">
                    <Image
                      src={e.image}
                      alt={e.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="text-center">
                    <h4 className="text-sm font-bold text-[#c7a96b] mb-1 leading-tight line-clamp-1">
                      {e.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 uppercase line-clamp-1">
                      {e.role}
                    </p>
                    <p className="text-[10px] text-gray-400 line-clamp-1">
                      {e.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-2 sm:right-4 lg:right-12 top-1/2 -translate-y-1/2 z-10 p-2 border border-[#c7a96b]/50 rounded-full text-[#c7a96b] bg-[#0a0a0a]/80 hover:bg-[#c7a96b]/20 transition-all cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <p className="text-center text-[10px] text-[#c7a96b] mt-12">
        {item_7.note}
      </p>
    </section>
  );
}

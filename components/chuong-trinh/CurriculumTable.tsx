"use client";

import { ChuongTrinhData } from "@/services/chuong-trinh-service";
import Image from "next/image";

type CurriculumTableProps = Pick<ChuongTrinhData, "item_10" | "item_11">;

export function CurriculumTable({ item_10, item_11 }: CurriculumTableProps) {
  return (
    <div className="w-full">
      <div className="mx-auto grid lg:grid-cols-4 gap-5">
        {/* TABLE */}
        <div className="lg:col-span-3 border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl overflow-hidden bg-[#0a0a0a]">
          {/* HEADER */}
          <div className="grid grid-cols-12 text-center text-sm lg:text-base font-semibold text-[#c7ae7f] border-b border-[#2a2a2a]">
            <div className="col-span-4 py-4 border-r border-[#2a2a2a]">
              CHI TIẾT NỘI DUNG HỌC
            </div>
            <div className="col-span-5 py-4 border-r border-[#2a2a2a]">
              NỘI DUNG CHÍNH
            </div>
            <div className="col-span-3 py-4">KẾT QUẢ</div>
          </div>

          {/* BODY */}
          {item_10.map((item, index) => {
            const moduleNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-[#1c1f26] text-xs lg:text-sm hover:bg-[#2a2a2a]"
              >
                {/* LEFT */}
                <div className="col-span-4 p-3 lg:p-4 border-r border-[#1c1f26]">
                  <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
                    <div className="flex items-center text-[#c7ae7f]/90 text-xs mb-1">
                      <p>MODULE</p>
                      <p className="text-base lg:text-lg font-bold ml-1">
                        {moduleNumber}
                      </p>
                    </div>
                    <p className="text-[#f5e1bb]">{item.title}</p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-span-5 p-3 lg:p-4 border-r border-[#1c1f26] text-gray-300 space-y-1">
                  <div
                    className="space-y-2"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>

                {/* RESULT */}
                <div className=" col-span-3 p-3 lg:p-4 text-gray-300 space-y-1">
                  <div
                    className="space-y-2"
                    dangerouslySetInnerHTML={{ __html: item.result }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl py-3 px-4 bg-[#0a0a0a]">
          <h3 className="text-[#c7ae7f] text-xl lg:text-lg font-semibold mb-8 text-center">
            ĐIỂM NHẤN ĐỘC QUYỀN
          </h3>

          <div className="space-y-10">
            {item_11.map((item, index) => (
              <div key={index} className="flex gap-2">
                <div className="shrink-0 size-16 lg:size-18 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-[#f5e1bb] text-lg font-medium">
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

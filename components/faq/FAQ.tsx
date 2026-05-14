"use client";

import { useState } from "react";
import { Plus, Minus, Inbox } from "lucide-react";
import { FAQData } from "@/services/faq-service";
import Image from "next/image";

type FAQComponentProps = Pick<FAQData, "item_7">;

export function FAQComponent({ item_7 }: FAQComponentProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openId, setOpenId] = useState<number | null>(0);

  const currentQna = (item_7.faq[activeTab]?.qna || []).filter(
    (qnaItem) => qnaItem.question && qnaItem.question.trim() !== "",
  );

  const halfIndex = Math.ceil(currentQna.length / 2);
  const leftColumn = currentQna.slice(0, halfIndex);
  const rightColumn = currentQna.slice(halfIndex);

  return (
    <>
      <section className="bg-black text-[#f3d9a9] pt-12 px-4 font-sans">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="hidden lg:block h-px w-30 bg-linear-to-r from-transparent to-[#f3d9a9]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
              {item_7.title}
            </h2>
            <div className="hidden lg:block h-px w-30 bg-linear-to-l from-transparent to-[#f3d9a9]" />
          </div>
          <p className="text-gray-300 text-sm md:text-base">
            {item_7.description}
          </p>
        </div>

        <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 mb-16 px-8">
          {item_7.faq.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setOpenId(0);
                }}
                className={`flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-1 p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
                  activeTab === index
                    ? "border-[#f3d9a9] bg-linear-to-b from-[#f3d9a9]/20 to-transparent shadow-[0_0_20px_rgba(243,217,169,0.15)]"
                    : "border-white/10 bg-[#111] hover:border-[#f3d9a9]/50"
                }`}
              >
                <div
                  className={`text-xl lg:text-[28px] shrink-0 transition-colors ${
                    activeTab === index
                      ? "text-[#f3d9a9]"
                      : "text-white/40 group-hover:text-[#f3d9a9]/70"
                  }`}
                >
                  <div className="shrink-0 w-12 h-12 lg:size-10 flex items-center justify-center">
                    <Image
                      src={item.category.icon}
                      alt={item.category.text}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <span
                  className={`text-xs lg:text-sm font-bold uppercase transition-colors ${
                    activeTab === index
                      ? "text-[#f3d9a9]"
                      : "text-white/40 group-hover:text-[#f3d9a9]/70"
                  }`}
                >
                  {item.category.text}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mb-10 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden lg:block h-px w-12 bg-linear-to-r from-transparent to-[#f3d9a9]" />
            <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent">
              {item_7.sub_title}
            </h3>
            <div className="hidden lg:block h-px w-12 bg-linear-to-l from-transparent to-[#f3d9a9]" />
          </div>
        </div>

        <div className="mx-auto grid md:grid-cols-2 gap-4 items-start">
          {currentQna.length > 0 ? (
            <>
              <div className="space-y-4">
                {leftColumn.map((qnaItem, index) => (
                  <FAQItem
                    key={`left-${index}`}
                    index={index + 1}
                    item={qnaItem}
                    isOpen={openId === index}
                    onToggle={() => setOpenId(openId === index ? null : index)}
                  />
                ))}
              </div>
              <div className="space-y-4">
                {rightColumn.map((qnaItem, index) => {
                  const actualIndex = index + halfIndex;
                  return (
                    <FAQItem
                      key={`right-${actualIndex}`}
                      index={actualIndex + 1}
                      item={qnaItem}
                      isOpen={openId === actualIndex}
                      onToggle={() =>
                        setOpenId(openId === actualIndex ? null : actualIndex)
                      }
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <FAQEmptyState />
          )}
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c29555;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8e6b3e;
        }
      `}</style>
    </>
  );
}

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-400 overflow-hidden ${
        isOpen
          ? "border-[#f3d9a9]/50 bg-linear-to-br from-[#1a1a1a] to-black shadow-[inset_0_0_20px_rgba(243,217,169,0.05)]"
          : "border-white/5 bg-[#0a0a0a] hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left gap-4 group cursor-pointer"
      >
        <span
          className={`text-sm md:text-base font-medium transition-colors duration-300 whitespace-pre-wrap ${
            isOpen ? "text-[#f3d9a9]" : "text-gray-300 group-hover:text-white"
          }`}
        >
          {index}. {item.question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen ? "border-[#f3d9a9] bg-[#f3d9a9]/10" : "border-white/10"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-[#f3d9a9]" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-75 md:max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="custom-scrollbar overflow-y-auto max-h-75 md:max-h-96 p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 whitespace-pre-wrap">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQEmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-6 px-4 rounded-3xl border border-white/5 bg-[#0a0a0a] shadow-[inset_0_0_40px_rgba(243,217,169,0.02)]">
      <div className="relative mb-6">
        <div className="absolute inset-0 blur-2xl bg-[#f3d9a9]/10 rounded-full" />
        <div className="relative w-16 h-16 rounded-full border border-[#f3d9a9]/20 flex items-center justify-center bg-black">
          <Inbox className="w-8 h-8 text-[#f3d9a9]/60" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <h4 className="text-[#f3d9a9] font-bold tracking-widest uppercase text-sm md:text-base">
          Dữ liệu đang được cập nhật
        </h4>
        <p className="text-gray-400 text-xs md:text-sm max-w-xs mx-auto leading-relaxed">
          Hiện tại chưa có câu hỏi nào cho mục này. Vui lòng quay lại sau hoặc
          liên hệ với chúng tôi để được hỗ trợ.
        </p>
      </div>

      <div className="mt-8 flex gap-2">
        <div className="w-1 h-1 rounded-full bg-[#f3d9a9]/30" />
        <div className="w-1 h-1 rounded-full bg-[#f3d9a9]/30" />
        <div className="w-1 h-1 rounded-full bg-[#f3d9a9]/30" />
      </div>
    </div>
  );
}

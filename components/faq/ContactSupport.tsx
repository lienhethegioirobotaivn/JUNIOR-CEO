"use client";

import { Headset, MessageSquareMore, Mail } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Headset,
    title: "TƯ VẤN TRỰC TIẾP",
    desc: "Nói chuyện với chuyên viên tư vấn",
    actionText: "GỌI NGAY: 0394 783 239",
  },
  {
    icon: MessageSquareMore,
    title: "CHAT TRỰC TUYẾN",
    desc: "Chat với chúng tôi 24/7",
    actionText: "BẮT ĐẦU CHAT",
  },
  {
    icon: Mail,
    title: "GỬI EMAIL",
    desc: "Nhận phản hồi trong 24h",
    actionText: "lienhe.JC@gmail.com",
  },
];

export function ContactSupport() {
  return (
    <section className="bg-black py-12">
      <div className="mx-auto border border-[#f3d9a9]/20 rounded-2xl p-4 md:p-6 bg-linear-to-b from-[#111] to-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#f3d9a9] to-transparent opacity-50" />

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold pt-1 tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent mb-4">
            VẪN CÒN THẮC MẮC?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Đội ngũ tư vấn của Junior CEO luôn sẵn sàng giải đáp mọi câu hỏi của
            bạn và giúp bạn hiểu rõ hơn về chương trình.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CONTACT_METHODS.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#f3d9a9]/30 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <item.icon className="w-8 h-8 text-[#f3d9a9] shrink-0" />
                <div className="text-left">
                  <h3 className="text-[#f3d9a9] text-sm font-bold tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] uppercase tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </div>

              <button className="w-full py-3 px-4 rounded-lg bg-linear-to-b from-[#f3d9a9] to-[#a67c37] text-black text-xs md:text-sm font-bold transition-transform duration-300 active:scale-95 hover:brightness-110 cursor-pointer">
                {item.actionText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

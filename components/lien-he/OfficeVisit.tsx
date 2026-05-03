import { CalendarCheck } from "lucide-react";
import Image from "next/image";

export function OfficeVisit() {
  const features = [
    {
      icon: "X",
      title: "Không gian hiện đại",
      description: "Môi trường học tập truyền cảm hứng",
    },
    {
      icon: "X",
      title: "Tư vấn trực tiếp",
      description: "Gặp gỡ chuyên gia, giải đáp thắc mắc",
    },
    {
      icon: "X",
      title: "Đặt lịch dễ dàng",
      description: "Đặt lịch tham quan trước để được hỗ trợ tốt nhất",
    },
  ];

  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* LEFT: INTERACTIVE MAP BOX */}
        <div className="relative lg:col-span-2 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/lien-he/Location.png"
            alt="Location Image"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* RIGHT: CONTENT BOX */}
        <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl mb-4 uppercase font-semibold bg-linear-to-b from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent">
              Đến thăm văn phòng của chúng tôi
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Chúng tôi luôn chào đón quý phụ huynh và học viên đến tham quan
              không gian học tập, tìm hiểu chương trình và trao đổi trực tiếp
              với đội ngũ của Junior CEO.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {features.map((item, index) => {
                return (
                  <div key={index} className="grid grid-cols-3 gap-1">
                    <div className="size-14 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <p className="text-[#f3d9a9] text-5xl">{item.icon}</p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <h5 className="text-[#f3d9a9] text-sm font-bold uppercase tracking-wider">
                        {item.title}
                      </h5>
                      <p className="text-gray-500 text-xs leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CALL TO ACTION BUTTON */}
          <div className="flex justify-center md:justify-start mx-auto">
            <button className="group flex items-center gap-3 px-6 py-3 rounded-xl font-bold uppercase tracking-[0.15em] text-sm text-black bg-linear-to-r from-[#f3d9a9] via-[#c9a35d] to-[#a67c37] hover:shadow-[0_0_20px_rgba(166,124,55,0.3)] transition-all duration-200 ease-in-out hover:scale-103 cursor-pointer">
              <CalendarCheck size={18} />
              Đặt lịch tham quan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

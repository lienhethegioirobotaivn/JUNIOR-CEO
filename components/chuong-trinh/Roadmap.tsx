import { ChuongTrinhData } from "@/services/chuong-trinh-service";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";

type RoadmapProps = Pick<ChuongTrinhData, "item_9">;

export function Roadmap({ item_9 }: RoadmapProps) {
  return (
    <section className="pt-6 sm:mt-5">
      <div className="mx-auto">
        <h2 className="text-[#edd9b4] lg:bg-linear-to-b from-white via-[#c7ae7f] to-[#927740] bg-clip-text lg:text-transparent text-center text-2xl sm:text-3xl font-semibold uppercase">
          Lộ trình 3 tháng: Học - Làm - Kiếm tiền
        </h2>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
          {item_9.map((item, index) => (
            <div key={index} className="flex bg-[#0a0a0a]">
              <div className="bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content border border-transparent relative rounded-2xl p-3 grid grid-cols-12 gap-1 shadow-[0_0_5px_rgba(245,210,122,0.5)] transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)]">
                <div className="col-span-4 text-yellow-400 flex justify-center">
                  <div className="shrink-0 size-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                <div className="col-span-8 pl-1 lg:pl-0 space-y-1">
                  <h3 className="text-[#d4b075] font-semibold text-xl">
                    {item.title}
                  </h3>

                  <p className="text-gray-100/70 mb-2">{item.description}</p>

                  <div className="text-white/80 space-y-2 whitespace-pre-wrap">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
              {index !== item_9.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <CircleChevronRight className="size-8 text-black fill-[#d4b075]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

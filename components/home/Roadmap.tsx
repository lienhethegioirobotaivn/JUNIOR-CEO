import { TrangChuData } from "@/services/trang-chu-service";
import Image from "next/image";

type RoadmapProps = Pick<TrangChuData, "item_13">;

export function Roadmap({ item_13 }: RoadmapProps) {
  return (
    <section className="pt-6 sm:mt-5">
      <div className="mx-auto">
        <h2 className="text-white/90 text-center text-2xl sm:text-3xl font-semibold uppercase">
          {item_13.title}
        </h2>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 lg:gap-4">
          {item_13.roadmap.map((item, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content border border-transparent relative rounded-2xl p-3 grid grid-cols-12 gap-1 shadow-[0_0_5px_rgba(245,210,122,0.5)] transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)]"
            >
              <div className="col-span-4 flex justify-center">
                <div className="shrink-0 size-full lg:size-24">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              <div className="col-span-8 pl-1 lg:pl-0">
                <h3 className="text-[#d4b075] font-semibold text-xl mb-2">
                  {item.title}
                </h3>

                <div className="text-white/80 space-y-12 whitespace-pre-wrap">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { GiangVienData } from "@/services/giang-vien-service";
import Image from "next/image";

type InstructorsProps = Pick<GiangVienData, "item_6">;

export function Instructors({ item_6 }: InstructorsProps) {
  return (
    <section className="py-8 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="hidden lg:block h-px w-50 bg-linear-to-r from-transparent to-[#f3d9a9]" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent pt-1">
          {item_6.title}
        </h2>
        <div className="hidden lg:block h-px w-50 bg-linear-to-l from-transparent to-[#f3d9a9]" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {item_6.instructor.map((item, i) => (
          <div
            key={i}
            className="bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl p-4 flex flex-col"
          >
            {/* Top content */}
            <div className="flex gap-4 mb-4">
              {/* Left Column */}
              <div className="w-1/2 aspect-3/4 bg-[#1a1a1a] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column */}
              <div className="w-1/2 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-[#c7a96b] mb-3 font-medium">
                  {item.role}
                </p>

                <div className="mb-4">
                  <span className=" text-[9px] lg:text-[12px] bg-linear-to-r from-[#8a6b3f] to-[#c7a96b] text-black px-2 py-1 rounded font-bold">
                    {item.experience}
                  </span>
                </div>

                <div
                  className="text-xs text-gray-300 space-y-2 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>

            {/* Bottom content */}
            <div className="mt-auto border px-4 py-3 border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] bg-black/20 rounded-xl">
              <p className="text-xs text-center text-gray-300">
                “{item.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

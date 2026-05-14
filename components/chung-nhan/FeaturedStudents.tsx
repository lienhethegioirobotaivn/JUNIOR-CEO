import { ChungNhanData } from "@/services/chung-nhan-service";
import Image from "next/image";

type FeaturedStudentsProps = Pick<ChungNhanData, "item_11">;

export function FeaturedStudents({ item_11 }: FeaturedStudentsProps) {
  return (
    <section className="bg-[#111] py-10 px-6 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-6 mb-12">
          <div className="hidden sm:flex items-center flex-1">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#f3d9a9]" />
            <span className="w-1.5 h-1.5 bg-[#f3d9a9] rotate-45 ml-3" />
          </div>

          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent uppercase">
            {item_11.title}
          </h2>

          <div className="hidden sm:flex items-center flex-1">
            <span className="w-1.5 h-1.5 bg-[#f3d9a9] rotate-45 mr-3" />
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#f3d9a9]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {item_11.students.map((student, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-5"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full blur-md bg-[#f3d9a9]/20 scale-110" />
                <div className="relative w-36 h-36 rounded-full border border-[#f3d9a9]/30 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-[#f3d9a9]/30">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:pt-3">
                <div className="flex flex-col items-center lg:block">
                  <h3 className="text-base md:text-lg font-bold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent leading-tight mb-1">
                    {student.name}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-2.5 font-light">
                    {student.description}
                  </p>
                </div>
                <div className="flex items-start gap-2 text-[11px] md:text-[13px] text-gray-400 leading-snug px-5 lg:px-0">
                  <p className="whitespace-pre-wrap">{student.achievements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

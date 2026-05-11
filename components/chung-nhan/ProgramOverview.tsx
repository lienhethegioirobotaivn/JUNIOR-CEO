import { ChungNhanData } from "@/services/chung-nhan-service";
import Image from "next/image";

type ProgramOverviewProps = Pick<
  ChungNhanData,
  "item_8" | "item_9" | "item_10"
>;

export function ProgramOverview({
  item_8,
  item_9,
  item_10,
}: ProgramOverviewProps) {
  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-yellow-900/30 rounded-2xl py-6 shadow-2xl">
          <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-2xl font-bold text-center uppercase mb-2">
            {item_8.title}
          </h2>
          <p className="text-center text-gray-400 text-sm mb-6 uppercase">
            {item_8.description}
          </p>
          <div className="space-y-2 px-4">
            {item_8.modules.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-linear-to-r from-[#1a1a1a] to-transparent lg:px-4 p-2 rounded-lg border border-yellow-900/10"
              >
                <div className="shrink-0 size-8 lg:size-10 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>

                <span className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-base font-bold w-6 shrink-0">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <span className="text-gray-300 text-sm font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111] border border-yellow-900/30 rounded-2xl py-6 flex flex-col items-center shadow-2xl">
          <div>
            <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-2xl font-bold text-center uppercase mb-2">
              {item_9.title}
            </h2>
            <p className="text-center text-gray-400 text-sm">
              {item_9.description}
            </p>
          </div>
          <div className="w-full h-fit rounded-xl overflow-hidden mt-2">
            <Image
              src={item_9.image}
              alt="Chung Nhan Image"
              width={500}
              height={700}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-[#111] border border-yellow-900/30 rounded-2xl p-6 shadow-2xl">
          <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-2xl font-bold text-center uppercase mb-2">
            {item_10.title}
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            {item_10.description}
          </p>
          <div className="space-y-10">
            {item_10.recognitions.map((item, index) => (
              <div key={index} className="flex gap-1 items-center">
                <div className="shrink-0 size-16 lg:size-18 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent font-bold text-base tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

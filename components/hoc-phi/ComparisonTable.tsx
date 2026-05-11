import { HocPhiData } from "@/services/hoc-phi-service";
import { Check, X } from "lucide-react";
import Image from "next/image";

type ComparisonTableProps = Pick<HocPhiData, "item_8">;

export function ComparisonTable({ item_8 }: ComparisonTableProps) {
  const plans = ["STANDARD", "PREMIUM", "ELITE"];

  const renderValue = (type: string, customText?: string) => {
    if (type === "✓")
      return (
        <Check className="size-6 font-bold text-[#f3d9a9] mx-auto" size={20} />
      );
    if (type === "X")
      return <X className="size-6 text-gray-400/70 mx-auto" size={20} />;
    if (type === "custom")
      return <span className="text-[#f3d9a9] text-sm">{customText}</span>;
    return null;
  };

  return (
    <section className="bg-black pt-12">
      <div className="mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden lg:block h-px w-50 bg-linear-to-r from-transparent to-[#f3d9a9]" />
          <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
            {item_8.title}
          </h2>
          <div className="hidden lg:block h-px w-50 bg-linear-to-l from-transparent to-[#f3d9a9]" />
        </div>

        <div className="overflow-x-auto border border-zinc-800 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border border-white/25">
                <th className="p-6 text-base lg:text-lg text-left bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent font-bold tracking-wider w-1/3">
                  QUYỀN LỢI
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className="border border-white/25 p-6 text-center bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent font-bold tracking-widest uppercase text-base lg:text-lg"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item_8.so_sanh_quyen_loi_cac_goi_hoc.map((item, idx) => (
                <tr
                  key={idx}
                  className="border border-white/25 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-2 flex items-center gap-4 text-zinc-300 text-sm lg:text-base">
                    <span className="text-[#f3d9a9]">
                      <div className="shrink-0 size-8 lg:size-12 flex items-center justify-center">
                        <Image
                          src={item.quyen_loi.icon}
                          alt={item.quyen_loi.text}
                          width={56}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </span>
                    {item.quyen_loi.text}
                  </td>

                  <td className="border border-white/25 p-4 text-center">
                    {renderValue(item.goi_standard, item.standard_custom_text)}
                  </td>

                  <td className="border border-white/25 p-4 text-center">
                    {renderValue(item.goi_premium, item.premium_custom_text)}
                  </td>

                  <td className="border border-white/25 p-4 text-center">
                    {renderValue(item.goi_elite, item.elite_custom_text)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

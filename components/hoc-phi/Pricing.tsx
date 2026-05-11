import { HocPhiData } from "@/services/hoc-phi-service";

type PricingProps = Pick<HocPhiData, "item_7">;

export function Pricing({ item_7 }: PricingProps) {
  return (
    <section className="bg-black text-white pt-12">
      <div className="mx-auto">
        {/* Header section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="hidden lg:block h-px w-50 bg-linear-to-r from-transparent to-[#f3d9a9]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
              {item_7.title}
            </h2>
            <div className="hidden lg:block h-px w-50 bg-linear-to-l from-transparent to-[#f3d9a9]" />
          </div>
          <p className="text-gray-300 text-sm md:text-base">
            {item_7.description}
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {item_7.tuition_package.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col items-center text-center ${
                plan.ispopular
                  ? "border-[#f3d9a9] bg-black shadow-[0_0_20px_rgba(212,175,55,0.2)] scale-103 z-10"
                  : "border-zinc-800 bg-[#0a0a0a]"
              }`}
            >
              {plan.ispopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-b from-[#f3d9a9] to-[#a67c37] text-black text-xs font-bold py-1 px-6 rounded-full whitespace-nowrap">
                  PHỔ BIẾN NHẤT
                </div>
              )}

              <div className="mb-4">
                <p className="text-lg tracking-widest font-semibold text-gray-300 block mb-0">
                  GÓI
                </p>
                <h3 className="text-4xl font-bold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm font-semibold uppercase bg-linear-to-br from-[#f3d9a9] to-[#b08137] bg-clip-text text-[#f3d9a9] lg:text-transparent">
                  {plan.slogan}
                </p>
              </div>

              <p className="text-gray-300 text-[13px] leading-relaxed mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
                    VNĐ
                  </span>
                </div>
                <div className="text-xs text-[#f3d9a9] mt-1">
                  / {plan.duration}
                </div>
              </div>

              <button className="mt-auto w-full group flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-linear-to-b from-[#f3d9a9] to-[#a67c37] text-black font-bold text-sm transition-all duration-200 ease-in-out hover:scale-103 cursor-pointer">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

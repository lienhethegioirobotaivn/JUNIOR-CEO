import { FAQData } from "@/services/faq-service";
import Image from "next/image";

type HeroProps = Pick<
  FAQData,
  "item_1" | "item_2" | "item_3" | "item_4" | "item_5"
>;

export function Hero({ item_1, item_2, item_3, item_4, item_5 }: HeroProps) {
  return (
    <section className="relative w-full lg:h-90 bg-black/80 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src={item_5}
          alt="Hero Background Image"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="relative mx-auto mt-6 lg:mt-0 grid lg:grid-cols-2 gap-5 items-center pl-2 lg:pl-8 lg:pr-38 z-10">
        <div className="px-6 lg:px-0 lg:pl-6 pb-2 space-y-3 mt-4">
          <p className="text-xl font-semibold bg-linear-to-br from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            {item_1}
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold bg-linear-to-b from-white/90 via-[#c7ae7f]/90 to-[#c19e59]/90 bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            {item_2}
          </h1>

          <p className="text-xl font-semibold bg-linear-to-br from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            {item_3}
          </p>

          <p className="text-white/85 text-sm lg:text-base transition-all duration-200 ease-in-out hover:scale-102">
            {item_4}
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { UserCircle } from "lucide-react";
import { TrangChuData } from "@/services/trang-chu-service";
import Link from "next/link";

type HighlightProps = Pick<
  TrangChuData["pageBy"]["trangchu"],
  "item35" | "item36" | "item37" | "item38" | "item39"
>;

export function Highlight({
  item35,
  item36,
  item37,
  item38,
  item39,
}: HighlightProps) {
  const peopleList = Object.values(item39.people || {}).filter(Boolean);

  return (
    <section className="bg-black py-8 sm:pt-2 lg:py-8 text-white">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-4 mb-6 text-xl sm:text-3xl lg:text-lg font-semibold lg:font-normal">
          <span>{item35.textLeft}</span>
          {item35.textMiddle && (
            <Link href={"/"}>
              <button className="h-full bg-linear-to-b from-[#d9a05b] to-[#8a5d2e] px-2 lg:px-6 py-1 lg:py-1 rounded-md font-bold text-black transition-all duration-200 ease-in-out hover:scale-[1.03] cursor-pointer">
                {item35.textMiddle}
              </button>
            </Link>
          )}
          <span className="text-center">{item35.textRight}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
          {/* Part 1 */}
          <div className="lg:col-span-2 flex bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative rounded-2xl shadow-[0_0_5px_rgba(245,210,122,0.5)] transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)]">
            <div className="w-2/5 relative">
              <Image
                src={item36.image.node.sourceUrl}
                alt={item36.image.node.altText}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </div>
            <div className="w-3/5 p-4 sm:p-6 lg:p-4">
              <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
                {item36.label}
              </h3>
              <p className="text-sm sm:text-lg lg:text-sm font-medium text-white/85 mb-3">
                {item36.subLabel}
              </p>
              <p className="text-sm sm:text-lg lg:text-sm text-gray-300">
                {item36.text}
              </p>
            </div>
          </div>

          {/* Part 2 */}
          <div className="lg:col-span-2 bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative shadow-[0_0_5px_rgba(245,210,122,0.5)] hover:scale-[1.03] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)] p-4 sm:p-6 lg:p-4 rounded-2xl bg-gray-900/50 transition-all duration-200 ease-in-out hover:scale-103">
            <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-4">
              {item37.label}
            </h3>
            <p className="text-sm sm:text-lg lg:text-sm font-medium text-white/85 mb-3">
              {item37.subLabel}
            </p>

            <div
              className="flex items-center gap-2 text-sm sm:text-lg lg:text-sm text-gray-300"
              dangerouslySetInnerHTML={{ __html: item37.text }}
            />
          </div>

          {/* Part 3 */}
          <div className="lg:col-span-3 flex bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative shadow-[0_0_5px_rgba(245,210,122,0.5)] hover:scale-[1.03] hover:shadow-[0_0_7px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)] rounded-2xl bg-gray-900/50 overflow-hidden transition-all duration-200 ease-in-out hover:scale-103">
            <div className="w-2/3 p-4 sm:p-6 lg:p-4">
              <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
                {item38.label}
              </h3>
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#D4AF37] to-[#F1C40F] text-sm sm:text-lg lg:text-sm mb-3">
                {item38.subLabel}
              </p>

              <div
                className="flex items-center gap-2 text-sm sm:text-lg lg:text-sm text-gray-300"
                dangerouslySetInnerHTML={{ __html: item38.text }}
              />
            </div>
            <div className="w-1/3 pr-1 pb-1 relative">
              <Image
                src={item38.image.node.sourceUrl}
                alt={item38.image.node.altText}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 33vw, 15vw"
              />
            </div>
          </div>

          {/* Part 4 */}
          <div className="lg:col-span-3 bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative shadow-[0_0_5px_rgba(245,210,122,0.5)] hover:scale-[1.03] hover:shadow-[0_0_7px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)] p-4 sm:p-6 lg:p-4 rounded-2xl bg-gray-900/50 transition-all duration-200 ease-in-out hover:scale-103">
            <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
              {item39.label}
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-lg lg:text-sm">
              {item39.subLabel}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {peopleList.map((person, i) => (
                <div key={i} className="text-center">
                  <div className="size-16 mx-auto rounded-full mb-2 overflow-hidden">
                    {person.avatar?.node?.sourceUrl ? (
                      <Image
                        src={person.avatar.node.sourceUrl}
                        alt={person.avatar.node.altText}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <UserCircle
                        size={40}
                        className="text-gray-400 size-full"
                      />
                    )}
                  </div>

                  <p className="text-xs text-[#D4AF37] font-bold">
                    {person.name}
                  </p>
                  <p className="text-[10px] text-gray-400">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

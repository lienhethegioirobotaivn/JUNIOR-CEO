import Image from "next/image";
import { UserCircle } from "lucide-react";
import { TrangChuData } from "@/services/trang-chu-service";
import Link from "next/link";

type HighlightProps = { type?: "default" | "landing" } & Pick<
  TrangChuData,
  "item_14"
>;

export function Highlight({ type = "default", item_14 }: HighlightProps) {
  return (
    <section className="bg-black py-8 sm:pt-2 lg:py-8 text-white">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-4 mb-6 text-xl sm:text-3xl lg:text-lg font-semibold lg:font-normal">
          <span>{item_14.title.text_left}</span>
          {item_14.title.button_middle && (
            <Link
              href={
                type === "default"
                  ? item_14.title.button_middle.endpoint
                  : "#hoc-phi"
              }
            >
              <button className="h-full bg-linear-to-b from-[#d9a05b] to-[#8a5d2e] px-2 lg:px-6 py-1 lg:py-1 rounded-md font-bold text-black transition-all duration-200 ease-in-out hover:scale-[1.03] cursor-pointer">
                {item_14.title.button_middle.text}
              </button>
            </Link>
          )}
          <span className="text-center">{item_14.title.text_right}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
          {/* Column 1 */}
          <div className="lg:col-span-2 flex bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative rounded-2xl shadow-[0_0_5px_rgba(245,210,122,0.5)] transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)]">
            <div className="w-2/5 relative">
              <Image
                src={item_14.column_1.image}
                alt={item_14.column_1.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 40vw, 20vw"
              />
            </div>
            <div className="w-3/5 p-4 sm:p-6 lg:p-4">
              <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
                {item_14.column_1.title}
              </h3>
              <p className="text-sm sm:text-lg lg:text-sm font-medium text-white/85 mb-3">
                {item_14.column_1.sub_title}
              </p>
              <p className="text-sm sm:text-lg lg:text-sm text-gray-300">
                {item_14.column_1.content}
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-2 bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative shadow-[0_0_5px_rgba(245,210,122,0.5)] hover:scale-[1.03] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)] p-4 sm:p-6 lg:p-4 rounded-2xl bg-gray-900/50 transition-all duration-200 ease-in-out hover:scale-103">
            <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-4">
              {item_14.column_2.title}
            </h3>
            <p className="text-sm sm:text-lg lg:text-sm font-medium text-white/85 mb-3">
              {item_14.column_2.sub_title}
            </p>

            <div className="flex items-center gap-2 text-sm sm:text-lg lg:text-sm text-gray-300 whitespace-pre-wrap">
              <p>{item_14.column_2.content}</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3 flex bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative shadow-[0_0_5px_rgba(245,210,122,0.5)] hover:scale-[1.03] hover:shadow-[0_0_7px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)] rounded-2xl bg-gray-900/50 overflow-hidden transition-all duration-200 ease-in-out hover:scale-103">
            <div className="w-2/3 p-4 sm:p-6 lg:p-4">
              <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
                {item_14.column_3.title}
              </h3>
              <p className="bg-clip-text text-transparent bg-linear-to-r from-[#D4AF37] to-[#F1C40F] text-sm sm:text-lg lg:text-sm mb-3">
                {item_14.column_3.sub_title}
              </p>

              <div className="flex items-center gap-2 text-sm sm:text-lg lg:text-sm text-gray-300 whitespace-pre-wrap">
                <p>{item_14.column_3.content}</p>
              </div>
            </div>
            <div className="w-1/3 pr-1 pb-1 relative">
              <Link href={"/chung-nhan"}>
                <Image
                  src={item_14.column_3.image}
                  alt={item_14.column_3.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 33vw, 15vw"
                />
              </Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-3 bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content,border-box border border-transparent relative shadow-[0_0_5px_rgba(245,210,122,0.5)] hover:scale-[1.03] hover:shadow-[0_0_7px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)] p-4 sm:p-6 lg:p-4 rounded-2xl bg-gray-900/50 transition-all duration-200 ease-in-out hover:scale-103">
            <h3 className="text-[#d4b075] font-bold text-lg sm:text-3xl lg:text-lg mb-1">
              {item_14.column_4.title}
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-lg lg:text-sm">
              {item_14.column_4.sub_title}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {item_14.column_4.teachers.map((person, i) => (
                <div key={i} className="text-center">
                  <div className="size-16 mx-auto rounded-full mb-2 overflow-hidden">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
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

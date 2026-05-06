import Image from "next/image";

export function Hero() {
  const Features = [
    {
      icon: "👥",
      text_1: "500+",
      text_2: "PHỤ HUYNH TIN TƯỞNG",
    },
    {
      icon: "⭐",
      text_1: "4.9/5",
      text_2: "ĐÁNH GIÁ TRUNG BÌNH",
    },
    {
      icon: "💬",
      text_1: "300+",
      text_2: "PHẢN HỒI TÍCH CỰC",
    },
    {
      icon: "🛡️",
      text_1: "95%",
      text_2: "PHỤ HUYNH GIỚI THIỆU LẠI",
    },
  ];

  return (
    <section className="relative w-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/phu-huynh-noi-gi/HeroImg.png"
          alt="Hero Background"
          fill
          className="hidden lg:block object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-8 pt-14 pb-10">
        <div className="lg:w-3/5">
          <div className="space-y-4">
            <p className="bg-linear-to-br from-[#f3e7d3] to-[#967941] bg-clip-text text-transparent text-sm md:text-lg font-bold uppercase">
              PHỤ HUYNH NÓI GÌ VỀ JUNIOR CEO
            </p>

            <h1 className="text-4xl md:text-[42px] font-bold uppercase">
              <span className="bg-linear-to-b from-[#f3e7d3] to-[#967941]/90 bg-clip-text text-transparent drop-shadow-2xl">
                NIỀM TIN HÔM NAY
              </span>
              <br />
              <span className="bg-linear-to-b from-[#f3e7d3] to-[#967941]/90 bg-clip-text text-transparent drop-shadow-2xl">
                TƯƠNG LAI RỰC RỠ CỦA CON
              </span>
            </h1>

            <div className="space-y-2 pt-2 lg:pr-32">
              <p className="text-gray-200 text-[15px] drop-shadow-sm">
                Hàng trăm phụ huynh đã lựa chọn Junior CEO để đồng hành cùng con
                trên hành trình phát triển tư duy lãnh đạo, bản lĩnh và kỹ năng
                kinh doanh từ sớm.
              </p>
              <p className="text-gray-200 text-[15px] drop-shadow-sm">
                Những phản hồi chân thực từ phụ huynh chính là minh chứng rõ
                ràng nhất cho giá trị mà chương trình mang lại.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 lg:w-[95%] mx-auto bg-black/5 backdrop-blur-md border border-white/20 rounded-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
            {Features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-5 px-4 transition-transform duration-300 hover:scale-105 
                  ${index !== Features.length - 1 ? "lg:border-r lg:border-white/20" : ""}`}
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-3xl">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="bg-linear-to-b from-[#f3e7d3] to-[#967941] bg-clip-text text-transparent font-bold text-2xl tracking-wide">
                    {item.text_1}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-tighter uppercase mt-1">
                    {item.text_2}
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

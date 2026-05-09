import Image from "next/image";

const FEATURES = [
  {
    icon: "🎓",
    title: "Giá trị toàn cầu",
    desc: "Chứng nhận được công nhận bởi Junior CEO",
  },
  {
    icon: "📊",
    title: "Kiến thức thực tiễn",
    desc: "Học qua dự án, case study và tình huống thực tế",
  },
  {
    icon: "🛡️",
    title: "Nền tảng tương lai",
    desc: "Bệ phóng vững chắc cho hành trình học tập và sự nghiệp",
  },
  {
    icon: "🎖️",
    title: "Giá trị vượt trội",
    desc: "Minh chứng năng lực và thành tích cá nhân",
  },
];

export function Hero() {
  return (
    <section className="relative bg-black text-white lg:overflow-hidden flex items-center min-h-fit">
      {/* Background Image Container (Desktop) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/chung-nhan/HeroImg.png"
          alt="Hero Background"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-12 lg:pt-8 lg:py-12 z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="space-y-4 order-2">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#c4aa79] transition-all duration-200 ease-in-out hover:scale-102">
            <span className="bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent text-base font-semibold uppercase pt-1">
              Chứng nhận danh giá
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-[40px] lg:text-6xl pt-1 font-bold uppercase bg-linear-to-br from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102 leading-tight lg:leading-14">
              Chứng nhận Mini MBA
            </h1>
            <p className="bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102 text-xl lg:text-[22px] font-semibold uppercase">
              Khởi đầu hành trình lãnh đạo tương lai
            </p>
          </div>

          <p className="text-zinc-300 text-base drop-shadow-md transition-all duration-200 ease-in-out hover:scale-102">
            Chứng nhận Mini MBA tại Junior CEO được thiết kế riêng cho học sinh
            10-17 tuổi, trang bị tư duy kinh doanh, kỹ năng lãnh đạo và chiến
            lược thực tiễn để dẫn đầu trong kỷ nguyên mới.
          </p>

          {/* MobileImg Container */}
          <div className="block lg:hidden relative w-full aspect-square order-1 border-2 border-white/20 rounded-2xl overflow-hidden">
            <Image
              src="/chung-nhan/MobileHeroImg.png"
              alt="Hero Mobile"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2 pb-8 lg:pb-0">
            {FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-2 lg:px-4 lg:py-3 rounded-2xl bg-white/5 border-2 border-white/20 hover:border-white/30 transition-all duration-200 ease-in-out hover:scale-104"
              >
                <span className="text-3xl lg:text-4xl mb-3">{item.icon}</span>
                <h4 className="text-[#f0ca85] text-[11px] lg:text-[14px] font-bold uppercase mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-zinc-300/80 text-[10px] lg:text-[11px] line-clamp-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

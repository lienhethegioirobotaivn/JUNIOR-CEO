import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock,
  Coins,
  MessageCircleMore,
  Sparkle,
} from "lucide-react";

const Stats = [
  { icon: Clock, firstParagraph: "3 THÁNG", secondParagraph: "CHƯƠNG TRÌNH" },
  {
    icon: BriefcaseBusiness,
    firstParagraph: "1 DỰ ÁN",
    secondParagraph: "THỰC TẾ",
  },
  { icon: Coins, firstParagraph: "KIẾM TIỀN", secondParagraph: "THẬT" },
];

export function Hero() {
  return (
    <section
      className="relative w-full bg-black text-white pt-12 pb-4 px-8 bg-cover lg:bg-center xl:bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/home/HeroImg.png')` }}
    >
      <div className="lg:flex mx-auto gap-12 items-center">
        <div className="w-full lg:w-[40%] space-y-4">
          {/* Top tag */}
          <div className="flex items-center justify-center lg:justify-normal gap-4 mb-3 lg:ml-2 transition-all duration-200 ease-in-out hover:scale-102">
            <Sparkle className="size-3 text-[#fce094] fill-current drop-shadow-[0_0_5px_rgba(252,224,148,0.8)]" />
            <div className="flex items-center w-fit py-2 px-3 bg-white/5 border border-white/30 rounded-full">
              <p className="p-2 lg:p-0 sm:text-xl lg:text-xs bg-linear-to-r from-[#d4b075] to-[#e8d0a9] bg-clip-text text-transparent font-semibold tracking-wider">
                CHƯƠNG TRÌNH ĐÀO TẠO DOANH NHÂN TRẺ
              </p>
            </div>
          </div>

          {/* Main title */}
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-6xl sm:text-8xl lg:text-7xl text-center lg:text-left font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-103">
              JUNIOR CEO
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center lg:text-left font-bold text-white transition-all duration-200 ease-in-out hover:scale-102">
              KHỞI NGHIỆP CÙNG CON
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg lg:text-md mt-2 transition-all duration-200 ease-in-out hover:scale-102">
              Chương trình giúp con học thật - làm thật - kiếm tiền thật thông
              qua dự án kinh doanh thực tế với doanh thu thật.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 lg:gap-3">
            {Stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center bg-[#1a1a1a] border border-[#3d3326] gap-2 lg:gap-3 p-1 lg:p-2 rounded-xl transition-all duration-200 ease-in-out hover:scale-105"
                >
                  <Icon className="text-[#e6c891]" />
                  <div className="flex flex-col justify-center">
                    <p className="text-[11px] sm:text-lg lg:text-sm font-semibold text-[#e6c891]">
                      {item.firstParagraph}
                    </p>
                    <p className="text-[9px] sm:text-[12px] lg:text-xs text-[#e6c891]/70">
                      {item.secondParagraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions buttons */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 h-11">
            <Link href="/dang-ky">
              <button className="flex justify-center w-full h-full font-semibold bg-linear-to-r from-[#d4b075] to-[#c59c5d] rounded-md text-black items-center gap-1 lg:gap-2 hover:opacity-90 whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
                <p className="text-sm sm:text-lg">ĐĂNG KÝ NGAY</p>
                <ArrowRight className="size-3 lg:size-4" />
              </button>
            </Link>
            <button className="py-1 px-2 border border-[#3d3326] rounded-md hover:bg-white/10 transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
              <div className="flex items-center justify-center gap-0 sm:gap-2 lg:gap-3 font-semibold">
                <p className="text-sm sm:text-lg">NHẬN TƯ VẤN 1:1</p>
                <MessageCircleMore className="size-4" />
              </div>
            </button>
          </div>

          {/* Target audience */}
          <div className="grid grid-cols-4 items-center transition-all duration-200 ease-in-out hover:scale-105 lg:mt-8">
            <div className="col-span-1">
              <Image
                src="/home/4PeopleHeads.png"
                alt="FourPeopleHeads"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="col-span-3">
              <p className="text-md sm:text-lg">Dành cho học sinh 10-17 tuổi</p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mx-auto mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:right-6 size-65 sm:size-90 lg:size-40 transition-all duration-200 ease-in-out hover:scale-105">
          <Image
            src="/home/HeroBadge.png"
            alt="HeroBadge"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

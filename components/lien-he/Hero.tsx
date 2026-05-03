import Image from "next/image";

const features = [
  {
    icon: "X",
    title: "TƯ VẤN TẬN TÂM",
    desc: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ",
  },
  {
    icon: "X",
    title: "PHẢN HỒI NHANH",
    desc: "Phản hồi trong vòng 24 giờ",
  },
  {
    icon: "X",
    title: "BẢO MẬT THÔNG TIN",
    desc: "Cam kết bảo mật tuyệt đối thông tin của bạn",
  },
  {
    icon: "X",
    title: "ĐỒNG HÀNH DÀI LÂU",
    desc: "Hỗ trợ xuyên suốt hành trình học tập",
  },
];

export function Hero() {
  return (
    <section className="w-full bg-black/80">
      <div className="mx-auto grid lg:grid-cols-2 gap-5 items-center">
        {/* LEFT */}
        <div className="px-6 lg:px-0 lg:pl-6 pt-8 pb-4">
          <p className="text-lg font-semibold bg-linear-to-b from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent mb-2 transition-all duration-200 ease-in-out hover:scale-102">
            LIÊN HỆ VỚI JUNIOR CEO
          </p>

          <h1 className="text-4xl sm:text-4xl lg:text-[40px] font-semibold py-2 bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            CHÚNG TÔI LUÔN SẴN SÀNG ĐỒNG HÀNH CÙNG BẠN
          </h1>

          <p className="text-gray-200 mt-2 text-sm transition-all duration-200 ease-in-out hover:scale-102">
            Junior CEO cam kết mang đến trải nghiệm học tập và phát triển tốt
            nhất cho thế hệ lãnh đạo tương lai. Đừng ngần ngại kết nối với chúng
            tôi để được tư vấn chi tiết.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center border border-[#c5a059]/40 rounded-xl px-2 py-2.5 bg-linear-to-b from-[#1a1a1a] to-black hover:border-[#c5a059] transition-all duration-200 ease-in-out hover:scale-104"
              >
                <div className="mb-2">
                  <p className="text-4xl text-[#e6d3a3]">{item.icon}</p>
                </div>
                <h3 className="text-xs font-semibold text-[#e6d3a3]">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-full">
          <Image
            src="/lien-he/LH1.png"
            alt="Junior CEO"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

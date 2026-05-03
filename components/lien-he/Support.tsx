export function Support() {
  const faqs = [
    {
      icon: "X",
      question: "Tôi có thể đến tham quan khi nào?",
      answer: "Thứ 2 - Thứ 7, từ 8:30 - 17:30 (Vui lòng đặt lịch trước)",
    },
    {
      icon: "X",
      question: "Tư vấn chương trình có mất phí không?",
      answer: "Hoàn toàn MIỄN PHÍ tư vấn và định hướng chương trình",
    },
    {
      icon: "X",
      question: "Làm sao để đăng ký khóa học?",
      answer: "Liên hệ tư vấn hoặc đăng ký trực tiếp qua website của chúng tôi",
    },
  ];

  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT: FAQ SUMMARY SECTION */}
        <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-4">
          <div className="mb-8">
            <h2 className="text-lg font-semibold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent uppercase mb-1">
              Câu hỏi thường gặp
            </h2>
            <p className="text-gray-400 text-base">
              Bạn có thể tìm thấy câu trả lời nhanh tại đây
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3 group">
                <div className="flex items-center gap-2">
                  <div className="size-9 flex items-center justify-center rounded-lg border border-[#a67c37]/30 text-[#f3d9a9] p-2 bg-black/40">
                    {faq.icon}
                  </div>
                  <h4 className="text-[#f3d9a9] text-sm font-semibold">
                    {faq.question}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: CTA SECTION */}
        <div className="lg:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-4 gap-2">
            <div className="size-18 flex items-center justify-center rounded-2xl bg-linear-to-br from-[#1a1a1a] to-black">
              <p className="text-[#f3d9a9] text-4xl">X</p>
            </div>

            <div className="col-span-3">
              <div className="flex flex-col z-10 space-y-3 mb-8">
                <h3 className="bg-linear-to-r from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent font-semibold text-sm md:text-base uppercase">
                  Sẵn sàng để trở thành nhà lãnh đạo tương lai?
                </h3>
                <p className="text-gray-300 text-xs">
                  Hãy liên hệ với chúng tôi ngay hôm nay!
                </p>
                <button className="relative z-10 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold uppercase text-xs text-black bg-linear-to-r from-[#f3d9a9] via-[#c9a35d] to-[#a67c37] hover:scale-[1.02] transition-transform shadow-lg shadow-[#a67c37]/10 cursor-pointer">
                  Đăng ký tư vấn miễn phí
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

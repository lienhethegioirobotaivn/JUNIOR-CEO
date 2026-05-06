"use client";

import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";

export function BottomBanner() {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  return (
    <section className="w-full bg-black mt-12 lg:mt-0">
      <div className="mx-auto relative overflow-hidden rounded-2xl border border-white/20 lg:border-none bg-linear-to-b from-[#0f0f0f] to-black p-4 lg:p-0">
        <div className="h-fit lg:h-100 flex flex-col lg:flex-row items-stretch">
          <div className="relative w-full bg-none lg:bg-[url('/phu-huynh-noi-gi/RegisterBanner.png')] lg:bg-cover lg:bg-no-repeat">
            <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-transparent via-black/10 to-black/70"></div>

            <div className="relative z-10 w-fit h-full px-6 sm:px-10 lg:px-12 lg:ml-[42%] flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 bg-linear-to-b from-[#f3e2c3] via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent">
                Con có thể là học viên tiếp theo!
              </h2>

              <p className="text-gray-200 text-sm md:text-base mb-8 max-w-md">
                Hãy để Junior CEO đồng hành cùng con trên hành trình trở thành
                nhà lãnh đạo bản lĩnh và tạo ra giá trị thật.
              </p>

              <button
                className="w-fit mx-auto lg:mx-0 group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold uppercase text-sm bg-linear-to-r from-[#e5cf90] via-[#c5a059] to-[#a17e3a] text-black transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer"
                onClick={openDialog}
              >
                ĐĂNG KÝ TƯ VẤN NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

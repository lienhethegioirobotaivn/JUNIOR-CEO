"use client";

import { useState, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Lock,
  ArrowRight,
} from "lucide-react";
import { TuVanData } from "@/services/tu-van-service";

type RegisterForConsultationProps = Pick<TuVanData, "item_7" | "item_8">;

const COURSES = ["Mini MBA", "CEO Toàn Diện", "Lãnh Đạo Kế Thừa", "Khác"];

const DATES = [
  { day: "Thứ 2", date: "24/06" },
  { day: "Thứ 3", date: "25/06" },
  { day: "Thứ 4", date: "26/06" },
  { day: "Thứ 5", date: "27/06" },
  { day: "Thứ 6", date: "28/06" },
  { day: "Thứ 7", date: "29/06" },
  { day: "CN", date: "30/06" },
];

const TIME_SLOTS = {
  morning: ["09:00", "10:30", "11:00"],
  afternoon: ["14:00", "15:30", "16:30"],
  evening: ["19:00", "20:00", "20:30"],
};

export function RegisterForConsultation({
  item_7,
  item_8,
}: RegisterForConsultationProps) {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, DATES.length - itemsPerView);

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((item) => item !== course)
        : [...prev, course],
    );
  };

  return (
    <div className="bg-[#050505] text-gray-200">
      <div className="mx-auto bg-[#0F0F0F] border border-[#C29555]/30 rounded-xl overflow-hidden shadow-2xl shadow-[#C29555]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#C29555]/20">
            <h2 className="text-3xl font-bold bg-linear-to-br from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-2 uppercase">
              {item_7.title}
            </h2>
            <p className="text-white/75 text-sm mb-8">{item_7.description}</p>

            <form className="space-y-5">
              <div className="space-y-4">
                <div className="relative">
                  <label className="text-xs text-white/75 block mb-1">
                    Họ và tên phụ huynh *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                    <input
                      type="text"
                      placeholder="Nhập họ và tên"
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Số điện thoại *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                      <input
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                      <input
                        type="email"
                        placeholder="Nhập email"
                        className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs text-white/75 block mb-1">
                    Họ và tên học viên
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                    <input
                      type="text"
                      placeholder="Nhập họ và tên học viên"
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Ngày sinh học viên
                    </label>
                    <input
                      type="date"
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 px-4 text-sm outline-none text-white/75"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Lớp / Khối *
                    </label>
                    <select className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 px-4 text-sm outline-none text-white/75">
                      <option>Chọn lớp</option>
                      <option>Lớp 1</option>
                      <option>Lớp 12</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-white/75">
                    Bạn quan tâm đến chương trình nào?
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {COURSES.map((course) => {
                      const isChecked = selectedCourses.includes(course);
                      return (
                        <label
                          key={course}
                          className="flex items-center space-x-2 cursor-pointer group"
                        >
                          <div
                            className={`size-4 border border-[#C29555] rounded flex items-center justify-center transition-colors ${isChecked ? "bg-[#C29555]" : "group-hover:bg-[#C29555]/20"}`}
                          >
                            {isChecked && (
                              <svg
                                className="size-3 text-black fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                              </svg>
                            )}
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={isChecked}
                              onChange={() => toggleCourse(course)}
                            />
                          </div>
                          <span className="text-xs text-gray-300">
                            {course}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs text-white/75 block mb-1">
                    Bạn muốn chuyên gia tư vấn về điều gì?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Nhập nội dung bạn quan tâm..."
                    className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 px-4 text-sm focus:border-[#C29555] outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <button className="w-full text-base lg:text-lg bg-linear-to-r from-[#C29555] to-[#8E6B3E] text-black font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all uppercase shadow-lg shadow-[#C29555]/20 cursor-pointer">
                Đăng ký tư vấn ngay <ArrowRight size={18} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 mt-4">
                <Lock size={12} className="text-[#C29555]" />
                Thông tin của bạn được bảo mật tuyệt đối.
              </div>
            </form>
          </div>

          {/* Right */}
          <div className="p-8 md:p-12 bg-[#0A0A0A]/50">
            <h2 className="text-3xl font-bold bg-linear-to-bl from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-2 uppercase text-center lg:text-left">
              {item_8.title}
            </h2>
            <p className="text-white/75 text-sm mb-8 text-center lg:text-left">
              {item_8.description}
            </p>

            <div className="relative flex items-center gap-2 mb-8">
              <button
                type="button"
                onClick={prev}
                className="p-2 border border-gray-600 rounded-full hover:border-[#C29555] transition-colors shrink-0 z-10 bg-[#0F0F0F] cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${index * (100 / itemsPerView)}%)`,
                  }}
                >
                  {DATES.map((item, idx) => (
                    <div
                      key={idx}
                      className="shrink-0 px-1"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <button
                        type="button"
                        className={`w-full flex flex-col items-center py-2 border rounded-lg transition-all border-black lg:border-white/60 bg-[#C29555] lg:bg-transparent hover:bg-[#C29555] text-black lg:text-white/60 hover:text-black lg:hover:font-bold  lg:hover:border-[#C29555]`}
                      >
                        <span className="text-[10px] font-semibold uppercase">
                          {item.day}
                        </span>
                        <span className="text-xs font-bold">{item.date}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={next}
                className="p-2 border border-gray-600 rounded-full hover:border-[#C29555] transition-colors shrink-0 z-10 bg-[#0F0F0F] cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {Object.entries(TIME_SLOTS).map(([session, times]) => (
                <div key={session} className="space-y-3">
                  <p className="text-sm font-bold text-[#C29555] uppercase">
                    Buổi{" "}
                    {session === "morning"
                      ? "Sáng"
                      : session === "afternoon"
                        ? "Chiều"
                        : "Tối"}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`py-2 text-sm rounded-md border transition-all border-black lg:border-white/60 text-black lg:text-white/60 bg-[#C29555] lg:bg-transparent hover:bg-[#C29555] hover:text-black font-bold hover:border-[#C29555]`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-[#C29555]/20 rounded-xl bg-linear-to-b from-[#111] to-[#050505]">
              <h3 className="text-center text-2xl font-bold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-6 uppercase">
                {item_8.consult_method.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {item_8.consult_method.methods.map((method, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="p-3 rounded-full mb-4 transition-all bg-gray-900 text-[#f3d9a9]">
                        <p className="text-2xl">{method.icon}</p>
                      </div>
                      <p className="text-sm font-bold mb-1 text-[#f3d9a9]">
                        {method.label}
                      </p>
                      <p className="text-xs text-gray-300">
                        {method.sub_label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useToastStore } from "@/store/useToastStore";
import { Phone, Mail, MapPin, Globe, Send, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const initialForm = {
  fullName: "",
  email: "",
  phoneNumber: "",
  topic: "",
  messageContent: "",
};

export function ContactForm() {
  const { showToast } = useToastStore();

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToFirstError = () => {
    const timer = setTimeout(() => {
      const firstErrorField = scrollContainerRef.current?.querySelector(
        ".border-red-500",
      ) as HTMLElement;

      if (firstErrorField && scrollContainerRef.current) {
        const fieldWrapper = firstErrorField.closest(
          ".space-y-1",
        ) as HTMLElement;
        if (fieldWrapper) {
          scrollContainerRef.current.scrollTo({
            top: fieldWrapper.offsetTop - 75,
            behavior: "smooth",
          });
          firstErrorField.focus({ preventScroll: true });
        }
      }
    }, 50);
    return () => clearTimeout(timer);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Vui lòng nhập đầy đủ họ tên";

    const phoneTrim = formData.phoneNumber.trim();
    if (!phoneTrim) {
      newErrors.phoneNumber = "Vui lòng nhập số điện thoại";
    } else if (!/^\d{10,11}$/.test(phoneTrim)) {
      newErrors.phoneNumber = "Số điện thoại không hợp lệ";
    }

    if (!formData.email) newErrors.email = "Vui lòng nhập email";

    if (!formData.topic) newErrors.topic = "Vui lòng chọn chủ đề";

    if (!formData.messageContent)
      newErrors.messageContent = "Vui lòng nhập nội dung tin nhắn";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldsChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (validate()) {
      try {
        // Api here
      } catch (error) {
        showToast("Error, Lỗi kết nối máy chủ");
        console.error(error);
      }
    } else {
      scrollToFirstError();
    }
  };

  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: CONTACT FORM */}
        <div className="lg:col-span-7 border border-white/10 rounded-2xl p-6 md:p-8 bg-[#0a0a0a]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 tracking-wide uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
            Gửi thông tin cho chúng tôi
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8">
            Điền thông tin vào biểu mẫu, chúng tôi sẽ liên hệ lại với bạn trong
            thời gian sớm nhất.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#f3d9a9] uppercase tracking-wider">
                Họ và tên *
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên của bạn"
                className={`w-full bg-black/50 border ${errors.fullName ? "border-red-500" : "border-white/10"} rounded-lg p-3 text-white placeholder:text-gray-600 focus:border-[#a67c37] outline-none transition-all`}
                value={formData.fullName}
                onChange={(e) => handleFieldsChange("fullName", e.target.value)}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#f3d9a9] uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className={`w-full bg-black/50 border ${errors.email ? "border-red-500" : "border-white/10"} rounded-lg p-3 text-white placeholder:text-gray-600 focus:border-[#a67c37] outline-none transition-all`}
                  value={formData.email}
                  onChange={(e) => handleFieldsChange("email", e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#f3d9a9] uppercase tracking-wider">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className={`w-full bg-black/50 border ${errors.phoneNumber ? "border-red-500" : "border-white/10"} rounded-lg p-3 text-white placeholder:text-gray-600 focus:border-[#a67c37] outline-none transition-all`}
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleFieldsChange("phoneNumber", e.target.value)
                  }
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#f3d9a9] uppercase tracking-wider">
                Chủ đề *
              </label>
              <div className="relative flex items-center">
                <select
                  className={`w-full bg-black/50 border ${errors.topic ? "border-red-500" : "border-white/10"} rounded-lg p-3 pr-10 text-gray-400 focus:border-[#a67c37] outline-none appearance-none transition-all`}
                  value={formData.topic}
                  onChange={(e) => handleFieldsChange("topic", e.target.value)}
                >
                  <option value="" className="bg-[#0a0a0a] text-white">
                    Chọn chủ đề quan tâm
                  </option>
                  {[
                    "Chủ đề 1",
                    "Chủ đề 2",
                    "Chủ đề 3",
                    "Chủ đề 4",
                    "Chủ đề 5",
                  ].map((topic) => (
                    <option
                      key={topic}
                      value={topic}
                      className="bg-[#0a0a0a] text-white"
                    >
                      {topic}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className={`absolute right-3 ${errors.topic ? "text-red-500" : "text-[#C29555]"} pointer-events-none`}
                  size={16}
                />
              </div>
              {errors.topic && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.topic}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#f3d9a9] uppercase tracking-wider">
                Nội dung tin nhắn *
              </label>
              <textarea
                rows={5}
                placeholder="Nhập nội dung bạn muốn gửi..."
                className={`w-full bg-black/50 border ${errors.messageContent ? "border-red-500" : "border-white/10"} rounded-lg p-3 text-white placeholder:text-gray-600 focus:border-[#a67c37] outline-none transition-all resize-none`}
                value={formData.messageContent}
                onChange={(e) =>
                  handleFieldsChange("messageContent", e.target.value)
                }
              />
              {errors.messageContent && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.messageContent}
                </p>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-black bg-linear-to-r from-[#f3d9a9] via-[#c9a35d] to-[#a67c37] hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
                Gửi thông tin <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="lg:col-span-5 border border-white/10 rounded-2xl p-6 md:p-8 bg-[#0a0a0a]">
          <h2 className="text-2xl font-bold mb-3 tracking-wide uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent">
            Thông tin liên hệ
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Kết nối với chúng tôi qua các kênh sau
          </p>

          <div className="space-y-8">
            {/* CONTACT ITEM */}
            <div className="flex gap-4 group">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-[#a67c37]/30 bg-linear-to-br from-[#1a1a1a] to-black group-hover:border-[#f3d9a9] transition-colors">
                <Phone className="text-[#f3d9a9]" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#f3d9a9] uppercase">
                  Hotline
                </p>
                <p className="text-white/80 font-medium text-lg">
                  0394 783 239
                </p>
                <p className="text-gray-500 text-xs">
                  (8:00 - 20:00, Thứ 2 - Thứ 7)
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-[#a67c37]/30 bg-linear-to-br from-[#1a1a1a] to-black group-hover:border-[#f3d9a9] transition-colors">
                <Mail className="text-[#f3d9a9]" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#f3d9a9] uppercase">
                  Email
                </p>
                <p className="text-white/80 font-medium">lienhe.JC@gmail.com</p>
                <p className="text-gray-500 text-xs">Phản hồi trong 24h</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-[#a67c37]/30 bg-linear-to-br from-[#1a1a1a] to-black group-hover:border-[#f3d9a9] transition-colors">
                <MapPin className="text-[#f3d9a9]" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#f3d9a9] uppercase">
                  Địa chỉ
                </p>
                <p className="text-white/80 font-medium">
                  123 Trương Định, phường Xuân Hòa, TPHCM
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-[#a67c37]/30 bg-linear-to-br from-[#1a1a1a] to-black group-hover:border-[#f3d9a9] transition-colors">
                <Globe className="text-[#f3d9a9]" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#f3d9a9] uppercase">
                  Website
                </p>
                <p className="text-white/80 font-medium">juniorceo.edu.vn</p>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <h3 className="text-xs font-bold text-[#f3d9a9] uppercase tracking-[0.2em] mb-6">
              Kết nối với chúng tôi
            </h3>
            <div className="flex gap-4">
              {[FaFacebook, FaYoutube, FaInstagram, FaLinkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#e3a737] transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

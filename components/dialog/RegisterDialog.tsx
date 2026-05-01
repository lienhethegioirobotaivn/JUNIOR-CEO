"use client";

import { useRef, useState } from "react";
import { X, User, Baby, Phone, ChevronDown, Send } from "lucide-react";
import { SiZalo } from "react-icons/si";
import { RiShieldStarLine } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import { useToastStore } from "@/store/useToastStore";

const initialForm = {
  parentName: "",
  childAge: "",
  phone: "",
  zalo: "",
  request: "",
};

export function RegisterDialog() {
  const { isDialogOpen, closeDialog } = useRegisterDialogStore();
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
    if (!formData.parentName.trim())
      newErrors.parentName = "Vui lòng nhập tên phụ huynh";
    if (!formData.childAge)
      newErrors.childAge = "Vui lòng chọn độ tuổi của con";

    const phoneTrim = formData.phone.trim();
    if (!phoneTrim) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^\d{10,11}$/.test(phoneTrim)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

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

  const handleCloseDialog = () => {
    setFormData(initialForm);
    setErrors({});
    closeDialog();
  };

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (validate()) {
      try {
        const response = await fetch("/api/send-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          showToast(
            "Đăng ký thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
            "success",
          );
          handleCloseDialog();
        } else {
          showToast("Đăng ký thất bại. Vui lòng thử lại sau.", "error");
          handleCloseDialog();
        }
      } catch (error) {
        showToast("Error, Lỗi kết nối máy chủ");
        console.error(error);
        handleCloseDialog();
      }
    } else {
      scrollToFirstError();
    }
  };

  if (!isDialogOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 transition-all duration-300 ${
        isDialogOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c29555;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8e6b3e;
        }
      `}</style>

      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isDialogOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleCloseDialog}
      />

      <div
        className={`relative w-full max-w-125 sm:max-w-150 max-h-[90vh] flex flex-col bg-[#0F0F0F] border border-[#C29555]/40 rounded-2xl shadow-[0_0_50px_1px_rgba(194,149,85,0.3)] overflow-hidden transition-all duration-300 ${
          isDialogOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div
          ref={scrollContainerRef}
          className="relative overflow-y-auto p-6 md:p-8 custom-scrollbar"
        >
          <button
            type="button"
            onClick={handleCloseDialog}
            className="absolute right-4 top-4 z-20 text-[#C29555] hover:text-[#C29555]/90 border border-[#C29555] rounded-full p-1.5 transition-colors bg-[#0F0F0F]/80 backdrop-blur-md cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col items-center mb-6 text-center">
            <div className="size-16 mb-3 flex items-center justify-center">
              <RiShieldStarLine className="text-[#C29555] w-14 h-16" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase bg-linear-to-b from-[#f3c06b] via-[#b07c33] to-[#6b441c] bg-clip-text text-transparent">
              ĐĂNG KÝ NGAY
            </h2>
            <p className="text-white text-base mt-1">
              Khởi đầu hành trình lãnh đạo tương lai của con bạn
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Tên Phụ Huynh */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-300">
                Tên Phụ Huynh <span className="text-[#C29555]">*</span>
              </label>
              <div className="relative group mt-1">
                <User
                  className="text-[#C29555] absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-[#C29555] transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) =>
                    handleFieldsChange("parentName", e.target.value)
                  }
                  placeholder="Nhập họ và tên của phụ huynh"
                  className={`w-full bg-[#1A1A1A] border ${errors.parentName ? "border-red-500" : "border-gray-800"} rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#C29555] transition-all`}
                />
              </div>
              {errors.parentName && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.parentName}
                </p>
              )}
            </div>

            {/* Độ tuổi của con */}
            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-300">
                Độ tuổi của con <span className="text-[#C29555]">*</span>
              </label>
              <div className="relative group mt-1">
                <Baby
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.childAge ? "text-red-500" : "text-[#C29555]"}`}
                  size={18}
                />
                <select
                  value={formData.childAge}
                  onChange={(e) =>
                    handleFieldsChange("childAge", e.target.value)
                  }
                  className={`w-full bg-[#1A1A1A] border ${errors.childAge ? "border-red-500" : "border-gray-800"} rounded-lg py-2.5 pl-10 pr-10 text-sm ${formData.childAge ? "text-white" : "text-gray-400"} appearance-none focus:outline-none focus:border-[#C29555] transition-all cursor-pointer`}
                >
                  <option value="">Chọn độ tuổi của con</option>
                  {[11, 12, 13, 14, 15, 16, 17].map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="text-[#C29555] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  size={16}
                />
              </div>
              {errors.childAge && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.childAge}
                </p>
              )}
            </div>

            {/* Số Điện Thoại */}
            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-300">
                Số Điện Thoại <span className="text-[#C29555]">*</span>
              </label>
              <div className="relative group mt-1">
                <Phone
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.phone ? "text-red-500" : "text-[#C29555]"}`}
                  size={18}
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleFieldsChange("phone", e.target.value)}
                  placeholder="Nhập số điện thoại"
                  className={`w-full bg-[#1A1A1A] border ${errors.phone ? "border-red-500" : "border-gray-800"} rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#C29555] transition-all`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>
              )}
            </div>

            {/* Zalo */}
            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-300">
                Zalo
              </label>
              <div className="relative group flex items-center mt-1">
                <SiZalo
                  className="text-[#C29555] absolute left-3 top-1/2 -translate-y-1/2"
                  size={18}
                />
                <input
                  type="text"
                  value={formData.zalo}
                  onChange={(e) => handleFieldsChange("zalo", e.target.value)}
                  placeholder="Nhập số Zalo (nếu có)"
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg py-2.5 pl-14 pr-4 text-sm text-white focus:outline-none focus:border-[#C29555] transition-all"
                />
              </div>
            </div>

            {/* Các yêu cầu và câu hỏi */}
            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-300">
                Các yêu cầu và câu hỏi
              </label>
              <textarea
                rows={4}
                maxLength={500}
                value={formData.request}
                onChange={(e) => handleFieldsChange("request", e.target.value)}
                placeholder="Nhập nội dung bạn quan tâm, yêu cầu hoặc câu hỏi..."
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg py-2.5 px-4 mt-1 text-sm text-white focus:outline-none focus:border-[#C29555] transition-all resize-none"
              />
              <p
                className={`text-right text-[10px] ${formData.request.length >= 500 ? "text-red-500" : "text-gray-600"}`}
              >
                {formData.request.length}/500
              </p>
            </div>

            {/* Button submit */}
            <button
              type="submit"
              className="w-full text-base lg:text-lg bg-linear-to-r from-[#C29555] to-[#8E6B3E] text-black font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all uppercase shadow-lg shadow-[#C29555]/20 cursor-pointer"
            >
              Gửi đăng ký <Send className="size-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-white text-sm pt-2">
              <span className="flex items-center gap-2">
                <IoIosLock className="text-[#C29555] size-5 lg:size-4 font-bold" />
                Thông tin của bạn được bảo mật tuyệt đối
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState, useCallback } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
};

export function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  return (
    <div
      className={`fixed top-5 right-5 z-100 transition-all duration-300 ease-in-out ${isExiting ? "opacity-0 translate-x-10 scale-95" : "animate-in fade-in slide-in-from-right-8"}`}
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-linear-to-r from-[#C5A35D] to-[#8E6E3A] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

        <div className="relative flex overflow-hidden items-center gap-4 bg-[#0F0F0F] border border-[#C5A35D]/30 p-4 rounded-lg shadow-2xl min-w-[320px]">
          <div className="shrink-0">
            {type === "success" ? (
              <CheckCircle2 className="w-6 h-6 text-[#C5A35D]" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-500" />
            )}
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-white tracking-wide leading-relaxed">
              {message}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="shrink-0 text-gray-400 hover:text-[#C5A35D] transition-colors relative z-10 cursor-pointer p-1"
          >
            <X className="w-4 h-4" />
          </button>

          <div
            className="absolute bottom-0 left-0 h-0.5 bg-[#C5A35D]"
            style={{
              animation: isExiting
                ? "none"
                : `shrink ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

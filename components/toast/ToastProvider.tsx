"use client";

import { Toast } from "@/components/toast";
import { useToastStore } from "@/store/useToastStore";

export function ToastProvider() {
  const { isVisible, message, type, duration, hideToast } = useToastStore();

  if (!isVisible) return null;

  return (
    <Toast
      message={message}
      type={type}
      duration={duration}
      onClose={hideToast}
    />
  );
}

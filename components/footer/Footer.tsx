"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { FooterData, FooterService } from "@/services/footer-service";

export function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FooterService.getFooterConfig();
        setFooterData(data);
      } catch (error) {
        console.error("Error while fetching Footer: ", error);
      }
    };

    fetchData();
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-black text-gray-300 pt-8 border-t border-white/30">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8">
        {/* Logo & Social */}
        <div className="lg:col-span-3 space-y-4">
          <Link href="/" className="flex items-center">
            <Image
              src={footerData.item1.image}
              alt="Logo"
              width={160}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed">{footerData.item1.text}</p>
          <div className="flex gap-4 pt-2">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#d4a76a] transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Explore */}
        <div className="lg:col-span-2">
          <h3 className="text-[#d4a76a] font-bold mb-6">
            {footerData.item2.title}
          </h3>
          <ul className="space-y-4 text-sm">
            {footerData.item2.links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.endpoint}
                  className="hover:text-[#d4a76a] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="lg:col-span-2">
          <h3 className="text-[#d4a76a] font-bold mb-6">
            {footerData.item3.title}
          </h3>
          <ul className="space-y-4 text-sm">
            {footerData.item3.links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.endpoint}
                  className="hover:text-[#d4a76a] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2 space-y-4 text-sm">
          <h3 className="text-[#d4a76a] font-bold mb-6">
            {footerData.item4.title}
          </h3>
          <div className="flex items-center gap-3">
            <Phone size={16} className="shrink-0" />{" "}
            {footerData.item4.phone_number}
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="shrink-0" />
            <span className="break-all">{footerData.item4.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe size={16} className="shrink-0" /> {footerData.item4.website}
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={16} className="shrink-0 mt-0.5" />
            {footerData.item4.address}
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="lg:col-span-3">
          <div className="bg-[#111] px-6 py-4 border border-[#222] rounded-lg w-full">
            <h3 className="text-[#d4a76a] font-bold mb-2">NHẬN BẢN TIN</h3>
            <p className="text-xs mb-4 text-gray-400">
              Cập nhật kiến thức & cơ hội đặc biệt dành riêng cho phụ huynh
            </p>
            <form className="flex w-full bg-[#0a0a0a] border border-[#333] p-1 rounded-md">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="bg-transparent w-full px-3 outline-none text-sm"
              />
              <button className="bg-[#d4a76a]/85 hover:bg-[#d4a76a] p-2 text-[#0a0a0a] rounded-sm cursor-pointer shrink-0">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-12 py-4 border-t border-[#1a1a1a]">
        © 2024 Junior CEO. All rights reserved.
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JUNIOR CEO",
  description:
    "Đào tạo CEO - Kinh doanh - Khởi nghiệp cho học viên từ 11-17 tuổi Đào tạo Thế hệ Kế cận",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${montserrat.className} font-main h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

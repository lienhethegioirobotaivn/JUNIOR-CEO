import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/toast";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp từ 11-17 tuổi",
  description:
    "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp từ 11-17 tuổi",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico",
  },
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
        <main className="min-h-screen">
          <ToastProvider />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

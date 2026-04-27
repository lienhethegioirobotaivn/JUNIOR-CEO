import { Metadata } from "next";
import {
  FeatureBar,
  Hero,
  Benefit,
  SevenModule,
  Roadmap,
  Highlight,
  ContactBanner,
} from "@/components/home";

export const metadata: Metadata = {
  title: "JUNIOR CEO",
  description: "Trang chủ Junior CEO",
};

export default function HomePage() {
  return (
    <div className="text-white space-y-4 pt-14 mb-10">
      <Hero />
      <div className="px-8 space-y-2">
        <FeatureBar />
        <Benefit />
        <SevenModule />
        <Roadmap />
        <Highlight />
      </div>
      <ContactBanner />
    </div>
  );
}

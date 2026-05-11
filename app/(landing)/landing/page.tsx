import { Metadata } from "next";
import { TrangChuService } from "@/services/trang-chu-service";
import {
  Benefit,
  ContactBanner,
  FeatureBar,
  Hero,
  Highlight,
  Roadmap,
  SevenModule,
} from "@/components/home";

export const metadata: Metadata = {
  title: "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp từ 14-17 tuổi",
  description:
    "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp cho học viên từ 14-17 tuổi",
};

export default async function Landing() {
  const data = await TrangChuService.getData();
  if (!data) return null;

  return (
    <div id="landing" className="text-white space-y-4 pt-14 mb-10">
      <Hero
        type="landing"
        item_1={data.item_1}
        item_2={data.item_2}
        item_3={data.item_3}
        item_4={data.item_4}
        item_5={data.item_5}
        item_6={data.item_6}
        item_7={data.item_7}
        item_8={data.item_8}
        item_9={data.item_9}
      />
      <div className="px-8 space-y-8">
        <FeatureBar item_10={data.item_10} />
        <section id="chuong-trinh">
          <Benefit item_11={data.item_11} />
          <SevenModule item_12={data.item_12} />
        </section>
        <Roadmap item_13={data.item_13} />
        <section id="giang-vien">
          <Highlight type="landing" item_14={data.item_14} />
        </section>
      </div>
      <section id="hoc-phi">
        <ContactBanner item_15={data.item_15} />
      </section>
    </div>
  );
}

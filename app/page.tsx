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
import { getTrangChu } from "@/services/trang-chu-service";

export const metadata: Metadata = {
  title: "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp từ 11-17 tuổi",
  description:
    "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp cho học viên từ 11-17 tuổi",
};

export default async function HomePage() {
  const { pageBy } = await getTrangChu();

  const data = pageBy.trangchu;

  return (
    <div className="text-white space-y-4 pt-14 mb-10">
      <Hero
        item1={data.item1}
        item2={data.item2}
        item3={data.item3}
        item4={data.item4}
        item5={data.item5}
        item6={data.item6}
        item7={data.item7}
        item8={data.item8}
        item9={data.item9}
        item10={data.item10}
        item11={data.item11}
        item12={data.item12}
      />
      <div className="px-8 space-y-8">
        <FeatureBar
          item13={data.item13}
          item14={data.item14}
          item15={data.item15}
          item16={data.item16}
        />
        <Benefit
          item17={data.item17}
          item18={data.item18}
          item19={data.item19}
          item20={data.item20}
          item21={data.item21}
          item22={data.item22}
        />
        <SevenModule
          item23={data.item23}
          item24={data.item24}
          item25={data.item25}
          item26={data.item26}
          item27={data.item27}
          item28={data.item28}
          item29={data.item29}
          item30={data.item30}
        />
        <Roadmap
          item31={data.item31}
          item32={data.item32}
          item33={data.item33}
          item34={data.item34}
        />
        <Highlight
          item35={data.item35}
          item36={data.item36}
          item37={data.item37}
          item38={data.item38}
          item39={data.item39}
        />
      </div>
      <ContactBanner item40={data.item40} item41={data.item41} />
    </div>
  );
}

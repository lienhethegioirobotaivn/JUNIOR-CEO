import {
  AdviseReason,
  ContactSupport,
  Hero,
  RegisterForConsultation,
} from "@/components/tu-van";
import { TuVanService } from "@/services/tu-van-service";

export default async function TuVan() {
  const data = await TuVanService.getData();
  if (!data) return null;

  return (
    <div className="text-white space-y-4 pt-14 mt-3 mb-10">
      <Hero
        item_1={data.item_1}
        item_2={data.item_2}
        item_3={data.item_3}
        item_4={data.item_4}
        item_5={data.item_5}
      />
      <div className="px-8 space-y-8">
        <AdviseReason item_6={data.item_6} />
        <RegisterForConsultation item_7={data.item_7} item_8={data.item_8} />
        <ContactSupport item_9={data.item_9} />
      </div>
    </div>
  );
}

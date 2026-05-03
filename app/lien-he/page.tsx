import { ContactForm, Hero, OfficeVisit, Support } from "@/components/lien-he";
import { LienHeService } from "@/services/lien-he-service";

export default async function LienHe() {
  const data = await LienHeService.getData();
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
        <ContactForm item_6={data.item_6} item_7={data.item_7} />
        <OfficeVisit item_8={data.item_8} item_9={data.item_9} />
        <Support item_10={data.item_10} item_11={data.item_11} />
      </div>
    </div>
  );
}

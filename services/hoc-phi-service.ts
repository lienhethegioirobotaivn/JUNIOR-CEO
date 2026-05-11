import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Advertisement {
  icon: string;
  text_1: string;
  text_2: string;
}

interface TuitionPackage {
  name: string;
  slogan: string;
  description: string;
  price: string;
  duration: string;
  ispopular: boolean;
}

interface Comparision {
  quyen_loi: {
    icon: string;
    text: string;
  };
  goi_standard: string;
  standard_custom_text?: string;
  goi_premium: string;
  premium_custom_text?: string;
  goi_elite: string;
  elite_custom_text?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Result {
  icon: string;
  title: string;
  description: string;
}

export interface HocPhiData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: {
    advertise: Advertisement[];
  };
  item_5: string;
  item_6: {
    content: string;
    cre: string;
  };
  item_7: {
    title: string;
    description: string;
    tuition_package: TuitionPackage[];
  };
  item_8: {
    title: string;
    so_sanh_quyen_loi_cac_goi_hoc: Comparision[];
  };
  item_9: {
    title: string;
    faq: FAQ[];
  };
  item_10: {
    title: string;
    result: Result[];
  };
  item_11: {
    text_1: string;
    text_2: string;
    phone_number: string;
  };
}

const SLUG = "hoc-phi";

export const HocPhiService = {
  async getData(): Promise<HocPhiData | null> {
    const data = await getACFDataBySlug<HocPhiData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_4: {
        ...data.item_4,
        advertise: Object.values(data.item_4.advertise || {}),
      },
      item_7: {
        ...data.item_7,
        tuition_package: Object.values(data.item_7.tuition_package || {}),
      },
      item_8: {
        ...data.item_8,
        so_sanh_quyen_loi_cac_goi_hoc: Object.values(
          data.item_8.so_sanh_quyen_loi_cac_goi_hoc || {},
        ),
      },
      item_9: {
        ...data.item_9,
        faq: Object.values(data.item_9.faq || {}),
      },
      item_10: {
        ...data.item_10,
        result: Object.values(data.item_10.result || {}),
      },
    };
  },
};

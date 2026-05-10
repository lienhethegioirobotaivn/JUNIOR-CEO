import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Reason {
  icon: string;
  title: string;
  description: string;
}

interface Method {
  icon: string;
  label: string;
  sub_label: string;
}

export interface TuVanData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: {
    features: Feature[];
  };
  item_5: string;
  item_6: {
    title: string;
    reasons: Reason[];
  };
  item_7: {
    title: string;
    description: string;
  };
  item_8: {
    title: string;
    description: string;
    consult_method: {
      title: string;
      methods: Method[];
    };
  };
  item_9: {
    title: string;
    description: string;
    phone: {
      icon: string;
      text_1: string;
      text_2: string;
    };
    email: {
      icon: string;
      text_1: string;
      text_2: string;
    };
    chat: {
      icon: string;
      text_1: string;
      text_2: string;
    };
  };
}
const SLUG = "tu-van";

export const TuVanService = {
  async getData(): Promise<TuVanData | null> {
    const data = await getACFDataBySlug<TuVanData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_4: {
        ...data.item_4,
        features: Object.values(data.item_4.features || {}),
      },
      item_6: {
        ...data.item_6,
        reasons: Object.values(data.item_6.reasons || {}),
      },
      item_8: {
        ...data.item_8,
        consult_method: {
          ...data.item_8.consult_method,
          methods: Object.values(data.item_8.consult_method?.methods || {}),
        },
      },
    };
  },
};

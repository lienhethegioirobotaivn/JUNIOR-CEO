import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Instructor {
  image: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  quote: string;
}

interface Category {
  icon: string;
  text: string;
}

interface Expert {
  image: string;
  name: string;
  role: string;
  company: string;
}

interface Method {
  icon: string;
  title: string;
  description: string;
}

export interface GiangVienData {
  item_1: {
    small_text: string;
    big_text: string;
  };
  item_2: string;
  item_3: string;
  item_4: {
    benefit: Benefit[];
  };
  item_5: string;
  item_6: {
    title: string;
    instructor: Instructor[];
  };
  item_7: {
    title: string;
    sub_title: string;
    category: Category[];
    expert: Expert[];
    note: string;
  };
  item_8: {
    title: string;
    method: Method[];
  };
}

const SLUG = "giang-vien";

export const GiangVienService = {
  async getData(): Promise<GiangVienData | null> {
    const data = await getACFDataBySlug<GiangVienData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_4: {
        ...data.item_4,
        benefit: Object.values(data.item_4?.benefit || {}),
      },
      item_6: {
        ...data.item_6,
        instructor: Object.values(data.item_6?.instructor || {}),
      },
      item_7: {
        ...data.item_7,
        category: Object.values(data.item_7?.category || {}),
        expert: Object.values(data.item_7?.expert || {}),
      },
      item_8: {
        ...data.item_8,
        method: Object.values(data.item_8?.method || {}),
      },
    };
  },
};

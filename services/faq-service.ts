import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Stat {
  icon: string;
  text_1: string;
  text_2: string;
}

interface QNA {
  question: string;
  answer: string;
}

interface FAQ {
  category: { icon: string; text: string };
  qna: QNA[];
}

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  button_text: string;
}

export interface FAQData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  item_5: string;
  item_6: {
    stats: Stat[];
  };
  item_7: {
    title: string;
    description: string;
    sub_title: string;
    faq: FAQ[];
  };
  item_8: {
    title: string;
    description: string;
    contact_method: {
      direct: ContactMethod;
      online: ContactMethod;
      email: ContactMethod;
    };
  };
}

const SLUG = "faq";

export const FAQService = {
  async getData(): Promise<FAQData | null> {
    const data = await getACFDataBySlug<FAQData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_6: {
        ...data.item_6,
        stats: Object.values(data.item_6?.stats || {}),
      },
      item_7: {
        ...data.item_7,
        faq: Object.values(data.item_7?.faq || {}).map((category) => ({
          ...category,
          qna: Object.values(category.qna || {}),
        })),
      },
    };
  },
};

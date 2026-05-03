import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface Commitment {
  icon: string;
  title: string;
  description: string;
}

interface VisitHighlight {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  icon: string;
  question: string;
  answer: string;
}

export interface LienHeData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: Commitment[];
  item_5: string;
  item_6: {
    title: string;
    description: string;
    chu_de: string[];
  };
  item_7: {
    title: string;
    description: string;
    hotline: {
      content: string;
      description: string;
    };
    email: {
      content: string;
      description: string;
    };
    address: string;
    website: string;
    social_media_links: {
      link_facebook: string;
      link_youtube: string;
      link_instagram: string;
      link_linkedin: string;
    };
  };
  item_8: string;
  item_9: {
    title: string;
    description: string;
    visit_highlight: VisitHighlight[];
  };
  item_10: {
    title: string;
    description: string;
    faq: FAQ[];
  };
  item_11: {
    icon: string;
    title: string;
    description: string;
  };
}

const SLUG = "lien-he";

export const LienHeService = {
  async getData(): Promise<LienHeData | null> {
    const data = await getACFDataBySlug<LienHeData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_4: Object.values(data.item_4 || {}),
      item_6: {
        ...data.item_6,
        chu_de: Object.values(data.item_6.chu_de || {}),
      },
      item_9: {
        ...data.item_9,
        visit_highlight: Object.values(data.item_9.visit_highlight || {}),
      },
      item_10: {
        ...data.item_10,
        faq: Object.values(data.item_10.faq || {}),
      },
    };
  },
};

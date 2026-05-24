import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface TinTucData {
  hero: {
    background_image: string;
    title: string;
    sub_title: string;
  };
  expert_perspectives: {
    title: string;
    description: string;
  };
  newsletter: {
    text_1: string;
    text_2: string;
  };
}

const SLUG = "tin-tuc";

export const TinTucService = {
  async getData(): Promise<TinTucData | null> {
    const data = await getACFDataBySlug<TinTucData>(SLUG);

    if (!data) return null;

    return {
      ...data,
    };
  },
};

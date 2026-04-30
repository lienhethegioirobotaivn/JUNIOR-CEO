import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface FooterLinks {
  label: string;
  endpoint: string;
}

export interface FooterRawResponse {
  item_1: {
    image: string;
    text: string;
  };
  item_2: {
    title: string;
    [key: string]: string | FooterLinks;
  };
  item_3: {
    title: string;
    [key: string]: string | FooterLinks;
  };
  item_4: {
    title: string;
    phone_number: string;
    email: string;
    website: string;
    address: string;
  };
}

export interface FooterData {
  item1: {
    image: string;
    text: string;
  };
  item2: {
    title: string;
    links: FooterLinks[];
  };
  item3: {
    title: string;
    links: FooterLinks[];
  };
  item4: {
    title: string;
    phone_number: string;
    email: string;
    website: string;
    address: string;
  };
}

export const FooterService = {
  getFooterConfig: async (): Promise<FooterData | null> => {
    const data = await getACFDataBySlug<FooterRawResponse>("footer");

    if (!data) return null;

    const item2Raw = data.item_2;
    const item3Raw = data.item_3;

    const item2Title = item2Raw.title;
    const item3Title = item3Raw.title;

    const item2Links = Object.keys(item2Raw)
      .filter((key) => key.startsWith("link_"))
      .map((key) => item2Raw[key] as FooterLinks);
    const item3Links = Object.keys(item3Raw)
      .filter((key) => key.startsWith("link_"))
      .map((key) => item3Raw[key] as FooterLinks);

    return {
      item1: {
        image: data.item_1.image,
        text: data.item_1.text,
      },
      item2: {
        title: item2Title,
        links: item2Links,
      },
      item3: {
        title: item3Title,
        links: item3Links,
      },
      item4: data.item_4,
    };
  },
};

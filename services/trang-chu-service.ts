import { getACFDataBySlug } from "@/lib/wp-rest-api";

interface FeatureIconText1Text2 {
  icon: string;
  text_1: string;
  text_2: string;
}

interface Button {
  text: string;
  endpoint: string;
}

interface FeatureIconTitleDescription {
  icon: string;
  title: string;
  description: string;
}

interface Module {
  icon: string;
  text: string;
}

interface Roadmap {
  icon: string;
  title: string;
  content: string;
}

interface Teacher {
  image: string;
  name: string;
  role: string;
}

export interface TrangChuData {
  item_1: string;
  item_2: string;
  item_3: string;
  item_4: string;
  item_5: {
    features: FeatureIconText1Text2[];
  };
  item_6: {
    buttons: {
      button_1: Button;
      button_2: Button;
    };
  };
  item_7: {
    image: string;
    text: string;
  };
  item_8: string;
  item_9: string;
  item_10: {
    features: FeatureIconTitleDescription[];
  };
  item_11: {
    title: string;
    features: FeatureIconTitleDescription[];
    image: string;
  };
  item_12: {
    title: string;
    modules: Module[];
  };
  item_13: {
    title: string;
    roadmap: Roadmap[];
  };
  item_14: {
    title: {
      text_left: string;
      button_middle: Button;
      text_right: string;
    };
    column_1: {
      image: string;
      title: string;
      sub_title: string;
      content: string;
    };
    column_2: {
      title: string;
      sub_title: string;
      content: string;
    };
    column_3: {
      image: string;
      title: string;
      sub_title: string;
      content: string;
    };
    column_4: {
      title: string;
      sub_title: string;
      teachers: Teacher[];
    };
  };
  item_15: {
    left: {
      background_image: string;
      text_1: string;
      text_2: string;
      buttons: {
        button_1: Button;
        button_2: Button;
      };
    };
    right: {
      background_image: string;
      phone: {
        icon: string;
        text: string;
      };
      website: {
        icon: string;
        text: string;
      };
      zalo: {
        icon: string;
        text: string;
      };
    };
  };
}

const SLUG = "trang-chu";

export const TrangChuService = {
  async getData(): Promise<TrangChuData | null> {
    const data = await getACFDataBySlug<TrangChuData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      item_5: {
        ...data.item_5,
        features: Object.values(data.item_5?.features || {}),
      },
      item_10: {
        ...data.item_10,
        features: Object.values(data.item_10?.features || {}),
      },
      item_11: {
        ...data.item_11,
        features: Object.values(data.item_11?.features || {}),
      },
      item_12: {
        ...data.item_12,
        modules: Object.values(data.item_12?.modules || {}),
      },
      item_13: {
        ...data.item_13,
        roadmap: Object.values(data.item_13?.roadmap || {}),
      },
      item_14: {
        ...data.item_14,
        column_4: {
          ...data.item_14.column_4,
          teachers: Object.values(data.item_14?.column_4.teachers || {}),
        },
      },
    };
  },
};

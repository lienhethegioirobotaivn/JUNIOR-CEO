export interface Blog {
  id: number;
  date: string;
  modified: string;
  slug: string;

  title: {
    rendered: string;
  };

  post_views?: number | string;

  acf: {
    author: {
      avatar: string;
      name: string;
      role: string;
    };
    image: string;
    description: string;
    content: string;
    hashtag: string[];
    topic: string;
  };
}

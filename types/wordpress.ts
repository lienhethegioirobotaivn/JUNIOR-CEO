export interface Blog {
  id: number;
  slug: string;

  title: {
    rendered: string;
  };

  acf: {
    image: string;
    description: string;
    content: string;
    hashtag: string[];
  };
}

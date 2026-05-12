export interface Blog {
  id: number;
  date: string;
  modified: string;
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

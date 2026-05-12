import { Blog } from "@/types/wordpress";

interface WordPressPage<T> {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: T;
}

const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;

export async function getACFDataBySlug<T>(slug: string): Promise<T | null> {
  if (!REST_URL) {
    console.error("Error: NEXT_PUBLIC_WP_REST_URL is missing in .env");
    return null;
  }

  try {
    const res = await fetch(`${REST_URL}/pages?slug=${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`Error occurred while fetching page: ${slug}`);

    const data: WordPressPage<T>[] = await res.json();

    if (data.length === 0) return null;

    return data[0].acf;
  } catch (error) {
    console.error(`WordPress API Error (${slug}):`, error);
    return null;
  }
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${REST_URL}/blog`, {
      next: {
        revalidate: 60,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error);

    return [];
  }
}

export async function getBlog(params: string): Promise<Blog | null> {
  const slug = await params;

  const res = await fetch(`${REST_URL}/blog?slug=${slug}`);

  if (!res.ok) return null;

  const data = await res.json();

  const blog = Array.isArray(data) ? data[0] : data;

  return blog;
}

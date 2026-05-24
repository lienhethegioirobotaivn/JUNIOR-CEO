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

async function wpFetch<T>(endpoint: string, retries = 3): Promise<T | null> {
  if (!REST_URL) {
    console.error("Error: NEXT_PUBLIC_WP_REST_URL is missing in .env");

    return null;
  }

  for (let i = 0; i < retries; i++) {
    try {
      // console.log(`WP FETCH: ${endpoint}`);

      const res = await fetch(`${REST_URL}${endpoint}`, {
        next: {
          revalidate: 60,
        },
      });

      if (!res.ok) {
        console.error(`WP FETCH FAILED: ${endpoint} - ${res.status}`);

        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.error(`WP FETCH ERROR (${endpoint}) - RETRY ${i + 1}:`, error);

      if (i === retries - 1) {
        return null;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return null;
}

export async function getACFDataBySlug<T>(slug: string): Promise<T | null> {
  const data = await wpFetch<WordPressPage<T>[]>(`/pages?slug=${slug}`);

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return data[0]?.acf ?? null;
}

export async function getBlogs(): Promise<Blog[]> {
  const data = await wpFetch<Blog[]>("/blog");

  return Array.isArray(data) ? data : [];
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const data = await wpFetch<Blog[]>(`/blog?slug=${slug}`);

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return data[0] ?? null;
}

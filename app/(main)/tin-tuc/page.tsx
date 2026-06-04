import {
  Hero,
  CategoryFilter,
  NewsGrid,
  Pagination,
  Sidebar,
  Newsletter,
} from "@/components/tin-tuc";
// import { getBlogs } from "@/lib/wp-rest-api";
import { TinTucService } from "@/services/tin-tuc-service";
import type { Blog } from "@/types/wordpress";

export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageData = await TinTucService.getData();
  if (!pageData) return null;

  // const blogs = await getBlogs();

  const params = await searchParams;

  const REST_URL = process.env.NEXT_PUBLIC_WP_REST_URL;
  if (!REST_URL) {
    throw new Error("NEXT_PUBLIC_WP_REST_URL is missing in .env");
  }

  const currentPage = Number(params.page) || 1;

  const currentCategory =
    typeof params.category === "string"
      ? decodeURIComponent(params.category)
      : "Tất cả";

  const itemPerPage = 6;

  async function getNews(): Promise<{
    posts: Blog[];
    totalPages: number;
  }> {
    try {
      const apiUrl = `${REST_URL}/blog?_embed&per_page=100`;

      const res = await fetch(apiUrl, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch blog");

      const data: Blog[] = await res.json();

      if (!Array.isArray(data)) {
        return {
          posts: [],
          totalPages: 0,
        };
      }

      let filteredNews = data;

      if (currentCategory !== "Tất cả") {
        filteredNews = data.filter(
          (post) =>
            post.acf?.topic?.toLowerCase().trim() ===
            currentCategory.toLowerCase().trim(),
        );
      }

      const totalPages = Math.ceil(filteredNews.length / itemPerPage);

      const startIndex = (currentPage - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;

      return {
        posts: filteredNews.slice(startIndex, endIndex),
        totalPages,
      };
    } catch (error) {
      console.error(error);

      return {
        posts: [],
        totalPages: 0,
      };
    }
  }

  async function getMostViewedNews(): Promise<Blog[]> {
    try {
      const postsRes = await fetch(`${REST_URL}/blog?_embed&per_page=100`, {
        cache: "no-store",
      });

      if (!postsRes.ok) {
        throw new Error("Failed to fetch posts");
      }

      const posts: Blog[] = await postsRes.json();

      if (!posts.length) {
        return [];
      }

      const postsWithViews = await Promise.all(
        posts.map(async (post) => {
          const wpUrl = process.env.NEXT_PUBLIC_WP_URL;
          if (!wpUrl) {
            throw new Error("NEXT_PUBLIC_WP_URL is missing in .env");
          }

          try {
            const viewsRes = await fetch(
              `${wpUrl}/wp-json/post-views-counter/get-post-views/${post.id}`,
              {
                cache: "no-store",
              },
            );

            const viewsData = await viewsRes.json();

            return {
              ...post,
              post_views: Number(viewsData || 0),
            };
          } catch {
            return {
              ...post,
              post_views: 0,
            };
          }
        }),
      );

      return postsWithViews
        .sort((a, b) => (b.post_views || 0) - (a.post_views || 0))
        .slice(0, 5);
    } catch (error) {
      console.error("Sidebar views error:", error);

      return [];
    }
  }

  const [{ posts: postsToDisplay, totalPages }, mostViewedPosts] =
    await Promise.all([getNews(), getMostViewedNews()]);

  return (
    // <main className="min-h-screen bg-[#050505] py-20">
    //   <div className="container mx-auto px-6 lg:px-16">
    //     <header className="relative mb-16 overflow-hidden rounded-4xl border border-[#c5a47e]/15 bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] px-8 py-16 text-center lg:px-16">
    //       <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-[#c5a47e]/50 to-transparent" />

    //       <div className="relative z-10 mx-auto max-w-4xl">
    //         <span className="mb-5 inline-flex rounded-full border border-[#c5a47e]/20 bg-[#c5a47e]/10 px-8 py-2 text-sm font-medium tracking-wide text-[#f9e3ad] uppercase">
    //           Junior CEO
    //         </span>

    //         <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-transparent md:text-6xl bg-linear-to-br from-[#f9e3ad] via-[#d1b06b] to-[#b88a44] bg-clip-text">
    //           Tin tức & thông tin mới nhất
    //         </h1>

    //         <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
    //           Cập nhật xu hướng giáo dục, kinh doanh, kỹ năng và những góc nhìn
    //           thực tế dành cho thế hệ trẻ hiện đại.
    //         </p>
    //       </div>

    //       <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#c5a47e]/5 blur-[90px]" />
    //     </header>

    //     <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
    //       {blogs.map((blog) => (
    //         <BlogCard key={blog.slug} blog={blog} />
    //       ))}
    //     </section>
    //   </div>
    // </main>
    <main className="min-h-screen py-16">
      <Hero hero={pageData.hero} />
      <main className="container mx-auto px-4 md:px-8 py-10">
        <CategoryFilter currentCategory={currentCategory} />
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-8">
          <div className="lg:col-span-5">
            <NewsGrid posts={postsToDisplay} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
          <aside className="lg:col-span-2">
            <Sidebar mostViewedPosts={mostViewedPosts} />
          </aside>
        </div>
      </main>
      <Newsletter newsletter={pageData.newsletter} />
    </main>
  );
}

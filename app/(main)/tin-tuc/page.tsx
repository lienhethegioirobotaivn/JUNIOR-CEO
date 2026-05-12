import { BlogCard } from "@/components/tin-tuc/BlogCard";
import { getBlogs } from "@/lib/wp-rest-api";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-[#050505] py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <header className="relative mb-16 overflow-hidden rounded-4xl border border-[#c5a47e]/15 bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] px-8 py-16 text-center lg:px-16">
          <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-[#c5a47e]/50 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-5 inline-flex rounded-full border border-[#c5a47e]/20 bg-[#c5a47e]/10 px-8 py-2 text-sm font-medium tracking-wide text-[#f9e3ad] uppercase">
              Junior CEO
            </span>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-transparent md:text-6xl bg-linear-to-br from-[#f9e3ad] via-[#d1b06b] to-[#b88a44] bg-clip-text">
              Tin tức & thông tin mới nhất
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              Cập nhật xu hướng giáo dục, kinh doanh, kỹ năng và những góc nhìn
              thực tế dành cho thế hệ trẻ hiện đại.
            </p>
          </div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#c5a47e]/5 blur-[90px]" />
        </header>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </section>
      </div>
    </main>
  );
}

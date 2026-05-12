import Image from "next/image";
import Link from "next/link";
import { getBlog, getBlogs } from "@/lib/wp-rest-api";
import { notFound } from "next/navigation";
import { CornerUpLeft } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "404 Not found",
    };
  }

  return {
    title: blog.title.rendered,
    description: blog.title.rendered || blog.acf?.description,
    openGraph: {
      images: [blog.acf?.image || ""],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog || !blog.slug) {
    notFound();
  }

  const blogs = await getBlogs();

  const currentTags = blog.acf?.hashtag || [];

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .map((item) => {
      const tags = item.acf?.hashtag || [];

      const matchedCount = tags.filter((tag: string) =>
        currentTags.includes(tag),
      ).length;

      return {
        ...item,
        matchedCount,
      };
    })
    .filter((item) => item.matchedCount > 0)
    .sort((a, b) => b.matchedCount - a.matchedCount)
    .slice(0, 4);

  return (
    <main className="bg-[#050505] mt-4 py-20 px-6 lg:px-16">
      <Link href={"/tin-tuc"}>
        <div className="flex gap-2 border border-white/20 bg-white/5 w-fit mb-6 px-4 py-2 rounded-full transition-all duration-200 hover:scale-102">
          <CornerUpLeft className="text-[#e8c579]" />
          <h1 className="bg-linear-to-b from-[#f3e7d3] to-[#ac8b4a] bg-clip-text text-transparent text-lg font-semibold">
            Tin tức
          </h1>
        </div>
      </Link>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8 items-start">
          <div className="relative bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#c5a47e]/20 rounded-2xl py-12 px-8 md:px-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#c5a47e]/50 to-transparent" />

            <header className="mb-10 border-b border-[#c5a47e]/10 pb-8">
              <h1
                className="text-3xl md:text-4xl leading-tight font-bold mb-6 bg-linear-to-br from-[#f9e3ad] via-[#d1b06b] to-[#b88a44] bg-clip-text text-transparent"
                dangerouslySetInnerHTML={{
                  __html: blog.title?.rendered || "",
                }}
              />

              {blog.acf?.description && (
                <p className="text-[#c5a47e] text-lg italic leading-relaxed opacity-90">
                  {blog.acf.description}
                </p>
              )}

              {!!blog.acf?.hashtag?.length && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {blog.acf.hashtag.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-[#c5a47e]/10 hover:bg-[#c5a47e] border border-[#c5a47e]/20 hover:border-[#c5a47e/40] text-[#f9e3ad] hover:text-[#f5f2eb] text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <section className="prose prose-invert max-w-none">
              <div
                className="text-zinc-300 text-base lg:text-[17px] leading-snug whitespace-pre-wrap
                selection:bg-[#c5a47e] selection:text-black
                [&_h2]:text-[#d1b06b] [&_h2]:text-2xl [&_h2]:font-semibold
                [&_strong]:text-[#f9e3ad]
                [&_a]:text-[#d1b06b]
                hover:[&_a]:text-[#f9e3ad]
                [&_img]:w-full
                [&_img]:h-auto
                [&_img]:rounded-2xl
                [&_img]:my-4
                [&_img]:object-cover"
                dangerouslySetInnerHTML={{
                  __html: blog.acf?.content || "",
                }}
              />
            </section>

            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#c5a47e]/5 blur-[60px] rounded-full -z-10" />
          </div>

          <aside>
            <div className="bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#c5a47e]/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#f9e3ad]">
                  Bài viết liên quan
                </h2>

                <div className="w-12 h-px bg-[#c5a47e]/40" />
              </div>

              <div className="space-y-5">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/tin-tuc/${item.slug}`}
                    className="group block"
                  >
                    <article className="rounded-2xl overflow-hidden border border-[#c5a47e]/10 bg-[#111111] hover:border-[#c5a47e]/30 transition-all duration-300">
                      {item.acf?.image && (
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.acf.image}
                            alt={item.title?.rendered || ""}
                            width={600}
                            height={400}
                            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="p-5">
                        <h3
                          className="text-white font-semibold leading-snug line-clamp-3 group-hover:text-[#f9e3ad] transition-colors duration-300"
                          dangerouslySetInnerHTML={{
                            __html: item.title?.rendered || "",
                          }}
                        />

                        {item.acf?.description && (
                          <p className="text-zinc-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                            {item.acf.description}
                          </p>
                        )}

                        {!!item.acf?.hashtag?.length && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {item.acf.hashtag.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="text-xs text-[#c5a47e] hover:text-[#e0b98b]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

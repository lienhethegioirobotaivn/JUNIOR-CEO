import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/types/wordpress";

interface Props {
  blog: Blog;
}

export function BlogCard({ blog }: Props) {
  return (
    <Link href={`/tin-tuc/${blog.slug}`} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#c5a47e]/15 bg-linear-to-b from-[#1a1a1a] to-[#0b0b0b] transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a47e]/40">
        <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-[#c5a47e]/50 to-transparent" />

        {blog.acf.image && (
          <div className="relative h-60 overflow-hidden">
            <Image
              src={blog.acf.image}
              alt={blog.title.rendered}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          {!!blog.acf?.hashtag?.length && (
            <div className="mb-4 flex items-center gap-2 overflow-hidden">
              <div className="flex gap-2 overflow-hidden">
                {blog.acf.hashtag.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 rounded-full border border-[#c5a47e]/20 bg-[#c5a47e]/10 px-3 py-1 text-xs font-medium text-[#f9e3ad]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {blog.acf.hashtag.length > 2 && (
                <span className="shrink-0 rounded-full border border-[#c5a47e]/20 bg-[#c5a47e]/10 px-3 lg:px-4 py-1 text-xs font-medium text-[#f9e3ad]">
                  . . .
                </span>
              )}
            </div>
          )}

          <h2
            className="mb-4 line-clamp-2 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#f9e3ad]"
            dangerouslySetInnerHTML={{
              __html: blog.title.rendered,
            }}
          />

          <p className="line-clamp-4 text-sm leading-relaxed text-zinc-400">
            {blog.acf.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#d1b06b]">
            <span>Xem chi tiết</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#c5a47e]/5 blur-[70px]" />
      </article>
    </Link>
  );
}

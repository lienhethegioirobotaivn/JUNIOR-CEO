import type { Blog } from "@/types/wordpress";
import Image from "next/image";

export function Content({ post }: { post: Blog }) {
  return (
    <div className="container mx-auto border border-white/20 bg-[#0f0f0f] p-4 lg:p-8 rounded-lg">
      <div>
        <div className="relative overflow-hidden mb-12">
          <section className="prose prose-invert max-w-none">
            <div className="w-full mb-6">
              <Image
                src={post.acf.image}
                alt="Thumbnail Image"
                width={1200}
                height={700}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
            <div
              className="text-white/80 text-base lg:text-[17px] leading-snug whitespace-pre-wrap text-justify
                [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-semibold
                [&_strong]:text-white
                [&_b]:text-white/90
                [&_b]:text-lg
                [&_b]:lg:text-[18px]
                [&_a]:text-blue-500
                hover:[&_a]:text-blue-600
                [&_img]:w-full
                [&_img]:h-auto
                [&_img]:rounded-2xl
                [&_img]:object-cover
                [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:border [&_table]:border-white/20 [&_table]:text-left [&_table]:overflow-x-auto [&_table]:block lg:[&_table]:table
                [&_th]:border [&_th]:border-white/20 [&_th]:bg-white/10 [&_th]:p-3 [&_th]:lg:p-4 [&_th]:font-semibold [&_th]:text-white
                [&_td]:border [&_td]:border-white/20 [&_td]:p-3 [&_td]:lg:p-4 [&_td]:text-white/80
                [&_tr]:even:bg-white/2"
              dangerouslySetInnerHTML={{
                __html: post.acf?.content || "",
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

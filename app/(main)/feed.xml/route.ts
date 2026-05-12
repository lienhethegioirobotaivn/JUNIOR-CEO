import { getBlogs } from "@/lib/wp-rest-api";

export async function GET() {
  const blogs = await getBlogs();

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Junior CEO</title>
      <link>https://juniorceo.edu.vn</link>

      ${blogs
        .map(
          (blog) => `
          <item>
            <title><![CDATA[${blog.title.rendered}]]></title>
            <link>
              https://juniorceo.edu.vn/tin-tuc/${blog.slug}
            </link>
            <pubDate>
              ${new Date(blog.date).toUTCString()}
            </pubDate>
          </item>
        `,
        )
        .join("")}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

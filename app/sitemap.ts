import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.BASEURL!;

  const routes = [""];
  const staticPages = routes.map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  /*
  const dummyPosts = [
    { id: "1", slug: "khoa-hoc-ceo-nhi", updatedAt: "2024-03-20" },
    { id: "2", slug: "kinh-doanh-tu-tuoi-11", updatedAt: "2024-03-21" },
  ];

  const dynamicPages = dummyPosts.map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  */

  return staticPages;
  //return [...staticPages, ...dynamicPages];
}

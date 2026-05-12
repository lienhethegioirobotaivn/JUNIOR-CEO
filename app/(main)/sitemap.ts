import { MetadataRoute } from "next";
import { getBlogs } from "@/lib/wp-rest-api";

const STATIC_ROUTES = [
  "/",
  "/chuong-trinh",
  "/giang-vien",
  "/hoc-phi",
  "/phu-huynh-noi-gi",
  "/faq",
  "/lien-he",
  "/chung-nhan",
  "/pitching-day",
  "/tu-van",
  "/tin-tuc",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.BASEURL;
  if (!baseURL) {
    throw new Error("BASEURL variable is missing in .env");
  }

  const staticPages = STATIC_ROUTES.map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  let dynamicPages: MetadataRoute.Sitemap = [];

  try {
    const blogs = await getBlogs();

    dynamicPages = blogs.map((blog) => ({
      url: `${baseURL}/tin-tuc/${blog.slug}`,
      lastModified: blog.modified ? new Date(blog.modified) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error while creating dynamic sitemap", error);
  }

  return [...staticPages, ...dynamicPages];
}

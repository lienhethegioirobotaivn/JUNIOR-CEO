"use client";

import { useEffect } from "react";

export function PostViewTracker({ postId }: { postId: number }) {
  useEffect(() => {
    const NEXT_PUBLIC_WP_URL = process.env.NEXT_PUBLIC_WP_URL;
    if (!NEXT_PUBLIC_WP_URL) {
      throw new Error("NEXT_PUBLIC_WP_URL is missing in .env");
    }

    async function updateViews() {
      try {
        const res = await fetch(
          `${NEXT_PUBLIC_WP_URL}/wp-json/post-views-counter/view-post/${postId}`,
          {
            method: "POST",
          },
        );

        const data = await res.json();

        console.log("view updated:", data);
      } catch (error) {
        console.error("view update error:", error);
      }
    }

    updateViews();
  }, [postId]);

  return null;
}

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://chrxsjung.me";
  const now = new Date();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

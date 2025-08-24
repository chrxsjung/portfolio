// app/sitemap.js
export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://chrxsjung.me";
  const now = new Date().toISOString();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // add real pages as you create them:
    // { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: `${base}/contact`,  lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}

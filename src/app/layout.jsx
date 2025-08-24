import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Chris Jung | Portfolio",
  description:
    "Chris Jung — Aspiring Software Engineer and Computer Science student at the University at Buffalo.",
  keywords: [
    "Portfolio",
    "Chris Jung",
    "Christopher Jung",
    "Software Engineer",
    "Computer Science",
    "University at Buffalo",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Supabase",
    "Portfolio Website",
    "UB",
    "UB CSE",
    "UB Computer Science",
    "UB Computer Science and Engineering",
    "UB Computer Science and Engineering Portfolio",
  ],
  authors: [{ name: "Chris Jung" }],
  openGraph: {
    title: "Chris Jung | Portfolio",
    description:
      "Chris Jung — Aspiring Software Engineer and Computer Science student at the University at Buffalo.",
    url: "https://chrxsjung.me",
    siteName: "Chris Jung Portfolio",
    images: [
      {
        url: "https://chrxsjung.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chris Jung Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Jung | Portfolio",
    description:
      "Chris Jung — Aspiring Software Engineer and Computer Science student at the University at Buffalo.",
    images: ["https://chrxsjung.me/og-image.png"],
  },
  alternates: {
    canonical: "https://chrxsjung.me",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

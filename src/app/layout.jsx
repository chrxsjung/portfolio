import "./globals.css";

import { Radio_Canada, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://chrxsjung.me"),
  title: "Chris Jung | Portfolio",
  description:
    "Chris Jung — Aspiring Software Engineer and Computer Science student at the University at Buffalo.",
  keywords: [
    "Chris Jung",
    "portfolio",
    "software engineer",
    "University at Buffalo",
    "React",
    "Next.js",
    "full stack",
  ],
  authors: [{ name: "Chris Jung" }],
  creator: "Chris Jung",
  publisher: "Chris Jung",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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

const radioCanada = Radio_Canada({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${radioCanada.className} ${roboto.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Chris Jung - Portfolio",
  description:
    "Aspiring Software Engineer and Computer Science student at University at Buffalo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
